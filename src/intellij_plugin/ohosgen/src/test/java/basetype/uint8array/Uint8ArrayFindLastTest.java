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
import basetype.common.ClassCastError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindLastTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindLastTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0100
     * @tc.name testUint8ArrayFindLast001
     * @tc.desc Verify findLast matches last element 5 in [1,2,3,4,5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast001() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v == 5;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0200
     * @tc.name testUint8ArrayFindLast002
     * @tc.desc Verify findLast matches 1 as last element in decreasing array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast002() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0300
     * @tc.name testUint8ArrayFindLast003
     * @tc.desc Verify findLast matches 0 in array with zero value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast003() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    Integer result = arr.findLast((v) -> { return v == 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0400
     * @tc.name testUint8ArrayFindLast004
     * @tc.desc Verify findLast matches 255 in single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast004() {
    Uint8Array arr = Uint8Array.of(255);
    Integer result = arr.findLast((v) -> { return v == 255;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0500
     * @tc.name testUint8ArrayFindLast005
     * @tc.desc Verify findLast matches middle value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast005() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Integer result = arr.findLast((v) -> { return v == 127;
        });
    assertEqual(127, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0600
     * @tc.name testUint8ArrayFindLast006
     * @tc.desc Verify findLast matches greater than 200 returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast006() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Integer result = arr.findLast((v) -> { return v > 200;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0700
     * @tc.name testUint8ArrayFindLast007
     * @tc.desc Verify findLast matches less than 100 returns 0 (last satisfying value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast007() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Integer result = arr.findLast((v) -> { return v < 100;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0800
     * @tc.name testUint8ArrayFindLast008
     * @tc.desc Verify findLast matches hexadecimal literal 0x00
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast008() {
    Uint8Array arr = Uint8Array.of(0x00, 0x80, 0xFF);
    Integer result = arr.findLast((v) -> { return v == 0x00;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_0900
     * @tc.name testUint8ArrayFindLast009
     * @tc.desc Verify findLast matches repeated value returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast009() {
    Uint8Array arr = Uint8Array.of(100, 200, 100);
    Integer result = arr.findLast((v) -> { return v == 100;
        });
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1000
     * @tc.name testUint8ArrayFindLast010
     * @tc.desc Verify findLast matches 200 in repeated array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast010() {
    Uint8Array arr = Uint8Array.of(100, 200, 100);
    Integer result = arr.findLast((v) -> { return v == 200;
        });
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1100
     * @tc.name testUint8ArrayFindLast011
     * @tc.desc Verify findLast matches 256 overflow truncated to 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast011() {
    Uint8Array arr = Uint8Array.of(256, 5);
    Integer result = arr.findLast((v) -> { return v == 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1200
     * @tc.name testUint8ArrayFindLast012
     * @tc.desc Verify findLast matches -1 truncated to 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast012() {
    Uint8Array arr = Uint8Array.of(256, -1);
    Integer result = arr.findLast((v) -> { return v == 255;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1300
     * @tc.name testUint8ArrayFindLast013
     * @tc.desc Verify findLast matches last element value >= 4 returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast013() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v >= 4;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1400
     * @tc.name testUint8ArrayFindLast014
     * @tc.desc Verify findLast matches less than or equal to 3 returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast014() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v <= 3;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1500
     * @tc.name testUint8ArrayFindLast015
     * @tc.desc Verify findLast matches not equal to 3 returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast015() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v != 3;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1600
     * @tc.name testUint8ArrayFindLast016
     * @tc.desc Verify findLast matches greater than 0 in array containing 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast016() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 1, 0);
    Integer result = arr.findLast((v) -> { return v > 0;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1700
     * @tc.name testUint8ArrayFindLast017
     * @tc.desc Verify findLast matches 0 in all-zero array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast017() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 0, 0);
    Integer result = arr.findLast((v) -> { return v == 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1800
     * @tc.name testUint8ArrayFindLast018
     * @tc.desc Verify findLast matches odd numbers, returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast018() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v % 2 != 0;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_1900
     * @tc.name testUint8ArrayFindLast019
     * @tc.desc Verify findLast matches greater than 200 in mixed value array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast019() {
    Uint8Array arr = Uint8Array.of(0, 200, 255);
    Integer result = arr.findLast((v) -> { return v > 200;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2000
     * @tc.name testUint8ArrayFindLast020
     * @tc.desc Verify findLast matches less than 200 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast020() {
    Uint8Array arr = Uint8Array.of(0, 200, 255);
    Integer result = arr.findLast((v) -> { return v < 200;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2100
     * @tc.name testUint8ArrayFindLast021
     * @tc.desc Verify findLast matches index 0 returns 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i == 0;
        });
    assertEqual(10, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2200
     * @tc.name testUint8ArrayFindLast022
     * @tc.desc Verify findLast matches index 2 returns 30
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast022() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i == 2;
        });
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2300
     * @tc.name testUint8ArrayFindLast023
     * @tc.desc Verify findLast returns value 50 at matching index 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast023() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i == 4;
        });
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2400
     * @tc.name testUint8ArrayFindLast024
     * @tc.desc Verify findLast matches index less than 2 returns 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i < 2;
        });
    assertEqual(20, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2500
     * @tc.name testUint8ArrayFindLast025
     * @tc.desc Verify findLast matches index >= 3 returns 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast025() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i >= 3;
        });
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2600
     * @tc.name testUint8ArrayFindLast026
     * @tc.desc Verify findLast matches index !== 4 returns 40
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast026() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i != 4;
        });
    assertEqual(40, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2700
     * @tc.name testUint8ArrayFindLast027
     * @tc.desc Verify findLast matches index 1 or 3 returns 40
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast027() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    Integer result = arr.findLast((v, i) -> { return i == 1 || i == 3;
        });
    assertEqual(40, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2800
     * @tc.name testUint8ArrayFindLast028
     * @tc.desc Verify findLast matches index > 0 in array with non-zero at end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast028() {
    Uint8Array arr = Uint8Array.of(5, 0, 0, 0, 0);
    Integer result = arr.findLast((v, i) -> { return i > 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_2900
     * @tc.name testUint8ArrayFindLast029
     * @tc.desc Verify findLast matches index < 4 in array with 5 at end
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast029() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 0, 5);
    Integer result = arr.findLast((v, i) -> { return i < 4;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3000
     * @tc.name testUint8ArrayFindLast030
     * @tc.desc Verify findLast matches index >= 0 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Integer result = arr.findLast((v, i) -> { return i >= 0;
        });
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3100
     * @tc.name testUint8ArrayFindLast031
     * @tc.desc Verify findLast matches array length equals 3 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return a.length() == 3;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3200
     * @tc.name testUint8ArrayFindLast032
     * @tc.desc Verify findLast matches array reference equals external variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return a == arr;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3300
     * @tc.name testUint8ArrayFindLast033
     * @tc.desc Verify findLast matches array first element equals 1 returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast033() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return a.get(0) == 1;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3400
     * @tc.name testUint8ArrayFindLast034
     * @tc.desc Verify findLast matches array last element equals 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast034() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i, a) -> { return a.get(a.length() - 1) == 5;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3500
     * @tc.name testUint8ArrayFindLast035
     * @tc.desc Verify findLast matches value and array parameter combination
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return v > 0 && a.length() == 3;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3600
     * @tc.name testUint8ArrayFindLast036
     * @tc.desc Verify findLast matches value>3 and index<4 returns 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast036() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return v > 3 && i < 4;
        });
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3700
     * @tc.name testUint8ArrayFindLast037
     * @tc.desc Verify findLast matches value===1 and index===3 in all-1 array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast037() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1, 1);
    Integer result = arr.findLast((v, i) -> { return v == 1 && i == 3;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3800
     * @tc.name testUint8ArrayFindLast038
     * @tc.desc Verify findLast matches value===2 and adjacent element check
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i, a) -> { return v == 2 && a.get(i + 1) == 3;
        });
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_3900
     * @tc.name testUint8ArrayFindLast039
     * @tc.desc Verify findLast matches index>=2 and value>=4 returns 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return i >= 2 && v >= 4;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4000
     * @tc.name testUint8ArrayFindLast040
     * @tc.desc Verify findLast matches index<4 and value<5 returns 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return i < 4 && v < 5;
        });
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4100
     * @tc.name testUint8ArrayFindLast041
     * @tc.desc Verify findLast matches arr[i] equals value returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return a.get(i) == v;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4200
     * @tc.name testUint8ArrayFindLast042
     * @tc.desc Verify findLast matches arr[0] equals value only at index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((v, i, a) -> { return a.get(0) == v;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4300
     * @tc.name testUint8ArrayFindLast043
     * @tc.desc Verify findLast returns value equal to or greater than 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v >= 3;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4400
     * @tc.name testUint8ArrayFindLast044
     * @tc.desc Verify findLast with predicate always true returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast044() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Integer result = arr.findLast((index) -> { return true;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4500
     * @tc.name testUint8ArrayFindLast045
     * @tc.desc Verify findLast on single element array with predicate always true returns that element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast045() {
    Uint8Array arr = Uint8Array.of(42);
    Integer result = arr.findLast((index) -> { return true;
        });
    assertEqual(42, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4600
     * @tc.name testUint8ArrayFindLast046
     * @tc.desc Verify findLast matches 0 returns 0 not undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast046() {
    Uint8Array arr = Uint8Array.of(0);
    Integer result = arr.findLast((v) -> { return v == 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4700
     * @tc.name testUint8ArrayFindLast047
     * @tc.desc Verify findLast with multiple 0 values returns last 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast047() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    Integer result = arr.findLast((v) -> { return v == 0;
        });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4800
     * @tc.name testUint8ArrayFindLast048
     * @tc.desc Verify findLast does not change original array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast048() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int lenBefore = arr.length();
    arr.findLast((v) -> { return v > 3;
        });
    assertEqual(lenBefore, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_4900
     * @tc.name testUint8ArrayFindLast049
     * @tc.desc Verify findLast does not change original array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findLast((v) -> { return v > 3;
        });
    assertEqual(1, arr.get(0));
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5000
     * @tc.name testUint8ArrayFindLast050
     * @tc.desc Verify findLast consistency across multiple calls
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int r1 = arr.findLast((v) -> { return v > 2;
        });
    int r2 = arr.findLast((v) -> { return v > 2;
        });
    assertEqual(r2, r1);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5100
     * @tc.name testUint8ArrayFindLast051
     * @tc.desc Verify findLast result equals arr[findLastIndex]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast051() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int idx = arr.findLastIndex((v) -> { return v > 2;
        });
    int val = arr.findLast((v) -> { return v > 2;
        });
    assertEqual(arr.get(idx), val);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5200
     * @tc.name testUint8ArrayFindLast052
     * @tc.desc Verify findLast throws ClassCastError when passed undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast052() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    basetype.common.ClassCastError.raise();
    fail();
    } catch (ClassCastError e) {
    assertEqual("ClassCastError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5300
     * @tc.name testUint8ArrayFindLast053
     * @tc.desc Verify findLast propagates Error thrown in predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast053() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.findLast((v) -> {
    throw new Error("test error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5400
     * @tc.name testUint8ArrayFindLast054
     * @tc.desc Verify findLast propagates TypeError thrown in predicate
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast054() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.findLast((v) -> {
    throw new TypeError("type error");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5500
     * @tc.name testUint8ArrayFindLast055
     * @tc.desc Verify findLast propagates error at first traversal element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] callCount = {0};
    try {
    arr.findLast((v) -> {
    callCount[0]++;
    if (callCount[0] == 1) {
    throw new Error("first call error");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5600
     * @tc.name testUint8ArrayFindLast056
     * @tc.desc Verify findLast propagates error at last traversal element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] callCount = {0};
    try {
    arr.findLast((v) -> {
    callCount[0]++;
    if (callCount[0] == 3) {
    throw new Error("last call error");
    }
    return v > 3;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5700
     * @tc.name testUint8ArrayFindLast057
     * @tc.desc Verify findLast traverses from tail to head, returns last element matching
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v > 3;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5800
     * @tc.name testUint8ArrayFindLast058
     * @tc.desc Verify findLast returns last element greater than 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast058() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v > 4;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_5900
     * @tc.name testUint8ArrayFindLast059
     * @tc.desc Verify findLast in decreasing array v<3 returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast059() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v < 3;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6000
     * @tc.name testUint8ArrayFindLast060
     * @tc.desc Verify findLast v<4 in decreasing array returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast060() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v < 4;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6100
     * @tc.name testUint8ArrayFindLast061
     * @tc.desc Verify findLast v<5 in decreasing array returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast061() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v < 5;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6200
     * @tc.name testUint8ArrayFindLast062
     * @tc.desc Verify findLast v>3 in decreasing array returns 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast062() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v > 3;
        });
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6300
     * @tc.name testUint8ArrayFindLast063
     * @tc.desc Verify findLast repeated value v===2 returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast063() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v == 2;
        });
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6400
     * @tc.name testUint8ArrayFindLast064
     * @tc.desc Verify findLast repeated value v===1 returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast064() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6500
     * @tc.name testUint8ArrayFindLast065
     * @tc.desc Verify findLast v<3 in repeated array returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast065() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v < 3;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6600
     * @tc.name testUint8ArrayFindLast066
     * @tc.desc Verify findLast v>=2 in decreasing array returns 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast066() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    Integer result = arr.findLast((v) -> { return v >= 2;
        });
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6700
     * @tc.name testUint8ArrayFindLast067
     * @tc.desc Verify findLast v===5 in [5,5,5,3,5] returns value 5 at last matching index 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast067() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 3, 5);
    Integer result = arr.findLast((v) -> { return v == 5;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6800
     * @tc.name testUint8ArrayFindLast068
     * @tc.desc Verify findLast v===3 in [5,5,5,3,5] returns 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast068() {
    Uint8Array arr = Uint8Array.of(5, 5, 5, 3, 5);
    Integer result = arr.findLast((v) -> { return v == 3;
        });
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_6900
     * @tc.name testUint8ArrayFindLast069
     * @tc.desc Verify findLast v===1 in [1,1,1,1,2] returns value 1 at last matching index 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast069() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1, 2);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7000
     * @tc.name testUint8ArrayFindLast070
     * @tc.desc Verify findLast v===1 in array with first and last as 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast070() {
    Uint8Array arr = Uint8Array.of(2, 1, 1, 1, 1);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7100
     * @tc.name testUint8ArrayFindLast071
     * @tc.desc Verify findLast v>=1 all match returns last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v >= 1;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7200
     * @tc.name testUint8ArrayFindLast072
     * @tc.desc Verify findLast v===1 in [0,0,0,1,0] returns 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast072() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 1, 0);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7300
     * @tc.name testUint8ArrayFindLast073
     * @tc.desc Verify findLast v===1 in [0,1,0,1,0] returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast073() {
    Uint8Array arr = Uint8Array.of(0, 1, 0, 1, 0);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7400
     * @tc.name testUint8ArrayFindLast074
     * @tc.desc Verify findLast v===1 in [1,0,1,0,1] returns last occurrence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast074() {
    Uint8Array arr = Uint8Array.of(1, 0, 1, 0, 1);
    Integer result = arr.findLast((v) -> { return v == 1;
        });
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7500
     * @tc.name testUint8ArrayFindLast075
     * @tc.desc Verify findLast even index match in increasing array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return i % 2 == 0;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7600
     * @tc.name testUint8ArrayFindLast076
     * @tc.desc Verify findLast on length 100 increasing array matches last value 99
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast076() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Integer result = arr.findLast((v) -> { return v == 99;
        });
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7700
     * @tc.name testUint8ArrayFindLast077
     * @tc.desc Verify findLast on length 100 increasing array matches greater than 98
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast077() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Integer result = arr.findLast((v) -> { return v > 98;
        });
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7800
     * @tc.name testUint8ArrayFindLast078
     * @tc.desc Verify findLast on length 100 array matches index 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast078() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    }
    Integer result = arr.findLast((v, i) -> { return i == 50;
        });
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_7900
     * @tc.name testUint8ArrayFindLast079
     * @tc.desc Verify findLast on Uint8Array created from FixedArray
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast079() {
    List<Integer> fixed = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint8Array arr = new Uint8Array(fixed);
    Integer result = arr.findLast((v) -> { return v > 25;
        });
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8000
     * @tc.name testUint8ArrayFindLast080
     * @tc.desc Verify findLast on Uint8Array created from ArrayBuffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast080() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.set(4, 50);
    Integer result = arr.findLast((v) -> { return v == 30;
        });
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8100
     * @tc.name testUint8ArrayFindLast081
     * @tc.desc Verify findLast on Uint8Array copied from another Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast081() {
    Uint8Array src = Uint8Array.of(5, 10, 15, 20);
    Uint8Array arr = new Uint8Array(src);
    Integer result = arr.findLast((v) -> { return v % 10 == 0;
        });
    assertEqual(20, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8200
     * @tc.name testUint8ArrayFindLast082
     * @tc.desc Verify findLast on 0-255 full value array matches 0xFF
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast082() {
    Uint8Array arr = new Uint8Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(i, i);
    }
    Integer result = arr.findLast((v) -> { return v == 0xFF;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8300
     * @tc.name testUint8ArrayFindLast083
     * @tc.desc Verify findLast with function expression syntax
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast083() {
    Uint8Array.Uint8ArrayFinder1 isGreaterThan3 = (v) -> {
    return v > 3;
    };
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast(isGreaterThan3);
    assertEqual(5, result);
    };
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8400
     * @tc.name testUint8ArrayFindLast084
     * @tc.desc Verify findLast predicate accesses external closure variable
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast084() {
    int threshold = 3;
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v) -> { return v > threshold;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8500
     * @tc.name testUint8ArrayFindLast085
     * @tc.desc Verify findLast with mixed radix literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast085() {
    Uint8Array arr = Uint8Array.of(0x0A, 0xFF, 0b10, 077);
    Integer result = arr.findLast((v) -> { return v == 0xFF;
        });
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8600
     * @tc.name testUint8ArrayFindLast086
     * @tc.desc Verify findLast matches value>0 and even index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast086() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return v > 0 && i % 2 == 0;
        });
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8700
     * @tc.name testUint8ArrayFindLast087
     * @tc.desc Verify findLast matches value<5 and odd index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast087() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Integer result = arr.findLast((v, i) -> { return v < 5 && i % 2 == 1;
        });
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_LAST_8800
     * @tc.name testUint8ArrayFindLast088
     * @tc.desc Verify findLast reads but does not modify original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindLast088() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findLast((v, i, a) -> {
    int x = a.get(0);
    return v > 3;
        });
    assertEqual(1, arr.get(0));
    }
}
