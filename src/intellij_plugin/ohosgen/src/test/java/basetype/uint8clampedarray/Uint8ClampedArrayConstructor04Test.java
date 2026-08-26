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
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayConstructor04Test —— Int16Array 方法族测试。
 */
public class Uint8ClampedArrayConstructor04Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0100
     * @tc.name testUint8ClampedArrayConstructorFour001
     * @tc.desc Verify constructing from a Uint8ClampedArray source [1, 2, 3] yields length 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour001() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0200
     * @tc.name testUint8ClampedArrayConstructorFour002
     * @tc.desc Verify constructing empty array yields length 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour002() {
    Uint8ClampedArray src = new Uint8ClampedArray(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0300
     * @tc.name testUint8ClampedArrayConstructorFour003
     * @tc.desc Verify constructing array [42] yields length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour003() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0400
     * @tc.name testUint8ClampedArrayConstructorFour004
     * @tc.desc Verify constructor element [0] equals 42 for array [42]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour004() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(42, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0500
     * @tc.name testUint8ClampedArrayConstructorFour005
     * @tc.desc Verify constructing array [1, 2, 3, 4, 5] yields length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour005() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0600
     * @tc.name testUint8ClampedArrayConstructorFour006
     * @tc.desc Verify element 0=1 from src length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour006() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0700
     * @tc.name testUint8ClampedArrayConstructorFour007
     * @tc.desc Verify element 4=5 from src length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour007() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.get(4));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0800
     * @tc.name testUint8ClampedArrayConstructorFour008
     * @tc.desc Verify element 0=0 from src=[0,0,0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour008() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_0900
     * @tc.name testUint8ClampedArrayConstructorFour009
     * @tc.desc Verify element 0=255 from src=[255,255,255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour009() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {255, 255, 255});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1000
     * @tc.name testUint8ClampedArrayConstructorFour010
     * @tc.desc Verify element 0=127 from src=[127]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour010() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {127});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(127, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1100
     * @tc.name testUint8ClampedArrayConstructorFour011
     * @tc.desc Verify element 0=128 from src=[128]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour011() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {128});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(128, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1200
     * @tc.name testUint8ClampedArrayConstructorFour012
     * @tc.desc Verify copy constructor preserves the already-clamped value 255 from source [256]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour012() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {256});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1300
     * @tc.name testUint8ClampedArrayConstructorFour013
     * @tc.desc Verify copy constructor preserves the already-clamped value 255 from source [Number.POSITIVE_INFINITY]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour013() {
    Uint8ClampedArray src = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1400
     * @tc.name testUint8ClampedArrayConstructorFour014
     * @tc.desc Verify constructing 10-element array yields length 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour014() {
    Uint8ClampedArray src = new Uint8ClampedArray(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(10, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1500
     * @tc.name testUint8ClampedArrayConstructorFour015
     * @tc.desc Verify constructing 255-element array yields length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour015() {
    Uint8ClampedArray src = new Uint8ClampedArray(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1600
     * @tc.name testUint8ClampedArrayConstructorFour016
     * @tc.desc Verify constructing 256-element array yields length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour016() {
    Uint8ClampedArray src = new Uint8ClampedArray(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(256, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1700
     * @tc.name testUint8ClampedArrayConstructorFour017
     * @tc.desc Verify constructing 1024-element array yields length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour017() {
    Uint8ClampedArray src = new Uint8ClampedArray(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1024, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1800
     * @tc.name testUint8ClampedArrayConstructorFour018
     * @tc.desc Verify constructing 65535-element array yields length 65535
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour018() {
    Uint8ClampedArray src = new Uint8ClampedArray(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(65535, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_1900
     * @tc.name testUint8ClampedArrayConstructorFour019
     * @tc.desc Verify element 2=0 from length=5 zero-filled
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour019() {
    Uint8ClampedArray src = new Uint8ClampedArray(5);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2000
     * @tc.name testUint8ClampedArrayConstructorFour020
     * @tc.desc Verify element 1=20 from src=[10,20,30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour020() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(20, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2100
     * @tc.name testUint8ClampedArrayConstructorFour021
     * @tc.desc Verify copies updated element 0=99 from src
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour021() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    src.set(0, 99);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(99, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2200
     * @tc.name testUint8ClampedArrayConstructorFour022
     * @tc.desc Verify fill element at arr[1] equals 7 for length-3 array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour022() {
    Uint8ClampedArray src = new Uint8ClampedArray(3);
    src.fill(7);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(7, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2300
     * @tc.name testUint8ClampedArrayConstructorFour023
     * @tc.desc Verify Uint8ClampedArray.of element at arr[2] equals 33 for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour023() {
    Uint8ClampedArray src = Uint8ClampedArray.of(11, 22, 33);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(33, arr.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2400
     * @tc.name testUint8ClampedArrayConstructorFour024
     * @tc.desc Verify Uint8ClampedArray.from element at arr[0] equals 5 for array(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour024() {
    List<Number> fa = java.util.Arrays.asList(5, 10, 15);
    Uint8ClampedArray src = Uint8ClampedArray.from(fa);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2500
     * @tc.name testUint8ClampedArrayConstructorFour025
     * @tc.desc Verify constructor element [0] equals 1 for array [1, 2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour025() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray b = new Uint8ClampedArray(a);
    Uint8ClampedArray c = new Uint8ClampedArray(b);
    assertEqual(1, c.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2600
     * @tc.name testUint8ClampedArrayConstructorFour026
     * @tc.desc Verify constructing array [7, 8] yields length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour026() {
    Uint8ClampedArray a = new Uint8ClampedArray(new int[] {7, 8});
    Uint8ClampedArray b = new Uint8ClampedArray(a);
    Uint8ClampedArray c = new Uint8ClampedArray(b);
    assertEqual(2, c.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2700
     * @tc.name testUint8ClampedArrayConstructorFour027
     * @tc.desc Verify constructing from a zero-length ArrayBuffer creates an empty view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour027() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(0, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2800
     * @tc.name testUint8ClampedArrayConstructorFour028
     * @tc.desc Verify constructing from an ArrayBuffer with byteLength 255 creates length 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour028() {
    ArrayBuffer buf = new ArrayBuffer(255);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(255, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_2900
     * @tc.name testUint8ClampedArrayConstructorFour029
     * @tc.desc Verify constructing from an ArrayBuffer with byteLength 256 creates length 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour029() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(256, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3000
     * @tc.name testUint8ClampedArrayConstructorFour030
     * @tc.desc Verify constructing from an ArrayBuffer with byteLength 1024 creates length 1024
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour030() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(1024, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3100
     * @tc.name testUint8ClampedArrayConstructorFour031
     * @tc.desc Verify constructing from an ArrayBuffer with byteLength 65535 creates length 65535
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour031() {
    ArrayBuffer buf = new ArrayBuffer(65535);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(65535, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3200
     * @tc.name testUint8ClampedArrayConstructorFour032
     * @tc.desc Verify constructing from an ArrayBuffer creates a valid view 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour032() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3300
     * @tc.name testUint8ClampedArrayConstructorFour033
     * @tc.desc Verify constructing from an ArrayBuffer creates a valid view 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour033() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(0, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3400
     * @tc.name testUint8ClampedArrayConstructorFour034
     * @tc.desc Verify constructing from parent.buffer yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour034() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray arr = new Uint8ClampedArray(parent.buffer(), 0);
    assertEqual(4, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3500
     * @tc.name testUint8ClampedArrayConstructorFour035
     * @tc.desc Verify constructing from an ArrayBuffer creates a valid view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour035() {
    Uint8ClampedArray parent = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray arr = new Uint8ClampedArray(parent.buffer(), 0);
    assertEqual(40, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3600
     * @tc.name testUint8ClampedArrayConstructorFour036
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 8
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour036() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(8, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3700
     * @tc.name testUint8ClampedArrayConstructorFour037
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour037() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1);
    assertEqual(7, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3800
     * @tc.name testUint8ClampedArrayConstructorFour038
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour038() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0x4);
    assertEqual(12, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_3900
     * @tc.name testUint8ClampedArrayConstructorFour039
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour039() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 04);
    assertEqual(12, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4000
     * @tc.name testUint8ClampedArrayConstructorFour040
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 12
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour040() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0b100);
    assertEqual(12, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4100
     * @tc.name testUint8ClampedArrayConstructorFour041
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour041() {
    int off = 2;
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, off);
    assertEqual(6, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4200
     * @tc.name testUint8ClampedArrayConstructorFour042
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour042() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1 + 1);
    assertEqual(6, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4300
     * @tc.name testUint8ClampedArrayConstructorFour043
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 5
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour043() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 5 - 2);
    assertEqual(5, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4400
     * @tc.name testUint8ClampedArrayConstructorFour044
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 10
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour044() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2 * 3);
    assertEqual(10, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4500
     * @tc.name testUint8ClampedArrayConstructorFour045
     * @tc.desc Verify constructing ArrayBuffer-backed array yields length 13
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 11 % 4);
    assertEqual(13, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4600
     * @tc.name testUint8ClampedArrayConstructorFour046
     * @tc.desc Verify constructing Uint8ClampedArray from a Uint8ClampedArray source of length 1 produces an array of length 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour046() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4700
     * @tc.name testUint8ClampedArrayConstructorFour047
     * @tc.desc Verify constructing Uint8ClampedArray from an ArrayBuffer of byteLength 2 with byteOffset 0 produces an array of length 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour047() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(2, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4800
     * @tc.name testUint8ClampedArrayConstructorFour048
     * @tc.desc Verify constructing from a Uint8ClampedArray source sets byteLength equal to source length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour048() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_4900
     * @tc.name testUint8ClampedArrayConstructorFour049
     * @tc.desc Verify ArrayBuffer view byteLength equals buffer byteLength minus byteOffset
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour049() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3);
    assertEqual(5, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5000
     * @tc.name testUint8ClampedArrayConstructorFour050
     * @tc.desc Verify constructing from a Uint8ClampedArray source creates a zero-offset buffer view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour050() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5100
     * @tc.name testUint8ClampedArrayConstructorFour051
     * @tc.desc Verify ArrayBuffer view preserves byteOffset 2
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour051() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    assertEqual(2, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5200
     * @tc.name testUint8ClampedArrayConstructorFour052
     * @tc.desc Verify ArrayBuffer view preserves byteOffset 7
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 7);
    assertEqual(7, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5300
     * @tc.name testUint8ClampedArrayConstructorFour053
     * @tc.desc Verify constructing array [1, 2, 3] yields length src.length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour053() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(src.length(), arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5400
     * @tc.name testUint8ClampedArrayConstructorFour054
     * @tc.desc Verify ArrayBuffer view length matches the requested byte count
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour054() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 3);
    assertEqual(7, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5500
     * @tc.name testUint8ClampedArrayConstructorFour055
     * @tc.desc Verify ArrayBuffer-backed views share stored values across Uint8ClampedArray instances
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour055() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 99);
    Uint8Array peer = new Uint8Array(buf, 0);
    assertEqual(99, peer.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5600
     * @tc.name testUint8ClampedArrayConstructorFour056
     * @tc.desc Verify ArrayBuffer-backed views share stored values across Uint8ClampedArray instances
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour056() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    Uint8Array peer = new Uint8Array(buf, 0);
    peer.set(1, 77);
    assertEqual(77, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5700
     * @tc.name testUint8ClampedArrayConstructorFour057
     * @tc.desc Verify ArrayBuffer-backed views observe writes through the shared buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour057() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray a = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray b = new Uint8ClampedArray(buf, 4);
    a.set(4, 88);
    assertEqual(88, b.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5800
     * @tc.name testUint8ClampedArrayConstructorFour058
     * @tc.desc Verify ArrayBuffer view with zero length reports byteLength 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4);
    assertEqual(0, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_5900
     * @tc.name testUint8ClampedArrayConstructorFour059
     * @tc.desc Verify copy independent arr[0]=99 src[0]=1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour059() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 99);
    assertEqual(1, src.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6000
     * @tc.name testUint8ClampedArrayConstructorFour060
     * @tc.desc Verify constructing from a Uint8ClampedArray source allocates an independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour060() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertNotEqual(src.buffer(), arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6100
     * @tc.name testUint8ClampedArrayConstructorFour061
     * @tc.desc Verify copy from Uint8ClampedArray source is independent: src[1] stays 2 after arr.fill(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour061() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.fill(0);
    assertEqual(2, src.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6200
     * @tc.name testUint8ClampedArrayConstructorFour062
     * @tc.desc Verify copy from Uint8ClampedArray source is independent: arr[1] stays 2 after src.fill(0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour062() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    src.fill(0);
    assertEqual(2, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6300
     * @tc.name testUint8ClampedArrayConstructorFour063
     * @tc.desc Verify copied Uint8ClampedArray source starts at byteOffset 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour063() {
    Uint8ClampedArray big = new Uint8ClampedArray(new ArrayBuffer(8), 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(big);
    assertEqual(0, arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6400
     * @tc.name testUint8ClampedArrayConstructorFour064
     * @tc.desc Verify copied Uint8ClampedArray source preserves length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour064() {
    Uint8ClampedArray big = new Uint8ClampedArray(new ArrayBuffer(8), 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(big);
    assertEqual(6, arr.length());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6500
     * @tc.name testUint8ClampedArrayConstructorFour065
     * @tc.desc Verify copied Uint8ClampedArray source has byteLength equal to length
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour065() {
    Uint8ClampedArray big = new Uint8ClampedArray(new ArrayBuffer(8), 2);
    Uint8ClampedArray arr = new Uint8ClampedArray(big);
    assertEqual(6, arr.byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6600
     * @tc.name testUint8ClampedArrayConstructorFour066
     * @tc.desc Verify copied Uint8ClampedArray source preserves value 0
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour066() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {0});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6700
     * @tc.name testUint8ClampedArrayConstructorFour067
     * @tc.desc Verify copied Uint8ClampedArray source preserves value 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour067() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6800
     * @tc.name testUint8ClampedArrayConstructorFour068
     * @tc.desc Verify copied Uint8ClampedArray source preserves value 254
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour068() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {254});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(254, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_6900
     * @tc.name testUint8ClampedArrayConstructorFour069
     * @tc.desc Verify copied Uint8ClampedArray source preserves value 255
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour069() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {255});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7000
     * @tc.name testUint8ClampedArrayConstructorFour070
     * @tc.desc Verify copied Uint8ClampedArray source stores clamped value 255 for 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour070() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7100
     * @tc.name testUint8ClampedArrayConstructorFour071
     * @tc.desc Verify copied Uint8ClampedArray source stores clamped value 0 for -1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour071() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {100});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(0, -1);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7200
     * @tc.name testUint8ClampedArrayConstructorFour072
     * @tc.desc Verify ArrayBuffer-backed view stores clamped value 255 for 256
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour072() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 256);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7300
     * @tc.name testUint8ClampedArrayConstructorFour073
     * @tc.desc Verify ArrayBuffer-backed view stores clamped value 0 for NaN
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour073() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, Double.NaN);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7400
     * @tc.name testUint8ClampedArrayConstructorFour074
     * @tc.desc Verify ArrayBuffer-backed view stores clamped value 255 for positive infinity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour074() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, Double.POSITIVE_INFINITY);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7500
     * @tc.name testUint8ClampedArrayConstructorFour075
     * @tc.desc Verify ArrayBuffer-backed view stores clamped value 0 for negative infinity
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour075() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7600
     * @tc.name testUint8ClampedArrayConstructorFour076
     * @tc.desc Verify ArrayBuffer-backed view stores rounded value 0 for 0.4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour076() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 0.4);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7700
     * @tc.name testUint8ClampedArrayConstructorFour077
     * @tc.desc Verify ArrayBuffer-backed view stores rounded value 1 for 0.9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour077() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 0.9);
    assertEqual(1, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7800
     * @tc.name testUint8ClampedArrayConstructorFour078
     * @tc.desc Verify ArrayBuffer-backed view stores clamped value 0 for -1e9
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour078() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, -1e9);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_7900
     * @tc.name testUint8ClampedArrayConstructorFour079
     * @tc.desc Verify element 3=200 from buf length=4
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(3, 200);
    assertEqual(200, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8000
     * @tc.name testUint8ClampedArrayConstructorFour080
     * @tc.desc Verify ArrayBuffer-backed view at offset 1 stores and reads arr[0] equals 33
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour080() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 1);
    arr.set(0, 33);
    assertEqual(33, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8100
     * @tc.name testUint8ClampedArrayConstructorFour081
     * @tc.desc Verify ArrayBuffer-backed view at offset 2 stores and reads arr[1] equals 44
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour081() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2);
    arr.set(1, 44);
    assertEqual(44, arr.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8200
     * @tc.name testUint8ClampedArrayConstructorFour082
     * @tc.desc Verify ArrayBuffer constructor with INT_MAX byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour082() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 2147483647);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8300
     * @tc.name testUint8ClampedArrayConstructorFour083
     * @tc.desc Verify ArrayBuffer constructor with INT_MIN byteOffset throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour083() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, Integer.MIN_VALUE);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8400
     * @tc.name testUint8ClampedArrayConstructorFour084
     * @tc.desc Verify ArrayBuffer constructor with byteOffset greater than byteLength throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour084() {
    ArrayBuffer buf = new ArrayBuffer(8);
    try {
    new Uint8ClampedArray(buf, 9);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8500
     * @tc.name testUint8ClampedArrayConstructorFour085
     * @tc.desc Verify ArrayBuffer constructor with byteOffset 0x7FFFFFFF throws RangeError
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour085() {
    ArrayBuffer buf = new ArrayBuffer(4);
    try {
    new Uint8ClampedArray(buf, 0x7FFFFFFF);
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8600
     * @tc.name testUint8ClampedArrayConstructorFour086
     * @tc.desc Verify copied Uint8ClampedArray source preserves clamped high values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour086() {
    Uint8ClampedArray src = new Uint8ClampedArray(2);
    src.set(0, 300);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(255, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8700
     * @tc.name testUint8ClampedArrayConstructorFour087
     * @tc.desc Verify copied Uint8ClampedArray source preserves clamped low values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour087() {
    Uint8ClampedArray src = new Uint8ClampedArray(2);
    src.set(0, -50);
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(0, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8800
     * @tc.name testUint8ClampedArrayConstructorFour088
     * @tc.desc Verify a copied two-element Uint8ClampedArray can be modified independently
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour088() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    arr.set(1, 99);
    assertEqual(2, arr.length());
    assertEqual(99, arr.get(1));
    assertEqual(2, src.get(1));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_8900
     * @tc.name testUint8ClampedArrayConstructorFour089
     * @tc.desc Verify ArrayBuffer-backed view of length 4 stores value 99 at index 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour089() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(3, 99);
    assertEqual(4, arr.length());
    assertEqual(99, arr.get(3));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9000
     * @tc.name testUint8ClampedArrayConstructorFour090
     * @tc.desc Verify constructor element [0] equals 5 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour090() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 5);
    assertEqual(5, arr.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9100
     * @tc.name testUint8ClampedArrayConstructorFour091
     * @tc.desc Verify ArrayBuffer-backed views observe writes through the shared buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour091() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 100);
    Uint8ClampedArray peer = new Uint8ClampedArray(buf, 0);
    assertEqual(100, peer.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9200
     * @tc.name testUint8ClampedArrayConstructorFour092
     * @tc.desc Verify copy from Uint8ClampedArray source allocates buffer with byteLength 3
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour092() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    assertEqual(3, arr.buffer().byteLength());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9300
     * @tc.name testUint8ClampedArrayConstructorFour093
     * @tc.desc Verify arr.buffer and the original ArrayBuffer are the same reference object when constructing Uint8ClampedArray from an ArrayBuffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour093() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    assertEqual(buf, arr.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9400
     * @tc.name testUint8ClampedArrayConstructorFour094
     * @tc.desc Verify ArrayBuffer-backed view length plus byteOffset equals buffer byteLength
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour094() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 5);
    assertEqual(16, arr.length() + arr.byteOffset());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9500
     * @tc.name testUint8ClampedArrayConstructorFour095
     * @tc.desc Verify ArrayBuffer-backed views observe writes through the shared buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour095() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    arr.set(0, 11);
    arr.set(1, 22);
    Uint8ClampedArray peer = new Uint8ClampedArray(buf, 0);
    assertEqual(11, peer.get(0));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9600
     * @tc.name testUint8ClampedArrayConstructorFour096
     * @tc.desc Verify ArrayBuffer-backed child view stores clamped high values in the parent view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour096() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray child = new Uint8ClampedArray(buf, 2);
    child.set(0, 300);
    assertEqual(255, parent.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9700
     * @tc.name testUint8ClampedArrayConstructorFour097
     * @tc.desc Verify ArrayBuffer-backed child view stores clamped low values in the parent view
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour097() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray child = new Uint8ClampedArray(buf, 2);
    child.set(0, -100);
    assertEqual(0, parent.get(2));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9800
     * @tc.name testUint8ClampedArrayConstructorFour098
     * @tc.desc Verify subarray from an ArrayBuffer-backed view shares the original buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour098() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(buf, sub.buffer());
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_CONSTRUCTOR_FOUR_9900
     * @tc.name testUint8ClampedArrayConstructorFour099
     * @tc.desc Verify slice from an ArrayBuffer-backed view allocates an independent buffer
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayConstructorFour099() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 0);
    Uint8ClampedArray sl = arr.slice(0, 3);
    assertNotEqual(buf, sl.buffer());
    }
}
