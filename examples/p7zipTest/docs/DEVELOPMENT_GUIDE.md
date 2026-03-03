# DEVELOPMENT GUIDE

本指南面向维护本工程的开发者，覆盖代码结构、扩展方式、调试方法和提交流程。

## 1. 工程结构与职责

`entry/src/main` 下与核心能力相关的目录：

- `cpp/`：业务 Native 代码，负责压缩/解压能力与 NAPI 暴露
- `cpp_bootstrap/`：Native 构建入口，负责触发 `lib7z.so` 预构建
- `cmake/p7zip/patches/`：p7zip 补丁与上游基线
- `cmake/p7zip/scripts/`：下载、打补丁、编译三方库脚本
- `ets/`：UI 页面与 ArkTS 侧封装

构建关键链路（CMake 调用流程）：

1. **入口配置（DevEco -> CMake）**  
   `entry/build-profile.json5` 的 `externalNativeOptions.path` 指向 `entry/src/main/cpp_bootstrap/CMakeLists.txt`，Native 构建从 bootstrap 工程启动。

2. **configure 阶段：先执行预构建脚本**  
   `cpp_bootstrap/CMakeLists.txt` 在 `include(prebuild_lib7z.cmake)` 时立即进入脚本流程：
   - 读取并校验关键参数（如 `OHOS_ARCH`、`OHOS_SDK`、`P7ZIP_MAKE`、`P7ZIP_MAKE_HINTS`）
   - 计算输出目标：`entry/libs/<ABI>/lib7z.so`
   - 当目标已存在且 `P7ZIP_REBUILD_IF_EXISTS=OFF` 时直接跳过，避免重复重建

3. **预构建脚本内部调用链（script mode）**  
   `prebuild_lib7z.cmake` 内部通过 `execute_process(... -P xxx.cmake)` 按顺序调用：
   - `apply_patches.cmake`：对解压后的上游 p7zip 源码应用 `patches/000*.patch`
   - `build_one_abi.cmake`：按当前 ABI 选择 target triple，调用 `makefile.gcc` 编译 `7z.so`，并复制为 `entry/libs/<ABI>/lib7z.so`
   - `header_manifest.cmake`：维护需要同步到 `entry/libs/include/p7zip` 的头文件清单（用于自动同步和校验）
   其中公共日志函数来自 `p7zip_log.cmake`。

4. **configure 阶段继续：配置业务 Native 目标**  
   预构建返回后，`cpp_bootstrap/CMakeLists.txt` 再 `add_subdirectory(../cpp)`，进入 `entry/src/main/cpp/CMakeLists.txt` 配置 `entry` 目标（`libentry.so`）。

5. **build 阶段：兜底规则与依赖顺序**  
   `cpp_bootstrap/CMakeLists.txt` 使用 `add_custom_command(OUTPUT lib7z.so)` + `add_custom_target(p7zip_prebuild_lib7z)` 注册兜底规则；并通过 `add_dependencies(entry p7zip_prebuild_lib7z)` 确保 `entry` 构建前 `lib7z.so` 可用。

6. **最终链接关系**  
   `cpp/CMakeLists.txt` 中 `entry` 目标直接链接 `entry/libs/<ABI>/lib7z.so`；若缺失会触发 fatal error，避免生成不可运行的 `libentry.so`。

## 2. 新增压缩/解压能力

建议按以下顺序进行扩展：

1. 在 `cpp/common/FormatDetector.*` 增加格式识别逻辑
2. 在 `cpp/compress/` 或 `cpp/decompress/` 增加具体处理流程
3. 在 `cpp/common/common.h` 或对应枚举中补充格式常量
4. 在 `cpp/napi/` 增加参数解析、回调与异常映射
5. 在 `ets/utils/` 增加 ArkTS 侧接口封装
6. 在 `docs/USAGE_EXAMPLES.md` 更新 API 与调用示例

## 3. 错误码与异常处理

错误码定义与映射建议统一集中在 `cpp/common/ErrorCodes.*`。

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

1. 更新 `entry/src/main/cmake/p7zip/patches/UPSTREAM_COMMIT.txt`
2. 重新构建并观察补丁应用结果
3. 修复或重做 `000*.patch`
4. 在三个 ABI 上完成回归验证
5. 若头文件集合发生变化，同步更新 `entry/src/main/cmake/p7zip/scripts/header_manifest.cmake`

## 5. 调试建议

常见问题与定位路径：

- `MAKE_EXE was provided but does not exist`
  - 检查 `entry/build-profile.json5` 中 `P7ZIP_MAKE`
- `Patch does not apply cleanly`
  - 检查 `patches/UPSTREAM_COMMIT.txt` 与 `000*.patch`
- `missing and no known rule to make it`
  - 检查 `cpp_bootstrap/CMakeLists.txt` 是否保留预构建规则

