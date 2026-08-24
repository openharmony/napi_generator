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

package basetype.int16array2;

import basetype.ArrayBuffer;
import basetype.BasTest;
import basetype.EntryResult;
import basetype.Error;
import basetype.Int8Array;
import basetype.IteratorResult;
import basetype.RangeError;
import basetype.TypeError;
import basetype.Uint16Array;
import basetype.DataView;
import basetype.Float32Array;
import basetype.Float64Array;
import basetype.Int32Array;
import basetype.IntlOptions;
import basetype.NullPointerError;
import basetype.Uint8Array;
import basetype.Uint8ClampedArray;
import basetype.Int16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayLastIndexOfTest01 —— Int16Array 方法族测试。
 */
public class Int16ArrayLastIndexOfTest01 extends BasTest {

    @Test
    void testInt16ArrayLastIndexOfTestOne001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(30);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne002() {
    Int16Array arr = new Int16Array(new int[] {40, 50, 60});
    int result = arr.lastIndexOf(40);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne003() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(999);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne004() {
    Int16Array arr = new Int16Array(0);
    int result = arr.lastIndexOf(5);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne005() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    int result = arr.lastIndexOf(7, 0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne006() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    int result = arr.lastIndexOf(8, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne007() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 10});
    int result = arr.lastIndexOf(10, 2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne008() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 10});
    int result = arr.lastIndexOf(10, -1);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne009() {
    Int16Array arr = new Int16Array(new int[] {300, 301, 302, 303});
    int result = arr.lastIndexOf(302);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne010() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(888);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne011() {
    Int16Array arr = new Int16Array(0);
    int result = arr.lastIndexOf(0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne012() {
    Int16Array arr = new Int16Array(new int[] {42});
    int result = arr.lastIndexOf(42);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne013() {
    Int16Array arr = new Int16Array(new int[] {42});
    int result = arr.lastIndexOf(99);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne014() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 11, 33});
    int result = arr.lastIndexOf(11);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne015() {
    Int16Array arr = new Int16Array(new int[] {5, 5, 5});
    int result = arr.lastIndexOf(5);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne016() {
    Int16Array arr = new Int16Array(new int[] {77, 88, 99, 88, 77});
    int result = arr.lastIndexOf(77);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne017() {
    Int16Array arr = new Int16Array(new int[] {3, 3, 3, 3});
    int result = arr.lastIndexOf(3);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne018() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 2, 2, 3});
    int result = arr.lastIndexOf(2);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne019() {
    Int16Array arr = new Int16Array(new int[] {1, 0, 2});
    int result = arr.lastIndexOf(0);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne020() {
    Int16Array arr = new Int16Array(new int[] {5, 0, 10});
    int result = arr.lastIndexOf(-0);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne021() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(Double.NaN);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne022() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, Double.POSITIVE_INFINITY);
    int result = arr.lastIndexOf(Double.POSITIVE_INFINITY);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne023() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, Double.NEGATIVE_INFINITY);
    int result = arr.lastIndexOf(Double.NEGATIVE_INFINITY);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne024() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, Double.POSITIVE_INFINITY);
    int result = arr.lastIndexOf(0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne025() {
    Int16Array arr = new Int16Array(new int[] {0, 32767, 100});
    int result = arr.lastIndexOf(32767);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne026() {
    Int16Array arr = new Int16Array(new int[] {0, -32768, 100});
    int result = arr.lastIndexOf(-32768);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne027() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    int result = arr.lastIndexOf(32767);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne028() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    int result = arr.lastIndexOf(-32768);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne029() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 32768);
    int result = arr.lastIndexOf(32768);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne030() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, -32769);
    int result = arr.lastIndexOf(-32769);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne031() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 32768);
    int result = arr.lastIndexOf(-32768);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne032() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, -32769);
    int result = arr.lastIndexOf(32767);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne033() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 3.7);
    int result = arr.lastIndexOf(3.7);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne034() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 3.7);
    int result = arr.lastIndexOf(3);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne035() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, -3.7);
    int result = arr.lastIndexOf(-3.7);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne036() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, -3.7);
    int result = arr.lastIndexOf(-3);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne037() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, 3.7);
    int result = arr.lastIndexOf(3.0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne038() {
    Int16Array arr = new Int16Array(1);
    arr.set((int) 0, -3.7);
    int result = arr.lastIndexOf(-3.0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne039() {
    Int16Array arr = new Int16Array(new int[] {0, -1, 2});
    int result = arr.lastIndexOf(-1);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne040() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2});
    int result = arr.lastIndexOf(-1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne041() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(100000);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne042() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(-100000);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne043() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 0, 2, 0});
    int result = arr.lastIndexOf(0);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne044() {
    Int16Array arr = new Int16Array(new int[] {1000, 2000, 1000});
    int result = arr.lastIndexOf(1000);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne045() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(99, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne046() {
    Int16Array arr = new Int16Array(new int[] {70, 80, 90});
    int result = arr.lastIndexOf(70, 2);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne047() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(3, 3);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne048() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(30, 4);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne049() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 10});
    int result = arr.lastIndexOf(10, 10000);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne050() {
    Int16Array arr = new Int16Array(new int[] {7, 3, 7});
    int result = arr.lastIndexOf(7, 1);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne051() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(3, 1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne052() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    int result = arr.lastIndexOf(300, -1);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne053() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    int result = arr.lastIndexOf(200, -1);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne054() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int result = arr.lastIndexOf(30, -2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne055() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int result = arr.lastIndexOf(40, -2);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne056() {
    Int16Array arr = new Int16Array(new int[] {88, 99, 100, 101});
    int result = arr.lastIndexOf(88, -3);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne057() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int result = arr.lastIndexOf(4, -3);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne058() {
    Int16Array arr = new Int16Array(new int[] {55, 66, 77});
    int result = arr.lastIndexOf(55, -3);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne059() {
    Int16Array arr = new Int16Array(new int[] {55, 66, 77});
    int result = arr.lastIndexOf(66, -3);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne060() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(1, -4);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne061() {
    Int16Array arr = new Int16Array(new int[] {10, 20});
    int result = arr.lastIndexOf(10, -4);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne062() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15});
    int result = arr.lastIndexOf(5, -10000);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne063() {
    Int16Array arr = new Int16Array(new int[] {2, 1, 3, 2});
    int result = arr.lastIndexOf(2, 0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne064() {
    Int16Array arr = new Int16Array(new int[] {0, 5, 0, 5});
    int result = arr.lastIndexOf(5, 2);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne065() {
    Int16Array arr = new Int16Array(new int[] {9, 1, 9, 1, 9});
    int result = arr.lastIndexOf(1, -2);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne066() {
    Int16Array arr = new Int16Array(new int[] {9, 1, 9, 1, 9});
    int result = arr.lastIndexOf(1, -3);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne067() {
    Int16Array arr = new Int16Array(new int[] {4, 2, 4});
    int result = arr.lastIndexOf(4, 1);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne068() {
    Int16Array arr = new Int16Array(0);
    int result = arr.lastIndexOf(1, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestOne069() {
    Int16Array arr = new Int16Array(0);
    int result = arr.lastIndexOf(1, -1);
    assertEqual(-1, result);
    }
}
