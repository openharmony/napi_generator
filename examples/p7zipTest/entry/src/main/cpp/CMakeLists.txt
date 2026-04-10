# the minimum version of CMake.
cmake_minimum_required(VERSION 3.5.0)
project(p7zipTest)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
set(REPO_ROOT "${CMAKE_CURRENT_LIST_DIR}/../../../..")
get_filename_component(REPO_ROOT "${REPO_ROOT}" ABSOLUTE)

# Host tools absolute paths (user must fill these in this file).
# Example values on your current machine:
#   P7ZIP_HOST_MAKE  = C:/software/MinGW-w64/w64devkit/bin/make.exe
#   P7ZIP_HOST_GIT   = C:/software/Git/cmd/git.exe
#   P7ZIP_HOST_PATCH = C:/software/Git/usr/bin/patch.exe
#   P7ZIP_HOST_SH    = C:/software/Git/usr/bin/sh.exe
# Replace these paths if your install directories are different.
set(P7ZIP_HOST_MAKE "C:/software/MinGW-w64/w64devkit/bin/make.exe" CACHE FILEPATH "Absolute path to make.exe")
set(P7ZIP_HOST_GIT "C:/software/Git/cmd/git.exe" CACHE FILEPATH "Absolute path to git.exe")
set(P7ZIP_HOST_PATCH "C:/software/Git/usr/bin/patch.exe" CACHE FILEPATH "Absolute path to patch.exe")
set(P7ZIP_HOST_SH "C:/software/Git/usr/bin/sh.exe" CACHE FILEPATH "Optional absolute path to sh.exe on Windows")

set(_p7zip_prebuild "${CMAKE_CURRENT_LIST_DIR}/thirdparty/patch/scripts/prebuild_lib7z.cmake")
if(NOT DEFINED OHOS_ARCH OR OHOS_ARCH STREQUAL "")
    message(FATAL_ERROR "OHOS_ARCH is required (e.g. arm64-v8a / armeabi-v7a / x86_64).")
endif()

if(DEFINED PACKAGE_FIND_FILE)
    include(${PACKAGE_FIND_FILE})
endif()

# Prebuild lib7z.so if missing (runs at configure time).
include("${_p7zip_prebuild}")

# p7zip 头文件：Common/*、C/* 在 CPP 下；IArchive.h 在 CPP/7zip/Archive；IStream/ICoder 等在 CPP/7zip
set(_P7ZIP_SRC "${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/source/p7zip-6819e2dc1917e1267babddc6391cea56ead7123d")
include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/wrapper
                    ${NATIVERENDER_ROOT_PATH}/wrapper/compress
                    ${NATIVERENDER_ROOT_PATH}/wrapper/decompress
                    ${NATIVERENDER_ROOT_PATH}/wrapper/common
                    ${NATIVERENDER_ROOT_PATH}/wrapper/napi
                    ${_P7ZIP_SRC}
                    ${_P7ZIP_SRC}/CPP
                    ${_P7ZIP_SRC}/CPP/7zip
                    ${_P7ZIP_SRC}/CPP/7zip/Archive)

# 设置p7zip动态库路径（thirdparty/source 下的预构建产物）
set(P7ZIP_LIB "${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/source/${OHOS_ARCH}/lib7z.so")

# 源文件列表（按模块组织）
set(COMPRESS_SOURCES
    wrapper/compress/ArchiveCompressor.cpp
)

set(DECOMPRESS_SOURCES
    wrapper/decompress/ArchiveHandler.cpp
    wrapper/decompress/UnifiedDecompressor.cpp
)

set(COMMON_SOURCES
    wrapper/common/FormatDetector.cpp
    wrapper/common/LzmaUtils.cpp
    wrapper/common/CreateObjectWrapper.cpp
    wrapper/common/ErrorCodes.cpp
)

set(NAPI_SOURCES
    wrapper/napi/napi_init.cpp
    wrapper/napi/napi_decompress_async.cpp
    wrapper/napi/napi_compress_async.cpp
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
if(NOT EXISTS "${P7ZIP_LIB}")
    message(FATAL_ERROR "P7ZIP library NOT found: ${P7ZIP_LIB} (OHOS_ARCH=${OHOS_ARCH})")
endif()

# 直接链接动态库文件（使用完整路径）
target_link_libraries(entry PUBLIC "${P7ZIP_LIB}" pthread dl)

# 将动态库复制到输出目录，确保被打包进 HAP
add_custom_command(TARGET entry POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${P7ZIP_LIB}"
    $<TARGET_FILE_DIR:entry>/lib7z.so
    COMMENT "Copying lib7z.so to output directory"
)

# Ensure Ninja knows how to produce lib7z.so if it's missing at build time.
set(_p7zip_out "${REPO_ROOT}/entry/src/main/cpp/thirdparty/source/${OHOS_ARCH}/lib7z.so")
set(_p7zip_prebuild_defs
  "-DOHOS_ARCH=${OHOS_ARCH}"
  "-DOHOS_SDK=${OHOS_SDK}"
  "-DP7ZIP_PREBUILD_AT_CONFIGURE=ON"
  "-DP7ZIP_HOST_MAKE=${P7ZIP_HOST_MAKE}"
  "-DP7ZIP_HOST_GIT=${P7ZIP_HOST_GIT}"
  "-DP7ZIP_HOST_PATCH=${P7ZIP_HOST_PATCH}"
  "-DP7ZIP_HOST_SH=${P7ZIP_HOST_SH}"
  "-DP7ZIP_JOBS=${P7ZIP_JOBS}"
  "-DP7ZIP_REBUILD_IF_EXISTS=${P7ZIP_REBUILD_IF_EXISTS}"
  "-DP7ZIP_TARBALL_URL=${P7ZIP_TARBALL_URL}"
  "-DP7ZIP_APPLY_OHOS_PATCHES=${P7ZIP_APPLY_OHOS_PATCHES}"
  "-DP7ZIP_PATCH_STRICT=${P7ZIP_PATCH_STRICT}"
  "-DP7ZIP_QUIET=${P7ZIP_QUIET}"
  "-DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}"
)
add_custom_command(
  OUTPUT "${_p7zip_out}"
  COMMAND "${CMAKE_COMMAND}" ${_p7zip_prebuild_defs} -P "${_p7zip_prebuild}"
  DEPENDS
    "${_p7zip_prebuild}"
    "${CMAKE_CURRENT_LIST_DIR}/thirdparty/patch/scripts/apply_patches.cmake"
    "${CMAKE_CURRENT_LIST_DIR}/thirdparty/patch/scripts/p7zip_log.cmake"
  VERBATIM
  COMMENT "Prebuilding lib7z.so (${OHOS_ARCH})"
)
add_custom_target(p7zip_prebuild_lib7z DEPENDS "${_p7zip_out}")
add_dependencies(entry p7zip_prebuild_lib7z)
