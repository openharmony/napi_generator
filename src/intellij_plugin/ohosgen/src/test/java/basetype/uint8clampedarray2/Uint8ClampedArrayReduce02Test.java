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
import basetype.common.TypeError;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayReduce02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayReduce02Test extends BasTest {

    @Test
    void testUint8ClampedArrayReduceTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.reduce((p, c, index, array) ->  p + c, 0);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5});
    int r = arr.reduce((p, c, index, array) ->  p + c, 0);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9});
    int r = arr.reduce((p, c, index, array) ->  p + c, 0);
    assertEqual(1, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1.5});
    int r = arr.reduce((p, c, index, array) ->  p + c, 0);
    assertEqual(2, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo005() {
    int[] called = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int r = arr.reduce((p, c, i, a) -> {
        called[0] = called[0] + 1;
        return p + c;
    });
    assertEqual(42, r);
    assertEqual(0, called[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo006() {
    int[] called = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int r = arr.reduce((p, c, i, a) -> {
        called[0] = called[0] + 1;
        return p + c;
    });
    assertEqual(30, r);
    assertEqual(1, called[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(15, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 200, 50, 255, 30});
    int r = arr.reduce((p, c, i, a) ->  p > c ? p : c);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 5, 200, 1, 30});
    int r = arr.reduce((p, c, i, a) ->  p < c ? p : c);
    assertEqual(1, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.reduce((p, c, i, a) ->  99);
    assertEqual(99, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 1, 2, 3});
    int r = arr.reduce((p, c, i, a) ->  p);
    assertEqual(7, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 1, 2, 3});
    int r = arr.reduce((p, c, i, a) ->  c);
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int r = arr.reduce((p, c, i, a) ->  i );
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] sameRef = {false};
    arr.reduce((p, c, i, a) -> {
    if (a == arr) { sameRef[0] = true;
    }
    return p + c;
        });
    assertTrue(sameRef[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    int[] seenLen = {-1};
    arr.reduce((p, c, i, a) -> {
    seenLen[0] = a.length();
    return p + c;
        });
    assertEqual(4, seenLen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo016() {
    List<Integer> idxs = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.reduce((p, c, i, a) -> {
    idxs.add(i);
    return p + c;
        });
    assertEqual(4, idxs.size());
    assertEqual(1, idxs.get(0));
    assertEqual(4, idxs.get(3));
    assertEqual(2, idxs.get(1));
    assertEqual(3, idxs.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceTwo017() {
    List<Integer> seenPrev = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reduce((p, c, i, a) -> {
    seenPrev.add(p);
    return p * 2 + c;
        });
    assertEqual(1, seenPrev.get(0));
    assertEqual(4, seenPrev.get(1));
    assertEqual(11, seenPrev.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4});
    double r = arr.reduceDouble((p, c, i, a) ->  p * c);
    assertEqual(24, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 10, 20, 30});
    int r = arr.reduce((p, c, i, a) ->  p - c);
    assertEqual(40, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo020() {
    int factor = 2;
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, i, a) ->  p + c * factor);
    assertEqual(11, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo021() {
    int[] side = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reduce((p, c, i, a) -> {
    side[0] = side[0] + c;
    return p + c;
        });
    assertEqual(9, side[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo022() {
    Uint8ClampedArray sub = new Uint8ClampedArray(new int[] {1, 2, 3});
    int subSum = sub.reduce((p, c, i, a) ->  p + c);
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int r = arr.reduce((p, c, i, a) ->  p + c + subSum);
    assertEqual(36, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 128, 255});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(383, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo024() {
    List<Integer> buf = new ArrayList<>();
    for (int k = 0; k < 256; k = k + 1) { buf.add(k);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(32640, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo025() {
    List<Integer> buf = new ArrayList<>();
    for (int k = 0; k < 1024; k = k + 1) { buf.add(1);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(1024, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 256);
    arr.set(1, 256);
    arr.set(2, 256);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(765, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.set(0, -1);
    arr.set(1, -100);
    arr.set(2, -1e9);
    arr.set(3, 5);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(5, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, Double.NaN);
    arr.set(1, 10);
    arr.set(2, Double.NaN);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, Double.POSITIVE_INFINITY);
    arr.set(1, Double.POSITIVE_INFINITY);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(510, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, -Double.POSITIVE_INFINITY);
    arr.set(1, -Double.POSITIVE_INFINITY);
    arr.set(2, 42);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(42, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 0.5);
    arr.set(1, 0.5);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 127.5);
    arr.set(1, 127.5);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x10, 0x01});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(272, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1111, 0b1010, 0b0001});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(26, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017, 020, 07});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(38, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 1e1, 1e0});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(111, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo037() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(100, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo038() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray full = new Uint8ClampedArray(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    full.set(3, 4);
    full.set(4, 5);
    full.set(5, 6);
    Uint8ClampedArray sub = new Uint8ClampedArray(buf, 2, 3);
    int r = sub.reduce((p, c, i, a) ->  p + c);
    assertEqual(12, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo039() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(60, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo040() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 15, 25, 35);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(80, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo041() {
    List<Integer> expected = java.util.Arrays.asList(20, 30, 40, 50);
    List<Integer> seen = new ArrayList<>();
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    arr.reduce((p, c, i, a) -> {
    seen.add(c);
    return p + c;
        });
    assertEqual(expected.size(), seen.size());
    for (int k = 0; k < expected.size(); k = k + 1) {
    assertEqual(expected.get(k), seen.get(k));
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo042() {
    int[] firstP = {-1};
    int[] firstC = {-1};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {66, 77, 88});
    arr.reduce((p, c, i, a) -> {
    if (firstP[0] == -1) { firstP[0] = p;
    firstC[0] = c;
    }
    return p + c;
        });
    assertEqual(66, firstP[0]);
    assertEqual(77, firstC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {2, 3, 4});
    double r = arr.reduceDouble((p, c, i, a) ->  p + c + 0.5);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 50, 60});
    int r = arr.reduce((p, c, i, a) ->  p - c);
    assertEqual(-100, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, i, a) ->  0);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 1e9);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -50);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.NaN);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, i, a) ->  Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, i, a) ->  Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, i, a) ->  -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo054() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(buf, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayReduceTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    try {
    arr.reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo056() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    try {
    arr.reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo057() {
    List<Integer> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    try {
    arr.reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo058() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray empty = parent.subarray(2, 2);
    try {
    empty.reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    assertEqual(0, empty.length());
    }

    @Test
    void testUint8ClampedArrayReduceTwo059() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0, 0);
    try {
    arr.reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduce((p, c, i, a) -> {
    throw new Error("boom");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduce((p, c, i, a) -> {
    throw new TypeError("type");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduce((p, c, i, a) -> {
    throw new RangeError("range");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceTwo063() {
    int[] cnt = {0};
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    try {
    arr.reduce((p, c, i, a) -> {
    cnt[0] = cnt[0] + 1;
    if (i == 2) { throw new Error("stop");
    }
    return p + c;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(2, cnt[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 256);
    arr.set(1, 256);
    int[] seenC = {-1};
    arr.reduce((p, c, i, a) -> {
    seenC[0] = c;
    return p + c;
        });
    assertEqual(255, seenC[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, -1);
    arr.set(1, -1);
    int[] seenP = {-999};
    arr.reduce((p, c, i, a) -> {
    seenP[0] = p;
    return p + c;
        });
    assertEqual(0, seenP[0]);
    }

    @Test
    void testUint8ClampedArrayReduceTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 10);
    arr.set(1, Double.NaN);
    arr.set(2, 20);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(30, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 0.4);
    arr.set(1, 0.4);
    arr.set(2, 0.4);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(3);
    arr.set(0, 0.9);
    arr.set(1, 0.9);
    arr.set(2, 0.9);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 128.5);
    arr.set(1, 128.5);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, Double.MAX_VALUE);
    arr.set(1, Double.MAX_VALUE);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(510, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, Double.MIN_VALUE);
    arr.set(1, Double.MIN_VALUE);
    int r = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ClampedArrayReduceTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r1 = arr.reduce((p, c, i, a) ->  p + c);
    int r2 = arr.reduce((p, c, i, a) ->  p + c);
    assertEqual(10, r1);
    assertEqual(10, r2);
    }

    @Test
    void testUint8ClampedArrayReduceTwo075() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    parent.subarray(0, 0).reduce((p, c, i, a) ->  p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    int r = parent.reduce((p, c, i, a) ->  p + c);
    assertEqual(6, r);
    }
}
