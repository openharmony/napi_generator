package utils;

import java.util.List;

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
            String suffix = str.substring(index + 1).toLowerCase();
            System.out.println("前缀: " + prefix);
            System.out.println("后缀: " + suffix);
        } else {
            System.out.println("未找到分隔符 '" + delimiter + "'");
        }
    }

    /**
     * removeLastSpace
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
     * removeLastSpace
     *
     * @param str 删除字符串最后一个空格
     * @return 返回字符串
     */
    public static String removeLastCharacter(String str, int n) {
        if (str != null && !str.isEmpty() && str.length() > n) {
            return str.substring(0, str.length() - n);
        }
        return str;
    }
}
