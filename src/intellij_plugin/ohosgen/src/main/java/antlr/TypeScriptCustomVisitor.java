package antlr;

import java.util.List;
import java.util.ArrayList;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript custom visitor
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptCustomVisitor extends TypeScriptParserBaseVisitor<Void> {
    private List<String> functionNames = new ArrayList<>();

    public List<String> getFunctionNames() { return functionNames; }

    @Override
    public Void visitFunctionDeclaration(TypeScriptParser.FunctionDeclarationContext ctx) {
        functionNames.add(ctx.identifier().getText());
        return super.visitFunctionDeclaration(ctx);
    }
}
