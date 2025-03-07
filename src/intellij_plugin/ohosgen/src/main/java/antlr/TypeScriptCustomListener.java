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

package antlr;

import org.antlr.v4.runtime.tree.ParseTree;

import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript custom visitor
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptCustomListener extends TypeScriptParserBaseListener {
    @Override
    public void enterVariableDeclaration(TypeScriptParser.VariableDeclarationContext ctx) {
        String varName = ctx.identifierOrKeyWord().getText();
        System.out.println("变量名: " + varName);
        System.out.println("var : " + ctx.getText());
        String typeAnno = ctx.typeAnnotation() != null ? ctx.typeAnnotation().getText() : "";
        System.out.println("type : " + typeAnno);
        List<TypeScriptParser.SingleExpressionContext> secList = ctx.singleExpression();
        for (TypeScriptParser.SingleExpressionContext sec : secList) {
            String value = sec.getText();
            System.out.println("single : " + value);
            int cnt = sec.getChildCount();
            System.out.println("single child cnt: " + cnt);
            for (int i = 0; i < cnt; i++) {
                ParseTree pt = sec.getChild(i);
                System.out.println("single child pt: " + pt.getText());
            }
        }

        System.out.println("------------------------------");
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
        String typeAnno = ctx.callSignature().typeAnnotation().getText();
        System.out.println("Function typeAnno: " + typeAnno);
        if (ctx.callSignature().parameterList() != null) {
            List<TypeScriptParser.ParameterContext> plc = ctx.callSignature().parameterList().parameter();
            for (TypeScriptParser.ParameterContext pc : plc) {
                System.out.println("Function param: " + pc.getText());
                TypeScriptParser. RequiredParameterContext rpc = pc.requiredParameter();
                String ta = rpc.typeAnnotation().getText();
                String iop = rpc.identifierOrPattern().getText();
                System.out.println("Function type: " + ta + " name: " + iop);
            }
        }
        System.out.println("--------------------");
    }

    @Override
    public void enterClassDeclaration(TypeScriptParser.ClassDeclarationContext ctx) {
        super.enterClassDeclaration(ctx);
        // 提取类名、方法、属性等信息
        String className = ctx.identifier().getText();
        System.out.println("Class: " + className);


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
    public void enterClassElement(TypeScriptParser.ClassElementContext ctx) {
        super.enterClassElement(ctx);
        System.out.println("Class element: " + ctx.getText());
        TypeScriptParser.StatementContext sc = ctx.statement();
        if (sc != null) {
            System.out.println("Class state: " + sc.getText());
        }

        TypeScriptParser.PropertyMemberDeclarationContext pmdc = ctx.propertyMemberDeclaration();
        if (pmdc != null) {
            System.out.println("Class property: " + pmdc.getText());
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
        String typeAnno = ctx.callSignature().typeAnnotation().getText();
        System.out.println("Method typeAnno: " + typeAnno);
        List<TypeScriptParser.ParameterContext> plc = ctx.callSignature().parameterList().parameter();
        for (TypeScriptParser.ParameterContext pc : plc) {
            System.out.println("Method param: " + pc.getText());
            TypeScriptParser. RequiredParameterContext rpc = pc.requiredParameter();
            String ta = rpc.typeAnnotation().getText();
            String iop = rpc.identifierOrPattern().getText();
            System.out.println("Method type: " + ta + " name: " + iop);
        }
        int cnt = ctx.getChildCount();
        System.out.println("Method param cnt: " + cnt);
    }

    @Override
    public void enterPropertyDeclarationExpression(TypeScriptParser.PropertyDeclarationExpressionContext ctx) {
        super.enterPropertyDeclarationExpression(ctx);
        System.out.println("Property property: " + ctx.getText());
        String propertyName = ctx.propertyName().getText();
        String typeName = ctx.typeAnnotation().getText();
        System.out.println("Property name: " + propertyName + " type: " + typeName);
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
    public void enterInterfaceDeclaration(TypeScriptParser.InterfaceDeclarationContext ctx) {
        super.enterInterfaceDeclaration(ctx);
        System.out.println("find interface Declare: " + ctx.getText());
        String interfaceName = ctx.identifier().getText();
        System.out.println("interface name: " + interfaceName);
        TypeScriptParser.ObjectTypeContext otc = ctx.objectType();
        TypeScriptParser.TypeBodyContext tbc = otc.typeBody();
        TypeScriptParser.TypeMemberListContext tlc = tbc.typeMemberList();
        List<TypeScriptParser.TypeMemberContext> tmcList = tlc.typeMember();
        for (TypeScriptParser.TypeMemberContext tmc : tmcList) {
            String callSign = tmc.callSignature().getText();
            System.out.println("interface callSign: " + callSign);
            String typeAnno = tmc.callSignature().typeAnnotation().getText();
            System.out.println("interface typeAnno: " + typeAnno);
            List<TypeScriptParser.ParameterContext> plc = tmc.callSignature().parameterList().parameter();
            for (TypeScriptParser.ParameterContext pc : plc) {
                System.out.println("interface param: " + pc.getText());
                TypeScriptParser. RequiredParameterContext rpc = pc.requiredParameter();
                String ta = rpc.typeAnnotation().getText();
                String iop = rpc.identifierOrPattern().getText();
                System.out.println("interface type: " + ta + " name: " + iop);
            }
        }
        System.out.println("----------------");
    }

    @Override
    public void enterAbstractDeclaration(TypeScriptParser.AbstractDeclarationContext ctx) {
        super.enterAbstractDeclaration(ctx);
        System.out.println("find abstract Declare: " + ctx.toString());
    }

    @Override
    public void enterExportDeclaration(TypeScriptParser.ExportDeclarationContext ctx) {
        super.enterExportDeclaration(ctx);
        System.out.println("find export Declare: " + ctx.toString());
    }


}
