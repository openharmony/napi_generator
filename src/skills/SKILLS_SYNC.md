# Skills 目录策略与同步

## 主仓（远端提交）：napi_generator

| 目录 | 角色 | 随 Git 提交 |
|------|------|-------------|
| **`/root/aiSkill/napi_generator/src/skills`** | **技能主仓（canonical）**；用户 push 远端的目标 | 是（napi_generator） |
| **`/root/aiSkill/.claude/skills`** | Agent **运行时镜像** | 部分 |

**以后优化 skill：先改 `napi_generator/src/skills`，再 `sync-skills.sh pull-xts`（或 `pull`）同步到 `.claude`。**  
禁止长期只改 `.claude` 运行时副本导致远端仓落后。

---

## 三类技能归属

### A. XTS 三件套（napi 为主仓 → pull-xts 到 `.claude`）

| Skill | 说明 |
|-------|------|
| `ohxtsstatic` | 静态 ArkUI + Hypium |
| `ohxtsdynamic` | 动态 ChipV2/CounterV2 等 |
| `ohxtscapi` | ArkUI CAPI（C++ NAPI + Hypium） |

→ **先在 napi 改** → `./sync-skills.sh pull-xts`

### B. OH 工具链（napi 为主仓 → pull 到 `.claude`）

`ohhap`、`ohhdc`、`ohbuild`、`ohclitools`、`ohtest`、`ohproj`、…  

→ `./sync-skills.sh pull`

### C. 运行时专用（可仅在 `.claude/skills`；若要进远端须拷入 napi）

| Skill | 说明 |
|-------|------|
| `xts-git-commit` | 提交规范（含 commit 后 xdevice 截图义务） |
| `xts-develop-master-cycle` | develop→master、GN、xdevice 报告与截图脚本 |
| `ohos-gate-compliance` / `ohos-gate-compliance-pr-check` | 门禁 |

社区 skill（pdf/docx 等）只在 `.claude`。

---

## 同步命令

```bash
# OH 工具链：napi → .claude
/root/aiSkill/.claude/skills/sync-skills.sh pull

# XTS 三件套：napi → .claude（技能优化后必跑）
/root/aiSkill/.claude/skills/sync-skills.sh pull-xts

# 查看差异
/root/aiSkill/.claude/skills/sync-skills.sh diff
```

`push-xts` 已改为 **pull-xts 别名**（兼容旧习惯）；**不再**支持从 `.claude` 反推 napi。

---

## 运行时符号链接

编辑器侧 `skills/<name>` 目录应 **symlink** 到 `/root/aiSkill/.claude/skills/<name>`（指向运行时镜像）。

---

## HTML / 截图（三件套共用）

见各 skill **REPORTING.md**：对外只认 xdevice `summary_report.html`；commit 后一张 `summary_top.png`（多 HAP 只截合并页，最多 10 行 Module）。
