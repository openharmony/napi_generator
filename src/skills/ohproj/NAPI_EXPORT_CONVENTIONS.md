# NAPI 导出约定：宏、结构体、枚举与 C API 对应关系

本约定说明在将 C 头文件（如 sqlite3.h）中的接口通过 NAPI 导出到 ArkTS 时，**宏、结构体、枚举**是否以及如何体现在 `Index.d.ts` 与 NAPI 实现中。适用于 ohproj 技能下的原生项目（如 ohsqliteNativeProj46R）。

---

## 一、总则

- **C 函数（SQLITE_API 等）**：须在 `napi_init.cpp` 中实现 NAPI 封装，并在 `Index.d.ts` 中声明为 `export const apiName: (...) => ReturnType`。命名采用驼峰：`sqlite3_close_v2` → `sqlite3CloseV2`。
- **宏、结构体、枚举**：不“原样”导出 C 定义，而是按下列规则在 .d.ts 与 NAPI 中体现。

---

## 二、宏（#define）

### 2.1 说明

- C 中的 `#define SQLITE_OK 0`、`#define SQLITE_ROW 100` 等是预处理常量，NAPI 无法直接导出宏本身。
- 若 ArkTS 侧需要这些常量（例如判断返回值、传参），有两种做法。

### 2.2 约定

| 方式 | 做法 | 适用 |
|------|------|------|
| **运行时常量 getter** | 在 NAPI 中提供无参函数，返回宏的整型/字符串值，在 .d.ts 中声明为 `export const sqlite3ConstXxx: () => number`（或 `string`）。 | 与编译选项、库版本相关的常量（如 SQLITE_VERSION_NUMBER）。 |
| **.d.ts 字面常量（可选）** | 在 .d.ts 中直接写 `export const SQLITE_OK = 0;`、`export const SQLITE_ROW = 100;` 等。 | 与头文件固定、不随编译变化的常量，便于类型检查与可读性。 |

- **不要求**在 .d.ts 中“声明 C 宏”；NAPI 只导出函数或常量值。
- 当前 SQLite 项目已通过 **sqlite3Const*** 系列 getter 导出大量常量，满足“导出宏的取值”的需求；若需更好类型提示，可额外在 .d.ts 中增加字面常量（与 sqlite3Const* 二选一或并存）。

---

## 三、结构体（struct）

### 3.1 说明

- C 中如 `sqlite3`、`sqlite3_stmt`、`sqlite3_blob`、`sqlite3_backup` 等为不透明指针类型，NAPI 不能也不应导出 C 结构体定义或内存布局。

### 3.2 约定

- **不**在 .d.ts 中声明 C 的 `struct` 或 `typedef struct`。
- 在 NAPI 中将这些指针作为**句柄**传递：在 C++ 侧用 `int64_t`（或 `number`）表示，在 .d.ts 中用 **类型别名** 表示，例如：
  - `export type Sqlite3Handle = number;`（对应 `sqlite3*`）
  - `export type Sqlite3StmtHandle = number;`
  - `export type Sqlite3BlobHandle = number;`
  - `export type Sqlite3BackupHandle = number;`
- 仅当 NAPI 接口需要返回**结构化数据**（如 `{ rc, stmtHandle, tail }`）时，在 .d.ts 中定义 **interface**（如 `PrepareV2TailResult`），这与 C struct 一一对应的是“返回形状”，不是 C 的 struct 定义。

---

## 四、枚举（enum）

### 4.1 说明

- SQLite 头文件中多数“枚举含义”的取值通过 **#define** 给出（如 SQLITE_OK、SQLITE_ROW），并非 C 的 `enum` 类型。

### 4.2 约定

- **不**在 .d.ts 中“导出 C 的 enum 类型”。
- 枚举取值按 **宏** 处理：通过 **sqlite3Const*** getter 或 .d.ts 中的 **字面常量**（如 `export const SQLITE_OK = 0`）暴露。
- 若希望 TS 侧有更好类型提示，可在 .d.ts 中用 **TypeScript 枚举或 const 对象** 定义一组命名常量，数值与 C 头文件一致；NAPI 侧仍只导出函数与常量值。

---

## 五、与 SKILL、TEST_CASE_DESIGN 的衔接

- **C API 导出**：以头文件（如 sqlite3.h）中 `SQLITE_API` 声明的函数为准，应在 `napi_init.cpp` 与 `Index.d.ts` 中**全量对应**；见 SKILL 4.3、4.4。
- **测试**：每个导出的函数接口须在单元测试中覆盖，且满足 **TEST_CASE_DESIGN.md** 中“每接口至少 3 类用例”（normal / boundary / return_value）。
- **宏/结构体/枚举**：仅按上述规则在 .d.ts 中体现为类型别名、常量或返回形状，不单独为“宏/结构体/枚举”编写测试，而是随使用它们的 API 一起覆盖。

---

## 六、路径与参考

| 用途 | 路径或文件 |
|------|------------|
| NAPI 实现 | 项目下 `entry/src/main/cpp/napi_init.cpp` |
| TS 声明 | 项目下 `entry/src/main/cpp/types/libentry/Index.d.ts` |
| 测试用例设计 | `src/skills/ohproj/TEST_CASE_DESIGN.md` |
| 技能说明 | `src/skills/ohproj/SKILL.md` |
