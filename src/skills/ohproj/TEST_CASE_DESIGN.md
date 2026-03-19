# 测试用例设计约定：每接口至少三类用例

本约定为 ohproj 技能的**强制要求**：凡为 NAPI 导出接口编写或补全单元测试，均须满足「每接口至少 3 类用例」及下述命名规范，便于按接口统计覆盖、回归与可读性。后续设计测试用例时一律沿用此要求。

---

## 一、三类用例定义

| 类别 | 含义 | 目的 |
|------|------|------|
| **正常功能（normal）** | 合法输入、典型场景下接口行为正确 | 验证主流程与预期结果 |
| **边界值（boundary）** | 空串、空数组、0、无效 handle、下标边界、可选参数省略等 | 验证边界与异常路径 |
| **返回值（return_value）** | 返回类型、返回码（rc）、数值范围、结构形状等 | 验证接口契约与类型 |

每个 **Index.d.ts 中导出的接口**（每个 `export const apiName`）至少应有 **3 条** 测试用例，分别对应上述三类；若某接口的「边界」与「返回值」在一条用例中同时覆盖，仍建议拆成两条命名清晰的用例，以保持统计一致。

---

## 二、命名规范（必须沿用）

用例名格式：**`apiName_<类别>_<具体场景或结果>`**，便于从报告 `test=CaseName` 定位并统计某接口是否已满足 3 类。

- **正常功能**：`apiName_normal_<场景或结果>`  
  例：`sqlite3Open_normal_memory_returns_handle`、`sqlite3Exec_normal_create_table_returns_ok`

- **边界值**：`apiName_boundary_<条件>`  
  例：`sqlite3Open_boundary_empty_path`、`sqlite3Exec_boundary_empty_sql`、`sqlite3Close_boundary_invalid_handle`

- **返回值**：`apiName_return_value_<类型或含义>`  
  例：`sqlite3Open_return_value_handle_type`、`sqlite3Close_return_value_is_number`、`sqlite3GetTable_return_value_shape`

**统计方式**：对每个 `apiName`，在测试文件中搜索 `it('apiName_normal_`、`it('apiName_boundary_`、`it('apiName_return_value_`（或等价命名），至少各出现 1 次即视为该接口满足「至少 3 类」。

---

## 三、与现有规范的衔接

- 与 **SKILL 4.4、4.6** 一致：单元测试须覆盖所有导出接口，且每接口至少 3 类用例。
- 与 **DESIGN.md** 第六节、constant.ets、AAA、资源清理等规范一并遵守。
- 新增 NAPI 接口时：在对应 *dts.test.ets 中为该接口**至少新增 3 条** it（normal、boundary、return_value），并沿用上述命名。

---

## 四、示例（SQLite 项目片段）

```ts
// sqlite3Open：三类
it('sqlite3Open_normal_memory_returns_handle', TEST_FILTER, () => { ... });
it('sqlite3Open_boundary_empty_path', TEST_FILTER, () => { ... });
it('sqlite3Open_return_value_handle_type', TEST_FILTER, () => { ... });

// sqlite3Exec：三类
it('sqlite3Exec_normal_create_table_returns_ok', TEST_FILTER, () => { ... });
it('sqlite3Exec_boundary_empty_sql', TEST_FILTER, () => { ... });
it('sqlite3Exec_return_value_rc_type', TEST_FILTER, () => { ... });
```

---

## 五、自检清单

- [ ] Index.d.ts 中每个 `export const apiName` 均在 *dts.test.ets 中有对应测试。
- [ ] 每个 apiName 至少存在 3 条用例，且命名中分别包含 **normal**、**boundary**、**return_value**（或等价语义）。
- [ ] 用例名符合 `apiName_<类别>_<场景>` 形式，便于 grep/统计。
