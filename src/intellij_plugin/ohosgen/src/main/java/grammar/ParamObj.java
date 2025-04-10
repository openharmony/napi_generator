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
 * description param grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParamObj extends GBaseObject {
    /**
     * 参数约束：constant，abstract
     */
    private String qualifier;

    /**
     * 参数修饰：可选（optional)，必选(required)
     */
    private String decorator;

    /**
     * 参数类型
     */
    private String type;

    /**
     * 参数名称
     */
    private String name;

    /**
     * 参数数组数量
     */
    private int arraySize;

    /**
     * 参数赋值
     */
    private int[] asList;

    /**
     * 参数值
     */
    private List<String> vList;

    /**
     * 结构体初始化
     */
    private List<ParamObj> paList;

    /**
     * 构造函数
     */
    public ParamObj() {
        this.decorator = TsToken.TS_TOKEN_REQUIRED;
        vList = new CopyOnWriteArrayList<>();
        paList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param tv 类型
     * @param nv 名称
     * @param as 数组下标
     * @param asl 数组下标数组
     */
    public ParamObj(String tv, String nv, int as, int[] asl) {
        this();
        this.type = tv;
        this.name = nv;
        this.arraySize = as;
        this.asList = asl;
    }

    /**
     * 确定参数关键字
     *
     * @return 参数关键字
     */
    public String getQualifier() {
        return qualifier;
    }

    /**
     * 设置参数关键字
     *
     * @param qualifier 关键字
     */
    public void setQualifier(String qualifier) {
        this.qualifier = qualifier;
    }

    /**
     * 获取修饰
     *
     * @return 修饰
     */
    public String getDecorator() {
        return decorator;
    }

    /**
     * 设置 修饰
     *
     * @param decorator 修饰
     */
    public void setDecorator(String decorator) {
        this.decorator = decorator;
    }

    /**
     * 获取名字
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
     * 获取类型
     *
     * @return 类型
     */
    public String getType() {
        return type;
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
     * 获取数组下标
     *
     * @return 数组下标
     */
    public int getArraySize() {
        return arraySize;
    }

    /**
     * 获取数组下标
     *
     * @return 数组下班
     */
    public int[] getAsList() {
        return asList;
    }

    /**
     * 获取值数组
     *
     * @return 值数组
     */
    public List<String> getvList() {
        return vList;
    }

    /**
     * 设置值数据
     *
     * @param vList 值数据
     */
    public void setvList(List<String> vList) {
        this.vList = vList;
    }

    /**
     * 设置值
     *
     * @param value 初始化值
     */
    public void setStrValue(String value) {
        this.vList.add(value);
    }

    /**
     * 获取类参数值
     *
     * @param i 下标
     * @return 返回参数值
     */
    public String getStrValue(int i) {
        return vList.isEmpty() ? "" : vList.get(i);
    }

    /**
     * 获取类参数值
     *
     * @param i 下标
     * @return 返回参数值
     */
    public int getIntValue(int i) {
        return asList[i];
    }

    /**
     * 设置数组下标
     *
     * @param arraySize 数组下标
     */
    public void setArraySize(int arraySize) {
        this.arraySize = arraySize;
    }

    /**
     * 设置数组下标
     *
     * @param asList 数组下标
     */
    public void setAsList(int[] asList) {
        this.asList = asList;
    }

    /**
     * 获取初始化结构
     *
     * @return 初始化结构
     */
    public List<ParamObj> getPaList() {
        return paList;
    }

    /**
     * 设置初始化结构
     *
     * @param paList 初始化结构
     */
    public void setPaList(List<ParamObj> paList) {
        this.paList = paList;
    }

    public void addParam(ParamObj pa) {
        this.paList.add(pa);
    }
}
