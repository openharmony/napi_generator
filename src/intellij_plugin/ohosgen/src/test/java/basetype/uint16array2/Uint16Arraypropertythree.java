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
 * Uint16Arraypropertythree —— Int16Array 方法族测试。
 */
public class Uint16Arraypropertythree extends BasTest {

    @Test
    void testUint16Arraypropertythree001() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(3, arr.length());
    assertEqual(6, arr.byteLength());
    assertEqual(0, arr.get(0));
    }

    @Test
    void testUint16Arraypropertythree002() {
    Uint16Array arr = new Uint16Array();
    assertEqual(0, arr.length());
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertythree003() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(buf, arr.buffer());
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertythree004() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(3, arr.length());
    assertEqual("10,20,30", arr.join(","));
    }

    @Test
    void testUint16Arraypropertythree005() {
    int[] src = new int[] {1, 2, 3, 4, 5};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(5, arr.length());
    assertEqual("1,2,3,4,5", arr.join(","));
    }

    @Test
    void testUint16Arraypropertythree006() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(buf, arr.buffer());
    assertEqual(0, arr.byteOffset());
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertythree007() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(6, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree008() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint16Arraypropertythree009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array sub = arr.subarray(0, 2);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16Arraypropertythree010() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint16Arraypropertythree011() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16Arraypropertythree012() {
    Uint16Array arr1 = new Uint16Array(3);
    Uint16Array arr2 = new Uint16Array(3);
    assertNotEqual(arr2.buffer(), arr1.buffer());
    }

    @Test
    void testUint16Arraypropertythree013() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array dst = Uint16Array.from(src);
    assertNotEqual(src.buffer(), dst.buffer());
    }

    @Test
    void testUint16Arraypropertythree014() {
    Uint16Array arr = new Uint16Array();
    assertEqual(0, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree015() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(6, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree016() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual(10, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree017() {
    int[] src = new int[] {1, 2, 3, 4};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(8, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree018() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(6, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree019() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint16Array arr = new Uint16Array(buf, 2, 3);
    assertEqual(10, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertythree020() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree021() {
    Uint16Array arr = new Uint16Array();
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree022() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree023() {
    Uint16Array arr = Uint16Array.of(10, 20);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree024() {
    int[] src = new int[] {1, 2, 3};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree025() {
    Uint16Array src = Uint16Array.of(1, 2);
    Uint16Array dst = new Uint16Array(src);
    assertEqual(0, dst.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree027() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Uint16Array arr = new Uint16Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree029() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array sub = arr.subarray(1);
    assertEqual(2, sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree030() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2, 4);
    assertEqual(4, sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree031() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertythree032() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertythree033() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(4, sub.byteLength());
    }

    @Test
    void testUint16Arraypropertythree034() {
    Uint16Array arr = new Uint16Array();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arraypropertythree035() {
    int[] src = new int[] {1, 2, 3, 4};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint16Arraypropertythree036() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    }

    @Test
    void testUint16Arraypropertythree037() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16Arraypropertythree038() {
    Uint16Array arr = new Uint16Array(1);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertythree039() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array left = new Uint16Array(b, 0, 2);
    Uint16Array right = new Uint16Array(b, 8, 2);
    left.set(Uint16Array.of(1, 2));
    right.set(Uint16Array.of(5, 6));
    assertEqual("1,2,0,0,5,6", new Uint16Array(b).join(","));
    }

    @Test
    void testUint16Arraypropertythree040() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b, 0, 4);
    Uint16Array v = new Uint16Array(b, 4, 2);
    a.set(2, 22);
    assertEqual(22, v.get(0));
    }

    @Test
    void testUint16Arraypropertythree041() {
    Uint16Array a = new Uint16Array(new ArrayBuffer(14), 2, 5);
    Uint16Array v = a.subarray(2, 4);
    assertEqual(6, v.byteOffset());
    assertEqual(4, v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree042() {
    Uint16Array a = new Uint16Array(new ArrayBuffer(16), 2, 6);
    Uint16Array first = a.subarray(1, 5);
    Uint16Array second = first.subarray(2, 4);
    assertEqual(4, first.byteOffset());
    assertEqual(8, second.byteOffset());
    assertEqual(2, second.length());
    }

    @Test
    void testUint16Arraypropertythree043() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array first = a.subarray(1, 5);
    Uint16Array second = first.subarray(1, 3);
    second.set(0, 30);
    assertEqual("1,2,30,4,5", a.join(","));
    }

    @Test
    void testUint16Arraypropertythree044() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = a.subarray(2, 2);
    assertEqual(0, v.length());
    assertEqual(a.byteOffset() + 4, v.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree045() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = a.subarray(2);
    v.set(1, 40);
    assertEqual("1,2,3,40", a.join(","));
    }

    @Test
    void testUint16Arraypropertythree046() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array v = a.subarray(-3, -1);
    assertEqual("3,4", v.join(","));
    assertEqual(a.byteOffset() + 4, v.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree047() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    Uint16Array v = new Uint16Array(b, 2, 3);
    assertEqual(all.buffer(), v.buffer());
    v.set(2, 33);
    assertEqual(33, all.get(3));
    }

    @Test
    void testUint16Arraypropertythree048() {
    ArrayBuffer b = new ArrayBuffer(14);
    Uint16Array v = new Uint16Array(b, 6, 4);
    assertEqual(b.byteLength(), v.byteOffset() + v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree049() {
    ArrayBuffer b = new ArrayBuffer(16);
    Uint16Array root = new Uint16Array(b);
    Uint16Array a = root.subarray(1, 7);
    Uint16Array d = a.subarray(2, 4);
    assertEqual(b, d.buffer());
    assertEqual(6, d.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree050() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array nested = root.subarray(1, 4).subarray(1, 2);
    root.set(2, 30);
    assertEqual(30, nested.get(0));
    }

    @Test
    void testUint16Arraypropertythree051() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array left = root.subarray(1, 4);
    Uint16Array nested = left.subarray(1, 2);
    Uint16Array sibling = root.subarray(2, 5);
    nested.set(0, 33);
    assertEqual(33, sibling.get(0));
    }

    @Test
    void testUint16Arraypropertythree052() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5, 6);
    Uint16Array left = root.subarray(0, 2);
    Uint16Array right = root.subarray(4, 6);
    left.set(0, 10);
    assertEqual("5,6", right.join(","));
    }

    @Test
    void testUint16Arraypropertythree053() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array v = root.subarray(-99, 99);
    assertEqual(5, v.length());
    assertEqual(10, v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree054() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = root.subarray(-99, 2);
    v.set(0, 10);
    assertEqual("10,2,3,4", root.join(","));
    assertEqual(root.byteOffset(), v.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree055() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = root.subarray(2, 99);
    v.set(1, 40);
    assertEqual("1,2,3,40", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree056() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = root.subarray(3, 1);
    assertEqual(0, v.length());
    assertEqual(root.byteOffset() + 6, v.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree057() {
    Uint16Array root = Uint16Array.of(9, 1, 2, 3, 8);
    Uint16Array v = root.subarray(1, 4);
    v.reverse();
    assertEqual("9,3,2,1,8", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree058() {
    Uint16Array root = Uint16Array.of(9, 3, 1, 2, 8);
    Uint16Array v = root.subarray(1, 4);
    v.sort();
    assertEqual("9,1,2,3,8", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree059() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array v = root.subarray(1, 5).subarray(1, 3);
    v.fill(9);
    assertEqual("1,2,9,9,5", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree060() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array v = root.subarray(1, 5).subarray(1, 3);
    v.set(Uint16Array.of(8, 9));
    assertEqual("1,2,8,9,5", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree061() {
    Uint16Array root = Uint16Array.of(9, 1, 2, 3, 4, 8);
    Uint16Array v = root.subarray(1, 5);
    v.copyWithin(1, 0, 3);
    assertEqual("9,1,1,2,3,8", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree062() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4);
    Uint16Array v = root.subarray(-1);
    v.set(0, 44);
    assertEqual("1,2,3,44", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree063() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4, 5, 6);
    Uint16Array first = root.subarray(1, 6);
    Uint16Array second = first.subarray(-3, -1);
    assertEqual("4,5", second.join(","));
    assertEqual(root.byteOffset() + 6, second.byteOffset());
    }

    @Test
    void testUint16Arraypropertythree064() {
    Uint16Array root = Uint16Array.of(1, 2, 3);
    Uint16Array first = root.subarray(1);
    Uint16Array second = first.subarray(1, 1);
    assertEqual(root.buffer(), second.buffer());
    assertEqual(0, second.length());
    }

    @Test
    void testUint16Arraypropertythree065() {
    Uint16Array root = Uint16Array.of(1, 2, 3);
    Uint16Array v = root.subarray();
    v.set(1, 22);
    assertEqual("1,22,3", root.join(","));
    assertEqual(root.byteLength(), v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree066() {
    ArrayBuffer b = new ArrayBuffer(16);
    Uint16Array root = new Uint16Array(b, 4, 5);
    Uint16Array v = root.subarray(2, 4);
    assertEqual(8, v.byteOffset());
    assertEqual(4, v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree067() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array root = new Uint16Array(b, 4);
    root.set(0, 11);
    assertEqual(11, new Uint16Array(b).get(2));
    assertEqual(4, root.length());
    }

    @Test
    void testUint16Arraypropertythree068() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b, 2, 2);
    Uint16Array v = new Uint16Array(b, 2, 2);
    a.set(1, 77);
    assertEqual("0,77", v.join(","));
    }

    @Test
    void testUint16Arraypropertythree069() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array left = new Uint16Array(b, 0, 3);
    Uint16Array right = new Uint16Array(b, 4, 3);
    left.set(Uint16Array.of(1, 2, 3));
    right.set(0, 30);
    assertEqual("1,2,30", left.join(","));
    assertEqual("30,0,0", right.join(","));
    }

    @Test
    void testUint16Arraypropertythree070() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array root = new Uint16Array(b, 8, 0);
    Uint16Array v = root.subarray();
    assertEqual(8, v.byteOffset());
    assertEqual(0, v.length());
    }

    @Test
    void testUint16Arraypropertythree071() {
    ArrayBuffer b = new ArrayBuffer(20);
    Uint16Array root = new Uint16Array(b, 4, 6);
    Uint16Array v = root.subarray(1, 3);
    assertEqual(4, v.byteLength());
    assertEqual(10, b.byteLength() - v.byteOffset() - v.byteLength());
    }

    @Test
    void testUint16Arraypropertythree072() {
    Uint16Array root = new Uint16Array(3);
    Uint16Array v = root.subarray(1, 2);
    v.set(0, 65535);
    assertEqual("0,65535,0", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree073() {
    Uint16Array root = new Uint16Array(3);
    Uint16Array v = root.subarray(1, 2);
    v.set(0, -1);
    assertEqual("0,65535,0", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree074() {
    Uint16Array root = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array v = root.subarray(1, 4);
    v.fill(7);
    assertEqual("10,7,7,7,50", root.join(","));
    }

    @Test
    void testUint16Arraypropertythree075() {
    Uint16Array root = Uint16Array.of(1, 2, 3, 4);
    Uint16Array nested = root.subarray(1, 4).subarray(1, 2);
    nested.set(0, 33);
    assertEqual("1,2,33,4", root.join(","));
    }
}
