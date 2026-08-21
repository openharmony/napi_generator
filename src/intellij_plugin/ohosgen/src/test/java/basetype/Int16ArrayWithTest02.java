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

package basetype;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayWithTest02 —— Int16Array 方法族测试。
 */
public class Int16ArrayWithTest02 extends BasTest {

    @Test
    void testInt16ArrayWithTestTwo001() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    Int16Array result = arr.with(1, 99);
    Integer actual1 = result.get(1);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo002() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    Int16Array result = arr.with(-2, 99);
    Integer actual1 = result.get(3);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo003() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(4, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo004() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(8, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo005() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(100, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo006() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(1000000, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo007() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(-8, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo008() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(-100, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo009() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    try {
    arr.with(-1000000, 99);
    fail();
    } catch (RuntimeException e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayWithTestTwo010() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 0);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo011() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 1);
    Integer actual1 = result.get(0);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo012() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -1);
    Integer actual1 = result.get(0);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo013() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 32767);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo014() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -32768);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo015() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 3.7);
    Integer actual1 = result.get(0);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo016() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 0.1);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo017() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 32766.9);
    Integer actual1 = result.get(0);
    assertEqual(32766, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo018() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -3.7);
    Integer actual1 = result.get(0);
    assertEqual(-3, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo019() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -0.1);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo020() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -32767.1);
    Integer actual1 = result.get(0);
    assertEqual(-32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo021() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 0.5);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo022() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, Double.NaN);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo023() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, Double.POSITIVE_INFINITY);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo024() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, Double.NEGATIVE_INFINITY);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo025() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 32768);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo026() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -32769);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo027() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 32769);
    Integer actual1 = result.get(0);
    assertEqual(-32767, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo028() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -32770);
    Integer actual1 = result.get(0);
    assertEqual(32766, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo029() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 65535);
    Integer actual1 = result.get(0);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo030() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 65536);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo031() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 65537);
    Integer actual1 = result.get(0);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo032() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -65535);
    Integer actual1 = result.get(0);
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo033() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -65536);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo034() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -65537);
    Integer actual1 = result.get(0);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo035() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 100000);
    Integer actual1 = result.get(0);
    assertEqual(-31072, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo036() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 200000);
    Integer actual1 = result.get(0);
    assertEqual(3392, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo037() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 1000000);
    Integer actual1 = result.get(0);
    assertEqual(16960, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo038() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -100000);
    Integer actual1 = result.get(0);
    assertEqual(31072, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo039() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -200000);
    Integer actual1 = result.get(0);
    assertEqual(-3392, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo040() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 5e-324);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo041() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    double v = 99.9;
    Int16Array result = arr.with(0, v);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo042() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 99);
    int actual1 = result.length();
    assertEqual(3, actual1);
    Integer actual2 = result.get(0);
    assertEqual(99, actual2);
    }

    @Test
    void testInt16ArrayWithTestTwo043() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 99);
    int actual1 = result.length();
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo044() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(1, 99);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo045() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.with(0, 99);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo046() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 99);
    result.set(1, 888);
    Integer actual1 = arr.get(1);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo047() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 99);
    arr.set(1, 777);
    Integer actual1 = result.get(1);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo048() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 3.5);
    Integer actual1 = result.get(0);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo049() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, -3.5);
    Integer actual1 = result.get(0);
    assertEqual(-3, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo050() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 131071);
    Integer actual1 = result.get(0);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo051() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300});
    Int16Array result = arr.with(0, 131072);
    Integer actual1 = result.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo052() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(-1, 0);
    Integer actual1 = result.get(2);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 10);
    Integer actual1 = result.get(0);
    assertEqual(10, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo054() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 11).with(1, 22);
    Integer actual1 = result.get(0);
    assertEqual(11, actual1);
    Integer actual2 = result.get(1);
    assertEqual(22, actual2);
    }

    @Test
    void testInt16ArrayWithTestTwo055() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array result = arr.with(0, 11).with(0, 99);
    Integer actual1 = result.get(0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArrayWithTestTwo056() {
    Int16Array arr = new Int16Array(new int[] {32767, 32767, 32767});
    Int16Array result = arr.with(0, -32768);
    Integer actual1 = result.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = result.get(1);
    assertEqual(32767, actual2);
    }

    @Test
    void testInt16ArrayWithTestTwo057() {
    Int16Array arr = new Int16Array(new int[] {-32768, -32768, -32768});
    Int16Array result = arr.with(0, 32767);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(-32768, actual2);
    }

    @Test
    void testInt16ArrayWithTestTwo058() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    Int16Array result = arr.with(0, 32767);
    Integer actual1 = result.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = result.get(1);
    assertEqual(0, actual2);
    }
}
