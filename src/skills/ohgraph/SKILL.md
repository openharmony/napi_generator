---
name: ohgraph
description: "OpenHarmony Graphic 2D/3D：Rosen(RS)、graphic_surface、graphics_effect、graphic_3d(Lume) 架构与详细设计；grapharch.md + grapharch_source_corpus.md（≥1 万行头文件索引，脚本生成）；ohgraph.py 摘录与 corpus 再生成。"
author: "Created by user"
created: "2026-04-08"
version: "1.3.0"
---

# ohgraph：图形子系统架构分析技能

## 何时使用

- 需要理解 **2D 合成（Rosen / Render Service）**、**Surface/Buffer**、**图层与事务**、**绘制管线**。  
- 需要理解 **3D（Lume、Widget/Scene Adapter）** 与 **2D 合成** 的衔接。  
- 需要从 **类/方法/数据结构** 层面对照源码做 **架构设计 / 详细设计** 类输出。  
- 需要快速定位 **`foundation/graphic`** 下部件与 **`bundle.json`** 关系。

## 核心产出

| 产出 | 路径 |
|------|------|
| **架构 + 详细设计（grapharch 3.1）** | `.claude/skills/ohgraph/grapharch.md`（含 **第 7.1 节 `graphic_2d/interfaces`**：inner_api / napi·ani·cj·taihe、syscap、bundle 构建钩、流程与清单） |
| **源码级附录（通常 ≥1 万行）** | `.claude/skills/ohgraph/grapharch_source_corpus.md` — `foundation/graphic` **每个 `.h` 一节**（路径、行数、首条声明）+ 默认可 **嵌入** `rs_common_def.h`、`rs_main_thread.h` **带行号全文** |
| **生成器** | `.claude/skills/ohgraph/gen_grapharch_corpus.py` |
| 命令行助手 | `.claude/skills/ohgraph/ohgraph.py` |

## 命令行（源码根或任意目录）

```bash
# 打印 grapharch.md 路径 + 前 80 行
python3 .claude/skills/ohgraph/ohgraph.py doc

# 全文打印到终端
python3 .claude/skills/ohgraph/ohgraph.py doc --full

# 打印 foundation/graphic 下主要部件路径（需 cwd 在 OpenHarmony 源码树内）
python3 .claude/skills/ohgraph/ohgraph.py paths

# 列出各部件 bundle.json
python3 .claude/skills/ohgraph/ohgraph.py bundles

# 在源码根再生成 grapharch_source_corpus.md（需存在 build.sh 祖先目录）
python3 .claude/skills/ohgraph/ohgraph.py corpus

# 仅生成索引、不嵌入默认全文
python3 .claude/skills/ohgraph/ohgraph.py corpus --no-embed

# 额外嵌入指定头（可重复）
python3 .claude/skills/ohgraph/ohgraph.py corpus --embed-full foundation/graphic/graphic_2d/rosen/modules/composer/vsync/include/vsync_distributor.h
```

## 分析维度（与 grapharch.md 对齐）

1. **架构**：分层、系统上下文、部件边界、syscap。  
2. **接口**：inner_kits、NDK kits、IPC 事务面（RS）。  
3. **流程**：Transaction → RS 更新树 → 合成 → 显示；Surface queue buffer。  
4. **绘制**：RS 侧管线、Drawing/Skia、Effect 模块。  
5. **图层**：RSNode 族、RSSurfaceNode、RSRootNode、RSDisplayNode。  
6. **屏幕内容**：Profiler/Capture、应用 PixelMap、与 window/权限的边界（见 grapharch 第 6 章）。

## 与仓库内其它技能

- **ohproj / ohhdc**：应用截图、uitest 属 **设备侧测试**，与 RS 内部实现不同。  
- **ohrecord**：`snapshot_record` 录屏属 **媒体/窗口** 能力，见 **ohrecord/SKILL.md**。

## 维护约定

- **`graphic_2d/rosen`** 大版本重构时，需对照 **`rs_*_node.h`**、**`bundle.json`** 更新 **grapharch.md** 类名与路径。  
- 新增 **graphic** 部件时，在 **grapharch 1.4 / 10** 节增补路径表，并 **`ohgraph corpus`** 刷新附录。  
- **`.cpp` 全量** 若需进附录：扩展 **`gen_grapharch_corpus.py`** 扫描规则（默认仅 `.h` 控制体积）。
