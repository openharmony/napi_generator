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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayset05 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayset05 extends BasTest {

    @Test
    void testUint16ArraySet05Test001() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint16ArraySet05Test002() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 1);
    assertEqual(1, target.get(1));
    assertEqual(2, target.get(2));
    }

    @Test
    void testUint16ArraySet05Test003() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {10, 20, 30}), 0);
    assertEqual(10, target.get(0));
    assertEqual(20, target.get(1));
    assertEqual(30, target.get(2));
    }

    @Test
    void testUint16ArraySet05Test004() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test005() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {}), 3);
    assertEqual(0, target.get(3));
    }

    @Test
    void testUint16ArraySet05Test006() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {42}), 0);
    assertEqual(42, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test007() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2, 3}), 2);
    assertEqual(1, target.get(2));
    assertEqual(2, target.get(3));
    assertEqual(3, target.get(4));
    }

    @Test
    void testUint16ArraySet05Test008() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {99}), 4);
    assertEqual(99, target.get(4));
    }

    @Test
    void testUint16ArraySet05Test009() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test010() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {65535}), 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test011() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {32768}), 0);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test012() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0, 65535, 32768, 0, 65535}), 0);
    assertEqual(0, target.get(0));
    assertEqual(65535, target.get(1));
    assertEqual(32768, target.get(2));
    assertEqual(0, target.get(3));
    assertEqual(65535, target.get(4));
    }

    @Test
    void testUint16ArraySet05Test013() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0xFFFF}), 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test014() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0x7FFF}), 0);
    assertEqual(32767, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test015() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0b1111111111111111}), 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test016() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {1e4}), 0);
    assertEqual(10000, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test017() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {65536}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test018() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 0);
    assertEqual(5, target.length());
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    }

    @Test
    void testUint16ArraySet05Test019() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {-1}), 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test020() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 2);
    assertEqual(1, target.get(2));
    assertEqual(2, target.get(3));
    }

    @Test
    void testUint16ArraySet05Test021() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    }

    @Test
    void testUint16ArraySet05Test022() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 1);
    assertEqual(1, target.get(1));
    assertEqual(2, target.get(2));
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test023() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1, 2}), 3);
    assertEqual(1, target.get(3));
    assertEqual(2, target.get(4));
    }

    @Test
    void testUint16ArraySet05Test024() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test025() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), 5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test026() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), 6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test027() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), -5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test028() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), -6);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test029() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1}), 999999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test030() {
    Uint16Array target = new Uint16Array(5);
    try {
    target.set(new Uint16Array(new int[] {1, 2, 3}), 4);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test031() {
    Uint16Array target = new Uint16Array(3);
    try {
    target.set(new Uint16Array(new int[] {1, 2, 3, 4}), 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test032() {
    Uint16Array target = new Uint16Array(2);
    try {
    target.set(new Uint16Array(new int[] {1, 2, 3, 4, 5}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySet05Test033() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {0x10000}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test034() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {3.14}), 0);
    assertEqual(3, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test035() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {65535.9}), 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test036() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {-0.5}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test037() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {Double.POSITIVE_INFINITY}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test038() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {-Double.POSITIVE_INFINITY}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test039() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new double[] {Double.NaN}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test040() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {-32768}), 0);
    assertEqual(32768, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test041() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {65537}), 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test042() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {65536 * 2}), 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test043() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {-65535}), 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test044() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {1}), 0);
    assertEqual(1, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test045() {
    Uint16Array target = new Uint16Array(5);
    target.set(new Uint16Array(new int[] {32767}), 0);
    assertEqual(32767, target.get(0));
    }

    @Test
    void testUint16ArraySet05Test046() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqual("1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test047() {
    Uint16Array t = Uint16Array.of(9, 9, 9, 9, 9);
    t.set(new Uint16Array(new int[] {1, 2}), 2);
    assertEqual("9,9,1,2,9", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test048() {
    Uint16Array t = new Uint16Array(5);
    t.set(new Uint16Array(new double[] {-1.8, 0.9, 65536.4, 65537.9, 32768.2}));
    assertEqual("65535,0,0,1,32768", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test049() {
    Uint16Array t = Uint16Array.of(3, 4, 5);
    List<Integer> s = new ArrayList<>();
    t.set(s, 2);
    assertEqual("3,4,5", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test050() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array all = new Uint16Array(b);
    all.fill(8);
    Uint16Array t = new Uint16Array(b, 4, 3);
    t.set(new Uint16Array(new int[] {1, 2}), 1);
    assertEqual("8,1,2", t.join(","));
    assertEqual("8,8,8,1,2,8", all.join(","));
    }

    @Test
    void testUint16ArraySet05Test051() {
    Uint16Array t = Uint16Array.of(4, 5, 6);
    try {
    t.set(new Uint16Array(new int[] {1}), 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("4,5,6", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test052() {
    Uint16Array t = Uint16Array.of(4, 5, 6);
    try {
    t.set(new Uint16Array(new int[] {1}), -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("4,5,6", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test053() {
    Uint16Array t = Uint16Array.of(7, 7, 7);
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3}), 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("7,7,7", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test054() {
    Uint16Array t = Uint16Array.of(7, 7);
    try {
    t.set(new Uint16Array(new int[] {1}), 999);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("7,7", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test055() {
    Uint16Array t = Uint16Array.of(6, 6);
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("6,6", t.join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test056() {
    Uint16Array t = new Uint16Array(6);
    t.set(new Uint16Array(new int[] {2, 2, 3, 3}), 1);
    assertEqual("0,2,2,3,3,0", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test057() {
    Uint16Array t = Uint16Array.of(9, 9, 9, 9);
    t.set(new Uint16Array(new int[] {4, 5, 6}), 1);
    assertEqual("9,4,5,6", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test058() {
    List<Integer> s = java.util.Arrays.asList(1, 2, 3);
    Uint16Array t = new Uint16Array(3);
    t.set(s);
    s.set(1, 22);
    assertEqual("1,2,3", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test059() {
    Uint16Array t = Uint16Array.of(1, 2, 3);
    t.set(new Uint16Array(new int[] {65535}), 2);
    assertEqual("1,2,65535", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test060() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY}));
    assertEqual("0,0,0", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test061() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new int[] {131072, 131073, -131073}));
    assertEqual("0,1,65535", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test062() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array t = new Uint16Array(b, 2, 2);
    try {
    t.set(new Uint16Array(new int[] {1, 2}), 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("0,0,0,0,0,0", new Uint16Array(b).join(","));
    }
    }

    @Test
    void testUint16ArraySet05Test063() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array t = new Uint16Array(b, 2, 2);
    t.set(new Uint16Array(new int[] {12, 34}));
    assertEqual("0,12,34,0", new Uint16Array(b).join(","));
    }

    @Test
    void testUint16ArraySet05Test064() {
    Uint16Array t = Uint16Array.of(1, 2);
    List<Integer> s = new ArrayList<>();
    t.set(s, 2);
    assertEqual("1,2", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test065() {
    Uint16Array t = new Uint16Array(4);
    t.set(new Uint16Array(new double[] {1.1, 2.9, -3.1, 65539.8}));
    assertEqual("1,2,65533,3", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test066() {
    Uint16Array t = new Uint16Array(3);
    ArrayBuffer b = t.buffer();
    t.set(new Uint16Array(new int[] {7, 8}), 1);
    assertEqual(b, t.buffer());
    assertEqual("0,7,8", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test067() {
    Uint16Array t = new Uint16Array(new ArrayBuffer(10), 2, 3);
    t.set(new Uint16Array(new int[] {1}), 2);
    assertEqual(2, t.byteOffset());
    assertEqual(6, t.byteLength());
    assertEqual(3, t.length());
    }

    @Test
    void testUint16ArraySet05Test068() {
    double[] s = new double[] {5.5, 6.5};
    Uint16Array t = new Uint16Array(3);
    t.set(s, 1);
    assertEqual("0,5,6", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test069() {
    Uint16Array t = new Uint16Array(4);
    t.set(new Uint16Array(new int[] {1, 2, 3, 4}));
    t.set(new Uint16Array(new int[] {8, 9}), 1);
    assertEqual("1,8,9,4", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test070() {
    Uint16Array all = Uint16Array.of(9, 9, 9, 9, 9);
    Uint16Array t = all.subarray(1, 4);
    t.set(new Uint16Array(new int[] {1, 2}), 1);
    assertEqual("9,9,1,2,9", all.join(","));
    }

    @Test
    void testUint16ArraySet05Test071() {
    Uint16Array t = Uint16Array.of(8, 8, 8);
    t.set(new Uint16Array(new int[] {0, 0}), 1);
    assertEqual("8,0,0", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test072() {
    Uint16Array t = Uint16Array.of(1, 2, 3, 4);
    t.set(new Uint16Array(new int[] {9}), 0);
    assertEqual("9,2,3,4", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test073() {
    Uint16Array t = Uint16Array.of(1, 2, 3, 4);
    t.set(new Uint16Array(new int[] {9}), 3);
    assertEqual("1,2,3,9", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test074() {
    Uint16Array t = Uint16Array.of(1, 2, 3);
    t.set(new Uint16Array(new int[] {9}), 1);
    assertEqual("1,9,3", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test075() {
    Uint16Array t = new Uint16Array(4);
    t.set(new Uint16Array(new int[] {0, 1, 32768, 65535}));
    assertEqual("0,1,32768,65535", t.join(","));
    }

    @Test
    void testUint16ArraySet05Test076() {
    Uint16Array t = new Uint16Array();
    List<Integer> s = new ArrayList<>();
    t.set(s);
    assertEqual(0, t.length());
    }

    @Test
    void testUint16ArraySet05Test077() {
    Uint16Array t = new Uint16Array();
    try {
    t.set(new Uint16Array(new int[] {1}));
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(0, t.length());
    }
    }

    @Test
    void testUint16ArraySet05Test078() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new double[] {10.9, 2.9, 30.1}));
    assertEqual("10,2,30", t.join(","));
    }
}
