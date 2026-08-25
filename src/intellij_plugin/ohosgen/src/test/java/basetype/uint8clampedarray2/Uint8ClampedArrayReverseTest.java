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
 * Uint8ClampedArrayReverseTest —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayReverseTest extends BasTest {

    @Test
    void testUint8ClampedArrayReverse001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr, r);
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    assertEqual(5, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayReverse004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqual(4, arr.byteLength());
    assertEqual(4, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(1, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.reverse();
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    arr.reverse();
    assertEqual(1, arr.length());
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    arr.reverse();
    assertEqual(10, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(9, arr.get(1));
    assertEqual(8, arr.get(2));
    assertEqual(7, arr.get(3));
    assertEqual(6, arr.get(4));
    assertEqual(5, arr.get(5));
    assertEqual(4, arr.get(6));
    assertEqual(3, arr.get(7));
    assertEqual(2, arr.get(8));
    assertEqual(1, arr.get(9));
    }

    @Test
    void testUint8ClampedArrayReverse009() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 7);
    arr.set(254, 99);
    arr.reverse();
    assertEqual(255, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(0, arr.get(127));
    assertEqual(7, arr.get(254));
    }

    @Test
    void testUint8ClampedArrayReverse010() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 8);
    arr.set(255, 200);
    arr.reverse();
    assertEqual(256, arr.length());
    assertEqual(200, arr.get(0));
    assertEqual(0, arr.get(128));
    assertEqual(8, arr.get(255));
    }

    @Test
    void testUint8ClampedArrayReverse011() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 5);
    arr.set(1023, 250);
    arr.reverse();
    assertEqual(1024, arr.length());
    assertEqual(250, arr.get(0));
    assertEqual(0, arr.get(512));
    assertEqual(5, arr.get(1023));
    }

    @Test
    void testUint8ClampedArrayReverse012() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(65534, 100);
    arr.reverse();
    assertEqual(65535, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(32767));
    assertEqual(1, arr.get(65534));
    }

    @Test
    void testUint8ClampedArrayReverse013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 255});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 256});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(1, arr.get(1));
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, -1});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(10, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(127, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(128, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(128, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(128, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 50});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(50, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 50});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(50, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 50});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(50, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-0, 100});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 200});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(200, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 200});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(1, arr.get(1));
    assertEqual(200, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9, 50});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(50, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9, 100});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE, 99});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0x80, 10});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(128, arr.get(1));
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 2, 1});
    arr.reverse();
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(2, arr.get(3));
    assertEqual(1, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayReverse033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 128, 127, 1});
    arr.reverse();
    assertEqual(5, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(127, arr.get(1));
    assertEqual(128, arr.get(2));
    assertEqual(255, arr.get(3));
    assertEqual(0, arr.get(4));
    }

    @Test
    void testUint8ClampedArrayReverse034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(255, arr.get(2));
    assertEqual(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    arr.reverse();
    assertEqual(3, arr.length());
    assertEqual(30, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse036() {
    List<Integer> src = java.util.Arrays.asList(5, 15, 25);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    arr.reverse();
    assertEqual(3, arr.length());
    assertEqual(25, arr.get(0));
    assertEqual(15, arr.get(1));
    assertEqual(5, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 11);
    arr.set(1, 22);
    arr.set(2, 33);
    arr.set(3, 44);
    arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(44, arr.get(0));
    assertEqual(33, arr.get(1));
    assertEqual(22, arr.get(2));
    assertEqual(11, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(2, 5);
    parent.set(5, 50);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(50, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(5, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(0, 256);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(0, -1);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(1, Double.NaN);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(1, Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(2, -Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(2));
    assertEqual(3, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(0, 127.5);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    arr.set(1, 128.5);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(1));
    assertEqual(3, arr.get(0));
    assertEqual(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    arr.set(0, 0.5);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    arr.set(0, 0.9);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reverse();
    arr.set(2, Double.MIN_VALUE);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(2));
    assertEqual(30, arr.get(0));
    assertEqual(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    try {
    arr.set(3, 99);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }

    @Test
    void testUint8ClampedArrayReverse050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    try {
    arr.set(-1, 88);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }

    @Test
    void testUint8ClampedArrayReverse051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    try {
    arr.get(10);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }

    @Test
    void testUint8ClampedArrayReverse052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(4, r.length());
    assertEqual(2, r.byteOffset());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(3, r.length());
    assertNotNull(r);
    assertEqual(30, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(10, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr.length(), r.length());
    }

    @Test
    void testUint8ClampedArrayReverse055() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(4, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    Uint8ClampedArray r = sub.reverse();
    assertEqual(3, sub.length());
    assertEqual(4, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(2, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(2, r.length());
    assertEqual(6, r.get(0));
    assertEqual(5, r.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33, 44});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(4, r.length());
    assertEqual(44, r.get(0));
    assertEqual(33, r.get(1));
    assertEqual(22, r.get(2));
    assertEqual(11, r.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(2, r.length());
    assertEqual(255, r.get(0));
    assertEqual(0, r.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse060() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 8);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(8, r.length());
    assertEqual(8, r.byteLength());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(4));
    assertEqual(0, r.get(7));
    }

    @Test
    void testUint8ClampedArrayReverse061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(arr, r);
    assertEqual(2, arr.get(0));
    assertEqual(1, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse062() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = parent.subarray(0, 3);
    Uint8ClampedArray r = sub.reverse();
    assertEqual(3, sub.length());
    assertEqual(3, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(1, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(arr, r);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr.length(), r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(8, r.length());
    assertEqual(buf, r.buffer());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(4));
    assertEqual(0, r.get(7));
    }

    @Test
    void testUint8ClampedArrayReverse066() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray sub = parent.subarray(2, 5);
    Uint8ClampedArray r = sub.reverse();
    assertEqual(3, sub.length());
    assertEqual(5, sub.get(0));
    assertEqual(4, sub.get(1));
    assertEqual(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse067() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = parent.subarray(0, 4);
    parent.reverse();
    assertEqual(4, sub.length());
    assertEqual(40, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(20, sub.get(2));
    assertEqual(10, sub.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArrayReverse069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse070() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(128));
    assertEqual(0, r.get(255));
    }

    @Test
    void testUint8ClampedArrayReverse071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(10, arr.get(1));
    assertEqual(20, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33, 44, 55});
    arr.reverse();
    assertEqual(5, arr.length());
    assertEqual(11, arr.get(4));
    assertEqual(55, arr.get(0));
    assertEqual(44, arr.get(1));
    assertEqual(33, arr.get(2));
    assertEqual(22, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 200});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(1));
    assertEqual(200, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2147483648L, 30});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(30, arr.get(0));
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE, 40});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(40, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0377, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b11111111, 0});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0100, 20});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(64, arr.get(1));
    assertEqual(20, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1, 200});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(1, arr.get(1));
    assertEqual(200, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 5});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(100, arr.get(1));
    assertEqual(5, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {2.55e2, 7});
    arr.reverse();
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(1));
    assertEqual(7, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255, 255});
    arr.reverse();
    assertEqual(4, arr.length());
    assertEqual(255, arr.get(2));
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayReverse084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(1, r.length());
    assertEqual(1, r.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(2, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArrayReverse086() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(255, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(127));
    assertEqual(0, r.get(254));
    }

    @Test
    void testUint8ClampedArrayReverse087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(10, r.byteLength());
    }

    @Test
    void testUint8ClampedArrayReverse088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr, r);
    }

    @Test
    void testUint8ClampedArrayReverse089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr, r);
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReverse090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr, r);
    }

    @Test
    void testUint8ClampedArrayReverse091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr, r);
    }

    @Test
    void testUint8ClampedArrayReverse092() {
    ArrayBuffer buf = new ArrayBuffer(512);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.reverse();
    assertEqual(512, r.length());
    assertEqual(arr, r);
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(256));
    assertEqual(0, r.get(511));
    }

    @Test
    void testUint8ClampedArrayReverse093() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(3, r.length());
    assertEqual(arr.buffer(), r.buffer());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse094() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArrayReverse095() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.reverse();
    assertEqual(0, r.byteOffset());
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReverse096() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int offsetBefore = arr.byteOffset();
    arr.reverse();
    assertEqual(offsetBefore, arr.byteOffset());
    assertEqual(4, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));
    }
}
