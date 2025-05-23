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
import utils.FileUtils;
import utils.StringUtils;

import java.io.File;
import java.util.List;
import java.util.Map;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class GenDtsFile extends GeneratorBase {
    /**
     * const style
     */
    public static final int CONV_CONST_STYLE = 1;

    /**
     * declare style
     */
    public static final int CONV_DECLARE_STYLE = 2;

    private static final String TS_ENUM_TOKEN = "enum";
    private static final String TS_CLASS_TOKEN = "class";
    private static final String TS_EXPORT_TOKEN = "export";
    private static final String TS_IMPLEMENTS_TOKEN = "implements";
    private static final String TS_EXTENDS_TOKEN = "extends";
    private static final String TS_CONST_TOKEN = "const";
    private static final String TS_PRIVATE_TOKEN = "private";
    private static final String TS_PUBLIC_TOKEN = "public";
    private static final String TS_INTERFACE_TOKEN = "interface";
    private static final String TS_PROTECTED_TOKEN = "protected";
    private static final String TS_STATIC_TOKEN = "static";
    private static final String TS_ANY_TOKEN = "any";
    private static final String TS_NUMBER_TOKEN = "number";
    private static final String TS_NEVER_TOKEN = "never";
    private static final String TS_BOOLEAN_TOKEN = "boolean";
    private static final String TS_STRING_TOKEN = "string";
    private static final String TS_UNIQUE_TOKEN = "unique";
    private static final String TS_SYMBOL_TOKEN = "symbol";
    private static final String TS_UNDEFINED_TOKEN = "undefined";
    private static final String TS_OBJECT_TOKEN = "object";
    private static final String TS_OF_TOKEN = "of";
    private static final String TS_KEYOF_TOKEN = "keyof";
    private static final String TS_TYPE_TOKEN = "type";
    private static final String TS_CONSTRUCTOR_TOKEN = "constructor";
    private static final String TS_NAMESPACE_TOKEN = "namespace";
    private static final String TS_REQUIRE_TOKEN = "require";
    private static final String TS_MODULE_TOKEN = "module";
    private static final String TS_DECLARE_TOKEN = "declare";
    private static final String TS_ABSTRACT_TOKEN = "abstract";
    private static final String TS_DEBUGGER_TOKEN = "debugger";
    private static final String TS_FUNCTION_TOKEN = "function";
    private static final String TS_THIS_TOKEN = "this";
    private static final String TS_WITH_TOKEN = "with";
    private static final String TS_DEFAULT_TOKEN = "default";
    private static final String TS_READONLY_TOKEN = "readonly";
    private static final String TS_ASYNC_TOKEN = "async";
    private static final String TS_AWAIT_TOKEN = "await";
    private static final String TS_YIELD_TOKEN = "yield";
    private static final String TS_VOID_TOKEN = "void";
    private static final String TS_ARROW_TOKEN = "=>";
    private static final String TS_NEW_LINE = "\n";
    private static final String TS_TAB_SPACE = "\t";
    private static final String TS_BLANK_SPACE = " ";
    private static final String TS_SPLIT = " | ";
    private static final String TS_EQUAL = " = ";
    private static final String TS_COMMA = ",";
    private static final String TS_SEMICOLON = ";";
    private static final String TS_COLON = ":";
    private static final String TS_LEFT_BRACE = "{";
    private static final String TS_RIGHT_BRACE = "}";
    private static final String TS_LEFT_PARENTHESES = "(";
    private static final String TS_RIGHT_PARENTHESES = ")";
    private static final String TS_LEFT_SQUARE_BRACKET = "[";
    private static final String TS_RIGHT_SQUARE_BRACKET = "]";
    private static final String TS_LEFT_ANGLE_BRACKET = "<";
    private static final String TS_RIGHT_ANGLE_BRACKET = ">";

    private static final String TS_RET_TYPE = "TS_RET_TYPE";
    private static final String TS_CB_TEMP = "cb: (err: string, res: TS_RET_TYPE) => void";
    private static final String TS_CB_VOID_TEMP = "cb: (err: string) => void";
    private static final String TS_PROMISE_TEMP = "Promise<TS_RET_TYPE>";
    private static final String TS_FILE_PREFIX = "ag_";
    private static final String TS_AYNC_SUFFIX = "Async";
    private static final String TS_PROMISE_SUFFIX = "Promise";
    private static final String TS_FILE_SUFFIX = ".d.ts";

    private String interfaceContent = "";
    private String enumContent = "";
    private String classContent = "";
    private String funcContent = "";
    private String structContent = "";
    private String typeContent = "";
    private String unionContent = "";
    private String constContent = "";

    private final Map<String, String> cpp2tsMap = Map.ofEntries(
        Map.entry("auto", "any"),
        Map.entry("bool", "boolean"),
        Map.entry("char", "string"),
        Map.entry("char16_t", "string"),
        Map.entry("char32_t", "string"),
        Map.entry("string", "string"),
        Map.entry("std::string", "string"),
        Map.entry("double", "number"),
        Map.entry("float", "number"),
        Map.entry("int", "number"),
        Map.entry("long", "number"),
        Map.entry("short", "number"),
        Map.entry("uint8", "number"),
        Map.entry("uint16", "number"),
        Map.entry("uint32", "number"),
        Map.entry("uint64", "number"),
        Map.entry("wchar_t", "number"),
        Map.entry("size_t", "number"),
        Map.entry("void", "void"),
        Map.entry("volatile", ""),
        Map.entry("extern", ""),
        Map.entry("dynamic_cast", ""),
        Map.entry("static_cast", ""),
        Map.entry("const_cast", ""),
        Map.entry("constexpr", ""),
        Map.entry("final", ""),
        Map.entry("nullptr", ""),
        Map.entry("inline", ""),
        Map.entry("override", ""),
        Map.entry("register", ""),
        Map.entry("reinterpret_cast", ""),
        Map.entry("thread_local", ""),
        Map.entry("asm", ""),
        Map.entry("export", "")
    );

    private final Map<String, String>cppTokenMap = Map.ofEntries(
        Map.entry("*", ""),
        Map.entry("&", ""),
        Map.entry("(", ""),
        Map.entry(")", "")
    );

    private int styleType = CONV_DECLARE_STYLE;

    /**
     * 构造函数
     */
    GenDtsFile() {

    }

    /**
     * 设置 style type
     *
     * @param styleType 转换类型
     */
    public void setStyleType(int styleType) {
        this.styleType = styleType;
    }

    /**
     * 获取 style type
     *
     * @return 转换类型
     */
    public int getStyleType() {
        return styleType;
    }

    private String genArrowStr() {
        if (styleType == CONV_CONST_STYLE) {
            return TS_ARROW_TOKEN;
        }

        if (styleType == CONV_DECLARE_STYLE) {
            return TS_COLON;
        }

        return "";
    }

    private String genExportStr(String funcName, String suffix) {
        if (styleType == CONV_CONST_STYLE) {
            return TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_CONST_TOKEN + TS_BLANK_SPACE +
                    replaceCppToken(funcName) + suffix + TS_COLON + TS_BLANK_SPACE + TS_LEFT_PARENTHESES;
        }

        if (styleType == CONV_DECLARE_STYLE) {
            return TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_FUNCTION_TOKEN +
                    TS_BLANK_SPACE + replaceCppToken(funcName) + suffix + TS_LEFT_PARENTHESES;
        }

        return "";
    }

    /**
     * 将 cpp key 转换成 ts key
     *
     * @param cppKey 枚举对象列表
     * @return ts key
     */
    private String cpp2TsKey(String cppKey) {
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : cpp2tsMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            int ret = cppKey.indexOf(key);
            if (ret >= 0) {
                return value;
            }
        }
        return retKey;
    }

    /**
     * 将cpp token 替换成对应的dts token
     *
     * @param cppKey 语言关键字
     * @return 替换后字符串
     */
    private String replaceCppToken(String cppKey) {
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : cppTokenMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            int ret = retKey.indexOf(key);
            if (ret >= 0) {
                retKey = retKey.replace(key, value);
            }
        }
        return retKey;
    }

    /**
     * 获得接口内容
     *
     * @return 接口内容
     */
    public String getInterfaceContent() {
        return interfaceContent;
    }

    /**
     * 获得枚举内容
     *
     * @return 枚举内容
     */
    public String getEnumContent() {
        return enumContent;
    }

    /**
     * 获得类内容
     *
     * @return 类内容
     */
    public String getClassContent() {
        return classContent;
    }

    /**
     * 获得方法内容
     *
     * @return 方法内容
     */
    public String getFuncContent() {
        return funcContent;
    }

    /**
     * 获得结构体内容
     *
     * @return 结构体内容
     */
    public String getStructContent() {
        return structContent;
    }

    /**
     * 获得type内容
     *
     * @return type内容
     */
    public String getTypeContent() {
        return typeContent;
    }

    /**
     * 获得联合体内容
     *
     * @return 联合体内容
     */
    public String getUnionContent() {
        return unionContent;
    }

    /**
     * 获得常量内容
     *
     * @return 常量内容
     */
    public String getConstContent() {
        return constContent;
    }

    /**
     * 生成输出内容
     *
     * @param po 解析对象
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
        genVarList(po.getVarList());
    }

    /**
     * 生成文件
     *
     * @param fileName 文件名
     * @param filePath 文件路径
     */
    @Override
    public void genFile(String filePath, String fileName) {
        System.out.println("genFile : " + filePath + fileName);
        String outFileName = filePath + File.separator + TS_FILE_PREFIX +
                fileName.replace(".", "_") + TS_FILE_SUFFIX;
        System.out.println("outFileName : " + outFileName);
        if (this.genMode.equals(GeneratorBase.GEN_REPLACE)) {
            FileUtils.deleteFile(outFileName);
        }
        FileUtils.createFile(outFileName);

        FileUtils.appendText(outFileName, this.genFileHeader(filePath + File.separator + fileName));
        FileUtils.appendText(outFileName, this.constContent);
        FileUtils.appendText(outFileName, this.enumContent);
        FileUtils.appendText(outFileName, this.typeContent);
        FileUtils.appendText(outFileName, this.interfaceContent);
        FileUtils.appendText(outFileName, this.unionContent);
        FileUtils.appendText(outFileName, this.funcContent);
        FileUtils.appendText(outFileName, this.structContent);
        FileUtils.appendText(outFileName, this.classContent);

    }

    /**
     * 生成输出内容
     *
     * @param iol 接口对象列表
     */
    @Override
    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("genInterfaceList" + iol.toString());
    };

    /**
     * 生成输出内容
     *
     * @param eol 枚举对象列表
     */
    @Override
    public void genEnumList(List<EnumObj> eol) {
        System.out.println("genEnumList" + eol.toString());

        String resContent = "";
        for (EnumObj eo : eol) {
            String enumName = eo.getName();
            enumName = !enumName.isEmpty() ? enumName : eo.getAlias();
            List<String> memList = eo.getMemberList();
            List<String> vaList = eo.getValueList();
            int i = 0;
            resContent += TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_ENUM_TOKEN +
                    TS_BLANK_SPACE + enumName + TS_BLANK_SPACE + TS_LEFT_BRACE;
            for (String memItem : memList) {
                resContent += TS_NEW_LINE + TS_TAB_SPACE + memItem;
                if (vaList.size() > i && !vaList.get(i).isEmpty()) {
                    resContent += TS_EQUAL + vaList.get(i) + TS_COMMA;
                } else {
                    resContent += TS_COMMA;
                }
                i++;
            }
            resContent = StringUtils.removeLastSpace(resContent);
            resContent += TS_NEW_LINE + TS_RIGHT_BRACE + TS_SEMICOLON + TS_NEW_LINE;
        }
        this.enumContent = resContent;
    };

    private String genClassFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += TS_NEW_LINE + TS_TAB_SPACE + replaceCppToken(funcName) + TS_LEFT_PARENTHESES;

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }
        if (paList.size() > 0) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }

        String retValue = fo.getRetValue();
        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + TS_COLON +
                TS_BLANK_SPACE + cpp2TsKey(retValue) + TS_SEMICOLON;
        return resContent;
    }

    private String genClassAsyncFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += TS_NEW_LINE + TS_TAB_SPACE + replaceCppToken(funcName) + TS_AYNC_SUFFIX + TS_LEFT_PARENTHESES;

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }
        String retValue = fo.getRetValue();
        resContent += retValue.equals(TS_VOID_TOKEN) ? TS_CB_VOID_TEMP :
                TS_CB_TEMP.replace(TS_RET_TYPE, cpp2TsKey(retValue));

        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + TS_COLON +
                TS_BLANK_SPACE + TS_VOID_TOKEN + TS_SEMICOLON;
        return resContent;
    }

    private String genClassPromiseFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += TS_NEW_LINE + TS_TAB_SPACE + replaceCppToken(funcName) + TS_PROMISE_SUFFIX + TS_LEFT_PARENTHESES;

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }

        if (paList.size() > 0) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }

        String retValue = fo.getRetValue();
        String promiseStr = TS_PROMISE_TEMP.replace(TS_RET_TYPE, cpp2TsKey(retValue));

        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + TS_COLON +
                TS_BLANK_SPACE + promiseStr + TS_SEMICOLON;
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param col 类对象列表
     */
    @Override
    public void genClassList(List<ClassObj> col) {
        System.out.println("genClassList" + col.toString());

        String resContent = "";
        for (ClassObj co : col) {
            String className = co.getName();
            className = !className.isEmpty() ? className : co.getAlias();

            List<ParamObj> paList = co.getParamList();
            resContent += TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_CLASS_TOKEN +
                    TS_BLANK_SPACE + className + TS_BLANK_SPACE + TS_LEFT_BRACE;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                resContent += TS_NEW_LINE + TS_TAB_SPACE + replaceCppToken(paItem.getName()) +
                        TS_COLON + TS_BLANK_SPACE + cpp2TsKey(paType);
                List<String> initVList = paItem.getvList();
                int vaSize = initVList.size();
                if (vaSize > 0) {
                    resContent += TS_EQUAL + initVList.get(0) + TS_SEMICOLON;
                } else {
                    resContent += TS_SEMICOLON;
                }
            }

            List<FuncObj> funcList = co.getFuncList();
            for (FuncObj funcItem : funcList) {
                resContent += genClassFuncDts(funcItem);
                resContent += genClassAsyncFuncDts(funcItem);
                resContent += genClassPromiseFuncDts(funcItem);
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += TS_NEW_LINE + TS_RIGHT_BRACE + TS_SEMICOLON + TS_NEW_LINE;
        }
        this.classContent = resContent;
    };

    private String genFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += genExportStr(funcName, "");

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }
        if (paList.size() > 0) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }

        String retValue = fo.getRetValue();
        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + genArrowStr() +
                TS_BLANK_SPACE + cpp2TsKey(retValue) + TS_SEMICOLON;
        return resContent;
    }

    private String genAsyncFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += genExportStr(funcName, TS_AYNC_SUFFIX);

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }
        String retValue = fo.getRetValue();
        resContent += retValue.equals(TS_VOID_TOKEN) ? TS_CB_VOID_TEMP :
                TS_CB_TEMP.replace(TS_RET_TYPE, cpp2TsKey(retValue));

        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + genArrowStr() +
                TS_BLANK_SPACE + TS_VOID_TOKEN + TS_SEMICOLON;
        return resContent;
    }

    private String genPromiseFuncDts(FuncObj fo) {
        String resContent = "";
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<ParamObj> paList = fo.getParamList();
        int i = 0;
        resContent += genExportStr(funcName, TS_PROMISE_SUFFIX);

        for (ParamObj poItem : paList) {
            String paType = cpp2TsKey(poItem.getType());
            String paName = poItem.getName();

            resContent += !paName.isEmpty() ? replaceCppToken(paName) + TS_COLON +
                    TS_BLANK_SPACE + paType + TS_COMMA + TS_BLANK_SPACE :
                    paType + TS_COMMA + TS_BLANK_SPACE;
        }

        if (paList.size() > 0) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }

        String retValue = fo.getRetValue();
        String promiseStr = TS_PROMISE_TEMP.replace(TS_RET_TYPE, cpp2TsKey(retValue));

        resContent += TS_RIGHT_PARENTHESES + TS_BLANK_SPACE + genArrowStr() +
                TS_BLANK_SPACE + promiseStr + TS_SEMICOLON;
        return resContent;
    }

    /**
     * 生成输出内容
     *
     * @param fol 方法对象列表
     */
    @Override
    public void genFuncList(List<FuncObj> fol) {
        System.out.println("genFuncList : " + fol.toString());
        String resContent = "";
        for (FuncObj fo : fol) {
            resContent += genFuncDts(fo);
            resContent += genAsyncFuncDts(fo);
            resContent += genPromiseFuncDts(fo);
        }
        this.funcContent = resContent;
        System.out.println("genFuncList : " + resContent);
    };

    /**
     * 生成输出内容
     *
     * @param sol 结构体对象列表
     */
    @Override
    public void genStructList(List<StructObj> sol) {
        System.out.println("genStructList" + sol.toString());

        String resContent = "";
        for (StructObj so : sol) {
            String structName = so.getName();
            structName = !structName.isEmpty() ? structName : so.getAlias();

            List<ParamObj> paList = so.getMemberList();
            resContent += TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_CLASS_TOKEN +
                    TS_BLANK_SPACE + structName + TS_BLANK_SPACE + TS_LEFT_BRACE;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                resContent += TS_NEW_LINE + TS_TAB_SPACE + paItem.getName() +
                        TS_COLON + TS_BLANK_SPACE + cpp2TsKey(paType);
                List<String> initVList = paItem.getvList();
                int vaSize = initVList.size();
                if (vaSize > 0) {
                    resContent += TS_EQUAL + initVList.get(0) + TS_SEMICOLON;
                } else {
                    resContent += TS_SEMICOLON;
                }
            }

            List<FuncObj> funcList = so.getFuncList();
            for (FuncObj funcItem : funcList) {
                resContent += genClassFuncDts(funcItem);
                resContent += genClassAsyncFuncDts(funcItem);
                resContent += genClassPromiseFuncDts(funcItem);
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += TS_NEW_LINE + TS_RIGHT_BRACE + TS_SEMICOLON + TS_NEW_LINE;
        }
        this.structContent = resContent;
    };

    /**
     * 生成输出内容
     *
     * @param tol 类型对象列表
     */
    @Override
    public void genTypeList(List<TypeObj> tol) {
        System.out.println("genTypeList : " + tol.toString());
    };

    /**
     * 生成输出内容
     *
     * @param uol 联合体对象列表
     */
    @Override
    public void genUnionList(List<UnionObj> uol) {
        System.out.println("genUnionList : " + uol.toString());

        String resContent = "";
        for (UnionObj uo : uol) {
            String unionName = uo.getName();
            unionName = !unionName.isEmpty() ? unionName : uo.getAlias();
            List<ParamObj> paList = uo.getMemList();
            int i = 0;
            resContent += TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_TYPE_TOKEN +
                    TS_BLANK_SPACE + unionName + TS_EQUAL;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                resContent += cpp2TsKey(paType) + TS_SPLIT;

                i++;
            }

            resContent = StringUtils.removeLastCharacter(resContent, 3);
            resContent += TS_SEMICOLON + TS_NEW_LINE;
        }
        this.unionContent = resContent;
    };

    /**
     * 生成输出内容
     *
     * @param pol 常量列表
     */
    @Override
    public void genVarList(List<ParamObj> pol) {
        System.out.println("genVarList : " + pol.toString());

        String resContent = "";
        for (ParamObj po : pol) {
            String paName = po.getName();
            String paType = cpp2TsKey(po.getType());
            String paValue = po.getStrValue(0);
            int i = 0;
            resContent += TS_NEW_LINE + TS_EXPORT_TOKEN + TS_BLANK_SPACE + TS_CONST_TOKEN +
                    TS_BLANK_SPACE + paName + TS_BLANK_SPACE + TS_COLON + TS_BLANK_SPACE +
                    paType + TS_EQUAL + paValue;

            resContent += TS_SEMICOLON + TS_NEW_LINE;
        }
        this.constContent = resContent;
        System.out.println("genVarList : " + resContent);
    }
}
