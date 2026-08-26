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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySort01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySort01Test extends BasTest {

    @Test
    void testUint8ClampedArraySortOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (a - b));
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 3, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (b - a));
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] called = {0};
    Uint8ClampedArray r = arr.sort((a, b) -> {
        called[0] = called[0] + 1;
        return 0;
    });
    assertEqual(0, called[0]);
    }

    @Test
    void testUint8ClampedArraySortOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int[] called = {0};
    arr.sort((a, b) -> {
        called[0] = called[0] + 1;
        return 0;
    });
    assertEqual(0, called[0]);
    }

    @Test
    void testUint8ClampedArraySortOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int[] observedA = {-1};
    arr.sort((a, b) -> {
        observedA[0] = a;
        return 0;
    });
    assertTrue(observedA[0] >= 0);
    }

    @Test
    void testUint8ClampedArraySortOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int[] observedB = {-1};
    arr.sort((a, b) -> {
        observedB[0] = b;
        return 0;
    });
    assertTrue(observedB[0] >= 0);
    }

    @Test
    void testUint8ClampedArraySortOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    try {
    arr.sort((a, b) -> { throw new TypeError("type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySortOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    try {
    arr.sort((a, b) -> { throw new RangeError("range");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySortOne010() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 5);
    arr.set(1, 2);
    arr.set(2, 9);
    arr.set(3, 1);
    Uint8ClampedArray r = arr.sort();
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(5, r.get(2));
    assertEqual(9, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne011() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 8);
    arr.set(1, 3);
    arr.set(2, 5);
    arr.set(3, 1);
    Uint8ClampedArray r = arr.sort();
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(5, r.get(2));
    assertEqual(8, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne012() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(7, 2, 5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(7, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    try {
    arr.sort((a, b) -> { throw new Error("boom");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySortOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 10, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(100, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne015() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf);
    Uint8ClampedArray b = new Uint8ClampedArray(buf);
    a.set(0, 9);
    a.set(1, 1);
    a.set(2, 5);
    a.set(3, 3);
    a.sort();
    assertEqual(1, b.get(0));
    assertEqual(3, b.get(1));
    assertEqual(5, b.get(2));
    assertEqual(9, b.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne016() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 3);
    arr.set(1, 1);
    arr.set(2, 4);
    arr.set(3, 2);
    Uint8ClampedArray r = arr.sort();
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne017() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 3, 1, 4, 2);
    Uint8ClampedArray r = arr.sort();
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortOne018() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray view = parent.subarray(1, 4);
    Uint8ClampedArray r = view.sort();
    assertEqual(3, view.length());
    assertEqual(1, view.get(0));
    assertEqual(3, view.get(1));
    assertEqual(4, view.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne020() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray view = parent.subarray(2, 5);
    Uint8ClampedArray r = view.sort();
    assertEqual(3, view.length());
    assertEqual(1, view.get(0));
    assertEqual(2, view.get(1));
    assertEqual(4, view.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 4);
    arr.set(0, 9);
    arr.set(1, 7);
    arr.set(2, 5);
    arr.set(3, 3);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.byteOffset());
    assertEqual(3, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(7, r.get(2));
    assertEqual(9, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne022() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray view = parent.subarray(1, 4);
    Uint8ClampedArray r = view.sort();
    assertEqual(3, view.length());
    assertEqual(1, view.get(0));
    assertEqual(3, view.get(1));
    assertEqual(4, view.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne023() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 5);
    arr.set(1, 3);
    arr.set(2, 1);
    arr.set(3, 4);
    arr.set(4, 2);
    Uint8ClampedArray r = arr.sort();
    assertEqual(buf, r.buffer());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    assertEqual(5, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, 256);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(1, -Double.POSITIVE_INFINITY);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 255});
    arr.set(1, 127.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 255});
    arr.set(1, 128.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 0.5);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(0, 0.9);
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySortOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.length());
    assertEqual(255, r.get(1));
    assertEqual(0, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(4, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(5, r.length());
    assertEqual(1, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    assertEqual(3, r.get(3));
    assertEqual(3, r.get(4));
    }

    @Test
    void testUint8ClampedArraySortOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 9, 1, 7, 3, 8, 2, 6, 4, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(10, r.length());
    assertEqual(0, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(2));
    assertEqual(3, r.get(3));
    assertEqual(4, r.get(4));
    assertEqual(5, r.get(5));
    assertEqual(6, r.get(6));
    assertEqual(7, r.get(7));
    assertEqual(8, r.get(8));
    assertEqual(9, r.get(9));
    }

    @Test
    void testUint8ClampedArraySortOne037() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 256; i++) {
    arr.set(i, 255 - i);
    }
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(128));
    assertEqual(255, r.get(255));
    }

    @Test
    void testUint8ClampedArraySortOne038() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, i % 256);
    }
    Uint8ClampedArray r = arr.sort();
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(128, r.get(512));
    assertEqual(255, r.get(1023));
    }

    @Test
    void testUint8ClampedArraySortOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (a - b));
    assertEqual(99, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    Uint8ClampedArray r = arr.sort((a, b) -> 0);
    assertEqual(3, r.length());
    assertEqual(5, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (2147483647));
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (Integer.MIN_VALUE));
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort((a, b) -> 1000);
    assertEqual(2, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort((a, b) -> -1000);
    assertEqual(2, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    int direction = 1;
    Uint8ClampedArray r = arr.sort((a, b) -> (int) ((a - b) * direction));
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 3});
    Uint8ClampedArray.Uint8ClampedArrayReducer2 diff = (a, b) -> a - b;
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (diff.apply(a, b)));
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort((a, b) -> (int) (a - b));
    assertEqual(arr, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    }

    @Test
    void testUint8ClampedArraySortOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 1});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort().sort();
    assertEqual(arr, r);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 3, 1, 4, 2});
    Uint8ClampedArray r1 = arr.sort();
    Uint8ClampedArray r2 = arr.sort();
    assertEqual(r2, r1);
    assertEqual(1, r1.get(0));
    assertEqual(2, r1.get(1));
    assertEqual(3, r1.get(2));
    assertEqual(4, r1.get(3));
    assertEqual(5, r1.get(4));
    }

    @Test
    void testUint8ClampedArraySortOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    arr.set(0, 200);
    assertEqual(3, r.length());
    assertEqual(200, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort((a, b) -> (int) (a - b));
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 3});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.byteLength());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySortOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.byteLength());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySortOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 8, 7, 6, 5, 4, 3, 2, 1, 0});
    Uint8ClampedArray r = arr.sort();
    assertEqual(10, r.byteLength());
    assertEqual(0, r.get(0));
    assertEqual(4, r.get(4));
    assertEqual(9, r.get(9));
    }

    @Test
    void testUint8ClampedArraySortOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(1, r.BYTES_PER_ELEMENT);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    assertEqual(0, r.byteOffset());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne061() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 8);
    arr.set(1, 3);
    arr.set(2, 5);
    arr.set(3, 1);
    Uint8ClampedArray r = arr.sort();
    assertEqual(2, r.byteOffset());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(5, r.get(2));
    assertEqual(8, r.get(3));
    }

    @Test
    void testUint8ClampedArraySortOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 1, 3});
    Uint8ClampedArray r = arr.sort();
    assertEqual(arr.buffer(), r.buffer());
    assertEqual(1, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(5, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    ArrayBuffer bufBefore = arr.buffer();
    arr.sort();
    assertEqual(bufBefore, arr.buffer());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2, 4, 5});
    int blBefore = arr.buffer().byteLength();
    arr.sort();
    assertEqual(blBefore, arr.buffer().byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint8ClampedArraySortOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray r = arr.sort();
    String t = BasTest.typeofValue(r);
    assertEqual("object", t);
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.sort();
    String t = BasTest.typeofValue(r);
    assertEqual("object", t);
    }

    @Test
    void testUint8ClampedArraySortOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 0x00, 50});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(50, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200, 0x80, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(128, r.get(1));
    assertEqual(5, r.get(0));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {200, 1e2, 5});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(100, r.get(1));
    assertEqual(5, r.get(0));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2.5e2, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(250, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 10, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(100, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 1, 50});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(50, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 10, 50});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(50, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 10, 200});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(128, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 10, 200});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(128, r.get(1));
    assertEqual(10, r.get(0));
    assertEqual(200, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 5, 10});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(5, r.get(1));
    assertEqual(10, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9, 1, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(1, r.get(0));
    assertEqual(100, r.get(1));
    }

    @Test
    void testUint8ClampedArraySortOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9, 10, 50});
    Uint8ClampedArray r = arr.sort();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(10, r.get(1));
    assertEqual(50, r.get(2));
    }

    @Test
    void testUint8ClampedArraySortOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {256, -1, Double.NaN, Double.POSITIVE_INFINITY, 100});
    Uint8ClampedArray r = arr.sort();
    assertEqual(5, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(100, r.get(2));
    assertEqual(255, r.get(3));
    assertEqual(255, r.get(4));
    }
}
