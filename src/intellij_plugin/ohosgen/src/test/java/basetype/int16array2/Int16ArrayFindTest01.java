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
 * Int16ArrayFindTest01 —— Int16Array 方法族测试。
 */
public class Int16ArrayFindTest01 extends BasTest {

    private static boolean matchTarget007(int value, int index, Int16Array array) {
    return value == 77;
    }
    static class DummyObj_038 {
        int tag;

        DummyObj_038(int tag) {
            this.tag = tag;
        }
    }

    private static boolean isMultipleOf7(int value) {
    return value % 7 == 0;
    }

    @Test
    void testInt16ArrayFindTestOne001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Integer result = arr.find((value) -> value > 25);
    assertEqual(30, result);
    }

    @Test
    void testInt16ArrayFindTestOne002() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20, 25});
    Integer result = arr.find( (value, index, array) -> value == 15 );
    assertEqual(15, result);
    }

    @Test
    void testInt16ArrayFindTestOne003() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    Integer result = arr.find((value, index) -> index == 3);
    assertEqual(400, result);
    }

    @Test
    void testInt16ArrayFindTestOne004() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6, 8, 10});
    Integer result = arr.find((value) -> value % 4 == 0);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayFindTestOne005() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9, 12, 15});
    int[] callCount = {0};
    Integer result = arr.find(() -> { callCount[0]++; return callCount[0] == 3; });
    assertEqual(9, result);
    }

    @Test
    void testInt16ArrayFindTestOne006() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 77, 44, 55});
    Integer result = arr.find(Int16ArrayFindTest01::matchTarget007);
    assertEqual(77, result);
    }

    @Test
    void testInt16ArrayFindTestOne007() {
    Int16Array arr = new Int16Array(new int[] {42, 84, 126});
    Integer result = arr.find((value, index, array) -> { return true; });
    assertEqual(42, result);
    }

    @Test
    void testInt16ArrayFindTestOne008() {
    Int16Array arr = new Int16Array(new int[] {55, 66, 77, 88});
    Integer result = arr.find((value, index, array) -> { return index == 0 && value == 55; });
    assertEqual(55, result);
    }

    @Test
    void testInt16ArrayFindTestOne009() {
    Int16Array arr = new Int16Array(new int[] {7, 14, 21, 28});
    Integer result = arr.find((value, index, array) -> { return index == 3 && value == 28; });
    assertEqual(28, result);
    }

    @Test
    void testInt16ArrayFindTestOne010() {
    Int16Array arr = new Int16Array(new int[] {99, 88, 77, 66});
    Integer result = arr.find((value, index, array) -> { return index == 0; });
    assertEqual(99, result);
    }

    @Test
    void testInt16ArrayFindTestOne011() {
    Int16Array arr = new Int16Array(new int[] {111, 222, 333});
    Integer result = arr.find((value, index, array) -> { return array instanceof Int16Array; });
    assertEqual(111, result);
    }

    @Test
    void testInt16ArrayFindTestOne012() {
    Int16Array arr = new Int16Array(new int[] {44, 55, 66});
    Int16Array[] captured = {null};
    arr.find((value, index, array) -> {
    captured[0] = array;
    return true;
    });
    boolean actual1 = captured[0] == arr;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFindTestOne013() {
    Int16Array arr = new Int16Array(new int[] {8, 16, 24, 32});
    Integer result = arr.find((value, index, array) -> { return array.length() == 4; });
    assertEqual(8, result);
    }

    @Test
    void testInt16ArrayFindTestOne014() {
    Int16Array arr = new Int16Array(new int[] {9, 18, 27, 36});
    Integer result = arr.find((value) -> value == 18);
    assertEqual(18, result);
    }

    @Test
    void testInt16ArrayFindTestOne015() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 8, 16});
    Integer result = arr.find((value, index, array) -> { return index > 0 && array.get(index - 1) == 4; });
    assertEqual(8, result);
    }

    @Test
    void testInt16ArrayFindTestOne016() {
    Int16Array arr = new Int16Array(new int[] {35, 70, 105, 140});
    Integer result = arr.find((value) -> true);
    assertEqual(35, result);
    }

    @Test
    void testInt16ArrayFindTestOne017() {
    Int16Array arr = new Int16Array(new int[] {17, 34, 51, 68});
    Integer result = arr.find((value) -> false);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestOne018() {
    Int16Array arr = new Int16Array(new int[] {45, 90, 135, 180});
    Integer result = arr.find((value, index, array) -> { return true; });
    assertEqual(45, result);
    }

    @Test
    void testInt16ArrayFindTestOne019() {
    Int16Array arr = new Int16Array(new int[] {29, 58, 87, 116});
    Integer result = arr.find((value, index, array) -> { DummyObj_038 obj = new DummyObj_038(1 ); return obj.tag == 1; });
    assertEqual(29, result);
    }

    @Test
    void testInt16ArrayFindTestOne020() {
    Int16Array arr = new Int16Array(new int[] {37, 74, 111, 148});
    Integer result = arr.find((value, index, array) -> { return false; });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestOne021() {
    Int16Array arr = new Int16Array(new int[] {5, 15, 25, 35, 45});
    int[] callCount = {0};
    Integer result = arr.find((value) -> { callCount[0]++; return value == 15; });
    assertEqual(15, result);
    assertEqual(2, callCount[0]);
    }

    @Test
    void testInt16ArrayFindTestOne022() {
    Int16Array arr = new Int16Array(new int[] {20, 15, 10, 5, 0});
    Integer result = arr.find((value) -> value < 12);
    assertEqual(10, result);
    }

    @Test
    void testInt16ArrayFindTestOne023() {
    Int16Array arr = new Int16Array(new int[] {30, 25, 20, 15, 10});
    Integer result = arr.find((value) -> value <= 20);
    assertEqual(20, result);
    }

    @Test
    void testInt16ArrayFindTestOne024() {
    Int16Array arr = new Int16Array(new int[] {42, 42, 42, 99, 42});
    Integer result = arr.find((value) -> value != 42);
    assertEqual(99, result);
    }

    @Test
    void testInt16ArrayFindTestOne025() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6, 7, 10});
    Integer result = arr.find((value) -> value % 2 != 0);
    assertEqual(7, result);
    }

    @Test
    void testInt16ArrayFindTestOne026() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Integer result = arr.find((value) -> (value & 4) != 0);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayFindTestOne027() {
    Int16Array arr = new Int16Array(new int[] {6, 12, 18, 24, 30});
    Integer result = arr.find((value) -> value > 10 && value < 25);
    assertEqual(12, result);
    }

    @Test
    void testInt16ArrayFindTestOne028() {
    Int16Array arr = new Int16Array(new int[] {7, 14, 21, 28, 35});
    Integer result = arr.find((value) -> value == 14 || value == 28);
    assertEqual(14, result);
    }

    @Test
    void testInt16ArrayFindTestOne029() {
    Int16Array arr = new Int16Array(new int[] {-5, -3, 0, 3, 5});
    Integer result = arr.find((value) -> value < 0);
    assertEqual(-5, result);
    }

    @Test
    void testInt16ArrayFindTestOne030() {
    Int16Array arr = new Int16Array(new int[] {-2, -1, 0, 1, 2});
    Integer result = arr.find((value) -> value == 0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayFindTestOne031() {
    Int16Array arr = new Int16Array(new int[] {0, -32768, 32767, 100});
    Integer result = arr.find((value) -> value == -32768);
    assertEqual(-32768, result);
    }

    @Test
    void testInt16ArrayFindTestOne032() {
    Int16Array arr = new Int16Array(new int[] {0, 100, 32767, -32768});
    Integer result = arr.find((value) -> value == 32767);
    assertEqual(32767, result);
    }

    @Test
    void testInt16ArrayFindTestOne033() {
    Int16Array arr = new Int16Array(new int[] {0, -1, 1, -2, 2});
    Integer result = arr.find((value) -> value == -1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayFindTestOne034() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int threshold = 25;
    Integer result = arr.find((value) -> value > threshold);
    assertEqual(30, result);
    }

    @Test
    void testInt16ArrayFindTestOne035() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9, 12});
    int[] counter = {0};
    arr.find((value) -> {
    counter[0]++;
    return false;
    });
    assertEqual(4, counter[0]);
    }

    @Test
    void testInt16ArrayFindTestOne036() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400});
    int[] step = {0};
    Integer result = arr.find((value) -> { step[0]++; return step[0] == 3; });
    assertEqual(300, result);
    }

    @Test
    void testInt16ArrayFindTestOne037() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Integer result = arr.find((value, index, array) -> { if (index == 0) { array.set(2, 999); } return value == 999; });
    assertEqual(999, result);
    }

    @Test
    void testInt16ArrayFindTestOne038() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20});
    Int16Array[] externalArr = {arr};
    Integer result = arr.find((value) -> { externalArr[0] = new Int16Array(new int[] {0}); return value == 20; });
    assertEqual(20, result);
    }

    @Test
    void testInt16ArrayFindTestOne039() {
    Int16Array arr = new Int16Array(new int[] {4, 9, 16, 25});
    Integer result = arr.find((value) -> { double sqrt = Math.sqrt(value); return sqrt == 4; });
    assertEqual(16, result);
    }

    @Test
    void testInt16ArrayFindTestOne040() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 14, 20, 21});
    Integer result = arr.find((value) -> isMultipleOf7(value));
    assertEqual(14, result);
    }

    @Test
    void testInt16ArrayFindTestOne041() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    try {
    arr.find((value) -> {
    throw new Error("predicate error");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne042() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int[] callIdx = {0};
    try {
    arr.find((value) -> {
    callIdx[0]++;
    if (callIdx[0] == 2) {
    throw new Error("second call error");
    }
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne043() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    try {
    arr.find((value, index) -> {
    if (index == 2) {
    throw new Error("middle error");
    }
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne044() {
    Int16Array arr = new Int16Array(new int[] {7, 14, 21});
    try {
    arr.find((value, index, array) -> {
    if (index == array.length() - 1) {
    throw new Error("last element error");
    }
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne045() {
    Int16Array arr = new Int16Array(new int[] {50, 60, 70});
    try {
    arr.find((value) -> {
    throw new TypeError("type mismatch in predicate");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne046() {
    Int16Array arr = new Int16Array(new int[] {80, 90, 100});
    try {
    arr.find((value) -> {
    throw new RangeError("range error in predicate");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testInt16ArrayFindTestOne047() {
    Int16Array arr = new Int16Array(new ArrayBuffer(0), 0, 0);
    boolean[] called = {false};
    Integer result = arr.find((value) -> { called[0] = true; return true; });
    assertNull(result);
    assertFalse(called[0]);
    }

    @Test
    void testInt16ArrayFindTestOne048() {
    Int16Array arr = new Int16Array(new int[] {99});
    Integer result = arr.find((value) -> value == 99);
    assertEqual(99, result);
    }

    @Test
    void testInt16ArrayFindTestOne049() {
    Int16Array arr = new Int16Array(new int[] {88});
    Integer result = arr.find((value) -> value != 88);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestOne050() {
    Int16Array arr = new Int16Array(new int[] {256, 512, 1024, 2048});
    List<Integer> visitLog = new ArrayList<>();
    Integer result = arr.find((value) -> { visitLog.add(value); return true; });
    assertEqual(256, result);
    int actual1 = visitLog.size();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayFindTestOne051() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    int[] count = {0};
    Integer result = arr.find((value) -> { count[0]++; return false; });
    assertNull(result);
    assertEqual(5, count[0]);
    }

    @Test
    void testInt16ArrayFindTestOne052() {
    Int16Array arr = new Int16Array(new int[] {1, 3, 5, 7, 9, 11});
    int[] iterCount = {0};
    Integer result = arr.find((value) -> { iterCount[0]++; return value == 5; });
    assertEqual(5, result);
    assertEqual(3, iterCount[0]);
    }

    @Test
    void testInt16ArrayFindTestOne053() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6, 8, 10});
    Integer result = arr.find((value, index) -> index >= 3 && value % 2 == 0);
    assertEqual(8, result);
    }
}
