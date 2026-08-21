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

package basetype;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayLastIndexOfTest04 —— Int16Array 方法族测试。
 */
public class Int16ArrayLastIndexOfTest04 extends BasTest {

    @Test
    void testInt16ArrayLastIndexOfTestFour001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(20);
    assertEqual(1, result);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(99);
    assertEqual(-1, result);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour003() {
    Int16Array arr = new Int16Array(new int[] {});
    int result = arr.lastIndexOf(5);
    assertEqual(-1, result);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour004() {
    Int16Array arr = new Int16Array(new int[] {});
    int beforeByteLength = arr.byteLength();
    int result = arr.lastIndexOf(0);
    assertEqual(-1, result);
    int actual1 = arr.byteLength();
    int expected1 = beforeByteLength;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour005() {
    Int16Array arr = new Int16Array(new int[] {100, 32767, 200});
    int result = arr.lastIndexOf(32767);
    assertEqual(1, result);
    Integer actual1 = arr.get(1);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour006() {
    Int16Array arr = new Int16Array(new int[] {100, -32768, 200});
    int result = arr.lastIndexOf(-32768);
    assertEqual(1, result);
    Integer actual1 = arr.get(1);
    assertEqual(-32768, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour007() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 7, 9, 7});
    int result = arr.lastIndexOf(7);
    assertEqual(4, result);
    Integer actual1 = arr.get(0);
    assertEqual(7, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(7, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(7, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour008() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.lastIndexOf(4, -2);
    assertEqual(3, result);
    int actual1 = arr.length();
    assertEqual(5, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour009() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15});
    int result = arr.lastIndexOf(5, 0);
    assertEqual(0, result);
    Integer actual1 = arr.get(1);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(15, actual2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour010() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(30, 100);
    assertEqual(2, result);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour011() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    int result = arr.lastIndexOf(2);
    assertEqual(1, result);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(3, actual2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour012() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44});
    int beforeLen = arr.length();
    int result = arr.lastIndexOf(22);
    assertEqual(1, result);
    int actual1 = arr.length();
    int expected1 = beforeLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour013() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 3);
    int beforeOffset = arr.byteOffset();
    int result = arr.lastIndexOf(0);
    assertEqual(2, result);
    int actual1 = arr.byteOffset();
    int expected1 = beforeOffset;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour014() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 5, 20, 5});
    int lastIdx = arr.lastIndexOf(5);
    int prevIdx = arr.lastIndexOf(5, lastIdx - 1);
    assertEqual(2, prevIdx);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour015() {
    Int16Array arr = new Int16Array(new int[] {9, 9, 9, 9});
    int p1 = arr.lastIndexOf(9);
    int p2 = arr.lastIndexOf(9, p1 - 1);
    int p3 = arr.lastIndexOf(9, p2 - 1);
    assertEqual(3, p1);
    assertEqual(2, p2);
    assertEqual(1, p3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour016() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int notFound = arr.lastIndexOf(99);
    int result = arr.lastIndexOf(10, notFound - 1);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour017() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 4, 1, 5});
    int posOf4 = arr.lastIndexOf(4);
    assertEqual(2, posOf4);
    Int16Array sub = new Int16Array(posOf4);
    int actual1 = sub.length();
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour018() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 2, 5});
    int lastPosOf2 = arr.lastIndexOf(2);
    arr.set(lastPosOf2, 99);
    Integer actual1 = arr.get(3);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour019() {
    Int16Array arr = new Int16Array(new int[] {6, 1, 6, 2, 6});
    int secondLastPos = arr.lastIndexOf(6, arr.lastIndexOf(6) - 1);
    assertEqual(2, secondLastPos);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour020() {
    Int16Array arr = new Int16Array(new int[] {8, 3, 8, 7, 8});
    int firstPos = arr.indexOf(8);
    int lastPos = arr.lastIndexOf(8);
    assertEqual(0, firstPos);
    assertEqual(4, lastPos);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour021() {
    Int16Array arr = new Int16Array(new int[] {10, 5, 20, 5, 30});
    int lastPosOf20 = arr.lastIndexOf(20);
    int lastPosOf5Before20 = arr.lastIndexOf(5, lastPosOf20);
    assertEqual(1, lastPosOf5Before20);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour022() {
    Int16Array arr = new Int16Array(new int[] {7, 7, 7, 7});
    int p3 = arr.lastIndexOf(7);
    int p2 = arr.lastIndexOf(7, p3 - 1);
    int p1 = arr.lastIndexOf(7, p2 - 1);
    int p0 = arr.lastIndexOf(7, p1 - 1);
    int none = arr.lastIndexOf(7, p0 - 1);
    assertEqual(3, p3);
    assertEqual(0, p0);
    assertEqual(3, none);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour023() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int missing = arr.lastIndexOf(0);
    int result = arr.lastIndexOf(4, arr.length() + missing);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour024() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 11, 33, 11});
    int lastPos = arr.lastIndexOf(11);
    int earlierPos = arr.lastIndexOf(11, lastPos - 1);
    assertEqual(2, earlierPos);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour025() {
    Int16Array arr = new Int16Array(new int[] {3, 7, 3, 7, 3});
    int lastOf7 = arr.lastIndexOf(7);
    int indexOf7After = arr.indexOf(7, lastOf7 + 1);
    assertEqual(-1, indexOf7After);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour026() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.set(2, 99);
    int result = arr.lastIndexOf(99);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour027() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.set(2, 99);
    int result = arr.lastIndexOf(30);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour028() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.set(2, 88);
    int result = arr.lastIndexOf(88, 1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour029() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.set(1, 77);
    int result = arr.lastIndexOf(77, 1);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour030() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    arr.set(2, 60);
    int result = arr.lastIndexOf(50);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour031() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.set(0, 50);
    arr.set(2, 60);
    int result = arr.lastIndexOf(60);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour032() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.set(0, 7);
    arr.set(1, 7);
    arr.set(2, 7);
    arr.set(3, 7);
    int result = arr.lastIndexOf(7);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour033() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.set(1, 55);
    int r1 = arr.lastIndexOf(55);
    int r2 = arr.lastIndexOf(55);
    assertEqual(1, r1);
    assertEqual(r1, r2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour034() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    arr.fill(99);
    int result = arr.lastIndexOf(99);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour035() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(7, 1, 3);
    int result = arr.lastIndexOf(7);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour036() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(7, 2, 4);
    int result = arr.lastIndexOf(7, 1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour037() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(7, 1, 3);
    int result = arr.lastIndexOf(40);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour038() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.fill(32767);
    int result = arr.lastIndexOf(32767);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour039() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.reverse();
    int result = arr.lastIndexOf(10);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour040() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.reverse();
    int result = arr.lastIndexOf(30);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour041() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20});
    arr.reverse();
    arr.reverse();
    int result = arr.lastIndexOf(15);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour042() {
    Int16Array arr = new Int16Array(new int[] {1, 5, 9});
    arr.reverse();
    int result = arr.lastIndexOf(5);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour043() {
    Int16Array arr = new Int16Array(new int[] {3, 7, 3, 7, 3});
    arr.reverse();
    int result = arr.lastIndexOf(7);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour044() {
    Int16Array arr = new Int16Array(new int[] {50, 10, 30, 20, 40});
    arr.sort();
    int result = arr.lastIndexOf(50);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour045() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3);
    int result = arr.lastIndexOf(44);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour046() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 3);
    int result = arr.lastIndexOf(44, 3);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour047() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.copyWithin(0, 2);
    int result = arr.lastIndexOf(11);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour048() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 3);
    int result = arr.lastIndexOf(4);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour049() {
    Int16Array target = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array source = new Int16Array(new int[] {99, 88});
    target.set(source);
    int result = target.lastIndexOf(88);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour050() {
    Int16Array target = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array source = new Int16Array(new int[] {77, 66});
    target.set(source, 2);
    int result = target.lastIndexOf(66);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour051() {
    Int16Array target = new Int16Array(new int[] {10, 20, 30, 40});
    Int16Array source = new Int16Array(new int[] {7, 8});
    target.set(source, 1);
    int result = target.lastIndexOf(40);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour052() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.set(1, 98304);
    int result = arr.lastIndexOf(arr.get(1));
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour053() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.set(0, 32768);
    arr.set(3, 32768);
    int result = arr.lastIndexOf(-32768);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour054() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.set(1, 32768);
    arr.set(3, 32768);
    int result = arr.lastIndexOf(-32768, 2);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour055() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(-32769);
    int result = arr.lastIndexOf(32767);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour056() {
    Int16Array target = new Int16Array(new int[] {0, 0, 0});
    Int16Array source = new Int16Array(new int[] {32768, 42, 32768});
    target.set(source);
    int result = target.lastIndexOf(42);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour057() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf);
    viewA.fill(77);
    int result = viewB.lastIndexOf(77);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour058() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf);
    viewA.set(1, 55);
    int result = viewB.lastIndexOf(55);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour059() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf);
    viewA.set(0, 11);
    viewB.set(1, 88);
    int result = viewA.lastIndexOf(88);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour060() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf);
    viewA.set(2, 66);
    int result = viewB.lastIndexOf(66, 2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour061() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf, 4, 2);
    viewB.set(0, 99);
    int result = viewA.lastIndexOf(99);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour062() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array viewA = new Int16Array(buf);
    Int16Array viewB = new Int16Array(buf, 4, 2);
    viewB.set(1, 77);
    int result = viewA.lastIndexOf(77, 2);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour063() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int16Array viewA = new Int16Array(buf, 2, 3);
    Int16Array viewB = new Int16Array(buf, 4, 2);
    viewA.set(1, 55);
    int result = viewB.lastIndexOf(55);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour064() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int16Array viewA = new Int16Array(buf, 0, 4);
    Int16Array viewB = new Int16Array(buf, 6, 2);
    viewA.set(1, 88);
    int result = viewB.lastIndexOf(88);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour065() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array parent = new Int16Array(buf);
    Int16Array child = new Int16Array(buf, 2, 3);
    parent.set(1, 33);
    parent.set(2, 44);
    int result = child.lastIndexOf(44);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour066() {
    ArrayBuffer buf = new ArrayBuffer(14);
    Int16Array parent = new Int16Array(buf);
    Int16Array child = new Int16Array(buf, 4, 3);
    child.set(0, 19);
    child.set(2, 19);
    int result = parent.lastIndexOf(19, 4);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour067() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(1, 4);
    child.set(0, 99);
    int result = parent.lastIndexOf(99);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour068() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(1, 4);
    parent.set(2, 88);
    int result = child.lastIndexOf(88);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour069() {
    Int16Array parent = new Int16Array(new int[] {5, 5, 5, 5, 5});
    Int16Array child = parent.subarray(2, 4);
    parent.fill(33);
    int result = child.lastIndexOf(33);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour070() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0, 0});
    Int16Array child = parent.subarray(1, 3);
    child.set(0, 42);
    int result = parent.lastIndexOf(42, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestFour071() {
    Int16Array parent = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array child = parent.subarray(2, 5);
    parent.set(3, 77);
    int result = child.lastIndexOf(77, 0);
    assertEqual(-1, result);
    }
}
