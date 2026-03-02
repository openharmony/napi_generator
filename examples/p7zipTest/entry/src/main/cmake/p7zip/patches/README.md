## OpenHarmony patches（统一补丁目录）

### 这是什么？

`patches/` 存放所有为 OpenHarmony 交叉编译 `lib7z.so` 所需的源码/Makefile 改动，全部以 **unified diff** 的 `*.patch` 形式管理。

构建时不会让你手改源码：预构建脚本会先把上游 p7zip 源码解压到工作副本目录，然后 **按顺序应用这些 patch**。

### 上游基线（非常重要）

这些 patch 是基于 `UPSTREAM_COMMIT.txt` 指定的上游版本生成的：

- `UPSTREAM_COMMIT.txt`：固定的 commit hash

如果你更换上游版本，可能会出现 patch 不能应用（hunk failed）。这时需要重新生成 patch。

### patch 列表

- `0001-ohos-disable-hw-crc.patch`：OHOS 上禁用 ARM64 CRC32 硬件指令路径
- `0002-ohos-disable-zstd-in-zip.patch`：在 ZIP 逻辑里禁用 ZSTD 相关引用（避免未定义符号导致 dlopen 失败）
- `0003-ohos-disable-fl2.patch`：禁用 FastLZMA2/FL2 相关引用
- `0004-ohos-disable-hw-sha.patch`：禁用硬件 SHA 探测路径
- `0005-ohos-disable-hw-aes.patch`：禁用硬件 AES 探测 + 使用路径
- `0006-ohos-add-aes-hw-stub.patch`：新增 `C/AesHwStub.c` + 将其编入 `lib7z.so`（消除 `AesCbc_*_HW` 未定义符号）
- `0007-ohos-format7zf-makefiles.patch`：裁剪 `Format7zF` bundle 里依赖外部库的对象，避免引入第三方 `.so`

