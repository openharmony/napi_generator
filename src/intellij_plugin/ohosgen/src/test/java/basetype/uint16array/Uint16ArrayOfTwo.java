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
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayOfTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayOfTwo extends BasTest {

    @Test
    void testUint16ArrayOfTwo086() {
    Uint16Array result = Uint16Array.of();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayOfTwo087() {
    Uint16Array result = Uint16Array.of(3, 1, 2);
    assertEqual(3, result.at(0));
    assertEqual(1, result.at(1));
    assertEqual(2, result.at(2));
    }

    @Test
    void testUint16ArrayOfTwo088() {
    Uint16Array result = Uint16Array.of(-1, 65536, 3.9);
    assertEqual(65535, result.at(0));
    assertEqual(0, result.at(1));
    assertEqual(3, result.at(2));
    }

    @Test
    void testUint16ArrayOfTwo089() {
    Uint16Array result = Uint16Array.of(1, 2);
    result.set(0, 9);
    assertEqual(9, result.at(0));
    assertEqual(2, result.at(1));
    }

    @Test
    void testUint16ArrayOfTwo090() {
    Uint16Array first = Uint16Array.of(1, 2);
    Uint16Array second = Uint16Array.of(1, 2);
    first.set(0, 9);
    second.set(1, 8);
    assertEqual(2, first.at(1));
    assertEqual(9, first.at(0));
    assertEqual(1, second.at(0));
    }
}
