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

import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFindTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFindTwo extends BasTest {

    @Test
    void testUint16ArrayFindTwo020() {
    int[] count = {0};
    Number result = Uint16Array.of(1, 2, 3).find((value) -> { count[0]++; return false;});
    assertNull(result);
    assertEqual(3, count[0]);}

    @Test
    void testUint16ArrayFindTwo021() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Number result = source.find((value, index, array) -> { if (index == 0) { array.set(1, 20);} return value > 10;});
    assertEqual(20, result);}

    @Test
    void testUint16ArrayFindTwo022() {
    Uint16Array all = Uint16Array.of(1, 2, 3, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(2, view.find((value) -> value > 1));}

    @Test
    void testUint16ArrayFindTwo023() {
    try { Uint16Array.of(1).find((value) -> { throw new Error("find marker");}); fail();} catch (Error e) { assertEqual("find marker", e.getMessage());}
    }
}
