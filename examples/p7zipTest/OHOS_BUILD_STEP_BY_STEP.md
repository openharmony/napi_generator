## OpenHarmony 交叉编译 p7zip 动态库（lib7z.so）

目标：在 Linux 主机上交叉编译生成 **OpenHarmony 可加载（dlopen 成功）** 的 `lib7z.so`，支持 **7z/zip 压缩与解压**（并避免 ZSTD/FL2 等第三方未定义符号导致加载失败）。

本仓库已“工程化”：
- 不需要手动改源码
- 自动下载上游基线（见 `ohos_patches/UPSTREAM_COMMIT.txt`）
- 自动应用 `ohos_patches/*.patch`
- 默认会在结束时自动删除工作目录 `.ohos_build_work/`（如需保留：设置 `KEEP_WORK_DIR=1`）

## 1. 前置条件（必须满足）

### 1.1 主机工具

```bash
sudo apt update
sudo apt install -y build-essential git curl patch
```

### 1.2 OpenHarmony SDK（已配置好也建议检查一眼）

下载OpenHarmony SDK，选择master 6.1.0或以上版本full sdk下载：

[每日构建 | OpenHarmony CI](https://ci.openharmony.cn/workbench/cicd/dailybuild/dailylist)

将下载的包解压后把linux文件夹拷贝到linux环境中，确认下面文件存在：

```bash
ls "你的SDK环境所在文件夹"/linux/native/llvm/bin/clang
ls "你的SDK环境所在文件夹"/linux/native/sysroot
```

### 1.3 准备编译脚本

下载 [编译脚本]() 解压到linux环境任意目录中，打开`ohos_build_script/build_ohos_simple.sh`脚本文件，确认`OpenHarmony SDK`路径为你的环境路径：

```bash
# OpenHarmony SDK 路径（可通过环境变量覆盖）
OHOS_SDK="${OHOS_SDK:-/home/kaihong/ohSDK/linux}"
```

如果你的机器路径不同，就把它们改成你自己的绝对路径（否则会编译到错误目录，或者找不到 SDK）。

## 2. 快速开始

```bash
cd 你下载的脚本路径
# 给脚本增加可执行权限
chmod +x ohos_build_script/*.sh
# 执行主脚本
./ohos_build_script/build_ohos_simple.sh
# 查看编译产物
ls -lh build_ohos/*/lib7z.so
```

成功后会生成：

```text
build_ohos/arm64-v8a/lib7z.so
build_ohos/armeabi-v7a/lib7z.so
build_ohos/x86_64/lib7z.so
```

## 3. 这套脚本做了什么？

`ohos_build_script/build_ohos_simple.sh` 流程：
1. 下载上游源码（commit 见 `ohos_patches/UPSTREAM_COMMIT.txt`），解压到 `.ohos_build_work/src/`
2. 应用 `ohos_patches/*.patch`（目的：裁剪外部依赖、提供 stub、避免 `dlopen` 因未定义符号失败）
3. 编译三架构并输出到 `build_ohos/<arch>/lib7z.so`
4. 结束时自动清理 `.ohos_build_work/`（默认开启）

> 想看补丁清单/意图：请看 `ohos_patches/README.md`（无需理解即可正常使用）。

## 4. 编译后验证

### 4.1 只允许依赖系统库（NEEDED）

```bash
SDK=/home/kaihong/ohSDK/linux  # 这里修改为你环境的OpenHarmony SDK路径
READELF=$SDK/native/llvm/bin/llvm-readelf

for arch in arm64-v8a armeabi-v7a x86_64; do
  echo "=== $arch NEEDED ==="
  $READELF -d build_ohos/$arch/lib7z.so | grep NEEDED
done
```

预期：仅看到 `libc++_shared.so`、`libc.so`

### 4.2 `dlopen` 硬条件：这些未定义符号必须为 0

```bash
SDK=/home/kaihong/ohSDK/linux  # 这里修改为你环境的OpenHarmony SDK路径
NM=$SDK/native/llvm/bin/llvm-nm

so=build_ohos/armeabi-v7a/lib7z.so
$NM -D "$so" | grep ' U ' | egrep 'FL2_|NZSTD|AesCbc_.*_HW' && echo FAIL || echo OK
```

预期输出：`OK`

## 5. 常见问题

### Q1：脚本下载上游源码失败（网络问题）

看日志：`build_simple_log.txt`  
建议：检查网络/代理，或重试。

### Q2：提示找不到 SDK/clang

用环境变量指定 SDK：

```bash
OHOS_SDK=/你的/ohSDK/linux ./ohos_build_script/build_ohos_simple.sh
```

### Q3：我想保留工作目录方便排查

```bash
KEEP_WORK_DIR=1 ./ohos_build_script/build_ohos_simple.sh
```
