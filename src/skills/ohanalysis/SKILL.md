# ohanalysis 技能

对 OpenHarmony 工程做静态分析：在项目目录（如 `src`）下查找 `bundle.json`，整理**子系统、系统能力、组件、deps、inner_kits、test** 等信息，支持单目录解析与全量扫描并生成 Markdown 报告。

## 技能功能

- **单 bundle 解析（`bundle`）**：解析指定路径或前缀下的 `bundle.json`，输出子系统、系统能力、组件名、deps、inner_kits、test 等字段，便于查看依赖与对外接口。
- **全量扫描报告（`scan-all`）**：扫描整个 `src`（排除 `kernel`、`third_party`、`applications` 及以 `.` 开头的目录），根据所有 `bundle.json` 生成一份 Markdown 报告，包含统计、子系统/组件排名与列表、syscap/inner_kits/deps/test 列表。
- **两目录对比（`diff`）**：给定两个 `src` 路径（如 61release 与 60release），先分别分析并生成两份 MD 报告，再对比两者在子系统、组件、inner_kits、syscap、deps、test 上的数量与条目，输出增、删、改列表并保存为对比报告（`diff_路径1_路径2_时间.md`）。

## 技能调用方式

**执行超时建议：60 分钟**。全量解析或扫描大型工程时耗时长，调用本技能时请将超时时间设为 60 分钟（3600000 毫秒），避免中途被中断。

脚本路径（相对工程 `src` 根目录）：

```
.claude/skills/ohanalysis/ohanalysis.py
```

在工程 `src` 根目录下执行：

```bash
python3 .claude/skills/ohanalysis/ohanalysis.py <命令> [参数] [选项]
```

查看帮助：

```bash
python3 .claude/skills/ohanalysis/ohanalysis.py help
```

---

## 命令说明

### `bundle [路径] [选项]`

解析 `bundle.json`，输出：

- **子系统**：`component.subsystem`
- **系统能力**：`component.syscap`
- **组件**：`component.name`
- **deps**：`component.deps.components`、`component.deps.third_party`
- **inner_kits**：`component.build.inner_kits`（含 header 路径与头文件）
- **test**：`component.build.test`（用例/测试目标）

| 参数/选项 | 说明 |
|-----------|------|
| `路径` | 相对 `src` 的目录，如 `foundation/ability/ability_base`。只解析该目录下的 `bundle.json`（即 `src/<路径>/bundle.json`）。不传则扫描整个 `src` 下所有 `bundle.json`。 |
| `--src-dir PATH` | 工程 `src` 根目录，不传则自动推断（脚本所在仓库的 `src` 或当前目录）。 |
| `--prefix PATH` | 仅处理路径以此前缀开头的 bundle（如 `foundation/ability`）。可与“不传路径”配合，缩小扫描范围。 |
| `--brief` | 不输出 inner_kits、test 的详细列表，只输出子系统、系统能力、组件、deps。 |

### `scan-all [选项]`

扫描 `src` 下所有符合条件的目录（排除以 `.` 开头、`kernel`、`third_party`、`applications`），根据 `bundle.json` 生成 Markdown 报告。报告内容包括：

- 统计：子系统数量、组件数量、InnerKits 数量、syscap 数量、deps 数量、test 数量
- 子系统排名（按组件数量 Top 50）
- 子系统列表（含组件与相对路径）
- 组件排名：按 syscap、inner_kits、deps、sub_component、test 数量各 Top 50
- 组件列表、syscap 列表、inner_kits 列表、deps 列表、test 列表

报告文件名：**分析路径去掉 `/` + 时间戳**（如 `rootohos61releasesrc202502271430.md`），保存在 `.claude/skills/ohanalysis/` 目录下。

| 选项 | 说明 |
|------|------|
| `--src-dir PATH` | 工程 `src` 根目录，不传则自动推断。 |

### `diff PATH1 PATH2`

比较两个 `src` 目录（如 `~/ohos/61release/src` 与 `~/ohos/60release/src`）：

1. 先分别对 PATH1、PATH2 做与 `scan-all` 相同的分析，生成两份 MD 报告（文件名：路径去掉 `/` + 时间戳）。
2. 再根据两份报告对比：统计数量增减，并列出**新增**、**删除**、**变更**的条目：
   - 子系统：新增子系统列表、删除子系统列表
   - 组件：新增组件列表、删除组件列表、变更组件列表（同一路径下 syscap/deps/inner_kits/test 等有变化）
   - syscap / inner_kits / deps / test：各自的新增列表、删除列表

对比报告文件名：**diff_** + 路径1（去掉 `/`）+ **_** + 路径2（去掉 `/`）+ **_** + 时间戳 + **.md**，保存在 `.claude/skills/ohanalysis/` 目录下。约定 PATH1 为基准（旧）、PATH2 为对比（新）。

---

## 使用样例

### bundle 命令

```bash
# 解析 foundation/ability/ability_base 的 bundle.json
python3 .claude/skills/ohanalysis/ohanalysis.py bundle foundation/ability/ability_base

# 指定 61release 的 src
python3 .claude/skills/ohanalysis/ohanalysis.py bundle foundation/ability/ability_base --src-dir ~/ohos/61release/src

# 只扫描 foundation/ability 下的所有 bundle，并简要输出
python3 .claude/skills/ohanalysis/ohanalysis.py bundle --prefix foundation/ability --brief

# 不传路径：扫描整个 src 下所有 bundle.json
python3 .claude/skills/ohanalysis/ohanalysis.py bundle
```

### scan-all 命令

```bash
# 使用默认 src 根目录做全量扫描并生成报告
python3 .claude/skills/ohanalysis/ohanalysis.py scan-all

# 指定 src 根目录
python3 .claude/skills/ohanalysis/ohanalysis.py scan-all --src-dir ~/ohos/61release/src
```

### diff 命令

```bash
# 比较 61release 与 60release 的 src
python3 .claude/skills/ohanalysis/ohanalysis.py diff ~/ohos/61release/src ~/ohos/60release/src
```

运行结束后会打印两份分析报告的路径与一份对比报告的路径。

### 帮助

```bash
python3 .claude/skills/ohanalysis/ohanalysis.py help
```

---

## 输出示例

### bundle 命令输出

```
共 1 个 bundle.json（src_root=/root/ohos/60release/src）

---
  path:           foundation/ability/ability_base/bundle.json
  name:           @ohos/ability_base
  子系统:         ability
  系统能力:       ['SystemCapability.Ability.AbilityBase']
  组件(component/name): ability_base
  deps.components: ['ability_runtime', 'bundle_framework', ...]
  deps.third_party: (无)
  inner_kits:    
    - //foundation/ability/ability_base:ability_base_want  (header: ...; files: ...)
    ...
  test:          
    - //foundation/ability/ability_base/test/unittest:unittest
    - //foundation/ability/ability_base/test/fuzztest:fuzztest
```

### scan-all 命令输出

运行结束后会在控制台打印报告保存路径（绝对路径）与统计摘要，例如：

```
报告已生成并保存。
保存路径: /root/ohos/61release/src/.claude/skills/ohanalysis/rootohos61releasesrc202502271430.md
（子系统 42，组件 380，InnerKits 1250）
```

报告文件保存在 `.claude/skills/ohanalysis/` 目录下，文件名格式为「分析路径去掉 / + 时间戳」的 `.md` 文件。

### bundle 命令输出

结果仅输出到终端，不写入文件。运行结束后会提示如何用重定向保存，例如：`... > bundle_result.txt`。

### diff 命令输出

运行结束后在控制台打印三个文件路径，例如：

```
已生成两份分析报告及一份对比报告。
基准路径报告: /path/to/rootohos60releasesrc202602271630.md
对比路径报告: /path/to/rootohos61releasesrc202602271630.md
对比报告: /path/to/diff_rootohos60releasesrc_rootohos61releasesrc_202602271630.md
```

对比报告内容包含：统计对比表，以及新增/删除/变更的子系统、组件、syscap、inner_kits、deps、test 列表。
