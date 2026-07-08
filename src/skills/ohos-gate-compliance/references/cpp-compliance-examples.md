# 实战案例：Inspector 6.1 门禁合规

> 源自 kh-server `ohos-gate-compliance-pr-check`。

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
