# ohxtscapi：CAPI XTS 编译与运行期排障速查

与 **`SKILL.md`** 配套。覆盖 **Tier-1** 层；八类范式见 **`CATEGORY_ROUTING.md`** 与生成器 **`SKILL.md`**。

---

## 1. C++ / CMake / NAPI

| 现象 | 常见原因 | 处理 |
|------|----------|------|
| `OH_ArkUI_*` 未声明 | 头文件缺失或 API 版本不匹配 | 对照 SDK `native` 头文件与工程 `compileSdkVersion` |
| `napi_define_properties` 重复 | `NapiFuncInitTest.cpp` 未注册或重复注册 | 检查 `EXTERN_C_START` 块与 `.cpp` 中 `Init` |
| 链接 ArkUI Native 桥接库失败 | CMake `target_link_libraries` 缺 ace 相关项 | 对照同工程已有 `CMakeLists.txt` |
| C++ 编过、HAP 无 so | 未编入 entry 主模块 | 确认 `CMakeLists.txt` 在 entry 且 hvigor native 开启 |

## 2. 类别 / 库选错

| 现象 | 原因 | 处理 |
|------|------|------|
| Inspector 断言全失败 | 无页面 API 误用 render 库 | 回到 **CATEGORY_ROUTING** 改类别 |
| `nativeFunc.xxx` undefined | 用例 import 错库 | 无页面用 `libnativefunc.so`，有页面用 `libnativerender.so` |
| 回调 API 段错误 | 未在 UI 事件链中调用 | 改为类别 3/4/8，补页面与手势/拖拽触发 |

## 3. Hypium / 设备 / xtscheck

| 现象 | 处理 |
|------|------|
| `assertEqual(0)` 失败 | 读 C++ 返回值约定；对照 `SUCCESS` 宏与错误码 |
| **`nativeFunc` 为 null / Cannot load property** | **双 HAP**：Main assist + Test；`build-all` 先编 Main |
| 仅 C++ 改完未重编 HAP | **`ohxtscflow build-all`**（build + build-test + sign）再 `deploy-test` |
| 全量 List 误判新批次 | 开发调试 **`-s` 本批套件**；**工程整测**须一次 `deploy-test` 带齐全部 Suite |
| 多套件设备挂起 | **勿**把 `A,B` 塞进同一次 shell 的单个 `-s class`；用 **一次** `deploy-test -s A,B`（ohhdc **内部分次** aa test、**不重装**） |
| 拆多次 `deploy-test` 重装后本地全绿、CI 大失败 | **假绿**；改为 **一次装包连跑**（见 ohos-gate-compliance「设备整测硬门禁」） |
| `deploy-test` 超时无结果 | 检查是否误用「一次 shell 多 class」；应用 ohhdc 分次 aa test |
| xtscheck 缺 `@tc.name` | 禁止 `forEach` 注册 `it()`；每条用例显式 `/** @tc.* */` + `it()` |
| `@tc.name` 与用例名不一致 | 三者统一为 `SUB_*`：`@tc.name` = `@tc.number` = `it()` 首参 |
| assist HAP 配置不一致 | native 在 Main → 双 HAP；无 native → 单 Test HAP |
| **CI/GN 验签失败 / HAP 签名有问题** | 提交的是**模板拷贝** p7b | **SKILL §签名 Profile** / **`gen-xts-signature-p7b.sh`** |

完整清单见 **`PROJECT_CHECKLIST.md`**。

## 4. SystemMaterial / Dialog CAPI

| 现象 | 处理 |
|------|------|
| `native_material.h` / Dialog API 未声明 | SDK 26 `native/arkui/`；旧 SDK 本地可 `#include` 兜底或 stub（**勿入 PR**） |
| `NODE_SYSTEM_MATERIAL` 未定义 | API26 值为 **127**；旧头文件可用 `constexpr` 本地常量 |
| SetSystemMaterial 返回非 0 | 检查 Dialog API 版本；null dialog → 401；null material → 0（SUCCESS） |
| 设备全失败、无断言输出 | 优先查 **双 HAP 安装** 与 Main 是否含 `libnativefunc.so` |

## 5. 环境

```bash
source use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
source <工程>/signing-materials/env.sh   # 若有
python3 src/skills/ohxtscapi/ohxtscflow.py env
```
