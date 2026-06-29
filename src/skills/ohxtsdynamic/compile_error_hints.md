# ohxtsdynamic：动态 ArkUI（V2）XTS 编译与运行期排障速查

与 **`SKILL.md`** 配套。覆盖 **L1** 层；测试范式见 **`arkui-dynamic-xts-generator/categories/`**、**`common/`**。

---

## 1. 编译阶段（`@ComponentV2` / 动态 ArkTS）

| 现象 / 报错摘要 | 常见原因 | 处理方向 |
|-----------------|----------|----------|
| `ChipV2` / `ChipGroupV2` 未定义 | 使用了 **static SDK** 或 SDK 版本 < 26 | `source /root/aiSkill/use-ohos-sdk.sh normal`；确认 `compileSdkVersion: 26` |
| 误用 `'use static'` | 动态高级组件需 **V2 状态管理** | 页面用 `@ComponentV2`、`@Local`/`@Param`/`@Event`；勿加 `'use static'` |
| `Property 'getString' does not exist on type 'Object'` | Inspector 链式中间变量类型丢失 | 整条链式调用，避免中间 `Object` 变量 |
| `ON.id().click()` | 对匹配器误调 `click` | `findComponent(ON.id('x'))` 再 `click()` |
| `expect(a?.b).assertEqual` | 可选链不宜直接进 `expect` | `if (a) { expect(a.b).assertEqual(...) }` |
| 导入 `@kit.ArkUI` 失败 | **OHOS_SDK_PATH** 未指向 normal/26 | 检查 `$OHOS_SDK_PATH/linux/ets` 存在；运行 `ohxtsflow.py env` |
| 使用了 **hvigor-static** | 动态工程应走默认 **hvigor** | **取消** `OHOS_USE_HVIGOR_STATIC`；勿设 `OHOS_HVIGORW_JS` 为 static 路径 |
| `SymbolGlyphModifier` 找不到 | 需从 `@ohos.arkui.modifier` 导入 | 对照工程内已有页面 import |

---

## 2. 运行期 / Hypium / 设备

| 现象 | 常见原因 | 处理方向 |
|------|----------|----------|
| 路由失败 | `main_pages.json` path 与 `router.pushUrl` url 不一致 | ACTS 工程常用 `MainAbility/pages/...`，逐字对齐 |
| `getInspectorByKey` 失败 | 组件无 **id** 或页面未加载完 | `CommonFunc.sleep`；`beforeEach` 中确认 `router.getState().name` |
| Chip 在 Wearable 上异常 | 文档声明 **Wearable 不支持** | 本工程为 **nowear**，确认 `deviceTypes` 与跑测设备匹配 |
| AppStorage 残留 | 多套件串跑 | `afterEach` 清理本套件键 |
| 日志难过滤 | 未统一前缀 | 使用 **`[ARKUI_DYN]`** 或套件内 `LOG_TAG` |

---

## 3. 环境自检命令

```bash
source /root/aiSkill/use-ohos-sdk.sh normal
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py env
```

---

## 4. 异常参数 XTS（undefined / null）

完整流程见 **[abnormal-options-xts.md](abnormal-options-xts.md)**。

| 现象 / 报错 | 原因 | 处理 |
|-------------|------|------|
| 主包 `Cannot find name 'expect'` | `expect` 仅 **ohosTest** 可用 | 断言放 `test/common/AbnormalAssertHelper.ets`；主包只保留 `AbnormalInspectorHelper.ets` |
| 探测页 `enabled: undefined` 也编不过 | 缺 **必填 `label`** | 探测块加 `label: this.lbl('p')` |
| `',' expected`（ChipGroupV2） | `items` 行后**缺逗号** | 多属性时每行以 `,` 结尾 |
| `multiple properties with the same name` | `ChipGroupV2Item` **重复 label** | body 已是 `new ChipGroupV2Item({...})` 时直接 `items: [body]` |
| 批量探测 0 通过 | 同文件多探测 + 错误行干扰 | 用 `compile_probe_matrix.py` **逐条单独编译** |
| 设备大量 Fail、本地刚编过 | **旧 HAP 未卸载** | clean build + 卸载 + `deploy-test` 重装 |
| `queue.shift()` 编译错误 | ArkTS 不支持 | Inspector BFS 改索引遍历 |
| 整段 `$attrs` 断言不稳定 | 含 `id` 等噪声 | 改 `assertPropSame` 单属性（§2.1） |
| `Type 'null' is not assignable` | 预期行为 | 记 `abnormal_compile_failures.md`，**不提交** null 用例 |
| `chipGroupPadding.top` + `undefined` 编不过 | `Length` 非可选 | 记失败表，**不提交**该 undefined 用例 |
