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

import java.util.ArrayList;
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
public class CPP14CustomVisitor extends CPP14ParserBaseVisitor<Void> {
    private List<String> functionNames = new ArrayList<>();

    public List<String> getFunctionNames() { return functionNames; }

    @Override
    public Void visitClassSpecifier(CPP14Parser.ClassSpecifierContext ctx) {
        return super.visitClassSpecifier(ctx);
    }

    @Override
    public Void visitFunctionDefinition(CPP14Parser.FunctionDefinitionContext ctx) {
        return super.visitFunctionDefinition(ctx);
    }

    @Override
    public Void visitFunctionSpecifier(CPP14Parser.FunctionSpecifierContext ctx) {
        return super.visitFunctionSpecifier(ctx);
    }

}
