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
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArraytoSorted —— Int16Array 方法族测试。
 */
public class Uint16ArraytoSorted extends BasTest {

    @Test
    void testUint16ArrayToSorted001() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.toSorted();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(3, arr.get(0));
    }

    @Test
    void testUint16ArrayToSorted002() {
    Uint16Array arr = Uint16Array.of(4, 1, 3);
    Uint16Array result = arr.toSorted();
    arr.set(0, 99);
    assertEqual(1, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted003() {
    Uint16Array arr = Uint16Array.of(5, 2, 4);
    Uint16Array result = arr.toSorted();
    assertEqual("2,4,5", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted004() {
    Uint16Array arr = Uint16Array.of(6, 1, 5);
    String backup = arr.join(",");
    Uint16Array result = arr.toSorted();
    assertEqual("1,5,6", result.join(","));
    assertEqual(backup, arr.join(","));
    }

    @Test
    void testUint16ArrayToSorted005() {
    Uint16Array arr = new Uint16Array();
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.length());
    assertNotEqual(arr, result);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArrayToSorted006() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array result = arr.toSorted();
    assertNotEqual(arr, result);
    assertEqual("42", result.join(","));
    assertEqual("42", arr.join(","));

    }

    @Test
    void testUint16ArrayToSorted007() {
    Uint16Array arr = Uint16Array.of(5, 3, 1, 4, 2);
    Uint16Array result = arr.toSorted();
    assertEqual("1,2,3,4,5", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted008() {
    Uint16Array arr = new Uint16Array(0);
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToSorted009() {
    Uint16Array arr = Uint16Array.of();
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToSorted010() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array empty = arr.subarray(0, 0);
    Uint16Array result = empty.toSorted();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToSorted011() {
    Uint16Array arr = Uint16Array.from(new int[] {});
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToSorted012() {
    Uint16Array arr = new Uint16Array(new int[] {});
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToSorted013() {
    Uint16Array arr = Uint16Array.of(0);
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted014() {
    Uint16Array arr = Uint16Array.of(65535);
    Uint16Array result = arr.toSorted();
    assertEqual(65535, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted015() {
    Uint16Array arr = Uint16Array.of(32768);
    Uint16Array result = arr.toSorted();
    assertEqual(32768, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted016() {
    Uint16Array arr = Uint16Array.of(100);
    Uint16Array result = arr.toSorted();
    assertEqual(100, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted017() {
    Uint16Array arr = Uint16Array.of(65536);
    Uint16Array result = arr.toSorted();
    assertEqual(0, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted018() {
    Uint16Array arr = Uint16Array.of(-1);
    Uint16Array result = arr.toSorted();
    assertEqual(65535, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted019() {
    Uint16Array arr = Uint16Array.of(3.14);
    Uint16Array result = arr.toSorted();
    assertEqual(3, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted020() {
    Uint16Array arr = Uint16Array.of(65535.9);
    Uint16Array result = arr.toSorted();
    assertEqual(65535, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted021() {
    Uint16Array arr = Uint16Array.of(0xFF);
    Uint16Array result = arr.toSorted();
    assertEqual(255, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted022() {
    Uint16Array arr = Uint16Array.of(07777);
    Uint16Array result = arr.toSorted();
    assertEqual(4095, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted023() {
    Uint16Array arr = Uint16Array.of(0b10101010);
    Uint16Array result = arr.toSorted();
    assertEqual(170, result.get(0));
    }

    @Test
    void testUint16ArrayToSorted024() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,2,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted025() {
    Uint16Array arr = Uint16Array.of(0, 32768, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted026() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted027() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array result = arr.toSorted();
    assertEqual("100,200,300", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted028() {
    Uint16Array arr = Uint16Array.of(0x0, 0x80, 0xFF);
    Uint16Array result = arr.toSorted();
    assertEqual("0,128,255", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted029() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,0,0", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted030() {
    Uint16Array arr = Uint16Array.of(1, 1, 1);
    Uint16Array result = arr.toSorted();
    assertEqual("1,1,1", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted031() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("65535,65535,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted032() {
    Uint16Array arr = Uint16Array.of(3, 2, 1, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,2,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted033() {
    Uint16Array arr = Uint16Array.of(65535, 32768, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted034() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted035() {
    Uint16Array arr = Uint16Array.of(300, 200, 100);
    Uint16Array result = arr.toSorted();
    assertEqual("100,200,300", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted036() {
    Uint16Array arr = Uint16Array.of(0xFF, 0x80, 0x0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,128,255", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted037() {
    Uint16Array arr = Uint16Array.of(65535, 65534, 65533);
    Uint16Array result = arr.toSorted();
    assertEqual("65533,65534,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted038() {
    Uint16Array arr = Uint16Array.of(10000, 5000, 1000, 500, 100, 50, 10, 5, 1);
    Uint16Array result = arr.toSorted();
    assertEqual("1,5,10,50,100,500,1000,5000,10000", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted039() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    Uint16Array result = arr.toSorted();
    assertEqual("0,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted040() {
    Uint16Array arr = Uint16Array.of(100, 1, 1000, 10, 10000);
    Uint16Array result = arr.toSorted();
    assertEqual("1,10,100,1000,10000", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted041() {
    Uint16Array arr = Uint16Array.of(0, 65535, 0, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,0,65535,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted042() {
    Uint16Array arr = Uint16Array.of(50000, 10000, 30000, 20000, 40000);
    Uint16Array result = arr.toSorted();
    assertEqual("10000,20000,30000,40000,50000", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted043() {
    Uint16Array arr = Uint16Array.of(42, 7, 15, 23, 8, 16, 4);
    Uint16Array result = arr.toSorted();
    assertEqual("4,7,8,15,16,23,42", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted044() {
    Uint16Array arr = Uint16Array.of(0xFFFF, 0x0, 0xABCD, 0x1234);
    Uint16Array result = arr.toSorted();
    assertEqual("0,4660,43981,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted045() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 1, 2, 3);
    Uint16Array result = arr.toSorted();
    assertEqual("1,1,2,2,3,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted046() {
    Uint16Array arr = Uint16Array.of(5, 3, 8, 1, 9, 2, 7, 4, 6, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,2,3,4,5,6,7,8,9", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted047() {
    Uint16Array arr = Uint16Array.of(1, 65535, 2, 65534, 3, 65533);
    Uint16Array result = arr.toSorted();
    assertEqual("1,2,3,65533,65534,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted048() {
    Uint16Array arr = Uint16Array.of(5, 5, 5, 5);
    Uint16Array result = arr.toSorted();
    assertEqual("5,5,5,5", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted049() {
    Uint16Array arr = Uint16Array.of(1, 1, 2, 2);
    Uint16Array result = arr.toSorted();
    assertEqual("1,1,2,2", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted050() {
    Uint16Array arr = Uint16Array.of(3, 1, 3, 1, 3);
    Uint16Array result = arr.toSorted();
    assertEqual("1,1,3,3,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted051() {
    Uint16Array arr = Uint16Array.of(0, 0, 65535, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,0,65535,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted052() {
    Uint16Array arr = Uint16Array.of(32768, 32768, 0, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,32768,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted053() {
    Uint16Array arr = Uint16Array.of(0, 1, 65535);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted054() {
    Uint16Array arr = Uint16Array.of(65535, 0, 1);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted055() {
    Uint16Array arr = Uint16Array.of(32768, 65535, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted056() {
    Uint16Array arr = Uint16Array.of(0x7FFF, 0x8000, 0xFFFF);
    Uint16Array result = arr.toSorted();
    assertEqual("32767,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted057() {
    Uint16Array arr = Uint16Array.of(1, 0xFFFF, 0x8000, 0x7FFF, 0);
    Uint16Array result = arr.toSorted();
    assertEqual("0,1,32767,32768,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted058() {
    Uint16Array arr = new Uint16Array(new int[] {3, 1, 2});
    Uint16Array result = arr.toSorted();
    assertEqual("1,2,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted059() {
    Uint16Array src = Uint16Array.of(5, 2, 4, 1, 3);
    Uint16Array arr = new Uint16Array(src);
    Uint16Array result = arr.toSorted();
    assertEqual("1,2,3,4,5", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted060() {
    Uint16Array arr = Uint16Array.from(new int[] {9, 5, 7, 1, 3});
    Uint16Array result = arr.toSorted();
    assertEqual("1,3,5,7,9", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted061() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array mapped = arr.map((v) -> { return v * 10; });
    Uint16Array result = mapped.toSorted();
    assertEqual("10,20,30", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted062() {
    Uint16Array arr = Uint16Array.of(9, 5, 7, 1, 3);
    Uint16Array sub = arr.subarray(1, 4);
    Uint16Array result = sub.toSorted();
    assertEqual("1,5,7", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted063() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Uint16Array result = arr.toSorted();
    assertEqual(100, result.length());
    assertEqual(0, result.get(0));
    assertEqual(99, result.get(99));
    }

    @Test
    void testUint16ArrayToSorted064() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 99 - i);
    }
    Uint16Array result = arr.toSorted();
    assertNotEqual(arr, result);
    assertEqual(100, result.length());
    assertEqual(0, result.get(0));
    assertEqual(50, result.get(50));
    assertEqual(99, result.get(99));
    assertEqual(99, arr.get(0));
    assertEqual(0, arr.get(99));

    }

    @Test
    void testUint16ArrayToSorted065() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 42);
    }
    Uint16Array result = arr.toSorted();
    assertNotEqual(arr, result);
    assertEqual(100, result.length());
    assertEqual(42, result.get(0));
    assertEqual(42, result.get(50));
    assertEqual(42, result.get(99));
    assertEqual(42, arr.get(0));
    assertEqual(42, arr.get(99));

    }

    @Test
    void testUint16ArrayToSorted066() {
    Uint16Array source = Uint16Array.of(40, 2, 300, 11);
    Uint16Array result = source.toSorted();
    assertEqual("2,11,40,300", result.join(","));
    assertEqual("40,2,300,11", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted067() {
    Uint16Array source = Uint16Array.of(4, 1, 3, 2);
    Uint16Array result = source.toSorted();
    assertEqual("1,2,3,4", result.join(","));
    assertEqual("4,1,3,2", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted068() {
    Uint16Array source = Uint16Array.of(65535, 0, 32768, 0, 65535);
    Uint16Array result = source.toSorted();
    assertEqual("0,0,32768,65535,65535", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted069() {
    Uint16Array source = new Uint16Array();
    Uint16Array result = source.toSorted();
    assertEqual(0, source.length());
    assertEqual(0, result.length());
    assertNotEqual(source.buffer(), result.buffer());
    }

    @Test
    void testUint16ArrayToSorted070() {
    Uint16Array source = Uint16Array.of(42);
    Uint16Array result = source.toSorted();
    result.set(0, 9);
    assertEqual("9", result.join(","));
    assertEqual("42", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted071() {
    Uint16Array source = new Uint16Array(new int[] {-1, 65536, 65537, 32768});
    Uint16Array result = source.toSorted();
    assertEqual("0,1,32768,65535", result.join(","));
    assertEqual("65535,0,1,32768", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted072() {
    Uint16Array source = Uint16Array.of(7, 4, 3, 8, 5, 2);
    Uint16Array result = source.toSorted();
    assertEqual("2,3,4,5,7,8", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted073() {
    Uint16Array source = Uint16Array.of(3, 1, 2);
    Uint16Array result = source.toSorted();
    result.set(1, 99);
    assertEqual("1,99,3", result.join(","));
    assertEqual("3,1,2", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted074() {
    Uint16Array source = Uint16Array.of(9, 7, 8);
    Uint16Array result = source.toSorted();
    source.set(0, 1);
    assertEqual("7,8,9", result.join(","));
    assertEqual("1,7,8", source.join(","));
    }

    @Test
    void testUint16ArrayToSorted075() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint16Array full = new Uint16Array(buffer);
    full.set(Uint16Array.of(90, 7, 3, 5, 80));
    Uint16Array view = new Uint16Array(buffer, 2, 3);
    Uint16Array result = view.toSorted();
    assertEqual("3,5,7", result.join(","));
    assertEqual("90,7,3,5,80", full.join(","));
    }

    @Test
    void testUint16ArrayToSorted076() {
    Uint16Array source = Uint16Array.of(3, 2, 1);
    Uint16Array result = source.toSorted();
    assertNotEqual(source.buffer(), result.buffer());
    assertEqual("1,2,3", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted077() {
    Uint16Array source = Uint16Array.of(14, 3, 11, 8, 5);
    Uint16Array result = source.toSorted();
    assertEqual("3,5,8,11,14", result.join(","));
    }

    @Test
    void testUint16ArrayToSorted078() {
    Uint16Array source = Uint16Array.of(3, 2, 1);
    Uint16Array first = source.toSorted();
    Uint16Array second = source.toSorted();
    first.set(0, 99);
    assertEqual("99,2,3", first.join(","));
    assertEqual("1,2,3", second.join(","));
    assertEqual("3,2,1", source.join(","));
    }
}
