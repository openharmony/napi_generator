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
 * Uint16ArrayAtTwo —— Int16Array 方法族测试。
 */
public class Uint16ArrayAtTwo extends BasTest {

    @Test
    void testUint16ArrayAtTwo011() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    DataView dataView = new DataView(buffer);
    dataView.setUint16(4, 123, true);
    dataView.setUint16(6, 456, true);
    dataView.setUint16(8, 789, true);
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    assertEqual(123, view.at(0));
    assertEqual(456, view.at(1));
    assertEqual(456, view.at(-1));
    assertNull(view.at(2));
    assertNull(view.at(-3));
    }
}
