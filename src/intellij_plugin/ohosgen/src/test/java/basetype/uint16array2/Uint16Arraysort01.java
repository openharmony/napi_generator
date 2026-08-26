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

package basetype.uint16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arraysort01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraysort01 extends BasTest {

    @Test
    void testUint16ArraySortPart1001() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    }

    @Test
    void testUint16ArraySortPart1002() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1003() {
    Uint16Array arr = Uint16Array.of(9, 6, 4);
    arr.sort((a, b) -> 0);
    assertEqual(9, arr.get(0));
    assertEqual(6, arr.get(1));
    assertEqual(4, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1004() {
    Uint16Array arr = Uint16Array.of(30, 10, 20);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1005() {
    Uint16Array arr = Uint16Array.of(10, 30, 20);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual(30, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1006() {
    Uint16Array arr = Uint16Array.of(25, 5, 15);
    arr.sort((a, b) -> a - b);
    assertEqual(5, arr.get(0));
    assertEqual(15, arr.get(1));
    assertEqual(25, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1007() {
    Uint16Array arr = Uint16Array.of(42, 13, 29);
    arr.sort((a, b) -> a > b ? 1 : (a < b ? -1 : 0));
    assertEqual(13, arr.get(0));
    assertEqual(29, arr.get(1));
    assertEqual(42, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1008() {
    Uint16Array arr = Uint16Array.of(15, 8, 22);
    arr.sort((a, b) -> a < b ? -1 : 1);
    assertEqual(8, arr.get(0));
    assertEqual(15, arr.get(1));
    assertEqual(22, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1009() {
    Uint16Array arr = Uint16Array.of(4, 3, 2, 1);
    arr.sort((a, b) -> ((a % 2)) - ((b % 2)));
    assertEqual(4, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart1010() {
    Uint16Array arr = Uint16Array.of(5, 2, 7, 4);
    arr.sort((a, b) -> ((a & 1)) - ((b & 1)));
    assertEqual(0, arr.get(0) & 1);
    assertEqual(0, arr.get(1) & 1);
    }

    @Test
    void testUint16ArraySortPart1011() {
    Uint16Array arr = Uint16Array.of(25, 12, 38, 5);
    arr.sort((a, b) -> ((a / 10) - (b / 10)));
    assertEqual(5, arr.get(0));
    assertEqual(12, arr.get(1));
    assertEqual(25, arr.get(2));
    assertEqual(38, arr.get(3));
    }

    @Test
    void testUint16ArraySortPart1012() {
    Uint16Array arr = Uint16Array.of(7, 4, 9, 2);
    arr.sort((a, b) -> ((b % 3) - (a % 3)));
    assertEqual(2, arr.get(0) % 3);
    assertEqual(1, arr.get(1) % 3);
    }

    @Test
    void testUint16ArraySortPart1013() {
    Uint16Array arr = Uint16Array.of(100, 65535, 50);
    arr.sort((a, b) -> (a == 65535 ? -1 : (b == 65535 ? 1 : a - b)));
    assertEqual(65535, arr.get(0));
    assertEqual(50, arr.get(1));
    assertEqual(100, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1014() {
    Uint16Array arr = Uint16Array.of(0, 100, 50);
    arr.sort((a, b) -> (a == 0 ? 1 : (b == 0 ? -1 : a - b)));
    assertEqual(50, arr.get(0));
    assertEqual(100, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1015() {
    Uint16Array arr = Uint16Array.of(3, 6, 2, 7);
    arr.sort((a, b) -> ((a & 2)) - ((b & 2)));
    assertEqual(2, arr.get(0) & 2);
    assertEqual(2, arr.get(1) & 2);
    }

    @Test
    void testUint16ArraySortPart1016() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    try {
    arr.sort((a, b) -> {
    throw new Error("sort fail");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1017() {
    Uint16Array arr = Uint16Array.of(5, 4, 3);
    try {
    arr.sort((a, b) -> {
    throw new TypeError("type err");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1018() {
    Uint16Array arr = Uint16Array.of(9, 8, 7);
    try {
    arr.sort((a, b) -> {
    throw new RangeError("range err");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1019() {
    Uint16Array arr = Uint16Array.of(20, 10, 30);
    arr.sort((a, b) -> a == b ? 0 : (a > b ? -1 : 1));
    assertEqual(30, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(10, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1020() {
    Uint16Array arr = Uint16Array.of(50, 30, 40);
    arr.sort((a, b) -> {
    int r = (a - b);
    return r;
        });
    assertEqual(30, arr.get(0));
    assertEqual(40, arr.get(1));
    assertEqual(50, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1021() {
    Uint16Array arr = Uint16Array.of(4, 2, 6);
    arr.sort((a, b) -> a > b ? 1 : -1);
    assertEqual(2, arr.get(0));
    assertEqual(4, arr.get(1));
    assertEqual(6, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1022() {
    Uint16Array arr = new Uint16Array();
    arr.sort();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint16ArraySortPart1023() {
    Uint16Array arr = Uint16Array.of(42);
    arr.sort();
    assertEqual(42, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart1024() {
    Uint16Array arr = Uint16Array.of(2, 1);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart1025() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1026() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1027() {
    Uint16Array arr = Uint16Array.of(3, 2, 1);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1028() {
    Uint16Array arr = Uint16Array.of(5, 5, 5);
    arr.sort();
    assertEqual(5, arr.get(0));
    assertEqual(5, arr.get(1));
    assertEqual(5, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1029() {
    Uint16Array arr = Uint16Array.of(0, 65535, 32768);
    arr.sort();
    assertEqual(0, arr.get(0));
    assertEqual(32768, arr.get(1));
    assertEqual(65535, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1030() {
    Uint16Array arr = Uint16Array.of(5, 3, 5, 1, 3);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(5, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint16ArraySortPart1031() {
    Uint16Array arr = Uint16Array.of(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
    arr.sort();
    for (int i = 0; i < 10; i++) {
    assertEqual(i + 1, arr.get(i));
    }
    }

    @Test
    void testUint16ArraySortPart1032() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint16ArraySortPart1033() {
    Uint16Array arr = Uint16Array.of(5, 4, 3, 2, 1);
    arr.sort();
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    }

    @Test
    void testUint16ArraySortPart1034() {
    Uint16Array arr = Uint16Array.of(0, 1, 2);
    arr.sort();
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1035() {
    Uint16Array arr = Uint16Array.of(65535, 0, 1);
    arr.sort();
    assertEqual(0, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(65535, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1036() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    arr.sort();
    assertEqual(0, arr.get(0));
    assertEqual(0, arr.get(1));
    assertEqual(0, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1037() {
    Uint16Array arr = Uint16Array.of(2, 1, 2);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(2, arr.get(2));
    }

    @Test
    void testUint16ArraySortPart1038() {
    Uint16Array arr = Uint16Array.of(3, 1, 2, 1);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(1, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(3, arr.get(3));
    }

    @Test
    void testUint16ArraySortPart1039() {
    Uint16Array arr = Uint16Array.of(2, 1, 2, 1);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(1, arr.get(0));
    assertEqual(1, arr.get(1));
    assertEqual(2, arr.get(2));
    assertEqual(2, arr.get(3));
    }

    @Test
    void testUint16ArraySortPart1040() {
    Uint16Array arr = Uint16Array.of(5, 3, 8);
    boolean[] called = {false};
    try {
    arr.sort((a, b) -> {
    called[0] = true;
    throw new Error("abort");
        });
    fail();
    } catch (RangeError e) {
    assertTrue(called[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1041() {
    Uint16Array arr = Uint16Array.of(9, 6, 3);
    try {
    arr.sort((a, b) -> {
    throw new Error("custom error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1042() {
    Uint16Array arr = Uint16Array.of(4, 2, 6);
    int[] sideEffect = {0};
    try {
    arr.sort((a, b) -> {
    sideEffect[0] = 99;
    throw new Error("side");
        });
    fail();
    } catch (RangeError e) {
    assertEqual(99, sideEffect[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart1043() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart1044() {
    Uint16Array arr = Uint16Array.of(10, 5, 15);
    Uint16Array result = arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(arr, result);
    assertEqual("5,10,15", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart1045() {
    Uint16Array arr = Uint16Array.of(2, 1);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    assertEqual("1,2", result.join(","));
    }

    @Test
    void testUint16ArraySortPart1046() {
    Uint16Array arr = Uint16Array.of(5, 3, 1, 4, 2);
    int lenBefore = arr.length();
    arr.sort();
    assertEqual(lenBefore, arr.length());
    assertEqual("1,2,3,4,5", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart1047() {
    Uint16Array arr = Uint16Array.of(9, 5, 7);
    int byteLenBefore = arr.byteLength();
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(byteLenBefore, arr.byteLength());
    assertEqual("5,7,9", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart1048() {
    Uint16Array arr = Uint16Array.of(8, 4, 6);
    int offsetBefore = arr.byteOffset();
    arr.sort();
    assertEqual(offsetBefore, arr.byteOffset());
    assertEqual("4,6,8", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart1049() {
    Uint16Array source = Uint16Array.of(40, 2, 300, 11);
    source.sort();
    assertEqual("2,11,40,300", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1050() {
    Uint16Array source = Uint16Array.of(4, 1, 3, 2);
    source.sort((left, right) -> right - left);
    assertEqual("4,3,2,1", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1051() {
    Uint16Array source = Uint16Array.of(7, 4, 3, 8, 5, 2);
    source.sort((left, right) -> {
    int parity = left % 2 - right % 2;
    return parity != 0 ? parity : left - right;
        });
    assertEqual("2,4,8,3,5,7", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1052() {
    Uint16Array source = Uint16Array.of(14, 3, 11, 8, 5);
    source.sort((left, right) -> {
    int remainder = left % 3 - right % 3;
    return remainder != 0 ? remainder : left - right;
        });
    assertEqual("3,5,8,11,14", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1053() {
    Uint16Array source = Uint16Array.of(2, 8, 5, 10, 1);
    source.sort((left, right) -> {
    int leftDistance = left > 6 ? left - 6 : 6 - left;
    int rightDistance = right > 6 ? right - 6 : 6 - right;
    return leftDistance != rightDistance ? leftDistance - rightDistance : left - right;
        });
    assertEqual("5,8,2,10,1", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1054() {
    Uint16Array source = Uint16Array.of(9, 1, 5);
    Uint16Array result = source.sort();
    assertEqual(source, result);
    assertEqual("1,5,9", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1055() {
    ArrayBuffer buffer = new ArrayBuffer(12);
    Uint16Array full = new Uint16Array(buffer);
    full.set(Uint16Array.of(90, 7, 3, 5, 1, 80));
    Uint16Array view = new Uint16Array(buffer, 2, 4);
    view.sort();
    assertEqual("1,3,5,7", view.join(","));
    assertEqual("90,1,3,5,7,80", full.join(","));
    }

    @Test
    void testUint16ArraySortPart1056() {
    Uint16Array source = Uint16Array.of(65535, 0, 32768, 0, 65535);
    source.sort();
    assertEqual("0,0,32768,65535,65535", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1057() {
    Uint16Array source = new Uint16Array();
    int[] calls = {0};
    source.sort((left, right) -> {
    calls[0]++;
    return left - right;
        });
    assertEqual("", source.join(","));
    assertEqual(0, calls[0]);
    }

    @Test
    void testUint16ArraySortPart1058() {
    Uint16Array source = Uint16Array.of(42);
    int[] calls = {0};
    source.sort((left, right) -> {
    calls[0]++;
    return left - right;
        });
    assertEqual("42", source.join(","));
    assertEqual(0, calls[0]);
    }

    @Test
    void testUint16ArraySortPart1059() {
    Uint16Array source = Uint16Array.of(3, 2, 1);
    try {
    source.sort((left, right) -> {
    throw new Error("sort stop");
        });
    fail();
    } catch (Error e) {
    assertEqual("sort stop", e.getMessage());
    }
    }

    @Test
    void testUint16ArraySortPart1060() {
    Uint16Array source = Uint16Array.of(0x0201, 0x0102, 0x0200, 0x0101);
    source.sort((left, right) -> left - right);
    assertEqual("257,258,512,513", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1061() {
    Uint16Array source = Uint16Array.of(25, 4, 19, 11, 32);
    source.sort((left, right) -> {
    int bucket = left / 10 - right / 10;
    return bucket != 0 ? bucket : right - left;
        });
    assertEqual("4,19,11,25,32", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1062() {
    Uint16Array source = Uint16Array.of(8, 6, 7, 5);
    ArrayBuffer bufferBefore = source.buffer();
    source.sort();
    assertEqual(bufferBefore, source.buffer());
    assertEqual("5,6,7,8", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1063() {
    Uint16Array source = new Uint16Array(new int[] {-1, 65536, 65537, 32768});
    source.sort();
    assertEqual("0,1,32768,65535", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1064() {
    Uint16Array source = Uint16Array.of(4, 99, 2, 99, 3);
    source.sort((left, right) -> {
    if (left == 99 && right != 99) {
    return -1;
    }
    if (right == 99 && left != 99) {
    return 1;
    }
    return left - right;
        });
    assertEqual("99,99,2,3,4", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1065() {
    Uint16Array source = Uint16Array.of(0x0102, 0x0003, 0x0201, 0x0101);
    source.sort((left, right) -> {
    int lowByte = left % 256 - right % 256;
    return lowByte != 0 ? lowByte : left - right;
        });
    assertEqual("257,513,258,3", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1066() {
    Uint16Array source = Uint16Array.of(0x0102, 0x0301, 0x0205, 0x0101);
    source.sort((left, right) -> {
    int highByte = right / 256 - left / 256;
    return highByte != 0 ? highByte : left - right;
        });
    assertEqual("769,517,257,258", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1067() {
    Uint16Array source = Uint16Array.of(42, 17, 35, 21, 9);
    source.sort((left, right) -> {
    int digit = left % 10 - right % 10;
    return digit != 0 ? digit : left - right;
        });
    assertEqual("21,42,35,17,9", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1068() {
    Uint16Array source = Uint16Array.of(99, 12, 40, 7, 23);
    source.sort((left, right) -> {
    int leftSum = left / 10 + left % 10;
    int rightSum = right / 10 + right % 10;
    return leftSum != rightSum ? leftSum - rightSum : left - right;
        });
    assertEqual("12,40,23,7,99", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1069() {
    Uint16Array source = Uint16Array.of(60, 10, 80, 30, 50);
    source.sort((left, right) -> {
    int leftGroup = left < 50 ? 0 : 1;
    int rightGroup = right < 50 ? 0 : 1;
    return leftGroup != rightGroup ? leftGroup - rightGroup : left - right;
        });
    assertEqual("10,30,50,60,80", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1070() {
    Uint16Array source = Uint16Array.of(3, 8, 5, 4, 6, 2);
    source.sort((left, right) -> {
    int leftPower = (left == 2 || left == 4 || left == 8) ? 0 : 1;
    int rightPower = (right == 2 || right == 4 || right == 8) ? 0 : 1;
    return leftPower != rightPower ? leftPower - rightPower : left - right;
        });
    assertEqual("2,4,8,3,5,6", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1071() {
    Uint16Array source = Uint16Array.of(65535, 1, 65534, 2, 32768);
    source.sort((left, right) -> {
    int leftDistance = left > 32767 ? 65536 - left : left;
    int rightDistance = right > 32767 ? 65536 - right : right;
    return leftDistance != rightDistance ? leftDistance - rightDistance : left - right;
        });
    assertEqual("1,65535,2,65534,32768", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1072() {
    Uint16Array source = Uint16Array.of(5, 20, 15, 30, 10, 25);
    source.sort((left, right) -> {
    int leftGroup = left >= 10 && left <= 20 ? 0 : 1;
    int rightGroup = right >= 10 && right <= 20 ? 0 : 1;
    return leftGroup != rightGroup ? leftGroup - rightGroup : left - right;
        });
    assertEqual("10,15,20,5,25,30", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1073() {
    Uint16Array source = Uint16Array.of(14, 11, 23, 20, 18);
    source.sort((left, right) -> {
    int quotient = left / 10 - right / 10;
    return quotient != 0 ? quotient : right % 10 - left % 10;
        });
    assertEqual("18,14,11,23,20", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1074() {
    Uint16Array source = Uint16Array.of(0, 1, 2, 3);
    source.sort((left, right) -> (left ^ 2) - (right ^ 2));
    assertEqual("2,3,0,1", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1075() {
    Uint16Array source = Uint16Array.of(0, 4, 2, 0, 3);
    source.sort((left, right) -> {
    if (left == 0 && right != 0) {
    return 1;
    }
    if (right == 0 && left != 0) {
    return -1;
    }
    return left - right;
        });
    assertEqual("2,3,4,0,0", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1076() {
    Uint16Array source = Uint16Array.of(14, 26, 21, 8, 33);
    source.sort((left, right) -> {
    int leftDistance = left % 10 <= 5 ? left % 10 : 10 - left % 10;
    int rightDistance = right % 10 <= 5 ? right % 10 : 10 - right % 10;
    return leftDistance != rightDistance ? leftDistance - rightDistance : left - right;
        });
    assertEqual("21,8,33,14,26", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1077() {
    Uint16Array source = Uint16Array.of(2, 7, 12, 5, 10, 3);
    source.sort((left, right) -> {
    int leftGroup = left >= 10 ? 0 : (left % 2 == 1 ? 1 : 2);
    int rightGroup = right >= 10 ? 0 : (right % 2 == 1 ? 1 : 2);
    return leftGroup != rightGroup ? leftGroup - rightGroup : left - right;
        });
    assertEqual("10,12,3,5,7,2", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1078() {
    Uint16Array source = Uint16Array.of(7, 8, 3, 5, 1);
    source.sort((left, right) -> {
    int leftBits = (left & 1) + ((left >> 1) & 1) + ((left >> 2) & 1) + ((left >> 3) & 1);
    int rightBits = (right & 1) + ((right >> 1) & 1) + ((right >> 2) & 1) + ((right >> 3) & 1);
    return leftBits != rightBits ? leftBits - rightBits : left - right;
        });
    assertEqual("1,8,3,5,7", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1079() {
    Uint16Array source = Uint16Array.of(0, 1, 32768, 65534, 65535);
    source.sort((left, right) -> (65535 - left) - (65535 - right));
    assertEqual("65535,65534,32768,1,0", source.join(","));
    }

    @Test
    void testUint16ArraySortPart1080() {
    Uint16Array source = Uint16Array.of(12, 14, 21, 23, 16);
    source.sort((left, right) -> left / 10 - right / 10);
    assertEqual("12,14,16,21,23", source.join(","));
    }
}
