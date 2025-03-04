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

import java.io.File;
import java.io.IOException;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class FileUtils {

    /**
     * 创建新文件（若不存在）
     * @param filePath 文件路径
     * @return 是否创建成功
     */
    public static boolean createFile(String filePath) {
        File file = new File(filePath);
        try {
            return file.createNewFile(); // 文件不存在时创建新文件‌:ml-citation{ref="2" data="citationList"}
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
    /**
     * 覆盖写入文本内容
     * @param filePath 文件路径
     * @param content  待写入内容
     */
    public static void overwriteText(String filePath, String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, false))) { // false 表示覆盖模式‌:ml-citation{ref="3" data="citationList"}
            writer.write(content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    /**
     * 追加文本内容到文件末尾
     * @param filePath 文件路径
     * @param content  待追加内容
     */
    public static void appendText(String filePath, String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, true))) { // true 表示追加模式‌:ml-citation{ref="6" data="citationList"}
            writer.write(content);
            writer.newLine(); // 换行追加
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
        /**
         * 读取文本文件内容
         * @param filePath 文件路径
         * @return 按行读取的内容列表
         */
    public static List<String> readText(String filePath) {
        List<String> lines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) { // 逐行读取文本‌:ml-citation{ref="8" data="citationList"}
            String line;
            while ((line = reader.readLine()) != null) {
                lines.add(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return lines;
    }

    /**
     * 覆盖写入二进制数据（如图片、音频）
     * @param filePath 文件路径
     * @param data     二进制数据
     */
    public static void overwriteBinary(String filePath, byte[] data) {
        try (FileOutputStream fos = new FileOutputStream(filePath)) { // 直接覆盖二进制文件‌:ml-citation{ref="5" data="citationList"}
            fos.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
