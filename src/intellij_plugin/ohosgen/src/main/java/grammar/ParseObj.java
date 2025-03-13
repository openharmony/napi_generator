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
 * description parse object
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParseObj extends GBaseObject {
    private EnumObj[] enumList;
    private UnionObj[] unionList;
    private StructObj[] structList;
    private ClassObj[] classList;
    private FuncObj[] funcList;
    private TypeObj[] typeList;

    /**
     * 构造函数
     */
    ParseObj() {
        enumList = new EnumObj[0];
        unionList = new UnionObj[0];
        structList = new StructObj[0];
        classList = new ClassObj[0];
        funcList = new FuncObj[0];
        typeList = new TypeObj[0];
    }

    /**
     * 设置解析enum对象
     *
     * @param res enum对象
     */
    void setEnumList(EnumObj[] res) {
        enumList = res;
    }

    /**
     * 设置解析union对象
     *
     * @param res union对象
     */
    void getUnionList(UnionObj[] res) {
        unionList = res;
    }

    /**
     * 设置解析struct对象
     *
     * @param res struct对象
     */
    void setStructList(StructObj[] res) {
        structList = res;
    }

    /**
     * 设置解析对象
     *
     * @param res class对象
     */
    void setClassList(ClassObj[] res) {
        classList = res;
    }

    /**
     * 设置解析func对象
     *
     * @param res func对象
     */
    void setFuncList(FuncObj[] res) {
        funcList = res;
    }

    /**
     * 设置解析type对象
     *
     * @param res type对象
     */
    void setTypeList(TypeObj[] res) {
        typeList = res;
    }

    /**
     * 获取解析enum对象
     *
     * @return 解析后enum列表
     */
    EnumObj[] getEnumList() {
        return enumList;
    }

    /**
     * 获取解析union对象
     *
     * @return 解析后union列表
     */
    UnionObj[] getUnionList() {
        return unionList;
    }

    /**
     * 获取解析struct对象
     *
     * @return 解析后struct列表
     */
    StructObj[] getStructList() {
        return structList;
    }

    /**
     * 获取解析对象
     *
     * @return 解析后class列表
     */
    ClassObj[] getClassList() {
        return classList;
    }

    /**
     * 获取解析func对象
     *
     * @return 解析后func列表
     */
    FuncObj[] getFuncList() {
        return funcList;
    }

    /**
     * 获取解析type对象
     *
     * @return 解析后type列表
     */
    TypeObj[] getTypeList() {
        return typeList;
    }
}
