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
import basetype.common.IndexOutOfBoundsError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySet01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySet01Test extends BasTest {

    @Test
    void testUint8ClampedArraySetOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 10;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    arr.set(src, 1);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne003() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6, 7});
    dst.set(src);
    assertEqualInt(5, dst.get(0));
    assertEqualInt(6, dst.get(1));
    assertEqualInt(7, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 99;
    arr.set(2, v);
    assertEqual(3, arr.length());
    assertEqualInt(99, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 50;
    arr.set(1, v);
    assertEqual(3, arr.length());
    assertEqualInt(50, arr.get(1));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 77;
    try {
    arr.set(3, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 88;
    try {
    arr.set(-1, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    try {
    arr.set(2147483647, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int v = 5;
    try {
    arr.set(Integer.MIN_VALUE, v);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 100, 100});
    int v = 0;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(100, arr.get(1));
    assertEqualInt(100, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 127;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(127, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 10, 10});
    int v = -1;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(10, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne013() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> src = new ArrayList<>();
    dst.set(src, 0);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne014() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(42);
    dst.set(src, 0);
    assertEqual(3, dst.length());
    assertEqualInt(42, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne015() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40);
    dst.set(src, 0);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(20, dst.get(1));
    assertEqualInt(30, dst.get(2));
    assertEqualInt(40, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne016() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {99, 99, 99});
    List<Integer> src = java.util.Arrays.asList(-1, -50, -128);
    dst.set(src, 0);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne017() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {99, 99, 99});
    List<Integer> src = java.util.Arrays.asList(127, 127);
    dst.set(src, 0);
    assertEqual(3, dst.length());
    assertEqualInt(127, dst.get(0));
    assertEqualInt(127, dst.get(1));
    assertEqualInt(99, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne018() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(10, -5, 100, -1);
    dst.set(src, 0);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(100, dst.get(2));
    assertEqualInt(0, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne019() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    dst.set(src, 0);
    assertEqual(4, dst.length());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(0, dst.get(2));
    assertEqualInt(0, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne020() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(11, 22);
    dst.set(src, 1);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(11, dst.get(1));
    assertEqualInt(22, dst.get(2));
    assertEqualInt(0, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne021() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    try {
    dst.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne022() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne023() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne024() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 2147483647);
    fail();
    } catch (IndexOutOfBoundsError e) {
    assertEqual("IndexOutOfBoundsError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne025() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne026() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    dst.set(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne027() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 99, 99});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {77});
    dst.set(src);
    assertEqualInt(77, dst.get(0));
    assertEqualInt(99, dst.get(1));
    assertEqualInt(99, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne028() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20, 30});
    dst.set(src);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(20, dst.get(1));
    assertEqualInt(30, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne029() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {100, 100, 100});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0, 0, 0});
    dst.set(src);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne030() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {255, 255, 255});
    dst.set(src);
    assertEqualInt(255, dst.get(0));
    assertEqualInt(255, dst.get(1));
    assertEqualInt(255, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne031() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {1, 1, 1, 1});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    dst.set(src);
    assertEqualInt(0, dst.get(0));
    assertEqualInt(255, dst.get(1));
    assertEqualInt(0, dst.get(2));
    assertEqualInt(255, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne032() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    dst.set(src);
    assertEqual(4, dst.length());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    assertEqualInt(4, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne033() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {9, 9, 9, 9, 9});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    dst.set(src);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(9, dst.get(2));
    assertEqualInt(9, dst.get(3));
    assertEqualInt(9, dst.get(4));
    }

    @Test
    void testUint8ClampedArraySetOne034() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    dst.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne035() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = Uint8ClampedArray.of(11, 22, 33);
    dst.set(src);
    assertEqual(3, dst.length());
    assertEqualInt(11, dst.get(0));
    assertEqualInt(22, dst.get(1));
    assertEqualInt(33, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne036() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(0, 2);
    parent.set(sub);
    assertEqual(2, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySetOne037() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {5, 6, 7});
    Uint8ClampedArray sub = parent.subarray(1, 2);
    parent.set(sub);
    assertEqual(1, sub.length());
    assertEqualInt(6, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySetOne038() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = parent.subarray();
    parent.set(sub);
    assertEqual(3, parent.length());
    assertEqualInt(10, parent.get(0));
    assertEqualInt(20, parent.get(1));
    assertEqualInt(30, parent.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne039() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 0, 2);
    b.set(0, 77);
    b.set(1, 88);
    a.set(b);
    assertEqual(4, a.length());
    assertEqualInt(77, a.get(0));
    assertEqualInt(88, a.get(1));
    assertEqualInt(0, a.get(2));
    assertEqualInt(0, a.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 5;
    Integer ret = arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(null, ret);
    assertEqualInt(5, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne041() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    Integer ret = dst.set(src, 0);
    assertEqual(3, dst.length());
    assertEqual(null, ret);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(0, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne042() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer ret = dst.set(src);
    assertEqual(3, dst.length());
    assertEqual(null, ret);
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 5;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(5, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    ArrayBuffer origBuf = arr.buffer();
    int v = 5;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqual(origBuf, arr.buffer());
    assertEqualInt(5, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray dst = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    dst.set(src);
    assertEqual(4, dst.length());
    assertEqual(2, dst.byteOffset());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(0, dst.get(2));
    assertEqualInt(0, dst.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne046() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    dst.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne047() {
    Uint8ClampedArray dst = new Uint8ClampedArray(0);
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1});
    try {
    dst.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne048() {
    Uint8ClampedArray dst = new Uint8ClampedArray(0);
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne049() {
    Uint8ClampedArray dst = new Uint8ClampedArray(0);
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    dst.set(src);
    assertEqual(0, dst.length());
    }

    @Test
    void testUint8ClampedArraySetOne050() {
    Uint8ClampedArray dst = new Uint8ClampedArray(0);
    List<Integer> src = new ArrayList<>();
    dst.set(src, 0);
    assertEqual(0, dst.length());
    }

    @Test
    void testUint8ClampedArraySetOne051() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {7, 8, 9});
    List<Integer> src = new ArrayList<>();
    dst.set(src, 3);
    assertEqual(3, dst.length());
    assertEqualInt(7, dst.get(0));
    assertEqualInt(8, dst.get(1));
    assertEqualInt(9, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int v = 99;
    arr.set(1, v);
    assertEqual(4, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne053() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    dst.set(src, 1);
    assertEqualInt(10, dst.get(0));
    assertEqualInt(1, dst.get(1));
    assertEqualInt(2, dst.get(2));
    assertEqualInt(40, dst.get(3));
    assertEqualInt(50, dst.get(4));
    }

    @Test
    void testUint8ClampedArraySetOne054() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {7, 8});
    dst.set(src);
    assertEqualInt(7, dst.get(0));
    assertEqualInt(8, dst.get(1));
    assertEqualInt(30, dst.get(2));
    assertEqualInt(40, dst.get(3));
    assertEqualInt(50, dst.get(4));
    }

    @Test
    void testUint8ClampedArraySetOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int setValue1 = 10;
    int setValue2 = 20;
    int setValue3 = 30;
    arr.set(0, setValue1);
    arr.set(1, setValue2);
    arr.set(2, setValue3);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int setValue1 = 10;
    int setValue2 = 20;
    arr.set(0, setValue1);
    arr.set(0, setValue2);
    assertEqual(3, arr.length());
    assertEqualInt(20, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne057() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    dst.set(src, 0);
    Uint8ClampedArray view = new Uint8ClampedArray(dst.buffer());
    assertEqual(3, dst.length());
    assertEqualInt(1, view.get(0));
    assertEqualInt(2, view.get(1));
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne058() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    dst.set(src);
    src.set(0, 99);
    assertEqual(3, dst.length());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne059() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    dst.set(src);
    dst.set(0, 99);
    assertEqual(3, dst.length());
    assertEqualInt(1, src.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(3, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne060() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src1 = java.util.Arrays.asList(1, 2);
    List<Integer> src2 = java.util.Arrays.asList(11, 22);
    dst.set(src1, 0);
    dst.set(src2, 0);
    assertEqual(3, dst.length());
    assertEqualInt(11, dst.get(0));
    assertEqualInt(22, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne061() {
    Uint8ClampedArray dst = new Uint8ClampedArray(256);
    Uint8ClampedArray src = new Uint8ClampedArray(256);
    int i = 0;
    for (i = 0; i < 256; i++) {
    src.set(i, i);
    }
    dst.set(src);
    assertEqual(256, dst.length());
    assertEqualInt(0, dst.get(0));
    assertEqualInt(127, dst.get(127));
    assertEqualInt(255, dst.get(255));
    }

    @Test
    void testUint8ClampedArraySetOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 100);
    assertEqual(3, arr.length());
    assertEqualInt(100, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {10.0, 20.0, 30.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(src, 1);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(1));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(1, 77);
    assertEqual(3, arr.length());
    assertEqualInt(77, arr.get(1));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(2, 88);
    assertEqual(3, arr.length());
    assertEqualInt(88, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.set(0, 50);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, 0);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 255);
    assertEqual(3, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 128);
    assertEqual(3, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 256);
    assertEqual(3, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, -1);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, Double.NaN);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, 0.4);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, 0.5);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0.9);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1.5);
    assertEqual(3, arr.length());
    assertEqualInt(2, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 2.5);
    assertEqual(3, arr.length());
    assertEqualInt(2, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 127.5);
    assertEqual(3, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }
}
