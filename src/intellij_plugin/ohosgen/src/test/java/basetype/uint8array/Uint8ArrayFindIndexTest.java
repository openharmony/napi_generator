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
import basetype.common.Error;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayFindIndexTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayFindIndexTest extends BasTest {

    private static Uint8Array sharedArr = Uint8Array.of(1, 2, 3);

    private static boolean extraParam = false;

    @Test
    void testUint8ArrayFindIndex001() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value) -> value == 20);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex003() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((value) -> true);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex004() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex005() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex006() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value > 0);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex007() {
    Uint8Array arr = Uint8Array.of(50, 150, 250);
    int result = arr.findIndex((value) -> value > 200);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex008() {
    Uint8Array arr = Uint8Array.of(0, 100, 0xFF);
    int result = arr.findIndex((value) -> value == 0xFF);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex009() {
    Uint8Array arr = Uint8Array.of(0, 100, 200);
    int result = arr.findIndex((value) -> value > 127);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex010() {
    Uint8Array arr = Uint8Array.of(127, 128, 129);
    int result = arr.findIndex((value) -> value >= 128);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex011() {
    Uint8Array arr = Uint8Array.of(200, 50, 100);
    int result = arr.findIndex((value) -> value < 100);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex012() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value) -> value % 2 == 0);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex013() {
    Uint8Array arr = Uint8Array.of(2, 4, 5);
    int result = arr.findIndex((value) -> value % 2 == 1);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex014() {
    Uint8Array arr = Uint8Array.of(0, 0, 3);
    int result = arr.findIndex((value) -> value != 0);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex015() {
    Uint8Array arr = Uint8Array.of(0, 100, 150, 200);
    int result = arr.findIndex((value) -> value > 100 && value < 200);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex016() {
    Uint8Array arr = Uint8Array.of(0, 0x80, 200);
    int result = arr.findIndex((value) -> value == 0x80);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex017() {
    Uint8Array arr = Uint8Array.of(0, 127, 255);
    int result = arr.findIndex((value) -> value == 127);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex018() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value <= 1);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex019() {
    Uint8Array arr = Uint8Array.of(42, 7, 99);
    int result = arr.findIndex((value) -> value >= 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex020() {
    Uint8Array arr = Uint8Array.of(100, 200, 300);
    int result = arr.findIndex((value, index) -> index == 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex021() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index, array) -> index == array.length() - 1);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex022() {
    Uint8Array arr = Uint8Array.of(5, 10, 15, 20);
    int result = arr.findIndex((value, index) -> index == 2);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex023() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findIndex((value, index) -> index % 2 == 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex024() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40);
    int result = arr.findIndex((value, index) -> index % 2 == 1);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex025() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index > 2);
    assertEqual(3, result);
    }

    @Test
    void testUint8ArrayFindIndex026() {
    Uint8Array arr = Uint8Array.of(100, 200, 300, 400);
    int result = arr.findIndex((value, index) -> index < 2);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex027() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index >= 2 && index <= 3);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex028() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] sameRef = {false};
    arr.findIndex((value, index, array) -> {
    sameRef[0] = array == arr;
    return false;
        });
    assertTrue(sameRef[0]);
    }

    @Test
    void testUint8ArrayFindIndex029() {
    Uint8Array arr = Uint8Array.of(4, 5, 6);
    int result = arr.findIndex((value, index, array) -> array.length() == 3);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex030() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index, array) -> array.get(index) == value);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex031() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int[] byteLen = {0};
    arr.findIndex((value, index, array) -> {
    byteLen[0] = array.byteLength();
    return false;
        });
    assertEqual(4, byteLen[0]);
    }

    @Test
    void testUint8ArrayFindIndex032() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int result = arr.findIndex((value, index, array) -> {
        if (index < array.length() - 1) {
            return value == array.get(index + 1) - 1;
        }
        return false;
    });
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex033() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 52);
    int result = arr.findIndex((value, index) -> value + index > 55);
    assertEqual(4, result);
    }

    @Test
    void testUint8ArrayFindIndex034() {
    Uint8Array arr = Uint8Array.of(20, 25, 30, 15);
    int result = arr.findIndex((value, index, array) -> value > array.get(0));
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex035() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index, array) -> {
        return value > 2 && index < 4 && array.length() == 5;
        });
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex036() {
    Uint8Array arr = Uint8Array.of(10, 20, 30, 40, 50);
    int result = arr.findIndex((value, index) -> value * index > 100);
    assertEqual(3, result);
    }

    @Test
    void testUint8ArrayFindIndex037() {
    Uint8Array arr = Uint8Array.of(0, 1, 3, 2);
    int result = arr.findIndex((value, index) -> value > index);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex038() {
    Uint8Array arr = Uint8Array.of(5, 10, 15);
    int result = arr.findIndex((value) -> value == 10);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex039() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value, index) -> value == 2 && index == 1);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex040() {
    Uint8Array arr = Uint8Array.of(2, 4, 6);
    int result = arr.findIndex((value) -> value % 2 == 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex041() {
    Uint8Array arr = Uint8Array.of(0, 100, 200, 255);
    int result = arr.findIndex((value) -> value > 255);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex042() {
    Uint8Array arr = Uint8Array.of(0, 50, 100);
    int result = arr.findIndex((value) -> value < 0);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex043() {
    Uint8Array arr = Uint8Array.of(0, 1, 255);
    int result = arr.findIndex((value) -> value == -1);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex044() {
    Uint8Array arr = new Uint8Array();
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex045() {
    Uint8Array arr = Uint8Array.of(50);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex046() {
    Uint8Array arr = Uint8Array.of(500);
    int result = arr.findIndex((value) -> value == 244);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex047() {
    Uint8Array arr = new Uint8Array(0);
    int result = arr.findIndex((value) -> false);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex048() {
    Uint8Array arr = Uint8Array.of(0, 0, 0);
    int result = arr.findIndex((value) -> value > 0);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex049() {
    Uint8Array arr = Uint8Array.of(255, 255);
    int result = arr.findIndex((value) -> value < 0);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex050() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value, index) -> index > 100);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex051() {
    Uint8Array arr = Uint8Array.of(100, 150, 200);
    int result = arr.findIndex((value) -> value > 200 && value < 50);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex052() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value != value);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex053() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8Array arr = new Uint8Array(buf);
    int result = arr.findIndex((value) -> true);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex054() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value, index) -> index == -1);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex055() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    List<Integer> visitedIndices = new ArrayList<>();
    arr.findIndex((value, index) -> {
    visitedIndices.add(index);
    return false;
        });
    assertEqual(5, visitedIndices.size());
    assertEqualInt(0, visitedIndices.get(0));
    assertEqualInt(1, visitedIndices.get(1));
    assertEqualInt(2, visitedIndices.get(2));
    assertEqualInt(3, visitedIndices.get(3));
    assertEqualInt(4, visitedIndices.get(4));
    }

    @Test
    void testUint8ArrayFindIndex056() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 3;
    });
    assertEqual(2, result);
    assertEqual(3, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex057() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(5, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex058() {
    Uint8Array arr = Uint8Array.of(42);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 42;
    });
    assertEqual(0, result);
    assertEqual(1, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex059() {
    Uint8Array arr = Uint8Array.of(10, 20);
    List<Integer> visitedIndices = new ArrayList<>();
    arr.findIndex((value, index) -> {
    visitedIndices.add(index);
    return false;
        });
    assertEqual(2, visitedIndices.size());
    assertEqualInt(0, visitedIndices.get(0));
    assertEqualInt(1, visitedIndices.get(1));
    }

    @Test
    void testUint8ArrayFindIndex060() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 5;
    });
    assertEqual(4, result);
    assertEqual(5, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex061() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(10, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex062() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return value == 50;
    });
    assertEqual(50, result);
    assertEqual(51, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex063() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int[] visitedCount = {0};
    int result = arr.findIndex((value) -> {
        visitedCount[0]++;
        return false;
    });
    assertEqual(-1, result);
    assertEqual(100, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex064() {
    Uint8Array arr = Uint8Array.of(5, 15, 25);
    int result = arr.findIndex((value) -> value == 15);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex065() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    }

    @Test
    void testUint8ArrayFindIndex066() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value == 0x0A);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex067() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value > 0b0);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex068() {
    Uint8Array arr = Uint8Array.of(0, 8, 16);
    int result = arr.findIndex((value) -> value == 010);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex069() {
    Uint8Array arr = Uint8Array.of(0, 100, 200);
    int result = arr.findIndex((value) -> value == 1e2);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex070() {
    Uint8Array arr = Uint8Array.of(0, 50, 100);
    int result = arr.findIndex((value) -> value > -1);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex071() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    return BasTest.throwTestError("test error");
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("test error", e.getMessage());
    }
    assertTrue(caught[0]);
    }

    @Test
    void testUint8ArrayFindIndex072() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    return BasTest.throwTestError("string error");
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("string error", e.getMessage());
    }
    assertTrue(caught[0]);
    }

    @Test
    void testUint8ArrayFindIndex073() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    return BasTest.throwTestError("42");
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("42", e.getMessage());
    }
    assertTrue(caught[0]);
    }

    @Test
    void testUint8ArrayFindIndex074() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 1) {
    return BasTest.throwTestError("error on first");
    }
    return false;
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(1, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex075() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 2) {
    return BasTest.throwTestError("error on second");
    }
    return false;
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(2, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex076() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int[] visitedCount = {0};
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    visitedCount[0]++;
    if (visitedCount[0] == 3) {
    return BasTest.throwTestError("error on last");
    }
    return false;
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqual(3, visitedCount[0]);
    }

    @Test
    void testUint8ArrayFindIndex077() {
    Uint8Array arr = Uint8Array.of(42);
    int result = arr.findIndex((value) -> value == 42);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex078() {
    Uint8Array arr = Uint8Array.of(10, 20);
    int result = arr.findIndex((value) -> value == 20);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex079() {
    Uint8Array arr = new Uint8Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(new Uint8Array(new int[] {i}), i);
    }
    int result = arr.findIndex((value) -> value == 99);
    assertEqual(99, result);
    }

    @Test
    void testUint8ArrayFindIndex080() {
    Uint8Array arr = new Uint8Array(256);
    for (int i = 0; i < 256; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(255, result);
    }

    @Test
    void testUint8ArrayFindIndex081() {
    Uint8Array arr = new Uint8Array(1000);
    for (int i = 0; i < 1000; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 100);
    assertEqual(100, result);
    }

    @Test
    void testUint8ArrayFindIndex082() {
    Uint8Array arr = new Uint8Array(10000);
    for (int i = 0; i < 10000; i++) {
    arr.set(new Uint8Array(new int[] {i % 256}), i);
    }
    int result = arr.findIndex((value) -> value == 200);
    assertEqual(200, result);
    }

    @Test
    void testUint8ArrayFindIndex083() {
    Uint8Array arr = Uint8Array.of(0, 10, 20);
    int result = arr.findIndex((value) -> value == 0);
    assertEqual(0, result);
    }

    @Test
    void testUint8ArrayFindIndex084() {
    Uint8Array arr = Uint8Array.of(0, 10, 255);
    int result = arr.findIndex((value) -> value == 255);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex085() {
    Uint8Array arr = Uint8Array.of(0, 128, 255);
    int result = arr.findIndex((value) -> value == 128);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex086() {
    Uint8Array arr = Uint8Array.of(0, 1, 2);
    int result = arr.findIndex((value) -> value == 1);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex087() {
    Uint8Array arr = Uint8Array.of(253, 254, 255);
    int result = arr.findIndex((value) -> value == 254);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex088() {
    Uint8Array arr = Uint8Array.of(252, 253, 254);
    int result = arr.findIndex((value) -> value == 253);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex089() {
    Uint8Array arr = Uint8Array.of(1, 2, 3);
    int result = arr.findIndex((value) -> value == 2);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex090() {
    Uint8Array arr = Uint8Array.of(251, 252, 253);
    int result = arr.findIndex((value) -> value == 252);
    assertEqual(1, result);
    }

    @Test
    void testUint8ArrayFindIndex091() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findIndex((value) -> value == 3);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    assertEqualInt(5, arr.at(4));
    }

    @Test
    void testUint8ArrayFindIndex092() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    int originalLength = arr.length();
    arr.findIndex((value) -> value == 20);
    assertEqual(originalLength, arr.length());
    }

    @Test
    void testUint8ArrayFindIndex093() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4);
    int originalByteLength = arr.byteLength();
    arr.findIndex((value) -> value == 2);
    assertEqual(originalByteLength, arr.byteLength());
    }

    @Test
    void testUint8ArrayFindIndex094() {
    Uint8Array arr = Uint8Array.of(100, 200, 150);
    ArrayBuffer originalBuffer = arr.buffer();
    arr.findIndex((value) -> value == 200);
    assertEqual(originalBuffer, arr.buffer());
    }

    @Test
    void testUint8ArrayFindIndex095() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int originalByteOffset = arr.byteOffset();
    arr.findIndex((value) -> value == 3);
    assertEqual(originalByteOffset, arr.byteOffset());
    }

    @Test
    void testUint8ArrayFindIndex096() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int result = arr.findIndex((value) -> value > 100);
    assertEqual(-1, result);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    assertEqualInt(5, arr.at(4));
    }

    @Test
    void testUint8ArrayFindIndex097() {
    Uint8Array arr = Uint8Array.of(10, 20, 30);
    boolean[] caught = {false};
    try {
    arr.findIndex((value) -> {
    return BasTest.throwTestError("test error");
        });
    } catch (Error e) {
    caught[0] = true;
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertTrue(caught[0]);
    assertEqualInt(10, arr.at(0));
    assertEqualInt(20, arr.at(1));
    assertEqualInt(30, arr.at(2));
    }

    @Test
    void testUint8ArrayFindIndex098() {
    List<Integer> source = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint8Array arr = Uint8Array.from(source);
    int result = arr.findIndex((value) -> value > 35);
    assertEqual(3, result);
    }

    @Test
    void testUint8ArrayFindIndex099() {
    ArrayBuffer buffer = new ArrayBuffer(5);
    Uint8Array arr = new Uint8Array(buffer);
    arr.set(new Uint8Array(new int[] {100}), 2);
    arr.set(new Uint8Array(new int[] {100}), 4);
    int result = arr.findIndex((value) -> value == 100);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex100() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Uint8Array sub = arr.subarray(2, 6);
    int result = sub.findIndex((value) -> value == 5);
    assertEqual(2, result);
    }

    @Test
    void testUint8ArrayFindIndex101() {
    ArrayBuffer buffer = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buffer, 2, 4);
    arr.set(new Uint8Array(new int[] {99}), 3);
    int result = arr.findIndex((value) -> value == 99);
    assertEqual(3, result);
    }

    @Test
    void testUint8ArrayFindIndex102() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    arr.findIndex((value) -> value % 2 == 0);
    assertEqualInt(1, arr.at(0));
    assertEqualInt(2, arr.at(1));
    assertEqualInt(3, arr.at(2));
    assertEqualInt(4, arr.at(3));
    assertEqualInt(5, arr.at(4));
    }

    @Test
    void testUint8ArrayFindIndex103() {
    Uint8Array arr = Uint8Array.of(1, 2, 3, 4, 5);
    int[] innerResult = {-1};
    int result = arr.findIndex((value, index) -> {
        if (value == 3) {
            innerResult[0] = arr.findIndex((v) -> v == 5);
        }
        return value == 4;
    });
    assertEqual(4, innerResult[0]);
    assertEqual(3, result);
    }
}
