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

package antlr.cpp;

import antlr.ParseBaseListener;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import grammar.*;
import utils.Constants;
import utils.CppToken;
import utils.StringUtils;

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
public class CPP14CustomListener extends CPP14ParserBaseListener implements ParseBaseListener {
    private final int currentLanguage = Constants.PARSE_C_CPP_LANGUAGE;
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
    private List<ParamObj> constList;
    /**
     * 构造函数
     */
    public CPP14CustomListener() {
        enumObjList = new CopyOnWriteArrayList<>();
        classObjList = new CopyOnWriteArrayList<>();
        funcObjList = new CopyOnWriteArrayList<>();
        structObjList = new CopyOnWriteArrayList<>();
        typeObjList = new CopyOnWriteArrayList<>();
        unionObjList = new CopyOnWriteArrayList<>();
        interfaceObjList = new CopyOnWriteArrayList<>();
        constList = new CopyOnWriteArrayList<>();
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
     * 获取关键字
     *
     * @param currentToken 当前token
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
     * 获取常量列表
     *
     * @return 返回常量列表
     */
    public List<ParamObj> getConstList() {
        return constList;
    }

    /**
     * 设置常量列表
     *
     * @param constList 常量列表
     */
    public void setConstList(List<ParamObj> constList) {
        this.constList = constList;
    }

    @Override
    public void enterAbstractDeclarator(CPP14Parser.AbstractDeclaratorContext ctx) {
        super.enterAbstractDeclarator(ctx);
        System.out.println("c/cpp struct: " + ctx.getText());
    }

    @Override
    public void enterClassSpecifier(CPP14Parser.ClassSpecifierContext ctx) {
        super.enterClassSpecifier(ctx);
        System.out.println("c/cpp class: " + ctx.getText());
        if (ctx.classHead() != null && ctx.classHead().classKey() != null) {
            String key = ctx.classHead().classKey().getText();
            if (key.equals(CppToken.CPP_TOKEN_STRUCT)) {
                StructObj so = new StructObj();
                String name = (ctx.classHead().classHeadName() != null) ?
                        ctx.classHead().classHeadName().getText() : "";
                so.setName(name);
                this.currentObject = so;
                this.currentToken = CppToken.CPP_TOKEN_STRUCT;
                this.structObjList.add(so);
            } else if (key.equals(CppToken.CPP_TOKEN_CLASS)) {
                ClassObj co = new ClassObj();
                String name = (ctx.classHead().classHeadName() != null) ?
                        ctx.classHead().classHeadName().getText() : "";
                co.setName(name);
                this.currentObject = co;
                this.currentToken = CppToken.CPP_TOKEN_CLASS;
                this.classObjList.add(co);
            }
        } else if (ctx.classHead() != null && ctx.classHead().Union() != null) {
            String key = ctx.classHead().Union().getText();
            if (key.equals(CppToken.CPP_TOKEN_UNION)) {
                UnionObj uo = new UnionObj();
                String name = (ctx.classHead().classHeadName() != null) ?
                        ctx.classHead().classHeadName().getText() : "";
                uo.setName(name);
                this.currentObject = uo;
                this.currentToken = CppToken.CPP_TOKEN_UNION;
                this.unionObjList.add(uo);
            }
        }
    }

    @Override
    public void enterAttributeSpecifier(CPP14Parser.AttributeSpecifierContext ctx) {
        super.enterAttributeSpecifier(ctx);
        System.out.println("c/cpp attribute: " + ctx.getText());
    }

    private void setStructMember(CPP14Parser.MemberdeclarationContext ctx, StructObj so) {
        String type = ctx.declSpecifierSeq().getText();
        List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
        type = !dscl.isEmpty() ? "" : type;
        for (CPP14Parser.DeclSpecifierContext dscItem : dscl) {
            if (dscItem.typeSpecifier() != null &&
                    dscItem.typeSpecifier().trailingTypeSpecifier().elaboratedTypeSpecifier() != null) {
                CPP14Parser.ElaboratedTypeSpecifierContext esc =
                        dscItem.typeSpecifier().trailingTypeSpecifier().elaboratedTypeSpecifier();
                type += esc.Enum() != null ? esc.Enum().getText() + " " : "";
                type += esc.classKey() != null ? esc.classKey().getText() + " " : "";
                type += esc.Identifier();
            } else {
                type += dscItem.getText() + " ";
            }
        }
        if (!dscl.isEmpty()) {
            type = StringUtils.removeLastSpace(type);
        }
        String name = ctx.memberDeclaratorList().getText();
        List<CPP14Parser.MemberDeclaratorContext> mdcl = ctx.memberDeclaratorList().memberDeclarator();
        for (CPP14Parser.MemberDeclaratorContext mdc : mdcl) {
            if (mdc.declarator() != null && mdc.declarator().pointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().constantExpression() == null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().noPointerDeclarator() != null) {
                CPP14Parser.NoPointerDeclaratorContext npdcItem =
                        mdc.declarator().pointerDeclarator().noPointerDeclarator();
                FuncObj fo = new FuncObj();
                fo.setName(npdcItem.noPointerDeclarator().getText());
                fo.setRetValue(type);

                if (npdcItem.parametersAndQualifiers() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause().parameterDeclarationList() != null) {
                    List<CPP14Parser.ParameterDeclarationContext> pdcList =
                            npdcItem.parametersAndQualifiers().parameterDeclarationClause().
                                    parameterDeclarationList().parameterDeclaration();
                    for (CPP14Parser.ParameterDeclarationContext pdcItem : pdcList) {
                        ParamObj poItem = new ParamObj();
                        poItem.setName(pdcItem.declarator().getText());
                        poItem.setType(pdcItem.declSpecifierSeq().getText());
                        fo.addParam(poItem);
                    }
                }

                so.addFunc(fo);
            } else {
                ParamObj po = new ParamObj();
                po.setName(mdc.declarator().getText());
                if (mdc.braceOrEqualInitializer() != null) {
                    po.setStrValue(mdc.braceOrEqualInitializer().initializerClause().getText());
                }
                po.setType(type);
                so.addMember(po);
            }
        }
    }

    private void setUnionMember(CPP14Parser.MemberdeclarationContext ctx, UnionObj uo) {
        String type = ctx.declSpecifierSeq().getText();
        List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
        type = !dscl.isEmpty() ? "" : type;
        for (CPP14Parser.DeclSpecifierContext dscItem : dscl) {
            type += dscItem.getText() + " ";
        }
        if (!dscl.isEmpty()) {
            type = StringUtils.removeLastSpace(type);
        }
        String name = ctx.memberDeclaratorList().getText();
        List<CPP14Parser.MemberDeclaratorContext> mdcl = ctx.memberDeclaratorList().memberDeclarator();
        for (CPP14Parser.MemberDeclaratorContext mdc : mdcl) {
            if (mdc.declarator() != null && mdc.declarator().pointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().constantExpression() == null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().noPointerDeclarator() != null) {
                CPP14Parser.NoPointerDeclaratorContext npdcItem =
                        mdc.declarator().pointerDeclarator().noPointerDeclarator();
                FuncObj fo = new FuncObj();
                fo.setName(npdcItem.noPointerDeclarator().getText());
                fo.setRetValue(type);

                if (npdcItem.parametersAndQualifiers() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause().parameterDeclarationList() != null) {
                    List<CPP14Parser.ParameterDeclarationContext> pdcList =
                            npdcItem.parametersAndQualifiers().parameterDeclarationClause().
                                    parameterDeclarationList().parameterDeclaration();
                    for (CPP14Parser.ParameterDeclarationContext pdcItem : pdcList) {
                        ParamObj poItem = new ParamObj();
                        poItem.setName(pdcItem.declarator().getText());
                        poItem.setType(pdcItem.declSpecifierSeq().getText());
                        fo.addParam(poItem);
                    }
                }

                uo.addFunc(fo);
            } else {
                ParamObj po = new ParamObj();
                po.setName(mdc.declarator().getText());
                if (mdc.braceOrEqualInitializer() != null) {
                    po.setStrValue(mdc.braceOrEqualInitializer().initializerClause().getText());
                }
                po.setType(type);
                uo.addMember(po);
            }
        }
    }

    private void setClassMember(CPP14Parser.MemberdeclarationContext ctx, ClassObj co) {
        String type = ctx.declSpecifierSeq().getText();
        List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
        type = !dscl.isEmpty() ? "" : type;
        for (CPP14Parser.DeclSpecifierContext dscItem : dscl) {
            if (dscItem.typeSpecifier() != null &&
                    dscItem.typeSpecifier().trailingTypeSpecifier().elaboratedTypeSpecifier() != null) {
                CPP14Parser.ElaboratedTypeSpecifierContext esc =
                        dscItem.typeSpecifier().trailingTypeSpecifier().elaboratedTypeSpecifier();
                type += esc.Enum() != null ? esc.Enum().getText() + " " : "";
                type += esc.classKey() != null ? esc.classKey().getText() + " " : "";
                type += esc.Identifier();
            } else {
                type += dscItem.getText() + " ";
            }
        }
        if (!dscl.isEmpty()) {
            type = StringUtils.removeLastSpace(type);
        }
        String name = ctx.memberDeclaratorList().getText();
        List<CPP14Parser.MemberDeclaratorContext> mdcl = ctx.memberDeclaratorList().memberDeclarator();
        for (CPP14Parser.MemberDeclaratorContext mdc : mdcl) {
            if (mdc.declarator() != null && mdc.declarator().pointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator() != null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().constantExpression() == null &&
                    mdc.declarator().pointerDeclarator().noPointerDeclarator().noPointerDeclarator() != null) {
                CPP14Parser.NoPointerDeclaratorContext npdcItem =
                        mdc.declarator().pointerDeclarator().noPointerDeclarator();
                FuncObj fo = new FuncObj();
                fo.setName(npdcItem.noPointerDeclarator().getText());
                fo.setRetValue(type);

                if (npdcItem.parametersAndQualifiers() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause() != null &&
                        npdcItem.parametersAndQualifiers().parameterDeclarationClause().parameterDeclarationList() != null) {
                    List<CPP14Parser.ParameterDeclarationContext> pdcList =
                            npdcItem.parametersAndQualifiers().parameterDeclarationClause().
                                    parameterDeclarationList().parameterDeclaration();
                    for (CPP14Parser.ParameterDeclarationContext pdcItem : pdcList) {
                        ParamObj poItem = new ParamObj();
                        poItem.setName(pdcItem.declarator().getText());
                        poItem.setType(pdcItem.declSpecifierSeq().getText());
                        fo.addParam(poItem);
                    }
                }

                co.addFunc(fo);
            } else {
                ParamObj po = new ParamObj();
                po.setName(mdc.declarator().getText());
                if (mdc.braceOrEqualInitializer() != null) {
                    po.setStrValue(mdc.braceOrEqualInitializer().initializerClause().getText());
                }
                po.setType(type);
                co.addParam(po);
            }
        }
    }

    @Override
    public void enterMemberdeclaration(CPP14Parser.MemberdeclarationContext ctx) {
        super.enterMemberdeclaration(ctx);
        System.out.println("c/cpp Memberdeclaration: " + ctx.getText());
        if (this.currentObject instanceof StructObj so) {
            setStructMember(ctx, so);
        } else if (this.currentObject instanceof UnionObj uo) {
            setUnionMember(ctx, uo);
        } else if (this.currentObject instanceof ClassObj co) {
            setClassMember(ctx, co);
        }

    }

    @Override
    public void enterMemberDeclarator(CPP14Parser.MemberDeclaratorContext ctx) {
        super.enterMemberDeclarator(ctx);
        System.out.println("c/cpp member declarator: " + ctx.getText());
    }

    @Override
    public void enterDeclarationseq(CPP14Parser.DeclarationseqContext ctx) {
        super.enterDeclarationseq(ctx);
        System.out.println("c/cpp enterDeclarationseq: " + ctx.getText());
    }

    @Override
    public void enterInclusiveOrExpression(CPP14Parser.InclusiveOrExpressionContext ctx) {
        super.enterInclusiveOrExpression(ctx);
        System.out.println("c/cpp enterInclusiveOrExpression: " + ctx.getText());
    }

    @Override
    public void enterAbstractPackDeclarator(CPP14Parser.AbstractPackDeclaratorContext ctx) {
        super.enterAbstractPackDeclarator(ctx);
        System.out.println("c/cpp enterAbstractPackDeclarator: " + ctx.getText());
    }

    @Override
    public void enterBaseTypeSpecifier(CPP14Parser.BaseTypeSpecifierContext ctx) {
        super.enterBaseTypeSpecifier(ctx);
        System.out.println("c/cpp enterBaseTypeSpecifier: " + ctx.getText());
    }

    @Override
    public void enterHandler(CPP14Parser.HandlerContext ctx) {
        super.enterHandler(ctx);
        System.out.println("c/cpp enterHandler: " + ctx.getText());
    }

    @Override
    public void exitDeclarationseq(CPP14Parser.DeclarationseqContext ctx) {
        super.exitDeclarationseq(ctx);
        System.out.println("c/cpp exitDeclarationseq: " + ctx.getText());
    }

    @Override
    public void enterDeclaration(CPP14Parser.DeclarationContext ctx) {
        super.enterDeclaration(ctx);
        System.out.println("c/cpp declaration: " + ctx.getText());

    }

    @Override
    public void enterBlockDeclaration(CPP14Parser.BlockDeclarationContext ctx) {
        super.enterBlockDeclaration(ctx);
        System.out.println("c/cpp enterBlockDeclaration: " + ctx.getText());
    }

    private void parseConstant(CPP14Parser.SimpleDeclarationContext ctx) {
        if (ctx.initDeclaratorList().initDeclarator(0) != null &&
                ctx.initDeclaratorList().initDeclarator(0).initializer() != null &&
                ctx.declSpecifierSeq() != null) {
            String paType = "";
            List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
            for (CPP14Parser.DeclSpecifierContext item: dscl) {
                paType += item.getText() + " ";
            }
            paType = StringUtils.removeLastSpace(paType);
            String paName = ctx.initDeclaratorList().initDeclarator(0).declarator().getText();
            String initValue = ctx.initDeclaratorList().initDeclarator(0).initializer().braceOrEqualInitializer().initializerClause().getText();

            ParamObj po = new ParamObj();
            po.setName(paName);
            po.setType(paType);
            po.setStrValue(initValue);
            this.constList.add(po);
        }
    }

    private void parseFunction(CPP14Parser.SimpleDeclarationContext ctx) {
        CPP14Parser.NoPointerDeclaratorContext npdc = ctx.initDeclaratorList().initDeclarator(0).
                declarator().pointerDeclarator().noPointerDeclarator();
        String name = npdc.noPointerDeclarator().getText();
        FuncObj fo = new FuncObj();
        fo.setName(name);
        List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
        for (CPP14Parser.DeclSpecifierContext dsc : dscl) {
            fo.addDecl(dsc.getText());
        }
        if (npdc.parametersAndQualifiers().parameterDeclarationClause() != null) {
            List<CPP14Parser.ParameterDeclarationContext> pdcl = npdc.parametersAndQualifiers().
                    parameterDeclarationClause().parameterDeclarationList().parameterDeclaration();
            for (CPP14Parser.ParameterDeclarationContext pdc : pdcl) {
                String varName = pdc.declarator() != null ? pdc.declarator().getText() : "";
                String typeName = "";

                List<CPP14Parser.DeclSpecifierContext> dscList = pdc.declSpecifierSeq().declSpecifier();
                for (CPP14Parser.DeclSpecifierContext dscItem : dscList) {
                    typeName += dscItem.getText() + " ";
                }
                if (dscList.size() > 0) {
                    typeName = typeName.substring(0, typeName.length() - 1);
                }

                ParamObj po = new ParamObj();
                po.setName(varName);
                po.setType(typeName);
                fo.addParam(po);
            }
        }

        this.currentObject = fo;
        this.currentToken = CppToken.CPP_TOKEN_FUNCTION;
        this.funcObjList.add(fo);
    }

    @Override
    public void enterSimpleDeclaration(CPP14Parser.SimpleDeclarationContext ctx) {
        super.enterSimpleDeclaration(ctx);
        System.out.println("c/cpp enterSimpleDeclaration: " + ctx.getText());

        if (ctx.initDeclaratorList() == null) {
            return;
        }

        CPP14Parser.NoPointerDeclaratorContext npdc = ctx.initDeclaratorList().initDeclarator(0).
                declarator().pointerDeclarator().noPointerDeclarator();
        if (npdc.noPointerDeclarator() != null) {
            parseFunction(ctx);
        } else {
            parseConstant(ctx);
        }

    }

    @Override
    public void enterDeclSpecifierSeq(CPP14Parser.DeclSpecifierSeqContext ctx) {
        super.enterDeclSpecifierSeq(ctx);
        System.out.println("c/cpp enterDeclSpecifierSeq: " + ctx.getText());
    }

    @Override
    public void enterInitDeclaratorList(CPP14Parser.InitDeclaratorListContext ctx) {
        super.enterInitDeclaratorList(ctx);
        System.out.println("c/cpp enterInitDeclaratorList: " + ctx.getText());
        if (this.currentObject instanceof EnumObj eo) {
            eo.setAlias(ctx.getText());
        } else if (this.currentObject instanceof StructObj so) {
            so.setAlias(ctx.getText());
        } else if (this.currentObject instanceof UnionObj uo) {
            uo.setAlias(ctx.getText());
        } else if (this.currentObject instanceof ClassObj co) {
            co.setAlias(ctx.getText());
        }
    }

    @Override
    public void enterExpressionStatement(CPP14Parser.ExpressionStatementContext ctx) {
        super.enterExpressionStatement(ctx);
        System.out.println("c/cpp enterExpressionStatement: " + ctx.getText());
    }

    @Override
    public void enterDeclarationStatement(CPP14Parser.DeclarationStatementContext ctx) {
        super.enterDeclarationStatement(ctx);
        System.out.println("c/cpp enterDeclarationStatement: " + ctx.getText());
    }

    @Override
    public void enterCompoundStatement(CPP14Parser.CompoundStatementContext ctx) {
        super.enterCompoundStatement(ctx);
        System.out.println("c/cpp enterCompoundStatement: " + ctx.getText());
    }

    @Override
    public void enterDeclarator(CPP14Parser.DeclaratorContext ctx) {
        super.enterDeclarator(ctx);
        System.out.println("c/cpp enterDeclarator: " + ctx.getText());
    }

    @Override
    public void enterEmptyDeclaration_(CPP14Parser.EmptyDeclaration_Context ctx) {
        super.enterEmptyDeclaration_(ctx);
        System.out.println("c/cpp enterEmptyDeclaration_: " + ctx.getText());
    }

    @Override
    public void enterTranslationUnit(CPP14Parser.TranslationUnitContext ctx) {
        super.enterTranslationUnit(ctx);
        System.out.println("c/cpp enterTranslationUnit: " + ctx.getText());
    }

    @Override
    public void enterAsmDefinition(CPP14Parser.AsmDefinitionContext ctx) {
        super.enterAsmDefinition(ctx);
        System.out.println("c/cpp enterAsmDefinition: " + ctx.getText());
    }

    @Override
    public void enterNamespaceAliasDefinition(CPP14Parser.NamespaceAliasDefinitionContext ctx) {
        super.enterNamespaceAliasDefinition(ctx);
        System.out.println("c/cpp enterNamespaceAliasDefinition: " + ctx.getText());
    }

    @Override
    public void enterUsingDeclaration(CPP14Parser.UsingDeclarationContext ctx) {
        super.enterUsingDeclaration(ctx);
        System.out.println("c/cpp enterUsingDeclaration: " + ctx.getText());
    }

    @Override
    public void enterUsingDirective(CPP14Parser.UsingDirectiveContext ctx) {
        super.enterUsingDirective(ctx);
        System.out.println("c/cpp enterUsingDirective: " + ctx.getText());
    }

    @Override
    public void enterStaticAssertDeclaration(CPP14Parser.StaticAssertDeclarationContext ctx) {
        super.enterStaticAssertDeclaration(ctx);
        System.out.println("c/cpp enterStaticAssertDeclaration: " + ctx.getText());
    }

    @Override
    public void enterAliasDeclaration(CPP14Parser.AliasDeclarationContext ctx) {
        super.enterAliasDeclaration(ctx);
        System.out.println("c/cpp enterAliasDeclaration: " + ctx.getText());
    }

    @Override
    public void enterOpaqueEnumDeclaration(CPP14Parser.OpaqueEnumDeclarationContext ctx) {
        super.enterOpaqueEnumDeclaration(ctx);
        System.out.println("c/cpp enterOpaqueEnumDeclaration: " + ctx.getText());
    }

    @Override
    public void enterExplicitSpecialization(CPP14Parser.ExplicitSpecializationContext ctx) {
        super.enterExplicitSpecialization(ctx);
        System.out.println("c/cpp enterExplicitSpecialization: " + ctx.getText());
    }

    @Override
    public void enterLinkageSpecification(CPP14Parser.LinkageSpecificationContext ctx) {
        super.enterLinkageSpecification(ctx);
        System.out.println("c/cpp enterLinkageSpecification: " + ctx.getText());
    }

    @Override
    public void enterNamespaceDefinition(CPP14Parser.NamespaceDefinitionContext ctx) {
        super.enterNamespaceDefinition(ctx);
        System.out.println("c/cpp enterNamespaceDefinition: " + ctx.getText());
    }

    @Override
    public void enterAttributeSpecifierSeq(CPP14Parser.AttributeSpecifierSeqContext ctx) {
        super.enterAttributeSpecifierSeq(ctx);
        System.out.println("c/cpp enterAttributeSpecifierSeq: " + ctx.getText());
    }

    @Override
    public void enterDecltypeSpecifier(CPP14Parser.DecltypeSpecifierContext ctx) {
        super.enterDecltypeSpecifier(ctx);
        System.out.println("c/cpp enterDecltypeSpecifier: " + ctx.getText());
    }

    @Override
    public void enterDeclSpecifier(CPP14Parser.DeclSpecifierContext ctx) {
        super.enterDeclSpecifier(ctx);
        System.out.println("c/cpp enterDeclSpecifier: " + ctx.getText());
    }

    @Override
    public void enterNestedNameSpecifier(CPP14Parser.NestedNameSpecifierContext ctx) {
        super.enterNestedNameSpecifier(ctx);
        System.out.println("c/cpp enterNestedNameSpecifier: " + ctx.getText());
    }

    @Override
    public void enterSimpleTypeSpecifier(CPP14Parser.SimpleTypeSpecifierContext ctx) {
        super.enterSimpleTypeSpecifier(ctx);
        System.out.println("c/cpp enterSimpleTypeSpecifier: " + ctx.getText());
    }

    @Override
    public void enterPseudoDestructorName(CPP14Parser.PseudoDestructorNameContext ctx) {
        super.enterPseudoDestructorName(ctx);
        System.out.println("c/cpp enterPseudoDestructorName: " + ctx.getText());
    }

    @Override
    public void enterPrimaryExpression(CPP14Parser.PrimaryExpressionContext ctx) {
        super.enterPrimaryExpression(ctx);
        System.out.println("c/cpp enterPrimaryExpression: " + ctx.getText());
    }

    @Override
    public void enterPostfixExpression(CPP14Parser.PostfixExpressionContext ctx) {
        super.enterPostfixExpression(ctx);
        System.out.println("c/cpp enterPostfixExpression: " + ctx.getText());
    }

    @Override
    public void enterConstantExpression(CPP14Parser.ConstantExpressionContext ctx) {
        super.enterConstantExpression(ctx);
        System.out.println("c/cpp enterConstantExpression: " + ctx.getText());
    }

    @Override
    public void enterVirtualSpecifier(CPP14Parser.VirtualSpecifierContext ctx) {
        super.enterVirtualSpecifier(ctx);
        System.out.println("c/cpp enterVirtualSpecifier: " + ctx.getText());
    }

    @Override
    public void enterBalancedtoken(CPP14Parser.BalancedtokenContext ctx) {
        super.enterBalancedtoken(ctx);
        System.out.println("c/cpp enterBalancedtoken: " + ctx.getText());
    }

    @Override
    public void enterBalancedTokenSeq(CPP14Parser.BalancedTokenSeqContext ctx) {
        super.enterBalancedTokenSeq(ctx);
        System.out.println("c/cpp enterBalancedtoken: " + ctx.getText());
    }

    @Override
    public void enterBaseSpecifier(CPP14Parser.BaseSpecifierContext ctx) {
        super.enterBaseSpecifier(ctx);
        System.out.println("c/cpp enterBaseSpecifier: " + ctx.getText());
    }

    @Override
    public void enterBaseClause(CPP14Parser.BaseClauseContext ctx) {
        super.enterBaseClause(ctx);
        System.out.println("c/cpp enterBaseClause: " + ctx.getText());
    }

    @Override
    public void enterFunctionDefinition(CPP14Parser.FunctionDefinitionContext ctx) {
        super.enterFunctionDefinition(ctx);
        System.out.println("c/cpp function: " + ctx.getText());

        String typeName = ctx.declSpecifierSeq().getText();
        List<CPP14Parser.DeclSpecifierContext> dscl = ctx.declSpecifierSeq().declSpecifier();
        if (!dscl.isEmpty()) {
            typeName = "";
        }
        for (CPP14Parser.DeclSpecifierContext dscItem : dscl) {
            typeName += dscItem.getText() + " ";
        }
        typeName = ParseBaseListener.removeLastSpace(typeName);
        String funcName = ctx.declarator().pointerDeclarator().noPointerDeclarator().noPointerDeclarator().getText();

        FuncObj fo = new FuncObj();
        fo.setName(funcName);
        fo.setRetValue(typeName);

        this.currentToken = CppToken.CPP_TOKEN_FUNCTION;
        this.currentObject = fo;
        this.funcObjList.add(fo);

        CPP14Parser.ParameterDeclarationListContext pdl = ctx.declarator().pointerDeclarator().noPointerDeclarator().
                parametersAndQualifiers().parameterDeclarationClause().parameterDeclarationList();
        List<CPP14Parser.ParameterDeclarationContext> pdcl = pdl.parameterDeclaration();
        for (CPP14Parser.ParameterDeclarationContext pdcItem : pdcl) {
            ParamObj po = new ParamObj();
            String type = pdcItem.declSpecifierSeq().getText();
            String name = pdcItem.declarator() != null ? pdcItem.declarator().getText() : "";
            po.setType(type);
            po.setName(name);
            fo.addParam(po);
        }

    }

    @Override
    public void enterEnumeratorDefinition(CPP14Parser.EnumeratorDefinitionContext ctx) {
        super.enterEnumeratorDefinition(ctx);
        System.out.println("c/cpp enumerator definition: " + ctx.getText());
    }

    @Override
    public void enterEnumSpecifier(CPP14Parser.EnumSpecifierContext ctx) {
        super.enterEnumSpecifier(ctx);
        System.out.println("c/cpp enum: " + ctx.getText());
        EnumObj eo = new EnumObj();
        String name = (ctx.enumHead() != null) && (ctx.enumHead().Identifier() != null) ?
                ctx.enumHead().Identifier().getText() : "";
        eo.setName(name);

        List<CPP14Parser.EnumeratorDefinitionContext> edcl = ctx.enumeratorList().enumeratorDefinition();
        for (CPP14Parser.EnumeratorDefinitionContext edc : edcl) {
            String memName = edc.enumerator().getText();
            String memValue = edc.constantExpression() != null ? edc.constantExpression().getText() : "";
            eo.addMemberItem(memName);
            eo.addMemberValue(memValue);
        }
        this.currentObject = eo;
        this.currentToken = CppToken.CPP_TOKEN_ENUM;
        this.enumObjList.add(eo);
    }

    @Override
    public void enterTypeSpecifier(CPP14Parser.TypeSpecifierContext ctx) {
        super.enterTypeSpecifier(ctx);
        System.out.println("c/cpp type: " + ctx.getText());
    }

    @Override
    public void enterTrailingTypeSpecifier(CPP14Parser.TrailingTypeSpecifierContext ctx) {
        super.enterTrailingTypeSpecifier(ctx);
        System.out.println("c/cpp enterTrailingTypeSpecifier: " + ctx.getText());
    }

    @Override
    public void enterElaboratedTypeSpecifier(CPP14Parser.ElaboratedTypeSpecifierContext ctx) {
        super.enterElaboratedTypeSpecifier(ctx);
        System.out.println("c/cpp enterElaboratedTypeSpecifier: " + ctx.getText());
    }

    @Override
    public void enterTypeNameSpecifier(CPP14Parser.TypeNameSpecifierContext ctx) {
        super.enterTypeNameSpecifier(ctx);
        System.out.println("c/cpp enterTypeNameSpecifier: " + ctx.getText());
    }

    @Override
    public void enterCvQualifier(CPP14Parser.CvQualifierContext ctx) {
        super.enterCvQualifier(ctx);
        System.out.println("c/cpp enterCvQualifier: " + ctx.getText());
    }

    @Override
    public void enterTypedefName(CPP14Parser.TypedefNameContext ctx) {
        super.enterTypedefName(ctx);
        System.out.println("c/cpp typedef name: " + ctx.getText());
    }

    @Override
    public void enterTemplateDeclaration(CPP14Parser.TemplateDeclarationContext ctx) {
        super.enterTemplateDeclaration(ctx);
        System.out.println("c/cpp template: " + ctx.getText());
    }

    @Override
    public void enterAttributeDeclaration(CPP14Parser.AttributeDeclarationContext ctx) {
        super.enterAttributeDeclaration(ctx);
        System.out.println("c/cpp attribute: " + ctx.getText());
    }

    @Override
    public void exitTranslationUnit(CPP14Parser.TranslationUnitContext ctx) {
        super.exitTranslationUnit(ctx);
        System.out.println("c/cpp exit translation unit: " + ctx.getText());
    }

    @Override
    public void enterFunctionSpecifier(CPP14Parser.FunctionSpecifierContext ctx) {
        super.enterFunctionSpecifier(ctx);
        System.out.println("c/cpp enterFunctionSpecifier: " + ctx.getText());
    }

    @Override
    public String dump2JsonStr() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(this);
    }
}
