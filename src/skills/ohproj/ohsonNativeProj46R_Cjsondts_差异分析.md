# ohsonNativeProj46R 测试用例差异分析

基于 `cJSON_tests_design.md` 与 `CJSONDTS_comparison.md` 对当前 **ohsonNativeProj46R** 的 `Cjsondts.test.ets` 做对照，说明与“对比文档中的 68 例”的差异及缺失原因。

---

## 一、数量对比

| 来源 | 用例数 | 说明 |
|------|--------|------|
| **CJSONDTS_comparison.md 第二节约定的 Cjsondts 列表** | **68 个 it** | 对比文档中“应对齐”的 NAPI 用例清单（67 个 cJSON + 1 个 add） |
| **当前 ohsonNativeProj46R 的 Cjsondts.test.ets** | **51 个 it** | 创建项目时按“每个导出接口至少 1 条”写的用例 |
| **缺口** | **17** | 68 − 51 = 17（若以 68 为基准） |

“82” 可能来自：某次运行把 **ActsAbilityTest + CjsondtsTest** 合计，或历史上另一版 Cjsondts 写到了 82 条。当前讨论以对比文档的 **68 条 Cjsondts 清单** 为基准。

---

## 二、对比文档 68 条中有、当前 51 条里没有的用例

下列为 **CJSONDTS_comparison.md 第二节** 中列出的用例名，且在当前 `Cjsondts.test.ets` 中**没有同名或明显等价**的用例。

### 2.1 当前 NAPI 已导出、但未写用例（可直接补）

| # | 对比文档中的用例名 | 说明 |
|---|---------------------|------|
| 41 | cjsonReplaceItemViaPointer | 已导出，缺专项用例 |
| 59 | cjsonDetachItemFromObjectCaseSensitive | 已导出，缺专项用例 |
| 60 | cjsonDeleteItemFromObjectCaseSensitive | 已导出，缺专项用例 |
| 61 | cjsonReplaceItemInObjectCaseSensitive | 已导出，缺专项用例 |
| 63 | cjsonParse_empty_string_returns_zero | 解析空串返回 0 handle |
| 64 | cjsonGetObjectItem_on_array_root_returns_invalid_handle | 对数组根调 GetObjectItem 返回无效 handle |
| 65 | cjsonGetObjectItem_missing_key_returns_invalid_handle | 缺失 key 返回无效 handle |
| 66 | cjsonHasObjectItem_missing_key_returns_false | 与 65 类似，HasObjectItem 对缺失 key 为 false（当前有 cjsonHasObjectItem_false，可视为部分覆盖，如需与文档一致可单独一条） |
| 67 | cjsonGetArrayItem_out_of_bounds_returns_invalid_handle | 越界下标返回无效 handle |
| 68 | cjsonGetObjectItemCaseSensitive_exact_key | 大小写敏感、键完全匹配（当前有 cjsonGetObjectItemCaseSensitive，可补一条强调 exact_key 的用例） |

以上 **10 条** 仅靠“补写用例”即可与 68 对齐（不涉及 NAPI 或 C 行为变更）。

### 2.2 依赖未实现的 NAPI（需先补 NAPI 再补用例）

对比文档 68 条里下列项依赖的接口，在 **ohsonNativeProj46R 的 Index.d.ts / napi_init.cpp 中未导出**，因此当前无法写对应用例：

| # | 对比文档中的用例名 | 缺失的 NAPI |
|---|---------------------|-------------|
| 25 | cjsonCreateStringReference | cjsonCreateStringReference |
| 26 | cjsonCreateObjectReference | cjsonCreateObjectReference |
| 27 | cjsonCreateArrayReference | cjsonCreateArrayReference |
| 28 | cjsonCreateIntArray | cjsonCreateIntArray |
| 29 | cjsonCreateDoubleArray | cjsonCreateDoubleArray |
| 30 | cjsonCreateStringArray | cjsonCreateStringArray |
| 55 | cjsonSetNumberHelper | cjsonSetNumberHelper（或 cJSON_SetNumberValue 的封装） |
| 62 | cjsonCreateFloatArray | cjsonCreateFloatArray |

共 **8 条**，需在 **napi_init.cpp + Index.d.ts** 中实现并导出上述接口后，再按对比文档补用例。

---

## 三、与 cJSON_tests_design.md 的覆盖差异（为何“感觉少”）

`cJSON_tests_design.md` 描述的是 **C 侧 tests 目录** 的设计：约 **170+ 个** Unity 用例，按“解析 / 打印 / 类型 / 创建 / 获取 / 添加·替换·删除 / Compare / Minify / 边界”等维度展开。  
当前 **51 条 Cjsondts** 是“按 NAPI 接口维度、每接口至少 1 条”，没有按 C 侧那样做**同接口多场景、多数据**的展开，因此会出现：

- **同一接口在 C 侧多用例、在 Cjsondts 单用例**  
  例如：C 侧 parse_number 有 6 条（zero、负整数、正整数、正实数、负实数、大数），Cjsondts 只有 1 条 cjsonParse + 少量 CreateNumber/GetNumberValue；print_* 在 C 侧多组数据，Cjsondts 仅 1～2 条打印类。
- **C 侧有、Cjsondts 未写的场景**  
  文档中“三、差异分析”已列，例如：
  - 解析边界：空串、不完整 JSON、无尾零、BOM、深度嵌套、循环引用等；
  - 数字/字符串边界：大数、多种实数、UTF-16、非法转义等；
  - 打印：各类型多组输入与期望；
  - Null/alloc 安全：系统化“传 0 handle”不崩溃；
  - Compare 细分：null/invalid/numbers/booleans/strings/raw/arrays/objects；
  - Minify：注释、空格、不修改字符串等。

所以“为啥只有 51 个”可以归纳为两点：

1. **目标不同**  
   当前实现目标是“每个已导出 NAPI 至少 1 条”，得到 51 条；对比文档的 68 条是“在 NAPI 基础上再补边界/无效输入/CaseSensitive 等”，多出约 17 条。
2. **未按 C 侧规模展开**  
   没有像 `cJSON_tests_design.md` 那样，对每个接口做多场景、多数据、多边界，所以总条数远少于 C 侧的 170+，也少于“补全到 68 后的 NAPI 层”。

---

## 四、建议补全顺序（与两文档一致）

1. **先补“仅需加用例”的 10 条**（2.1 节）  
   - ReplaceItemViaPointer、Detach/Delete/ReplaceItemInObjectCaseSensitive、空串解析、GetObjectItem 对数组根/缺失 key、HasObjectItem 缺失 key、GetArrayItem 越界、GetObjectItemCaseSensitive exact_key。  
   补完后：51 + 10 = **61**（若 66 与现有 HasObjectItem_false 合并则少 1 条）。

2. **再视需要补 NAPI + 用例**（2.2 节）  
   - 若要对齐对比文档 68 条，再实现 Create*Reference、Create*Array、SetNumberHelper 等 8 个 NAPI，并各写至少 1 条用例。

3. **若要与 C 侧设计更对齐**  
   - 参考 `cJSON_tests_design.md` 与 `CJSONDTS_comparison.md` 第三节、第五节：  
     增加解析/打印/数字/字符串边界、Compare 细分类型、Minify 多场景、传 0 handle 的 null 安全等，用例数会继续往 82、甚至更多增长。

---

## 五、小结

| 问题 | 结论 |
|------|------|
| 为啥只有 51 个？ | 当前 Cjsondts 是按“每导出接口至少 1 条”写的，没有按对比文档 68 条逐条实现，也没有按 C 侧 170+ 做多场景展开。 |
| 和 68 差在哪？ | 约 10 条是“只差用例”（NAPI 已有）；约 8 条是“缺 NAPI”（Create*Reference、Create*Array、SetNumberHelper 等）。 |
| 和 82 的关系？ | 82 可能是“某次总用例数”或“历史某版 Cjsondts 条数”；把 51 补到 68 再适当加边界/Compare 等，即可接近或超过 82。 |

如需，我可以按上述 2.1 的 10 条在 `Cjsondts.test.ets` 里直接补上具体 `it('...', ...)` 代码，并标出 2.2 中 8 条在 NAPI 实现后的建议用例名与断言要点。
