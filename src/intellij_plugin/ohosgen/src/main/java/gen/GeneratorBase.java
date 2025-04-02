package gen;

import grammar.*;

import java.util.List;

/**
 * <h3>类名：该类用于xxx</h3>
 * description base of generator
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class GeneratorBase {
    public void genContent(ParseObj po) {
        System.out.println("GeneratorBase: genContent");
    }

    public void genFile(String filePath, String fileName) {
        System.out.println("GeneratorBase: path is " + filePath + ", file is " + fileName);
    }

    public void genInterfaceList(List<InterfaceObject> iol) {
        System.out.println("GeneratorBase: genInterfaceList");
    };

    public void genEnumList(List<EnumObj> eol) {
        System.out.println("GeneratorBase: genEnumList");

    };

    public void genClassList(List<ClassObj> col) {
        System.out.println("GeneratorBase: genClassList");
    };

    public void genFuncList(List<FuncObj> fol) {
        System.out.println("GeneratorBase: genFuncList");
    };

    public void genStructList(List<StructObj> sol) {
        System.out.println("GeneratorBase: genStructList");
    };

    public void genTypeList(List<TypeObj> tol) {
        System.out.println("GeneratorBase: genTypeList");    };

    public void genUnionList(List<UnionObj> uol) {
        System.out.println("GeneratorBase: genUnionList");
    };

    public void genVarList(List<ParamObj> pol) {
        System.out.println("GeneratorBase: genVarList");
    }
}
