# 异常参数（undefined / null）XTS 开发参考

与 **`SKILL.md` §八** 配套。以 **chip_nowear** 已落地实践为准；其他 `@ComponentV2` 高级组件可类比。

---

## 1. 核心结论（已实测，禁止推断）

| 异常值 | 编译 | 是否写跑测用例 |
|--------|------|----------------|
| **`null`** | **100/100 属性编译失败** | 否，仅记录 |
| **`undefined`** | **90 通过 / 10 失败** | 仅对「编译通过」项写成对页面 + Hypium |

**undefined 编译失败的 10 项**（必填或 `Length` 严格类型）：

- ChipV2：`ChipV2Options.label`、`ChipV2Options.label.text`、`label.text`、`prefixIcon.src`、`suffixIcon.src`
- ChipGroupV2：`Item.label`、`Item.label.text`、`Item.prefixIcon.src`、`chipGroupPadding.top`、`chipGroupPadding.bottom`

**权威矩阵 Excel**：模块内 `tools/abnormal_compile_matrix.xlsx`（由 `tools/compile_probe_matrix.py` 逐条单独编译生成，约 30 分钟）。

### 1.1 CounterV2（动态 `ace_ets_module_counter`，已实测 2026-06-23）

| 异常值 | 编译 | 是否写跑测用例 |
|--------|------|----------------|
| **`null`** | **35/35 编译失败** | 否，仅记录 |
| **`undefined`** | **35/35 编译通过** | 是，35 条设备 Pass |

**工程路径**：`ace_ets_module_counter`

**属性范围（35 项）**：

- `options`：`direction`、`numberOptions`、`inlineOptions`、`dateOptions`
- `numberOptions`（LIST）：`label`、`value`、`min`、`max`、`step`、`textWidth`、`focusable`、`onChange`、`onFocus*`、`onBlur*`、`onHover*`
- `inlineOptions`（INLINE）：`value`、`min`、`max`、`step`、`textWidth`、`focusable`、`onChange`、`onHover*`
- `dateOptions`（INLINE_DATE）：`year`、`month`、`day`、`focusable`、`step`、`onHover*`、`onDateChange`

**产物**：

| 路径 | 说明 |
|------|------|
| `tools/abnormal_compile_matrix.xlsx` | 70 条逐条编译矩阵 |
| `tools/abnormal_compile_failures.md` | 归档 |
| `tools/gen_counter_abnormal.py` | 页面/用例生成 |
| `tools/compile_probe_matrix.py` | 重跑矩阵 |
| `tools/run_abnormal_device_test.sh` | 4 套件 35 条跑测 |
| `entry/.../pages/CounterV2/abnormal/CounterV2Abnormal{Options,Number,Inline,Date}.ets` | 成对页面 |
| `entry/.../test/CounterV2/CounterV2Abnormal*Test.test.ets` | Hypium |

**与 Chip 差异**：CounterV2 当前 **undefined 无编译失败项**（Chip 为 90/10）；静态版探测前勿假定相同，须单独跑静态工程 `compile_probe_matrix.py`。

---

## 2. 目录与职责拆分

| 路径 | 职责 |
|------|------|
| `entry/.../pages/chipV2/abnormal/*.ets` | 成对 **default / undefined** 预览页 |
| `entry/.../pages/ChipGroupV2/abnormal/*.ets` | 同上 |
| `entry/.../MainAbility/common/AbnormalInspectorHelper.ets` | **主包**：`parseInspector`、`readAttr`、`findAttrsWithKey`（BFS）、`countChildren` — **禁止 `expect`** |
| `entry/.../test/common/AbnormalAssertHelper.ets` | **测试包**：`assertPropSame`、`assertChildrenSame`、`assertSystemMaterialSame`、`assertSmoke` |
| `entry/.../test/chipV2/ChipV2Abnormal*.test.ets` | Hypium 套件 |
| `tools/gen_abnormal_phase{1..4,6_all}.py` | 页面/用例生成 |
| `tools/compile_probe_matrix.py` | null/undefined 编译矩阵实测 |
| `tools/run_abnormal_device_test.sh` | 设备批量跑测 |
| `tools/abnormal_compile_failures.md` | 编译失败归档 |
| `tools/abnormal_assert_strategy.md` | 断言降级策略 |

**页面 id 约定**：`abn_{suffix}_d`（默认）、`abn_{suffix}_u`（undefined）。

---

## 3. 断言规范（§2.1）

1. **禁止**整段 `JSON.stringify($attrs)` 与默认页对比（含 `id` 等噪声）。
2. **必须**对**单个被测属性**调用 `assertPropSame(uId, dId, attr, level)`。
3. Inspector 无对应字段时按 `gen_abnormal_phase6_all.py` 中 `CV2_OPT_ASSERT` / `resolve_assert()` 降级：
   - 可读标量 → `assertPropSame`
   - 整段 icon 对象 → `assertChildrenSame`
   - `systemMaterial` → `assertSystemMaterialSame`
   - 回调 / 无字段 → `assertSmoke`

```typescript
// 正确：单属性
assertPropSame('abn_enabled_u', 'abn_enabled_d', 'enabled', 'root');

// 错误：整段 attrs
expect(chipRootAttrsJson(uId)).assertEqual(chipRootAttrsJson(dId));
```

---

## 4. 生成器分阶段

| Phase | 套件 | 说明 |
|-------|------|------|
| 1 | CV2-OPT、CG2-ROOT | `ChipV2Options` 顶层 + `ChipGroupV2` 根属性；`items:[]` 边界 |
| 2 | CV2-LBL/PRE/SUF/CLS、CG2-ITEM | 子对象可选字段 |
| 3 | CG2-STY/SPC/SFX | `itemStyle`、space/padding、suffix Builder |
| 4 | CV2-CMB、CG2-CMB | 多属性组合 undefined |
| 5～6 | 断言修复 + 单属性 Inspector | `AbnormalInspectorHelper` + `AbnormalAssertHelper` 拆分 |

重新生成：

```bash
cd "$CHIP_MODULE"
python3 tools/gen_abnormal_phase1.py   # 按需 phase2/3/4/6_all
```

---

## 5. 编译探测（compile probe）

### 5.1 全量矩阵（推荐）

```bash
cd "$CHIP_MODULE"
python3 tools/compile_probe_matrix.py
# 输出 tools/abnormal_compile_matrix.xlsx
```

- **每条属性单独生成探测页 + 单独 `assembleHap`**，以 exit code 判定通过/失败。
- 禁止用「同文件批量探测 + 推断」代替实测（会因缺 `label`、缺逗号、重复属性导致误判）。

### 5.2 探测页硬约束

**ChipV2** 探测块必须带 `label`（除专门测 `label` / `label.text` 外）：

```typescript
@Entry @ComponentV2 struct _CompileProbe_single {
  private lbl(t: string): ChipV2Label { return new ChipV2Label({ text: t }); }
  build() { Scroll() { Column() {
    ChipV2({
      chipV2Options: new ChipV2Options({
        label: this.lbl('p'),
        enabled: undefined,  // 被测属性
      }),
    }).id('probe')
  } } }
}
```

**ChipGroupV2** 多属性对象字面量**属性之间必须有逗号**：

```typescript
ChipGroupV2({
  items: [new ChipGroupV2Item({ label: { text: 'x' } })],  // ← 逗号
  itemStyle: new ChipGroupV2ItemStyle({ size: undefined }),
})
```

**ChipGroupV2Item** 勿重复 `label`：若 body 已是 `new ChipGroupV2Item({...})`，直接 `items: [body]`，勿再包一层 `label: { text: 'x' }`。

**suffix** 探测用 `@Builder` + `suffix: this.B_xxx.bind(this)`（见 `gen_abnormal_phase3.py`）。

---

## 6. 编签与设备跑测

### 环境

```bash
export PATH=/root/aiSkill:$PATH
export OHOS_HAPSIGNER_RESULT=/root/aiSkill/develop/static/ace_ets_module_dialog_button_static/signing-materials
source /root/aiSkill/use-ohos-sdk.sh normal
hdc tconn 192.168.12.220:8710   # 按实际设备
```

### 编签

```bash
python3 /root/aiSkill/.claude/skills/ohxtsdynamic/ohxtsflow.py build-all "$CHIP_MODULE"
```

### 设备跑测（异常套件专用）

```bash
./tools/run_abnormal_device_test.sh
# 内部：deploy-test --module entry_test，12 套件串联
```

**旧包未卸载会导致批量失败**：须 **clean 构建 + 卸载旧 HAP + 重装** 后再判结果。

---

## 7. 常见编译/生成坑

| 现象 | 原因 | 处理 |
|------|------|------|
| 主包编不过 `expect` | `expect` 只能在 **ohosTest** | 断言迁到 `test/common/AbnormalAssertHelper.ets` |
| `queue.shift()` 报错 | ArkTS 限制 | BFS 用索引遍历 |
| `selectedIndexes` 重复属性 | 生成器组装重复 | `group_props()` 动态去重 |
| Suffix Builder 尾逗号 | 空属性残留 | 独立 `suffix_builder()` |
| 探测 `',' expected` | `items` 行后缺逗号 | `group_block` 统一补逗号 |
| 探测 `multiple properties` | Item 内重复 `label` | 用完整 `new ChipGroupV2Item(...)` |
| 设备 33/103 失败 | 跑了旧 HAP | clean + 卸载 + `deploy-test` |

---

## 8. 提交流程建议

1. 改生成脚本 → 重新生成页面/用例 → **编签通过**
2. **设备 103/103（或当前全集）通过** 后再 commit
3. commit 信息：`test(chip): ...`；用户指定作者/日期时用 `GIT_AUTHOR_DATE` / `GIT_COMMITTER_DATE`
4. 编译矩阵变更时同步更新 `abnormal_compile_matrix.xlsx`（跑 `compile_probe_matrix.py`）

---

## 9. 检查清单

```
异常参数 XTS 完成度：
- [ ] undefined 用例均为编译通过属性
- [ ] 成对 default/undefined 页面 id 正确
- [ ] 断言为单属性 §2.1（非整段 $attrs）
- [ ] 主包无 expect；Inspector 辅助在主包
- [ ] main_pages.json + List.test.ets 已注册
- [ ] build-all 通过
- [ ] deploy-test 全套件 Pass（clean 装包后）
- [ ] null/undefined 矩阵为实测 Excel（无「推断」）
```

---

## 10. 静态 CounterV2 异常参数（待开发）

**目标工程**：`ace_ets_module_advance_counter_static`（`'use static'` + `hvigor-static`）

**准备状态**：动态版已落地，静态版 **尚未开始**；收到用户指令后按本节 + `tools/STATIC_ABNORMAL_PREP.md` 执行。

### 10.1 与动态版差异（开发前必读）

| 项 | 动态 `ace_ets_module_counter` | 静态 `ace_ets_module_advance_counter_static` |
|----|------------------------------|---------------------------------------------|
| 文件头 | 无 `'use static'` | 页面/测试首行 `'use static';` |
| 编签 | `source use-ohos-sdk.sh normal` + `ohxtsflow.py build-all` | `source use-ohos-sdk.sh static` + `ohxtsstatic/ohxtsflow.py build-all` |
| Inspector | `getInspectorByKey` + `Record` 遍历 | 可用 `inspector.getInspectorTree()` + `JSON.parseJsonElement` |
| 测试目录 | `entry/src/main/ets/test/` | `entry/src/main/src/test/` |
| 跑测 | `deploy-test -m entry_test` | `static-deploy-test`（单 HAP，`entry` 模块） |

### 10.2 静态开发步骤（收到指令后）

1. 从动态 `tools/gen_counter_abnormal.py` 派生静态生成器（加 `'use static'`、静态 import 路径）。
2. **必须先跑**静态工程 `compile_probe_matrix.py`（`null`/`undefined` 可能与动态 35/35 不同，禁止沿用动态矩阵）。
3. 生成 `pages/CounterV2/abnormal/*.ets` + `*Abnormal*Test.test.ets`。
4. 静态版 `AbnormalInspectorHelper`：优先 `inspector` 树 + `parseJsonElement`（与 `CounterV2AttrsTest` 静态用例一致）。
5. `ohxtsstatic` 编签 → `static-deploy-test` → 报告。

### 10.3 可复用资产（动态 → 静态）

- 属性列表与 `CASES` 表：`ace_ets_module_counter/tools/gen_counter_abnormal.py`
- 断言策略：`tools/abnormal_assert_strategy.md`
- 页面 id 约定：`abn_{suffix}_d` / `abn_{suffix}_u`
