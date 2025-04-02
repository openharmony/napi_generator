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

package parse;

import grammar.*;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CodePointCharStream;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

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
class ParseCppTest {

    private final String testCStreamFile1 = "#ifndef COAP_ADDRESS_H_\n" +
            "#define COAP_ADDRESS_H_\n" +
            "\n" +
            "#include <assert.h>\n" +
            "#include <stdint.h>\n" +
            "#include <string.h>\n" +
            "#include <sys/types.h>\n" +
            "#include \"libcoap.h\"\n" +
            "\n" +
            "#include \"coap3/coap_pdu.h\"\n" +
            "\n" +
            "#if defined(WITH_LWIP)\n" +
            "\n" +
            "#include <lwip/ip_addr.h>\n" +
            "\n" +
            "struct coap_address_t {\n" +
            "  uint16_t port;\n" +
            "  ip_addr_t addr;\n" +
            "};\n" +
            "\n" +
            "/**\n" +
            " * Returns the port from @p addr in host byte order.\n" +
            " */\n" +
            "COAP_STATIC_INLINE uint16_t\n" +
            "coap_address_get_port(const coap_address_t *addr) {\n" +
            "  return addr->port;\n" +
            "}\n" +
            "\n" +
            "/**\n" +
            " * Sets the port field of @p addr to @p port (in host byte order).\n" +
            " */\n" +
            "COAP_STATIC_INLINE void\n" +
            "coap_address_set_port(coap_address_t *addr, uint16_t port) {\n" +
            "  addr->port = port;\n" +
            "}\n" +
            "\n" +
            "#define _coap_address_equals_impl(A, B) \\\n" +
            "  ((A)->port == (B)->port &&        \\\n" +
            "   (!!ip_addr_cmp(&(A)->addr,&(B)->addr)))\n" +
            "\n" +
            "#define _coap_address_isany_impl(A)  ip_addr_isany(&(A)->addr)\n" +
            "\n" +
            "#define _coap_is_mcast_impl(Address) ip_addr_ismulticast(&(Address)->addr)\n" +
            "\n" +
            "#ifdef COAP_SUPPORT_SOCKET_BROADCAST\n" +
            "#define _coap_is_bcast_impl(Address) ip_addr_isbroadcast(&(Address)->addr)\n" +
            "#endif\n" +
            "\n" +
            "#elif defined(WITH_CONTIKI)\n" +
            "\n" +
            "#include \"uip.h\"\n" +
            "\n" +
            "struct coap_address_t {\n" +
            "  uip_ipaddr_t addr;\n" +
            "  uint16_t port;\n" +
            "};";

    private final String testCStreamFile2 = "/*---------------------------------------\n" +
            " * dEQP glslang integration\n" +
            " * ------------------------\n" +
            " *\n" +
            " *\n" +
            " * Licensed under the Apache License, Version 2.0 (the \"License\");\n" +
            " * you may not use this file except in compliance with the License.\n" +
            " * You may obtain a copy of the License at\n" +
            " *\n" +
            " *      http://www.apache.org/licenses/LICENSE-2.0\n" +
            " *\n" +
            " * Unless required by applicable law or agreed to in writing, software\n" +
            " * distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
            " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
            " * See the License for the specific language governing permissions and\n" +
            " * limitations under the License.\n" +
            " *\n" +
            " *//*!\n" +
            " * \\file\n" +
            " * \\brief glslang OS interface.\n" +
            " *//*--------------------------------------------------------------------*/\n" +
            "\n" +
            "#include \"osinclude.h\"\n" +
            "\n" +
            "#include \"deThread.h\"\n" +
            "#include \"deThreadLocal.h\"\n" +
            "#include \"deMutex.h\"\n" +
            "\n" +
            "namespace glslang\n" +
            "{\n" +
            "\n" +
            "DE_STATIC_ASSERT(sizeof(deThreadLocal)\t== sizeof(OS_TLSIndex));\n" +
            "DE_STATIC_ASSERT(sizeof(deThread)\t\t== sizeof(void*));\n" +
            "\n" +
            "// Thread-local\n" +
            "\n" +
            "OS_TLSIndex OS_AllocTLSIndex (void)\n" +
            "{\n" +
            "\treturn (OS_TLSIndex)deThreadLocal_create();\n" +
            "}\n" +
            "\n" +
            "bool OS_SetTLSValue (OS_TLSIndex nIndex, void* lpvValue)\n" +
            "{\n" +
            "\tdeThreadLocal_set((deThreadLocal)nIndex, lpvValue);\n" +
            "\treturn true;\n" +
            "}\n" +
            "\n" +
            "bool OS_FreeTLSIndex (OS_TLSIndex nIndex)\n" +
            "{\n" +
            "\tdeThreadLocal_destroy((deThreadLocal)nIndex);\n" +
            "\treturn true;\n" +
            "}\n" +
            "\n" +
            "void* OS_GetTLSValue (OS_TLSIndex nIndex)\n" +
            "{\n" +
            "\treturn deThreadLocal_get((deThreadLocal)nIndex);\n" +
            "}\n" +
            "\n" +
            "// Global lock\n" +
            "\n" +
            "static deMutex s_globalLock = 0;\n" +
            "\n" +
            "void InitGlobalLock (void)\n" +
            "{\n" +
            "\tDE_ASSERT(s_globalLock == 0);\n" +
            "\ts_globalLock = deMutex_create(DE_NULL);\n" +
            "}\n" +
            "\n" +
            "void GetGlobalLock (void)\n" +
            "{\n" +
            "\tdeMutex_lock(s_globalLock);\n" +
            "}\n" +
            "\n" +
            "void ReleaseGlobalLock (void)\n" +
            "{\n" +
            "\tdeMutex_unlock(s_globalLock);\n" +
            "}\n" +
            "\n" +
            "// Threading\n" +
            "\n" +
            "DE_STATIC_ASSERT(sizeof(void*) >= sizeof(deThread));\n" +
            "\n" +
            "static void EnterGenericThread (void* entry)\n" +
            "{\n" +
            "\t((TThreadEntrypoint)entry)(DE_NULL);\n" +
            "}\n" +
            "\n" +
            "void* OS_CreateThread (TThreadEntrypoint entry)\n" +
            "{\n" +
            "\treturn (void*)(deUintptr)deThread_create(EnterGenericThread, (void*)entry, DE_NULL);\n" +
            "}\n" +
            "\n" +
            "void OS_WaitForAllThreads (void* threads, int numThreads)\n" +
            "{\n" +
            "\tfor (int ndx = 0; ndx < numThreads; ndx++)\n" +
            "\t{\n" +
            "\t\tconst deThread thread = (deThread)(deUintptr)((void**)threads)[ndx];\n" +
            "\t\tdeThread_join(thread);\n" +
            "\t\tdeThread_destroy(thread);\n" +
            "\t}\n" +
            "}\n" +
            "\n" +
            "void OS_Sleep (int milliseconds)\n" +
            "{\n" +
            "\tdeSleep(milliseconds);\n" +
            "}\n" +
            "\n" +
            "void OS_DumpMemoryCounters (void)\n" +
            "{\n" +
            "\t// Not used\n" +
            "}\n" +
            "\n" +
            "} // glslang\n";

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void parseFile() {
    }

    @Test
    void parseContent() {
    }

    @Test
    void parseCStreamEnum1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "enum Colors {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("Colors", eo.getName());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "enum {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("", eo.getName());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef enum {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "} Colors_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("", eo.getName());
        assertEquals("Colors_T", eo.getAlias());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamEnum4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef enum Colors {\n" +
                "  Red = 1,\n" +
                "  Green = 2,\n" +
                "  Blue = 3\n" +
                "} Colors_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<EnumObj> eol = po.getEnumList();
        assertEquals(1, eol.size());
        EnumObj eo = eol.get(0);
        assertEquals("Colors", eo.getName());
        assertEquals("Colors_T", eo.getAlias());
        List<String> ml = eo.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("Red", ml.get(0));
        assertEquals("Green", ml.get(1));
        assertEquals("Blue", ml.get(2));
        List<String> vl = eo.getValueList();
        assertEquals(3, vl.size());
        assertEquals("1", vl.get(0));
        assertEquals("2", vl.get(1));
        assertEquals("3", vl.get(2));
    }

    @Test
    void parseCStreamStruct1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "struct tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("tree_el", so.getName());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "struct {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("", so.getName());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef struct {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamStruct4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef struct tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<StructObj> sol = po.getStructList();
        assertEquals(1, sol.size());
        StructObj so = sol.get(0);
        assertEquals("tree_el", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemberList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "union tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("tree_el", so.getName());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "union {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef union {\n" +
                "   int val;\n" +
                "   Tree_el_T * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("Tree_el_T", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("Tree_el_T", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamUnion4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef union tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} Tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<UnionObj> sol = po.getUnionList();
        assertEquals(1, sol.size());
        UnionObj so = sol.get(0);
        assertEquals("tree_el", so.getName());
        assertEquals("Tree_el_T", so.getAlias());

        List<ParamObj> ml = so.getMemList();
        assertEquals(3, ml.size());
        assertEquals("val", ml.get(0).getName());
        assertEquals("int", ml.get(0).getType());
        assertEquals("structtree_el", ml.get(1).getType());
        assertEquals("*right", ml.get(1).getName());
        assertEquals("structtree_el", ml.get(2).getType());
        assertEquals("*left", ml.get(2).getName());

    }

    @Test
    void parseCStreamClass1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "class tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el", co.getName());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamClass2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "class {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "};";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }
    @Test
    void parseCStreamClass3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef class {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el_T", co.getAlias());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamClass4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "typedef class tree_el {\n" +
                "   int val;\n" +
                "   struct tree_el * right, * left;\n" +
                "} tree_el_T;";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<ClassObj> col = po.getClassList();
        assertEquals(1, col.size());
        ClassObj co = col.get(0);
        assertEquals("tree_el", co.getName());
        assertEquals("tree_el_T", co.getAlias());

        List<ParamObj> pl = co.getParamList();
        assertEquals(3, pl.size());
        assertEquals("val", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
        assertEquals("structtree_el", pl.get(1).getType());
        assertEquals("*right", pl.get(1).getName());
        assertEquals("structtree_el", pl.get(2).getType());
        assertEquals("*left", pl.get(2).getName());

    }

    @Test
    void parseCStreamFunction1() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo();";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

    }

    @Test
    void parseCStreamFunction2() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( short s );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("s", pl.get(0).getName());
        assertEquals("short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction3() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( short int si );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("si", pl.get(0).getName());
        assertEquals("short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction4() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed short ss );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ss", pl.get(0).getName());
        assertEquals("signed short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction5() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed short int ssi);";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ssi", pl.get(0).getName());
        assertEquals("signed short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction6() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned short us );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("us", pl.get(0).getName());
        assertEquals("unsigned short", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction7() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned short int usi );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("usi", pl.get(0).getName());
        assertEquals("unsigned short int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction8() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( int i);";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("i", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction9() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed s );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("s", pl.get(0).getName());
        assertEquals("signed", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction10() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed int si );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("si", pl.get(0).getName());
        assertEquals("signed int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction11() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned u );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("u", pl.get(0).getName());
        assertEquals("unsigned", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction12() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned int ui );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ui", pl.get(0).getName());
        assertEquals("unsigned int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction13() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long l );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("l", pl.get(0).getName());
        assertEquals("long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction14() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long int li );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("li", pl.get(0).getName());
        assertEquals("long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction15() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long sl );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sl", pl.get(0).getName());
        assertEquals("signed long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction16() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long int sli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sli", pl.get(0).getName());
        assertEquals("signed long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction17() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long ul );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ul", pl.get(0).getName());
        assertEquals("unsigned long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction18() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long int uli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("uli", pl.get(0).getName());
        assertEquals("unsigned long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction19() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long ll );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ll", pl.get(0).getName());
        assertEquals("long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction20() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long int lli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("lli", pl.get(0).getName());
        assertEquals("long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction21() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long long sll );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("sll", pl.get(0).getName());
        assertEquals("signed long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction22() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( signed long long int slli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("slli", pl.get(0).getName());
        assertEquals("signed long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction23() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long long ull );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ull", pl.get(0).getName());
        assertEquals("unsigned long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction24() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long long int ulli );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ulli", pl.get(0).getName());
        assertEquals("unsigned long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction25() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( double d );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("d", pl.get(0).getName());
        assertEquals("double", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction26() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long double ld );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("ld", pl.get(0).getName());
        assertEquals("long double", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction27() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("unsigned long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction28() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( unsigned long int );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("unsigned long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction29() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("long long", pl.get(0).getType());
    }

    @Test
    void parseCStreamFunction30() {
        ParseBase parser = ParseFactory.getParser("cpp");
        String testEnum = "int foo( long long int );";
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(1, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("foo", fo.getName());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("long long int", pl.get(0).getType());
    }

    @Test
    void parseCStreamFile1() {
        ParseBase parser = ParseFactory.getParser("h2dts");
        String testEnum = testCStreamFile1;
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(2, fol.size());

        FuncObj fo = fol.get(0);
        assertEquals("coap_address_get_port", fo.getName());
        assertEquals("COAP_STATIC_INLINE uint16_t", fo.getRetValue());
        List<ParamObj> pol = fo.getParamList();
        ParamObj poItem = pol.get(0);
        assertEquals("constcoap_address_t", poItem.getType());
        assertEquals("*addr", poItem.getName());

        fo = fol.get(1);
        assertEquals("coap_address_set_port", fo.getName());
        assertEquals("COAP_STATIC_INLINE void", fo.getRetValue());
        pol = fo.getParamList();
        poItem = pol.get(0);
        assertEquals("coap_address_t", poItem.getType());
        assertEquals("*addr", poItem.getName());
        poItem = pol.get(1);
        assertEquals("uint16_t", poItem.getType());
        assertEquals("port", poItem.getName());

        List<StructObj> sol = po.getStructList();
        assertEquals(2, sol.size());

        StructObj soItem = sol.get(0);
        assertEquals("coap_address_t", soItem.getName());
        pol = soItem.getMemberList();
        poItem = pol.get(0);
        assertEquals("uint16_t", poItem.getType());
        assertEquals("port", poItem.getName());
        poItem = pol.get(1);
        assertEquals("ip_addr_t", poItem.getType());
        assertEquals("addr", poItem.getName());

        soItem = sol.get(1);
        assertEquals("coap_address_t", soItem.getName());
        pol = soItem.getMemberList();
        poItem = pol.get(0);
        assertEquals("uip_ipaddr_t", poItem.getType());
        assertEquals("addr", poItem.getName());
        poItem = pol.get(1);
        assertEquals("uint16_t", poItem.getType());
        assertEquals("port", poItem.getName());

    }

    @Test
    void parseCStreamFile2() {
        ParseBase parser = ParseFactory.getParser("h2dts");
        String testEnum = testCStreamFile2;
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(12, fol.size());
        FuncObj fo = fol.get(0);
        assertEquals("OS_AllocTLSIndex", fo.getName());
        assertEquals("OS_TLSIndex", fo.getRetValue());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("void", pl.get(0).getType());

        fo = fol.get(1);
        assertEquals("OS_SetTLSValue", fo.getName());
        assertEquals("bool", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(2, pl.size());
        assertEquals("nIndex", pl.get(0).getName());
        assertEquals("OS_TLSIndex", pl.get(0).getType());
        assertEquals("*lpvValue", pl.get(1).getName());
        assertEquals("void", pl.get(1).getType());

        fo = fol.get(2);
        assertEquals("OS_FreeTLSIndex", fo.getName());
        assertEquals("bool", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("nIndex", pl.get(0).getName());
        assertEquals("OS_TLSIndex", pl.get(0).getType());

        fo = fol.get(3);
        assertEquals("OS_GetTLSValue", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("nIndex", pl.get(0).getName());
        assertEquals("OS_TLSIndex", pl.get(0).getType());

        fo = fol.get(4);
        assertEquals("InitGlobalLock", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("void", pl.get(0).getType());


    }

    @Test
    void parseCStreamFile3() {
        ParseBase parser = ParseFactory.getParser("h2dts");
        String testEnum = testCStreamFile2;
        CodePointCharStream cStream = CharStreams.fromString(testEnum);
        ParseObj po = parser.parseCStream(cStream);
        List<FuncObj> fol = po.getFuncList();
        assertEquals(12, fol.size());

        FuncObj fo = fol.get(5);
        assertEquals("GetGlobalLock", fo.getName());
        assertEquals("void", fo.getRetValue());

        List<ParamObj> pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("void", pl.get(0).getType());

        fo = fol.get(8);
        assertEquals("OS_CreateThread", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("entry", pl.get(0).getName());
        assertEquals("TThreadEntrypoint", pl.get(0).getType());

        fo = fol.get(9);
        assertEquals("OS_WaitForAllThreads", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(2, pl.size());
        assertEquals("*threads", pl.get(0).getName());
        assertEquals("void", pl.get(0).getType());
        assertEquals("numThreads", pl.get(1).getName());
        assertEquals("int", pl.get(1).getType());

        fo = fol.get(10);
        assertEquals("OS_Sleep", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("milliseconds", pl.get(0).getName());
        assertEquals("int", pl.get(0).getType());

        fo = fol.get(11);
        assertEquals("OS_DumpMemoryCounters", fo.getName());
        assertEquals("void", fo.getRetValue());

        pl = fo.getParamList();
        assertEquals(1, pl.size());
        assertEquals("", pl.get(0).getName());
        assertEquals("void", pl.get(0).getType());
    }

    @Test
    void genParseResult() {
    }

    @Test
    void parseEnum() {
    }

    @Test
    void parseUnion() {
    }

    @Test
    void parseStruct() {
    }

    @Test
    void parseClass() {
    }

    @Test
    void parseFunc() {
    }

    @Test
    void parseType() {
    }
}