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
import basetype.common.Error;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayEveryTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayEveryTwo extends BasTest {

    @Test
    void testUint16ArrayEveryTwo015() {
    int[] count = {0};
    Uint16Array.of(1, 2, 3).every((value) -> { count[0]++; return false;});
    assertEqual(1, count[0]);}

    @Test
    void testUint16ArrayEveryTwo016() {
    int[] expected = {0};
    Uint16Array.of(1, 2, 3).every((value, index) -> { assertEqual(expected[0], index); expected[0]++; return true;});
    assertEqual(3, expected[0]);}

    @Test
    void testUint16ArrayEveryTwo017() {
    Uint16Array source = Uint16Array.of(1, 2);
    boolean same = source.every((value, index, array) -> array == source);
    assertTrue(same);}

    @Test
    void testUint16ArrayEveryTwo018() {
    Uint16Array source = Uint16Array.of(1, 2);
    int[] count = {0};
    boolean result = source.every((value, index, array) -> { count[0]++; if (index == 1) { array.set(0, 0);} return value > 0;});;
    assertTrue(result);
    assertEqual(2, count[0]);}

    @Test
    void testUint16ArrayEveryTwo019() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    source.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    boolean result = source.every((value, index) -> { if (index == 0) { alias.set(1, 0);} return value > 0;});;
    assertFalse(result);}

    @Test
    void testUint16ArrayEveryTwo020() {
    Uint16Array all = Uint16Array.of(0, 2, 4, 0);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertTrue(view.every((value) -> value > 0));}

    @Test
    void testUint16ArrayEveryTwo021() {
    try { Uint16Array.of(1).every((value) -> { throw new Error("every marker");}); fail();} catch (Error e) { assertEqual("every marker", e.getMessage());}
    }

    @Test
    void testUint16ArrayEveryTwo022() {
    assertTrue(Uint16Array.of(65535).every((value) -> value <= 65535));}

    @Test
    void testUint16ArrayEveryTwo023() {
    Uint16Array source = Uint16Array.of(2, 4, 6);
    assertTrue(source.every((value, index, array) -> value >= array.get(0)));}

    @Test
    void testUint16ArrayEveryTwo024() {
    int[] count = {0};
    boolean result = Uint16Array.of(1, 2, 0).every((value) -> { count[0]++; return value > 0;});
    assertFalse(result);
    assertEqual(3, count[0]);}
}
