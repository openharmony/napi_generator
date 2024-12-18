/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

package com.sk.ts.utils;

import java.util.regex.Pattern;

/**
 * 文本文件工具
 *
 * @author: xudong
 * @see: file utils
 * @version: v1.0.0
 * @since 2022-02-21
 */
public class FileUtil {
    /**
     * 获取换行符
     *
     * @return 换行符
     */
    public static String getNewline() {
        return System.getProperty("line.separator");
    }

    /**
     * 正则匹配所选文件名是否符合规范
     *
     * @param fileName 文件名
     * @return boolean 是否匹配
     */
    public static boolean patternFileName(String fileName) {
        String pattern = "(([.a-z_A-Z0-9]+).h)";
        return Pattern.matches(pattern, fileName);
    }

    /**
     * 正则匹配所选文件名是否符合规范
     *
     * @param fileName 文件名
     * @return boolean 是否匹配
     */
    public static boolean patternFileNameH(String fileName) {
        String pattern = "([.a-z_A-Z0-9]+).h";
        return Pattern.matches(pattern, fileName);
    }
}
