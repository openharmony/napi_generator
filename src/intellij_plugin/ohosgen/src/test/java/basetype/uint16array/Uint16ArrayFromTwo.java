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

import basetype.common.BasTest;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayFromTwo —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayFromTwo extends BasTest {

    @Test
    void testUint16ArrayFromTwo013() {
    double[] source = new double[] {1.0, 2.0};
    Uint16Array result = Uint16Array.from(source);
    result.set(0, 9);
    assertEqual(1, source[0]);
    }

    @Test
    void testUint16ArrayFromTwo014() {
    Uint16Array result = Uint16Array.from(new double[] {1.0, 2.0}, (value) -> value + 65535);
    assertEqual(0, result.at(0));
    assertEqual(1, result.at(1));
    }

    @Test
    void testUint16ArrayFromTwo015() {
    int[] count = {0};
    List<Integer> source = new ArrayList<>();
    Uint16Array result = Uint16Array.from(source, (value) -> {
        count[0]++;
        return value;
    });
    assertEqual(0, result.length());
    assertEqual(0, count[0]);
    }

    @Test
    void testUint16ArrayFromTwo016() {
    Uint16Array backing = Uint16Array.of(10, 20, 30, 40);
    Uint16Array source = new Uint16Array(backing.buffer(), 2, 2);
    Uint16Array result = Uint16Array.from(source);
    backing.set(1, 99);
    result.set(1, 77);
    assertEqual(2, result.length());
    assertEqual(0, result.byteOffset());
    assertEqual(20, result.at(0));
    assertEqual(30, backing.at(2));
    result.set(0, 88);
    assertEqual(99, source.at(0));
    }

    @Test
    void testUint16ArrayFromTwo017() {
    double[] source = new double[] {-1.0, 65536.0, 3.9};
    List<Double> observed = new ArrayList<>();
    Uint16Array result = Uint16Array.from(source, (value) -> {
        observed.add(value);
        return value;
        });
    assertEqual(-1, observed.get(0));
    assertEqual(65536, observed.get(1));
    assertEqual(3.9, observed.get(2));
    assertEqual(65535, result.at(0));
    assertEqual(0, result.at(1));
    assertEqual(3, result.at(2));
    }

    @Test
    void testUint16ArrayFromTwo018() {
    Set<Integer> source = new LinkedHashSet<>();
    source.add((int) (1.0));
    source.add((int) (2.0));
    int[] count = {0};
    Uint16Array result = Uint16Array.from(source, (value, index) -> {
        count[0]++;
        if (index == 0.0) { source.add((int) (3.0));
        } return value;
        });
    assertEqual(3, count[0]);
    assertEqual(3, result.length());
    assertEqual(1, result.at(0));
    assertEqual(2, result.at(1));
    assertEqual(3, source.size());
    }

    @Test
    void testUint16ArrayFromTwo019() {
    double[] source = new double[] {7.0, 1.0, 7.0, 2.0, 7.0};
    Uint16Array result = Uint16Array.from(source);
    assertTrue(result.includes(7));
    assertEqual(0, result.indexOf(7));
    assertEqual(4, result.lastIndexOf(7));
    assertEqual(2, result.indexOf(7, 1));
    assertEqual(2, result.lastIndexOf(7, 3));
    }
}
