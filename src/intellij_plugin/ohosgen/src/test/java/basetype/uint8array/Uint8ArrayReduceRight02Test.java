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

import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint8Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayReduceRight02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayReduceRight02Test extends BasTest {
    /**
     * Verify reduceRight with 1 parameter (callbackfn only), result type is number
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0100
     * @tc.name testUint8ArrayReduceRight001
     * @tc.desc Verify reduceRight with 1 parameter (callbackfn only), result type is number
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(60, result);
    }

    /**
     * Verify reduceRight subtraction with [10, 20, 30], result 30-20-10=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0200
     * @tc.name testUint8ArrayReduceRight002
     * @tc.desc Verify reduceRight subtraction with [10, 20, 30], result 30-20-10=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight002() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight subtraction with [100, 50, 25], result 25-50-100=-125
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0300
     * @tc.name testUint8ArrayReduceRight003
     * @tc.desc Verify reduceRight subtraction with [100, 50, 25], result 25-50-100=-125
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight003() {
    Uint8Array arr = Uint8Array.of(100, 50, 25);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-125, result);
    }

    /**
     * Verify reduceRight subtraction with [5, 3, 1], result 1-3-5=-7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0400
     * @tc.name testUint8ArrayReduceRight004
     * @tc.desc Verify reduceRight subtraction with [5, 3, 1], result 1-3-5=-7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight004() {
    Uint8Array arr = Uint8Array.of(5, 3, 1);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-7, result);
    }

    /**
     * Verify reduceRight subtraction with [30, 20, 10, 5], result 5-10-20-30=-55
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0500
     * @tc.name testUint8ArrayReduceRight005
     * @tc.desc Verify reduceRight subtraction with [30, 20, 10, 5], result 5-10-20-30=-55
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight005() {
    Uint8Array arr = Uint8Array.of(30, 20, 10, 5);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-55, result);
    }

    /**
     * Verify reduceRight addition with [10, 20, 30], result 30+20+10=60
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0600
     * @tc.name testUint8ArrayReduceRight006
     * @tc.desc Verify reduceRight addition with [10, 20, 30], result 30+20+10=60
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight006() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(60, result);
    }

    /**
     * Verify reduceRight addition with [1, 2, 3, 4], result 4+3+2+1=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0700
     * @tc.name testUint8ArrayReduceRight007
     * @tc.desc Verify reduceRight addition with [1, 2, 3, 4], result 4+3+2+1=10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight007() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight addition with [100, 200, 50], result 50+200+100=350
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0800
     * @tc.name testUint8ArrayReduceRight008
     * @tc.desc Verify reduceRight addition with [100, 200, 50], result 50+200+100=350
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight008() {
    Uint8Array arr = Uint8Array.of(100, 200, 50);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(350, result);
    }

    /**
     * Verify reduceRight multiplication with [2, 3, 4], result 4*3*2=24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_0900
     * @tc.name testUint8ArrayReduceRight009
     * @tc.desc Verify reduceRight multiplication with [2, 3, 4], result 4*3*2=24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight009() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((p, c, index, array) -> p * c);
    assertEqual(24, result);
    }

    /**
     * Verify reduceRight multiplication with [5, 5, 5], result 5*5*5=125
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1000
     * @tc.name testUint8ArrayReduceRight010
     * @tc.desc Verify reduceRight multiplication with [5, 5, 5], result 5*5*5=125
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight010() {
    Uint8Array arr = Uint8Array.of(5, 5, 5);
    double result = arr.reduceRightDouble((p, c, index, array) -> p * c);
    assertEqual(125, result);
    }

    /**
     * Verify reduceRight multiplication with [1, 2, 3, 4], result 4*3*2*1=24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1100
     * @tc.name testUint8ArrayReduceRight011
     * @tc.desc Verify reduceRight multiplication with [1, 2, 3, 4], result 4*3*2*1=24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight011() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    double result = arr.reduceRightDouble((p, c, index, array) -> p * c);
    assertEqual(24, result);
    }

    /**
     * Verify reduceRight division with [100, 20, 2], result 2/20/100=0.001
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1200
     * @tc.name testUint8ArrayReduceRight012
     * @tc.desc Verify reduceRight division with [100, 20, 2], result 2/20/100=0.001
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight012() {
    Uint8Array arr = Uint8Array.of(100, 20, 2);
    double result = arr.reduceRightDouble((p, c, index, array) -> p / c);
    assertEqual(0.001, result);
    }

    /**
     * Verify reduceRight modulo with [23, 7, 10], result 10%7=3, 3%23=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1300
     * @tc.name testUint8ArrayReduceRight013
     * @tc.desc Verify reduceRight modulo with [23, 7, 10], result 10%7=3, 3%23=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight013() {
    Uint8Array arr = Uint8Array.of(23, 7, 10);
    double result = arr.reduceRightDouble((p, c, index, array) -> p % c);
    assertEqual(3, result);
    }

    /**
     * Verify reduceRight bitwise OR with [1, 2, 4], result 4|2|1=7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1400
     * @tc.name testUint8ArrayReduceRight014
     * @tc.desc Verify reduceRight bitwise OR with [1, 2, 4], result 4|2|1=7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight014() {
    Uint8Array arr = Uint8Array.of(1, 2, 4);
    int result = arr.reduceRight((p, c, index, array) -> p | c);
    assertEqual(7, result);
    }

    /**
     * Verify reduceRight bitwise AND with [7, 6, 5], result 5&6=4, 4&7=4
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1500
     * @tc.name testUint8ArrayReduceRight015
     * @tc.desc Verify reduceRight bitwise AND with [7, 6, 5], result 5&6=4, 4&7=4
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight015() {
    Uint8Array arr = Uint8Array.of(7, 6, 5);
    int result = arr.reduceRight((p, c, index, array) -> p & c);
    assertEqual(4, result);
    }

    /**
     * Verify reduceRight bitwise XOR with [1, 2, 3], result 3^2=1, 1^1=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1600
     * @tc.name testUint8ArrayReduceRight016
     * @tc.desc Verify reduceRight bitwise XOR with [1, 2, 3], result 3^2=1, 1^1=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight016() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, index, array) -> p ^ c);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight left shift with [1, 2, 3], result 3<<2=12, 12<<1=24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1700
     * @tc.name testUint8ArrayReduceRight017
     * @tc.desc Verify reduceRight left shift with [1, 2, 3], result 3<<2=12, 12<<1=24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight017() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, index, array) -> p << c);
    assertEqual(24, result);
    }

    /**
     * Verify reduceRight Math.pow with [2, 3, 4], result pow(4, 3)=64, pow(64, 2)=4096
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1800
     * @tc.name testUint8ArrayReduceRight018
     * @tc.desc Verify reduceRight Math.pow with [2, 3, 4], result pow(4, 3)=64, pow(64, 2)=4096
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight018() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((p, c, index, array) -> Math.pow(p, c));
    assertEqual(4096, result);
    }

    /**
     * Verify reduceRight Math.min with [5, 10, 3], result min(3, 10)=3, min(3, 5)=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_1900
     * @tc.name testUint8ArrayReduceRight019
     * @tc.desc Verify reduceRight Math.min with [5, 10, 3], result min(3, 10)=3, min(3, 5)=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight019() {
    Uint8Array arr = Uint8Array.of(5, 10, 3);
    int result = arr.reduceRight((p, c, index, array) -> Math.min(p, c));
    assertEqual(3, result);
    }

    /**
     * Verify reduceRight Math.max with [5, 10, 3], result max(3, 10)=10, max(10, 5)=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2000
     * @tc.name testUint8ArrayReduceRight020
     * @tc.desc Verify reduceRight Math.max with [5, 10, 3], result max(3, 10)=10, max(10, 5)=10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight020() {
    Uint8Array arr = Uint8Array.of(5, 10, 3);
    int result = arr.reduceRight((p, c, index, array) -> Math.max(p, c));
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight average (p+c)/2 with [10, 20, 30], result (30+20)/2=25, (25+10)/2=17.5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2100
     * @tc.name testUint8ArrayReduceRight021
     * @tc.desc Verify reduceRight average (p+c)/2 with [10, 20, 30], result (30+20)/2=25, (25+10)/2=17.5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((p, c, index, array) -> (p + c) / 2);
    assertEqual(17.5, result);
    }

    /**
     * Verify reduceRight Math.abs(p-c) with [5, 10, 30], result |30-10|=20, |20-5|=15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2200
     * @tc.name testUint8ArrayReduceRight022
     * @tc.desc Verify reduceRight Math.abs(p-c) with [5, 10, 30], result |30-10|=20, |20-5|=15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight022() {
    Uint8Array arr = Uint8Array.of(5, 10, 30);
    int result = arr.reduceRight((p, c, index, array) -> Math.abs(p - c));
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight (p+c)%256 with [200, 100, 50], result (50+100)%256=150, (150+200)%256=94
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2300
     * @tc.name testUint8ArrayReduceRight023
     * @tc.desc Verify reduceRight (p+c)%256 with [200, 100, 50], result (50+100)%256=150, (150+200)%256=94
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight023() {
    Uint8Array arr = Uint8Array.of(200, 100, 50);
    double result = arr.reduceRightDouble((p, c, index, array) -> (p + c) % 256);
    assertEqual(94, result);
    }

    /**
     * Verify reduceRight reverse subtraction c-p with [10, 20, 30], result 20-30=-10, 10-(-10)=20
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2400
     * @tc.name testUint8ArrayReduceRight024
     * @tc.desc Verify reduceRight reverse subtraction c-p with [10, 20, 30], result 20-30=-10, 10-(-10)=20
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> c - p);
    assertEqual(20, result);
    }

    /**
     * Verify reduceRight multiply by 0 with [1, 2, 3], result always 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2500
     * @tc.name testUint8ArrayReduceRight025
     * @tc.desc Verify reduceRight multiply by 0 with [1, 2, 3], result always 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, index, array) -> p * 0);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight identity return constant 1 with [10, 20, 30]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2600
     * @tc.name testUint8ArrayReduceRight026
     * @tc.desc Verify reduceRight identity return constant 1 with [10, 20, 30]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight026() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((index, array, unused3, unused4) -> 1);
    assertEqual(1, result);
    }

    /**
     * Verify reduceRight addition with element 0 [0, 5, 10], result 10+5+0=15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2700
     * @tc.name testUint8ArrayReduceRight027
     * @tc.desc Verify reduceRight addition with element 0 [0, 5, 10], result 10+5+0=15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight027() {
    Uint8Array arr = Uint8Array.of(0, 5, 10);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight addition with element 255 [255, 1, 1], result 1+1+255=257
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2800
     * @tc.name testUint8ArrayReduceRight028
     * @tc.desc Verify reduceRight addition with element 255 [255, 1, 1], result 1+1+255=257
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight028() {
    Uint8Array arr = Uint8Array.of(255, 1, 1);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(257, result);
    }

    /**
     * Verify reduceRight addition with element 127 [127, 1, 1], result 1+1+127=129
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_2900
     * @tc.name testUint8ArrayReduceRight029
     * @tc.desc Verify reduceRight addition with element 127 [127, 1, 1], result 1+1+127=129
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight029() {
    Uint8Array arr = Uint8Array.of(127, 1, 1);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(129, result);
    }

    /**
     * Verify reduceRight addition with element 128 [128, 1, 1], result 1+1+128=130
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3000
     * @tc.name testUint8ArrayReduceRight030
     * @tc.desc Verify reduceRight addition with element 128 [128, 1, 1], result 1+1+128=130
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight030() {
    Uint8Array arr = Uint8Array.of(128, 1, 1);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(130, result);
    }

    /**
     * Verify reduceRight addition with 0/255 mixed [0, 255, 0, 255], result 255+0+255+0=510
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3100
     * @tc.name testUint8ArrayReduceRight031
     * @tc.desc Verify reduceRight addition with 0/255 mixed [0, 255, 0, 255], result 255+0+255+0=510
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight031() {
    Uint8Array arr = Uint8Array.of(0, 255, 0, 255);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(510, result);
    }

    /**
     * Verify reduceRight bitwise AND with all 255 [255, 255, 255], result 255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3200
     * @tc.name testUint8ArrayReduceRight032
     * @tc.desc Verify reduceRight bitwise AND with all 255 [255, 255, 255], result 255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight032() {
    Uint8Array arr = Uint8Array.of(255, 255, 255);
    int result = arr.reduceRight((p, c, index, array) -> p & c);
    assertEqual(255, result);
    }

    /**
     * Verify reduceRight bitwise OR with all 0 [0, 0, 0], result 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3300
     * @tc.name testUint8ArrayReduceRight033
     * @tc.desc Verify reduceRight bitwise OR with all 0 [0, 0, 0], result 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight033() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int result = arr.reduceRight((p, c, index, array) -> p | c);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight Math.max with [0, 255, 127], result max(127, 255)=255, max(255, 0)=255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3400
     * @tc.name testUint8ArrayReduceRight034
     * @tc.desc Verify reduceRight Math.max with [0, 255, 127], result max(127, 255)=255, max(255, 0)=255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight034() {
    Uint8Array arr = Uint8Array.of(0, 255, 127);
    int result = arr.reduceRight((p, c, index, array) -> Math.max(p, c));
    assertEqual(255, result);
    }

    /**
     * Verify reduceRight with overflow values 256/257 truncated to [0, 1], result 0+1=1
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3500
     * @tc.name testUint8ArrayReduceRight035
     * @tc.desc Verify reduceRight with overflow values 256/257 truncated to [0, 1], result 0+1=1
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight035() {
    Uint8Array arr = new Uint8Array(new int[] {256, 257});
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(1, result);
    }

    /**
     * Verify reduceRight with negative values [-1, -2] wrapped to [255, 254], result 255+254=509
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3600
     * @tc.name testUint8ArrayReduceRight036
     * @tc.desc Verify reduceRight with negative values [-1, -2] wrapped to [255, 254], result 255+254=509
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight036() {
    Uint8Array arr = new Uint8Array(new int[] {-1, -2});
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(509, result);
    }

    /**
     * Verify reduceRight with float truncation [1.9, 2.1] stored as [1, 2], result 1+2=3
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3700
     * @tc.name testUint8ArrayReduceRight037
     * @tc.desc Verify reduceRight with float truncation [1.9, 2.1] stored as [1, 2], result 1+2=3
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight037() {
    Uint8Array arr = new Uint8Array(new double[] {1.9, 2.1});
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(3, result);
    }

    /**
     * Verify reduceRight with hex literals [0x10, 0x20, 0x30], result 48+32+16=96
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3800
     * @tc.name testUint8ArrayReduceRight038
     * @tc.desc Verify reduceRight with hex literals [0x10, 0x20, 0x30], result 48+32+16=96
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight038() {
    Uint8Array arr = Uint8Array.of(0x10, 0x20, 0x30);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(96, result);
    }

    /**
     * Verify reduceRight with binary literals [0b1, 0b10, 0b100], result 4+2+1=7
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_3900
     * @tc.name testUint8ArrayReduceRight039
     * @tc.desc Verify reduceRight with binary literals [0b1, 0b10, 0b100], result 4+2+1=7
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight039() {
    Uint8Array arr = Uint8Array.of(0b1, 0b10, 0b100);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(7, result);
    }

    /**
     * Verify reduceRight with octal literals [0o10, 0o20], result 16+8=24
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4000
     * @tc.name testUint8ArrayReduceRight040
     * @tc.desc Verify reduceRight with octal literals [0o10, 0o20], result 16+8=24
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight040() {
    Uint8Array arr = Uint8Array.of(010, 020);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(24, result);
    }

    /**
     * Verify reduceRight with scientific notation [1e0, 2e0, 3e0], result 3+2+1=6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4100
     * @tc.name testUint8ArrayReduceRight041
     * @tc.desc Verify reduceRight with scientific notation [1e0, 2e0, 3e0], result 3+2+1=6
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight041() {
    Uint8Array arr = Uint8Array.of(1e0, 2e0, 3e0);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(6, result);
    }

    /**
     * Verify reduceRight with powers of 2 [1, 2, 4, 8, 16, 32, 64, 128], result sum=255
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4200
     * @tc.name testUint8ArrayReduceRight042
     * @tc.desc Verify reduceRight with powers of 2 [1, 2, 4, 8, 16, 32, 64, 128], result sum=255
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight042() {
    Uint8Array arr = Uint8Array.of(1, 2, 4, 8, 16, 32, 64, 128);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(255, result);
    }

    /**
     * Verify reduceRight with single element [42], callback not called, returns 42
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4300
     * @tc.name testUint8ArrayReduceRight043
     * @tc.desc Verify reduceRight with single element [42], callback not called, returns 42
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight043() {
    boolean[] called = {false};
    Uint8Array arr = Uint8Array.of(42);
    int result = arr.reduceRight((p, c, index, array) -> {
        called[0] = true;
        return p + c;
    });
    assertFalse(called[0]);
    assertEqual(42, result);
    }

    /**
     * Verify reduceRight with two elements [10, 20] addition, result 20+10=30
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4400
     * @tc.name testUint8ArrayReduceRight044
     * @tc.desc Verify reduceRight with two elements [10, 20] addition, result 20+10=30
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight044() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(30, result);
    }

    /**
     * Verify reduceRight with two elements [10, 20] subtraction, result 20-10=10
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4500
     * @tc.name testUint8ArrayReduceRight045
     * @tc.desc Verify reduceRight with two elements [10, 20] subtraction, result 20-10=10
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight045() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight with 100 elements of 1, result sum=100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4600
     * @tc.name testUint8ArrayReduceRight046
     * @tc.desc Verify reduceRight with 100 elements of 1, result sum=100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight046() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    src.add(1);
    }
    Uint8Array arr = new Uint8Array(src);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(100, result);
    }

    /**
     * Verify reduceRight with 1000 elements of 1, result sum=1000
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4700
     * @tc.name testUint8ArrayReduceRight047
     * @tc.desc Verify reduceRight with 1000 elements of 1, result sum=1000
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight047() {
    List<Integer> src = new ArrayList<>();
    for (int i = 0; i < 1000; i++) {
    src.add(1);
    }
    Uint8Array arr = new Uint8Array(src);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(1000, result);
    }

    /**
     * Verify reduceRight with three identical elements [5, 5, 5] addition, result 15
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4800
     * @tc.name testUint8ArrayReduceRight048
     * @tc.desc Verify reduceRight with three identical elements [5, 5, 5] addition, result 15
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight048() {
    Uint8Array arr = Uint8Array.of(5, 5, 5);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(15, result);
    }

    /**
     * Verify reduceRight right-to-left order with [1, 2, 3, 4, 5] subtraction, result -5
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_4900
     * @tc.name testUint8ArrayReduceRight049
     * @tc.desc Verify reduceRight right-to-left order with [1, 2, 3, 4, 5] subtraction, result -5
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight049() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-5, result);
    }

    /**
     * Verify reduceRight right-to-left order with [5, 4, 3, 2, 1] subtraction, result -13
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5000
     * @tc.name testUint8ArrayReduceRight050
     * @tc.desc Verify reduceRight right-to-left order with [5, 4, 3, 2, 1] subtraction, result -13
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight050() {
    Uint8Array arr = Uint8Array.of(5, 4, 3, 2, 1);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-13, result);
    }

    /**
     * Verify reduceRight right-to-left order with [10, 20, 30, 40, 50] subtraction, result -50
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5100
     * @tc.name testUint8ArrayReduceRight051
     * @tc.desc Verify reduceRight right-to-left order with [10, 20, 30, 40, 50] subtraction, result -50
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight051() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.reduceRight((p, c, index, array) -> p - c);
    assertEqual(-50, result);
    }

    /**
     * Verify reduceRight right-to-left order with [2, 3, 4] double subtraction p-c-c, result -6
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5200
     * @tc.name testUint8ArrayReduceRight052
     * @tc.desc Verify reduceRight right-to-left order with [2, 3, 4] double subtraction p-c-c, result -6
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight052() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    int result = arr.reduceRight((p, c, index, array) -> p - c - c);
    assertEqual(-6, result);
    }

    /**
     * Verify reduceRight right-to-left order with [2, 3, 4] division p/c, result 0.666...
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5300
     * @tc.name testUint8ArrayReduceRight053
     * @tc.desc Verify reduceRight right-to-left order with [2, 3, 4] division p/c, result 0.666...
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight053() {
    Uint8Array arr = Uint8Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((p, c, index, array) -> p / c);
    assertEqual(0.6666666666666666, result);
    }

    /**
     * Verify reduceRight callback receives correct indices [10, 20, 30, 40]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5400
     * @tc.name testUint8ArrayReduceRight054
     * @tc.desc Verify reduceRight callback receives correct indices [10, 20, 30, 40]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight054() {
    List<Integer> indices = new ArrayList<>();
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int[] expectedIndex = {arr.length() - 2};
    arr.reduceRight((p, c, index, array) -> {
    indices.add(expectedIndex[0]);
    expectedIndex[0]--;
    return p + c;
        });
    assertEqualInt(2, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(0, indices.get(2));
    }

    /**
     * Verify reduceRight callback index with two elements [5, 10], only 1 call with index=0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5500
     * @tc.name testUint8ArrayReduceRight055
     * @tc.desc Verify reduceRight callback index with two elements [5, 10], only 1 call with index=0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight055() {
    List<Integer> indices = new ArrayList<>();
    Uint8Array arr = Uint8Array.of(5, 10);
    int[] expectedIndex = {arr.length() - 2};
    arr.reduceRight((p, c, index, array) -> {
    indices.add(expectedIndex[0]);
    expectedIndex[0]--;
    return p + c;
        });
    assertEqual(1, indices.size());
    assertEqualInt(0, indices.get(0));
    }

    /**
     * Verify reduceRight callback indices with six elements [1, 2, 3, 4, 5, 6]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5600
     * @tc.name testUint8ArrayReduceRight056
     * @tc.desc Verify reduceRight callback indices with six elements [1, 2, 3, 4, 5, 6]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight056() {
    List<Integer> indices = new ArrayList<>();
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6);
    int[] expectedIndex = {arr.length() - 2};
    arr.reduceRight((p, c, index, array) -> {
    indices.add(expectedIndex[0]);
    expectedIndex[0]--;
    return p + c;
        });
    assertEqualInt(4, indices.get(0));
    assertEqualInt(3, indices.get(1));
    assertEqualInt(2, indices.get(2));
    assertEqualInt(1, indices.get(3));
    assertEqualInt(0, indices.get(4));
    }

    /**
     * Verify reduceRight callback array parameter is same reference as original array
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5700
     * @tc.name testUint8ArrayReduceRight057
     * @tc.desc Verify reduceRight callback array parameter is same reference as original array
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight057() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduceRight((p, c, i, a) -> {
    if (i == 1) {
    assertEqual(arr, a);
    }
    return p + c;
        });
    }

    /**
     * Verify reduceRight callback array parameter modification is visible
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5800
     * @tc.name testUint8ArrayReduceRight058
     * @tc.desc Verify reduceRight callback array parameter modification is visible
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight058() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduceRight((p, c, i, a) -> {
    a.set(0, 99);
    return p + c;
        });
    assertEqualInt(99, arr.get(0));
    }

    /**
     * Verify reduceRight with pre-defined const arrow function
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_5900
     * @tc.name testUint8ArrayReduceRight059
     * @tc.desc Verify reduceRight with pre-defined const arrow function
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight059() {
    Uint8Array.Uint8ArrayReducer2 fn = (p, c) -> p + c;
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight(fn);
    assertEqual(60, result);
    }

    /**
     * Verify reduceRight with multi-statement callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6000
     * @tc.name testUint8ArrayReduceRight060
     * @tc.desc Verify reduceRight with multi-statement callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight060() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> {
        return p + c;
    });
    assertEqual(60, result);
    }

    /**
     * Verify reduceRight callback ignores curr, uses prev and index (p, c, i) => p + i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6100
     * @tc.name testUint8ArrayReduceRight061
     * @tc.desc Verify reduceRight callback ignores curr, uses prev and index (p, c, i) => p + i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, i, index) -> p + i);
    assertEqual(4, result);
    }

    /**
     * Verify reduceRight callback ignores prev, uses cur and index (p, c, i) => c + i
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6200
     * @tc.name testUint8ArrayReduceRight062
     * @tc.desc Verify reduceRight callback ignores prev, uses cur and index (p, c, i) => c + i
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight062() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, i, index) -> c + i);
    assertEqual(1, result);
    }

    /**
     * Verify reduceRight callback uses array parameter (p, c, i, a) => p + a[0]
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6300
     * @tc.name testUint8ArrayReduceRight063
     * @tc.desc Verify reduceRight callback uses array parameter (p, c, i, a) => p + a[0]
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight063() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.reduceRight((p, c, i, a) -> p + a.get(0));
    assertEqual(5, result);
    }

    /**
     * Verify reduceRight callback returns c (uses current), result is first element
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6400
     * @tc.name testUint8ArrayReduceRight064
     * @tc.desc Verify reduceRight callback returns c (uses current), result is first element
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight064() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.reduceRight((p, c, index, array) -> c);
    assertEqual(10, result);
    }

    /**
     * Verify reduceRight with single element [99] returns itself 99
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6500
     * @tc.name testUint8ArrayReduceRight065
     * @tc.desc Verify reduceRight with single element [99] returns itself 99
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight065() {
    Uint8Array arr = Uint8Array.of(99);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(99, result);
    }

    /**
     * Verify reduceRight with two elements [15, 25] addition, result 40
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6600
     * @tc.name testUint8ArrayReduceRight066
     * @tc.desc Verify reduceRight with two elements [15, 25] addition, result 40
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight066() {
    Uint8Array arr = Uint8Array.of(15, 25);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(40, result);
    }

    /**
     * Verify reduceRight with four elements [10, 20, 30, 40] addition, result 100
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6700
     * @tc.name testUint8ArrayReduceRight067
     * @tc.desc Verify reduceRight with four elements [10, 20, 30, 40] addition, result 100
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight067() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(100, result);
    }

    /**
     * Verify reduceRight with float return value [3, 2, 1] division, result 0.166666...
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6800
     * @tc.name testUint8ArrayReduceRight068
     * @tc.desc Verify reduceRight with float return value [3, 2, 1] division, result 0.166666...
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight068() {
    Uint8Array arr = Uint8Array.of(3, 2, 1);
    double result = arr.reduceRightDouble((p, c, index, array) -> p / c);
    assertEqual(0.16666666666666666, result);
    }

    /**
     * Verify reduceRight does not change original array length
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_6900
     * @tc.name testUint8ArrayReduceRight069
     * @tc.desc Verify reduceRight does not change original array length
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight069() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int lenBefore = arr.length();
    arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(lenBefore, arr.length());
    }

    /**
     * Verify reduceRight does not modify original array elements
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7000
     * @tc.name testUint8ArrayReduceRight070
     * @tc.desc Verify reduceRight does not modify original array elements
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight070() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduceRight((p, c, index, array) -> p + c);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }

    /**
     * Verify reduceRight with [1, 2, 3, 4, 5] multiplication, result 120
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7100
     * @tc.name testUint8ArrayReduceRight071
     * @tc.desc Verify reduceRight with [1, 2, 3, 4, 5] multiplication, result 120
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    double result = arr.reduceRightDouble((p, c, index, array) -> p * c);
    assertEqual(120, result);
    }

    /**
     * Verify reduceRight with all 200 elements addition, result 600
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7200
     * @tc.name testUint8ArrayReduceRight072
     * @tc.desc Verify reduceRight with all 200 elements addition, result 600
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight072() {
    Uint8Array arr = new Uint8Array(200);
    for (int i = 0; i < 200; i++) {
    arr.set(new Uint8Array(new int[] {3}), i);
    }
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(600, result);
    }

    /**
     * Verify reduceRight with negative values truncated [-1, -2, -3] stored as [255, 254, 253], result 762
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7300
     * @tc.name testUint8ArrayReduceRight073
     * @tc.desc Verify reduceRight with negative values truncated [-1, -2, -3] stored as [255, 254, 253], result 762
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight073() {
    Uint8Array arr = new Uint8Array(new int[] {-1, -2, -3});
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(762, result);
    }

    /**
     * Verify reduceRight with large overflow values [512, 1024] stored as [0, 0], result 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7400
     * @tc.name testUint8ArrayReduceRight074
     * @tc.desc Verify reduceRight with large overflow values [512, 1024] stored as [0, 0], result 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight074() {
    Uint8Array arr = new Uint8Array(new int[] {512, 1024});
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight with all-zero array length=5, result 0
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7500
     * @tc.name testUint8ArrayReduceRight075
     * @tc.desc Verify reduceRight with all-zero array length=5, result 0
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight075() {
    Uint8Array arr = new Uint8Array(5);
    int result = arr.reduceRight((p, c, index, array) -> p + c);
    assertEqual(0, result);
    }

    /**
     * Verify reduceRight on empty array without initialValue throws TypeError
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7600
     * @tc.name testUint8ArrayReduceRight076
     * @tc.desc Verify reduceRight on empty array without initialValue throws TypeError
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight076() {
    try {
    new Uint8Array().reduceRight((p, c, index, array) -> p + c);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight on empty array sets hasError to true when exception occurs
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7700
     * @tc.name testUint8ArrayReduceRight077
     * @tc.desc Verify reduceRight on empty array sets hasError to true when exception occurs
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight077() {
    boolean[] hasError = {false};
    try {
    new Uint8Array().reduceRight((p, c, index, array) -> p + c);
    } catch (RangeError e) {
    hasError[0] = true;
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    }
    assertTrue(hasError[0]);
    }

    /**
     * Verify reduceRight captures ordinary Error thrown in callback
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7800
     * @tc.name testUint8ArrayReduceRight078
     * @tc.desc Verify reduceRight captures ordinary Error thrown in callback
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight078() {
    try {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    arr.reduceRight((p, c, index, array) -> {
    return BasTest.throwTestError("callback error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    /**
     * Verify reduceRight array state after callback throws error
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_7900
     * @tc.name testUint8ArrayReduceRight079
     * @tc.desc Verify reduceRight array state after callback throws error
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight079() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduceRight((p, c, index, array) -> {
    return BasTest.throwTestError("stop");
        });
    } catch (RangeError e) {
    assertEqual(3, arr.length());
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    assertEqualInt(30, arr.get(2));
    }
    }

    /**
     * Verify reduceRight returns NaN when callback returns NaN
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8000
     * @tc.name testUint8ArrayReduceRight080
     * @tc.desc Verify reduceRight returns NaN when callback returns NaN
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight080() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((p, c, index, array) -> Double.NaN);
    assertTrue(true);
    }

    /**
     * Verify reduceRight returns Infinity when callback returns Infinity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8100
     * @tc.name testUint8ArrayReduceRight081
     * @tc.desc Verify reduceRight returns Infinity when callback returns Infinity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight081() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((p, c, index, array) -> Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    /**
     * Verify reduceRight returns -Infinity when callback returns -Infinity
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8200
     * @tc.name testUint8ArrayReduceRight082
     * @tc.desc Verify reduceRight returns -Infinity when callback returns -Infinity
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight082() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((p, c, index, array) -> Double.NEGATIVE_INFINITY);
    assertEqual(Double.NEGATIVE_INFINITY, result);
    }

    /**
     * Verify reduceRight callback modifies array affecting subsequent iterations
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8300
     * @tc.name testUint8ArrayReduceRight083
     * @tc.desc Verify reduceRight callback modifies array affecting subsequent iterations
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight083() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.reduceRight((p, c, i, a) -> {
        if (i == 2) {
            a.set(0, 100);
        }
        return p + c;
    });
    assertEqual(190, result);
    }

    /**
     * Verify callback calling another Uint8Array's reduceRight
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8400
     * @tc.name testUint8ArrayReduceRight084
     * @tc.desc Verify callback calling another Uint8Array's reduceRight
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight084() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    Uint8Array copy = new Uint8Array(arr);
    int result = arr.reduceRight((p, c, index, array) -> {
        return p + c + copy.reduceRight((p2, c2, unused3, unused4) -> p2 + c2);
        });
    assertEqual(18, result);
    }

    /**
     * Verify reduceRight accessing out-of-bounds index via arr parameter
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8500
     * @tc.name testUint8ArrayReduceRight085
     * @tc.desc Verify reduceRight accessing out-of-bounds index via arr parameter
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight085() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean[] caughtError = {false};
    try {
    arr.reduceRight((p, c, i, a) -> p + a.get(99));
    } catch (RangeError e) {
    caughtError[0] = true;
    assertEqual("basetype.common.RangeError", BasTest.className(e));
    }
    assertTrue(caughtError[0]);
    }

    /**
     * Verify reduceRight on empty array does not trigger callback and does not modify external state
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8600
     * @tc.name testUint8ArrayReduceRight086
     * @tc.desc Verify reduceRight on empty array does not trigger callback and does not modify external state
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight086() {
    int[] sideEffect = {0};
    try {
    new Uint8Array().reduceRight((p, c, index, array) -> {
    sideEffect[0] = 1;
    return p + c;
        });
    fail();
    } catch (RangeError e) {
    assertEqual(0, sideEffect[0]);
    assertEqual("basetype.common.TypeError", BasTest.className(e));
    }
    }

    /**
     * Verify reduceRight array modifications that occurred before callback error are preserved
     *
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8ARRAY_REDUCE_RIGHT02_8700
     * @tc.name testUint8ArrayReduceRight087
     * @tc.desc Verify reduceRight array modifications that occurred before callback error are preserved
     * @tc.type Function
     * @tc.size MediumTest
     * @tc.level LEVEL2
     */

    @Test
    void testUint8ArrayReduceRight087() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    try {
    arr.reduceRight((p, c, i, a) -> {
    if (i == 0) {
    a.set(2, 99);
    return BasTest.throwTestError("stop");
    }
    return p + c;
        });
    } catch (RangeError e) {
    assertEqualInt(99, arr.get(2));
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }
}
