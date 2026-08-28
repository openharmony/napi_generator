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
import basetype.common.RangeError;
import basetype.common.Uint8Array;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayAttribute01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayAttribute01Test extends BasTest {
    /**
     * Verify empty constructor BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0100
     * @tc.name testUint8ArrayAttribute001
     * @tc.desc Verify empty constructor BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute001() {
    Uint8Array arr = new Uint8Array();
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify empty constructor buffer.byteLength is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0200
     * @tc.name testUint8ArrayAttribute002
     * @tc.desc Verify empty constructor buffer.byteLength is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute002() {
    Uint8Array arr = new Uint8Array();
    assertEqual(0, arr.buffer().byteLength());
    }

    /**
     * Verify empty constructor byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0300
     * @tc.name testUint8ArrayAttribute003
     * @tc.desc Verify empty constructor byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute003() {
    Uint8Array arr = new Uint8Array();
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify empty constructor name is Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0400
     * @tc.name testUint8ArrayAttribute004
     * @tc.desc Verify empty constructor name is Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute004() {
    Uint8Array arr = new Uint8Array();
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    /**
     * Verify int constructor BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0500
     * @tc.name testUint8ArrayAttribute005
     * @tc.desc Verify int constructor BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute005() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify int constructor byteLength is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0600
     * @tc.name testUint8ArrayAttribute006
     * @tc.desc Verify int constructor byteLength is 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute006() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual(5, arr.byteLength());
    }

    /**
     * Verify int constructor name is Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0700
     * @tc.name testUint8ArrayAttribute007
     * @tc.desc Verify int constructor name is Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute007() {
    Uint8Array arr = new Uint8Array(5);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    /**
     * Verify number constructor length is 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0800
     * @tc.name testUint8ArrayAttribute008
     * @tc.desc Verify number constructor length is 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute008() {
    Uint8Array arr = new Uint8Array(5.0);
    assertEqual(5, arr.length());
    }

    /**
     * Verify copy constructor BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_0900
     * @tc.name testUint8ArrayAttribute009
     * @tc.desc Verify copy constructor BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute009() {
    Uint8Array src = new Uint8Array(3);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify copy constructor byteLength matches source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1000
     * @tc.name testUint8ArrayAttribute010
     * @tc.desc Verify copy constructor byteLength matches source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute010() {
    Uint8Array src = new Uint8Array(3);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify copy constructor name is Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1100
     * @tc.name testUint8ArrayAttribute011
     * @tc.desc Verify copy constructor name is Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute011() {
    Uint8Array src = new Uint8Array(3);
    Uint8Array arr = new Uint8Array(src);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    /**
     * Verify copy constructor buffer is independent
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1200
     * @tc.name testUint8ArrayAttribute012
     * @tc.desc Verify copy constructor buffer is independent
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute012() {
    Uint8Array src = new Uint8Array(3);
    src.set(0, 10);
    Uint8Array arr = new Uint8Array(src);
    arr.set(0, 20);
    assertEqual(10, src.get(0));
    }

    /**
     * Verify copy constructor byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1300
     * @tc.name testUint8ArrayAttribute013
     * @tc.desc Verify copy constructor byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute013() {
    Uint8Array src = new Uint8Array(3);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify FixedArray<int> constructor length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1400
     * @tc.name testUint8ArrayAttribute014
     * @tc.desc Verify FixedArray<int> constructor length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute014() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    assertEqual(3, arr.length());
    }

    /**
     * Verify FixedArray<int> constructor BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1500
     * @tc.name testUint8ArrayAttribute015
     * @tc.desc Verify FixedArray<int> constructor BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute015() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30});
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify FixedArray<number> constructor length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1600
     * @tc.name testUint8ArrayAttribute016
     * @tc.desc Verify FixedArray<number> constructor length is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute016() {
    Uint8Array arr = new Uint8Array(new double[] {1.0, 2.0});
    assertEqual(2, arr.length());
    }

    /**
     * Verify Array<int> constructor length matches source
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1700
     * @tc.name testUint8ArrayAttribute017
     * @tc.desc Verify Array<int> constructor length matches source
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute017() {
    List<Integer> src = java.util.Arrays.asList(5, 10, 15);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(3, arr.length());
    }

    /**
     * Verify ArrayBuffer constructor buffer reference is shared
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1800
     * @tc.name testUint8ArrayAttribute018
     * @tc.desc Verify ArrayBuffer constructor buffer reference is shared
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute018() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify ArrayBuffer constructor byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_1900
     * @tc.name testUint8ArrayAttribute019
     * @tc.desc Verify ArrayBuffer constructor byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute019() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer constructor byteLength equals buf.byteLength
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2000
     * @tc.name testUint8ArrayAttribute020
     * @tc.desc Verify ArrayBuffer constructor byteLength equals buf.byteLength
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute020() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(8, arr.byteLength());
    }

    /**
     * Verify two-parameter int offset constructor buffer reference is shared
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2100
     * @tc.name testUint8ArrayAttribute021
     * @tc.desc Verify two-parameter int offset constructor buffer reference is shared
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute021() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2);
    assertEqual(buf, arr.buffer());
    }

    /**
     * Verify two-parameter int offset constructor byteOffset is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2200
     * @tc.name testUint8ArrayAttribute022
     * @tc.desc Verify two-parameter int offset constructor byteOffset is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute022() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify two-parameter int offset constructor byteLength is remaining bytes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2300
     * @tc.name testUint8ArrayAttribute023
     * @tc.desc Verify two-parameter int offset constructor byteLength is remaining bytes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2);
    assertEqual(6, arr.byteLength());
    }

    /**
     * Verify two-parameter number offset constructor byteOffset is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2400
     * @tc.name testUint8ArrayAttribute024
     * @tc.desc Verify two-parameter number offset constructor byteOffset is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute024() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertEqual(2, arr.byteOffset());
    }

    /**
     * Verify two-parameter number offset constructor byteLength is remaining bytes
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2500
     * @tc.name testUint8ArrayAttribute025
     * @tc.desc Verify two-parameter number offset constructor byteLength is remaining bytes
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute025() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 2.0);
    assertEqual(6, arr.byteLength());
    }

    /**
     * Verify three-parameter constructor length is 4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2600
     * @tc.name testUint8ArrayAttribute026
     * @tc.desc Verify three-parameter constructor length is 4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 4);
    assertEqual(4, arr.length());
    }

    /**
     * Verify three-parameter undefined constructor length covers full buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2700
     * @tc.name testUint8ArrayAttribute027
     * @tc.desc Verify three-parameter undefined constructor length covers full buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute027() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(8, arr.length());
    }

    /**
     * Verify three-parameter undefined constructor byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2800
     * @tc.name testUint8ArrayAttribute028
     * @tc.desc Verify three-parameter undefined constructor byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute028() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify int length 0 constructor length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_2900
     * @tc.name testUint8ArrayAttribute029
     * @tc.desc Verify int length 0 constructor length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute029() {
    Uint8Array arr = new Uint8Array(0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify int length 1 constructor length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3000
     * @tc.name testUint8ArrayAttribute030
     * @tc.desc Verify int length 1 constructor length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute030() {
    Uint8Array arr = new Uint8Array(1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify int length 100 constructor length is 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3100
     * @tc.name testUint8ArrayAttribute031
     * @tc.desc Verify int length 100 constructor length is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute031() {
    Uint8Array arr = new Uint8Array(100);
    assertEqual(100, arr.length());
    }

    /**
     * Verify int length 255 constructor byteLength is 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3200
     * @tc.name testUint8ArrayAttribute032
     * @tc.desc Verify int length 255 constructor byteLength is 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute032() {
    Uint8Array arr = new Uint8Array(255);
    assertEqual(255, arr.byteLength());
    }

    /**
     * Verify int length 256 constructor byteLength is 256
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3300
     * @tc.name testUint8ArrayAttribute033
     * @tc.desc Verify int length 256 constructor byteLength is 256
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute033() {
    Uint8Array arr = new Uint8Array(256);
    assertEqual(256, arr.byteLength());
    }

    /**
     * Verify int length -1 constructor throws RangeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3400
     * @tc.name testUint8ArrayAttribute034
     * @tc.desc Verify int length -1 constructor throws RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute034() {
    try {
    Uint8Array arr = new Uint8Array(-1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify number length 2.0 constructor length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3500
     * @tc.name testUint8ArrayAttribute035
     * @tc.desc Verify number length 2.0 constructor length is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute035() {
    Uint8Array arr = new Uint8Array(2.0);
    assertEqual(2, arr.length());
    }

    /**
     * Verify number length 3.5 constructor length is truncated to 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3600
     * @tc.name testUint8ArrayAttribute036
     * @tc.desc Verify number length 3.5 constructor length is truncated to 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute036() {
    Uint8Array arr = new Uint8Array(3.5);
    assertEqual(3, arr.length());
    }

    /**
     * Verify number length 5.7 constructor length is truncated to 5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3700
     * @tc.name testUint8ArrayAttribute037
     * @tc.desc Verify number length 5.7 constructor length is truncated to 5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute037() {
    Uint8Array arr = new Uint8Array(5.7);
    assertEqual(5, arr.length());
    }

    /**
     * Verify ArrayBuffer offset int 0 constructor byteOffset is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3800
     * @tc.name testUint8ArrayAttribute038
     * @tc.desc Verify ArrayBuffer offset int 0 constructor byteOffset is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute038() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0);
    assertEqual(0, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset int 1 constructor byteOffset is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_3900
     * @tc.name testUint8ArrayAttribute039
     * @tc.desc Verify ArrayBuffer offset int 1 constructor byteOffset is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute039() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 1);
    assertEqual(1, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset int 1 constructor byteLength is remaining 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4000
     * @tc.name testUint8ArrayAttribute040
     * @tc.desc Verify ArrayBuffer offset int 1 constructor byteLength is remaining 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 1);
    assertEqual(7, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer offset int 3 constructor byteOffset is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4100
     * @tc.name testUint8ArrayAttribute041
     * @tc.desc Verify ArrayBuffer offset int 3 constructor byteOffset is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute041() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 3);
    assertEqual(3, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset number 1.5 constructor byteOffset is truncated to 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4200
     * @tc.name testUint8ArrayAttribute042
     * @tc.desc Verify ArrayBuffer offset number 1.5 constructor byteOffset is truncated to 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 1.5);
    assertEqual(1, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset number 1.5 constructor byteLength is remaining 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4300
     * @tc.name testUint8ArrayAttribute043
     * @tc.desc Verify ArrayBuffer offset number 1.5 constructor byteLength is remaining 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 1.5);
    assertEqual(7, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer three-parameter length int 0 constructor length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4400
     * @tc.name testUint8ArrayAttribute044
     * @tc.desc Verify ArrayBuffer three-parameter length int 0 constructor length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute044() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 0);
    assertEqual(0, arr.length());
    }

    /**
     * Verify ArrayBuffer three-parameter length int 1 constructor length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4500
     * @tc.name testUint8ArrayAttribute045
     * @tc.desc Verify ArrayBuffer three-parameter length int 1 constructor length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute045() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify ArrayBuffer three-parameter length int covers full buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4600
     * @tc.name testUint8ArrayAttribute046
     * @tc.desc Verify ArrayBuffer three-parameter length int covers full buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute046() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8Array arr = new Uint8Array(buf, 0, 8);
    assertEqual(8, arr.length());
    }

    /**
     * Verify Uint8Array.of(1) single element length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4700
     * @tc.name testUint8ArrayAttribute047
     * @tc.desc Verify Uint8Array.of(1) single element length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute047() {
    Uint8Array arr = Uint8Array.of(1);
    assertEqual(1, arr.length());
    }

    /**
     * Verify Uint8Array.of(1, 2, 3) multiple elements length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4800
     * @tc.name testUint8ArrayAttribute048
     * @tc.desc Verify Uint8Array.of(1, 2, 3) multiple elements length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute048() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(3, arr.length());
    }

    /**
     * Verify Uint8Array.of(1, 2, 3) multiple elements BYTES_PER_ELEMENT is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_4900
     * @tc.name testUint8ArrayAttribute049
     * @tc.desc Verify Uint8Array.of(1, 2, 3) multiple elements BYTES_PER_ELEMENT is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify Uint8Array.of(1, 2, 3) multiple elements name is Uint8Array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5000
     * @tc.name testUint8ArrayAttribute050
     * @tc.desc Verify Uint8Array.of(1, 2, 3) multiple elements name is Uint8Array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    /**
     * Verify Uint8Array.from([10, 20]) from FixedArray length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5100
     * @tc.name testUint8ArrayAttribute051
     * @tc.desc Verify Uint8Array.from([10, 20]) from FixedArray length is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute051() {
    Uint8Array arr = Uint8Array.from(new int[] {10, 20});
    assertEqual(2, arr.length());
    }

    /**
     * Verify Uint8Array.from(Set<int>) from Set length equals set size
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5200
     * @tc.name testUint8ArrayAttribute052
     * @tc.desc Verify Uint8Array.from(Set<int>) from Set length equals set size
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute052() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(1);
    s.add(2);
    Uint8Array arr = Uint8Array.from(s);
    assertEqual(2, arr.length());
    }

    /**
     * Verify Uint8Array.from(src) from same type copy length is same
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5300
     * @tc.name testUint8ArrayAttribute053
     * @tc.desc Verify Uint8Array.from(src) from same type copy length is same
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute053() {
    Uint8Array src = Uint8Array.of(5, 6);
    Uint8Array arr = Uint8Array.from(src);
    assertEqual(2, arr.length());
    }

    /**
     * Verify fill operation length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5400
     * @tc.name testUint8ArrayAttribute054
     * @tc.desc Verify fill operation length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute054() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify fill operation BYTES_PER_ELEMENT unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5500
     * @tc.name testUint8ArrayAttribute055
     * @tc.desc Verify fill operation BYTES_PER_ELEMENT unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute055() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(1);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    /**
     * Verify fill operation name unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5600
     * @tc.name testUint8ArrayAttribute056
     * @tc.desc Verify fill operation name unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute056() {
    Uint8Array arr = new Uint8Array(3);
    arr.fill(1);
    assertEqual("Uint8Array", arr.getClass().getSimpleName());
    }

    /**
     * Verify copyWithin operation length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5700
     * @tc.name testUint8ArrayAttribute057
     * @tc.desc Verify copyWithin operation length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    arr.copyWithin(0, 2);
    assertEqual(4, arr.length());
    }

    /**
     * Verify set operation length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5800
     * @tc.name testUint8ArrayAttribute058
     * @tc.desc Verify set operation length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute058() {
    Uint8Array arr = new Uint8Array(3);
    arr.set(new Uint8Array(new int[] {1, 2}), 0);
    assertEqual(3, arr.length());
    }

    /**
     * Verify sort operation length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_5900
     * @tc.name testUint8ArrayAttribute059
     * @tc.desc Verify sort operation length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute059() {
    Uint8Array arr = Uint8Array.of(3, 1, 2);
    arr.sort();
    assertEqual(3, arr.length());
    }

    /**
     * Verify reverse operation length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6000
     * @tc.name testUint8ArrayAttribute060
     * @tc.desc Verify reverse operation length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.reverse();
    assertEqual(3, arr.length());
    }

    /**
     * Verify map operation original array length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6100
     * @tc.name testUint8ArrayAttribute061
     * @tc.desc Verify map operation original array length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.map((v, i, a) -> v + 1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify filter operation original array length unchanged
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6200
     * @tc.name testUint8ArrayAttribute062
     * @tc.desc Verify filter operation original array length unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute062() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    arr.filter((v, i, a) -> v > 1);
    assertEqual(3, arr.length());
    }

    /**
     * Verify two Uint8Array from same ArrayBuffer share buffer reference
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6300
     * @tc.name testUint8ArrayAttribute063
     * @tc.desc Verify two Uint8Array from same ArrayBuffer share buffer reference
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute063() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8Array baseView = new Uint8Array(buf);
    Uint8Array offsetView = new Uint8Array(buf, 2);
    assertEqual(baseView.buffer(), offsetView.buffer());
    }

    /**
     * Verify subarray view shares buffer with original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6400
     * @tc.name testUint8ArrayAttribute064
     * @tc.desc Verify subarray view shares buffer with original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute064() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    }

    /**
     * Verify subarray view byteOffset reflects start offset
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6500
     * @tc.name testUint8ArrayAttribute065
     * @tc.desc Verify subarray view byteOffset reflects start offset
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute065() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array sub = arr.subarray(1, 3);
    assertEqual(1, sub.byteOffset());
    }

    /**
     * Verify subarray view byteLength corresponds to element count
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6600
     * @tc.name testUint8ArrayAttribute066
     * @tc.desc Verify subarray view byteLength corresponds to element count
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute066() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    Uint8Array sub = arr.subarray(1, 3);
    assertEqual(2, sub.byteLength());
    }

    /**
     * Verify hexadecimal 0xFF and 0x80 elements length is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6700
     * @tc.name testUint8ArrayAttribute067
     * @tc.desc Verify hexadecimal 0xFF and 0x80 elements length is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute067() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF, 0x80});
    assertEqual(2, arr.length());
    }

    /**
     * Verify mixed hexadecimal elements byteLength is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6800
     * @tc.name testUint8ArrayAttribute068
     * @tc.desc Verify mixed hexadecimal elements byteLength is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute068() {
    Uint8Array arr = new Uint8Array(new int[] {0x00, 0xFF, 0x80});
    assertEqual(3, arr.byteLength());
    }

    /**
     * Verify all-zero elements length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_6900
     * @tc.name testUint8ArrayAttribute069
     * @tc.desc Verify all-zero elements length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute069() {
    Uint8Array arr = new Uint8Array(new int[] {0, 0, 0});
    assertEqual(3, arr.length());
    }

    /**
     * Verify all-255 elements length is 3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7000
     * @tc.name testUint8ArrayAttribute070
     * @tc.desc Verify all-255 elements length is 3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute070() {
    Uint8Array arr = new Uint8Array(new int[] {255, 255, 255});
    assertEqual(3, arr.length());
    }

    /**
     * Verify middle value 127 element length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7100
     * @tc.name testUint8ArrayAttribute071
     * @tc.desc Verify middle value 127 element length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute071() {
    Uint8Array arr = new Uint8Array(new int[] {127});
    assertEqual(1, arr.length());
    }

    /**
     * Verify boundary values 1 and 255 elements byteLength is 2
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7200
     * @tc.name testUint8ArrayAttribute072
     * @tc.desc Verify boundary values 1 and 255 elements byteLength is 2
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute072() {
    Uint8Array arr = new Uint8Array(new int[] {1, 255});
    assertEqual(2, arr.byteLength());
    }

    /**
     * Verify copy from empty Uint8Array length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7300
     * @tc.name testUint8ArrayAttribute073
     * @tc.desc Verify copy from empty Uint8Array length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute073() {
    Uint8Array src = new Uint8Array();
    Uint8Array arr = new Uint8Array(src);
    assertEqual(0, arr.length());
    }

    /**
     * Verify Uint8Array.from from empty Set length is 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7400
     * @tc.name testUint8ArrayAttribute074
     * @tc.desc Verify Uint8Array.from from empty Set length is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute074() {
    Set<Integer> s = new LinkedHashSet<>();
    Uint8Array arr = Uint8Array.from(s);
    assertEqual(0, arr.length());
    }

    /**
     * Verify Uint8Array.from from single element Set length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7500
     * @tc.name testUint8ArrayAttribute075
     * @tc.desc Verify Uint8Array.from from single element Set length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute075() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(100);
    Uint8Array arr = Uint8Array.from(s);
    assertEqual(1, arr.length());
    }

    /**
     * Verify ArrayBuffer size 1 constructor length is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7600
     * @tc.name testUint8ArrayAttribute076
     * @tc.desc Verify ArrayBuffer size 1 constructor length is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute076() {
    ArrayBuffer buf = new ArrayBuffer(1);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(1, arr.length());
    }

    /**
     * Verify ArrayBuffer size 100 constructor length is 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7700
     * @tc.name testUint8ArrayAttribute077
     * @tc.desc Verify ArrayBuffer size 100 constructor length is 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute077() {
    ArrayBuffer buf = new ArrayBuffer(100);
    Uint8Array arr = new Uint8Array(buf);
    assertEqual(100, arr.length());
    }

    /**
     * Verify ArrayBuffer offset int 7 constructor byteOffset is 7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7800
     * @tc.name testUint8ArrayAttribute078
     * @tc.desc Verify ArrayBuffer offset int 7 constructor byteOffset is 7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute078() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 7);
    assertEqual(7, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset int 7 constructor byteLength is remaining 9
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_7900
     * @tc.name testUint8ArrayAttribute079
     * @tc.desc Verify ArrayBuffer offset int 7 constructor byteLength is remaining 9
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute079() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 7);
    assertEqual(9, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer offset int 15 constructor byteOffset is 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8000
     * @tc.name testUint8ArrayAttribute080
     * @tc.desc Verify ArrayBuffer offset int 15 constructor byteOffset is 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute080() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 15);
    assertEqual(15, arr.byteOffset());
    }

    /**
     * Verify ArrayBuffer offset int 15 constructor byteLength is 1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8100
     * @tc.name testUint8ArrayAttribute081
     * @tc.desc Verify ArrayBuffer offset int 15 constructor byteLength is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute081() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 15);
    assertEqual(1, arr.byteLength());
    }

    /**
     * Verify ArrayBuffer offset int 0 three-parameter length covers full buffer
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8200
     * @tc.name testUint8ArrayAttribute082
     * @tc.desc Verify ArrayBuffer offset int 0 three-parameter length covers full buffer
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute082() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8Array arr = new Uint8Array(buf, 0, 16);
    assertEqual(16, arr.length());
    }

    /**
     * Verify Array<int> with 10 zero elements length is 10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8300
     * @tc.name testUint8ArrayAttribute083
     * @tc.desc Verify Array<int> with 10 zero elements length is 10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute083() {
    List<Integer> src = java.util.Arrays.asList(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    Uint8Array arr = new Uint8Array(src);
    assertEqual(10, arr.length());
    }

    /**
     * Verify map returns new array with same length as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8400
     * @tc.name testUint8ArrayAttribute084
     * @tc.desc Verify map returns new array with same length as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute084() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array mapped = arr.map((v, i, a) -> v + 1);
    assertEqual(3, mapped.length());
    }

    /**
     * Verify filter returns new array with length less than original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8500
     * @tc.name testUint8ArrayAttribute085
     * @tc.desc Verify filter returns new array with length less than original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute085() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array filtered = arr.filter((v, i, a) -> v > 3);
    assertEqual(2, filtered.length());
    }

    /**
     * Verify toReversed returns new array with same length as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8600
     * @tc.name testUint8ArrayAttribute086
     * @tc.desc Verify toReversed returns new array with same length as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute086() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array rev = arr.toReversed();
    assertEqual(3, rev.length());
    }

    /**
     * Verify toSorted returns new array with same length as original
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_ATTRIBUTE01_8700
     * @tc.name testUint8ArrayAttribute087
     * @tc.desc Verify toSorted returns new array with same length as original
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayAttribute087() {
    Uint8Array arr = Uint8Array.of(3, 1, 2);
    Uint8Array sorted = arr.toSorted();
    assertEqual(3, sorted.length());
    }
}
