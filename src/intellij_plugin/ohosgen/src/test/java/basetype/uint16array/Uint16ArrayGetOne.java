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
import basetype.common.RangeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayGetOne —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayGetOne extends BasTest {

    @Test
    void testUint16ArrayGetOne069() {
    Uint16Array all = Uint16Array.of(10, 20, 30);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(20, view.get(0));}

    @Test
    void testUint16ArrayGetOne070() {
    Uint16Array all = Uint16Array.of(10, 20, 30, 40);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(30, view.get(1));}

    @Test
    void testUint16ArrayGetOne071() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array first = new Uint16Array(buffer, 0, 3);
    Uint16Array second = new Uint16Array(buffer, 2, 3);
    second.set(0, 91);
    assertEqual(91, first.get(1));}

    @Test
    void testUint16ArrayGetOne072() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    DataView view = new DataView(buffer);
    view.setUint16(2, 2048, true);
    Uint16Array arr = new Uint16Array(buffer);
    assertEqual(2048, arr.get(1));}

    @Test
    void testUint16ArrayGetOne073() {
    Uint16Array arr = Uint16Array.of(65535);
    Integer value = arr.get(0);
    assertEqual(65535, value);}

    @Test
    void testUint16ArrayGetOne074() {
    Uint16Array arr = Uint16Array.of(1, 2);
    arr.get(0);
    arr.get(1);
    assertEqual(2, arr.length());
    assertEqual(4, arr.byteLength());}

    @Test
    void testUint16ArrayGetOne075() {
    Uint16Array backing = Uint16Array.of(10, 20, 30, 40);
    Uint16Array view = new Uint16Array(backing.buffer(), 2, 2);
    try {
    view.get(2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(40, backing.at(3));}
}
