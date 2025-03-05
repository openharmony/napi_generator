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
 * description class grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ClassObj {
    private String name;
    private String alias;
    private ParamObj[] paramList;
    private FuncObj[] funcList;

    /**
     * 构造函数
     */
    public ClassObj() {}

    /**
     * 构造函数
     */
    public ClassObj(String nv, String av, ParamObj[] pl, FuncObj[] fl) {
        this.name = nv;
        this.alias = av;
        this.paramList = pl;
        this.funcList = fl;
    }

    /**
     * 设名字
     *
     * @param name 名字
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 读名字
     *
     * @return name 名字
     */
    public String getName() {
        return name;
    }

    /**
     * 设置别名
     *
     * @param alias 别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 读取别名
     *
     * @return 别名
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法列表
     */
    public void setFuncList(FuncObj[] funcList) {
        this.funcList = funcList;
    }

    /**
     * 获取方法列表
     *
     * @return 方法列表
     */
    public FuncObj[] getFuncList() {
        return funcList;
    }

    /**
     * 设置参数
     *
     * @param paramList 参数列表
     */
    public void setParamList(ParamObj[] paramList) {
        this.paramList = paramList;
    }

    /**
     * 读取方法
     *
     * @return 方法列表
     */
    public ParamObj[] getParamList() {
        return paramList;
    }
}
