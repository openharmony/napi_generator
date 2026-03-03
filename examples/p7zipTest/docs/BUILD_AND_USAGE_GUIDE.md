# p7zip 编译与使用指南（Windows + DevEco Studio）

本文档提供最小可执行流程，用于在 DevEco Studio 中自动完成 `lib7z.so` 构建并参与 `libentry.so` 链接。

---

## 1. 产物说明

- `entry/libs/<ABI>/lib7z.so`：p7zip 三方动态库（自动生成）
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

### 2.2 安装 GNU make（w64devkit）

变量说明（在后续步骤中会使用）：

- `<W64DEVKIT_ROOT>`：w64devkit 的安装根目录
- `<MAKE_EXE_PATH>`：`make.exe` 的完整绝对路径，通常为 `<W64DEVKIT_ROOT>/bin/make.exe`

示例：

- 若 `<W64DEVKIT_ROOT>` 为 `C:/software/MinGW-w64/w64devkit`
- 则 `<MAKE_EXE_PATH>` 为 `C:/software/MinGW-w64/w64devkit/bin/make.exe`

1. 从 [w64devkit Releases](https://github.com/skeeto/w64devkit/releases) 下载压缩包并解压到固定目录  
   例如：`C:/software/MinGW-w64/w64devkit`
2. 确认 `<W64DEVKIT_ROOT>/bin` 下存在 `make.exe`
3. 将 `<W64DEVKIT_ROOT>/bin` 加入系统 `Path`
4. 验证命令：

```powershell
make --version
```

如未加入 `Path`，可直接执行：

```powershell
"<MAKE_EXE_PATH>" --version
```

例如：

```powershell
"C:/software/MinGW-w64/w64devkit/bin/make.exe" --version
```

---

## 3. 配置工程

3.1 编辑 `entry/build-profile.json5`，确认 `externalNativeOptions`：

```json5
"externalNativeOptions": {
  "path": "./src/main/cpp_bootstrap/CMakeLists.txt",
  "arguments": "-DP7ZIP_MAKE=<MAKE_EXE_PATH> -DP7ZIP_PATCH_STRICT=ON",
  "cppFlags": "",
  "abiFilters": [
    "arm64-v8a",
    "armeabi-v7a",
    "x86_64"
  ]
}
```

参数说明：

- `<MAKE_EXE_PATH>` 必须替换为本机绝对路径
- 示例：`C:/software/MinGW-w64/w64devkit/bin/make.exe`
- 修改 `arguments` 后，建议先 clean 再 Build
- 可选：强制覆盖重建已有产物  
  `-DP7ZIP_REBUILD_IF_EXISTS=ON`
- 头文件 `entry/libs/include/p7zip` 会在预构建过程中由脚本自动同步，无需手动拷贝
- 头文件同步清单由 `entry/src/main/cmake/p7zip/scripts/header_manifest.cmake` 维护

---

## 4. 执行构建

在 DevEco Studio 中执行：

1. 打开工程 `p7zipTest`
2. 运行 `Build > Build Hap(s)/APP(s) > Build Hap(s)  `

构建流程会自动执行：

1. 下载 p7zip 源码包
2. 应用 `entry/src/main/cmake/p7zip/patches/000*.patch`
3. 编译并输出 `entry/libs/<ABI>/lib7z.so`
4. 编译 `libentry.so`

默认行为：

- 目标不存在时自动生成
- 目标已存在时默认跳过重建（`P7ZIP_REBUILD_IF_EXISTS=OFF`）

---

## 5. 构建结果校验

至少确认以下文件存在：

- `entry/libs/arm64-v8a/lib7z.so`
- `entry/libs/armeabi-v7a/lib7z.so`
- `entry/libs/x86_64/lib7z.so`

---

## 6. 常见问题

### 6.1 `MAKE_EXE was provided but does not exist`

`P7ZIP_MAKE` 配置路径无效。请改为真实存在的 `make.exe` 绝对路径。

### 6.2 `make is required to build p7zip`

系统未找到 make。请安装 w64devkit 并配置 `P7ZIP_MAKE` 或 `Path`。

### 6.3 `Patch does not apply cleanly` / `Patch skipped`

通常为补丁与源码基线不一致，或补丁工具链异常。优先检查：

- `entry/src/main/cmake/p7zip/patches/UPSTREAM_COMMIT.txt`
- `entry/src/main/cmake/p7zip/patches/000*.patch`

### 6.4 `missing and no known rule to make it`

通常为构建规则缺失。请确认 `entry/src/main/cpp_bootstrap/CMakeLists.txt` 未删除预构建相关规则。

### 6.5 头文件同步后仍编译报错

若报错出现在 `entry/libs/include/p7zip` 下，请检查：

- `entry/src/main/cmake/p7zip/scripts/header_manifest.cmake` 是否包含所需头文件
- 预构建是否实际执行（日志中应出现 `[p7zip-prebuild] Synced headers`）
- 修改 `header_manifest.cmake` 后，建议执行 `clean + rebuild`
