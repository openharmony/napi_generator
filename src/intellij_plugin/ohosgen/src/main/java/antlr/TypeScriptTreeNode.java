package antlr;

import java.util.ArrayList;
import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description typescript parse tree node
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeScriptTreeNode {
    private String type;
    private String text;
    private List<TypeScriptTreeNode> children;

    public TypeScriptTreeNode() {}

    public TypeScriptTreeNode(String type, String text) {
        this.type = type;
        this.text = text;
        this.children = new ArrayList<>();
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setChildren(List<TypeScriptTreeNode> children) {
        this.children = children;
    }

    public List<TypeScriptTreeNode> getChildren() {
        return children;
    }
}
