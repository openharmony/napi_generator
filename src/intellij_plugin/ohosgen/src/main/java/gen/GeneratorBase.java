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
import utils.Constants;

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
    /**
     * 生成文件时追加内容
     */
    public static final String GEN_APPEND = "APPEND";

    /**
     * 生成文件时覆盖内容
     */
    public static final String GEN_REPLACE = "REPLACE";

    /**
     * 生成文件名
     */
    protected String genFileName = "";

    /**
     * 生成文件模式
     */
    protected String genMode = GEN_REPLACE;

    private final String headerFormat = "// Generated from %s by KaiHong ohgen %s-PLUGIN";

    /**
     * 生成文件头内容
     *
     * @param filePath 文件路径
     * @return 返回文件头
     */
    public String genFileHeader(String filePath) {
        String fileHeader = "";
        fileHeader += String.format(headerFormat, filePath, Constants.VERSION);
        return fileHeader;
    }

    /**
     * 生成内容
     *
     * @param po 解析类
     */
    public void genContent(ParseObj po) {
        System.out.println("GeneratorBase: genContent");
    }

    /**
     * 生成文件
     *
     * @param filePath 文件路径
     * @param fileName 文件名
     */
    public void genFile(String filePath, String fileName) {
        System.out.println("GeneratorBase: path is " + filePath + ", file is " + fileName);
    }

    public void setGenMode(String genMode) {
        this.genMode = genMode;
    }

    /**
     * 生成接口
     *
     * @param iol 接口列表
     */
    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("GeneratorBase: genInterfaceList");
    };

    /**
     * 生成枚举
     *
     * @param eol 枚举列表
     */
    public void genEnumList(List<EnumObj> eol) {
        System.out.println("GeneratorBase: genEnumList");
    };

    /**
     * 生成类
     *
     * @param col 类列表
     */
    public void genClassList(List<ClassObj> col) {
        System.out.println("GeneratorBase: genClassList");
    };

    /**
     * 生成方法
     *
     * @param fol 方法列表
     */
    public void genFuncList(List<FuncObj> fol) {
        System.out.println("GeneratorBase: genFuncList");
    };

    /**
     * 生成结构体
     *
     * @param sol 结构体列表
     */
    public void genStructList(List<StructObj> sol) {
        System.out.println("GeneratorBase: genStructList");
    };

    /**
     * 生成类型
     *
     * @param tol 类型列表
     */
    public void genTypeList(List<TypeObj> tol) {
        System.out.println("GeneratorBase: genTypeList");
    };

    /**
     * 生成联合体
     *
     * @param uol 联合体列表
     */
    public void genUnionList(List<UnionObj> uol) {
        System.out.println("GeneratorBase: genUnionList");
    };

    /**
     * 生成变量
     *
     * @param pol 变量列表
     */
    public void genVarList(List<ParamObj> pol) {
        System.out.println("GeneratorBase: genVarList");
    }
}
