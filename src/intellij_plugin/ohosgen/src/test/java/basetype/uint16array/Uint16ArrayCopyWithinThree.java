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

package basetype.uint16array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayCopyWithinThree —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayCopyWithinThree extends BasTest {

    @Test
    void testUint16ArrayCopyWithinThree011() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(2, 0, 0);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree012() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(4, 0, 2);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree013() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 4);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree014() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(-4, 2);
    assertEqualInt(3, arr.at(0));
    assertEqualInt(4, arr.at(1));
    }

    @Test
    void testUint16ArrayCopyWithinThree015() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(2, -4, -2);
    assertEqualInt(1, arr.at(2));
    assertEqualInt(2, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree016() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(1, 0, -4);
    assertEqualInt(2, arr.at(1));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree017() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, 1, 5);
    assertEqualInt(2, arr.at(0));
    assertEqualInt(5, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree018() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(4, 0, 3);
    assertEqualInt(4, arr.at(3));
    assertEqualInt(1, arr.at(4));
    }

    @Test
    void testUint16ArrayCopyWithinThree019() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(-2, 1, 4);
    assertEqualInt(2, arr.at(3));
    assertEqualInt(3, arr.at(4));
    }

    @Test
    void testUint16ArrayCopyWithinThree020() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(0, -2);
    assertEqualInt(4, arr.at(0));
    assertEqualInt(5, arr.at(1));
    }

    @Test
    void testUint16ArrayCopyWithinThree021() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.copyWithin(2, 0, -1);
    assertEqualInt(1, arr.at(2));
    assertEqualInt(3, arr.at(4));
    }

    @Test
    void testUint16ArrayCopyWithinThree022() {
    Uint16Array arr = Uint16Array.of(9);
    Uint16Array result = arr.copyWithin(0, 0, 1);
    assertEqual(arr, result);
    assertEqualInt(9, arr.at(0));
    }

    @Test
    void testUint16ArrayCopyWithinThree023() {
    Uint16Array arr = new Uint16Array();
    Uint16Array result = arr.copyWithin(0, 0);
    assertEqual(arr, result);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArrayCopyWithinThree024() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(1, 2);
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint16ArrayCopyWithinThree025() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array view = new Uint16Array(buffer, 2, 4);
    view.set(new Uint16Array(new int[] {1, 2, 3, 4}));
    view.copyWithin(1, 2);
    assertEqual(2, view.byteOffset());
    }

    @Test
    void testUint16ArrayCopyWithinThree026() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {10, 20, 30, 40, 50, 60}));
    Uint16Array view = new Uint16Array(buffer, 2, 4);
    view.copyWithin(0, 2);
    assertEqualInt(40, all.at(1));
    assertEqualInt(50, all.at(2));
    }

    @Test
    void testUint16ArrayCopyWithinThree027() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {10, 20, 30, 40, 50, 60}));
    Uint16Array view = new Uint16Array(buffer, 4, 3);
    view.copyWithin(1, 0, 2);
    assertEqualInt(30, all.at(3));
    assertEqualInt(40, all.at(4));
    }

    @Test
    void testUint16ArrayCopyWithinThree028() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(20, 0, 2);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree029() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 20);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree030() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 2, 20);
    assertEqualInt(3, arr.at(0));
    assertEqualInt(4, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree031() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(-20, 2);
    assertEqualInt(3, arr.at(0));
    assertEqualInt(4, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree032() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(2, -20, 2);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(1, arr.at(2));
    assertEqualInt(2, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree033() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(1, 0, -20);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    }

    @Test
    void testUint16ArrayCopyWithinThree034() {
    Uint16Array backing = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array first = new Uint16Array(backing.buffer(), 2, 3);
    Uint16Array second = new Uint16Array(backing.buffer(), 4, 3);
    first.copyWithin(1, 0, 2);
    assertEqualInt(20, backing.at(2));
    assertEqualInt(30, backing.at(3));
    assertEqualInt(20, second.at(0));
    assertEqualInt(30, second.at(1));
    assertEqualInt(50, second.at(2));
    }
}
