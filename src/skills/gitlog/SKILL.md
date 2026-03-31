---
name: gitlog
description: "Git 仓库技能：status / log（条数、文件、范围、first-parent）/ report / branches；commit（默认先 check-style C/C++、Signed-off-by、成功后 push）/ push / sign-commits；check-style / check-copyright；config-token。用于查看历史、生成报告、风格与版权检查、提交推送。"
author: "Created by user"
created: "2026-01-20"
version: "1.0.0"
---

# Git Log Skill

```
╔══════════════════════════════════════════════════════════════╗
║  DEBUG: Git Log Skill v1.0.0                                ║
║  DEBUG: Author: Created by user                             ║
║  DEBUG: Created: 2026-01-20                                 ║
║  DEBUG: Status: ✓ Loaded and ready                          ║
║  DEBUG: Location: src/skills/gitlog/SKILL.md                ║
╚══════════════════════════════════════════════════════════════╝
```

> **Author**: Created by user  
> **Created**: 2026-01-20  
> **Version**: 1.0.0  
> **Proof of Ownership**: This skill was created and customized for VK-GL-CTS project

This skill provides capabilities for working with Git repositories, including viewing commit history, checking repository status, and generating git-related reports.

## 应用示例与提示词（中文）

在**被分析的 Git 仓库根目录**执行 `python3 <napi_generator>/src/skills/gitlog/gitlog.py …`，或在任意目录用脚本绝对路径。

| 场景 | 命令示例 | 提示词示例 |
|------|----------|------------|
| 工作区状态 | `python3 src/skills/gitlog/gitlog.py status` | 「看下当前仓库 git 状态」「有哪些未提交改动」 |
| 最近提交 | `python3 src/skills/gitlog/gitlog.py log 20` | 「列出最近 20 条提交」「最近一周谁提交了啥」 |
| 某文件历史 | `python3 src/skills/gitlog/gitlog.py log-file path/to/file` | 「这个文件的提交历史」 |
| 两标签之间 | `python3 src/skills/gitlog/gitlog.py log-range v1.4.3..v1.4.4` | 「v1.4.3 到 v1.4.4 之间有哪些 commit」 |
| CTS 式 first-parent | `python3 src/skills/gitlog/gitlog.py log-first-parent v1.4.4.0^..HEAD` | 「按 first-parent 打从发布标签到 HEAD 的 log」 |
| 生成报告文件 | `python3 src/skills/gitlog/gitlog.py report v1.4.4.0` | 「生成 git-status.txt 和 git-log.txt」 |
| 分支统计 | `python3 src/skills/gitlog/gitlog.py branches --remote` | 「统计远程分支有多少 weekly/feature」 |
| C/C++ 风格 | `python3 src/skills/gitlog/gitlog.py check-style` | 「对本次改动的 C++ 跑一下 check-style」 |
| 版权头 | `python3 src/skills/gitlog/gitlog.py check-copyright --dry-run` | 「检查版权头缺啥」 |
| 提交并推送 | `python3 src/skills/gitlog/gitlog.py commit "feat: xxx"` | 「用 gitlog 技能提交本次改动并推送」（Windows 可先设 `PYTHONUTF8=1`） |
| 凭据 | `python3 src/skills/gitlog/gitlog.py config-token user token` | 「配置 Gitee/GitCode token」 |

## Using Git Log Skill in Conversation

**The AI assistant automatically uses this skill when you ask git-related questions!**

Simply ask in natural language, and the assistant will use this skill to help you:

### Conversation Examples:

**Basic queries:**
- "Show git log" → Assistant uses skill to show recent commits
- "Show git status" → Assistant uses skill to check repository status
- "查看最近的提交" → Assistant uses skill to show recent commits

**Specific requests:**
- "Show last 10 commits" → Uses `log 10` command
- "Show git log with statistics" → Uses `log-stat` command
- "Show commits for CMakeLists.txt" → Uses `log-file` command
- "Show commits between v1.4.3 and v1.4.4" → Uses `log-range` command
- "Generate git report for CTS submission" → Uses `report` command
- "查看本项目有多少分支" → Uses `branches` command
- "列出所有本地分支" → Uses `branches --local` command
- "查看远程分支分类统计" → Uses `branches --remote` command

**Advanced queries:**
- "查看两个标签之间的提交" → Uses `log-range` command
- "生成 CTS 提交需要的 git log 文件" → Uses `report` command with `--first-parent`
- "查看某个文件的提交历史" → Uses `log-file` command
- "统计远程分支有多少 weekly / release / feature" → Uses `branches --remote` command

### How It Works:

1. **You ask a question** in natural language (English or Chinese)
2. **AI assistant recognizes** it's a git-related task
3. **AI assistant uses** the gitlog skill knowledge to execute the appropriate command
4. **Results are shown** with debug information proving it's your custom skill

**No need to remember commands!** Just ask naturally, and the assistant will handle it.

## Quick Start（在目标 Git 仓库根目录执行）

本仓库技能脚本路径：**`python3 <napi_generator 仓库根>/src/skills/gitlog/gitlog.py`**。若已 `cd` 到 napi_generator 根目录，可写 **`python3 src/skills/gitlog/gitlog.py`**。

```bash
# 基本用法
python3 src/skills/gitlog/gitlog.py <command> [arguments]

# 示例
python3 src/skills/gitlog/gitlog.py status
python3 src/skills/gitlog/gitlog.py log 5
python3 src/skills/gitlog/gitlog.py log-oneline 20
python3 src/skills/gitlog/gitlog.py log-stat 10
python3 src/skills/gitlog/gitlog.py log-patch 5
python3 src/skills/gitlog/gitlog.py log-file CMakeLists.txt
python3 src/skills/gitlog/gitlog.py report v1.4.4.0
python3 src/skills/gitlog/gitlog.py help
```

**C/C++ style (OpenHarmony-oriented):**
- `check-style` — scans **changed** `.cpp`/`.h`/`.hpp`/`.cc`/`.cxx` for: **G.CNS.02** (magic NAPI `argc`、`napi_value args[]` 栈长度，以及 **`args[0|1|2…]` 数字下标**，应改为 UPPER_SNAKE_CASE 如 `K_NAPI_ARG_INDEX_0`), **NAMING**（全局 `constexpr` 禁止 `kPascalCase`，须 `K_NAPI_*` 式大写）, **G.EXP.14-CPP** (no C-style casts), **LINE-LENGTH** (≤120 columns, excluding lines that are only `//` or block-comment `*` lines), **ONE-STATEMENT** (at most one top-level `;` per line; `for (...)` excluded；**禁止** `int64_t a = 0, b = 0;` 等同行多变量声明), **BRACE** (`if` 体必须用大括号，含换行写的单行体).
- `check-style --all` — same rules on all C/C++ files under the copyright scan roots (excludes `third_party`, `build`, etc.).
- `commit …` runs `check-style` on changed C/C++ first; use `commit --skip-style-check` only if you must bypass (not recommended).

```bash
python3 src/skills/gitlog/gitlog.py check-style
python3 src/skills/gitlog/gitlog.py check-style --all
```

**Available Commands:**
- `status` - Show git status
- `log [n]` - Show last n commits (default: 10) in one-line format
- `log-oneline [n]` - Show last n commits in one-line format
- `log-stat [n]` - Show last n commits with file statistics
- `log-patch [n]` - Show last n commits with full patch/diff
- `log-file <file>` - Show git log for specific file
- `log-range <from>..<to>` - Show commits between two references (e.g., `tag1..tag2`)
- `log-first-parent <range>` - Show commits with --first-parent option (e.g., `tag^..HEAD`)
- `report [tag]` - Generate git-status.txt and git-log.txt files
- `branches [--all|--local|--remote]` - List and count branches with categorized statistics
- `commit [message] [--no-sign] [--skip-style-check]` - 提交并默认 push（先 check-style）
- `push [remote] [branch]` / `sign-commits` / `config-token` / `check-copyright` - 见 `gitlog.py help`
- `help` - Show help message

**Examples for range queries:**
```bash
python3 src/skills/gitlog/gitlog.py log-range v1.4.3..v1.4.4
python3 src/skills/gitlog/gitlog.py log-first-parent v1.4.4.0^..HEAD
```

**Examples for branch queries:**
```bash
python3 src/skills/gitlog/gitlog.py branches
python3 src/skills/gitlog/gitlog.py branches --local
python3 src/skills/gitlog/gitlog.py branches --remote
```

## Common Git Commands

### Viewing Branches

```bash
# List all local branches
git branch

# List all local and remote branches
git branch -a

# List remote branches only
git branch -r

# Using gitlog skill (with category statistics):
python3 src/skills/gitlog/gitlog.py branches
python3 src/skills/gitlog/gitlog.py branches --local
python3 src/skills/gitlog/gitlog.py branches --remote
```

### Viewing Commit History

```bash
# Basic git log
git log

# One-line format
git log --oneline

# Show last N commits
git log -n 10

# Show commits with file changes
git log --stat

# Show commits with full diff
git log -p

# Show commits for specific file
git log -- <file_path>

# Show commits between tags/branches
git log <tag1>..<tag2>
git log --first-parent <release tag>^..HEAD

# Using gitlog skill for range queries:
python3 src/skills/gitlog/gitlog.py log-range <tag1>..<tag2>
python3 src/skills/gitlog/gitlog.py log-first-parent <release tag>^..HEAD
```

### Repository Status

```bash
# Check repository status
git status

# Short status format
git status -s

# Show untracked files
git status -u
```

### Generating Reports

For CTS submissions, you may need to generate git status and git log files:

```bash
# Generate git status file
git status > git-status.txt

# Generate git log file (for submissions)
git log --first-parent <release tag>^..HEAD > git-log.txt

# Using gitlog skill to generate reports:
python3 src/skills/gitlog/gitlog.py report <release tag>
# This automatically generates git-status.txt and git-log.txt

# Generate patches
git format-patch -o <output_dir> <release tag>..HEAD
```

## Usage Guidelines

- Use `git log` to analyze commit history and understand changes
- Use `git status` to check repository state before builds or submissions
- For CTS builds, ensure repository is clean (no uncommitted changes)
- When generating submission packages, include both git-status.txt and git-log.txt files
- Use `git cherry-pick -x` when applying bug fixes to include original commit hash

## Integration with CTS Workflow

According to CTS requirements:
- CTS builds must be done from clean git repository
- Capture `git status` and `git log` output for submission packages
- Use `git format-patch` to provide changes as part of submission package
- Commit messages must include clear descriptions of changes

## Debugging and Verification

### How to Verify Skill is Loaded

When you invoke this skill using `npx openskills read gitlog`, you should see:

```
DEBUG: Git Log Skill v1.0.0 loaded
DEBUG: Author: Created by user
DEBUG: Created: 2026-01-20
DEBUG: Skill is ready for use
```

### Debug Mode Commands

To verify the skill is working correctly, you can run these debug commands:

```bash
ls -la src/skills/gitlog/SKILL.md
head -10 src/skills/gitlog/SKILL.md
npx openskills read gitlog | grep -i "debug\|author\|version"
```

### Debug Output Format

When this skill is used, it will output debug information in the following format:
- **Skill Name**: gitlog
- **Version**: 1.0.0
- **Author**: Created by user
- **Status**: Active and ready

---

## Skill Metadata

**Author**: Created by user  
**Creation Date**: 2026-01-20  
**Version**: 1.0.0  
**Location**: `src/skills/gitlog/SKILL.md`  
**Original Source**: Custom skill created for VK-GL-CTS project workflow

This skill was created to provide git log analysis capabilities specifically for the VK-GL-CTS repository management and CTS submission workflow.
