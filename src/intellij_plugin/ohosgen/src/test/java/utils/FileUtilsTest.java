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

import java.util.List;

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
class FileUtilsTest {

    @BeforeEach
    void setUp() {
        boolean res = FileUtils.deleteFile("test.file");
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void createFile() {
        boolean res = FileUtils.createFile("test.file");
        assertTrue(res);
    }

    @Test
    void deleteFile() {
        boolean res = FileUtils.createFile("test.file");
        assertTrue(res);
        res = FileUtils.deleteFile("test.file");
        assertTrue(res);
    }

    @Test
    void overwriteText() {
        boolean res = FileUtils.createFile("test.file");
        assertTrue(res);

        FileUtils.appendText("test.file", "create");

        FileUtils.overwriteText("test.file", "overwrite");
        List<String> fcList = FileUtils.readText("test.file");
        assertEquals(1, fcList.size());
        assertEquals("overwrite", fcList.get(0));
    }

    @Test
    void appendText() {
        FileUtils.appendText("test.file", "create");
        List<String> fcList = FileUtils.readText("test.file");
        assertEquals(1, fcList.size());
        assertEquals("create", fcList.get(0));
    }

    @Test
    void readText() {
        FileUtils.appendText("test.file", "create");
        List<String> fcList = FileUtils.readText("test.file");
        assertEquals(1, fcList.size());
        assertEquals("create", fcList.get(0));
    }

    @Test
    void overwriteBinary() {
        byte[] aList = {1,2,3};
        FileUtils.overwriteBinary("test.file", aList);
        byte[] bList = FileUtils.readBinary("test.file");
        if (bList != null) {
            assertEquals(3, bList.length);
            assertEquals(aList[0], bList[0]);
            assertEquals(aList[1], bList[1]);
            assertEquals(aList[2], bList[2]);
        } else {
            fail();
        }
    }

    @Test
    void readBinary() {
        byte[] aList = {1,2,3};
        FileUtils.overwriteBinary("test.file", aList);
        byte[] bList = FileUtils.readBinary("test.file");
        if (bList != null) {
            assertEquals(3, bList.length);
            assertEquals(aList[0], bList[0]);
            assertEquals(aList[1], bList[1]);
            assertEquals(aList[2], bList[2]);
        } else {
            fail();
        }
    }
}