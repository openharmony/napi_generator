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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayOf02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayOf02Test extends BasTest {

    @Test
    void testUint8ClampedArrayOfTwo001() {
    int v = 10;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(1, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo002() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b, c);
    assertEqual(3, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo003() {
    int v = 1;
    Uint8ClampedArray arr = Uint8ClampedArray.of(v);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayOfTwo004() {
    int a = 1;
    int b = 2;
    Uint8ClampedArray arr = Uint8ClampedArray.of(a, b);
    assertEqual(2, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo005() {
    Uint8ClampedArray a = Uint8ClampedArray.of();
    Uint8ClampedArray b = new Uint8ClampedArray(0);
    assertEqual(b.length(), a.length());
    }

    @Test
    void testUint8ClampedArrayOfTwo006() {
    int v = 5;
    Uint8ClampedArray a = Uint8ClampedArray.of(v);
    Uint8ClampedArray b = new Uint8ClampedArray(1);
    assertEqualInt(5, a.get(0));
    assertEqualInt(0, b.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo007() {
    int a = 1;
    int b = 2;
    int c = 3;
    Uint8ClampedArray x = Uint8ClampedArray.of(a, b, c);
    Uint8ClampedArray y = new Uint8ClampedArray(3);
    assertEqual(y.length(), x.length());
    }

    @Test
    void testUint8ClampedArrayOfTwo008() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(100.0);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfTwo009() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfTwo010() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    list.add((int) (7.0));
    }
    Uint8ClampedArray arr = Uint8ClampedArray.from(list);
    assertEqual(256, arr.length());
    assertEqualInt(7, arr.get(255));
    }

    @Test
    void testUint8ClampedArrayOfTwo011() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(127.0);
    assertEqualInt(127, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo012() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(128.0);
    assertEqualInt(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo013() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(254.0);
    assertEqualInt(254, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo014() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.4);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo015() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255.4);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo016() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-0.0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo017() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.MAX_VALUE);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo018() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.MIN_VALUE);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo019() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1e9);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo020() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1e9);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo021() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(2147483648.0);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo022() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-2147483648.0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo023() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0x80);
    assertEqualInt(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo024() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0xFF);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo025() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0x100);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo026() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(017);
    assertEqualInt(15, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo027() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0377);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo028() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0400);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo029() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0b10000000);
    assertEqualInt(128, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo030() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0b11111111);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo031() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0b100000000);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo032() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1e2);
    assertEqualInt(100, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo033() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(2.55e2);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo034() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1e-1);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(0.0, 0.0, 0.0);
    assertEqual(3, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo036() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255.0, 255.0, 255.0);
    assertEqual(3, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo037() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(300.0, 400.0, 1000.0);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo038() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-1.0, -100.0, -1000.0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo039() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.NaN, 10.0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo040() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY, 100.0);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(100, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo041() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10.0, 20.0, 30.0, 40.0);
    assertEqual(4, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfTwo042() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(40.0, 30.0, 20.0, 10.0);
    assertEqual(4, arr.length());
    assertEqualInt(40, arr.get(0));
    assertEqualInt(30, arr.get(1));
    assertEqualInt(20, arr.get(2));
    assertEqualInt(10, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfTwo043() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-0.5, 0.0, 0.5);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo044() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(254.5, 255.0, 255.5);
    assertEqualInt(254, arr.get(0));
    assertEqualInt(255, arr.get(1));
    assertEqualInt(255, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo045() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0, 3.0, 4.0);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo046() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ClampedArrayOfTwo047() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1.0, 2.0, 3.0, 4.0, 5.0);
    assertEqual(5, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo048() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(256.5);
    assertEqualInt(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo049() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(-0.5);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo050() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayOfTwo051() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo052() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArrayOfTwo053() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    String t = BasTest.typeofValue(arr);
    assertEqual("object", t);
    }

    @Test
    void testUint8ClampedArrayOfTwo054() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(3, arr.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo055() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertNotNull(arr);
    }

    @Test
    void testUint8ClampedArrayOfTwo056() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual("Uint8ClampedArray", arr.getClass().getSimpleName());
    }

    @Test
    void testUint8ClampedArrayOfTwo057() {
    Uint8ClampedArray a1 = Uint8ClampedArray.of(10, 20, 30);
    Uint8ClampedArray a2 = Uint8ClampedArray.of(10, 20, 30);
    assertNotEqual(a2.buffer(), a1.buffer());
    }

    @Test
    void testUint8ClampedArrayOfTwo058() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(3, arr.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArrayOfTwo059() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(255, 0, 128);
    assertEqualInt(255, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(128, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo060() {
    Uint8ClampedArray a1 = Uint8ClampedArray.of(10, 20, 30);
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {10, 20, 30});
    assertEqual(3, a1.length());
    assertEqualInt(10, a1.get(0));
    assertEqualInt(20, a1.get(1));
    assertEqualInt(30, a1.get(2));
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    assertEqual(a2.get(1).intValue(), a1.get(1).intValue());
    assertEqual(a2.get(2).intValue(), a1.get(2).intValue());
    }

    @Test
    void testUint8ClampedArrayOfTwo061() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint8ClampedArrayOfTwo062() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(30, 10, 20);
    arr.sort();
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo063() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    arr.reverse();
    assertEqual(3, arr.length());
    assertEqualInt(3, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo064() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4);
    arr.fill(99);
    assertEqual(4, arr.length());
    assertEqualInt(99, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    assertEqualInt(99, arr.get(3));
    }

    @Test
    void testUint8ClampedArrayOfTwo065() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    arr.set(0, 88);
    assertEqualInt(88, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo066() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    Uint8ClampedArray m = arr.map((x) -> {
        return x * 2;
        });
    assertEqualInt(2, m.get(0));
    assertEqualInt(4, m.get(1));
    assertEqualInt(6, m.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo067() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqualInt(3, r.get(0));
    assertEqualInt(2, r.get(1));
    assertEqualInt(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo068() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(3, 1, 2);
    Uint8ClampedArray s = arr.toSorted();
    assertEqual(3, s.length());
    assertEqualInt(1, s.get(0));
    assertEqualInt(2, s.get(1));
    assertEqualInt(3, s.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo069() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    Uint8ClampedArray w = arr.with(0, 99);
    assertEqual(3, w.length());
    assertEqualInt(99, w.get(0));
    assertEqualInt(2, w.get(1));
    assertEqualInt(3, w.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo070() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    Uint8ClampedArray s = arr.slice(1, 3);
    assertEqual(2, s.length());
    assertEqualInt(20, s.get(0));
    assertEqualInt(30, s.get(1));
    }

    @Test
    void testUint8ClampedArrayOfTwo071() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3, 4, 5);
    Uint8ClampedArray f = arr.filter((x) -> {
        return x > 2;
        });
    assertEqual(3, f.length());
    assertEqualInt(3, f.get(0));
    assertEqualInt(4, f.get(1));
    assertEqualInt(5, f.get(2));
    }

    @Test
    void testUint8ClampedArrayOfTwo072() {
    Uint8ClampedArray a1 = Uint8ClampedArray.of(5, 10, 15);
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {5, 10, 15});
    assertEqual(String.valueOf(a2), String.valueOf(a1));
    }

    @Test
    void testUint8ClampedArrayOfTwo073() {
    Uint8ClampedArray a1 = Uint8ClampedArray.of(7, 14, 21);
    Uint8ClampedArray a2 = Uint8ClampedArray.of(7, 14, 21);
    a1.set(0, 99);
    assertEqualInt(7, a2.get(0));
    }

    @Test
    void testUint8ClampedArrayOfTwo074() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    assertEqual(arr, arr.valueOf());
    }

    @Test
    void testUint8ClampedArrayOfTwo075() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(15, 25, 35);
    assertEqualInt(25, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfTwo076() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(1, 2, 3);
    arr.set(1, 77);
    assertEqualInt(77, arr.get(1));
    }

    @Test
    void testUint8ClampedArrayOfTwo077() {
    Uint8ClampedArray a1 = Uint8ClampedArray.of(0);
    Uint8ClampedArray a2 = new Uint8ClampedArray(new int[] {0});
    assertEqual(a2.length(), a1.length());
    assertEqual(a2.get(0).intValue(), a1.get(0).intValue());
    }
}
