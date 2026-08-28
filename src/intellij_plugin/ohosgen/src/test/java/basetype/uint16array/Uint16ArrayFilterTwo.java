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

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFilterTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFilterTwo extends BasTest {

    @Test
    void testUint16ArrayFilterTwo014() {
    int[] count = {0};
    Uint16Array result = new Uint16Array().filter((value) -> {
        count[0]++;
        return true;
    });
    assertEqual(0, result.length());
    assertEqual(0, count[0]);
    }

    @Test
    void testUint16ArrayFilterTwo015() {
    Uint16Array result = Uint16Array.of(1, 2).filter((value) -> false);
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayFilterTwo016() {
    Uint16Array result = Uint16Array.of(3, 1, 2).filter((value) -> true);
    assertEqual(3, result.at(0));
    assertEqual(2, result.at(2));
    }

    @Test
    void testUint16ArrayFilterTwo017() {
    Uint16Array result = Uint16Array.of(2, 1, 2, 2).filter((value) -> value == 2);
    assertEqual(3, result.length());
    assertEqual(2, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(2, result.get(2));
    }

    @Test
    void testUint16ArrayFilterTwo018() {
    Uint16Array source = Uint16Array.of(1, 2);
    Uint16Array result = source.filter((value) -> true);
    result.set(0, 9);
    assertEqual(1, source.at(0));
    }

    @Test
    void testUint16ArrayFilterTwo019() {
    int[] expected = {0};
    Uint16Array.of(1, 2, 3).filter((value, index) -> {
        assertEqual(expected[0], index);
        expected[0]++;
        return true;
    });
    assertEqual(3, expected[0]);
    }

    @Test
    void testUint16ArrayFilterTwo020() {
    Uint16Array source = Uint16Array.of(1, 2);
    boolean[] same = {false};
    int[] callCount = {0};
    Uint16Array result = source.filter((value, index, array) -> {
        same[0] = array == source;
        callCount[0]++;
        return true;
    });
    assertEqual(2, callCount[0]);
    assertEqual(2, result.length());
    assertTrue(same[0]);
    }

    @Test
    void testUint16ArrayFilterTwo021() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Uint16Array result = source.filter((value, index, array) -> {
        if (index == 0) {
            array.set(1, 20);
        }
        return value > 10;
    });
    assertEqual(20, result.at(0));
    }

    @Test
    void testUint16ArrayFilterTwo022() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    source.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    Uint16Array result = source.filter((value, index) -> {
        if (index == 0) {
            alias.set(1, 40);
        }
        return value > 10;
    });
    assertEqual(40, result.at(0));
    }

    @Test
    void testUint16ArrayFilterTwo023() {
    Uint16Array all = Uint16Array.of(1, 2, 3, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    Uint16Array result = view.filter((value) -> value > 1);
    assertEqual(2, result.length());
    assertEqual(2, result.at(0));
    }

    @Test
    void testUint16ArrayFilterTwo024() {
    try { Uint16Array.of(1).filter((value) -> {
        throw new RangeError("filter range");
        });
        fail();
        } catch (RangeError e) {
            assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayFilterTwo025() {
    Uint16Array result = Uint16Array.of(0, 32768, 65535).filter((value) -> value == 0 || value == 65535);
    assertEqual(2, result.length());
    assertEqual(65535, result.at(1));
    }

    @Test
    void testUint16ArrayFilterTwo026() {
    Uint16Array source = Uint16Array.of(4, 5);
    source.filter((value) -> value > 0);
    assertEqual(4, source.at(0));
    assertEqual(5, source.at(1));
    }
}
