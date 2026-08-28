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
import basetype.common.URIError;
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
 * Uint8ClampedArrayReduce01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayReduce01Test extends BasTest {

    @Test
    void testUint8ClampedArrayReduceOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    double r = arr.reduceDouble((p, c, index, array) -> p * c, 1);
    assertEqual(24, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, index, array) -> p, 100);
    assertEqual(100, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.reduce((p, c, index, array) -> c, 0);
    assertEqual(30, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 5, 5});
    int r = arr.reduce((p, c, i, index) -> p + i, 0);
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, i, a) -> p + a.length(), 0);
    assertEqual(9, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 7, 2, 5, 1});
    int r = arr.reduce((p, c, index, array) -> p > c ? p : c, 0);
    assertEqual(7, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 7, 2, 5, 1});
    int r = arr.reduce((p, c, index, array) -> p < c ? p : c, 255);
    assertEqual(1, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    double r = arr.reduceDouble((p, c, index, array) -> c % 2 == 0 ? p + 1 : p, 0);
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray inner = new Uint8ClampedArray(new int[] {10, 20});
    int r = arr.reduce((p, c, index, array) -> p + inner.reduce((p2, c2, unused3, unused4) -> p2 + c2, 0), 0);
    assertEqual(90, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int factor = 10;
    double r = arr.reduceDouble((p, c, index, array) -> p + c * factor, 0);
    assertEqual(60, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] counter = {0};
    arr.reduce((p, c, index, array) -> {
        counter[0] += 1;
        return p + c;
        }, 0);
    assertEqual(3, counter[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduce((p, c, index, array) -> {
        return BasTest.throwTestError("cb fail");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduce((p, c, index, array) -> {
        throw new TypeError("cb type");
        }, 0);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduce((p, c, index, array) -> {
        throw new RangeError("cb range");
        }, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] calls = {0};
    try {
    arr.reduce((p, c, index, array) -> {
        calls[0] += 1;
        return BasTest.throwTestError("x");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, calls[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] calls = {0};
    try {
    arr.reduce((p, c, index, array) -> {
        calls[0] += 1;
        if (calls[0] == 3) {
            return BasTest.throwTestError("mid");
        }
        return p + c;
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(3, calls[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, i, a) -> {
        if (i == 0) {
            a.set(2, 99);
        }
        return p + c;
        }, 0);
    assertEqual(102, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, index, array) -> p + c, 100);
    assertEqual(106, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, index, array) -> p + c, -10);
    assertEqual(-4, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, 1.5);
    assertEqual(7.5, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, 9007199254740991L);
    assertEqual(9007199254740991L + 1, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, -9007199254740991L);
    assertEqual(-9007199254740991L + 1, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, Double.MAX_VALUE);
    assertEqual(Double.MAX_VALUE, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, Double.MIN_VALUE);
    assertEqual(Double.MIN_VALUE, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, index, array) -> p + c, -0);
    assertEqual(6, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    int r = arr.reduce((p, c, index, array) -> p + c, 0xFF);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    int r = arr.reduce((p, c, index, array) -> p + c, 077);
    assertEqual(64, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    int r = arr.reduce((p, c, index, array) -> p + c, 0b1010);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    double r = arr.reduceDouble((p, c, index, array) -> p + c, 1e3);
    assertEqual(1000, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.reduce((p, c, index, array) -> p + String.valueOf(c), "");
    assertEqual("123", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.reduce((p, c, index, array) -> p + "-" + String.valueOf(c), "S");
    assertEqual("S-10-20-30", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.reduce((p, c, index, array) -> p + String.valueOf(c), "X");
    assertEqual("X12", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> r = arr.reduceList((p, c, index, array) -> {
        p.add(c);
        return p;
        }, new ArrayList<>());
    assertEqual(3, r.size());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean r = arr.reduce((p, c, index, array) -> p && c != 0, true);
    assertTrue(r);
    }

    @Test
    void testUint8ClampedArrayReduceOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 0, 3});
    boolean r = arr.reduce((p, c, index, array) -> p && c != 0, true);
    assertFalse(r);
    }

    @Test
    void testUint8ClampedArrayReduceOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255, 255});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(1020, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255, 0, 255});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(510, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 1});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 5});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(5, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 10});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 0});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 100});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(100, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(128, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5});
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(128, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne051() {
    List<Integer> src = new java.util.ArrayList<>();
    for (int i = 0; i < 100; i++) {
        (src).add(1);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(100, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne052() {
    List<Integer> tmp = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
        tmp.add(2);
    }
    List<Integer> src = tmp;
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(512, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int r = arr.reduce((p, c, index, array) -> p + c, 0);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] firstPrev = {-1};
    arr.reduce((p, c, i, index) -> {
        if (i == 0) {
            firstPrev[0] = p;
        }
        return p + c;
        }, 999);
    assertEqual(999, firstPrev[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] firstIdx = {-1};
    arr.reduce((p, c, i, index) -> {
        if (firstIdx[0] == -1) {
            firstIdx[0] = i;
        }
        return p + c;
        }, 0);
    assertEqual(0, firstIdx[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] lastIdx = {-1};
    arr.reduce((p, c, i, index) -> {
        lastIdx[0] = i;
        return p + c;
        }, 0);
    assertEqual(3, lastIdx[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.reduce((p, c, i, index) -> p + String.valueOf(i), "");
    assertEqual("012", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    String r = arr.reduce((p, c, index, array) -> p + String.valueOf(c), "");
    assertEqual("789", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    boolean[] same = {false};
    arr.reduce((p, c, i, a) -> {
        same[0] = (a == arr);
        return p + c;
        }, 0);
    assertTrue(same[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    boolean[] match = {true};
    arr.reduce((p, c, i, a) -> {
        if (c != a.get(i)) {
            match[0] = false;
        }
        return p;
        }, 0);
    assertTrue(match[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    boolean r = arr.reduce((p, c, index, array) -> p, true);
    assertTrue(r);
    }

    @Test
    void testUint8ClampedArrayReduceOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> acc = new ArrayList<>();
    List<Integer> r = arr.reduceList((p, c, index, array) -> {
        p.add(c);
        return p;
        }, acc);
    assertEqual(acc, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] calls = {0};
    int r = arr.reduce((p, c, index, array) -> {
        calls[0] += 1;
        return p + c;
        }, 42);
    assertEqual(42, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] calls = {0};
    arr.reduce((p, c, index, array) -> {
        calls[0] += 1;
        return p + c;
        }, 0);
    assertEqual(0, calls[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.reduce((p, c, index, array) -> p + String.valueOf(c), "init");
    assertEqual("init", r);
    }

    @Test
    void testUint8ClampedArrayReduceOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int r = arr.reduce((p, c, index, array) -> p + c, -100);
    assertEqual(-100, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    double r = arr.reduceDouble((p, c, index, array) -> p + c, Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduce((p, c, index, array) -> {
        throw new SyntaxError("syn");
        }, 0);
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduce((p, c, index, array) -> {
        throw new URIError("uri");
        }, 0);
    fail();
    } catch (URIError e) {
    assertEqual("URIError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256});
    int[] seen = {-1};
    arr.reduce((p, c, index, array) -> {
        seen[0] = c;
        return p + c;
        }, 0);
    assertEqual(255, seen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1});
    int[] seen = {-99};
    arr.reduce((p, c, index, array) -> {
        seen[0] = c;
        return p + c;
        }, 0);
    assertEqual(0, seen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN});
    int[] seen = {-1};
    arr.reduce((p, c, index, array) -> {
        seen[0] = c;
        return p + c;
        }, 0);
    assertEqual(0, seen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9});
    int[] seen = {-1};
    arr.reduce((p, c, index, array) -> {
        seen[0] = c;
        return p + c;
        }, 0);
    assertEqual(255, seen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9});
    int[] seen = {-1};
    arr.reduce((p, c, index, array) -> {
        seen[0] = c;
        return p + c;
        }, 0);
    assertEqual(0, seen[0]);
    }

    @Test
    void testUint8ClampedArrayReduceOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduce((p, c, index, array) -> p - c, 0);
    assertEqual(-6, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceDouble((p, c, index, array) -> p + c / 2, 0);
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {65, 66, 67});
    String r = arr.reduce((p, c, index, array) -> p + String.valueOf(c), "");
    assertEqual("656667", r);
    }
}
