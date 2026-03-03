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
include("${CMAKE_CURRENT_LIST_DIR}/header_manifest.cmake")

set(_out_lib "${REPO_ROOT}/entry/libs/${OHOS_ARCH}/lib7z.so")
set(_include_root "${REPO_ROOT}/entry/libs/include")
set(_include_p7zip "${_include_root}/p7zip")
set(_expected_header_rel ${P7ZIP_HEADER_MANIFEST})

function(_p7zip_copy_manifest_header _rel _src_root _dst_root)
  set(_src_header "")
  if(_rel MATCHES "^C/(.+)$")
    set(_src_header "${_src_root}/C/${CMAKE_MATCH_1}")
  elseif(_rel MATCHES "^Common/(.+)$")
    set(_src_header "${_src_root}/CPP/Common/${CMAKE_MATCH_1}")
  elseif(_rel STREQUAL "IArchive.h")
    # Project code uses #include "IArchive.h", while upstream path is CPP/7zip/Archive/IArchive.h.
    set(_src_header "${_src_root}/CPP/7zip/Archive/IArchive.h")
  else()
    set(_src_header "${_src_root}/CPP/7zip/${_rel}")
  endif()

  if(NOT EXISTS "${_src_header}")
    message(FATAL_ERROR "[p7zip-prebuild] Missing expected header from source: ${_src_header} (for ${_rel})")
  endif()

  set(_dst_header "${_dst_root}/${_rel}")
  get_filename_component(_dst_dir "${_dst_header}" DIRECTORY)
  file(MAKE_DIRECTORY "${_dst_dir}")
  file(COPY_FILE "${_src_header}" "${_dst_header}" ONLY_IF_DIFFERENT)
  if(NOT EXISTS "${_dst_header}")
    message(FATAL_ERROR "[p7zip-prebuild] Failed to copy header to destination: ${_dst_header}")
  endif()
endfunction()

function(_p7zip_rewrite_include_to_local_c _header_path)
  if(EXISTS "${_header_path}")
    file(READ "${_header_path}" _txt)
    string(REPLACE "../../C/" "C/" _txt "${_txt}")
    string(REPLACE "..\\..\\C\\" "C/" _txt "${_txt}")
    file(WRITE "${_header_path}" "${_txt}")
  endif()
endfunction()

function(_p7zip_run_script _step_name _script_path)
  execute_process(
    COMMAND ${CMAKE_COMMAND} ${ARGN} -P "${_script_path}"
    RESULT_VARIABLE _rc
    OUTPUT_VARIABLE _out
    ERROR_VARIABLE _err
  )
  if(NOT _rc EQUAL 0)
    message(FATAL_ERROR "[p7zip-prebuild] ${_step_name} failed (rc=${_rc}).\n${_err}\n${_out}")
  endif()
endfunction()

function(_p7zip_headers_need_sync _include_dir _manifest_var _out_var)
  set(_need_sync_headers OFF)
  set(_manifest "${${_manifest_var}}")
  list(LENGTH _manifest _manifest_count)
  if(_manifest_count LESS 1)
    set(_need_sync_headers ON)
  else()
    foreach(_rel IN LISTS _manifest)
      if(NOT EXISTS "${_include_dir}/${_rel}")
        set(_need_sync_headers ON)
        break()
      endif()
    endforeach()
  endif()
  set(${_out_var} "${_need_sync_headers}" PARENT_SCOPE)
endfunction()

function(_p7zip_prepare_env)
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
endfunction()

_p7zip_headers_need_sync("${_include_p7zip}" "_expected_header_rel" _need_sync_headers)

option(P7ZIP_REBUILD_IF_EXISTS "Rebuild and replace lib7z.so even if already exists" OFF)
set(_skip_build OFF)
if(EXISTS "${_out_lib}" AND NOT P7ZIP_REBUILD_IF_EXISTS AND NOT _need_sync_headers)
  _p7zip_status("[p7zip-prebuild] Found (skip): ${_out_lib}")
  return()
endif()
if(EXISTS "${_out_lib}" AND NOT P7ZIP_REBUILD_IF_EXISTS AND _need_sync_headers)
  _p7zip_status("[p7zip-prebuild] Found lib but headers missing/incomplete; syncing include directory.")
  set(_skip_build ON)
endif()
if(EXISTS "${_out_lib}" AND P7ZIP_REBUILD_IF_EXISTS)
  _p7zip_status("[p7zip-prebuild] Rebuild enabled, will replace: ${_out_lib}")
endif()

option(P7ZIP_PREBUILD_AT_CONFIGURE "Prebuild lib7z.so at CMake configure time" ON)
if(NOT P7ZIP_PREBUILD_AT_CONFIGURE)
  _p7zip_status("[p7zip-prebuild] Disabled; expecting prebuilt lib: ${_out_lib}")
  return()
endif()

_p7zip_prepare_env()

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

if(NOT EXISTS "${_src_dir}/CPP/7zip" OR NOT EXISTS "${_src_dir}/CPP/Common" OR NOT EXISTS "${_src_dir}/C")
  message(FATAL_ERROR "[p7zip-prebuild] Source tree does not contain expected header dirs under: ${_src_dir}")
endif()

# Apply patches (optional) via bundled script
_p7zip_run_script(
  "Patch step"
  "${_scripts_dir}/apply_patches.cmake"
  -DSRC_DIR=${_src_dir}
  -DP7ZIP_APPLY_OHOS_PATCHES=${P7ZIP_APPLY_OHOS_PATCHES}
  -DP7ZIP_PATCH_STRICT=${P7ZIP_PATCH_STRICT}
  -DP7ZIP_PATCH_DIR=${P7ZIP_PATCH_DIR}
  -DP7ZIP_PATCH_TMP_DIR=${_patch_tmp_dir}
  -DP7ZIP_QUIET=${P7ZIP_QUIET}
  -DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}
)

# Sync headers to fixed project include manifest (same paths and hierarchy every run).

file(REMOVE_RECURSE "${_include_p7zip}")
foreach(_rel IN LISTS _expected_header_rel)
  _p7zip_copy_manifest_header("${_rel}" "${_src_dir}" "${_include_p7zip}")
endforeach()

# Keep all headers under entry/libs/include/p7zip only.
# Upstream headers that use ../../C/... are rewritten to C/... to match this tree.
set(_rewrite_headers
  "MyVersion.h"
  "Common/MyTypes.h"
  "Common/MyBuffer2.h"
  "Common/DynLimBuf.h"
  "Common/Common.h"
)
foreach(_rel IN LISTS _rewrite_headers)
  set(_path "${_include_p7zip}/${_rel}")
  _p7zip_rewrite_include_to_local_c("${_path}")
endforeach()

_p7zip_status("[p7zip-prebuild] Synced headers: ${_include_p7zip}")

# Build + copy via bundled script (writes to REPO_ROOT/entry/libs/<ABI>/lib7z.so)
if(NOT _skip_build)
  _p7zip_run_script(
    "Build step"
    "${_scripts_dir}/build_one_abi.cmake"
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
  )
else()
  _p7zip_status("[p7zip-prebuild] Skip build: existing lib kept, headers synced.")
endif()

if(NOT EXISTS "${_out_lib}")
  message(FATAL_ERROR "[p7zip-prebuild] Build succeeded but output missing: ${_out_lib}")
endif()

_p7zip_status("[p7zip-prebuild] Done: ${_out_lib}")

