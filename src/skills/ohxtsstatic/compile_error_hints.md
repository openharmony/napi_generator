# ohxtsstatic：Static XTS 编译与运行期排障速查

本文档与 **`SKILL.md`** 配套，供 `ohxtsflow.py hints` 打印及检索。内容为**独立可读**，不依赖其他仓库中的「经验总结」外链。

在 **技能融合模型** 中，本文档主要覆盖 **第 1 层**（与 **SDK 类型定义层** 相邻的编译/运行/Hypium 硬错误）。**第 1.5 / 第 2 层**（测什么、模板与 `@tc`）仍以 **`arkui-static-xts-generator/categories/`**、**`common/`**（**须先从 GitCode 下载放置**，见 **`arkui-static-xts-generator/README.md`**）及主文 **§〇～二** 为准；排障时若涉导入、步骤枚举、页面骨架，可交叉查阅 **`common/`**。

---

## 1. 编译阶段（`'use static'` / ArkTS）

| 现象 / 报错摘要 | 常见原因 | 处理方向 |
|-----------------|----------|----------|
| `Property 'getString' does not exist on type 'Object'` | `getElement('$attrs')` 结果赋给变量后类型成 `Object` | **整条链式**：`JSON.parseJsonElement(str).getElement('$attrs').getString('xxx')`，避免中间变量 |
| `Property 'click' does not exist on type 'On'` | 对 **`On` 匹配器**误调 `click` | `const c = await driver.findComponent(ON.id('id')); await (c?.click() as Promise<void>);` |
| `expect(a?.b).assertEqual(...)` 类报错 | `use static` 下可选链不宜直接进 `expect` | `if (a) { expect(a.b).assertEqual(...) }` |
| `ComponentContent` / 自定义弹层 | 使用箭头函数 / 错误 builder 形态 | **`@Builder` 函数**；不用箭头函数当 builder |
| 文档有 `create()`，SDK 无 | 臆造静态方法 | **以 SDK `.d.ets` 为准**；用 `new Type(...)` 或文档与 SDK 一致的唯一工厂 |
| 导入路径与文档示例不一致 | 文档示例来自另一 kit 版本 | **不改坏工程既有风格**；新代码只按本工程已能编过的 import + SDK |
| `onClick` 与 `async` / `ClickEvent` | 版本差异 | 以 **当前 SDK** 的签名为准；编不过再改为非 async 或调整事件类型 |
| `arkTSVersion` / Schema 与 **hvigor** 不匹配、`BUILD FAILED` 于配置阶段 | 使用了默认 **`hvigor/bin`**，与静态工程 **`build-profile.json5`** 不兼容 | 静态 XTS：置 **`OHOS_USE_HVIGOR_STATIC=1`**，使 **`hapbuild`** 使用 **`$HOS_CLT_PATH/hvigor-static/bin/hvigorw.js`**；或 **`OHOS_HVIGORW_JS`** 指向正确 **`hvigorw.js`**（见 **SKILL.md** 必备输入表） |

### 1.1 Hvigor：`hvigor-static` 与默认 `hvigor`

- **默认**：**`node $HOS_CLT_PATH/hvigor/bin/hvigorw.js`**（传统/非静态套件常见）。  
- **静态 `use static` 用例工程**：在 **`command-line-tools`** 下维护 **`hvigor-static/`**（`bin/hvigorw.js` 与插件与默认目录并列），编译前 **`export OHOS_USE_HVIGOR_STATIC=1`**。  
- **显式路径**：**`export OHOS_HVIGORW_JS=/完整路径/hvigorw.js`** 时优先于以上两者。  
- 自检：**`python3 src/skills/ohxtsstatic/ohxtsflow.py env`** 会打印两类入口是否存在。

---

## 2. 运行期 / Hypium / 设备日志

| 现象 | 常见原因 | 处理方向 |
|------|----------|----------|
| `indexOf('fieldName') === -1` 批量失败 | Inspector 序列化**不出现**该驼峰字段名 | 降级：**节点存在 + `$attrs` 片段**；或换 SDK 中实际存在的字段名；注释说明「序列化限制」 |
| 断言失败：期望数字、日志为字符串 | `getString` 返回 `'0'`/`'1'` | **`assertEqual('0')`** 或与套件统一 `Number()` 再比 |
| 套件 A 过后套件 B 必挂 | **AppStorage** 未清、**对话框**未关 | `afterEach`：`AppStorage.delete` 本套件键；`CustomDialogController.close()`；必要时 `sleep` |
| 永远进不了页面 | **`main_pages.json` `path`** 与 **`Router.replaceUrl` `url`** 不一致 | 逐项对齐；日志打印 `router.getState()` |
| `findComponent` 找不到 | **id/key** 与页面不一致；或外层 **Scroll**/可视区域 | 页面保证 `.id('x')`；布局用百分比 `maxHeight` 保证一屏可操作 |
| 点击了但回调未触发（触摸类） | 自动化 **click** 不触发 **onTouch** | 放宽断言：**控件存在 OR 回调**；或加大延迟；注释说明限制 |
| 日志难过滤 | 关键词未统一 | 全路径强制 **`[ARKUI_NEW]`** 或与套件 **`LOG_TAG`** 一致 |

---

## 3. grep / 分析日志建议关键词

- `[ARKUI_NEW]`、自定义 **`LOG_TAG`**
- `Hypium`、`OHOS_REPORT_STATUS`、`OHOS_REPORT_STATUS_CODE`
- `assert`、`Assert`、`FAIL`、`Error`
- 套件名、`it(`、`describe(`、`case_end`、`START` / `END`

---

## 4. 与 `SKILL.md` 的对应关系

| 话题 | 在 SKILL.md 中 |
|------|----------------|
| 以 API/SDK 为准、禁止臆造 | **§ 核心原则** |
| 从明细到页面+用例的步骤 | **§ 开发工作流 A–D** |
| 布局、路由、id/key | **§ 页面与布局** |
| 生命周期、AppStorage、对话框 | **§ 测试隔离与生命周期** |
| 日志 phase | **§ 日志规范** |
| 提交前自检列表 | **§ 编译与提交检查清单** |
