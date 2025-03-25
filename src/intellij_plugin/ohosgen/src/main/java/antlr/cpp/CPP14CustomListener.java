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
import org.apache.xmlbeans.impl.xb.xsdschema.UnionDocument;
import utils.Constants;
import utils.CppToken;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static utils.CppToken.CPP_TOKEN_ENUM;

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
     * @return 关键字
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

    @Override
    public void enterMemberdeclaration(CPP14Parser.MemberdeclarationContext ctx) {
        super.enterMemberdeclaration(ctx);
        System.out.println("c/cpp Memberdeclaration: " + ctx.getText());
        if (this.currentObject instanceof  StructObj so) {
            String type = ctx.declSpecifierSeq().getText();
            String name = ctx.memberDeclaratorList().getText();
            List<CPP14Parser.MemberDeclaratorContext> mdcl = ctx.memberDeclaratorList().memberDeclarator();
            for (CPP14Parser.MemberDeclaratorContext mdc : mdcl) {
                ParamObj po = new ParamObj();
                po.setName(mdc.getText());
                po.setType(type);
                so.addMember(po);
            }
        } else if (this.currentObject instanceof  UnionObj uo) {
            String type = ctx.declSpecifierSeq().getText();
            String name = ctx.memberDeclaratorList().getText();
            List<CPP14Parser.MemberDeclaratorContext> mdcl = ctx.memberDeclaratorList().memberDeclarator();
            for (CPP14Parser.MemberDeclaratorContext mdc : mdcl) {
                ParamObj po = new ParamObj();
                po.setName(mdc.getText());
                po.setType(type);
                uo.addMember(po);
            }
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

    @Override
    public void enterSimpleDeclaration(CPP14Parser.SimpleDeclarationContext ctx) {
        super.enterSimpleDeclaration(ctx);
        System.out.println("c/cpp enterSimpleDeclaration: " + ctx.getText());
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
        }

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
    public void enterFunctionDefinition(CPP14Parser.FunctionDefinitionContext ctx) {
        super.enterFunctionDefinition(ctx);
        System.out.println("c/cpp function: " + ctx.getText());
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
            String memValue = edc.constantExpression().getText();
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
    public String dump2JsonStr() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(this);
    }
}
