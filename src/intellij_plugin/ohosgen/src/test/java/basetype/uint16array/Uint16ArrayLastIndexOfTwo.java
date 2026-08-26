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
 * Uint16ArrayLastIndexOfTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayLastIndexOfTwo extends BasTest {

    @Test
    void testUint16ArrayLastIndexOfTwo072() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(2, 50);
    assertEqual(2, arr.lastIndexOf(50));}

    @Test
    void testUint16ArrayLastIndexOfTwo073() {
    Uint16Array all = Uint16Array.of(9, 4, 5, 4);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 3);
    assertEqual(2, view.lastIndexOf(4));}

    @Test
    void testUint16ArrayLastIndexOfTwo074() {
    Uint16Array all = Uint16Array.of(1, 2, 9);
    Uint16Array view = new Uint16Array(all.buffer(), 0, 2);
    assertEqual(-1, view.lastIndexOf(9));}

    @Test
    void testUint16ArrayLastIndexOfTwo075() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(new Uint16Array(new int[] {7, 7, 7}));
    Uint16Array alias = new Uint16Array(buffer);
    alias.set(2, 6);
    assertEqual(1, arr.lastIndexOf(7));}

    @Test
    void testUint16ArrayLastIndexOfTwo076() {
    Uint16Array backing = Uint16Array.of(9, 7, 8, 7, 9);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 3);
    assertEqual(0, view.lastIndexOf(7, 1));}
}
