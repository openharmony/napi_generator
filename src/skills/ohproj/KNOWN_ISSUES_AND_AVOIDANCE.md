# ohproj 常见问题与避免指南

本文档汇总使用 ohproj 创建、编译、测试 OpenHarmony 原生项目时遇到的**通用问题**、**原因**与**避免/修复方法**，供下次创建或维护项目时参考，减少重复踩坑。

---

## 一、编译相关问题

### 1.1 构建时报 `ENOENT: no such file or directory, uv_cwd`

**现象**：执行 `ohproj.py build` 或 `build-test`（内部调用 hapbuild）时，在 clean 之后或构建过程中出现 Node/hvigor 报错 `uv_cwd`、当前工作目录不存在等。

**原因**：hapbuild 流程为「先 `clean --no-daemon`，再 `assembleHap --daemon`」。clean 会删除 `.cxx`、`entry/build` 等中间目录。若之前曾以 daemon 方式运行过 hvigor，daemon 进程可能仍持有已被删除的目录为 cwd，后续步骤在 daemon 内执行时就会触发 ENOENT。

**避免/修复**：

1. **优先**：构建时改用**非 daemon**，避免 daemon 缓存过期 cwd。  
   - 在 hapbuild 中可将 `assembleHap` 的 `--daemon` 改为 `--no-daemon`（或由调用方传入参数）。  
   - 或**不执行 clean**，直接执行 assembleHap（仅增量构建时）。
2. **临时**：先结束已有 hvigor 相关 Node 进程，再重新执行 build/build-test，且使用 `--no-daemon` 执行 hvigor。
3. **项目目录**：始终使用**绝对路径**作为项目目录调用 `build`/`build-test`，避免工作目录歧义。

**手动修复步骤（当 ohproj.py build 或 build-test 已报 uv_cwd 时）**：在项目根目录下执行以下命令，用 `--no-daemon` 替代默认的 daemon 构建，完成后再执行 `ohproj.py sign` 与 `ohproj.py test`。环境变量 `HOS_CLT_PATH` 需已设置（如 `/root/toolchains/command-line-tools`）。

```bash
# 进入项目目录（使用实际项目绝对路径）
cd /path/to/<项目名>NativeProj46R

# 主 HAP 构建（无 clean，避免再次触发 daemon cwd 问题）
node "$HOS_CLT_PATH/hvigor/bin/hvigorw.js" --mode module -p product=default assembleHap --analyze=normal --parallel --incremental --no-daemon

# 测试 HAP 构建
node "$HOS_CLT_PATH/hvigor/bin/hvigorw.js" --mode module -p module=entry@ohosTest -p isOhosTest=true -p product=default -p buildMode=test assembleHap --analyze=normal --parallel --incremental --no-daemon
```

若首次 `ohproj.py build` 已执行过 clean 且失败，无需再 clean，直接按上两行分别构建主 HAP 与测试 HAP 即可。

---

### 1.2 编译测试 HAP 时报 `Failed to resolve OhmUrl for "@ohos/hypium"`

**现象**：`ohproj.py build-test <项目目录>` 报依赖解析失败，无法解析 `@ohos/hypium`（或 `@ohos/hamock`）。

**原因**：`ohproj.py create` 拷贝模板时使用了 `ignore=shutil.ignore_patterns('oh_modules', ...)`，**未拷贝 `oh_modules`**。新建项目的根目录下没有 `oh_modules/@ohos/`，而 ohosTest 模块依赖 `@ohos/hypium`（及可能 `@ohos/hamock`），ohpm 解析不到这些包。

**避免/修复**：

1. **创建项目后**：从模板目录把 `oh_modules` 下的测试依赖拷贝到新项目。  
   - 模板路径：`src/skills/ohhap/NativeProj46R/oh_modules`  
   - 目标路径：`<新项目>/oh_modules`  
   - 至少拷贝 `@ohos/hypium`、`@ohos/hamock`（即 `oh_modules/@ohos/` 目录）。
2. **或**：在新项目根目录执行 `ohpm install`（若根目录已有 `oh-package.json5` 且声明了对 `@ohos/hypium` 的依赖），确保能拉取到依赖。
3. **技能/脚本可改进**：在 create 完成后提示「若需编译测试 HAP，请从模板复制 oh_modules/@ohos 到本项目 oh_modules/ 或在本项目执行 ohpm install」；或提供可选参数在 create 时拷贝 oh_modules（注意模板 oh_modules 可能很大）。

---

### 1.3 CMake/原生编译错误：找不到头文件或未定义引用

**现象**：构建主 HAP 时 C/C++ 编译报错，如找不到接入库的头文件、或链接阶段未定义引用。

**原因**：接入的用户代码（如 cJSON-master）未正确加入 CMake：未 `include_directories` 或未把 `.c` 加入 `add_library`。

**避免/修复**：

- 创建项目时若使用了 `--code-dir`，**必须**在 `entry/src/main/cpp/CMakeLists.txt` 中：  
  - 用 `include_directories(...)` 加入该代码目录（或其子目录）；  
  - 在 `add_library(entry SHARED ...)` 中列出要参与编译的 `.c`/`.cpp` 文件。  
- 步骤 4.2 明确要求「在 CMakeLists.txt 中增加 include_directories 与 add_library 中的源文件」，创建后需人工或脚本检查一遍。

---

## 二、测试执行与测试用例相关问题

### 2.1 运行测试时报 `undefined is not callable`（CjsondtsTest 等整组失败）

**现象**：执行 `ohproj.py test` 后，调用 NAPI 的测试套件（如 CjsondtsTest）中大量用例失败，报错为某方法 `undefined is not callable`。

**原因**：模板中 `entry/src/mock/mock-config.json5` 将 `libentry.so` 映射到 mock 实现（如 Libentry.mock.ets），mock 里只实现了少量接口（如 `add`）。测试运行时加载的是 mock 而非主 HAP 中的真实 .so，未在 mock 中实现的 NAPI（如 `cjsonParse`、`cjsonVersion`）为 **undefined**，一调用即报错。

**避免/修复**：

- **必做**：在编写并运行调用真实 NAPI 的单元测试前，**关闭对 libentry.so 的 mock**。  
- 修改 **`entry/src/mock/mock-config.json5`**，清空为 `{}`（或删除对 `libentry.so` 的映射）。  
- 详见 SKILL.md **4.5 步骤五**。创建项目时若已知会写 NAPI 测试，应在步骤 4.5 一并完成。

---

### 2.2 模板自带的 Indexdts.test.ets 导致 ArkTS 编译错误（arkts-no-any-unknown）

**现象**：`build-test` 时 ArkTS 报错：要求使用显式类型，不能使用 `any`/`unknown`（arkts-no-any-unknown），错误指向 `Indexdts.test.ets` 中的变量。

**原因**：模板里的 Indexdts.test.ets 为占位或示例，大量变量未写显式类型（如 `let result = lib.add(...)`），在开启严格 ArkTS 规则的环境下会报错。

**避免/修复**：

1. **短期**：在 `List.test.ets` 中**不注册** `indexdtsTest()`，仅注册自写的 *dts 测试套件（如 `cjsondtsTest()`），这样 build-test 不会编译/运行 Indexdts 用例，可先通过编译与测试。
2. **长期**：对 Indexdts.test.ets 中所有相关变量补全**显式类型**（如 `const result: number = lib.add(...)`），再在 List.test.ets 中重新注册 indexdtsTest。
3. 创建项目时若以「自定义 NAPI + 自定义 *dts.test.ets」为主，可考虑不依赖模板自带的 Indexdts 用例，或一开始就按 ArkTS 规范写好类型。

---

### 2.3 某条用例逻辑错误：如 cjsonDetachItemViaPointer 期望 true 却得到 false

**现象**：DetachItemViaPointer 相关用例中，断言「detach 后的节点有效」失败（例如 expect true equals false）。

**原因**：NAPI 采用句柄管理：`cjsonAddItemToArray(arr, item)` 会把 `item` 的**所有权**交给 `arr`，并在 C++ 侧从「自有句柄表」中移除 `item` 的句柄。之后用「添加前的那个 item 句柄」再调用 `cjsonDetachItemViaPointer(arr, item)` 时，底层 GetHandle(item) 已取不到有效指针，C 层行为异常，返回或导致断言失败。

**避免/修复**：

- 写 DetachItemViaPointer 用例时：**先** AddItemToArray，**再**用 **GetArrayItem(arr, index)** 取到「当前在数组内的该元素的句柄」，用这个**新句柄**作为第二参数调用 DetachItemViaPointer(arr, newItemHandle)。  
- 不要用「刚 Add 进去的那个旧句柄」去 Detach。  
- 若 NAPI 设计为 Add 后原句柄失效，文档或注释中应说明「从数组/对象内取子节点请用 GetArrayItem/GetObjectItem 获得引用句柄再 Detach」。

---

### 2.4 测试用例数量不足、与设计文档不一致（如只有 51 条而设计为 68 条）

**现象**：用户或设计文档期望 NAPI 测试有较多用例（如 68 条、82 条），实际生成的 *dts.test.ets 只有「每接口至少 1 条」的规模（如 51 条），被认为「少了」。

**原因**：

1. **目标不一致**：当前实现目标是「每个已导出 NAPI 至少 1 条」，未按「对比文档/设计文档」的完整清单逐条实现，也未做多场景、多边界展开。  
2. **缺「仅需补用例」的项**：如 ReplaceItemViaPointer、Detach/Delete/ReplaceItemInObjectCaseSensitive、空串解析返回 0、GetObjectItem 在数组根/缺失 key、GetArrayItem 越界、GetObjectItemCaseSensitive exact_key 等，NAPI 已实现但未写对应 it。  
3. **缺「需先实现 NAPI 再写用例」的项**：如 Create*Reference、Create*Array（Int/Float/Double/String）、SetNumberHelper 等，若 Index.d.ts/napi_init.cpp 未导出，则无法写用例。  
4. **未按 C 侧规模展开**：C 侧 tests 目录有 170+ 用例（解析/打印/类型/边界/null 安全等），NAPI 层若只做「单接口单用例」则数量会少很多。

**避免/修复**：

- 创建项目时**明确测试范围**：  
  - 若有 **CJSONDTS_comparison.md**、**cJSON_tests_design.md** 等设计文档，应按照其中「Cjsondts 用例列表」与「建议补全方向」编写或补全 it，而不是只做「每接口一条」。  
- **两步补全**：  
  1. 先补「NAPI 已有、仅差用例」的项（见 ohsonNativeProj46R_Cjsondts_差异分析.md 2.1 节）。  
  2. 再对设计文档中依赖的、尚未导出的 NAPI（Create*Reference、Create*Array、SetNumberHelper 等）在 napi_init.cpp + Index.d.ts 中实现并导出，然后补对应用例。  
- 在 SKILL 4.4、4.6 中已强调「单元测试须覆盖所有导出接口」且「可对照 CJSONDTS_comparison.md、cJSON_tests_design.md 补全」；创建项目时按设计文档执行可避免数量与预期不符。

---

### 2.5 SQLite 项目：sqlite3.h 有 300+ 接口，NAPI 只导出了少量（如 7 个）

**现象**：sqlite3.h 中声明了约 300+ 个 C API（如 368 个），但 ohsqlite 的 napi_init.cpp 只导出了约 7 个（sqlite3_libversion、open、close、exec、errmsg、errcode + add），与「导出头文件里的接口」预期不符。

**原因**：创建 ohsqlite 时采用**最小可用集**实现——只封装了「开库 / 关库 / 执行 SQL / 取错误信息」这条链路，便于快速完成「应用调用 + 测试用例 + 编译执行」。未按 sqlite3.h 全量逐一手写 NAPI 封装。

**避免/补全**：

- **明确范围**：若需求是「导出 sqlite3.h 里全部/大部分接口」，应在创建前约定是「最小集」还是「按模块分批补全」；当前模板仅为最小集。
- **按模块扩展**：可优先补全以下类别（每类需在 napi_init.cpp 中增加句柄映射、NAPI 包装，并在 Index.d.ts 与测试中补全）：
  - **预处理语句**：sqlite3_prepare_v2、sqlite3_step、sqlite3_bind_*、sqlite3_column_*、sqlite3_finalize、sqlite3_reset（需增加 sqlite3_stmt* 的 handle 表）；
  - **结果与错误**：sqlite3_changes、sqlite3_total_changes、sqlite3_extended_errcode、sqlite3_errstr 等；
  - **其它**：sqlite3_open_v2、sqlite3_get_table、sqlite3_backup、sqlite3_blob、sqlite3_config 等按需添加。
- **参考文档**：见 **SQLITE_NAPI_SCOPE.md**（当前已导出列表与可扩展清单）。

---

## 三、创建项目时的检查清单（避免通用错误）

在完成「创建项目 + 接入代码 + NAPI + 测试」后，建议按下列清单自检，避免上述问题再次发生。

| 类别 | 检查项 | 说明 |
|------|--------|------|
| **编译** | 项目目录用绝对路径调用 build/build-test | 避免 uv_cwd 与工作目录歧义 |
| **编译** | 若遇 uv_cwd/ENOENT，改用 --no-daemon 或先停 daemon 再构建 | 见 1.1 |
| **编译** | oh_modules 存在且含 @ohos/hypium（及 hamock） | 见 1.2；create 后从模板拷贝或 ohpm install |
| **编译** | CMakeLists.txt 已加入用户代码的 include 与源文件 | 见 1.3 |
| **测试** | mock-config.json5 已清空（{}），不 mock libentry.so | 见 2.1；否则 NAPI 测试会 undefined |
| **测试** | List.test.ets 若含 indexdtsTest，Indexdts.test.ets 需满足 arkts-no-any-unknown | 见 2.2；否则可先不注册 indexdtsTest |
| **测试** | DetachItemViaPointer 等用例用 GetArrayItem 取引用再 Detach | 见 2.3 |
| **测试** | 用例数量与设计文档一致；缺的 NAPI 已实现并补用例 | 见 2.4；参考 CJSONDTS_comparison、cJSON_tests_design |

---

## 四、相关文档

- **SKILL.md**：步骤 4.1–4.6、4.5 mock 关闭、4.6 测试规范。  
- **DESIGN.md**：NAPI 封装约定、ArkTS/测试代码规范。  
- **CJSONDTS_comparison.md**：C 测试与 Cjsondts 用例对比、差异与补全建议。  
- **cJSON_tests_design.md**：C 侧 tests 目录测试设计与数据。  
- **ohsonNativeProj46R_Cjsondts_差异分析.md**：68 条 vs 51 条差异、缺 NAPI 与仅缺用例的清单。  
- **SQLITE_NAPI_SCOPE.md**：SQLite NAPI 当前已导出接口与 sqlite3.h 全量接口的差异、补全建议。

---

## 五、总结表（问题 → 原因 → 避免/修复）

| 问题 | 原因 | 避免/修复 |
|------|------|-----------|
| 编译 uv_cwd / ENOENT | clean 删目录后 daemon 仍持旧 cwd | 构建用 --no-daemon 或先停 daemon；项目目录用绝对路径 |
| @ohos/hypium 解析失败 | create 未拷贝 oh_modules | 从模板拷贝 oh_modules/@ohos 或在新项目 ohpm install |
| 原生编译找不到头文件/未定义引用 | CMake 未 include、未加入源文件 | CMakeLists.txt 正确 include_directories + add_library 源文件 |
| 测试 undefined is not callable | mock-config 仍 mock libentry.so | mock-config.json5 清空为 {} |
| Indexdts 编译 arkts-no-any-unknown | 模板用例无显式类型 | 不注册 indexdtsTest 或为变量补显式类型 |
| DetachItemViaPointer 用例失败 | Add 后原句柄失效，用旧句柄 Detach | 用 GetArrayItem 取新句柄再 Detach |
| 测试用例数量少于设计 | 只做了每接口一条，未按设计文档补全 | 按 CJSONDTS_comparison/cJSON_tests_design 补用例与缺失 NAPI |
| SQLite 只导出约 7 个接口、与 sqlite3.h 300+ 不符 | 采用最小可用集，未全量封装 | 见 2.5；按 SQLITE_NAPI_SCOPE.md 分批补全 prepare/step/bind/column 等 |

以上内容已纳入 ohproj 技能，执行创建/编译/测试时请优先对照本指南与 SKILL 步骤，避免重复出现同类错误。

---

## 六、本次过程记录（create ohcjson 后 build/build-test 报 uv_cwd）

**现象**：执行 `create ohcjson --code-dir ... --setup-cjson` 成功后，`ohproj.py build` 与 `ohproj.py build-test` 均报 `ERROR: ENOENT: no such file or directory, uv_cwd`（失败阶段分别为 `BuildNativeWithCmake`、`SyscapTransform`）。

**原因**：hapbuild 先执行 `clean --no-daemon` 删除 `.cxx` 等目录，再执行 `assembleHap --daemon`。daemon 曾以被删目录为 cwd，导致后续在 daemon 内执行时 uv_cwd 报错。

**实际处理**：未改 hapbuild，改为在项目目录下手动执行两次 hvigor（均加 `--no-daemon`）：先执行主 HAP 的 `assembleHap --no-daemon`，再执行测试 HAP 的 `assembleHap ... --no-daemon`。完成后执行 `ohproj.py sign` 与 `ohproj.py test`，签名与单元测试均正常（52 条用例，51 通过，1 条 ActsAbilityTest 失败）。

**避免下次**：遇到 build/build-test 报 uv_cwd 时，直接按 **1.1 节「手动修复步骤」** 在项目目录下用 `--no-daemon` 执行主 HAP 与测试 HAP 的构建，再 sign、test。
