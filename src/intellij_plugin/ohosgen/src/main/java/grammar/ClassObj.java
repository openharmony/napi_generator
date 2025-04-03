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
 * description class grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ClassObj extends GBaseObject {
    private String name;
    private String alias;
    private List<ParamObj> paramList;
    private List<FuncObj> funcList;
    private List<String> heritageTypeList;
    private List<String> heritageNameList;
    private List<String> heritageTemplateList;
    private List<String> tempList;

    /**
     * 构造函数
     */
    public ClassObj() {
        this.token = TsToken.TS_TOKEN_CLASS;

        this.paramList = new CopyOnWriteArrayList<>();
        this.funcList = new CopyOnWriteArrayList<>();
        this.tempList = new CopyOnWriteArrayList<>();
        this.heritageTypeList = new CopyOnWriteArrayList<>();
        this.heritageNameList = new CopyOnWriteArrayList<>();
        this.heritageTemplateList = new CopyOnWriteArrayList<>();
    }

    /**
     * 构造函数
     *
     * @param nv 名字
     * @param av 别名
     * @param pl 参数
     * @param fl 方法
     */
    public ClassObj(String nv, String av, List<ParamObj> pl, List<FuncObj> fl) {
        this();
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
    public void setFuncList(List<FuncObj> funcList) {
        this.funcList = funcList;
    }

    /**
     * 获取方法列表
     *
     * @return 方法列表
     */
    public List<FuncObj> getFuncList() {
        return funcList;
    }

    /**
     * 设置参数
     *
     * @param paramList 参数列表
     */
    public void setParamList(List<ParamObj> paramList) {
        this.paramList = paramList;
    }

    /**
     * 继承名称
     *
     * @param heritageNameList 继承名称
     */
    public void setHeritageNameList(List<String> heritageNameList) {
        this.heritageNameList = heritageNameList;
    }

    /**
     * 继承名字
     *
     * @return 继承名称
     */
    public List<String> getHeritageNameList() {
        return heritageNameList;
    }

    /**
     * 设置继承类型
     *
     * @param heritageTypeList 继承类型
     */
    public void setHeritageTypeList(List<String> heritageTypeList) {
        this.heritageTypeList = heritageTypeList;
    }

    /**
     * 获取继承类型
     *
     * @return 继承类型
     */
    public List<String> getHeritageTypeList() {
        return heritageTypeList;
    }

    /**
     * 获取继承模板类型
     *
     * @return 模板类型
     */
    public List<String> getHeritageTemplateList() {
        return heritageTemplateList;
    }

    /**
     * 设置继承模板类型
     *
     * @param heritageTemplateList 模板类型
     */
    public void setHeritageTemplateList(List<String> heritageTemplateList) {
        this.heritageTemplateList = heritageTemplateList;
    }



    /**
     * 读取方法
     *
     * @return 方法列表
     */
    public List<ParamObj> getParamList() {
        return paramList;
    }

    /**
     * 设置模板类型
     *
     * @param tempList 模板类型
     */
    public void setTempList(List<String> tempList) {
        this.tempList = tempList;
    }

    /**
     * 获取模板列表
     *
     * @return 模板列表
     */
    public List<String> getTempList() {
        return tempList;
    }

    /**
     * 增加param
     *
     * @param po param
     */
    public void addParam(ParamObj po) {
        this.paramList.add(po);
    }

    /**
     * 增加param
     *
     * @param name 名字
     * @param type 类型
     */
    public void addParam(String name, String type) {
        ParamObj po = new ParamObj();
        po.setType(type);
        po.setName(name);
        this.paramList.add(po);
    }

    /**
     * 增加param
     *
     * @param name 名字
     * @param type 类型
     * @param qualifier 声明
     */
    public void addParam(String name, String type, String qualifier) {
        ParamObj po = new ParamObj();
        po.setType(type);
        po.setName(name);
        po.setQualifier(qualifier);
        this.paramList.add(po);
    }

    /**
     * 增加param
     *
     * @param name 名字
     * @param type 类型
     * @param qualifier 声明
     * @param initial 初始化值
     */
    public void addParam(String name, String type, String qualifier, String initial) {
        ParamObj po = new ParamObj();
        po.setType(type);
        po.setName(name);
        po.setQualifier(qualifier);
        po.setStrValue(initial);
        this.paramList.add(po);
    }

    /**
     * 增加方法
     *
     * @param fo 方法
     */
    public void addFunc(FuncObj fo) {
        this.funcList.add(fo);
    }

    /**
     * 增加方法
     *
     * @param name 名字
     * @param ret 返回值
     * @param poList 参数
     */
    public void addFunc(String name, String ret, List<ParamObj> poList) {
        FuncObj fo = new FuncObj();
        fo.setName(name);
        fo.setRetValue(ret);
        fo.setParamList(poList);
        this.funcList.add(fo);
    }

    /**
     * 增加heritage 的类型和名称
     *
     * @param type 类型如 extend，implement
     * @param name 名称
     */
    public void addHeritage(String type, String name) {
        heritageNameList.add(name);
        heritageTypeList.add(type);
    }

    /**
     * 增加模板类型
     *
     * @param tmp 模板类型
     */
    public void addTemplate(String tmp) {
        tempList.add(tmp);
    }

    /**
     * 增加继承模板类
     *
     * @param ht 继承模板类
     */
    public void addHeritageTemplate(String ht) {
        heritageTemplateList.add(ht);
    }
}
