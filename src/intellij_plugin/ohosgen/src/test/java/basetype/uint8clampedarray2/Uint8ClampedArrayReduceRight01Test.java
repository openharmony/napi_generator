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
import basetype.common.ClassCastError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayReduceRight01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayReduceRight01Test extends BasTest {

    @Test
    void testUint8ClampedArrayReduceRightOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int sum = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(6, sum);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    try {
    arr.reduceRight((p, c, i, a) -> p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    List<Integer> order = new ArrayList<>();
    arr.reduceRight((p, c, i, a) -> {
        order.add(i);
        return p;
        }, 0);
    assertEqual(2, order.get(0));
    assertEqual(1, order.get(1));
    assertEqual(0, order.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceRightOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 6, 7});
    List<Integer> values = new ArrayList<>();
    arr.reduceRight((p, c, i, a) -> {
        values.add(c);
        return p;
        }, 0);
    assertEqual(7, values.get(0));
    assertEqual(6, values.get(1));
    assertEqual(5, values.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceRightOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray[] captured = {null};
    arr.reduceRight((p, c, i, a) -> {
        captured[0] = a;
        return p;
        }, 0);
    assertEqual(arr, captured[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String s = arr.reduceRight((p, c, i, a) -> p + String.valueOf(c), "");
    assertEqual("321", s);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    arr.reduceRight((p, c, i, a) -> {
        return BasTest.throwTestError("cb-fail");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
        count[0]++;
        return BasTest.throwTestError("boom");
        }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(1, count[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
    count[0]++;
    if (count[0] == 2) {
        return BasTest.throwTestError("mid");
    }
    return p;
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(2, count[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new TypeError("te");
        }, 0);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> Double.NaN, 0);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceRightDouble((p, c, i, a) -> Double.POSITIVE_INFINITY, 0);
    assertEqual(Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    double r = arr.reduceRightDouble((p, c, i, a) -> -Double.POSITIVE_INFINITY, 0);
    assertEqual(-Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int factor = 10;
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c * factor, 0);
    assertEqual(60, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int[] calls = {0};
    arr.reduceRight((p, c, i, a) -> {
        calls[0]++;
        return p;
        }, 0);
    assertEqual(5, calls[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne016() {
    Uint8ClampedArray inner = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray outer = new Uint8ClampedArray(new int[] {3, 4});
    int r = outer.reduceRight((p, c, i, a) -> {
        return p + inner.reduceRight((pp, cc, index, array) -> pp + cc, 0) + c;
        }, 0);
    assertEqual(13, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> p, 42);
    assertEqual(42, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> c, 0);
    assertEqual(1, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int r = arr.reduceRight((p, c, i, a) -> 0, 100);
    assertEqual(0, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.reduceRight((p, c, i, a) -> p - c, 100);
    assertEqual(100 - 4 - 3 - 2 - 1, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int r = arr.reduceRight((p, c, i, a) -> p + a.get(0), 0);
    assertEqual(30, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    String s = arr.reduceRight((p, c, i, a) -> p + String.valueOf(i), "");
    assertEqual("210", s);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, 0.5);
    assertEqual(3.5, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    double r = arr.reduceRightDouble((p, c, i, a) -> p, Double.MAX_VALUE);
    assertEqual(Double.MAX_VALUE, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    double r = arr.reduceRightDouble((p, c, i, a) -> p, Double.MIN_VALUE);
    assertEqual(Double.MIN_VALUE, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, 9007199254740991L);
    assertEqual(9007199254740992L, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, -9007199254740991L);
    assertEqual(-9007199254740991L + 3, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.reduceRight((p, c, i, a) -> p + String.valueOf(c), "start");
    assertEqual("start21", r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    String r = arr.reduceRight((p, c, i, a) -> p + String.valueOf(c), "中文");
    assertEqual("中文1", r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5});
    String r = arr.reduceRight((p, c, i, a) -> p + String.valueOf(c), "😀");
    assertEqual("😀5", r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    boolean r = arr.reduceRight((p, c, i, a) -> p || (c > 0), false);
    assertTrue(r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0});
    boolean r = arr.reduceRight((p, c, i, a) -> p && (c == 0), true);
    assertTrue(r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    List<Integer> r = arr.reduceRightList((p, c, i, a) -> {
        p.add(c);
        return p;
        }, new java.util.ArrayList<>());
    assertEqual(3, r.size());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayReduceRightOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    int[] called = {0};
    int r = arr.reduceRight((p, c, i, a) -> {
        called[0]++;
        return p + c;
        }, 42);
    assertEqual(42, r);
    assertEqual(0, called[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    double r = arr.reduceRightDouble((p, c, i, a) -> p + c, Double.NaN);
    assertTrue(true);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {});
    String r = arr.reduceRight((p, c, i, a) -> p + String.valueOf(c), "");
    assertEqual("", r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int[] called = {0};
    int r = arr.reduceRight((p, c, i, a) -> {
        called[0]++;
        return p + c;
        }, 0);
    assertEqual(1, called[0]);
    assertEqual(42, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    int[] idx = {-1};
    arr.reduceRight((p, c, i, a) -> {
        idx[0] = i;
        return p;
        }, 0);
    assertEqual(0, idx[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne042() {
    List<Integer> buf = new ArrayList<>();
    for (int k = 0; k < 256; k++) {
        buf.add(1);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(256, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne043() {
    List<Integer> buf = new ArrayList<>();
    for (int k = 0; k < 1024; k++) {
        buf.add(2);
    }
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(2048, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    int r = arr.reduceRight((p, c, i, a) -> p + c, 7);
    assertEqual(7, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(765, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 5, 10});
    arr.set(0, -1);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(15, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    arr.set(2, 256);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128, 255});
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(510, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, 127.5);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(128, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    arr.set(0, Double.NaN);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(20, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, Double.POSITIVE_INFINITY);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(255, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    arr.set(0, -Double.POSITIVE_INFINITY);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 100);
    assertEqual(100, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne053() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne054() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 3);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(60, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne055() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(5, 10, 15);
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(30, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> p * 10 + c, 0);
    assertEqual(321, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(bufBefore, arr.buffer());
    }

    @Test
    void testUint8ClampedArrayReduceRightOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int r = arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(2, arr.length());
    assertEqual(3, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    int beforeBL = arr.byteLength();
    arr.reduceRight((p, c, i, a) -> p + c, 0);
    assertEqual(beforeBL, arr.byteLength());
    }

    @Test
    void testUint8ClampedArrayReduceRightOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> {
        if (i == 2) {
            a.set(0, 99);
        }
        return p + c;
        }, 0);
    assertEqual(99 + 2 + 3, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new RangeError("x");
        }, 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] partial = {-1};
    int[] count = {0};
    try {
    arr.reduceRight((p, c, i, a) -> {
    count[0]++;
    partial[0] = p + c;
    if (count[0] == 3) {
        return BasTest.throwTestError("third");
    }
    return p + c;
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual(3, count[0]);
    assertEqual(4 + 3 + 2, partial[0]);
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    try {
    arr.reduceRight((p, c, i, a) -> {
        throw new SyntaxError("sx");
        }, 0);
    fail();
    } catch (SyntaxError e) {
    assertEqual("SyntaxError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int r = arr.reduceRight((p, c, i, a) -> p + c + a.length(), 0);
    assertEqual(6 + 9, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(42, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    int[] count = {0};
    arr.reduceRight((p, c, i, a) -> {
        count[0]++;
        return p + c;
    });
    assertEqual(1, count[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] count = {0};
    arr.reduceRight((p, c, i, a) -> {
        count[0]++;
        return p + c;
    });
    assertEqual(2, count[0]);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint8ClampedArrayReduceRightOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int r = arr.reduceRight((p, c, i, a) -> p + c);
    assertEqual(10, r);
    }

    @Test
    void testUint8ClampedArrayReduceRightOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 20, 99});
    int r = arr.reduceRight((p, c, i, a) -> p);
    assertEqual(99, r);
    }
}
