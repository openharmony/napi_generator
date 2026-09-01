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
 * Uint8ClampedArraySet03Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySet03Test extends BasTest {

    @Test
    void testUint8ClampedArraySetThree001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {2.5};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqualInt(2, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {127.5};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {128.5};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {0.9};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] src = new double[] {255.0};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> src = new ArrayList<>();
    arr.set(src, 1);
    assertEqual(3, arr.length());
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    List<Integer> src = new ArrayList<>();
    try {
    arr.set(src, 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] al = new int[] {};
    arr.set(al);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] al = new double[] {42.0};
    arr.set(al);
    assertEqual(3, arr.length());
    assertEqualInt(42, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] al = new double[] {99.0};
    arr.set(al, 2);
    assertEqual(3, arr.length());
    assertEqualInt(99, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {1.0};
    try {
    arr.set(al, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {1.0};
    try {
    arr.set(al, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {1.0, 2.0, 3.0};
    try {
    arr.set(al, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] al = new double[] {-5.0};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {1e10};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] al = new double[] {0.0};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] al = new double[] {1.0, 2.0, 3.0};
    arr.set(al, 0);
    assertEqual(3, arr.length());
    assertEqualInt(3, arr.get(2));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    double[] al = new double[] {256.0, -1.0, Double.NaN, 100.0};
    arr.set(al, 0);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(2));
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(100, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetThree019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int[] al = new int[] {127};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(127, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int[] al = new int[] {128};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    int[] al = new int[] {256, -1, 0, 200};
    arr.set(al, 0);
    assertEqual(4, arr.length());
    assertEqualInt(200, arr.get(3));
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    int[] al = new int[] {5, 6};
    arr.set(al, 2);
    assertEqual(4, arr.length());
    assertEqualInt(6, arr.get(3));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    double[] al = new double[] {99.0};
    arr.set(al, 0);
    assertEqual(4, arr.length());
    assertEqualInt(4, arr.get(3));
    assertEqualInt(99, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int[] al = new int[] {1};
    try {
    arr.set(al, 2147483647);
    fail();
    } catch (IndexOutOfBoundsError e) {
    assertEqual("IndexOutOfBoundsError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    int[] al = new int[] {1};
    try {
    arr.set(al, Integer.MIN_VALUE);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5});
    int v = -128;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    int v = 127;
    List<Integer> src = java.util.Arrays.asList(v);
    arr.set(src);
    assertEqualInt(127, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double[] src = new double[] {256.0};
    arr.set(src, 0);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9});
    double[] src = new double[] {-2.0};
    arr.set(src, 0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double[] al = new double[] {300.0};
    arr.set(al, 0);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9});
    double[] al = new double[] {-100.0};
    arr.set(al, 0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {1.5, 2.5};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(2, arr.get(1));
    assertEqualInt(2, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    double[] al = new double[] {127.5, 128.5};
    arr.set(al, 0);
    assertEqual(2, arr.length());
    assertEqualInt(128, arr.get(0));
    assertEqualInt(128, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {10.0, 256.0, -1.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {100, 200});
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqualInt(200, arr.get(1));
    assertEqualInt(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.set(1, 77);
    assertEqual(2, arr.length());
    assertEqualInt(77, arr.get(1));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {9.0, 8.0};
    arr.set(src, 1);
    assertEqual(3, arr.length());
    assertEqualInt(9, arr.get(1));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(8, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {5, 6});
    arr.set(src, 1);
    assertEqual(3, arr.length());
    assertEqualInt(6, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 11);
    double[] src = new double[] {22.0};
    arr.set(src, 1);
    assertEqual(3, arr.length());
    assertEqualInt(11, arr.get(0));
    assertEqualInt(22, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray ref = arr;
    try {
    double[] src = new double[] {10.0, 20.0};
    arr.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(ref, arr);
    }

    @Test
    void testUint8ClampedArraySetThree041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.set(new Uint8ClampedArray(new int[] {5, 6, 7}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(2, arr.length());
    }

    @Test
    void testUint8ClampedArraySetThree042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    for (int i = 0; i < 2; i++) {
    try {
    arr.set(new Uint8ClampedArray(new int[] {1, 2, 3}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    arr.set(0, 1);
    arr.set(new Uint8ClampedArray(new int[] {2}), 1);
    assertEqual("1,2", String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArraySetThree044() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray view1 = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray view2 = new Uint8ClampedArray(buf, 0, 4);
    view1.set(0, 77);
    assertEqual(4, view1.length());
    assertEqualInt(77, view2.get(0));
    assertEqualInt(0, view1.get(1));
    assertEqualInt(0, view1.get(2));
    assertEqualInt(0, view1.get(3));
    }

    @Test
    void testUint8ClampedArraySetThree045() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray child = parent.subarray(1, 3);
    parent.set(1, 50);
    assertEqual(2, child.length());
    assertEqualInt(50, child.get(0));
    assertEqualInt(0, child.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree046() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray child = parent.subarray(1, 3);
    child.set(0, 60);
    assertEqual(2, child.length());
    assertEqualInt(60, child.get(0));
    assertEqualInt(0, child.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree047() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray child = parent.subarray(1, 4);
    double[] src = new double[] {11.0, 22.0};
    parent.set(src, 1);
    assertEqual(3, child.length());
    assertEqualInt(11, child.get(0));
    assertEqualInt(22, child.get(1));
    assertEqualInt(0, child.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree048() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray child = parent.subarray(1, 4);
    double[] src = new double[] {33.0, 44.0};
    child.set(src);
    assertEqual(3, child.length());
    assertEqualInt(33, child.get(0));
    assertEqualInt(44, child.get(1));
    assertEqualInt(0, child.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src1 = new double[] {1.0, 2.0, 3.0};
    arr.set(src1);
    arr.set(new Uint8ClampedArray(new int[] {9}), 0);
    assertEqual(3, arr.length());
    assertEqualInt(9, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(new Uint8ClampedArray(new int[] {7, 8, 9}));
    double[] src = new double[] {1.0};
    arr.set(src, 2);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(2));
    assertEqualInt(7, arr.get(0));
    assertEqualInt(8, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    arr.set(0, 1);
    double[] src = new double[] {2.0, 3.0};
    arr.set(src, 1);
    arr.set(new Uint8ClampedArray(new int[] {4}), 3);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetThree052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    try {
    arr.set(5, 99);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree053() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray tail = parent.subarray(2, 4);
    parent.set(tail, 0);
    assertEqual(2, tail.length());
    assertEqualInt(3, tail.get(0));
    assertEqualInt(4, tail.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree054() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray head = parent.subarray(0, 2);
    parent.set(head, 2);
    assertEqual(2, head.length());
    assertEqualInt(10, head.get(0));
    assertEqualInt(20, head.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree055() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray mid = parent.subarray(1, 3);
    parent.set(mid, 0);
    assertEqual(4, parent.length());
    assertEqualInt(2, parent.get(0));
    assertEqualInt(3, parent.get(1));
    assertEqualInt(3, parent.get(2));
    assertEqualInt(4, parent.get(3));
    }

    @Test
    void testUint8ClampedArraySetThree056() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    parent.set(parent, 0);
    assertEqual(3, parent.length());
    assertEqualInt(2, parent.get(1));
    assertEqualInt(1, parent.get(0));
    assertEqualInt(3, parent.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 33;
    arr.set(0x0, v);
    assertEqual(3, arr.length());
    assertEqualInt(33, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 44;
    arr.set(01, v);
    assertEqual(3, arr.length());
    assertEqualInt(44, arr.get(1));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 55;
    arr.set(0b10, v);
    assertEqual(3, arr.length());
    assertEqualInt(55, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 10, 10});
    int v = -128;
    arr.set(0, v);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(10, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    int v = -64;
    arr.set(1, v);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(1));
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    int v = 100;
    arr.set(2, v);
    assertEqual(3, arr.length());
    assertEqualInt(100, arr.get(2));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    int v = 126;
    arr.set(0, v);
    assertEqual(1, arr.length());
    assertEqualInt(126, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int v = -2;
    arr.set(0, v);
    assertEqual(1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int v = -127;
    arr.set(0, v);
    assertEqual(1, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree066() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(9, 8);
    dst.set(src, 0x2);
    assertEqual(4, dst.length());
    assertEqualInt(9, dst.get(2));
    assertEqualInt(8, dst.get(3));
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree067() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(9, 8);
    dst.set(src, 02);
    assertEqual(4, dst.length());
    assertEqualInt(9, dst.get(2));
    assertEqualInt(8, dst.get(3));
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree068() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(9, 8);
    dst.set(src, 0b10);
    assertEqual(4, dst.length());
    assertEqualInt(9, dst.get(2));
    assertEqualInt(8, dst.get(3));
    assertEqualInt(0, dst.get(0));
    assertEqualInt(0, dst.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree069() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0});
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5);
    try {
    dst.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree070() {
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
    void testUint8ClampedArraySetThree071() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    dst.set(src, 0);
    assertEqual(3, dst.byteLength());
    assertEqualInt(1, dst.get(0));
    assertEqualInt(2, dst.get(1));
    assertEqualInt(0, dst.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree072() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    dst.set(src, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree073() {
    Uint8ClampedArray dst = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    dst.set(src, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0377, 0100);
    arr.set(src);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(64, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0b11111111, 0b00000001);
    arr.set(src);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    ArrayBuffer beforeBuf = arr.buffer();
    double[] src = new double[] {1.0, 2.0, 3.0};
    arr.set(src);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqual(beforeBuf, arr.buffer());
    }

    @Test
    void testUint8ClampedArraySetThree077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    try {
    arr.set(src, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetThree078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double[] src = new double[] {3.5};
    arr.set(src);
    assertEqualInt(4, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {0.4};
    arr.set(src);
    assertEqual(2, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(9, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree080() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {10.0, 20.0, 30.0};
    a1.set(src);
    a2.set(src, 0);
    assertEqual(3, a1.length());
    assertEqual(3, a2.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqualInt(20, a1.get(1));
    assertEqualInt(30, a1.get(2));
    assertEqualInt(20, a2.get(1));
    assertEqualInt(30, a2.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree081() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    ArrayBuffer beforeBuf = arr.buffer();
    try {
    double[] src = new double[] {10.0, 20.0};
    arr.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, arr.length());
    assertEqual(3, arr.byteLength());
    assertEqual(2, arr.byteOffset());
    assertEqual(beforeBuf, arr.buffer());
    }

    @Test
    void testUint8ClampedArraySetThree082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    double[] src = new double[] {88.0, 99.0};
    arr.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree083() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0});
    a1.set(0, 100);
    double[] src = new double[] {100.0};
    a2.set(src, 0);
    assertEqual(1, a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqualInt(100, a1.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree084() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0, 0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src1 = java.util.Arrays.asList(10, 20);
    double[] src2 = new double[] {10.0, 20.0};
    a1.set(src1);
    a2.set(src2);
    assertEqual(2, a1.length());
    assertEqual(2, a2.length());
    assertEqual(a2.get(1).intValue(), a1.get(1).intValue());
    assertEqualInt(10, a1.get(0));
    assertEqualInt(10, a2.get(0));
    assertEqualInt(20, a1.get(1));
    assertEqualInt(20, a2.get(1));
    }

    @Test
    void testUint8ClampedArraySetThree085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {3.0};
    arr.set(src);
    src[0] = 99;
    assertEqual(3, arr.length());
    assertEqualInt(3, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetThree086() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0});
    a1.set(0, 256);
    double[] src = new double[] {256.0};
    a2.set(src, 0);
    assertEqual(1, a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqualInt(255, a1.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree087() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {99});
    a1.set(0, -1);
    double[] src = new double[] {-1.0};
    a2.set(src, 0);
    assertEqual(1, a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqualInt(0, a1.get(0));
    }

    @Test
    void testUint8ClampedArraySetThree088() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {99});
    a1.set(0, Double.NaN);
    double[] src = new double[] {Double.NaN};
    a2.set(src, 0);
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    }
}
