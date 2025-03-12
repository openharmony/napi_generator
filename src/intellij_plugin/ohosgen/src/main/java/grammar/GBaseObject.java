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

package grammar;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import utils.Constants;

/**
 * <h3>类名：该类用于xxx</h3>
 * description grammer base object
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class GBaseObject {
    /**
     * 解析未知代码
     */
    protected int languageType = Constants.PARSE_UNKNOWN_LANGUAGE;

    /**
     * 关键字
     */
    protected String token = "";

    /**
     * 获取 language type
     *
     * @return 解析语言类型
     */
    public int getLanguageType() {
        return languageType;
    }

    /**
     * 设置 language type
     *
     * @param languageType 解析语言类型
     */
    public void setLanguageType(int languageType) {
        this.languageType = languageType;
    }

    /**
     * 获取 token
     *
     * @return token 关键字
     */
    public String getToken() {
        return token;
    }

    /**
     * 设置 token
     *
     * @param token 关键字
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * 转JSON字符串
     *
     * @return json 字符串
     */
    public String toJsonString() {
        // 创建 Gson 实例并启用格式化
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        String json = gson.toJson(this);
        return json;
    }
}
