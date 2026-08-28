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
import basetype.common.Error;
import basetype.common.Uint16Array;
import basetype.common.DataView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arraypropertytwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraypropertytwo extends BasTest {

    @Test
    void testUint16Arraypropertytwo001() {
    Uint16Array arr = new Uint16Array(0.0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo002() {
    Uint16Array arr = new Uint16Array(3.14);
    assertEqual(3, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo003() {
    Uint16Array arr = new Uint16Array(3.14);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo004() {
    Uint16Array arr = new Uint16Array(2.9);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo005() {
    Uint16Array arr = new Uint16Array(2.9);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo006() {
    Uint16Array arr = new Uint16Array(0x10);
    assertEqual(16, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo007() {
    Uint16Array arr = new Uint16Array(0x10);
    assertEqual(32, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo008() {
    Uint16Array arr = new Uint16Array(010);
    assertEqual(8, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo009() {
    Uint16Array arr = new Uint16Array(0b1010);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo010() {
    Uint16Array arr = new Uint16Array(1e1);
    assertEqual(10, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo011() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo012() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo013() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 4);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo014() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 6);
    assertEqual(6, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo015() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0.0);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo016() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2.9);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo017() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 4.0);
    assertEqual(4, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo020() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf);
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo021() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Uint16Array arr = new Uint16Array(buf, 0x10);
    assertEqual(16, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 0);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 1);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo025() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 1);
    assertEqual(2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo029() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 4);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo030() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 0, 4);
    assertEqual(8, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo031() {
    int[] src = new int[] {};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo032() {
    int[] src = new int[] {};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo033() {
    int[] src = new int[] {5};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(1, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo034() {
    int[] src = new int[] {5};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo035() {
    int[] src = new int[] {0, 0xFFFF};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(2, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo036() {
    int[] src = new int[] {0, 0xFFFF};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo037() {
    int[] src = new int[] {1, 2, 3, 4, 5};
    Uint16Array arr = new Uint16Array(src);
    assertEqual(0, arr.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo038() {
    Uint16Array arr = new Uint16Array(new ArrayBuffer(0));
    assertEqual(0, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo039() {
    Uint16Array arr = new Uint16Array(new ArrayBuffer(10));
    assertEqual(5, arr.length());
    }

    @Test
    void testUint16Arraypropertytwo040() {
    Uint16Array arr = new Uint16Array(15);
    assertEqual(arr.length() * 2, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo041() {
    Uint16Array arr = new Uint16Array(3);
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertytwo042() {
    Uint16Array a = new Uint16Array();
    Uint16Array b = new Uint16Array(5);
    Uint16Array c = Uint16Array.of(1, 2);
    assertEqual("Uint16Array", a.getClass().getSimpleName());
    assertEqual("Uint16Array", b.getClass().getSimpleName());
    assertEqual("Uint16Array", c.getClass().getSimpleName());
    }

    @Test
    void testUint16Arraypropertytwo043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf, 2, 2);
    assertEqual(8, arr.buffer().byteLength());
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array v1 = new Uint16Array(buf, 0, 2);
    Uint16Array v2 = new Uint16Array(buf, 4, 2);
    assertEqual(v2.buffer(), v1.buffer());
    }

    @Test
    void testUint16Arraypropertytwo045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array v1 = new Uint16Array(buf, 0, 2);
    Uint16Array v2 = new Uint16Array(buf, 4, 2);
    assertEqual(0, v1.byteOffset());
    assertEqual(4, v2.byteOffset());
    }

    @Test
    void testUint16Arraypropertytwo046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array v1 = new Uint16Array(buf, 0, 3);
    Uint16Array v2 = new Uint16Array(buf, 6, 1);
    assertEqual(6, v1.byteLength());
    assertEqual(2, v2.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo047() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array v1 = new Uint16Array(buf, 0, 3);
    Uint16Array v2 = new Uint16Array(buf, 6, 1);
    assertEqual(3, v1.length());
    assertEqual(1, v2.length());
    }

    @Test
    void testUint16Arraypropertytwo048() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint16Array arr = new Uint16Array(buf, 0, 2);
    DataView view = new DataView(buf);
    view.setUint16(0, 0x1234, true);
    assertEqual(0x1234, arr.get(0));
    }

    @Test
    void testUint16Arraypropertytwo049() {
    Uint16Array ofArr = Uint16Array.of(1, 2);
    Uint16Array bufArr = new Uint16Array(new ArrayBuffer(4));
    assertNotEqual(bufArr.buffer(), ofArr.buffer());
    }

    @Test
    void testUint16Arraypropertytwo050() {
    Uint16Array fromArr = Uint16Array.from(new int[] {1, 2});
    Uint16Array manualArr = new Uint16Array(2);
    assertNotEqual(manualArr.buffer(), fromArr.buffer());
    }

    @Test
    void testUint16Arraypropertytwo051() {
    Uint16Array a = new Uint16Array(new int[] {-1, -2, 65536, 65537});
    assertEqual("65535,65534,0,1", a.join(","));
    assertEqual(8, a.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo052() {
    Uint16Array a = new Uint16Array(new double[] {1.9, 2.1, -0.9, -2.9});
    assertEqual("1,2,0,65534", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo053() {
    Uint16Array a = new Uint16Array(new double[] {Double.NaN, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY});
    assertEqual("0,0,0", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo054() {
    Uint16Array a = Uint16Array.of(0, 1, 32768, 65535);
    assertEqual("0,1,32768,65535", a.join(","));
    assertEqual(4, a.length());
    }

    @Test
    void testUint16Arraypropertytwo055() {
    Uint16Array a = Uint16Array.of(-1, 65536, 3.9);
    assertEqual("65535,0,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo056() {
    int[] s = new int[] {2, 4, 8};
    Uint16Array a = Uint16Array.from(s);
    assertEqual("2,4,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo057() {
    double[] s = new double[] {-1.2, 65537.8, 7.9};
    Uint16Array a = Uint16Array.from(s);
    assertEqual("65535,1,7", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo058() {
    Uint16Array s = Uint16Array.of(1, 2, 3);
    Uint16Array a = Uint16Array.from(s);
    a.set(0, 9);
    assertEqual("1,2,3", s.join(","));
    assertEqual("9,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo059() {
    List<Integer> s = java.util.Arrays.asList(10, 20, 30);
    Uint16Array a = Uint16Array.from(s, (v, i) -> v + i);
    assertEqual("10,21,32", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo060() {
    List<Integer> s = java.util.Arrays.asList(1, 2, 3);
    Uint16Array a = Uint16Array.from(s, (v, i) -> i == 0 ? -1 : 65536 + v);
    assertEqual("65535,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo061() {
    List<Integer> s = new ArrayList<>();
    Uint16Array a = Uint16Array.from(s);
    assertEqual(0, a.length());
    assertEqual(0, a.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo062() {
    Uint16Array a = Uint16Array.of(65535);
    assertEqual(65535, a.get(0));
    assertEqual(1, a.length());
    }

    @Test
    void testUint16Arraypropertytwo063() {
    Uint16Array a = Uint16Array.of();
    assertEqual(0, a.length());
    assertEqual("", String.valueOf(a));
    }

    @Test
    void testUint16Arraypropertytwo064() {
    List<Integer> s = java.util.Arrays.asList(1, 2, 3);
    Uint16Array a = Uint16Array.from(s);
    s.set(1, 22);
    assertEqual("1,2,3", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo065() {
    int[] s = new int[] {4, 5, 6};
    Uint16Array a = new Uint16Array(s);
    s[2] = 66;
    assertEqual("4,5,6", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo066() {
    List<Integer> s = java.util.Arrays.asList(1, 2, 3, 4);
    int[] calls = {0};
    Uint16Array a = Uint16Array.from(s, (v, i) -> {
        calls[0]++;
        return v;
    });
    assertEqual("1,2,3,4", a.join(","));
    assertEqual(4, calls[0]);
    }

    @Test
    void testUint16Arraypropertytwo067() {
    List<Integer> source = java.util.Arrays.asList(9, 9, 9);
    int[] order = {0};
    Uint16Array a = Uint16Array.from(source, (value, index) -> {
        order[0] = order[0] * 10 + index;
        return index;
    });
    assertEqual("0,1,2", a.join(","));
    assertEqual(12, order[0]);
    }

    @Test
    void testUint16Arraypropertytwo068() {
    List<Integer> s = java.util.Arrays.asList(1, 2, 3);
    try {
    Uint16Array a = Uint16Array.from(s, (v, i) -> {
        if (i == 1) {
            return BasTest.throwTestError("map stop");
        }
        return v;
    });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("map stop", e.getMessage());
    }
    }

    @Test
    void testUint16Arraypropertytwo069() {
    Uint16Array a = new Uint16Array(new int[] {131072, 131073, -131073});
    assertEqual("0,1,65535", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo070() {
    Uint16Array a = Uint16Array.from(new int[] {10, 2, 30});
    assertEqual("10,2,30", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo071() {
    Uint16Array a = Uint16Array.of(30, 2, 10);
    assertEqual("30,2,10", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo072() {
    Uint16Array a = new Uint16Array(new double[] {1.1, 2.2, 3.3, 4.4, 5.5});
    assertEqual("1,2,3,4,5", a.join(","));
    assertEqual(10, a.byteLength());
    }

    @Test
    void testUint16Arraypropertytwo073() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(3);
    s.add(1);
    s.add(2);
    Uint16Array a = Uint16Array.from(s);
    assertEqual("3,1,2", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo074() {
    Uint16Array a = Uint16Array.from(new int[] {7, 7, 8, 8});
    assertEqual("7,7,8,8", a.join(","));
    }

    @Test
    void testUint16Arraypropertytwo075() {
    Uint16Array a = Uint16Array.of(5, 5, 5);
    assertEqual("5,5,5", a.join(","));
    }
}
