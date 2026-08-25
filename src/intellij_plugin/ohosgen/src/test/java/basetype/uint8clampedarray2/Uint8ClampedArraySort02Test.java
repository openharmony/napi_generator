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
 * Uint8ClampedArraySort02Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArraySort02Test extends BasTest {

    @Test
    void testUint8ClampedArraySortTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, -1);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, Double.NaN);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, Double.POSITIVE_INFINITY);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 0.4);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 1e9);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(20, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, -1e9);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, Double.MAX_VALUE);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(20, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, Double.MIN_VALUE);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, -0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 2147483648L);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(20, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (b - a); });
    assertEqual(2, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (b - a); });
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 2});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return 1; });
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return -1; });
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return 1; });
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return -1; });
    assertEqual(3, r.length());
    assertEqual(30, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(10, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return 0; });
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 10, 20});
    arr.set(0, 256);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 127.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(128, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 128.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(128, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 0.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 0.9);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 10, 50});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(50, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(9, r.get(1));
    assertEqual(2, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo026() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 256; i++) {
    arr.set(i, 255 - i);
    };
    Uint8ClampedArray r = arr.sort();
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(128));
    assertEqual(255, r.get(255));
    }

    @Test
    void testUint8ClampedArraySortTwo027() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    };
    Uint8ClampedArray r = arr.sort();
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(512));
    assertEqual(255, r.get(1023));
    }

    @Test
    void testUint8ClampedArraySortTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 0200, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(128, r.get(1));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 0b10000000, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(128, r.get(1));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    String t = BasTest.typeofValue(r);
    assertEqual("object", t);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.sort();
    String t = BasTest.typeofValue(r);
    assertEqual("object", t);
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort();
    assertNotEqual("number", BasTest.typeofValue(r));
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort();
    assertNotEqual("string", BasTest.typeofValue(r));
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort();
    assertNotEqual("boolean", BasTest.typeofValue(r));
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySortTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.length());
    assertEqual(100, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertNotNull(r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertNotNull(r);
    }

    @Test
    void testUint8ClampedArraySortTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray r = arr.sort();
    assertNotNull(r);
    assertEqual(99, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3, 2, 1});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySortTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 4, 3});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(3, r.byteLength());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArraySortTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArraySortTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.length());
    assertEqual(99, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    assertEqual(7, r.get(0));
    assertEqual(7, r.get(1));
    assertEqual(7, r.get(2));
    assertEqual(7, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(arr.buffer(), r.buffer());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySortTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    r.set(1, 150);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(150, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 2, 3, 1});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr.length(), r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 2, 3, 1});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr.byteLength(), r.byteLength());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortTwo055() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 4);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 1);
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr.byteOffset(), r.byteOffset());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray r1 = arr.sort((a, b) -> { return (int) (a - b); });
    Uint8ClampedArray r2 = arr.sort((a, b) -> { return (int) (b - a); });
    assertEqual(r2, r1);
    assertEqual(5, r1.get(0));
    assertEqual(4, r1.get(1));
    assertEqual(3, r1.get(2));
    assertEqual(2, r1.get(3));
    assertEqual(1, r1.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray r1 = arr.sort();
    Uint8ClampedArray r2 = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(arr, r1);
    assertEqual(arr, r2);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    arr.sort();
    int len1 = arr.length();
    arr.sort();
    int len2 = arr.length();
    assertEqual(len2, len1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    arr.sort();
    int bl1 = arr.byteLength();
    arr.sort();
    int bl2 = arr.byteLength();
    assertEqual(bl2, bl1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    ArrayBuffer buf1 = arr.sort().buffer();
    ArrayBuffer buf2 = arr.sort().buffer();
    assertEqual(buf2, buf1);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    Uint8ClampedArray r = arr.sort((_a, _b) -> { return 0; });
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x02, 0x01});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {02, 01});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b10, 0b01});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(0, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(255, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 0x80, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(128, r.get(1));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(99, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySortTwo070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.sort();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArraySortTwo071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.sort((a, b) -> { return (int) (a - b); });
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArraySortTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.byteLength());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    try {
    arr.sort((_a, _b) -> { throw new Error("test error"); });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }

    @Test
    void testUint8ClampedArraySortTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 9, 1, 7, 3, 8, 2, 6, 4, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(10, r.length());
    assertEqual(4, r.get(4));
    assertEqual(0, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    assertEqual(3, r.get(3));
    assertEqual(5, r.get(5));
    assertEqual(6, r.get(6));
    assertEqual(7, r.get(7));
    assertEqual(8, r.get(8));
    assertEqual(9, r.get(9));
    }

    @Test
    void testUint8ClampedArraySortTwo079() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    };
    Uint8ClampedArray r = arr.sort();
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(512));
    assertEqual(255, r.get(1023));
    }

    @Test
    void testUint8ClampedArraySortTwo080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {256, -1, Double.NaN, Double.POSITIVE_INFINITY, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(5, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(100, r.get(2));
    assertEqual(255, r.get(3));
    assertEqual(255, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortTwo081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.sort((a, b) -> { return (int) (b - a); });
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortTwo082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    int bl = arr.buffer().byteLength();
    arr.sort();
    assertEqual(bl, arr.buffer().byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }
}
