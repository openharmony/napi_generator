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

package basetype.common;

/**
 * 断言辅助基类：把 ETS hypium expect(...).assertXxx(...) 桥接到 JUnit5 断言，
 * 提供 (int, Integer) 等重载，避免装箱/拆箱导致的 assertEquals 重载歧义。
 * 测试类继承本类以直接使用 assertEqual/assertTrue 等断言方法。
 */
public class BasTest {

    protected BasTest() {
    }

    public static void assertEqual(int expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);
    }

    public static void assertEqual(long expected, long actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);
    }

    public static void assertEqual(long expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);
    }

    public static void assertEqual(int expected, Integer actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, (int) actual);
    }

    public static void assertEqual(Integer expected, int actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);
    }

    /** 浮点期望值与装箱整型实际值按数值相等比较（219.0 == 219）。 */
    public static void assertEqual(double expected, Integer actual) {
        assertEqual(expected, actual.doubleValue());
    }

    /** 装箱浮点期望值与浮点实际值按数值相等比较（含 NaN==NaN）。 */
    public static void assertEqual(Double expected, double actual) {
        assertEqual(expected.doubleValue(), actual);
    }

    /** 装箱整型期望值与浮点实际值按数值相等比较（200 == 200.0）。 */
    public static void assertEqual(Integer expected, double actual) {
        assertEqual(expected.doubleValue(), actual);
    }

    /** 浮点精确相等（NaN 视为相等）。 */
    public static void assertEqual(double expected, double actual) {
        if (Double.isNaN(expected) && Double.isNaN(actual)) {
            return;
        }
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual, 0.0);
    }

    public static void assertEqual(Object expected, Object actual) {
        org.junit.jupiter.api.Assertions.assertEquals(expected, actual);
    }

    public static void assertNotEqual(Object expected, Object actual) {
        org.junit.jupiter.api.Assertions.assertNotEquals(expected, actual);
    }

    public static void assertNotEqual(int expected, int actual) {
        org.junit.jupiter.api.Assertions.assertNotEquals(expected, actual);
    }

    public static void assertTrue(boolean condition) {
        org.junit.jupiter.api.Assertions.assertTrue(condition);
    }

    public static void assertFalse(boolean condition) {
        org.junit.jupiter.api.Assertions.assertFalse(condition);
    }

    public static void assertNull(Object actual) {
        org.junit.jupiter.api.Assertions.assertNull(actual);
    }

    /** JS isFinite 语义：int/long 恒为有限数。 */
    public static boolean isFinite(long value) {
        return true;
    }

    /** 列表 join（ETS 数组 join 语义）。 */
    public static String joinList(java.util.List<?> values, String sep) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < values.size(); i++) {
            if (i > 0) {
                sb.append(sep);
            }
            sb.append(values.get(i));
        }
        return sb.toString();
    }

    public static void fail() {
        org.junit.jupiter.api.Assertions.fail("Expected an exception");
    }
}
