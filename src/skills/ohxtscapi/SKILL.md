---
name: ohxtscapi
description: >-
  OpenHarmony ArkUI CAPI XTS 一体化技能：C++ NAPI + Hypium；八类路由；
  编签、设备跑测、三层报告。SDK 用 normal。触发词：CAPI XTS、OH_ArkUI_、
  libnativefunc、libnativerender、NapiFuncInit、ohxtscapi。含 §签名 Profile 新建工程 p7b 硬门禁。
author: "napi_generator"
version: "1.1.0"
---

# ohxtscapi：ArkUI CAPI XTS 一体化 Skill

面向 **ArkUI CAPI**（`OH_ArkUI_*`）的 XTS：**C++ N-API 封装** + **Hypium `.test.ets`**
（`import nativeFunc from 'libnativefunc.so'` 或 `libnativerender.so`）。

与 **ohxtsstatic / ohxtsdynamic** 互补：后两者为 ArkTS 页面；本 skill 为 **Native CAPI** 链路。

---

## 与 ArkTS XTS skill 对比

| 项 | ohxtsstatic | ohxtsdynamic | **ohxtscapi** |
|----|-------------|--------------|---------------|
| 被测层 | ArkTS `use static` | `@ComponentV2` | **C API `OH_ArkUI_*`** |
| SDK | static | normal | **normal** |
| 生成器 | arkui-static-xts-generator | arkui-dynamic-xts-generator | **arkui-capi-xts-generator-v3** |
| 编排 | ohxtsflow.py | ohxtsflow.py | **ohxtscflow.py** |
| 典型工程 | `ace_ets_module_*_static` | `ace_ets_module_chip_nowear` | **`ace_c_arkui_test_api26`** 等 |

---

## 示例工程（develop 仓）

| 项 | 路径 |
|----|------|
| 代码仓 | **xts_acts**（develop 工作区） / **xts_acts_0622**（master 同步仓） |
| API26 SystemMaterial（参考） | `arkui/ace_c_arkui_test_api26_systemmaterial/` |
| API26 CAPI | `arkui/ace_c_arkui_test_api26/` |
| API23 | `arkui/ace_c_arkui_test_api23/` |
| 图文 CAPI | `arkui/ace_ets_module_ui/.../ace_c_module_imageText_common/` |
| CAPI 文档 | OpenHarmony **apis-arkui** 参考文档 |
| 生成器上游 | [arkUISkill / capi-v3](https://gitcode.com/qq_44921954/arkUISkill/tree/master/arkui_capi_xts_generator-v3) |

---

## 触发与默认推断

用户提到 **CAPI / OH_ArkUI / libnativefunc / NAPI 测试** 且要求开发或补齐用例时，**默认全流程**：

1. **八类路由**（**[CATEGORY_ROUTING.md](CATEGORY_ROUTING.md)** + 生成器 `SKILL.md` §分类流程）
2. 编写 **`.cpp`** + 注册 **`NapiFuncInitTest.cpp`** 或 **`NapiRenderInitTest.cpp`**
3. 编写 **`.test.ets`** + **`List.test.ets`**
4. **`ohxtscflow build-all` → `deploy-test`**（或 **`run-capi-pipeline`**）
5. 会话 **Tier-1 三列表格**；终端 **`REPORT_HTML`（xDevice 格式）**
6. **工程交付 / commit 前**：对 `List.test` **全部** Suite 做**一次**装包连跑（见下「工程整测硬门禁」）

---

## 工程整测硬门禁（CAPI / C++，与动态·静态共用）

| 必须 | 禁止 |
|------|------|
| **一次** `ohxtscflow deploy-test`（或 pipeline 内设备阶段）：`-s SuiteA,SuiteB,...` 覆盖全部套件，或省略 `-s`；**卸装安装各一次** | Agent **多次**调用 `deploy-test`/`run-capi-pipeline` 且每次重装，再拼「全绿」 |
| 单批开发用 `-s OneSuite` | 把单批 Pass 写成「工程整测通过」 |

**说明**：ohhdc 对多 Suite **内部分次** 设备 unittest（勿把多个 class 拼进**同一次** shell `-s class`，设备会挂起）——这是**同一次装包后的分次跑测**，**不等于**多次 `deploy-test` 重装。详 **ohos-gate-compliance**「设备整测硬门禁」、**ohhdc**「工程整测硬门禁」。

---

## 必备输入

| 要素 | 说明 |
|------|------|
| **SDK** | `source use-ohos-sdk.sh normal`（仓库根 **sdk-paths.conf**） |
| **生成器** | **`arkui-capi-xts-generator-v3/`**（外置；`fetch-capi-generator.sh` 或 README） |
| **API 头文件** | SDK `native` 下 `arkui/*.h`；以编译为准 |
| **工程根** | 含 `entry/src/main/cpp/`、`entry/src/ohosTest/`、`build-profile.json5` |

---

## 技能融合模型

| 层级 | 来源 |
|------|------|
| **Tier-0** | SDK CAPI 头文件与符号 |
| **Tier-1** | 本文 + **`compile_error_hints.md`** |
| **Tier-1.5** | 生成器 **`SKILL.md`** 八类模板 + **`category*`** 样例 |
| **Tier-2** | 工程内 `common/common.h`、`Napi*InitTest.cpp` 范式 |

**冲突时**：Tier-0 > Tier-1 > 生成器样例 > 臆造 API。

---

## §〇 八类路由（必做第一步）

**禁止未分类就写页面或 C++。**

1. 打开 **[CATEGORY_ROUTING.md](CATEGORY_ROUTING.md)** 或 `ohxtscflow.py category-routing`
2. 对照 API 名称与 Event 类型确定 **类别 1～8 / 4.1**
3. 确定 **无页面 → libnativefunc** / **有页面 → libnativerender**

常见错误（生成器原文有详表）：

- `CoastingAxisEvent_Set*` → **类别 2，无页面**（非类别 3）
- `DragEvent_Set*` → **类别 8，有页面**
- `GetGestureParam_*` → **类别 4.1**

---

## 标准流水线

### 1. 环境与生成器

```bash
source use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
bash src/skills/ohxtscapi/fetch-capi-generator.sh   # 生成器未就位时
python3 src/skills/ohxtscapi/ohxtscflow.py env
```

### 2. 实现 C++（无页面类示例）

- 在 `entry/src/main/cpp/<feature>/XxxTest.cpp` 实现 `TestNativeXxx`
- 使用 `NAPI_START` / `ASSERT_EQ` / `NAPI_END`（见工程 `common/common.h`）
- 在 **`NapiFuncInitTest.cpp`** 的 `Init` 中 `napi_define_properties` 注册

### 3. 实现 Hypium

**提交前必读：[PROJECT_CHECKLIST.md](PROJECT_CHECKLIST.md)**（GN 结构、@tc 文档注释、单 describe、版权）。

- 一个 `.test.ets` → **一个 `describe`**
- `@tc.name` = `@tc.number` = `it()` 第一个参数（`SUB_*` 编号）
- `runCase('testNativeXxx001', done)` 仍调用 C++ 注册名
- **禁止** `forEach` 动态生成 `it()`（xtscheck 无法解析）

```typescript
import nativeFunc from 'libnativefunc.so';

/**
 * @tc.name   SUB_ARKUI_CAPI_EXAMPLE_0100
 * @tc.number SUB_ARKUI_CAPI_EXAMPLE_0100
 * @tc.desc   Brief case description
 * @tc.type   FUNCTION
 * @tc.size   MEDIUMTEST
 * @tc.level  LEVEL1
 */
it('SUB_ARKUI_CAPI_EXAMPLE_0100', Level.LEVEL1, async (done: Function) => {
  expect(nativeFunc.testNativeXxx001()).assertEqual(0);
  done();
});
```

- 注册 **`List.test.ets`**；有页面类另建 `.ets` 页面并 `main_pages.json`

### 4. 编签与设备

```bash
source signing-materials/env.sh    # 若工程有
python3 src/skills/ohxtscapi/ohxtscflow.py run-capi-pipeline \
  /path/to/ace_c_arkui_test_api26 -s GridEnableEditModeTest -m entry_test
```

- 默认测试模块 **`entry_test`**（ohosTest）
- 新批次开发调试：**`-s` 本批套件名**
- **工程交付 / 推仓前**：`-s` 列齐全部 Suite（或省略），**一次** `deploy-test` 连跑；禁止多次 `deploy-test` 重装拼绿

### 5. 报告

见 **[REPORTING.md](REPORTING.md)**：Tier-1 会话表 + **仅** xDevice `REPORT_HTML` + 多模块汇总脚本。

**commit 后**：交付 **一张** `summary_top.png`（多 HAP 只截合并页，最多 10 行 Module）；禁止自写汇总页。

---

## 正式测试报告（会话必选）

与 ohxtsstatic 相同：**三列表格**（用例名称｜Pass/Fail｜设计思路），禁止只给 log 路径。

---

## 子技能委托

| 能力 | 脚本 |
|------|------|
| HAP 编签 | `ohhap/hapbuild.py` |
| 设备安装 / unittest | `ohhdc/ohhdc.py` |
| 编排 | **`ohxtscapi/ohxtscflow.py`** |
| xDevice 报告 | `ohxtsstatic/hypium_html_report.py`（经 ohxtscflow 调用，输出 xDevice 模板） |

---

## Git 与提交

- 遵循 **`xts-git-commit`** + xts_acts **`miscellaneous/xts_code_check.md`**（xtscheck）
- 工程脚手架清单：**[PROJECT_CHECKLIST.md](PROJECT_CHECKLIST.md)**
- 新增文件版权：**Kaihong**（勿沿用平行仓默认版权头）
- **libnativefunc.so 在 Main HAP**：须 **双 HAP**（`ohos_app_assist_suite` + Test `deps` + `Test.json` 双包安装），见 **§SystemMaterial 实战**
- **C++ CodeCheck**：多行函数调用续行须 **G.FMT.06-CPP**（实参续行 8 空格），规则见统一门禁 `ohos-gate-compliance/rules/rules_cpp.json`（`gate_check.py code --profile capi` 自动检查+修复）
- 生成器目录 **仅 README 入库**；`fetch-capi-generator.sh` 拉取的内容 **不提交**
- 单笔 commit **<2000 行**；用例与 CodeCheck fix **分 commit**

---

## §SystemMaterial 实战（api26 避坑）

来源：`ace_c_arkui_test_api26_systemmaterial` 设备 30/30 全失败 → 修复后 Pass。

### 症状

Hypium 报 `Cannot load property of null or undefined`；`import nativeFunc from 'libnativefunc.so'` 得到 **null**。

### 根因

| 项 | 说明 |
|----|------|
| **双 HAP** | `libnativefunc.so` 编进 **Main assist HAP**，Test HAP 仅含 Hypium；只装 Test 则 so 缺失 |
| **Main 须先编** | 仅 `build-test` 时 native 被跳过，Main HAP 无 `.so` |
| **签名 bundle** | `signature/openharmony_sx.p7b` 的 bundle 须与 **`AppScope/app.json5` bundleName** 一致 | 从 parallelize 等模板 **拷贝 p7b 未 regen**（**已两次事故，禁止第三次**） |

**修复**：**§签名 Profile** → `gen-xts-signature-p7b.sh <工程根>`。

### GN / Test.json 正确模板

```gn
ohos_app_assist_suite("ActsAceCArkUI26SystemMaterial") { ... }

ohos_js_app_suite("ActsAceCArkUI26SystemMaterialTest") {
  deps = [ ":ActsAceCArkUI26SystemMaterial" ]
}
```

```json
"test-file-name": [
  "ActsAceCArkUI26SystemMaterialTest.hap",
  "ActsAceCArkUI26SystemMaterial.hap"
]
```

### 编签顺序

```bash
python3 ohxtscflow.py build-all <工程>   # Main build（编 native）+ build-test + sign
# 工程整测：一次装包；多 Suite 逗号分隔（ohhdc 内部分次设备 unittest，不重装）
python3 ohxtscflow.py deploy-test <工程> \
  -s ImmersiveMaterialTest,CustomDialogSystemMaterialTest,CustomDialogDisplayModeTest \
  -m entry_test
```

### API 覆盖拆分（SystemMaterial 批次）

| 套件 | C++ 源 | 覆盖 API |
|------|--------|----------|
| `ImmersiveMaterialTest` | `ImmersiveMaterialTest.cpp` + `NodeSystemMaterialTest.cpp` | ImmersiveMaterial / LightEffect / GetSystemMaterialSupported / NODE_SYSTEM_MATERIAL(127) |
| `CustomDialogSystemMaterialTest` | `CustomDialogMaterialTest.cpp` | SetSystemMaterial / SetSystemMaterialInOptions |
| `CustomDialogDisplayModeTest` | `CustomDialogDisplayModeTest.cpp` | SetDisplayModeInSubWindow / OH_ARKUI_DIALOG_DISPLAY_MODE_* |
| `CustomDialogOpenCallbackTest` | `CustomDialogOpenCallbackTest.cpp` + `CustomDialogApi26Compat.h` | OpenDialogWithCallback 及错误码（见下节） |

**八类路由**：上述均为 **类别 2（无页面）** + **类别 6（Dialog 参数）**，走 `libnativefunc.so`。

### OpenDialogWithCallback（API26，public SDK 弱符号）

来源：同工程追加 `CustomDialogOpenCallbackTest`（4 Pass）。

| 项 | 说明 |
|----|------|
| **症状** | 链 `OH_ArkUI_CustomDialog_OpenDialogWithCallback` 时 public SDK / 板端 **缺符号** 或编不过 |
| **根因** | 该 API 当前主要在 **static libace** 暴露；normal/public 头可能无声明 |
| **做法** | 工程内 **`CustomDialogApi26Compat.h`**：声明回调类型 + 函数；按需 **weak stub**，使错误码/回调路径用例可编可跑 |
| **注册** | `CMakeLists` 加源 → `MaterialTestDecl.h` / `NapiFuncInitTest.cpp` → `index.d.ts` → Hypium `List.test` |
| **断言** | 关注回调 `errorCode`（如 103306 / 103308）与 `dialogId`；对齐已有 Dialog 错误码约定 |
| **勿做** | 为链上该符号去改系统 SDK；勿把 weak stub 当成「接口已在全量固件落地」的证明 |

**排障顺序**：先确认双 HAP + `build-all`（§SystemMaterial）→ 再查 Compat 头是否纳入编译 → 最后看 Hypium `-s CustomDialogOpenCallbackTest`。

---

## §签名 Profile：新建 CAPI 工程 p7b（P0 硬门禁）

> **与 ohxtsstatic §13.12、ohxtsdynamic §9.11 同一铁律**；**已两次生产事故**，**禁止第三次**。

**适用**：从 `ace_c_arkui_test_parallelize` / 其余 CAPI 模板 **新建** 工程，或修改 **`AppScope/app.json5` bundleName** 后。

| 禁止 | 必须 |
|------|------|
| `cp 模板/signature/openharmony_sx.p7b` 提交 | **`gen-xts-signature-p7b.sh <工程根>`** |
| 「沿用 parallelize 的 bundle 名」写进 checklist 就提交 | `strings p7b` 与 **app.json5 bundleName 逐字一致** |
| 只装 Test HAP 忽略 p7b | assist + Test **共用** 同一 p7b |

```bash
bash /root/aiSkill/.claude/skills/xts_shared/gen-xts-signature-p7b.sh <工程根>
strings <工程根>/signature/openharmony_sx.p7b | grep bundle-name
grep bundleName <工程根>/AppScope/app.json5
```

**脚手架顺序（CAPI 双 HAP）**：

1. 裁剪模板 → 改 `AppScope/app.json5`、`BUILD.gn`（assist + test）、`Test.json` 双包  
2. **`gen-xts-signature-p7b.sh`**  
3. 写 C++ / Hypium → `ohxtscflow build-all` → `deploy-test` → commit  

详见 **`xts_shared/SIGNATURE-P7B.md`**、**PROJECT_CHECKLIST.md §1.1**。

---

## 附录

| 文件 | 用途 |
|------|------|
| **PROJECT_CHECKLIST.md** | 工程脚手架、xtscheck、GN/Test.json 避坑 |
| **CATEGORY_ROUTING.md** | 八类速查 |
| **compile_error_hints.md** | 排障 |
| **REPORTING.md** | 报告命令 |
| **arkui-capi-xts-generator-v3/** | 外置生成器（下载后含完整 SKILL 与样例） |
