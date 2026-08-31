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

import basetype.common.BasTest;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayCopyWithin01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayCopyWithin01Test extends BasTest {

    @Test
    void testUint8ArrayCopyWithin01_001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 2, 4);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_003() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(3, 0);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(10, arr.get(3));
    assertEqualInt(20, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_004() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(3, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(10, arr.get(3));
    assertEqualInt(20, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 3, 3);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(5, 0);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_008() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 4, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(2, 0, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_011() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_012() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(1, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_013() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(2, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_014() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(4, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(10, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_015() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(5, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_016() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(6, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_017() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(100, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_018() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-1, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(10, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_019() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-2, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(10, arr.get(3));
    assertEqualInt(20, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_020() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-3, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_021() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-4, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_022() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-5, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_023() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-6, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_024() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(-100, 0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_025() {
    Uint8Array arr = new Uint8Array(new int[] {10});
    Uint8Array ret = arr.copyWithin(0, 0);
    assertEqual(1, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin01_026() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20});
    Uint8Array ret = arr.copyWithin(1, 0);
    assertEqual(2, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin01_027() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4});
    Uint8Array ret = arr.copyWithin(0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(4, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_028() {
    Uint8Array arr = new Uint8Array(new int[] {255, 254, 253, 252, 251});
    Uint8Array ret = arr.copyWithin(0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(253, arr.get(0));
    assertEqualInt(252, arr.get(1));
    assertEqualInt(251, arr.get(2));
    assertEqualInt(252, arr.get(3));
    assertEqualInt(251, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_029() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255, 128, 64, 32});
    Uint8Array ret = arr.copyWithin(1, 3);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(64, arr.get(1));
    assertEqualInt(32, arr.get(2));
    assertEqualInt(64, arr.get(3));
    assertEqualInt(32, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_030() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(1, 0, 4);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(30, arr.get(3));
    assertEqualInt(40, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_031() {
    Uint8Array arr = new Uint8Array();
    Uint8Array ret = arr.copyWithin(0, 0, 0);
    assertEqual(0, arr.length());
    assertEqual(arr, ret);
    }

    @Test
    void testUint8ArrayCopyWithin01_032() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_033() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 1, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(50, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_034() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 2, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_035() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 3, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_036() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 5, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_037() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 6, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_038() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 100, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -1, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(50, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -2, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_041() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -3, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -4, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(40, arr.get(2));
    assertEqualInt(50, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -5, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -6, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, -100, 5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 0);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 1);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_048() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 3);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_049() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 6);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_050() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 100);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, -1);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, -5);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_053() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, -6);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, -100);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_055() {
    Uint8Array arr = new Uint8Array(new int[] {100, 200, 255});
    Uint8Array ret = arr.copyWithin(0, 1);
    assertEqual(3, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(200, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    }

    @Test
    void testUint8ArrayCopyWithin01_056() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 0x02);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_057() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 0x05);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_058() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0, 0, 0});
    Uint8Array ret = arr.copyWithin(0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_059() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255, 255, 255});
    Uint8Array ret = arr.copyWithin(0, 2);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    assertEqualInt(255, arr.get(3));
    assertEqualInt(255, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin01_060() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array ret = arr.copyWithin(0, 0, 02);
    assertEqual(5, arr.length());
    assertEqual(arr, ret);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    assertEqualInt(50, arr.get(4));
    }
}
