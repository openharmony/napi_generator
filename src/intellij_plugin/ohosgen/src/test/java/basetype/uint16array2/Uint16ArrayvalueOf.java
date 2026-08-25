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
 * Uint16ArrayvalueOf —— Int16Array 方法族测试。
 */
public class Uint16ArrayvalueOf extends BasTest {

    @Test
    void testUint16ArrayValueOf001() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf002() {
    Uint16Array arr = Uint16Array.of();
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf003() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf004() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf005() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf006() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf007() {
    Uint16Array source = Uint16Array.of(10, 20, 30);
    Uint16Array arr = new Uint16Array(source);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf008() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf009() {
    Uint16Array arr = Uint16Array.from(new int[] {5, 10, 15});
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf010() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf011() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buffer, 2);
    arr.set(0, 42);
    arr.set(1, 99);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf012() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array arr = new Uint16Array(buffer, 4, 3);
    arr.set(0, 7);
    arr.set(1, 8);
    arr.set(2, 9);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf013() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.valueOf().valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf014() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array result = arr.valueOf().valueOf().valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf015() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.valueOf().fill(99);
    assertEqual(99, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint16ArrayValueOf016() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.valueOf().reverse();
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint16ArrayValueOf017() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.valueOf().copyWithin(0, 3);
    assertEqual(4, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArrayValueOf018() {
    Uint16Array arr = Uint16Array.of();
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayValueOf019() {
    Uint16Array arr = Uint16Array.of(100, 200, 300, 400, 500);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(5, result.length());
    result.set(4, 999);
    assertEqual(999, arr.get(4));
    }

    @Test
    void testUint16ArrayValueOf020() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(16, result.byteLength());
    result.set(0, 65535);
    assertEqual(65535, arr.get(0));
    }

    @Test
    void testUint16ArrayValueOf021() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array arr = new Uint16Array(buffer, 4);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(arr.byteOffset(), result.byteOffset());
    }

    @Test
    void testUint16ArrayValueOf022() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buffer);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(buffer, result.buffer());
    }

    @Test
    void testUint16ArrayValueOf023() {
    Uint16Array arr = Uint16Array.of(7, 14, 21);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(arr.get(0), result.get(0));
    assertEqual(arr.get(1), result.get(1));
    assertEqual(arr.get(2), result.get(2));
    }

    @Test
    void testUint16ArrayValueOf024() {
    Uint16Array arr = Uint16Array.of(5, 10, 15, 20);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(arr.get(arr.length() - 1), result.get(arr.length() - 1));
    }

    @Test
    void testUint16ArrayValueOf025() {
    Uint16Array arr = Uint16Array.of(0, 1, 2);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(0, result.get(0));
    }

    @Test
    void testUint16ArrayValueOf026() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(65535, result.get(0));
    }

    @Test
    void testUint16ArrayValueOf027() {
    Uint16Array arr = Uint16Array.of(32768, 32768);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(32768, result.get(0));
    assertEqual(32768, result.get(1));
    }

    @Test
    void testUint16ArrayValueOf028() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(0, result.get(0));
    assertEqual(65535, result.get(1));
    }

    @Test
    void testUint16ArrayValueOf029() {
    Uint16Array arr = new Uint16Array(4);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(0, result.get(3));
    }

    @Test
    void testUint16ArrayValueOf030() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(65535, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(65535, result.get(2));
    }

    @Test
    void testUint16ArrayValueOf031() {
    Uint16Array arr = Uint16Array.of(0, 1, 32768, 65534, 65535);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(32768, result.get(2));
    assertEqual(65534, result.get(3));
    assertEqual(65535, result.get(4));
    }

    @Test
    void testUint16ArrayValueOf032() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.set(0, 42);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(42, result.get(0));
    }

    @Test
    void testUint16ArrayValueOf033() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.fill(7);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(7, result.get(0));
    assertEqual(7, result.get(1));
    assertEqual(7, result.get(2));
    assertEqual(7, result.get(3));
    }

    @Test
    void testUint16ArrayValueOf034() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.set(new Uint16Array(new int[] {100, 200}), 0);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(100, result.get(0));
    assertEqual(200, result.get(1));
    }

    @Test
    void testUint16ArrayValueOf035() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.set(arr.length() - 1, 99);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    assertEqual(99, result.get(arr.length() - 1));
    }

    @Test
    void testUint16ArrayValueOf036() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array result = arr.valueOf();
    result.set(0, 42);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint16ArrayValueOf037() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array result = arr.valueOf();
    result.fill(7);
    assertEqual(7, arr.get(0));
    assertEqual(7, arr.get(1));
    assertEqual(7, arr.get(2));
    assertEqual(7, arr.get(3));
    }

    @Test
    void testUint16ArrayValueOf038() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.valueOf();
    result.set(new Uint16Array(new int[] {100, 200}), 0);
    assertEqual(100, arr.get(0));
    assertEqual(200, arr.get(1));
    }

    @Test
    void testUint16ArrayValueOf039() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.valueOf();
    result.set(arr.length() - 1, 99);
    assertEqual(99, arr.get(arr.length() - 1));
    }

    @Test
    void testUint16ArrayValueOf040() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.valueOf();
    Uint16Array mapped = result.map((v) -> v * 2);
    assertEqual(2, mapped.get(0));
    assertEqual(4, mapped.get(1));
    assertEqual(6, mapped.get(2));
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint16ArrayValueOf041() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.valueOf();
    Uint16Array filtered = result.filter((v) -> v > 2);
    assertEqual(3, filtered.length());
    assertEqual(3, filtered.get(0));
    assertEqual(4, filtered.get(1));
    assertEqual(5, filtered.get(2));
    }

    @Test
    void testUint16ArrayValueOf042() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.valueOf();
    int[] sum = {result.reduce((acc, v, $x2, $x3)-> acc + v, 0)};
    assertEqual(15, sum[0]);
    }

    @Test
    void testUint16ArrayValueOf043() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array result = arr.valueOf();
    int[] sum = {0};
    result.forEach((v) -> {
    sum[0] = sum[0] + v;
    });
    assertEqual(60, sum[0]);
    }

    @Test
    void testUint16ArrayValueOf044() {
    Uint16Array arr = Uint16Array.of(2, 4, 6, 8);
    Uint16Array result = arr.valueOf();
    boolean allEven = result.every((v) -> v % 2 == 0);
    assertTrue(allEven);
    }

    @Test
    void testUint16ArrayValueOf045() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.valueOf();
    boolean hasEven = result.some((v) -> v % 2 == 0);
    assertTrue(hasEven);
    }

    @Test
    void testUint16ArrayValueOf046() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array result = arr.valueOf();
    Integer found = result.find((v) -> v > 25);
    assertEqual(30, (int) found);
    }

    @Test
    void testUint16ArrayValueOf047() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array result = arr.valueOf();
    int idx = result.findIndex((v) -> v > 25);
    assertEqual(2, idx);
    }

    @Test
    void testUint16ArrayValueOf048() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.valueOf();
    result.sort((a, b) -> (a - b));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArrayValueOf049() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array sub = arr.subarray(1, 4);
    Uint16Array result = sub.valueOf();
    assertEqual(sub, result);
    }

    @Test
    void testUint16ArrayValueOf050() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array sliced = arr.slice(1, 3);
    Uint16Array result = sliced.valueOf();
    assertEqual(sliced, result);
    }

    @Test
    void testUint16ArrayValueOf051() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 3);
    Uint16Array result = sub.valueOf();
    assertEqual(20, result.get(0));
    assertEqual(30, result.get(1));
    assertEqual(2, result.length());
    }

    @Test
    void testUint16ArrayValueOf052() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array a = arr.valueOf();
    assertEqual(arr, a);
    a.set(0, 99);
    assertEqual(99, arr.get(0));
    Uint16Array b = arr.valueOf();
    assertEqual(arr, b);
    assertEqual(99, b.get(0));
    }

    @Test
    void testUint16ArrayValueOf053() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array first = arr.valueOf();
    arr.set(0, 99);
    Uint16Array second = arr.valueOf();
    assertEqual(second, first);
    assertEqual(arr, second);
    }

    @Test
    void testUint16ArrayValueOf054() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.valueOf().valueOf().fill(5);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(5, arr.get(2));
    assertEqual(5, arr.get(3));
    }

    @Test
    void testUint16ArrayValueOf055() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array arr1 = new Uint16Array(buffer);
    Uint16Array arr2 = new Uint16Array(buffer);
    assertEqual(arr1, arr1.valueOf());
    assertEqual(arr2, arr2.valueOf());
    assertNotEqual(arr2.valueOf(), arr1.valueOf());
    }

    @Test
    void testUint16ArrayValueOf056() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint16Array arr1 = new Uint16Array(buffer);
    arr1.set(0, 10);
    Uint16Array arr2 = new Uint16Array(buffer);
    arr2.set(0, 99);
    assertEqual(99, arr1.valueOf().get(0));
    }

    @Test
    void testUint16ArrayValueOf057() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array arr1 = new Uint16Array(buffer, 0, 2);
    Uint16Array arr2 = new Uint16Array(buffer, 4, 2);
    arr1.set(0, 100);
    arr2.set(0, 200);
    assertEqual(100, arr1.valueOf().get(0));
    assertEqual(200, arr2.valueOf().get(0));
    assertNotEqual(arr2.valueOf(), arr1.valueOf());
    }

    @Test
    void testUint16ArrayValueOf058() {
    ArrayBuffer buffer = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buffer);
    arr.set(0, 0xFFFF);
    Int8Array int8 = new Int8Array(buffer);
    int8.set(0, 0);
    assertEqual(0xFF00, arr.valueOf().get(0));
    }

    @Test
    void testUint16ArrayValueOf059() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.valueOf();
    Uint16Array copied = Uint16Array.from(result);
    assertEqual(1, copied.get(0));
    assertEqual(2, copied.get(1));
    assertEqual(3, copied.get(2));
    assertNotEqual(arr, copied);
    }

    @Test
    void testUint16ArrayValueOf060() {
    Uint16Array arr = new Uint16Array(1000);
    Uint16Array result = arr.valueOf();
    assertEqual(1000, result.length());
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArrayValueOf061() {
    Uint16Array arr = Uint16Array.of(0, 65535, 32768);
    Uint16Array result = arr.valueOf();
    assertEqual(0, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(32768, result.get(2));
    }

    @Test
    void testUint16ArrayValueOf062() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    a.valueOf().set(1, 22);
    assertEqual("1,22,3", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf063() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    a.valueOf().set(Uint16Array.of(8, 9), 1);
    assertEqual("1,8,9,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf064() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    a.valueOf().fill(7, 1, 3);
    assertEqual("1,7,7,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf065() {
    Uint16Array a = Uint16Array.of(3, 1, 2);
    a.valueOf().sort();
    assertEqual("1,2,3", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf066() {
    Uint16Array a = Uint16Array.of(7, 8, 9);
    Uint16Array r = a.valueOf();
    a.set(2, 99);
    assertEqual("7,8,99", r.join(","));
    }

    @Test
    void testUint16ArrayValueOf067() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = a.subarray(1, 3);
    v.valueOf().set(0, 20);
    assertEqual("1,20,3,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf068() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.valueOf();
    r.set(r.subarray(0, 3), 1);
    assertEqual("1,1,2,3", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf069() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array a = new Uint16Array(b);
    Uint16Array alias = new Uint16Array(b);
    a.valueOf().set(Uint16Array.of(6, 7, 8));
    assertEqual("6,7,8", alias.join(","));
    }

    @Test
    void testUint16ArrayValueOf070() {
    Uint16Array a = new Uint16Array();
    Uint16Array r = a.valueOf();
    assertEqual(a, r);
    assertEqual("", String.valueOf(r));
    }

    @Test
    void testUint16ArrayValueOf071() {
    Uint16Array a = new Uint16Array(new int[] {-1, 65536, 65537});
    Uint16Array r = a.valueOf();
    assertEqual("65535,0,1", r.join(","));
    }

    @Test
    void testUint16ArrayValueOf072() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array copy = new Uint16Array(src);
    copy.valueOf().set(0, 9);
    assertEqual("9,2,3", copy.join(","));
    assertEqual("1,2,3", src.join(","));
    }

    @Test
    void testUint16ArrayValueOf073() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array copy = a.valueOf().slice(1, 3);
    copy.set(0, 20);
    assertEqual("20,3", copy.join(","));
    assertEqual("1,2,3,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf074() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = a.valueOf().subarray(1, 3);
    v.set(1, 30);
    assertEqual("1,2,30,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf075() {
    Uint16Array a = Uint16Array.of(4, 5);
    Uint16Array.KeyIterator it = a.valueOf().values();
    assertEqual(4, it.next().value);
    assertEqual(5, it.next().value);
    }

    @Test
    void testUint16ArrayValueOf076() {
    Uint16Array a = Uint16Array.of(2, 3, 4);
    int[] sum = {a.valueOf().reduce((p, v, $x2, $x3)-> p + v, 0)};
    assertEqual(9, sum[0]);
    assertEqual("2,3,4", a.join(","));
    }

    @Test
    void testUint16ArrayValueOf077() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    assertEqual("10,20,30", a.valueOf().toString());
    }

    @Test
    void testUint16ArrayValueOf078() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(9, 1, 2, 3, 8));
    Uint16Array v = new Uint16Array(b, 2, 3);
    assertEqual("1,2,3", v.valueOf().join(","));
    }
}
