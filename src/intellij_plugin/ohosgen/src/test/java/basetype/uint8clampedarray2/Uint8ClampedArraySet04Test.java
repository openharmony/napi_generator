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
 * Uint8ClampedArraySet04Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySet04Test extends BasTest {

    @Test
    void testUint8ClampedArraySetFour001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, -1000);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e9);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99, 99});
    arr.set(0, -1e9);
    assertEqual(3, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 2147483648L);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, Double.MAX_VALUE);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0xFF);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0377);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 0b11111111);
    assertEqual(3, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1e2);
    assertEqual(3, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 257);
    assertEqual(1, arr.length());
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetFour011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    arr.set(0, -2);
    assertEqual(1, arr.length());
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArraySetFour012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99, 99});
    double[] src = new double[] {-100.0, 50.0};
    arr.set(src, 0);
    assertEqual(0, arr.get(0));
    assertEqual(50, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 99});
    double[] src = new double[] {1e9, -1e9};
    arr.set(src, 0);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0xFF, 0377);
    arr.set(src, 0);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 99});
    double[] src = new double[] {Double.MAX_VALUE, Double.MIN_VALUE};
    arr.set(src, 0);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {99, 88});
    int before = arr.length();
    arr.set(src, 1);
    assertEqual(before, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(88, arr.get(2));
    assertEqual(40, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetFour017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {99, 88});
    int before = arr.byteLength();
    arr.set(src, 1);
    assertEqual(before, arr.byteLength());
    assertEqual(10, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(88, arr.get(2));
    assertEqual(40, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySetFour018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.set(new Uint8ClampedArray(new int[] {99}), 1);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(99, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Integer r = arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertNull(r);
    }

    @Test
    void testUint8ClampedArraySetFour020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> src = java.util.Arrays.asList(10, 20);
    Integer r = arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(3, arr.get(2));
    assertNull(r);
    }

    @Test
    void testUint8ClampedArraySetFour021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10});
    Integer r = arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertNull(r);
    }

    @Test
    void testUint8ClampedArraySetFour022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8});
    String before = String.valueOf(arr);
    List<Integer> empty = new ArrayList<>();
    arr.set(empty, 0);
    assertEqual(before, String.valueOf(arr));
    }

    @Test
    void testUint8ClampedArraySetFour023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1);
    arr.set(new Uint8ClampedArray(new int[] {5, 6}), 1);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(6, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 1);
    arr.set(new Uint8ClampedArray(new int[] {5, 6}), 1);
    assertEqual(3, arr.byteLength());
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(6, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(0, 11);
    arr.set(new Uint8ClampedArray(new int[] {22, 33}), 0);
    assertEqual(3, arr.length());
    assertEqual(22, arr.get(0));
    assertEqual(33, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(new Uint8ClampedArray(new int[] {22, 33}), 0);
    arr.set(0, 99);
    assertEqual(3, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(33, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    assertEqual(10, src.get(0));
    }

    @Test
    void testUint8ClampedArraySetFour028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {100, 200});
    arr.set(src, 0);
    assertEqual(3, arr.length());
    assertEqual(100, arr.get(0));
    assertEqual(200, arr.get(1));
    assertEqual(0, arr.get(2));
    assertEqual(100, src.get(0));
    assertEqual(200, src.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf);
    parent.set(0, 10);
    parent.set(1, 20);
    parent.set(2, 30);
    parent.set(3, 40);
    Uint8ClampedArray head = new Uint8ClampedArray(buf, 0, 2);
    parent.set(head, 2);
    assertEqual(4, parent.length());
    assertEqual(10, parent.get(0));
    assertEqual(20, parent.get(1));
    assertEqual(10, parent.get(2));
    assertEqual(20, parent.get(3));
    }

    @Test
    void testUint8ClampedArraySetFour030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    double[] src = new double[] {Double.NaN, Double.NaN, Double.NaN};
    arr.set(src, 0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 99});
    double[] src = new double[] {Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY};
    arr.set(src, 0);
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    double[] src = new double[] {257.0, 300.0, 9999.0};
    arr.set(src, 0);
    assertEqual(255, arr.get(0));
    assertEqual(255, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9, 9});
    double[] src = new double[] {-1.0, -100.0, -9999.0};
    arr.set(src, 0);
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    arr.set(src, 0x7FFFFFFF);
    fail();
    } catch (IndexOutOfBoundsError e) {
    assertEqual("IndexOutOfBoundsError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetFour035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    arr.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetFour036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2);
    try {
    arr.set(src, -100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetFour037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    List<Integer> src = java.util.Arrays.asList(5);
    try {
    arr.set(src, 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetFour038() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {99, 88});
    a1.set(src);
    a2.set(src, 0);
    assertEqual(3, a1.length());
    assertEqual(3, a2.length());
    assertEqual(a2.get(0), a1.get(0));
    assertEqual(88, a1.get(1));
    assertEqual(88, a2.get(1));
    assertEqual(0, a1.get(2));
    assertEqual(0, a2.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour039() {
    Uint8ClampedArray a1 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {99, 88});
    a1.set(src);
    a2.set(src, 0);
    assertEqual(3, a1.length());
    assertEqual(3, a2.length());
    assertEqual(a2.get(1), a1.get(1));
    assertEqual(99, a1.get(0));
    assertEqual(99, a2.get(0));
    assertEqual(0, a1.get(2));
    assertEqual(0, a2.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0x1FF);
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 9});
    double[] src = new double[] {-1e10};
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(0, arr.get(0));
    assertEqual(9, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(0x100);
    arr.set(src, 0);
    assertEqual(2, arr.length());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArraySetFour043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.byteLength();
    List<Integer> src = java.util.Arrays.asList(10, 20);
    arr.set(src, 0);
    assertEqual(before, arr.byteLength());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int before = arr.length();
    List<Integer> src = java.util.Arrays.asList(10, 20);
    arr.set(src, 0);
    assertEqual(before, arr.length());
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySetFour045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    List<Integer> src = java.util.Arrays.asList(1, 2, 3, 4, 5, 6);
    try {
    arr.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArraySetFour046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    List<Integer> src = java.util.Arrays.asList(1);
    try {
    arr.set(src, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }
}
