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
import basetype.common.DataView;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayAtTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
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
    assertEqualInt(123, view.at(0));
    assertEqualInt(456, view.at(1));
    assertEqualInt(456, view.at(-1));
    assertNull(view.at(2));
    assertNull(view.at(-3));
    }
}
