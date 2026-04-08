# OpenHarmony Graphic 2D / 3D 架构设计与详细设计

> **文档性质**：本文同时满足 **架构设计**（上下文、分层、边界、非功能约束）与 **详细设计**（模块职责、数据结构、类协作、业务流程、异常与约束）书写规范。  
> **源码根**：路径均相对 OpenHarmony **源码根**（含 `build.sh`）；**`foundation/graphic`** 为核心，`foundation/window`、`foundation/arkui` 等为 **关键协作方**。  
> **维护**：`.claude/skills/ohgraph`；版本迭代须对照 **`bundle.json`**、**`rs_common_def.h`** 中枚举与 **RSMainThread** 管线变更同步修订。  
> **版本**：3.1（**第 7.1 节** 补齐 **`graphic_2d/interfaces`** 功能、构建入口与典型流程；仍配套 **`grapharch_source_corpus.md`**）

---

## 0. 文档说明

### 0.1 适用范围与读者

| 项 | 说明 |
|----|------|
| **适用范围** | 标准系统 **graphic** 子系统：**2D Rosen（含 Render Service 进程）**、**graphic_surface**、**graphics_effect**、**graphic_3d（Lume 系）**及与 **Window / ArkUI** 的协作边界。 |
| **显式不包含** | GPU 内核驱动、Composer HAL 具体芯片实现、DRM 策略细节；仅标注 **调用边界** 与 **数据形态**（Buffer/Fence）。 |
| **读者** | 图形框架开发、合成/卡顿/闪屏问题定位、多窗口与 RS 联调、3D 纹理上屏、安全与截图策略评审。 |

### 0.2 术语与符号

- **RS**：**Render Service** 系统进程，执行合成与上屏调度。  
- **客户端**：应用进程或 **system 侧 WMS/ArkUI** 等持有 **RSNode** 并提交 **Transaction** 的进程。  
- **NodeId**：节点全局标识（定义见 **`rs_common_def.h`** 及相关工具函数如 **`ExtractPid`**）。  
- **Transaction / RSTransactionData**：跨进程传递的 **显示树变更包**；服务端入口见 **`RSMainThread::RecvRSTransactionData`**。

### 0.3 阅读路径建议

| 目标 | 建议阅读顺序 |
|------|----------------|
| 理解一帧如何从 UI 到屏幕 | **第 1 章** → **2.6 节** → **2.7 节** → **第 3 章** |
| 理解窗口 / Surface / 图层类型 | **2.3.2 节** → **2.4 节** → **第 3 章** |
| 理解截图与组件截取 | **2.11 节** → **第 6 章** |
| 理解 3D 上屏 | **第 5 章** → **2.2 节** |
| 理解 VSync、帧率策略、RS 与显示链路时序 | **0.4 节** → **2.7 节**（全文以该节为「深度样板」） |
| **按路径查每个头文件、行数、首条声明；编程时对照全文** | **`grapharch_source_corpus.md`**（**第 12 章** / **0.5 节**） |
| **查 ArkTS/NAPI/inner_api 出口与 syscap 对应** | **第 7 章**、尤其 **7.1 节 `interfaces`** |

### 0.4 全链路机制的写作约定（适用于全文各模块）

后续各节在描述「实现原理」时，在篇幅允许处尽量覆盖下列维度，避免只列名词：

| 维度 | 读者应得到的信息 |
|------|------------------|
| **要解决什么问题** | 没有该机制时会出现什么用户可感知现象（撕裂、卡顿、耗电、策略错误等）。 |
| **在架构中的位置** | 上下层谁生产数据、谁消费；跨进程边界在哪；与 Window/ACE/Composer/HAL 如何衔接。 |
| **设计要点** | 状态机、批量/事务、回调与线程模型、与 feature 宏或编译裁剪的关系。 |
| **典型调用链** | 从「业务触发」到「内核/硬件」或「对端进程」的函数级路径（以源码为准，标注路径）。 |
| **关键接口与类** | 头文件中的 **public API**；谁 **仅能**被谁调用（源码注释如 *only called by RSMainThread*）。 |
| **何时用 / 如何用** | 系统内置路径 vs 扩展点；调试开关、Dump、Trace 名称。 |
| **局限与改进方向** | 已知取舍（延迟、精度、多屏、竞态）；可演进点（非承诺路线图）。 |

说明：外部科普文（如各平台对 **VSync、三重缓冲、Choreographer** 的通用讲解）有助于建立直觉；**本文落地以本仓库 `foundation/graphic/graphic_2d/rosen` 等源码为准**，通用概念与 OH 实现有差异处，以 **类名与调用关系** 为准。

### 0.5 与《源码附录》关系（编程落地）

| 文档 | 作用 |
|------|------|
| **`grapharch.md`（本文）** | 架构、流程、时序、关键锚点；**指导理解与联调**。 |
| **`grapharch_source_corpus.md`** | **机器生成**：`foundation/graphic` 下 **每个 `.h` 一节**（相对源码根路径、行数、首条 `class/struct/enum/typedef` 摘抄）；文末可 **嵌入指定头的带行号全文**。用于 **不遗漏头文件路径**、快速 **全文检索**、与 IDE 对照。 |

**边界说明（重要）**：**`.cpp` 实现、BUILD.gn、非 graphic 目录** 无法也不应在单一人写文档里「逐行穷举」；**以仓库源码与 LSP 为准**。附录可扩展脚本扫描 `.cpp`，默认仅 **`.h`** 以保证体积与符号密度平衡。

**再生成命令**（在**源码根**执行）：

```bash
python3 .claude/skills/ohgraph/gen_grapharch_corpus.py \
  -o .claude/skills/ohgraph/grapharch_source_corpus.md \
  --embed-full foundation/graphic/graphic_2d/rosen/modules/render_service_base/include/common/rs_common_def.h \
  --embed-full foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.h
```

可按需追加更多 `--embed-full <相对源码根路径>`。

---

## 1. 架构设计

### 1.1 设计目标与非功能约束

#### 1.1.1 统一合成（Composition Unification）

**目标**：多应用、多窗口、系统级 Surface（状态栏、壁纸、光标等）必须在 **单一 RS 进程** 内完成 **Z 序、裁剪、透明度、效果、旋转** 的统一决策，再输出到 **显示链路**。

**约束**：

- 客户端 **不**直接操作物理屏；仅通过 **Transaction** 描述「树与属性」与 **BufferQueue** 提供像素。  
- **同一物理屏**上的冲突策略（焦点、遮挡、安全层）由 **RS + WMS 策略** 协同，**RSSurfaceNodeType** 等枚举承载差异化策略（见 **2.3.2 节**）。

#### 1.1.2 跨进程与数据一致性

**目标**：UI 进程与 RS 进程地址空间隔离，通过 **IPC + 共享内存/BufferHandle** 传递 **命令与图形缓冲**。

**约束**：

- 属性修改必须 **事务化批量提交**，避免半状态被合成（**RSTransaction** 语义）。  
- **RSCommand** 在历史中 **ID 唯一**（见 **`rs_common_def.h` 注释：禁止复用已废弃枚举值**），保证前后向兼容与模糊测试安全面可控。

#### 1.1.3 2D / 3D 协同

**目标**：3D 场景在独立渲染路径生成 **纹理或共享缓冲**，再作为 **2D 树中的一层**参与合成。

**约束**：3D 侧须通过 **3d_widget_adapter / scene_adapter** 等 **稳定 inner_kits** 输出与 **RSSurfaceNode / SURFACE_TEXTURE** 等类型对齐，避免应用直接绕过策略把任意 GPU 纹理塞入合成树。

#### 1.1.4 能力出口（syscap / NDK）

**目标**：对三方应用暴露 **NativeWindow、NativeBuffer、NativeDrawing** 等 **C API/ArkTS API**，对系统部件暴露 **inner_api / Rosen 内部头文件**。

**约束**：**`graphic_2d/bundle.json`** 中 **syscap** 与 **feature** 开关决定编译期裁剪；文档分析须与 **目标产品 feature 组合** 对照，避免「文档有而镜像无」。

**局限与演进**：统一合成把 **策略复杂度** 集中在 RS，**单点故障与回归面** 大；多物理屏、异构刷新率组合下 **策略冲突** 需持续迭代。**改进方向**包括更细粒度的 **per-layer 预算**、与 **系统调度（CPU/GPU 频点）** 的联合决策、更完善的 **可观测性**（统一 Trace ID 贯穿应用—RS—Composer）。

### 1.2 系统上下文

#### 1.2.1 参与者与职责

| 参与者 | 职责 | 与 Graphic 的交互 |
|--------|------|-------------------|
| **应用 / ArkUI** | 业务 UI、动画、组件树 | 创建 **RSNode**、修改 **RSProperties**、**Commit Transaction**；生产 **Surface** 缓冲。 |
| **WMS** | 窗口创建、Z 序、多屏、焦点 | 创建 **RSSurfaceNode**（特定 **RSSurfaceNodeType**）、绑定 **Surface**、与 RS 同步几何。 |
| **Render Service** | 合成、绘制调度、Vsync 消费 | **RecvRSTransactionData**、**RSMainThread** 驱动 **RSUniRenderVisitor** 等、输出 **Composer/GPU**。 |
| **Composer / Display** | 硬件或内核合成（可选路径） | **HWC**、**DirectComposition**（见 **rs_hwc_context.h** 等）与 RS 协作。 |
| **多媒体 / 相机** | 视频帧、预览 | **SURFACE_TEXTURE_NODE** 等类型 Surface；与 **Buffer** 语义共享 **graphic_surface**。 |

#### 1.2.2 逻辑数据流（一帧）

```text
[ UI 线程改属性 / 动画 tick ]
        -> 写入 RSNode 本地镜像 + 生成 RSCommand
        -> RSTransaction::Commit / Flush
        -> IPC 至 RS
        -> RSMainThread::RecvRSTransactionData
        -> 合并/排序事务，更新 RS 侧渲染树/Drawable
        -> Vsync 到来 -> RSBaseRenderEngine / RSDrawFrame 路径绘制
        ->（可选）HWC 合成 -> 显示
```

**与 Buffer 的关系**：**应用 Raster 内容**经 **dequeueBuffer → GPU/CPU 填充 → queueBuffer**；RS **消费**已 **queue** 的缓冲作为图层纹理或参与合成读回。

### 1.3 逻辑分层（输入 / 输出 / 依赖）

| 层 | 主要路径 | 输入 | 输出 | 硬依赖 |
|----|-----------|------|------|--------|
| **ArkUI / ACE** | `foundation/arkui` | 组件状态、布局结果 | RSNode 操作、动画曲线 | Rosen 客户端、EventHandler |
| **Rosen Client** | `graphic_2d/rosen/.../render_service_client` | 业务调用、回调 | IPC Transaction、Surface 消费 | `ipc`、`samgr`、**graphic_surface** |
| **Rosen Base** | `render_service_base` | 双方共享类型 | **NodeId**、**Command**、枚举、回调接口 | `hilog`、`c_utils` |
| **Rosen Service** | `render_service` | TransactionData、Vsync | 合成结果、回调应用 | Composer、GPU、**EventRunner** |
| **graphic_surface** | `graphic_surface` | Buffer 描述、Fence | `Surface`/`NativeBuffer` C API | `ipc`、显示驱动接口 |
| **graphics_effect** | `graphics_effect` | Modifier 参数、像素输入 | Shader/SDF 效果输出 | Rosen Drawing 接口 |
| **graphic_3d** | `graphic_3d/lume` + adapters | glTF/场景图/输入事件 | 纹理、渲染命令 | GLES/Vulkan、2D 适配层 |

### 1.4 部件与 `bundle.json` 映射（全量顶层）

| 部件目录 | `bundle.json` 角色 | 说明 |
|-----------|-------------------|------|
| **graphic_2d** | 核心 2D + Rosen | syscap 最全；含 **EGL/GLES/Vulkan/Drawing/WebGL** 等 feature。 |
| **graphic_surface** | Surface / Fence / Buffer | inner_kits 暴露 **native_buffer**、**external_window** 等。 |
| **graphics_effect** | 2D 特效 | 依赖 Rosen 命名空间 **OHOS::Rosen**。 |
| **graphic_3d** | Lume + Adapter | inner_kits：**3dWidgetAdapter**、**sceneAdapter**、**LumeEngine** 等。 |
| **graphic_utils_lite** | 轻量图形工具 | 小型系统或裁剪形态。 |
| **surface_lite** | 轻量 Surface | 与 **graphic_surface** 互斥或并存视产品。 |
| **graphic_cangjie_wrapper** | 仓颉绑定 | 多语言栈适配。 |

### 1.5 与 Window 子系统的边界

- **Window** 负责 **创建/销毁窗口对象、可见性、多屏迁移**；**Graphic** 负责 **该窗口对应的 RSSurfaceNode + Buffer 能力**。  
- **截图/录屏** 部分能力在 **Window** 与 **RS** 两侧均有入口（见 **2.11 节**、**第 6 章**），安全策略（隐私层模糊、DRM）在 **RSRenderInterface** 层已有 **API 形态**（如 **TakeSurfaceCaptureWithBlur**）。

---

## 2. 2D 渲染详细设计（Rosen）

### 2.1 模块划分（职责表）

#### 2.1.1 客户端 `render_service_client`

| 子目录 | 职责 | 关键产物形态 |
|--------|------|----------------|
| **core/ui** | **RSNode** 族、属性 setter、与 **TransactionHandler** 绑定 | 用户持有的 `shared_ptr<RSNode>` |
| **core/transaction** | **事务构建、同步控制器、RenderInterface 单例** | `RSTransaction`、`RSRenderInterface` |
| **core/ui_effect** | **滤镜、粒子、模板属性** | `VisualEffect`、`Filter` 与 Node 绑定 |
| **core/animation** | **动画曲线、转场、粒子参数** | 与 **RSNode** 的动画驱动 |
| **core/modifier_ng** | **新 Modifier 架构** | `ModifierNG::RSModifier` 挂载 |

#### 2.1.2 共享 `render_service_base`

- **公共枚举**（**`RSSurfaceNodeType`**、**`SurfaceWindowType`**、**`RSSurfaceNodeAbilityState`** 等）。  
- **IPC 回调接口**（遮挡变化、UIExtension、ApplicationAgent 等）。  
- **内存与对象模型辅助**（如 **MemObject** 定制 new/delete）。

#### 2.1.3 服务端 `render_service`

| 子模块（典型） | 职责 |
|----------------|------|
| **core/pipeline/main_thread** | **RSMainThread**：事务入口、Vsync 请求、任务队列、Dump。 |
| **core/pipeline/render_thread** | **RSBaseRenderEngine**、**RSDrawFrame**：具体绘制一帧。 |
| **pipeline/hwc** | **RSUniRenderJudgement**、**DirectComposition**、**RSHwcContext**：硬件合成路径。 |
| **feature/** | **HyperGraphicManager**、**VRate**、**水印**、**图像增强** 等增值特性。 |
| **transaction** | **RSTransactionData** 解析、与主线程协作。 |

---

### 2.2 节点树与图层语义（架构 + 业务规则）

#### 2.2.1 树形结构

- **父子关系**表达 **图层包含与裁剪继承**（子节点默认受父 **clip/bounds** 影响，具体以 **RSProperties** 与 RS 侧实现为准）。  
- **兄弟顺序**与 **Z 序 / positionZ** 共同决定 **绘制顺序**；**WMS** 对窗口层有全局 **Z 序** 调整能力。

#### 2.2.2 节点类别与业务语义

| 节点类型（典型） | 业务语义 |
|------------------|----------|
| **RSRootNode** | 某一 **UI 实例** 或 **子树** 的根画布；可 **AttachRSSurfaceNode** 把整棵子树输出到独立 Surface。 |
| **RSSurfaceNode** | **可携带 Buffer 的叶或容器**；与 **视频、主窗口、自绘制组件** 强相关。 |
| **RSDisplayNode** | **逻辑屏** 抽象；多屏时多实例；与 **镜像、旋转** 相关（**RSDisplayNodeConfig**）。 |
| **RSCanvasNode / CanvasDrawing** | **指令绘制** 与 **离屏** 场景。 |

#### 2.2.3 与「图层」一词的对应关系

在 **RS 内部**常出现 **Drawable / RenderNode** 适配层（如 **rs_render_node_drawable_adapter.h**），将 **客户端 Node 镜像** 转为 **服务端可遍历绘制结构**。**详细设计要点**：客户端 **RSNode** 的每次有效变更应导致 **Command** 或 **脏标记** 传递，服务端 **合并** 后在一帧内 **只遍历变更子树**（配合 **AdvancedDirty**，见 **2.13 节**）。

---

### 2.3 类继承关系（详细设计）

```text
RSNode（enable_shared_from_this；属性/动画/Modifier/事务）
  ├── RSCanvasNode（画布能力）
  │     └── RSRootNode
  ├── RSSurfaceNode（Surface + Buffer 队列）
  ├── RSDisplayNode（显示设备）
  ├── RSProxyNode / RSEffectNode / …（同目录 rs_*_node.h 完整列表以源码为准）
```

**创建约束**：**RSSurfaceNode::Create** 对 **WMS** 与普通业务有不同重载；**RSSurfaceNodeConfig** 必须满足 **SurfaceWindowType** 与 **多实例** 策略（**isSkipCheckInMultiInstance**）。

---

### 2.3.1 `RSNode` 子系统拆解（实现原理）

**文件**：`render_service_client/core/ui/rs_node.h`（体量千行级，以下按 **设计子域** 阅读）。

| 子域 | 关键依赖头文件 | 实现原理摘要 |
|------|----------------|--------------|
| **属性系统** | `property/rs_properties.h` | **RSProperties** 持有 **bounds、transform、alpha、clip** 等；setter 内触发 **脏区** 与 **Command 记录**。 |
| **Modifier NG** | `modifier_ng/rs_modifier_ng_type.h` | **声明式** 效果挂载；**类型枚举** 驱动序列化到 RS；**自定义 Modifier** 扩展业务绘制。 |
| **动画** | `animation/rs_transition_effect.h` 等 | **隐式/显式动画** 参数打包；与 **RSImplicitAnimator** 协作。 |
| **绘制闭包** | `DrawFunc` + `Drawing::Canvas` | **CPU 绘制** 回调在 RS 或客户端执行路径由 **节点类型与选项** 决定（需对照 `.cpp`）。 |
| **事务处理** | `transaction/rs_transaction_handler.h` | 每个 **RSNode** 绑定 **handler**，在 **Flush** 时生成 **RSCommand** 列表。 |
| **效果与滤镜** | `ui_effect/*`、`render/rs_mask.h` | **离屏模糊、颜色矩阵、蒙版路径** 与 **SDF**（graphics_effect）协同。 |

**局限与改进**：**RSNode** 子系统 **耦合** 属性、动画、Modifier、事务，**单文件体量** 大，**回归** 成本高；**跨进程镜像** 与 **服务端 Drawable** 须 **严格一致**，否则 **客户端与合成结果不一致**。**改进**：**模块化拆分**、**强类型 Command 载荷**、**属性 diff 压缩**。

---

### 2.3.2 `RSSurfaceNodeType` 枚举（业务—实现对照）

**文件**：`render_service_base/include/common/rs_common_def.h`

| 枚举值 | 含义（设计意图） |
|--------|------------------|
| **DEFAULT** | 未细分或默认策略。 |
| **APP_WINDOW_NODE** | 应用 **主窗口** Surface；参与 **焦点、切换动画、安全层** 等全量策略。 |
| **STARTING_WINDOW_NODE** | **启动窗**（WMS 创建），缩短首帧感知。 |
| **SELF_DRAWING_WINDOW_NODE** | **系统自绘窗口**（如 **开机动画**）。 |
| **LEASH_WINDOW_NODE** | **Leash** 动画容器，用于 **窗口拖拽/过渡** 时子树整体变换。 |
| **ABILITY_COMPONENT_NODE** | **Ability 级组件** Surface（与 **Stage 模型** 对齐）。 |
| **SELF_DRAWING_NODE** | **ArkUI 组件自绘**（非 Ability 容器部分）。 |
| **SURFACE_TEXTURE_NODE** | **视频等纹理 Surface**；常与 **多媒体** 管道绑定。 |
| **FOREGROUND_SURFACE** | **前景覆盖** 类 Surface（如悬浮层策略，具体以产品为准）。 |
| **SCB_SCREEN_NODE** | **场景板（Scene Board）** 相关全屏节点。 |
| **UI_EXTENSION_COMMON_NODE / UI_EXTENSION_SECURE_NODE** | **UIExtension**；**SECURE** 需 **信息回调** 与 **安全模糊** 策略配合。 |
| **CURSOR_NODE** | **光标** 专用高层 Z 序。 |
| **ABILITY_MAGNIFICATION_NODE** | **局部放大** 无障碍相关。 |

**设计结论**：**同一套 RS 合成代码** 通过 **nodeType + bundleName + 安全标志** 走不同 **裁剪、截图、输入穿透** 分支；联调时 **先确认 RSSurfaceNodeType** 是否与设计一致。

---

### 2.3.3 `SurfaceWindowType` 与场景板

**同文件**：区分 **DEFAULT_WINDOW** 与 **SCB_*** 系列（桌面、壁纸、锁屏、负一屏、下拉、音量条等）。**详细设计要点**：场景板 **多面板** 共用 **合成树** 的不同分支，**Z 序与输入** 由 **WMS + RS** 联合保证，**graphic_2d** feature **overlay_display** 等可改变行为。

---

### 2.3.4 `RSSurfaceNodeAbilityState`

- **FOREGROUND / BACKGROUND**：描述 **Ability 生命周期** 对应的 **合成优先级/刷新节流**；与 **帧率链路（VRate）**、**内存回收** 策略相关。

---

### 2.4 配置结构体对照

#### 2.4.1 客户端 `RSSurfaceNodeConfig`

**文件**：`rs_surface_node.h`（见 1.0 文档字段表）。**用途**：**Create** 工厂入参，偏 **运行时调试名、同步模式、多实例、纹理导出**。

#### 2.4.2 服务端镜像 `RSSurfaceRenderNodeConfig`

**文件**：`rs_common_def.h`

| 字段 | 说明 |
|------|------|
| **id** | **NodeId** |
| **name** | 调试名 |
| **nodeType** | **RSSurfaceNodeType** |
| **additionalData** | 扩展指针 |
| **isTextureExportNode** | 纹理导出 |
| **isSync** | 同步创建/提交语义 |
| **surfaceWindowType** | **SurfaceWindowType** |
| **bundleName** | **包名维度策略**（权限、截图、多用户） |

**设计关系**：客户端 **Config** 与 **RenderNodeConfig** 在 **Transaction** 中应对齐；**不一致**会导致 **类型策略错分支**（常见 bug：**截图全白/模糊错误**）。

---

### 2.5 `RSSurfaceNode` 行为要点（业务流程）

1. **Create** → 分配 **NodeId** → 注册到 **RSUIContext**（若多实例）。  
2. **绑定 Surface**（`ROSEN_OHOS` 下 **Consumer** 侧）→ 与 **BufferQueue** 握手。  
3. **应用 queueBuffer** → RS **acquire** 用于合成。  
4. **属性变更**（位置、透明度、**hidden**）→ **Transaction** → 服务端更新 **Drawable**。  
5. **销毁**：**引用计数归零** → **IPC 通知** 释放 **Buffer 引用** 与 **GPU 纹理缓存**。

**指针**：**`POINTER_WINDOW_POSITION_Z`** 常量用于 **光标/指针** 类窗口 **极高 Z** 保证点击命中顺序。

---

### 2.6 事务与 IPC（端到端业务流程）

#### 2.6.1 客户端事务生命周期

1. **Begin**：获取或与 **RSTransaction** / **RSUIContext** 关联的 **Transaction 实例**（以当前 API 为准）。  
2. **Edit**：对 **RSNode** 调用 **Set***、**AddChild**、**Modifier** 更新；内部写入 **Command 队列**（不立即跨进程）。  
3. **Commit / Flush**：打包为 **RSTransactionData**（含 **pid、时间戳、command 列表** 等），经 **RenderServiceConnection** **IPC**。  
4. **异步回调**（如有）：**帧结束、截图完成、遮挡变化** 由 **RS** 通过 **callback** 通知。

#### 2.6.2 服务端主线程处理

**类**：`RSMainThread`（`render_service/core/pipeline/main_thread/rs_main_thread.h`）

| 方法 | 职责 |
|------|------|
| **RecvRSTransactionData** | **事务入口**；将客户端数据放入 **待处理队列/映射**。 |
| **IsNeedProcessBySingleFrameComposer** / **ProcessDataBySingleFrameComposer** | **单帧合成器** 快速路径（低延迟场景）。 |
| **RequestNextVSync** | 向 **Vsync 分发器** 请求下一帧驱动。 |
| **PostTask / PostSyncTask** | **主线程任务调度**；与 **EventRunner** 集成。 |
| **RenderServiceTreeDump** / **SendClientDumpNodeTreeCommands** | **调试与问题定位**。 |

**实现原理小结**：**RSMainThread** 是 **RS 进程的心脏**；**事务**在此 **合并、排序、去重**，再触发 **渲染线程** 与 **HWC** 路径。

#### 2.6.3 RSCommand 与兼容

- **`rs_common_def.h`** 强调：**每个 Command 枚举值全局唯一且不可复用**，避免 **IPC  fuzz** 与 **版本错位** 解析错误。  
- **safuzz** 模块按 **Surface/Display/Canvas/Animation** 等维度生成 **变体 Command**，用于 **安全与健壮性测试**。

#### 2.6.4 事务机制深度剖析（作用、架构、流程、接口、局限）

**要解决的问题**：若属性变更 **零散、跨多帧、跨多进程** 到达 RS，会出现 **半棵显示树被合成**（闪烁、错位、短暂透明错误）。事务把 **一次逻辑提交** 打成 **原子批次**，RS 在 **合适的同步点** 合并后更新 **RenderNode/Drawable**。

**架构位置**：客户端 **`render_service_client/core/transaction`** 构建 **`RSTransactionData`**；经 **`RSClientToRenderConnection` / `RSClientToServiceConnection`** 等 **Binder IPC** 进入 RS；**`RSMainThread::RecvRSTransactionData`** 为服务端入口。与 VSync 的关系：**事务到达** 不必然立刻上屏，往往还需 **`RequestNextVSync`** 驱动 **`mainLoop_`** 把积压变更 **提交到绘制**（见 **2.7 节**）。UniRender 形态下还存在 **`RSUnmarshalThread`** 与主线程之间的 **屏障任务**（`OnVsync` 内 `unmarshalBarrierTask_`），避免 **解析与合成** 乱序。

**典型调用链（摘要）**：

```text
应用/系统组件: RSNode::Set* / AddChild / Modifier
    -> TransactionHandler 累积 RSCommand
    -> Commit -> RSTransactionData（pid、时间戳、commands…）
    -> IPC -> RSMainThread::RecvRSTransactionData
    -> 进入 transaction 映射 / 与 cached 数据合并
    ->（下一 VSync）mainLoop_ -> RSUniRenderVisitor / DrawFrame -> HWC/GPU
```

**谁触发 `RequestNextVSync`（与事务强相关）**：除主线程自身动画、缓存更新外，**事务 unmarshaling 完成**、**连接层**在特定 Surface 状态变化时也会调用，例如 **`rs_client_to_service_connection.cpp`**、**`rs_client_to_render_connection.cpp`**、**`rs_unmarshal_thread.cpp`**（带 `"UI"` 等 **fromWhom** 标签便于 Trace）、**`rs_screen_manager.cpp`**（热插拔、屏幕事件）。含义：**有新显示工作要做时，向 VSync 管线登记「需要下一拍」**。

**关键接口（服务端）**：**`RecvRSTransactionData`**、**`IsNeedProcessBySingleFrameComposer` / `ProcessDataBySingleFrameComposer`**（**单帧快速合成** 路径，降低端到端延迟）、**`MergeToEffectiveTransactionDataMap`**（UniRender 下与缓存事务合并）。

**何时用 / 怎么用**：应用与框架 **默认始终走事务**；调优时关注 **Commit 频率**（过度拆分导致 IPC 与 RS 负载）、**超大 Command 列表**（首帧、全树 Dump）。调试：**`RenderServiceTreeDump`**、客户端 **Dump NodeTree** 任务。

**局限与改进方向**：**IPC 带宽与延迟** 仍是瓶颈；**多进程同时高频提交** 时主线程 **合并策略** 若不当会 **饿死** 某些 pid。**改进方向**：更智能的 **批处理与优先级**（焦点窗 > 后台）、**增量序列化**、与 **RS 侧背压** 联动，避免 **无 VSync 请求风暴** 或 **无意义的全树 diff**。

---

### 2.7 VSync、帧调度与 HyperGraphicManager（深度剖析）

本节对应 **0.4 节**的完整样板：**信号从哪来、经哪些类、谁调谁、帧率策略含义、用途与边界**。

#### 2.7.1 机制要解决的问题（没有它会怎样）

| 问题 | 成因（直觉） | 引入 VSync 对齐后的收益 |
|------|----------------|-------------------------|
| **画面撕裂** | 换屏缓冲发生在 **扫描显示** 过程中，上下两部分来自不同帧。 | 把 **提交/合成** 对齐到 **显示空白期（VBlank）附近**，降低撕裂概率（最终还依赖 **Fence/合成时序**）。 |
| **无效刷新与耗电** | CPU/GPU 以任意频率重绘，屏却只能以 **固定刷新率** 更新。 | **按需请求下一拍**（`RequestNextVSync`），无工作时可不驱动整帧管线；配合 **动态刷新率** 降功耗。 |
| **端到端卡顿、jank** | 应用、RS、Composer **相位错乱**，单帧超时。 | **VSyncGenerator** 上 **多 Listener 相位**、**Pipeline Offset**；**HGM** 根据场景 **投票** 刷新率，使 **内容帧率** 与 **屏刷新** 更匹配。 |

以上为 **通用图形栈**常识；**OpenHarmony 实现** 以 **`VSyncGenerator` / `VSyncDistributor` / `VSyncConnection` / `VSyncReceiver`** 与 **`RSMainThread`** 为准。

#### 2.7.2 信号从哪里来（生产者）

- **硬件路径**：显示子系统 **VBlank 或等效节拍** 经 Composer/HAL 进入 **`VSyncGenerator`** 实现（具体芯片在 **`modules/composer/vsync`** 实现类中，对外抽象为 **period、referenceTime、refreshRate** 等）。**`VSyncGenerator`** 提供 **`UpdateMode`**、**`GetVsyncRefreshRate`**、**`GetVSyncPulse`** 等，把 **不规则输入** 规整为 RS/App 可用的 **节拍**。  
- **软件/补充路径**：存在 **SoftVSync**、**定时器** 等辅助（**`HgmFrameRateManager`** 依赖 **`HgmSoftVSyncManager`**），用于 **策略降级或特殊场景**。  
- **芯片扩展**：**`RS_ENABLE_CHIPSET_VSYNC`** 打开时，**`RSMainThread::ConnectChipsetVsyncSer`** 等与 **芯片侧 Vsync 服务** 对接（见 **`rs_main_thread.cpp`**）。

**设计要点**：**Generator 单一时间源**，**Distributor** 负责 **多连接、分频、DVSync**；避免每个客户端直接监听内核，降低 **惊群与竞态**。

#### 2.7.3 架构分层与上下层如何联通

```text
[ 显示硬件 / Composer HAL ]
        ↓ 采样周期、模式变更
VSyncGenerator（sptr，CreateVSyncGenerator）
        ↓ OnVSyncEvent(period, refreshRate, mode, …) 通知 Listener
VSyncDistributor（rsVSyncDistributor_ / app 侧 distributor）
        ↓ 按 Connection 分频、DVSync、触摸/包名等策略
VSyncConnection（每进程或每会话一条逻辑连接，Binder stub）
        ↓ socket / 事件：PostEvent
VSyncReceiver（RSMainThread::receiver_）
        ↓ FrameCallback::callbackWithId_(timestamp, frameCount, …)
RSMainThread::OnVsync → mainLoop_() → RSUniRender / DrawFrame → HWC
```

**与应用的联通**：应用侧 **Ace/UI** 通过 **自己的 VSync 连接**（**`appVSyncController_` / app distributor**）拿到 **vsync 信号** 驱动 **布局与动画**；RS 使用 **`rsVSyncController_` + `rsVSyncDistributor_`**。二者共享 **`VSyncGenerator`**，由 **`HgmFrameRateManager::Init(rsController, appController, vsyncGenerator, appDistributor)`** 完成装配（见 **`hgm_frame_rate_manager.h`**）。

**`RSMainThread` 持有的关键成员**（**`rs_main_thread.h`**）：**`rsVSyncDistributor_`**、**`rsVSyncController_`**、**`appVSyncController_`**、**`vsyncGenerator_`**，以及 **`receiver_`**（**`VSyncReceiver`**）。

#### 2.7.4 请求下一拍与回调：谁调用、做什么

**入口**：**`RSMainThread::RequestNextVSync(fromWhom, lastVSyncTS, requestVsyncTime)`**（**`rs_main_thread.cpp`**）

- 构造 **`VSyncReceiver::FrameCallback`**，**`callbackWithId_`** 绑定到 **`RSMainThread::OnVsync`**。  
- 调用 **`RequestNextVSyncInner`** → **`receiver_->RequestNextVSync(...)`**（若未禁用时间戳逻辑，会带上 **`requestVsyncTimeTmp`** 与 **`vsyncRsTimestamp_`** 比较，避免过期请求）。  
- **防护**：**`requestNextVsyncNum_`** 超过阈值会 **打日志**、**Dump EventHandler**、**`vsyncGenerator_->PrintGeneratorStatus()`** 与 **`rsVSyncDistributor_->PrintConnectionsStatus()`**，用于诊断 **疯狂 RequestNextVSync**。

**回调 `OnVsync`**（同一文件）主要步骤：

1. **`rsVSyncDistributor_->CheckVsyncReceivedAndGetRelTs(timestamp)`** — 与分发器 **对时/相对时间** 校正。  
2. **帧统计**：**`SetFrameInfo(frameCount, …)`** → 内部 **`HgmCore::SetActualTimestamp` / `SetVsyncId`**，并 **`RsFrameDeadlinePredict::ReportRsFrameDeadline`**（**截止期预测**）。  
3. **重置** 本周期 **请求计数**、记录 **vsyncId_**。  
4. **UniRender**：**`MergeToEffectiveTransactionDataMap`**；若 unmarshaling 未空，**`PostTask(unmarshalBarrierTask_)`** 保证顺序。  
5. **`mainLoop_()`** — **一帧 RS 主循环**（合成决策、投递渲染线程等）。  
6. **热插屏等**：**`ProcessScreenHotPlugEvents`**。  
7. **Jank 统计结束**：**`RSJankStatsOnVsyncEnd`**，并可 **PostDirectCompositionJankStats**（直连合成 jank 优化路径）。

**用途小结**：**`RequestNextVSync`** = 「我这一边 **有显示相关工作** 或 **需要与下一 VBlank 对齐**」；**`OnVsync`** = 「硬件/Generator 认为 **该干活了**」——两者配合形成 **闭环**。

#### 2.7.5 帧率分级、自适应刷新、LTPO、DVSync（在 OH 代码中的含义）

这些词在科普文中常混用；在本仓库中 **职责分割** 大致如下：

| 概念 | 在实现中的落点 | 作用（为何要它） |
|------|----------------|------------------|
| **帧率分级 / 多档位刷新率** | **`HgmCore::SetScreenRefreshRate`**、**`GetScreenSupportedRefreshRates`**、**`PolicyConfigData`（XML）** | 屏支持 **60/90/120Hz** 等 **离散档位**；系统按 **场景模式** 切档，平衡 **流畅度与功耗**。 |
| **刷新率模式（Mode）** | **`HgmFrameRateManager::HandleRefreshRateMode`**、**`GetCurRefreshRateMode`** | 用户或策略 **「性能/标准/省电」** 等 **总开关**，约束可选档位集合。 |
| **自适应 / LTPO** | **`HgmCore::GetLtpoEnabled` / `GetAdaptiveSyncEnabled`**；**`HgmFrameRateManager::IsLtpo` / `AdaptiveStatus`**；**`UniProcessDataForLtpo`** | **屏硬件可连续或细粒度调刷新** 时，让 **RS 与内容帧率** 跟随 **视频、游戏、静止** 等场景 **降低无效刷新**。 |
| **投票（Vote）** | **`HgmFrameVoter`**、**`ProcessRefreshRateVote`**、**`DeliverRefreshRateVote`** | **触摸、游戏、页面 URL、包事件、亮度** 等多 **信息源** **投票** 出 **min/max 帧率区间**，避免单一模块独断。 |
| **DVSync** | **`VSyncGenerator`** 中 **AddDVSyncListener / DVSyncRateChanged**；**`VSyncConnection::SetUiDvsyncSwitch`** 等；**`RS_ENABLE_DVSYNC`** | **应用与 RS 的 VSync 相位/分频** 细调，减轻 **应用绘制与合成** **错位**；可能以 **略增延迟** 换 **稳定性**（产品可配）。 |
| **VBlank 空闲修正** | **`HgmCore::IsVBlankIdleCorrectEnabled`** | 在 **VBlank 利用不足** 时做 **修正**，减少 **相位漂移** 带来的 **偶现 jank**（与 **硬件特性** 强相关）。 |

**`HgmCore` 与主线程的协作**（**`hgm_core.h`** 注释 *called by RSMainThread*）：**`SetPendingScreenRefreshRate`**、**`SetTimestamp` / `SetVsyncId`**、**`SetForceRefreshFlag`**、**`SetDirectCompositionFlag`** 等由 **主线程或渲染线程** 写入；**`GetScreenRefreshRateImme`** 由 **HardwareThread** 取 **待立即生效的刷新率**（**exchange(0)** 语义：**一次性消费**）。**`HgmFrameRateManager::ProcessPendingRefreshRate`** **仅应由 RSMainThread 调用**（头文件明确标注），在 **VSync 时间戳** 上 **应用待定刷新率策略**。

**何时用**：系统 **默认启用**；开发者一般 **不直接调用** Generator，而是通过 **框架动画、显式帧回调、触摸路径** 间接影响 **投票结果**。调试：**Hilog** 中带 **HGM/VSYNC** 标签、**`PrintGeneratorStatus` / `PrintConnectionsStatus`**、**帧统计 ** **`RSJankStats*`**。

#### 2.7.6 与绘制引擎的衔接

**`OnVsync` → `mainLoop_()`** 之后，**`RSBaseRenderEngine` / `RSDrawFrame`**（**`rs_main_thread.h`** include）在 **UniRender** 路径下常由 **渲染线程** 执行 **具体 GPU/CPU 绘制**；**`renderThreadParams_`** 在 **`RSJankStatsOnVsyncStart`** 填入 **本帧起始时间**，供 **jank 与直连合成** 分析。

#### 2.7.7 本设计的局限与可改进方向

| 局限 | 表现 | 可能演进（非承诺） |
|------|------|---------------------|
| **链路长、模块多** | 定位 **jank** 需跨 **应用—RS—Generator—Composer**；日志分散。 | **统一 Trace span**、**帧 ID** 全链路透传。 |
| **RequestNextVSync 风暴** | 业务 **错误循环** 请求导致 **计数爆表**、主线程 **Dump**。 | **更细背压**、**合并请求**、**调用栈采样**。 |
| **策略与真实负载脱节** | **投票** 基于 **启发式**，特殊 **游戏/视频** 仍可能 **错档**。 | **更强内容感知**（解码器帧间隔、GPU 时间戳）、**机器学习策略**（若产品允许）。 |
| **多屏异构** | **每屏独立刷新率** 时 **相位同步** 更难。 | **显式主从屏**、**共享 reference time** 策略固化。 |
| **DVSync 折中** | **稳定性 ↑** 可能伴随 **尾延迟 ↑**。 | **按场景自动开关**、**更准的 deadline 预测**（已有 **`RsFrameDeadlinePredict`** 可演进）。 |

#### 2.7.8 关键源码路径速查

| 类/文件 | 路径 |
|---------|------|
| **VSyncGenerator** | `foundation/graphic/graphic_2d/rosen/modules/composer/vsync/include/vsync_generator.h` |
| **VSyncDistributor / VSyncConnection** | `.../vsync/include/vsync_distributor.h` |
| **RSMainThread** | `.../render_service/core/pipeline/main_thread/rs_main_thread.{h,cpp}` |
| **HgmCore** | `.../hyper_graphic_manager/core/hgm_screen_manager/hgm_core.h` |
| **HgmFrameRateManager** | `.../hyper_graphic_manager/core/frame_rate_manager/hgm_frame_rate_manager.h` |
| **HgmContext（每帧帧率入口）** | `.../render_service/core/feature/hyper_graphic_manager/hgm_context.{h,cpp}` |
| **HgmHardwareUtils（下刷硬件）** | `.../render_service/core/feature/hyper_graphic_manager/hgm_hardware_utils.cpp` |

#### 2.7.9 主线程一帧时序与源码锚点

以下时序描述 **RS 进程内**「**VSync 回调 → 主循环 → HGM 写待定刷新率 →（另线程）下刷硬件**」的主路径；**应用进程** 通过 **app distributor** 收 VSync 的路径对称但不在此展开。

**时序图（Mermaid）**

```mermaid
sequenceDiagram
    participant HW as 显示硬件 Composer
    participant Gen as VSyncGenerator
    participant Dist as VSyncDistributor
    participant Conn as VSyncConnection rs
    participant Recv as VSyncReceiver
    participant MT as RSMainThread
    participant Loop as mainLoop_ 闭包
    participant HC as HgmContext
    participant FRM as HgmFrameRateManager
    participant HCre as HgmCore
    participant HT as HgmTaskHandleThread

    HW->>Gen: VBlank 周期 / 模式更新
    Gen->>Dist: OnVSyncEvent
    Dist->>Conn: 分发到 rs 连接
    Conn->>Recv: PostEvent
    Recv->>MT: FrameCallback → OnVsync(ts, frameCount)
    MT->>MT: UniRender: Merge 事务 / unmarshal 屏障
    MT->>Loop: mainLoop_()
    Note over Loop: ConsumeAndUpdateAllNodes → ProcessCommand → Animate → …
    Loop->>HC: ProcessHgmFrameRate(timestamp_)
    HC->>FRM: ProcessPendingRefreshRate
    FRM->>HCre: SetTimestamp / SetPendingScreenRefreshRate 等
    HC->>HT: PostTask UniProcessDataForLtpo（条件满足）
    Note over Loop: Render → OnUniRenderDraw → SendCommands …
    Note over HT,HW: 硬件线程侧 SetScreenActiveMode / ExecuteSwitchRefreshRate 消费 pending 与 Imme 刷新率
```

**1）初始化：RS 侧 VSync 连接与 Receiver**

```647:653:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
    RS_LOGI("VSync init");
    sptr<VSyncIConnectionToken> token = new IRemoteStub<VSyncIConnectionToken>();
    sptr<VSyncConnection> conn = new VSyncConnection(rsVSyncDistributor_, "rs", token->AsObject());
    conn->id_ = hgmContext_.GetRSFrameRateLinker()->GetId();
    rsVSyncDistributor_->AddConnection(conn);
    receiver_ = std::make_shared<VSyncReceiver>(conn, token->AsObject(), handler_, "rs");
    receiver_->Init();
```

**2）请求下一拍：登记 FrameCallback，经 Connection 进入 Distributor**

```3112:3137:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
void RSMainThread::RequestNextVSync(const std::string& fromWhom, int64_t lastVSyncTS, const int64_t& requestVsyncTime)
{
    RS_OPTIONAL_TRACE_FUNC();
    VSyncReceiver::FrameCallback fcb = {
        .userData_ = this,
        .callbackWithId_ = [this](uint64_t timestamp, uint64_t frameCount, void* data) {
                OnVsync(timestamp, frameCount, data);
            },
    };
    if (receiver_ != nullptr) {
        requestNextVsyncNum_++;
        if (requestNextVsyncNum_ > REQUEST_VSYNC_NUMBER_LIMIT) {
            RS_LOGD("RequestNextVSync too many times:%{public}u", requestNextVsyncNum_.load());
            if ((requestNextVsyncNum_ - currentNum_) >= REQUEST_VSYNC_DUMP_NUMBER) {
                RS_LOGW("RequestNextVSync EventHandler is idle: %{public}d", handler_->IsIdle());
                DumpEventHandlerInfo();
            }
        }
        RequestNextVSyncInner(fcb, fromWhom, lastVSyncTS, requestVsyncTime);
        if (requestNextVsyncNum_ >= VSYNC_LOG_ENABLED_TIMES_THRESHOLD &&
            requestNextVsyncNum_ % VSYNC_LOG_ENABLED_STEP_TIMES == 0) {
            vsyncGenerator_->PrintGeneratorStatus();
            rsVSyncDistributor_->PrintConnectionsStatus();
        }
    }
}
```

```4986:4998:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
void RSMainThread::RequestNextVSyncInner(VSyncReceiver::FrameCallback callback, const std::string& fromWhom,
    int64_t lastVSyncTS, const int64_t& requestVsyncTime)
{
    if (Rosen::RSSystemProperties::GetTimeVsyncDisabled()) {
        receiver_->RequestNextVSync(callback, fromWhom, lastVSyncTS);
    } else {
        int64_t requestVsyncTimeTmp = 0;
        if (requestVsyncTime > 0 && static_cast<uint64_t>(requestVsyncTime) > vsyncRsTimestamp_.load()) {
            requestVsyncTimeTmp = requestVsyncTime;
        }
        receiver_->RequestNextVSync(callback, fromWhom, lastVSyncTS, requestVsyncTimeTmp);
    }
}
```

**3）VSync 到达：进入主循环**

```3232:3267:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
void RSMainThread::OnVsync(uint64_t timestamp, uint64_t frameCount, void* data)
{
    rsVSyncDistributor_->CheckVsyncReceivedAndGetRelTs(timestamp);
    SetFrameInfo(frameCount, false);
    const int64_t onVsyncStartTime = GetCurrentSystimeMs();
    const int64_t onVsyncStartTimeSteady = GetCurrentSteadyTimeMs();
    const float onVsyncStartTimeSteadyFloat = GetCurrentSteadyTimeMsFloat();
    RSJankStatsOnVsyncStart(onVsyncStartTime, onVsyncStartTimeSteady, onVsyncStartTimeSteadyFloat);
    timestamp_ = timestamp;
    vsyncRsTimestamp_.store(timestamp_);
    drawingRequestNextVsyncNum_.store(requestNextVsyncNum_);
    curTime_ = static_cast<uint64_t>(
        std::chrono::duration_cast<std::chrono::nanoseconds>(
            std::chrono::steady_clock::now().time_since_epoch()).count());
    RS_PROFILER_PATCH_TIME(timestamp_);
    RS_PROFILER_PATCH_TIME(curTime_);
    requestNextVsyncNum_ = 0;
    vsyncId_ = frameCount;
    if (isUniRender_) {
#ifdef RS_ENABLE_GPU
        MergeToEffectiveTransactionDataMap(cachedTransactionDataMap_);
        if (RSUnmarshalThread::Instance().CachedTransactionDataEmpty()) {
            // set needWaitUnmarshalFinished_ to false, it means mainLoop do not wait unmarshalBarrierTask_
            needWaitUnmarshalFinished_ = false;
        } else {
            RSUnmarshalThread::Instance().PostTask(unmarshalBarrierTask_, DVSYNC_NOTIFY_UNMARSHAL_TASK_NAME);
        }
#endif
    }
    mainLoop_();
#if defined(RS_ENABLE_CHIPSET_VSYNC)
    SetVsyncInfo(timestamp);
#endif
    ProcessScreenHotPlugEvents();
    RSJankStatsOnVsyncEnd(onVsyncStartTime, onVsyncStartTimeSteady, onVsyncStartTimeSteadyFloat);
}
```

**4）`mainLoop_` 中 HGM 插入点（在 `Render` 之前）**

```485:508:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
    mainLoop_ = [&]() {
        RS_PROFILER_ON_FRAME_BEGIN(timestamp_);
        if (isUniRender_ && !renderThreadParams_) {
#ifdef RS_ENABLE_GPU
            // fill the params, and sync to render thread later
            renderThreadParams_ = std::make_unique<RSRenderThreadParams>();
#endif
        }
        RenderFrameStart(timestamp_);
        RSRenderNodeGC::Instance().SetGCTaskEnable(true);
        SetRSEventDetectorLoopStartTag();
        ROSEN_TRACE_BEGIN(HITRACE_TAG_GRAPHIC_AGP, "RSMainThread::DoComposition: " + std::to_string(curTime_));
        ConsumeAndUpdateAllNodes();
        ClearNeedDropframePidList();
        WaitUntilUnmarshallingTaskFinished();
        ProcessCommand();
        RsFrameBlurPredict::GetInstance().AdjustCurrentFrameDrawLargeAreaBlurFrequencyPredictively();
        UpdateSubSurfaceCnt();
        Animate(timestamp_);
        CollectInfoForHardwareComposer();
#ifdef RS_ENABLE_GPU
        RSUifirstManager::Instance().PrepareCurrentFrameEvent();
#endif
        ProcessHgmFrameRate(timestamp_);
        RS_PROFILER_ON_RENDER_BEGIN();
```

**5）`ProcessHgmFrameRate` 薄封装 → `HgmContext` 内投票与 `ProcessPendingRefreshRate`**

```2072:2075:foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.cpp
void RSMainThread::ProcessHgmFrameRate(uint64_t timestamp)
{
    hgmContext_.ProcessHgmFrameRate(timestamp, rsVSyncDistributor_, vsyncId_);
}
```

```105:163:foundation/graphic/graphic_2d/rosen/modules/render_service/core/feature/hyper_graphic_manager/hgm_context.cpp
void HgmContext::ProcessHgmFrameRate(
    uint64_t timestamp, sptr<VSyncDistributor> rsVSyncDistributor, uint64_t vsyncId)
{
    currVsyncId_ = vsyncId;
    int changed = 0;
    if (bool enable = RSSystemParameters::GetShowRefreshRateEnabled(&changed); changed != 0) {
        RSRealtimeRefreshRateManager::Instance().SetShowRefreshRateEnabled(enable, 1);
    }

    if (rpHgmConfigDataChange_) {
        rpHgmConfigDataChange_ = false;
        rpFrameRatePolicy_.HgmConfigUpdateCallback(rpHgmConfigData_);
    }

    auto& hgmCore = HgmCore::Instance();
    auto frameRateMgr = hgmCore.GetFrameRateMgr();
    if (frameRateMgr == nullptr || rsVSyncDistributor == nullptr) {
        return;
    }

    auto mainThread = RSMainThread::Instance();
    auto& rsContext = mainThread->GetContext();
    if (frameRateMgr->AdaptiveStatus() == SupportASStatus::SUPPORT_AS) {
        frameRateMgr->HandleGameNode(rsContext.GetNodeMap());
        isAdaptiveVsyncComposeReady_ =
            rsContext.GetNodeMap().GetVisibleLeashWindowCount() < MULTI_WINDOW_PERF_START_NUM &&
            rsContext.GetAnimatingNodeList().empty();
    }

    // Check and processing refresh rate task.
    frameRateMgr->ProcessPendingRefreshRate(
        timestamp, vsyncId, rsVSyncDistributor->GetRefreshRate(), rsVSyncDistributor->IsUiDvsyncOn());
    if (rsFrameRateLinker_ != nullptr) {
        auto rsCurrRange = rsCurrRange_;
        rsCurrRange.type_ = RS_ANIMATION_FRAME_RATE_TYPE;
        HgmEnergyConsumptionPolicy::Instance().GetAnimationIdleFps(rsCurrRange);
        rsFrameRateLinker_->SetExpectedRange(rsCurrRange);
        RS_TRACE_NAME_FMT("rsCurrRange = (%d, %d, %d)", rsCurrRange.min_, rsCurrRange.max_, rsCurrRange.preferred_);
    }
    rsCurrRange_.IsValid() ? frameRateMgr->GetRsFrameRateTimer().Start() : frameRateMgr->GetRsFrameRateTimer().Stop();
    
    bool needRefresh = frameRateMgr->UpdateUIFrameworkDirtyNodes(
        rsContext.GetUiFrameworkDirtyNodes(), timestamp);
    bool setHgmTaskFlag = hgmCore.SetHgmTaskFlag(false);
    auto& rsVsyncRateReduceManager = mainThread->GetRSVsyncRateReduceManager();
    bool vrateStatusChange = rsVsyncRateReduceManager.SetVSyncRatesChangeStatus(false);
    bool isVideoCallVsyncChange = HgmEnergyConsumptionPolicy::Instance().GetVideoCallVsyncChange();
    if (!vrateStatusChange && !setHgmTaskFlag && !needRefresh && !isVideoCallVsyncChange &&
        hgmCore.GetPendingScreenRefreshRate() == frameRateMgr->GetCurrRefreshRate()) {
        return;
    }
    HgmTaskHandleThread::Instance().PostTask([timestamp, rsFrameRateLinker = rsFrameRateLinker_,
        appFrameRateLinkers = rsContext.GetFrameRateLinkerMap().Get(),
        linkers = rsVsyncRateReduceManager.GetVrateMap()]() mutable {
            RS_TRACE_NAME("ProcessHgmFrameRate");
            if (auto frameRateMgr = HgmCore::Instance().GetFrameRateMgr(); frameRateMgr != nullptr) {
                frameRateMgr->UniProcessDataForLtpo(timestamp, rsFrameRateLinker, appFrameRateLinkers, linkers);
            }
        });
}
```

**6）本帧应用「待定刷新率」到 `HgmCore`（供硬件线程消费）**

```287:322:foundation/graphic/graphic_2d/rosen/modules/hyper_graphic_manager/core/frame_rate_manager/hgm_frame_rate_manager.cpp
void HgmFrameRateManager::ProcessPendingRefreshRate(
    uint64_t timestamp, int64_t vsyncId, uint32_t rsRate, bool isUiDvsyncOn)
{
    std::lock_guard<std::mutex> lock(pendingMutex_);
    // ensure that vsync switching takes effect in this frame
    if (vsyncId < vsyncCountOfChangeGeneratorRate_) {
        return;
    }
    auto& hgmCore = HgmCore::Instance();
    hgmCore.SetTimestamp(timestamp);
    if (pendingRefreshRate_ != nullptr) {
        hgmCore.SetPendingConstraintRelativeTime(pendingConstraintRelativeTime_);
        lastPendingConstraintRelativeTime_ = pendingConstraintRelativeTime_;
        pendingConstraintRelativeTime_ = 0;

        hgmCore.SetPendingScreenRefreshRate(*pendingRefreshRate_);
        lastPendingRefreshRate_ = *pendingRefreshRate_;
        pendingRefreshRate_.reset();
        RS_TRACE_NAME_FMT("ProcessHgmFrameRate pendingRefreshRate: %u", lastPendingRefreshRate_);
    } else {
        if (lastPendingConstraintRelativeTime_ != 0) {
            hgmCore.SetPendingConstraintRelativeTime(lastPendingConstraintRelativeTime_);
        }
        if (lastPendingRefreshRate_ != 0) {
            hgmCore.SetPendingScreenRefreshRate(lastPendingRefreshRate_);
            RS_TRACE_NAME_FMT("ProcessHgmFrameRate pendingRefreshRate: %u", lastPendingRefreshRate_);
        }
    }

    if (hgmCore.GetLtpoEnabled() && IsLtpo() && rsRate > OLED_10_HZ &&
        isUiDvsyncOn && isLtpoScreenStrategyId_.load()) {
        hgmCore.SetPendingScreenRefreshRate(rsRate);
        RS_TRACE_NAME_FMT("ProcessHgmFrameRate pendingRefreshRate: %u ui-dvsync", rsRate);
    }
    SetChangeGeneratorRateValid(true);
}
```

**7）硬件路径：`GetScreenRefreshRateImme` 覆盖本次下刷速率（与 `pending` 并列语义）**

```32:70:foundation/graphic/graphic_2d/rosen/modules/render_service/core/feature/hyper_graphic_manager/hgm_hardware_utils.cpp
void HgmHardwareUtils::ExecuteSwitchRefreshRate(ScreenId screenId)
{
    uint32_t refreshRate = refreshRateParam_.rate;
    static bool refreshRateSwitch = system::GetBoolParameter("persist.hgm.refreshrate.enabled", true);
    if (!refreshRateSwitch) {
        RS_LOGD("refreshRateSwitch is off, currRefreshRate is %{public}u", refreshRate);
        return;
    }

    auto frameRateMgr = hgmCore_.GetFrameRateMgr();
    if (frameRateMgr == nullptr) {
        RS_LOGD("FrameRateMgr is null");
        return;
    }
    auto screenRefreshRateImme = hgmCore_.GetScreenRefreshRateImme();
    if (screenRefreshRateImme > 0) {
        RS_LOGD("ExecuteSwitchRefreshRate:rate change: %{public}u -> %{public}u", refreshRate, screenRefreshRateImme);
        refreshRate = screenRefreshRateImme;
    }
    ScreenId curScreenId = frameRateMgr->GetCurScreenId();
    ScreenId lastCurScreenId = frameRateMgr->GetLastCurScreenId();
    bool shouldSetRefreshRate = (refreshRate != hgmCore_.GetScreenCurrentRefreshRate(screenId) ||
                                 lastCurScreenId != curScreenId);
    if (shouldSetRefreshRate || setRateRetryParam_.needRetrySetRate) {
        RS_LOGD("CommitAndReleaseLayers screenId %{public}d refreshRate %{public}u "
                "needRetrySetRate %{public}d", static_cast<int>(screenId), refreshRate,
                setRateRetryParam_.needRetrySetRate);
        int32_t sceneId = (lastCurScreenId != curScreenId || setRateRetryParam_.needRetrySetRate) ?
            SWITCH_SCREEN_SCENE : 0;
        frameRateMgr->SetLastCurScreenId(curScreenId);
        int32_t status = hgmCore_.SetScreenRefreshRate(screenId, sceneId, refreshRate, shouldSetRefreshRate);
        setRateRetryParam_.needRetrySetRate = false;
        setRateRetryParam_.retryCount = shouldSetRefreshRate ? 0 : setRateRetryParam_.retryCount;
        if (status < EXEC_SUCCESS) {
            RS_LOGD("HgmContext: failed to set refreshRate %{public}u, screenId %{public}" PRIu64,
                refreshRate, screenId);
        }
    }
}
```

**阅读提示**：**`mainLoop_` 在 `OnVsync` 内同步跑完**；**`HgmTaskHandleThread::PostTask`** 将 **LTPO 等重逻辑** 异步到 **Hgm 工作线程**，避免阻塞主线程整段合成，但 **pending 刷新率** 已在 **`ProcessPendingRefreshRate`** 写入 **`HgmCore`**，供 **硬件线程** 在 **Commit/SetActiveMode** 路径读取。**Trace** 可搜 **`RSMainThread::DoComposition`**、**`ProcessHgmFrameRate`**、**`ProcessHgmFrameRate pendingRefreshRate`**。

---

### 2.8 绘制后端（Skia / Drawing / Vulkan）

- **feature**：**`graphic_2d_feature_upgrade_skia`**、**`graphic_2d_feature_enable_vulkan`**、**`graphic_2d_feature_enable_opengl_to_vulkan`** 等决定 **运行时后端**。  
- **syscap**：**`SystemCapability.Graphics.Drawing`** 与 **NativeDrawing** NDK 对齐。  
- **实现原理**：**统一抽象 Canvas**（**Drawing::Canvas**）屏蔽后端；**RSUniRenderVisitor**（**rs_uni_render_judgement.h**）在 **单帧内** 选择 **CPU 绘制 / GPU 直通 / HWC Layer**。

**作用与联通**：应用侧 **Canvas 绘制** 与 RS 侧 **离屏/合成绘制** 共用 **Drawing** 抽象，减少 **双引擎** 行为差异。**局限**：**Vulkan/Skia 版本组合** 多，**驱动 bug** 会表现为 **仅某一后端花屏**；**改进** 方向是 **收敛后端矩阵** 与 **更强的后端自检**。

---

### 2.9 硬件合成与直接合成（HWC）

**include**：`pipeline/hwc/rs_direct_composition_helper.h`、`rs_hwc_context.h`

**原理**：当 **Layer 满足格式与变换约束** 时，**RS** 将 **Layer 元数据** 下发 **Composer**，由 **硬件叠加** 完成 **Alpha/旋转/混合**，降低 **GPU 填充率** 与 **带宽**。**UniRenderJudgement** 负责 **可否走 HWC** 的 **判定树**（具体条件见 `.cpp`）。

**要解决的问题**：全路径 **GPU 合成** 在 **高分辨率多窗** 下 **带宽与发热** 压力大；**HWC** 把 **简单 Layer** 交给 **显示控制器**。**局限**：**旋转、混合模式、HDR、安全层** 任一 **超能力** 即 **回落 GPU**；不同芯片 **能力矩阵** 不一致，**策略难统一**。**改进**：**更细粒度 Layer split**、**与 HGM 刷新率** 联合（**直连合成 jank** 已在 **`RSJankStatsOnVsyncEnd`** 路径做优化开关）。

---

### 2.10 ModifierNG 数据流（详细设计）

1. **ArkUI / 业务** 构造 **Modifier** 对象并挂到 **RSNode**。  
2. **序列化** 为 **Command** 中的 **Modifier 段**（含 **type、参数 blob**）。  
3. **RS 侧** **反序列化** 为 **服务端 Drawable Modifier**。  
4. **绘制阶段** **遍历 Modifier 链** 生成 **Shader/Clip/Blend** 状态。

**与 graphics_effect**：**SDF 类 Modifier** 可能调用 **graphics_effect** 中 **ShaderShape** 生成 **GPU Program**。

#### 2.10.1 机制深度（作用、联通、局限）

**要解决的问题**：旧式「每个控件手写绘制」难 **组合效果** 与 **动画插值**；**Modifier 链**把 **渲染状态** 声明化，便于 **ArkUI 布局系统** 批量优化。

**架构位置**：客户端 **序列化进 RSCommand**；服务端 **Drawable** 重建 **等效渲染树**；与 **Transaction** 强绑定——**Modifier 变更** 必须随 **Commit** 可见。

**局限**：**链过长** 增加 **每帧遍历成本**；**自定义 Modifier** 若 **GPU 过重** 会 **拖垮整帧**。**改进**：**编译期折叠**、**静态缓存 Shader**、**按脏区跳过未变 Modifier**。

---

### 2.11 屏幕内容与截取（`RSRenderInterface`）

**文件**：`render_service_client/core/transaction/rs_render_interface.h`

**设计定位**：**系统侧 / 同进程 SDK** 提供的 **截图与组件截取 API**（非任意三方应用无鉴权调用）。

| API（节选） | 输入 | 输出 / 回调 | 设计说明 |
|-------------|------|-------------|----------|
| **TakeSurfaceCapture(RSSurfaceNode)** | 窗口节点、**RSSurfaceCaptureConfig**、**SurfaceCaptureCallback** | 异步 **PixelMap** | **整窗截图**；**安全层** 可 **模糊**（见 **WithBlur**）。 |
| **TakeSurfaceCapture(RSDisplayNode)** | 显示节点 | 全屏合成结果 | **含多窗口** 的合成后图像。 |
| **TakeSurfaceCapture(NodeId)** | 节点 ID | 同上 | **无句柄** 场景。 |
| **TakeSurfaceCaptureForUI(RSNode)** | Root/Surface/Canvas/CanvasDrawing | **组件级** 截图；支持 **scale、同步、裁剪 Rect** | **ArkUI 组件截图** 主路径。 |
| **TakeUICaptureInRange** | **begin/end 子节点** | 区间截图 | **长列表局部** 导出。 |
| **TakeSurfaceCaptureSoloNodeList** | **RSNode** | **vector&lt;NodeId, PixelMap&gt;** | **子树逐节点** 位图，用于 **调试/自动化**。 |
| **TakeSurfaceCaptureWithAllWindows** | **DisplayNode** | 全窗口合成 | **DRM/SurfaceLock** 检查可选。 |

**业务流程共性**：**提交异步任务到 RS** → **等待合成流水线空闲或指定同步点** → **读回 GPU 纹理/缓冲** → **编码为 PixelMap** → **回调**。**失败原因** 常见：**节点已销毁**、**安全策略拒绝**、**DRM 保护**。

#### 2.11.1 架构位置与上下层联通

**客户端**：**`RSRenderInterface::GetInstance()`** 单例（**`rs_render_interface.h`**），与 **RSNode / RSSurfaceNode / RSDisplayNode** 在同一进程 **直接调用** 或通过 **系统服务封装** 暴露给 **Shell、无障碍、窗口管理扩展**。  
**服务端**：请求进入 **RS 进程** 后，在 **合成树已解析** 的前提下 **调度读回**；与 **正常 VSync 合成** 共享 **GPU 与带宽**，大分辨率 **同步截图** 可能造成 **单帧耗时尖峰**。

**与 Profiler 区别**：**Profiler**（**2.13 节**）偏 **连续抓帧、树序列化、工程回流**；**TakeSurfaceCapture*** 偏 **业务/系统功能**（壁纸、预览、安全审计），**API 形态与权限模型** 不同。

**何时用**：**组件分享预览**、**窗口缩略图**、**问题复现附件**；**不建议**在 **高频循环** 中调用 **全屏 Display 截图**。

**局限与改进方向**：**异步回调延迟** 难与 **用户点击** 严格对齐；**安全模糊** 与 **DRM** 导致 **「黑屏截图」** 属 **预期** 而非 bug。**改进**：**更细粒度的同步点选项**、**降低读回带宽**（压缩、ROI）、**与 VSync 绑定的截图槽位** 减少对 **交互帧** 的冲击。

---

### 2.12 脏区与 `RSAdvancedDirtyConfig`

**文件**：`rs_common_def.h`

**目的**：限制 **每节点 dirty rect 数量**，在 **多窗口重叠** 时 **合并矩形** 降低 **绘制次数**。

| 常量 | 含义 |
|------|------|
| **RECT_NUM_MERGING_ALL** | 超过则 **合并为单矩形** |
| **RECT_NUM_MERGING_BY_LEVEL** | **分层合并** |
| **MAX_RECT_NUM_EACH_NODE** | **高级脏区** 开启时单节点矩形上限 |
| **MAX_TOLERABLE_COST** | **合并代价** 阈值 |

#### 2.12.1 机制深度（作用、联通、局限）

**要解决的问题**：**单窗全量重绘** 在 **多窗叠加** 时浪费 **GPU 填充率**；**细粒度 dirty rect** 可减少 **绘制区域**，但 **矩形数量爆炸** 又增加 **CPU 裁剪与驱动提交** 成本。

**架构位置**：配置在 **`rs_common_def.h`** 的 **`RSAdvancedDirtyConfig`**，影响 **RS 侧** 如何 **合并/截断** 每节点矩形列表；与 **VSync 帧** 内 **遍历 Drawable** 的开销直接相关。

**局限**：**启发式阈值** 对 **任意 UI 拓扑** 非最优；**误判** 可能导致 **合并过大（糊整窗）** 或 **过小（矩形风暴）**。**改进**：**按屏 DPI/分辨率缩放阈值**、**机器学习或 A/B** 调参（产品化需谨慎）。

---

### 2.13 Render Service Profiler（实现原理）

**路径**：`render_service_profiler/`

| 组件 | 作用 |
|------|------|
| **RSProfiler** | **总控**：开关、归档、与 **Socket/Network** 可选对接。 |
| **RSCaptureData / Recorder** | **帧捕获**、**树序列化**。 |
| **PixelMapStorage** | **截图缓存** 与 **回传**。 |

**使用边界**：**工程诊断** 为主；**量产** 常 **编译裁剪**；**隐私数据** 须 **脱敏**。

**架构与局限**：Profiler **旁路抓取** 合成树与像素，**体积与 I/O** 大；**不当开启** 可 **拖慢 RS**。**改进**：**环形缓冲**、**按需订阅节点子树**、**与 Release 构建默认关闭** 强绑定。

---

## 3. graphic_surface（缓冲、同步、NDK）

### 3.1 模块职责（详细设计）

| 子模块 | 路径 | 职责 |
|--------|------|------|
| **surface** | `surface/` | **BufferQueue 语义**、**Producer/Consumer**、与 **RS** 消费对接。 |
| **buffer_handle** | `buffer_handle/` | **跨进程句柄**、**元数据**（尺寸、格式、stride）。 |
| **sync_fence** | `sync_fence/` | **同步原语**，保证 **GPU 写入完成** 再 **合成读取**。 |
| **frame_report** | `utils/frame_report` | **帧统计** 上报。 |

### 3.2 `OH_NativeBuffer`（数据结构与应用场景）

**文件**：`interfaces/inner_api/surface/native_buffer.h`

- **`OH_NativeBuffer_Usage`**：**CPU 读/写**、**DMA**、**GPU 渲染/纹理**、**对齐** 等 **位标志**；**错误组合**会导致 **分配失败或花屏**。  
- **`OH_NativeBuffer_ColorGamut`**：**色域** 与 **ColorManager**、**HDR** 管线对齐。

**业务流程**：**分配** → **Lock 映射（可选）** → **GPU/CPU 填充** → **Unlock + queueBuffer** → **Fence signal** → **RS acquire**。

### 3.3 与 RS / NativeWindow 的衔接

- **应用侧**：**NativeWindow** **请求缓冲** → 填充 → **queue**；**RSSurfaceNode** 在 **系统侧** 作为 **Consumer** 与 **同一 BufferQueue** 连接。  
- **一致性**：**Format/Usage** 在 **分配与消费** 两端必须 **匹配**；**旋转/缩放** 由 **Transform** 在 **RSProperties** 侧描述，**Buffer** 本身可为 **物理分辨率** 或 **逻辑分辨率**（视 **具体窗口模式**）。

### 3.4 BufferQueue、Fence 与端到端同步（深度剖析）

**要解决的问题**：**生产者（应用 GPU/CPU）** 与 **消费者（RS 合成）** 若不经 **显式同步**，会出现 **读到未完成渲染的纹理**（花屏、闪绿）、或 **过早 release** 导致 **内容被覆盖**。

**架构位置**：**`graphic_surface`** 实现 **BufferQueue 语义**（与 Android **Surface** 类似概念，实现独立）；**Producer** 在应用进程，**Consumer** 在 **RS 进程**（对 **RSSurfaceNode** 对应 Surface）。跨进程靠 **BufferHandle + Fence**；**`sync_fence`** 子模块提供 **同步原语**。

**典型流程（与 VSync 对齐）**：

```text
VSync / 布局完成 → 应用 dequeueBuffer（得空闲槽 + 可能带 Fence）
    → GPU/CPU 写入
    → queueBuffer（附带 releaseFence / acquireFence 语义依实现）
RS OnVsync → mainLoop → acquireBuffer（消费侧）
    → 等待 Fence signal → 合成采样纹理
    → release（还给队列）
```

**关键接口形态**：NDK **`OH_NativeBuffer_*`**（**`native_buffer.h`**）描述 **分配与元数据**；具体 **dequeue/queue/acquire** 在 **NativeWindow / Surface** 封装层（与 **OHOS** 版本相关，以 **inner_api** 为准）。

**`OH_NativeBuffer_Usage` 怎么用**：**HW_RENDER** 与 **HW_TEXTURE** 等组合决定 **allocator** 走 **ION/MMZ/GPU** 哪条路径；**错误组合** 常见症状：**分配失败**、**map 失败**、**花屏**。调优时 **减少 CPU_READ** 与 **GPU 写** 的冲突。

**何时用**：任何 **上屏像素** 路径；**离屏** 渲染若最终 **不进入 Surface**，仍可能用 **相同 Buffer 分配器** 以 **零拷贝** 进 RS。

**局限与改进方向**：**Buffer 周转慢**（应用过重、RS 合成慢）会导致 **dequeue 阻塞** → **应用 jank**；**多缓冲数量** 与 **DVSync** 策略强相关。**改进**：**更准的缓冲深度配置**、**RS 侧提前 release**、**与帧率投票联动** 限制 **无效 queue**。

---

## 4. graphics_effect（2D 特效详细设计）

### 4.1 定位

- **算法层**：**SDF（有符号距离场）** 描述 **几何形状**（圆角矩形、像素图蒙版、联合/差集）。  
- **渲染层**：生成 **Shader** 与 **绘制命令**，供 **Rosen** **Modifier / Filter** 调用。

### 4.2 类族（阅读路径）

**目录**：`graphics_effect/include/sdf/`

| 类名模式 | 职责 |
|----------|------|
| **GEShaderShape** / **GESdf*ShaderShape** | **形状 → Shader** |
| **GESdfShadowShader** | **阴影** |
| **GESdf*Op*ShaderShape** | **布尔运算** |

**业务流程**：**输入几何/图片** → **构建 SDF 表达式** → **编译为 GPU Shader** → **在 RS 绘制 Pass** 中 **采样**。

### 4.3 机制深度（作用、联通、局限）

**要解决的问题**：圆角、模糊、复杂矢量若全用 **栅格蒙版**，**放大缩小** 会 **糊边**、**显存暴涨**；**SDF + Shader** 在 **GPU 上解析几何**，**缩放相对稳定**。

**架构位置**：**`graphics_effect`** 被 **Rosen 客户端 Modifier / Filter** 调用；**不**直接面对 **Composer**；最终仍落在 **RS 绘制 Pass** 或 **应用离屏 Pass**。

**局限**：**SDF 构建成本** 对 **超大路径** 仍高；**过度嵌套 Shader** 增加 **GPU 寄存器压力**。**改进**：**缓存 SDF 纹理**、**LOD**、与 **脏区（2.12 节）** 联动 **只重建变化区域**。

---

## 5. graphic_3d（Lume 与适配层详细设计）

### 5.1 分层

| 层 | 路径 | 职责 |
|----|------|------|
| **资源与 IO** | **LumePng / LumeJpg / LumeFont** 等 | **解码与字形** |
| **场景与资产** | **LumeScene / Lume_3D** | **glTF、动画、实体** |
| **引擎** | **LumeEngine** | **ECS**（**ComponentTools**）、**调度** |
| **渲染** | **LumeRender** | **Pass、材质、光照** |
| **OHOS 适配** | **3d_widget_adapter** | **GraphicsManager**、**WidgetAdapter**、**TextureLayer** |
| **场景桥接** | **3d_scene_adapter** | **SceneAdapter / SceneBridge** |

### 5.2 与 2D 合成的业务流程

1. **应用/ArkUI** 创建 **3D Widget** 或 **Scene**。  
2. **LumeRender** 在 **独立 GL/Vulkan 上下文** 渲染到 **OES 纹理或共享 Buffer**。  
3. **3d_widget_adapter** 将 **纹理 ID / BufferHandle** 注入 **RSSurfaceNode** 或 **SURFACE_TEXTURE** 路径。  
4. **RS** 将该层作为 **普通纹理层** 参与 **第 2 章** 所述合成。

#### 5.2.1 机制深度（作用、联通、局限）

**要解决的问题**：**3D 内容** 若强行塞进 **2D 指令绘制**，**性能与工具链** 不经济；独立 **ECS 场景** 更易 **资源与渲染状态管理**。

**架构位置**：**Lume** 在 **独立图形上下文** 渲染；**`3d_widget_adapter`** 把 **输出纹理** 接到 **RSSurfaceNode / SURFACE_TEXTURE** 等 **2D 合成** 入口——**3D 不直接操作 HWC Layer 列表**，避免 **策略旁路**。

**局限**：**双上下文**（3D + 2D）带来 **同步与内存** 开销；**分辨率变化** 时 **纹理重建** 可能 **闪一下**。**改进**：**共享 Image 内存**、**更紧的 lifecycle 与 RS 属性联动**、**统一帧时钟**（与 **2.7 节** VSync 对齐）。

### 5.3 关键头文件（接口索引）

- **`graphics_manager.h`**：**引擎生命周期**、**任务投递**。  
- **`widget_adapter.h`**：**Widget** 与 **2D 宿主** 绑定。  
- **`texture_info.h` / `texture_layer.h`**：**纹理元数据** 与 **图层描述**。  
- **`scene_adapter.h`**：**场景图** 与 **非 Widget** 宿主对接。

---

## 6. 屏幕内容分析与获取（汇总）

各路径的 **架构位置、调用方、局限** 已按 **0.4 节** 维度在 **2.11.1**、**2.13**、**第 3 章** 展开；下表便于 **选型对比**。

### 6.1 路径对比

| 路径 | 入口 | 典型调用方 | 限制 |
|------|------|------------|------|
| **RS 组件/窗口截图** | **2.11 节 RSRenderInterface** | 系统服务、Shell、同签名应用 | **安全模糊、DRM** |
| **RS Profiler** | **2.13 节** | 工程人员 | **编译开关** |
| **应用自有像素** | **PixelMap / Image** | 应用 | **仅自有缓冲** |
| **媒体录屏** | **AVScreenCapture 等** | 系统/授权应用 | **权限+SELinux** |
| **uitest / hdc** | 测试框架 | 自动化 | **非生产 API** |

### 6.2 推荐分析步骤（问题驱动）

1. 确认 **RSSurfaceNodeType** 与 **是否 SECURE**。  
2. 若 **截图失败**，查 **TakeSurfaceCaptureWithBlur** 是否需要、**DRM** 标志。  
3. 若 **花屏**，查 **Buffer Format/Usage** 与 **Fence**。  
4. 若 **卡顿**，查 **Vsync**、**HWC 是否生效**、**脏区合并**。

---

## 7. 接口与 syscap 索引

- **权威列表**：**`foundation/graphic/graphic_2d/bundle.json`** 的 **component.syscap** 数组（节选见下表与 **7.1**）。  
- **NDK / ArkTS 绑定主目录**：**`foundation/graphic/graphic_2d/interfaces/`**（**inner_api** + **kits/napi|ani|cj|taihe**）。  
- **3D**：**`graphic_3d/bundle.json`** **inner_kits**。

**编程对照**：公开/内聚 API 所在 **`.h`** 均在 **`grapharch_source_corpus.md`** 的 **全量头文件索引** 中可按路径定位；**syscap 与头文件** 无自动一一映射，以 **`bundle.json` + 实际 `#include` + NAPI 模块注册** 为准。

### 7.1 `foundation/graphic/graphic_2d/interfaces`（功能、架构与流程）

本节补齐 **`interfaces`** 在整图中的位置：**不实现合成内核**，而是把 **系统能力** 以 **C 头 / NAPI / ANI / 多语言 FFI** 形式接到 **ArkTS、Cangjie、Taihe** 与 **系统原生模块**。

#### 7.1.1 目录拓扑与职责边界

| 子树 | 路径 | 职责 |
|------|------|------|
| **系统侧 C 头** | **`interfaces/inner_api/`** | **不经过 JS**：供 **系统服务、原生进程** 直接 `#include`；与 **Composer、VSync、开机动画工具、色域、NativeImage** 等对齐。 |
| **NAPI（JS/TS）** | **`interfaces/kits/napi/graphic/`** | **ArkTS / JS API** 的 **C++ 适配层**：模块初始化、对象生命周期、`napi_*` 与底层 **`rosen/modules/2d_engine`、`frameworks/opengl_wrapper`、effect、color_manager ndk** 等链接。 |
| **ANI（ETS）** | **`interfaces/kits/ani/`** | 与 **NAPI** 平行的 **ETS/声明式 UI** 侧 **绑定与分包**（如 **drawing_***、**ui_effect**、**effect_kit**、**color_manager**、**window_animation_manager**、**hdr_capability**）。 |
| **仓颉 FFI** | **`interfaces/kits/cj/`** | **Cangjie** 侧 **effect_kit、color_manager** 等 **FFI 包**（与 **`bundle.json` → `build.group_type.base_group` 中 `ffi_packages`** 对应）。 |
| **Taihe** | **`interfaces/kits/taihe/`** | **Taihe IDL + 运行时**（当前可见 **`ui_effect`** 等），与 **`taihe_packages`** 构建目标一致。 |

**架构原则**：**interfaces** = **「出口层」**；**算法与设备**在 **`rosen/`、`frameworks/`、`graphic_surface/`、`graphics_effect/`**。**改行为**时往往要同时改 **实现库** 与 **本目录绑定**。

#### 7.1.2 与 `bundle.json` 的构建挂钩（从配置找代码）

**`graphic_2d/bundle.json`** 的 **`component.build.group_type.base_group`** 显式拉入（与 **interfaces** 直接相关）：

| GN 目标（摘录） | 含义 |
|-----------------|------|
| **`//.../interfaces/kits/napi:napi_packages`** | 汇总 **NAPI 图形相关** 子包。 |
| **`//.../interfaces/kits/cj:ffi_packages`** | **仓颉 FFI** 图形包。 |
| **`//.../interfaces/kits/ani:ani_packages`** | **ANI/ETS** 图形包。 |
| **`//.../interfaces/kits/taihe:taihe_packages`** | **Taihe** 包。 |

其余 **base_group** 项（**`2d_graphics_packages`、`libcomposer`、`libnative_vsync`、`EGL`/`GLESv*`、`libnative_display_soloist`、`libnative_color_space_manager`** 等）是 **interfaces 下层依赖的原生库**；调试 **「API 调了没反应」** 时沿 **NAPI → so 符号 → 上述 GN 目标** 排查。

#### 7.1.3 `inner_api`：系统原生头文件与典型能力

| 子目录 | 代表头文件 | 功能摘要 | 与本文其它章节 |
|--------|------------|----------|----------------|
| **`inner_api/composer/`** | **`native_vsync.h`**、**`vsync_receiver.h`**、**`vsync_type.h`**、**`vsync_iconnection_token.h`** | **Native VSync** 接收与连接抽象，供系统侧与 **Composer/VSync 管线** 对接。 | **第 2.7 节**（**`VSyncReceiver`** 等与 RS 侧概念同源、进程角色不同） |
| **`inner_api/surface/`** | **`native_image.h`** | **NativeImage**（**`SystemCapability.Graphic.Graphic2D.NativeImage`**），与 **YUV/图像** 管道协作。 | **第 3 章** Buffer/图像；**graphic_surface** 侧另有 **NativeBuffer/NativeWindow** |
| **`inner_api/bootanimation/`** | **`boot_animation_utils.h`** | **开机动画** 工具；与 **`graphic_2d_feature_bootanimation_enable`** 等产品 feature 联动。 | **2.3.2** **SELF_DRAWING_WINDOW_NODE** / 系统自绘窗口 |
| **`inner_api/hyper_graphic_manager/`** | **`native_display_soloist.h`** | **DisplaySoloist** 等与 **HyperGraphicManager / 帧率与显示策略** 相关的 **原生出口**。 | **第 2.7 节 HGM**、**syscap HyperGraphicManager** |
| **`inner_api/color_manager/`** | **`native_color_space_manager.h`**、**`color_manager_common.h`** | **色域 / ColorSpace** 管理 **C API**，与 **`libnative_color_space_manager`** 实现链衔接。 | **bundle** **ColorManager.Core**；**NativeBuffer 色域枚举**（第 3 章） |
| **`inner_api/common/`** | **`graphic_common.h`**、**`graphic_common_c.h`** | **跨模块公共类型**（与 Composer/显示抽象共享）。 | 各 NAPI/原生路径的 **底层类型** |

**流程（Native VSync 为例）**：系统组件 **`#include` inner_api** → 创建 **Receiver/Connection** → 与 **Composer 侧 VSync 服务** 建链 → 回调驱动 **动画或合成节奏**（与 **RS 进程内 `VSyncReceiver`** 为 **同类机制、不同进程与连接名**）。

#### 7.1.4 `kits/napi/graphic`：按子模块的功能表

**根路径**：**`interfaces/kits/napi/graphic/`**。**通用流程**：**ArkTS `import`** → **运行时加载 `.so`** → **NAPI 模块 `Init`** 注册 **class/method** → 调用 **C++ 封装** → **Drawing / GLES / Effect / RS 相关库**。

| 子目录 | 功能 | 典型 syscap / 能力域（以 bundle 为准） |
|--------|------|----------------------------------------|
| **`drawing/`** | **NativeDrawing**：**Canvas、Pen、Brush、Path、Font、Shader、ImageFilter、Region、Matrix** 等 **细粒度 NAPI**；目录下按类型分子目录（**`*_napi`**）。 | **`SystemCapability.Graphics.Drawing`** |
| **`webgl/`** | **WebGL / WebGL2**：**RenderingContext、Buffer、Texture、Program、Framebuffer** 等；内部 **`egl_manager`** 管理 **EGL 与 GL 上下文**。 | **`WebGL`、`WebGL2`**；底层 **EGL/GLES** feature |
| **`ui_effect/`** | **UI 特效**（**Effect / Filter / Mask** 等）的 **NAPI**，对接 **effect 与 Rosen 客户端效果管线**。 | 与 **graphics_effect / effect_ndk** 能力相关 |
| **`effect_kit/`** | **EffectKit** 聚合能力（滤镜链、模板效果等，以源码模块名为准）。 | 与 **effect_common、skeffectchain** 等 **base_group** 依赖 |
| **`animation/window_animation_manager/`** | **窗口动画管理** NAPI，与 **WMS + RS Leash** 等系统动画策略配合。 | **窗口子系统** + **2.3.2 Leash** |
| **`color_manager/`** | **ColorSpaceManager** 等 **NAPI**（含 **sendable** 变体），封装 **色域转换与查询**。 | **ColorManager.Core** |
| **`hdr_capability/`** | **HDR 能力查询/配置** NAPI。 | HDR 相关能力与显示策略 |
| **`hyper_graphic_manager/`** | **HGM 相关 JS 侧接口**（帧率模式、显示策略等，以模块导出为准）。 | **HyperGraphicManager** |

#### 7.1.5 `kits/ani`：ETS/ANI 侧对称分包

**根路径**：**`interfaces/kits/ani/`**。结构与 **napi** 侧 **镜像**：**`drawing/`**（大量 **`*_ani`**）、**`ui_effect`**、**`effect_kit`**、**`color_manager`**、**`window_animation_manager`**、**`hdr_capability`** 等。

**流程**：**ArkUI 组件** 使用 **ETS API** → **ANI 运行时** 绑到 **同一套或并行 C++ 实现** → 与 **NAPI** 共享或分路径链接底层 **2d_graphics / effect**。**联调**：同时查 **`kits/ani/.../src`** 与 **`kits/napi/.../src`** 是否调用同一 **native** 函数。

#### 7.1.6 `kits/cj` 与 `kits/taihe`

| 子树 | 内容 | 说明 |
|------|------|------|
| **`kits/cj/`** | **`effect_kit`、`color_manager`** | **仓颉** 语言 **FFI**；构建入口 **`cj:ffi_packages`**。 |
| **`kits/taihe/ui_effect/`** | **IDL（`.taihe`）+ C++ 实现** | **Taihe** 组件化 **UI Effect**；构建入口 **`taihe:taihe_packages`**。 |

#### 7.1.7 `component.syscap` 与 interfaces 的对应关系（速查）

**`graphic_2d/bundle.json` 中 `component.syscap`**（含 `= false` 的项表示**条件/占位**，以实际产品为准）与 **interfaces 主落点**：

| syscap（节选） | 主要落点（interfaces） | 备注 |
|----------------|-------------------------|------|
| **NativeDrawing** | **`kits/napi/graphic/drawing`**、**`kits/ani/drawing`** | 与 **`2d_graphics` / Drawing 引擎** |
| **NativeWindow / NativeBuffer** | 多在 **`graphic_surface/interfaces`**（非本仓库 `graphic_2d/interfaces` 根下唯一） | **第 3 章**；**2d** bundle 仍通过 **deps** 依赖 **graphic_surface** |
| **NativeImage** | **`inner_api/surface/native_image.h`** + 对应 NAPI 若单独分包 | 图像导入导出 |
| **NativeVsync** | **`inner_api/composer/*vsync*.h`** | 系统 **Native VSync** |
| **WebGL / WebGL2** | **`kits/napi/graphic/webgl`** | **EGL + GLES** |
| **Vulkan** | **能力在 bundle 中声明**；**Vulkan 层** 多在 **`frameworks/vulkan_layers`** | NAPI 暴露面以实际模块为准 |
| **ColorManager.Core** | **`inner_api/color_manager`**、**`kits/napi/graphic/color_manager`**、**`kits/ani/color_manager`** | **ndk:libnative_color_space_manager** |
| **HyperGraphicManager** | **`kits/napi/graphic/hyper_graphic_manager`**、**`inner_api/.../native_display_soloist.h`** | **HGM** |
| **Graphics.Drawing** | 与 **NativeDrawing** 能力域一致（命名空间区分） | 文档/工具链常并列出现 |

#### 7.1.8 端到端设计流程（编程指导）

```text
[ 应用 ArkTS / ETS / Cangjie / Taihe ]
        ↓ import / FFI / IDL
interfaces/kits/{napi,ani,cj,taihe}
        ↓ napi_define_class / 绑定函数
rosen/modules/2d_engine、2d_graphics_packages、effect、composer、opengl_wrapper、hyper_graphic_manager/core/...
        ↓ Buffer / GPU / IPC
显示链路（RS / Composer / EGL）与 graphic_surface
```

**实现新 API 时的检查清单**：

1. **syscap**：是否在 **`bundle.json` → `component.syscap`** 声明；是否需要 **d.ts / API 文档** 配套。  
2. **GN**：**`napi_packages` / `ani_packages` / `ffi_packages` / `taihe_packages`** 是否加入新 **`BUILD.gn`** 目标。  
3. **ABI**：**NAPI** 暴露的 **对象生命周期**（**`napi_ref`、线程**）是否与 **底层库线程模型**（**EventHandler、GPU 线程**）一致。  
4. **与 RS**：若 API **改显示树或帧率**，需同步评估 **RSClient / RSMainThread / HGM**（**第 2 章**）。

#### 7.1.9 局限与文档边界

- **interfaces 下 `.cpp` 体量大**（尤其 **WebGL**）：本文 **不按函数逐一展开**；以 **`grapharch_source_corpus.md`** 检索 **头文件** + **IDE 跳转 `.cpp`**。  
- **ArkTS 声明文件（`.d.ts`）** 可能在 **`arkui` / SDK** 仓，**不在** `graphic_2d/interfaces`；**以最终 SDK 为准**。  
- **版本与裁剪**：**`bundle.json` features** 可 **关掉** 整条能力；文档描述以 **全量源码树** 为基准，**产品需对照 feature**。

---

## 8. 追踪、度量与运维

| 能力 | 路径 |
|------|------|
| **RS Trace** | `graphic_2d/utils/log/rs_trace.h` |
| **帧扩展上报** | `graphic_2d/utils/rs_frame_report_ext` |
| **Surface 帧上报** | `graphic_surface/utils/frame_report` |
| **HiSysEvent** | `graphic_2d/hisysevent.yaml` |

**编程对照**：**`rs_trace.h`** 等路径在 **附录** 中检索文件名即可得到 **相对源码根全路径** 与 **行数**。

---

## 9. 术语表（扩展）

| 术语 | 定义 |
|------|------|
| **Leash Window** | **窗口动画** 用 **父容器** 统一变换 **子 Surface** 的机制。 |
| **Uni Render** | **统一渲染** 路径，减少 **多 Pass** 与 **状态切换**。 |
| **HWC** | **Hardware Composer**，硬件 **Layer** 合成。 |
| **UiFirst** | **UI 优先** 渲染策略相关枚举 **RSUIFirstSwitch**。 |
| **Scene Board (SCB)** | **大场景多面板** 合成架构，对应 **SurfaceWindowType::SCB_***。 |

---

## 10. 源码路径速查

```text
foundation/graphic/graphic_2d/interfaces/inner_api/
foundation/graphic/graphic_2d/interfaces/kits/napi/graphic/
foundation/graphic/graphic_2d/interfaces/kits/ani/
foundation/graphic/graphic_2d/interfaces/kits/cj/
foundation/graphic/graphic_2d/interfaces/kits/taihe/
foundation/graphic/graphic_2d/rosen/modules/render_service_client/core/ui/
foundation/graphic/graphic_2d/rosen/modules/render_service_client/core/transaction/rs_render_interface.h
foundation/graphic/graphic_2d/rosen/modules/render_service/core/pipeline/main_thread/rs_main_thread.h
foundation/graphic/graphic_2d/rosen/modules/render_service/core/feature/hyper_graphic_manager/hgm_context.cpp
foundation/graphic/graphic_2d/rosen/modules/render_service/core/feature/hyper_graphic_manager/hgm_hardware_utils.cpp
foundation/graphic/graphic_2d/rosen/modules/hyper_graphic_manager/core/frame_rate_manager/hgm_frame_rate_manager.cpp
foundation/graphic/graphic_2d/rosen/modules/render_service_base/include/common/rs_common_def.h
foundation/graphic/graphic_2d/rosen/modules/render_service_profiler/
foundation/graphic/graphic_surface/interfaces/inner_api/surface/native_buffer.h
foundation/graphic/graphic_surface/surface/
foundation/graphic/graphics_effect/include/sdf/
foundation/graphic/graphic_3d/lume/
foundation/graphic/graphic_3d/3d_widget_adapter/include/
foundation/graphic/graphic_3d/3d_scene_adapter/include/
```

**更全路径表**：见 **`grapharch_source_corpus.md`** 第一节（**数千个头文件路径**，按字母序遍历 `foundation/graphic`）。

---

## 12. 源码级附录 `grapharch_source_corpus.md`

| 项 | 说明 |
|----|------|
| **路径** | 与本文同目录：`.claude/skills/ohgraph/grapharch_source_corpus.md` |
| **规模** | 由生成脚本写入，通常 **≥ 10 000 行**（随 `foundation/graphic` 头文件数量增长） |
| **内容 A** | **全量头文件索引**：每个 `.h` 三节——`## \`相对路径\``、**行数**、**首条类型声明摘抄** |
| **内容 B** | **`--embed-full`** 追加的 **带行号全文**（默认脚本示例含 **`rs_common_def.h`**、**`rs_main_thread.h`**，可自行增删） |
| **跳过规则** | 不扫描目录名 **`test` / `unittest` / `mock` / `.git`** |

**与「每一行代码」的关系**：附录保证 **在 graphic 子树内、上述规则下每个头文件至少一条记录**；**实现文件（`.cpp`）** 请用 **定义跳转** 或扩展 **`gen_grapharch_corpus.py`** 自行加入第二遍扫描。

**生成脚本**：`.claude/skills/ohgraph/gen_grapharch_corpus.py`（见 **0.5 节**命令行）。

---

## 11. 修订记录

| 版本 | 说明 |
|------|------|
| 1.0 | 初版纲要 |
| 2.0 | 按详细设计规范扩写：目标与约束、分层 I/O、**RSSurfaceNodeType** 全表、**RSMainThread** 事务与 Vsync、**HWC/UniRender**、**RSRenderInterface** 截图 API 表、**NativeBuffer**、**graphics_effect/3D** 流程、脏区与 Profiler |
| 2.1 | 增加 **0.4** 全链路写作约定；**2.6.4** 事务深度剖析；**2.7** 重写为 VSync/HGM 完整样板（信号源、Generator→Distributor→Receiver、`RequestNextVSync`/`OnVsync`、帧率分级与 LTPO/DVSync/投票、关键路径表、局限与演进）；**3.4** BufferQueue/Fence；**2.11.1**、**4.3**、**5.2.1**、**2.8/2.9/2.13** 补充局限与改进；**1.1** 统一合成局限 |
| 2.2 | **2.7.9** Mermaid 时序图 + **`rs_main_thread` / `hgm_context` / `hgm_frame_rate_manager` / `hgm_hardware_utils`** 源码行块锚点；**2.7.8** 与 **第 10 章** 增补 HGM 实现文件路径 |
| 3.0 | 新增 **`grapharch_source_corpus.md`**（脚本 **`gen_grapharch_corpus.py`**）：`foundation/graphic` **全量 `.h` 索引** + 默认可选 **带行号全文嵌入**；**0.5**、**第 7/8/10/12 章** 说明与附录关系；**诚实边界**（`.cpp`/全仓库无法人工逐行穷举） |
| 3.1 | **第 7.1 节**：**`graphic_2d/interfaces`** 全拓扑（**inner_api / napi / ani / cj / taihe**）、**`bundle.json` base_group** 挂钩、**syscap 速查**、**端到端流程** 与 **实现检查清单**；**第 10 章** 增补 **interfaces** 路径；**0.3** 阅读路径 |

---

*本文档用于设计与评审；与具体产品 feature、SELinux、驱动能力组合不一致时，以当版本源码与镜像行为为准。*
