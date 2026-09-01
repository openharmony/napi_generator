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
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arraypropertyone —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraypropertyone extends BasTest {

    @Test
    void testUint16Arraypropertyone001() {
    Uint16Array arr = new Uint16Array();
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }

    @Test
    void testUint16Arraypropertyone002() {
    Uint16Array arr = new Uint16Array();
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone003() {
    assertEqual(2, Uint16Array.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint16Arraypropertyone004() {
    Uint16Array arr = new Uint16Array(5);
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }

    @Test
    void testUint16Arraypropertyone005() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone006() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual(10, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone007() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint16Arraypropertyone008() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone009() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(2, Uint16Array.BYTES_PER_ELEMENT);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyone010() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone011() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone012() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyone013() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone014() {
    int[] src = new int[] {10, 20, 30};
    Uint16Array arr = new Uint16Array(src);
    assertTrue(arr.buffer() instanceof ArrayBuffer);
    }

    @Test
    void testUint16Arraypropertyone015() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(3, arr.length());
    assertEqual(6, arr.byteLength());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arraypropertyone016() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint16Arraypropertyone017() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone018() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(buf.byteLength(), arr.byteLength());
    assertEqual(buf, arr.buffer());
    arr.set(0, 1234);
    Uint16Array sharedView = new Uint16Array(buf);
    assertEqualInt(1234, sharedView.get(0));
    sharedView.set(1, 5678);
    assertEqualInt(5678, arr.get(1));
    }

    @Test
    void testUint16Arraypropertyone019() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyone020() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone021() {
    Uint16Array src = new Uint16Array(3);
    Uint16Array arr = new Uint16Array(src);
    src.set(0, 123);
    assertEqualInt(0, arr.get(0));
    assertNotEqual(src.buffer(), arr.buffer());
    }

    @Test
    void testUint16Arraypropertyone022() {
    Uint16Array src = new Uint16Array(3);
    Uint16Array arr = new Uint16Array(src);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone023() {
    Uint16Array src = new Uint16Array(3);
    Uint16Array arr = new Uint16Array(src);
    assertEqual(src.byteLength(), arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone024() {
    Uint16Array src = new Uint16Array(3);
    Uint16Array arr = new Uint16Array(src);
    assertEqual(src.length(), arr.length());
    }

    @Test
    void testUint16Arraypropertyone025() {
    Uint16Array src = new Uint16Array(3);
    Uint16Array arr = new Uint16Array(src);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    assertEqual(3, arr.length());
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint16Arraypropertyone028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone031() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(0, arr.byteOffset());
    assertEqual(2, arr.length());
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint16Arraypropertyone033() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone034() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertyone035() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertyone037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyone038() {
    Uint16Array arr = new Uint16Array(2);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyone039() {
    Uint16Array arr = new Uint16Array(100);
    assertEqual(100, arr.length());
    }

    @Test
    void testUint16Arraypropertyone040() {
    Uint16Array arr = new Uint16Array(0xFFFF);
    assertEqual(65535, arr.length());
    }

    @Test
    void testUint16Arraypropertyone041() {
    Uint16Array a = new Uint16Array(3.9);
    assertEqual(3, a.length());
    assertEqual(6, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone042() {
    Uint16Array a = new Uint16Array(0.0);
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone043() {
    Uint16Array src = new Uint16Array(new int[] {-1, 65536, 2});
    Uint16Array a = new Uint16Array(src);
    a.set(0, 9);
    assertEqual("65535,0,2", src.join(","));
    assertEqual("9,0,2", a.join(","));
    }

    @Test
    void testUint16Arraypropertyone044() {
    int[] s = new int[] {0, 32768, 65535};
    Uint16Array a = new Uint16Array(s);
    assertEqual("0,32768,65535", a.join(","));
    assertEqual(3, a.length());
    }

    @Test
    void testUint16Arraypropertyone045() {
    double[] s = new double[] {1.9, -1.2, 65536.8};
    Uint16Array a = new Uint16Array(s);
    assertEqual("1,65535,0", a.join(","));
    }

    @Test
    void testUint16Arraypropertyone046() {
    int[] s = new int[] {3, 1, 4, 1};
    Uint16Array a = new Uint16Array(s);
    s[0] = 9;
    assertEqual("3,1,4,1", a.join(","));
    }

    @Test
    void testUint16Arraypropertyone047() {
    double[] s = new double[] {2.0, 4.0, 8.0};
    Uint16Array a = new Uint16Array(s);
    assertEqual("2,4,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertyone048() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b);
    assertEqual(b, a.buffer());
    assertEqual(5, a.length());
    assertEqual(10, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone049() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b, 4);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(6, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone050() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array a = new Uint16Array(b, 4, 3);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(6, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone051() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b);
    assertEqual(0, a.byteOffset());
    assertEqual(4, a.length());
    }

    @Test
    void testUint16Arraypropertyone052() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b, 8, 0);
    assertEqual(8, a.byteOffset());
    assertEqual(0, a.length());
    }

    @Test
    void testUint16Arraypropertyone053() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone054() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, 10);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone055() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, -2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone056() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, 4, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone057() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, 0, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone058() {
    try {
    Uint16Array a = new Uint16Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone059() {
    Uint16Array a = new Uint16Array(0.9);
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone060() {
    Uint16Array a = new Uint16Array(3.0);
    assertEqual("0,0,0", a.join(","));
    assertEqual(6, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone061() {
    int[] s = new int[] {};
    Uint16Array a = new Uint16Array(s);
    assertEqual(0, a.length());
    assertEqual("", String.valueOf(a));
    }

    @Test
    void testUint16Arraypropertyone062() {
    double[] s = new double[] {65537.9};
    Uint16Array a = new Uint16Array(s);
    assertEqual("1", a.join(","));
    assertEqual(2, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone063() {
    int[] s = new int[] {};
    Uint16Array a = new Uint16Array(s);
    Uint16Array other = new Uint16Array();
    assertEqual(0, a.length());
    assertNotEqual(other.buffer(), a.buffer());
    }

    @Test
    void testUint16Arraypropertyone064() {
    Uint16Array s = new Uint16Array();
    Uint16Array a = new Uint16Array(s);
    assertEqual(0, a.length());
    assertNotEqual(s.buffer(), a.buffer());
    }

    @Test
    void testUint16Arraypropertyone065() {
    ArrayBuffer b = new ArrayBuffer(0);
    Uint16Array a = new Uint16Array(b);
    assertEqual(b, a.buffer());
    assertEqual(0, a.length());
    }

    @Test
    void testUint16Arraypropertyone066() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b, 8);
    assertEqual(8, a.byteOffset());
    assertEqual(0, a.length());
    }

    @Test
    void testUint16Arraypropertyone067() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b, 4, 0);
    assertEqual(4, a.byteOffset());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone068() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array a = new Uint16Array(b, 2.9);
    assertEqual(2, a.byteOffset());
    assertEqual(3, a.length());
    }

    @Test
    void testUint16Arraypropertyone069() {
    ArrayBuffer b = new ArrayBuffer(7);
    try {
    Uint16Array a = new Uint16Array(b);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone070() {
    ArrayBuffer buffer = new ArrayBuffer(7);
    Uint16Array view = new Uint16Array(buffer, 2, 2);
    assertEqual(2, view.byteOffset());
    assertEqual(2, view.length());
    assertEqual(5, view.byteLength());
    assertEqual(buffer, view.buffer());
    }

    @Test
    void testUint16Arraypropertyone071() {
    ArrayBuffer b = new ArrayBuffer(8);
    try {
    Uint16Array a = new Uint16Array(b, 1, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16Arraypropertyone072() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array a = new Uint16Array(b, 4, 4);
    assertEqual(12, a.byteOffset() + a.byteLength());
    assertEqual(4, a.length());
    }

    @Test
    void testUint16Arraypropertyone073() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b, 0, 3);
    assertEqual(0, a.byteOffset());
    assertEqual(3, a.length());
    }

    @Test
    void testUint16Arraypropertyone074() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b, 4);
    assertEqual(4, a.byteOffset());
    assertEqual(3, a.length());
    }

    @Test
    void testUint16Arraypropertyone075() {
    Uint16Array a = new Uint16Array(1024);
    assertEqual(1024, a.length());
    assertEqual(2048, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyone076() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array v = new Uint16Array(b, 2, 3);
    v.set(Uint16Array.of(1, 2, 3));
    Uint16Array a = new Uint16Array(v);
    assertEqual(0, a.byteOffset());
    assertEqual("1,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertyone077() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array a = new Uint16Array(b);
    a.set(2, 9);
    assertEqual("0,0,9", new Uint16Array(b).join(","));
    }

    @Test
    void testUint16Arraypropertyone078() {
    double[] s = new double[] {8.0, 2.0, 5.0};
    Uint16Array a = new Uint16Array(s);
    assertEqual("8,2,5", a.join(","));
    }
}
