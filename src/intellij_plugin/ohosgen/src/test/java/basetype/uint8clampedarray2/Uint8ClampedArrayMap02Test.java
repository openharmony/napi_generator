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
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayMap02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayMap02Test extends BasTest {

    @Test
    void testUint8ClampedArrayMapTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0377);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0400);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(1e2));
    assertEqual(1, r.length());
    assertEqual(100, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(2.55e2));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(2.56e2));
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> BasTest.clampRound(1e-10));
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 100 + 50);
    assertEqual(1, r.length());
    assertEqual(150, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 200 + 100);
    assertEqual(1, r.length());
    assertEqual(255, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> 50 - 100);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.map((v, i, a) -> 99);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArrayMapTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(10, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));
    assertEqual(6, r.get(5));
    assertEqual(7, r.get(6));
    assertEqual(8, r.get(7));
    assertEqual(9, r.get(8));
    assertEqual(10, r.get(9));
    }

    @Test
    void testUint8ClampedArrayMapTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray r = arr.map((v, i, a) -> 1);
    assertEqual(256, r.length());
    assertEqual(1, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(1, r.get(255));
    }

    @Test
    void testUint8ClampedArrayMapTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.map((v, i, a) -> 1);
    assertEqual(1024, r.length());
    assertEqual(1, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(1, r.get(1023));
    }

    @Test
    void testUint8ClampedArrayMapTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    Uint8ClampedArray r = arr.map((v, i, a) -> 0);
    assertEqual(65535, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(65534));
    }

    @Test
    void testUint8ClampedArrayMapTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(3, r.byteLength());
    }

    @Test
    void testUint8ClampedArrayMapTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1024, r.byteLength());
    }

    @Test
    void testUint8ClampedArrayMapTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayMapTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayMapTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArrayMapTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    String t = BasTest.typeofValue(r);
    assertEqual("object", t);
    }

    @Test
    void testUint8ClampedArrayMapTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArrayMapTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v + 1);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1, r.length());
    assertEqual(100, r.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(1023));
    }

    @Test
    void testUint8ClampedArrayMapTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {97, 98, 99});
    Uint8ClampedArray r = arr.map((v, i, a) -> i);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArrayMapTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(r.byteLength(), r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayMapTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v).map((v, i, a) -> v + 1);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v).map((v, i, a) -> v).map((v, i, a) -> v);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v * 2);
    assertEqual(3, arr.length());
    assertEqual(2, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(6, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> v + 100);
    assertEqual(3, arr.length());
    assertEqual(110, r.get(0));
    assertEqual(120, r.get(1));
    assertEqual(130, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.map((v, i, a) -> 0);
    assertEqual(3, arr.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    ArrayBuffer origBuf = arr.buffer();
    arr.map((v, i, a) -> v);
    assertEqual(4, arr.byteLength());
    assertEqual(origBuf, arr.buffer());
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayMapTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(5, r.length());
    assertEqual(5, r.get(r.length() - 1));
    }

    @Test
    void testUint8ClampedArrayMapTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    String t = BasTest.typeofValue(r.get(0));
    assertEqual("number", t);
    }

    @Test
    void testUint8ClampedArrayMapTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    Uint8ClampedArray r = arr.map((v, i, a) -> 300);
    String t = BasTest.typeofValue(r.get(0));
    assertEqual("number", t);
    }

    @Test
    void testUint8ClampedArrayMapTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(3, r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayMapTwo039() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 4);
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    assertEqual(4, r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayMapTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.map((v, i, a) -> v);
    try {
    r.get(r.length());
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayMapTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(3, m.length());
    assertEqual(99, m.get(0));
    assertEqual(2, m.get(1));
    assertEqual(3, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(7);
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(4, m.length());
    assertEqual(7, m.get(1));
    assertEqual(7, m.get(0));
    assertEqual(7, m.get(2));
    assertEqual(7, m.get(3));
    }

    @Test
    void testUint8ClampedArrayMapTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(3, m.length());
    assertEqual(30, m.get(0));
    assertEqual(20, m.get(1));
    assertEqual(10, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(3, m.length());
    assertEqual(1, m.get(0));
    assertEqual(2, m.get(1));
    assertEqual(3, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 88);
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(3, m.length());
    assertEqual(88, m.get(0));
    assertEqual(2, m.get(1));
    assertEqual(3, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertNotNull(m);
    }

    @Test
    void testUint8ClampedArrayMapTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray m = arr.map((x) -> x);
    assertNotNull(m);
    }

    @Test
    void testUint8ClampedArrayMapTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(arr.getClass().getSimpleName(), m.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayMapTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertNotNull(m.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray m = arr.map((x) -> { return x * 2;
        });
    assertEqual(1, m.length());
    assertEqual(200, m.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    Uint8ClampedArray m = arr.map((x) -> { return x - 1;
        });
    assertEqual(1, m.length());
    assertEqual(9, m.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10});
    int inc = 5;
    Uint8ClampedArray m = arr.map((x) -> { return x + inc;
        });
    assertEqual(1, m.length());
    assertEqual(15, m.get(0));
    }

    @Test
    void testUint8ClampedArrayMapTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 100, 50});
    Uint8ClampedArray m = arr.map((x) -> { return x + 100;
        });
    assertEqual(3, m.length());
    assertTrue(m.get(0) <= 255);
    assertEqual(200, m.get(1));
    assertEqual(150, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    Uint8ClampedArray m = sub.map((x) -> x);
    assertEqual(2, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayMapTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray m = arr.map((x) -> x);
    assertEqual(m.byteLength(), m.length());
    }

    @Test
    void testUint8ClampedArrayMapTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15});
    Uint8ClampedArray m = arr.map((x, _i, a) -> {
        return a.get(0);
        });
    assertEqual(3, m.length());
    assertEqual(5, m.get(0));
    assertEqual(5, m.get(1));
    assertEqual(5, m.get(2));
    }

    @Test
    void testUint8ClampedArrayMapTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 14, 21});
    Uint8ClampedArray m = arr.map((_x, _i, a) -> {
        return a.length();
        });
    assertEqual(3, m.length());
    assertEqual(3, m.get(0));
    assertEqual(3, m.get(1));
    assertEqual(3, m.get(2));
    }
}
