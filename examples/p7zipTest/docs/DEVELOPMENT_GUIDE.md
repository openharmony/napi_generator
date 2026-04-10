# DEVELOPMENT GUIDE

本指南面向维护本工程的开发者，覆盖代码结构、扩展方式、调试方法和提交流程。

## 1. 工程结构与职责

`entry/src/main` 下与核心能力相关的目录：

- `cpp/`：Native 总入口（`CMakeLists.txt`）和 C++ 层
- `cpp/wrapper/`：业务 Native 代码，负责压缩/解压能力与 NAPI 暴露
- `cpp/thirdparty/source/`：下载并保留的 p7zip 源码
- `cpp/thirdparty/patch/`：合并补丁与上游基线
- `cpp/thirdparty/patch/scripts/`：下载、打补丁、编译三方库脚本
- `ets/`：UI 页面与 ArkTS 侧封装

构建关键链路（CMake 调用流程）：

1. **入口配置（DevEco -> CMake）**  
   `entry/build-profile.json5` 的 `externalNativeOptions.path` 指向 `entry/src/main/cpp/CMakeLists.txt`，Native 构建从该入口启动。

2. **配置阶段（configure）：先执行预构建脚本**  
   `cpp/CMakeLists.txt` 在 `include(prebuild_lib7z.cmake)` 时立即进入脚本流程：
   - 读取 `cpp/CMakeLists.txt` 中 `P7ZIP_HOST_*` 的宿主工具完整路径，并校验 `OHOS_ARCH`、`OHOS_SDK`
   - 计算输出目标：`entry/src/main/cpp/thirdparty/source/<ABI>/lib7z.so`
   - 当目标已存在且 `P7ZIP_REBUILD_IF_EXISTS=OFF` 时直接跳过，避免重复重建

3. **预构建脚本内部调用链（script mode）**  
   `prebuild_lib7z.cmake` 内部通过 `execute_process(... -P xxx.cmake)` 按顺序调用：
   - `apply_patches.cmake`：对解压后的上游 p7zip 源码应用 `cpp/thirdparty/patch/ohos-all.patch`
   - 直接调用上游 `CPP/7zip/Bundles/Format7zF/makefile.gcc` 编译 `7z.so`，并复制为 `entry/src/main/cpp/thirdparty/source/<ABI>/lib7z.so`
   其中公共日志函数来自 `p7zip_log.cmake`。

4. **配置阶段（configure）继续：配置业务 Native 目标**  
   预构建返回后，`entry/src/main/cpp/CMakeLists.txt` 继续配置 `entry` 目标（`libentry.so`）。

5. **构建阶段（build）：兜底构建规则与依赖顺序**  
   `cpp/CMakeLists.txt` 使用 `add_custom_command(OUTPUT lib7z.so)` + `add_custom_target(p7zip_prebuild_lib7z)` 注册兜底构建规则；并通过 `add_dependencies(entry p7zip_prebuild_lib7z)` 确保 `entry` 构建前 `lib7z.so` 可用。

6. **链接关系**  
   `cpp/CMakeLists.txt` 中 `entry` 目标直接链接 `entry/src/main/cpp/thirdparty/source/<ABI>/lib7z.so`；若缺失会触发 fatal error，避免生成不可运行的 `libentry.so`。

## 2. 新增压缩/解压能力

建议按以下顺序进行扩展：

1. 在 `cpp/wrapper/common/FormatDetector.*` 增加格式识别逻辑
2. 在 `cpp/wrapper/compress/` 或 `cpp/wrapper/decompress/` 增加具体处理流程
3. 在 `cpp/wrapper/common/common.h` 或对应枚举中补充格式常量
4. 在 `cpp/wrapper/napi/` 增加参数解析、回调与异常映射
5. 在 `ets/utils/` 增加 ArkTS 侧接口封装
6. 在 `docs/USAGE_EXAMPLES.md` 更新 API 与调用示例

## 3. 错误码与异常处理

错误码定义与映射建议统一集中在 `cpp/wrapper/common/ErrorCodes.*`。

示例：

```cpp
#include "common/ErrorCodes.h"

ErrorCode code = ErrorCode::FILE_NOT_FOUND;
std::string message = GetErrorMessage(code);
int errorNumber = static_cast<int>(code);
```

维护原则：

- Native 内部异常统一转换为错误码 + 可读消息
- NAPI 输出结构字段保持稳定（避免上层解析兼容性问题）
- 新增错误码同步更新 `docs/ERROR_CODES_REFERENCE.md`


## 4. 三方库与补丁维护

当需要升级 p7zip 基线时：

1. 更新 `entry/src/main/cpp/thirdparty/patch/UPSTREAM_COMMIT.txt`
2. 重新构建并观察补丁应用结果
3. 修复或重做 `ohos-all.patch`
4. 在三个 ABI 上完成回归验证
5. 若三方库基线变化导致 API 变化，请核对 `entry/src/main/cpp/CMakeLists.txt` 的 `_P7ZIP_SRC` 与 include 路径是否仍匹配源码结构（`CPP` / `CPP/7zip` / `CPP/7zip/Archive`）

## 5. 调试建议

常见问题与定位路径：

- 宿主工具路径无效或缺失
  - 检查 `entry/src/main/cpp/CMakeLists.txt` 中 `P7ZIP_HOST_*`（唯一用户路径配置入口）
- `Patch does not apply cleanly`
  - 检查 `cpp/thirdparty/patch/UPSTREAM_COMMIT.txt` 与 `ohos-all.patch`
- `missing and no known rule to make it`
  - 检查 `cpp/CMakeLists.txt` 是否保留预构建规则

## 6. 可继续优化点（非必须）

以下优化属于可读性/可维护性增强，不影响当前可用流程：

- 将 `cpp/CMakeLists.txt` 中 `_p7zip_prebuild_defs` 的公共参数抽成小函数，减少参数漂移风险
- 在 `prebuild_lib7z.cmake` 中增加 `P7ZIP_TARBALL_URL` 的本地文件路径存在性提示，便于离线构建排错
- 增加一段 `docs` 中的“升级 p7zip 基线 checklist”（改 `UPSTREAM_COMMIT.txt`、重做 patch、三 ABI 回归）模板，降低维护门槛

