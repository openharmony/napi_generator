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

package gen;

import grammar.*;

import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class GenCppFile extends GeneratorBase {
    /**
     * 构造函数
     */
    GenCppFile() {

    }

    /**
     * 生成输出内容
     * @param po
     */
    @Override
    public void genContent(ParseObj po) {
        genInterfaceList(po.getInterfaceList());
        genEnumList(po.getEnumList());
        genClassList(po.getClassList());
        genFuncList(po.getFuncList());
        genStructList(po.getStructList());
        genTypeList(po.getTypeList());
        genUnionList(po.getUnionList());
    }

    /**
     * 生成输出内容
     * @param iol
     */
    @Override
    public void genInterfaceList(List<InterfaceObject> iol) {

    };

    /**
     * 生成输出内容
     * @param eol
     */
    @Override
    public void genEnumList(List<EnumObj> eol) {

    };

    /**
     * 生成输出内容
     * @param col
     */
    @Override
    public void genClassList(List<ClassObj> col) {

    };

    /**
     * 生成输出内容
     * @param fol
     */
    @Override
    public void genFuncList(List<FuncObj> fol) {

    };

    /**
     * 生成输出内容
     * @param sol
     */
    @Override
    public void genStructList(List<StructObj> sol) {

    };

    /**
     * 生成输出内容
     * @param tol
     */
    @Override
    public void genTypeList(List<TypeObj> tol) {

    };

    /**
     * 生成输出内容
     * @param uol
     */
    @Override
    public void genUnionList(List<UnionObj> uol) {

    };
}
