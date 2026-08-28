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
import basetype.common.NullPointerError;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arraysome01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraysome01 extends BasTest {

    @Test
    void testUint16ArraySomePart1001() {
    Uint16Array arr = new Uint16Array(new int[] {0, 2, 3});
    boolean result = arr.some((e) -> e > 1);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1002() {
    Uint16Array arr = new Uint16Array(new int[] {0, 20});
    boolean result = arr.some((e) -> e >= 20);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1003() {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    boolean result = arr.some(() -> true);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1004() {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    boolean result = arr.some(() -> false);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1005() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 5});
    boolean result = arr.some((e) -> e > 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1006() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 0, 1});
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1007() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1008() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 32768});
    boolean result = arr.some((e) -> e >= 32768);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1009() {
    Uint16Array arr = new Uint16Array(new int[] {1, 3, 4});
    boolean result = arr.some((e) -> e % 2 == 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1010() {
    Uint16Array arr = new Uint16Array(new int[] {2, 4, 5});
    boolean result = arr.some((e) -> e % 2 != 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1011() {
    Uint16Array arr = new Uint16Array(new int[] {200, 300, 50});
    boolean result = arr.some((e) -> e < 100);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1012() {
    Uint16Array arr = new Uint16Array(new int[] {100, 60000, 200});
    boolean result = arr.some((e) -> e >= 60000);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1013() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 65535});
    boolean result = arr.some((e) -> e > 65535);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1014() {
    Uint16Array arr = new Uint16Array(new int[] {0, 1, 65535});
    boolean result = arr.some((e) -> e < 0);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1015() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    boolean result = arr.some((e) -> e == 99999);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1016() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0});
    boolean result = arr.some((e) -> e < 0);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1017() {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    boolean result = arr.some((e, i) -> i < 0);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1018() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean result = arr.some((e) -> e > 25);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1019() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean result = arr.some((e, i) -> i == 2);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1020() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    int[] callCount = {0};
    boolean result = arr.some((e, i, a) -> {
        callCount[0]++;
        assertEqual(10, e);
        assertEqual(0, i);
        assertEqual(arr, a);
        return true;
    });
    assertTrue(result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1021() {
    Uint16Array arr = new Uint16Array(new int[] {5, 15, 25});
    boolean result = arr.some((e, i) -> e == 15 && i == 1);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1022() {
    Uint16Array arr = new Uint16Array(new int[] {5, 15, 25});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i, a) -> {
        callCount[0]++;
        if (e == 15 && i == 1 && a == arr) {
            matchedIndex[0] = i;
        return true;
        }
        return false;
    });
    assertTrue(result);
    assertEqual(1, matchedIndex[0]);
    assertEqual(2, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1023() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean[] isSame = {false};
    boolean result = arr.some((e, i, a) -> {
        if (i == 0) {
            isSame[0] = a == arr;
        }
        return false;
    });
    assertTrue(isSame[0]);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1024() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean[] lenMatch = {true};
    int[] callCount = {0};
    int[] lastIndex = {-1};
    arr.some((e, i, a) -> {
    callCount[0]++;
    lastIndex[0] = i;
    if (a.length() != 3) {
    lenMatch[0] = false;
    }
    return false;
        });
    assertTrue(lenMatch[0]);
    assertEqual(3, callCount[0]);
    assertEqual(2, lastIndex[0]);
    }

    @Test
    void testUint16ArraySomePart1025() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean[] callbackCalled = {false};
    arr.some((e, i, a) -> {
    if (i == 0) {
    callbackCalled[0] = true;
    assertEqual(3, a.length());
    assertEqual(1, a.get(0));
    }
    return false;
        });
    assertTrue(callbackCalled[0]);
    }

    @Test
    void testUint16ArraySomePart1026() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 1;
    });
    assertTrue(result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1027() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 30;
    });
    assertTrue(result);
    assertEqual(3, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1028() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 5;
    });
    assertTrue(result);
    assertEqual(5, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1029() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return false;
    });
    assertFalse(result);
    assertEqual(3, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1030() {
    Uint16Array arr = new Uint16Array(10000);
    arr.set(0, 1);
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 1;
    });
    assertTrue(result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1031() {
    Uint16Array arr = new Uint16Array(5000);
    arr.set(4999, 99);
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 99;
    });
    assertTrue(result);
    assertEqual(5000, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1032() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0, 1});
    List<Integer> indices = new ArrayList<>();
    boolean result = arr.some((e, i) -> {
        indices.add(i);
        return e == 1;
    });
    assertTrue(result);
    assertEqual(4, indices.size());
    assertEqual(0, indices.get(0));
    assertEqual(1, indices.get(1));
    assertEqual(2, indices.get(2));
    assertEqual(3, indices.get(3));
    }

    @Test
    void testUint16ArraySomePart1033() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0, 0, 0, 0, 1});
    int[] callCount = {0};
    boolean result = arr.some((e) -> {
        callCount[0]++;
        return e == 1;
    });
    assertTrue(result);
    assertEqual(6, callCount[0]);
    }

    @Test
    void testUint16ArraySomePart1034() {
    Uint16Array arr = new Uint16Array();
    boolean result = arr.some((e) -> true);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1035() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    boolean result = arr.some((e) -> e == 42);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1036() {
    Uint16Array arr = new Uint16Array(new int[] {42});
    boolean result = arr.some((e) -> e == 99);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1037() {
    Uint16Array arr = new Uint16Array(new int[] {0});
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1038() {
    Uint16Array arr = new Uint16Array(new int[] {65535});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1039() {
    Uint16Array arr = new Uint16Array(new int[] {0, 0});
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1040() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1041() {
    Uint16Array arr = new Uint16Array(new int[] {0, 32768, 65535});
    boolean result = arr.some((e) -> e > 30000);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1042() {
    Uint16Array arr = new Uint16Array(new double[] {3.14, 2.71, 1.618});
    boolean result = arr.some((e) -> e == 3);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1043() {
    Uint16Array arr = new Uint16Array(100);
    boolean result = arr.some((e) -> e > 0);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1044() {
    Uint16Array arr = new Uint16Array(1000);
    arr.set(500, 1);
    boolean result = arr.some((e) -> e == 1);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1045() {
    Uint16Array arr = new Uint16Array(50000);
    arr.set(49999, 7);
    boolean result = arr.some((e) -> e == 7);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1046() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(0, -1);
    arr.set(1, -2);
    arr.set(2, -3);
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1047() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(0, 65536);
    arr.set(1, 0x10000);
    arr.set(2, 65536 * 3);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1048() {
    Uint16Array arr = new Uint16Array(new int[] {1});
    boolean result = arr.some((e) -> e > 0);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1049() {
    Uint16Array arr = new Uint16Array(new int[] {1});
    boolean result = arr.some((e) -> e > 99);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1050() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean result = arr.some((e) -> e == 2);
    assertTrue(result);
    }

    @Test
    void testUint16ArraySomePart1051() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean result = arr.some((e) -> e == 99);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1052() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int beforeOffset = arr.byteOffset();
    arr.some((e) -> e > 0);
    assertEqual(beforeOffset, arr.byteOffset());
    }

    @Test
    void testUint16ArraySomePart1053() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array before = new Uint16Array(arr);
    arr.some((e) -> e > 0);
    assertEqual(before.get(0).intValue(), arr.get(0));
    assertEqual(before.get(1).intValue(), arr.get(1));
    assertEqual(before.get(2).intValue(), arr.get(2));
    }

    @Test
    void testUint16ArraySomePart1054() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    ArrayBuffer beforeBuf = arr.buffer();
    arr.some((e) -> e > 0);
    assertEqual(beforeBuf, arr.buffer());
    }

    @Test
    void testUint16ArraySomePart1055() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean r1 = arr.some((e) -> e > 15);
    boolean r2 = arr.some((e) -> e > 15);
    assertTrue(r1);
    assertTrue(r2);
    }

    @Test
    void testUint16ArraySomePart1056() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean r1 = arr.some((e) -> e > 100);
    boolean r2 = arr.some((e) -> e > 100);
    assertFalse(r1);
    assertFalse(r2);
    }

    @Test
    void testUint16ArraySomePart1057() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array.Uint16ArrayFinder1 cb = null;
    try {
    arr.some(cb);
    fail();
    } catch (NullPointerError e) {
    assertEqual("NullPointerError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySomePart1058() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    try {
    arr.some((e) -> {
    return BasTest.throwTestError("cb error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("cb error", e.getMessage());
    }
    }

    @Test
    void testUint16ArraySomePart1059() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    try {
    arr.some((e) -> {
    throw new TypeError("type error from cb");
        });
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySomePart1060() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    try {
    arr.some((e) -> {
    throw new RangeError("range error from callback");
        });
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySomePart1061() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    try {
    arr.some((e) -> {
    return BasTest.throwTestError("string error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("string error", e.getMessage());
    }
    }

    @Test
    void testUint16ArraySomePart1062() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    try {
    arr.some((e) -> {
    return BasTest.throwTestError("404");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("404", e.getMessage());
    }
    }

    @Test
    void testUint16ArraySomePart1063() {
    Uint16Array arr = new Uint16Array(0);
    boolean result = arr.some((e) -> true);
    assertFalse(result);
    }

    @Test
    void testUint16ArraySomePart1064() {
    Uint16Array a = Uint16Array.of(3, 6, 9, 12);
    int[] calls = {0};
    boolean r = a.some((v) -> {
        calls[0]++;
        return v == 9;
    });
    assertTrue(r);
    assertEqual(3, calls[0]);
    }

    @Test
    void testUint16ArraySomePart1065() {
    Uint16Array a = Uint16Array.of(2, 4, 6, 8);
    int[] calls = {0};
    boolean r = a.some((v) -> {
        calls[0]++;
        return v == 5;
    });
    assertFalse(r);
    assertEqual(4, calls[0]);
    }

    @Test
    void testUint16ArraySomePart1066() {
    Uint16Array a = Uint16Array.of(5, 10, 15);
    int[] last = {-1};
    boolean r = a.some((v, i) -> {
        last[0] = i;
        return v > 0;
    });
    assertTrue(r);
    assertEqual(0, last[0]);
    }

    @Test
    void testUint16ArraySomePart1067() {
    Uint16Array a = Uint16Array.of(2, 3, 5, 8);
    int[] index = {-1};
    boolean r = a.some((v, i) -> {
        if (v == 8) {
            index[0] = i;
        }
        return v == 8;
    });
    assertTrue(r);
    assertEqual(3, index[0]);
    }

    @Test
    void testUint16ArraySomePart1068() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    int[] order = {0};
    boolean r = a.some((v, i) -> {
        order[0] = order[0] * 10 + i;
        return false;
    });
    assertFalse(r);
    assertEqual(12, order[0]);
    }

    @Test
    void testUint16ArraySomePart1069() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int[] same = {0};
    boolean r = a.some((v, i, x) -> {
        if (x == a) {
            same[0]++;
        }
        return v == 3;
    });
    assertTrue(r);
    assertEqual(3, same[0]);
    }

    @Test
    void testUint16ArraySomePart1070() {
    Uint16Array a = Uint16Array.of(9, 9, 9, 9);
    boolean r = a.some((v, i) -> i == 3);
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart1071() {
    Uint16Array a = Uint16Array.of(65535);
    int[] calls = {0};
    boolean r = a.some((v) -> {
        calls[0]++;
        return v == 65535;
    });
    assertTrue(r);
    assertEqual(1, calls[0]);
    }

    @Test
    void testUint16ArraySomePart1072() {
    Uint16Array a = new Uint16Array();
    int[] calls = {0};
    boolean r = a.some((v) -> {
        calls[0]++;
        return true;
    });
    assertFalse(r);
    assertEqual(0, calls[0]);
    }

    @Test
    void testUint16ArraySomePart1073() {
    Uint16Array a = Uint16Array.of(0, 32767, 32768, 65535);
    boolean r = a.some((v) -> v > 32767 && v < 65535);
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart1074() {
    Uint16Array a = Uint16Array.of(5, 10, 15, 20);
    boolean r = a.some((v, i) -> v == 15 && i == 2);
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart1075() {
    Uint16Array a = Uint16Array.of(5, 10, 15);
    boolean r = a.some((v, i) -> v == 99 && i == 1);
    assertFalse(r);
    }

    @Test
    void testUint16ArraySomePart1076() {
    Uint16Array a = Uint16Array.of(7, 11, 13);
    boolean r = a.some((v) -> v % 2 == 0);
    assertFalse(r);
    assertEqual("7,11,13", a.join(","));
    }

    @Test
    void testUint16ArraySomePart1077() {
    Uint16Array a = Uint16Array.of(4, 0, 6);
    boolean r = a.some((v) -> v == 0);
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart1078() {
    Uint16Array a = Uint16Array.of(1, 65535, 2);
    boolean r = a.some((v) -> v == 65535);
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart1079() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int[] last = {-1};
    boolean r = a.some((v, i) -> {
        last[0] = i;
        return false;
    });
    assertFalse(r);
    assertEqual(2, last[0]);
    }

    @Test
    void testUint16ArraySomePart1080() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    int[] last = {-1};
    boolean r = a.some((v, i) -> {
        last[0] = i;
        return v == 2;
    });
    assertTrue(r);
    assertEqual(1, last[0]);
    }
}
