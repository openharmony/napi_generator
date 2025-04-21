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

import java.util.Locale;

/**
 * <h3>类名：该类用于xxx</h3>
 * description string utils class
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class StringUtils {
    /**
     * split string by char
     *
     * @param str string need to split
     * @param delimiter the split char
     */
    public static void splitByChar(String str, char delimiter) {
        int index = str.indexOf(delimiter);
        if (index != -1) {
            String prefix = str.substring(0, index);
            String suffix = str.substring(index + 1).toLowerCase(Locale.ROOT);
            System.out.println("前缀: " + prefix);
            System.out.println("后缀: " + suffix);
        } else {
            System.out.println("未找到分隔符 '" + delimiter + "'");
        }
    }

    /**
     * 删除最后的一个空格
     *
     * @param str 删除字符串最后一个空格
     * @return 返回字符串
     */
    public static String removeLastSpace(String str) {
        if (str != null && !str.isEmpty() && str.charAt(str.length() - 1) == ' ') {
            return str.substring(0, str.length() - 1);
        }
        return str;
    }

    /**
     * 删除最后的几个字符
     *
     * @param str 删除字符串最后一个空格
     * @param n 需要删除字符的个数
     * @return 返回字符串
     */
    public static String removeLastCharacter(String str, int n) {
        if (str != null && !str.isEmpty() && str.length() > n) {
            return str.substring(0, str.length() - n);
        }
        return str;
    }

    /**
     * 判读是否为数字
     *
     * @param str 字符串
     * @return 是数字返回 true
     */
    public static boolean isAllDigits(String str) {
        return str != null && str.matches("\\d+");
    }

    /**
     * 判断是否为布尔
     *
     * @param str 字符串
     * @return 是布尔返回true
     */
    public static boolean isBoolean(String str) {
        String lowerStr = str.toLowerCase(Locale.ROOT);
        return lowerStr.equals("true") || lowerStr.equals("false");
    }

    /**
     * 小写第一个字母
     *
     * @param input 字符串
     * @return 返回字符串
     */
    public static String unCapitalFirst(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        return input.substring(0, 1).toLowerCase() + input.substring(1);
    }

    /**
     * 大写第一个字母
     *
     * @param input 字符串
     * @return 返回字符串
     */
    public static String capitalFirst(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
}
