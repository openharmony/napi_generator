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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayreverse —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayreverse extends BasTest {

    @Test
    void testUint16ArrayReverse001() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array result = arr.reverse();
    assertEqualInt(3, result.get(0));
    assertEqualInt(2, result.get(1));
    assertEqualInt(1, result.get(2));
    }

    @Test
    void testUint16ArrayReverse002() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array result = arr.reverse();
    assertEqual(arr.byteLength(), result.byteLength());
    assertEqual(10, result.byteLength());
    assertEqual("5,4,3,2,1", result.join(","));
    }

    @Test
    void testUint16ArrayReverse003() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    Uint16Array result = arr.reverse();
    assertEqual(arr.length(), result.length());
    assertEqual(4, result.length());
    assertEqual("40,30,20,10", result.join(","));
    }

    @Test
    void testUint16ArrayReverse004() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    Uint16Array result = arr.reverse();
    assertEqual(arr.byteOffset(), result.byteOffset());
    assertEqual(0, result.byteOffset());
    assertEqual("4,3,2,1", result.join(","));
    }

    @Test
    void testUint16ArrayReverse005() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array result = arr.reverse();
    assertEqual(arr.buffer(), result.buffer());
    }

    @Test
    void testUint16ArrayReverse006() {
    Uint16Array arr = new Uint16Array(0);
    Uint16Array result = arr.reverse();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayReverse007() {
    Uint16Array arr = new Uint16Array(0);
    arr.reverse();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArrayReverse008() {
    Uint16Array arr = new Uint16Array(0);
    arr.reverse().reverse();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArrayReverse009() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    arr.reverse();
    assertEqualInt(42, arr.get(0));
    }

    @Test
    void testUint16ArrayReverse010() {
    Uint16Array arr = new Uint16Array(new int[] {99});
    arr.reverse();
    assertEqual(1, arr.length());
    }

    @Test
    void testUint16ArrayReverse011() {
    Uint16Array arr = new Uint16Array(new int[] {7});
    Uint16Array result = arr.reverse();
    assertEqualInt(7, result.get(0));
    assertEqual(1, result.length());
    }

    @Test
    void testUint16ArrayReverse012() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArrayReverse013() {
    Uint16Array arr = new Uint16Array(new int[] {65535});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArrayReverse014() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    arr.reverse();
    assertEqualInt(2, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    @Test
    void testUint16ArrayReverse015() {
    Uint16Array arr = new Uint16Array(new int[] {32768, 32768});
    arr.reverse();
    assertEqualInt(32768, arr.get(0));
    assertEqualInt(32768, arr.get(1));
    }

    @Test
    void testUint16ArrayReverse016() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqualInt(4, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse017() {
    Uint16Array arr = new Uint16Array(new int[] {0, 100, 200, 65535});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(200, arr.get(1));
    assertEqualInt(100, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse018() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535, 0, 0});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(65535, arr.get(2));
    assertEqualInt(65535, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse019() {
    Uint16Array arr = new Uint16Array(new int[] {5, 5, 5, 5});
    arr.reverse();
    assertEqualInt(5, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse020() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0, 0});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse021() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535, 65535, 65535});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(65535, arr.get(2));
    assertEqualInt(65535, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse022() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 2, 1});
    arr.reverse();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse023() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(32768, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse024() {
    Uint16Array arr = new Uint16Array(new int[] {100, 100, 100});
    arr.reverse();
    assertEqualInt(100, arr.get(0));
    assertEqualInt(100, arr.get(1));
    assertEqualInt(100, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse025() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 1});
    arr.reverse();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse026() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    assertEqualInt(5, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(1, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse027() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 2, 3, 65535});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(3, arr.get(1));
    assertEqualInt(2, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse028() {
    Uint16Array arr = new Uint16Array(new int[] {42, 42, 42, 42, 42});
    arr.reverse();
    assertEqualInt(42, arr.get(0));
    assertEqualInt(42, arr.get(1));
    assertEqualInt(42, arr.get(2));
    assertEqualInt(42, arr.get(3));
    assertEqualInt(42, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse029() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 2, 1});
    arr.reverse();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(1, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse030() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5, 6});
    arr.reverse();
    assertEqualInt(6, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(2, arr.get(4));
    assertEqualInt(1, arr.get(5));
    }

    @Test
    void testUint16ArrayReverse031() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15});
    arr.reverse();
    assertEqualInt(15, arr.get(0));
    assertEqualInt(14, arr.get(1));
    assertEqualInt(13, arr.get(2));
    assertEqualInt(12, arr.get(3));
    assertEqualInt(11, arr.get(4));
    assertEqualInt(10, arr.get(5));
    assertEqualInt(9, arr.get(6));
    assertEqualInt(8, arr.get(7));
    assertEqualInt(7, arr.get(8));
    assertEqualInt(6, arr.get(9));
    assertEqualInt(5, arr.get(10));
    assertEqualInt(4, arr.get(11));
    assertEqualInt(3, arr.get(12));
    assertEqualInt(2, arr.get(13));
    assertEqualInt(1, arr.get(14));
    assertEqualInt(0, arr.get(15));
    }

    @Test
    void testUint16ArrayReverse032() {
    List<Integer> src = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    src.add(i);
    i++;
    }
    Uint16Array arr = new Uint16Array(src);
    arr.reverse();
    assertEqualInt(99, arr.get(0));
    assertEqualInt(49, arr.get(50));
    assertEqualInt(0, arr.get(99));
    }

    @Test
    void testUint16ArrayReverse033() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    arr.reverse();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse034() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    arr.reverse();
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(3));
    assertEqualInt(5, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse035() {
    Uint16Array arr = new Uint16Array(new int[] {99});
    arr.reverse();
    arr.reverse();
    assertEqualInt(99, arr.get(0));
    }

    @Test
    void testUint16ArrayReverse036() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reverse().reverse();
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse037() {
    Uint16Array arr = new Uint16Array(new int[] {0, 65535, 32768, 1});
    arr.reverse().reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    assertEqualInt(1, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse038() {
    Uint16Array arr = new Uint16Array(new double[] {65536, -1, 3.14, Double.NaN, Double.POSITIVE_INFINITY});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(65535, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse039() {
    Uint16Array arr = new Uint16Array(new int[] {0x10000, 0xFFFF, 0200000, 0b10000000000000000});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(65535, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse040() {
    Uint16Array arr = new Uint16Array(new double[] {-65535, -65536, -32768, 65535.9, -0.5});
    arr.reverse();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(1, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse041() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    ArrayBuffer buf = arr.buffer();
    Uint16Array view = new Uint16Array(buf);
    arr.reverse();
    assertEqualInt(4, view.get(0));
    assertEqualInt(1, view.get(3));
    }

    @Test
    void testUint16ArrayReverse042() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array result = arr.reverse();
    result.set(0, 99);
    assertEqualInt(99, arr.get(0));
    }

    @Test
    void testUint16ArrayReverse043() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array result = arr.reverse();
    arr.set(1, 88);
    assertEqualInt(88, result.get(1));
    }

    @Test
    void testUint16ArrayReverse044() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.reverse();
    assertEqualInt(30, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse045() {
    Uint16Array arr = Uint16Array.of(5, 10, 15, 20);
    arr.reverse();
    assertEqualInt(20, arr.get(0));
    assertEqualInt(15, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(5, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse046() {
    Uint16Array arr = Uint16Array.from(new int[] {100, 200, 300});
    arr.reverse();
    assertEqualInt(300, arr.get(0));
    assertEqualInt(200, arr.get(1));
    assertEqualInt(100, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse047() {
    Uint16Array src = new Uint16Array(new int[] {7, 8, 9});
    Uint16Array arr = new Uint16Array(src);
    arr.reverse();
    assertEqualInt(9, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(7, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse048() {
    Uint16Array arr = new Uint16Array(new int[] {0x0, 0x8000, 0xFFFF});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(32768, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse049() {
    Uint16Array arr = new Uint16Array(new int[] {0b0, 0b1, 0b1111111111111111});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse050() {
    Uint16Array arr = new Uint16Array(new int[] {00, 0100000, 0177777});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(32768, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse051() {
    Uint16Array arr = new Uint16Array(new double[] {0e0, 1e0, 6.5535e4});
    arr.reverse();
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(1, arr.get(1));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse052() {
    Uint16Array arr = new Uint16Array(new int[] {0xFF, 0b1010, 077, 100});
    arr.reverse();
    assertEqualInt(100, arr.get(0));
    assertEqualInt(63, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(255, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse053() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sub = arr.subarray(1, 4);
    sub.reverse();
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(2, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse054() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sub = arr.subarray(1, 4);
    arr.reverse();
    assertEqualInt(4, sub.get(0));
    assertEqualInt(3, sub.get(1));
    assertEqualInt(2, sub.get(2));
    }

    @Test
    void testUint16ArrayReverse055() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    Uint16Array view1 = new Uint16Array(arr.buffer());
    arr.reverse();
    assertEqualInt(4, view1.get(0));
    assertEqualInt(3, view1.get(1));
    assertEqualInt(2, view1.get(2));
    assertEqualInt(1, view1.get(3));
    }

    @Test
    void testUint16ArrayReverse056() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    Uint16Array sub = arr.subarray(2);
    assertEqual(4, sub.byteOffset());
    sub.reverse();
    assertEqual(4, sub.byteOffset());
    assertEqualInt(50, sub.get(0));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint16ArrayReverse057() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqualInt(4, arr.at(0));
    assertEqualInt(1, arr.at(-1));
    }

    @Test
    void testUint16ArrayReverse058() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    List<Integer> values = new ArrayList<>();
    for (Integer v : arr.values()) {
    values.add(v);
    }
    assertEqualInt(3, values.get(0));
    assertEqualInt(2, values.get(1));
    assertEqualInt(1, values.get(2));
    }

    @Test
    void testUint16ArrayReverse059() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    arr.reverse();
    int[] idx = {0};
    List<Integer> expected = java.util.Arrays.asList(40, 30, 20, 10);
    arr.forEach((val) -> {
    assertEqual(expected.get(idx[0]).intValue(), val);
    idx[0]++;
        });
    }

    @Test
    void testUint16ArrayReverse060() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    arr.fill(99);
    assertEqualInt(99, arr.get(0));
    assertEqualInt(99, arr.get(1));
    assertEqualInt(99, arr.get(2));
    assertEqualInt(99, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse061() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(10, 0, 2);
    arr.fill(20, 2, 4);
    arr.reverse();
    assertEqualInt(20, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    assertEqualInt(10, arr.get(3));
    }

    @Test
    void testUint16ArrayReverse062() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    arr.copyWithin(0, 2, 4);
    assertEqualInt(3, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    @Test
    void testUint16ArrayReverse063() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array src = new Uint16Array(new int[] {10, 20});
    arr.set(src, 1);
    arr.reverse();
    assertEqualInt(20, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(1, arr.get(2));
    }

    @Test
    void testUint16ArrayReverse064() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    Uint16Array sliced = arr.slice(0, 2);
    assertEqualInt(4, sliced.get(0));
    assertEqualInt(3, sliced.get(1));
    }

    @Test
    void testUint16ArrayReverse065() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5, 6});
    Uint16Array sub = arr.subarray(1, 5);
    sub.reverse();
    assertEqualInt(5, arr.get(1));
    assertEqualInt(4, arr.get(2));
    assertEqualInt(3, arr.get(3));
    assertEqualInt(2, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse066() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    Uint16Array v1 = arr.subarray(0, 2);
    Uint16Array v2 = arr.subarray(2, 4);
    arr.reverse();
    assertEqualInt(4, v1.get(0));
    assertEqualInt(3, v1.get(1));
    assertEqualInt(2, v2.get(0));
    assertEqualInt(1, v2.get(1));
    }

    @Test
    void testUint16ArrayReverse067() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    arr.reverse();
    assertEqual(3, arr.indexOf(10));
    assertEqual(0, arr.indexOf(40));
    }

    @Test
    void testUint16ArrayReverse068() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    assertEqual("4,3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArrayReverse069() {
    Uint16Array arr = new Uint16Array(new int[] {4, 3, 2, 1});
    arr.reverse();
    assertEqual("1,2,3,4", arr.join(","));
    }

    @Test
    void testUint16ArrayReverse070() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    List<Integer> parts = new ArrayList<>();
    arr.reduceRight((acc, cur, array, unused3) -> {
    parts.add(cur);
    return acc + cur;
    }, 0);
    assertEqualInt(1, parts.get(0));
    assertEqualInt(2, parts.get(1));
    assertEqualInt(3, parts.get(2));
    }

    @Test
    void testUint16ArrayReverse071() {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15, 20});
    arr.reverse();
    Uint16Array filtered = arr.filter((v) -> v > 10);
    assertEqualInt(20, filtered.get(0));
    assertEqualInt(15, filtered.get(1));
    }

    @Test
    void testUint16ArrayReverse072() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    Uint16Array mapped = arr.map((v) -> v * 2);
    assertEqualInt(6, mapped.get(0));
    assertEqualInt(4, mapped.get(1));
    assertEqualInt(2, mapped.get(2));
    }

    @Test
    void testUint16ArrayReverse073() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    Integer found = arr.find((v) -> v > 2);
    assertEqualInt(4, found);
    }

    @Test
    void testUint16ArrayReverse074() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reverse();
    int[] idx = {arr.findIndex((v) -> v == 2)};
    assertEqual(2, idx[0]);
    }

    @Test
    void testUint16ArrayReverse075() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reverse();
    Uint16Array.EntriesIterator entries = arr.entries();
    int[] first = entries.next().value;
    assertEqual(0, first[0]);
    assertEqual(30, first[1]);
    }

    @Test
    void testUint16ArrayReverse076() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reverse();
    Uint16Array.KeyIterator keys = arr.keys();
    int k0 = (int) keys.next().value;
    int k1 = (int) keys.next().value;
    int k2 = (int) keys.next().value;
    assertEqual(0, k0);
    assertEqual(1, k1);
    assertEqual(2, k2);
    }

    @Test
    void testUint16ArrayReverse077() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    Uint16Array.KeyIterator vals = arr.values();
    assertEqualInt(3, vals.next().value);
    assertEqualInt(2, vals.next().value);
    assertEqualInt(1, vals.next().value);
    }

    @Test
    void testUint16ArrayReverse078() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reverse();
    arr.reverse();
    arr.reverse();
    assertEqualInt(5, arr.get(0));
    assertEqualInt(4, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(2, arr.get(3));
    assertEqualInt(1, arr.get(4));
    }

    @Test
    void testUint16ArrayReverse079() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    String str = arr.join(",");
    assertEqual("3,2,1", str);
    }

    @Test
    void testUint16ArrayReverse080() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    arr.reverse();
    String str = arr.toLocaleString();
    assertEqual("300,200,100", str);
    }
}
