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
 * description grammar structure
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class StructObj extends GBaseObject {
    private String name;
    private String alias;
    private ParamObj[] memberList;
    private FuncObj[] funcList;

    /**
     * 构造函数
     */
    public StructObj() {}

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param ml 成员
     * @param fl 方法
     */
    public StructObj(String nv, String av, ParamObj[] ml, FuncObj[] fl) {
        this.name = nv;
        this.alias = av;
        this.memberList = ml;
        this.funcList = fl;
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
     * 设置别名
     *
     * @param alias 别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取别名
     *
     * @return 别名
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 获取方法
     *
     * @return 方法
     */
    public FuncObj[] getFuncList() {
        return funcList;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法
     */
    public void setFuncList(FuncObj[] funcList) {
        this.funcList = funcList;
    }

    /**
     * 获取成员
     *
     * @return 成员
     */
    public ParamObj[] getMemberList() {
        return memberList;
    }

    /**
     * 设置成员
     *
     * @param memberList 成员
     */
    public void setMemberList(ParamObj[] memberList) {
        this.memberList = memberList;
    }

}
