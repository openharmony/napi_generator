# Prebuild p7zip `lib7z.so` into `entry/src/main/cpp/thirdparty/source/<OHOS_ARCH>/lib7z.so` at CMake *configure time*.
# Included by `entry/src/main/cpp/CMakeLists.txt` before configuring native module targets.

if(NOT DEFINED REPO_ROOT OR REPO_ROOT STREQUAL "")
  # From: entry/src/main/cpp/thirdparty/patch/scripts -> repo root
  set(REPO_ROOT "${CMAKE_CURRENT_LIST_DIR}/../../../../../../..")
  get_filename_component(REPO_ROOT "${REPO_ROOT}" ABSOLUTE)
endif()

if(NOT DEFINED OHOS_ARCH OR OHOS_ARCH STREQUAL "")
  message(FATAL_ERROR "OHOS_ARCH is required (e.g. arm64-v8a / armeabi-v7a / x86_64).")
endif()

include("${CMAKE_CURRENT_LIST_DIR}/p7zip_log.cmake")

set(_thirdparty_source_root "${REPO_ROOT}/entry/src/main/cpp/thirdparty/source")
set(_out_lib "${_thirdparty_source_root}/${OHOS_ARCH}/lib7z.so")

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

function(_p7zip_prepare_env)
  option(P7ZIP_PATCH_STRICT "Fail configure if any patch does not apply cleanly" OFF)
  option(P7ZIP_APPLY_OHOS_PATCHES "Apply patches from cpp/thirdparty/patch before building" ON)
  set(P7ZIP_PATCH_DIR "${REPO_ROOT}/entry/src/main/cpp/thirdparty/patch" CACHE PATH "Directory containing OHOS patches")

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

  # DevEco passes -DOHOS_SDK_NATIVE=<sdk>/openharmony/native; prebuild needs <sdk>/openharmony (llvm+sysroot).
  # HarmonyOS + BiSheng toolchain sets CMAKE_C_COMPILER under hms/native, so compiler-based derivation fails.
  if(OHOS_SDK STREQUAL "" AND DEFINED OHOS_SDK_NATIVE AND NOT "${OHOS_SDK_NATIVE}" STREQUAL "")
    get_filename_component(_ohos_sdk_from_native "${OHOS_SDK_NATIVE}" DIRECTORY)
    if(EXISTS "${_ohos_sdk_from_native}/native/llvm" AND EXISTS "${_ohos_sdk_from_native}/native/sysroot")
      set(OHOS_SDK "${_ohos_sdk_from_native}")
    endif()
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

  # Host tools absolute paths (configured in cpp/CMakeLists.txt).
  set(P7ZIP_HOST_MAKE "" CACHE FILEPATH "Absolute path to make.exe")
  set(P7ZIP_HOST_GIT "" CACHE FILEPATH "Absolute path to git.exe")
  set(P7ZIP_HOST_PATCH "" CACHE FILEPATH "Absolute path to patch.exe")
  set(P7ZIP_HOST_SH "" CACHE FILEPATH "Optional absolute path to sh.exe on Windows")

  # Derive tarball URL if not overridden.
  if(P7ZIP_TARBALL_URL STREQUAL "")
    if(P7ZIP_TAG STREQUAL "")
      message(FATAL_ERROR "[p7zip-prebuild] P7ZIP_TAG is empty. Provide -DP7ZIP_TAG=<github_tag_or_commit> or ensure ${P7ZIP_PATCH_DIR}/UPSTREAM_COMMIT.txt exists.")
    endif()
    set(P7ZIP_TARBALL_URL "https://codeload.github.com/p7zip-project/p7zip/tar.gz/${P7ZIP_TAG}")
  endif()

  # Propagate derived values to caller scope.
  set(P7ZIP_HOST_MAKE "${P7ZIP_HOST_MAKE}" PARENT_SCOPE)
  set(P7ZIP_HOST_GIT "${P7ZIP_HOST_GIT}" PARENT_SCOPE)
  set(P7ZIP_HOST_PATCH "${P7ZIP_HOST_PATCH}" PARENT_SCOPE)
  set(P7ZIP_HOST_SH "${P7ZIP_HOST_SH}" PARENT_SCOPE)
  set(P7ZIP_JOBS "${P7ZIP_JOBS}" PARENT_SCOPE)
  set(OHOS_SDK "${OHOS_SDK}" PARENT_SCOPE)
  set(P7ZIP_TARBALL_URL "${P7ZIP_TARBALL_URL}" PARENT_SCOPE)
endfunction()

option(P7ZIP_REBUILD_IF_EXISTS "Rebuild and replace lib7z.so even if already exists" OFF)
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

_p7zip_prepare_env()
_p7zip_require_host_tool(P7ZIP_HOST_MAKE "GNU make (set in entry/src/main/cpp/CMakeLists.txt)")
_p7zip_require_host_tool(P7ZIP_HOST_GIT "git (set in entry/src/main/cpp/CMakeLists.txt)")
_p7zip_require_host_tool(P7ZIP_HOST_PATCH "GNU patch (set in entry/src/main/cpp/CMakeLists.txt)")
if(NOT "${P7ZIP_HOST_SH}" STREQUAL "")
  _p7zip_require_host_tool(P7ZIP_HOST_SH "Make SHELL (sh.exe)")
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
set(_source_root "${_thirdparty_source_root}")
set(_dl_dir "${_work_root}/downloads")
file(MAKE_DIRECTORY "${_dl_dir}")
file(MAKE_DIRECTORY "${_source_root}")

set(_tarball "${_dl_dir}/p7zip-${P7ZIP_TAG}.tar.gz")
set(_patch_tmp_dir "${_work_root}/patch_tmp")
set(_lock_dir "${_thirdparty_source_root}/.locks")
file(MAKE_DIRECTORY "${_lock_dir}")
set(_build_lock "${_lock_dir}/p7zip-prebuild.lock")

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
                        "If your build machine cannot access GitHub, set -DP7ZIP_TARBALL_URL=<local_tar_gz_path> or prebuild lib7z.so into thirdparty/source.")
  endif()
endif()

file(LOCK "${_build_lock}" GUARD FILE TIMEOUT 1800 RESULT_VARIABLE _lock_rc)
if(NOT _lock_rc EQUAL 0)
  message(FATAL_ERROR "[p7zip-prebuild] Failed to acquire build lock: ${_build_lock} (rc=${_lock_rc})")
endif()

set(_src_dir "${_source_root}/p7zip-${P7ZIP_TAG}")
if(NOT EXISTS "${_src_dir}")
  # Keep downloaded third-party source under project tree; do not remove it.
  set(_extract_dir "${_work_root}/extract")
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
    file(LOCK "${_build_lock}" RELEASE)
    message(FATAL_ERROR "[p7zip-prebuild] Extract produced no source directory under: ${_extract_dir}")
  endif()
  list(GET _children 0 _extracted_dir)
  if(EXISTS "${_src_dir}")
    file(REMOVE_RECURSE "${_extracted_dir}")
  else()
    file(RENAME "${_extracted_dir}" "${_src_dir}")
  endif()
endif()

set(_scripts_dir "${CMAKE_CURRENT_LIST_DIR}")
if(NOT EXISTS "${_scripts_dir}/apply_patches.cmake")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Expected scripts not found under: ${_scripts_dir}")
endif()

if(NOT EXISTS "${_src_dir}/CPP/7zip/Bundles/Format7zF")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Source tree does not contain expected build dir: ${_src_dir}/CPP/7zip/Bundles/Format7zF")
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
  "-DP7ZIP_HOST_GIT=${P7ZIP_HOST_GIT}"
  "-DP7ZIP_HOST_PATCH=${P7ZIP_HOST_PATCH}"
  -DP7ZIP_QUIET=${P7ZIP_QUIET}
  -DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}
)

# Build by directly invoking upstream build script:
#   CPP/7zip/Bundles/Format7zF/makefile.gcc
set(_build_dir "${_src_dir}/CPP/7zip/Bundles/Format7zF")
if(NOT EXISTS "${_build_dir}/makefile.gcc")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Upstream build script not found: ${_build_dir}/makefile.gcc")
endif()

set(_ohos_llvm "${OHOS_SDK}/native/llvm")
set(_ohos_sysroot "${OHOS_SDK}/native/sysroot")
set(_clang "${_ohos_llvm}/bin/clang")
set(_clangxx "${_ohos_llvm}/bin/clang++")
set(_ar "${_ohos_llvm}/bin/llvm-ar")
set(_ranlib "${_ohos_llvm}/bin/llvm-ranlib")
set(_strip "${_ohos_llvm}/bin/llvm-strip")
if(NOT EXISTS "${_clang}" AND EXISTS "${_clang}.exe")
  set(_clang "${_clang}.exe")
endif()
if(NOT EXISTS "${_clangxx}" AND EXISTS "${_clangxx}.exe")
  set(_clangxx "${_clangxx}.exe")
endif()
if(NOT EXISTS "${_ar}" AND EXISTS "${_ar}.exe")
  set(_ar "${_ar}.exe")
endif()
if(NOT EXISTS "${_ranlib}" AND EXISTS "${_ranlib}.exe")
  set(_ranlib "${_ranlib}.exe")
endif()
if(NOT EXISTS "${_strip}" AND EXISTS "${_strip}.exe")
  set(_strip "${_strip}.exe")
endif()

if(NOT EXISTS "${_clang}" OR NOT EXISTS "${_ohos_sysroot}")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Invalid OHOS toolchain: ${OHOS_SDK}")
endif()

set(_make_exe "${P7ZIP_HOST_MAKE}")

# Push toolchain + (on Windows) GNU make SHELL/PATH into the process environment.
# Do not use `cmake -E env PATH=...`: a full Windows PATH exceeds the ~8191 char
# command-line limit, which surfaces as rc=1 and a localized "Access denied" msg.
set(_env_bak_cc "$ENV{CC}")
set(_env_bak_cxx "$ENV{CXX}")
set(_env_bak_ar "$ENV{AR}")
set(_env_bak_ranlib "$ENV{RANLIB}")
set(_env_bak_strip "$ENV{STRIP}")
set(_env_bak_path "$ENV{PATH}")
set(_env_bak_shell "$ENV{SHELL}")

set(ENV{CC} "${_clang}")
set(ENV{CXX} "${_clangxx}")
set(ENV{AR} "${_ar}")
set(ENV{RANLIB} "${_ranlib}")
set(ENV{STRIP} "${_strip}")

if(CMAKE_HOST_WIN32)
  get_filename_component(_make_dir "${_make_exe}" DIRECTORY)
  set(_path_prefix "${_make_dir}")
  if(NOT "${P7ZIP_HOST_SH}" STREQUAL "")
    get_filename_component(_sh_dir "${P7ZIP_HOST_SH}" DIRECTORY)
    set(ENV{SHELL} "${P7ZIP_HOST_SH}")
    set(_path_prefix "${_sh_dir}")
  else()
    set(ENV{SHELL} "C:/Windows/System32/cmd.exe")
  endif()
  set(ENV{PATH} "${_path_prefix};${_make_dir};${_env_bak_path}")
endif()

set(_target_flags "--target=${_target_triple} --sysroot=${_ohos_sysroot}")
set(_local_flags "-D__MUSL__=1 -DZ7_NO_ZSTD -DZ7_NO_FL2 -DZ7_NO_HW_AES -DZ7_NO_HW_SHA -DZ7_NO_HW_CRC -DNDEBUG -D_REENTRANT -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE -D_7ZIP_AFFINITY_DISABLE -U__ARM_FEATURE_CRC32 -U__ARM_FEATURE_UNALIGNED")

# Force a clean object tree per ABI to avoid cross-arch object contamination.
file(REMOVE_RECURSE "${_build_dir}/_o")
execute_process(
  COMMAND "${_make_exe}" -f makefile.gcc clean
  WORKING_DIRECTORY "${_build_dir}"
  OUTPUT_QUIET
  ERROR_QUIET
)
execute_process(
  COMMAND "${CMAKE_COMMAND}" -E make_directory "_o/lib"
  WORKING_DIRECTORY "${_build_dir}"
)
execute_process(
  COMMAND
    "${_make_exe}" -f makefile.gcc
      "SystemDrive="
      "USE_ASM="
      "USE_LZMA_DEC_ASM="
      "CC_SHARED=-fPIC"
      "PROG=7z"
      "LOCAL_FLAGS=${_local_flags}"
      "CFLAGS_BASE2=${_target_flags}"
      "CXXFLAGS_BASE2=${_target_flags}"
      "LDFLAGS=${_target_flags} -shared -fPIC -L${_ohos_sysroot}/usr/lib/${_target_triple}"
      "7Z_ADDON_CODEC="
      "7z_ADDON_LIB="
      "7z_ADDON_LIB_FLAG="
      "ZSTD_LIB="
      "LZ4_LIB="
      "BROTLI_LIB="
      "LIZARD_LIB="
      "LZ5_LIB="
      "FAST-LZMA2_LIB="
      "LZHAM_LIB="
      "MY_MKDIR=${CMAKE_COMMAND} -E make_directory"
      "-j${P7ZIP_JOBS}"
  WORKING_DIRECTORY "${_build_dir}"
  RESULT_VARIABLE _build_rc
  OUTPUT_VARIABLE _build_out
  ERROR_VARIABLE _build_err
)

if("${_env_bak_cc}" STREQUAL "")
  unset(ENV{CC})
else()
  set(ENV{CC} "${_env_bak_cc}")
endif()
if("${_env_bak_cxx}" STREQUAL "")
  unset(ENV{CXX})
else()
  set(ENV{CXX} "${_env_bak_cxx}")
endif()
if("${_env_bak_ar}" STREQUAL "")
  unset(ENV{AR})
else()
  set(ENV{AR} "${_env_bak_ar}")
endif()
if("${_env_bak_ranlib}" STREQUAL "")
  unset(ENV{RANLIB})
else()
  set(ENV{RANLIB} "${_env_bak_ranlib}")
endif()
if("${_env_bak_strip}" STREQUAL "")
  unset(ENV{STRIP})
else()
  set(ENV{STRIP} "${_env_bak_strip}")
endif()
if(CMAKE_HOST_WIN32)
  if("${_env_bak_path}" STREQUAL "")
    unset(ENV{PATH})
  else()
    set(ENV{PATH} "${_env_bak_path}")
  endif()
  if("${_env_bak_shell}" STREQUAL "")
    unset(ENV{SHELL})
  else()
    set(ENV{SHELL} "${_env_bak_shell}")
  endif()
endif()

if(NOT _build_rc EQUAL 0)
  set(_build_log "${_build_err}\n${_build_out}")
  _p7zip_trim("${_build_log}" 12000 _build_log)
  file(WRITE "${CMAKE_BINARY_DIR}/p7zip_make_fail.log" "${_build_err}\n${_build_out}")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR
    "[p7zip-prebuild] Build failed (rc=${_build_rc}) via upstream makefile.gcc.\n"
    "Full log also written to: ${CMAKE_BINARY_DIR}/p7zip_make_fail.log\n"
    "${_build_log}")
endif()

set(_built_so "")
set(_so_candidates
  "${_build_dir}/_o/lib/7z.so"
  "${_build_dir}/_o/7z.so"
  "${_build_dir}/b/7z.so"
  "${_build_dir}/7z.so"
)
foreach(_c IN LISTS _so_candidates)
  if(EXISTS "${_c}")
    set(_built_so "${_c}")
    break()
  endif()
endforeach()
if(_built_so STREQUAL "")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Upstream build finished but 7z.so not found under: ${_build_dir}")
endif()

file(MAKE_DIRECTORY "${_thirdparty_source_root}/${OHOS_ARCH}")
file(COPY_FILE "${_built_so}" "${_out_lib}" ONLY_IF_DIFFERENT)

if(NOT EXISTS "${_out_lib}")
  file(LOCK "${_build_lock}" RELEASE)
  message(FATAL_ERROR "[p7zip-prebuild] Build succeeded but output missing: ${_out_lib}")
endif()

file(LOCK "${_build_lock}" RELEASE)
_p7zip_status("[p7zip-prebuild] Done: ${_out_lib}")

