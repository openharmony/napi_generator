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
 * Uint16ArrayIndexOfTwo —— Int16Array 方法族测试。
 */
public class Uint16ArrayIndexOfTwo extends BasTest {

    @Test
    void testUint16ArrayIndexOfTwo066() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(2, 50);
    assertEqual(2, arr.indexOf(50));
    }

    @Test
    void testUint16ArrayIndexOfTwo067() {
    Uint16Array all = Uint16Array.of(9, 4, 5, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 3);
    assertEqual(0, view.indexOf(4));
    }

    @Test
    void testUint16ArrayIndexOfTwo068() {
    Uint16Array all = Uint16Array.of(9, 1, 2);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(-1, view.indexOf(9));
    }

    @Test
    void testUint16ArrayIndexOfTwo069() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {7, 7, 7}));
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(0, 6);
    assertEqual(1, arr.indexOf(7));
    }

    @Test
    void testUint16ArrayIndexOfTwo070() {
    Uint16Array backing = Uint16Array.of(9, 7, 8, 7, 9);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 3);
    assertEqual(2, view.indexOf(7, 1));
    }
}
