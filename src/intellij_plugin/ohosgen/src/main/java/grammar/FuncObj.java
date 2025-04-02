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
 * description function of grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class FuncObj extends GBaseObject {
    /**
     * 访问方式: public, protected, private
     */
    private String accessor;

    /**
     * 访问类型：async，get，set
     */
    private String type;

    /**
     * 方法名称
     */
    private String name;

    /**
     * 方法别名：可以是函数指针
     */
    private String alias;

    /**
     * 方法返回值
     */
    private String retValue;

    /**
     * 方法参数
     */
    private List<ParamObj> paramList;

    /**
     * 限定
     */
    private String qualifier;

    /**
     * 模板类型列表
     */
    private List<String> tempList;

    /**
     * 声明类型
     */
    private List<String> decList;

    /**
     * 构造函数
     */
    public FuncObj() {
        this.token = TsToken.TS_TOKEN_FUNCTION;
        this.accessor = TsToken.TS_TOKEN_PUBLIC;
        this.type = "";
        this.retValue = TsToken.TS_TOKEN_VOID;
        this.paramList = new CopyOnWriteArrayList<>();
        this.tempList = new CopyOnWriteArrayList<>();
        this.decList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param tv 类型
     * @param nv 名字
     * @param rv 返回值
     * @param pl 参数
     */
    public FuncObj(String tv, String nv, String rv, List<ParamObj> pl) {
        this();

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
     * 获取模板类
     *
     * @return 模板类列表
     */
    public List<String> getTempList() {
        return tempList;
    }

    /**
     * 设置模板类
     *
     * @param tempList 模板类列表
     */
    public void setTempList(List<String> tempList) {
        this.tempList = tempList;
    }

    /**
     * 获取模板类
     *
     * @param i 游标
     * @return 模板类
     */
    public String getTemplate(int i) {
        return this.tempList.get(i);
    }

    /**
     * 增加模板
     *
     * @param temp 模板
     */
    public void addTemplate(String temp) {
        this.tempList.add(temp);
    }

    /**
     * 设置限定
     *
     * @param qualifier 限定
     */
    public void setQualifier(String qualifier) {
        this.qualifier = qualifier;
    }

    /**
     * 获取限定
     *
     * @return 限定
     */
    public String getQualifier() {
        return qualifier;
    }

    /**
     * 设置alias
     *
     * @param alias 函数别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取alias
     *
     * @return 返回函数别名
     */
    public String getAlias() {
        return this.alias;
    }

    /**
     * 设置访问属性
     *
     * @param accessor 访问属性
     */
    public void setAccessor(String accessor) {
        this.accessor = accessor;
    }

    /**
     * 获取访问属性
     *
     * @return 访问属性
     */
    public String getAccessor() {
        return accessor;
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
    public void setParamList(List<ParamObj> paramList) {
        this.paramList = paramList;
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
     * 增加函数参数
     *
     * @param po 参数
     */
    public void addParam(ParamObj po) {
        this.paramList.add(po);
    }

    /**
     * 增加函数参数
     *
     * @param name 参数名称
     * @param type 参数类型
     */
    public void addParam(String name, String type) {
        ParamObj po = new ParamObj();
        po.setName(name);
        po.setType(type);
        this.paramList.add(po);
    }

    /**
     * 添加参数
     *
     * @param name 名字
     * @param type 类型
     * @param decorator 修饰
     */
    public void addParam(String name, String type, String decorator) {
        ParamObj po = new ParamObj();
        po.setName(name);
        po.setType(type);
        po.setDecorator(decorator);
        this.paramList.add(po);
    }

    /**
     * 添加声明类型
     *
     * @param decName 声明
     */
    public void addDecl(String decName) {
        this.decList.add(decName);
    }
}
