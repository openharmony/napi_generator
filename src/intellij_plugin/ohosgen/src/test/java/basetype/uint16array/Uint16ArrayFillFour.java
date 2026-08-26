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
import basetype.common.DataView;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFillFour —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFillFour extends BasTest {

    @Test
    void testUint16ArrayFillFour027() {
    Uint16Array all = Uint16Array.of(1, 2, 3, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    view.fill(9);
    assertEqual(1, all.at(0));
    assertEqual(9, all.at(1));
    assertEqual(9, all.at(2));
    assertEqual(4, all.at(3));
    }

    @Test
    void testUint16ArrayFillFour028() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.fill(9, 1, 1);
    assertEqual(1, arr.at(0));
    assertEqual(2, arr.at(1));
    assertEqual(3, arr.at(2));
    }

    @Test
    void testUint16ArrayFillFour029() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.fill(9, 10);
    assertEqual(1, arr.at(0));
    assertEqual(3, arr.at(2));
    }

    @Test
    void testUint16ArrayFillFour030() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.fill(8, 1, 3);
    assertEqual(1, arr.at(0));
    assertEqual(8, arr.at(1));
    assertEqual(8, arr.at(2));
    assertEqual(4, arr.at(3));
    }

    @Test
    void testUint16ArrayFillFour031() {
    Uint16Array backing = Uint16Array.of(11, 22, 33, 44);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 2);
    Uint16Array result = view.fill(-2);
    DataView dataView = new DataView(backing.buffer());
    assertEqual(view, result);
    assertEqual(65534, dataView.getUint16(2, true));
    assertEqual(65534, dataView.getUint16(4, true));
    assertEqual(11, backing.at(0));
    assertEqual(44, backing.at(3));
    }

    @Test
    void testUint16ArrayFillFour032() {
    Uint16Array all = Uint16Array.of(10, 20, 30, 40);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    view.fill(99, 0, 1);
    assertEqual(99, view.at(0));
    assertEqual(30, view.at(1));
    assertEqual(10, all.at(0));
    assertEqual(99, all.at(1));
    assertEqual(30, all.at(2));
    assertEqual(40, all.at(3));
    }

    @Test
    void testUint16ArrayFillFour033() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer, 0, 2);
    Uint16Array second = new Uint16Array(buffer, 4, 2);
    first.fill(111);
    second.fill(222);
    first.fill(333);
    assertEqual(333, first.at(0));
    assertEqual(333, first.at(1));
    assertEqual(222, second.at(0));
    assertEqual(222, second.at(1));
    }

    @Test
    void testUint16ArrayFillFour034() {
    Uint16Array backing = Uint16Array.of(11, 22, 33, 44);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 0);
    Uint16Array result = view.fill(42);
    assertEqual(view, result);
    assertEqual(0, view.length());
    assertEqual(11, backing.at(0));
    assertEqual(22, backing.at(1));
    assertEqual(33, backing.at(2));
    assertEqual(44, backing.at(3));
    }
}
