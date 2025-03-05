package grammar;

/**
 * <h3>类名：该类用于xxx</h3>
 * description param grammar
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class ParamObj {
    private String type;
    private String name;
    private int arraySize;
    private int[] asList;

    /**
     * 构造函数
     */
    public ParamObj() {}

    /**
     * 构造函数
     *
     * @param tv 类型
     * @param nv 名称
     * @param as 数组下标
     * @param asl 数组下标数组
     */
    public ParamObj(String tv, String nv, int as, int[] asl) {
        this.type = tv;
        this.name = nv;
        this.arraySize = as;
        this.asList = asl;
    }

    /**
     * 获取名字
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
     * 获取类型
     *
     * @return 类型
     */
    public String getType() {
        return type;
    }

    /**
     * 设置类型
     *
     * @param type 类型
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * 获取数组下标
     *
     * @return 数组下标
     */
    public int getArraySize() {
        return arraySize;
    }

    /**
     * 获取数组下标
     *
     * @return 数组下班
     */
    public int[] getAsList() {
        return asList;
    }

    /**
     * 设置数组下标
     *
     * @param arraySize 数组下标
     */
    public void setArraySize(int arraySize) {
        this.arraySize = arraySize;
    }

    /**
     * 设置数组下标
     *
     * @param asList 数组下标
     */
    public void setAsList(int[] asList) {
        this.asList = asList;
    }
}
