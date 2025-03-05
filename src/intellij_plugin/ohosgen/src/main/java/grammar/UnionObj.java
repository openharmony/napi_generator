package grammar;

import kotlinx.html.S;

/**
 * <h3>类名：该类用于xxx</h3>
 * description union grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class UnionObj {
    private String name;
    private String alias;
    private ParamObj[] memList;

    /**
     * 构造函数
     */
    public UnionObj() {}

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param pl 参数
     */
    public UnionObj(String nv, String av, ParamObj[] pl) {
        this.name = nv;
        this.alias = av;
        this.memList = pl;
    }

    /**
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取名称
     *
     * @return 名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置名称
     *
     * @param alias 名称
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取名称
     *
     * @return 名称
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 获取成员
     *
     * @return 成员
     */
    public ParamObj[] getMemList() {
        return memList;
    }

    /**
     * 设置成员
     *
     * @param memList 成员
     */
    public void setMemList(ParamObj[] memList) {
        this.memList = memList;
    }
}
