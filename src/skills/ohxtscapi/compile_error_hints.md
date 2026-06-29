# ohxtscapi：CAPI XTS 编译与运行期排障速查

与 **`SKILL.md`** 配套。覆盖 **Tier-1** 层；八类范式见 **`CATEGORY_ROUTING.md`** 与生成器 **`SKILL.md`**。

---

## 1. C++ / CMake / NAPI

| 现象 | 常见原因 | 处理 |
|------|----------|------|
| `OH_ArkUI_*` 未声明 | 头文件缺失或 API 版本不匹配 | 对照 SDK `native` 头文件与工程 `compileSdkVersion` |
| `napi_define_properties` 重复 | `NapiFuncInitTest.cpp` 未注册或重复注册 | 检查 `EXTERN_C_START` 块与 `.cpp` 中 `Init` |
| 链接 `libace_ndk.z.so` 失败 | CMake `target_link_libraries` 缺项 | 对照同工程已有 `CMakeLists.txt` |
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
| 仅 C++ 改完未重编 HAP | **`ohxtscflow build-all`**（build + build-test + sign）再 `deploy-test` |
| 全量 List 误判 | **`-s` 只跑本批套件**；多套件逗号分隔时 ohhdc **分次** aa test |
| `deploy-test` 超时无结果 | 勿单次 `-s class A,B`；已修复为分套件顺序执行 |
| xtscheck 缺 `@tc.name` | 禁止 `forEach` 注册 `it()`；每条用例显式 `/** @tc.* */` + `it()` |
| `@tc.name` 与用例名不一致 | 三者统一为 `SUB_*`：`@tc.name` = `@tc.number` = `it()` 首参 |
| assist HAP 多余 | 无依赖时删 `ohos_app_assist_suite`，`Test.json` 仅 `Acts*Test.hap` |

完整清单见 **`PROJECT_CHECKLIST.md`**。

## 4. 环境

```bash
source use-ohos-sdk.sh normal
unset OHOS_USE_HVIGOR_STATIC
source <工程>/signing-materials/env.sh   # 若有
python3 src/skills/ohxtscapi/ohxtscflow.py env
```
