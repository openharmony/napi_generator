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
 * Uint8ArrayReduce02Test —— Int16Array 方法族测试。
 */
public class Uint8ArrayReduce02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0100
     * @tc.name testUint8ArrayReduce001
     * @tc.desc Verify reduce with 1 parameter (callbackfn) for addition accumulation
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0200
     * @tc.name testUint8ArrayReduce002
     * @tc.desc Verify callbackfn predefined as const passed to reduce call
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce002() {
    Uint8Array.Uint8ArrayReducer2 fn = (prev, curr) -> prev + curr;
    Uint8Array arr = Uint8Array.of(4, 5, 6);
    int result = arr.reduce(fn);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0300
     * @tc.name testUint8ArrayReduce003
     * @tc.desc Verify callbackfn addition accumulation [1,2,3,4,5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce003() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0400
     * @tc.name testUint8ArrayReduce004
     * @tc.desc Verify callbackfn multiplication accumulation [2,3,4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce004() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> prev * curr);
    assertEqual(24, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0500
     * @tc.name testUint8ArrayReduce005
     * @tc.desc Verify callbackfn subtraction [100,10,20,30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce005() {
    Uint8Array arr = Uint8Array.of(100, 10, 20, 30);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev - curr);
    assertEqual(40, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0600
     * @tc.name testUint8ArrayReduce006
     * @tc.desc Verify callbackfn division [256,2,4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce006() {
    Uint8Array arr = Uint8Array.of(256, 2, 4);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> prev / curr);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0700
     * @tc.name testUint8ArrayReduce007
     * @tc.desc Verify callbackfn using Math.max to find maximum [3,1,4,1,5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce007() {
    Uint8Array arr = Uint8Array.of(3, 1, 4, 1, 5);
    int result = arr.reduce((prev, curr, $x1, $x2)-> Math.max(prev, curr));
    assertEqual(5, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0800
     * @tc.name testUint8ArrayReduce008
     * @tc.desc Verify callbackfn using Math.min to find minimum [10,2,8,4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce008() {
    Uint8Array arr = Uint8Array.of(10, 2, 8, 4);
    int result = arr.reduce((prev, curr, $x1, $x2)-> Math.min(prev, curr));
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_0900
     * @tc.name testUint8ArrayReduce009
     * @tc.desc Verify callbackfn ternary operator to find maximum [1,9,4,7]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce009() {
    Uint8Array arr = Uint8Array.of(1, 9, 4, 7);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev > curr ? prev : curr);
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1000
     * @tc.name testUint8ArrayReduce010
     * @tc.desc Verify callbackfn ternary operator to find minimum [8,3,6,2]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce010() {
    Uint8Array arr = Uint8Array.of(8, 3, 6, 2);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev < curr ? prev : curr);
    assertEqual(2, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1100
     * @tc.name testUint8ArrayReduce011
     * @tc.desc Verify callbackfn bitwise OR [0x0F,0xF0] hexadecimal
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce011() {
    Uint8Array arr = Uint8Array.of(0x0F, 0xF0);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev | curr);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1200
     * @tc.name testUint8ArrayReduce012
     * @tc.desc Verify callbackfn bitwise AND [0xFF,0x0F,0xF0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce012() {
    Uint8Array arr = Uint8Array.of(0xFF, 0x0F, 0xF0);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev & curr);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1300
     * @tc.name testUint8ArrayReduce013
     * @tc.desc Verify callbackfn bitwise XOR [0b101,0b011,0b110] binary literals
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce013() {
    Uint8Array arr = Uint8Array.of(0b101, 0b011, 0b110);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev ^ curr);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1400
     * @tc.name testUint8ArrayReduce014
     * @tc.desc Verify callbackfn exponentiation [2,3,2] using **
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce014() {
    Uint8Array arr = Uint8Array.of(2, 3, 2);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> (int) Math.pow(prev, curr));
    assertEqual(64, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1500
     * @tc.name testUint8ArrayReduce015
     * @tc.desc Verify callbackfn number concatenation [1,2,3,4] using prev*10+curr
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce015() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev * 10 + curr);
    assertEqual(1234, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1600
     * @tc.name testUint8ArrayReduce016
     * @tc.desc Verify callbackfn modulo 256 truncation sum [150,150,150]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce016() {
    Uint8Array arr = Uint8Array.of(150, 150, 150);
    int result = arr.reduce((prev, curr, $x1, $x2)-> (prev + curr) & 0xFF);
    assertEqual(194, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1700
     * @tc.name testUint8ArrayReduce017
     * @tc.desc Verify callbackfn identity return prev [7,1,2,3] first element unchanged
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce017() {
    Uint8Array arr = Uint8Array.of(7, 1, 2, 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev);
    assertEqual(7, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1800
     * @tc.name testUint8ArrayReduce018
     * @tc.desc Verify callbackfn forward return curr [7,1,2,3] result is last element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce018() {
    Uint8Array arr = Uint8Array.of(7, 1, 2, 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> curr);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_1900
     * @tc.name testUint8ArrayReduce019
     * @tc.desc Verify callbackfn sum of squares [1,3,5] using prev+curr*curr
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce019() {
    Uint8Array arr = Uint8Array.of(1, 3, 5);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> prev + curr * curr);
    assertEqual(35, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2000
     * @tc.name testUint8ArrayReduce020
     * @tc.desc Verify callbackfn absolute difference [100,30,20] using Math.abs
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce020() {
    Uint8Array arr = Uint8Array.of(100, 30, 20);
    int result = arr.reduce((prev, curr, $x1, $x2)-> Math.abs(prev - curr));
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2100
     * @tc.name testUint8ArrayReduce021
     * @tc.desc Verify callbackfn prev*curr+prev [2,3,1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce021() {
    Uint8Array arr = Uint8Array.of(2, 3, 1);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> prev * curr + prev);
    assertEqual(16, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2200
     * @tc.name testUint8ArrayReduce022
     * @tc.desc Verify callbackfn prev+curr*10 [1,2,3,4]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce022() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr * 10);
    assertEqual(91, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2300
     * @tc.name testUint8ArrayReduce023
     * @tc.desc Verify callbackfn conditional sum [10,50,5,100] only add values greater than 20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce023() {
    Uint8Array arr = Uint8Array.of(10, 50, 5, 100);
    int result = arr.reduce((prev, curr, $x1, $x2)-> curr > 20 ? prev + curr : prev);
    assertEqual(160, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2400
     * @tc.name testUint8ArrayReduce024
     * @tc.desc Verify callbackfn prev*(curr+1) [1,2,3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce024() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev * (curr + 1));
    assertEqual(12, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2500
     * @tc.name testUint8ArrayReduce025
     * @tc.desc Verify callbackfn left shift accumulation [1,1,1,1] using (prev<<1)+curr
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce025() {
    Uint8Array arr = Uint8Array.of(1, 1, 1, 1);
    int result = arr.reduce((prev, curr, $x1, $x2)-> (prev << 1) + curr);
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2600
     * @tc.name testUint8ArrayReduce026
     * @tc.desc Verify callbackfn bitwise OR three elements [0xAA,0x55,0xFF]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce026() {
    Uint8Array arr = Uint8Array.of(0xAA, 0x55, 0xFF);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev | curr);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2700
     * @tc.name testUint8ArrayReduce027
     * @tc.desc Verify callbackfn add a[0] each time [1,2,3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, idx, a)-> prev + curr + a.get(0));
    assertEqual(8, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2800
     * @tc.name testUint8ArrayReduce028
     * @tc.desc Verify callbackfn multi-statement body [3,1,4,1,5] with internal const declaration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce028() {
    Uint8Array arr = Uint8Array.of(3, 1, 4, 1, 5);
    int result = arr.reduce((prev, curr, $x1, $x2)-> { int p = prev; int c = curr; return p + c; });
    assertEqual(14, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_2900
     * @tc.name testUint8ArrayReduce029
     * @tc.desc Verify callbackfn using Math.floor divide by 2 [3,6,9]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce029() {
    Uint8Array arr = Uint8Array.of(3, 6, 9);
    double result = arr.reduceDouble((prev, curr, $x1, $x2)-> prev + (int) (curr / 2));
    assertEqual(10, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3000
     * @tc.name testUint8ArrayReduce030
     * @tc.desc Verify callbackfn prev-Math.abs(curr) [100,30,200]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce030() {
    Uint8Array arr = Uint8Array.of(100, 30, 200);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev - Math.abs(curr));
    assertEqual(-130, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3100
     * @tc.name testUint8ArrayReduce031
     * @tc.desc Verify callbackfn prev ^ (curr<<1) [1,2,3]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev ^ (curr << 1));
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3200
     * @tc.name testUint8ArrayReduce032
     * @tc.desc Verify callbackfn Math.abs(prev-curr) [10,30,5]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce032() {
    Uint8Array arr = Uint8Array.of(10, 30, 5);
    int result = arr.reduce((prev, curr, $x1, $x2)-> Math.abs(prev - curr));
    assertEqual(15, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3300
     * @tc.name testUint8ArrayReduce033
     * @tc.desc Verify callbackfn first currentIndex is 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce033() {
    int[] firstIdx = {-1};
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    arr.reduce((prev, curr, idx, $x1)-> {
    if (firstIdx[0] == -1) {
    firstIdx[0] = idx;
    };
    return prev + curr;
    });
    assertEqual(1, firstIdx[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3400
     * @tc.name testUint8ArrayReduce034
     * @tc.desc Verify callbackfn last currentIndex is length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce034() {
    int[] lastIdx = {-1};
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    arr.reduce((prev, curr, idx, $x1)-> {
    lastIdx[0] = idx;
    return prev + curr;
    });
    assertEqual(2, lastIdx[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3500
     * @tc.name testUint8ArrayReduce035
     * @tc.desc Verify callbackfn accumulate index values [1,2,3,4,5] verify index sequence
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce035() {
    int[] sumIdx = {0};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.reduce((prev, curr, idx, $x1)-> {
    sumIdx[0] += idx;
    return prev + curr;
    });
    assertEqual(10, sumIdx[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3600
     * @tc.name testUint8ArrayReduce036
     * @tc.desc Verify callbackfn index strictly increments by 1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce036() {
    int[] prevIdx = {-1};
    boolean[] monotonic = {true};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.reduce((prev, curr, idx, $x1)-> {
    if (prevIdx[0] != -1 && idx != prevIdx[0] + 1) {
    monotonic[0] = false;
    };
    prevIdx[0] = idx;
    return prev + curr;
    });
    assertTrue(monotonic[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3700
     * @tc.name testUint8ArrayReduce037
     * @tc.desc Verify callbackfn call count equals length-1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce037() {
    int[] callCount = {0};
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.reduce((prev, curr, idx, $x1)-> {
    callCount[0]++;
    return prev + curr;
    });
    assertEqual(4, callCount[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3800
     * @tc.name testUint8ArrayReduce038
     * @tc.desc Verify callbackfn a[idx] === curr
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce038() {
    boolean[] match = {true};
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    arr.reduce((prev, curr, idx, a)-> {
    if (a.get(idx) != curr) {
    match[0] = false;
    };
    return prev + curr;
    });
    assertTrue(match[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_3900
     * @tc.name testUint8ArrayReduce039
     * @tc.desc Verify callbackfn array parameter === original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] sameRef = {false};
    arr.reduce((prev, curr, idx, a)-> {
    sameRef[0] = (a == arr);
    return prev + curr;
    });
    assertTrue(sameRef[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4000
     * @tc.name testUint8ArrayReduce040
     * @tc.desc Verify callbackfn array parameter length property
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce040() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int[] arrLen = {0};
    arr.reduce((prev, curr, idx, a)-> {
    arrLen[0] = a.length();
    return prev + curr;
    });
    assertEqual(4, arrLen[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4100
     * @tc.name testUint8ArrayReduce041
     * @tc.desc Verify callbackfn array parameter BYTES_PER_ELEMENT
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce041() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] bpe = {0};
    arr.reduce((prev, curr, idx, a)-> {
    bpe[0] = a.BYTES_PER_ELEMENT;
    return prev + curr;
    });
    assertEqual(1, bpe[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4200
     * @tc.name testUint8ArrayReduce042
     * @tc.desc Verify callbackfn array parameter buffer sharing
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce042() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] sameBuf = {false};
    arr.reduce((prev, curr, idx, a)-> {
    if (idx == 1) {
    sameBuf[0] = (a.buffer() == arr.buffer());
    };
    return prev + curr;
    });
    assertTrue(sameBuf[0]);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4300
     * @tc.name testUint8ArrayReduce043
     * @tc.desc Verify return value type is number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce043() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    String resultType = BasTest.className(result);
    assertEqual("java.lang.Double", resultType);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4400
     * @tc.name testUint8ArrayReduce044
     * @tc.desc Verify single element [42] returns the element itself
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce044() {
    Uint8Array arr = Uint8Array.of(42);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(42, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4500
     * @tc.name testUint8ArrayReduce045
     * @tc.desc Verify single element [0] returns 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce045() {
    Uint8Array arr = Uint8Array.of(0);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4600
     * @tc.name testUint8ArrayReduce046
     * @tc.desc Verify two elements [10,20] addition
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce046() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4700
     * @tc.name testUint8ArrayReduce047
     * @tc.desc Verify all-zero array sum is 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce047() {
    Uint8Array arr = Uint8Array.of(0, 0, 0, 0);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(0, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4800
     * @tc.name testUint8ArrayReduce048
     * @tc.desc Verify floating point literal truncation storage [1.5, 2.7] sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce048() {
    Uint8Array arr = Uint8Array.of(1.5, 2.7);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(3, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_4900
     * @tc.name testUint8ArrayReduce049
     * @tc.desc Verify negative value wraparound [-1] stored as 255 returns 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce049() {
    Uint8Array arr = Uint8Array.of(-1);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5000
     * @tc.name testUint8ArrayReduce050
     * @tc.desc Verify overflow truncation [256,257] stored as [0,1]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce050() {
    Uint8Array arr = Uint8Array.of(256, 257);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(1, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5100
     * @tc.name testUint8ArrayReduce051
     * @tc.desc Verify all 255 four elements sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce051() {
    Uint8Array arr = Uint8Array.of(255, 255, 255, 255);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(1020, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5200
     * @tc.name testUint8ArrayReduce052
     * @tc.desc Verify [128,127] midpoint boundary
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce052() {
    Uint8Array arr = Uint8Array.of(128, 127);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(255, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5300
     * @tc.name testUint8ArrayReduce053
     * @tc.desc Verify single element callback not executed, returns element itself
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce053() {
    boolean[] invoked = {false};
    Uint8Array arr = Uint8Array.of(99);
    int result = arr.reduce((prev, curr, $x1, $x2)-> { invoked[0] = true; return prev + curr; });
    assertFalse(invoked[0]);
    assertEqual(99, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5400
     * @tc.name testUint8ArrayReduce054
     * @tc.desc Verify result toString
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce054() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual("60", String.valueOf(result));
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5500
     * @tc.name testUint8ArrayReduce055
     * @tc.desc Verify empty array no constructor reduce throws exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce055() {
    Uint8Array arr = new Uint8Array();
    try {
    arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    fail();
    } catch (RuntimeException e) {
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5600
     * @tc.name testUint8ArrayReduce056
     * @tc.desc Verify empty ArrayBuffer view reduce throws exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce056() {
    Uint8Array arr = new Uint8Array(new ArrayBuffer(0));
    try {
    arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    fail();
    } catch (RuntimeException e) {
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5700
     * @tc.name testUint8ArrayReduce057
     * @tc.desc Verify filter result empty array reduce throws exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce057() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array empty = src.filter((x) -> x > 100);
    try {
    empty.reduce((prev, curr, $x1, $x2)-> prev + curr);
    fail();
    } catch (RuntimeException e) {
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5800
     * @tc.name testUint8ArrayReduce058
     * @tc.desc Verify callback throwing Error passthrough
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce058() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.reduce((prev, curr, $x1, $x2)-> {
    throw new Error();
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_5900
     * @tc.name testUint8ArrayReduce059
     * @tc.desc Verify callback throwing RangeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce059() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.reduce((prev, curr, $x1, $x2)-> {
    throw new RangeError();
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6000
     * @tc.name testUint8ArrayReduce060
     * @tc.desc Verify callback throwing error at specific iteration
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    try {
    arr.reduce((prev, curr, idx, $x1)-> {
    if (idx == 3) {
    throw new Error();
    };
    return prev + curr;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6100
     * @tc.name testUint8ArrayReduce061
     * @tc.desc Verify callback throwing custom error message
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    try {
    arr.reduce((prev, curr, $x1, $x2)-> {
    throw new Error("reduce fail");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6200
     * @tc.name testUint8ArrayReduce062
     * @tc.desc Verify slice reduced sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce062() {
    Uint8Array src = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array sub = src.slice(1, 4);
    int result = sub.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(9, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6300
     * @tc.name testUint8ArrayReduce063
     * @tc.desc Verify ArrayBuffer view reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce063() {
    ArrayBuffer buf = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buf, 1, 3);
    arr.set(new Uint8Array(new int[] {10}), 0);
    arr.set(new Uint8Array(new int[] {20}), 1);
    arr.set(new Uint8Array(new int[] {30}), 2);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6400
     * @tc.name testUint8ArrayReduce064
     * @tc.desc Verify map then reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce064() {
    Uint8Array src = Uint8Array.of(1, 2, 3);
    Uint8Array doubled = src.map((x) -> x * 2);
    int result = doubled.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(12, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6500
     * @tc.name testUint8ArrayReduce065
     * @tc.desc Verify filter then reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce065() {
    Uint8Array src = Uint8Array.of(1, 2, 3, 4, 5);
    Uint8Array filtered = src.filter((x) -> x > 2);
    int result = filtered.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(12, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6600
     * @tc.name testUint8ArrayReduce066
     * @tc.desc Verify sub-view reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce066() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array firstView = new Uint8Array(buf, 0, 3);
    firstView.set(new Uint8Array(new int[] {1}), 0);
    firstView.set(new Uint8Array(new int[] {2}), 1);
    firstView.set(new Uint8Array(new int[] {3}), 2);
    Uint8Array secondView = new Uint8Array(buf, 3, 3);
    secondView.set(new Uint8Array(new int[] {10}), 0);
    secondView.set(new Uint8Array(new int[] {20}), 1);
    secondView.set(new Uint8Array(new int[] {30}), 2);
    int result = firstView.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(6, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6700
     * @tc.name testUint8ArrayReduce067
     * @tc.desc Verify constructor(length) then reduce
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce067() {
    Uint8Array arr = new Uint8Array(4);
    arr.set(new Uint8Array(new int[] {5}), 0);
    arr.set(new Uint8Array(new int[] {10}), 1);
    arr.set(new Uint8Array(new int[] {15}), 2);
    arr.set(new Uint8Array(new int[] {20}), 3);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(50, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6800
     * @tc.name testUint8ArrayReduce068
     * @tc.desc Verify from array-like reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce068() {
    Uint8Array arr = Uint8Array.from(new int[] {10, 20, 30});
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_6900
     * @tc.name testUint8ArrayReduce069
     * @tc.desc Verify from with mapFn reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce069() {
    Uint8Array arr = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (x, $x1) -> x * 10);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7000
     * @tc.name testUint8ArrayReduce070
     * @tc.desc Verify closure variable in from mapFn reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce070() {
    int multiplier = 5;
    Uint8Array arr = Uint8Array.from(new double[] {1.0, 2.0, 3.0}, (x, $x1) -> x * multiplier);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(30, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7100
     * @tc.name testUint8ArrayReduce071
     * @tc.desc Verify number array reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce071() {
    Uint8Array arr = Uint8Array.from(new double[] {1.0, 2.0, 3.0});
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(6, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7200
     * @tc.name testUint8ArrayReduce072
     * @tc.desc Verify Set iterable reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce072() {
    Set<Integer> s = new LinkedHashSet<>();
    s.add(10);
    s.add(20);
    s.add(30);
    Uint8Array arr = Uint8Array.from(s);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7300
     * @tc.name testUint8ArrayReduce073
     * @tc.desc Verify Map entries iterable reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce073() {
    Map<String, Integer> m = new HashMap<>();
    m.put("a", 10);
    m.put("b", 20);
    m.put("c", 30);
    Uint8Array arr = Uint8Array.from(m.values());
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7400
     * @tc.name testUint8ArrayReduce074
     * @tc.desc Verify TypedArray reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce074() {
    Int32Array src = new Int32Array(new int[] {10, 20, 30});
    Uint8Array arr = Uint8Array.from(src);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(60, result);
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7500
     * @tc.name testUint8ArrayReduce075
     * @tc.desc Verify from empty array-like reduce throws exception
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce075() {
    Uint8Array arr = Uint8Array.from(new int[] {});
    try {
    arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    fail();
    } catch (RuntimeException e) {
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    };
    }
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE02_7600
     * @tc.name testUint8ArrayReduce076
     * @tc.desc Verify from with mapFn truncation overflow reduce sum
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduce076() {
    Uint8Array arr = Uint8Array.from(new double[] {256.0, 257.0, 258.0}, (x, $x1) -> x);
    int result = arr.reduce((prev, curr, $x1, $x2)-> prev + curr);
    assertEqual(3, result);
    }
}
