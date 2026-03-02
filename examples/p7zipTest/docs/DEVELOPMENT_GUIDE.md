# DEVELOPMENT GUIDE

本指南面向维护本工程的开发者，覆盖代码结构、扩展方式、调试方法和提交流程。

## 1. 工程结构与职责

`entry/src/main` 下与核心能力相关的目录：

- `cpp/`：业务 Native 代码，负责压缩/解压能力与 NAPI 暴露
- `cpp_bootstrap/`：Native 构建入口，负责触发 `lib7z.so` 预构建
- `cmake/p7zip/patches/`：p7zip 补丁与上游基线
- `cmake/p7zip/scripts/`：下载、打补丁、编译三方库脚本
- `ets/`：UI 页面与 ArkTS 侧封装

构建关键链路：

1. `entry/build-profile.json5` 指向 `cpp_bootstrap/CMakeLists.txt`
2. `cpp_bootstrap` 调用预构建脚本生成 `entry/libs/<ABI>/lib7z.so`
3. `cpp/CMakeLists.txt` 链接 `lib7z.so` 编译 `libentry.so`

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

注意：

- 优先通过 patch 文件维护变更，不建议在下载源码上做临时手改
- 脚本参数修改后建议 clean + build，避免旧缓存影响

## 6. 调试建议

常见问题与定位路径：

- `MAKE_EXE was provided but does not exist`
  - 检查 `entry/build-profile.json5` 中 `P7ZIP_MAKE`
- `Patch does not apply cleanly`
  - 检查 `patches/UPSTREAM_COMMIT.txt` 与 `000*.patch`
- `missing and no known rule to make it`
  - 检查 `cpp_bootstrap/CMakeLists.txt` 是否保留预构建规则

