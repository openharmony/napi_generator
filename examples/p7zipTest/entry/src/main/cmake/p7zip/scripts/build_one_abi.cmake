# Builds p7zip lib7z.so for one OHOS ABI by invoking upstream makefiles (Format7zF bundle),
# then copies output to entry/libs/<ABI>/lib7z.so.
#
# Required inputs:
#   - SRC_DIR: p7zip source dir
#   - OHOS_SDK: OpenHarmony SDK root
#   - ABI: arm64-v8a | armeabi-v7a | x86_64
#   - TARGET_TRIPLE: e.g. aarch64-linux-ohos
#   - JOBS: make -j value (optional, defaults to 4)
#   - OUTPUT_LIB_DIR: output base dir (contains ABI subfolders)

foreach(v IN ITEMS SRC_DIR OHOS_SDK ABI TARGET_TRIPLE OUTPUT_LIB_DIR)
  if(NOT DEFINED ${v} OR "${${v}}" STREQUAL "")
    message(FATAL_ERROR "${v} is required")
  endif()
endforeach()

if(NOT DEFINED JOBS OR JOBS STREQUAL "")
  set(JOBS "4")
endif()

include("${CMAKE_CURRENT_LIST_DIR}/p7zip_log.cmake")

set(OHOS_LLVM "${OHOS_SDK}/native/llvm")
set(OHOS_SYSROOT "${OHOS_SDK}/native/sysroot")

set(_clang "${OHOS_LLVM}/bin/clang")
set(_clangxx "${OHOS_LLVM}/bin/clang++")
set(_ar "${OHOS_LLVM}/bin/llvm-ar")
set(_ranlib "${OHOS_LLVM}/bin/llvm-ranlib")
set(_strip "${OHOS_LLVM}/bin/llvm-strip")

# Windows SDK uses .exe; Unix-like uses no suffix.
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

if(NOT EXISTS "${_clang}")
  message(FATAL_ERROR "clang not found under: ${OHOS_LLVM}/bin/clang(.exe)")
endif()
if(NOT EXISTS "${OHOS_SYSROOT}")
  message(FATAL_ERROR "sysroot not found under: ${OHOS_SYSROOT}")
endif()

# ---- GNU make discovery ----
# Preferred ways:
#   1) Pass -DMAKE_EXE=/path/to/make(.exe)
#   2) Pass -DMAKE_HINTS="C:/path/a/make.exe;D:/path/b/mingw32-make.exe"
#   3) Set env var P7ZIP_MAKE=/path/to/make(.exe)
#   4) Ensure make is on PATH (make / mingw32-make / gmake)

# 1) Explicit MAKE_EXE
if(DEFINED MAKE_EXE AND NOT MAKE_EXE STREQUAL "")
  # CMake treats semicolon-separated strings as lists. If the build system
  # accidentally passes multiple values, keep the first one (path) and ignore
  # the rest to avoid false "file not found" errors.
  list(LENGTH MAKE_EXE _make_len)
  if(_make_len GREATER 1)
    list(GET MAKE_EXE 0 _make_first)
    message(WARNING "MAKE_EXE is a list; using first element only: ${_make_first}")
    set(MAKE_EXE "${_make_first}")
  endif()
  if(NOT EXISTS "${MAKE_EXE}")
    message(FATAL_ERROR "MAKE_EXE was provided but does not exist: ${MAKE_EXE}")
  endif()
endif()

# 2) Env var
if((NOT DEFINED MAKE_EXE OR MAKE_EXE STREQUAL "") AND DEFINED ENV{P7ZIP_MAKE} AND NOT "$ENV{P7ZIP_MAKE}" STREQUAL "")
  set(MAKE_EXE "$ENV{P7ZIP_MAKE}")
endif()

# 3) Hints list (semi-colon separated)
if((NOT DEFINED MAKE_EXE OR MAKE_EXE STREQUAL "") AND DEFINED MAKE_HINTS AND NOT MAKE_HINTS STREQUAL "")
  set(_make_hints "${MAKE_HINTS}")
  foreach(_c IN LISTS _make_hints)
    if(EXISTS "${_c}")
      set(MAKE_EXE "${_c}")
      break()
    endif()
  endforeach()
endif()

# 4) PATH lookup
if(NOT DEFINED MAKE_EXE OR MAKE_EXE STREQUAL "")
  find_program(MAKE_EXE NAMES make mingw32-make gmake)
endif()

if(NOT DEFINED MAKE_EXE OR MAKE_EXE STREQUAL "")
  message(FATAL_ERROR
    "make is required to build p7zip (makefile.gcc), but it was not found.\n"
    "Fix options:\n"
    "  - Put GNU make on PATH (make / mingw32-make / gmake)\n"
    "  - Or pass it explicitly: -DMAKE_EXE=C:/path/to/make.exe\n"
    "  - Or pass hints: -DMAKE_HINTS=C:/a/make.exe;D:/b/mingw32-make.exe\n"
    "  - Or set env: P7ZIP_MAKE=C:/path/to/make.exe")
endif()

_p7zip_debug("[p7zip] Using make: ${MAKE_EXE}")

set(CC "${_clang}")
set(CXX "${_clangxx}")
set(AR "${_ar}")
set(RANLIB "${_ranlib}")
set(STRIP "${_strip}")

set(TARGET_FLAGS "--target=${TARGET_TRIPLE} --sysroot=${OHOS_SYSROOT}")

set(CFLAGS_BASE2 "${TARGET_FLAGS}")
set(CXXFLAGS_BASE2 "${TARGET_FLAGS}")

set(LDFLAGS "${TARGET_FLAGS} -shared -fPIC -L${OHOS_SYSROOT}/usr/lib/${TARGET_TRIPLE}")

# IMPORTANT:
# To ensure our OHOS-specific defines take effect, pass them via `LOCAL_FLAGS` on the make command line.
set(_local_flags "-D__MUSL__=1 -DZ7_NO_ZSTD -DZ7_NO_FL2 -DZ7_NO_HW_AES -DZ7_NO_HW_SHA -DZ7_NO_HW_CRC -DNDEBUG -D_REENTRANT -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE -D_7ZIP_AFFINITY_DISABLE")

# Best-effort: disable CRC32 intrinsics when cross-compiling to ARM targets (safe on other targets too).
string(APPEND _local_flags " -U__ARM_FEATURE_CRC32 -U__ARM_FEATURE_UNALIGNED")

set(build_dir "${SRC_DIR}/CPP/7zip/Bundles/Format7zF")
if(NOT EXISTS "${build_dir}")
  message(FATAL_ERROR "Expected build dir does not exist: ${build_dir}")
endif()

_p7zip_status("[p7zip] Building lib7z.so (${ABI})")
_p7zip_debug("[p7zip] TARGET_TRIPLE=${TARGET_TRIPLE}")

# Clean (best-effort)
execute_process(
  COMMAND "${MAKE_EXE}" -f makefile.gcc clean
  WORKING_DIRECTORY "${build_dir}"
  OUTPUT_QUIET
  ERROR_QUIET
)

# Ensure output directories exist.
# Some p7zip makefiles link to `$O/lib/7z.so` but don't always create `$O/lib` first,
# especially when addon codec targets are disabled.
execute_process(
  COMMAND "${CMAKE_COMMAND}" -E make_directory "_o/lib"
  WORKING_DIRECTORY "${build_dir}"
)

# Build
execute_process(
  COMMAND
    "${CMAKE_COMMAND}" -E env
      "CC=${CC}"
      "CXX=${CXX}"
      "AR=${AR}"
      "RANLIB=${RANLIB}"
      "STRIP=${STRIP}"
    "${MAKE_EXE}" -f makefile.gcc
      # On Windows host, p7zip makefiles use `ifdef SystemDrive` to decide whether to build
      # Windows-specific resource.rc via `windres.exe` (which then requires `gcc` for preprocessing).
      # Linux builds don't have SystemDrive, so they don't build resource.o. We force the same behavior
      # for OHOS cross-builds to avoid `windres/gcc` dependency and to match Linux result.
      "SystemDrive="
      "USE_ASM="
      "USE_LZMA_DEC_ASM="
      "CC_SHARED=-fPIC"
      "PROG=7z"
      "LOCAL_FLAGS=${_local_flags}"
      "CFLAGS_BASE2=${CFLAGS_BASE2}"
      "CXXFLAGS_BASE2=${CXXFLAGS_BASE2}"
      "LDFLAGS=${LDFLAGS}"
      # Avoid building/depending on external addon codecs (zstd/lz4/brotli/...) which requires extra tools (patchelf) and libs.
      # This mirrors what the OHOS patch set does, but keeps the build working even if patches don't apply to this upstream snapshot.
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
      # Make mkdir cross-platform (Windows cmd has issues with forward slashes; makefile also uses nested paths)
      "MY_MKDIR=${CMAKE_COMMAND} -E make_directory"
      "-j${JOBS}"
  WORKING_DIRECTORY "${build_dir}"
  RESULT_VARIABLE _build_rc
)
if(NOT _build_rc EQUAL 0)
  message(FATAL_ERROR "p7zip build failed for ABI=${ABI} (rc=${_build_rc}).")
endif()

# Locate built shared library in known locations (from existing bash script)
set(_candidates
  "${build_dir}/_o/lib/7z.so"
  "${build_dir}/_o/7z.so"
  "${build_dir}/b/7z.so"
  "${build_dir}/7z.so"
)

set(_found "")
foreach(c IN LISTS _candidates)
  if(EXISTS "${c}")
    set(_found "${c}")
    break()
  endif()
endforeach()

if(_found STREQUAL "")
  message(FATAL_ERROR "Build succeeded but could not locate 7z.so under: ${build_dir}")
endif()

file(MAKE_DIRECTORY "${OUTPUT_LIB_DIR}/${ABI}")
file(COPY_FILE "${_found}" "${OUTPUT_LIB_DIR}/${ABI}/lib7z.so" ONLY_IF_DIFFERENT)
_p7zip_status("[p7zip] Copied: ${OUTPUT_LIB_DIR}/${ABI}/lib7z.so")

