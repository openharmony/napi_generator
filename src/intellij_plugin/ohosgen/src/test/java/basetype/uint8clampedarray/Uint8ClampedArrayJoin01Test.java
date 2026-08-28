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

package basetype.uint8clampedarray;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayJoin01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayJoin01Test extends BasTest {
    /**
     * Verify join r equals '1,2,3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0100
     * @tc.name testUint8ClampedArrayJoinOne001
     * @tc.desc Verify join r equals '1,2,3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join();
    assertEqual("1,2,3", r);
    }

    /**
     * Verify join r equals '1,2,3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0200
     * @tc.name testUint8ClampedArrayJoinOne002
     * @tc.desc Verify join r equals '1,2,3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join(",");
    assertEqual("1,2,3", r);
    }

    /**
     * Verify join r equals '123' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0300
     * @tc.name testUint8ClampedArrayJoinOne003
     * @tc.desc Verify join r equals '123' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("");
    assertEqual("123", r);
    }

    /**
     * Verify join yields length 5 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0400
     * @tc.name testUint8ClampedArrayJoinOne004
     * @tc.desc Verify join yields length 5 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join(" ");
    assertEqual(5, r.length());
    }

    /**
     * Verify join r equals '1|2|3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0500
     * @tc.name testUint8ClampedArrayJoinOne005
     * @tc.desc Verify join r equals '1|2|3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("|");
    assertEqual("1|2|3", r);
    }

    /**
     * Verify join r equals '1;
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0600
     * @tc.name testUint8ClampedArrayJoinOne006
     * @tc.desc Verify join r equals '1;
     2;
     3' for array [1, 2, 3];
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join(";");
    assertEqual("1;2;3", r);
    }

    /**
     * Verify join r equals '10:20:30' for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0700
     * @tc.name testUint8ClampedArrayJoinOne007
     * @tc.desc Verify join r equals '10:20:30' for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.join(":");
    assertEqual("10:20:30", r);
    }

    /**
     * Verify join r equals '1-2-3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0800
     * @tc.name testUint8ClampedArrayJoinOne008
     * @tc.desc Verify join r equals '1-2-3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("-");
    assertEqual("1-2-3", r);
    }

    /**
     * Verify join r equals '1_2_3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_0900
     * @tc.name testUint8ClampedArrayJoinOne009
     * @tc.desc Verify join r equals '1_2_3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("_");
    assertEqual("1_2_3", r);
    }

    /**
     * Verify join r equals '1/2/3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1000
     * @tc.name testUint8ClampedArrayJoinOne010
     * @tc.desc Verify join r equals '1/2/3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("/");
    assertEqual("1/2/3", r);
    }

    /**
     * Verify join r equals '1\\2\\3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1100
     * @tc.name testUint8ClampedArrayJoinOne011
     * @tc.desc Verify join r equals '1\\2\\3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\\");
    assertEqual("1\\2\\3", r);
    }

    /**
     * Verify join r equals '1\n2\n3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1200
     * @tc.name testUint8ClampedArrayJoinOne012
     * @tc.desc Verify join r equals '1\n2\n3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\n");
    assertEqual("1\n2\n3", r);
    }

    /**
     * Verify join r equals '1\t2\t3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1300
     * @tc.name testUint8ClampedArrayJoinOne013
     * @tc.desc Verify join r equals '1\t2\t3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\t");
    assertEqual("1\t2\t3", r);
    }

    /**
     * Verify join r equals '1\r2\r3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1400
     * @tc.name testUint8ClampedArrayJoinOne014
     * @tc.desc Verify join r equals '1\r2\r3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\r");
    assertEqual("1\r2\r3", r);
    }

    /**
     * Verify join yields length 7 for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1500
     * @tc.name testUint8ClampedArrayJoinOne015
     * @tc.desc Verify join yields length 7 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join(", ");
    assertEqual(7, r.length());
    }

    /**
     * Verify join r equals '10 - 20 - 30' for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1600
     * @tc.name testUint8ClampedArrayJoinOne016
     * @tc.desc Verify join r equals '10 - 20 - 30' for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.join(" - ");
    assertEqual("10 - 20 - 30", r);
    }

    /**
     * Verify join r equals '1<>2<>3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1700
     * @tc.name testUint8ClampedArrayJoinOne017
     * @tc.desc Verify join r equals '1<>2<>3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("<>");
    assertEqual("1<>2<>3", r);
    }

    /**
     * Verify join r equals '1===2===3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1800
     * @tc.name testUint8ClampedArrayJoinOne018
     * @tc.desc Verify join r equals '1===2===3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("===");
    assertEqual("1===2===3", r);
    }

    /**
     * Verify join r equals '10203' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_1900
     * @tc.name testUint8ClampedArrayJoinOne019
     * @tc.desc Verify join r equals '10203' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("0");
    assertEqual("10203", r);
    }

    /**
     * Verify join r equals '1a2a3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2000
     * @tc.name testUint8ClampedArrayJoinOne020
     * @tc.desc Verify join r equals '1a2a3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("a");
    assertEqual("1a2a3", r);
    }

    /**
     * Verify join r equals '1Z2Z3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2100
     * @tc.name testUint8ClampedArrayJoinOne021
     * @tc.desc Verify join r equals '1Z2Z3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("Z");
    assertEqual("1Z2Z3", r);
    }

    /**
     * Verify join with zero-width space separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2200
     * @tc.name testUint8ClampedArrayJoinOne022
     * @tc.desc Verify join with zero-width space separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("​");
    assertEqual("1​2​3", r);
    }

    /**
     * Verify join with zero-width joiner separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2300
     * @tc.name testUint8ClampedArrayJoinOne023
     * @tc.desc Verify join with zero-width joiner separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("‍");
    assertEqual("1‍2‍3", r);
    }

    /**
     * Verify join yields length 8 for array [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2400
     * @tc.name testUint8ClampedArrayJoinOne024
     * @tc.desc Verify join yields length 8 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    String r = arr.join(" ");
    assertEqual(8, r.length());
    }

    /**
     * Verify join with BOM separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2500
     * @tc.name testUint8ClampedArrayJoinOne025
     * @tc.desc Verify join with BOM separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("﻿");
    assertEqual("1﻿2﻿3", r);
    }

    /**
     * Verify join with fullwidth comma separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2600
     * @tc.name testUint8ClampedArrayJoinOne026
     * @tc.desc Verify join with fullwidth comma separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("，");
    assertEqual("1，2，3", r);
    }

    /**
     * Verify join with ideographic comma separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2700
     * @tc.name testUint8ClampedArrayJoinOne027
     * @tc.desc Verify join with ideographic comma separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("、");
    assertEqual("1、2、3", r);
    }

    /**
     * Verify join with CJK character separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2800
     * @tc.name testUint8ClampedArrayJoinOne028
     * @tc.desc Verify join with CJK character separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("分");
    assertEqual("1分2分3", r);
    }

    /**
     * Verify join with multi-byte CJK separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_2900
     * @tc.name testUint8ClampedArrayJoinOne029
     * @tc.desc Verify join with multi-byte CJK separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("隔开");
    assertEqual("1隔开2隔开3", r);
    }

    /**
     * Verify join with Hiragana separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3000
     * @tc.name testUint8ClampedArrayJoinOne030
     * @tc.desc Verify join with Hiragana separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("の");
    assertEqual("1の2の3", r);
    }

    /**
     * Verify join with Arabic comma separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3100
     * @tc.name testUint8ClampedArrayJoinOne031
     * @tc.desc Verify join with Arabic comma separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("،");
    assertEqual("1،2،3", r);
    }

    /**
     * Verify join with Hangul separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3200
     * @tc.name testUint8ClampedArrayJoinOne032
     * @tc.desc Verify join with Hangul separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("와");
    assertEqual("1와2와3", r);
    }

    /**
     * Verify join with emoji separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3300
     * @tc.name testUint8ClampedArrayJoinOne033
     * @tc.desc Verify join with emoji separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("😀");
    assertEqual("1😀2😀3", r);
    }

    /**
     * Verify join with pictograph separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3400
     * @tc.name testUint8ClampedArrayJoinOne034
     * @tc.desc Verify join with pictograph separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("🔥");
    assertEqual("1🔥2🔥3", r);
    }

    /**
     * Verify join with ZWJ emoji sequence separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3500
     * @tc.name testUint8ClampedArrayJoinOne035
     * @tc.desc Verify join with ZWJ emoji sequence separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("👨‍👩‍👧");
    assertEqual("1👨‍👩‍👧2👨‍👩‍👧3", r);
    }

    /**
     * Verify join with skin-tone modifier emoji separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3600
     * @tc.name testUint8ClampedArrayJoinOne036
     * @tc.desc Verify join with skin-tone modifier emoji separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("👍🏽");
    assertEqual("1👍🏽2👍🏽3", r);
    }

    /**
     * Verify join with star symbol separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3700
     * @tc.name testUint8ClampedArrayJoinOne037
     * @tc.desc Verify join with star symbol separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("★");
    assertEqual("1★2★3", r);
    }

    /**
     * Verify join r equals '1$2$3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3800
     * @tc.name testUint8ClampedArrayJoinOne038
     * @tc.desc Verify join r equals '1$2$3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("$");
    assertEqual("1$2$3", r);
    }

    /**
     * Verify join with euro sign separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_3900
     * @tc.name testUint8ClampedArrayJoinOne039
     * @tc.desc Verify join with euro sign separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("€");
    assertEqual("1€2€3", r);
    }

    /**
     * Verify join with yen sign separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4000
     * @tc.name testUint8ClampedArrayJoinOne040
     * @tc.desc Verify join with yen sign separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("¥");
    assertEqual("1¥2¥3", r);
    }

    /**
     * Verify join r equals '1"2"3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4100
     * @tc.name testUint8ClampedArrayJoinOne041
     * @tc.desc Verify join r equals '1"2"3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\"");
    assertEqual("1\"2\"3", r);
    }

    /**
     * Verify join r equals "1'2'3" for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4200
     * @tc.name testUint8ClampedArrayJoinOne042
     * @tc.desc Verify join r equals "1'2'3" for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("'");
    assertEqual("1'2'3", r);
    }

    /**
     * Verify join r equals '1`2`3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4300
     * @tc.name testUint8ClampedArrayJoinOne043
     * @tc.desc Verify join r equals '1`2`3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("`");
    assertEqual("1`2`3", r);
    }

    /**
     * Verify join r equals '1A2A3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4400
     * @tc.name testUint8ClampedArrayJoinOne044
     * @tc.desc Verify join r equals '1A2A3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("A");
    assertEqual("1A2A3", r);
    }

    /**
     * Verify join r equals '1\u00002\u00003' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4500
     * @tc.name testUint8ClampedArrayJoinOne045
     * @tc.desc Verify join r equals '1\u00002\u00003' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("\u0000");
    assertEqual("1\u00002\u00003", r);
    }

    /**
     * Verify join with CJK ext-B character separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4600
     * @tc.name testUint8ClampedArrayJoinOne046
     * @tc.desc Verify join with CJK ext-B character separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("𠮷");
    assertEqual("1𠮷2𠮷3", r);
    }

    /**
     * Verify join r equals '1##########2##########3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4700
     * @tc.name testUint8ClampedArrayJoinOne047
     * @tc.desc Verify join r equals '1##########2##########3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("##########");
    assertEqual("1##########2##########3", r);
    }

    /**
     * Verify join r equals '1' + sep + '2' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4800
     * @tc.name testUint8ClampedArrayJoinOne048
     * @tc.desc Verify join r equals '1' + sep + '2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String sep = "__________________________________________________";
    String r = arr.join(sep);
    assertEqual("1" + sep + "2", r);
    }

    /**
     * Verify join yields length 1 + 100 + 1 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_4900
     * @tc.name testUint8ClampedArrayJoinOne049
     * @tc.desc Verify join yields length 1 + 100 + 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String sep = "";
    for (int i = 0; i < 100; i++) {
    sep = sep + "x";
    }
    String r = arr.join(sep);
    assertEqual(1 + 100 + 1, r.length());
    }

    /**
     * Verify join yields length 1002 for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5000
     * @tc.name testUint8ClampedArrayJoinOne050
     * @tc.desc Verify join yields length 1002 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String sep = "";
    for (int i = 0; i < 1000; i++) {
    sep = sep + "a";
    }
    String r = arr.join(sep);
    assertEqual(1002, r.length());
    }

    /**
     * Verify separator ASCII+Unicode '< >'
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5100
     * @tc.name testUint8ClampedArrayJoinOne051
     * @tc.desc Verify separator ASCII+Unicode '< >'
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("<中>");
    assertEqual("1<中>2<中>3", r);
    }

    /**
     * Verify join with mixed ASCII-emoji separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5200
     * @tc.name testUint8ClampedArrayJoinOne052
     * @tc.desc Verify join with mixed ASCII-emoji separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("a😀b");
    assertEqual("1a😀b2a😀b3", r);
    }

    /**
     * Verify join r equals '1\\\\2' for array [1, 2]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5300
     * @tc.name testUint8ClampedArrayJoinOne053
     * @tc.desc Verify join r equals '1\\\\2' for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    String r = arr.join("\\\\");
    assertEqual("1\\\\2", r);
    }

    /**
     * Verify join with CJK bracket pair separator for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5400
     * @tc.name testUint8ClampedArrayJoinOne054
     * @tc.desc Verify join with CJK bracket pair separator for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("【】");
    assertEqual("1【】2【】3", r);
    }

    /**
     * Verify join r equals '1()2()3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5500
     * @tc.name testUint8ClampedArrayJoinOne055
     * @tc.desc Verify join r equals '1()2()3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("()");
    assertEqual("1()2()3", r);
    }

    /**
     * Verify join r equals '1<br>2<br>3' for array [1, 2, 3]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5600
     * @tc.name testUint8ClampedArrayJoinOne056
     * @tc.desc Verify join r equals '1<br>2<br>3' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String r = arr.join("<br>");
    assertEqual("1<br>2<br>3", r);
    }

    /**
     * Verify join r equals '412351236' for array [4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5700
     * @tc.name testUint8ClampedArrayJoinOne057
     * @tc.desc Verify join r equals '412351236' for array [4, 5, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 5, 6});
    String r = arr.join("123");
    assertEqual("412351236", r);
    }

    /**
     * Verify join r equals '' for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5800
     * @tc.name testUint8ClampedArrayJoinOne058
     * @tc.desc Verify join r equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.join();
    assertEqual("", r);
    }

    /**
     * Verify join r equals '' for empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_5900
     * @tc.name testUint8ClampedArrayJoinOne059
     * @tc.desc Verify join r equals '' for empty array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    String r = arr.join(",");
    assertEqual("", r);
    }

    /**
     * Verify join r equals '0' for array [0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6000
     * @tc.name testUint8ClampedArrayJoinOne060
     * @tc.desc Verify join r equals '0' for array [0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0});
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '10,20' for array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6100
     * @tc.name testUint8ClampedArrayJoinOne061
     * @tc.desc Verify join r equals '10,20' for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    String r = arr.join();
    assertEqual("10,20", r);
    }

    /**
     * Verify join r equals '1020' for array [10, 20]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6200
     * @tc.name testUint8ClampedArrayJoinOne062
     * @tc.desc Verify join r equals '1020' for array [10, 20]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20});
    String r = arr.join("");
    assertEqual("1020", r);
    }

    /**
     * Verify join r equals '0,0,0' for array [0, 0, 0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6300
     * @tc.name testUint8ClampedArrayJoinOne063
     * @tc.desc Verify join r equals '0,0,0' for array [0, 0, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    String r = arr.join(",");
    assertEqual("0,0,0", r);
    }

    /**
     * Verify join r equals '255,255,255' for array [255, 255, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6400
     * @tc.name testUint8ClampedArrayJoinOne064
     * @tc.desc Verify join r equals '255,255,255' for array [255, 255, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    String r = arr.join(",");
    assertEqual("255,255,255", r);
    }

    /**
     * Verify join r equals '7-7-7-7' for array [7, 7, 7, 7]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6500
     * @tc.name testUint8ClampedArrayJoinOne065
     * @tc.desc Verify join r equals '7-7-7-7' for array [7, 7, 7, 7]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 7, 7, 7});
    String r = arr.join("-");
    assertEqual("7-7-7-7", r);
    }

    /**
     * Verify join r equals '0,255' for array [0, 255]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6600
     * @tc.name testUint8ClampedArrayJoinOne066
     * @tc.desc Verify join r equals '0,255' for array [0, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 255});
    String r = arr.join(",");
    assertEqual("0,255", r);
    }

    /**
     * Verify join r equals '127,128' for array [127, 128]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6700
     * @tc.name testUint8ClampedArrayJoinOne067
     * @tc.desc Verify join r equals '127,128' for array [127, 128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 128});
    String r = arr.join(",");
    assertEqual("127,128", r);
    }

    /**
     * Verify join r equals '255,100' for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6800
     * @tc.name testUint8ClampedArrayJoinOne068
     * @tc.desc Verify join r equals '255,100' for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, 256);
    arr.set(1, 100);
    String r = arr.join(",");
    assertEqual("255,100", r);
    }

    /**
     * Verify join r equals '0,5' for length-2 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_6900
     * @tc.name testUint8ClampedArrayJoinOne069
     * @tc.desc Verify join r equals '0,5' for length-2 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(2);
    arr.set(0, -1);
    arr.set(1, 5);
    String r = arr.join(",");
    assertEqual("0,5", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7000
     * @tc.name testUint8ClampedArrayJoinOne070
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.NaN);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '255' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7100
     * @tc.name testUint8ClampedArrayJoinOne071
     * @tc.desc Verify join r equals '255' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    String r = arr.join();
    assertEqual("255", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7200
     * @tc.name testUint8ClampedArrayJoinOne072
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, -Double.POSITIVE_INFINITY);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '128' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7300
     * @tc.name testUint8ClampedArrayJoinOne073
     * @tc.desc Verify join r equals '128' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 127.5);
    String r = arr.join();
    assertEqual("128", r);
    }

    /**
     * Verify join r equals '128' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7400
     * @tc.name testUint8ClampedArrayJoinOne074
     * @tc.desc Verify join r equals '128' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 128.5);
    String r = arr.join();
    assertEqual("128", r);
    }

    /**
     * Verify join r equals '0' for length-1 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7500
     * @tc.name testUint8ClampedArrayJoinOne075
     * @tc.desc Verify join r equals '0' for length-1 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1);
    arr.set(0, 0.5);
    String r = arr.join();
    assertEqual("0", r);
    }

    /**
     * Verify join r equals '1-2-3-4-5-6-7-8-9-10' for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7600
     * @tc.name testUint8ClampedArrayJoinOne076
     * @tc.desc Verify join r equals '1-2-3-4-5-6-7-8-9-10' for array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    String r = arr.join("-");
    assertEqual("1-2-3-4-5-6-7-8-9-10", r);
    }

    /**
     * Verify join yields length expectedLen for length-100 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7700
     * @tc.name testUint8ClampedArrayJoinOne077
     * @tc.desc Verify join yields length expectedLen for length-100 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 1);
    }
    String r = arr.join(",");
    int expectedLen = 100 + 99;
    assertEqual(expectedLen, r.length());
    assertTrue(r.startsWith("1,"));
    assertTrue(r.endsWith(",1"));
    }

    /**
     * Verify join yields length 1024 for length-1024 array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7800
     * @tc.name testUint8ClampedArrayJoinOne078
     * @tc.desc Verify join yields length 1024 for length-1024 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    for (int i = 0; i < 1024; i++) {
    arr.set(i, 5);
    }
    String r = arr.join("");
    assertEqual(1024, r.length());
    }

    /**
     * Verify join r equals '10|20|30|40' for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_7900
     * @tc.name testUint8ClampedArrayJoinOne079
     * @tc.desc Verify join r equals '10|20|30|40' for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    String r = arr.join("|");
    assertEqual("10|20|30|40", r);
    }

    /**
     * Verify join r equals '7-9' for ArrayBuffer-backed array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8000
     * @tc.name testUint8ClampedArrayJoinOne080
     * @tc.desc Verify join r equals '7-9' for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne080() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1, 2);
    arr.set(0, 7);
    arr.set(1, 9);
    String r = arr.join("-");
    assertEqual("7-9", r);
    }

    /**
     * Verify Uint8ClampedArray.of r equals '10,20,30' for of(10, 20, 30)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8100
     * @tc.name testUint8ClampedArrayJoinOne081
     * @tc.desc Verify Uint8ClampedArray.of r equals '10,20,30' for of(10, 20, 30)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne081() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    String r = arr.join(",");
    assertEqual("10,20,30", r);
    }

    /**
     * Verify Uint8ClampedArray.from r equals '1,2,3' for from(src)
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8200
     * @tc.name testUint8ClampedArrayJoinOne082
     * @tc.desc Verify Uint8ClampedArray.from r equals '1,2,3' for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne082() {
    List<Number> src = java.util.Arrays.asList(1, 2, 3);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    String r = arr.join(",");
    assertEqual("1,2,3", r);
    }

    /**
     * Verify subarray r equals '2,3,4' for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8300
     * @tc.name testUint8ClampedArrayJoinOne083
     * @tc.desc Verify subarray r equals '2,3,4' for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    String r = sub.join(",");
    assertEqual("2,3,4", r);
    }

    /**
     * Verify slice r equals '1-2-3' for array [1, 2, 3, 4, 5]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8400
     * @tc.name testUint8ClampedArrayJoinOne084
     * @tc.desc Verify slice r equals '1-2-3' for array [1, 2, 3, 4, 5]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray s = arr.slice(0, 3);
    String r = s.join("-");
    assertEqual("1-2-3", r);
    }

    /**
     * Verify join yields length 1 for array [9]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8500
     * @tc.name testUint8ClampedArrayJoinOne085
     * @tc.desc Verify join yields length 1 for array [9]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9});
    String r = arr.join();
    assertEqual(1, r.length());
    }

    /**
     * Verify join yields length 2 for array [99]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8600
     * @tc.name testUint8ClampedArrayJoinOne086
     * @tc.desc Verify join yields length 2 for array [99]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    String r = arr.join();
    assertEqual(2, r.length());
    }

    /**
     * Verify join yields length 3 for array [200]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8700
     * @tc.name testUint8ClampedArrayJoinOne087
     * @tc.desc Verify join yields length 3 for array [200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {200});
    String r = arr.join();
    assertEqual(3, r.length());
    }

    /**
     * Verify join r equals '0,1' for array [0, 1]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_JOIN_ONE_8800
     * @tc.name testUint8ClampedArrayJoinOne088
     * @tc.desc Verify join r equals '0,1' for array [0, 1]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayJoinOne088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1});
    String r = arr.join(",");
    assertEqual("0,1", r);
    }
}
