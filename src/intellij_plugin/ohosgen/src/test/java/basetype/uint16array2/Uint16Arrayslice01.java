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
 * Uint16Arrayslice01 —— Int16Array 方法族测试。
 */
public class Uint16Arrayslice01 extends BasTest {

    @Test
    void testUint16ArraySlicePart1001() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice();
    assertEqual(6, r.length());
    assertNotEqual(src, r);
    }

    @Test
    void testUint16ArraySlicePart1002() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(1);
    assertEqual(20, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1003() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 2);
    assertEqual(2, r.length());
    }

    @Test
    void testUint16ArraySlicePart1004() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0);
    assertEqual(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1005() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(2);
    assertEqual(30, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1006() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(5);
    assertEqual(60, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1007() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(6);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1008() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(7);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1009() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-1);
    assertEqual(60, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1010() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-2);
    assertEqual(50, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1011() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-6);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1012() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-7);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1013() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-0);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1014() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1015() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(Double.POSITIVE_INFINITY);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1016() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((-Double.POSITIVE_INFINITY));
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1017() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((int) (3.14));
    assertEqual(40, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1018() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((int) (-3.14));
    assertEqual(40, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1019() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((int) (65535.9));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1020() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0x10);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1021() {
    Uint16Array src = Uint16Array.of(47001, 8, 321, 65530, 92, 14007, 3);
    Uint16Array r = src.slice(0b10);
    assertEqual(321, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1022() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(010);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1023() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((int) (1e0));
    assertEqual(20, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1024() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice((int) (0.0));
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1025() {
    Uint16Array src = Uint16Array.of(17, 60999, 404, 2, 33008);
    Uint16Array r = src.slice(0x1);
    assertEqual(60999, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1026() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-0x10);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1027() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1028() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 1);
    assertEqual(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1029() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 2);
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1030() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 5);
    assertEqual(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart1031() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 6);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1032() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 7);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1033() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, -1);
    assertEqual(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart1034() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, -2);
    assertEqual(40, r.get(3));
    }

    @Test
    void testUint16ArraySlicePart1035() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, -6);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1036() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, -7);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1037() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1038() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, Double.POSITIVE_INFINITY);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1039() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, (-Double.POSITIVE_INFINITY));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1040() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, (int) (3.14));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart1041() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, (int) (-3.14));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart1042() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 0x10);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1043() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 0b10);
    assertEqual(20, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1044() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, 010);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1045() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, (int) (1e0));
    assertEqual(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1046() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, (int) (0.0));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1047() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(2, 4);
    assertEqual(30, r.get(0));
    assertEqual(40, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1048() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(1, 3);
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1049() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(4, 2);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1050() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-3, -1);
    assertEqual(40, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1051() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-4, -2);
    assertEqual(30, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1052() {
    Uint16Array src = Uint16Array.of(50001, 6, 712, 40960, 93, 1205, 65500);
    Uint16Array r = src.slice(0, 0x5);
    assertEqual(93, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart1053() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0b1, 0x4);
    assertEqual(20, r.get(0));
    assertEqual(40, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart1054() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-010, 010);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1055() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0, Double.POSITIVE_INFINITY);
    assertEqual(6, r.length());
    }

    @Test
    void testUint16ArraySlicePart1056() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(Double.POSITIVE_INFINITY, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1057() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(1, (int) (1e0));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1058() {
    Uint16Array empty = new Uint16Array();
    Uint16Array r = empty.slice();
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1059() {
    Uint16Array empty = new Uint16Array();
    Uint16Array r = empty.slice(0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1060() {
    Uint16Array empty = new Uint16Array();
    Uint16Array r = empty.slice(0, 2);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1061() {
    Uint16Array empty = new Uint16Array();
    Uint16Array r = empty.slice(-1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1062() {
    Uint16Array empty = new Uint16Array();
    Uint16Array r = empty.slice(0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1063() {
    Uint16Array single = Uint16Array.of(5);
    Uint16Array r = single.slice();
    assertEqual(5, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1064() {
    Uint16Array single = Uint16Array.of(5);
    Uint16Array r = single.slice(0);
    assertEqual(5, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1065() {
    Uint16Array single = Uint16Array.of(5);
    Uint16Array r = single.slice(1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1066() {
    Uint16Array single = Uint16Array.of(5);
    Uint16Array r = single.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1067() {
    Uint16Array single = Uint16Array.of(5);
    Uint16Array r = single.slice(-1);
    assertEqual(5, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1068() {
    Uint16Array large = new Uint16Array(100);
    Uint16Array r = large.slice();
    assertEqual(100, r.length());
    }

    @Test
    void testUint16ArraySlicePart1069() {
    Uint16Array large = new Uint16Array(100);
    Uint16Array r = large.slice(50);
    assertEqual(50, r.length());
    }

    @Test
    void testUint16ArraySlicePart1070() {
    Uint16Array large = new Uint16Array(100);
    Uint16Array r = large.slice(90);
    assertEqual(10, r.length());
    }

    @Test
    void testUint16ArraySlicePart1071() {
    Uint16Array large = new Uint16Array(100);
    Uint16Array r = large.slice(0, 50);
    assertEqual(50, r.length());
    }

    @Test
    void testUint16ArraySlicePart1072() {
    Uint16Array large = new Uint16Array(100);
    Uint16Array r = large.slice(-10);
    assertEqual(10, r.length());
    }

    @Test
    void testUint16ArraySlicePart1073() {
    Uint16Array src2 = Uint16Array.of(0, 65535, 32768, 1);
    Uint16Array r = src2.slice(1, 3);
    assertEqual(65535, r.get(0));
    assertEqual(32768, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1074() {
    Uint16Array src2 = Uint16Array.of(0, 65535, 32768, 1);
    Uint16Array r = src2.slice(-2);
    assertEqual(32768, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart1075() {
    Uint16Array same = Uint16Array.of(42, 42, 42, 42, 42);
    Uint16Array r = same.slice(1, 3);
    assertEqual(2, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart1076() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(3);
    assertEqual("40,50,60", r.join(","));
    }

    @Test
    void testUint16ArraySlicePart1077() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(-3);
    assertEqual("40,50,60", r.join(","));
    }

    @Test
    void testUint16ArraySlicePart1078() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(65535);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart1079() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50, 60);
    Uint16Array r = src.slice(0b10);
    assertEqual(30, r.get(0));
    }
}
