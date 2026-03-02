cmake_minimum_required(VERSION 3.5.0)
project(p7zipTest_bootstrap)

# Repo root from: entry/src/main/cpp_bootstrap -> ../../../../
set(REPO_ROOT "${CMAKE_CURRENT_LIST_DIR}/../../../..")
get_filename_component(REPO_ROOT "${REPO_ROOT}" ABSOLUTE)
set(_p7zip_prebuild "${CMAKE_CURRENT_LIST_DIR}/../cmake/p7zip/scripts/prebuild_lib7z.cmake")

# Prebuild lib7z.so if missing (runs at configure time), then configure the original native module.
include("${_p7zip_prebuild}")

# Now run the original logic unchanged.
add_subdirectory("${CMAKE_CURRENT_LIST_DIR}/../cpp" "${CMAKE_BINARY_DIR}/cpp_native")

# Ensure Ninja knows how to produce lib7z.so if it's missing at build time.
set(_p7zip_out "${REPO_ROOT}/entry/libs/${OHOS_ARCH}/lib7z.so")
set(_p7zip_prebuild_defs
  "-DOHOS_ARCH=${OHOS_ARCH}"
  "-DOHOS_SDK=${OHOS_SDK}"
  "-DP7ZIP_MAKE=${P7ZIP_MAKE}"
  "-DP7ZIP_JOBS=${P7ZIP_JOBS}"
  "-DP7ZIP_REBUILD_IF_EXISTS=${P7ZIP_REBUILD_IF_EXISTS}"
  "-DP7ZIP_TARBALL_URL=${P7ZIP_TARBALL_URL}"
  "-DP7ZIP_VERIFY_TARBALL=${P7ZIP_VERIFY_TARBALL}"
  "-DP7ZIP_TARBALL_SHA256=${P7ZIP_TARBALL_SHA256}"
  "-DP7ZIP_APPLY_OHOS_PATCHES=${P7ZIP_APPLY_OHOS_PATCHES}"
  "-DP7ZIP_PATCH_STRICT=${P7ZIP_PATCH_STRICT}"
  "-DP7ZIP_QUIET=${P7ZIP_QUIET}"
  "-DP7ZIP_VERBOSE=${P7ZIP_VERBOSE}"
)
add_custom_command(
  OUTPUT "${_p7zip_out}"
  COMMAND "${CMAKE_COMMAND}" ${_p7zip_prebuild_defs} -P "${_p7zip_prebuild}"
  DEPENDS "${_p7zip_prebuild}"
  VERBATIM
  COMMENT "Prebuilding lib7z.so (${OHOS_ARCH})"
)
add_custom_target(p7zip_prebuild_lib7z DEPENDS "${_p7zip_out}")
if(TARGET entry)
  add_dependencies(entry p7zip_prebuild_lib7z)
endif()

