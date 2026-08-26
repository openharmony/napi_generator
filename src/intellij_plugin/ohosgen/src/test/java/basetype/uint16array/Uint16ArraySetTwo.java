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
import basetype.common.RangeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArraySetTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArraySetTwo extends BasTest {

    @Test
    void testUint16ArraySetTwo051() {
    Uint16Array all = Uint16Array.of(1, 2, 3, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    view.set(0, 20);
    assertEqual(20, all.at(1));
    }

    @Test
    void testUint16ArraySetTwo052() {
    Uint16Array all = Uint16Array.of(1, 2, 3, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    all.set(2, 30);
    assertEqual(30, view.at(1));
    }

    @Test
    void testUint16ArraySetTwo053() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer, 0, 3);
    Uint16Array second = new Uint16Array(buffer, 2, 3);
    first.set(1, 55);
    assertEqual(55, second.at(0));
    }

    @Test
    void testUint16ArraySetTwo054() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    view.set(1, 77);
    Uint16Array all = new Uint16Array(buffer);
    assertEqual(77, all.at(3));
    }

    @Test
    void testUint16ArraySetTwo055() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(1, 0);
    assertEqual(0, arr.at(1));
    assertEqual(3, arr.length());
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16ArraySetTwo056() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array view = new Uint16Array(buffer, 2, 3);
    view.set(0, 65535);
    assertEqual(65535, view.at(0));
    assertEqual(2, view.byteOffset());
    }

    @Test
    void testUint16ArraySetTwo057() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(0, 11);
    arr.set(2, 33);
    assertEqual(11, arr.at(0));
    assertEqual(0, arr.at(1));
    assertEqual(33, arr.at(2));
    }

    @Test
    void testUint16ArraySetTwo058() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(0, 1234);
    DataView view = new DataView(buffer);
    assertEqual(1234, view.getUint16(0, true));
    }

    @Test
    void testUint16ArraySetTwo059() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(1, 4321);
    DataView view = new DataView(buffer);
    assertEqual(4321, view.getUint16(2, true));
    }

    @Test
    void testUint16ArraySetTwo060() {
    ArrayBuffer buffer = new ArrayBuffer(2);
    Uint16Array first = new Uint16Array(buffer);
    Uint16Array second = new Uint16Array(buffer);
    first.set(0, 8.9);
    assertEqual(8, second.at(0));
    }

    @Test
    void testUint16ArraySetTwo061() {
    ArrayBuffer buffer = new ArrayBuffer(2);
    Uint16Array first = new Uint16Array(buffer);
    Uint16Array second = new Uint16Array(buffer);
    first.set(0, -2);
    assertEqual(65534, second.at(0));
    }

    @Test
    void testUint16ArraySetTwo062() {
    ArrayBuffer buffer = new ArrayBuffer(2);
    Uint16Array first = new Uint16Array(buffer);
    Uint16Array second = new Uint16Array(buffer);
    first.set(0, 65538);
    assertEqual(2, second.at(0));
    }

    @Test
    void testUint16ArraySetTwo063() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    DataView dataView = new DataView(buffer, 4, 4);
    Uint16Array typedView = new Uint16Array(buffer, 4, 2);
    dataView.setUint16(0, 0x1234, true);
    assertEqual(0x1234, typedView.at(0));
    typedView.set(1, 0xABCD);
    assertEqual(0xABCD, dataView.getUint16(2, true));
    assertEqual(0, new Uint16Array(buffer).at(1));
    assertEqual(0, new Uint16Array(buffer).at(4));
    }

    @Test
    void testUint16ArraySetTwo064() {
    Uint16Array backing = Uint16Array.of(10, 20, 30, 40);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 2);
    try {
    view.set(2, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(40, backing.at(3));
    assertEqual(2, view.length());
    }
}
