#!/bin/bash
# p7zip OpenHarmony 简化交叉编译脚本
# 专注于核心功能：7z, ZIP 压缩和解压
# 支持三种架构：arm64-v8a, armeabi-v7a, x86_64

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置路径
OHOS_SDK="/home/kaihong/ohSDK/linux"
SOURCE_DIR="/home/kaihong/buildP7zip/p7zip-master"
OUTPUT_DIR="${SOURCE_DIR}/build_ohos"
BUILD_LOG="${SOURCE_DIR}/build_simple_log.txt"

# 清空日志文件
> "${BUILD_LOG}"

# 检查 SDK 是否存在
if [ ! -d "${OHOS_SDK}" ]; then
    echo -e "${RED}错误: OpenHarmony SDK 目录不存在: ${OHOS_SDK}${NC}"
    exit 1
fi

# 创建输出目录
mkdir -p "${OUTPUT_DIR}"

# 函数：打印带颜色的消息
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
    echo "[INFO] $1" >> "${BUILD_LOG}"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
    echo "[ERROR] $1" >> "${BUILD_LOG}"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
    echo "[WARNING] $1" >> "${BUILD_LOG}"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
    echo "[STEP] $1" >> "${BUILD_LOG}"
}

# 函数：配置OpenHarmony工具链环境变量
setup_ohos_toolchain() {
    local arch=$1
    local target_triple=$2
    local cflags_arch=$3
    
    print_step "配置 ${arch} 架构的工具链环境..."
    
    export OHOS_ARCH="${arch}"
    export OHOS_SDK_PATH="${OHOS_SDK}"
    export OHOS_LLVM="${OHOS_SDK}/native/llvm"
    export OHOS_SYSROOT="${OHOS_SDK}/native/sysroot"
    export OHOS_TARGET_TRIPLE="${target_triple}"
    
    # 配置编译工具
    export CC="${OHOS_LLVM}/bin/clang"
    export CXX="${OHOS_LLVM}/bin/clang++"
    export AR="${OHOS_LLVM}/bin/llvm-ar"
    export RANLIB="${OHOS_LLVM}/bin/llvm-ranlib"
    export STRIP="${OHOS_LLVM}/bin/llvm-strip"
    
    # 配置编译标志 - 禁用硬件优化以确保兼容性
    local TARGET_FLAGS="--target=${target_triple} --sysroot=${OHOS_SYSROOT}"
    local COMPILE_FLAGS="-c -O2 -fPIC -D__MUSL__=1 -DZ7_NO_ZSTD -DZ7_NO_FL2 -DZ7_NO_HW_AES -DZ7_NO_HW_SHA -U__ARM_FEATURE_UNALIGNED -DNDEBUG -D_REENTRANT -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE -D_7ZIP_AFFINITY_DISABLE -DMY_CPU_LE"
    
    # 编译标志：用于编译对象文件
    export CFLAGS_BASE2="${TARGET_FLAGS}"
    export CFLAGS_BASE="${COMPILE_FLAGS} ${cflags_arch}"
    export CXXFLAGS_BASE2="${TARGET_FLAGS}"
    export CXXFLAGS_BASE="${COMPILE_FLAGS} ${cflags_arch}"
    
    # 为子库设置CFLAGS
    export CFLAGS="${COMPILE_FLAGS} ${cflags_arch} ${TARGET_FLAGS}"
    export CXXFLAGS="${COMPILE_FLAGS} ${cflags_arch} ${TARGET_FLAGS}"
    
    # 链接标志：只用于链接阶段
    export LDFLAGS="${TARGET_FLAGS} -shared -fPIC -L${OHOS_SYSROOT}/usr/lib/${target_triple}"
    
    print_info "工具链配置完成"
    print_info "  Target: ${target_triple}"
}

# 函数：清理编译目录
clean_build() {
    print_info "清理编译目录..."
    cd "${SOURCE_DIR}/CPP/7zip/Bundles/Format7zF"
    
    # 深度清理
    make -f makefile.gcc clean 2>/dev/null || true
    rm -rf _o b 2>/dev/null || true
    rm -rf zstd_build lz4_build brotli_build lzham_build 2>/dev/null || true
    
    # 清理依赖库
    make -C ../../../../C/lizard/lib clean 2>/dev/null || true
    make -C ../../../../C/lz5/lib clean 2>/dev/null || true
    
    cd "${SOURCE_DIR}"
}

# 函数：编译动态库
build_for_arch() {
    local arch=$1
    local target_triple=$2
    local cflags_arch=$3
    
    print_info "=========================================="
    print_info "开始编译 ${arch} 架构的 p7zip 动态库"
    print_info "=========================================="
    
    # 配置工具链
    setup_ohos_toolchain "${arch}" "${target_triple}" "${cflags_arch}"
    
    # 清理之前的编译
    clean_build
    
    # 创建架构特定的输出目录
    local arch_output_dir="${OUTPUT_DIR}/${arch}"
    mkdir -p "${arch_output_dir}"
    
    # 进入编译目录
    cd "${SOURCE_DIR}/CPP/7zip/Bundles/Format7zF"
    
    print_step "开始编译 Format7zF..."
    
    # 禁用有问题的编解码器，使用核心功能
    # 禁用: ZSTD, BROTLI, FAST-LZMA2, LZHAM (这些在交叉编译时有问题)
    # 保留: 7z, ZIP, RAR解压, TAR, GZ, BZ2, XZ, LZMA等核心格式
    
    if make -f makefile.gcc \
        CC="${CC}" \
        CXX="${CXX}" \
        AR="${AR}" \
        RANLIB="${RANLIB}" \
        STRIP="${STRIP}" \
        CFLAGS_BASE="${CFLAGS_BASE}" \
        CXXFLAGS_BASE="${CXXFLAGS_BASE}" \
        CFLAGS_BASE2="${CFLAGS_BASE2}" \
        CXXFLAGS_BASE2="${CXXFLAGS_BASE2}" \
        LDFLAGS="${LDFLAGS}" \
        USE_ASM= \
        USE_LZMA_DEC_ASM= \
        CC_SHARED="-fPIC" \
        PROG=7z \
        -j$(nproc) 2>&1 | tee -a "${BUILD_LOG}"; then
        
        print_info "编译成功！"
    else
        print_error "编译失败！请查看日志: ${BUILD_LOG}"
        return 1
    fi
    
    # 查找生成的库文件
    local so_file=""
    if [ -f "_o/lib/7z.so" ]; then
        so_file="_o/lib/7z.so"
    elif [ -f "_o/7z.so" ]; then
        so_file="_o/7z.so"
    elif [ -f "b/7z.so" ]; then
        so_file="b/7z.so"
    elif [ -f "7z.so" ]; then
        so_file="7z.so"
    else
        print_error "找不到编译生成的 7z.so 文件！"
        print_info "搜索所有.so文件："
        find . -name "*.so" -type f 2>/dev/null | tee -a "${BUILD_LOG}"
        return 1
    fi
    
    # 复制生成的库文件
    cp "${so_file}" "${arch_output_dir}/lib7z.so"
    print_info "库文件已复制到: ${arch_output_dir}/lib7z.so"
    
    # 验证生成的库
    print_info "验证生成的动态库..."
    file "${arch_output_dir}/lib7z.so" | tee -a "${BUILD_LOG}"
    
    # 检查符号
    print_info "检查导出的符号..."
    ${OHOS_LLVM}/bin/llvm-nm -D "${arch_output_dir}/lib7z.so" 2>/dev/null | grep -E "CreateObject|GetNumberOfFormats|GetHandlerProperty" | head -10 | tee -a "${BUILD_LOG}" || true
    
    # 获取文件大小
    local file_size=$(stat -c%s "${arch_output_dir}/lib7z.so")
    print_info "库文件大小: $((file_size / 1024)) KB"
    
    # 清理
    clean_build
    
    print_info "${arch} 架构编译完成！"
    echo "" >> "${BUILD_LOG}"
}

# 函数：创建测试信息文件
create_info_file() {
    local info_file="${OUTPUT_DIR}/BUILD_INFO.txt"
    
    cat > "${info_file}" << 'EOF'
P7ZIP OpenHarmony 动态库编译信息
================================

编译时间: $(date)
源码目录: /home/kaihong/gitcode/p7zip-master
SDK 路径: /home/kaihong/ohSDK/linux
输出目录: /home/kaihong/gitcode/p7zip-master/build_ohos

支持的架构:
- arm64-v8a (aarch64-linux-ohos)
- armeabi-v7a (arm-linux-ohos)
- x86_64 (x86_64-linux-ohos)

支持的功能:
✓ 7z 格式压缩和解压
✓ ZIP 格式压缩和解压
✓ RAR 格式解压 (RAR5)
✓ TAR 格式压缩和解压
✓ GZ, BZ2, XZ, LZMA 压缩和解压
✓ ISO, CAB, CHM, WIM 解压
✓ NSIS, UDF, DMG, HFS 解压
✓ 以及更多格式...

编译选项:
- 优化级别: -O2
- PIC: 启用
- 多线程: 启用
- 汇编优化: 禁用 (保证跨平台兼容性)
- RAR压缩: 禁用 (仅支持解压)

注意事项:
- 为了保证编译成功和跨平台兼容性，禁用了部分高级编解码器
- 核心的7z和ZIP功能完全可用
- 库文件需要有执行权限
- 建议在实际设备上进行功能测试

使用方法:
1. 将对应架构的 lib7z.so 复制到 OpenHarmony 项目的 libs 目录
2. 在代码中加载动态库
3. 通过 NAPI 调用 p7zip 的接口

EOF

    print_info "已创建编译信息文件: ${info_file}"
}

# 主编译流程
main() {
    print_info "=========================================="
    print_info "p7zip OpenHarmony 交叉编译脚本"
    print_info "=========================================="
    print_info "源码目录: ${SOURCE_DIR}"
    print_info "SDK 目录: ${OHOS_SDK}"
    print_info "输出目录: ${OUTPUT_DIR}"
    print_info "日志文件: ${BUILD_LOG}"
    print_info "=========================================="
    echo ""
    
    # 应用OpenHarmony编译补丁
    print_step "应用编译补丁..."
    bash "${SOURCE_DIR}/ohos_build_patch.sh"
    
    # 记录开始时间
    local start_time=$(date +%s)
    
    # 编译 arm64-v8a
    print_info ">>> 编译目标 1/3: arm64-v8a <<<"
    if build_for_arch "arm64-v8a" "aarch64-linux-ohos" ""; then
        print_info "✓ arm64-v8a 编译成功"
    else
        print_error "✗ arm64-v8a 编译失败"
        exit 1
    fi
    echo ""
    
    # 编译 armeabi-v7a
    print_info ">>> 编译目标 2/3: armeabi-v7a <<<"
    if build_for_arch "armeabi-v7a" "arm-linux-ohos" "-march=armv7-a -mfloat-abi=softfp -mfpu=neon"; then
        print_info "✓ armeabi-v7a 编译成功"
    else
        print_error "✗ armeabi-v7a 编译失败"
        exit 1
    fi
    echo ""
    
    # 编译 x86_64
    print_info ">>> 编译目标 3/3: x86_64 <<<"
    if build_for_arch "x86_64" "x86_64-linux-ohos" ""; then
        print_info "✓ x86_64 编译成功"
    else
        print_error "✗ x86_64 编译失败"
        exit 1
    fi
    echo ""
    
    # 记录结束时间
    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    
    # 恢复原始makefile
    print_step "恢复原始makefile..."
    bash "${SOURCE_DIR}/ohos_build_restore.sh"
    
    # 创建编译信息文件
    create_info_file
    
    print_info "=========================================="
    print_info "所有架构编译完成！"
    print_info "=========================================="
    print_info "编译耗时: ${duration} 秒"
    print_info ""
    print_info "输出目录结构："
    
    if command -v tree &> /dev/null; then
        tree -L 2 "${OUTPUT_DIR}"
    else
        ls -lhR "${OUTPUT_DIR}"
    fi
    
    print_info ""
    print_info "编译产物位置："
    print_info "  - arm64-v8a:    ${OUTPUT_DIR}/arm64-v8a/lib7z.so"
    print_info "  - armeabi-v7a:  ${OUTPUT_DIR}/armeabi-v7a/lib7z.so"
    print_info "  - x86_64:       ${OUTPUT_DIR}/x86_64/lib7z.so"
    print_info ""
    print_info "详细日志: ${BUILD_LOG}"
    print_info "编译信息: ${OUTPUT_DIR}/BUILD_INFO.txt"
    
    # 显示文件大小
    print_info ""
    print_info "库文件大小："
    for arch in arm64-v8a armeabi-v7a x86_64; do
        if [ -f "${OUTPUT_DIR}/${arch}/lib7z.so" ]; then
            local size=$(stat -c%s "${OUTPUT_DIR}/${arch}/lib7z.so")
            printf "  %-15s %8d KB\n" "${arch}:" "$((size / 1024))"
        fi
    done
    
    print_info ""
    print_info "=========================================="
    print_info "编译完成！核心功能已包含："
    print_info "  ✓ 7z 压缩/解压"
    print_info "  ✓ ZIP 压缩/解压"
    print_info "  ✓ RAR/TAR/GZ/BZ2/XZ 解压"
    print_info "  ✓ ISO/CAB/WIM 等格式解压"
    print_info "=========================================="
}

# 捕获错误
trap 'print_error "编译过程中发生错误！退出代码: $?"; exit 1' ERR

# 运行主函数
main


