# p7zip 编译与使用指南（Windows + DevEco Studio）

本文档提供可执行流程，用于在 DevEco Studio 中自动完成 `lib7z.so` 构建并参与 `libentry.so` 链接。

---

## 1. 产物说明

- `entry/src/main/cpp/thirdparty/source/<ABI>/lib7z.so`：p7zip 三方动态库（自动生成）
- `libentry.so`：业务 NAPI 动态库（链接 `lib7z.so`）

支持 ABI：

- `arm64-v8a`
- `armeabi-v7a`
- `x86_64`

---

## 2. 环境准备

### 2.1 安装 DevEco 与 OpenHarmony SDK

- DevEco Studio（DevEco Studio 5.0.2 Release）
- OpenHarmony Native SDK（API 18+）

确认 SDK 目录包含：

- `<OHOS_SDK>/native/llvm`
- `<OHOS_SDK>/native/sysroot`

### 2.2 配置宿主工具路径（make / git / patch）

DevEco 拉起 CMake 时 `PATH` 往往不完整，本项目**不再**自动搜索可执行文件。请在工程中编辑（唯一入口）：

`entry/src/main/cpp/CMakeLists.txt`

填写 `P7ZIP_HOST_*` 变量的**完整路径**：

- `P7ZIP_HOST_MAKE`：`make.exe` 完整路径
- `P7ZIP_HOST_GIT`：`git.exe` 完整路径
- `P7ZIP_HOST_PATCH`：`patch.exe` 完整路径
- `P7ZIP_HOST_SH`（可选，建议）：`sh.exe` 完整路径

例如用户环境中 make 目录为 `C:/software/MinGW-w64/w64devkit/bin`，则：

- `P7ZIP_HOST_MAKE = C:/software/MinGW-w64/w64devkit/bin/make.exe`

---

## 3. 配置工程

3.1 编辑 `entry/build-profile.json5`，确认 `externalNativeOptions`（无需再传 `make` 路径）：

```json5
"externalNativeOptions": {
  "path": "./src/main/cpp/CMakeLists.txt",
  "arguments": "-DP7ZIP_PATCH_STRICT=ON",
  "cppFlags": "",
  "abiFilters": [
    "arm64-v8a",
    "armeabi-v7a",
    "x86_64"
  ]
}
```

参数说明：

- 宿主工具路径仅在 `entry/src/main/cpp/CMakeLists.txt` 中配置
- 修改 `arguments` 或 `CMakeLists.txt` 中 `P7ZIP_HOST_*` 后，建议先 clean 再 Build
- 可选：强制覆盖重建已有产物  
  `-DP7ZIP_REBUILD_IF_EXISTS=ON`
- 下载得到的三方源码会保留在 `entry/src/main/cpp/thirdparty/source/`
- 预构建流程仅负责打补丁与编译 `lib7z.so`，不再同步头文件

可选参数（按需）：

- `-DP7ZIP_PREBUILD_AT_CONFIGURE=OFF`：关闭配置阶段（configure）的预构建脚本，仅依赖构建阶段（build）的兜底构建规则

---

## 4. 执行构建

在 DevEco Studio 中执行：

1. 打开工程 `p7zipTest`
2. 运行 `Build > Build Hap(s)/APP(s) > Build Hap(s)  `

构建流程会自动执行：

1. 下载 p7zip 源码包
2. 应用 `entry/src/main/cpp/thirdparty/patch/ohos-all.patch`
3. 编译并输出 `entry/src/main/cpp/thirdparty/source/<ABI>/lib7z.so`
4. 编译 `libentry.so`

更细的 CMake 调用链：

1. DevEco 根据 `entry/build-profile.json5` 启动 `entry/src/main/cpp/CMakeLists.txt`
2. `CMakeLists.txt` 先 `include(prebuild_lib7z.cmake)`，在配置阶段（configure）尝试生成 `lib7z.so`
3. `prebuild_lib7z.cmake` 调用 `apply_patches.cmake`，然后直接执行上游 `CPP/7zip/Bundles/Format7zF/makefile.gcc`
4. `CMakeLists.txt` 继续声明 `entry` 目标，并链接 `thirdparty/source/<ABI>/lib7z.so`
5. 构建阶段（build）通过 `add_custom_command(OUTPUT lib7z.so)` + `add_dependencies(entry p7zip_prebuild_lib7z)` 执行兜底构建规则

默认行为：

- 目标不存在时自动生成
- 目标已存在时默认跳过重建（`P7ZIP_REBUILD_IF_EXISTS=OFF`）

---

## 5. 构建结果校验

至少确认以下文件存在：

- `entry/src/main/cpp/thirdparty/source/arm64-v8a/lib7z.so`
- `entry/src/main/cpp/thirdparty/source/armeabi-v7a/lib7z.so`
- `entry/src/main/cpp/thirdparty/source/x86_64/lib7z.so`

---

## 6. 常见问题

### 6.1 宿主工具路径不存在或为空

检查 `entry/src/main/cpp/CMakeLists.txt` 中 `P7ZIP_HOST_MAKE` / `P7ZIP_HOST_GIT` / `P7ZIP_HOST_PATCH` 是否为真实存在的完整路径。

### 6.2 `make not found` / 补丁工具报错

确认已安装 Git for Windows / MSYS2 等并正确填写 `P7ZIP_HOST_*`；勿依赖 DevEco 进程的 `PATH`。

### 6.3 `Patch does not apply cleanly` / `Patch skipped`

通常为补丁与源码基线不一致，或补丁工具链异常。优先检查：

- `entry/src/main/cpp/thirdparty/patch/UPSTREAM_COMMIT.txt`
- `entry/src/main/cpp/thirdparty/patch/ohos-all.patch`

### 6.4 `missing and no known rule to make it`

通常为构建规则缺失。请确认 `entry/src/main/cpp/CMakeLists.txt` 未删除预构建相关规则。

### 6.5 头文件相关编译报错

当前头文件来自 `entry/src/main/cpp/thirdparty/source/p7zip-<commit>/CPP`。  
若出现头文件相关报错，请优先检查：

- `entry/src/main/cpp/CMakeLists.txt` 中 `_P7ZIP_SRC` 是否仍指向正确的源码目录
- 三方源码目录是否完整（尤其 `CPP/7zip`、`CPP/Common`、`C`）
- 升级 `UPSTREAM_COMMIT.txt` 后是否重新 clean + build
