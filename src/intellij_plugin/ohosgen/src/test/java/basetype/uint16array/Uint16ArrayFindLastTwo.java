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
import basetype.common.Error;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFindLastTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFindLastTwo extends BasTest {

    @Test
    void testUint16ArrayFindLastTwo014() {
    assertEqual(6, Uint16Array.of(2, 4, 6).findLast((value) -> value % 2 == 0));
    }

    @Test
    void testUint16ArrayFindLastTwo015() {
    int[] count = {0};
    Number result = Uint16Array.of(1, 2, 3).findLast((value) -> {
        count[0]++;
        return true;
    });
    assertEqual(3, result);
    assertEqual(1, count[0]);
    }

    @Test
    void testUint16ArrayFindLastTwo016() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Number result = source.findLast((value, index, array) -> {
        if (index == 2) {
            array.set(1, 20);
        }
        return value > 10;
    });
    assertEqual(20, result);
    }

    @Test
    void testUint16ArrayFindLastTwo017() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    source.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    Number result = source.findLast((value, index) -> {
        if (index == 2) {
            alias.set(1, 40);
        }
        return value > 10;
    });
    assertEqual(40, result);
    }

    @Test
    void testUint16ArrayFindLastTwo018() {
    Uint16Array all = Uint16Array.of(9, 2, 3, 8);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(3, view.findLast((value) -> value < 9));
    }

    @Test
    void testUint16ArrayFindLastTwo019() {
    try { Uint16Array.of(1).findLast((value) -> {
        return BasTest.throwTestError("findLast marker");
        });
        fail();
        } catch (Error e) {
            assertEqual("Error", e.getClass().getSimpleName());
        assertEqual("findLast marker", e.getMessage());
    }
    }

    @Test
    void testUint16ArrayFindLastTwo020() {
    assertEqual(65535, Uint16Array.of(65534, 0, 65535).findLast((value) -> value >= 65534));
    }
}
