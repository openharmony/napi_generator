package grammar;

/**
 * <h3>类名：该类用于xxx</h3>
 * description type grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class TypeObj {
    private String name;
    private String alias;
    private ParamObj[] paramList;
    private FuncObj[] funcList;
    private String[] typeList;

    /**
     * 构造函数
     */
    public TypeObj() {}

    /**
     * 构造函数
     *
     * @param nv 名称
     * @param av 别名
     * @param pl 参数
     * @param fl 方法
     * @param tl 类型
     */
    public TypeObj(String nv, String av, ParamObj[] pl, FuncObj[] fl, String[] tl) {
        this.name = nv;
        this.alias = av;
        this.paramList = pl;
        this.funcList = fl;
        this.typeList = tl;
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
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取别名
     *
     * @return 别名
     */
    public String getAlias() {
        return alias;
    }

    /**
     * 设置别名
     *
     * @param alias 别名
     */
    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取参数
     *
     * @return 参数
     */
    public ParamObj[] getParamList() {
        return paramList;
    }

    /**
     * 设置参数
     *
     * @param paramList 参数
     */
    public void setParamList(ParamObj[] paramList) {
        this.paramList = paramList;
    }

    /**
     * 获取类型
     *
     * @return 类型
     */
    public String[] getTypeList() {
        return typeList;
    }

    /**
     * 设置类型
     * @param typeList 类型
     */
    public void setTypeList(String[] typeList) {
        this.typeList = typeList;
    }

    /**
     * 获取方法
     *
     * @return 方法
     */
    public FuncObj[] getFuncList() {
        return funcList;
    }

    /**
     * 设置方法
     *
     * @param funcList 方法
     */
    public void setFuncList(FuncObj[] funcList) {
        this.funcList = funcList;
    }
}
