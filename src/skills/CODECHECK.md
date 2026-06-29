# napi_generator Skills 提交前 CodeCheck 清单

提交 `src/skills/ohxtsstatic`、`ohxtsdynamic` 或新增 skill 前，**本地先过一遍**，减少 GitCode 门禁驳回。

配合 **`xts-git-commit`**（`-sm`、Co-authored-by: Agent、单笔 <2000 行）使用。

---

## 1. WordsTool（文档敏感词）

正文宜采用业界通用、语义明确的表述；下表为常见 **忌讳写法 → 推荐写法**（左列勿原样写入 skill 正文）：

| 忌讳表述类型 | 推荐 |
|-------------|------|
| 写死 `/root/...` 型主机路径字面量 | **完整路径** / **工程根** |
| 「独占优先」「在上位基准」类措辞 | **SDK 优先** / **基准** |
| 叠词式推荐措辞 | **推荐** |
| 强调长期不变的措辞 | **始终** |
| 非本仓 Git 托管处 | **外部仓库** |
| 商业 IDE 产品名 | **IDE** |
| 分层缩写「L」加数字（如 L 与 0 组合） | **Tier-0**～**Tier-3** |
| 设备 shell 应用测试原生命令字面量 | **unittest 设备命令** 或 **ohhdc static-deploy-test** |

**代码块**：优先写 `ohxtsflow` / `ohhdc` 封装命令，避免在文档中裸写 shell 子命令。

**生成器目录**：仅提交 `arkui-*-xts-generator/README.md`，正文外置下载（见 `.gitignore`）。

**中文「其」+「余」连用**：若与上表无关的固定目录名来自上游生成器，可改用「同类」「扩展」等表述，或见生成器目录实名。

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
bash src/skills/codecheck-words.sh
```

---

## 4. 与 IDE 侧同步

- **开发主目录**：`/root/aiSkill/.claude/skills/`
- **提交目标仓**：`napi_generator` → `git@gitcode.com:nicklaus0602/napi_generator.git`
- 同步：`sync-skills.sh push-xts`（ohxtsstatic）；ohxtsdynamic 手动 rsync 或同流程

**提交顺序**：先 CodeCheck → 再 `git commit -sm` → 用户要求时再 `git push`。
