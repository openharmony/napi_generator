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
public class GenAkiCppFile extends GeneratorBase {
    private static final String AKI_ENUM_TOKEN = "enum";
    private static final String AKI_CLASS_TOKEN = "class";
    private static final String AKI_STRUCT_TOKEN = "struct";
    private static final String AKI_UNION_TOKEN = "union";
    private static final String AKI_TEMPLATE_TOKEN = "template";
    private static final String AKI_TYPE_NAME_TOKEN = "typename";
    private static final String AKI_STAR_TOKEN = "*";
    private static final String AKI_CHAR_START_TOKEN = "char*";
    private static final String AKI_AUTO_TOKEN = "auto";
    private static final String AKI_EXPORT_TOKEN = "export";
    private static final String AKI_IMPLEMENAKI_TOKEN = "implements";
    private static final String AKI_EXTENDS_TOKEN = "extends";
    private static final String AKI_CONST_TOKEN = "const";
    private static final String AKI_PRIVATE_TOKEN = "private";
    private static final String AKI_PUBLIC_TOKEN = "public";
    private static final String AKI_INTERFACE_TOKEN = "interface";
    private static final String AKI_PROTECTED_TOKEN = "protected";
    private static final String AKI_STATIC_TOKEN = "static";
    private static final String AKI_ANY_TOKEN = "any";
    private static final String AKI_NUMBER_TOKEN = "number";
    private static final String AKI_NEVER_TOKEN = "never";
    private static final String AKI_BOOLEAN_TOKEN = "boolean";
    private static final String AKI_STRING_TOKEN = "string";
    private static final String AKI_UNIQUE_TOKEN = "unique";
    private static final String AKI_SYMBOL_TOKEN = "symbol";
    private static final String AKI_UNDEFINED_TOKEN = "undefined";
    private static final String AKI_OBJECT_TOKEN = "object";
    private static final String AKI_OF_TOKEN = "of";
    private static final String AKI_KEYOF_TOKEN = "keyof";
    private static final String AKI_TYPE_TOKEN = "type";
    private static final String AKI_CONSTRUCTOR_TOKEN = "constructor";
    private static final String AKI_NAMESPACE_TOKEN = "namespace";
    private static final String AKI_REQUIRE_TOKEN = "require";
    private static final String AKI_MODULE_TOKEN = "module";
    private static final String AKI_DECLARE_TOKEN = "declare";
    private static final String AKI_ABSTRACT_TOKEN = "abstract";
    private static final String AKI_DEBUGGER_TOKEN = "debugger";
    private static final String AKI_FUNCTION_TOKEN = "function";
    private static final String AKI_THIS_TOKEN = "this";
    private static final String AKI_WITH_TOKEN = "with";
    private static final String AKI_DEFAULT_TOKEN = "default";
    private static final String AKI_READONLY_TOKEN = "readonly";
    private static final String AKI_ASYNC_TOKEN = "async";
    private static final String AKI_AWAIT_TOKEN = "await";
    private static final String AKI_YIELD_TOKEN = "yield";
    private static final String AKI_ARROW_TOKEN = "=>";
    private static final String AKI_NEW_LINE = "\n";
    private static final String AKI_TAB_SPACE = "\t";
    private static final String AKI_BLANK_SPACE = " ";
    private static final String AKI_SPLIT = " | ";
    private static final String AKI_EQUAL = " = ";
    private static final String AKI_COMMA = ",";
    private static final String AKI_DOUBLE_QUOTATION = "\"";
    private static final String AKI_UNDER_LINE = "_";
    private static final String AKI_SEMICOLON = ";";
    private static final String AKI_COLON = ":";
    private static final String AKI_ELLIPSIS = "...";
    private static final String AKI_DOT = ".";
    private static final String AKI_LEFT_BRACE = "{";
    private static final String AKI_RIGHT_BRACE = "}";
    private static final String AKI_LEFT_PARENTHESES = "(";
    private static final String AKI_RIGHT_PARENTHESES = ")";
    private static final String AKI_LEFT_SQUARE_BRACKET = "[";
    private static final String AKI_RIGHT_SQUARE_BRACKET = "]";
    private static final String AKI_LEFT_ANGLE_BRACKET = "<";
    private static final String AKI_RIGHT_ANGLE_BRACKET = ">";

    private static final String AKI_STD_STRING = "std::string";
    private static final String AKI_STD_VECTOR = "std::vector";
    private static final String AKI_STD_LIST = "std::list";
    private static final String AKI_STD_ARRAY = "std::array";
    private static final String AKI_STD_STACK = "std::stack";
    private static final String AKI_STD_QUEUE = "std::queue";
    private static final String AKI_STD_PAIR = "std::pair";
    private static final String AKI_STD_MAP = "std::map";
    private static final String AKI_STD_SET = "std::set";
    private static final String AKI_STD_DEQUE = "std::deque";
    private static final String AKI_STD_MULTIMAP = "std::multimap";
    private static final String AKI_STD_MULTISET = "std::multiset";

    private static final String AKI_RET_EXPRESS = "AKI_RET_EXPRESS";
    private static final String AKI_ARGUMENT_EXPRESS = "AKI_ARGUMENT_EXPRESS";
    private static final String AKI_CALLBACK_DECLARE = "aki::SafetyCallback<AKI_RET_EXPRESS(AKI_ARGUMENT_EXPRESS)> ";

    private static final String AKI_STR_SUFFIX = "STR";
    private static final String AKI_FILE_PREFIX = "ag_aki";
    private static final String AKI_FILE_H_SUFFIX = ".h";
    private static final String AKI_FILE_AKI_SUFFIX = ".cpp";
    private static final String AKI_FILE_C_SUFFIX = ".c";
    private static final String AKI_STRUCT_SUFFIX = "ST";

    private static final String AKI_ENUM_NAME = "AKI_ENUM_NAME";
    private static final String AKI_ENUM_ITEM_NANE = "AKI_ENUM_ITEM_NANE";
    private static final String AKI_ENUM_ITEM_DECLARE = "\n\tJSBIND_ENUM_VALUE(AKI_ENUM_ITEM_NANE);";
    private static final String AKI_ENUM_EXPRESSION = "JSBIND_ENUM_EXPRESSION";
    private static final String AKI_ENUM_DECLARE = "\nJSBIND_ENUM(AKI_ENUM_NAME) {" +
            "JSBIND_ENUM_EXPRESSION\n" +
            "};\n";

    private static final String AKI_CLASS_NAME = "AKI_CLASS_NAME";
    private static final String AKI_CONSTRUCTOR_EXPRESSION = "AKI_CONSTRUCTOR_EXPRESSION";
    private static final String AKI_CONSTRUCTOR_DECLARE = "\n\tJSBIND_CONSTRUCTOR<AKI_CONSTRUCTOR_PARAMS>();";
    private static final String AKI_CONSTRUCTOR_PARAMS = "AKI_CONSTRUCTOR_PARAMS";
    private static final String AKI_METHOD_DECLARE = "\n\tJSBIND_METHOD(AKI_METHOD_NAME, \"AKI_METHOD_NAME\");" +
            "\n\tJSBIND_PMETHOD(AKI_METHOD_NAME, \"AKI_METHOD_NAMEPromise\");";
    private static final String AKI_METHOD_EXPRESSION = "AKI_METHOD_EXPRESSION";
    private static final String AKI_METHOD_NAME = "AKI_METHOD_NAME";
    private static final String AKI_PMETHOD_DECLARE = "\n\tJSBIND_PMETHOD(AKI_PMETHOD_NAME);";
    private static final String AKI_PMETHOD_EXPRESSION = "AKI_PMETHOD_EXPRESSION";
    private static final String AKI_PMETHOD_NAME = "AKI_PMETHOD_NAME";
    private static final String AKI_PROPERTY_DECLARE = "\n\tJSBIND_PROPERTY(AKI_PROPERTY_NAME);";
    private static final String AKI_PROPERTY_EXPRESSION = "AKI_PROPERTY_EXPRESSION";
    private static final String AKI_PROPERTY_NAME = "AKI_PROPERTY_NAME";
    private static final String AKI_CLASS_DECLARE = "\nJSBIND_CLASS(AKI_CLASS_NAME)\n" +
            "{" +
            "AKI_CONSTRUCTOR_EXPRESSION" +
            "AKI_METHOD_EXPRESSION" +
            "AKI_PMETHOD_EXPRESSION" +
            "AKI_PROPERTY_EXPRESSION" +
            "\n};\n";

    private static final String AKI_FUNCTION_ITEM_DECLARE =
            "\n\tJSBIND_FUNCTION(AKI_FUNCTION_NAME, \"AKI_FUNCTION_NAME\");" +
            "\n\tJSBIND_PFUNCTION(AKI_FUNCTION_NAME, \"AKI_FUNCTION_NAMEPromise\");";
    private static final String AKI_FUNCTION_EXPRESSION = "AKI_FUNCTION_EXPRESSION";
    private static final String AKI_FUNCTION_NAME = "AKI_FUNCTION_NAME";
    private static final String AKI_FUNCTION_DECLARE = "\nJSBIND_GLOBAL()\n" +
            "{" +
            "AKI_FUNCTION_EXPRESSION\n" +
            "};\n";

    private static final String AKI_ADDON_NAME = "AKI_ADDON_NAME";
    private static final String AKI_ADDON_DECLARE = "\n#include <string>\n" +
            "#include <aki/jsbind.h>\n" +
            "\n" +
            "JSBIND_ADDON(AKI_ADDON_NAME)\n";

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
            Map.entry("string", "char*"),
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
    GenAkiCppFile() {

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
            if (ret >= 0 && value.contains(AKI_STAR_TOKEN)) {
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
        String outFileName = filePath + File.separator + AKI_FILE_PREFIX +
                fileName.replace(".", "_") + AKI_FILE_AKI_SUFFIX;
        this.genFileName = outFileName;
        System.out.println("outFileName : " + outFileName);

        if (this.genMode.equals(GeneratorBase.GEN_REPLACE)) {
            FileUtils.deleteFile(outFileName);
        }
        FileUtils.createFile(outFileName);

        FileUtils.appendText(outFileName, this.genFileHeader(filePath + File.separator + fileName));
        FileUtils.appendText(outFileName,
                AKI_ADDON_DECLARE.replace(AKI_ADDON_NAME, fileName.replace(".", "")));
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

    private String genCppEnumContent(EnumObj eo) {
        String resContent = "";
        String enumName = eo.getName();
        enumName = enumName != null && !enumName.isEmpty() ? enumName : eo.getAlias();
        List<String> memList = eo.getMemberList();
        List<String> vaList = eo.getValueList();
        int i = 0;
        resContent += AKI_NEW_LINE + AKI_ENUM_TOKEN +
                AKI_BLANK_SPACE + enumName + AKI_BLANK_SPACE + AKI_LEFT_BRACE;
        for (String memItem : memList) {
            resContent += AKI_NEW_LINE + AKI_TAB_SPACE + memItem;
            if (vaList.size() > i && !vaList.get(i).isEmpty()) {
                resContent += AKI_EQUAL + replaceTsToken(vaList.get(i)) + AKI_COMMA;
            } else {
                resContent += AKI_COMMA;
            }
            i++;
        }

        resContent = StringUtils.removeLastSpace(resContent);
        resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;

        i = 0;
        if (vaList.size() > i && !vaList.get(i).isEmpty() &&
                vaList.get(i).contains("\"")) {
            resContent += AKI_NEW_LINE + AKI_CHAR_START_TOKEN + AKI_BLANK_SPACE +
                    enumName.toLowerCase(Locale.ROOT) + AKI_UNDER_LINE + AKI_STR_SUFFIX +
                    AKI_LEFT_SQUARE_BRACKET + AKI_RIGHT_SQUARE_BRACKET + AKI_EQUAL + AKI_LEFT_BRACE;
            for (String val : vaList) {
                resContent += AKI_NEW_LINE + AKI_TAB_SPACE + AKI_LEFT_SQUARE_BRACKET +
                        memList.get(i) + AKI_RIGHT_SQUARE_BRACKET + AKI_EQUAL + val + AKI_COMMA;
                i++;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 1);
            resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;

        }
        return resContent;
    }

    private String genAkiEnumContent(EnumObj eo) {
        String resContent = "";
        String enumName = eo.getName();
        enumName = !enumName.isEmpty() ? enumName : eo.getAlias();
        List<String> memList = eo.getMemberList();

        String enumDeclare = AKI_ENUM_DECLARE.replace(AKI_ENUM_NAME, enumName);
        String enumItemDeclare = "";
        for (String memItem : memList) {
            enumItemDeclare += AKI_ENUM_ITEM_DECLARE.replace(AKI_ENUM_ITEM_NANE, memItem);
        }

        resContent = enumDeclare.replace(AKI_ENUM_EXPRESSION, enumItemDeclare);
        return resContent;
    }

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
            resContent += genCppEnumContent(eo);
            resContent += genAkiEnumContent(eo);
        }

        this.enumContent = resContent;
    };

    private String setClassFunc(List<FuncObj> funcList, String content) {
        String tempResContent = content;
        for (FuncObj funcItem : funcList) {
            String retValue = funcItem.getRetValue();
            retValue = retValue.isEmpty() ? "" : ts2CppKey(retValue) + AKI_BLANK_SPACE;
            tempResContent += AKI_NEW_LINE + AKI_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + AKI_LEFT_PARENTHESES;
            List<ParamObj> pol = funcItem.getParamList();
            for (ParamObj poItem : pol) {
                String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                        AKI_AUTO_TOKEN : ts2CppKey(poItem.getType());
                tempResContent += (poItem.getName() == null) ? retType + AKI_COMMA + AKI_BLANK_SPACE :
                        retType + AKI_BLANK_SPACE + replaceTsToken(poItem.getName()) + AKI_COMMA + AKI_BLANK_SPACE;
            }
            if (!pol.isEmpty()) {
                tempResContent = StringUtils.removeLastCharacter(tempResContent, 2);
            }
            tempResContent += AKI_RIGHT_PARENTHESES + AKI_SEMICOLON;
        }
        return tempResContent;
    }

    private String genCppClassContent(ClassObj co) {
        String className = co.getName();
        className = !className.isEmpty() ? className : co.getAlias();

        String templateStr = !co.getTempList().isEmpty() ?
                AKI_TEMPLATE_TOKEN + AKI_BLANK_SPACE + AKI_LEFT_ANGLE_BRACKET : "";
        for (String teStr : co.getTempList()) {
            templateStr += AKI_TYPE_NAME_TOKEN + AKI_BLANK_SPACE + teStr + AKI_COMMA + AKI_BLANK_SPACE;
        }
        templateStr = templateStr.length() > 1 ?
                StringUtils.removeLastCharacter(templateStr, 2) + AKI_RIGHT_ANGLE_BRACKET + AKI_BLANK_SPACE : "";

        List<String> hnList = co.getHeritageNameList();
        String htStr = hnList.size() > 0 ? AKI_BLANK_SPACE + AKI_COLON + AKI_BLANK_SPACE : "";
        for (String hName : hnList) {
            htStr += AKI_PUBLIC_TOKEN + AKI_BLANK_SPACE + hName + AKI_COMMA + AKI_BLANK_SPACE;
        }
        htStr = htStr.length() > 1 ? StringUtils.removeLastCharacter(htStr, 2) : htStr;

        List<String> htempList = co.getHeritageTemplateList();
        String htempStr = htempList.size() > 0 ? AKI_LEFT_ANGLE_BRACKET : "";
        for (String tempStr : htempList) {
            htempStr += tempStr + AKI_COMMA + AKI_BLANK_SPACE;
        }
        htempStr = htempList.size() > 0 ?
                StringUtils.removeLastCharacter(htempStr, 2) + AKI_RIGHT_ANGLE_BRACKET : "";
        String resContent = "";
        resContent += AKI_NEW_LINE + templateStr + AKI_CLASS_TOKEN +
                AKI_BLANK_SPACE + className + htStr + htempStr + AKI_BLANK_SPACE + AKI_LEFT_BRACE;
        List<ParamObj> paList = co.getParamList();
        for (ParamObj paItem : paList) {
            String paType = paItem.getType();
            String qualifyStr = paItem.getQualifier() == null || paItem.getQualifier().isEmpty() ?
                    "" : paItem.getQualifier() + AKI_BLANK_SPACE;
            resContent += AKI_NEW_LINE + AKI_TAB_SPACE + qualifyStr + ts2CppKey(paType) +
                    AKI_BLANK_SPACE + replaceTsToken(paItem.getName());
            List<String> initVList = paItem.getvList();
            if (!initVList.isEmpty()) {
                resContent += AKI_EQUAL + initVList.get(0) + AKI_SEMICOLON;
            } else {
                resContent += AKI_SEMICOLON;
            }
        }

        resContent = setClassFunc(co.getFuncList(), resContent);
        resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;
        return resContent;
    }

    private String genAkiCppClassContent(ClassObj co) {
        String className = co.getName();
        className = !className.isEmpty() ? className : co.getAlias();

        String classDeclare = AKI_CLASS_DECLARE.replace(AKI_CLASS_NAME, className);
        String classPropertyDeclare = "";

        List<ParamObj> paList = co.getParamList();
        for (ParamObj paItem : paList) {
            classPropertyDeclare += AKI_PROPERTY_DECLARE.replace(AKI_PROPERTY_NAME, paItem.getName());
        }
        classDeclare = classDeclare.replace(AKI_PROPERTY_EXPRESSION, classPropertyDeclare);

        List<FuncObj> foList = co.getFuncList();
        String classFunctionDeclare = "";
        String classConstructDeclare = "";
        for (FuncObj foItem : foList) {
            if (foItem.getName().equals("constructor")) {
                String paramStr = "";
                for (ParamObj poItem : foItem.getParamList()) {
                    paramStr += poItem.getType() + AKI_COMMA + AKI_BLANK_SPACE;
                }
                paramStr = StringUtils.removeLastCharacter(paramStr, 2);
                classConstructDeclare += AKI_CONSTRUCTOR_DECLARE.replace(
                        AKI_CONSTRUCTOR_PARAMS, paramStr);
            } else {
                classFunctionDeclare += AKI_METHOD_DECLARE.replace(AKI_METHOD_NAME, foItem.getName());
            }
        }

        String classPFunctionDeclare = "";
        classDeclare = classDeclare.replace(AKI_METHOD_EXPRESSION, classFunctionDeclare);
        classDeclare = classDeclare.replace(AKI_CONSTRUCTOR_EXPRESSION, classConstructDeclare);
        classDeclare = classDeclare.replace(AKI_PMETHOD_EXPRESSION, classPFunctionDeclare);

        return classDeclare;
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
            resContent += genCppClassContent(co);
            resContent += genAkiCppClassContent(co);
        }
        this.classContent = resContent;
    };

    private String genCppFuncContent(FuncObj fo) {
        String funcName = fo.getName();
        funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
        List<String> tempList = fo.getTempList();
        String tempStr = tempList.isEmpty() ? "" : AKI_TEMPLATE_TOKEN + AKI_LEFT_ANGLE_BRACKET;
        for (String teStr : tempList) {
            tempStr += AKI_TYPE_NAME_TOKEN + AKI_BLANK_SPACE + teStr + AKI_COMMA + AKI_BLANK_SPACE;
        }
        tempStr = tempList.isEmpty() ? "" :
                StringUtils.removeLastCharacter(tempStr, 2) + AKI_RIGHT_ANGLE_BRACKET + AKI_BLANK_SPACE;
        List<ParamObj> paList = fo.getParamList();
        String retValue = ts2CppKey(fo.getRetValue()).isEmpty() ?
                "" : ts2CppKey(fo.getRetValue()) + AKI_BLANK_SPACE;
        String resContent = "";
        resContent += AKI_NEW_LINE + tempStr + retValue +
                replaceTsToken(funcName) + AKI_LEFT_PARENTHESES;

        for (ParamObj poItem : paList) {
            String rawType = poItem.getType();
            String paType = "";
            System.out.println("rawType: " + rawType);
            if (rawType != null && rawType.contains(AKI_ARROW_TOKEN)) {
                FuncObj cbFoItem = poItem.getFoList().get(0);
                String cbFoRetVal = cbFoItem.getRetValue();
                List<ParamObj> pal = cbFoItem.getParamList();
                String cbFoParams = "";
                for (ParamObj cbFunPa : pal) {
                    cbFoParams += ts2CppKey(cbFunPa.getType()).isEmpty() ? AKI_AUTO_TOKEN : ts2CppKey(rawType);
                    cbFoParams += AKI_COMMA + AKI_BLANK_SPACE;
                }
                cbFoParams = StringUtils.removeLastCharacter(cbFoParams, 2);
                paType = AKI_CALLBACK_DECLARE.replace(AKI_RET_EXPRESS, cbFoRetVal);
                paType = paType.replace(AKI_ARGUMENT_EXPRESS, cbFoParams);
            } else {
                paType = ts2CppKey(rawType).isEmpty() ?
                        AKI_AUTO_TOKEN + AKI_BLANK_SPACE : ts2CppKey(rawType) + AKI_BLANK_SPACE;
            }

            String paName = poItem.getName();
            String defaultVal = poItem.getStrValue(0);
            defaultVal = defaultVal.isEmpty() ? "" : AKI_EQUAL + defaultVal;
            resContent += !paName.isEmpty() ? paType + replaceTsToken(paName) +
                    defaultVal + AKI_COMMA + AKI_BLANK_SPACE :
                    paType + AKI_COMMA + AKI_BLANK_SPACE;
        }
        if (!paList.isEmpty()) {
            resContent = StringUtils.removeLastCharacter(resContent, 2);
        }
        resContent += AKI_RIGHT_PARENTHESES + AKI_SEMICOLON + AKI_NEW_LINE;
        return resContent;
    }

    private String genAkiCppFuncContent(List<FuncObj> fol) {
        String resContent = "";

        String funcItemDeclare = "";
        for (FuncObj fo : fol) {
            String funcName = fo.getName();
            funcName = !funcName.isEmpty() ? funcName : fo.getAlias();
            funcItemDeclare += AKI_FUNCTION_ITEM_DECLARE.replace(AKI_FUNCTION_NAME, funcName);
        }
        String funcDeclare = AKI_FUNCTION_DECLARE.replace(AKI_FUNCTION_EXPRESSION, funcItemDeclare);
        resContent += funcDeclare;
        return resContent;
    }

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
            resContent += genCppFuncContent(fo);
        }
        resContent += genAkiCppFuncContent(fol);
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
                    AKI_TEMPLATE_TOKEN + AKI_BLANK_SPACE + AKI_LEFT_ANGLE_BRACKET : "";
            for (String teStr : so.getTemplateList()) {
                templateStr += AKI_TYPE_NAME_TOKEN + AKI_BLANK_SPACE + teStr + AKI_COMMA + AKI_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + AKI_RIGHT_ANGLE_BRACKET + AKI_BLANK_SPACE : "";

            List<ParamObj> paList = so.getMemberList();
            resContent += AKI_NEW_LINE + templateStr + AKI_STRUCT_TOKEN +
                    AKI_BLANK_SPACE + structName + AKI_BLANK_SPACE + AKI_LEFT_BRACE;

            for (ParamObj paItem : paList) {
                String paType = paItem.getType().isEmpty() ? AKI_AUTO_TOKEN : paItem.getType();
                resContent += AKI_NEW_LINE + AKI_TAB_SPACE + ts2CppKey(paType) +
                        AKI_BLANK_SPACE + paItem.getName();
                        ;
                List<String> initVList = paItem.getvList();
                if (initVList.size() > 0) {
                    resContent += AKI_EQUAL + initVList.get(0) + AKI_SEMICOLON;
                } else {
                    resContent += AKI_SEMICOLON;
                }
            }

            List<FuncObj> funcList = so.getFuncList();
            for (FuncObj funcItem : funcList) {
                String retValue = ts2CppKey(funcItem.getRetValue()).isEmpty() ? "" :
                    ts2CppKey(funcItem.getRetValue()) + AKI_BLANK_SPACE;
                resContent += AKI_NEW_LINE + AKI_TAB_SPACE + retValue +
                    replaceTsToken(funcItem.getName()) + AKI_LEFT_PARENTHESES;
                List<ParamObj> pol = funcItem.getParamList();
                for (ParamObj poItem : pol) {
                    String retType = ts2CppKey(poItem.getType()).isEmpty() ?
                            AKI_AUTO_TOKEN : ts2CppKey(poItem.getType());
                    resContent += retType + AKI_BLANK_SPACE + replaceTsToken(poItem.getName()) +
                            AKI_COMMA + AKI_BLANK_SPACE;
                }
                resContent = !pol.isEmpty() ? StringUtils.removeLastCharacter(resContent, 2) : resContent;
                resContent += AKI_RIGHT_PARENTHESES + AKI_SEMICOLON;
            }

            resContent = StringUtils.removeLastSpace(resContent);
            resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;
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
                    AKI_TEMPLATE_TOKEN + AKI_BLANK_SPACE + AKI_LEFT_ANGLE_BRACKET : "";
            for (String teStr : uo.getTemplateList()) {
                templateStr += AKI_TYPE_NAME_TOKEN + AKI_BLANK_SPACE + teStr + AKI_COMMA + AKI_BLANK_SPACE;
            }
            templateStr = templateStr.length() > 1 ?
                    StringUtils.removeLastCharacter(templateStr, 2) + AKI_RIGHT_ANGLE_BRACKET + AKI_BLANK_SPACE : "";

            resContent += AKI_NEW_LINE + templateStr + AKI_UNION_TOKEN +
                    AKI_BLANK_SPACE + unionName + AKI_LEFT_BRACE;

            List<ParamObj> paList = uo.getMemList();
            for (ParamObj paItem : paList) {
                String paType = paItem.getType();
                String paName = paItem.getName();
                resContent += AKI_NEW_LINE + AKI_TAB_SPACE + ts2CppKey(paType)
                        + AKI_BLANK_SPACE + paName + AKI_SEMICOLON;
            }
            resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE;
            resContent += AKI_SEMICOLON + AKI_NEW_LINE;
        }
        this.unionContent = resContent;
    };

    private String genVarArrayList(String tmpContent, String paName, List<ParamObj> paList) {
        String resContent = tmpContent;
        resContent += AKI_NEW_LINE + AKI_STRUCT_TOKEN + AKI_BLANK_SPACE + paName +
                AKI_STRUCT_SUFFIX + AKI_BLANK_SPACE + AKI_LEFT_BRACE;
        List<ParamObj> paramList = paList.get(0).getPaList();
        for (ParamObj paItem : paramList) {
            String paStr = paItem.getName();
            String paVal = paItem.getStrValue(0);
            String typeStr = StringUtils.isAllDigits(paVal) ?
                    AKI_NUMBER_TOKEN : AKI_STD_STRING;
            typeStr = StringUtils.isBoolean(paVal) ? AKI_BOOLEAN_TOKEN : typeStr;
            resContent += AKI_NEW_LINE + AKI_TAB_SPACE + typeStr + AKI_BLANK_SPACE + paStr + AKI_SEMICOLON;
        }
        resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;

        resContent += AKI_NEW_LINE + AKI_CONST_TOKEN + AKI_BLANK_SPACE + AKI_STD_VECTOR +
                AKI_LEFT_ANGLE_BRACKET + paName + AKI_STRUCT_SUFFIX + AKI_RIGHT_ANGLE_BRACKET +
                AKI_BLANK_SPACE + paName + AKI_EQUAL + AKI_LEFT_BRACE;
        for (ParamObj paramListItem : paList) {
            List<ParamObj> subParamList = paramListItem.getPaList();
            resContent += AKI_NEW_LINE + AKI_TAB_SPACE + AKI_LEFT_BRACE;
            for (ParamObj paItem : subParamList) {
                String paVal = paItem.getStrValue(0);
                resContent += paVal + AKI_COMMA + AKI_BLANK_SPACE;
            }
            resContent = StringUtils.removeLastCharacter(resContent, 2);
            resContent += AKI_RIGHT_BRACE + AKI_COMMA;
        }
        resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;
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
            String paType = ts2CppKey(po.getType()).isEmpty() ? AKI_AUTO_TOKEN : ts2CppKey(po.getType());
            String paValue = po.getStrValue(0);
            List<ParamObj> paList = po.getPaList();
            if (paList.isEmpty()) {
                resContent += AKI_NEW_LINE + AKI_EXTENDS_TOKEN + AKI_BLANK_SPACE + AKI_CONST_TOKEN +
                        AKI_BLANK_SPACE + paType + AKI_BLANK_SPACE + paName + AKI_EQUAL + paValue;

                resContent += AKI_SEMICOLON + AKI_NEW_LINE;
            } else if (paList.get(0).getPaList().isEmpty()) {
                String valType = StringUtils.isAllDigits(paList.get(0).getStrValue(0)) ?
                        AKI_NUMBER_TOKEN : AKI_STD_STRING;
                resContent += AKI_NEW_LINE + AKI_EXTENDS_TOKEN + AKI_BLANK_SPACE + AKI_CONST_TOKEN +
                        AKI_BLANK_SPACE + AKI_STD_MAP + AKI_LEFT_ANGLE_BRACKET + AKI_STD_STRING +
                        AKI_COMMA + AKI_BLANK_SPACE + valType + AKI_RIGHT_BRACE + AKI_BLANK_SPACE +
                        paName + AKI_EQUAL + AKI_LEFT_BRACE;
                for (ParamObj paItem : paList) {
                    String pName = paItem.getName();
                    String pVal = paItem.getStrValue(0);
                    resContent += AKI_NEW_LINE + AKI_TAB_SPACE + AKI_LEFT_BRACE + AKI_DOUBLE_QUOTATION +
                            pName + AKI_DOUBLE_QUOTATION + AKI_COMMA + AKI_BLANK_SPACE + pVal +
                            AKI_RIGHT_BRACE + AKI_COMMA;
                }
                resContent = StringUtils.removeLastCharacter(resContent, 1);
                resContent += AKI_NEW_LINE + AKI_RIGHT_BRACE + AKI_SEMICOLON + AKI_NEW_LINE;
            } else if (!(paList.get(0).getPaList().isEmpty())) {
                resContent = genVarArrayList(resContent, paName, paList);
            }

        }
        this.constContent = resContent;
        System.out.println("genVarList : " + resContent);
    }
}
