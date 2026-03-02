# ohclitools 技能说明

本技能用于将 **clitools** 目录集成到工程编译路径中，并在对应 BUILD.gn 中增加编译对象，最后进行编译验证。

---

## 一、将 clitools 拷贝到编译路径

1. **源路径**：`src/.claude/skills/ohclitools/clitools/`  
   - 包含：`BUILD.gn`、`*.cpp`、`*.h`、`README.md` 等。

2. **目标路径**：按子系统/模块放到对应 **test 目录下**，统一使用子目录名 `clitools`。  
   - 示例（蓝牙）：`src/foundation/communication/bluetooth/test/clitools/`  
   - 通用形式：`<子系统或模块根>/<模块名>/test/clitools/`

3. **操作示例**（在仓库根目录执行）：
   ```bash
   # 以蓝牙为例
   TARGET_TEST_DIR="src/foundation/communication/bluetooth/test"
   mkdir -p "$TARGET_TEST_DIR/clitools"
   cp -r src/.claude/skills/ohclitools/clitools/* "$TARGET_TEST_DIR/clitools/"
   ```
   - 拷贝后目标目录中应包含：`BUILD.gn`、`clitools.cpp`、`common.cpp`、`mischandle.cpp`、`common_dump.cpp`、`common_callback.cpp` 以及对应头文件等。

4. **注意**：  
   - 若目标 test 下已有 `clitools` 目录，可按需覆盖或先备份。  
   - 当前 `clitools/BUILD.gn` 内使用变量 `BLUETOOTH_TOOLS_DIR = "$SUBSYSTEM_DIR/bluetooth/test/clitools"`，即约定该 BUILD.gn 所在目录即为源码目录；拷贝到上述路径后无需改路径即可参与编译。

---

## 二、在对应 BUILD.gn 中增加 clitools 编译对象

1. **需要修改的 BUILD.gn**：**test 目录下的 BUILD.gn**（即 clitools 的上一级）。  
   - 示例：`src/foundation/communication/bluetooth/test/BUILD.gn`。

2. **修改方式**：在已有的 `group`（如 `unit_test`）的 `deps` 中增加对 clitools 中目标的依赖。  
   - 若 clitools 的 BUILD.gn 中目标名为 `btcommand`，则增加：`"clitools:btcommand"`。  
   - 若为其他可执行或静态库目标，将 `clitools:<目标名>` 加入 `deps` 即可。

3. **示例**（在 `group("unit_test")` 的 `deps` 中增加一行）：
   ```gn
   group("unit_test") {
       testonly = true
       deps = [
           "unittest/napi:unittest",
           "clitools:btcommand",   # 增加：编译 clitools 下的可执行/目标
       ]
   }
   ```
   - 这样在执行对 `unit_test` 或该 test 目录的编译时，会一并编译 clitools 中的目标。

4. **若 test 下没有 group**：  
   - 可新建一个 `group`，`deps = [ "clitools:<目标名>" ]`，或在该目录的其它已有目标中增加对 `clitools:<目标名>` 的依赖，使 clitools 纳入同一套编译流程。

---

## 三、编译验证

1. **在工程根目录执行**（根据实际使用的构建命令调整）：
   ```bash
   # 仅编译 bluetooth test（含 clitools）
   ./build.sh --product-name <产品名> --ccache foundation/communication/bluetooth/test:unit_test

   # 或编译整个 bluetooth 子系统
   ./build.sh --product-name <产品名> --ccache foundation/communication/bluetooth
   ```
   - 将 `<产品名>` 替换为实际产品（如 `rk3568`、`hi3516dv300` 等）。

2. **验证结果**：  
   - 无编译错误、链接错误，且生成预期产物（如 `btcommand` 可执行文件在 out 目录对应路径下）。  
   - 若有单元测试或脚本可运行该可执行文件，可再做了运行验证。

3. **常见问题**：  
   - 若报头文件或依赖找不到：检查 clitools 的 BUILD.gn 中 `include_dirs`、`deps`、`external_deps` 是否与该工程路径一致。  
   - 若报路径错误：确认拷贝后的路径与 BUILD.gn 中 `BLUETOOTH_TOOLS_DIR`（或等价变量）一致，且该 BUILD.gn 位于 `test/clitools/BUILD.gn`。

---

## 四、流程小结

| 步骤 | 操作 |
|------|------|
| 1 | 将 `src/.claude/skills/ohclitools/clitools/` 下全部内容拷贝到目标 `<test_dir>/clitools/`（如 `bluetooth/test/clitools/`） |
| 2 | 在 `<test_dir>/BUILD.gn` 的 group 或相应目标的 `deps` 中增加 `"clitools:<目标名>"`（如 `"clitools:btcommand"`） |
| 3 | 在仓库根目录执行 build 命令，指定该 test 或对应子系统，完成编译验证 |

按上述步骤即可在任意目标 test 目录下接入 clitools 并完成编译验证。
