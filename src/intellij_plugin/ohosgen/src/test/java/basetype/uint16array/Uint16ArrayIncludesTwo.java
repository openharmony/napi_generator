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
 * Uint16ArrayIncludesTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayIncludesTwo extends BasTest {

    @Test
    void testUint16ArrayIncludesTwo058() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(1, 50);
    assertTrue(arr.includes(50));
    }

    @Test
    void testUint16ArrayIncludesTwo059() {
    Uint16Array all = Uint16Array.of(9, 1, 2);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertFalse(view.includes(9));
    }

    @Test
    void testUint16ArrayIncludesTwo060() {
    Uint16Array all = Uint16Array.of(9, 1, 2);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertTrue(view.includes(2));
    }

    @Test
    void testUint16ArrayIncludesTwo061() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {7, 8}));
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(0, 6);
    assertFalse(arr.includes(7));
    }

    @Test
    void testUint16ArrayIncludesTwo062() {
    Uint16Array backing = Uint16Array.of(9, 7, 8, 7, 9);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 3);
    assertTrue(view.includes(7, 1));
    assertFalse(view.includes(7, 3));
    }

    @Test
    void testUint16ArrayIncludesTwo063() {
    Uint16Array array = Uint16Array.of(-1, 65536, -1);
    assertEqual("65535|0|65535", array.join("|"));
    assertFalse(array.includes(-1));
    assertEqual(-1, array.indexOf(-1));
    assertEqual(-1, array.lastIndexOf(-1));
    assertTrue(array.includes(65535));
    assertEqual(0, array.indexOf(65535));
    assertEqual(2, array.lastIndexOf(65535));
    }
}
