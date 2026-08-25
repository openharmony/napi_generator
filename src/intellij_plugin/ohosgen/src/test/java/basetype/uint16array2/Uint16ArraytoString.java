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

import basetype.ArrayBuffer;
import basetype.BasTest;
import basetype.EntryResult;
import basetype.Error;
import basetype.Int8Array;
import basetype.IteratorResult;
import basetype.RangeError;
import basetype.TypeError;
import basetype.Uint16Array;
import basetype.DataView;
import basetype.Float32Array;
import basetype.Float64Array;
import basetype.Int32Array;
import basetype.IntlOptions;
import basetype.NullPointerError;
import basetype.Uint8Array;
import basetype.Uint8ClampedArray;
import basetype.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArraytoString —— Int16Array 方法族测试。
 */
public class Uint16ArraytoString extends BasTest {

    @Test
    void testUint16ArrayToString001() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    @Test
    void testUint16ArrayToString002() {
    Uint16Array arr = Uint16Array.of(1, 2);
    String result = String.valueOf(arr);
    assertEqual("1,2", result);
    }

    @Test
    void testUint16ArrayToString003() {
    Uint16Array arr = new Uint16Array();
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString004() {
    Uint16Array arr = new Uint16Array(0);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString005() {
    Uint16Array arr = new Uint16Array(0.0);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString006() {
    Uint16Array arr = Uint16Array.of();
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString007() {
    Uint16Array arr = Uint16Array.from(new int[] {});
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString008() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint16Array arr = new Uint16Array(buf);
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString009() {
    Uint16Array arr = new Uint16Array(new int[] {});
    String result = String.valueOf(arr);
    assertEqual("", result);
    }

    @Test
    void testUint16ArrayToString010() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString011() {
    Uint16Array arr = new Uint16Array(new int[] {65535});
    String result = String.valueOf(arr);
    assertEqual("65535", result);
    }

    @Test
    void testUint16ArrayToString012() {
    Uint16Array arr = new Uint16Array(new int[] {32768});
    String result = String.valueOf(arr);
    assertEqual("32768", result);
    }

    @Test
    void testUint16ArrayToString013() {
    Uint16Array arr = new Uint16Array(new int[] {1});
    String result = String.valueOf(arr);
    assertEqual("1", result);
    }

    @Test
    void testUint16ArrayToString014() {
    Uint16Array arr = new Uint16Array(new int[] {65536});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString015() {
    Uint16Array arr = new Uint16Array(new int[] {-1});
    String result = String.valueOf(arr);
    assertEqual("65535", result);
    }

    @Test
    void testUint16ArrayToString016() {
    Uint16Array arr = new Uint16Array(new double[] {3.14});
    String result = String.valueOf(arr);
    assertEqual("3", result);
    }

    @Test
    void testUint16ArrayToString017() {
    Uint16Array arr = new Uint16Array(new double[] {65535.9});
    String result = String.valueOf(arr);
    assertEqual("65535", result);
    }

    @Test
    void testUint16ArrayToString018() {
    Uint16Array arr = new Uint16Array(new double[] {Double.NaN});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString019() {
    Uint16Array arr = new Uint16Array(new double[] {Double.POSITIVE_INFINITY});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString020() {
    Uint16Array arr = new Uint16Array(new double[] {-Double.POSITIVE_INFINITY});
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString021() {
    Uint16Array arr = new Uint16Array(new int[] {0, 65535});
    String result = String.valueOf(arr);
    assertEqual("0,65535", result);
    }

    @Test
    void testUint16ArrayToString022() {
    Uint16Array arr = new Uint16Array(new int[] {32768, 1});
    String result = String.valueOf(arr);
    assertEqual("32768,1", result);
    }

    @Test
    void testUint16ArrayToString023() {
    Uint16Array arr = new Uint16Array(new int[] {65536, -1});
    String result = String.valueOf(arr);
    assertEqual("0,65535", result);
    }

    @Test
    void testUint16ArrayToString024() {
    Uint16Array arr = new Uint16Array(new int[] {0xFFFF, 0x8000});
    String result = String.valueOf(arr);
    assertEqual("65535,32768", result);
    }

    @Test
    void testUint16ArrayToString025() {
    Uint16Array arr = new Uint16Array(new int[] {0b1111, 07777});
    String result = String.valueOf(arr);
    assertEqual("15,4095", result);
    }

    @Test
    void testUint16ArrayToString026() {
    Uint16Array arr = new Uint16Array(new int[] {0x10000, -0x8000});
    String result = String.valueOf(arr);
    assertEqual("0,32768", result);
    }

    @Test
    void testUint16ArrayToString027() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    String result = String.valueOf(arr);
    assertEqual("10,20,30,40,50", result);
    }

    @Test
    void testUint16ArrayToString028() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 0, 65535, 0});
    String result = String.valueOf(arr);
    assertEqual("65535,0,65535,0", result);
    }

    @Test
    void testUint16ArrayToString029() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    String result = String.valueOf(arr);
    assertEqual("1,2,3,4,5", result);
    }

    @Test
    void testUint16ArrayToString030() {
    Uint16Array arr = new Uint16Array(new int[] {7, 7, 7});
    String result = String.valueOf(arr);
    assertEqual("7,7,7", result);
    }

    @Test
    void testUint16ArrayToString031() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0, 0});
    String result = String.valueOf(arr);
    assertEqual("0,0,0,0", result);
    }

    @Test
    void testUint16ArrayToString032() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535, 65535});
    String result = String.valueOf(arr);
    assertEqual("65535,65535,65535", result);
    }

    @Test
    void testUint16ArrayToString033() {
    Uint16Array arr = new Uint16Array(new double[] {1e3, 2e3, 3e3});
    String result = String.valueOf(arr);
    assertEqual("1000,2000,3000", result);
    }

    @Test
    void testUint16ArrayToString034() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 32768, 65535});
    String result = String.valueOf(arr);
    assertEqual("0,1,32768,65535", result);
    }

    @Test
    void testUint16ArrayToString035() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.set(1, 99);
    String result = String.valueOf(arr);
    assertEqual("1,99,3", result);
    }

    @Test
    void testUint16ArrayToString036() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0});
    arr.set(0, 65535);
    String result = String.valueOf(arr);
    assertEqual("65535,0,0", result);
    }

    @Test
    void testUint16ArrayToString037() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.set(3, 0);
    String result = String.valueOf(arr);
    assertEqual("1,2,3,0", result);
    }

    @Test
    void testUint16ArrayToString038() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    arr.set(0, 65536);
    String result = String.valueOf(arr);
    assertEqual("0", result);
    }

    @Test
    void testUint16ArrayToString039() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    arr.set(0, -1);
    String result = String.valueOf(arr);
    assertEqual("65535", result);
    }

    @Test
    void testUint16ArrayToString040() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(42);
    String result = String.valueOf(arr);
    assertEqual("42,42,42", result);
    }

    @Test
    void testUint16ArrayToString041() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(0);
    String result = String.valueOf(arr);
    assertEqual("0,0,0,0", result);
    }

    @Test
    void testUint16ArrayToString042() {
    Uint16Array arr = new Uint16Array(2);
    arr.fill(65535);
    String result = String.valueOf(arr);
    assertEqual("65535,65535", result);
    }

    @Test
    void testUint16ArrayToString043() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.fill(99, 1, 3);
    String result = String.valueOf(arr);
    assertEqual("1,99,99,4", result);
    }

    @Test
    void testUint16ArrayToString044() {
    Uint16Array arr = new Uint16Array(3);
    arr.fill(65536);
    String result = String.valueOf(arr);
    assertEqual("0,0,0", result);
    }

    @Test
    void testUint16ArrayToString045() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(new Uint16Array(new int[] {10, 20, 30}));
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    @Test
    void testUint16ArrayToString046() {
    Uint16Array src = Uint16Array.of(100, 200, 300);
    Uint16Array dst = new Uint16Array(3);
    dst.set(src);
    String result = String.valueOf(dst);
    assertEqual("100,200,300", result);
    }

    @Test
    void testUint16ArrayToString047() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0, 0});
    arr.set(new Uint16Array(new int[] {99, 99}), 1);
    String result = String.valueOf(arr);
    assertEqual("0,99,99,0", result);
    }

    @Test
    void testUint16ArrayToString048() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reverse();
    String result = String.valueOf(arr);
    assertEqual("3,2,1", result);
    }

    @Test
    void testUint16ArrayToString049() {
    Uint16Array arr = new Uint16Array(new int[] {3, 1, 2});
    arr.sort();
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    @Test
    void testUint16ArrayToString050() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    String result = String.valueOf(arr);
    assertEqual("4,5,3,4,5", result);
    }

    @Test
    void testUint16ArrayToString051() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array mapped = arr.map((v) -> v * 10);
    String result = String.valueOf(mapped);
    assertEqual("10,20,30", result);
    }

    @Test
    void testUint16ArrayToString052() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array filtered = arr.filter((v) -> v > 2);
    String result = String.valueOf(filtered);
    assertEqual("3,4,5", result);
    }

    @Test
    void testUint16ArrayToString053() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    assertEqual("42", String.valueOf(arr));
    }

    @Test
    void testUint16ArrayToString054() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    assertEqual("0,32768,65535", String.valueOf(arr));
    }

    @Test
    void testUint16ArrayToString055() {
    Uint16Array arr = new Uint16Array(4);
    arr.fill(7);
    assertEqual("7,7,7,7", String.valueOf(arr));
    }

    @Test
    void testUint16ArrayToString056() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(new Uint16Array(new int[] {5, 10, 15}));
    assertEqual("5,10,15", String.valueOf(arr));
    }

    @Test
    void testUint16ArrayToString057() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = String.valueOf(arr);
    assertEqual("1,2,3", result);
    }

    @Test
    void testUint16ArrayToString058() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    String result = String.valueOf(arr);
    assertEqual("10,20,30", result);
    }

    @Test
    void testUint16ArrayToString059() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array dst = new Uint16Array(src);
    assertEqual("1,2,3", String.valueOf(dst));
    }

    @Test
    void testUint16ArrayToString060() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 256);
    arr.set(1, 257);
    String result = String.valueOf(arr);
    assertEqual("256,257", result);
    }

    @Test
    void testUint16ArrayToString061() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array full = new Uint16Array(buf);
    full.set(0, 10);
    full.set(1, 20);
    full.set(2, 30);
    Uint16Array view = new Uint16Array(buf, 2);
    String result = String.valueOf(view);
    assertEqual("20,30", result);
    }

    @Test
    void testUint16ArrayToString062() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array full = new Uint16Array(buf);
    full.set(0, 100);
    full.set(1, 200);
    full.set(2, 300);
    full.set(3, 400);
    Uint16Array view = new Uint16Array(buf, 2, 2);
    String result = String.valueOf(view);
    assertEqual("200,300", result);
    }

    @Test
    void testUint16ArrayToString063() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3, 4);
    Uint16Array sub = arr.subarray(1, 4);
    String result = String.valueOf(sub);
    assertEqual("1,2,3", result);
    }

    @Test
    void testUint16ArrayToString064() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sliced = arr.slice(1, 3);
    String result = String.valueOf(sliced);
    assertEqual("20,30", result);
    }

    @Test
    void testUint16ArrayToString065() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    Uint16Array sliced = arr.slice();
    assertEqual("5,10,15", String.valueOf(sliced));
    }

    @Test
    void testUint16ArrayToString066() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array view1 = new Uint16Array(buf);
    Uint16Array view2 = new Uint16Array(buf);
    view1.set(0, 12345);
    String result = String.valueOf(view2);
    assertEqual("12345,0", result);
    }

    @Test
    void testUint16ArrayToString067() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array full = new Uint16Array(buf);
    full.set(0, 1);
    full.set(1, 2);
    full.set(2, 3);
    Uint16Array sub = new Uint16Array(buf, 2, 2);
    sub.set(0, 99);
    String result = String.valueOf(full);
    assertEqual("1,99,3", result);
    }

    @Test
    void testUint16ArrayToString068() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array sub = arr.subarray(1, 3);
    sub.set(0, 77);
    String result = String.valueOf(arr);
    assertEqual("10,77,30,40", result);
    }

    @Test
    void testUint16ArrayToString069() {
    Uint16Array arr = new Uint16Array(10);
    for (int i = 0; i < 10; i++) {
    arr.set(i, i * 1000);
    }
    String result = String.valueOf(arr);
    assertEqual("0,1000,2000,3000,4000,5000,6000,7000,8000,9000", result);
    }

    @Test
    void testUint16ArrayToString070() {
    Uint16Array arr = new Uint16Array(20);
    arr.fill(42);
    String result = String.valueOf(arr);
    assertEqual("42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42", result);
    }

    @Test
    void testUint16ArrayToString071() {
    Uint16Array a = Uint16Array.of(65535);
    assertEqual("65535", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString072() {
    Uint16Array a = Uint16Array.of(7, 0, 70, 0, 700);
    assertEqual("7,0,70,0,700", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString073() {
    Uint16Array a = new Uint16Array(new double[] {-1, 65536, 65537, 3.9});
    assertEqual("65535,0,1,3", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString074() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(90, 10, 20, 30, 80));
    Uint16Array v = new Uint16Array(b, 2, 3);
    assertEqual("10,20,30", String.valueOf(v));
    }

    @Test
    void testUint16ArrayToString075() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    a.set(1, 22);
    assertEqual("1,22,3", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString076() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array a = new Uint16Array(b);
    Uint16Array alias = new Uint16Array(b, 2, 1);
    a.set(Uint16Array.of(4, 5, 6));
    alias.set(0, 55);
    assertEqual("4,55,6", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString077() {
    Uint16Array a = Uint16Array.of(9, 9, 9, 9);
    assertEqual("9,9,9,9", String.valueOf(a));
    }

    @Test
    void testUint16ArrayToString078() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array v = a.subarray(1, 4);
    assertEqual("2,3,4", String.valueOf(v));
    }

    @Test
    void testUint16ArrayToString079() {
    Uint16Array a = Uint16Array.of(32767, 32768, 65535);
    assertEqual("32767,32768,65535", String.valueOf(a));
    }
}
