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

import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayUnderSet01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayUnderSet01Test extends BasTest {

    @Test
    void testUint8ClampedArrayUnderSetOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.set(0, 10);
    assertEqual(null, r);
    }

    @Test
    void testUint8ClampedArrayUnderSetOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 10);
    arr.set(0, 50);
    assertEqual(3, arr.length());
    assertEqual(50, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(1, 77);
    assertEqual(3, arr.length());
    assertEqual(77, arr.get(1));
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(2, 66);
    assertEqual(3, arr.length());
    assertEqual(66, arr.get(2));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(3, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(-1, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(2147483647, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(Integer.MIN_VALUE, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(01, 44);
    assertEqual(3, arr.length());
    assertEqual(44, arr.get(1));
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    try {
    arr.set(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    arr.set(255, 200);
    assertEqual(200, arr.get(255));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    try {
    arr.set(256, 200);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 0);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 255);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0xFF);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 10;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = -1;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = -128;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne020() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0});
    int v = 100;
    a1.set(0, v);
    a2.set(0, 100);
    assertEqual(1, a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0));
    assertEqual(100, a1.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 256);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, -2);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, Double.NaN);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0.5);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1.5);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 2.5);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 254.5);
    assertEqual(3, arr.length());
    assertEqual(254, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 255.5);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 10);
    arr.set(1, 20);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 128);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 254);
    assertEqual(3, arr.length());
    assertEqual(254, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 07);
    assertEqual(3, arr.length());
    assertEqual(7, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e2);
    assertEqual(3, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 0;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 1;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 64;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(64, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e9);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, -1e9);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.MIN_VALUE);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0.4);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0.6);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1.4);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 127.5);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 128.5);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 300.7);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, -0.4);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, -0.5);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, -0.9);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 100.5);
    assertEqual(3, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 101.5);
    assertEqual(3, arr.length());
    assertEqual(102, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 12.7);
    assertEqual(3, arr.length());
    assertEqual(13, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e308);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, -1e308);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 300);
    arr.set(1, -50);
    arr.set(2, Double.NaN);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(10, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer ret = arr.set(0, 99);
    assertNotEqual(arr, ret);
    }

    @Test
    void testUint8ClampedArrayUnderSetOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(-100, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayUnderSetOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    try {
    arr.set(10, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 0);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 255);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(2, 88);
    assertEqual(3, arr.length());
    assertEqual(88, arr.get(2));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(1, 66);
    assertEqual(3, arr.length());
    assertEqual(66, arr.get(1));
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int v = 127;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(127, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(-5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayUnderSetOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.set(0, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayUnderSetOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(3, arr.byteLength());
    assertEqual(99, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayUnderSetOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(100, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.byteLength());
    }
}
