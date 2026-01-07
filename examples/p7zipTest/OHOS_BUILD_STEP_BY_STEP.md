# OpenHarmony 交叉编译 p7zip 动态库（lib7z.so）

目标：在 Linux 主机上交叉编译生成 **OpenHarmony 可加载（dlopen 成功）** 的 `lib7z.so`，支持 **7z/zip 压缩与解压**（并避免 ZSTD/FL2 等第三方未定义符号导致加载失败）。

本教程基于的当前环境：
- OpenHarmony SDK：`/home/kaihong/ohSDK/linux`
- 源码目录：`/home/kaihong/buildP7zip/p7zip-master`
- 产物目录：`/home/kaihong/buildP7zip/p7zip-master/build_ohos`

---

## 1. 准备环境（必须）

### 1.1 安装基础工具

```bash
sudo apt update
sudo apt install -y build-essential git
```

### 1.2 准备 OpenHarmony SDK

下载OpenHarmony SDK，选择master 6.1.0或以上版本full sdk下载：

[每日构建 | OpenHarmony CI](https://ci.openharmony.cn/workbench/cicd/dailybuild/dailylist)

将下载的包解压后把linux文件夹拷贝到linux环境中，确认下面文件存在：

```bash
ls /home/kaihong/ohSDK/linux/native/llvm/bin/clang
ls /home/kaihong/ohSDK/linux/native/sysroot
```

---

## 2. 获取源码（两种方式选一种）

### 方式 A：git clone（推荐）

```bash
mkdir -p /home/kaihong/buildP7zip
cd /home/kaihong/buildP7zip
git clone https://github.com/p7zip-project/p7zip.git p7zip-master
cd p7zip-master
```

### 方式 B：下载源码压缩包

路径一：[github源码压缩包下载地址](https://github.com/p7zip-project/p7zip)

路径二：[p7zip源码压缩包下载](https://www.7-zip.org/download.html)

```bash
mkdir -p /home/kaihong/buildP7zip
cd /home/kaihong/buildP7zip
# 自行下载后解压到 p7zip-master
```

---

## 3. 必须修改哪些文件（重点）

> 下面这些修改的目的只有一个：**保证 `lib7z.so` 在 OHOS 设备上 `dlopen` 不会因为“第三方未定义符号”失败**，并且具备 7z/zip 的压缩/解压能力。

### 3.1 `C/7zCrc.c`：禁用 ARM64 硬件 CRC（OHOS clang 后端兼容性）

#### 为什么要改？

在 OHOS 的 clang 工具链下，`CRC32` 相关 intrinsic 可能触发后端问题（编译崩溃/生成异常）。因此在 OHOS 平台直接跳过 ARM64 硬件 CRC 分支，使用软件 CRC。

#### 修改前

```c
#if defined(MY_CPU_ARM_OR_ARM64)

// #pragma message("ARM*")

  #if defined(_MSC_VER)
    #if defined(MY_CPU_ARM64)
    #if (_MSC_VER >= 1910)
        #define USE_ARM64_CRC
    #endif
    #endif
  #elif (defined(__clang__) && (__clang_major__ >= 3)) \
     || (defined(__GNUC__) && (__GNUC__ > 4))
      #if !defined(__ARM_FEATURE_CRC32)
        #define __ARM_FEATURE_CRC32 1
          #if (!defined(__clang__) || (__clang_major__ > 3)) // fix these numbers
            #define ATTRIB_CRC __attribute__((__target__("arch=armv8-a+crc")))
          #endif
      #endif
      #if defined(__ARM_FEATURE_CRC32)
        #define USE_ARM64_CRC
        #include <arm_acle.h>
      #endif
  #endif

#else
```

#### 修改后

插入 `#elif defined(__OHOS__)` 分支：

```c
#if defined(MY_CPU_ARM_OR_ARM64)

// #pragma message("ARM*")

  #if defined(_MSC_VER)
    #if defined(MY_CPU_ARM64)
    #if (_MSC_VER >= 1910)
        #define USE_ARM64_CRC
    #endif
    #endif
  // OpenHarmony compatibility: skip ARM64 CRC hardware acceleration on OHOS
  // because OHOS clang has issues with CRC32 intrinsics
  #elif defined(__OHOS__)
      // Use software CRC on OpenHarmony
  #elif (defined(__clang__) && (__clang_major__ >= 3)) \
     || (defined(__GNUC__) && (__GNUC__ > 4))
      #if !defined(__ARM_FEATURE_CRC32)
        #define __ARM_FEATURE_CRC32 1
          #if (!defined(__clang__) || (__clang_major__ > 3)) // fix these numbers
            #define ATTRIB_CRC __attribute__((__target__("arch=armv8-a+crc")))
          #endif
      #endif
      #if defined(__ARM_FEATURE_CRC32)
        #define USE_ARM64_CRC
        #include <arm_acle.h>
      #endif
  #endif

#else
```

---

### 3.2 `ZipHandler.cpp` / `ZipAddCommon.cpp`：禁用 ZIP-ZSTD（避免 `NZSTD` 未定义符号）

#### 为什么要改？

如果编译脚本里定义了 `-DZ7_NO_ZSTD`（禁用 ZSTD），但源码仍然：
- 定义/引用 `NCompress::NZSTD::CDecoder`
- 创建 `NCompress::NZSTD::CEncoder`

那么 `lib7z.so` 里会出现类似未定义符号，导致 **加载阶段就失败**：

```text
symbol not found: _ZN9NCompress5NZSTD8CEncoderC1Ev
```

#### 3.2.1 `CPP/7zip/Archive/Zip/ZipHandler.cpp`

##### 修改前

ZSTD decoder 类与使用点始终编译：

```cpp
class CZstdDecoder { ... };
...
else if (id == NFileHeader::NCompressionMethod::kZstd)
  mi.Coder = new CZstdDecoder();
```

##### 修改后

用 `Z7_NO_ZSTD` 包住 **类定义** 和 **使用点**：

```cpp
#ifndef Z7_NO_ZSTD
class CZstdDecoder { ... };
#endif // Z7_NO_ZSTD

...
#ifndef Z7_NO_ZSTD
else if (id == NFileHeader::NCompressionMethod::kZstd)
  mi.Coder = new CZstdDecoder();
#endif
```

#### 3.2.2 `CPP/7zip/Archive/Zip/ZipAddCommon.cpp`

##### 修改前

ZSTD encoder 始终创建：

```cpp
else if (method == NCompressionMethod::kZstd)
{
  NCompress::NZSTD::CEncoder *encoder = new NCompress::NZSTD::CEncoder();
  _compressEncoder = encoder;
}
```

##### 修改后

用 `Z7_NO_ZSTD` 包住：

```cpp
#ifndef Z7_NO_ZSTD
else if (method == NCompressionMethod::kZstd)
{
  NCompress::NZSTD::CEncoder *encoder = new NCompress::NZSTD::CEncoder();
  _compressEncoder = encoder;
}
#endif
```

---

### 3.3 `Lzma2Encoder.cpp` / `Lzma2Encoder.h`：禁用 FastLZMA2/FL2（避免 `FL2_*` 未定义符号）

#### 为什么要改？

FastLZMA2 使用 `C/fast-lzma2` 的 `FL2_*` API。如果你没有把 `libfl2.so/libfastlzma2.so` 一起打包/链接，那么只要 `lib7z.so` 里出现 `FL2_*` 未定义符号，**dlopen 必失败**。

因此：当我们选择“禁用 FastLZMA2（推荐）”时，必须确保相关代码完全不参与编译。

#### 3.3.1 `CPP/7zip/Compress/Lzma2Encoder.h`

##### 修改前

头文件直接 include fast-lzma2，并暴露 `CFastEncoder`：

```cpp
#include "../../../C/fast-lzma2/fast-lzma2.h"
class CFastEncoder { ... FL2_CStream* ... };
```

##### 修改后

用 `Z7_NO_FL2` 包住 include 与 `CFastEncoder`：

```cpp
#ifndef Z7_NO_FL2
#include "../../../C/fast-lzma2/fast-lzma2.h"
#endif

#ifndef Z7_NO_FL2
class CFastEncoder { ... FL2_CStream* ... };
#endif // Z7_NO_FL2
```

#### 3.3.2 `CPP/7zip/Compress/Lzma2Encoder.cpp`

##### 修改前

FastLZMA2 代码块始终编译，直接调用 `FL2_*`：

```cpp
#include "../../../C/fast-lzma2/fl2_errors.h"
...
FL2_createCStreamMt(...);
FL2_endStream(...);
```

##### 修改后

用 `Z7_NO_FL2` 包住 include 与实现：

```cpp
#ifndef Z7_NO_FL2
#include "../../../C/fast-lzma2/fl2_errors.h"
#endif

...
#ifndef Z7_NO_FL2
// Fast LZMA2 encoder implementation (all FL2_* calls)
#endif
```

---

### 3.4 `C/Sha1.c` / `C/Sha256.c`：禁用硬件 SHA（避免硬件路径与符号问题）

#### 为什么要改？

在 OHOS 交叉编译场景下，硬件 SHA 探测/硬件实现有概率引入额外符号或不兼容指令。为了稳妥，我们通过 `-DZ7_NO_HW_SHA` 禁用硬件 SHA 探测。

#### 修改前

会直接探测并定义 `_SHA_SUPPORTED`：

```c
#ifdef MY_CPU_X86_OR_AMD64
  ...
  #define _SHA_SUPPORTED
#elif defined(MY_CPU_ARM_OR_ARM64)
  ...
  #define _SHA_SUPPORTED
#endif
```

#### 修改后

外层增加：

```c
#ifndef Z7_NO_HW_SHA
... 原有探测逻辑 ...
#endif
```

---

### 3.5 `C/Aes.c`：禁用硬件 AES（并确保执行路径也受宏控制）

#### 为什么要改？

和 SHA 同理，硬件 AES 路径在交叉编译/不同目标上可能不稳定。

另外一个关键点：**即使你禁用了硬件 AES，仍可能产生 `AesCbc_*_HW` 符号引用**（见 3.6 的兜底方案）。

#### 修改前

会直接定义 `USE_HW_AES`：

```c
#ifdef MY_CPU_X86_OR_AMD64
  #define USE_HW_AES
#elif defined(MY_CPU_ARM_OR_ARM64) && defined(MY_CPU_LE)
  ...
  #define USE_HW_AES
#endif

#ifdef USE_HW_AES
  ... status define ...
#endif
```

#### 修改后

用 `Z7_NO_HW_AES` 包住探测 + 包住实际使用点：

```c
#ifndef Z7_NO_HW_AES
  ... 原有 USE_HW_AES 探测 ...
#endif

#if defined(USE_HW_AES) && !defined(Z7_NO_HW_AES)
  ... status define ...
#endif

...
#if defined(USE_HW_AES) && !defined(Z7_NO_HW_AES)
  if (CPU_IsSupported_AES()) { d = AesCbc_Decode_HW; ... }
#endif
```

---

### 3.6 **最关键**：`AesCbc_*_HW` 符号兜底（保证 `dlopen` 不会因 AES HW 未定义失败）

#### 为什么还需要兜底？不是已经 `-DZ7_NO_HW_AES` 了吗？

我们实际遇到过这种情况：

- `lib7z.so` 的动态符号表里仍出现 `U AesCbc_Decode_HW / U AesCbc_Encode_HW`
- 设备端没有任何库提供这些符号
- 结果：`dlopen("lib7z.so")` 直接失败

因此这里用最稳妥的方案：**在库内部提供这些符号的“软件 stub 实现”**。

#### 3.6.1 新增文件：`C/AesHwStub.c`

新增文件内容（要点：HW 符号内部转调软件 AES）：

```c
void MY_FAST_CALL AesCbc_Encode_HW(...) { AesCbc_Encode(...); }
void MY_FAST_CALL AesCbc_Decode_HW(...) { AesCbc_Decode(...); }
void MY_FAST_CALL AesCtr_Code_HW(...)   { AesCtr_Code(...); }
void MY_FAST_CALL AesCbc_Decode_HW_256(...) { AesCbc_Decode(...); }
void MY_FAST_CALL AesCtr_Code_HW_256(...)   { AesCtr_Code(...); }
```

#### 3.6.2 修改 `CPP/7zip/7zip_gcc.mak`：增加编译规则

修改前：没有 `AesHwStub.o` 规则  
修改后：增加：

```make
$O/AesHwStub.o: ../../../../C/AesHwStub.c
	$(CC) $(CFLAGS) $<
```

---

## 4. 编译脚本准备

- `napi_generator/examples/p7zipTest/build_script/build_ohos_simple.sh`（主编译脚本）
- `napi_generator/examples/p7zipTest/build_script/ohos_build_patch.sh`（给 makefile 打补丁）

​       `Format7zF` 这个 bundle 默认会带很多外部编解码器/库（ZSTD/LZ4/Brotli/FL2/LZHAM 等）。我们为了：

​      (1) 减少第三方依赖

​      (2) 避免 HAP 需要打包一堆 .so

​      (3) 避免未定义符号导致 `dlopen` 失败

​      所以脚本会对 `CPP/7zip/7zip_gcc.mak` 和 `CPP/7zip/Bundles/Format7zF/Arc_gcc.mak` 做 “临时 sed 打补丁”。

​      当前脚本已经包含：

​      (1) 移除 `Zstd*` / `Lz4*` / `Brotli*` 等对象

​      (2) 移除 `AesOpt.o` / `Sha1Opt.o` / `Sha256Opt.o`（避免不兼容指令/编译失败）

​      (3) 注入 `AesHwStub.o`

- `napi_generator/examples/p7zipTest/build_script/ohos_build_restore.sh`（恢复 makefile）

### 4.1 先确认脚本里的路径是你本机真实路径

将`napi_generator/examples/p7zipTest/build_script`目录下的脚本文件拷贝到`p7zip-master` 目录下，打开 `build_ohos_simple.sh`，确认这几行：

```bash
OHOS_SDK="/home/kaihong/ohSDK/linux"
SOURCE_DIR="/home/kaihong/buildP7zip/p7zip-master"
OUTPUT_DIR="${SOURCE_DIR}/build_ohos"
BUILD_LOG="${SOURCE_DIR}/build_simple_log.txt"
```

如果你的机器路径不同，就把它们改成你自己的绝对路径（否则会编译到错误目录，或者找不到 SDK）。

同理，`ohos_build_patch.sh` / `ohos_build_restore.sh` 顶部也有 `MAKEFILE/ARC_MAKEFILE` 的绝对路径，需要与 `SOURCE_DIR` 对齐。

### 4.2 主脚本会做什么？（理解流程，出错更好排查）

`build_ohos_simple.sh` 的编译流程大致是：

1. 调用 `ohos_build_patch.sh`：临时修改 `Arc_gcc.mak` / `7zip_gcc.mak`（去掉外部依赖、加入 stub 等）
2. 依次编译三架构：`arm64-v8a` → `armeabi-v7a` → `x86_64`
3. 从 `CPP/7zip/Bundles/Format7zF` 产出 `7z.so`，复制为 `build_ohos/<arch>/lib7z.so`
4. 调用 `ohos_build_restore.sh`：恢复被修改过的 makefile（避免污染后续编译）

**结论（避免误解）：**

- ✅ 日常编译只需要执行 **一个命令**：`./build_ohos_simple.sh`
- ❌ **不要只执行** `./ohos_build_patch.sh`：它只“改 makefile”，不会生成 `lib7z.so`
- `./ohos_build_restore.sh` 也无需手动执行（主脚本结束时会自动恢复），除非你中途强制中断，需要手动恢复环境

添加执行权限：

```bash
cd /home/kaihong/buildP7zip/p7zip-master
chmod +x build_ohos_simple.sh ohos_build_patch.sh ohos_build_restore.sh
```

---

## 5. 一键编译（生成三架构 lib7z.so）

> **小白只需要看这一段并照抄执行即可。**

```bash
cd /home/kaihong/buildP7zip/p7zip-master
rm -rf build_ohos
./build_ohos_simple.sh
```

### 5.1 编译成功的“肉眼判断标准”

执行脚本后，正常会看到类似输出（示意）：

```text
[INFO] >>> 编译目标 1/3: arm64-v8a <<<
...
[INFO] ✓ arm64-v8a 编译成功
[INFO] >>> 编译目标 2/3: armeabi-v7a <<<
...
[INFO] ✓ armeabi-v7a 编译成功
[INFO] >>> 编译目标 3/3: x86_64 <<<
...
[INFO] ✓ x86_64 编译成功
```

并且目录下出现：

```bash
ls -lh build_ohos/*/lib7z.so
```

### 5.2 只编译某一个架构（可选）

默认脚本会编译三架构；如果你只想先验证 ARMv7（设备常见），最简单的方法是：

- 先运行全量脚本一次确认环境 OK
- 然后你可以在脚本 `main()` 里临时注释掉不需要的架构调用（新手推荐直接全量编译，不容易出错）

### 5.3 重新编译（可选）

```bash
cd /home/kaihong/buildP7zip/p7zip-master
rm -rf build_ohos
./build_ohos_simple.sh
```

如果你怀疑 makefile 被污染（例如中断过编译），先执行恢复：

```bash
./ohos_build_restore.sh
```

成功后会生成：

```text
build_ohos/arm64-v8a/lib7z.so
build_ohos/armeabi-v7a/lib7z.so
build_ohos/x86_64/lib7z.so
```

---

## 6. 当前仓库已包含的关键文件清单（方便对照）

### 新增文件
- `C/AesHwStub.c`

### 修改文件（核心）
- `C/7zCrc.c`
- `C/Aes.c`
- `C/Sha1.c`
- `C/Sha256.c`
- `CPP/7zip/Archive/Zip/ZipHandler.cpp`
- `CPP/7zip/Archive/Zip/ZipAddCommon.cpp`
- `CPP/7zip/Compress/Lzma2Encoder.cpp`
- `CPP/7zip/Compress/Lzma2Encoder.h`
- `CPP/7zip/7zip_gcc.mak`
- `ohos_build_patch.sh`


