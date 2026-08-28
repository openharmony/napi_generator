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
import basetype.common.IteratorResult;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayIterator —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayIterator extends BasTest {

    @Test
    void testUint16ArrayIterator048() {
    Uint16Array arr = new Uint16Array();
    IteratorResult item = arr.values().next();
    assertTrue(item.done);
    }

    @Test
    void testUint16ArrayIterator049() {
    Uint16Array.KeyIterator iterator = Uint16Array.of(7).values();
    iterator.next();
    assertTrue(iterator.next().done);
    assertTrue(iterator.next().done);
    }

    @Test
    void testUint16ArrayIterator050() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array.KeyIterator iterator = arr.values();
    assertEqual(10, iterator.next().value);
    arr.set(1, 99);
    assertEqual(99, iterator.next().value);
    }

    @Test
    void testUint16ArrayIterator051() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer, 2, 2);
    Uint16Array.KeyIterator iterator = arr.values();
    iterator.next();
    alias.set(0, 88);
    assertEqual(88, iterator.next().value);
    }

    @Test
    void testUint16ArrayIterator052() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {5, 10, 15, 20, 25}));
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    Uint16Array.KeyIterator iterator = view.values();
    assertEqual(15, iterator.next().value);
    assertEqual(20, iterator.next().value);
    }

    @Test
    void testUint16ArrayIterator053() {
    Uint16Array arr = Uint16Array.of(4, 5);
    Uint16Array.KeyIterator first = arr.values();
    Uint16Array.KeyIterator second = arr.values();
    first.next();
    assertEqual(5, first.next().value);
    assertEqual(4, second.next().value);
    }

    @Test
    void testUint16ArrayIterator054() {
    Uint16Array arr = Uint16Array.of(0, 32768, 65535);
    List<Integer> values = new ArrayList<>();
    for (Integer value : arr.values()) {
        values.add(value);
    }
    assertEqual(0, values.get(0));
    assertEqual(32768, values.get(1));
    assertEqual(65535, values.get(2));
    }

    @Test
    void testUint16ArrayIterator055() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array.KeyIterator iterator = arr.values();
    assertEqual(1, iterator.next().value);
    arr.copyWithin(1, 2);
    assertEqual(3, iterator.next().value);
    assertEqual(4, iterator.next().value);
    }

    @Test
    void testUint16ArrayIterator056() {
    Uint16Array backing = Uint16Array.of(5, 10, 15, 20, 25);
    Uint16Array view = new Uint16Array(backing.buffer(), 4, 2);
    List<Integer> values = new ArrayList<>();
    for (Integer value : view.values()) {
    values.add(value);
    }
    assertEqual(2, values.size());
    assertEqual(15, values.get(0));
    assertEqual(20, values.get(1));
    }

    @Test
    void testUint16ArrayIterator057() {
    Uint16Array array = Uint16Array.of(1, 2, 3);
    Uint16Array.KeyIterator iterator = array.values();
    assertEqual(1, iterator.next().value);
    array.fill(9, 1);
    assertEqual(9, iterator.next().value);
    assertEqual(9, iterator.next().value);
    }
}
