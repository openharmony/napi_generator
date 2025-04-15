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
public class GenCppHFile extends GeneratorBase {
    private static final String CPP_ENUM_TOKEN = "enum";
    private static final String CPP_CLASS_TOKEN = "class";
    private static final String CPP_STRUCT_TOKEN = "struct";
    private static final String CPP_UNION_TOKEN = "union";
    private static final String CPP_TEMPLATE_TOKEN = "template";
    private static final String CPP_TYPE_NAME_TOKEN = "typename";
    private static final String CPP_STAR_TOKEN = "*";
    private static final String CPP_CHAR_START_TOKEN = "char*";
    private static final String CPP_AUTO_TOKEN = "auto";
    private static final String CPP_EXPORT_TOKEN = "export";
    private static final String CPP_IMPLEMENCPP_TOKEN = "implements";
    private static final String CPP_EXTENDS_TOKEN = "extends";
    private static final String CPP_CONST_TOKEN = "const";
    private static final String CPP_PRIVATE_TOKEN = "private";
    private static final String CPP_PUBLIC_TOKEN = "public";
    private static final String CPP_INTERFACE_TOKEN = "interface";
    private static final String CPP_PROTECTED_TOKEN = "protected";
    private static final String CPP_STATIC_TOKEN = "static";
    private static final String CPP_ANY_TOKEN = "any";
    private static final String CPP_NUMBER_TOKEN = "number";
    private static final String CPP_NEVER_TOKEN = "never";
    private static final String CPP_BOOLEAN_TOKEN = "boolean";
    private static final String CPP_STRING_TOKEN = "string";
    private static final String CPP_UNIQUE_TOKEN = "unique";
    private static final String CPP_SYMBOL_TOKEN = "symbol";
    private static final String CPP_UNDEFINED_TOKEN = "undefined";
    private static final String CPP_OBJECT_TOKEN = "object";
    private static final String CPP_OF_TOKEN = "of";
    private static final String CPP_KEYOF_TOKEN = "keyof";
    private static final String CPP_TYPE_TOKEN = "type";
    private static final String CPP_CONSTRUCTOR_TOKEN = "constructor";
    private static final String CPP_NAMESPACE_TOKEN = "namespace";
    private static final String CPP_REQUIRE_TOKEN = "require";
    private static final String CPP_MODULE_TOKEN = "module";
    private static final String CPP_DECLARE_TOKEN = "declare";
    private static final String CPP_ABSTRACT_TOKEN = "abstract";
    private static final String CPP_DEBUGGER_TOKEN = "debugger";
    private static final String CPP_FUNCTION_TOKEN = "function";
    private static final String CPP_THIS_TOKEN = "this";
    private static final String CPP_WITH_TOKEN = "with";
    private static final String CPP_DEFAULT_TOKEN = "default";
    private static final String CPP_READONLY_TOKEN = "readonly";
    private static final String CPP_ASYNC_TOKEN = "async";
    private static final String CPP_AWAIT_TOKEN = "await";
    private static final String CPP_YIELD_TOKEN = "yield";
    private static final String CPP_NEW_LINE = "\n";
    private static final String CPP_TAB_SPACE = "\t";
    private static final String CPP_BLANK_SPACE = " ";
    private static final String CPP_SPLIT = " | ";
    private static final String CPP_EQUAL = " = ";
    private static final String CPP_COMMA = ",";
    private static final String CPP_DOUBLE_QUOTATION = "\"";
    private static final String CPP_UNDER_LINE = "_";
    private static final String CPP_SEMICOLON = ";";
    private static final String CPP_COLON = ":";
    private static final String CPP_ELLIPSIS = "...";
    private static final String CPP_DOT = ".";
    private static final String CPP_LEFT_BRACE = "{";
    private static final String CPP_RIGHT_BRACE = "}";
    private static final String CPP_LEFT_PARENTHESES = "(";
    private static final String CPP_RIGHT_PARENTHESES = ")";
    private static final String CPP_LEFT_SQUARE_BRACKET = "[";
    private static final String CPP_RIGHT_SQUARE_BRACKET = "]";
    private static final String CPP_LEFT_ANGLE_BRACKET = "<";
    private static final String CPP_RIGHT_ANGLE_BRACKET = ">";

    private static final String CPP_STD_STRING = "std::string";
    private static final String CPP_STD_VECTOR = "std::vector";
    private static final String CPP_STD_LIST = "std::list";
    private static final String CPP_STD_ARRAY = "std::array";
    private static final String CPP_STD_STACK = "std::stack";
    private static final String CPP_STD_QUEUE = "std::queue";
    private static final String CPP_STD_PAIR = "std::pair";
    private static final String CPP_STD_MAP = "std::map";
    private static final String CPP_STD_SET = "std::set";
    private static final String CPP_STD_DEQUE = "std::deque";
    private static final String CPP_STD_MULTIMAP = "std::multimap";
    private static final String CPP_STD_MULTISET = "std::multiset";
    private static final String CPP_STD_FUNCTION = "std::function";

    private static final String CPP_STR_SUFFIX = "STR";
    private static final String CPP_FILE_PREFIX = "ag_";
    private static final String CPP_FILE_H_SUFFIX = ".h";
    private static final String CPP_FILE_CPP_SUFFIX = ".cpp";
    private static final String CPP_FILE_C_SUFFIX = ".c";
    private static final String CPP_STRUCT_SUFFIX = "ST";

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
            Map.entry("string", "std::string"),
            Map.entry("number", "int"),
            Map.entry("void", "void"),
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
    GenCppHFile() {

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
            if (ret >= 0 && value.contains(CPP_STAR_TOKEN)) {
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
        String outFileName = filePath + File.separator + CPP_FILE_PREFIX +
                fileName.replace(".", "_") + CPP_FILE_H_SUFFIX;
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
            resContent += CPP_NEW_LINE + CPP_ENUM_TOKEN +
                    CPP_BLANK_SPACE + enumName + CPP_BLANK_SPACE + CPP_LEFT_BRACE;
            for (String memItem : memList) {
                resContent += CPP_NEW_LINE + CPP_TAB_SPACE + memItem;
                if (vaList.size() > i && !vaList.get(i).isEmpty()) {
                    resContent += CPP_EQUAL + replaceTsToken(vaList.get(i)) + CPP_COMMA;
                } else {
                    resContent += CPP_COMMA;
                }
                i++;
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;

            i = 0;
            if (vaList.size() > i && !vaList.get(i).isEmpty() &&
                    vaList.get(i).contains("\"")) {
                resContent += CPP_NEW_LINE + CPP_CHAR_START_TOKEN + CPP_BLANK_SPACE +
                        enumName.toLowerCase(Locale.ROOT) + CPP_UNDER_LINE + CPP_STR_SUFFIX +
                        CPP_LEFT_SQUARE_BRACKET + CPP_RIGHT_SQUARE_BRACKET + CPP_EQUAL + CPP_LEFT_BRACE;
                for (String val : vaList) {
                    resContent += CPP_NEW_LINE + CPP_TAB_SPACE + CPP_LEFT_SQUARE_BRACKET +
                            memList.get(i) + CPP_RIGHT_SQUARE_BRACKET + CPP_EQUAL + val + CPP_COMMA;
                    i++;
                }
                resContent = StringUtils.removeLastCharacter(resContent, 1);
                resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;

            }
        }

        this.enumContent = resContent;
    };

    private String setClassFunc(List<FuncObj> funcList, String content) {
        String tempResContent = content;
        for (FuncObj funcItem : funcList) {
            String retValue = funcItem.getRetValue();
            retValue = retValue.isEmpty() ? "" : ts2CppKey(retValue) + CPP_BLANK_SPACE;
            tempResContent += CPP_NEW_LINE + CPP_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + CPP_LEFT_PARENTHESES;
            List<ParamObj> pol = funcItem.getParamList();
            for (ParamObj poItem : pol) {
                String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                        CPP_AUTO_TOKEN : ts2CppKey(poItem.getType());
                tempResContent += (poItem.getName() == null) ? retType + CPP_COMMA + CPP_BLANK_SPACE :
                        retType + CPP_BLANK_SPACE + replaceTsToken(poItem.getName()) + CPP_COMMA + CPP_BLANK_SPACE;
            }
            if (!pol.isEmpty()) {
                tempResContent = StringUtils.removeLastCharacter(tempResContent, 2);
            }
            tempResContent += CPP_RIGHT_PARENTHESES + CPP_SEMICOLON;
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
                    CPP_TEMPLATE_TOKEN + CPP_BLANK_SPACE + CPP_LEFT_ANGLE_BRACKET : "";
            for (String teStr : co.getTempList()) {
                templateStr += CPP_TYPE_NAME_TOKEN + CPP_BLANK_SPACE + teStr + CPP_COMMA + CPP_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                StringUtils.removeLastCharacter(templateStr, 2) + CPP_RIGHT_ANGLE_BRACKET + CPP_BLANK_SPACE : "";

            List<String> hnList = co.getHeritageNameList();
            String htStr = hnList.size() > 0 ? CPP_BLANK_SPACE + CPP_COLON + CPP_BLANK_SPACE : "";
            for (String hName : hnList) {
                htStr += CPP_PUBLIC_TOKEN + CPP_BLANK_SPACE + hName + CPP_COMMA + CPP_BLANK_SPACE;
            }
            htStr = htStr.length() > 1 ? StringUtils.removeLastCharacter(htStr, 2) : htStr;

            List<String> htempList = co.getHeritageTemplateList();
            String htempStr = htempList.size() > 0 ? CPP_LEFT_ANGLE_BRACKET : "";
            for (String tempStr : htempList) {
                htempStr += tempStr + CPP_COMMA + CPP_BLANK_SPACE;
            }
            htempStr = htempList.size() > 0 ?
                StringUtils.removeLastCharacter(htempStr, 2) + CPP_RIGHT_ANGLE_BRACKET : "";
            resContent += CPP_NEW_LINE + templateStr + CPP_CLASS_TOKEN +
                    CPP_BLANK_SPACE + className + htStr + htempStr + CPP_BLANK_SPACE + CPP_LEFT_BRACE;
            List<ParamObj> paList = co.getParamList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String qualifyStr = paItem.getQualifier() == null || paItem.getQualifier().isEmpty() ?
                        "" : paItem.getQualifier() + CPP_BLANK_SPACE;
                resContent += CPP_NEW_LINE + CPP_TAB_SPACE + qualifyStr + ts2CppKey(paType) +
                        CPP_BLANK_SPACE + replaceTsToken(paItem.getName());
                List<String> initVList = paItem.getvList();
                if (!initVList.isEmpty()) {
                    resContent += CPP_EQUAL + initVList.get(0) + CPP_SEMICOLON;
                } else {
                    resContent += CPP_SEMICOLON;
                }
            }

            resContent = setClassFunc(co.getFuncList(), resContent);

            resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;
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
            String tempStr = tempList.isEmpty() ? "" : CPP_TEMPLATE_TOKEN + CPP_LEFT_ANGLE_BRACKET;
            for (String teStr : tempList) {
                tempStr += CPP_TYPE_NAME_TOKEN + CPP_BLANK_SPACE + teStr + CPP_COMMA + CPP_BLANK_SPACE;
            }
            tempStr = tempList.isEmpty() ? "" :
                    StringUtils.removeLastCharacter(tempStr, 2) + CPP_RIGHT_ANGLE_BRACKET + CPP_BLANK_SPACE;
            List<ParamObj> paList = fo.getParamList();
            String retValue = ts2CppKey(fo.getRetValue()).isEmpty() ?
                    "" : ts2CppKey(fo.getRetValue()) + CPP_BLANK_SPACE;
            resContent += CPP_NEW_LINE + tempStr + retValue +
                    replaceTsToken(funcName) + CPP_LEFT_PARENTHESES;

            for (ParamObj poItem : paList) {
                String paType = ts2CppKey(poItem.getType()).isEmpty() ?
                        CPP_AUTO_TOKEN + CPP_BLANK_SPACE : ts2CppKey(poItem.getType()) + CPP_BLANK_SPACE;
                String paName = poItem.getName();
                String defaultVal = poItem.getStrValue(0);
                defaultVal = defaultVal.isEmpty() ? "" : CPP_EQUAL + defaultVal;
                resContent += !paName.isEmpty() ? paType + replaceTsToken(paName) +
                        defaultVal + CPP_COMMA + CPP_BLANK_SPACE :
                        paType + CPP_COMMA + CPP_BLANK_SPACE;
            }
            if (!paList.isEmpty()) {
                resContent = StringUtils.removeLastCharacter(resContent, 2);
            }
            resContent += CPP_RIGHT_PARENTHESES + CPP_SEMICOLON;
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
                    CPP_TEMPLATE_TOKEN + CPP_BLANK_SPACE + CPP_LEFT_ANGLE_BRACKET : "";
            for (String teStr : so.getTemplateList()) {
                templateStr += CPP_TYPE_NAME_TOKEN + CPP_BLANK_SPACE + teStr + CPP_COMMA + CPP_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + CPP_RIGHT_ANGLE_BRACKET + CPP_BLANK_SPACE : "";

            List<ParamObj> paList = so.getMemberList();
            resContent += CPP_NEW_LINE + templateStr + CPP_STRUCT_TOKEN +
                    CPP_BLANK_SPACE + structName + CPP_BLANK_SPACE + CPP_LEFT_BRACE;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType().isEmpty() ? CPP_AUTO_TOKEN : paItem.getType();
                resContent += CPP_NEW_LINE + CPP_TAB_SPACE + ts2CppKey(paType) +
                        CPP_BLANK_SPACE + paItem.getName();
                        ;
                List<String> initVList = paItem.getvList();
                if (initVList.size() > 0) {
                    resContent += CPP_EQUAL + initVList.get(0) + CPP_SEMICOLON;
                } else {
                    resContent += CPP_SEMICOLON;
                }
            }

            List<FuncObj> funcList = so.getFuncList();
            for (FuncObj funcItem : funcList) {
                String retValue = ts2CppKey(funcItem.getRetValue()).isEmpty() ? "" :
                    ts2CppKey(funcItem.getRetValue()) + CPP_BLANK_SPACE;
                resContent += CPP_NEW_LINE + CPP_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + CPP_LEFT_PARENTHESES;
                List<ParamObj> pol = funcItem.getParamList();
                for (ParamObj poItem : pol) {
                    String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                            CPP_AUTO_TOKEN : ts2CppKey(poItem.getType());
                    resContent += retType + CPP_BLANK_SPACE + replaceTsToken(poItem.getName()) +
                            CPP_COMMA + CPP_BLANK_SPACE;
                }
                resContent = !pol.isEmpty() ? StringUtils.removeLastCharacter(resContent, 2) : resContent;
                resContent += CPP_RIGHT_PARENTHESES + CPP_SEMICOLON;
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;
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
                    CPP_TEMPLATE_TOKEN + CPP_BLANK_SPACE + CPP_LEFT_ANGLE_BRACKET : "";
            for (String teStr : uo.getTemplateList()) {
                templateStr += CPP_TYPE_NAME_TOKEN + CPP_BLANK_SPACE + teStr + CPP_COMMA + CPP_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + CPP_RIGHT_ANGLE_BRACKET + CPP_BLANK_SPACE : "";

            resContent += CPP_NEW_LINE + templateStr + CPP_UNION_TOKEN +
                    CPP_BLANK_SPACE + unionName + CPP_LEFT_BRACE;

            List<ParamObj> paList = uo.getMemList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String paName = paItem.getName();
                resContent += CPP_NEW_LINE + CPP_TAB_SPACE + ts2CppKey(paType)
                        + CPP_BLANK_SPACE + paName + CPP_SEMICOLON;
            }
            resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE;
            resContent += CPP_SEMICOLON + CPP_NEW_LINE;
        }
        this.unionContent = resContent;
    };

    private String genVarArrayList(String tmpContent, String paName, List<ParamObj> paList) {
        String resContent = tmpContent;
        resContent += CPP_NEW_LINE + CPP_STRUCT_TOKEN + CPP_BLANK_SPACE + paName +
                CPP_STRUCT_SUFFIX + CPP_BLANK_SPACE + CPP_LEFT_BRACE;
        List<ParamObj> paramList = paList.get(0).getPaList();
        for (ParamObj paItem : paramList) {
            String paStr = paItem.getName();
            String paVal = paItem.getStrValue(0);
            String typeStr = StringUtils.isAllDigits(paVal) ?
                    CPP_NUMBER_TOKEN : CPP_STD_STRING;
            typeStr = StringUtils.isBoolean(paVal) ? CPP_BOOLEAN_TOKEN : typeStr;
            resContent += CPP_NEW_LINE + CPP_TAB_SPACE + typeStr + CPP_BLANK_SPACE + paStr + CPP_SEMICOLON;
        }
        resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;

        resContent += CPP_NEW_LINE + CPP_CONST_TOKEN + CPP_BLANK_SPACE + CPP_STD_VECTOR +
                CPP_LEFT_ANGLE_BRACKET + paName + CPP_STRUCT_SUFFIX + CPP_RIGHT_ANGLE_BRACKET +
                CPP_BLANK_SPACE + paName + CPP_EQUAL + CPP_LEFT_BRACE;
        for (ParamObj paramListItem : paList) {
            List<ParamObj> subParamList = paramListItem.getPaList();
            resContent += CPP_NEW_LINE + CPP_TAB_SPACE + CPP_LEFT_BRACE;
            for (ParamObj paItem : subParamList) {
                String paVal = paItem.getStrValue(0);
                resContent += paVal + CPP_COMMA + CPP_BLANK_SPACE;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 2);
            resContent += CPP_RIGHT_BRACE + CPP_COMMA;
        }
        resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;
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
            String paType = ts2CppKey(po.getType()).isEmpty() ? CPP_AUTO_TOKEN : ts2CppKey(po.getType());
            String paValue = po.getStrValue(0);
            List<ParamObj> paList = po.getPaList();
            if (paList.isEmpty()) {
                resContent += CPP_NEW_LINE + CPP_EXTENDS_TOKEN + CPP_BLANK_SPACE + CPP_CONST_TOKEN +
                        CPP_BLANK_SPACE + paType + CPP_BLANK_SPACE + paName + CPP_EQUAL + paValue;

                resContent += CPP_SEMICOLON + CPP_NEW_LINE;
            } else if (paList.get(0).getPaList().isEmpty()) {
                String valType = StringUtils.isAllDigits(paList.get(0).getStrValue(0)) ?
                        CPP_NUMBER_TOKEN : CPP_STD_STRING;
                resContent += CPP_NEW_LINE + CPP_EXTENDS_TOKEN + CPP_BLANK_SPACE + CPP_CONST_TOKEN +
                        CPP_BLANK_SPACE + CPP_STD_MAP + CPP_LEFT_ANGLE_BRACKET + CPP_STD_STRING +
                        CPP_COMMA + CPP_BLANK_SPACE + valType + CPP_RIGHT_BRACE + CPP_BLANK_SPACE +
                        paName + CPP_EQUAL + CPP_LEFT_BRACE;
                for (ParamObj paItem : paList) {
                    String pName = paItem.getName();
                    String pVal = paItem.getStrValue(0);
                    resContent += CPP_NEW_LINE + CPP_TAB_SPACE + CPP_LEFT_BRACE + CPP_DOUBLE_QUOTATION +
                            pName + CPP_DOUBLE_QUOTATION + CPP_COMMA + CPP_BLANK_SPACE + pVal +
                            CPP_RIGHT_BRACE + CPP_COMMA;
                }
                resContent = StringUtils.removeLastCharacter(resContent, 1);
                resContent += CPP_NEW_LINE + CPP_RIGHT_BRACE + CPP_SEMICOLON + CPP_NEW_LINE;
            } else if (!(paList.get(0).getPaList().isEmpty())) {
                resContent = genVarArrayList(resContent, paName, paList);
            }

        }
        this.constContent = resContent;
        System.out.println("genVarList : " + resContent);
    }
}
