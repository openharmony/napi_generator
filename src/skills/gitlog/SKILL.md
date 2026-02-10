---
name: gitlog
description: "Git log skill for analyzing commit history, generating git status reports, and working with git repositories. Use when users need to: view commit history (log, log-stat, log-patch, log-file, log-range, log-first-parent), check repository status (status), generate git reports (report), auto commit and push with Signed-off-by (commit, default -s; push), sign existing commits (sign-commits), configure token (config-token), or check/fix copyright headers (check-copyright). Entry script: gitlog.py."
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
║  DEBUG: Location: .claude/skills/gitlog/SKILL.md            ║
╚══════════════════════════════════════════════════════════════╝
```

> **Author**: Created by user  
> **Created**: 2026-01-20  
> **Version**: 1.0.0  
> **Proof of Ownership**: This skill was created and customized for VK-GL-CTS project

This skill provides capabilities for working with Git repositories, including viewing commit history, checking repository status, and generating git-related reports.

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

**Advanced queries:**
- "查看两个标签之间的提交" → Uses `log-range` command
- "生成 CTS 提交需要的 git log 文件" → Uses `report` command with `--first-parent`
- "查看某个文件的提交历史" → Uses `log-file` command

**Commit and push:**
- "用 gitlog 技能提交本项目修改" / "提交项目的修改" → Uses `commit` (default Signed-off-by, then auto push)
- "提交并推送，不要 Signed-off-by" → Uses `commit --no-sign "message"`
- "推送到远程" → Uses `push`

**Sign and tooling:**
- "为最近 5 个提交补 Signed-off-by" → Uses `sign-commits HEAD~5..HEAD`
- "检查/修复源码版权头" → Uses `check-copyright [--fix] [--dry-run]`
- "配置 Git 令牌" → Uses `config-token username token`

### How It Works:

1. **You ask a question** in natural language (English or Chinese)
2. **AI assistant recognizes** it's a git-related task
3. **AI assistant uses** the gitlog skill knowledge to execute the appropriate command
4. **Results are shown** with debug information proving it's your custom skill

**No need to remember commands!** Just ask naturally, and the assistant will handle it.

## Quick Start - Using the Script (gitlog.py)

You can use the skill with specific commands and operations:

```bash
# Basic usage（工程内使用 src/skills 路径，或拷贝到 .claude/skills 后替换为 .claude/skills/gitlog/gitlog.py）
python3 src/skills/gitlog/gitlog.py <command> [arguments]

# Examples:
python3 src/skills/gitlog/gitlog.py status              # Show git status
python3 src/skills/gitlog/gitlog.py log 5               # Show last 5 commits
python3 src/skills/gitlog/gitlog.py log-oneline 20      # Show last 20 commits (one-line)
python3 src/skills/gitlog/gitlog.py log-stat 10         # Show last 10 commits with stats
python3 src/skills/gitlog/gitlog.py log-patch 5         # Show last 5 commits with full diff
python3 src/skills/gitlog/gitlog.py log-file CMakeLists.txt  # Show log for specific file
python3 src/skills/gitlog/gitlog.py report v1.4.4.0    # Generate git reports
python3 src/skills/gitlog/gitlog.py help                # Show help message
```

**Available Commands（与 gitlog.py 一致）:**

| 命令 | 说明 |
|------|------|
| `status` | 查看 git status |
| `log [n]` | 最近 n 条提交（默认 10），单行格式 |
| `log-oneline [n]` | 同上 |
| `log-stat [n]` | 最近 n 条提交及文件统计 |
| `log-patch [n]` | 最近 n 条提交及完整 diff |
| `log-file <file>` | 指定文件的提交历史 |
| `log-range <from>..<to>` | 两引用之间的提交（如 tag1..tag2） |
| `log-first-parent <range>` | 带 --first-parent 的 log（如 tag^..HEAD） |
| `report [tag]` | 生成 git-status.txt、git-log.txt |
| **`commit [message] [--no-sign]`** | **自动暂存、分批提交（≤2000 行/次）、默认 Signed-off-by，提交后自动 push；`--no-sign` 关闭签名** |
| **`push [remote] [branch]`** | **推送到远程（默认 origin 当前分支）** |
| **`sign-commits [range]`** | **为历史提交补 Signed-off-by（如 HEAD~5..HEAD）** |
| **`config-token [username] [token]`** | **配置 Git 凭据（PAT 写入 remote URL）** |
| **`check-copyright [--fix] [--dry-run]`** | **检查/修复源码版权头（.ets/.h/.cpp/.c/.d.ts）** |
| `help` | 显示帮助 |

**调用方式**：本技能入口为 **`gitlog.py`**（无 gitlog.sh），在工程根目录执行：
```bash
python3 src/skills/gitlog/gitlog.py <command> [arguments]
# 或拷贝到 .claude/skills 后：
python3 .claude/skills/gitlog/gitlog.py <command> [arguments]
```

**Examples for range / commit / push:**
```bash
# 标签之间、first-parent
python3 src/skills/gitlog/gitlog.py log-range v1.4.3..v1.4.4
python3 src/skills/gitlog/gitlog.py log-first-parent v1.4.4.0^..HEAD

# 提交并推送（默认 Signed-off-by）
python3 src/skills/gitlog/gitlog.py commit "feat: add xxx"
python3 src/skills/gitlog/gitlog.py commit --no-sign "docs: update"

# 补签历史、推送、版权检查
python3 src/skills/gitlog/gitlog.py sign-commits HEAD~5..HEAD
python3 src/skills/gitlog/gitlog.py push
python3 src/skills/gitlog/gitlog.py check-copyright --dry-run
python3 src/skills/gitlog/gitlog.py check-copyright --fix
```

## Common Git Commands

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
# Verify skill exists
ls -la .claude/skills/gitlog/SKILL.md

# Check skill content
cat .claude/skills/gitlog/SKILL.md | head -10

# Test skill loading
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
**Location**: `.claude/skills/gitlog/SKILL.md`  
**Original Source**: Custom skill created for VK-GL-CTS project workflow

This skill was created to provide git log analysis capabilities specifically for the VK-GL-CTS repository management and CTS submission workflow.
