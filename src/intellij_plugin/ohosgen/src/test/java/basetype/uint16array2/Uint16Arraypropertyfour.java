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
import basetype.common.Uint16Array;

import java.util.LinkedHashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arraypropertyfour —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraypropertyfour extends BasTest {

    @Test
    void testUint16Arraypropertyfour001() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour002() {
    Uint16Array arr = new Uint16Array(10);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour003() {
    Uint16Array arr = Uint16Array.of(10, 20);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour004() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour005() {
    int[] src = new int[] {10, 20, 30, 40};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour006() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(5);
    s.add(10);
    Uint16Array arr = Uint16Array.from(s);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour007() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour008() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16Arraypropertyfour010() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(2);
    assertEqual(2, sub.length());
    }

    @Test
    void testUint16Arraypropertyfour011() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array dst = new Uint16Array(src);
    assertEqual(3, dst.length());
    }

    @Test
    void testUint16Arraypropertyfour012() {
    int[] src = new int[] {5, 10, 15, 20};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour013() {
    double[] src = new double[] {1.0, 2.0, 3.0};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour014() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyfour015() {
    Uint16Array arr = Uint16Array.of(10, 20);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyfour016() {
    int[] src = new int[] {1, 2, 3};
    Uint16Array arr = Uint16Array.from(src);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyfour017() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array sub = arr.subarray(0, 2);
    assertEqual("Uint16Array", sub.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyfour018() {
    Uint16Array src = Uint16Array.of(1, 2);
    Uint16Array dst = new Uint16Array(src);
    assertEqual("Uint16Array", dst.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertyfour019() {
    Uint16Array arr = new Uint16Array();
    assertEqual(arr.length() * 2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour020() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(arr.length() * 2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour021() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    assertEqual(arr.length() * 2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour022() {
    Uint16Array arr = new Uint16Array(5);
    assertEqual(arr.byteLength(), Uint16Array.BYTES_PER_ELEMENT * arr.length());
    }

    @Test
    void testUint16Arraypropertyfour023() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(arr.byteLength(), arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertyfour024() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint16Array arr = new Uint16Array(buf, 2, 3);
    assertEqual(10, arr.buffer().byteLength());
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour025() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint16Array arr = new Uint16Array(buf, 4, 2);
    assertEqual(4, arr.byteOffset());
    assertEqual(4, arr.byteLength());
    assertEqual(10, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertyfour026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(arr.buffer().byteLength(), arr.byteOffset() + arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour027() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(2);
    assertEqual(arr.byteOffset() + 2 * Uint16Array.BYTES_PER_ELEMENT, sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertyfour028() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0);
    arr.set(0, 0x1234);
    Uint16Array view2 = new Uint16Array(buf, 0);
    assertEqual(0x1234, view2.get(0));
    }

    @Test
    void testUint16Arraypropertyfour029() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0);
    arr.set(0, 0);
    Uint16Array view2 = new Uint16Array(buf, 0);
    view2.set(0, 0xABCD);
    assertEqual(0xABCD, arr.get(0));
    }

    @Test
    void testUint16Arraypropertyfour030() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, arr.get(1));
    }

    @Test
    void testUint16Arraypropertyfour031() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    arr.set(1, 77);
    assertEqual(77, sub.get(0));
    }

    @Test
    void testUint16Arraypropertyfour032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array v1 = new Uint16Array(buf, 0, 2);
    Uint16Array v2 = new Uint16Array(buf, 4, 2);
    v1.set(0, 0xAAAA);
    v2.set(0, 0xBBBB);
    assertEqual(0xAAAA, v1.get(0));
    assertEqual(0xBBBB, v2.get(0));
    }

    @Test
    void testUint16Arraypropertyfour033() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    Uint16Array sub = arr.subarray(0);
    assertEqual(arr.byteOffset(), sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertyfour034() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(2);
    assertEqual(4, sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertyfour035() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Uint16Array arr = new Uint16Array(buf, 2, 4);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(4, sub.byteOffset());
    }

    @Test
    void testUint16Arraypropertyfour036() {
    Uint16Array arr = new Uint16Array(3);
    int[] src = new int[] {1, 2};
    arr.set(src, 0);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint16Arraypropertyfour037() {
    Uint16Array arr = new Uint16Array(3);
    Uint16Array result = arr.fill(5);
    assertEqual(arr, result);
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(5, arr.get(2));
    }

    @Test
    void testUint16Arraypropertyfour038() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array result = arr.copyWithin(0, 2);
    assertEqual(arr, result);
    assertEqual(3, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    @Test
    void testUint16Arraypropertyfour039() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour040() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour041() {
    Uint16Array arr = new Uint16Array(100);
    assertEqual(200, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour042() {
    Uint16Array arr = new Uint16Array(100);
    assertEqual(200, arr.buffer().byteLength());
    }

    @Test
    void testUint16Arraypropertyfour043() {
    Uint16Array arr = Uint16Array.of(42);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint16Arraypropertyfour044() {
    Uint16Array arr = Uint16Array.of(42);
    assertEqual(2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour045() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    ArrayBuffer b = a.buffer();
    Uint16Array r = a.reverse();
    assertEqual(a, r);
    assertEqual("3,2,1", a.join(","));
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour046() {
    Uint16Array a = Uint16Array.of(3, 1, 2);
    Uint16Array r = a.sort();
    assertEqual(a, r);
    assertEqual("1,2,3", a.join(","));
    assertEqual(6, a.byteLength());
    }

    @Test
    void testUint16Arraypropertyfour047() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    ArrayBuffer b = a.buffer();
    Uint16Array r = a.fill(9, 1, 3);
    assertEqual(a, r);
    assertEqual("1,9,9,4", a.join(","));
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour048() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.copyWithin(1, 0, 3);
    assertEqual(a, r);
    assertEqual("1,1,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour049() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    ArrayBuffer b = a.buffer();
    a.set(Uint16Array.of(8, 9), 1);
    assertEqual("1,8,9,4", a.join(","));
    assertEqual(b, a.buffer());
    assertEqual(4, a.length());
    }

    @Test
    void testUint16Arraypropertyfour050() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array r = a.toReversed();
    r.set(0, 9);
    assertEqual("1,2,3", a.join(","));
    assertEqual("9,2,1", r.join(","));
    assertNotEqual(a.buffer(), r.buffer());
    }

    @Test
    void testUint16Arraypropertyfour051() {
    Uint16Array a = Uint16Array.of(3, 1, 2);
    Uint16Array r = a.toSorted();
    r.set(0, 9);
    assertEqual("3,1,2", a.join(","));
    assertEqual("9,2,3", r.join(","));
    }

    @Test
    void testUint16Arraypropertyfour052() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array r = a.with(1, 9);
    assertEqual("1,2,3", a.join(","));
    assertEqual("1,9,3", r.join(","));
    assertNotEqual(a.buffer(), r.buffer());
    }

    @Test
    void testUint16Arraypropertyfour053() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.slice(1, 3);
    r.set(0, 20);
    assertEqual("1,2,3,4", a.join(","));
    assertEqual("20,3", r.join(","));
    }

    @Test
    void testUint16Arraypropertyfour054() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.subarray(1, 3);
    r.set(0, 20);
    assertEqual("1,20,3,4", a.join(","));
    assertEqual(a.buffer(), r.buffer());
    }

    @Test
    void testUint16Arraypropertyfour055() {
    Uint16Array a = Uint16Array.of(1, 2);
    Uint16Array r = a.valueOf();
    a.set(1, 22);
    assertEqual(a, r);
    assertEqual("1,22", r.join(","));
    }

    @Test
    void testUint16Arraypropertyfour056() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array r = a.map((v) -> v * 2);
    r.set(0, 9);
    assertEqual("1,2,3", a.join(","));
    assertEqual("9,4,6", r.join(","));
    }

    @Test
    void testUint16Arraypropertyfour057() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.filter((v) -> v % 2 == 0);
    r.set(0, 20);
    assertEqual("1,2,3,4", a.join(","));
    assertEqual("20,4", r.join(","));
    }

    @Test
    void testUint16Arraypropertyfour058() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    ArrayBuffer b = a.buffer();
    int sum = a.reduce((p, v, array, unused3) -> p + v, 0);
    assertEqual(6, sum);
    assertEqual("1,2,3", a.join(","));
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour059() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    ArrayBuffer b = a.buffer();
    boolean r = a.some((v) -> v == 2);
    assertTrue(r);
    assertEqual("1,2,3", a.join(","));
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour060() {
    Uint16Array a = Uint16Array.of(10, 20);
    ArrayBuffer b = a.buffer();
    assertEqual("10,20", String.valueOf(a));
    assertEqual(b, a.buffer());
    assertEqual("10,20", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour061() {
    Uint16Array a = Uint16Array.of(4, 5);
    ArrayBuffer b = a.buffer();
    Uint16Array.KeyIterator it = a.values();
    assertEqual(4, it.next().value.intValue());
    assertEqual(5, it.next().value.intValue());
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour062() {
    Uint16Array a = Uint16Array.of(7, 8);
    Uint16Array.EntriesIterator iterator = a.entries();
    int[] first = iterator.next().value;
    assertEqual(0, first[0]);
    assertEqual(7, first[1]);
    assertEqual("7,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour063() {
    Uint16Array a = Uint16Array.of(7, 8, 9);
    Uint16Array.KeyIterator it = a.keys();
    assertEqual(0, it.next().value.intValue());
    assertEqual(1, it.next().value.intValue());
    assertEqual("7,8,9", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour064() {
    Uint16Array a = Uint16Array.of(4, 5, 6);
    ArrayBuffer b = a.buffer();
    assertEqual(5, a.at(1));
    assertEqual(b, a.buffer());
    assertEqual(3, a.length());
    }

    @Test
    void testUint16Arraypropertyfour065() {
    Uint16Array a = Uint16Array.of(4, 5, 6);
    boolean r = a.includes(5);
    assertTrue(r);
    assertEqual("4,5,6", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour066() {
    Uint16Array a = Uint16Array.of(4, 5, 4);
    assertEqual(0, a.indexOf(4));
    assertEqual("4,5,4", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour067() {
    Uint16Array a = Uint16Array.of(4, 5, 4);
    assertEqual(2, a.lastIndexOf(4));
    assertEqual("4,5,4", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour068() {
    Uint16Array a = Uint16Array.of(2, 4, 6);
    ArrayBuffer b = a.buffer();
    boolean r = a.every((v) -> v % 2 == 0);
    assertTrue(r);
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour069() {
    Uint16Array a = Uint16Array.of(2, 5, 8);
    assertEqual(5, a.find((v) -> v > 4));
    assertEqual("2,5,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour070() {
    Uint16Array a = Uint16Array.of(2, 5, 8);
    assertEqual(2, a.findIndex((v) -> v == 8));
    assertEqual("2,5,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour071() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    ArrayBuffer b = a.buffer();
    int r = a.reduceRight((p, v, array, unused3) -> p + v, 0);
    assertEqual(6, r);
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour072() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    ArrayBuffer b = a.buffer();
    a.forEach((v, i, x) -> {
    x.set(i, v * 2);
        });
    assertEqual("2,4,6", a.join(","));
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour073() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    assertEqual("1|2|3", a.join("|"));
    assertEqual("1,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertyfour074() {
    Uint16Array a = Uint16Array.of(10, 20);
    ArrayBuffer b = a.buffer();
    String r = a.toLocaleString();
    assertEqual("10,20", r);
    assertEqual(b, a.buffer());
    }

    @Test
    void testUint16Arraypropertyfour075() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array a = new Uint16Array(b, 2, 3);
    a.set(1, 77);
    assertEqual(2, a.byteOffset());
    assertEqual(3, a.length());
    assertEqual(77, new Uint16Array(b).get(2));
    }
}
