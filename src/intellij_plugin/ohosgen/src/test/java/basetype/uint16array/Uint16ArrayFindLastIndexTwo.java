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

package basetype.uint16array;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFindLastIndexTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFindLastIndexTwo extends BasTest {

    @Test
    void testUint16ArrayFindLastIndexTwo019() {
    int[] count = {0};
    int result = new Uint16Array().findLastIndex((value) -> {
        count[0]++;
        return true;
    });
    assertEqual(-1, result);
    assertEqual(0, count[0]);
    }

    @Test
    void testUint16ArrayFindLastIndexTwo020() {
    assertEqual(2, Uint16Array.of(2, 4, 2).findLastIndex((value) -> value == 2));
    }

    @Test
    void testUint16ArrayFindLastIndexTwo021() {
    int[] count = {0};
    int result = Uint16Array.of(1, 2, 3).findLastIndex((value) -> {
        count[0]++;
        return true;
    });
    assertEqual(2, result);
    assertEqual(1, count[0]);
    }

    @Test
    void testUint16ArrayFindLastIndexTwo022() {
    List<Integer> order = new ArrayList<>();
    int result = Uint16Array.of(1, 2, 3).findLastIndex((value, index) -> {
        order.add(index);
        return false;
    });
    assertEqual(-1, result);
    assertEqual(3, order.size());
    assertEqual(2, order.get(0));
    assertEqual(1, order.get(1));
    assertEqual(0, order.get(2));
    }

    @Test
    void testUint16ArrayFindLastIndexTwo023() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    int result = source.findLastIndex((value, index, array) -> {
        if (index == 2) {
            array.set(1, 20);
        }
        return value > 10;
    });
    assertEqual(1, result);
    }

    @Test
    void testUint16ArrayFindLastIndexTwo024() {
    Uint16Array source = Uint16Array.of(1, 2, 3);
    int[] count = {0};
    int result = source.findLastIndex((value, index, array) -> {
        count[0]++;
        if (index == 1) {
            array.set(2, 30);
        }
        return false;
    });
    assertEqual(-1, result);
    assertEqual(3, count[0]);
    }

    @Test
    void testUint16ArrayFindLastIndexTwo025() {
    ArrayBuffer buffer = new ArrayBuffer(6);
    Uint16Array source = new Uint16Array(buffer);
    source.set(new Uint16Array(new int[] {1, 2, 3}));
    Uint16Array alias = new Uint16Array(buffer);
    int result = source.findLastIndex((value, index) -> {
        if (index == 2) {
            alias.set(1, 40);
        }
        return value > 10;
    });
    assertEqual(1, result);
    }

    @Test
    void testUint16ArrayFindLastIndexTwo026() {
    Uint16Array all = Uint16Array.of(9, 2, 3, 9);
    Uint16Array view = new Uint16Array(all.buffer(), 2, 2);
    assertEqual(1, view.findLastIndex((value) -> value < 9));
    }

    @Test
    void testUint16ArrayFindLastIndexTwo027() {
    try {
        Uint16Array.of(1).findLastIndex((value) -> {
        throw new RangeError("findLastIndex range");
        });
        fail();
        } catch (RangeError e) {
            assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayFindLastIndexTwo028() {
    assertEqual(2, Uint16Array.of(0, 65535, 0).findLastIndex((value) -> value == 0));
    }
}
