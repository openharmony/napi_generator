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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayConstructorFour —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayConstructorFour extends BasTest {

    @Test
    void testUint16ArrayConstructorFour020() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer);
    Uint16Array second = new Uint16Array(buffer);
    first.set(2, 42);
    assertEqual(42, second.at(2));
    }

    @Test
    void testUint16ArrayConstructorFour021() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer, 0, 3);
    Uint16Array second = new Uint16Array(buffer, 2, 3);
    first.set(1, 77);
    assertEqual(77, second.at(0));
    }

    @Test
    void testUint16ArrayConstructorFour022() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer, 0, 2);
    Uint16Array second = new Uint16Array(buffer, 4, 2);
    first.set(1, 55);
    assertEqual(0, second.at(0));
    }

    @Test
    void testUint16ArrayConstructorFour023() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array view = new Uint16Array(buffer, 8);
    assertEqual(0, view.length());
    }

    @Test
    void testUint16ArrayConstructorFour024() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array view = new Uint16Array(buffer, 6, 1);
    assertEqual(1, view.length());
    assertEqual(6, view.byteOffset());
    }

    @Test
    void testUint16ArrayConstructorFour025() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array view = new Uint16Array(buffer, 4, 0);
    assertEqual(0, view.length());
    assertEqual(4, view.byteOffset());
    }

    @Test
    void testUint16ArrayConstructorFour026() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array view = new Uint16Array(buffer, 4, 3);
    assertEqual(6, view.byteLength());
    }

    @Test
    void testUint16ArrayConstructorFour027() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    try {
        new Uint16Array(buffer, 1);
    fail();
    } catch (RangeError e) {
        assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayConstructorFour028() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    try {
        new Uint16Array(buffer, 10);
    fail();
    } catch (RangeError e) {
        assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayConstructorFour029() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    try {
        new Uint16Array(buffer, 4, 3);
    fail();
    } catch (RangeError e) {
        assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayConstructorFour030() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array existing = new Uint16Array(buffer);
    existing.set(0, 12);
    try {
    new Uint16Array(buffer, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(12, existing.at(0));
    }

    @Test
    void testUint16ArrayConstructorFour031() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    try {
    new Uint16Array(buffer, 0, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(8, buffer.byteLength());
    }

    @Test
    void testUint16ArrayConstructorFour032() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Uint16Array copy = new Uint16Array(source);
    assertEqual(1, copy.at(0));
    assertEqual(3, copy.at(2));
    }

    @Test
    void testUint16ArrayConstructorFour033() {
    Uint16Array source = Uint16Array.of(1, 2);
    Uint16Array copy = new Uint16Array(source);
    copy.set(0, 9);
    assertEqual(1, source.at(0));
    }

    @Test
    void testUint16ArrayConstructorFour034() {
    Uint16Array source = Uint16Array.of(1, 2);
    Uint16Array copy = new Uint16Array(source);
    source.set(1, 8);
    assertEqual(2, copy.at(1));
    }

    @Test
    void testUint16ArrayConstructorFour035() {
    double[] source = new double[] {-1.0, -2.0};
    Uint16Array result = new Uint16Array(source);
    assertEqual(65535, result.at(0));
    assertEqual(65534, result.at(1));
    }

    @Test
    void testUint16ArrayConstructorFour036() {
    double[] source = new double[] {65536.0, 65537.0};
    Uint16Array result = new Uint16Array(source);
    assertEqual(0, result.at(0));
    assertEqual(1, result.at(1));
    }

    @Test
    void testUint16ArrayConstructorFour037() {
    double[] source = new double[] {1.9, 2.9};
    Uint16Array result = new Uint16Array(source);
    assertEqual(1, result.at(0));
    assertEqual(2, result.at(1));
    }

    @Test
    void testUint16ArrayConstructorFour038() {
    List<Integer> source = new ArrayList<>();
    Uint16Array result = new Uint16Array(source);
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayConstructorFour039() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array view = new Uint16Array(buffer, 2, 4);
    assertEqual(2, view.byteOffset());
    assertEqual(8, view.byteLength());
    assertEqual(4, view.length());
    }

    @Test
    void testUint16ArrayConstructorFour040() {
    Uint16Array backing = Uint16Array.of(10, 20, 30, 40);
    Uint16Array source = new Uint16Array(backing.buffer(), 2, 2);
    Uint16Array copy = new Uint16Array(source);
    backing.set(1, 99);
    assertEqual(2, copy.length());
    assertEqual(0, copy.byteOffset());
    assertEqual(20, copy.at(0));
    assertEqual(30, copy.at(1));
    copy.set(0, 88);
    assertEqual(99, source.at(0));
    }

    @Test
    void testUint16ArrayConstructorFour041() {
    ArrayBuffer buffer = new ArrayBuffer(9);
    try {
    new Uint16Array(buffer);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
