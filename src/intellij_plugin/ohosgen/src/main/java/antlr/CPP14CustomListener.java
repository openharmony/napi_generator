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
public class CPP14CustomListener extends CPP14ParserBaseListener {
    @Override
    public void enterAbstractDeclarator(CPP14Parser.AbstractDeclaratorContext ctx) {
        super.enterAbstractDeclarator(ctx);
        System.out.println("c/cpp struct: " + ctx.getText());
    }

    @Override
    public void enterClassSpecifier(CPP14Parser.ClassSpecifierContext ctx) {
        super.enterClassSpecifier(ctx);
        System.out.println("c/cpp class: " + ctx.getText());
    }

    @Override
    public void enterDeclaration(CPP14Parser.DeclarationContext ctx) {
        super.enterDeclaration(ctx);
        System.out.println("c/cpp declaration: " + ctx.getText());
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
    }

    @Override
    public void enterTypeSpecifier(CPP14Parser.TypeSpecifierContext ctx) {
        super.enterTypeSpecifier(ctx);
        System.out.println("c/cpp type: " + ctx.getText());
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

}
