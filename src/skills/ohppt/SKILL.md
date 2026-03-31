---
name: ohppt
description: "将 Markdown 文档中的表格转为结构图 PPTX（每行一框、列内子模块、支持层级分隔）。依赖 python-pptx。脚本 ohppt.py、build_architecture_ppt.py。"
author: "Created by user"
version: "1.0.0"
---

# ohppt：根据 MD 表格生成结构图 PPT

根据 Markdown 文档中的**表格**生成**结构图 PPT**：每一行对应一个矩形框（深灰），每一列对应框内的子模块（矩形），支持层级（`；` 分多组、` - ` 分标题与子项）。文字左对齐、黑体、12 号字。

## 应用示例与提示词

在 **napi_generator 仓库根** 下执行（需已 `pip install python-pptx`）。

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 生成 PPTX | `python3 src/skills/ohppt/ohppt.py docs/arch.md out/arch.pptx` | 「把这份 Markdown 里的表格转成结构图 PPT」 |
| 默认同名输出 | `python3 src/skills/ohppt/ohppt.py docs/arch.md` | 「对 arch.md 生成同名 pptx」 |
| 架构脚本 | `python3 src/skills/ohppt/build_architecture_ppt.py --help` | 「用 ohppt 里的 build_architecture_ppt 生成幻灯片」 |

## 依赖

```bash
pip install python-pptx
```

## 使用方式

```bash
cd <napi_generator 仓库根>
python3 src/skills/ohppt/ohppt.py <input.md> [output.pptx]
```

- 不指定输出时，默认输出为与输入同名的 `.pptx`（如 `example.md` → `example.pptx`）。

## 规则说明

- **行**：表格每一行（除表头/分隔行）→ 一页幻灯片上的一个**大矩形**（深灰色）。
- **列**：该行第二列单元格内容 → 大矩形内的**子模块**（多个小矩形，浅灰）。
- **层级**：
  - 用 `；` 或 `;` 分隔多个**顶层组**，每组对应一个子矩形。
  - 组内用 ` - ` 分隔：第一个为**标题**，其余为**子项**，显示在该子矩形内（标题 + 子项列表）。
- **字体**：黑体（SimHei）、12 号、加粗、左对齐。

## 示例输入（example.md）

见 `example.md`：两列表格，第一列为行序号/说明，第二列为该行内容；内容可含多组与子项，例如：

`系统应用 - 示例 - 控制栏 - 设置 - 电话；OpenHarmony SDK - Ability Kit - ArkTS/容器 - ArkData - ArkUI`

生成 PPT 中该行对应一页：一个深灰大框，内有两个浅灰子框，分别为「系统应用」（下列示例、控制栏、设置、电话）和「OpenHarmony SDK」（下列 Ability Kit、ArkTS/容器 等）。
