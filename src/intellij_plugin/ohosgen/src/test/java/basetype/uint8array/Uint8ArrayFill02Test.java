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

package basetype.uint8array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.SyntaxError;
import basetype.common.URIError;
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
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFill02Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayFill02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0010
     * @tc.name testUint8ArrayFill001
     * @tc.desc Verify fill with only value parameter fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill001() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0020
     * @tc.name testUint8ArrayFill002
     * @tc.desc Verify fill with value and start parameters fills from start index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill002() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5, 1);
    assertEqual(5, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0030
     * @tc.name testUint8ArrayFill003
     * @tc.desc Verify fill with value, start and end parameters fills specified range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill003() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(5, 1, 3);
    assertEqual(5, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0040
     * @tc.name testUint8ArrayFill004
     * @tc.desc Verify fill with value=0 sets minimum unsigned value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill004() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0050
     * @tc.name testUint8ArrayFill005
     * @tc.desc Verify fill with value=1 sets smallest positive integer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill005() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0060
     * @tc.name testUint8ArrayFill006
     * @tc.desc Verify fill with value=2 sets small positive integer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill006() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(2);
    assertEqual(2, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0070
     * @tc.name testUint8ArrayFill007
     * @tc.desc Verify fill with value=127 sets middle boundary value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill007() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(127);
    assertEqual(127, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0080
     * @tc.name testUint8ArrayFill008
     * @tc.desc Verify fill with value=128 sets upper middle boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill008() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(128);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0090
     * @tc.name testUint8ArrayFill009
     * @tc.desc Verify fill with value=254 sets value before maximum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill009() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(254);
    assertEqual(254, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0100
     * @tc.name testUint8ArrayFill010
     * @tc.desc Verify fill with value=255 sets maximum unsigned value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill010() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(255);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0110
     * @tc.name testUint8ArrayFill011
     * @tc.desc Verify fill with value=256 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill011() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(256);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0120
     * @tc.name testUint8ArrayFill012
     * @tc.desc Verify fill with value=257 truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill012() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(257);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0130
     * @tc.name testUint8ArrayFill013
     * @tc.desc Verify fill with value=511 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill013() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(511);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0140
     * @tc.name testUint8ArrayFill014
     * @tc.desc Verify fill with value=512 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill014() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(512);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0150
     * @tc.name testUint8ArrayFill015
     * @tc.desc Verify fill with value=1000 truncates to 232
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill015() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1000);
    assertEqual(232, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0160
     * @tc.name testUint8ArrayFill016
     * @tc.desc Verify fill with value=65535 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill016() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(65535);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0170
     * @tc.name testUint8ArrayFill017
     * @tc.desc Verify fill with value=65536 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill017() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(65536);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0180
     * @tc.name testUint8ArrayFill018
     * @tc.desc Verify fill with value=999999 truncates to 63
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill018() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(999999);
    assertEqual(63, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0190
     * @tc.name testUint8ArrayFill019
     * @tc.desc Verify fill with value=-1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill019() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-1);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0200
     * @tc.name testUint8ArrayFill020
     * @tc.desc Verify fill with value=-2 wraps to 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill020() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-2);
    assertEqual(254, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0210
     * @tc.name testUint8ArrayFill021
     * @tc.desc Verify fill with value=-127 wraps to 129
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill021() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-127);
    assertEqual(129, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0220
     * @tc.name testUint8ArrayFill022
     * @tc.desc Verify fill with value=-128 wraps to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill022() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-128);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0230
     * @tc.name testUint8ArrayFill023
     * @tc.desc Verify fill with value=-255 wraps to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill023() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-255);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0240
     * @tc.name testUint8ArrayFill024
     * @tc.desc Verify fill with value=-256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill024() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-256);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0250
     * @tc.name testUint8ArrayFill025
     * @tc.desc Verify fill with value=0.0 sets zero value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill025() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0.0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0260
     * @tc.name testUint8ArrayFill026
     * @tc.desc Verify fill with value=0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill026() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0270
     * @tc.name testUint8ArrayFill027
     * @tc.desc Verify fill with value=1.5 truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill027() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1.5);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0280
     * @tc.name testUint8ArrayFill028
     * @tc.desc Verify fill with value=255.9 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill028() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(255.9);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0290
     * @tc.name testUint8ArrayFill029
     * @tc.desc Verify fill with value=256.1 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill029() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(256.1);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0300
     * @tc.name testUint8ArrayFill030
     * @tc.desc Verify fill with value=-0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill030() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0310
     * @tc.name testUint8ArrayFill031
     * @tc.desc Verify fill with value=-1.5 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill031() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-1.5);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0320
     * @tc.name testUint8ArrayFill032
     * @tc.desc Verify fill with value=NaN converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill032() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(Double.NaN);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0330
     * @tc.name testUint8ArrayFill033
     * @tc.desc Verify fill with value=Infinity converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill033() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0340
     * @tc.name testUint8ArrayFill034
     * @tc.desc Verify fill with value=-Infinity converts to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill034() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(Double.NEGATIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0350
     * @tc.name testUint8ArrayFill035
     * @tc.desc Verify fill with value=0x00 sets zero value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill035() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0x00);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0360
     * @tc.name testUint8ArrayFill036
     * @tc.desc Verify fill with value=0x80 sets 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill036() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0x80);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0370
     * @tc.name testUint8ArrayFill037
     * @tc.desc Verify fill with value=3 sets small positive integer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill037() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(3);
    assertEqual(3, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0380
     * @tc.name testUint8ArrayFill038
     * @tc.desc Verify fill with value=0xFF sets 255 maximum value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill038() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0xFF);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0390
     * @tc.name testUint8ArrayFill039
     * @tc.desc Verify fill with value=0x100 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill039() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0x100);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0400
     * @tc.name testUint8ArrayFill040
     * @tc.desc Verify fill with value=0x1FF truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill040() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0x1FF);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0410
     * @tc.name testUint8ArrayFill041
     * @tc.desc Verify fill with value=0b10000000 sets 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill041() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0b10000000);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0420
     * @tc.name testUint8ArrayFill042
     * @tc.desc Verify fill with value=0b11111111 sets 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill042() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0b11111111);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0430
     * @tc.name testUint8ArrayFill043
     * @tc.desc Verify fill with value=0o200 sets 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill043() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0200);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0440
     * @tc.name testUint8ArrayFill044
     * @tc.desc Verify fill with value=0o377 sets 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill044() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(0377);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0450
     * @tc.name testUint8ArrayFill045
     * @tc.desc Verify fill with value=1e2 sets 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill045() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1e2);
    assertEqual(100, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0460
     * @tc.name testUint8ArrayFill046
     * @tc.desc Verify fill with value=1e3 truncates to 232
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill046() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1e3);
    assertEqual(232, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0470
     * @tc.name testUint8ArrayFill047
     * @tc.desc Verify fill with value=1e5 truncates to 160
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill047() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1e5);
    assertEqual(160, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0480
     * @tc.name testUint8ArrayFill048
     * @tc.desc Verify fill with value=1e10 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill048() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(1e10);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0490
     * @tc.name testUint8ArrayFill049
     * @tc.desc Verify fill with value=-3 wraps to 253
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill049() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-3);
    assertEqual(253, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0500
     * @tc.name testUint8ArrayFill050
     * @tc.desc Verify fill with value=-999 wraps to 25
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill050() {
    Uint8Array arr = new Uint8Array(1);
    arr.fill(-999);
    assertEqual(25, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0510
     * @tc.name testUint8ArrayFill051
     * @tc.desc Verify fill with start omitted defaults to 0 filling entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill051() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0520
     * @tc.name testUint8ArrayFill052
     * @tc.desc Verify fill with start=0 fills from beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill052() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0530
     * @tc.name testUint8ArrayFill053
     * @tc.desc Verify fill with start=1 fills from second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill053() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 1);
    assertEqual(7, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0540
     * @tc.name testUint8ArrayFill054
     * @tc.desc Verify fill with start=2 fills from third element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill054() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 2);
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0550
     * @tc.name testUint8ArrayFill055
     * @tc.desc Verify fill with start=length does nothing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill055() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0560
     * @tc.name testUint8ArrayFill056
     * @tc.desc Verify fill with start=length+1 does nothing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill056() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0570
     * @tc.name testUint8ArrayFill057
     * @tc.desc Verify fill with start=-1 fills from last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill057() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, -1);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0580
     * @tc.name testUint8ArrayFill058
     * @tc.desc Verify fill with start=-2 fills from second to last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill058() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, -2);
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0590
     * @tc.name testUint8ArrayFill059
     * @tc.desc Verify fill with start=-length fills from beginning
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill059() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, -4);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0600
     * @tc.name testUint8ArrayFill060
     * @tc.desc Verify fill with start=-length-1 clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill060() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, -5);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0610
     * @tc.name testUint8ArrayFill061
     * @tc.desc Verify fill with start=100 does nothing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill061() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 100);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0620
     * @tc.name testUint8ArrayFill062
     * @tc.desc Verify fill with start=-100 clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill062() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, -100);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0630
     * @tc.name testUint8ArrayFill063
     * @tc.desc Verify fill with end omitted fills to end of array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill063() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 2);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0640
     * @tc.name testUint8ArrayFill064
     * @tc.desc Verify fill with end=1 fills only first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill064() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 1);
    assertEqual(7, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0650
     * @tc.name testUint8ArrayFill065
     * @tc.desc Verify fill with end=2 fills first two elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill065() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 2);
    assertEqual(7, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0660
     * @tc.name testUint8ArrayFill066
     * @tc.desc Verify fill with end=length-1 fills to second to last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill066() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 3);
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0670
     * @tc.name testUint8ArrayFill067
     * @tc.desc Verify fill with end=length fills entire array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill067() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 4);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0680
     * @tc.name testUint8ArrayFill068
     * @tc.desc Verify fill with end=length+1 clamps to length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill068() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 5);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0690
     * @tc.name testUint8ArrayFill069
     * @tc.desc Verify fill with end=0 creates empty range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill069() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0700
     * @tc.name testUint8ArrayFill070
     * @tc.desc Verify fill with end=-1 excludes last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill070() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, -1);
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0710
     * @tc.name testUint8ArrayFill071
     * @tc.desc Verify fill with end=-2 excludes last two elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill071() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, -2);
    assertEqual(7, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0720
     * @tc.name testUint8ArrayFill072
     * @tc.desc Verify fill with end=-length creates empty range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill072() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, -4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0730
     * @tc.name testUint8ArrayFill073
     * @tc.desc Verify fill with end=-length-1 clamps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill073() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, -5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0740
     * @tc.name testUint8ArrayFill074
     * @tc.desc Verify fill with end=100 clamps to length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill074() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(7, 0, 100);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0750
     * @tc.name testUint8ArrayFill075
     * @tc.desc Verify fill with start=-2 fills last two elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill075() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, -2);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0760
     * @tc.name testUint8ArrayFill076
     * @tc.desc Verify fill with start=0 end=-1 fills all except last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill076() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, 0, -1);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0770
     * @tc.name testUint8ArrayFill077
     * @tc.desc Verify fill with start=1 end=-1 fills middle excluding first and last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill077() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, 1, -1);
    assertEqual(7, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0780
     * @tc.name testUint8ArrayFill078
     * @tc.desc Verify fill with start=-3 end=-1 fills third to second to last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill078() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, -3, -1);
    assertEqual(7, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0790
     * @tc.name testUint8ArrayFill079
     * @tc.desc Verify fill with start=-2 end=-1 fills single element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill079() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, -2, -1);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0800
     * @tc.name testUint8ArrayFill080
     * @tc.desc Verify fill with start=-length end=-1 fills all except last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill080() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(7, -5, -1);
    assertEqual(7, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0810
     * @tc.name testUint8ArrayFill081
     * @tc.desc Verify fill returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill081() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(5);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0820
     * @tc.name testUint8ArrayFill082
     * @tc.desc Verify fill with start and end returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill082() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(5, 1, 2);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0830
     * @tc.name testUint8ArrayFill083
     * @tc.desc Verify fill with negative start returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill083() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(5, -1);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0840
     * @tc.name testUint8ArrayFill084
     * @tc.desc Verify fill with negative end returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill084() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(5, 0, -1);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0850
     * @tc.name testUint8ArrayFill085
     * @tc.desc Verify fill with both negative start and end returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill085() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(5, -2, -1);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0860
     * @tc.name testUint8ArrayFill086
     * @tc.desc Verify fill with overflow value returns the same array reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill086() {
    Uint8Array arr = new Uint8Array(3);
    Uint8Array result = arr.fill(256);
    assertEqual(arr, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0870
     * @tc.name testUint8ArrayFill087
     * @tc.desc Verify fill with value=256 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill087() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(256);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0880
     * @tc.name testUint8ArrayFill088
     * @tc.desc Verify fill with value=257 truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill088() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(257);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0890
     * @tc.name testUint8ArrayFill089
     * @tc.desc Verify fill with value=511 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill089() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(511);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0900
     * @tc.name testUint8ArrayFill090
     * @tc.desc Verify fill with value=512 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill090() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(512);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0910
     * @tc.name testUint8ArrayFill091
     * @tc.desc Verify fill with value=1000 truncates to 232
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill091() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(1000);
    assertEqual(232, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0920
     * @tc.name testUint8ArrayFill092
     * @tc.desc Verify fill with value=65535 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill092() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(65535);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0930
     * @tc.name testUint8ArrayFill093
     * @tc.desc Verify fill with value=65536 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill093() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(65536);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0940
     * @tc.name testUint8ArrayFill094
     * @tc.desc Verify fill with value=999999 truncates to 63
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill094() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(999999);
    assertEqual(63, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0950
     * @tc.name testUint8ArrayFill095
     * @tc.desc Verify fill with value=-1 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill095() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-1);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0960
     * @tc.name testUint8ArrayFill096
     * @tc.desc Verify fill with value=-2 wraps to 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill096() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-2);
    assertEqual(254, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0970
     * @tc.name testUint8ArrayFill097
     * @tc.desc Verify fill with value=-127 wraps to 129
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill097() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-127);
    assertEqual(129, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0980
     * @tc.name testUint8ArrayFill098
     * @tc.desc Verify fill with value=-128 wraps to 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill098() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-128);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_0990
     * @tc.name testUint8ArrayFill099
     * @tc.desc Verify fill with value=-255 wraps to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill099() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-255);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1000
     * @tc.name testUint8ArrayFill100
     * @tc.desc Verify fill with value=-256 wraps to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill100() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-256);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1010
     * @tc.name testUint8ArrayFill101
     * @tc.desc Verify fill with value=0.0 sets zero value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill101() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0.0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1020
     * @tc.name testUint8ArrayFill102
     * @tc.desc Verify fill with value=0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill102() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1030
     * @tc.name testUint8ArrayFill103
     * @tc.desc Verify fill with value=1.5 truncates to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill103() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(1.5);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1040
     * @tc.name testUint8ArrayFill104
     * @tc.desc Verify fill with value=255.9 truncates to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill104() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(255.9);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1050
     * @tc.name testUint8ArrayFill105
     * @tc.desc Verify fill with value=256.1 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill105() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(256.1);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1060
     * @tc.name testUint8ArrayFill106
     * @tc.desc Verify fill with value=-0.5 truncates to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill106() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-0.5);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1070
     * @tc.name testUint8ArrayFill107
     * @tc.desc Verify fill with value=-1.5 wraps to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill107() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(-1.5);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1080
     * @tc.name testUint8ArrayFill108
     * @tc.desc Verify fill after fill overwrites all elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill108() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.fill(10);
    assertEqual(10, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1090
     * @tc.name testUint8ArrayFill109
     * @tc.desc Verify fill with start and end after fill overwrites specified range
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill109() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(5);
    arr.fill(10, 1, 3);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1100
     * @tc.name testUint8ArrayFill110
     * @tc.desc Verify fill with negative start after fill overwrites from end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill110() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(5);
    arr.fill(10, -2);
    assertEqual(10, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1110
     * @tc.name testUint8ArrayFill111
     * @tc.desc Verify fill with negative end after fill overwrites except last
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill111() {
    Uint8Array arr = new Uint8Array(4);
    arr.fill(5);
    arr.fill(10, 0, -1);
    assertEqual(5, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1120
     * @tc.name testUint8ArrayFill112
     * @tc.desc Verify fill with both negative start and end after fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill112() {
    Uint8Array arr = new Uint8Array(5);
    arr.fill(5);
    arr.fill(10, -3, -1);
    assertEqual(10, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1130
     * @tc.name testUint8ArrayFill113
     * @tc.desc Verify fill with overflow value after fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill113() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.fill(256);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1140
     * @tc.name testUint8ArrayFill114
     * @tc.desc Verify fill with negative value after fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill114() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.fill(-1);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FILL02_1150
     * @tc.name testUint8ArrayFill115
     * @tc.desc Verify fill with float value after fill
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFill115() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(5);
    arr.fill(1.5);
    assertEqual(1, arr.get(0));
    }
}
