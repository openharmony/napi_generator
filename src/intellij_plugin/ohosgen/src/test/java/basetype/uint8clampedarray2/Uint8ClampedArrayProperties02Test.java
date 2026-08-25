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

package basetype.uint8clampedarray2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayProperties02Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayProperties02Test extends BasTest {

    @Test
    void testUint8ClampedArrayPropertiesTwo001() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo002() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(2, s.length());
    assertEqual(1, s.get(0));
    assertEqual(2, s.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(2, s.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(1, 3);
    assertEqual(0, s.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(2, sub.byteLength());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(4, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    assertEqual(50, sub.get(3));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(5, sub.length());
    assertEqual(sub.length(), sub.byteLength());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(40, sub.get(3));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(arr.length(), m.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(arr.byteLength(), m.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(0, m.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray f = arr.filter((x) -> x > 2);
    assertTrue(f.length() <= arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray f = arr.filter((x) -> x > 2);
    assertEqual(f.length(), f.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(arr.length(), r.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(arr.byteLength(), r.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 4, 2});
    Uint8ClampedArray s = arr.toSorted();
    assertEqual(arr.length(), s.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 4, 2});
    Uint8ClampedArray s = arr.toSorted();
    assertEqual(arr.byteLength(), s.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(arr.length(), w.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(0, w.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertNotNull(arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo023() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(12, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo024() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(12, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo025() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo026() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo027() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo028() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 0);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo029() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 12, 0);
    assertEqual(12, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo030() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 12, 0);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo031() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 8);
    int sum = arr.byteOffset() + arr.byteLength();
    assertTrue(sum <= buf.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    assertTrue(arr.length() <= arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    assertNotEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    assertNotEqual("Uint8ClampedArr", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo035() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(4);
    Uint8ClampedArray a2 = Uint8ClampedArray.of(1, 2);
    Uint8ClampedArray a3 = Uint8ClampedArray.from(new int[] {1, 2, 3});
    Uint8ClampedArray a4 = new Uint8ClampedArray(new ArrayBuffer(8));
    assertEqual(1, a1.BYTES_PER_ELEMENT);
    assertEqual(1, a2.BYTES_PER_ELEMENT);
    assertEqual(1, a3.BYTES_PER_ELEMENT);
    assertEqual(1, a4.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String t = BasTest.typeofValue(arr.getClass().getSimpleName());
    assertEqual("string", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String t = BasTest.typeofValue(arr.buffer());
    assertEqual("object", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(10, 99);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    assertEqual(3, arr.length());
    assertEqual(3, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(10, 99);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    assertEqual(3, arr.length());
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray sub = parent.subarray(2, 5);
    assertEqual(3, sub.length());
    assertEqual(6, sub.byteOffset());
    assertEqual(buf, sub.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray baseView = new Uint8ClampedArray(buf, 2, 12);
    Uint8ClampedArray firstSub = baseView.subarray(3, 9);
    Uint8ClampedArray secondSub = firstSub.subarray(2, 5);
    assertEqual(3, secondSub.length());
    assertEqual(7, secondSub.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(2, 2);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo047() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray s = parent.slice(2, 5);
    assertEqual(3, s.length());
    assertEqual(0, s.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo048() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo049() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {10, 20, 30});
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    assertEqual(arr.BYTES_PER_ELEMENT, sub.BYTES_PER_ELEMENT);
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(1, 4);
    assertEqual(arr.BYTES_PER_ELEMENT, s.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(arr.BYTES_PER_ELEMENT, m.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray f = arr.filter((x) -> x > 1);
    assertEqual(arr.BYTES_PER_ELEMENT, f.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo054() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 8, 16);
    assertTrue(arr.buffer().byteLength() >= arr.byteOffset() + arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String before = arr.getClass().getSimpleName();
    arr.set(0, 99);
    assertEqual(before, arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.BYTES_PER_ELEMENT;
    arr.set(0, 99);
    assertEqual(before, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String before = arr.getClass().getSimpleName();
    arr.fill(0);
    assertEqual(before, arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(arr.getClass().getSimpleName(), sub.getClass().getSimpleName());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(arr.getClass().getSimpleName(), s.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(3, 3);
    assertEqual(0, sub.length());
    assertEqual(3, sub.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo061() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(3, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo062() {
    Uint8ClampedArray arr = Uint8ClampedArray.from(new int[] {1, 2, 3});
    assertEqual(3, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(arr.buffer().byteLength(), sub.buffer().byteLength());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertEqual(2, s.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(3, m.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray f = arr.filter((x) -> x > 1);
    assertEqual(2, f.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    int v = arr.BYTES_PER_ELEMENT;
    assertEqual(1.0, v);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    assertEqual(4, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo070() {
    ArrayBuffer raw = new ArrayBuffer(8);
    Uint8ClampedArray fullView = new Uint8ClampedArray(raw);
    Uint8ClampedArray viewWithOffset = new Uint8ClampedArray(raw, 2);
    Uint8ClampedArray viewWithOffsetLength = new Uint8ClampedArray(raw, 4, 2);
    assertEqual(raw, fullView.buffer());
    assertEqual(raw, viewWithOffset.buffer());
    assertEqual(raw, viewWithOffsetLength.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray sub1 = arr.subarray(1, 5);
    Uint8ClampedArray sub2 = sub1.subarray(1, 3);
    assertEqual(4, sub1.length());
    assertEqual(arr.buffer(), sub1.buffer());
    assertEqual(2, sub1.get(0));
    assertEqual(3, sub1.get(1));
    assertEqual(4, sub1.get(2));
    assertEqual(5, sub1.get(3));
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(0, 2);
    assertNotEqual(arr.buffer(), s.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo074() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray dup = Uint8ClampedArray.from(src);
    assertNotEqual(src.buffer(), dup.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertNotEqual(arr.buffer(), m.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray f = arr.filter((x) -> x > 0);
    assertNotEqual(arr.buffer(), f.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s = arr.toSorted();
    assertNotEqual(arr.buffer(), s.buffer());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(16);
    Uint8ClampedArray sub = arr.subarray(2, 6);
    assertEqual(arr.buffer().byteLength(), sub.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo080() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(5, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo082() {
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(2, sub.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(8), 2, 4);
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(2, sub.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub1 = arr.subarray(2, 6);
    Uint8ClampedArray sub2 = sub1.subarray(1, 3);
    assertEqual(3, sub2.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(8), 2, 4);
    Uint8ClampedArray s = arr.slice(1, 3);
    assertEqual(0, s.byteOffset());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16), 4, 8);
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16), 4);
    assertEqual(12, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16));
    assertEqual(16, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(3, sub.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(8);
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(0, sub.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(1, 4);
    assertEqual(3, s.byteLength());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    String t = "int";
    assertEqual("int", t);
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo095() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    assertEqual(arr.byteLength(), arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo096() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16), 4, 8);
    assertEqual(8, arr.length());
    }

    @Test
    void testUint8ClampedArrayPropertiesTwo097() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(16), 4);
    assertEqual(12, arr.length());
    }
}
