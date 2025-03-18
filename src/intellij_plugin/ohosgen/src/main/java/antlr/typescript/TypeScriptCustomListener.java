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

package antlr.typescript;

import antlr.ParseBaseListener;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import grammar.*;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.ParserRuleContext;
import utils.Constants;
import utils.TsToken;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript custom visitor
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptCustomListener extends TypeScriptParserBaseListener implements ParseBaseListener {
    private final int currentLanguage = Constants.PARSE_TS_LANGUAGE;
    private String currentToken = "";
    private GBaseObject currentObject;
    private String currentIdentifier = "";
    private List<EnumObj> enumObjList;
    private List<ClassObj> classObjList;
    private List<FuncObj> funcObjList;
    private List<StructObj> structObjList;
    private List<TypeObj> typeObjList;
    private List<UnionObj> unionObjList;
    private List<InterfaceObject> interfaceObjList;

    /**
     * 构造函数
     */
    public TypeScriptCustomListener() {
        enumObjList = new CopyOnWriteArrayList<>();
        classObjList = new CopyOnWriteArrayList<>();
        funcObjList = new CopyOnWriteArrayList<>();
        structObjList = new CopyOnWriteArrayList<>();
        typeObjList = new CopyOnWriteArrayList<>();
        unionObjList = new CopyOnWriteArrayList<>();
        interfaceObjList = new CopyOnWriteArrayList<>();
    }

    /**
     * 获取语言
     *
     * @return 语言
     */
    public int getCurrentLanguage() {
        return currentLanguage;
    }

    /**
     * 设置当前关键字
     *
     * @param currentToken 关键字
     */
    public void setCurrentToken(String currentToken) {
        this.currentToken = currentToken;
    }

    /**
     * 获取关键字
     *
     * @return 关键字
     */
    public String getCurrentToken() {
        return currentToken;
    }

    /**
     * 获取当前解析对象
     *
     * @return 解析对象
     */
    public GBaseObject getCurrentObject() {
        return currentObject;
    }

    /**
     * 设置当前解析对象
     *
     * @param currentObject 当前解析对象
     */
    public void setCurrentObject(GBaseObject currentObject) {
        this.currentObject = currentObject;
    }

    /**
     * 获取类对象
     *
     * @return 对象
     */
    public List<ClassObj> getClassObjList() {
        return classObjList;
    }

    /**
     * 设置类对象
     *
     * @param classObjList 类对象
     */
    public void setClassObjList(List<ClassObj> classObjList) {
        this.classObjList = classObjList;
    }

    /**
     * 获取枚举对象
     *
     * @return 枚举对象
     */
    public List<EnumObj> getEnumObjList() {
        return enumObjList;
    }

    /**
     * 枚举
     *
     * @param enumObjList 枚举
     */
    public void setEnumObjList(List<EnumObj> enumObjList) {
        this.enumObjList = enumObjList;
    }

    /**
     * 获取方法
     *
     * @return 方法
     */
    public List<FuncObj> getFuncObjList() {
        return funcObjList;
    }

    /**
     * 设置方法
     *
     * @param funcObjList 方法
     */
    public void setFuncObjList(List<FuncObj> funcObjList) {
        this.funcObjList = funcObjList;
    }

    /**
     * 获取结构体
     *
     * @return 结构体
     */
    public List<StructObj> getStructObjList() {
        return structObjList;
    }

    /**
     * 设置结构体
     *
     * @param structObjList 结构体
     */
    public void setStructObjList(List<StructObj> structObjList) {
        this.structObjList = structObjList;
    }

    /**
     * 获取接口
     *
     * @return 接口
     */
    public List<InterfaceObject> getInterfaceObjList() {
        return interfaceObjList;
    }

    /**
     * 设置接口
     *
     * @param interfaceObjList 接口
     */
    public void setInterfaceObjList(List<InterfaceObject> interfaceObjList) {
        this.interfaceObjList = interfaceObjList;
    }

    /**
     * 获取type
     *
     * @return type
     */
    public List<TypeObj> getTypeObjList() {
        return typeObjList;
    }

    /**
     * 设置 type
     *
     * @param typeObjList type
     */
    public void setTypeObjList(List<TypeObj> typeObjList) {
        this.typeObjList = typeObjList;
    }

    /**
     * 获取联合
     *
     * @return 联合
     */
    public List<UnionObj> getUnionObjList() {
        return unionObjList;
    }

    /**
     * 设置联合
     *
     * @param unionObjList 联合数组
     */
    public void setUnionObjList(List<UnionObj> unionObjList) {
        this.unionObjList = unionObjList;
    }

    @Override
    public void enterFunctionType(TypeScriptParser.FunctionTypeContext ctx) {
        super.enterFunctionType(ctx);
        System.out.println("enterFunctionType: " + ctx.getText());
    }

    @Override
    public void enterFunctionBody(TypeScriptParser.FunctionBodyContext ctx) {
        super.enterFunctionBody(ctx);
        System.out.println("enterFunctionBody: " + ctx.getText());
    }

    @Override
    public void enterUnion(TypeScriptParser.UnionContext ctx) {
        super.enterUnion(ctx);
        System.out.println("enterUnion: " + ctx.getText());
    }

    @Override
    public void enterTypeAnnotation(TypeScriptParser.TypeAnnotationContext ctx) {
        super.enterTypeAnnotation(ctx);
        System.out.println("enterTypeAnnotation: " + ctx.getText());
    }

    @Override
    public void enterPropertyName(TypeScriptParser.PropertyNameContext ctx) {
        super.enterPropertyName(ctx);
        System.out.println("enterPropertyName: " + ctx.getText());
    }

    @Override
    public void enterAnonymousFunction(TypeScriptParser.AnonymousFunctionContext ctx) {
        super.enterAnonymousFunction(ctx);
        System.out.println("enterAnonymousFunction: " + ctx.getText());
    }

    @Override
    public void enterIdentifier(TypeScriptParser.IdentifierContext ctx) {
        super.enterIdentifier(ctx);
        System.out.println("enterIdentifier: " + ctx.getText());
        this.currentIdentifier = ctx.getText();
    }

    @Override
    public void enterIdentifierExpression(TypeScriptParser.IdentifierExpressionContext ctx) {
        super.enterIdentifierExpression(ctx);
        System.out.println("enterIdentifierExpression: " + ctx.getText());
    }

    @Override
    public void enterIdentifierName(TypeScriptParser.IdentifierNameContext ctx) {
        super.enterIdentifierName(ctx);
        System.out.println("enterIdentifierName: " + ctx.getText());
    }

    @Override
    public void enterVariableStatement(TypeScriptParser.VariableStatementContext ctx) {
        super.enterVariableStatement(ctx);
        System.out.println("enterVariableStatement: " + ctx.getText());
    }

    @Override
    public void enterFormalParameterList(TypeScriptParser.FormalParameterListContext ctx) {
        super.enterFormalParameterList(ctx);
        System.out.println("enterParameterList: " + ctx.getText());
        if (this.currentObject instanceof FuncObj fo) {
            if (!fo.getParamList().isEmpty()) {
                return;
            }
            TypeScriptParser.FormalParameterListContext fpl = ctx.formalParameterList();
            List<TypeScriptParser.FormalParameterArgContext> fpacl = ctx.formalParameterArg();
            for (TypeScriptParser.FormalParameterArgContext fpac : fpacl) {
                String name = fpac.assignable().getText();
                String type = fpac.typeAnnotation().type_().getText();
                ParamObj po = new ParamObj();
                po.setName(name);
                po.setType(type);
                fo.addParam(po);
            }
        }
    }

    @Override
    public void enterParameterList(TypeScriptParser.ParameterListContext ctx) {
        super.enterParameterList(ctx);
        System.out.println("enterParameterList: " + ctx.getText());
        if (this.currentObject instanceof FuncObj fo) {
            List<TypeScriptParser.ParameterContext> pcl = ctx.parameter();
            int cnt = pcl.size();
            for (int i = 0; i < cnt; i++) {
                TypeScriptParser.ParameterContext pcItem = pcl.get(i);

            }
        }
    }

    @Override
    public void enterVariableDeclaration(TypeScriptParser.VariableDeclarationContext ctx) {
        String varName = ctx.identifierOrKeyWord().getText();
        System.out.println("变量名: " + varName);
        System.out.println("var : " + ctx.getText());
        String typeAnno = ctx.typeAnnotation() != null ? ctx.typeAnnotation().stop.getText() : "";
        System.out.println("type : " + typeAnno);
        if (varName.equals(TsToken.TS_TOKEN_TYPE)) {
            TypeObj to = new TypeObj();
            List<TypeScriptParser.SingleExpressionContext> secList = ctx.singleExpression();
            for (TypeScriptParser.SingleExpressionContext sec : secList) {
                String value = sec.getText();
                System.out.println("single : " + value);
                int cnt = sec.getChildCount();
                System.out.println("single child cnt: " + cnt);
                if (cnt == 3) {
                    ParseTree pt = sec.getChild(0);
                    to.setName(pt.getText());

                    ParseTree pt2 = sec.getChild(2);
                    to.addTypeValue(pt2.getText());
                }
                for (int i = 0; i < cnt; i++) {
                    ParseTree pt = sec.getChild(i);
                    System.out.println("single child pt: " + pt.getText());
                }
            }
            this.typeObjList.add(to);
            System.out.println("type: " + to.toJsonString());

        } else if (varName.equals(TsToken.TS_TOKEN_ABSTRACT)) {
            int cnt = ctx.children.size();
            for (int i = 0; i < cnt; i++) {
                ParseTree item = ctx.children.get(i);
                System.out.println("item: " + item.getText());
            }
        } else if (ctx.singleExpression() != null) {
            List<TypeScriptParser.SingleExpressionContext> sel = ctx.singleExpression();
            for (TypeScriptParser.SingleExpressionContext sec : sel) {
                String varType = sec.start.getText();
                if (varType.equals(TsToken.TS_TOKEN_FUNCTION)) {
                    this.currentIdentifier = varName;
                    FuncObj fo = new FuncObj();
                    fo.setAlias(varName);
                    this.currentObject = fo;
                    this.funcObjList.add(fo);
                    break;
                } else if ((sec instanceof TypeScriptParser.FunctionExpressionContext fec) && fec.anonymousFunction() != null) {
                    TypeScriptParser.AnonymousFunctionContext afc = fec.anonymousFunction();
                    TypeScriptParser.ArrowFunctionDeclarationContext afdc = afc.arrowFunctionDeclaration();
                    FuncObj fo = new FuncObj();
                    fo.setAlias(varName);
                    this.currentObject = fo;
                    this.funcObjList.add(fo);
                    if (afdc.arrowFunctionParameters().formalParameterList() != null) {
                        List<TypeScriptParser.FormalParameterArgContext> fpacl =
                                afdc.arrowFunctionParameters().formalParameterList().formalParameterArg();

                        for (TypeScriptParser.FormalParameterArgContext fpac : fpacl) {
                            String name = fpac.assignable().getText();
                            String type = fpac.typeAnnotation().type_().getText();
                            fo.addParam(name, type);
                            System.out.println("addparam: " + fo.toJsonString());
                        }
                    }

                } else if (sec instanceof TypeScriptParser.ParenthesizedExpressionContext pec) {
                    FuncObj fo = new FuncObj();
                    fo.setAlias(varName);
                    this.currentObject = fo;
                    this.funcObjList.add(fo);
                    List<TypeScriptParser.SingleExpressionContext> secl = pec.expressionSequence().singleExpression();

                    for (TypeScriptParser.SingleExpressionContext secItem : secl) {
                        String name = secItem.getText();
                        fo.addParam(name, "");
                    }
                }
            }
        }
        System.out.println("------------------------------");
    }

    @Override
    public void enterExpressionStatement(TypeScriptParser.ExpressionStatementContext ctx) {
        super.enterExpressionStatement(ctx);
        System.out.println("enterExpressionStatement: " + ctx.getText());
    }

    @Override
    public void enterIdentifierOrPattern(TypeScriptParser.IdentifierOrPatternContext ctx) {
        super.enterIdentifierOrPattern(ctx);
    }

    @Override
    public void enterObjectLiteralExpression(TypeScriptParser.ObjectLiteralExpressionContext ctx) {
        super.enterObjectLiteralExpression(ctx);
        ParserRuleContext prc = ctx.getParent();
        ParserRuleContext fprc = prc.getParent();
        String tokenStr = fprc.getStart().getText();
        if (tokenStr.equals(TsToken.TS_TOKEN_ENUM)) {
            EnumObj eo = new EnumObj();
            eo.setName(ctx.getParent().getStart().getText());
            this.currentToken = TsToken.TS_TOKEN_ENUM;
            this.currentObject = eo;
            this.enumObjList.add(eo);
        }

    }

    @Override
    public void enterLiteralExpression(TypeScriptParser.LiteralExpressionContext ctx) {
        super.enterLiteralExpression(ctx);

        String memName = ctx.getParent().getStart().getText();
        String memValue = ctx.getParent().getStop().getText();
        if (this.currentToken.equals(TsToken.TS_TOKEN_ENUM)) {
            if (this.currentObject instanceof EnumObj) {
                EnumObj eo = (EnumObj) this.currentObject;
                eo.addMemberItem(memName);
                eo.addMemberValue(memValue);
                int lastIndex = this.enumObjList.size() - 1;
                this.enumObjList.set(lastIndex, eo);
                System.out.println("enum: " + eo.toJsonString());
            }
        }

    }

    @Override
    public void enterExpressionSequence(TypeScriptParser.ExpressionSequenceContext ctx) {
        super.enterExpressionSequence(ctx);

    }

    @Override
    public void enterConstructorDeclaration(TypeScriptParser.ConstructorDeclarationContext ctx) {
        // 提取构造函数参数列表
        String res = ctx.formalParameterList().getText();
        System.out.println("Construct: " + res);
        TypeScriptParser.FormalParameterListContext fplc = ctx.formalParameterList();
        if (fplc == null || !(this.currentObject instanceof ClassObj co)) {
            return;
        }

        int cnt = fplc.getChildCount();
        FuncObj fo = new FuncObj();
        fo.setName("constructor");
        fo.setRetValue("void");
        co.addFunc(fo);
        for (int i = 0; i < cnt; i++) {
            ParseTree pt = fplc.getChild(i);
            if (!(pt instanceof TypeScriptParser.FormalParameterArgContext fpac)) {
                continue;
            }

            String type = "";
            if (fpac.typeAnnotation() != null && fpac.typeAnnotation().stop != null) {
                type = fpac.typeAnnotation().stop.getText();
            }

            String name = "";
            if (fpac.assignable() != null) {
                name = fpac.assignable().getText();
            }

            if (type.isEmpty()) {
                type = name;
            }
            fo.addParam(name, type);
        }

    }

    @Override
    public void enterMethodProperty(TypeScriptParser.MethodPropertyContext ctx) {
        super.enterMethodProperty(ctx);
        String res = ctx.toString();
        System.out.println("Method: " + res);
    }

    @Override
    public void enterFunctionDeclaration(TypeScriptParser.FunctionDeclarationContext ctx) {
        super.enterFunctionDeclaration(ctx);
        // 提取函数名、参数等信息
        String funcName = ctx.identifier().getText();
        System.out.println("Function: " + funcName + " all: " + ctx.getText());

        String callSign = ctx.callSignature().getText();
        System.out.println("Function callSign: " + callSign);
        String typeAnno = TsToken.TS_TOKEN_VOID;
        if (ctx.callSignature().typeAnnotation() != null) {
            TypeScriptParser.Type_Context tc = ctx.callSignature().typeAnnotation().type_();
            typeAnno = tc.getText();
            int typeCnt = tc.unionOrIntersectionOrPrimaryType().getChildCount();
            for (int j = 0; j < typeCnt; j++) {
                int rotCnt = tc.unionOrIntersectionOrPrimaryType().getChild(j).getChildCount();
                for (int k = 0; k < rotCnt; k++) {
                    String typeStr = tc.unionOrIntersectionOrPrimaryType().getChild(j).getChild(k).getText();
                    if (typeStr.equals(TsToken.TS_TOKEN_IS)) {
                        typeAnno = TsToken.TS_TOKEN_BOOLEAN;
                        break;
                    }
                }
            }

        }
        System.out.println("Function typeAnno: " + typeAnno);
        FuncObj fo = new FuncObj();
        fo.setName(funcName);
        fo.setRetValue(typeAnno);
        if (ctx.callSignature().parameterList() != null) {
            TypeScriptParser.ParameterListContext plc = ctx.callSignature().parameterList();
            List<TypeScriptParser.ParameterContext> plcl = plc.parameter();
            for (TypeScriptParser.ParameterContext pc : plcl) {
                System.out.println("Function param: " + pc.getText());
                TypeScriptParser.OptionalParameterContext opc = pc.optionalParameter();
                if (opc != null) {
                    String type = opc.typeAnnotation().type_().getText();
                    String name = opc.identifierOrPattern().getText();
                    System.out.println("OptionalParameter type: " + type + " name: " + name);
                    fo.addParam(name, type, TsToken.TS_TOKEN_OPTIONAL);
                }
                TypeScriptParser.RequiredParameterContext rpc = pc.requiredParameter();
                if (rpc != null) {
                    String type = rpc.typeAnnotation().type_().getText();
                    String name = rpc.identifierOrPattern().getText();
                    System.out.println("RequiredParameter type: " + type + " name: " + name);
                    fo.addParam(name, type, TsToken.TS_TOKEN_REQUIRED);
                }
            }
            if (plc.restParameter() != null) {
                String name = plc.restParameter().singleExpression().getText();
                String type = plc.restParameter().typeAnnotation().type_().getText();
                fo.addParam(name, type, TsToken.TS_TOKEN_REST_PARAM);
            }
        }
        System.out.println("--------------------" + fo.toJsonString());
        this.funcObjList.add(fo);
    }

    @Override
    public void enterClassDeclaration(TypeScriptParser.ClassDeclarationContext ctx) {
        super.enterClassDeclaration(ctx);
        // 提取类名、方法、属性等信息
        String className = ctx.identifier().getText();
        System.out.println("Class: " + className);

        ClassObj co = new ClassObj();
        co.setName(className);
        this.currentObject = co;
        this.currentToken = TsToken.TS_TOKEN_CLASS;
        this.classObjList.add(co);

        // 获取修饰符（如public/abstract）
        TypeScriptParser.DecoratorListContext dlc = ctx.decoratorList();
        if (dlc != null) {
            System.out.println("Class decoratorList: " + dlc.getText());
        }
        // 处理继承关系（extends/implements）
        TypeScriptParser.ClassHeritageContext heritage = ctx.classHeritage();
        System.out.println("Class heritage: " + heritage.getText());
    }

    @Override
    public void enterCallSignature(TypeScriptParser.CallSignatureContext ctx) {
        super.enterCallSignature(ctx);
        System.out.println("enterCallSignature: " + ctx.getText());
        if (this.currentToken.equals(TsToken.TS_TOKEN_CLASS) &&
                (this.currentObject instanceof ClassObj co)) {
            if (findFunction(co)) {
                return;
            }
            String typeName = ctx.typeAnnotation().stop.getText();
            FuncObj fo = new FuncObj();
            fo.setRetValue(typeName);
            fo.setName(this.currentIdentifier);
            TypeScriptParser.ParameterListContext plc = ctx.parameterList();
            int childCnt = plc.getChildCount();
            for (int i = 0; i < childCnt; i++) {
                ParseTree pt = plc.getChild(i);
                if (pt instanceof TypeScriptParser.ParameterContext pc) {
                    String paramName = pc.start.getText();
                    String paramType = pc.stop.getText();
                    fo.addParam(paramName, paramType);
                }
            }
            co.addFunc(fo);
        }

    }

    @Override
    public void enterTypeName(TypeScriptParser.TypeNameContext ctx) {
        super.enterTypeName(ctx);
        System.out.println("enterTypeName: " + ctx.getText());
    }

    @Override
    public void enterClassElementName(TypeScriptParser.ClassElementNameContext ctx) {
        super.enterClassElementName(ctx);
        System.out.println("enterClassElementName: " + ctx.getText());
    }

    @Override
    public void enterClassOrInterfaceTypeList(TypeScriptParser.ClassOrInterfaceTypeListContext ctx) {
        super.enterClassOrInterfaceTypeList(ctx);
        System.out.println("enterClassOrInterfaceTypeList: " + ctx.getText());
    }

    @Override
    public void enterDeclaration(TypeScriptParser.DeclarationContext ctx) {
        super.enterDeclaration(ctx);
        System.out.println("enterDeclaration: " + ctx.getText());
    }

    @Override
    public void enterClassExpression(TypeScriptParser.ClassExpressionContext ctx) {
        super.enterClassExpression(ctx);
        System.out.println("enterClassExpression: " + ctx.getText());

        int childCnt = ctx.getChildCount();
        if (childCnt > 2) {

            ParseTree pt = ctx.getChild(1);
            if (pt instanceof TypeScriptParser.IdentifierContext ic) {
                ClassObj obj = new ClassObj();
                obj.setName(ic.start.getText());
                this.currentToken = TsToken.TS_TOKEN_CLASS;
                this.currentObject = obj;
                this.classObjList.add(obj);
            }
        }
    }

    @Override
    public void enterClassElement(TypeScriptParser.ClassElementContext ctx) {
        super.enterClassElement(ctx);
        System.out.println("Class element: " + ctx.getText());

        TypeScriptParser.StatementContext sc = ctx.statement();
        if (sc != null) {
            System.out.println("Class state: " + sc.getText());
        }

        TypeScriptParser.PropertyMemberDeclarationContext pmdc = ctx.propertyMemberDeclaration();
        if (pmdc instanceof TypeScriptParser.GetterSetterDeclarationExpressionContext gsdec) {
            System.out.println("Class property: " + pmdc.getText());
            setFuncAccessor(gsdec);
        }
    }

    @Override
    public void enterMethodDeclarationExpression(TypeScriptParser.MethodDeclarationExpressionContext ctx) {
        super.enterMethodDeclarationExpression(ctx);
        System.out.println("Method property: " + ctx.getText());
        String propertyName = ctx.propertyName().getText();
        System.out.println("Method name: " + propertyName);
        String callSign = ctx.callSignature().getText();
        System.out.println("Method callSign: " + callSign);
        String typeAnno = "";
        TypeScriptParser.TypeAnnotationContext tac = ctx.callSignature().typeAnnotation();
        if (tac != null && tac.type_() != null) {
            typeAnno = tac.type_().getText();
        }

        System.out.println("Method typeAnno: " + typeAnno);
        TypeScriptParser.ParameterListContext plc = ctx.callSignature().parameterList();

        FuncObj fo = new FuncObj();
        fo.setRetValue(typeAnno);
        fo.setName(propertyName);
        if (ctx.propertyMemberBase() != null && ctx.propertyMemberBase().Async() != null) {
            fo.setType(ctx.propertyMemberBase().Async().getText());
        }

        if (ctx.propertyMemberBase() != null && ctx.propertyMemberBase().accessibilityModifier() != null) {
            fo.setAccessor(ctx.propertyMemberBase().accessibilityModifier().getText());
        }

        if (plc != null) {
            List<TypeScriptParser.ParameterContext> plcList = ctx.callSignature().parameterList().parameter();
            for (TypeScriptParser.ParameterContext pc : plcList) {
                System.out.println("Method param: " + pc.getText());
                TypeScriptParser. RequiredParameterContext rpc = pc.requiredParameter();
                String ta = "";
                if (rpc.typeAnnotation() != null && rpc.typeAnnotation().type_() != null) {
                    ta = rpc.typeAnnotation().type_().getText();
                }
                String iop = "";
                if (rpc.identifierOrPattern() != null) {
                    iop = rpc.identifierOrPattern().getText();
                }
                System.out.println("Method type: " + ta + " name: " + iop);
                fo.addParam(iop, ta);
            }
        }

        if ((this.currentObject != null) && (this.currentObject instanceof ClassObj)) {
            ClassObj co = (ClassObj) this.currentObject;
            co.addFunc(fo);

            int lastIndex = this.classObjList.size() - 1;
            this.classObjList.set(lastIndex, co);
            System.out.println("class: " + co.toJsonString());
        }

        int cnt = ctx.getChildCount();
        System.out.println("Method param cnt: " + cnt);
    }

    @Override
    public void enterFunctionExpression(TypeScriptParser.FunctionExpressionContext ctx) {
        super.enterFunctionExpression(ctx);
        System.out.println("enterFunctionExpression: " + ctx.getText());
    }

    @Override
    public void enterGeneratorsFunctionExpression(TypeScriptParser.GeneratorsFunctionExpressionContext ctx) {
        super.enterGeneratorsFunctionExpression(ctx);
        System.out.println("enterGeneratorsFunctionExpression: " + ctx.getText());
    }

    @Override
    public void enterArrowFunctionDeclaration(TypeScriptParser.ArrowFunctionDeclarationContext ctx) {
        super.enterArrowFunctionDeclaration(ctx);
        System.out.println("enterArrowFunctionDeclaration: " + ctx.getText());
    }

    @Override
    public void enterArgument(TypeScriptParser.ArgumentContext ctx) {
        super.enterArgument(ctx);
        System.out.println("enterArgument: " + ctx.getText());
    }

    @Override
    public void enterPropertyDeclarationExpression(TypeScriptParser.PropertyDeclarationExpressionContext ctx) {
        super.enterPropertyDeclarationExpression(ctx);

        System.out.println("Property property: " + ctx.getText());
        String propertyName = ctx.propertyName().getText();
        String typeName = ctx.typeAnnotation().stop.getText();
        String qualifier = ctx.start.getText();
        System.out.println("Property name: " + propertyName + " type: " + typeName);
        if (this.currentObject instanceof ClassObj co) {
            co.addParam(propertyName, typeName, qualifier);

            int lastIndex = this.classObjList.size() - 1;
            this.classObjList.set(lastIndex, co);
            System.out.println("class: " + co.toJsonString());
        }
    }

    @Override
    public void enterTypeAliasDeclaration(TypeScriptParser.TypeAliasDeclarationContext ctx) {
        super.enterTypeAliasDeclaration(ctx);
        String typeName = ctx.identifier().getText();
        System.out.println("Type: " + typeName);
        TypeScriptParser.TypeParametersContext tpc = ctx.typeParameters();
        if (tpc != null) {
            System.out.println("Type params: " + tpc.getText());
        }
        TypeScriptParser.Type_Context typeContext = ctx.type_();
        if (typeContext != null) {
            System.out.println("Type type_: " + typeContext.getText());

            TypeScriptParser.UnionOrIntersectionOrPrimaryTypeContext upt =
                    typeContext.unionOrIntersectionOrPrimaryType();
            if (upt != null) {
                System.out.println("Type uoiop: " + upt.getText());
            }
            TypeScriptParser.TypeGenericContext tgc = typeContext.typeGeneric();
            if (tgc != null) {
                System.out.println("Type typeGeneric: " + tgc.getText());
            }
            TypeScriptParser.ConstructorTypeContext ctc = typeContext.constructorType();
            if (ctc != null) {
                System.out.println("Type constructorType: " + ctc.getText());
            }
            TypeScriptParser.FunctionTypeContext ftc = typeContext.functionType();
            if (ftc != null) {
                System.out.println("Type functionType: " + ftc.getText());
            }
        }

        System.out.println("-------------------");
    }

    @Override
    public void enterEnumBody(TypeScriptParser.EnumBodyContext ctx) {
        super.enterEnumBody(ctx);
        System.out.println("find Enum Body: ");
        String enumName = ctx.getText();
        System.out.println("Enum: " + enumName);
    }

    @Override
    public void enterEnumMemberList(TypeScriptParser.EnumMemberListContext ctx) {
        super.enterEnumMemberList(ctx);
        List<TypeScriptParser. EnumMemberContext> memList = ctx.enumMember();
        for (TypeScriptParser.EnumMemberContext enumMemberContext : memList) {
            String memName = enumMemberContext.getText();
            System.out.println("Enum mem: " + memName);
        }
    }

    @Override
    public void enterEnumDeclaration(TypeScriptParser.EnumDeclarationContext ctx) {
        super.enterEnumDeclaration(ctx);
        System.out.println("find Enum Declare: ");
        String res = "";
        String enumName = ctx.identifier().getText();
        res += "Enum: " + enumName;
        System.out.println("Enum name: " + res);

        List<TypeScriptParser.EnumMemberContext> members = ctx.enumBody().enumMemberList().enumMember();
        for (TypeScriptParser.EnumMemberContext member : members) {
            res += " , " + member.getText();
        }
        System.out.println("Enum: " + res);
    }

    @Override
    public void enterNamespaceDeclaration(TypeScriptParser.NamespaceDeclarationContext ctx) {
        super.enterNamespaceDeclaration(ctx);
        System.out.println("find namespace Declare: " + ctx.toString());
    }

    @Override
    public void enterArguments(TypeScriptParser.ArgumentsContext ctx) {
        super.enterArguments(ctx);
        System.out.println("enterArguments: " + ctx.toString());
    }

    @Override
    public void enterClassExtendsClause(TypeScriptParser.ClassExtendsClauseContext ctx) {
        super.enterClassExtendsClause(ctx);
        System.out.println("enterClassExtendsClause: " + ctx.getText());
    }

    @Override
    public void enterClassHeritage(TypeScriptParser.ClassHeritageContext ctx) {
        super.enterClassHeritage(ctx);
        System.out.println("enterClassHeritage: " + ctx.getText());
        if (this.currentObject instanceof ClassObj co) {
            co.addHeritage(ctx.start.getText(), ctx.stop.getText());
        }
    }

    @Override
    public void enterEnumMember(TypeScriptParser.EnumMemberContext ctx) {
        super.enterEnumMember(ctx);
        System.out.println("enterEnumMember: " + ctx.getText());
    }

    @Override
    public void enterMethodSignature(TypeScriptParser.MethodSignatureContext ctx) {
        super.enterMethodSignature(ctx);
        System.out.println("enterMethodSignature: " + ctx.getText());
    }

    @Override
    public void enterAbstractMemberDeclaration(TypeScriptParser.AbstractMemberDeclarationContext ctx) {
        super.enterAbstractMemberDeclaration(ctx);
        System.out.println("find abstract member Declare: " + ctx.getText());
        TypeScriptParser.AbstractDeclarationContext adc = ctx.abstractDeclaration();
        TypeScriptParser.VariableStatementContext vsc = adc.variableStatement();
        if (vsc != null) {
            TypeScriptParser.VariableDeclarationListContext vdl = vsc.variableDeclarationList();
            String paramName = vdl.start.getText();
            String paramType = vdl.stop.getText();

            if (this.currentObject instanceof ClassObj co) {
                co.addParam(paramName, paramType);
            }
        }

    }

    @Override
    public void enterInterfaceDeclaration(TypeScriptParser.InterfaceDeclarationContext ctx) {
        super.enterInterfaceDeclaration(ctx);
        System.out.println("find interface Declare: " + ctx.getText());
        String interfaceName = ctx.identifier().getText();
        System.out.println("interface name: " + interfaceName);
        TypeScriptParser.ObjectTypeContext otc = ctx.objectType();
        TypeScriptParser.TypeBodyContext tbc = otc.typeBody();
        TypeScriptParser.TypeMemberListContext tlc = tbc.typeMemberList();
        List<TypeScriptParser.TypeMemberContext> tmcList = tlc.typeMember();
        InterfaceObject io = new InterfaceObject();
        io.setName(interfaceName);

        for (TypeScriptParser.TypeMemberContext tmc : tmcList) {
            if (tmc.callSignature() == null) {
                io.addParam(tmc.start.getText(), tmc.stop.getText());
                continue;
            }
            String callSign = tmc.callSignature().getText();
            System.out.println("interface callSign: " + callSign);
            String typeAnno = tmc.callSignature().typeAnnotation().stop.getText();
            System.out.println("interface typeAnno: " + typeAnno);
            FuncObj fo = new FuncObj();
            fo.setName("");
            fo.setRetValue(typeAnno);
            List<TypeScriptParser.ParameterContext> plc = tmc.callSignature().parameterList().parameter();
            for (TypeScriptParser.ParameterContext pc : plc) {
                System.out.println("interface param: " + pc.getText());
                TypeScriptParser. RequiredParameterContext rpc = pc.requiredParameter();
                String ta = rpc.typeAnnotation().stop.getText();
                String iop = rpc.identifierOrPattern().getText();
                System.out.println("interface type: " + ta + " name: " + iop);
                fo.addParam(iop, ta);
            }
            io.addFunc(fo);
        }
        this.interfaceObjList.add(io);
        this.currentObject = io;
        this.currentToken = TsToken.TS_TOKEN_INTERFACE;

        System.out.println("----------------" + io.toJsonString());
    }

    @Override
    public void enterAbstractDeclaration(TypeScriptParser.AbstractDeclarationContext ctx) {
        super.enterAbstractDeclaration(ctx);
        System.out.println("find abstract Declare: " + ctx.getText());
    }

    @Override
    public void enterExportDeclaration(TypeScriptParser.ExportDeclarationContext ctx) {
        super.enterExportDeclaration(ctx);
        System.out.println("find export Declare: " + ctx.toString());
    }

    @Override
    public void enterConstraint(TypeScriptParser.ConstraintContext ctx) {
        super.enterConstraint(ctx);
        System.out.println("enter constraint: " + ctx.toString());
    }

    @Override
    public void exitConstraint(TypeScriptParser.ConstraintContext ctx) {
        super.exitConstraint(ctx);
        System.out.println("exit constraint: " + ctx.toString());
    }

    @Override
    public void enterProgram(TypeScriptParser.ProgramContext ctx) {
        super.enterProgram(ctx);
        System.out.println("enter Program: " + ctx.toString());
    }

    @Override
    public void exitProgram(TypeScriptParser.ProgramContext ctx) {
        super.exitProgram(ctx);
        System.out.println("exit Program: " + ctx.toString());
    }

    @Override
    public String dump2JsonStr() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(this);
    }

    private boolean findFunction(ClassObj coItem) {
        List<FuncObj> fol = coItem.getFuncList();
        for (FuncObj foItem : fol) {
            String fName = foItem.getName();
            if (fName.equals(this.currentIdentifier)) {
                return true;
            }
        }
        return false;
    }

    private void setFuncAccessor(TypeScriptParser.GetterSetterDeclarationExpressionContext gsdec) {
        if (gsdec.getAccessor() != null && gsdec.getAccessor().getter() != null) {
            String type = gsdec.getAccessor().getter().identifier().getText();
            String name = gsdec.getAccessor().getter().classElementName().getText();
            FuncObj fo = new FuncObj();
            fo.setName(name);
            fo.setType(type);
            if (this.currentObject instanceof ClassObj co) {
                co.addFunc(fo);
            }
        } else if (gsdec.setAccessor() != null) {
            String type = gsdec.setAccessor().setter().identifier().getText();
            String name = gsdec.setAccessor().setter().classElementName().getText();
            gsdec.setAccessor().setter();
            FuncObj fo = new FuncObj();
            fo.setName(name);
            fo.setType(type);
            TypeScriptParser.FormalParameterListContext fplc = gsdec.setAccessor().formalParameterList();

            if (fplc == null || !(this.currentObject instanceof ClassObj co)) {
                return;
            }

            int cnt = fplc.getChildCount();
            for (int i = 0; i < cnt; i++) {
                ParseTree pt = fplc.getChild(i);
                if (!(pt instanceof TypeScriptParser.FormalParameterArgContext fpac)) {
                    continue;
                }

                String fType = "";
                if (fpac.typeAnnotation() != null && fpac.typeAnnotation().stop != null) {
                    fType = fpac.typeAnnotation().stop.getText();
                }

                String fName = "";
                if (fpac.assignable() != null) {
                    fName = fpac.assignable().getText();
                }

                if (type.isEmpty()) {
                    fType = fName;
                }
                fo.addParam(fName, fType);
            }

            co.addFunc(fo);
        }
    }
}
