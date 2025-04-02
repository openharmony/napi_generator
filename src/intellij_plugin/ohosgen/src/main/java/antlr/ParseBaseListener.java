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

package antlr;

/**
 * <h3>类名：该类用于xxx</h3>
 * description parse base listener
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public interface ParseBaseListener {

    /**
     * removeLastSpace
     *
     * @param str 删除字符串最后一个空格
     * @return 返回字符串
     */
    static String removeLastSpace(String str) {
        if (str != null && !str.isEmpty() && str.charAt(str.length() - 1) == ' ') {
            return str.substring(0, str.length() - 1);
        }
        return str;
    }

    /**
     * 打印 json str
     *
     * @return json 字符串
     */
    String dump2JsonStr();
}
