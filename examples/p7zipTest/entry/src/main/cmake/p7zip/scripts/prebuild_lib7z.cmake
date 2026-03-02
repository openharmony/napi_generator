# Prebuild p7zip `lib7z.so` into `entry/libs/<OHOS_ARCH>/lib7z.so` at CMake *configure time*.
# Included by `entry/src/main/cpp_bootstrap/CMakeLists.txt` before the original native module.

if(NOT DEFINED REPO_ROOT OR REPO_ROOT STREQUAL "")
  # From: entry/src/main/cmake/p7zip/scripts -> repo root
  set(REPO_ROOT "${CMAKE_CURRENT_LIST_DIR}/../../../../../..")
  get_filename_component(REPO_ROOT "${REPO_ROOT}" ABSOLUTE)
endif()

if(NOT DEFINED OHOS_ARCH OR OHOS_ARCH STREQUAL "")
  message(FATAL_ERROR "OHOS_ARCH is required (e.g. arm64-v8a / armeabi-v7a / x86_64).")
endif()

include("${CMAKE_CURRENT_LIST_DIR}/p7zip_log.cmake")

set(_out_lib "${REPO_ROOT}/entry/libs/${OHOS_ARCH}/lib7z.so")
option(P7ZIP_REBUILD_IF_EXISTS "Rebuild and replace lib7z.so even if already exists" ON)
if(EXISTS "${_out_lib}" AND NOT P7ZIP_REBUILD_IF_EXISTS)
  _p7zip_status("[p7zip-prebuild] Found (skip): ${_out_lib}")
  return()
endif()
if(EXISTS "${_out_lib}" AND P7ZIP_REBUILD_IF_EXISTS)
  _p7zip_status("[p7zip-prebuild] Rebuild enabled, will replace: ${_out_lib}")
endif()

option(P7ZIP_PREBUILD_AT_CONFIGURE "Prebuild lib7z.so at CMake configure time" ON)
if(NOT P7ZIP_PREBUILD_AT_CONFIGURE)
  _p7zip_status("[p7zip-prebuild] Disabled; expecting prebuilt lib: ${_out_lib}")
  return()
endif()

option(P7ZIP_PATCH_STRICT "Fail configure if any patch does not apply cleanly" OFF)
option(P7ZIP_APPLY_OHOS_PATCHES "Apply patches from cmake/p7zip/patches before building" ON)
set(P7ZIP_PATCH_DIR "${CMAKE_CURRENT_LIST_DIR}/../patches" CACHE PATH "Directory containing OHOS patches (000*.patch)")

set(P7ZIP_TARBALL_URL "" CACHE STRING "Optional: override source tarball URL (can be a local file path). If empty, derived from p7zip-project/p7zip + P7ZIP_TAG.")

# Default tag/commit from patch baseline, if present.
set(_default_upstream_commit "")
if(EXISTS "${P7ZIP_PATCH_DIR}/UPSTREAM_COMMIT.txt")
  file(READ "${P7ZIP_PATCH_DIR}/UPSTREAM_COMMIT.txt" _default_upstream_commit)
  string(STRIP "${_default_upstream_commit}" _default_upstream_commit)
endif()
set(P7ZIP_TAG "${_default_upstream_commit}" CACHE STRING "Git tag/commit to download from GitHub codeload (must match patches if you enable them)")

set(P7ZIP_JOBS "" CACHE STRING "Parallel build jobs for make (empty = auto)")
if(P7ZIP_JOBS STREQUAL "")
  include(ProcessorCount)
  ProcessorCount(_nproc)
  if(_nproc LESS 1)
    set(_nproc 4)
  endif()
  set(P7ZIP_JOBS "${_nproc}")
endif()

set(OHOS_SDK "" CACHE PATH "OpenHarmony SDK root (contains native/llvm and native/sysroot). If empty, will try env and derive from compiler.")
if(OHOS_SDK STREQUAL "" AND DEFINED ENV{OHOS_SDK} AND NOT "$ENV{OHOS_SDK}" STREQUAL "")
  set(OHOS_SDK "$ENV{OHOS_SDK}")
endif()
if(OHOS_SDK STREQUAL "" AND DEFINED ENV{OHOS_SDK_PATH} AND NOT "$ENV{OHOS_SDK_PATH}" STREQUAL "")
  set(OHOS_SDK "$ENV{OHOS_SDK_PATH}")
endif()

# Try to derive OHOS_SDK from detected compiler path if still not set.
if(OHOS_SDK STREQUAL "" AND DEFINED CMAKE_C_COMPILER AND NOT CMAKE_C_COMPILER STREQUAL "")
  # Expected compiler path like: <OHOS_SDK>/native/llvm/bin/clang(.exe)
  get_filename_component(_cc_dir "${CMAKE_C_COMPILER}" DIRECTORY) # .../bin
  get_filename_component(_llvm_dir "${_cc_dir}" DIRECTORY)        # .../llvm
  get_filename_component(_native_dir "${_llvm_dir}" DIRECTORY)    # .../native
  get_filename_component(_sdk_dir "${_native_dir}" DIRECTORY)     # <OHOS_SDK>
  if(EXISTS "${_sdk_dir}/native/llvm" AND EXISTS "${_sdk_dir}/native/sysroot")
    set(OHOS_SDK "${_sdk_dir}")
  endif()
endif()

if(OHOS_SDK STREQUAL "" OR NOT EXISTS "${OHOS_SDK}/native/llvm" OR NOT EXISTS "${OHOS_SDK}/native/sysroot")
  message(FATAL_ERROR "[p7zip-prebuild] OHOS_SDK is invalid/empty. Provide -DOHOS_SDK=<ohos-sdk-root> (must contain native/llvm and native/sysroot).")
endif()

# Optional: explicitly specify make executable on Windows (DevEco env may not have it on PATH)
set(P7ZIP_MAKE "" CACHE FILEPATH "Path to make executable (e.g. C:/msys64/usr/bin/make.exe). If empty, auto-detect from PATH.")
set(P7ZIP_MAKE_HINTS "" CACHE STRING "Optional: semicolon-separated candidate make paths. Example: C:/a/make.exe;D:/b/mingw32-make.exe")

# Derive tarball URL if not overridden.
if(P7ZIP_TARBALL_URL STREQUAL "")
  if(P7ZIP_TAG STREQUAL "")
    message(FATAL_ERROR "[p7zip-prebuild] P7ZIP_TAG is empty. Provide -DP7ZIP_TAG=<github_tag_or_commit> or ensure ${P7ZIP_PATCH_DIR}/UPSTREAM_COMMIT.txt exists.")
  endif()
  set(P7ZIP_TARBALL_URL "https://codeload.github.com/p7zip-project/p7zip/tar.gz/${P7ZIP_TAG}")
endif()

# Map OHOS_ARCH -> target triple
set(_target_triple "")
if(OHOS_ARCH STREQUAL "arm64-v8a")
  set(_target_triple "aarch64-linux-ohos")
elseif(OHOS_ARCH STREQUAL "armeabi-v7a")
  set(_target_triple "arm-linux-ohos")
elseif(OHOS_ARCH STREQUAL "x86_64")
  set(_target_triple "x86_64-linux-ohos")
else()
  message(FATAL_ERROR "[p7zip-prebuild] Unsupported OHOS_ARCH: ${OHOS_ARCH}")
endif()

set(_work_root "${CMAKE_BINARY_DIR}/p7zip_prebuild/${OHOS_ARCH}")
set(_dl_dir "${_work_root}/downloads")
set(_src_root "${_work_root}/src")
file(MAKE_DIRECTORY "${_dl_dir}")
file(MAKE_DIRECTORY "${_src_root}")

set(_tarball "${_dl_dir}/p7zip-${P7ZIP_TAG}.tar.gz")
set(_patch_tmp_dir "${_work_root}/patch_tmp")

_p7zip_status("[p7zip-prebuild] Build: ${OHOS_ARCH} -> ${_out_lib}")
_p7zip_debug("[p7zip-prebuild] TARGET_TRIPLE=${_target_triple}")
_p7zip_debug("[p7zip-prebuild] OHOS_SDK=${OHOS_SDK}")
_p7zip_debug("[p7zip-prebuild] TARBALL=${P7ZIP_TARBALL_URL}")

# Download or copy tarball
if(EXISTS "${P7ZIP_TARBALL_URL}")
  file(COPY_FILE "${P7ZIP_TARBALL_URL}" "${_tarball}" ONLY_IF_DIFFERENT)
else()
  if(P7ZIP_VERBOSE AND NOT P7ZIP_QUIET)
    file(DOWNLOAD "${P7ZIP_TARBALL_URL}" "${_tarball}"
         SHOW_PROGRESS
         STATUS _dl_status)
  else()
    file(DOWNLOAD "${P7ZIP_TARBALL_URL}" "${_tarball}"
         STATUS _dl_status)
  endif()
  list(GET _dl_status 0 _dl_code)
  list(GET _dl_status 1 _dl_msg)
  if(NOT _dl_code EQUAL 0)
    message(FATAL_ERROR "[p7zip-prebuild] Download failed (code=${_dl_code}): ${_dl_msg}\n"
                        "If your build machine cannot access GitHub, set -DP7ZIP_TARBALL_URL=<local_tar_gz_path> or prebuild lib7z.so into entry/libs.")
  endif()
endif()

# Extract tarball to fresh working tree
set(_extract_dir "${_src_root}/extract")
file(REMOVE_RECURSE "${_extract_dir}")
file(MAKE_DIRECTORY "${_extract_dir}")
execute_process(
  COMMAND ${CMAKE_COMMAND} -E tar xzf "${_tarball}"
  WORKING_DIRECTORY "${_extract_dir}"
  RESULT_VARIABLE _tar_rc
)
if(NOT _tar_rc EQUAL 0)
  message(FATAL_ERROR "[p7zip-prebuild] Failed to extract tarball: ${_tarball} (rc=${_tar_rc})")
endif()

file(GLOB _children LIST_DIRECTORIES true "${_extract_dir}/*")
list(LENGTH _children _nchildren)
if(_nchildren LESS 1)
  message(FATAL_ERROR "[p7zip-prebuild] Extract produced no source directory under: ${_extract_dir}")
endif()
list(GET _children 0 _src_dir)

set(_scripts_dir "${CMAKE_CURRENT_LIST_DIR}")
if(NOT EXISTS "${_scripts_dir}/apply_patches.cmake" OR NOT EXISTS "${_scripts_dir}/build_one_abi.cmake")
  message(FATAL_ERROR "[p7zip-prebuild] Expected scripts not found under: ${_scripts_dir}")
endif()

# Apply patches (optional) via bundled script
execute_process(
  COMMAND ${CMAKE_COMMAND}
    -DSRC_DIR=${_src_dir}
    -DP7ZIP_APPLY_OHOS_PATCHES=${P7ZIP_APPLY_OHOS_PATCHES}
    -DP7ZIP_PATCH_STRICT=${P7ZIP_PATCH_STRICT}
    -DP7ZIP_PATCH_DIR=${P7ZIP_PATCH_DIR}
    -DP7ZIP_PATCH_TMP_DIR=${_patch_tmp_dir}
    -DP7ZIP_QUIET=${P7ZIP_QUIET}
    -DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}
    -P ${_scripts_dir}/apply_patches.cmake
  RESULT_VARIABLE _patch_rc
  OUTPUT_VARIABLE _patch_out
  ERROR_VARIABLE _patch_err
)
if(NOT _patch_rc EQUAL 0)
  message(FATAL_ERROR "[p7zip-prebuild] Patch step failed (rc=${_patch_rc}).\n${_patch_err}\n${_patch_out}")
endif()

# Build + copy via bundled script (writes to REPO_ROOT/entry/libs/<ABI>/lib7z.so)
execute_process(
  COMMAND ${CMAKE_COMMAND}
    -DSRC_DIR=${_src_dir}
    -DOHOS_SDK=${OHOS_SDK}
    -DABI=${OHOS_ARCH}
    -DTARGET_TRIPLE=${_target_triple}
    -DJOBS=${P7ZIP_JOBS}
    "-DMAKE_EXE=${P7ZIP_MAKE}"
    "-DMAKE_HINTS=${P7ZIP_MAKE_HINTS}"
    -DP7ZIP_QUIET=${P7ZIP_QUIET}
    -DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}
    -DOUTPUT_LIB_DIR=${REPO_ROOT}/entry/libs
    -P ${_scripts_dir}/build_one_abi.cmake
  RESULT_VARIABLE _build_rc
)
if(NOT _build_rc EQUAL 0)
  message(FATAL_ERROR "[p7zip-prebuild] Build step failed (rc=${_build_rc}).")
endif()

if(NOT EXISTS "${_out_lib}")
  message(FATAL_ERROR "[p7zip-prebuild] Build succeeded but output missing: ${_out_lib}")
endif()

_p7zip_status("[p7zip-prebuild] Done: ${_out_lib}")

