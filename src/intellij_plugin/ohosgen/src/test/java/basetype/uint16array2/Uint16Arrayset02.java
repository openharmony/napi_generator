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

import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayset02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayset02 extends BasTest {

    @Test
    void testUint16ArraySetPart2001() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 42);
    assertEqualInt(42, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2002() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(4, 100);
    assertEqualInt(100, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2003() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(7, 200);
    assertEqualInt(200, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2004() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 255);
    assertEqualInt(255, arr.get(0));
    arr.set(0, 256);
    assertEqualInt(256, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2005() {
    Uint16Array arr = new Uint16Array(8);
    try {
    arr.set(8, 42);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2006() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2007() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65535);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2008() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65536);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2009() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, -1);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2010() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 32768);
    assertEqualInt(32768, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2011() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0x7FFF);
    assertEqualInt(32767, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2012() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0x8000);
    assertEqualInt(32768, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2013() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0xFFFF);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2014() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0x10000);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2015() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0177777);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2016() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0200000);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2017() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0b1111111111111111);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2018() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0b10000000000000000);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2019() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 3.14);
    assertEqualInt(3, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2020() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65535.9);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2021() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, -0.5);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2022() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65536 * 2);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2023() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65536 * 2 + 5);
    assertEqualInt(5, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2024() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, Double.NaN);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2025() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2026() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2027() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 1e1);
    assertEqualInt(10, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2028() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 1e0);
    assertEqualInt(1, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2029() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 6.5535e4);
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2030() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 42);
    assertEqualInt(42, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2031() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(3, 99);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(99, arr.get(3));
    assertEqualInt(0, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2032() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2033() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 100);
    arr.set(0, 200);
    assertEqualInt(200, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2034() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65536 * 65536);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2035() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, -65536);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2036() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2037() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {42}));
    assertEqualInt(42, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2038() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2039() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {10, 20, 30, 40, 50}));
    assertEqualInt(10, arr.get(0));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2040() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {99}));
    assertEqualInt(99, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint16ArraySetPart2041() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {65536}));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2042() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {-1}));
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2043() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {3.14}));
    assertEqualInt(3, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2044() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {Double.NaN}));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2045() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {Double.POSITIVE_INFINITY}));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2046() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {-Double.POSITIVE_INFINITY}));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2047() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {65535.9}));
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2048() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {-0.5}));
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2049() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {0, 65535, 32768, 1, 100}));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    assertEqualInt(1, arr.get(3));
    assertEqualInt(100, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2050() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {0xFFFF, 0x0, 0x8000}));
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2051() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {0b1111111111111111, 0b0, 0b1000000000000000}));
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2052() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {10, 20, 30, 40, 50}));
    arr.set(new Uint16Array(new int[] {0, 0, 0, 0, 0}));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2053() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {65535, 65535, 65535, 65535, 65535}));
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2054() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {0, 1, 2, 3, 4}));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(4, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2055() {
    Uint16Array arr = new Uint16Array(5);
    try {
    arr.set(new Uint16Array(new int[] {1, 2, 3, 4, 5, 6}));
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2056() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqual("1,2,3,0,0", arr.join(","));
    }

    @Test
    void testUint16ArraySetPart2057() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {100, 200, 300, 400, 500}));
    assertEqualInt(100, arr.get(0));
    assertEqualInt(200, arr.get(1));
    assertEqualInt(300, arr.get(2));
    assertEqualInt(400, arr.get(3));
    assertEqualInt(500, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2058() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    arr.set(new Uint16Array(new int[] {4, 5}));
    assertEqualInt(4, arr.get(0));
    assertEqualInt(5, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2059() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(new Uint16Array(new double[] {65536, -1, 3.14}));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2060() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {});
    arr.set(src, 0);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2061() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {100});
    arr.set(src, 0);
    assertEqualInt(100, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2062() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2, 3});
    arr.set(src, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2063() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2, 3, 4});
    arr.set(src, 4);
    assertEqualInt(1, arr.get(4));
    assertEqualInt(4, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2064() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {99});
    arr.set(src, 7);
    assertEqualInt(99, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2065() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2});
    try {
    arr.set(src, 8);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2066() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2});
    try {
    arr.set(src, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2067() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2});
    try {
    arr.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2068() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2});
    try {
    arr.set(src, 7);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart2069() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {0, 65535, 32768});
    arr.set(src, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2070() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {0xFFFF, 0x0, 0x8000});
    arr.set(src, 0);
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(32768, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2071() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2, 3});
    arr.set(src, 0);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(0, arr.get(3));
    }

    @Test
    void testUint16ArraySetPart2072() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {100, 200});
    arr.set(src, 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2073() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {1, 2, 3});
    arr.set(src, 0);
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(7));
    }

    @Test
    void testUint16ArraySetPart2074() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {10, 20, 30});
    arr.set(src, 2);
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2075() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src1 = Uint16Array.from(new int[] {1, 2, 3});
    Uint16Array src2 = Uint16Array.from(new int[] {4, 5});
    arr.set(src1, 0);
    arr.set(src2, 5);
    assertEqualInt(1, arr.get(0));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(4, arr.get(5));
    assertEqualInt(5, arr.get(6));
    }

    @Test
    void testUint16ArraySetPart2076() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {99});
    arr.set(src, 0);
    arr.set(src, 4);
    assertEqualInt(99, arr.get(0));
    assertEqualInt(99, arr.get(4));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint16ArraySetPart2077() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(new Uint16Array(new int[] {10, 20, 30, 40, 50, 60, 70, 80}));
    Uint16Array src = Uint16Array.from(new int[] {0, 0, 0});
    arr.set(src, 0);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(1));
    assertEqualInt(0, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    @Test
    void testUint16ArraySetPart2078() {
    Uint16Array arr = new Uint16Array(8);
    Uint16Array src = Uint16Array.from(new int[] {65535, 65535, 65535});
    arr.set(src, 0);
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(65535, arr.get(2));
    }

    @Test
    void testUint16ArraySetPart2079() {
    Uint16Array arr = new Uint16Array(5);
    arr.set(0, 65536);
    arr.set(1, -1);
    arr.set(2, 3.14);
    arr.set(new Uint16Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY}), 3);
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    assertEqualInt(3, arr.get(2));
    assertEqualInt(0, arr.get(3));
    assertEqualInt(0, arr.get(4));
    }

    @Test
    void testUint16ArraySetPart2080() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, -0.9);
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2081() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 65536 * 3 + 7);
    assertEqualInt(7, arr.get(0));
    }

    @Test
    void testUint16ArraySetPart2082() {
    Uint16Array arr = new Uint16Array(8);
    arr.set(0, 0x1FFFF);
    assertEqualInt(65535, arr.get(0));
    }
}
