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

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description parse object
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParseObj extends GBaseObject {
    private List<EnumObj> enumList;
    private List<UnionObj> unionList;
    private List<StructObj> structList;
    private List<ClassObj> classList;
    private List<FuncObj> funcList;
    private List<TypeObj> typeList;
    private List<InterfaceObject> interfaceList;
    private List<ParamObj> varList;

    /**
     * 构造函数
     */
    public ParseObj() {
        enumList = new CopyOnWriteArrayList<>();
        unionList = new CopyOnWriteArrayList<>();
        structList = new CopyOnWriteArrayList<>();
        classList = new CopyOnWriteArrayList<>();
        funcList = new CopyOnWriteArrayList<>();
        typeList = new CopyOnWriteArrayList<>();
        interfaceList = new CopyOnWriteArrayList<>();
        varList = new CopyOnWriteArrayList<>();
    }

    /**
     * 设置解析enum对象
     *
     * @param res enum对象
     */
    public void setEnumList(List<EnumObj> res) {
        enumList = res;
    }

    /**
     * 设置解析union对象
     *
     * @param res union对象
     */
    public void setUnionList(List<UnionObj> res) {
        unionList = res;
    }

    /**
     * 设置解析struct对象
     *
     * @param res struct对象
     */
    public void setStructList(List<StructObj> res) {
        structList = res;
    }

    /**
     * 设置解析对象
     *
     * @param res class对象
     */
    public void setClassList(List<ClassObj> res) {
        classList = res;
    }

    /**
     * 设置解析func对象
     *
     * @param res func对象
     */
    public void setFuncList(List<FuncObj> res) {
        funcList = res;
    }

    /**
     * 设置解析type对象
     *
     * @param res type对象
     */
    public void setTypeList(List<TypeObj> res) {
        typeList = res;
    }

    /**
     * 设置var对象
     *
     * @param varList 变量对象
     */
    public void setVarList(List<ParamObj> varList) {
        this.varList = varList;
    }

    /**
     * 获取解析enum对象
     *
     * @return 解析后enum列表
     */
    public List<EnumObj> getEnumList() {
        return enumList;
    }

    /**
     * 获取解析union对象
     *
     * @return 解析后union列表
     */
    public List<UnionObj> getUnionList() {
        return unionList;
    }

    /**
     * 获取解析struct对象
     *
     * @return 解析后struct列表
     */
    public List<StructObj> getStructList() {
        return structList;
    }

    /**
     * 获取解析对象
     *
     * @return 解析后class列表
     */
    public List<ClassObj> getClassList() {
        return classList;
    }

    /**
     * 获取解析func对象
     *
     * @return 解析后func列表
     */
    public List<FuncObj> getFuncList() {
        return funcList;
    }

    /**
     * 获取解析type对象
     *
     * @return 解析后type列表
     */
    public List<TypeObj> getTypeList() {
        return typeList;
    }

    /**
     * 获取变量列表
     *
     * @return 变量列表
     */
    public List<ParamObj> getVarList() {
        return varList;
    }

    /**
     * 获取interface对象
     *
     * @return interface对象
     */
    public List<InterfaceObject> getInterfaceList() {
        return interfaceList;
    }

    /**
     * 设置interface对象
     *
     * @param interfaceList interface 对象
     */
    public void setInterfaceList(List<InterfaceObject> interfaceList) {
        this.interfaceList = interfaceList;
    }
}
