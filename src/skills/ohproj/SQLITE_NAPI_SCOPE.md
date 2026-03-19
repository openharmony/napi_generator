# SQLite NAPI 导出范围说明

## 一、为何只导出约 7 个接口？

**sqlite3.h** 中声明的 C API 约有 **300+ 个**（如 368 个），而 ohsqlite 项目的 NAPI 层目前只封装了 **7 个** 与 SQLite 相关的接口（外加模板自带的 `add`），原因如下：

1. **创建项目时采用「最小可用集」**：只实现「开库 → 执行 SQL → 取错误 → 关库」这条最简链路，便于在单次任务内完成：接入 sqlite3、应用调用、测试用例编写、编译与执行，避免一次性实现 300+ 个 NAPI 导致周期过长。
2. **每个 C 接口都要手写 NAPI**：每个 `sqlite3_*` 都需要在 napi_init.cpp 里写参数解析、返回值转换；涉及 `sqlite3*` / `sqlite3_stmt*` 的还要维护句柄表，工作量与接口数成正比。
3. **部分接口需要额外句柄类型**：例如 `sqlite3_prepare_v2` 返回 `sqlite3_stmt*`，要像 `sqlite3*` 一样用 int64 句柄管理，并实现 prepare/step/bind/column/finalize 一整条链，才能发挥用处。

因此当前是「先跑通最小集，再按需分批补全」，而不是「一次性导出 sqlite3.h 全部接口」。

---

## 二、当前已导出的 NAPI（ohsqlite，已分批补全）

| NAPI 名称           | 对应 C API        | 说明           |
|--------------------|-------------------|----------------|
| sqlite3Libversion  | sqlite3_libversion() | 版本字符串     |
| sqlite3Open        | sqlite3_open()    | 打开数据库，返回 db 句柄 |
| sqlite3Close       | sqlite3_close()   | 关闭数据库     |
| sqlite3Exec        | sqlite3_exec()    | 执行 SQL（无 callback，仅返回结果码） |
| sqlite3Errmsg      | sqlite3_errmsg()  | 最后错误信息   |
| sqlite3Errcode     | sqlite3_errcode() | 最后错误码     |
| **Batch 1**        |                   |                |
| sqlite3PrepareV2   | sqlite3_prepare_v2() | 预处理 SQL，返回 stmt 句柄 |
| sqlite3Finalize    | sqlite3_finalize() | 销毁 stmt      |
| sqlite3Reset       | sqlite3_reset()   | 重置 stmt 以便重用 |
| sqlite3Step        | sqlite3_step()    | 执行一步，返回 ROW/DONE 等 |
| sqlite3ColumnCount | sqlite3_column_count() | 结果列数 |
| sqlite3ColumnType  | sqlite3_column_type() | 列类型 |
| sqlite3ColumnInt   | sqlite3_column_int() | 取整数列 |
| sqlite3ColumnText  | sqlite3_column_text() | 取文本列 |
| sqlite3ColumnBytes | sqlite3_column_bytes() | 列字节数 |
| **Batch 2**        |                   |                |
| sqlite3OpenV2      | sqlite3_open_v2() | 带 flags 打开   |
| sqlite3Changes     | sqlite3_changes() | 上次修改行数   |
| sqlite3TotalChanges| sqlite3_total_changes() | 总修改行数 |
| sqlite3ExtendedErrcode | sqlite3_extended_errcode() | 扩展错误码 |
| sqlite3BindInt     | sqlite3_bind_int() | 绑定 int 参数  |
| sqlite3BindInt64   | sqlite3_bind_int64() | 绑定 int64 参数 |
| sqlite3BindDouble  | sqlite3_bind_double() | 绑定 double 参数 |
| sqlite3BindNull    | sqlite3_bind_null() | 绑定 NULL     |
| sqlite3BindText    | sqlite3_bind_text() | 绑定文本参数  |
| sqlite3BindParameterCount | sqlite3_bind_parameter_count() | 参数个数 |
| add                | （模板）          | 加法，用于测试兼容 |

**当前约 25 个 SQLite 相关 NAPI**（含 add 共 26 个），对应 sqlite3.h 中约 **300+ 个** 声明；已覆盖「开库/关库、exec、预处理+step+列读取、bind、changes、open_v2、extended_errcode」等常用链路。

---

## 三、sqlite3.h 中未导出的大类（补全时可参考）

以下按功能分类，便于按模块扩展，而不是一次性全做。

| 类别           | 典型 C API | 说明 |
|----------------|------------|------|
| 打开/配置      | sqlite3_open_v2, sqlite3_uri_parameter, sqlite3_config | 更多打开选项与全局配置 |
| 预处理语句     | sqlite3_prepare_v2, sqlite3_step, sqlite3_finalize, sqlite3_reset | 需增加 stmt 句柄表 |
| 绑定参数       | sqlite3_bind_int, sqlite3_bind_text, sqlite3_bind_blob, ... | 与 prepare/step 配套 |
| 取列值         | sqlite3_column_int, sqlite3_column_text, sqlite3_column_blob, ... | 与 prepare/step 配套 |
| 结果集         | sqlite3_get_table, sqlite3_free_table | 一次性取回多行 |
| 错误与状态     | sqlite3_extended_errcode, sqlite3_errstr, sqlite3_changes, sqlite3_total_changes | 扩展错误与影响行数 |
| 事务与备份     | sqlite3_backup_*, sqlite3_blob_* | 备份、增量 BLOB I/O |
| 扩展与回调     | sqlite3_create_function, sqlite3_trace_v2, sqlite3_set_authorizer | 自定义函数、跟踪、鉴权 |
| 其它           | sqlite3_limit, sqlite3_db_config, sqlite3_stmt_*, ... | 大量细粒度 API |

每增加一类，都需要在 **napi_init.cpp** 中实现对应包装、在 **Index.d.ts** 中声明、并在 **Sqlitedts.test.ets** 中补充用例。

---

## 四、如何补全更多接口

1. **确定优先级**：例如先做「预处理 + step + bind + column + finalize」，即可在 ArkTS 里执行参数化查询并读取结果集。
2. **扩展句柄表**：若封装 `sqlite3_stmt*`，需在 napi_init.cpp 中增加 `std::map<int64_t, sqlite3_stmt*> g_stmtHandles` 及 Store/Get/Remove。
3. **同步三处**：每增加一个 C API 的 NAPI 封装，都要在 **napi_init.cpp**、**Index.d.ts**（及 oh_modules 下的副本）、**Sqlitedts.test.ets** 中同步修改。
4. **参考 KNOWN_ISSUES_AND_AVOIDANCE.md 第 2.5 节**：与「测试用例数量不足」类似，若希望「导出接口数量与 sqlite3.h 接近」，需要在创建/迭代时明确范围，并按本文档与 2.5 节分批补全。

---

## 五、总结

| 项目       | 数量/说明 |
|------------|-----------|
| sqlite3.h 中 C API 约 | 300+（如 368） |
| 当前 NAPI 已导出     | 约 7 个（最小可用集） |
| 差异原因             | 最小集快速跑通，未做全量封装 |
| 补全方式             | 按模块（prepare/step/bind/column、get_table、backup 等）在 napi_init + Index.d.ts + 测试中分批增加 |

若创建项目时预期是「导出 sqlite3.h 里全部或大部分接口」，应在技能或任务说明中明确「先最小集再分批补全」，或直接规划第一批要实现的接口列表，避免与「368 个接口」的预期不符。
