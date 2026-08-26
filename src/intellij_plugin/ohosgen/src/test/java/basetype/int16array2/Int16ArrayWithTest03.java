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
import basetype.common.RangeError;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayWithTest03 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayWithTest03 extends BasTest {

    @Test
    void testInt16ArrayWithTestThree001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(1, 88);
    Integer actual1 = result.get(1);
    assertEqual(88, actual1);
    Integer actual2 = result.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(4, 77);
    Integer actual1 = result.get(4);
    assertEqual(77, actual1);
    Integer actual2 = result.get(3);
    assertEqual(40, actual2);}

    @Test
    void testInt16ArrayWithTestThree003() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 55);
    Integer actual1 = result.get(2);
    assertEqual(55, actual1);
    Integer actual2 = result.get(0);
    assertEqual(10, actual2);
    Integer actual3 = result.get(4);
    assertEqual(50, actual3);}

    @Test
    void testInt16ArrayWithTestThree004() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(-1, 99);
    Integer actual1 = result.get(4);
    assertEqual(99, actual1);
    Integer actual2 = result.get(3);
    assertEqual(40, actual2);}

    @Test
    void testInt16ArrayWithTestThree005() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(-5, 11);
    Integer actual1 = result.get(0);
    assertEqual(11, actual1);
    Integer actual2 = result.get(4);
    assertEqual(50, actual2);}

    @Test
    void testInt16ArrayWithTestThree006() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(-2, 66);
    Integer actual1 = result.get(3);
    assertEqual(66, actual1);
    Integer actual2 = result.get(4);
    assertEqual(50, actual2);}

    @Test
    void testInt16ArrayWithTestThree007() {
    Int16Array arr = new Int16Array(new int[] {42});
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    int actual2 = result.length();
    assertEqual(1, actual2);}

    @Test
    void testInt16ArrayWithTestThree008() {
    Int16Array arr = new Int16Array(new int[] {42});
    Int16Array result = arr.with(-1, 77);
    Integer actual1 = result.get(0);
    assertEqual(77, actual1);
    int actual2 = result.length();
    assertEqual(1, actual2);}

    @Test
    void testInt16ArrayWithTestThree009() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    Int16Array result = arr.with(0, 111);
    Integer actual1 = result.get(0);
    assertEqual(111, actual1);
    Integer actual2 = result.get(1);
    assertEqual(200, actual2);}

    @Test
    void testInt16ArrayWithTestThree010() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    Int16Array result = arr.with(1, 222);
    Integer actual1 = result.get(1);
    assertEqual(222, actual1);
    Integer actual2 = result.get(0);
    assertEqual(100, actual2);}

    @Test
    void testInt16ArrayWithTestThree011() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    Int16Array result = arr.with(-1, 333);
    Integer actual1 = result.get(1);
    assertEqual(333, actual1);
    Integer actual2 = result.get(0);
    assertEqual(100, actual2);}

    @Test
    void testInt16ArrayWithTestThree012() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    Int16Array result = arr.with(-2, 444);
    Integer actual1 = result.get(0);
    assertEqual(444, actual1);
    Integer actual2 = result.get(1);
    assertEqual(200, actual2);}

    @Test
    void testInt16ArrayWithTestThree013() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 0);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree014() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 1);
    Integer actual1 = result.get(1);
    assertEqual(1, actual1);}

    @Test
    void testInt16ArrayWithTestThree015() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -1);
    Integer actual1 = result.get(1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayWithTestThree016() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 32767);
    Integer actual1 = result.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree017() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -32768);
    Integer actual1 = result.get(1);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree018() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 32768);
    Integer actual1 = result.get(1);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree019() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -32769);
    Integer actual1 = result.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree020() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 65535);
    Integer actual1 = result.get(1);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayWithTestThree021() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 3.7);
    Integer actual1 = result.get(1);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayWithTestThree022() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -3.7);
    Integer actual1 = result.get(1);
    assertEqual(-3, actual1);}

    @Test
    void testInt16ArrayWithTestThree023() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 32767.9);
    Integer actual1 = result.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree024() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -32768.9);
    Integer actual1 = result.get(1);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree025() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 0.5);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree026() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -0.5);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree027() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, Double.NaN);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree028() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, Double.POSITIVE_INFINITY);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree029() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -Double.POSITIVE_INFINITY);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree030() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 32767.0);
    Integer actual1 = result.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree031() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -32768.0);
    Integer actual1 = result.get(1);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree032() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 65536);
    Integer actual1 = result.get(1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree033() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 32767.1);
    Integer actual1 = result.get(1);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree034() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, -32768.1);
    Integer actual1 = result.get(1);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree035() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    int actual1 = result.length();
    assertEqual(5, actual1);
    Integer actual2 = result.get(2);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArrayWithTestThree036() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    int actual1 = result.length();
    assertEqual(5, actual1);
    int actual2 = result.length();
    int expected2 = arr.length();
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayWithTestThree037() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int oldLen = arr.length();
    Int16Array result = arr.with(2, 99);
    int actual1 = arr.length();
    int expected1 = oldLen;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayWithTestThree038() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);}

    @Test
    void testInt16ArrayWithTestThree039() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    boolean actual1 = result.buffer() != arr.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArrayWithTestThree040() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 20);
    Integer actual1 = result.get(1);
    assertEqual(20, actual1);
    boolean actual2 = result != arr;
    assertTrue(actual2);}

    @Test
    void testInt16ArrayWithTestThree041() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array r1 = arr.with(0, 11);
    Int16Array r2 = r1.with(1, 22);
    Integer actual1 = r2.get(0);
    assertEqual(11, actual1);
    Integer actual2 = r2.get(1);
    assertEqual(22, actual2);
    Integer actual3 = r1.get(0);
    assertEqual(11, actual3);
    Integer actual4 = r1.get(1);
    assertEqual(20, actual4);
    Integer actual5 = arr.get(0);
    assertEqual(10, actual5);}

    @Test
    void testInt16ArrayWithTestThree042() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array r1 = arr.with(0, 111);
    Int16Array r2 = arr.with(0, 222);
    Integer actual1 = r1.get(0);
    assertEqual(111, actual1);
    Integer actual2 = r2.get(0);
    assertEqual(222, actual2);
    Integer actual3 = r1.get(1);
    assertEqual(20, actual3);
    Integer actual4 = r2.get(1);
    assertEqual(20, actual4);}

    @Test
    void testInt16ArrayWithTestThree043() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 99);
    Int16Array copy = new Int16Array(result);
    Integer actual1 = copy.get(0);
    assertEqual(10, actual1);
    Integer actual2 = copy.get(1);
    assertEqual(99, actual2);
    Integer actual3 = copy.get(2);
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayWithTestThree044() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 99);
    Int16Array copy = Int16Array.from(result);
    Integer actual1 = copy.get(0);
    assertEqual(10, actual1);
    Integer actual2 = copy.get(1);
    assertEqual(99, actual2);
    Integer actual3 = copy.get(2);
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayWithTestThree045() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    String actual1 = result.join(",");
    assertEqual("10,20,99,40,50", actual1);}

    @Test
    void testInt16ArrayWithTestThree046() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(10000, 99);
    fail();} catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);}
    }

    @Test
    void testInt16ArrayWithTestThree047() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    try {
    arr.with(-10000, 99);
    fail();} catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);}
    }

    @Test
    void testInt16ArrayWithTestThree048() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    try {
    arr.with(2, 99);
    fail();} catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);}
    }

    @Test
    void testInt16ArrayWithTestThree049() {
    Int16Array arr = new Int16Array(new int[] {100, 200});
    try {
    arr.with(-3, 99);
    fail();} catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);}
    }

    @Test
    void testInt16ArrayWithTestThree050() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(0, 32767);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree051() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(0, -32768);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree052() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(-1, Double.NaN);
    Integer actual1 = result.get(4);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(4);
    assertEqual(50, actual2);}

    @Test
    void testInt16ArrayWithTestThree053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(-1, Double.POSITIVE_INFINITY);
    Integer actual1 = result.get(4);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayWithTestThree054() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(4, 32768);
    Integer actual1 = result.get(4);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayWithTestThree055() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(4, -32769);
    Integer actual1 = result.get(4);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayWithTestThree056() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(1, 32767);
    Integer actual1 = result.get(0);
    assertEqual(100, actual1);
    Integer actual2 = result.get(1);
    assertEqual(32767, actual2);
    Integer actual3 = result.get(2);
    assertEqual(300, actual3);}

    @Test
    void testInt16ArrayWithTestThree057() {
    Int16Array arr = new Int16Array(new int[] {32767, 32767, 32767});
    Int16Array result = arr.with(1, 0);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(0, actual2);
    Integer actual3 = result.get(2);
    assertEqual(32767, actual3);}

    @Test
    void testInt16ArrayWithTestThree058() {
    Int16Array arr = new Int16Array(new int[] {-32768, -32768, -32768});
    Int16Array result = arr.with(1, 0);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = result.get(1);
    assertEqual(0, actual2);
    Integer actual3 = result.get(2);
    assertEqual(-32768, actual3);}

    @Test
    void testInt16ArrayWithTestThree059() {
    Int16Array arr = new Int16Array(new int[] {32767, -32768, 100, -200});
    Int16Array result = arr.with(2, 0);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-32768, actual2);
    Integer actual3 = result.get(2);
    assertEqual(0, actual3);
    Integer actual4 = result.get(3);
    assertEqual(-200, actual4);}

    @Test
    void testInt16ArrayWithTestThree060() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 888);
    int actual1 = result.length();
    assertEqual(5, actual1);}

    @Test
    void testInt16ArrayWithTestThree061() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array rPos = arr.with(0, 99);
    Int16Array rNeg = arr.with(-5, 99);
    Integer actual1 = rPos.get(0);
    Integer expected1 = rNeg.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = rPos.get(0);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArrayWithTestThree062() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array rPos = arr.with(4, 77);
    Int16Array rNeg = arr.with(-1, 77);
    Integer actual1 = rPos.get(4);
    Integer expected1 = rNeg.get(4);
    assertEqual(expected1, actual1);
    Integer actual2 = rPos.get(4);
    assertEqual(77, actual2);}

    @Test
    void testInt16ArrayWithTestThree063() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array rPos = arr.with(1, 55);
    Int16Array rNeg = arr.with(-4, 55);
    Integer actual1 = rPos.get(1);
    Integer expected1 = rNeg.get(1);
    assertEqual(expected1, actual1);
    Integer actual2 = rPos.get(1);
    assertEqual(55, actual2);}

    @Test
    void testInt16ArrayWithTestThree064() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree065() {
    Int16Array arr = Int16Array.from(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(0, 88);
    Integer actual1 = result.get(0);
    assertEqual(88, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree066() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 0, 5);
    arr.set(0, 10);
    arr.set(1, 20);
    Int16Array result = arr.with(0, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayWithTestThree067() {
    Int16Array arr = new Int16Array(new int[] {-100, -200, -300});
    Int16Array result = arr.with(1, -999);
    Integer actual1 = result.get(0);
    assertEqual(-100, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-999, actual2);
    Integer actual3 = result.get(2);
    assertEqual(-300, actual3);}

    @Test
    void testInt16ArrayWithTestThree068() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array r1 = arr.with(1, 111);
    Int16Array r2 = r1.with(1, 222);
    Int16Array r3 = r2.with(1, 333);
    Integer actual1 = r3.get(1);
    assertEqual(333, actual1);
    Integer actual2 = r2.get(1);
    assertEqual(222, actual2);
    Integer actual3 = r1.get(1);
    assertEqual(111, actual3);}

    @Test
    void testInt16ArrayWithTestThree069() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 99);
    Int16Array.EntriesIterator it = result.entries();
    EntryResult e0 = it.next();
    EntryResult e1 = it.next();
    EntryResult e2 = it.next();
    int actual1 = e0.value[0];
    assertEqual(0, actual1);
    int actual2 = e0.value[1];
    assertEqual(10, actual2);
    int actual3 = e1.value[0];
    assertEqual(1, actual3);
    int actual4 = e1.value[1];
    assertEqual(99, actual4);
    int actual5 = e2.value[0];
    assertEqual(2, actual5);
    int actual6 = e2.value[1];
    assertEqual(30, actual6);}

    @Test
    void testInt16ArrayWithTestThree070() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 77);
    Int16Array.KeyIterator it = result.values();
    int actual1 = it.next().value;
    assertEqual(77, actual1);
    int actual2 = it.next().value;
    assertEqual(20, actual2);
    int actual3 = it.next().value;
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayWithTestThree071() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    Int16Array filled = result.fill(0);
    Integer actual1 = filled.get(2);
    assertEqual(0, actual1);
    boolean actual2 = filled == result;
    assertTrue(actual2);}

    @Test
    void testInt16ArrayWithTestThree072() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(0, 99);
    Int16Array reversed = result.reverse();
    Integer actual1 = reversed.get(4);
    assertEqual(99, actual1);
    Integer actual2 = reversed.get(0);
    assertEqual(50, actual2);}

    @Test
    void testInt16ArrayWithTestThree073() {
    Int16Array arr = new Int16Array(new int[] {100, 20, 300, 40, 500});
    Int16Array result = arr.with(2, 150);
    Int16Array sorted = result.sort();
    Integer actual1 = sorted.get(0);
    assertEqual(20, actual1);
    Integer actual2 = sorted.get(2);
    assertEqual(100, actual2);}

    @Test
    void testInt16ArrayWithTestThree074() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array result = arr.with(2, 99);
    Int16Array sliced = result.slice(0, 3);
    Integer actual1 = sliced.get(2);
    assertEqual(99, actual1);
    sliced.set(0, 999);
    Integer actual2 = result.get(0);
    assertEqual(10, actual2);}
}
