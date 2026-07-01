---
name: ohxtscapi
description: >-
  OpenHarmony ArkUI CAPI XTS 一体化技能：C++ NAPI + Hypium；八类路由；
  编签、设备跑测、三层报告。SDK 用 normal。触发词：CAPI XTS、OH_ArkUI_、
  libnativefunc、libnativerender、NapiFuncInit、ohxtscapi。
author: "napi_generator"
version: "1.0.0"
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
| 代码仓 | **xts_acts**（develop 工作区） |
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
5. 会话 **Tier-1 三列表格**；终端 **Tier-2 `REPORT_HTML`**

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
- 新批次 **必须 `-s` 套件名**，避免全量 List

### 5. 报告

见 **[REPORTING.md](REPORTING.md)**：Tier-1 会话表 + Tier-2 `REPORT_HTML` + Tier-3 汇总脚本。

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
| HTML 报告 | `ohxtsstatic/hypium_html_report.py`（经 ohxtscflow 调用） |

---

## Git 与提交

- 遵循 **`xts-git-commit`** + xts_acts **`miscellaneous/xts_code_check.md`**（xtscheck）
- 工程脚手架清单：**[PROJECT_CHECKLIST.md](PROJECT_CHECKLIST.md)**
- 新增文件版权：**Kaihong**（勿沿用平行仓默认版权头）
- 无辅助 HAP 依赖时：**仅** `ohos_js_app_suite`，`Test.json` 只装 `Acts*Test.hap`
- 生成器目录 **仅 README 入库**；`fetch-capi-generator.sh` 拉取的内容 **不提交**
- 单笔 commit **<2000 行**；用例与 CodeCheck fix **分 commit**

---

## 附录

| 文件 | 用途 |
|------|------|
| **PROJECT_CHECKLIST.md** | 工程脚手架、xtscheck、GN/Test.json 避坑 |
| **CATEGORY_ROUTING.md** | 八类速查 |
| **compile_error_hints.md** | 排障 |
| **REPORTING.md** | 报告命令 |
| **arkui-capi-xts-generator-v3/** | 外置生成器（下载后含完整 SKILL 与样例） |
