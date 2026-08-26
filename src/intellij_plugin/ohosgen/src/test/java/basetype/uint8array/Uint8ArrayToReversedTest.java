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
 * Uint8ArrayToReversedTest —— Int16Array 方法族测试。
 */
public class Uint8ArrayToReversedTest extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0100
     * @tc.name testUint8ArrayToReversed001
     * @tc.desc Verify toReversed with no arguments returns object type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed001() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.toReversed();
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0200
     * @tc.name testUint8ArrayToReversed002
     * @tc.desc Verify empty array toReversed returns length 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed002() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.toReversed();
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0300
     * @tc.name testUint8ArrayToReversed003
     * @tc.desc Verify empty array toReversed returns object type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed003() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.toReversed();
    assertEqual(0, result.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0400
     * @tc.name testUint8ArrayToReversed004
     * @tc.desc Verify empty array toReversed returns instanceof Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed004() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.toReversed();
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0500
     * @tc.name testUint8ArrayToReversed005
     * @tc.desc Verify empty array toReversed join returns empty string
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed005() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.toReversed();
    assertEqual("", result.join());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0600
     * @tc.name testUint8ArrayToReversed006
     * @tc.desc Verify empty array toReversed does not change original array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed006() {
    Uint8Array arr = new Uint8Array();
    arr.toReversed();
    assertEqual(0, arr.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0700
     * @tc.name testUint8ArrayToReversed007
     * @tc.desc Verify new Uint8Array(0) toReversed returns empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed007() {
    Uint8Array arr = new Uint8Array(0);
    Uint8Array result = arr.toReversed();
    assertEqual(0, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0800
     * @tc.name testUint8ArrayToReversed008
     * @tc.desc Verify single element [0] toReversed first element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed008() {
    Uint8Array arr = Uint8Array.of(0);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_0900
     * @tc.name testUint8ArrayToReversed009
     * @tc.desc Verify single element [255] toReversed first element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed009() {
    Uint8Array arr = Uint8Array.of(255);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1000
     * @tc.name testUint8ArrayToReversed010
     * @tc.desc Verify single element [127] toReversed first element is 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed010() {
    Uint8Array arr = Uint8Array.of(127);
    Uint8Array rev = arr.toReversed();
    assertEqual(127, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1100
     * @tc.name testUint8ArrayToReversed011
     * @tc.desc Verify single element [0x80] toReversed first element is 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed011() {
    Uint8Array arr = Uint8Array.of(0x80);
    Uint8Array rev = arr.toReversed();
    assertEqual(128, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1200
     * @tc.name testUint8ArrayToReversed012
     * @tc.desc Verify single element [0xFF] toReversed first element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed012() {
    Uint8Array arr = Uint8Array.of(0xFF);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1300
     * @tc.name testUint8ArrayToReversed013
     * @tc.desc Verify single element [0x00] toReversed first element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed013() {
    Uint8Array arr = Uint8Array.of(0x00);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1400
     * @tc.name testUint8ArrayToReversed014
     * @tc.desc Verify single element [256] truncated to 0 then toReversed first element is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed014() {
    Uint8Array arr = Uint8Array.of(256);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1500
     * @tc.name testUint8ArrayToReversed015
     * @tc.desc Verify single element [-1] wraps to 255 then toReversed first element is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed015() {
    Uint8Array arr = Uint8Array.of(-1);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1600
     * @tc.name testUint8ArrayToReversed016
     * @tc.desc Verify single element toReversed returns length 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed016() {
    Uint8Array arr = Uint8Array.of(42);
    Uint8Array result = arr.toReversed();
    assertEqual(1, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1700
     * @tc.name testUint8ArrayToReversed017
     * @tc.desc Verify single element toReversed original array element unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed017() {
    Uint8Array arr = Uint8Array.of(42);
    arr.toReversed();
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1800
     * @tc.name testUint8ArrayToReversed018
     * @tc.desc Verify [0, 255] toReversed result[0] is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed018() {
    Uint8Array arr = Uint8Array.of(0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_1900
     * @tc.name testUint8ArrayToReversed019
     * @tc.desc Verify [0, 255] toReversed result[1] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed019() {
    Uint8Array arr = Uint8Array.of(0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2000
     * @tc.name testUint8ArrayToReversed020
     * @tc.desc Verify [127, 128] toReversed result[0] is 128
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed020() {
    Uint8Array arr = Uint8Array.of(127, 128);
    Uint8Array rev = arr.toReversed();
    assertEqual(128, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2100
     * @tc.name testUint8ArrayToReversed021
     * @tc.desc Verify [127, 128] toReversed result[1] is 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed021() {
    Uint8Array arr = Uint8Array.of(127, 128);
    Uint8Array rev = arr.toReversed();
    assertEqual(127, rev.get(1));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2200
     * @tc.name testUint8ArrayToReversed022
     * @tc.desc Verify [255, 0] toReversed result[0] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed022() {
    Uint8Array arr = Uint8Array.of(255, 0);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2300
     * @tc.name testUint8ArrayToReversed023
     * @tc.desc Verify [255, 0] toReversed result[1] is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed023() {
    Uint8Array arr = Uint8Array.of(255, 0);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2400
     * @tc.name testUint8ArrayToReversed024
     * @tc.desc Verify [100, 100] same elements toReversed result[0] is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed024() {
    Uint8Array arr = Uint8Array.of(100, 100);
    Uint8Array rev = arr.toReversed();
    assertEqual(100, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2500
     * @tc.name testUint8ArrayToReversed025
     * @tc.desc Verify [100, 100] same elements toReversed result[1] is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed025() {
    Uint8Array arr = Uint8Array.of(100, 100);
    Uint8Array rev = arr.toReversed();
    assertEqual(100, rev.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2600
     * @tc.name testUint8ArrayToReversed026
     * @tc.desc Verify two elements toReversed returns length 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed026() {
    Uint8Array arr = Uint8Array.of(5, 10);
    Uint8Array result = arr.toReversed();
    assertEqual(2, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2700
     * @tc.name testUint8ArrayToReversed027
     * @tc.desc Verify two elements toReversed original array[0] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed027() {
    Uint8Array arr = Uint8Array.of(5, 10);
    arr.toReversed();
    assertEqual(5, arr.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2800
     * @tc.name testUint8ArrayToReversed028
     * @tc.desc Verify two elements toReversed original array[1] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed028() {
    Uint8Array arr = Uint8Array.of(5, 10);
    arr.toReversed();
    assertEqual(10, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_2900
     * @tc.name testUint8ArrayToReversed029
     * @tc.desc Verify [1, 2, 3] toReversed result[0] is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed029() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3000
     * @tc.name testUint8ArrayToReversed030
     * @tc.desc Verify [1, 2, 3] toReversed result[1] is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed030() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(2, rev.get(1));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3100
     * @tc.name testUint8ArrayToReversed031
     * @tc.desc Verify [1, 2, 3] toReversed result[2] is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(1, rev.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3200
     * @tc.name testUint8ArrayToReversed032
     * @tc.desc Verify [0, 127, 255] toReversed result[0] is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed032() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3300
     * @tc.name testUint8ArrayToReversed033
     * @tc.desc Verify [0, 127, 255] toReversed result[1] is 127
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed033() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(127, rev.get(1));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3400
     * @tc.name testUint8ArrayToReversed034
     * @tc.desc Verify [0, 127, 255] toReversed result[2] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed034() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3500
     * @tc.name testUint8ArrayToReversed035
     * @tc.desc Verify [1, 2, 3] toReversed returns length 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.toReversed();
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3600
     * @tc.name testUint8ArrayToReversed036
     * @tc.desc Verify [1, 2, 3] toReversed original array[0] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed036() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(1, arr.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3700
     * @tc.name testUint8ArrayToReversed037
     * @tc.desc Verify [1, 2, 3] toReversed original array[1] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed037() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3800
     * @tc.name testUint8ArrayToReversed038
     * @tc.desc Verify [1, 2, 3] toReversed original array[2] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed038() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_3900
     * @tc.name testUint8ArrayToReversed039
     * @tc.desc Verify [1, 2, 3] toReversed original array length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(3, arr.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4000
     * @tc.name testUint8ArrayToReversed040
     * @tc.desc Verify [1, 2, 3] double toReversed restores original order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev1 = arr.toReversed();
    Uint8Array rev2 = rev1.toReversed();
    assertEqual(1, rev2.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4100
     * @tc.name testUint8ArrayToReversed041
     * @tc.desc Verify [10, 20, 30, 40] toReversed result[0] is 40
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed041() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(40, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4200
     * @tc.name testUint8ArrayToReversed042
     * @tc.desc Verify [10, 20, 30, 40] toReversed result[3] is 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed042() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(10, rev.get(3));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4300
     * @tc.name testUint8ArrayToReversed043
     * @tc.desc Verify [10, 20, 30, 40] toReversed result[1] is 30
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed043() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(30, rev.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4400
     * @tc.name testUint8ArrayToReversed044
     * @tc.desc Verify [10, 20, 30, 40] toReversed result[2] is 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed044() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(20, rev.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4500
     * @tc.name testUint8ArrayToReversed045
     * @tc.desc Verify [10, 20, 30, 40] toReversed returns length 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed045() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array result = arr.toReversed();
    assertEqual(4, result.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4600
     * @tc.name testUint8ArrayToReversed046
     * @tc.desc Verify [0, 1, 2, 3, 4] toReversed result[0] is 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed046() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array rev = arr.toReversed();
    assertEqual(4, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4700
     * @tc.name testUint8ArrayToReversed047
     * @tc.desc Verify [0, 1, 2, 3, 4] toReversed result[4] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed047() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4800
     * @tc.name testUint8ArrayToReversed048
     * @tc.desc Verify [0, 1, 2, 3, 4] toReversed result[1] is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed048() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.get(1));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_4900
     * @tc.name testUint8ArrayToReversed049
     * @tc.desc Verify [0, 1, 2, 3, 4] toReversed result[3] is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed049() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array rev = arr.toReversed();
    assertEqual(1, rev.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5000
     * @tc.name testUint8ArrayToReversed050
     * @tc.desc Verify [0, 1, 2, 3, 4] toReversed result[2] middle element unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed050() {
    Uint8Array arr = Uint8Array.of(0, 1, 2, 3, 4);
    Uint8Array rev = arr.toReversed();
    assertEqual(2, rev.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5100
     * @tc.name testUint8ArrayToReversed051
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed result[0] is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed051() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5200
     * @tc.name testUint8ArrayToReversed052
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed result[3] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed052() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5300
     * @tc.name testUint8ArrayToReversed053
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed result[1] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed053() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5400
     * @tc.name testUint8ArrayToReversed054
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed result[2] is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed054() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    Uint8Array rev = arr.toReversed();
    assertEqual(255, rev.get(2));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5500
     * @tc.name testUint8ArrayToReversed055
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed returns length 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed055() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    Uint8Array result = arr.toReversed();
    assertEqual(4, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5600
     * @tc.name testUint8ArrayToReversed056
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed original array[0] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed056() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    arr.toReversed();
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5700
     * @tc.name testUint8ArrayToReversed057
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed original array[1] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed057() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    arr.toReversed();
    assertEqual(255, arr.get(1));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5800
     * @tc.name testUint8ArrayToReversed058
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed original array[2] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed058() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    arr.toReversed();
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_5900
     * @tc.name testUint8ArrayToReversed059
     * @tc.desc Verify [0, 255, 0, 255] alternating boundary toReversed original array[3] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed059() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    arr.toReversed();
    assertEqual(255, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6000
     * @tc.name testUint8ArrayToReversed060
     * @tc.desc Verify Uint8Array.of toReversed returns object type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.toReversed();
    assertEqual(3, result.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6100
     * @tc.name testUint8ArrayToReversed061
     * @tc.desc Verify new Uint8Array([1, 2, 3]) toReversed result[0] is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed061() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6200
     * @tc.name testUint8ArrayToReversed062
     * @tc.desc Verify Uint8Array.from([1, 2, 3]) toReversed result[0] is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed062() {
    Uint8Array arr = Uint8Array.from(new int[] {1, 2, 3});
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6300
     * @tc.name testUint8ArrayToReversed063
     * @tc.desc Verify new Uint8Array(3) filled toReversed result[0] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed063() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6400
     * @tc.name testUint8ArrayToReversed064
     * @tc.desc Verify new Uint8Array(3) filled toReversed result[2] is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed064() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(1, rev.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6500
     * @tc.name testUint8ArrayToReversed065
     * @tc.desc Verify toReversed returns Uint8Array type
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed065() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array result = arr.toReversed();
    assertEqual(3, result.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6600
     * @tc.name testUint8ArrayToReversed066
     * @tc.desc Verify toReversed returns new array not same reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed066() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertTrue(rev != arr);
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6700
     * @tc.name testUint8ArrayToReversed067
     * @tc.desc Verify toReversed returns array with same length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed067() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(arr.length(), rev.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6800
     * @tc.name testUint8ArrayToReversed068
     * @tc.desc Verify toReversed result elements are in reverse order
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed068() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array rev = arr.toReversed();
    assertEqual(5, rev.get(0));
    assertEqual(4, rev.get(1));
    assertEqual(3, rev.get(2));
    assertEqual(2, rev.get(3));
    assertEqual(1, rev.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_6900
     * @tc.name testUint8ArrayToReversed069
     * @tc.desc Verify toReversed result join string is reversed
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed069() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual("3,2,1", rev.join());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7000
     * @tc.name testUint8ArrayToReversed070
     * @tc.desc Verify toReversed result toString is reversed
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed070() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual("3,2,1", String.valueOf(rev));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7100
     * @tc.name testUint8ArrayToReversed071
     * @tc.desc Verify toReversed on empty array does not throw error
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed071() {
    Uint8Array arr = new Uint8Array();
    Uint8Array result = arr.toReversed();
    assertEqual(0, result.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7200
     * @tc.name testUint8ArrayToReversed072
     * @tc.desc Verify toReversed on single element array does not throw error
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed072() {
    Uint8Array arr = Uint8Array.of(50);
    Uint8Array result = arr.toReversed();
    assertEqual(50, result.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7300
     * @tc.name testUint8ArrayToReversed073
     * @tc.desc Verify toReversed original array[0] unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed073() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7400
     * @tc.name testUint8ArrayToReversed074
     * @tc.desc Verify toReversed original array[2] unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(3, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7500
     * @tc.name testUint8ArrayToReversed075
     * @tc.desc Verify toReversed original array length unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.toReversed();
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7600
     * @tc.name testUint8ArrayToReversed076
     * @tc.desc Verify toReversed original array[0] unchanged after call with boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed076() {
    Uint8Array arr = Uint8Array.of(0, 255, 128);
    arr.toReversed();
    assertEqual(0, arr.get(0));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7700
     * @tc.name testUint8ArrayToReversed077
     * @tc.desc Verify toReversed original array[1] unchanged after call with boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed077() {
    Uint8Array arr = Uint8Array.of(0, 255, 128);
    arr.toReversed();
    assertEqual(255, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7800
     * @tc.name testUint8ArrayToReversed078
     * @tc.desc Verify toReversed original array[2] unchanged after call with boundary values
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed078() {
    Uint8Array arr = Uint8Array.of(0, 255, 128);
    arr.toReversed();
    assertEqual(128, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_7900
     * @tc.name testUint8ArrayToReversed079
     * @tc.desc Verify toReversed returns result can call indexOf to find original last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed079() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.indexOf(10));
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8000
     * @tc.name testUint8ArrayToReversed080
     * @tc.desc Verify toReversed returns result join string correct
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed080() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual("3,2,1", rev.join(","));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8100
     * @tc.name testUint8ArrayToReversed081
     * @tc.desc Verify toReversed returns result can continue slice
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed081() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    Uint8Array rev = arr.toReversed();
    Uint8Array sliced = rev.slice(0);
    assertEqual(30, sliced.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8200
     * @tc.name testUint8ArrayToReversed082
     * @tc.desc Verify toReversed returns result can continue filter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed082() {
    Uint8Array arr = Uint8Array.of(0, 1, 0, 2);
    Uint8Array rev = arr.toReversed();
    Uint8Array filtered = rev.filter((v) -> v > 0);
    assertEqual(2, filtered.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8300
     * @tc.name testUint8ArrayToReversed083
     * @tc.desc Verify toReversed returns result indexOf finds original first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed083() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.indexOf(40));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8400
     * @tc.name testUint8ArrayToReversed084
     * @tc.desc Verify toReversed returns result includes original last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed084() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    Uint8Array rev = arr.toReversed();
    assertTrue(rev.includes(10));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8500
     * @tc.name testUint8ArrayToReversed085
     * @tc.desc Verify 100 elements toReversed returns length 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed085() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    };
    Uint8Array rev = arr.toReversed();
    assertEqual(100, rev.length());
    }
/**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8600
     * @tc.name testUint8ArrayToReversed086
     * @tc.desc Verify 100 elements toReversed result[0] is 99
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed086() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    };
    Uint8Array rev = arr.toReversed();
    assertEqual(99, rev.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8700
     * @tc.name testUint8ArrayToReversed087
     * @tc.desc Verify 100 elements toReversed result[99] is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed087() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    };
    Uint8Array rev = arr.toReversed();
    assertEqual(0, rev.get(99));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_TO_REVERSED_8800
     * @tc.name testUint8ArrayToReversed088
     * @tc.desc Verify 100 elements toReversed original array[0] unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayToReversed088() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, i);
    };
    arr.toReversed();
    assertEqual(0, arr.get(0));
    }
}
