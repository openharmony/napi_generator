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

package basetype.uint16array2;

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
import basetype.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayoveralltwo —— Int16Array 方法族测试。
 */
public class Uint16Arrayoveralltwo extends BasTest {

    @Test
    void testUint16Arrayoveralltwo001() {
    Uint16Array arr = new Uint16Array(2);
    arr.set(0, 99);
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo002() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Number val = arr.at(1);
    assertEqual(20, val);
    }

    @Test
    void testUint16Arrayoveralltwo003() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Number val = arr.at(-10);
    assertEqual(null, val);
    }

    @Test
    void testUint16Arrayoveralltwo004() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65535);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo005() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertTrue(arr.includes(20));
    }

    @Test
    void testUint16Arrayoveralltwo006() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    assertTrue(arr.includes(20, 2));
    }

    @Test
    void testUint16Arrayoveralltwo007() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    assertFalse(arr.includes(1, 10));
    }

    @Test
    void testUint16Arrayoveralltwo008() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(1, arr.indexOf(20));
    }

    @Test
    void testUint16Arrayoveralltwo009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(-1, arr.indexOf(99));
    }

    @Test
    void testUint16Arrayoveralltwo010() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    assertEqual(-1, arr.indexOf(1, 10));
    }

    @Test
    void testUint16Arrayoveralltwo011() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    assertEqual(3, arr.lastIndexOf(20));
    }

    @Test
    void testUint16Arrayoveralltwo012() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    assertTrue(arr.some((v) -> v > 2));
    }

    @Test
    void testUint16Arrayoveralltwo013() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(1, arr.findIndex((v) -> v > 15));
    }

    @Test
    void testUint16Arrayoveralltwo014() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(-1, arr.findIndex((v) -> v > 100));
    }

    @Test
    void testUint16Arrayoveralltwo015() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    assertEqual(3, arr.findLastIndex((v) -> v > 15));
    }

    @Test
    void testUint16Arrayoveralltwo016() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array filtered = arr.filter((v) -> false);
    assertEqual(0, filtered.length());
    }

    @Test
    void testUint16Arrayoveralltwo017() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    List<Integer> previousValues = new ArrayList<>();
    List<Integer> currentValues = new ArrayList<>();
    List<Integer> indexes = new ArrayList<>();
    int result = arr.reduce((prev, curr, idx, a)-> { previousValues.add(prev); currentValues.add(curr); indexes.add(idx); assertEqual(arr, a); return prev * 10 + curr; }, 0);
    assertEqual(123, result);
    assertEqual(0, previousValues.get(0));
    assertEqual(1, currentValues.get(0));
    assertEqual("0,1,2", BasTest.joinList(indexes, ","));
    }

    @Test
    void testUint16Arrayoveralltwo018() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((a, b, $x2, $x3)-> a - b);
    assertEqual(0, result);
    }

    @Test
    void testUint16Arrayoveralltwo019() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array sliced = arr.slice(1);
    assertEqual(3, sliced.length());
    assertEqual(2, sliced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo020() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array sliced = arr.slice(10);
    assertEqual(0, sliced.length());
    }

    @Test
    void testUint16Arrayoveralltwo021() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array sliced = arr.slice(-2);
    assertEqual(2, sliced.length());
    assertEqual(3, sliced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo022() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array sub = arr.subarray();
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16Arrayoveralltwo023() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array sub = arr.subarray(2);
    assertEqual(2, sub.length());
    assertEqual(3, sub.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo024() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array sub = arr.subarray(10);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint16Arrayoveralltwo025() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array sub = arr.subarray(-2);
    assertEqual(2, sub.length());
    assertEqual(3, sub.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo026() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array sub = arr.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, arr.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo027() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.reverse();
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo028() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array rev = arr.toReversed();
    assertEqual(3, rev.get(0));
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo029() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo030() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array sorted = arr.toSorted();
    assertEqual(1, sorted.get(0));
    assertEqual(3, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo031() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    String str = arr.join("|");
    assertEqual("10|20|30", str);
    }

    @Test
    void testUint16Arrayoveralltwo032() {
    Uint16Array arr = new Uint16Array();
    String str = arr.join(",");
    assertEqual("", str);
    }

    @Test
    void testUint16Arrayoveralltwo033() {
    Uint16Array arr = new Uint16Array(2);
    arr.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo034() {
    Uint16Array arr = new Uint16Array(2);
    int[] src = new int[] {7, 8};
    arr.set(src);
    assertEqual(7, arr.get(0));
    assertEqual(8, arr.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo035() {
    Uint16Array arr = new Uint16Array(3);
    int[] src = new int[] {1, 2};
    arr.set(src, 1);
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo036() {
    Uint16Array arr = new Uint16Array(2);
    double[] src = new double[] {3.0, 4.0};
    arr.set(src);
    assertEqual(3, arr.get(0));
    assertEqual(4, arr.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo037() {
    Uint16Array arr = new Uint16Array(3);
    double[] src = new double[] {5.0, 6.0};
    arr.set(src, 1);
    assertEqual(5, arr.get(1));
    assertEqual(6, arr.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo038() {
    Uint16Array arr = new Uint16Array(2);
    try {
    arr.set(Uint16Array.of(1, 2, 3), 0);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arrayoveralltwo039() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 10);
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo040() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(5, 1);
    assertEqual(0, arr.get(0));
    assertEqual(5, arr.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo041() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(65535);
    assertEqual(65535, arr.get(0));
    assertEqual(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo042() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(-1);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo043() {
    Uint16Array arr = new Uint16Array(3);
    Uint16Array result = arr.fill(1);
    assertEqual(arr, result);
    }

    @Test
    void testUint16Arrayoveralltwo044() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.reverse();
    assertEqual(arr, result);
    }

    @Test
    void testUint16Arrayoveralltwo045() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0xFFFF);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo046() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0177777);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo047() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0b1111111111111111);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo048() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(0xFFFF);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo049() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array replaced = arr.with(0, 0xFFFF);
    assertEqual(65535, replaced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo050() {
    Uint16Array arr = new Uint16Array(4);
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint16Arrayoveralltwo051() {
    Uint16Array arr = new Uint16Array(4);
    assertTrue(ArrayBuffer.isView(arr));
    }

    @Test
    void testUint16Arrayoveralltwo052() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    Uint16Array.EntriesIterator iter = arr.entries();
    int[] first = iter.next().value;
    assertEqual(5, first[1]);
    }

    @Test
    void testUint16Arrayoveralltwo053() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    Uint16Array.KeyIterator iter = arr.keys();
    assertEqual(0, iter.next().value);
    assertEqual(1, iter.next().value);
    }

    @Test
    void testUint16Arrayoveralltwo054() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    List<Integer> results = new ArrayList<>();
    arr.forEach((v) -> {
    results.add(v * 10);
    });
    assertEqual("10,20,30", BasTest.joinList(results, ","));
    }

    @Test
    void testUint16Arrayoveralltwo055() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(-2, 0);
    assertEqual(1, arr.get(2));
    assertEqual(2, arr.get(3));
    }

    @Test
    void testUint16Arrayoveralltwo056() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(5, -2);
    assertEqual(0, arr.get(0));
    assertEqual(5, arr.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo057() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Number val = arr.at(-1);
    assertEqual(30, val);
    }

    @Test
    void testUint16Arrayoveralltwo058() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Number val = arr.at(10);
    assertEqual(null, val);
    }

    @Test
    void testUint16Arrayoveralltwo059() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array replaced = arr.with(1, 99);
    assertEqual(99, replaced.get(1));
    }

    @Test
    void testUint16Arrayoveralltwo060() {
    Uint16Array arr = Uint16Array.of(10, 20);
    try {
    arr.with(10, 99);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arrayoveralltwo061() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array replaced = arr.with(0, 65535);
    assertEqual(65535, replaced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo062() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array replaced = arr.with(0, 65536);
    assertEqual(0, replaced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo063() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array replaced = arr.with(0, -1);
    assertEqual(65535, replaced.get(0));
    }

    @Test
    void testUint16Arrayoveralltwo064() {
    Uint16Array arr = Uint16Array.of(10, 20);
    try {
    arr.set(10, 99);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arrayoveralltwo065() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertFalse(arr.includes(99));
    }

    @Test
    void testUint16Arrayoveralltwo066() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    assertEqual(3, arr.indexOf(20, 2));
    }

    @Test
    void testUint16Arrayoveralltwo067() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    assertEqual(1, arr.lastIndexOf(20, 2));
    }

    @Test
    void testUint16Arrayoveralltwo068() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(-1, arr.lastIndexOf(99));
    }

    @Test
    void testUint16Arrayoveralltwo069() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 2);
    assertEqual(3, arr.lastIndexOf(2, 10));
    }

    @Test
    void testUint16Arrayoveralltwo070() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] sum = {0};
    arr.forEach((v, i, a) -> {
    sum[0] = sum[0] + v;
    });
    assertEqual(6, sum[0]);
    }

    @Test
    void testUint16Arrayoveralltwo071() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    assertFalse(arr.some((v) -> v > 10));
    }

    @Test
    void testUint16Arrayoveralltwo072() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    assertFalse(arr.every((v) -> v > 1));
    }

    @Test
    void testUint16Arrayoveralltwo073() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Integer found = arr.find((v) -> v > 15);
    assertEqual(20, found);
    }

    @Test
    void testUint16Arrayoveralltwo074() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Integer found = arr.find((v) -> v > 100);
    assertEqual(null, found);
    }

    @Test
    void testUint16Arrayoveralltwo075() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 20);
    Integer found = arr.findLast((v) -> v > 15);
    assertEqual(20, found);
    }

    @Test
    void testUint16Arrayoveralltwo076() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array mapped = arr.map((v) -> v * 2);
    assertEqual(2, mapped.get(0));
    assertEqual(6, mapped.get(2));
    }

    @Test
    void testUint16Arrayoveralltwo077() {
    Uint16Array arr = Uint16Array.of(65535);
    Uint16Array mapped = arr.map((v) -> v + 1);
    assertEqual(0, mapped.get(0));
    }
}
