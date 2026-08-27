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
import basetype.common.Error;
import basetype.common.Uint8Array;
import basetype.common.RangeError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindIndexTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindIndexTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0010
     * @tc.name testUint8ArrayFindIndex001
     * @tc.desc Verify findIndex with 1 parameter and normal call returns expected value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value) -> value == 20);
    assertEqual(1, result);
    }
    private static Uint8Array sharedArr = Uint8Array.of(1, 2, 3);
    private static boolean extraParam = false;
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0020
     * @tc.name testUint8ArrayFindIndex002
     * @tc.desc Verify findIndex callback declares 4 parameters, the 4th is undefined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0030
     * @tc.name testUint8ArrayFindIndex003
     * @tc.desc Verify empty array findIndex with callback returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex003() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((value) -> true);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0040
     * @tc.name testUint8ArrayFindIndex004
     * @tc.desc Verify value===0 match, array [0,1,2] finds 0 returns index=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex004() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0050
     * @tc.name testUint8ArrayFindIndex005
     * @tc.desc Verify value===255 match, array [0,128,255] finds 255 returns index=2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex005() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0060
     * @tc.name testUint8ArrayFindIndex006
     * @tc.desc Verify value>0 match, array [0,1,2] returns index=1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex006() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value > 0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0070
     * @tc.name testUint8ArrayFindIndex007
     * @tc.desc Verify value>200 match, array [50,150,250] returns index=2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex007() {
    Uint8Array arr = Uint8Array.of(50, 150, 250);
    int result = arr.findIndex((value) -> value > 200);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0080
     * @tc.name testUint8ArrayFindIndex008
     * @tc.desc Verify value===0xFF(255) hexadecimal literal match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex008() {
    Uint8Array arr = Uint8Array.of(0, 100, 0xFF);
    int result = arr.findIndex((value) -> value == 0xFF);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0090
     * @tc.name testUint8ArrayFindIndex009
     * @tc.desc Verify value>127 match, array [0,100,200] finds 200
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex009() {
    Uint8Array arr = Uint8Array.of(0, 100, 200);
    int result = arr.findIndex((value) -> value > 127);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0100
     * @tc.name testUint8ArrayFindIndex010
     * @tc.desc Verify value>=128 match, array [127,128,129] finds 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex010() {
    Uint8Array arr = Uint8Array.of(127, 128, 129);
    int result = arr.findIndex((value) -> value >= 128);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0110
     * @tc.name testUint8ArrayFindIndex011
     * @tc.desc Verify value<100 match, array [200,50,100] finds 50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex011() {
    Uint8Array arr = Uint8Array.of(200, 50, 100);
    int result = arr.findIndex((value) -> value < 100);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0120
     * @tc.name testUint8ArrayFindIndex012
     * @tc.desc Verify value%2===0 match even value, array [1,2,3] finds 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex012() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value) -> value % 2 == 0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0130
     * @tc.name testUint8ArrayFindIndex013
     * @tc.desc Verify value%2===1 match odd value, array [2,4,5] finds 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex013() {
    Uint8Array arr = Uint8Array.of(2, 4, 5);
    int result = arr.findIndex((value) -> value % 2 == 1);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0140
     * @tc.name testUint8ArrayFindIndex014
     * @tc.desc Verify value!==0 match non-zero, array [0,0,3] finds 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex014() {
    Uint8Array arr = Uint8Array.of(0, 0, 3);
    int result = arr.findIndex((value) -> value != 0);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0150
     * @tc.name testUint8ArrayFindIndex015
     * @tc.desc Verify value>100 and value<200 combined condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex015() {
    Uint8Array arr = Uint8Array.of(0, 100, 150, 200);
    int result = arr.findIndex((value) -> value > 100 && value < 200);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0160
     * @tc.name testUint8ArrayFindIndex016
     * @tc.desc Verify value===0x80(128) hexadecimal match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex016() {
    Uint8Array arr = Uint8Array.of(0, 0x80, 200);
    int result = arr.findIndex((value) -> value == 0x80);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0170
     * @tc.name testUint8ArrayFindIndex017
     * @tc.desc Verify value===127 mid-value match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex017() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int result = arr.findIndex((value) -> value == 127);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0180
     * @tc.name testUint8ArrayFindIndex018
     * @tc.desc Verify value<=1 match, array [0,1,2] returns first satisfying index=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex018() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value <= 1);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0190
     * @tc.name testUint8ArrayFindIndex019
     * @tc.desc Verify value>=0 always true, returns first element index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex019() {
    Uint8Array arr = Uint8Array.of(42, 7, 99);
    int result = arr.findIndex((value) -> value >= 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0200
     * @tc.name testUint8ArrayFindIndex020
     * @tc.desc Verify index===0 match first element, returns index=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex020() {
    Uint8Array arr = Uint8Array.of(100, 200, 300);
    int result = arr.findIndex((value, index) -> index == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0210
     * @tc.name testUint8ArrayFindIndex021
     * @tc.desc Verify index===length-1 match last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index, array) -> index == array.length() - 1);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0220
     * @tc.name testUint8ArrayFindIndex022
     * @tc.desc Verify index===2 match third element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex022() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    int result = arr.findIndex((value, index) -> index == 2);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0230
     * @tc.name testUint8ArrayFindIndex023
     * @tc.desc Verify index%2===0 match even index, returns first even index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex023() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findIndex((value, index) -> index % 2 == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0240
     * @tc.name testUint8ArrayFindIndex024
     * @tc.desc Verify index%2===1 match odd index, returns first odd index 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.findIndex((value, index) -> index % 2 == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0250
     * @tc.name testUint8ArrayFindIndex025
     * @tc.desc Verify index>2 match, returns first index>2 element index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index > 2);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0260
     * @tc.name testUint8ArrayFindIndex026
     * @tc.desc Verify index<2 match, returns first index<2 element index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex026() {
    Uint8Array arr = Uint8Array.of(100, 200, 300, 400);
    int result = arr.findIndex((value, index) -> index < 2);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0270
     * @tc.name testUint8ArrayFindIndex027
     * @tc.desc Verify index>=2 and index<=3 combined range match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index >= 2 && index <= 3);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0280
     * @tc.name testUint8ArrayFindIndex028
     * @tc.desc Verify array parameter reference is same as original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex028() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] sameRef = {false};
    arr.findIndex((value, index, array) -> {
    sameRef[0] = array == arr;
    return false;
        });
    assertTrue(sameRef[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0290
     * @tc.name testUint8ArrayFindIndex029
     * @tc.desc Verify array.length equals 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex029() {
    Uint8Array arr = Uint8Array.of(4, 5, 6);
    int result = arr.findIndex((value, index, array) -> array.length() == 3);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0300
     * @tc.name testUint8ArrayFindIndex030
     * @tc.desc Verify array[index]===value element position consistency
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index, array) -> array.get(index) == value);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0310
     * @tc.name testUint8ArrayFindIndex031
     * @tc.desc Verify array.byteLength property value is 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int[] byteLen = {0};
    arr.findIndex((value, index, array) -> {
    byteLen[0] = array.byteLength();
    return false;
        });
    assertEqual(4, byteLen[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0320
     * @tc.name testUint8ArrayFindIndex032
     * @tc.desc Verify reading adjacent element via array[index+1] for condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findIndex((value, index, array) -> {
        if (index < array.length() - 1) { return value == array.get(index + 1) - 1;
        } return false;
    });
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0330
     * @tc.name testUint8ArrayFindIndex033
     * @tc.desc Verify value and index combined condition value+index>55
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex033() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 52);
    int result = arr.findIndex((value, index) -> value + index > 55);
    assertEqual(4, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0340
     * @tc.name testUint8ArrayFindIndex034
     * @tc.desc Verify value>array[0] condition, starts matching from second element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex034() {
    Uint8Array arr = Uint8Array.of(20, 25, 30, 15);
    int result = arr.findIndex((value, index, array) -> value > array.get(0));
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0350
     * @tc.name testUint8ArrayFindIndex035
     * @tc.desc Verify value>2 and index<4 and array.length===5 three conditions combined
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index, array) -> { return value > 2 && index < 4 && array.length() == 5;
        });
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0360
     * @tc.name testUint8ArrayFindIndex036
     * @tc.desc Verify value*index>100 condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex036() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findIndex((value, index) -> value * index > 100);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0370
     * @tc.name testUint8ArrayFindIndex037
     * @tc.desc Verify value>index condition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex037() {
    Uint8Array arr = Uint8Array.of(0, 1, 3, 2);
    int result = arr.findIndex((value, index) -> value > index);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0380
     * @tc.name testUint8ArrayFindIndex038
     * @tc.desc Verify callback only uses value, ignores index and array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex038() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.findIndex((value) -> value == 10);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0390
     * @tc.name testUint8ArrayFindIndex039
     * @tc.desc Verify callback uses value and index, ignores array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value, index) -> value == 2 && index == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0400
     * @tc.name testUint8ArrayFindIndex040
     * @tc.desc Verify callback uses arrow function concise body returning expression
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex040() {
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    int result = arr.findIndex((value) -> value % 2 == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0410
     * @tc.name testUint8ArrayFindIndex041
     * @tc.desc Verify value>255 never found, uint8 max value 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex041() {
    Uint8Array arr = Uint8Array.of(0, 100, 200, 255);
    int result = arr.findIndex((value) -> value > 255);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0420
     * @tc.name testUint8ArrayFindIndex042
     * @tc.desc Verify value<0 never found, uint8 min value 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex042() {
    Uint8Array arr = Uint8Array.of(0, 50, 100);
    int result = arr.findIndex((value) -> value < 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0430
     * @tc.name testUint8ArrayFindIndex043
     * @tc.desc Verify value===-1 not exists in uint8 array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex043() {
    Uint8Array arr = Uint8Array.of(0, 1, 255);
    int result = arr.findIndex((value) -> value == -1);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0440
     * @tc.name testUint8ArrayFindIndex044
     * @tc.desc Verify empty array findIndex never finds
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex044() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0450
     * @tc.name testUint8ArrayFindIndex045
     * @tc.desc Verify single element array condition not matched
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex045() {
    Uint8Array arr = Uint8Array.of(50);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0460
     * @tc.name testUint8ArrayFindIndex046
     * @tc.desc Verify Uint8Array.of(500) stores 244 and findIndex finds value 244
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex046() {
    Uint8Array arr = Uint8Array.of(500);
    int result = arr.findIndex((value) -> value == 244);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0470
     * @tc.name testUint8ArrayFindIndex047
     * @tc.desc Verify callback always returns false not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex047() {
    Uint8Array arr = new Uint8Array(0);
    int result = arr.findIndex((value) -> false);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0480
     * @tc.name testUint8ArrayFindIndex048
     * @tc.desc Verify all-zero array find >0 not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex048() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int result = arr.findIndex((value) -> value > 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0490
     * @tc.name testUint8ArrayFindIndex049
     * @tc.desc Verify all-255 array find <0 not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex049() {
    Uint8Array arr = Uint8Array.of(255, 255);
    int result = arr.findIndex((value) -> value < 0);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0500
     * @tc.name testUint8ArrayFindIndex050
     * @tc.desc Verify index>100 not found on small array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0510
     * @tc.name testUint8ArrayFindIndex051
     * @tc.desc Verify contradictory condition value>200 and value<50 not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex051() {
    Uint8Array arr = Uint8Array.of(100, 150, 200);
    int result = arr.findIndex((value) -> value > 200 && value < 50);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0520
     * @tc.name testUint8ArrayFindIndex052
     * @tc.desc Verify NaN self-comparison (v!==v) not found in uint8 array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex052() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value != value);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0530
     * @tc.name testUint8ArrayFindIndex053
     * @tc.desc Verify empty ArrayBuffer constructed array not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex053() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    int result = arr.findIndex((value) -> true);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0540
     * @tc.name testUint8ArrayFindIndex054
     * @tc.desc Verify index===-1 negative index not found on small array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex054() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index) -> index == -1);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0550
     * @tc.name testUint8ArrayFindIndex055
     * @tc.desc Verify traversal order from index 0 to length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    List<Integer> visitedIndices = new ArrayList<>();
    arr.findIndex((value, index) -> {
    visitedIndices.add(index);
    return false;
        });
    assertEqual(5, visitedIndices.size());
    assertEqual(0, visitedIndices.get(0));
    assertEqual(1, visitedIndices.get(1));
    assertEqual(2, visitedIndices.get(2));
    assertEqual(3, visitedIndices.get(3));
    assertEqual(4, visitedIndices.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0560
     * @tc.name testUint8ArrayFindIndex056
     * @tc.desc Verify traversal stops at first match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 3;
    });
    assertEqual(2, result);
    assertEqual(3, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0570
     * @tc.name testUint8ArrayFindIndex057
     * @tc.desc Verify traversal visits all elements when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(5, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0580
     * @tc.name testUint8ArrayFindIndex058
     * @tc.desc Verify traversal order on single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex058() {
    Uint8Array arr = Uint8Array.of(42);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 42;
    });
    assertEqual(0, result);
    assertEqual(1, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0590
     * @tc.name testUint8ArrayFindIndex059
     * @tc.desc Verify traversal order on two element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex059() {
    Uint8Array arr = Uint8Array.of(10, 20);
    List<Integer> visitedIndices = new ArrayList<>();
    arr.findIndex((value, index) -> {
    visitedIndices.add(index);
    return false;
        });
    assertEqual(2, visitedIndices.size());
    assertEqual(0, visitedIndices.get(0));
    assertEqual(1, visitedIndices.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0600
     * @tc.name testUint8ArrayFindIndex060
     * @tc.desc Verify traversal stops at first match on large array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 5;
    });
    assertEqual(4, result);
    assertEqual(5, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0610
     * @tc.name testUint8ArrayFindIndex061
     * @tc.desc Verify traversal visits all elements on large array when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(10, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0620
     * @tc.name testUint8ArrayFindIndex062
     * @tc.desc Verify traversal stops at first match on 100-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex062() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 50;
    });
    assertEqual(50, result);
    assertEqual(51, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0630
     * @tc.name testUint8ArrayFindIndex063
     * @tc.desc Verify traversal visits all elements on 100-element array when no match
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex063() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(100, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0640
     * @tc.name testUint8ArrayFindIndex064
     * @tc.desc Verify findIndex returns number type when element is found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex064() {
    Uint8Array arr = Uint8Array.of(5, 15, 25);
    int result = arr.findIndex((value) -> value == 15);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0650
     * @tc.name testUint8ArrayFindIndex065
     * @tc.desc Verify findIndex returns number type when element is not found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex065() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0660
     * @tc.name testUint8ArrayFindIndex066
     * @tc.desc Verify findIndex returns number type with hexadecimal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex066() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value == 0x0A);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0670
     * @tc.name testUint8ArrayFindIndex067
     * @tc.desc Verify findIndex returns number type with binary comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex067() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value > 0b0);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0680
     * @tc.name testUint8ArrayFindIndex068
     * @tc.desc Verify findIndex returns number type with octal comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex068() {
    Uint8Array arr = Uint8Array.of(0, 8, 16);
    int result = arr.findIndex((value) -> value == 010);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0690
     * @tc.name testUint8ArrayFindIndex069
     * @tc.desc Verify findIndex returns number type with scientific notation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex069() {
    Uint8Array arr = Uint8Array.of(0, 100, 200);
    int result = arr.findIndex((value) -> value == 1e2);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0700
     * @tc.name testUint8ArrayFindIndex070
     * @tc.desc Verify findIndex returns number type with negative comparison
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex070() {
    Uint8Array arr = Uint8Array.of(0, 50, 100);
    int result = arr.findIndex((value) -> value > -1);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0710
     * @tc.name testUint8ArrayFindIndex071
     * @tc.desc Verify callback throws Error with message 'test error', findIndex propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    throw new Error("test error");
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("test error", e.getMessage());
    }
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0720
     * @tc.name testUint8ArrayFindIndex072
     * @tc.desc Verify callback throws Error with message 'string error', findIndex propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex072() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    throw new Error("string error");
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("string error", e.getMessage());
    }
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0730
     * @tc.name testUint8ArrayFindIndex073
     * @tc.desc Verify callback throws Error with message '42', findIndex propagates
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex073() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    throw new Error("42");
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("42", e.getMessage());
    }
    assertTrue(caught[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0740
     * @tc.name testUint8ArrayFindIndex074
     * @tc.desc Verify error thrown on first element, callback not called for subsequent elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 1) {
    throw new Error("error on first");
    }
    return false;
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(1, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0750
     * @tc.name testUint8ArrayFindIndex075
     * @tc.desc Verify error thrown on second element, callback not called for third element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 2) {
    throw new Error("error on second");
    }
    return false;
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(2, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0760
     * @tc.name testUint8ArrayFindIndex076
     * @tc.desc Verify error thrown on last element, all elements visited
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex076() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 3) {
    throw new Error("error on last");
    }
    return false;
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(3, visitedCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0770
     * @tc.name testUint8ArrayFindIndex077
     * @tc.desc Verify findIndex on single element array (length 1)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex077() {
    Uint8Array arr = Uint8Array.of(42);
    int result = arr.findIndex((value) -> value == 42);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0780
     * @tc.name testUint8ArrayFindIndex078
     * @tc.desc Verify findIndex on two element array (length 2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex078() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.findIndex((value) -> value == 20);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0790
     * @tc.name testUint8ArrayFindIndex079
     * @tc.desc Verify findIndex on 100-element array (length 100)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex079() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int result = arr.findIndex((value) -> value == 99);
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0800
     * @tc.name testUint8ArrayFindIndex080
     * @tc.desc Verify findIndex on 256-element array (length 256)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex080() {
    Uint8Array arr = new Uint8Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0810
     * @tc.name testUint8ArrayFindIndex081
     * @tc.desc Verify findIndex on 1000-element array (length 1000)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex081() {
    Uint8Array arr = new Uint8Array(1000);
    for (int i = 0; i < 1000; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 100);
    assertEqual(100, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0820
     * @tc.name testUint8ArrayFindIndex082
     * @tc.desc Verify findIndex on 10000-element array (length 10000)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex082() {
    Uint8Array arr = new Uint8Array(10000);
    for (int i = 0; i < 10000; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 200);
    assertEqual(200, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0830
     * @tc.name testUint8ArrayFindIndex083
     * @tc.desc Verify findIndex with value 0 (uint8 min value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex083() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0840
     * @tc.name testUint8ArrayFindIndex084
     * @tc.desc Verify findIndex with value 255 (uint8 max value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex084() {
    Uint8Array arr = Uint8Array.of(0, 10, 255);
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0850
     * @tc.name testUint8ArrayFindIndex085
     * @tc.desc Verify findIndex with value 128 (mid-value)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex085() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findIndex((value) -> value == 128);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0860
     * @tc.name testUint8ArrayFindIndex086
     * @tc.desc Verify findIndex with value 1 (boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex086() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value == 1);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0870
     * @tc.name testUint8ArrayFindIndex087
     * @tc.desc Verify findIndex with value 254 (boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex087() {
    Uint8Array arr = Uint8Array.of(253, 254, 255);
    int result = arr.findIndex((value) -> value == 254);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0880
     * @tc.name testUint8ArrayFindIndex088
     * @tc.desc Verify findIndex with value 253 (boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex088() {
    Uint8Array arr = Uint8Array.of(252, 253, 254);
    int result = arr.findIndex((value) -> value == 253);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0890
     * @tc.name testUint8ArrayFindIndex089
     * @tc.desc Verify findIndex with value 2 (boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex089() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value) -> value == 2);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0900
     * @tc.name testUint8ArrayFindIndex090
     * @tc.desc Verify findIndex with value 252 (boundary)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex090() {
    Uint8Array arr = Uint8Array.of(251, 252, 253);
    int result = arr.findIndex((value) -> value == 252);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0910
     * @tc.name testUint8ArrayFindIndex091
     * @tc.desc Verify findIndex does not modify array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex091() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findIndex((value) -> value == 3);
    assertEqual(1, arr.at(0));
    assertEqual(2, arr.at(1));
    assertEqual(3, arr.at(2));
    assertEqual(4, arr.at(3));
    assertEqual(5, arr.at(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0920
     * @tc.name testUint8ArrayFindIndex092
     * @tc.desc Verify findIndex does not modify array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex092() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int originalLength = arr.length();
    arr.findIndex((value) -> value == 20);
    assertEqual(originalLength, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0930
     * @tc.name testUint8ArrayFindIndex093
     * @tc.desc Verify findIndex does not modify array byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex093() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int originalByteLength = arr.byteLength();
    arr.findIndex((value) -> value == 2);
    assertEqual(originalByteLength, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0940
     * @tc.name testUint8ArrayFindIndex094
     * @tc.desc Verify findIndex does not modify array buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex094() {
    Uint8Array arr = Uint8Array.of(100, 200, 150);
    ArrayBuffer originalBuffer = arr.buffer();
    arr.findIndex((value) -> value == 200);
    assertEqual(originalBuffer, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0950
     * @tc.name testUint8ArrayFindIndex095
     * @tc.desc Verify findIndex does not modify array byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex095() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int originalByteOffset = arr.byteOffset();
    arr.findIndex((value) -> value == 3);
    assertEqual(originalByteOffset, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0960
     * @tc.name testUint8ArrayFindIndex096
     * @tc.desc Verify findIndex does not modify array when no match found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex096() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    assertEqual(1, arr.at(0));
    assertEqual(2, arr.at(1));
    assertEqual(3, arr.at(2));
    assertEqual(4, arr.at(3));
    assertEqual(5, arr.at(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0970
     * @tc.name testUint8ArrayFindIndex097
     * @tc.desc Verify findIndex does not modify array when callback throws
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex097() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    throw new Error("test error");
        });
    } catch (RangeError e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(10, arr.at(0));
    assertEqual(20, arr.at(1));
    assertEqual(30, arr.at(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0980
     * @tc.name testUint8ArrayFindIndex098
     * @tc.desc Verify findIndex on Uint8Array.from created array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex098() {
    List<Integer> source = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint8Array arr = Uint8Array.from(source);
    int result = arr.findIndex((value) -> value > 35);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_0990
     * @tc.name testUint8ArrayFindIndex099
     * @tc.desc Verify findIndex on ArrayBuffer constructed Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex099() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer);
    arr.set(new Uint8Array(new int[] {100}), 2);
    arr.set(new Uint8Array(new int[] {100}), 4);
    int result = arr.findIndex((value) -> value == 100);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_1000
     * @tc.name testUint8ArrayFindIndex100
     * @tc.desc Verify findIndex on subarray subview
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex100() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Uint8Array sub = arr.subarray(2, 6);
    int result = sub.findIndex((value) -> value == 5);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_1010
     * @tc.name testUint8ArrayFindIndex101
     * @tc.desc Verify findIndex on ArrayBuffer view with byteOffset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex101() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buffer, 2, 4);
    arr.set(new Uint8Array(new int[] {99}), 3);
    int result = arr.findIndex((value) -> value == 99);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_1020
     * @tc.name testUint8ArrayFindIndex102
     * @tc.desc Verify findIndex then verify original array elements unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex102() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findIndex((value) -> value % 2 == 0);
    assertEqual(1, arr.at(0));
    assertEqual(2, arr.at(1));
    assertEqual(3, arr.at(2));
    assertEqual(4, arr.at(3));
    assertEqual(5, arr.at(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_FIND_INDEX_1030
     * @tc.name testUint8ArrayFindIndex103
     * @tc.desc Verify nested findIndex calls, inner and outer return correct results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayFindIndex103() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] innerResult = {-1};
    int result = arr.findIndex((value, index) -> {
        if (value == 3) { innerResult[0] = arr.findIndex((v) -> v == 5);
        } return value == 4;
    });
    assertEqual(4, innerResult[0]);
    assertEqual(3, result);
    }
}
