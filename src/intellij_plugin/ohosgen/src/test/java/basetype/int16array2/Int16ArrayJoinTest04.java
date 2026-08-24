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
 * Int16ArrayJoinTest04 —— Int16Array 方法族测试。
 */
public class Int16ArrayJoinTest04 extends BasTest {

    @Test
    void testInt16ArrayJoinTestFour001() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.join();
    Integer actual1 = arr.get(1);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArrayJoinTestFour002() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.join();
    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArrayJoinTestFour003() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String r1 = arr.join("|");
    String r2 = arr.join("|");
    String r3 = arr.join("|");
    assertEqual(r2, r1);
    assertEqual(r3, r2);
    }

    @Test
    void testInt16ArrayJoinTestFour004() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.join(",");
    String result = arr.join("|");
    assertEqual("10|20|30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour005() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.set(0, 99);
    String result = arr.join();
    assertEqual("99,20,30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour006() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.set(2, 88);
    String result = arr.join();
    assertEqual("10,20,88", result);
    }

    @Test
    void testInt16ArrayJoinTestFour007() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.set(1, 55);
    String result = arr.join("-");
    assertEqual("10-55-30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour008() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(-1);
    String result = arr.join("|");
    assertEqual("-1|-1|-1", result);
    }

    @Test
    void testInt16ArrayJoinTestFour009() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.fill(99, 1, 3);
    String result = arr.join();
    assertEqual("10,99,99,40,50", result);
    }

    @Test
    void testInt16ArrayJoinTestFour010() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(-32768);
    String result = arr.join(",");
    assertEqual("-32768,-32768,-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestFour011() {
    Int16Array arr = Int16Array.of(-5, 100, -300, 50);
    arr.sort();
    String result = arr.join("|");
    assertEqual("-300|-5|50|100", result);
    }

    @Test
    void testInt16ArrayJoinTestFour012() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.copyWithin(0, 2);
    String result = arr.join();
    assertEqual("30,40,30,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.copyWithin(-2, 0);
    String result = arr.join();
    assertEqual("10,20,30,10,20", result);
    }

    @Test
    void testInt16ArrayJoinTestFour014() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array src = Int16Array.of(99, 88);
    arr.set(src, 1);
    String result = arr.join();
    assertEqual("10,99,88,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour015() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.set(0, 1);
    arr.set(2, 3);
    arr.set(3, 5);
    String result = arr.join();
    assertEqual("1,20,3,5", result);
    }

    @Test
    void testInt16ArrayJoinTestFour016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 2);
    Int16Array view2 = new Int16Array(buf, 4, 2);
    view1.set(0, 99);
    view1.set(1, 88);
    view2.set(0, 11);
    view2.set(1, 22);
    String result = view2.join();
    assertEqual("11,22", result);
    }

    @Test
    void testInt16ArrayJoinTestFour017() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 2, 2);
    view1.set(0, 100);
    view1.set(1, 200);
    String secondResult = view2.join();
    assertEqual("200,0", secondResult);
    }

    @Test
    void testInt16ArrayJoinTestFour018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 2, 2);
    view2.set(0, 77);
    String firstResult = view1.join();
    assertEqual("0,77,0,0", firstResult);
    }

    @Test
    void testInt16ArrayJoinTestFour019() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    sub.set(0, 99);
    String result = parent.join();
    assertEqual("10,99,30,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour020() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    parent.set(1, 55);
    String result = sub.join();
    assertEqual("55,30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour021() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    parent.set(0, 999);
    String result = sub.join();
    assertEqual("20,30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour022() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = parent.subarray(0, 2);
    Int16Array sub2 = parent.subarray(3, 5);
    sub1.set(0, 99);
    String result = sub2.join();
    assertEqual("40,50", result);
    }

    @Test
    void testInt16ArrayJoinTestFour023() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = parent.subarray(0, 3);
    Int16Array sub2 = parent.subarray(1, 4);
    sub1.set(1, 77);
    String result = sub2.join();
    assertEqual("77,30,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour024() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = parent.subarray(1, 4);
    parent.fill(88, 1, 4);
    String result = sub.join();
    assertEqual("88,88,88", result);
    }

    @Test
    void testInt16ArrayJoinTestFour025() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    parent.reverse();
    String result = sub.join();
    assertEqual("30,20", result);
    }

    @Test
    void testInt16ArrayJoinTestFour026() {
    Int16Array parent = Int16Array.of(10, 20, 30);
    Int16Array sub = parent.subarray(1, 2);
    parent.set(1, 55);
    String result = sub.join();
    assertEqual("55", result);
    }

    @Test
    void testInt16ArrayJoinTestFour027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 2, 2);
    view1.fill(5);
    String result = view2.join();
    assertEqual("5,5", result);
    }

    @Test
    void testInt16ArrayJoinTestFour028() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array left = new Int16Array(buf, 0, 2);
    Int16Array mid = new Int16Array(buf, 4, 2);
    Int16Array right = new Int16Array(buf, 8, 2);
    left.fill(1);
    mid.fill(2);
    right.fill(3);
    String mResult = mid.join();
    String rResult = right.join();
    assertEqual("2,2", mResult);
    assertEqual("3,3", rResult);
    }

    @Test
    void testInt16ArrayJoinTestFour029() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array full = new Int16Array(buf, 0, 5);
    Int16Array part = new Int16Array(buf, 4, 2);
    full.fill(7);
    String result = part.join(",");
    assertEqual("7,7", result);
    }

    @Test
    void testInt16ArrayJoinTestFour030() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array view = new Int16Array(buf, 0, 2);
    view.set(0, 42);
    view.set(1, 84);
    String result = view.join();
    assertEqual("42,84", result);
    }

    @Test
    void testInt16ArrayJoinTestFour031() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    sub.fill(-32768);
    String result = parent.join();
    assertEqual("10,-32768,-32768,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour032() {
    Int16Array arr = new Int16Array(1);
    arr.set(0, -3.7);
    String result = arr.join();
    assertEqual("-3", result);
    }

    @Test
    void testInt16ArrayJoinTestFour033() {
    Int16Array arr = new Int16Array(3);
    arr.set(0, 32768);
    arr.set(1, 32769);
    arr.set(2, -32769);
    String result = arr.join("|");
    assertEqual("-32768|-32767|32767", result);
    }

    @Test
    void testInt16ArrayJoinTestFour034() {
    Int16Array arr2 = new Int16Array(6);
    arr2.set(0, 0);
    arr2.set(1, 1);
    arr2.set(2, -1);
    arr2.set(3, 32768);
    arr2.set(4, -32769);
    arr2.set(5, 32767);
    String result = arr2.join();
    assertEqual("0,1,-1,-32768,32767,32767", result);
    }

    @Test
    void testInt16ArrayJoinTestFour035() {
    Int16Array arr = Int16Array.of(-32768, -1, 0, 1, 32767);
    String result = arr.join();
    assertEqual("-32768,-1,0,1,32767", result);
    }

    @Test
    void testInt16ArrayJoinTestFour036() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    String result = arr.reverse().join("|");
    assertEqual("40|30|20|10", result);
    }

    @Test
    void testInt16ArrayJoinTestFour037() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    String result = arr.fill(0, 2).reverse().join("-");
    assertEqual("0-0-20-10", result);
    }

    @Test
    void testInt16ArrayJoinTestFour038() {
    Int16Array arr = Int16Array.of(40, 10, 50, 20);
    String result = arr.sort().reverse().join();
    assertEqual("50,40,20,10", result);
    }

    @Test
    void testInt16ArrayJoinTestFour039() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    String result = arr.copyWithin(0, 2).reverse().join();
    assertEqual("40,30,40,30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour040() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    String result = arr.subarray(1, 4).fill(0).join("|");
    assertEqual("0|0|0", result);
    }

    @Test
    void testInt16ArrayJoinTestFour041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.slice(1, 4);
    String result = arr.join();
    assertEqual("10,20,30,40,50", result);
    }

    @Test
    void testInt16ArrayJoinTestFour042() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String result = arr.toReversed().join();
    String origResult = arr.join();
    assertEqual("30,20,10", result);
    assertEqual("10,20,30", origResult);
    }

    @Test
    void testInt16ArrayJoinTestFour043() {
    Int16Array arr = Int16Array.of(30, 10, 20);
    String result = arr.toSorted().join();
    String origResult = arr.join();
    assertEqual("10,20,30", result);
    assertEqual("30,10,20", origResult);
    }

    @Test
    void testInt16ArrayJoinTestFour044() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array replaced = arr.with(1, 99);
    String replacedResult = replaced.join();
    String origResult = arr.join();
    assertEqual("10,99,30", replacedResult);
    assertEqual("10,20,30", origResult);
    }

    @Test
    void testInt16ArrayJoinTestFour045() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String joined = arr.join();
    String[] parts = joined.split(java.util.regex.Pattern.quote(","));
    int actual1 = parts.length;
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayJoinTestFour046() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String joined = arr.join("|");
    String[] parts = joined.split(java.util.regex.Pattern.quote("|"));
    int actual1 = parts.length;
    assertEqual(3, actual1);
    String actual2 = parts[0];
    assertEqual("10", actual2);
    String actual3 = parts[1];
    assertEqual("20", actual3);
    String actual4 = parts[2];
    assertEqual("30", actual4);
    }

    @Test
    void testInt16ArrayJoinTestFour047() {
    Int16Array arr = Int16Array.of(10, 20);
    String joined = arr.join("");
    int length = joined.length();
    assertEqual(4, length);
    }

    @Test
    void testInt16ArrayJoinTestFour048() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    String joined = arr.join(",");
    String[] parts = joined.split(java.util.regex.Pattern.quote(","));
    int firstPart = Integer.parseInt(parts[0]);
    int secondPart = Integer.parseInt(parts[1]);
    int thirdPart = Integer.parseInt(parts[2]);
    Int16Array newArr = Int16Array.of(firstPart, secondPart, thirdPart);
    String result = newArr.join(",");
    assertEqual("10,20,30", result);
    }

    @Test
    void testInt16ArrayJoinTestFour049() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array full = new Int16Array(buf, 0, 5);
    full.fill(1);
    Int16Array part = new Int16Array(buf, 4, 2);
    part.set(0, 99);
    part.set(1, 88);
    String result = part.join();
    assertEqual("99,88", result);
    }

    @Test
    void testInt16ArrayJoinTestFour050() {
    Int16Array arr = new Int16Array(5);
    for (int i = 0; i < 5; i++) {
    arr.set(i, i * 10);
    }
    String result = arr.join();
    assertEqual("0,10,20,30,40", result);
    }

    @Test
    void testInt16ArrayJoinTestFour051() {
    Int16Array arr = new Int16Array(4);
    for (int i = 0; i < 4; i++) {
    arr.set(i, 40 - i * 10);
    }
    String result = arr.join("-");
    assertEqual("40-30-20-10", result);
    }

    @Test
    void testInt16ArrayJoinTestFour052() {
    Int16Array arr = Int16Array.of(7, 7, 7, 7);
    String result = arr.join();
    assertEqual("7,7,7,7", result);
    }

    @Test
    void testInt16ArrayJoinTestFour053() {
    Int16Array arr = Int16Array.of(32767, -32768, 32767, -32768);
    String result = arr.join("|");
    assertEqual("32767|-32768|32767|-32768", result);
    }

    @Test
    void testInt16ArrayJoinTestFour054() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array src = Int16Array.of(99, 88);
    arr.set(src, 2);
    String result = arr.join();
    assertEqual("10,20,99,88,50", result);
    }

    @Test
    void testInt16ArrayJoinTestFour055() {
    Int16Array arr = Int16Array.of(50, 40, 30, 20, 10);
    String result = arr.fill(0, 3).sort().join();
    assertEqual("0,0,30,40,50", result);
    }

    @Test
    void testInt16ArrayJoinTestFour056() {
    Int16Array arr = new Int16Array(6);
    arr.fill(1, 0, 2);
    arr.fill(2, 2, 4);
    arr.fill(3, 4, 6);
    String result = arr.join();
    assertEqual("1,1,2,2,3,3", result);
    }

    @Test
    void testInt16ArrayJoinTestFour057() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40);
    Int16Array sub = parent.subarray(1, 3);
    parent.fill(99, 1, 3);
    String subResult = sub.join();
    String parentResult = parent.join();
    assertEqual("99,99", subResult);
    assertEqual("10,99,99,40", parentResult);
    }
}
