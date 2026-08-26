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
import basetype.common.EntryResult;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayEntries —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayEntries extends BasTest {

    @Test
    void testUint16ArrayEntries033() {
    EntryResult item = new Uint16Array().entries().next();
    assertTrue(item.done);
    }

    @Test
    void testUint16ArrayEntries034() {
    Uint16Array.EntriesIterator iterator = Uint16Array.of(9).entries();
    iterator.next();
    assertTrue(iterator.next().done);
    assertTrue(iterator.next().done);
    }

    @Test
    void testUint16ArrayEntries035() {
    Uint16Array.EntriesIterator iterator = Uint16Array.of(8, 9, 10).entries();
    assertEqual(0, iterator.next().value[0]);
    assertEqual(1, iterator.next().value[0]);
    assertEqual(2, iterator.next().value[0]);
    }

    @Test
    void testUint16ArrayEntries036() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array.EntriesIterator iterator = arr.entries();
    iterator.next();
    arr.set(1, 77);
    int[] item = iterator.next().value;
    assertEqual(1, item[0]);
    assertEqual(77, item[1]);
    }

    @Test
    void testUint16ArrayEntries037() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {10, 20, 30}));
    Uint16Array alias = new Uint16Array(buffer);
    Uint16Array.EntriesIterator iterator = arr.entries();
    iterator.next();
    alias.set(1, 66);
    assertEqual(66, iterator.next().value[1]);
    }

    @Test
    void testUint16ArrayEntries038() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {5, 10, 15, 20, 25}));
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    int[] item = view.entries().next().value;
    assertEqual(0, item[0]);
    assertEqual(15, item[1]);
    }

    @Test
    void testUint16ArrayEntries039() {
    Uint16Array arr = Uint16Array.of(3, 4);
    Uint16Array.EntriesIterator first = arr.entries();
    Uint16Array.EntriesIterator second = arr.entries();
    first.next();
    assertEqual(1, first.next().value[0]);
    assertEqual(0, second.next().value[0]);
    }

    @Test
    void testUint16ArrayEntries040() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array.EntriesIterator iterator = arr.entries();
    iterator.next();
    arr.fill(50, 1);
    assertEqual(50, iterator.next().value[1]);
    }

    @Test
    void testUint16ArrayEntries041() {
    Uint16Array array = Uint16Array.of(1, 2, 3, 4);
    Uint16Array.EntriesIterator iterator = array.entries();
    int[] first = iterator.next().value;
    assertEqual(0, first[0]);
    assertEqual(1, first[1]);
    array.copyWithin(1, 2);
    int[] second = iterator.next().value;
    int[] third = iterator.next().value;
    assertEqual(1, second[0]);
    assertEqual(3, second[1]);
    assertEqual(2, third[0]);
    assertEqual(4, third[1]);
    }
}
