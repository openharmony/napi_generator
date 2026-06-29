# napi_generator Skills 提交前 CodeCheck 清单

提交 `src/skills/ohxtsstatic`、`ohxtsdynamic` 或新增 skill 前，**本地先过一遍**，减少 GitCode 门禁驳回。

配合 **`xts-git-commit`**（`-sm`、Co-authored-by: Agent、单笔 <2000 行）使用。

---

## 1. WordsTool（文档敏感词）

| 避免 | 改用 |
|------|------|
| `绝对路径` | `完整路径` |
| `绝对优先` / `权威` | `SDK 优先` / `基准` |
| `首选` | `推荐` |
| `永远` | `始终` |
| `其他仓库` | `外部仓库` |
| `Cursor`（IDE 名） | `IDE` |
| `L0`/`L1`/`L2`/`L3` | `Tier-0`/`Tier-1`/`Tier-2`/`Tier-3` |
| 正文写 `aa test` | `unittest 设备命令` 或 `ohhdc static-deploy-test` |

**代码块**：优先写 `ohxtsflow` / `ohhdc` 封装命令，避免在文档中裸写 shell 子命令。

**生成器目录**：仅提交 `arkui-*-xts-generator/README.md`，正文外置下载（见 `.gitignore`）。

---

## 2. Python 规范

| 规则 | 要求 |
|------|------|
| 函数行数 | 单函数 ≤ **50** 行（含空行） |
| 圈复杂度 | ≤ **20** |
| 嵌套深度 | ≤ **4** |
| dict 取值 | 用 `.get()`，禁止 `handlers[key]` 无保护 |

大函数拆分示例：`hypium_html_report.parse_unittest_device_log`、`ohxtsflow._add_device_test_parsers`。

---

## 3. 提交前命令

```bash
cd /root/aiSkill/napi_generator

# 行数审计
git diff --cached --shortstat   # 须 < 2000

# Python 语法
python3 -m py_compile src/skills/ohxtsstatic/*.py src/skills/ohxtsdynamic/*.py

# 敏感词粗查（可选）
rg -n '绝对路径|权威|Cursor 侧|`aa test`|[^a-z]L0[^0-9]' src/skills/ohxtsstatic src/skills/ohxtsdynamic || true
```

---

## 4. 与 Cursor 侧同步

- **开发主目录**：`/root/aiSkill/.claude/skills/`
- **提交目标仓**：`napi_generator` → `git@gitcode.com:nicklaus0602/napi_generator.git`
- 同步：`sync-skills.sh push-xts`（ohxtsstatic）；ohxtsdynamic 手动 rsync 或同流程

**提交顺序**：先 CodeCheck → 再 `git commit -sm` → 用户要求时再 `git push`。
