# XTS 新建工程：signature/openharmony_sx.p7b（三 skill 共用 P0）

**已两次事故**（静态 AlertDalog_static 误拷 button_static p7b → 接口人验签失败）。**第三次禁止**。

## 适用范围

| Skill | 工程类型 | 典型路径 |
|-------|----------|----------|
| **ohxtsstatic** | 静态一体 HAP | `ace_ets_module_*_static` |
| **ohxtsdynamic** | 动态双 HAP（Main + Test） | `ace_ets_module_chip_nowear`、`ace_ets_module_menu` |
| **ohxtscapi** | CAPI 双 HAP（assist + Test + libnativefunc） | `ace_c_arkui_test_*` |

## 铁律

1. **禁止** `cp 模板工程/signature/openharmony_sx.p7b` 到新工程并 commit  
2. **禁止** 只改 `AppScope/app.json5` / `Test.json` bundle 不重做 p7b  
3. **禁止** 用 hapbuild 本地 `entry-default-signed.hap` 通过代替 p7b 校验  
4. **必须** 脚手架定好 bundleName 后**立即**运行 gen 脚本，再写业务代码  

## 命令（规范脚本）

### 给同事：拷到工程根一键生成（推荐）

- **证书**：已内嵌（无需配置签名材料）
- **hap-sign-tool.jar（约 13MB）**：与脚本同目录；不内嵌
- **Windows**：用 `gen-signature.bat` + `gen-signature.ps1`（二者同目录，缺一不可）
- **Linux/macOS**：用 `gen-signature.sh`

```text
# Windows（工程根）：
#   把这 3 个文件拷到工程根：gen-signature.bat、gen-signature.ps1、hap-sign-tool.jar
gen-signature.bat

# Linux：
#   gen-signature.sh + hap-sign-tool.jar → 工程根
bash gen-signature.sh
```

本机需 `java` 在 PATH。找不到 jar 时可设环境变量 `HAP_SIGN_TOOL_JAR`。  
脚本与 jar **不要提交进用例仓**；提交的是生成后的 `signature/openharmony_sx.p7b`。

### Agent / 本机直接指定工程根

```bash
bash /root/aiSkill/.claude/skills/xts_shared/gen-xts-signature-p7b.sh <工程根>
# 等价于 gen-signature.sh（前者会转发到后者）
strings <工程根>/signature/openharmony_sx.p7b | grep -o '"bundle-name":"[^"]*"'
grep bundleName <工程根>/AppScope/app.json5
# 两者须完全一致
```

## 动态 / CAPI 双 HAP 说明

- Main assist 与 Test **共用** 同一 `signature/openharmony_sx.p7b`  
- p7b 内 `bundle-name` = **`AppScope/app.json5` 的 bundleName**（与 Test.json `bundle-name` 一致）  
- 从 parallelize / chip / button 模板拷贝后 **必须 regen**，不能「沿用 parallelize bundle」  

## Agent 提交前

diff 含 `signature/openharmony_sx.p7b` → 须说明已跑 gen 脚本；bundle 不一致 → **禁止 push**。

详见各 skill：**ohxtsstatic §13.12**、**ohxtsdynamic §9.11**、**ohxtscapi §签名 Profile**。
