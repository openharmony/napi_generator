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
 * description enum grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class EnumObj {
    private String name;
    private String alias;
    private String[] memberList;
    private String[] valueList;

    /**
     * 构造函数
     */
    public EnumObj() {}

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param ml 成员
     * @param vl 值
     */
    public EnumObj(String nv, String av, String[] ml, String[] vl) {
        this.name = nv;
        this.alias = av;
        this.memberList = ml;
        this.valueList = vl;
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
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
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
     * 设置名称
     *
     * @param alias 别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取成员列表
     *
     * @return 成员列表
     */
    public String[] getMemberList() {
        return memberList;
    }

    /**
     * 设置成员列表
     *
     * @param memberList 成员列表
     */
    public void setMemberList(String[] memberList) {
        this.memberList = memberList;
    }

    /**
     * 获取值
     *
     * @return 值列表
     */
    public String[] getValueList() {
        return valueList;
    }

    /**
     * 设置值列表
     *
     * @param valueList 值列表
     */
    public void setValueList(String[] valueList) {
        this.valueList = valueList;
    }
}
