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

import utils.TsToken;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description type grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeObj extends GBaseObject {
    private String name;
    private String alias;
    private List<ParamObj> paramList;
    private ParamObj lastParamObj;
    private List<FuncObj> funcList;
    private List<String> typeList;

    /**
     * 构造函数
     */
    public TypeObj() {
        this.token = TsToken.TS_TOKEN_TYPE;

        this.paramList = new CopyOnWriteArrayList<>();
        this.funcList = new CopyOnWriteArrayList<>();
        this.typeList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param pl 参数
     * @param fl 方法
     * @param tl 类型
     */
    public TypeObj(String nv,
                   String av,
                   List<ParamObj> pl,
                   List<FuncObj> fl,
                   List<String> tl) {
        this.name = nv;
        this.alias = av;
        this.paramList = pl;
        this.funcList = fl;
        this.typeList = tl;
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
     * 获取别名
     *
     * @return 别名
     */
    public String getAlias() {
        return alias;
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
     * 获取参数
     *
     * @return 参数
     */
    public List<ParamObj> getParamList() {
        return paramList;
    }

    /**
     * 设置参数
     *
     * @param paramList 参数
     */
    public void setParamList(List<ParamObj> paramList) {
        this.paramList = paramList;
    }

    /**
     * 获取类型
     *
     * @return 类型
     */
    public List<String> getTypeList() {
        return typeList;
    }

    /**
     * 设置类型
     * @param typeList 类型
     */
    public void setTypeList(List<String> typeList) {
        this.typeList = typeList;
    }

    /**
     * 获取方法
     *
     * @return 方法
     */
    public List<FuncObj> getFuncList() {
        return funcList;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法
     */
    public void setFuncList(List<FuncObj> funcList) {
        this.funcList = funcList;
    }

    /**
     * 设置value
     *
     * @param value 定义值
     */
    public void addTypeValue(String value) {
        this.typeList.add(value);
    }

    /**
     * 增加参数对象
     *
     * @param pa 参数对象
     */
    public void addParam(ParamObj pa) {
        this.paramList.add(pa);
        this.lastParamObj = pa;
    }

    /**
     * 获取最近的参数对象
     *
     * @return 最近参数对象
     */
    public ParamObj getLastParamObj() {
        return this.lastParamObj;
    }

    /**
     * 设置最近参数对象
     *
     * @param lastParamObj 最近参数对象
     */
    public void setLastParamObj(ParamObj lastParamObj) {
        this.lastParamObj = lastParamObj;
    }
}
