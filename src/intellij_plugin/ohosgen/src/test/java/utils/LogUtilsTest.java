/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package utils;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class LogUtilsTest {
    @BeforeEach
    void setUp() {
        LogUtils.reinit();
    }

    @AfterEach
    void tearDown() {
        LogUtils.clear();
    }

    @Test
    void getLevel() {
        LogUtils.setLevel(LogUtils.DEBUG);
        assertEquals(LogUtils.DEBUG, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.INFO);
        assertEquals(LogUtils.INFO, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.WARN);
        assertEquals(LogUtils.WARN, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.ERROR);
        assertEquals(LogUtils.ERROR, LogUtils.getLevel());
    }

    @Test
    void setLevel() {
        LogUtils.setLevel(LogUtils.DEBUG);
        assertEquals(LogUtils.DEBUG, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.INFO);
        assertEquals(LogUtils.INFO, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.WARN);
        assertEquals(LogUtils.WARN, LogUtils.getLevel());
        LogUtils.setLevel(LogUtils.ERROR);
        assertEquals(LogUtils.ERROR, LogUtils.getLevel());
    }

    @Test
    void debug() {
        LogUtils.debug("write debug");
    }

    @Test
    void info() {
        LogUtils.info("write info");
    }

    @Test
    void warn() {
        LogUtils.warn("write warn");
    }

    @Test
    void error() {
        LogUtils.error("write error");
    }
}