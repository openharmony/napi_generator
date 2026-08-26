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

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayMapTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayMapTwo extends BasTest {

    @Test
    void testUint16ArrayMapTwo020() {
    int[] count = {0};
    Uint16Array result = new Uint16Array().map((value) -> { count[0]++; return value;});
    assertEqual(0, result.length());
    assertEqual(0, count[0]);}

    @Test
    void testUint16ArrayMapTwo021() {
    Uint16Array source = Uint16Array.of(1, 2);
    Uint16Array result = source.map((value) -> value);
    result.set(0, 99);
    assertEqual(1, source.at(0));}

    @Test
    void testUint16ArrayMapTwo022() {
    Uint16Array source = Uint16Array.of(1, 2);
    boolean[] same = {true};
    source.map((value, index, array) -> { same[0] = same[0] && array == source; return value;});
    assertTrue(same[0]);}

    @Test
    void testUint16ArrayMapTwo023() {
    Uint16Array source = Uint16Array.of(3, 4, 5);
    int[] expected = {0};
    source.map((value, index) -> { assertEqual(expected[0], index); expected[0]++; return value;});
    assertEqual(3, expected[0]);}

    @Test
    void testUint16ArrayMapTwo024() {
    Uint16Array result = Uint16Array.of(1).map((value) -> -1);
    assertEqual(65535, result.at(0));}

    @Test
    void testUint16ArrayMapTwo025() {
    Uint16Array result = Uint16Array.of(1).map((value) -> 65536);
    assertEqual(0, result.at(0));}

    @Test
    void testUint16ArrayMapTwo026() {
    Uint16Array result = Uint16Array.of(1).map((value) -> (int) (9.8));
    assertEqual(9, result.at(0));}

    @Test
    void testUint16ArrayMapTwo027() {
    Uint16Array result = Uint16Array.of(1).map((value) -> (int) (Double.NaN));
    assertEqual(0, result.at(0));}

    @Test
    void testUint16ArrayMapTwo028() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    Uint16Array result = source.map((value, index, array) -> { if (index == 0) { array.set(1, 20);} return value;});
    assertEqual(20, result.at(1));}

    @Test
    void testUint16ArrayMapTwo029() {
    Uint16Array source = Uint16Array.of(1, 2);
    Uint16Array result = source.map((value, index, array) -> { if (index == 1) { array.set(0, 90);} return value;});
    assertEqual(1, result.at(0));
    assertEqual(90, source.at(0));}

    @Test
    void testUint16ArrayMapTwo030() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    source.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    Uint16Array result = source.map((value, index) -> { if (index == 0) { alias.set(1, 44);} return value;});
    assertEqual(44, result.at(1));}

    @Test
    void testUint16ArrayMapTwo031() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(buffer);
    all.set(new Uint16Array(new int[] {1, 2, 3, 4, 5}));
    Uint16Array view = new Uint16Array(buffer, 4, 2);
    Uint16Array result = view.map((value) -> value * 2);
    assertEqual(6, result.at(0));
    assertEqual(8, result.at(1));}

    @Test
    void testUint16ArrayMapTwo032() {
    try { Uint16Array.of(1).map((value) -> { throw new RangeError("map range");}); fail();} catch (RangeError e) { assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayMapTwo033() {
    Uint16Array result = Uint16Array.of(10, 10, 10).map((value, index) -> value + index);
    assertEqual(10, result.at(0));
    assertEqual(12, result.at(2));}

    @Test
    void testUint16ArrayMapTwo034() {
    Uint16Array source = Uint16Array.of(2, 4);
    source.map((value) -> value * 3);
    assertEqual(2, source.at(0));
    assertEqual(4, source.at(1));}

    @Test
    void testUint16ArrayMapTwo035() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array view = new Uint16Array(buffer, 2, 4);
    Uint16Array result = view.map((value) -> value + 1);
    assertEqual(4, result.length());}

    @Test
    void testUint16ArrayMapTwo036() {
    Uint16Array source = Uint16Array.of(1);
    Uint16Array result = source.map((value, index, array) -> { array.set(index, 99); return value;});;
    assertEqual(99, source.at(0));
    assertEqual(1, result.at(0));}
}
