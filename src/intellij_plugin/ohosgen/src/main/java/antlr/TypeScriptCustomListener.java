package antlr;

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
    }
}
