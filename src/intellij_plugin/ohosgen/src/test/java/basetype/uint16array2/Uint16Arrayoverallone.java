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
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayoverallone —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayoverallone extends BasTest {

    @Test
    void testUint16Arrayoverallone001() {
    Uint16Array arr = new Uint16Array();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arrayoverallone002() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arrayoverallone003() {
    Uint16Array arr = new Uint16Array(3.0);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arrayoverallone004() {
    Uint16Array arr = new Uint16Array(0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arrayoverallone005() {
    Uint16Array arr = new Uint16Array(Double.NaN);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arrayoverallone006() {
    double[] src = new double[] {-1.0};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone007() {
    double[] src = new double[] {65536.0};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone008() {
    double[] src = new double[] {Double.POSITIVE_INFINITY};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone009() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arrayoverallone010() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0.0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arrayoverallone011() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 2.5);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arrayoverallone012() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arrayoverallone013() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3, 4);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint16Arrayoverallone014() {
    Set<Integer> src = new LinkedHashSet<>();
    src.add(1);
    src.add(2);
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone015() {
    Uint16Array src = Uint16Array.of(1, 2);
    Uint16Array arr = Uint16Array.from(src);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone016() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    assertEqualInt(10, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone017() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, -1);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone018() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone019() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone020() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array result = arr.with(0, 65535);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16Arrayoverallone021() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array result = arr.with(0, 65536);
    assertEqualInt(0, result.get(0));
    }

    @Test
    void testUint16Arrayoverallone022() {
    Uint16Array arr = Uint16Array.of(10, 20);
    Uint16Array result = arr.with(0, 0xFFFF);
    assertEqualInt(65535, result.get(0));
    }

    @Test
    void testUint16Arrayoverallone023() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone024() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65535);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone025() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65536);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone026() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0xFFFF);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone027() {
    Uint16Array arr = new Uint16Array(2);
    Uint16Array source = Uint16Array.of(10, 20);
    arr.set(source);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone028() {
    Uint16Array arr = new Uint16Array(2);
    Uint16Array source = Uint16Array.of(10, 20);
    arr.set(source, 0);
    assertEqualInt(10, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone029() {
    Uint16Array arr = new Uint16Array(3);
    Uint16Array source = Uint16Array.of(10, 20);
    arr.set(source, 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(10, arr.get(1));
    assertEqualInt(20, arr.get(2));
    }

    @Test
    void testUint16Arrayoverallone030() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(65535);
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone031() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(-1);
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone032() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(0xFFFF);
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone033() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(5, 1);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    @Test
    void testUint16Arrayoverallone034() {
    Uint16Array arr = Uint16Array.of(0, 65535, 100);
    assertTrue(arr.includes(0));
    }

    @Test
    void testUint16Arrayoverallone035() {
    Uint16Array arr = Uint16Array.of(7, 0xFFFF, 42);
    assertTrue(arr.includes(0xFFFF));
    }

    @Test
    void testUint16Arrayoverallone036() {
    Uint16Array arr = Uint16Array.of(7, 0, 42);
    assertEqual(1, arr.indexOf(0));
    }

    @Test
    void testUint16Arrayoverallone037() {
    Uint16Array arr = Uint16Array.of(0, 65535, 100);
    assertEqual(-1, arr.indexOf(-1));
    }

    @Test
    void testUint16Arrayoverallone038() {
    Uint16Array arr = Uint16Array.of(9, 0, 42);
    assertEqual(-1, arr.indexOf(65536));
    }

    @Test
    void testUint16Arrayoverallone039() {
    Uint16Array arr = Uint16Array.of(5, 0, 0);
    assertEqual(-1, arr.lastIndexOf(65536));
    }

    @Test
    void testUint16Arrayoverallone040() {
    Uint16Array arr = Uint16Array.of(11, 22, 33);
    Uint16Array result = arr.slice(0, 2);
    assertEqual(2, result.length());
    assertEqualInt(11, result.get(0));
    assertEqualInt(22, result.get(1));
    }

    @Test
    void testUint16Arrayoverallone041() {
    Uint16Array arr = Uint16Array.of(9, 18, 27);
    Uint16Array result = arr.subarray(0, 2);
    assertEqual(2, result.length());
    assertEqualInt(9, result.get(0));
    assertEqualInt(18, result.get(1));
    }

    @Test
    void testUint16Arrayoverallone042() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.join(",");
    assertEqual("1,2,3", result);
    }

    @Test
    void testUint16Arrayoverallone043() {
    Uint16Array arr = Uint16Array.of(4, 5, 6);
    String result = arr.join("|");
    assertEqual("4|5|6", result);
    }

    @Test
    void testUint16Arrayoverallone044() {
    Uint16Array arr = Uint16Array.of(10, 30, 20);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(30, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(10, arr.get(2));
    }

    @Test
    void testUint16Arrayoverallone045() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((a, b, array, unused3) -> a + b);
    assertEqual(6, result);
    }

    @Test
    void testUint16Arrayoverallone046() {
    Uint16Array arr = Uint16Array.of(2, 3, 4);
    int result = arr.reduceRight((a, b, array, unused3) -> a + b);
    assertEqual(9, result);
    }

    @Test
    void testUint16Arrayoverallone047() {
    Uint16Array arr = Uint16Array.of(4, 5, 6);
    int result = arr.reduceRight((a, b, array, unused3) -> a + b, 100);
    assertEqual(115, result);
    }

    @Test
    void testUint16Arrayoverallone048() {
    Uint16Array arr = Uint16Array.of(3, 6, 9);
    int[] sum = {0};
    List<Integer> indexes = new ArrayList<>();
    Uint16Array[] callbackArray = {null};
    arr.forEach((value, index, source) -> {
    sum[0] = sum[0] + value;
    indexes.add(index);
    callbackArray[0] = source;
        });
    assertEqual(18, sum[0]);
    assertEqual("0,1,2", BasTest.joinList(indexes, ","));
    assertEqual(arr, callbackArray[0]);
    }

    @Test
    void testUint16Arrayoverallone049() {
    Uint16Array arr = Uint16Array.of(4, 8, 12);
    Uint16Array result = arr.map((value) -> value + 1);
    assertEqualInt(5, result.get(0));
    assertEqualInt(9, result.get(1));
    assertEqualInt(13, result.get(2));
    }

    @Test
    void testUint16Arrayoverallone050() {
    Uint16Array arr = Uint16Array.of(2, 12, 22);
    Uint16Array result = arr.filter((value) -> value > 10);
    assertEqual(2, result.length());
    assertEqualInt(12, result.get(0));
    assertEqualInt(22, result.get(1));
    }

    @Test
    void testUint16Arrayoverallone051() {
    Uint16Array arr = Uint16Array.of(1, 11, 21);
    int result = arr.find((value) -> value > 10);
    assertEqual(11, result);
    }

    @Test
    void testUint16Arrayoverallone052() {
    Uint16Array arr = Uint16Array.of(4, 14, 24);
    int result = arr.findIndex((value) -> value > 10);
    assertEqual(1, result);
    }

    @Test
    void testUint16Arrayoverallone053() {
    Uint16Array arr = Uint16Array.of(6, 16, 26);
    boolean result = arr.some((value) -> value > 10);
    assertTrue(result);
    }

    @Test
    void testUint16Arrayoverallone054() {
    Uint16Array arr = Uint16Array.of(3, 13, 23);
    boolean result = arr.every((value) -> value > 0);
    assertTrue(result);
    }

    @Test
    void testUint16Arrayoverallone055() {
    Uint16Array arr = Uint16Array.of(10, 20);
    int count = 0;
    for (int[] entry : arr.entries()) {
    count = count + 1;
    }
    assertEqual(2, count);
    }

    @Test
    void testUint16Arrayoverallone056() {
    Uint16Array arr = Uint16Array.of(4, 8, 12);
    int[] sum = {0};
    for (Integer key : arr.keys()) {
    sum[0] = sum[0] + key;
    }
    assertEqual(3, sum[0]);
    }

    @Test
    void testUint16Arrayoverallone057() {
    Uint16Array arr = Uint16Array.of(2, 4, 6);
    int[] sum = {0};
    for (Integer value : arr.values()) {
    sum[0] = sum[0] + value;
    }
    assertEqual(12, sum[0]);
    }

    @Test
    void testUint16Arrayoverallone058() {
    Uint16Array arr = Uint16Array.of(1, 3, 5);
    int[] sum = {0};
    for (Integer value : arr.values()) {
    sum[0] = sum[0] + value;
    }
    assertEqual(9, sum[0]);
    }

    @Test
    void testUint16Arrayoverallone059() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 1, 2);
    assertEqualInt(2, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone060() {
    Uint16Array arr = Uint16Array.of(5, 10, 15, 20);
    arr.copyWithin(0, 2);
    assertEqualInt(15, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone061() {
    Uint16Array arr = Uint16Array.of(7, 14);
    Uint16Array result = arr.valueOf();
    assertEqual(arr, result);
    }

    @Test
    void testUint16Arrayoverallone062() {
    Uint16Array arr = Uint16Array.of(4, 8, 12);
    arr.reverse();
    assertEqualInt(12, arr.get(0));
    assertEqualInt(8, arr.get(1));
    assertEqualInt(4, arr.get(2));
    }

    @Test
    void testUint16Arrayoverallone063() {
    Uint16Array arr = Uint16Array.of(2, 6, 10);
    Uint16Array result = arr.toReversed();
    assertEqualInt(10, result.get(0));
    assertEqualInt(6, result.get(1));
    assertEqualInt(2, result.get(2));
    assertEqualInt(2, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone064() {
    Uint16Array arr = Uint16Array.of(30, 10, 20);
    Uint16Array result = arr.toSorted();
    assertEqualInt(10, result.get(0));
    assertEqualInt(20, result.get(1));
    assertEqualInt(30, result.get(2));
    assertEqualInt(30, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone065() {
    Uint16Array src = Uint16Array.of(10, 20);
    Uint16Array arr = new Uint16Array(src);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone067() {
    Uint16Array arr = new Uint16Array(65535);
    assertEqual(65535, arr.length());
    }

    @Test
    void testUint16Arrayoverallone068() {
    Uint16Array arr = new Uint16Array(0x100);
    assertEqual(256, arr.length());
    }

    @Test
    void testUint16Arrayoverallone069() {
    Uint16Array arr = new Uint16Array(0b10);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone070() {
    Uint16Array arr = new Uint16Array(1e2);
    assertEqual(100, arr.length());
    }

    @Test
    void testUint16Arrayoverallone071() {
    Uint16Array arr = new Uint16Array(3.9);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arrayoverallone072() {
    int[] src = new int[] {0, 65535};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone073() {
    int[] src = new int[] {-1};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone074() {
    int[] src = new int[] {65536};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone075() {
    int[] src = new int[] {0xFFFF};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16Arrayoverallone076() {
    double[] src = new double[] {0.0, 65535.0};
    Uint16Array arr = new Uint16Array(src);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16Arrayoverallone077() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arrayoverallone078() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arrayoverallone079() {
    Uint16Array arr = Uint16Array.of();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arrayoverallone080() {
    Uint16Array arr = Uint16Array.of(0);
    assertEqualInt(0, arr.get(0));
    }
}
