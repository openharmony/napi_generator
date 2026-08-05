# 实战案例：Inspector 6.1 门禁合规

## 背景

分支 `inspector_6.1tag`，约 46 文件、+2294/-2142 行，门禁项全部清零目标。

## 案例 1：inspector_id_helper 头文件超标

**问题**：头文件 617 行 nbnc，含魔法数、注释代码、大函数实现。

**修复**：
- 新建 `inspector_id_helper.cpp`（457 行）
- 头文件降至 ~257 行 nbnc
- `BUILD.gn` 添加 cpp

**经验**：头文件瘦身是门禁高频项，优先迁 `.cpp`。

## 案例 2：dialog_pattern BuildChild 圈复杂度 23

**问题**：`DialogPattern::BuildChild` 圈复杂度 > 20。

**修复**：提取 `ApplyBuiltDialogInspector()`，Inspector 逻辑不变。

## 案例 3：nav_bar_pattern 参数 struct 编译失败

**问题**：合规拆分引入 `NavBarMenuItemsAppendParams`，成员用 `const T&`。

**编译错误**：
```
call to implicitly-deleted default constructor
binding reference drops 'const' qualifier (std::move)
```

**修复**：
```cpp
// 错误
const std::vector<BarItem>& menuItems;
std::vector<OptionParam>& overflowParams;  // 在 const params 上

// 正确
const std::vector<BarItem>* menuItems = nullptr;
std::vector<OptionParam>* overflowParams = nullptr;
// move 时
std::vector<OptionParam> overflowOpts = params.overflowParams;
createWithOptionParams(std::move(overflowOpts), ...);
```

## 案例 4：toast_view private 访问

**问题**：`CreateToastTextChild` 自由函数调用 `ToastView::UpdateTextLayoutProperty`（private）。

**修复**：将 `CreateToastTextChild` 升为 `ToastView` 私有静态方法。

## 案例 5：video_pattern 误删 NeedLift

**问题**：`OnModifyDone` 拆分时删掉 `NeedLift()` 声明/实现。

**修复**：从 master 恢复：
```cpp
bool VideoPattern::NeedLift() const {
    return IsFullScreen() && renderContext->IsUniRenderEnabled();
}
```

## 案例 6：navigation_toolbar_util 死代码

**问题**：`AppendToolbarRegularItems` 提取后未调用，`-Werror,-Wunused-function`。

**修复**：`BuildToolBarItems` 改为调用 helper，删除内联重复循环。

## 案例 7：navdestination GetName const

**问题**：`ResolveNavDestinationNameKey(const NavDestinationPattern* pattern)` 调非 const `GetName()`。

**修复**：`GetName() const`；`ExtractKeyFromInspectorId` 需 `FrameNode` → `DynamicCast`。

## 案例 8：slider_pattern G.CNS.02 魔法数 99

**问题**：`GenerateUniqueInspectorId` 中 `index > 99` 触发 G.CNS.02（难以理解的字面量）。

**修复**（行为不变，仅命名常量）：

```cpp
constexpr int32_t MAX_SLIDER_FIELD_INSPECTOR_INDEX = 99;
// ...
if (index < 1 || index > MAX_SLIDER_FIELD_INSPECTOR_INDEX) {
    return INSPECTOR_PREFIX;
}
```

**经验**：Inspector 序号上限等与 `__SliderField01__` 格式相关的边界值，用 `constexpr` 命名，勿裸数字。

## 案例 9：CI 链接未定义符号（unittest / Windows 预览 SDK）

**问题 A（dayu200 precise）**：`capi_all_accessors_test` 链接失败，`TextFreeScrollController` / `TextScrollBar2D` 未定义；此前只补了 `text_field_free_scroller.cpp`。

**修复 A**：`test/unittest/BUILD.gn` 的 `ace_components_pattern` 白名单再补：

- `pattern/text/text_free_scroll_controller.cpp`
- `pattern/text/text_scroll_bar_2d.cpp`

**问题 B（ohos-sdk Windows 预览工具链）**：`libprompt.dll` / `libpromptaction.dll` 缺 `ContainerScope::CurrentIdWithReason()`；preview 平台未设 `build_container_scope_lib`，prompt 未链 `ace_container_scope_static`。

**修复 B**：`adapter/preview/build/preview_common.gni` 增加 `build_container_scope_lib = true`（与 ohos `common.gni` 对齐），使 prompt/promptaction 自动依赖 `ace_container_scope_static`。

**经验**：unittest 白名单补 `.cpp` 时，须补全**直接依赖**的实现文件，不能只补调用方。

## 案例 10：CalendarDialogView 单测 API 签名滞后

**问题**：`calendar_dialog_view_test_ng.cpp:357` 编译失败：`SetCalendarPaintProperties` 期望 2 个参数，单测只传 1 个。

**修复**（对齐生产代码 `CreateCalendarMonthNode` 调用方式）：

```cpp
CalendarDialogView::SetCalendarPaintProperties(settingData, monthFrameNode);
```

单测内已有 `monthFrameNode`，补第二参即可，**不改业务逻辑**。

## Commit 分批示例（本次）

| Commit | 范围 | 约行数 |
|--------|------|--------|
| 1 | base + inspector_constants + inspector_id_helper | ~1769 |
| 2 | navigation + navrouter | ~1649 |
| 3 | picker/time/video/toast/dialog/bridge 等 | ~1475 |

```bash
git commit -sm "fix(compliance): refactor inspector_id_helper and constants"
git push -u origin inspector_6.1tag
```

## 验证记录

- `ace_core_components_base_ng_ohos` ✅
- `libace_compatible` ✅（~1h19m，修 8 处编译错误后）
- `ace_engine` — 全量编译进行中
