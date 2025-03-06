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

/**
 * <h3>类名：该类用于xxx</h3>
 * description function of grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class FuncObj {
    private String type;
    private String name;
    private String retValue;
    private ParamObj[] paramList;

    /**
     * 构造函数
     */
    public FuncObj() {}

    /**
     * 构造函数
     *
     * @param tv 类型
     * @param nv 名字
     * @param rv 返回值
     * @param pl 参数
     */
    public FuncObj(String tv, String nv, String rv, ParamObj[] pl) {
        this.type = tv;
        this.name = nv;
        this.retValue = rv;
        this.paramList = pl;
    }

    /**
     * 设置类型
     *
     * @param type 类型
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * 获取类型
     *
     * @return 类型
     */
    public String getType() {
        return type;
    }

    /**
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取名称
     *
     * @return 名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置返回值
     *
     * @param retValue 返回值
     */
    public void setRetValue(String retValue) {
        this.retValue = retValue;
    }

    /**
     * 获取返回值
     *
     * @return 返回值
     */
    public String getRetValue() {
        return retValue;
    }

    /**
     * 设置参数
     *
     * @param paramList 参数
     */
    public void setParamList(ParamObj[] paramList) {
        this.paramList = paramList;
    }

    /**
     * 获取参数
     *
     * @return 参数
     */
    public ParamObj[] getParamList() {
        return paramList;
    }
}
