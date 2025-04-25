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
import java.util.Locale;
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
public class GenCHFile extends GeneratorBase {
    private static final String C_ENUM_TOKEN = "enum";
    private static final String C_CLASS_TOKEN = "class";
    private static final String C_STRUCT_TOKEN = "struct";
    private static final String C_UNION_TOKEN = "union";
    private static final String C_TEMPLATE_TOKEN = "template";
    private static final String C_TYPE_NAME_TOKEN = "typename";
    private static final String C_STAR_TOKEN = "*";
    private static final String C_CHAR_START_TOKEN = "char*";
    private static final String C_AUTO_TOKEN = "auto";
    private static final String C_EXPORT_TOKEN = "export";
    private static final String C_IMPLEMENC_TOKEN = "implements";
    private static final String C_EXTENDS_TOKEN = "extends";
    private static final String C_CONST_TOKEN = "const";
    private static final String C_PRIVATE_TOKEN = "private";
    private static final String C_PUBLIC_TOKEN = "public";
    private static final String C_INTERFACE_TOKEN = "interface";
    private static final String C_PROTECTED_TOKEN = "protected";
    private static final String C_STATIC_TOKEN = "static";
    private static final String C_ANY_TOKEN = "any";
    private static final String C_NUMBER_TOKEN = "number";
    private static final String C_NEVER_TOKEN = "never";
    private static final String C_BOOLEAN_TOKEN = "boolean";
    private static final String C_STRING_TOKEN = "string";
    private static final String C_UNIQUE_TOKEN = "unique";
    private static final String C_SYMBOL_TOKEN = "symbol";
    private static final String C_UNDEFINED_TOKEN = "undefined";
    private static final String C_OBJECT_TOKEN = "object";
    private static final String C_OF_TOKEN = "of";
    private static final String C_KEYOF_TOKEN = "keyof";
    private static final String C_TYPE_TOKEN = "type";
    private static final String C_CONSTRUCTOR_TOKEN = "constructor";
    private static final String C_NAMESPACE_TOKEN = "namespace";
    private static final String C_REQUIRE_TOKEN = "require";
    private static final String C_MODULE_TOKEN = "module";
    private static final String C_DECLARE_TOKEN = "declare";
    private static final String C_ABSTRACT_TOKEN = "abstract";
    private static final String C_DEBUGGER_TOKEN = "debugger";
    private static final String C_FUNCTION_TOKEN = "function";
    private static final String C_THIS_TOKEN = "this";
    private static final String C_WITH_TOKEN = "with";
    private static final String C_DEFAULT_TOKEN = "default";
    private static final String C_READONLY_TOKEN = "readonly";
    private static final String C_ASYNC_TOKEN = "async";
    private static final String C_AWAIT_TOKEN = "await";
    private static final String C_YIELD_TOKEN = "yield";
    private static final String C_NEW_LINE = "\n";
    private static final String C_TAB_SPACE = "\t";
    private static final String C_BLANK_SPACE = " ";
    private static final String C_SPLIT = " | ";
    private static final String C_EQUAL = " = ";
    private static final String C_COMMA = ",";
    private static final String C_DOUBLE_QUOTATION = "\"";
    private static final String C_UNDER_LINE = "_";
    private static final String C_SEMICOLON = ";";
    private static final String C_COLON = ":";
    private static final String C_ELLIPSIS = "...";
    private static final String C_DOT = ".";
    private static final String C_LEFT_BRACE = "{";
    private static final String C_RIGHT_BRACE = "}";
    private static final String C_LEFT_PARENTHESES = "(";
    private static final String C_RIGHT_PARENTHESES = ")";
    private static final String C_LEFT_SQUARE_BRACKET = "[";
    private static final String C_RIGHT_SQUARE_BRACKET = "]";
    private static final String C_LEFT_ANGLE_BRACKET = "<";
    private static final String C_RIGHT_ANGLE_BRACKET = ">";

    private static final String C_STD_STRING = "std::string";
    private static final String C_STD_VECTOR = "std::vector";
    private static final String C_STD_LIST = "std::list";
    private static final String C_STD_ARRAY = "std::array";
    private static final String C_STD_STACK = "std::stack";
    private static final String C_STD_QUEUE = "std::queue";
    private static final String C_STD_PAIR = "std::pair";
    private static final String C_STD_MAP = "std::map";
    private static final String C_STD_SET = "std::set";
    private static final String C_STD_DEQUE = "std::deque";
    private static final String C_STD_MULTIMAP = "std::multimap";
    private static final String C_STD_MULTISET = "std::multiset";

    private static final String C_STR_SUFFIX = "STR";
    private static final String C_FILE_PREFIX = "ag_";
    private static final String C_FILE_H_SUFFIX = ".h";
    private static final String C_FILE_CPP_SUFFIX = ".cpp";
    private static final String C_FILE_C_SUFFIX = ".c";
    private static final String C_STRUCT_SUFFIX = "ST";

    private String interfaceContent = "";
    private String enumContent = "";
    private String classContent = "";
    private String funcContent = "";
    private String structContent = "";
    private String typeContent = "";
    private String unionContent = "";
    private String constContent = "";

    private final Map<String, String> ts2cppMap = Map.ofEntries(
            Map.entry("any", "auto"),
            Map.entry("boolean", "bool"),
            Map.entry("std::string", "char*"),
            Map.entry("string", "char*"),
            Map.entry("number", "int"),
            Map.entry("std::array<int>", "int*"),
            Map.entry("std::stack<int>", "int*"),
            Map.entry("std::vector<int>", "int*"),
            Map.entry("std::queue<int>", "int*"),
            Map.entry("std::list<int>", "int*"),
            Map.entry("[]", "*")
    );

    private final Map<String, String> tsTokenMap = Map.ofEntries(
            Map.entry("\"", ""),
            Map.entry("*", ""),
            Map.entry("&", ""),
            Map.entry("(", ""),
            Map.entry(")", "")
    );

    /**
     * 构造函数
     */
    GenCHFile() {

    }

    /**
     * 将 cpp key 转换成 ts key
     *
     * @param cppKey 枚举对象列表
     * @return ts key
     */
    private String ts2CppKey(String cppKey) {
        if (cppKey == null) {
            return "";
        }
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : ts2cppMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            int ret = cppKey.indexOf(key);
            if (ret >= 0 && value.contains(C_STAR_TOKEN) && !(cppKey.substring(0, ret).contains("std"))) {
                return cppKey.substring(0, ret) + value;
            } else if (ret >= 0) {
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
    private String replaceTsToken(String cppKey) {
        String retKey = cppKey;
        for (Map.Entry<String, String> entry : tsTokenMap.entrySet()) {
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
     * @param po 解析类
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
        String outFileName = filePath + File.separator + C_FILE_PREFIX +
                fileName.replace(".", "_") + C_FILE_H_SUFFIX;
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
     * @param iol 接口列表
     */
    @Override
    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("genInterfaceList" + iol.toString());
    };

    /**
     * 生成输出内容
     *
     * @param eol 枚举列表
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
            resContent += C_NEW_LINE + C_ENUM_TOKEN +
                    C_BLANK_SPACE + enumName + C_BLANK_SPACE + C_LEFT_BRACE;
            for (String memItem : memList) {
                resContent += C_NEW_LINE + C_TAB_SPACE + memItem;
                if (vaList.size() > i && !vaList.get(i).isEmpty()) {
                    resContent += C_EQUAL + replaceTsToken(vaList.get(i)) + C_COMMA;
                } else {
                    resContent += C_COMMA;
                }
                i++;
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;

            i = 0;
            if (vaList.size() > i && !vaList.get(i).isEmpty() &&
                    vaList.get(i).contains("\"")) {
                resContent += C_NEW_LINE + C_CHAR_START_TOKEN + C_BLANK_SPACE +
                        enumName.toLowerCase(Locale.ROOT) + C_UNDER_LINE + C_STR_SUFFIX +
                        C_LEFT_SQUARE_BRACKET + C_RIGHT_SQUARE_BRACKET + C_EQUAL + C_LEFT_BRACE;
                for (String val : vaList) {
                    resContent += C_NEW_LINE + C_TAB_SPACE + C_LEFT_SQUARE_BRACKET +
                            memList.get(i) + C_RIGHT_SQUARE_BRACKET + C_EQUAL + val + C_COMMA;
                    i++;
                }
                resContent = StringUtils.removeLastCharacter(resContent, 1);
                resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;

            }
        }

        this.enumContent = resContent;
    };

    private String setClassFunc(List<FuncObj> funcList, String content) {
        String tempResContent = content;
        for (FuncObj funcItem : funcList) {
            String retValue = funcItem.getRetValue();
            retValue = retValue.isEmpty() ? "" : ts2CppKey(retValue) + C_BLANK_SPACE;
            tempResContent += C_NEW_LINE + C_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + C_LEFT_PARENTHESES;
            List<ParamObj> pol = funcItem.getParamList();
            for (ParamObj poItem : pol) {
                String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                        C_AUTO_TOKEN : ts2CppKey(poItem.getType());
                tempResContent += (poItem.getName() == null) ? retType + C_COMMA + C_BLANK_SPACE :
                        retType + C_BLANK_SPACE + replaceTsToken(poItem.getName()) + C_COMMA + C_BLANK_SPACE;
            }
            if (!pol.isEmpty()) {
                tempResContent = StringUtils.removeLastCharacter(tempResContent, 2);
            }
            tempResContent += C_RIGHT_PARENTHESES + C_SEMICOLON;
        }
        return tempResContent;
    }

    /**
     * 生成输出内容
     *
     * @param col 类列表
     */
    @Override
    public void genClassList(List<ClassObj> col) {
        System.out.println("genClassList" + col.toString());

        String resContent = "";
        for (ClassObj co : col) {
            String className = co.getName();
            className = !className.isEmpty() ? className : co.getAlias();

            String templateStr = !co.getTempList().isEmpty() ?
                    C_TEMPLATE_TOKEN + C_BLANK_SPACE + C_LEFT_ANGLE_BRACKET : "";
            for (String teStr : co.getTempList()) {
                templateStr += C_TYPE_NAME_TOKEN + C_BLANK_SPACE + teStr + C_COMMA + C_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                StringUtils.removeLastCharacter(templateStr, 2) + C_RIGHT_ANGLE_BRACKET + C_BLANK_SPACE : "";

            List<String> hnList = co.getHeritageNameList();
            String htStr = hnList.size() > 0 ? C_BLANK_SPACE + C_COLON + C_BLANK_SPACE : "";
            for (String hName : hnList) {
                htStr += C_PUBLIC_TOKEN + C_BLANK_SPACE + hName + C_COMMA + C_BLANK_SPACE;
            }
            htStr = htStr.length() > 1 ? StringUtils.removeLastCharacter(htStr, 2) : htStr;

            List<String> htempList = co.getHeritageTemplateList();
            String htempStr = htempList.size() > 0 ? C_LEFT_ANGLE_BRACKET : "";
            for (String tempStr : htempList) {
                htempStr += tempStr + C_COMMA + C_BLANK_SPACE;
            }
            htempStr = htempList.size() > 0 ?
                StringUtils.removeLastCharacter(htempStr, 2) + C_RIGHT_ANGLE_BRACKET : "";
            resContent += C_NEW_LINE + templateStr + C_CLASS_TOKEN +
                    C_BLANK_SPACE + className + htStr + htempStr + C_BLANK_SPACE + C_LEFT_BRACE;
            List<ParamObj> paList = co.getParamList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String qualifyStr = paItem.getQualifier() == null || paItem.getQualifier().isEmpty() ?
                        "" : paItem.getQualifier() + C_BLANK_SPACE;
                resContent += C_NEW_LINE + C_TAB_SPACE + qualifyStr + ts2CppKey(paType) +
                        C_BLANK_SPACE + replaceTsToken(paItem.getName());
                List<String> initVList = paItem.getvList();
                if (!initVList.isEmpty()) {
                    resContent += C_EQUAL + initVList.get(0) + C_SEMICOLON;
                } else {
                    resContent += C_SEMICOLON;
                }
            }

            resContent = setClassFunc(co.getFuncList(), resContent);

            resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;
        }
        this.classContent = resContent;
    };

    /**
     * 生成输出内容
     *
     * @param fol 方法列表
     */
    @Override
    public void genFuncList(List<FuncObj> fol) {
        System.out.println("genFuncList : " + fol.toString());
        String resContent = "";
        for (FuncObj fo : fol) {
            String funcName = fo.getName();
            funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
            List<String> tempList = fo.getTempList();
            String tempStr = tempList.isEmpty() ? "" : C_TEMPLATE_TOKEN + C_LEFT_ANGLE_BRACKET;
            for (String teStr : tempList) {
                tempStr += C_TYPE_NAME_TOKEN + C_BLANK_SPACE + teStr + C_COMMA + C_BLANK_SPACE;
            }
            tempStr = tempList.isEmpty() ? "" :
                    StringUtils.removeLastCharacter(tempStr, 2) + C_RIGHT_ANGLE_BRACKET + C_BLANK_SPACE;
            List<ParamObj> paList = fo.getParamList();
            String retValue = ts2CppKey(fo.getRetValue()).isEmpty() ?
                    "" : ts2CppKey(fo.getRetValue()) + C_BLANK_SPACE;
            resContent += C_NEW_LINE + tempStr + retValue +
                    replaceTsToken(funcName) + C_LEFT_PARENTHESES;

            for (ParamObj poItem : paList) {
                String paType = ts2CppKey(poItem.getType()).isEmpty() ?
                        C_AUTO_TOKEN + C_BLANK_SPACE : ts2CppKey(poItem.getType()) + C_BLANK_SPACE;
                String paName = poItem.getName();
                String defaultVal = poItem.getStrValue(0);
                defaultVal = defaultVal.isEmpty() ? "" : C_EQUAL + defaultVal;
                resContent += !paName.isEmpty() ? paType + replaceTsToken(paName) +
                        defaultVal + C_COMMA + C_BLANK_SPACE :
                        paType + C_COMMA + C_BLANK_SPACE;
            }
            if (!paList.isEmpty()) {
                resContent = StringUtils.removeLastCharacter(resContent, 2);
            }
            resContent += C_RIGHT_PARENTHESES + C_SEMICOLON;
        }
        this.funcContent = resContent;
        System.out.println("genFuncList : " + resContent);
    };

    /**
     * 生成输出内容
     *
     * @param sol 结构体列表
     */
    @Override
    public void genStructList(List<StructObj> sol) {
        System.out.println("genStructList" + sol.toString());

        String resContent = "";
        for (StructObj so : sol) {
            String structName = so.getName();
            structName = !structName.isEmpty() ? structName : so.getAlias();

            String templateStr = !so.getTemplateList().isEmpty() ?
                    C_TEMPLATE_TOKEN + C_BLANK_SPACE + C_LEFT_ANGLE_BRACKET : "";
            for (String teStr : so.getTemplateList()) {
                templateStr += C_TYPE_NAME_TOKEN + C_BLANK_SPACE + teStr + C_COMMA + C_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + C_RIGHT_ANGLE_BRACKET + C_BLANK_SPACE : "";

            List<ParamObj> paList = so.getMemberList();
            resContent += C_NEW_LINE + templateStr + C_STRUCT_TOKEN +
                    C_BLANK_SPACE + structName + C_BLANK_SPACE + C_LEFT_BRACE;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType().isEmpty() ? C_AUTO_TOKEN : paItem.getType();
                resContent += C_NEW_LINE + C_TAB_SPACE + ts2CppKey(paType) +
                        C_BLANK_SPACE + paItem.getName();
                        ;
                List<String> initVList = paItem.getvList();
                if (initVList.size() > 0) {
                    resContent += C_EQUAL + initVList.get(0) + C_SEMICOLON;
                } else {
                    resContent += C_SEMICOLON;
                }
            }

            List<FuncObj> funcList = so.getFuncList();
            for (FuncObj funcItem : funcList) {
                String retValue = ts2CppKey(funcItem.getRetValue()).isEmpty() ? "" :
                    ts2CppKey(funcItem.getRetValue()) + C_BLANK_SPACE;
                resContent += C_NEW_LINE + C_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + C_LEFT_PARENTHESES;
                List<ParamObj> pol = funcItem.getParamList();
                for (ParamObj poItem : pol) {
                    String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                            C_AUTO_TOKEN : ts2CppKey(poItem.getType());
                    resContent += retType + C_BLANK_SPACE + replaceTsToken(poItem.getName()) +
                            C_COMMA + C_BLANK_SPACE;
                }
                resContent = !pol.isEmpty() ? StringUtils.removeLastCharacter(resContent, 2) : resContent;
                resContent += C_RIGHT_PARENTHESES + C_SEMICOLON;
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;
        }
        this.structContent = resContent;
    };

    /**
     * 生成输出内容
     *
     * @param tol 类型列表
     */
    @Override
    public void genTypeList(List<TypeObj> tol) {
        System.out.println("genTypeList : " + tol.toString());
    };

    /**
     * 生成输出内容
     *
     * @param uol 联合体列表
     */
    @Override
    public void genUnionList(List<UnionObj> uol) {
        System.out.println("genUnionList : " + uol.toString());

        String resContent = "";
        for (UnionObj uo : uol) {
            String unionName = uo.getName();
            unionName = !unionName.isEmpty() ? unionName : uo.getAlias();

            String templateStr = !uo.getTemplateList().isEmpty() ?
                    C_TEMPLATE_TOKEN + C_BLANK_SPACE + C_LEFT_ANGLE_BRACKET : "";
            for (String teStr : uo.getTemplateList()) {
                templateStr += C_TYPE_NAME_TOKEN + C_BLANK_SPACE + teStr + C_COMMA + C_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + C_RIGHT_ANGLE_BRACKET + C_BLANK_SPACE : "";

            resContent += C_NEW_LINE + templateStr + C_UNION_TOKEN +
                    C_BLANK_SPACE + unionName + C_LEFT_BRACE;

            List<ParamObj> paList = uo.getMemList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String paName = paItem.getName();
                resContent += C_NEW_LINE + C_TAB_SPACE + ts2CppKey(paType)
                        + C_BLANK_SPACE + paName + C_SEMICOLON;
            }
            resContent += C_NEW_LINE + C_RIGHT_BRACE;
            resContent += C_SEMICOLON + C_NEW_LINE;
        }
        this.unionContent = resContent;
    };

    private String genVarArrayList(String tmpContent, String paName, List<ParamObj> paList) {
        String resContent = tmpContent;
        resContent += C_NEW_LINE + C_STRUCT_TOKEN + C_BLANK_SPACE + paName +
                C_STRUCT_SUFFIX + C_BLANK_SPACE + C_LEFT_BRACE;
        List<ParamObj> paramList = paList.get(0).getPaList();
        for (ParamObj paItem : paramList) {
            String paStr = paItem.getName();
            String paVal = paItem.getStrValue(0);
            String typeStr = StringUtils.isAllDigits(paVal) ?
                    C_NUMBER_TOKEN : C_STD_STRING;
            typeStr = StringUtils.isBoolean(paVal) ? C_BOOLEAN_TOKEN : typeStr;
            resContent += C_NEW_LINE + C_TAB_SPACE + typeStr + C_BLANK_SPACE + paStr + C_SEMICOLON;
        }
        resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;

        resContent += C_NEW_LINE + C_CONST_TOKEN + C_BLANK_SPACE + C_STD_VECTOR +
                C_LEFT_ANGLE_BRACKET + paName + C_STRUCT_SUFFIX + C_RIGHT_ANGLE_BRACKET +
                C_BLANK_SPACE + paName + C_EQUAL + C_LEFT_BRACE;
        for (ParamObj paramListItem : paList) {
            List<ParamObj> subParamList = paramListItem.getPaList();
            resContent += C_NEW_LINE + C_TAB_SPACE + C_LEFT_BRACE;
            for (ParamObj paItem : subParamList) {
                String paVal = paItem.getStrValue(0);
                resContent += paVal + C_COMMA + C_BLANK_SPACE;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 2);
            resContent += C_RIGHT_BRACE + C_COMMA;
        }
        resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;
        return resContent;
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
            String paType = ts2CppKey(po.getType()).isEmpty() ? C_AUTO_TOKEN : ts2CppKey(po.getType());
            String paValue = po.getStrValue(0);
            List<ParamObj> paList = po.getPaList();
            if (paList.isEmpty()) {
                resContent += C_NEW_LINE + C_EXTENDS_TOKEN + C_BLANK_SPACE + C_CONST_TOKEN +
                        C_BLANK_SPACE + paType + C_BLANK_SPACE + paName + C_EQUAL + paValue;

                resContent += C_SEMICOLON + C_NEW_LINE;
            } else if (paList.get(0).getPaList().isEmpty()) {
                String valType = StringUtils.isAllDigits(paList.get(0).getStrValue(0)) ?
                        C_NUMBER_TOKEN : C_STD_STRING;
                resContent += C_NEW_LINE + C_EXTENDS_TOKEN + C_BLANK_SPACE + C_CONST_TOKEN +
                        C_BLANK_SPACE + C_STD_MAP + C_LEFT_ANGLE_BRACKET + C_STD_STRING +
                        C_COMMA + C_BLANK_SPACE + valType + C_RIGHT_BRACE + C_BLANK_SPACE +
                        paName + C_EQUAL + C_LEFT_BRACE;
                for (ParamObj paItem : paList) {
                    String pName = paItem.getName();
                    String pVal = paItem.getStrValue(0);
                    resContent += C_NEW_LINE + C_TAB_SPACE + C_LEFT_BRACE + C_DOUBLE_QUOTATION +
                            pName + C_DOUBLE_QUOTATION + C_COMMA + C_BLANK_SPACE + pVal +
                            C_RIGHT_BRACE + C_COMMA;
                }
                resContent = StringUtils.removeLastCharacter(resContent, 1);
                resContent += C_NEW_LINE + C_RIGHT_BRACE + C_SEMICOLON + C_NEW_LINE;
            } else if (!(paList.get(0).getPaList().isEmpty())) {
                resContent = genVarArrayList(resContent, paName, paList);
            }

        }
        this.constContent = resContent;
        System.out.println("genVarList : " + resContent);
    }
}
