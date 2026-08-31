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
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayLastIndexOf2Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayLastIndexOf2Test extends BasTest {
    /**
     * Verify return type is number when element found in non-empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0100
     * @tc.name testUint8ArrayLastIndexOf001
     * @tc.desc Verify return type is number when element found in non-empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf001() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int r = arr.lastIndexOf(10);
    assertEqual(1, r);
    }

    /**
     * Verify return type is number when element not found in non-empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0200
     * @tc.name testUint8ArrayLastIndexOf002
     * @tc.desc Verify return type is number when element not found in non-empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf002() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10, 15});
    int r = arr.lastIndexOf(99);
    assertEqual(-1, r);
    }

    /**
     * Verify return type is number when searching in empty array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0300
     * @tc.name testUint8ArrayLastIndexOf003
     * @tc.desc Verify return type is number when searching in empty array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf003() {
    Uint8Array arr = new Uint8Array();
    int r = arr.lastIndexOf(0);
    assertEqual(-1, r);
    }

    /**
     * Verify return type is number when fromIndex=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0400
     * @tc.name testUint8ArrayLastIndexOf004
     * @tc.desc Verify return type is number when fromIndex=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf004() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(1, 0);
    assertEqual(0, r);
    }

    /**
     * Verify return type is number when fromIndex=-1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0500
     * @tc.name testUint8ArrayLastIndexOf005
     * @tc.desc Verify return type is number when fromIndex=-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf005() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(3, -1);
    assertEqual(2, r);
    }

    /**
     * Verify return type is number when fromIndex is omitted
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0600
     * @tc.name testUint8ArrayLastIndexOf006
     * @tc.desc Verify return type is number when fromIndex is omitted
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf006() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(2);
    assertEqual(1, r);
    }

    /**
     * Verify return type is number when searchElement=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0700
     * @tc.name testUint8ArrayLastIndexOf007
     * @tc.desc Verify return type is number when searchElement=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf007() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(0);
    assertEqual(0, r);
    }

    /**
     * Verify return type is number when searchElement=255 boundary value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0800
     * @tc.name testUint8ArrayLastIndexOf008
     * @tc.desc Verify return type is number when searchElement=255 boundary value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf008() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    int r = arr.lastIndexOf(255);
    assertEqual(0, r);
    }

    /**
     * Verify return type is number when searchElement=256, no overflow truncation, returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_0900
     * @tc.name testUint8ArrayLastIndexOf009
     * @tc.desc Verify return type is number when searchElement=256, no overflow truncation, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf009() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(256);
    assertEqual(-1, r);
    }

    /**
     * Verify return type is number when searchElement=-1, no wraparound, returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1000
     * @tc.name testUint8ArrayLastIndexOf010
     * @tc.desc Verify return type is number when searchElement=-1, no wraparound, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf010() {
    Uint8Array arr = new Uint8Array(new int[] {255});
    int r = arr.lastIndexOf(-1);
    assertEqual(-1, r);
    }

    /**
     * Verify return type is number when duplicate elements exist
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1100
     * @tc.name testUint8ArrayLastIndexOf011
     * @tc.desc Verify return type is number when duplicate elements exist
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf011() {
    Uint8Array arr = new Uint8Array(new int[] {3, 1, 3});
    int r = arr.lastIndexOf(3);
    assertEqual(2, r);
    }

    /**
     * Verify return type is number for single element array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1200
     * @tc.name testUint8ArrayLastIndexOf012
     * @tc.desc Verify return type is number for single element array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf012() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int r = arr.lastIndexOf(42);
    assertEqual(0, r);
    }

    /**
     * Verify return type is number when fromIndex>=length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1300
     * @tc.name testUint8ArrayLastIndexOf013
     * @tc.desc Verify return type is number when fromIndex>=length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf013() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2});
    int r = arr.lastIndexOf(1, 10);
    assertEqual(0, r);
    }

    /**
     * Verify return type is number when fromIndex<-length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1400
     * @tc.name testUint8ArrayLastIndexOf014
     * @tc.desc Verify return type is number when fromIndex<-length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf014() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(1, -10);
    assertEqual(-1, r);
    }

    /**
     * Verify return type is number when searchElement=NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1500
     * @tc.name testUint8ArrayLastIndexOf015
     * @tc.desc Verify return type is number when searchElement=NaN
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf015() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(Double.NaN);
    assertEqual(-1, r);
    }

    /**
     * Verify element at index 0 returns 0 when found
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1600
     * @tc.name testUint8ArrayLastIndexOf016
     * @tc.desc Verify element at index 0 returns 0 when found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf016() {
    Uint8Array arr = new Uint8Array(new int[] {5, 10});
    int r = arr.lastIndexOf(5);
    assertEqual(0, r);
    }

    /**
     * Verify element at last index returns length-1 when found
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1700
     * @tc.name testUint8ArrayLastIndexOf017
     * @tc.desc Verify element at last index returns length-1 when found
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf017() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 9});
    int r = arr.lastIndexOf(9);
    assertEqual(2, r);
    }

    /**
     * Verify element at middle index returns corresponding index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1800
     * @tc.name testUint8ArrayLastIndexOf018
     * @tc.desc Verify element at middle index returns corresponding index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf018() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    int r = arr.lastIndexOf(20);
    assertEqual(1, r);
    }

    /**
     * Verify single element array match returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_1900
     * @tc.name testUint8ArrayLastIndexOf019
     * @tc.desc Verify single element array match returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf019() {
    Uint8Array arr = new Uint8Array(new int[] {99});
    int r = arr.lastIndexOf(99);
    assertEqual(0, r);
    }

    /**
     * Verify non-existent element returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2000
     * @tc.name testUint8ArrayLastIndexOf020
     * @tc.desc Verify non-existent element returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf020() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(99);
    assertEqual(-1, r);
    }

    /**
     * Verify single element array no match returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2100
     * @tc.name testUint8ArrayLastIndexOf021
     * @tc.desc Verify single element array no match returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf021() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    int r = arr.lastIndexOf(10);
    assertEqual(-1, r);
    }

    /**
     * Verify two occurrences returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2200
     * @tc.name testUint8ArrayLastIndexOf022
     * @tc.desc Verify two occurrences returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf022() {
    Uint8Array arr = new Uint8Array(new int[] {5, 1, 5});
    int r = arr.lastIndexOf(5);
    assertEqual(2, r);
    }

    /**
     * Verify three occurrences returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2300
     * @tc.name testUint8ArrayLastIndexOf023
     * @tc.desc Verify three occurrences returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf023() {
    Uint8Array arr = new Uint8Array(new int[] {3, 3, 3});
    int r = arr.lastIndexOf(3);
    assertEqual(2, r);
    }

    /**
     * Verify all elements same returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2400
     * @tc.name testUint8ArrayLastIndexOf024
     * @tc.desc Verify all elements same returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf024() {
    Uint8Array arr = new Uint8Array(new int[] {7, 7, 7, 7});
    int r = arr.lastIndexOf(7);
    assertEqual(3, r);
    }

    /**
     * Verify first and last same returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2500
     * @tc.name testUint8ArrayLastIndexOf025
     * @tc.desc Verify first and last same returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf025() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 1});
    int r = arr.lastIndexOf(1);
    assertEqual(3, r);
    }

    /**
     * Verify fromIndex=0 and element at index 0 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2600
     * @tc.name testUint8ArrayLastIndexOf026
     * @tc.desc Verify fromIndex=0 and element at index 0 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf026() {
    Uint8Array arr = new Uint8Array(new int[] {5, 1});
    int r = arr.lastIndexOf(5, 0);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=0 and element not at index 0 returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2700
     * @tc.name testUint8ArrayLastIndexOf027
     * @tc.desc Verify fromIndex=0 and element not at index 0 returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf027() {
    Uint8Array arr = new Uint8Array(new int[] {5, 1});
    int r = arr.lastIndexOf(1, 0);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=0 in empty array returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2800
     * @tc.name testUint8ArrayLastIndexOf028
     * @tc.desc Verify fromIndex=0 in empty array returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf028() {
    Uint8Array arr = new Uint8Array();
    int r = arr.lastIndexOf(0, 0);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=-1 and last element match returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_2900
     * @tc.name testUint8ArrayLastIndexOf029
     * @tc.desc Verify fromIndex=-1 and last element match returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf029() {
    Uint8Array arr = new Uint8Array(new int[] {1, 8});
    int r = arr.lastIndexOf(8, -1);
    assertEqual(1, r);
    }

    /**
     * Verify fromIndex=-1 and last element no match returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3000
     * @tc.name testUint8ArrayLastIndexOf030
     * @tc.desc Verify fromIndex=-1 and last element no match returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf030() {
    Uint8Array arr = new Uint8Array(new int[] {1, 8});
    int r = arr.lastIndexOf(1, -1);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=-2 and second last element match returns len-2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3100
     * @tc.name testUint8ArrayLastIndexOf031
     * @tc.desc Verify fromIndex=-2 and second last element match returns len-2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf031() {
    Uint8Array arr = new Uint8Array(new int[] {1, 8, 3});
    int r = arr.lastIndexOf(1, -2);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=-2 and only last element match returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3200
     * @tc.name testUint8ArrayLastIndexOf032
     * @tc.desc Verify fromIndex=-2 and only last element match returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf032() {
    Uint8Array arr = new Uint8Array(new int[] {1, 8});
    int r = arr.lastIndexOf(8, -2);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=-length full search returns match index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3300
     * @tc.name testUint8ArrayLastIndexOf033
     * @tc.desc Verify fromIndex=-length full search returns match index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf033() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(3, -3);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=-(length+1) treated as index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3400
     * @tc.name testUint8ArrayLastIndexOf034
     * @tc.desc Verify fromIndex=-(length+1) treated as index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf034() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(1, -4);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=-1 with length=1 returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3500
     * @tc.name testUint8ArrayLastIndexOf035
     * @tc.desc Verify fromIndex=-1 with length=1 returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf035() {
    Uint8Array arr = new Uint8Array(new int[] {5});
    int r = arr.lastIndexOf(5, -1);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=length-1 match returns corresponding index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3600
     * @tc.name testUint8ArrayLastIndexOf036
     * @tc.desc Verify fromIndex=length-1 match returns corresponding index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf036() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(3, 2);
    assertEqual(2, r);
    }

    /**
     * Verify fromIndex=length full search returns first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3700
     * @tc.name testUint8ArrayLastIndexOf037
     * @tc.desc Verify fromIndex=length full search returns first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf037() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(1, 3);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=1 limits search range to first half
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3800
     * @tc.name testUint8ArrayLastIndexOf038
     * @tc.desc Verify fromIndex=1 limits search range to first half
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf038() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 1});
    int r = arr.lastIndexOf(1, 1);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=0 finds 0 value returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_3900
     * @tc.name testUint8ArrayLastIndexOf039
     * @tc.desc Verify searchElement=0 finds 0 value returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf039() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    int r = arr.lastIndexOf(0);
    assertEqual(1, r);
    }

    /**
     * Verify searchElement=255 finds 255 value returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4000
     * @tc.name testUint8ArrayLastIndexOf040
     * @tc.desc Verify searchElement=255 finds 255 value returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf040() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    int r = arr.lastIndexOf(255);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=256 does not truncate to uint8, 256 !== 0, returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4100
     * @tc.name testUint8ArrayLastIndexOf041
     * @tc.desc Verify searchElement=256 does not truncate to uint8, 256 !== 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf041() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(256);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=-1 does not wrap to 255, -1 !== 255, returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4200
     * @tc.name testUint8ArrayLastIndexOf042
     * @tc.desc Verify searchElement=-1 does not wrap to 255, -1 !== 255, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf042() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    int r = arr.lastIndexOf(-1);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=0xFF finds 255 value returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4300
     * @tc.name testUint8ArrayLastIndexOf043
     * @tc.desc Verify searchElement=0xFF finds 255 value returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf043() {
    Uint8Array arr = new Uint8Array(new int[] {0, 255});
    int r = arr.lastIndexOf(0xFF);
    assertEqual(1, r);
    }

    /**
     * Verify searchElement=0x100 does not truncate to 0, 0x100 !== 0, returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4400
     * @tc.name testUint8ArrayLastIndexOf044
     * @tc.desc Verify searchElement=0x100 does not truncate to 0, 0x100 !== 0, returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf044() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(0x100);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=127 finds mid value returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4500
     * @tc.name testUint8ArrayLastIndexOf045
     * @tc.desc Verify searchElement=127 finds mid value returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf045() {
    Uint8Array arr = new Uint8Array(new int[] {127, 0});
    int r = arr.lastIndexOf(127);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=128 finds mid+1 value returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4600
     * @tc.name testUint8ArrayLastIndexOf046
     * @tc.desc Verify searchElement=128 finds mid+1 value returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf046() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128});
    int r = arr.lastIndexOf(128);
    assertEqual(1, r);
    }

    /**
     * Verify searchElement=0x80 finds 128 value returns index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4700
     * @tc.name testUint8ArrayLastIndexOf047
     * @tc.desc Verify searchElement=0x80 finds 128 value returns index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf047() {
    Uint8Array arr = new Uint8Array(new int[] {128, 0});
    int r = arr.lastIndexOf(0x80);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=NaN not found returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4800
     * @tc.name testUint8ArrayLastIndexOf048
     * @tc.desc Verify searchElement=NaN not found returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf048() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2});
    int r = arr.lastIndexOf(Double.NaN);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=-0 equivalent to 0 returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_4900
     * @tc.name testUint8ArrayLastIndexOf049
     * @tc.desc Verify searchElement=-0 equivalent to 0 returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf049() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(-0);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=Infinity not equal to any element, should return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5000
     * @tc.name testUint8ArrayLastIndexOf050
     * @tc.desc Verify searchElement=Infinity not equal to any element, should return -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf050() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(Double.POSITIVE_INFINITY);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=-Infinity not equal to any element, should return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5100
     * @tc.name testUint8ArrayLastIndexOf051
     * @tc.desc Verify searchElement=-Infinity not equal to any element, should return -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf051() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(Double.NEGATIVE_INFINITY);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=3.0 float integer value matches
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5200
     * @tc.name testUint8ArrayLastIndexOf052
     * @tc.desc Verify searchElement=3.0 float integer value matches
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf052() {
    Uint8Array arr = new Uint8Array(new int[] {3, 6});
    int r = arr.lastIndexOf(3.0);
    assertEqual(0, r);
    }

    /**
     * Verify searchElement=255.7 float not equal to 255, should return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5300
     * @tc.name testUint8ArrayLastIndexOf053
     * @tc.desc Verify searchElement=255.7 float not equal to 255, should return -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf053() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0});
    int r = arr.lastIndexOf(255.7);
    assertEqual(-1, r);
    }

    /**
     * Verify searchElement=1e10 large number truncated, should return -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5400
     * @tc.name testUint8ArrayLastIndexOf054
     * @tc.desc Verify searchElement=1e10 large number truncated, should return -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf054() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(1e10);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=-2 with duplicate elements limits to front segment
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5500
     * @tc.name testUint8ArrayLastIndexOf055
     * @tc.desc Verify fromIndex=-2 with duplicate elements limits to front segment
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf055() {
    Uint8Array arr = new Uint8Array(new int[] {5, 1, 5});
    int r = arr.lastIndexOf(5, -2);
    assertEqual(0, r);
    }

    /**
     * Verify all-zero array find 0 returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5600
     * @tc.name testUint8ArrayLastIndexOf056
     * @tc.desc Verify all-zero array find 0 returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf056() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    int r = arr.lastIndexOf(0);
    assertEqual(2, r);
    }

    /**
     * Verify all-255 array find 255 returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5700
     * @tc.name testUint8ArrayLastIndexOf057
     * @tc.desc Verify all-255 array find 255 returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf057() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    int r = arr.lastIndexOf(255);
    assertEqual(2, r);
    }

    /**
     * Verify ascending array find mid value returns corresponding index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5800
     * @tc.name testUint8ArrayLastIndexOf058
     * @tc.desc Verify ascending array find mid value returns corresponding index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf058() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    int r = arr.lastIndexOf(30);
    assertEqual(2, r);
    }

    /**
     * Verify fromIndex=0 duplicate elements only checks index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_5900
     * @tc.name testUint8ArrayLastIndexOf059
     * @tc.desc Verify fromIndex=0 duplicate elements only checks index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf059() {
    Uint8Array arr = new Uint8Array(new int[] {5, 5});
    int r = arr.lastIndexOf(5, 0);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=-2 with two-element array search last element returns -1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6000
     * @tc.name testUint8ArrayLastIndexOf060
     * @tc.desc Verify fromIndex=-2 with two-element array search last element returns -1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf060() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1});
    int r = arr.lastIndexOf(1, -2);
    assertEqual(-1, r);
    }

    /**
     * Verify fromIndex=0 single element array match returns 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6100
     * @tc.name testUint8ArrayLastIndexOf061
     * @tc.desc Verify fromIndex=0 single element array match returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf061() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    int r = arr.lastIndexOf(42, 0);
    assertEqual(0, r);
    }

    /**
     * Verify array length unchanged after finding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6200
     * @tc.name testUint8ArrayLastIndexOf062
     * @tc.desc Verify array length unchanged after finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf062() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.lastIndexOf(2);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify array length unchanged after not finding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6300
     * @tc.name testUint8ArrayLastIndexOf063
     * @tc.desc Verify array length unchanged after not finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf063() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.lastIndexOf(99);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify array length unchanged after call with fromIndex
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6400
     * @tc.name testUint8ArrayLastIndexOf064
     * @tc.desc Verify array length unchanged after call with fromIndex
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf064() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int lenBefore = arr.length();
    arr.lastIndexOf(1, 0);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify empty array length remains 0 after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6500
     * @tc.name testUint8ArrayLastIndexOf065
     * @tc.desc Verify empty array length remains 0 after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf065() {
    Uint8Array arr = new Uint8Array();
    arr.lastIndexOf(0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify byteLength unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6600
     * @tc.name testUint8ArrayLastIndexOf066
     * @tc.desc Verify byteLength unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf066() {
    Uint8Array arr = new Uint8Array(5);
    int blBefore = arr.byteLength();
    arr.lastIndexOf(0);
    assertEqual(blBefore, arr.byteLength());
    }

    /**
     * Verify underlying buffer byteLength unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6700
     * @tc.name testUint8ArrayLastIndexOf067
     * @tc.desc Verify underlying buffer byteLength unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf067() {
    Uint8Array arr = new Uint8Array(5);
    int bufBlBefore = arr.buffer().byteLength();
    arr.lastIndexOf(0);
    assertEqual(bufBlBefore, arr.buffer().byteLength());
    }

    /**
     * Verify element[0] unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6800
     * @tc.name testUint8ArrayLastIndexOf068
     * @tc.desc Verify element[0] unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf068() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    arr.lastIndexOf(20);
    assertEqualInt(10, arr.at(0));
    }

    /**
     * Verify element[1] unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_6900
     * @tc.name testUint8ArrayLastIndexOf069
     * @tc.desc Verify element[1] unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf069() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    arr.lastIndexOf(20);
    assertEqualInt(20, arr.at(1));
    }

    /**
     * Verify element[last] unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7000
     * @tc.name testUint8ArrayLastIndexOf070
     * @tc.desc Verify element[last] unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf070() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    arr.lastIndexOf(20);
    assertEqualInt(30, arr.at(2));
    }

    /**
     * Verify elements unchanged after not finding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7100
     * @tc.name testUint8ArrayLastIndexOf071
     * @tc.desc Verify elements unchanged after not finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf071() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    arr.lastIndexOf(99);
    assertEqualInt(10, arr.at(0));
    }

    /**
     * Verify elements unchanged for ArrayBuffer view array after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7200
     * @tc.name testUint8ArrayLastIndexOf072
     * @tc.desc Verify elements unchanged for ArrayBuffer view array after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf072() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8Array arr = new Uint8Array(buf);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.lastIndexOf(20);
    assertEqualInt(10, arr.at(0));
    }

    /**
     * Verify byteOffset unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7300
     * @tc.name testUint8ArrayLastIndexOf073
     * @tc.desc Verify byteOffset unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf073() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf, 1, 3);
    int offBefore = arr.byteOffset();
    arr.lastIndexOf(0);
    assertEqual(offBefore, arr.byteOffset());
    }

    /**
     * Verify BYTES_PER_ELEMENT unchanged after call
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7400
     * @tc.name testUint8ArrayLastIndexOf074
     * @tc.desc Verify BYTES_PER_ELEMENT unchanged after call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf074() {
    Uint8Array arr = new Uint8Array(3);
    arr.lastIndexOf(0);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify two identical calls return same value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7500
     * @tc.name testUint8ArrayLastIndexOf075
     * @tc.desc Verify two identical calls return same value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf075() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r1 = arr.lastIndexOf(2);
    int r2 = arr.lastIndexOf(2);
    assertEqual(r2, r1);
    }

    /**
     * Verify two identical not-found calls return same value
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7600
     * @tc.name testUint8ArrayLastIndexOf076
     * @tc.desc Verify two identical not-found calls return same value
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf076() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r1 = arr.lastIndexOf(99);
    int r2 = arr.lastIndexOf(99);
    assertEqual(r2, r1);
    }

    /**
     * Verify right-to-left search order returns correct index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7700
     * @tc.name testUint8ArrayLastIndexOf077
     * @tc.desc Verify right-to-left search order returns correct index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf077() {
    Uint8Array arr = new Uint8Array(new int[] {3, 2, 1, 2, 3});
    int r = arr.lastIndexOf(2);
    assertEqual(3, r);
    }

    /**
     * Verify array with boundary value 255 returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7800
     * @tc.name testUint8ArrayLastIndexOf078
     * @tc.desc Verify array with boundary value 255 returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf078() {
    Uint8Array arr = new Uint8Array(new int[] {255, 128, 255});
    int r = arr.lastIndexOf(255);
    assertEqual(2, r);
    }

    /**
     * Verify array with boundary value 0 returns last index
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_7900
     * @tc.name testUint8ArrayLastIndexOf079
     * @tc.desc Verify array with boundary value 0 returns last index
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf079() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 0});
    int r = arr.lastIndexOf(0);
    assertEqual(2, r);
    }

    /**
     * Verify fromIndex=0 duplicate elements only checks index 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_8000
     * @tc.name testUint8ArrayLastIndexOf080
     * @tc.desc Verify fromIndex=0 duplicate elements only checks index 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf080() {
    Uint8Array arr = new Uint8Array(new int[] {7, 7});
    int r = arr.lastIndexOf(7, 0);
    assertEqual(0, r);
    }

    /**
     * Verify fromIndex=-length+1 skips first element search
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_8100
     * @tc.name testUint8ArrayLastIndexOf081
     * @tc.desc Verify fromIndex=-length+1 skips first element search
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf081() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3});
    int r = arr.lastIndexOf(1, -2);
    assertEqual(0, r);
    }

    /**
     * Verify length=2 fromIndex=-3 treated as index 0 search
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_8200
     * @tc.name testUint8ArrayLastIndexOf082
     * @tc.desc Verify length=2 fromIndex=-3 treated as index 0 search
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf082() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2});
    int r = arr.lastIndexOf(1, -3);
    assertEqual(-1, r);
    }

    /**
     * Verify byteOffset unchanged after call with buffer offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_8300
     * @tc.name testUint8ArrayLastIndexOf083
     * @tc.desc Verify byteOffset unchanged after call with buffer offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf083() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 3, 5);
    int offBefore = arr.byteOffset();
    arr.lastIndexOf(0);
    assertEqual(offBefore, arr.byteOffset());
    }

    /**
     * Verify buffer reference unchanged after finding element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_LAST_INDEX_OF2_8400
     * @tc.name testUint8ArrayLastIndexOf084
     * @tc.desc Verify buffer reference unchanged after finding element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayLastIndexOf084() {
    Uint8Array arr = new Uint8Array(4);
    ArrayBuffer bufBefore = arr.buffer();
    arr.lastIndexOf(0);
    assertEqual(bufBefore.byteLength(), arr.buffer().byteLength());
    }
}
