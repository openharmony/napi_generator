---
name: ohdoc
description: "从「任务7.2：NAPI测试用例模板.docx」生成 Word：① `napi-test-doc` 从 TypeScript `*.test.ts` 解析填表；② `csv-test-doc` 从测试用例列表 CSV 填表。依赖 python-docx。详见本文与 HOWTOSKILLS.md §4.5。"
author: "Created by user"
created: "2026-04-10"
version: "1.2.2"
---

# ohdoc：NAPI 测试用例文档生成

## 功能概览

| 能力 | 说明 |
|------|------|
| 模板驱动 | 读取 **`template/`** 下体积较大的 **`…NAPI测试用例模板.docx`**（与「任务1.x测试用例」表格结构一致）。 |
| 单文件 | **`--test-file`** 指向一个 **`*.test.ts`**，输出一篇 docx。 |
| 目录合并 | **`--test-dir`** 下所有 **`*.test.ts`** **合并为单个** docx，**不**再按文件拆成多份。 |
| 解析范围 | **`suite('…')`**、首个业务 **`import * as … from '…'`**（跳过 **`assert`/`vscode`**）、**`test('名', () => { … })`**、**`//` 注释**、**`parsec.*` / `parsets.*`** 调用与 **`assert.*`**。 |
| 版式 | **标题段 → 紧接表格**（`w:p` **`addnext`** `w:tbl`）；表间 **spacer**（零宽空格 + 段间距）；文首模板说明**只出现一次**。 |
| 合并版式 | 文首列出**全部源路径**；每个源文件第一次出现前插入 **`【文件名】`**；**任务1…任务N** 在全文**连续编号**（跨文件不重置）。 |
| 容错 | 某 **`*.test.ts`** 内无 **`test`** 时 **⚠ 跳过** 该文件；若最终无任何用例则 **报错退出**。 |
| **CSV 列表** | **`csv-test-doc`**：列含 **`用例名称*`**、**`功能模块*`**、**`用例编号`**、**`维护人`**、**`前置条件`**、**`步骤描述`**、**`预期结果`** 等；表格侧 **用例标识**=**用例编号**，**所属攻关任务** 固定 **投屏分享**，**用例追溯**=**功能模块**；与 **TS 模式共用模板**与 **`_fill_one_table`**（**`identifier`** 键）。 |

## 依赖

```bash
pip install -r src/skills/ohdoc/requirements.txt
```

（**`python-docx`**，见 **`requirements.txt`**。）

## 子命令与入口

| 子命令 | 作用 |
|--------|------|
| **`napi-test-doc`** | 从 **`*.test.ts`** 解析生成 docx（见下文「TS 模式」）。 |
| **`csv-test-doc`** | 从测试用例列表 **`.csv`** 生成 docx（见下文「CSV 模式」）。 |

入口：**`python src/skills/ohdoc/ohdoc.py <子命令> …`**

## 命令示例

在 **napi_generator 仓库根**执行：

```bash
pip install -r src/skills/ohdoc/requirements.txt

# 单个测试文件 → 一篇 docx
python src/skills/ohdoc/ohdoc.py napi-test-doc --test-file src/vscode_plugin/src/test/suite/parse/parsec.test.ts

# parse 目录下全部 *.test.ts 合并为一篇（推荐）
python src/skills/ohdoc/ohdoc.py napi-test-doc --test-dir src/vscode_plugin/src/test/suite/parse

# 指定输出路径
python src/skills/ohdoc/ohdoc.py napi-test-doc --test-dir src/vscode_plugin/src/test/suite/parse --out build/napitest_all.docx

# 从测试用例列表 CSV 生成（与 TS 共用模板）
python src/skills/ohdoc/ohdoc.py csv-test-doc --csv src/skills/ohdoc/template/11314873测试用例列表_20260409_193930.csv --out build/csv_cases.docx
```

## 参数说明（`napi-test-doc`）

| 参数 | 说明 |
|------|------|
| **`--test-file`** | 单个 **`*.test.ts`**；与 **`--test-dir`** **二选一**。 |
| **`--test-dir`** | 目录内所有 **`*.test.ts`** **合并输出一篇**；文件按**名字排序**后依次拼入。 |
| **`--out`** | 输出 **`.docx`** 完整路径；**省略**时文件名为 **`napitest{YYYYMMDD}.docx`**，目录由 **`--out-dir`** 或默认技能目录决定。 |
| **`--out-dir`** | 仅当**未**指定 **`--out`** 时生效：将默认文件名 **`napitest{YYYYMMDD}.docx`** 写到该目录（默认 **`src/skills/ohdoc`**）。 |
| **`--template`** | 自定义测试用例模板；默认选 **`template/`** 下 **最大**的 **`*.docx`**（即「测试用例」模板，非「设计文档」模板）。 |
| **`--executor`** | 表格「执行人员」，默认 **胡瑞涛**。 |
| **`--exec-date`** | 表格「执行日期」，默认**当天** **`YYYY/MM/DD`**。 |

**单文件模式**若同时传 **`--out-dir`**，脚本会提示忽略 **`--out-dir`**（以 **`--out`** 或默认路径为准）。

## 默认输出路径（`napi-test-doc`，省略 `--out` 时）

- 单文件或目录模式均为：**`{ohdoc 技能目录或 --out-dir}/napitest{YYYYMMDD}.docx`**
- 例：**`src/skills/ohdoc/napitest20260410.docx`**

## CSV 模式（`csv-test-doc`）

### 命令与参数

| 参数 | 说明 |
|------|------|
| **`--csv`** | **必填**。测试用例列表 **`.csv`** 路径（**UTF-8**，建议带 **BOM**；标准 **`csv.DictReader`** 解析，支持字段内逗号加引号）。 |
| **`--out`** | 输出 **`.docx`**；省略则为 **`{ohdoc 技能目录}/csvtest{YYYYMMDD}.docx`**。 |
| **`--template`** | 同 **`napi-test-doc`**，默认 **`template/`** 下最大 **`.docx`**。 |
| **`--exec-date`** | 全文表格「执行日期」，默认 **`2026/04/10`**（**`YYYY/MM/DD`**）。 |

### 表头与列名

脚本对表头做 **`strip` + 去掉末尾 `*`**，故 **`用例名称*`**、**`功能模块*`** 等与 Excel 导出列名一致即可。示例（**`11314873测试用例列表_*.csv`**）列包括：**序号**、**功能模块\***、**用例名称\***、**用例编号**、**维护人**、**用例类型**、**优先级**、**前置条件**、**备注**、**步骤描述**、**预期结果** 等；**跳过「用例名称」为空的行**。

### 标题与表格字段映射（CSV → Word）

| Word 表格项 | CSV 列（归一化后列名） |
|-------------|------------------------|
| 段落标题 **`任务{n}. …测试用例`** | **`任务{n}. {用例名称}测试用例`**（`n` 自 1 递增） |
| 用例名称 | **用例名称** |
| 用例标识 | **用例编号** |
| 所属模块/功能 | **功能模块** |
| 所属攻关任务 | 固定 **投屏分享**（与 CSV 列表工程约定一致） |
| 用例追溯 | **功能模块** |
| 需求描述 | **用例名称** |
| 用例描述 | 固定句式：**本测试用例验证「{用例名称}」。** |
| 预置条件 | **前置条件** |
| 输入和步骤 | **步骤描述** |
| 预期结果 | **预期结果** |
| 通过准则 | **符合预期结果** |
| 实际输出 | **见后图** |
| 执行人员 | **维护人** |
| 执行日期 | **`--exec-date`**（默认 **2026/04/10**） |
| 测试结论 / 异常现象 | **通过** / **无** |

## 表格字段映射（TS / `napi-test-doc`，与 `ohdoc.py` 一致）

| 表格项 | 来源 |
|--------|------|
| 用例名称、用例标识 | **`test('…')`** 名称（两者相同） |
| 所属模块/功能 | 当前源文件内 **`suite('…')`** 名称（如 **Parse_C_Suite**） |
| 所属攻关任务 | 固定 **NAPI** |
| 用例追溯 | 首个**业务** **`import * as … from '路径'`**（**跳过** **`assert` / `vscode`**），如 **`../../../parse/parsec`** |
| 需求描述 | **`test` 上方最近一条有意义的 **`//` 注释**；无则「验证 {接口} 行为」 |
| 用例描述 | 「本测试用例主要对 **{接口名}** 进行验证（**{用例名}**）。」接口名来自 **`parsec.*` / `parsets.*`** 第一次方法调用 |
| 预置条件 | 第一次 **`parsec.*` / `parsets.*`** 调用之前，**`let`/`const`/`var`** 声明块（含多行模板字符串）；过长截断 |
| 输入和步骤 | 用例体内所有 **`parsec.*` / `parsets.*`** 调用（去重、编号列出） |
| 预期结果 | 用例体内所有 **`assert.…`** 行（过长截断） |
| 通过准则 | **判断正确：各 assert 与预期一致** |
| 实际输出 | **见后图** |
| 执行人员 / 执行日期 | 参数或默认值 |
| 测试结论 / 异常现象 | **通过** / **无** |

标题行样式：**`任务{n}. {test名称}测试用例`**，`n` 在合并模式下为**全局**序号。

## 实现要点（与代码同步）

1. **`build_napi_test_doc_from_sources`**：单文件封装为 **`build_napi_test_doc([path], …)`**。
2. **表格复制**：`deepcopy` 模板第一张表；每张表独立 **`w:tbl`**，避免粘连。
3. **标题与表**：**`Paragraph._p.addnext(tbl_el)`**，保证「一行标题 → 下接该用例表」。
4. **表间距**：非最后一张表后 **`_spacer_paragraph_after_table()`**（OOXML **`w:p`** + **`w:spacing`** + 零宽空格 **`\\u200b`**）。
5. **合并目录**：`**【{basename}】**` 段落区分来源；`**--test-dir**` 调用 **`build_napi_test_doc_from_sources(sorted(glob('*.test.ts')), …)`**。
6. **首两行与执行行填列**：模板第 **0、1** 行为「左标签 + 左值 | 右标签 + 右值」；左值写 **列 1**，**用例标识 / 所属攻关任务** 的值写 **列 6**（列 4–5 为右标签，勿覆盖）。第 **12** 行「执行日期」的值同样写在 **列 6**。
7. **`csv-test-doc`**：**`build_csv_test_doc`** → **`_load_csv_testcase_rows`**（**`_norm_csv_header_key`** 去 **`*`**）→ 与 TS 共用 **`_fill_one_table`**；传入 **`identifier`**（用例编号）、**`task`** 固定 **投屏分享**、**`trace`** 为功能模块；默认 **`--exec-date`** 为 **`2026/04/10`**。

## 文件布局

| 路径 | 说明 |
|------|------|
| **`template/任务7.2：NAPI测试用例模板.docx`** | 版式来源（勿删）；与「设计文档」模板区分。 |
| **`ohdoc.py`** | CLI 与生成逻辑；**模块 docstring** 为简要设计说明。 |
| **`requirements.txt`** | **`python-docx`**。 |
| **`napitest{YYYYMMDD}.docx`** / **`csvtest{YYYYMMDD}.docx`** | 默认生成物（可加入 **`.gitignore`**）。 |
| **`template/*.csv`**（可选） | 测试用例列表来源示例，非脚本必需。 |

## 限制

- **TS 模式**仅识别 **`test('name', () => { … })`**；`async`/带参数回调等需改脚本。
- **CSV 模式**需表头含 **用例名称** 等必填语义列；编码非 UTF-8 可能乱码。
- **（仅 TS）用例追溯**取文件中**第一个**非 **`assert`/`vscode`** 的 **`import * as`**；多业务 import 时以**先出现者**为准。
- 模板为 **7 列合并单元格** 结构；第 0、1、12 行左右两栏的值分别在 **列 1** 与 **列 6**（勿把右栏值写在列 5，否则会盖住「用例标识」「所属攻关任务」「执行日期」等标签）。其余多列合并区通常写 **列 1** 即可。
- 超长预置条件 / assert 列表会**截断**并附提示。

## 仓库级文档

仓库 **`src/skills/HOWTOSKILLS.md`** **§4.5** 有 **ohdoc** 的速查说明，与本 **`SKILL.md`** 互补。
