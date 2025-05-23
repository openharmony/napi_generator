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
    private List<ParamObj> varObjList;

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
        varObjList = new CopyOnWriteArrayList<>();
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

    /**
     * 获取变量列表
     *
     * @return 变量列表
     */
    public List<ParamObj> getVarObjList() {
        return varObjList;
    }

    /**
     * 设置变量列表
     *
     * @param varObjList 变量列表
     */
    public void setVarObjList(List<ParamObj> varObjList) {
        this.varObjList = varObjList;
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

    private void setTypeParam(TypeScriptParser.TypeAnnotationContext ctx, TypeObj to) {
        TypeScriptParser. UnionOrIntersectionOrPrimaryTypeContext uipt =
                ctx.type_().unionOrIntersectionOrPrimaryType();
        int cCnt = uipt.getChildCount();
        ParamObj lastPa = to.getLastParamObj();
        for (int i = 0; i < cCnt; i++) {
            String keyStr = uipt.getChild(i).getText();
            if (!TsToken.isTsToken(keyStr)) {
                lastPa.setStrValue(keyStr);
            } else if (TsToken.isTsVarType(keyStr)) {
                lastPa.setType(keyStr);
            }

        }
    }
    @Override
    public void enterTypeAnnotation(TypeScriptParser.TypeAnnotationContext ctx) {
        super.enterTypeAnnotation(ctx);
        System.out.println("enterTypeAnnotation: " + ctx.getText());
        if (this.currentObject instanceof TypeObj to) {
            if (ctx.type_() != null && ctx.type_().unionOrIntersectionOrPrimaryType() != null) {
                setTypeParam(ctx, to);
            }
        }
    }

    @Override
    public void enterPropertyName(TypeScriptParser.PropertyNameContext ctx) {
        super.enterPropertyName(ctx);
        System.out.println("enterPropertyName: " + ctx.getText());
        if (this.currentObject instanceof TypeObj to) {
            ParamObj pa = new ParamObj();
            pa.setName(ctx.getText());
            to.addParam(pa);
        }
    }

    @Override
    public void enterPropertyExpressionAssignment(TypeScriptParser.PropertyExpressionAssignmentContext ctx) {
        super.enterPropertyExpressionAssignment(ctx);
        System.out.println("enterPropertyExpressionAssignment: " + ctx.getText());
        if (this.currentObject instanceof ParamObj po && !po.getType().contains(TsToken.TS_TOKEN_BRACKET)) {
            ParamObj pa = new ParamObj();
            pa.setName(ctx.propertyName().getText());
            pa.setStrValue(ctx.singleExpression().getText());
            po.addParam(pa);
        }
    }

    @Override
    public void enterArgumentsExpression(TypeScriptParser.ArgumentsExpressionContext ctx) {
        super.enterArgumentsExpression(ctx);
        System.out.println("enterArgumentsExpression: " + ctx.getText());
    }

    @Override
    public void enterArgumentList(TypeScriptParser.ArgumentListContext ctx) {
        super.enterArgumentList(ctx);
        System.out.println("enterArgumentList: " + ctx.getText());
    }

    @Override
    public void enterMultiplicativeExpression(TypeScriptParser.MultiplicativeExpressionContext ctx) {
        super.enterMultiplicativeExpression(ctx);
        System.out.println("enterMultiplicativeExpression: " + ctx.getText());
    }

    @Override
    public void enterGeneratorFunctionDeclaration(TypeScriptParser.GeneratorFunctionDeclarationContext ctx) {
        super.enterGeneratorFunctionDeclaration(ctx);
        System.out.println("enterGeneratorFunctionDeclaration: " + ctx.getText());
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
            setVariableType(ctx, to);

            this.typeObjList.add(to);
            System.out.println("type: " + to.toJsonString());

        } else if (varName.equals(TsToken.TS_TOKEN_ABSTRACT)) {
            int cnt = ctx.children.size();
            for (int i = 0; i < cnt; i++) {
                ParseTree item = ctx.children.get(i);
                System.out.println("item: " + item.getText());
            }
        } else if (ctx.singleExpression() != null) {
            setVariableSingleExpression(ctx, varName);
        } else {
            System.out.println("else 变量名: " + varName);
        }
        System.out.println("------------------------------");
    }

    @Override
    public void enterExpressionStatement(TypeScriptParser.ExpressionStatementContext ctx) {
        super.enterExpressionStatement(ctx);
        System.out.println("enterExpressionStatement: " + ctx.getText());
        List<TypeScriptParser.SingleExpressionContext> secl = ctx.expressionSequence().singleExpression();
        for (TypeScriptParser.SingleExpressionContext secItem : secl) {
            int cCnt = secItem.getChildCount();

        }
    }

    @Override
    public void enterAssignmentExpression(TypeScriptParser.AssignmentExpressionContext ctx) {
        super.enterAssignmentExpression(ctx);
        System.out.println("enterAssignmentExpression: " + ctx.getText());
        List<TypeScriptParser.SingleExpressionContext> secl = ctx.singleExpression();
        if (secl.size() > 1) {
            String name = secl.get(0).getText();
            String value = secl.get(1).getText();
            ParamObj pa = new ParamObj();
            pa.setName(name);
            pa.setStrValue(value);
            this.varObjList.add(pa);
        }
    }

    @Override
    public void enterGeneratorsExpression(TypeScriptParser.GeneratorsExpressionContext ctx) {
        super.enterGeneratorsExpression(ctx);
        System.out.println("enterGeneratorsExpression: " + ctx.getText());
    }

    @Override
    public void enterObjectLiteral(TypeScriptParser.ObjectLiteralContext ctx) {
        super.enterObjectLiteral(ctx);
        System.out.println("enterObjectLiteral: " + ctx.getText());
        if (this.currentObject instanceof ParamObj pa && pa.getType().contains(TsToken.TS_TOKEN_BRACKET)) {
            List<TypeScriptParser.PropertyAssignmentContext> pacl = ctx.propertyAssignment();
            ParamObj paObj = new ParamObj();
            for (TypeScriptParser.PropertyAssignmentContext item : pacl) {
                int cCnt = item.getChildCount();
                if (cCnt > 2) {
                    ParamObj paItem = new ParamObj();
                    String nameStr = item.getChild(0).getText();
                    String valStr = item.getChild(2).getText();
                    paItem.setName(nameStr);
                    paItem.setStrValue(valStr);
                    paObj.addParam(paItem);
                }
            }
            pa.addParam(paObj);
        }
    }

    @Override
    public void enterArrayLiteralExpression(TypeScriptParser.ArrayLiteralExpressionContext ctx) {
        super.enterArrayLiteralExpression(ctx);
        System.out.println("enterArrayLiteralExpression: " + ctx.getText());
    }

    @Override
    public void enterArrayLiteral(TypeScriptParser.ArrayLiteralContext ctx) {
        super.enterArrayLiteral(ctx);
        System.out.println("enterArrayLiteral: " + ctx.getText());
    }

    @Override
    public void enterComputedPropertyExpressionAssignment(
            TypeScriptParser.ComputedPropertyExpressionAssignmentContext ctx) {
        super.enterComputedPropertyExpressionAssignment(ctx);
        System.out.println("enterComputedPropertyExpressionAssignment: " + ctx.getText());
    }

    @Override
    public void enterParenthesizedExpression(TypeScriptParser.ParenthesizedExpressionContext ctx) {
        super.enterParenthesizedExpression(ctx);
        System.out.println("enterParenthesizedExpression: " + ctx.getText());
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
        String typeAnno = getFuncType(ctx);
        System.out.println("Function typeAnno: " + typeAnno);

        FuncObj fo = new FuncObj();
        fo.setName(funcName);
        fo.setRetValue(typeAnno);
        if (ctx.callSignature().typeParameters() != null) {
            TypeScriptParser.TypeParametersContext tpc = ctx.callSignature().typeParameters();
            List<TypeScriptParser.TypeParameterContext> tpcl = tpc.typeParameterList().typeParameter();
            for (TypeScriptParser.TypeParameterContext tpcItem : tpcl) {
                fo.addTemplate(tpcItem.identifier().getText());
            }

        }
        if (ctx.callSignature().parameterList() != null) {
            setFuncParam(ctx, fo);
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
        if (heritage.classExtendsClause() != null) {
            String type = heritage.classExtendsClause().Extends().getText();
            String name = heritage.classExtendsClause().typeReference().typeName().getText();

            TypeScriptParser.TypeGenericContext tgc = heritage.classExtendsClause().typeReference().typeGeneric();
            if (tgc != null) {
                TypeScriptParser.TypeArgumentListContext talc = tgc.typeArgumentList();
                List<TypeScriptParser.TypeArgumentContext> tacl = talc.typeArgument();
                for (TypeScriptParser.TypeArgumentContext tac : tacl) {
                    co.addHeritageTemplate(tac.type_().getText());
                }
            } else {
                co.addHeritage(type, name);
            }

        } else if (heritage.implementsClause() != null) {
            TypeScriptParser.ClassOrInterfaceTypeListContext citl =
                    heritage.implementsClause().classOrInterfaceTypeList();
            TypeScriptParser.TypeReferenceContext trc = citl.typeReference(0);
            if (trc != null && trc.typeGeneric() != null) {
                TypeScriptParser.TypeArgumentListContext talc = trc.typeGeneric().typeArgumentList();
                List<TypeScriptParser.TypeArgumentContext> tacl = talc.typeArgument();
                for (TypeScriptParser.TypeArgumentContext tac : tacl) {
                    co.addHeritageTemplate(tac.type_().getText());
                }
            }

            String name = trc.typeName().getText();
            String type = heritage.implementsClause().Implements().getText();
            co.addHeritage(type, name);
        }

        // 处理模板
        if (ctx.typeParameters() != null && ctx.typeParameters().typeParameterList() != null) {
            TypeScriptParser.TypeParameterListContext tpl = ctx.typeParameters().typeParameterList();
            List<TypeScriptParser.TypeParameterContext> tpcl = tpl.typeParameter();
            for (TypeScriptParser.TypeParameterContext tpc : tpcl) {
                co.addTemplate(tpc.getText());
            }
        }
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

        TypeScriptParser.ConstructorDeclarationContext cdc = ctx.constructorDeclaration();
        if (cdc != null && cdc.formalParameterList() != null && currentObject instanceof ClassObj co) {
            if (cdc.formalParameterList().lastFormalParameterArg() != null) {
                FuncObj fo = new FuncObj();
                String name = cdc.Constructor().getText();
                fo.setName(name);
                co.addFunc(fo);
                String pType = TsToken.TS_TOKEN_VOID;
                String pName = cdc.formalParameterList().lastFormalParameterArg().identifier().getText();
                String de = !cdc.formalParameterList().lastFormalParameterArg().Ellipsis().getText().isEmpty() ?
                        TsToken.TS_TOKEN_REST_PARAM : "";
                fo.addParam(pName, pType, de);
            } else if (cdc.formalParameterList().formalParameterArg() != null) {
                List<TypeScriptParser.FormalParameterArgContext> fpacl = cdc.formalParameterList().formalParameterArg();
                FuncObj fo = new FuncObj();
                String name = cdc.Constructor().getText();
                fo.setName(name);
                co.addFunc(fo);
                for (TypeScriptParser.FormalParameterArgContext fpac : fpacl) {

                    String pType = fpac.typeAnnotation() != null ? fpac.typeAnnotation().type_().getText() : "void";
                    String pName = fpac.singleExpression() != null ?
                            fpac.singleExpression().getText() : fpac.assignable().getText();
                    fo.addParam(pName, pType);

                }
            }
        }

    }

    @Override
    public void enterMethodDeclarationExpression(TypeScriptParser.MethodDeclarationExpressionContext ctx) {
        super.enterMethodDeclarationExpression(ctx);
        System.out.println("Method property: " + ctx.getText());
        String propertyName = ctx.propertyName().getText();
        String callSign = ctx.callSignature().getText();
        String typeAnno = "";
        TypeScriptParser.TypeAnnotationContext tac = ctx.callSignature().typeAnnotation();
        if (tac != null && tac.type_() != null) {
            typeAnno = tac.type_().getText();
        }

        FuncObj fo = new FuncObj();
        fo.setRetValue(typeAnno);
        fo.setName(propertyName);
        if (ctx.propertyMemberBase() != null && ctx.propertyMemberBase().Async() != null) {
            fo.setType(ctx.propertyMemberBase().Async().getText());
        }

        if (ctx.propertyMemberBase() != null && ctx.propertyMemberBase().accessibilityModifier() != null) {
            fo.setAccessor(ctx.propertyMemberBase().accessibilityModifier().getText());
        }

        if (ctx.propertyMemberBase() != null && ctx.propertyMemberBase().Static() != null) {
            fo.setQualifier(ctx.propertyMemberBase().Static().getText());
        }

        TypeScriptParser.ParameterListContext plc = ctx.callSignature().parameterList();
        if (plc != null) {
            List<TypeScriptParser.ParameterContext> plcList = ctx.callSignature().parameterList().parameter();
            for (TypeScriptParser.ParameterContext pc : plcList) {
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
        String typeName = ctx.typeAnnotation() != null ? ctx.typeAnnotation().type_().getText() : "void";
        String qualifier = ctx.start.getText();
        System.out.println("Property name: " + propertyName + " type: " + typeName);
        if (this.currentObject instanceof ClassObj co) {
            if (ctx.initializer() != null && ctx.initializer().singleExpression() != null) {
                co.addParam(propertyName, typeName, qualifier, ctx.initializer().singleExpression().getText());
            } else {
                co.addParam(propertyName, typeName, qualifier);
            }

            int lastIndex = this.classObjList.size() - 1;
            this.classObjList.set(lastIndex, co);
            System.out.println("class: " + co.toJsonString());
        }
    }

    private void addUnionParam(TypeScriptParser.UnionOrIntersectionOrPrimaryTypeContext upt, TypeObj to) {
        int cCnt = upt.getChildCount();
        ParamObj pa = new ParamObj();
        for (int i = 0; i < cCnt; i++) {
            String keyStr = upt.getChild(i).getText();
            if (!TsToken.isTsToken(keyStr)) {
                pa.setStrValue(keyStr);
            } else if (TsToken.isTsVarType(keyStr)) {
                pa.setType(keyStr);
            }
        }
        to.addParam(pa);
    }

    @Override
    public void enterTypeAliasDeclaration(TypeScriptParser.TypeAliasDeclarationContext ctx) {
        super.enterTypeAliasDeclaration(ctx);
        String typeName = ctx.identifier().getText();
        System.out.println("Type: " + typeName);
        TypeObj to = new TypeObj();
        to.setName(typeName);
        this.typeObjList.add(to);
        this.currentObject = to;
        this.currentToken = TsToken.TS_TOKEN_TYPE;
        TypeScriptParser.TypeParametersContext tpc = ctx.typeParameters();
        if (tpc != null) {
            System.out.println("Type params: " + tpc.getText());
        }
        TypeScriptParser.Type_Context typeContext = ctx.type_();
        if (typeContext != null) {
            System.out.println("Type type_: " + typeContext.getText());

            TypeScriptParser.UnionOrIntersectionOrPrimaryTypeContext upt =
                    typeContext.unionOrIntersectionOrPrimaryType();
            if (upt != null && upt.getChildCount() > 1) {
                System.out.println("Type uoiop: " + upt.getText());
                addUnionParam(upt, to);
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
        if (currentObject instanceof ClassObj co && ctx.classExtendsClause() != null) {
            if (!co.getHeritageNameList().isEmpty()) {
                return;
            }
            String ext = ctx.classExtendsClause().Extends() != null ?
                    ctx.classExtendsClause().Extends().getText() : "";
            String typeName = ctx.classExtendsClause().typeReference() != null ?
                    ctx.classExtendsClause().typeReference().getText() : "";
            if (co.getHeritageTemplateList().isEmpty()) {
                co.addHeritage(ext, typeName);
            }
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

    private String checkFuncType(TypeScriptParser.Type_Context tc) {
        int typeCnt = tc.unionOrIntersectionOrPrimaryType().getChildCount();
        for (int j = 0; j < typeCnt; j++) {
            int rotCnt = tc.unionOrIntersectionOrPrimaryType().getChild(j).getChildCount();
            for (int k = 0; k < rotCnt; k++) {
                String typeStr = tc.unionOrIntersectionOrPrimaryType().getChild(j).getChild(k).getText();
                if (typeStr.equals(TsToken.TS_TOKEN_IS)) {
                    return TsToken.TS_TOKEN_BOOLEAN;
                }
            }
        }
        return tc.getText();
    }

    private String getFuncType(TypeScriptParser.FunctionDeclarationContext ctx) {
        String typeAnno = TsToken.TS_TOKEN_VOID;
        if (ctx.callSignature().typeAnnotation() != null) {
            TypeScriptParser.Type_Context tc = ctx.callSignature().typeAnnotation().type_();
            typeAnno = checkFuncType(tc);
        }
        return typeAnno;
    }

    private void setVariableType(TypeScriptParser.VariableDeclarationContext ctx, TypeObj to) {
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
    }

    private void setFuncExpressionParam(TypeScriptParser.FunctionExpressionContext fec, FuncObj fo) {
        TypeScriptParser.AnonymousFunctionContext afc = fec.anonymousFunction();
        TypeScriptParser.ArrowFunctionDeclarationContext afdc = afc.arrowFunctionDeclaration();
        if (afdc.arrowFunctionParameters().formalParameterList() != null) {
            List<TypeScriptParser.FormalParameterArgContext> fpacl =
                    afdc.arrowFunctionParameters().formalParameterList().formalParameterArg();
            for (TypeScriptParser.FormalParameterArgContext fpac : fpacl) {
                String name = fpac.assignable().getText();
                String type = fpac.typeAnnotation() != null ?
                        fpac.typeAnnotation().type_().getText() : TsToken.TS_TOKEN_VOID;
                fo.addParam(name, type);
                System.out.println("addparam: " + fo.toJsonString());
            }
        }

        if (afdc.arrowFunctionParameters().formalParameterList() != null &&
                afdc.arrowFunctionParameters().formalParameterList().lastFormalParameterArg() != null) {
            TypeScriptParser.LastFormalParameterArgContext lpac =
                afdc.arrowFunctionParameters().formalParameterList().lastFormalParameterArg();

            String paType = lpac.typeAnnotation().type_().getText();
            String paName = lpac.identifier().getText();
            paName = lpac.Ellipsis() != null ? lpac.Ellipsis().getText() + paName : paName;
            fo.addParam(paName, paType);
        }
    }

    private FuncObj createFuncObj(String varName) {
        FuncObj fo = new FuncObj();
        fo.setAlias(varName);
        this.currentObject = fo;
        this.funcObjList.add(fo);
        this.currentIdentifier = varName;
        return fo;
    }

    private void setCbFunc(TypeScriptParser.VariableDeclarationContext ctx) {
        FuncObj fo = new FuncObj();
        String nameStr = ctx.identifierOrKeyWord().getText();
        fo.setName(nameStr);
        this.funcObjList.add(fo);
        fo.setRetValue(ctx.typeAnnotation().type_().functionType().type_().getText());
        if (ctx.typeAnnotation().type_().functionType().parameterList() == null) {
            return;
        }
        List<TypeScriptParser.ParameterContext> pacl =
                ctx.typeAnnotation().type_().functionType().parameterList().parameter();
        for (TypeScriptParser.ParameterContext paItem : pacl) {
            ParamObj paSfItem = new ParamObj();
            paSfItem.setName(paItem.requiredParameter().identifierOrPattern().getText());
            paSfItem.setType(paItem.requiredParameter().typeAnnotation().type_().getText());
            fo.addParam(paSfItem);
            if (paItem.requiredParameter().typeAnnotation().type_().functionType() == null) {
                continue;
            }
            String subFunRetType = paItem.requiredParameter().typeAnnotation().
                    type_().functionType().type_().getText();
            String subFunParam = paItem.requiredParameter().typeAnnotation().type_().
                    functionType().parameterList() == null ? "" : paItem.requiredParameter().
                    typeAnnotation().type_().functionType().parameterList().getText();
            FuncObj subFoItem = new FuncObj();
            subFoItem.setName("");
            subFoItem.setRetValue(subFunRetType);

            if (!subFunParam.isEmpty()) {
                List<TypeScriptParser.ParameterContext> paCtxList = paItem.requiredParameter().
                        typeAnnotation().type_().functionType().parameterList().parameter();
                for (TypeScriptParser.ParameterContext paCtx : paCtxList) {
                    String subType = paCtx.requiredParameter().typeAnnotation().type_().getText();
                    String subName = paCtx.requiredParameter().identifierOrPattern().getText();
                    subFoItem.addParam(subName, subType);
                }
            }
            paSfItem.addFunc(subFoItem);
        }

    }

    private void setVariableSingleExpression(TypeScriptParser.VariableDeclarationContext ctx, String varName) {
        for (TypeScriptParser.SingleExpressionContext sec : ctx.singleExpression()) {
            String varType = sec.start.getText();
            if (varType.equals(TsToken.TS_TOKEN_FUNCTION)) {
                createFuncObj(varName);
            } else if ((sec instanceof TypeScriptParser.FunctionExpressionContext fec) &&
                    fec.anonymousFunction() != null) {
                FuncObj fo = createFuncObj(varName);
                setFuncExpressionParam(fec, fo);
            } else if (sec instanceof TypeScriptParser.ParenthesizedExpressionContext pec) {
                FuncObj fo = createFuncObj(varName);
                List<TypeScriptParser.SingleExpressionContext> secl = pec.expressionSequence().singleExpression();

                for (TypeScriptParser.SingleExpressionContext secItem : secl) {
                    fo.addParam(secItem.getText(), "");
                }
            } else if (sec instanceof TypeScriptParser.IdentifierExpressionContext iec &&
                    iec.singleExpression() != null) {
                if (iec.singleExpression() instanceof TypeScriptParser.GenericTypesContext gtc) {
                    FuncObj fo = createFuncObj(varName);
                    fo.setName(varType);
                    fo.addTemplate(gtc.typeArguments().getText());
                    setFuncParamStr(fo, gtc.expressionSequence().singleExpression());
                }

                if (iec.singleExpression() instanceof TypeScriptParser.ParenthesizedExpressionContext pec) {
                    ParamObj paObj = new ParamObj();
                    paObj.setName(ctx.identifierOrKeyWord().getText());
                    paObj.setStrValue(sec.getText());
                    this.varObjList.add(paObj);
                }
            } else {
                ParamObj pa = new ParamObj();
                pa.setName(varName);
                String typeName = (ctx.typeAnnotation() != null && ctx.typeAnnotation().type_() != null) ?
                        ctx.typeAnnotation().type_().getText() : "";
                pa.setType(typeName);
                int cCnt = typeName.contains(TsToken.TS_TOKEN_BRACKET) ? 0 : sec.getChildCount();
                for (int i = 0; i < cCnt; i++) {
                    pa.setStrValue(sec.getChild(i).getText());
                }
                this.varObjList.add(pa);
                this.currentObject = pa;
                this.currentToken = TsToken.TS_TOKEN_VAR;
            }
        }

        if (ctx.typeAnnotation() != null && ctx.typeAnnotation().type_().functionType() != null) {
            setCbFunc(ctx);
        }
    }

    private void setFuncParamStr(FuncObj fo, List<TypeScriptParser. SingleExpressionContext> secl) {
        for (TypeScriptParser.SingleExpressionContext secObj : secl) {
            if (secObj instanceof TypeScriptParser.ParenthesizedExpressionContext pec) {
                ParamObj po = new ParamObj();
                TypeScriptParser.ExpressionSequenceContext testObj = pec.expressionSequence();
                po.setStrValue(testObj.singleExpression(0).getText());
                fo.addParam(po);
            }
        }
    }

    private void setFuncParam(TypeScriptParser.FunctionDeclarationContext ctx, FuncObj fo) {
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
