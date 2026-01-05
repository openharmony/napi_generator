#!/bin/bash
# 为OpenHarmony编译临时修改makefile

MAKEFILE="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/7zip_gcc.mak"
ARC_MAKEFILE="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/Bundles/Format7zF/Arc_gcc.mak"
BACKUP="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/7zip_gcc.mak.backup"
ARC_BACKUP="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/Bundles/Format7zF/Arc_gcc.mak.backup"

# 备份原文件
if [ ! -f "${BACKUP}" ]; then
    cp "${MAKEFILE}" "${BACKUP}"
    echo "已备份原始7zip_gcc.mak"
fi

if [ ! -f "${ARC_BACKUP}" ]; then
    cp "${ARC_MAKEFILE}" "${ARC_BACKUP}"
    echo "已备份原始Arc_gcc.mak"
fi

# 修改依赖行，移除所有额外的库依赖
sed -i 's/^\$(PROGPATH): \$(ZSTD_LIB) \$(LZ4_LIB) \$(BROTLI_LIB) \$(LIZARD_LIB) \$(LZ5_LIB) \$(FAST-LZMA2_LIB) \$(LZHAM_LIB) \$(OBJS)$/$(PROGPATH): $(OBJS)/' "${MAKEFILE}"

# 修改addon库链接列表，设置为空（不需要额外的编解码器库）
sed -i 's/^7z_ADDON_LIB = -lzstd -llz4 -lbrotlienc -lbrotlidec -lbrotlicommon -llizard -llz5 -lfast-lzma2 -llzhamcomp -llzhamdecomp -llzhamdll$/7z_ADDON_LIB =/' "${MAKEFILE}"

# 从Arc_gcc.mak中移除硬件优化对象文件和有问题的编解码器
# 移除汇编/硬件优化对象文件（这些在OHOS交叉编译上可能触发不兼容指令/编译错误）
sed -i '/\$O\/AesOpt\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Sha1Opt\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Sha256Opt\.o/d' "${ARC_MAKEFILE}"

# 移除需要外部库的编解码器
sed -i '/\$O\/FastLzma2Register\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/LzhamRegister\.o/d' "${ARC_MAKEFILE}"

# 添加 XzCrc64Opt.o 和 7zCrcOpt.o（C语言实现，不是汇编）
if ! grep -q '\$O/XzCrc64Opt\.o' "${ARC_MAKEFILE}"; then
    sed -i '/\$O\/XzCrc64\.o \\/a\  $O/XzCrc64Opt.o \\' "${ARC_MAKEFILE}"
    echo "已添加 XzCrc64Opt.o 到 Arc_gcc.mak"
fi
if ! grep -q '\$O/7zCrcOpt\.o' "${ARC_MAKEFILE}"; then
    sed -i '/\$O\/7zCrc\.o \\/a\  $O/7zCrcOpt.o \\' "${ARC_MAKEFILE}"
    echo "已添加 7zCrcOpt.o 到 Arc_gcc.mak"
fi

# 添加 AesHwStub.o：提供AesCbc_*_HW 等符号的软件stub，避免动态库加载阶段出现未定义符号
if ! grep -q '\$O/AesHwStub\.o' "${ARC_MAKEFILE}"; then
    sed -i '/\$O\/Aes\.o \\/a\  $O/AesHwStub.o \\' "${ARC_MAKEFILE}"
    echo "已添加 AesHwStub.o 到 Arc_gcc.mak"
fi

# 移除有问题的额外hash对象文件
sed -i '/\$O\/md2\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/md4\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/md5\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/sha512\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/blake3\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Md2Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Md4Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Md5Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Sha384Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Sha512Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/XXH32Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/XXH64Reg\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Blake3Reg\.o/d' "${ARC_MAKEFILE}"

# 移除依赖外部库的编解码器和Handler
sed -i '/\$O\/Lz4Decoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz4Encoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz4Register\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz4Handler\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/BrotliDecoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/BrotliEncoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/BrotliRegister\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/LizardDecoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/LizardEncoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/LizardRegister\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/LizardHandler\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz5Decoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz5Encoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz5Register\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/Lz5Handler\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/ZstdHandler\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/ZstdDecoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/ZstdEncoder\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/ZstdRegister\.o/d' "${ARC_MAKEFILE}"

# 移除多线程支持文件（这些依赖外部库）
sed -i '/\$O\/lz4-mt_common\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lz4-mt_compress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lz4-mt_decompress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/brotli-mt_common\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/brotli-mt_compress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/brotli-mt_decompress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lizard-mt_common\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lizard-mt_compress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lizard-mt_decompress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lz5-mt_common\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lz5-mt_compress\.o/d' "${ARC_MAKEFILE}"
sed -i '/\$O\/lz5-mt_decompress\.o/d' "${ARC_MAKEFILE}"

echo "已应用OpenHarmony编译补丁（移除外部库依赖）"
