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

import kotlinx.html.S;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description union grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class UnionObj extends GBaseObject {
    private String name;
    private String alias;
    private List<ParamObj> memList;
    private List<FuncObj> funcList;

    /**
     * 构造函数
     */
    public UnionObj() {
        memList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param pl 参数
     */
    public UnionObj(String nv, String av, List<ParamObj> pl) {
        this.name = nv;
        this.alias = av;
        this.memList = pl;
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
     * 设置名称
     *
     * @param alias 名称
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取名称
     *
     * @return 名称
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 获取成员
     *
     * @return 成员
     */
    public List<ParamObj> getMemList() {
        return memList;
    }

    /**
     * 设置成员
     *
     * @param memList 成员
     */
    public void setMemList(List<ParamObj> memList) {
        this.memList = memList;
    }

    /**
     * 获取方法
     *
     * @return 方法列表
     */
    public List<FuncObj> getFuncList() {
        return funcList;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法列表
     */
    public void setFuncList(List<FuncObj> funcList) {
        this.funcList = funcList;
    }

    /**
     * 增加属性
     *
     * @param po 属性
     */
    public void addMember(ParamObj po) {
        this.memList.add(po);
    }

    /**
     * 增加方法
     *
     * @param fo 方法
     */
    public void addFunc(FuncObj fo) {
        this.funcList.add(fo);
    }
}
