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

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayJoinTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayJoinTest extends BasTest {
    /**
     * Verify join() with no parameters returns empty string for empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0100
     * @tc.name testUint8ArrayJoin001
     * @tc.desc Verify join() with no parameters returns empty string for empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin001() {
    Uint8Array arr = new Uint8Array();
    String result = arr.join();
    assertEqual("", result);
    }

    /**
     * Verify join() with no parameters returns single element for single-element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0200
     * @tc.name testUint8ArrayJoin002
     * @tc.desc Verify join() with no parameters returns single element for single-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin002() {
    Uint8Array arr = new Uint8Array(new int[] {99});
    String result = arr.join();
    assertEqual("99", result);
    }

    /**
     * Verify join() with no parameters uses default comma separator for multi-element array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0300
     * @tc.name testUint8ArrayJoin003
     * @tc.desc Verify join() with no parameters uses default comma separator for multi-element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin003() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    String result = arr.join();
    assertEqual("5,10,15", result);
    }

    /**
     * Verify join(',') explicit comma matches default behavior
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0400
     * @tc.name testUint8ArrayJoin004
     * @tc.desc Verify join(',') explicit comma matches default behavior
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin004() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join(",");
    assertEqual("1,2,3", result);
    }

    /**
     * Verify join('') empty string separator concatenates elements
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0500
     * @tc.name testUint8ArrayJoin005
     * @tc.desc Verify join('') empty string separator concatenates elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    String result = arr.join("");
    assertEqual("102030", result);
    }

    /**
     * Verify join('|') pipe separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0600
     * @tc.name testUint8ArrayJoin006
     * @tc.desc Verify join('|') pipe separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin006() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("|");
    assertEqual("1|2|3", result);
    }

    /**
     * Verify join(' ') space separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0700
     * @tc.name testUint8ArrayJoin007
     * @tc.desc Verify join(' ') space separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin007() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join(" ");
    assertEqual("1 2 3", result);
    }

    /**
     * Verify join('\t') tab separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0800
     * @tc.name testUint8ArrayJoin008
     * @tc.desc Verify join('\t') tab separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin008() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("\t");
    assertEqual("1\t2\t3", result);
    }

    /**
     * Verify join(' => ') arrow separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_0900
     * @tc.name testUint8ArrayJoin009
     * @tc.desc Verify join(' => ') arrow separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin009() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join(" => ");
    assertEqual("1 => 2 => 3", result);
    }

    /**
     * Verify join(' -> ') short arrow separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1000
     * @tc.name testUint8ArrayJoin010
     * @tc.desc Verify join(' -> ') short arrow separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin010() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join(" -> ");
    assertEqual("1 -> 2 -> 3", result);
    }

    /**
     * Verify join('---') triple dash separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1100
     * @tc.name testUint8ArrayJoin011
     * @tc.desc Verify join('---') triple dash separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin011() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("---");
    assertEqual("1---2---3", result);
    }

    /**
     * Verify join('...') ellipsis separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1200
     * @tc.name testUint8ArrayJoin012
     * @tc.desc Verify join('...') ellipsis separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin012() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("...");
    assertEqual("1...2...3", result);
    }

    /**
     * Verify join('_') underscore separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1300
     * @tc.name testUint8ArrayJoin013
     * @tc.desc Verify join('_') underscore separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin013() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("_");
    assertEqual("1_2_3", result);
    }

    /**
     * Verify join('::') double colon separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1400
     * @tc.name testUint8ArrayJoin014
     * @tc.desc Verify join('::') double colon separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin014() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("::");
    assertEqual("1::2::3", result);
    }

    /**
     * Verify join('-*-') pattern separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1500
     * @tc.name testUint8ArrayJoin015
     * @tc.desc Verify join('-*-') pattern separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin015() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("-*-");
    assertEqual("1-*-2-*-3", result);
    }

    /**
     * Verify join('!@#') special character separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1600
     * @tc.name testUint8ArrayJoin016
     * @tc.desc Verify join('!@#') special character separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin016() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("!@#");
    assertEqual("1!@#2!@#3", result);
    }

    /**
     * Verify join() with multi-byte Unicode character separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1700
     * @tc.name testUint8ArrayJoin017
     * @tc.desc Verify join() with multi-byte Unicode character separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin017() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("中");
    assertEqual("1中2中3", result);
    }

    /**
     * Verify join('~') tilde separator works correctly
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1800
     * @tc.name testUint8ArrayJoin018
     * @tc.desc Verify join('~') tilde separator works correctly
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin018() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    String result = arr.join("~");
    assertEqual("1~2~3", result);
    }

    /**
     * Verify join() returns '255' for single max value element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_1900
     * @tc.name testUint8ArrayJoin019
     * @tc.desc Verify join() returns '255' for single max value element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin019() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    String result = arr.join();
    assertEqual("255", result);
    }

    /**
     * Verify join() returns '128' for single middle value element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2000
     * @tc.name testUint8ArrayJoin020
     * @tc.desc Verify join() returns '128' for single middle value element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin020() {
    Uint8Array arr = new Uint8Array(new int[] {128});
    String result = arr.join();
    assertEqual("128", result);
    }

    /**
     * Verify join() returns '1' for single one element
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2100
     * @tc.name testUint8ArrayJoin021
     * @tc.desc Verify join() returns '1' for single one element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin021() {
    Uint8Array arr = new Uint8Array(new int[] {1});
    String result = arr.join();
    assertEqual("1", result);
    }

    /**
     * Verify join() returns '127' for single value 127
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2200
     * @tc.name testUint8ArrayJoin022
     * @tc.desc Verify join() returns '127' for single value 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin022() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    String result = arr.join();
    assertEqual("127", result);
    }

    /**
     * Verify join() returns '129' for single value 129
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2300
     * @tc.name testUint8ArrayJoin023
     * @tc.desc Verify join() returns '129' for single value 129
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin023() {
    Uint8Array arr = new Uint8Array(new int[] {129});
    String result = arr.join();
    assertEqual("129", result);
    }

    /**
     * Verify join() returns '254' for single value 254
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2400
     * @tc.name testUint8ArrayJoin024
     * @tc.desc Verify join() returns '254' for single value 254
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin024() {
    Uint8Array arr = new Uint8Array(new int[] {254});
    String result = arr.join();
    assertEqual("254", result);
    }

    /**
     * Verify join() returns '2' for single value 2
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2500
     * @tc.name testUint8ArrayJoin025
     * @tc.desc Verify join() returns '2' for single value 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin025() {
    Uint8Array arr = new Uint8Array(new int[] {2});
    String result = arr.join();
    assertEqual("2", result);
    }

    /**
     * Verify join() returns '3' for single value 3
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2600
     * @tc.name testUint8ArrayJoin026
     * @tc.desc Verify join() returns '3' for single value 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin026() {
    Uint8Array arr = new Uint8Array(new int[] {3});
    String result = arr.join();
    assertEqual("3", result);
    }

    /**
     * Verify join() returns '252' for single value 252
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2700
     * @tc.name testUint8ArrayJoin027
     * @tc.desc Verify join() returns '252' for single value 252
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin027() {
    Uint8Array arr = new Uint8Array(new int[] {252});
    String result = arr.join();
    assertEqual("252", result);
    }

    /**
     * Verify join() returns '4' for single value 4
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2800
     * @tc.name testUint8ArrayJoin028
     * @tc.desc Verify join() returns '4' for single value 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin028() {
    Uint8Array arr = new Uint8Array(new int[] {4});
    String result = arr.join();
    assertEqual("4", result);
    }

    /**
     * Verify join() returns '251' for single value 251
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_2900
     * @tc.name testUint8ArrayJoin029
     * @tc.desc Verify join() returns '251' for single value 251
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin029() {
    Uint8Array arr = new Uint8Array(new int[] {251});
    String result = arr.join();
    assertEqual("251", result);
    }

    /**
     * Verify join() returns '5' for single value 5
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3000
     * @tc.name testUint8ArrayJoin030
     * @tc.desc Verify join() returns '5' for single value 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin030() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    String result = arr.join();
    assertEqual("5", result);
    }

    /**
     * Verify join() returns '250' for single value 250
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3100
     * @tc.name testUint8ArrayJoin031
     * @tc.desc Verify join() returns '250' for single value 250
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin031() {
    Uint8Array arr = new Uint8Array(new int[] {250});
    String result = arr.join();
    assertEqual("250", result);
    }

    /**
     * Verify join() returns '6' for single value 6
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3200
     * @tc.name testUint8ArrayJoin032
     * @tc.desc Verify join() returns '6' for single value 6
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin032() {
    Uint8Array arr = new Uint8Array(new int[] {6});
    String result = arr.join();
    assertEqual("6", result);
    }

    /**
     * Verify join() returns '249' for single value 249
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3300
     * @tc.name testUint8ArrayJoin033
     * @tc.desc Verify join() returns '249' for single value 249
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin033() {
    Uint8Array arr = new Uint8Array(new int[] {249});
    String result = arr.join();
    assertEqual("249", result);
    }

    /**
     * Verify join() returns '7' for single value 7
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3400
     * @tc.name testUint8ArrayJoin034
     * @tc.desc Verify join() returns '7' for single value 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin034() {
    Uint8Array arr = new Uint8Array(new int[] {7});
    String result = arr.join();
    assertEqual("7", result);
    }

    /**
     * Verify join() returns '248' for single value 248
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3500
     * @tc.name testUint8ArrayJoin035
     * @tc.desc Verify join() returns '248' for single value 248
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin035() {
    Uint8Array arr = new Uint8Array(new int[] {248});
    String result = arr.join();
    assertEqual("248", result);
    }

    /**
     * Verify join() returns '8' for single value 8
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3600
     * @tc.name testUint8ArrayJoin036
     * @tc.desc Verify join() returns '8' for single value 8
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin036() {
    Uint8Array arr = new Uint8Array(new int[] {8});
    String result = arr.join();
    assertEqual("8", result);
    }

    /**
     * Verify join() returns '247' for single value 247
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3700
     * @tc.name testUint8ArrayJoin037
     * @tc.desc Verify join() returns '247' for single value 247
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin037() {
    Uint8Array arr = new Uint8Array(new int[] {247});
    String result = arr.join();
    assertEqual("247", result);
    }

    /**
     * Verify join() returns '9' for single value 9
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3800
     * @tc.name testUint8ArrayJoin038
     * @tc.desc Verify join() returns '9' for single value 9
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin038() {
    Uint8Array arr = new Uint8Array(new int[] {9});
    String result = arr.join();
    assertEqual("9", result);
    }

    /**
     * Verify join() returns '246' for single value 246
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_3900
     * @tc.name testUint8ArrayJoin039
     * @tc.desc Verify join() returns '246' for single value 246
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin039() {
    Uint8Array arr = new Uint8Array(new int[] {246});
    String result = arr.join();
    assertEqual("246", result);
    }

    /**
     * Verify join() returns '10' for single value 10
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4000
     * @tc.name testUint8ArrayJoin040
     * @tc.desc Verify join() returns '10' for single value 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin040() {
    Uint8Array arr = new Uint8Array(new int[] {10});
    String result = arr.join();
    assertEqual("10", result);
    }

    /**
     * Verify join() returns '245' for single value 245
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4100
     * @tc.name testUint8ArrayJoin041
     * @tc.desc Verify join() returns '245' for single value 245
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin041() {
    Uint8Array arr = new Uint8Array(new int[] {245});
    String result = arr.join();
    assertEqual("245", result);
    }

    /**
     * Verify join() returns '11' for single value 11
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4200
     * @tc.name testUint8ArrayJoin042
     * @tc.desc Verify join() returns '11' for single value 11
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin042() {
    Uint8Array arr = new Uint8Array(new int[] {11});
    String result = arr.join();
    assertEqual("11", result);
    }

    /**
     * Verify join() returns '244' for single value 244
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4300
     * @tc.name testUint8ArrayJoin043
     * @tc.desc Verify join() returns '244' for single value 244
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin043() {
    Uint8Array arr = new Uint8Array(new int[] {244});
    String result = arr.join();
    assertEqual("244", result);
    }

    /**
     * Verify join() returns '12' for single value 12
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4400
     * @tc.name testUint8ArrayJoin044
     * @tc.desc Verify join() returns '12' for single value 12
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin044() {
    Uint8Array arr = new Uint8Array(new int[] {12});
    String result = arr.join();
    assertEqual("12", result);
    }

    /**
     * Verify join() returns '243' for single value 243
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4500
     * @tc.name testUint8ArrayJoin045
     * @tc.desc Verify join() returns '243' for single value 243
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin045() {
    Uint8Array arr = new Uint8Array(new int[] {243});
    String result = arr.join();
    assertEqual("243", result);
    }

    /**
     * Verify join() returns '13' for single value 13
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4600
     * @tc.name testUint8ArrayJoin046
     * @tc.desc Verify join() returns '13' for single value 13
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin046() {
    Uint8Array arr = new Uint8Array(new int[] {13});
    String result = arr.join();
    assertEqual("13", result);
    }

    /**
     * Verify join() returns '242' for single value 242
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4700
     * @tc.name testUint8ArrayJoin047
     * @tc.desc Verify join() returns '242' for single value 242
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin047() {
    Uint8Array arr = new Uint8Array(new int[] {242});
    String result = arr.join();
    assertEqual("242", result);
    }

    /**
     * Verify join() returns '14' for single value 14
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4800
     * @tc.name testUint8ArrayJoin048
     * @tc.desc Verify join() returns '14' for single value 14
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin048() {
    Uint8Array arr = new Uint8Array(new int[] {14});
    String result = arr.join();
    assertEqual("14", result);
    }

    /**
     * Verify join() returns '241' for single value 241
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_4900
     * @tc.name testUint8ArrayJoin049
     * @tc.desc Verify join() returns '241' for single value 241
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin049() {
    Uint8Array arr = new Uint8Array(new int[] {241});
    String result = arr.join();
    assertEqual("241", result);
    }

    /**
     * Verify join() returns '15' for single value 15
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5000
     * @tc.name testUint8ArrayJoin050
     * @tc.desc Verify join() returns '15' for single value 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin050() {
    Uint8Array arr = new Uint8Array(new int[] {15});
    String result = arr.join();
    assertEqual("15", result);
    }

    /**
     * Verify join() returns '240' for single value 240
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5100
     * @tc.name testUint8ArrayJoin051
     * @tc.desc Verify join() returns '240' for single value 240
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin051() {
    Uint8Array arr = new Uint8Array(new int[] {240});
    String result = arr.join();
    assertEqual("240", result);
    }

    /**
     * Verify join() returns '16' for single value 16
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5200
     * @tc.name testUint8ArrayJoin052
     * @tc.desc Verify join() returns '16' for single value 16
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin052() {
    Uint8Array arr = new Uint8Array(new int[] {16});
    String result = arr.join();
    assertEqual("16", result);
    }

    /**
     * Verify join() returns '239' for single value 239
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5300
     * @tc.name testUint8ArrayJoin053
     * @tc.desc Verify join() returns '239' for single value 239
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin053() {
    Uint8Array arr = new Uint8Array(new int[] {239});
    String result = arr.join();
    assertEqual("239", result);
    }

    /**
     * Verify join() returns '17' for single value 17
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5400
     * @tc.name testUint8ArrayJoin054
     * @tc.desc Verify join() returns '17' for single value 17
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin054() {
    Uint8Array arr = new Uint8Array(new int[] {17});
    String result = arr.join();
    assertEqual("17", result);
    }

    /**
     * Verify join() returns '238' for single value 238
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5500
     * @tc.name testUint8ArrayJoin055
     * @tc.desc Verify join() returns '238' for single value 238
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin055() {
    Uint8Array arr = new Uint8Array(new int[] {238});
    String result = arr.join();
    assertEqual("238", result);
    }

    /**
     * Verify join() returns '18' for single value 18
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5600
     * @tc.name testUint8ArrayJoin056
     * @tc.desc Verify join() returns '18' for single value 18
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin056() {
    Uint8Array arr = new Uint8Array(new int[] {18});
    String result = arr.join();
    assertEqual("18", result);
    }

    /**
     * Verify join() returns '237' for single value 237
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5700
     * @tc.name testUint8ArrayJoin057
     * @tc.desc Verify join() returns '237' for single value 237
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin057() {
    Uint8Array arr = new Uint8Array(new int[] {237});
    String result = arr.join();
    assertEqual("237", result);
    }

    /**
     * Verify join() returns '19' for single value 19
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5800
     * @tc.name testUint8ArrayJoin058
     * @tc.desc Verify join() returns '19' for single value 19
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin058() {
    Uint8Array arr = new Uint8Array(new int[] {19});
    String result = arr.join();
    assertEqual("19", result);
    }

    /**
     * Verify join() returns '236' for single value 236
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_5900
     * @tc.name testUint8ArrayJoin059
     * @tc.desc Verify join() returns '236' for single value 236
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin059() {
    Uint8Array arr = new Uint8Array(new int[] {236});
    String result = arr.join();
    assertEqual("236", result);
    }

    /**
     * Verify join() returns '20' for single value 20
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6000
     * @tc.name testUint8ArrayJoin060
     * @tc.desc Verify join() returns '20' for single value 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin060() {
    Uint8Array arr = new Uint8Array(new int[] {20});
    String result = arr.join();
    assertEqual("20", result);
    }

    /**
     * Verify join() returns '235' for single value 235
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6100
     * @tc.name testUint8ArrayJoin061
     * @tc.desc Verify join() returns '235' for single value 235
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin061() {
    Uint8Array arr = new Uint8Array(new int[] {235});
    String result = arr.join();
    assertEqual("235", result);
    }

    /**
     * Verify join() returns '21' for single value 21
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6200
     * @tc.name testUint8ArrayJoin062
     * @tc.desc Verify join() returns '21' for single value 21
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin062() {
    Uint8Array arr = new Uint8Array(new int[] {21});
    String result = arr.join();
    assertEqual("21", result);
    }

    /**
     * Verify join() returns '234' for single value 234
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6300
     * @tc.name testUint8ArrayJoin063
     * @tc.desc Verify join() returns '234' for single value 234
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin063() {
    Uint8Array arr = new Uint8Array(new int[] {234});
    String result = arr.join();
    assertEqual("234", result);
    }

    /**
     * Verify join() returns '22' for single value 22
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6400
     * @tc.name testUint8ArrayJoin064
     * @tc.desc Verify join() returns '22' for single value 22
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin064() {
    Uint8Array arr = new Uint8Array(new int[] {22});
    String result = arr.join();
    assertEqual("22", result);
    }

    /**
     * Verify join() returns '233' for single value 233
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6500
     * @tc.name testUint8ArrayJoin065
     * @tc.desc Verify join() returns '233' for single value 233
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin065() {
    Uint8Array arr = new Uint8Array(new int[] {233});
    String result = arr.join();
    assertEqual("233", result);
    }

    /**
     * Verify join() returns '23' for single value 23
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6600
     * @tc.name testUint8ArrayJoin066
     * @tc.desc Verify join() returns '23' for single value 23
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin066() {
    Uint8Array arr = new Uint8Array(new int[] {23});
    String result = arr.join();
    assertEqual("23", result);
    }

    /**
     * Verify join() returns '24' for single value 24
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6700
     * @tc.name testUint8ArrayJoin067
     * @tc.desc Verify join() returns '24' for single value 24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin067() {
    Uint8Array arr = new Uint8Array(new int[] {24});
    String result = arr.join();
    assertEqual("24", result);
    }

    /**
     * Verify join() returns '25' for single value 25
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6800
     * @tc.name testUint8ArrayJoin068
     * @tc.desc Verify join() returns '25' for single value 25
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin068() {
    Uint8Array arr = new Uint8Array(new int[] {25});
    String result = arr.join();
    assertEqual("25", result);
    }

    /**
     * Verify join() returns '26' for single value 26
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_6900
     * @tc.name testUint8ArrayJoin069
     * @tc.desc Verify join() returns '26' for single value 26
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin069() {
    Uint8Array arr = new Uint8Array(new int[] {26});
    String result = arr.join();
    assertEqual("26", result);
    }

    /**
     * Verify join() returns '0' for value 256 (truncated to 0)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7000
     * @tc.name testUint8ArrayJoin070
     * @tc.desc Verify join() returns '0' for value 256 (truncated to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin070() {
    Uint8Array arr = new Uint8Array(new int[] {256});
    String result = arr.join();
    assertEqual("0", result);
    }

    /**
     * Verify join() returns '0' for value 512 (truncated to 0)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7100
     * @tc.name testUint8ArrayJoin071
     * @tc.desc Verify join() returns '0' for value 512 (truncated to 0)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin071() {
    Uint8Array arr = new Uint8Array(new int[] {512});
    String result = arr.join();
    assertEqual("0", result);
    }

    /**
     * Verify join() returns '253' for value 253 (max - 2)
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7200
     * @tc.name testUint8ArrayJoin072
     * @tc.desc Verify join() returns '253' for value 253 (max - 2)
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin072() {
    Uint8Array arr = new Uint8Array(new int[] {253});
    String result = arr.join();
    assertEqual("253", result);
    }

    /**
     * Verify two views sharing same ArrayBuffer have consistent join results
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7300
     * @tc.name testUint8ArrayJoin073
     * @tc.desc Verify two views sharing same ArrayBuffer have consistent join results
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin073() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array firstView = new Uint8Array(buf);
    Uint8Array secondView = new Uint8Array(buf);
    firstView.set(new Uint8Array(new int[] {10}), 0);
    firstView.set(new Uint8Array(new int[] {20}), 1);
    firstView.set(new Uint8Array(new int[] {30}), 2);
    String firstResult = firstView.join();
    String secondResult = secondView.join();
    assertEqual(secondResult, firstResult);
    }

    /**
     * Verify subarray view join is independent from original view
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7400
     * @tc.name testUint8ArrayJoin074
     * @tc.desc Verify subarray view join is independent from original view
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin074() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4, 5});
    Uint8Array sub = arr.subarray(1, 4);
    String result = sub.join();
    assertEqual("2,3,4", result);
    }

    /**
     * Verify join() does not throw exception on empty array
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_JOIN_7500
     * @tc.name testUint8ArrayJoin075
     * @tc.desc Verify join() does not throw exception on empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayJoin075() {
    Uint8Array arr = new Uint8Array();
    boolean threw = false;
    try {
    arr.join();
    } catch (RangeError e) {
    threw = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertFalse(threw);
    }
}
