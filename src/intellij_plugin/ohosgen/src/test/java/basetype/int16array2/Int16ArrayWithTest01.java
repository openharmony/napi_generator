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

package basetype.int16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
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
import basetype.common.Int16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayWithTest01 —— Int16Array 方法族测试。
 */
public class Int16ArrayWithTest01 extends BasTest {

    @Test
    void testInt16ArrayWithTestOne001() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    int actual1 = result.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne002() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne003() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(4, 99);
    Integer actual1 = result.get(4);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne004() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne005() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne006() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(4, 99);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne007() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne008() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne009() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-1, 99);
    Integer actual1 = result.get(4);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne010() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-5, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne011() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-3, 99);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne012() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-1, 99);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-5, 99);
    Integer actual1 = result.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne014() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    try {
    arr.with(5, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne015() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    try {
    arr.with(6, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne016() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int huge = 2147483647;
    try {
    arr.with(huge, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne017() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    try {
    arr.with(-6, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne018() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int hugeNeg = Integer.MIN_VALUE;
    try {
    arr.with(hugeNeg, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne019() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    Integer actualResult = result.get(0);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne020() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(4, 99);
    Integer actualResult = result.get(4);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne021() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actualResult = result.get(2);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne022() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-1, 99);
    Integer actualResult = result.get(4);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne023() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-5, 99);
    Integer actualResult = result.get(0);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne024() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(-3, 99);
    Integer actualResult = result.get(2);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne025() {
    Int16Array empty = new Int16Array(0);
    try {
    empty.with(0, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne026() {
    Int16Array empty = new Int16Array(0);
    try {
    empty.with(-1, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne027() {
    Int16Array empty = new Int16Array(0);
    try {
    empty.with(1, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne028() {
    Int16Array single = Int16Array.of(10);
    try {
    single.with(-2, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne029() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 0);
    Integer actual1 = result.get(2);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne030() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 1);
    Integer actual1 = result.get(2);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne031() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, -1);
    Integer actual1 = result.get(2);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne032() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 32767);
    Integer actual1 = result.get(2);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne033() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, -32768);
    Integer actual1 = result.get(2);
    assertEqual(-32768, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne034() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 42);
    Integer actual1 = result.get(2);
    assertEqual(42, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne035() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, -42);
    Integer actual1 = result.get(2);
    assertEqual(-42, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne036() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int v = 99;
    Int16Array result = arr.with(2, v);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne037() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 0);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne038() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 0);
    Integer actual1 = result.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne039() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 0);
    Integer actualResult = result.get(2);
    int expectedResult = 0;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne040() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    int actual1 = result.length();
    assertEqual(5, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    int actual1 = result.byteOffset();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne042() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    boolean actual1 = result.buffer() == arr.buffer();
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayWithTestOne043() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actualResult = result.get(2);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    int actual1 = arr.length();
    assertEqual(5, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne044() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actualResult = result.get(2);
    int expectedResult = 99;
    assertEqual(expectedResult, actualResult);

    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne045() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actual1 = arr.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne046() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    result.set(0, 77);
    Integer actual1 = result.get(0);
    assertEqual(77, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne047() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    result.set(1, 88);
    Integer actual1 = arr.get(1);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne048() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 11).with(1, 22);
    int actual1 = result.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne049() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 11).with(1, 22);
    Integer actual1 = result.get(0);
    assertEqual(11, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne050() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 11).with(1, 22);
    Integer actual1 = result.get(1);
    assertEqual(22, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne051() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 11).with(1, 22);
    Integer actual1 = result.get(4);
    assertEqual(50, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne052() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 11).with(2, 33).with(4, 55);
    Integer actual1 = result.get(0);
    assertEqual(11, actual1);
    Integer actual2 = result.get(2);
    assertEqual(33, actual2);
    Integer actual3 = result.get(4);
    assertEqual(55, actual3);
    }

    @Test
    void testInt16ArrayWithTestOne053() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 11).with(2, 22);
    Integer actual1 = result.get(2);
    assertEqual(22, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne054() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array mid = arr.with(2, 11);
    Int16Array result = mid.with(2, 22);
    Integer actual1 = mid.get(2);
    assertEqual(11, actual1);
    Integer actual2 = result.get(2);
    assertEqual(22, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne055() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(1, 20);
    Integer actual1 = result.get(1);
    assertEqual(20, actual1);
    boolean actual2 = result == arr;
    assertFalse(actual2);
    }

    @Test
    void testInt16ArrayWithTestOne056() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(1, 20);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    Integer actual2 = result.get(2);
    assertEqual(30, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne057() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array r1 = arr.with(0, 99);
    Int16Array r2 = arr.with(-5, 99);
    Integer actual1 = r1.get(0);
    Integer expected1 = r2.get(0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne058() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array r1 = arr.with(4, 77);
    Int16Array r2 = arr.with(-1, 77);
    Integer actual1 = r1.get(4);
    Integer expected1 = r2.get(4);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne059() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(2, 99);
    Integer actual0 = result.get(0);
    assertEqual(10, actual0);
    Integer actual1 = result.get(1);
    assertEqual(20, actual1);
    Integer actual2 = result.get(2);
    assertEqual(99, actual2);
    Integer actual3 = result.get(3);
    assertEqual(40, actual3);
    Integer actual4 = result.get(4);
    assertEqual(50, actual4);
    int actualLength = result.length();
    int expectedLength = 5;
    assertEqual(expectedLength, actualLength);
    }

    @Test
    void testInt16ArrayWithTestOne060() {
    Int16Array zeros = new Int16Array(5);
    Int16Array result = zeros.with(2, -1);
    Integer actual1 = result.get(2);
    assertEqual(-1, actual1);
    Integer actual2 = result.get(0);
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne061() {
    Int16Array zeros = new Int16Array(5);
    Int16Array result = zeros.with(2, -1);
    Integer actual1 = result.get(4);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne062() {
    Int16Array same = Int16Array.of(7, 7, 7, 7, 7);
    Int16Array result = same.with(2, 3);
    Integer actual1 = result.get(2);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne063() {
    Int16Array same = Int16Array.of(7, 7, 7, 7, 7);
    Int16Array result = same.with(2, 3);
    Integer actual1 = result.get(0);
    assertEqual(7, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne064() {
    Int16Array ext = Int16Array.of(32767, -32768, 0, 1, -1);
    Int16Array result = ext.with(2, 99);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-32768, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne065() {
    ArrayBuffer buf = new ArrayBuffer(14);
    Int16Array full = new Int16Array(buf);
    full.set(0, 100);
    full.set(1, 200);
    full.set(2, 300);
    full.set(3, 400);
    full.set(4, 500);
    full.set(5, 600);
    full.set(6, 700);
    Int16Array sub = new Int16Array(buf, 2, 4);
    Int16Array result = sub.with(1, 999);
    int actual1 = result.byteOffset();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne066() {
    ArrayBuffer buf = new ArrayBuffer(14);
    Int16Array full = new Int16Array(buf);
    full.set(0, 100);
    full.set(1, 200);
    full.set(2, 300);
    full.set(3, 400);
    full.set(4, 500);
    full.set(5, 600);
    full.set(6, 700);
    Int16Array sub = new Int16Array(buf, 2, 4);
    Int16Array result = sub.with(1, 999);
    Integer actual1 = result.get(1);
    assertEqual(999, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne067() {
    ArrayBuffer buf = new ArrayBuffer(14);
    Int16Array full = new Int16Array(buf);
    full.set(0, 100);
    full.set(1, 200);
    full.set(2, 300);
    full.set(3, 400);
    full.set(4, 500);
    full.set(5, 600);
    full.set(6, 700);
    Int16Array sub = new Int16Array(buf, 2, 4);
    Int16Array result = sub.with(1, 999);
    Integer actual1 = result.get(0);
    assertEqual(200, actual1);
    Integer actual2 = result.get(3);
    assertEqual(500, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne068() {
    ArrayBuffer buf = new ArrayBuffer(14);
    Int16Array full = new Int16Array(buf);
    full.set(0, 100);
    full.set(1, 200);
    full.set(2, 300);
    full.set(3, 400);
    full.set(4, 500);
    full.set(5, 600);
    full.set(6, 700);
    Int16Array sub = new Int16Array(buf, 2, 4);
    sub.with(1, 999);

    Integer actual1 = sub.get(1);
    assertEqual(300, actual1);
    }

    @Test
    void testInt16ArrayWithTestOne069() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 30);
    Integer actual1 = result.get(0);
    assertEqual(30, actual1);
    Integer actual2 = result.get(2);
    assertEqual(30, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne070() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array mid = arr.with(2, 99);
    Int16Array result = Int16Array.from(mid);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    int actual2 = result.length();
    assertEqual(5, actual2);
    }

    @Test
    void testInt16ArrayWithTestOne071() {
    Int16Array arr = Int16Array.of(10, 20);
    Int16Array result = arr.with(0, 99);
    int actual1 = result.length();
    assertEqual(2, actual1);
    Integer actual2 = result.get(0);
    assertEqual(99, actual2);
    Integer actual3 = result.get(1);
    assertEqual(20, actual3);
    }

    @Test
    void testInt16ArrayWithTestOne072() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Int16Array result = arr.with(5, 99);
    int actual1 = result.length();
    assertEqual(10, actual1);
    Integer actual2 = result.get(5);
    assertEqual(99, actual2);
    Integer actual3 = result.get(0);
    assertEqual(1, actual3);
    }

    @Test
    void testInt16ArrayWithTestOne073() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.with(3, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne074() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.with(-4, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne075() {
    Int16Array empty = new Int16Array(0);
    try {
    empty.with(0, 1);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestOne076() {
    Int16Array empty = new Int16Array(0);
    try {
    empty.with(-1, 1);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }
}
