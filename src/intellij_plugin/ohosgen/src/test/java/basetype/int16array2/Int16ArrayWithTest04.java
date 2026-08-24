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

import basetype.ArrayBuffer;
import basetype.BasTest;
import basetype.EntryResult;
import basetype.Error;
import basetype.Int8Array;
import basetype.IteratorResult;
import basetype.RangeError;
import basetype.TypeError;
import basetype.Uint16Array;
import basetype.DataView;
import basetype.Float32Array;
import basetype.Float64Array;
import basetype.Int32Array;
import basetype.IntlOptions;
import basetype.NullPointerError;
import basetype.Uint8Array;
import basetype.Uint8ClampedArray;
import basetype.Int16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayWithTest04 —— Int16Array 方法族测试。
 */
public class Int16ArrayWithTest04 extends BasTest {

    @Test
    void testInt16ArrayWithTestFour001() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour002() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int nv = 99;
    Int16Array result = arr.with(1, nv);
    Integer actual1 = result.get(1);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour003() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 77;
    int nv = 77;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(0, nv);
    Integer actual1 = r1.get(0);
    Integer expected1 = r2.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = r1.get(1);
    Integer expected2 = r2.get(1);
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour004() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 32767;
    Int16Array result = arr.with(0, sv);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour005() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = -(int) 32768;
    Int16Array result = arr.with(0, sv);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour006() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 3.14);
    Integer actual1 = result.get(0);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour007() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, -Double.POSITIVE_INFINITY);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour008() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 0;
    int nv = 0;
    Int16Array r1 = arr.with(1, sv);
    Int16Array r2 = arr.with(1, nv);
    String actual1 = r1.join(",");
    String expected1 = r2.join(",");
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour009() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = -(int) 1;
    int nv = -1;
    Int16Array r1 = arr.with(1, sv);
    Int16Array r2 = arr.with(1, nv);
    String actual1 = r1.join(",");
    String expected1 = r2.join(",");
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour010() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 1;
    int nv = 1;
    Int16Array r1 = arr.with(2, sv);
    Int16Array r2 = arr.with(2, nv);
    Integer actual1 = r1.get(0);
    Integer expected1 = r2.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = r1.get(1);
    Integer expected2 = r2.get(1);
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour011() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 1.9);
    Integer actual1 = result.get(0);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour012() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(arr.length() - 1, sv);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour013() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int nv = 99;
    Int16Array result = arr.with(arr.length() - 1, nv);
    Integer actual1 = result.get(2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour014() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 55;
    Int16Array result = arr.with(-1, sv);
    Integer actual1 = result.get(2);
    assertEqual(55, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour015() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int nv = 55;
    Int16Array result = arr.with(-1, nv);
    Integer actual1 = result.get(2);
    assertEqual(55, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour016() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 11;
    int nv = 33;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = r1.with(2, nv);
    Integer actual1 = r2.get(0);
    assertEqual(11, actual1);
    Integer actual2 = r2.get(2);
    assertEqual(33, actual2);
    Integer actual3 = r2.get(1);
    assertEqual(20, actual3);
    }

    @Test
    void testInt16ArrayWithTestFour017() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.length();
    assertEqual(2, actual1);
    Integer actual2 = result.get(0);
    assertEqual(5, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour018() {
    Int16Array arr = Int16Array.of(10, 20);
    Int16Array result = arr.with(0, 5);
    int actual1 = result.length();
    assertEqual(2, actual1);
    Integer actual2 = result.get(0);
    assertEqual(5, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour019() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour020() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 5);
    int actual1 = result.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour021() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour022() {
    Int16Array arr = Int16Array.of(10, 20);
    Int16Array result = arr.with(0, 5);
    int actual1 = result.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour023() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.byteLength();
    int expected1 = result.length() * 2;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour024() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 5);
    int actual1 = result.byteLength();
    int expected1 = result.length() * 2;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour025() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 99;
    int nv = 99;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(0, nv);
    String actual1 = String.valueOf(r1);
    String expected1 = String.valueOf(r2);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour026() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 77;
    int nv = 77;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(0, nv);
    String actual1 = r1.join();
    String expected1 = r2.join();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour027() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 66);
    int actual1 = result.at(0);
    assertEqual(66, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour028() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    int nv = 99;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(0, nv);
    int[] first1 = r1.entries().next().value;
    int[] first2 = r2.entries().next().value;
    int actual1 = first1[1];
    int expected1 = first2[1];
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour029() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    int[] count = {0};
    result.forEach((_v, _i, _a) -> {
    count[0] = count[0] + 1;
    });
    assertEqual(3, count[0]);
    }

    @Test
    void testInt16ArrayWithTestFour030() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    Int16Array mapped = result.map((v, _i, _a) -> { return v + 1; });
    Integer actual1 = mapped.get(0);
    assertEqual(6, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour031() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 5);
    Int16Array mapped = result.map((v, _i, _a) -> { return v + 1; });
    Integer actual1 = mapped.get(0);
    assertEqual(6, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour032() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    Int16Array filtered = result.filter((v, _i, _a) -> { return v > 50; });
    int actual1 = filtered.length();
    assertEqual(1, actual1);
    Integer actual2 = filtered.get(0);
    assertEqual(99, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour033() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 15);
    boolean allPositive = result.every((v, _i, _a) -> { return v > 0; });
    assertTrue(allPositive);
    }

    @Test
    void testInt16ArrayWithTestFour034() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 5);
    boolean hasValue = result.some((v, _i, _a) -> { return v == 5; });
    assertTrue(hasValue);
    }

    @Test
    void testInt16ArrayWithTestFour035() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    Integer found = result.find((v, _i, _a) -> { return v == 99; });
    assertEqual(99, found);
    }

    @Test
    void testInt16ArrayWithTestFour036() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 5);
    int sum = result.reduce((acc, v, _i, _a)-> { return acc + v; }, 0);
    assertEqual(55, sum);
    }

    @Test
    void testInt16ArrayWithTestFour037() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    Int16Array copied = Int16Array.from(result);
    Integer actual1 = copied.get(0);
    assertEqual(99, actual1);
    int actual2 = copied.length();
    assertEqual(3, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour038() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 99);
    Int16Array copied = Int16Array.from(result);
    Integer actual1 = copied.get(0);
    assertEqual(99, actual1);
    int actual2 = copied.length();
    assertEqual(3, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour039() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    try {
    arr.with(arr.length(), sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.length();
    assertEqual(3, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour040() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.with(arr.length(), 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.length();
    assertEqual(3, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour041() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    try {
    arr.with(-4, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(1);
    assertEqual(20, actual3);
    Integer actual4 = arr.get(2);
    assertEqual(30, actual4);
    }

    @Test
    void testInt16ArrayWithTestFour042() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.with(-4, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(1);
    assertEqual(20, actual3);
    Integer actual4 = arr.get(2);
    assertEqual(30, actual4);
    }

    @Test
    void testInt16ArrayWithTestFour043() {
    Int16Array arr = new Int16Array();
    int sv = (int) 99;
    try {
    arr.with(0, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.length();
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour044() {
    Int16Array arr = new Int16Array();
    try {
    arr.with(0, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.length();
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour045() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 99;
    try {
    arr.with(5, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour046() {
    Int16Array arr = Int16Array.of(10, 20);
    try {
    arr.with(5, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour047() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    try {
    arr.with(10, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.byteLength();
    assertEqual(6, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour048() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.with(10, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    int actual2 = arr.byteLength();
    assertEqual(6, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour049() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 99;
    try {
    arr.with(5, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    arr.set(0, 88);
    Integer actual2 = arr.get(0);
    assertEqual(88, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour050() {
    Int16Array arr = Int16Array.of(10, 20);
    try {
    arr.with(5, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    arr.set(0, 88);
    Integer actual2 = arr.get(0);
    assertEqual(88, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour051() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour052() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 99;
    try {
    arr.with(arr.length() + 2, sv);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    try {
    arr.with(arr.length() + 2, 99);
    fail();
    } catch (RuntimeException e) {
    String actual2 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual2);
    }
    }

    @Test
    void testInt16ArrayWithTestFour053() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    boolean sameRef = result == arr;
    assertFalse(sameRef);
    }

    @Test
    void testInt16ArrayWithTestFour054() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 99);
    boolean sameRef = result == arr;
    assertFalse(sameRef);
    }

    @Test
    void testInt16ArrayWithTestFour055() {
    Int16Array arr = Int16Array.of(10, 20);
    int sv = (int) 5;
    Int16Array result = arr.with(0, sv);
    boolean sameBuf = result.buffer() == arr.buffer();
    assertFalse(sameBuf);
    }

    @Test
    void testInt16ArrayWithTestFour056() {
    Int16Array arr = Int16Array.of(10, 20);
    Int16Array result = arr.with(0, 5);
    boolean sameBuf = result.buffer() == arr.buffer();
    assertFalse(sameBuf);
    }

    @Test
    void testInt16ArrayWithTestFour057() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    arr.set(0, 888);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour058() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    result.set(0, 777);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour059() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 11;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(1, sv);
    r1.set(1, 999);
    Integer actual1 = r2.get(1);
    assertEqual(11, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour060() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array r1 = arr.with(0, 11);
    Int16Array r2 = arr.with(1, 11);
    r1.set(1, 999);
    Integer actual1 = r2.get(1);
    assertEqual(11, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour061() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    int sv = (int) 11;
    int nv = 22;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = r1.with(1, nv);
    Int16Array r3 = r2.with(2, 33);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayWithTestFour062() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.byteOffset();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour063() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array result = arr.with(0, 99);
    int actual1 = result.byteOffset();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour064() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv1 = (int) 11;
    int sv2 = (int) 22;
    Int16Array r1 = arr.with(0, sv1);
    Int16Array r2 = r1.with(1, sv2);
    r1.set(2, 999);
    Integer actual1 = r2.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour065() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array r1 = arr.with(0, 11);
    Int16Array r2 = r1.with(1, 22);
    r1.set(2, 999);
    Integer actual1 = r2.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour066() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int sv = (int) 99;
    int nv = 99;
    Int16Array r1 = arr.with(0, sv);
    Int16Array r2 = arr.with(0, nv);
    r1.set(0, 777);
    Integer actual1 = r2.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestFour067() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int sv = (int) 99;
    Int16Array result = arr.with(0, sv);
    int actual1 = result.length();
    assertEqual(5, actual1);
    int actual2 = result.length();
    int expected2 = arr.length();
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour068() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    int actual1 = result.length();
    assertEqual(5, actual1);
    int actual2 = result.length();
    int expected2 = arr.length();
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour069() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(1);
    assertEqual(20, actual1);
    Integer actual2 = result.get(2);
    assertEqual(30, actual2);
    Integer actual3 = result.get(3);
    assertEqual(40, actual3);
    }

    @Test
    void testInt16ArrayWithTestFour070() {
    Int16Array arr = Int16Array.of(-100, -200, 30);
    Int16Array result = arr.with(0, 50);
    Integer actual1 = result.get(1);
    assertEqual(-200, actual1);
    Integer actual2 = result.get(2);
    assertEqual(30, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour071() {
    Int16Array arr = Int16Array.of(32767, -32768, 0);
    int sv = (int) 100;
    Int16Array result = arr.with(2, sv);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-32768, actual2);
    }

    @Test
    void testInt16ArrayWithTestFour072() {
    Int16Array arr = Int16Array.of(32767, -32768, 0);
    Int16Array result = arr.with(2, 100);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-32768, actual2);
    }
}
