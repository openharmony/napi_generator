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
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayKeys —— Int16Array 方法族测试。
 */
public class Uint16ArrayKeys extends BasTest {

    @Test
    void testUint16ArrayKeys045() {
    assertTrue(new Uint16Array().keys().next().done);
    }

    @Test
    void testUint16ArrayKeys046() {
    Uint16Array.KeyIterator iterator = Uint16Array.of(1).keys();
    iterator.next();
    assertTrue(iterator.next().done);
    assertTrue(iterator.next().done);
    }

    @Test
    void testUint16ArrayKeys047() {
    Uint16Array.KeyIterator iterator = Uint16Array.of(5, 6, 7).keys();
    assertEqual(0, iterator.next().value);
    assertEqual(1, iterator.next().value);
    assertEqual(2, iterator.next().value);
    }

    @Test
    void testUint16ArrayKeys048() {
    Uint16Array arr = Uint16Array.of(1, 2);
    Uint16Array.KeyIterator iterator = arr.keys();
    arr.set(0, 99);
    assertEqual(0, iterator.next().value);
    assertEqual(1, iterator.next().value);
    }

    @Test
    void testUint16ArrayKeys049() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    Uint16Array.KeyIterator iterator = view.keys();
    assertEqual(0, iterator.next().value);
    assertEqual(1, iterator.next().value);
    }

    @Test
    void testUint16ArrayKeys050() {
    Uint16Array arr = Uint16Array.of(1, 2);
    Uint16Array.KeyIterator first = arr.keys();
    Uint16Array.KeyIterator second = arr.keys();
    first.next();
    assertEqual(1, first.next().value);
    assertEqual(0, second.next().value);
    }

    @Test
    void testUint16ArrayKeys051() {
    Uint16Array arr = new Uint16Array(3);
    int count = 0;
    for (Integer key : arr.keys()) { count++; }
    assertEqual(3, count);
    }

    @Test
    void testUint16ArrayKeys052() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.copyWithin(1, 0, 2);
    List<Integer> keys = new ArrayList<>();
    for (Integer key : arr.keys()) { keys.add(key); }
    assertEqual(3, keys.size());
    assertEqual(0, keys.get(0));
    assertEqual(1, keys.get(1));
    assertEqual(2, keys.get(2));
    }
}
