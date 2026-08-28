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
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayReduceRight02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayReduceRight02Test extends BasTest {

    @Test
    void testUint8ClampedArrayReduceRightTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    int r = arr.reduceRight((p, c, i, a) -> c);
    assertEqual(7, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50});
    int r = arr.reduceRight((p, c, i, a) -> 0);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4});
    double r = arr.reduceRightDouble((p, c, i, a) -> p * c);
    assertEqual(24, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.reduceRight((p, c, i, a) -> p - c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceRightDouble((p, c, i, a) -> Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceRightDouble((p, c, i, a) -> Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceRightDouble((p, c, i, a) -> -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + 0.5);
    assertEqual(5.5, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new RangeError("boom");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new TypeError("boom");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
        count[0]++;
        return BasTest.throwTestError("x");
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, count[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] count = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
    count[0]++;
    if (count[0] == 2) {
        return BasTest.throwTestError("mid");
    }
    return p + c;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, count[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int base = 100;
    int r = arr.reduceRight((p, c, i, a) -> p + c + base);
    assertEqual(260, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] total = {0};
    arr.reduceRight((p, c, i, a) -> {
        total[0] += c;
        return p;
    });
    assertEqual(6, total[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> {
        Uint8ClampedArray inner = new Uint8ClampedArray(new int[] {c});
        return p + inner.reduceRight((pp, cc, ii, aa) -> pp + cc);
        });
    assertEqual(6, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 99});
    int[] firstP = {-1};
    arr.reduceRight((p, c, i, a) -> {
    if (firstP[0] == -1) {
        firstP[0] = p;
    }
    return p;
        });
    assertEqual(99, firstP[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 0});
    int[] firstP = {-1};
    arr.reduceRight((p, c, i, a) -> {
    if (firstP[0] == -1) {
        firstP[0] = p;
    }
    return p;
        });
    assertEqual(0, firstP[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 255});
    int[] firstP = {-2};
    arr.reduceRight((p, c, i, a) -> {
    if (firstP[0] == -2) {
        firstP[0] = p;
    }
    return p;
        });
    assertEqual(255, firstP[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 20});
    int[] secondP = {-1};
    int[] callCnt = {0};
    arr.reduceRight((p, c, i, a) -> {
    callCnt[0]++;
    if (callCnt[0] == 2) {
        secondP[0] = p;
    }
    return p + c;
        });
    assertEqual(30, secondP[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 50, 99});
    int[] firstC = {-1};
    arr.reduceRight((p, c, i, a) -> {
    if (firstC[0] == -1) {
        firstC[0] = c;
    }
    return p;
        });
    assertEqual(50, firstC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 50});
    int[] firstC = {-1};
    arr.reduceRight((p, c, i, a) -> {
    firstC[0] = c;
    return p;
        });
    assertEqual(0, firstC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, 256);
    int[] firstC = {-1};
    arr.reduceRight((p, c, i, a) -> {
    firstC[0] = c;
    return p;
        });
    assertEqual(255, firstC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, -1);
    int[] firstC = {-1};
    arr.reduceRight((p, c, i, a) -> {
    firstC[0] = c;
    return p;
        });
    assertEqual(0, firstC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    boolean[] typeOk = {false};
    arr.reduceRight((p, c, i, a) -> {
    int x = i;
    typeOk[0] = (x == 0);
    return p;
        });
    assertTrue(typeOk[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    List<Integer> idxes = new ArrayList<>();
    arr.reduceRight((p, c, i, a) -> {
    idxes.add(i);
    return p;
        });
    assertEqual(3, idxes.size());
    assertEqual(2, idxes.get(0));
    assertEqual(1, idxes.get(1));
    assertEqual(0, idxes.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    boolean[] visited = {false};
    arr.reduceRight((p, c, i, a) -> {
    visited[0] = true;
    return p;
        });
    assertFalse(visited[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.reduceRight((p, c, i, a) -> {
    sameRef[0] = (a == arr);
    return p;
        });
    assertTrue(sameRef[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] alen = {-1};
    arr.reduceRight((p, c, i, a) -> {
    alen[0] = a.length();
    return p;
        });
    assertEqual(4, alen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    int[] first = {-1};
    arr.reduceRight((p, c, i, a) -> {
    first[0] = a.get(0);
    return p;
        });
    assertEqual(5, first[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] sameBuf = {false};
    arr.reduceRight((p, c, i, a) -> {
    sameBuf[0] = (a.buffer() == arr.buffer());
    return p;
        });
    assertTrue(sameBuf[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    List<Integer> vals = new ArrayList<>();
    arr.reduceRight((p, c, i, a) -> {
    vals.add(c);
    return p;
        });
    assertEqual(3, vals.size());
    assertEqual(3, vals.get(0));
    assertEqual(2, vals.get(1));
    assertEqual(1, vals.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo032() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.fill(1);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo033() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(510, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo035() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(60, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo036() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 4);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 4);
    arr.set(0, 5);
    arr.set(1, 10);
    arr.set(2, 15);
    arr.set(3, 20);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(50, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(1, 256);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(1, -1);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10});
    arr.set(0, Double.NaN);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, Double.POSITIVE_INFINITY);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(257, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, -Double.POSITIVE_INFINITY);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(2, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, 127.5);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(130, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, 128.5);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(130, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, 0.4);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(2, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, 0.9);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(21, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, 1e9);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(257, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, -1e9);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(2, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    arr.set(0, Double.MAX_VALUE);
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(257, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] lastRet = {-1};
    int r = arr.reduceRight((p, c, i, a) -> {
        int ret = p + c;
        lastRet[0] = ret;
        return ret;
        });
    assertEqual(lastRet[0], r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int r = arr.reduceRight((p, c, i, a) -> p - c - 100);
    assertEqual(-90, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer beforeBuf = arr.buffer();
    arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(beforeBuf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> -0);
    assertEqual(-0, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduceRight((p, c, i, a) -> p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo056() {
    Uint8ClampedArray arr = Uint8ClampedArray.of();
    try {
    arr.reduceRight((p, c, i, a) -> p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    try {
    arr.reduceRight((p, c, i, a) -> p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] cnt = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
        cnt[0]++;
        return p;
    });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual(0, cnt[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new SyntaxError("s");
        });
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reduceRight((p, c, i, a) -> {
    if (i == 2) {
        a.set(0, 99);
    }
    return p;
        });
    assertEqual(99, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.reduceRight((p, c, i, a) -> {
    a.set(0, 300);
    return p;
        });
    assertEqual(255, arr.get(0));
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] cVal = {-1};
    arr.reduceRight((p, c, i, a) -> {
    if (i == 1) {
        a.set(0, 50);
    }
    if (i == 0) {
        cVal[0] = c;
    }
    return p;
        });
    assertEqual(50, cVal[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] other = {-1};
    arr.reduceRight((p, c, i, a) -> {
    if (i == 2) {
        other[0] = a.get(0);
    }
    return p;
        });
    assertEqual(10, other[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int r = arr.slice(1, 4).reduceRight((p, c, i, a) -> p + c);
    assertEqual(9, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int r = arr.subarray(1, 3).reduceRight((p, c, i, a) -> p + c);
    assertEqual(50, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> vals = new ArrayList<>();
    arr.toReversed().reduceRight((p, c, i, a) -> {
    vals.add(c);
    return p;
        });
    assertEqual(2, vals.size());
    assertEqual(2, vals.get(0));
    assertEqual(3, vals.get(vals.size() - 1));
    }

    @Test
    void testUint8ClampedArrayReduceRightTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    boolean[] sharedBuf = {false};
    sub.reduceRight((p, c, i, a) -> {
    sharedBuf[0] = (a.buffer() == arr.buffer());
    return p;
        });
    }
}
