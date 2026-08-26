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
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySet02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySet02Test extends BasTest {

    @Test
    void testUint8ClampedArraySetTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 128.5);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, -0);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, Double.MIN_VALUE);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> src = new ArrayList<>();
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {99.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {10.0, 20.0, 30.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(30, arr.get(2));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {0.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {255.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {256.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {-1.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {Double.NaN};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {-Double.POSITIVE_INFINITY};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {0.5};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.5};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {127.5};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {128.5};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(128, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {0.9};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1e9};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {-1e9};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {Double.MAX_VALUE};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    double[] src = new double[] {Double.MIN_VALUE};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    double[] src = new double[] {256.0, -1.0, Double.NaN, 100.0};
    arr.set(src);
    assertEqual(4, arr.length());
    assertEqual(100, arr.get(3));
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.0, 2.0, 3.0, 4.0};
    try {
    arr.set(src);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    List<Integer> src = new ArrayList<>();
    arr.set(src);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ClampedArraySetTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    double[] src = new double[] {1.0};
    try {
    arr.set(src);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0xFF, 0x7F);
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(127, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(src, 0);
    assertEqual(4, arr.length());
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(0));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    arr.set(src, 3);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {200});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(200, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(30, arr.get(2));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0, 0});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(99, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {255, 255});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo035() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray src = new Uint8ClampedArray(buf);
    src.set(0, 11);
    src.set(1, 22);
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(src, 1);
    assertEqual(3, arr.length());
    assertEqual(11, arr.get(1));
    assertEqual(0, arr.get(0));
    assertEqual(22, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo036() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.set(sub, 0);
    assertEqual(4, parent.length());
    assertEqual(2, sub.length());
    assertEqual(4, arr.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(2, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6});
    arr.set(src, 1);
    assertEqual(4, arr.length());
    assertEqual(5, arr.get(1));
    assertEqual(0, arr.get(0));
    assertEqual(6, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6});
    arr.set(src, 2);
    assertEqual(4, arr.length());
    assertEqual(6, arr.get(3));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(5, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5});
    try {
    arr.set(src, 3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5});
    try {
    arr.set(src, -1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5});
    try {
    arr.set(src, Integer.MIN_VALUE);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6});
    try {
    arr.set(src, 2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Integer ret = arr.set(0, 1);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(null, ret);}

    @Test
    void testUint8ClampedArraySetTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.0};
    Integer ret = arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(null, ret);}

    @Test
    void testUint8ClampedArraySetTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1});
    Integer ret = arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(null, ret);}

    @Test
    void testUint8ClampedArraySetTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int beforeByteLength = arr.buffer().byteLength();
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(beforeByteLength, arr.buffer().byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.set(10, 99);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double[] src = new double[] {99.0, 88.0, 77.0};
    try {
    arr.set(src);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {99, 88});
    try {
    arr.set(src, 2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    arr.set(src, 0);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ClampedArraySetTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 256);
    assertEqual(1, arr.length());
    assertEqual(255, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {256.0, 100.0};
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(100, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    double[] src = new double[] {0.5};
    arr.set(src);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double[] src = new double[] {2.5};
    arr.set(src);
    assertEqual(2, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0});
    arr.set(src, 0);
    assertEqual(0, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    arr.set(sub, 1);
    assertEqual(3, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(1, sub.get(1));
    assertEqual(2, sub.get(2));}

    @Test
    void testUint8ClampedArraySetTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new ArrayBuffer(2));
    src.set(0, 7);
    src.set(1, 8);
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(7, arr.get(0));
    assertEqual(8, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(src, 0);
    src.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(src, 0);
    src.set(1, 99);
    assertEqual(2, arr.length());
    assertEqual(2, arr.get(1));
    assertEqual(1, arr.get(0));}

    @Test
    void testUint8ClampedArraySetTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(sub, 0);
    assertEqual(2, sub.length());
    assertEqual(3, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArraySetTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    arr.set(src);
    assertEqual(4, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    double[] src = new double[] {10.0, 20.0};
    arr.set(src, 1);
    assertEqual(4, arr.length());
    assertEqual(10, arr.get(1));
    assertEqual(0, arr.get(0));
    assertEqual(20, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    double[] al = new double[] {1.0, 2.0};
    arr.set(al);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(9, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    double[] al = new double[] {5.0};
    arr.set(al, 2);
    assertEqual(3, arr.length());
    assertEqual(5, arr.get(2));
    assertEqual(9, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 42;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqual(42, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    int v = 0;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int v = 127;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(127, arr.get(0));
    assertEqual(0, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5});
    int v = -128;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(5, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9, 9});
    int a = 1;
    int b = 2;
    int c = 3;
    List<Integer> src = java.util.Arrays.asList(a, b, c);
    arr.set(src);
    assertEqual(4, arr.length());
    assertEqual(3, arr.get(2));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(9, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int a = 1;
    int b = 2;
    int c = 3;
    List<Integer> src = java.util.Arrays.asList(a, b, c);
    try {
    arr.set(src);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    List<Integer> src = new ArrayList<>();
    arr.set(src);
    assertEqual(0, arr.length());}

    @Test
    void testUint8ClampedArraySetTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int v = 1;
    List<Integer> src = java.util.Arrays.asList(v);
    try {
    arr.set(src);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int v = 100;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int v = 5;
    List<Integer> src = java.util.Arrays.asList(v);
    Integer r = arr.set(src);
    assertEqual(2, arr.length());
    assertEqual(5, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(null, r);}

    @Test
    void testUint8ClampedArraySetTwo076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    double[] src = new double[] {1.0, 2.0};
    arr.set(src, 0);
    assertEqual(4, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(0, arr.get(3));}

    @Test
    void testUint8ClampedArraySetTwo077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    double[] src = new double[] {7.0, 8.0};
    arr.set(src, 2);
    assertEqual(4, arr.length());
    assertEqual(8, arr.get(3));
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(7, arr.get(2));}

    @Test
    void testUint8ClampedArraySetTwo078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.0};
    try {
    arr.set(src, -1);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.0};
    try {
    arr.set(src, 3);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {1.0, 2.0};
    try {
    arr.set(src, 2);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {1.0};
    try {
    arr.set(src, 2147483647);
    fail();} catch (IndexOutOfBoundsError e) {
    assertEqual("IndexOutOfBoundsError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {1.0};
    try {
    arr.set(src, Integer.MIN_VALUE);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());};}

    @Test
    void testUint8ClampedArraySetTwo083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {256.0};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {-1.0};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {Double.NaN};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {-Double.POSITIVE_INFINITY};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {0.5};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));}

    @Test
    void testUint8ClampedArraySetTwo089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {1.5};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(2, arr.get(0));
    assertEqual(0, arr.get(1));}
}
