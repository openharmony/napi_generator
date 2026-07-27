# 门禁规则参考（OpenHarmony ArkUI C++）

## 规则分类

### 致命 / 高优先级
- **OAT.3 许可证头缺失** — 新文件或补代码缺 Apache 2.0 头
- **安全相关** — 一般不通过合规重构引入

### 一般 / 常见
- **圈复杂度** — 单函数 cyclomatic complexity > 20
- **函数行数** — nbnc（非空非注释行）> 50
- **嵌套深度** — > 4 层
- **G.FMT.05 行宽** — > 120 字符
- **G.FMT.06-CPP 换行缩进** — 函数调用实参续行 = **起始行缩进 + 4**（如起始 8→续行 12，起始 4→续行 8）；或与首参列对齐；操作符留行末
- **魔法数** — 裸数字字面量（索引、权重、长度等）
- **头文件行数** — nbnc 超标（如 inspector_id_helper.h 617 行）
- **命名** — 如 `NUMBERED_NAV_PREFIX` 应 `numberedNavPrefix` 或 constexpr
- **注释代码** — 头文件中注释掉的大段实现
- **缩进** — 不一致缩进
- **重复文件** — bridge 层重复头文件应 include canonical 路径
- **extern 数组** — 需显式元素个数

## nbnc 统计说明

门禁工具统计**非空非注释行**。拆分函数时以 nbnc 为准，不是物理行数。

```bash
# 简易统计（与门禁近似）
python3 -c "
for line in open('file.cpp'):
    s=line.strip()
    if s and not s.startswith('//') and not s.startswith('*') and not s.startswith('/*'):
        print(s)
" | wc -l
```

## 拆分策略决策树

```
函数违规?
├─ 仅行宽 → 折行
├─ 仅魔法数 → constexpr
├─ 圈复杂度/行数/嵌套 → 拆 static helper
│   ├─ helper 仅本文件用 → anonymous namespace
│   ├─ helper 需复用 → 同 namespace static 或类 private static
│   └─ 实现过长 → 迁 .cpp
└─ 参数过多(>5) → struct 聚合参数
```

## G.FUD.05 / 超大函数：NAPI `GetXxxProps` 表注册（CAPI）

**现象**：`NapiFuncInit*.cpp` 里单个 `GetMaterialProps`（或同类）用超长 `static napi_property_descriptor desc[] = { ... }`，
nbnc / 非空非注释行 > 50，触发 **G.FUD.05** 与 **超大函数[C++]**。

**修法（不影响导出符号集合）**：按业务域拆成多个 `GetXxxProps`，`Init` 内多次 `napi_define_properties`（或经薄封装
`DefineXxxProps` 依次注册）。禁止为过线把多条 `MakeProp` 硬塞同一行。

```cpp
// before: 一个 GetMaterialDialogProps 内 Dialog+NullPointer 混装 → nbnc≈60
// after:
static napi_property_descriptor *GetMaterialCoreProps(size_t *count);        // Immersive/LightEffect
static napi_property_descriptor *GetMaterialDialogProps(size_t *count);      // CustomDialog/Node/DisplayMode
static napi_property_descriptor *GetMaterialNullPointerProps(size_t *count); // 空指针 API 表
static bool DefineMaterialProps(napi_env env, napi_value exports)
{
    size_t coreCount = 0;
    size_t dialogCount = 0;
    size_t nullCount = 0;
    auto *core = GetMaterialCoreProps(&coreCount);
    auto *dialog = GetMaterialDialogProps(&dialogCount);
    auto *nullDesc = GetMaterialNullPointerProps(&nullCount);
    if (napi_define_properties(env, exports, coreCount, core) != napi_ok) {
        return false;
    }
    if (napi_define_properties(env, exports, dialogCount, dialog) != napi_ok) {
        return false;
    }
    return napi_define_properties(env, exports, nullCount, nullDesc) == napi_ok;
}
```

案例：`ace_c_arkui_test_api26_systemmaterial/.../NapiFuncInitTest.cpp`（PR 门禁 G.FUD.05）。
**门禁**：`gate_review.check_cpp_fud05` 对 CAPI `.cpp/.h` 自动检测 nbnc>50（不自动拆分，须人工按域拆表）。

## struct 参数设计约束（C++17）

| 成员类型 | 默认构造 | 赋值 | 建议 |
|----------|----------|------|------|
| `T` 值 | ✅ | ✅ | 小对象 |
| `const T&` | ❌ | ❌ | 避免 |
| `const T*` | ✅ | ✅ | 大容器只读 |
| `T&` | ❌ | — | 输出参数用指针 |
| `std::vector<T>` 值 | ✅ | ✅ | 需要 move 时 |

## BUILD.gn 注意

新增 `.cpp` 必须在对应 `BUILD.gn` 的 `sources` 中注册，否则链接阶段才报错。

## 双仓同步路径

| Inspector 定制仓（ace_engine） | 6.1tag 基准仓（foundation/arkui/ace_engine） |
|--------------------------------|---------------------------------------------|
| inspector 目录下 ace_engine 工程 | 6.1tag 树内 ace_engine 对应路径 |

同步命令：
```bash
cp inspector/path/file 6.1tag/path/file
```

## 编译 target 依赖关系

```
ace_core_components_base_ng_ohos  (base 层，优先增量编译验证)
        ↓
libace_compatible               (主引擎，~1-2h)
        ↓
ace_engine                      (全量，最慢)
```

## G.FMT.06-CPP 函数调用参数换行

**规则**：操作符留在行末；续行参数缩进 = **起始行缩进 + 4**（非固定 8）。亦允许与首参列对齐。  
**函数声明**同样适用：续行勿写成仅 1 个空格（门禁报 `indentation is [1]`）。

```cpp
// ❌ 续行与起始行同级（8→8）— 门禁报 should be [12]
        MakeMaterialProp(
        "testFoo001", TestFoo001),

// ❌ 声明续行仅 1 空格 — 门禁报 should be [4] or align
std::string Foo(
 const std::string& a);

// ✅ 续行多缩进一层（8→12）
        MakeMaterialProp(
            "testFoo001", TestFoo001),

// ✅ 声明续行 4 空格
std::string Foo(
    const std::string& a);

// ✅ 函数体 4 空格起始 → 续行 8（ASSERT_EQ 等）
    ASSERT_EQ(OH_ArkUI_CustomDialog_SetDisplayModeInSubWindow(
        nullptr, OH_ARKUI_DIALOG_DISPLAY_MODE_SCREEN_BASED),
        INVALID_PARAM);
```

自检：`sed -n '<行>p' file.cpp | cat -A` 数续行前空格，应等于起始行 + 4。
