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
 * Uint16Arrayset03 —— Int16Array 方法族测试。
 */
public class Uint16Arrayset03 extends BasTest {

    @Test
    void testUint16ArraySet03Test001() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {10, 20, 30};
    target.set(source);
    assertEqual(10, target.get(0));
    assertEqual(20, target.get(1));
    assertEqual(30, target.get(2));
    assertEqual(0, target.get(3));
    assertEqual(0, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test002() {
    Uint16Array target = new Uint16Array(3);
    double[] source = new double[] {5, 10, 15};
    target.set(source);
    assertEqual(5, target.get(0));
    assertEqual(10, target.get(1));
    assertEqual(15, target.get(2));
    }

    @Test
    void testUint16ArraySet03Test003() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {};
    target.set(source);
    assertEqual(0, target.get(0));
    assertEqual(0, target.get(1));
    assertEqual(0, target.get(2));
    assertEqual(0, target.get(3));
    assertEqual(0, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test004() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {42};
    target.set(source);
    assertEqual(42, target.get(0));
    assertEqual(0, target.get(1));
    }

    @Test
    void testUint16ArraySet03Test005() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0};
    target.set(source);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test006() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {65535};
    target.set(source);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test007() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {32768};
    target.set(source);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test008() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0xFFFF};
    target.set(source);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test009() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0x7FFF};
    target.set(source);
    assertEqual(32767, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test010() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0b1111111111111111};
    target.set(source);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test011() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0177777};
    target.set(source);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test012() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {0, 65535, 32768, 0, 65535};
    target.set(source);
    assertEqual(0, target.get(0));
    assertEqual(65535, target.get(1));
    assertEqual(32768, target.get(2));
    assertEqual(0, target.get(3));
    assertEqual(65535, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test013() {
    Uint16Array target = new Uint16Array(3);
    double[] source = new double[] {1e4};
    target.set(source);
    assertEqual(10000, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test014() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {1, 2, 3};
    target.set(source);
    assertEqual("1,2,3,0,0", target.join(","));
    }

    @Test
    void testUint16ArraySet03Test015() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {1, 2, 3, 4};
    try {
    target.set(source);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test016() {
    Uint16Array target = new Uint16Array(2);
    int[] source = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    try {
    target.set(source);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test017() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0x10000};
    target.set(source);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test018() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {65537};
    target.set(source);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test019() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {-65535};
    target.set(source);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test020() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {-65536};
    target.set(source);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test021() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {-32768};
    target.set(source);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test022() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {65536 * 2};
    target.set(source);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test023() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {65536 * 3};
    target.set(source);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test024() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0, 2.0};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    }

    @Test
    void testUint16ArraySet03Test025() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0, 2.0, 3.0};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint16ArraySet03Test026() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    assertEqual(0, target.get(1));
    }

    @Test
    void testUint16ArraySet03Test027() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {99.0};
    target.set(source, 0);
    assertEqual(99, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test028() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {3.14};
    target.set(source, 0);
    assertEqual(3, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test029() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {0.5};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test030() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.5};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test031() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {65535.0};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test032() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {0.0};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test033() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {32768.0};
    target.set(source, 0);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test034() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1e4};
    target.set(source, 0);
    assertEqual(10000, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test035() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {0xFFFF};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test036() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {0b1111111111111111};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test037() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {10.0, 20.0};
    target.set(source, 1);
    assertEqual(0, target.get(0));
    assertEqual(10, target.get(1));
    assertEqual(20, target.get(2));
    assertEqual(0, target.get(3));
    assertEqual(0, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test038() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {10.0, 20.0};
    target.set(source, 3);
    assertEqual(10, target.get(3));
    assertEqual(20, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test039() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {99.0};
    target.set(source, 4);
    assertEqual(99, target.get(4));
    }

    @Test
    void testUint16ArraySet03Test040() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test041() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {};
    target.set(source, 3);
    assertEqual(0, target.get(3));
    }

    @Test
    void testUint16ArraySet03Test042() {
    Uint16Array target = new Uint16Array(3);
    double[] source = new double[] {1.0, 2.0, 3.0};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint16ArraySet03Test043() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0, 2.0};
    target.set(source, 1);
    assertEqual("0,1,2,0,0", target.join(","));
    }

    @Test
    void testUint16ArraySet03Test044() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, -1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test045() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, 5);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test046() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, 6);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test047() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, -5);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test048() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, -6);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test049() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0};
    try {
    target.set(source, 999999);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test050() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {1.0, 2.0, 3.0};
    try {
    target.set(source, 4);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test051() {
    Uint16Array target = new Uint16Array(3);
    double[] source = new double[] {1.0, 2.0, 3.0, 4.0, 5.0};
    try {
    target.set(source, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet03Test052() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {65536.0};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test053() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {0x10000};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test054() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-1.0};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test055() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {65535.9};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test056() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-0.5};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test057() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {Double.POSITIVE_INFINITY};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test058() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-Double.POSITIVE_INFINITY};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test059() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {Double.NaN};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test060() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {65537.0};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test061() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-32768.0};
    target.set(source, 0);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test062() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-65535.0};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test063() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {-65536.0};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test064() {
    Uint16Array target = new Uint16Array(5);
    double[] source = new double[] {65536.0 * 2};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet03Test065() {
    Uint16Array t = new Uint16Array(4);
    int[] s = new int[] {1, 2, 3, 4};
    t.set(s);
    assertEqual("1,2,3,4", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test066() {
    Uint16Array t = new Uint16Array(3);
    double[] s = new double[] {1.9, 2.1, 3.8};
    t.set(s);
    assertEqual("1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test067() {
    Uint16Array t = Uint16Array.of(9, 9, 9, 9, 9);
    int[] s = new int[] {4, 5, 6};
    t.set(s, 1);
    assertEqual("9,4,5,6,9", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test068() {
    Uint16Array t = Uint16Array.of(1, 2, 3);
    int[] s = new int[] {};
    t.set(s, 3);
    assertEqual("1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test069() {
    Uint16Array t = new Uint16Array(4);
    int[] s = new int[] {-1, 65536, 65537, -32768};
    t.set(s);
    assertEqual("65535,0,1,32768", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test070() {
    Uint16Array t = new Uint16Array(3);
    double[] s = new double[] {Double.NaN, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY};
    t.set(s);
    assertEqual("0,0,0", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test071() {
    Uint16Array t = Uint16Array.of(8, 8, 8);
    int[] s = new int[] {1, 2, 3};
    try {
    t.set(s, 1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("8,8,8", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet03Test072() {
    Uint16Array t = Uint16Array.of(8, 8);
    int[] s = new int[] {1};
    try {
    t.set(s, -1);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("8,8", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet03Test073() {
    Uint16Array s = Uint16Array.of(1, 2, 3);
    Uint16Array t = new Uint16Array(3);
    t.set(s);
    s.set(0, 9);
    assertEqual("1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test074() {
    Uint16Array base = Uint16Array.of(9, 2, 4, 6, 8);
    Uint16Array s = base.subarray(1, 4);
    Uint16Array t = new Uint16Array(5);
    t.set(s, 1);
    assertEqual("0,2,4,6,0", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test075() {
    Uint16Array t = Uint16Array.of(1, 2, 3, 4);
    t.set(t.subarray(0, 3), 1);
    assertEqual("1,1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test076() {
    Uint16Array t = Uint16Array.of(1, 2, 3, 4);
    t.set(t.subarray(1, 4), 0);
    assertEqual("2,3,4,4", t.join(","));
    }

    @Test
    void testUint16ArraySet03Test077() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(1, 2, 3, 4, 5, 6));
    Uint16Array s = new Uint16Array(b, 0, 2);
    Uint16Array t = new Uint16Array(b, 4, 4);
    t.set(s, 2);
    assertEqual("1,2,3,4,1,2", all.join(","));
    }

    @Test
    void testUint16ArraySet03Test078() {
    Uint16Array s = Uint16Array.of(1, 2, 3, 4);
    Uint16Array t = Uint16Array.of(7, 7, 7);
    try {
    t.set(s);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("7,7,7", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet079() {
    Uint16Array s = Uint16Array.of(5, 6);
    Uint16Array t = Uint16Array.of(0, 0, 0, 0);
    t.set(s, 2);
    assertEqual("0,0,5,6", t.join(","));
    }

    @Test
    void testUint16ArraySet080() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(1, 2, 3, 4, 5));
    Uint16Array s = new Uint16Array(b, 2, 3);
    all.set(s, 0);
    assertEqual("2,3,4,4,5", all.join(","));
    }
}
