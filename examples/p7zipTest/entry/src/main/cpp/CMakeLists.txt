# the minimum version of CMake.
cmake_minimum_required(VERSION 3.5.0)
project(p7zipTest)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

if(DEFINED PACKAGE_FIND_FILE)
    include(${PACKAGE_FIND_FILE})
endif()

# 包含所有必要的头文件目录
include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/compress
                    ${NATIVERENDER_ROOT_PATH}/decompress
                    ${NATIVERENDER_ROOT_PATH}/common
                    ${NATIVERENDER_ROOT_PATH}/napi
                    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip
                    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip/C
                    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip/Common)

# 设置p7zip动态库路径
set(P7ZIP_LIB_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/${OHOS_ARCH})
set(P7ZIP_LIB ${P7ZIP_LIB_DIR}/lib7z.so)

# 打印调试信息
message(STATUS "=== P7zip Configuration ===")
message(STATUS "OHOS_ARCH: ${OHOS_ARCH}")
message(STATUS "P7ZIP_LIB_DIR: ${P7ZIP_LIB_DIR}")
message(STATUS "P7ZIP_LIB: ${P7ZIP_LIB}")

# 源文件列表（按模块组织）
set(COMPRESS_SOURCES
    compress/ArchiveCompressor.cpp
)

set(DECOMPRESS_SOURCES
    decompress/ArchiveHandler.cpp
    decompress/UnifiedDecompressor.cpp
)

set(COMMON_SOURCES
    common/FormatDetector.cpp
    common/LzmaUtils.cpp
    common/CreateObjectWrapper.cpp
    common/ErrorCodes.cpp
)

set(NAPI_SOURCES
    napi/napi_init.cpp
    napi/napi_decompress_async.cpp
    napi/napi_compress_async.cpp
)

set(SOURCES
    ${COMPRESS_SOURCES}
    ${DECOMPRESS_SOURCES}
    ${COMMON_SOURCES}
    ${NAPI_SOURCES}
)

add_library(entry SHARED ${SOURCES})

# 链接 NAPI 库和 hilog 库
target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)

# 链接 p7zip 动态库
if(EXISTS ${P7ZIP_LIB})
    message(STATUS "✅ P7ZIP dynamic library found: ${P7ZIP_LIB}")
    
    # 直接链接动态库文件（使用完整路径）
    target_link_libraries(entry PUBLIC ${P7ZIP_LIB})
    
    # 添加必要的系统库
    target_link_libraries(entry PUBLIC pthread dl)
    
    # 确保动态库被打包到 HAP 中
    # 将动态库复制到输出目录
    add_custom_command(TARGET entry POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_if_different
        ${P7ZIP_LIB}
        $<TARGET_FILE_DIR:entry>/lib7z.so
        COMMENT "Copying lib7z.so to output directory"
    )
    message(STATUS "✅ lib7z.so will be copied to output directory")
else()
    message(WARNING "⚠️ P7ZIP library NOT found: ${P7ZIP_LIB}")
    message(WARNING "Building without p7zip support")
endif()

message(STATUS "=== Build Configuration Complete ===")
