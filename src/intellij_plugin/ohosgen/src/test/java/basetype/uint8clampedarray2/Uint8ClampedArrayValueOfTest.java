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
 * Uint8ClampedArrayValueOfTest —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayValueOfTest extends BasTest {

    @Test
    void testUint8ClampedArrayValueOf001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    Uint8ClampedArray val1 = arr.valueOf();
    Uint8ClampedArray val2 = arr.valueOf();
    assertEqual(arr, val1);
    assertEqual(arr, val2);
    }

    @Test
    void testUint8ClampedArrayValueOf002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(arr, arr.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf003() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 3);
    assertEqual(arr, arr.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf004() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(1, 3);
    assertEqual(s, s.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf005() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = parent.slice(1, 3);
    assertNotEqual(parent.buffer(), s.valueOf().buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf006() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(buf, 0, 4);
    Uint8ClampedArray backView = new Uint8ClampedArray(buf, 4, 4);
    assertEqual(frontView, frontView.valueOf());
    assertEqual(backView, backView.valueOf());
    assertNotEqual(backView.valueOf(), frontView.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray frontView = new Uint8ClampedArray(buf, 0, 6);
    Uint8ClampedArray backView = new Uint8ClampedArray(buf, 2, 4);
    assertEqual(backView.valueOf().buffer(), frontView.valueOf().buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, -1, 300});
    assertEqual(arr, arr.valueOf());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, Double.NaN});
    assertEqual(2, arr.length());
    assertEqual(arr, arr.valueOf());
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY});
    assertEqual(arr, arr.valueOf());
    assertEqual(255, arr.get(0));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    assertEqual(0, arr.valueOf().get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    assertEqual(128, arr.valueOf().get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    assertEqual(128, arr.valueOf().get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    v.set(0, 99);
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    v.set(0, 256);
    assertEqual(255, v.get(0));
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    v.set(1, -1);
    assertEqual(0, v.get(1));
    assertEqual(0, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(arr, arr.valueOf().valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.valueOf().subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.valueOf().slice(1, 3);
    assertEqual(2, s.length());
    assertEqual(2, s.get(0));
    assertEqual(3, s.get(1));
    assertNotEqual(arr.buffer(), s.buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf020() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub1 = parent.subarray(1, 4);
    Uint8ClampedArray sub2 = sub1.valueOf().subarray(0, 2);
    assertEqual(5, parent.length());
    assertEqual(3, sub1.length());
    assertEqual(2, sub2.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(2, sub1.get(0));
    assertEqual(3, sub1.get(1));
    assertEqual(4, sub1.get(2));
    assertEqual(2, sub2.get(0));
    assertEqual(3, sub2.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(r, r.valueOf());
    assertNotEqual(arr, r.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    Uint8ClampedArray s = arr.toSorted();
    assertEqual(s, s.valueOf());
    assertNotEqual(arr, s.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray m = arr.map((x) -> x * 2);
    assertEqual(m, m.valueOf());
    assertNotEqual(arr, m.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray f = arr.filter((x) -> x > 2);
    assertEqual(f, f.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(w, w.valueOf());
    assertNotEqual(arr, w.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf026() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray viewA = new Uint8ClampedArray(buf);
    Uint8ClampedArray viewB = new Uint8ClampedArray(buf);
    viewA.valueOf().set(0, 88);
    assertEqual(88, viewB.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.valueOf().length());
    }

    @Test
    void testUint8ClampedArrayValueOf028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.valueOf().byteLength());
    }

    @Test
    void testUint8ClampedArrayValueOf029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(0, arr.valueOf().byteOffset());
    }

    @Test
    void testUint8ClampedArrayValueOf030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    assertEqual(arr.buffer(), arr.valueOf().buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf031() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = parent.subarray(0, 3);
    assertEqual(3, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf032() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 4);
    assertEqual(4, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(arr.length(), v.length());
    }

    @Test
    void testUint8ClampedArrayValueOf034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(5, v.length());
    }

    @Test
    void testUint8ClampedArrayValueOf035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(arr.byteLength(), v.byteLength());
    }

    @Test
    void testUint8ClampedArrayValueOf036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.byteLength());
    }

    @Test
    void testUint8ClampedArrayValueOf037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3, 4);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(arr.byteOffset(), v.byteOffset());
    }

    @Test
    void testUint8ClampedArrayValueOf038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(0, v.byteOffset());
    }

    @Test
    void testUint8ClampedArrayValueOf039() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(2, v.byteOffset());
    }

    @Test
    void testUint8ClampedArrayValueOf040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(1, v.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayValueOf041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(arr.buffer(), v.buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(arr.get(0), v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(10, v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(20, v.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(30, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(255, v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(0, v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(0, v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.valueOf();
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayValueOf050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.valueOf();
    assertEqual(10, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.valueOf();
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    arr.set(0, 88);
    assertEqual(88, v.get(0));
    }

    @Test
    void testUint8ClampedArrayValueOf053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    arr.set(1, 77);
    assertEqual(3, v.length());
    assertEqual(77, v.get(1));
    assertEqual(1, v.get(0));
    assertEqual(3, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    assertEqual(arr, arr.valueOf().valueOf().valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(4, v.length());
    }

    @Test
    void testUint8ClampedArrayValueOf056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.fill(5);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(5, v.get(0));
    assertEqual(5, v.get(1));
    assertEqual(5, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.copyWithin(0, 2);
    assertEqual(4, arr.length());
    assertEqual(arr, arr.valueOf());
    assertEqual(3, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayValueOf058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reverse();
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(3, v.get(0));
    assertEqual(2, v.get(1));
    assertEqual(1, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 2});
    arr.sort();
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(1, v.get(0));
    assertEqual(2, v.get(1));
    assertEqual(3, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(new Uint8ClampedArray(new int[] {10, 20}), 1);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(1, v.get(0));
    assertEqual(10, v.get(1));
    assertEqual(20, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(99, v.get(0));
    assertEqual(2, v.get(1));
    assertEqual(3, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 50);
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(3, v.length());
    assertEqual(arr, v);
    assertEqual(50, v.get(0));
    assertEqual(2, v.get(1));
    assertEqual(3, v.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray s = arr.slice(1, 3);
    assertEqual(s, s.valueOf());
    assertNotEqual(arr, s.valueOf());
    }

    @Test
    void testUint8ClampedArrayValueOf064() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray b = new Uint8ClampedArray(new int[] {3, 4});
    assertNotEqual(b.valueOf().buffer(), a.valueOf().buffer());
    }

    @Test
    void testUint8ClampedArrayValueOf065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray v = arr.valueOf();
    assertEqual(v.length() * v.BYTES_PER_ELEMENT, v.byteLength());
    }

    @Test
    void testUint8ClampedArrayValueOf066() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray sub = parent.subarray(3, 6);
    assertEqual(6, parent.length());
    assertEqual(3, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(2, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(5, parent.get(4));
    assertEqual(6, parent.get(5));
    assertEqual(4, sub.get(0));
    assertEqual(5, sub.get(1));
    assertEqual(6, sub.get(2));
    }

    @Test
    void testUint8ClampedArrayValueOf067() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    parent.set(1, 99);
    assertEqual(2, sub.length());
    assertEqual(99, sub.get(0));
    assertEqual(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArrayValueOf068() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = parent.subarray(1, 3);
    sub.valueOf().set(0, 77);
    assertEqual(4, parent.length());
    assertEqual(2, sub.length());
    assertEqual(1, parent.get(0));
    assertEqual(77, parent.get(1));
    assertEqual(3, parent.get(2));
    assertEqual(4, parent.get(3));
    assertEqual(77, sub.get(0));
    assertEqual(3, sub.get(1));
    }
}
