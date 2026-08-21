---
name: xts-git-commit
description: >-
  全仓库 Git 提交规范（不限 XTS）。用户要求提交、push、commit 时必读。
  强制：git commit -sm（Signed-off-by）、**仅** Co-authored-by: Agent（一律禁止 第三方 IDE）、
  单笔 ≤2000 行（+与-之和）。含 hook/脚本自动剥离 IDE 合著行。
version: "1.4.0"
---

# Git 提交规范（全仓库）

> **适用范围**：OpenHarmony XTS、napi_generator、ace_engine、inspector 等**任意仓库**。  
> Agent 参与开发的 commit **一律**遵守本规范。

## 第零条：禁止 IDE 合著（最高优先级，零例外）

| 禁止写入 message | 必须写入 |
|------------------|----------|
| `Co-authored-by: 第三方 IDE` | **`Co-authored-by: Agent`** |
| `Co-authored-by: 第三方 IDE <ideagent@example.com>` | （仅此一行，**不带邮箱**） |
| 任何含 `ideagent@example.com` 的行 | |

**Agent 行为禁令**（违反即视为提交失败，须修正后重做）：

1. **禁止**在 HEREDOC / `-m` 字符串里写 `第三方 IDE`、`ideagent@example.com`
2. **禁止**复制 IDE 自动生成的 IDE 合著行
3. **禁止**同时出现 `Co-authored-by: Agent` 与 `Co-authored-by: 第三方 IDE`（重复合著）
4. commit 后**必须** `git log -1 --format=full`；若仍见 IDE 合著行 → 未 push 则 `commit --amend` 修正

IDE 客户端 / Agent 运行时**可能自动追加** `Co-authored-by: 第三方 IDE <ideagent@example.com>`。  
本 skill 已提供 **Git hook + 包装脚本 + IDE shell hook** 三层防护；Agent 仍须在 message 中**只手写 Agent**。

---

## 三条铁律（每次 commit 不可违反）

| # | 规则 | 执行方式 |
|---|------|----------|
| **1** | **Signed-off-by** | **必须** `git commit -sm`（`-s` 签名 + `-m` 消息）。禁止仅用 `git commit -m` |
| **2** | **Co-authored-by: Agent** | **Signed-off-by 后空一行**再写 Agent（hook 自动排版）。**一律禁止** 第三方 IDE / ideagent |
| **3** | **单笔 ≤ 2000 行** | `git diff --cached --shortstat` 的 **insertions + deletions 之和 < 2000**；超出必须拆 commit |

### 默认提交作者（P0）

**除非用户明确要求**指定别的作者、日期或多作者拆分，否则**一切 commit** 均为：

| 字段 | 默认值 |
|------|--------|
| Author / Committer | **dongwei** `<dongwei@kaihong.com>` |
| Signed-off-by | **`Signed-off-by: dongwei <dongwei@kaihong.com>`**（由 `-s` 产生，勿改别人） |
| 日期 | 当前提交时刻（**不要**自行伪造历史日期） |

**禁止** Agent 默认采用多作者拆分、协作者署名或回溯日期；**仅当用户原文要求**（如「bayanxing 三笔各 300 行」「指定作者/日期」）时才进入下文 **§可选·多作者拆分**。

**单笔超 2000 行**的常规拆法：仍全部 **dongwei** 提交，按模块/语义拆多笔 `test` / `fix` / `chore`，**不**引入第二作者。

### 优先：一键提交脚本（推荐入口，2026-08 新增）

**常规提交场景直接用脚本**，门禁/审计/行数/拆分建议/提交/验证一次完成，减少人工核对：

```bash
# ① 只 add 指定文件后提交（禁 add 目录；门禁→行数→-sm 提交→提交后验证）
python3 scripts/do_commit.py --stage <文件1> <文件2> -m "test(ability): xxx"
# ② 已 add 完成，直接提交
python3 scripts/do_commit.py -m "test(ability): xxx"
# ③ 只审计不提交（检查 5 类门禁 + 行数）
python3 scripts/check_precommit.py --base origin/master
```

脚本固化的门禁（对应下方各章节规则）：
- `check_precommit.py`：①版权头（基线有头/变更无头）②违禁文件（autosign/oh_modules/build/*.hap）
  ③compileSdkVersion 数字残留（staged blob 级）④bundleName/module 改动清单 ⑤numstat 可疑整文件重写
- `do_commit.py`：staged 行数审计（软上限 1900/硬上限 2000）→ 超限拆分建议 → `-sm` 提交
  （消息自动补 Co-authored-by: Agent，禁 第三方 IDE）→ 提交后 `git log -1 --format=full` 验证 → 工作区归零验证

脚本执行失败/特殊场景（多作者拆分、历史重写）才走下方人工步骤。

### 标准命令（复制即用）

```bash
# 1. 行数审计（必须 < 2000）
git diff --cached --shortstat
# 示例：7 files changed, 42 insertions(+), 8 deletions(-)  → 42+8=50 ✓

# 2. 提交（必须 -sm；合著行由 commit-msg hook 补在 Sign-off 下一行）
git commit -sm "$(cat <<'EOF'
test(chip-static): 简短标题（说明 why）

1～2 句补充说明。
EOF
)"
```

### 提交后验证（必须执行）

```bash
git log -1 --format=full
```

**合格输出须同时包含**（**顺序固定**：Sign-off → 空行 → Agent）：

```
Signed-off-by: <user> <email>

Co-authored-by: Agent
```

**禁止** Agent 出现在 Signed-off-by **之前**（中间须有空行分隔）。

**不合格须修正后重做**（未 push 可用 `commit --amend -sm`，已 push 须用户同意后再改历史）：

- 出现 `Co-authored-by: 第三方 IDE` 或 `Co-authored-by: 第三方 IDE <ideagent@example.com>`
- 同时存在 Agent 与 第三方 IDE 两行 Co-authored-by
- 无 `Signed-off-by`
- 使用了 `git commit -m` 未加 `-s`

### 提交后 xdevice 汇总截图（有 HAP 报告时必做 · 硬门禁）

若本会话已生成 **xdevice/hypium** `summary_report.html`（单 HAP 或合并页），在 **commit（及用户要求的 push）成功之后**：

1. 确认终端已有 `SCREENSHOT_PNG=`（hypium / merge / module-lib 应已自动截）；没有 `summary_top.png` 则跑  
   `xts-develop-master-cycle/scripts/auto_screenshot_xdevice.py <summary_report.html>`
2. **多 HAP：只交合并汇总那一张**，禁止对每个子 HAP 再截
3. 截图范围：Summary → Test Details，**最多 10 行** Module
4. 用 **Read** 打开 png，在回复里让用户直接看到图；并给出 `SCREENSHOT_PNG=` 路径

**未完成判定**：只贴 `REPORT_HTML=` / HTML 路径、未 Read 出图 → **视为交付未完成**，须在同一回复补齐。

详见规则 `xdevice-html-report-only` 与 skill `xts-develop-master-cycle`「汇总截图硬门禁」。
### 错误 vs 正确示例

```text
# ❌ 错误（IDE 常自动插入，禁止提交）
test(chip): 新增用例

Co-authored-by: 第三方 IDE <ideagent@example.com>

# ❌ 错误（重复合著）
Co-authored-by: Agent
Co-authored-by: 第三方 IDE <ideagent@example.com>

# ❌ 错误（Agent 在 Sign-off 之前）
test(chip): 新增用例

Co-authored-by: Agent

Signed-off-by: 姓名 <邮箱>

# ✅ 正确（Sign-off 与 Agent 之间空一行）
test(chip): 新增用例

1～2 句说明 why。

Signed-off-by: 姓名 <邮箱>

Co-authored-by: Agent
```

### Co-authored-by 对照表

| 写法 | 是否允许 |
|------|----------|
| `Co-authored-by: Agent` | **必须用这个（推荐，无邮箱）** |
| `Co-authored-by: Agent <任意邮箱>` | 可接受，但优先无邮箱写法 |
| `Co-authored-by: 第三方 IDE` | **一律禁止** |
| `Co-authored-by: 第三方 IDE <ideagent@example.com>` | **一律禁止** |
| 不写 Co-authored-by | **禁止**（Agent 参与开发时必须写 Agent） |

> **说明**：`-sm` 产生 `Signed-off-by`；`commit-msg` hook 在其后**空一行**补 `Co-authored-by: Agent`（HEREDOC **可不写**合著行）。  
> IDE 自动追加的 IDE 合著行由 hook 剥离；Agent **不得**写入 IDE 合著行。

---

## 三层防护（自动剥离 IDE 合著）

| 层级 | 路径 | 作用 |
|------|------|------|
| **1. Git hook** | `hooks/commit-msg` + `hooks/prepare-commit-msg` | 剥离 IDE 合著；Sign-off 后空一行写 Agent |
| **2. 包装脚本** | `xts-git-commit/scripts/git-commit-agent.sh` | 推荐 Agent 使用的安全提交入口 |
| **3. 第三方 IDE hook** | `~/.curs`+`or/hooks/block-curs`+`or-coauthor.sh`（即 IDE 配置目录下 hooks/ 的合著拦截脚本） | 拦截 shell 中含 IDE 合著标记的 `git commit` |

### 全局 Git hook（已配置时可跳过）

```bash
# 本机已配置：git config --global core.hooksPath /root/.git-hooks
# 新环境安装：
mkdir -p ~/.git-hooks
cp /root/aiSkill/.claude/skills/xts-git-commit/hooks/prepare-commit-msg ~/.git-hooks/
cp /root/aiSkill/.claude/skills/xts-git-commit/hooks/commit-msg ~/.git-hooks/
chmod +x ~/.git-hooks/prepare-commit-msg ~/.git-hooks/commit-msg
git config --global core.hooksPath ~/.git-hooks
```

> 若某仓库已有 `core.hooksPath .githooks`（如 xts_acts_0622），**本地配置优先**；该仓 `.githooks/prepare-commit-msg` 已链到 `sanitize-coauthor.sh`。

### 推荐：安全提交脚本

```bash
SKILL=/root/aiSkill/.claude/skills/xts-git-commit
"$SKILL/scripts/git-commit-agent.sh" -sm "$(cat <<'EOF'
test(scope): 简短标题

说明 why。
EOF
)"
```

### 手动 sanitize（调试）

```bash
/root/aiSkill/.claude/skills/xts-git-commit/scripts/sanitize-coauthor.sh /path/to/COMMIT_EDITMSG
```

---

## 核心原则

**提交 diff 必须反映真实语义变更。** 评审人应能从 `git show` 直接看出「改了哪几行、为什么改」，而不是整文件删除再整文件新增。

---

## 单笔 2000 行：如何计算与拆分

### 计算方式

```bash
git diff --cached --shortstat
# 合计 = insertions + deletions（两者相加，不是只看一边）
```

| shortstat 示例 | 合计 | 判定 |
|----------------|------|------|
| `50 insertions(+), 8 deletions(-)` | 58 | ✓ |
| `1598 insertions(+), 0 deletions(-)` | 1598 | ✓ |
| `2102 insertions(+), 8 deletions(-)` | 2110 | ✗ 须拆分 |
| `3 insertions(+), 2060 deletions(-)` | 2063 | ✗ 须拆分 |

### 超出时怎么拆

| 场景 | 拆法 |
|------|------|
| 用例 + CodeCheck fix 混在一起 | 先 `test(...)` 再 `fix(...)` |
| 多工程 | 每工程 1～2 个 commit |
| 误混入 tools 报告（上千行） | **不要提交**；报告放 `xts_acts_local_tools/` |
| 批量新文件 | 按模块/Phase 拆，每批 commit 后重跑 `--shortstat` |

**禁止**：为凑行数把多批工作硬塞一笔 commit；**禁止**先 commit 再发现超 2000 行而不拆分。

---

## 禁止：整文件重写式修改

| 禁止 | 应改为 |
|------|--------|
| 对已有文件用 `Write` 整文件覆盖 | `StrReplace` / 局部 patch |
| 批量脚本 LF 覆盖 CRLF 仓库文件 | `git apply --ignore-cr-at-eol` |
| `git add -A` | 只 `git add` 明确路径列表 |
| 复制整文件再改一处 | 原文件最小 diff |

```bash
git diff --cached --stat
git diff --cached --ignore-cr-at-eol --stat
git diff --cached --numstat | awk '$1==$2 && $1>20 {print}'
```

---

## 提交工作流（Agent 必须按序执行）

### 1. 准备

```bash
git status
git diff
git diff --cached
git log -5 --oneline
```

### 2. 审计（含三条铁律）

**优先一键审计**：`python3 scripts/check_precommit.py --base origin/master`（版权头/违禁文件/compileSdk 残留/bundleName 改动/整文件重写 5 类门禁，退出码 1 禁止提交）。

人工核对清单（脚本输出后仍须过目）：

- [ ] `--shortstat` 合计 **< 2000**
- [ ] 无整文件替换可疑项（`numstat` 增删相等）
- [ ] 未纳入 hypium / autosign / build / advancedComponents/**/tools/
- [ ] **`build-profile.json5` 的 `compileSdkVersion`/`targetSdkVersion` 为 `"26.0.0"` 字符串**（禁止数字；本地 00306042 仅临时改工作区，提交前恢复；`git-commit-agent.sh` 会拦截）
- [ ] 存疑路径已问用户
- [ ] 仅 `git add` 明确路径

### 3. 暂存

```bash
git add path/to/FileA.ets path/to/FileB.test.ets
```

### 4. 提交（`-sm` + Agent）

```bash
git commit -sm "$(cat <<'EOF'
test(chip-static): ChipGroup SystemMaterial 正常与异常用例

覆盖 backgroundSystemMaterial 正常值及 undefined 成对场景，设备验证通过。
EOF
)"
```

| 字段 | 要求 |
|------|------|
| 命令 | **`git commit -sm`**（禁止 `-m` 无 `-s`） |
| 类型前缀 | `test` / `fix` / `style` / `refactor` / `chore` |
| 范围 | 工程简称，如 `chip-static`、`api18-static` |
| 正文 | 1～2 句 **why** |
| Sign-off | `-s` → `Signed-off-by:`（GitCode Hook 常强制） |
| 合著 | **`Co-authored-by: Agent`** 在 **Signed-off-by 后空一行**（禁止 第三方 IDE） |

### 5. 提交后确认

```bash
git log -1 --format=full
git show --stat HEAD
```

### 6. Push

仅用户明确要求时 `git push`；改已 push 历史须 `--force-with-lease` 且获用户同意。

---

## 自动 Sign-off 辅助（不替代 `-sm`）

```bash
git config core.hooksPath .githooks   # 本仓，追加 Signed-off-by + 剥离 IDE 合著
```

Hook **补 Sign-off**、**剥离 IDE 合著**、**Sign-off 后空一行写 Agent**；Agent 仍须 `-sm`。

---

## 排除项（不要提交）

- `entry/src/hypium/`（除非用户明确要求）
- 工程内 `autosign/`、`build/`、`*.hap`
- **advancedComponents `tools/`**：根 `.gitignore` 整目录忽略
- **仓库外工具**：`xts_acts_local_tools/<仓库名>/`（报告、gen 脚本）
- `local.properties`、密钥
- **从模板拷贝且未 regen 的 `signature/openharmony_sx.p7b`**（须 **`xts_shared/gen-xts-signature-p7b.sh`**；见 **ohxtsstatic §13.12** / **ohxtsdynamic §9.11** / **ohxtscapi §签名 Profile**）

**可提交**：经 gen 脚本生成、且 `strings p7b` 与 `AppScope/app.json5` bundleName **一致** 的 `signature/openharmony_sx.p7b`

---

## 编签签名环境（hap 证书，非 Git Sign-off）

```bash
source arkui/.../advancedComponents/signing-materials/env.sh
```

`OHOS_HAPSIGNER_RESULT` 必须指 `signing-materials/`，禁止指工程 `autosign/`。详见 ohxtsstatic §13.7 / ohxtsdynamic §9.2。

---

## 修复已 push 的假 diff / 超标 commit

1. `git branch backup/<name> <old-head>`
2. `git reset --hard <good-base>` 或交互拆分
3. 增量 `git apply` / 分批 `git add` + **每笔 `-sm` + Agent + <2000 行**
4. `git push --force-with-lease`（需用户同意）

---

## 可选：多作者拆分与历史重写（仅用户明确要求时）

> **默认不走本节。** 常规开发一律 **dongwei** 单作者提交（见 **§默认提交作者**）。  
> 本节适用于：用户**显式**要求多作者/指定日期/重写历史；或修正误纳入 `autosign/`、`hypium/` 的错误历史。

**典型显式要求示例**：「dongwei 1 笔 + bayanxing 3 笔各 ~300 行」「第 2～4 笔作者 bayanxing、日期 4/5/6 月」。

### 禁止：`git add $PROJ` / `git add <工程根目录>`

工程根下常有 **未跟踪** 的 `autosign/`、`entry/src/hypium/`（本地编签/调试拷贝）。对目录做 `git add` 会把它们**整目录纳入**，单笔可膨胀到 **9000+ 行 / 100+ 文件**。

| 禁止 | 必须 |
|------|------|
| `git add "$PROJ"` | **逐文件/逐子路径** `git add path/to/FileA.ets ...` |
| `git add -A` | 只 add **清单内** 已确认路径 |
| 拆 commit 时「整目录暂存省事」 | 每笔 commit 前 `git diff --cached --stat` 人工核对文件列表 |

**拆 commit 前自检**：

```bash
git diff --cached --stat | head -30
git diff --cached --shortstat
# 若出现 autosign/、hypium/、*.hap → 立即 git reset HEAD 对应路径
```

### 推荐拆分流程（4 笔示例）

```bash
BASE=<good-base-commit>   # 如 fbdc02b663f
OLD=<拆分前正确 tip>      # 如 47e4cb6013c
PROJ=arkui/.../ace_ets_module_dialog_AlertDalog_static
AGENT=/root/aiSkill/.claude/skills/xts-git-commit/scripts/git-commit-agent.sh

git reset --hard "$BASE"
# 从 OLD 恢复目标文件树（仅清单内路径，勿 checkout 整目录）
git checkout "$OLD" -- path/to/file1 path/to/file2 ...
git reset HEAD

# 第 1 笔：主作者主体（不含后续 bayanxing 文件）
git add <明确路径列表>
unset GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL
unset GIT_AUTHOR_DATE GIT_COMMITTER_DATE
export GIT_AUTHOR_DATE="..." GIT_COMMITTER_DATE="..."
"$AGENT" -sm -m "$(cat <<'EOF'
chore(scope): 主体说明
Co-authored-by: Agent
EOF
)"

# 第 2～N 笔：协作者（每笔 ~300 行量级）
git add <本笔文件>
export GIT_AUTHOR_NAME=bayanxing GIT_AUTHOR_EMAIL=bayanxing@kaihong.com
export GIT_COMMITTER_NAME=bayanxing GIT_COMMITTER_EMAIL=bayanxing@kaihong.com
export GIT_AUTHOR_DATE="Wed Apr 15 10:30:00 2026 +0800" GIT_COMMITTER_DATE="..."
"$AGENT" -sm -m "$(cat <<'EOF'
test(scope): 本笔说明
Signed-off-by: bayanxing <bayanxing@kaihong.com>
Co-authored-by: Agent
EOF
)"
```

### `GIT_AUTHOR_*` 环境变量污染（P0）

连续设置 `GIT_AUTHOR_NAME` / `GIT_AUTHOR_DATE` 做多作者 commit 后，**下一笔默认作者 commit 前必须 `unset`**，否则：

- 第 1 笔 dongwei 的 **Author** 误显示为 bayanxing
- **AuthorDate** 被最后一笔协作者日期覆盖

**每笔 commit 后核对**：

```bash
git log -1 --format='Author: %an <%ae> %ad | Committer: %cn'
```

### 拆分完成验收

```bash
git diff "$BASE"..HEAD --shortstat    # 须与拆分前一致，如 46 files, +2092
git log --oneline "$BASE"..HEAD       # 笔数、作者、日期符合预期
git show --stat HEAD~3 HEAD~2 HEAD~1 HEAD | grep -E '^(commit| .*\|)'
```

**合格信号**：总 diff 与拆分前相同；无 `autosign/`、`hypium/`；主作者笔 Author=主作者；协作者笔含 `Signed-off-by: bayanxing <bayanxing@kaihong.com>`。

**不合格须重做**（未 push：`reset --hard $BASE` 重来；已 push：`--force-with-lease` 须用户同意）。

### 行数分配参考（AlertDalog_static，**仅多作者拆分时**）

| 笔 | 作者 | 约行数 | 典型文件 |
|----|------|--------|----------|
| 1 | dongwei | ~1200 | BUILD.gn、工程配置、资源、common（除 Utils）、Util.test |
| 2 | bayanxing | ~294 | `OpenOrderOverlay.test.ets` + `List.test.ets` |
| 3 | bayanxing | ~293 | `OpenOrderOverlayTestPage.ets` + `OpenHarmonyTestRunner.ets` |
| 4 | bayanxing | ~302 | `Utils.ets` + `EntryAbility.ets` + `index/index.ets` |

协作者日期按**用户指定**；无指定时不伪造。案例细节见 **ohxtsstatic §13.11.6**。

---

## Agent 提交前自检（打印勾选）

```
[ ] xts_acts 工程：ohxtsflow gate-review "$PROJ" 已通过（G.FMT.05/@tc/用例间空行）
[ ] git diff --cached --shortstat 合计 < 2000
[ ] git commit -sm（不是 -m）
[ ] message **仅**含 Co-authored-by: Agent（无 第三方 IDE、无 ideagent@example.com）
[ ] git log -1：Signed-off-by: dongwei <dongwei@kaihong.com> → 空行 → Co-authored-by: Agent，**无** IDE 合著行
[ ] 未 git add -A；**未** git add 工程根目录变量（防 autosign/hypium 误入）
[ ] 未用 Write 整文件覆盖已有大文件
[ ] （**仅用户要求多作者时**）unset GIT_AUTHOR_*；拆分后 git diff BASE..HEAD --shortstat 与预期一致
[ ] （有 xdevice/hypium HAP 报告时）commit 后已交付 **一张** `summary_top.png`（多 HAP 只截合并页；最多 10 行 Module；已 Read 出图）
[ ] **禁止**仅贴 `REPORT_HTML=` 路径收工（无截图 = 未交付）
```
---

## napi_generator Skills 门禁（ohxtsstatic / ohxtsdynamic）

提交 **`/root/aiSkill/napi_generator`** 前，除上表外还须：

```
[ ] 已读 napi_generator/src/skills/CODECHECK.md
[ ] WordsTool：无忌讳词（见 CODECHECK 对照表）；可选 `bash src/skills/codecheck-words.sh`
[ ] Python：单函数 ≤50 行、圈复杂度 ≤20、dict 用 .get()
[ ] arkui-*-xts-generator/ 仅 README 入库
[ ] python3 -m py_compile 相关 *.py 通过
```

详细规则与替换表：**`napi_generator/src/skills/CODECHECK.md`**。  
误报与历次经验：**`/root/aiSkill/CODECHECK-NOTES.md`**。粗查脚本：**`napi_generator/src/skills/codecheck-words.sh`**。

---

## 与 ohxtsstatic / ohxtsdynamic / ohxtscapi 的关系

- **ohxtsstatic / ohxtsdynamic / ohxtscapi**：开发、编签、设备跑测、**门禁 review**（`gate-review` / pipeline 自动）；**新建工程 p7b** 见 **`xts_shared/SIGNATURE-P7B.md`**
- **本 skill**：**提交阶段** — `-sm`、Agent 合著、2000 行、diff 质量、排除项；**不替代** `xts_gate_review.py`，提交前须确认 gate 已跑

**存放路径（唯一正式约定）**：`/root/aiSkill/.claude/skills/` — 见该目录 `README.md`。
