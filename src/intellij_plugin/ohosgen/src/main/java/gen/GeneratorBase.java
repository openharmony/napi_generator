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
 * description base of generator
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class GeneratorBase {
    public void genContent(ParseObj po) {
        System.out.println("GeneratorBase: genContent");
    }

    public void genFile(String filePath, String fileName) {
        System.out.println("GeneratorBase: path is " + filePath + ", file is " + fileName);
    }

    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("GeneratorBase: genInterfaceList");
    };

    public void genEnumList(List<EnumObj> eol) {
        System.out.println("GeneratorBase: genEnumList");

    };

    public void genClassList(List<ClassObj> col) {
        System.out.println("GeneratorBase: genClassList");
    };

    public void genFuncList(List<FuncObj> fol) {
        System.out.println("GeneratorBase: genFuncList");
    };

    public void genStructList(List<StructObj> sol) {
        System.out.println("GeneratorBase: genStructList");
    };

    public void genTypeList(List<TypeObj> tol) {
        System.out.println("GeneratorBase: genTypeList");    };

    public void genUnionList(List<UnionObj> uol) {
        System.out.println("GeneratorBase: genUnionList");
    };

    public void genVarList(List<ParamObj> pol) {
        System.out.println("GeneratorBase: genVarList");
    }
}
