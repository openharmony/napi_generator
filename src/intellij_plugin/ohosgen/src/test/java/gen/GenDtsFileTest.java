package gen;

import grammar.EnumObj;
import grammar.ParseObj;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.junit.jupiter.api.Assertions.*;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class GenDtsFileTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void genContent() {
    }

    @Test
    void genFile() {
    }

    @Test
    void genInterfaceList() {
    }

    @Test
    void genEnumList() {
        GeneratorBase gb = GenerateFactory.getGenerator("DTS");
        ParseObj po = new ParseObj();
        EnumObj eo = new EnumObj();
        eo.setName("TestEnum");
        List<String> ml = new CopyOnWriteArrayList<>();
        ml.add("ONE");
        ml.add("TWO");
        eo.setMemberList(ml);
        List<EnumObj> eol = new CopyOnWriteArrayList<>();
        eol.add(eo);
        po.setEnumList(eol);
        gb.genEnumList(po.getEnumList());

        if (gb instanceof GenDtsFile gdf) {
            String enumContent = gdf.getEnumContent();
            System.out.println("genEnum: " + enumContent);
            String expect = "\nexport enum TestEnum {\n" +
                    "\tONE,\n" +
                    "\tTWO,\n" +
                    "};\n";
            assertEquals(expect, enumContent);
        }
    }

    @Test
    void genClassList() {
    }

    @Test
    void genFuncList() {
    }

    @Test
    void genStructList() {
    }

    @Test
    void genTypeList() {
    }

    @Test
    void genUnionList() {
    }

    @Test
    void genVarList() {
    }
}