# Applies OHOS patch set (unified diffs) to a p7zip source tree.
#
# Inputs:
#   - SRC_DIR (required): extracted p7zip source dir (working tree)
#   - P7ZIP_APPLY_OHOS_PATCHES: ON/OFF
#   - P7ZIP_PATCH_DIR (required if enabled): directory containing ohos-all.patch

if(NOT DEFINED SRC_DIR OR SRC_DIR STREQUAL "")
  message(FATAL_ERROR "SRC_DIR is required")
endif()

include("${CMAKE_CURRENT_LIST_DIR}/p7zip_log.cmake")

if(NOT DEFINED P7ZIP_PATCH_TMP_DIR OR P7ZIP_PATCH_TMP_DIR STREQUAL "")
  message(FATAL_ERROR "P7ZIP_PATCH_TMP_DIR is required (must point to a build-tree temporary directory)")
endif()

if(NOT DEFINED P7ZIP_APPLY_OHOS_PATCHES)
  set(P7ZIP_APPLY_OHOS_PATCHES "ON")
endif()

if(NOT DEFINED P7ZIP_PATCH_STRICT)
  # When OFF, patches that don't apply cleanly will be skipped with a WARNING,
  # allowing the build to proceed (useful when upstream changes slightly).
  set(P7ZIP_PATCH_STRICT "OFF")
endif()

if(NOT P7ZIP_APPLY_OHOS_PATCHES)
  _p7zip_status("[p7zip] Patch step disabled")
  return()
endif()

if(NOT DEFINED P7ZIP_HOST_GIT)
  set(P7ZIP_HOST_GIT "")
endif()
if(NOT DEFINED P7ZIP_HOST_PATCH)
  set(P7ZIP_HOST_PATCH "")
endif()
_p7zip_require_host_tool(P7ZIP_HOST_GIT "git")
_p7zip_require_host_tool(P7ZIP_HOST_PATCH "GNU patch")
set(GIT_EXE "${P7ZIP_HOST_GIT}")
set(PATCH_EXE "${P7ZIP_HOST_PATCH}")

if(NOT DEFINED P7ZIP_PATCH_DIR OR P7ZIP_PATCH_DIR STREQUAL "")
  message(FATAL_ERROR "P7ZIP_PATCH_DIR is required when patching is enabled")
endif()

if(NOT EXISTS "${P7ZIP_PATCH_DIR}")
  message(FATAL_ERROR "Patch dir does not exist: ${P7ZIP_PATCH_DIR}")
endif()

set(_patches "")
if(EXISTS "${P7ZIP_PATCH_DIR}/ohos-all.patch")
  list(APPEND _patches "${P7ZIP_PATCH_DIR}/ohos-all.patch")
endif()

if(_patches STREQUAL "")
  message(FATAL_ERROR "No patches found under: ${P7ZIP_PATCH_DIR} (expected ohos-all.patch)")
endif()

# Guard: remove stale reject files from previous patch attempts.
file(GLOB_RECURSE _stale_rej_files "${SRC_DIR}/*.rej")
list(LENGTH _stale_rej_files _stale_rej_count)
if(_stale_rej_count GREATER 0)
  _p7zip_status("[p7zip] Cleaning ${_stale_rej_count} stale .rej file(s) before patching")
  foreach(_rej IN LISTS _stale_rej_files)
    file(REMOVE "${_rej}")
  endforeach()
endif()

_p7zip_status("[p7zip] Applying patches...")
foreach(p IN LISTS _patches)
  get_filename_component(_pname "${p}" NAME)
  _p7zip_debug("[p7zip]  - ${_pname}")

  # Normalize patch line endings (CRLF -> LF). Some Windows checkouts/editors can
  # introduce CRLF into *.patch, which breaks context matching for git apply.
  set(_norm_dir "${P7ZIP_PATCH_TMP_DIR}")
  file(MAKE_DIRECTORY "${_norm_dir}")
  set(_norm_patch "${_norm_dir}/${_pname}")
  file(READ "${p}" _patch_text)
  # NOTE: CMake's string(REPLACE) does not reliably treat "\r" as a carriage
  # return character across generators/versions. Use regex which understands \r.
  string(REGEX REPLACE "\r\n" "\n" _patch_text "${_patch_text}")
  string(REGEX REPLACE "\r" "\n" _patch_text "${_patch_text}")
  file(WRITE "${_norm_patch}" "${_patch_text}")

  # Idempotent guard:
  # - If patch is already applied, skip it without failing.
  set(_already_applied OFF)
  if(GIT_EXE)
    execute_process(
      COMMAND "${GIT_EXE}" apply --reverse --check --whitespace=nowarn -C5 "${_norm_patch}"
      WORKING_DIRECTORY "${SRC_DIR}"
      RESULT_VARIABLE _revcheck_rc
      OUTPUT_QUIET
      ERROR_QUIET
    )
    if(_revcheck_rc EQUAL 0)
      set(_already_applied ON)
    endif()
  endif()
  if(NOT _already_applied AND PATCH_EXE)
    # GNU patch idempotent check:
    # 1) forward dry-run success => patch not yet applied
    # 2) forward dry-run fail + reverse dry-run success => already applied
    execute_process(
      COMMAND "${PATCH_EXE}" -p1 --batch --forward --dry-run
      INPUT_FILE "${_norm_patch}"
      WORKING_DIRECTORY "${SRC_DIR}"
      RESULT_VARIABLE _dry_apply_rc
      OUTPUT_QUIET
      ERROR_QUIET
    )
    if(NOT _dry_apply_rc EQUAL 0)
      execute_process(
        COMMAND "${PATCH_EXE}" -p1 --batch -R --dry-run
        INPUT_FILE "${_norm_patch}"
        WORKING_DIRECTORY "${SRC_DIR}"
        RESULT_VARIABLE _dry_reverse_rc
        OUTPUT_QUIET
        ERROR_QUIET
      )
      if(_dry_reverse_rc EQUAL 0)
        set(_already_applied ON)
      endif()
    endif()
  endif()

  if(_already_applied)
    _p7zip_status("[p7zip] Patch already applied, skip: ${_pname}")
    continue()
  endif()

  if(PATCH_EXE)
    # GNU patch mode (Linux-consistent)
    # - --forward: already applied => skip without failing
    # - --batch  : non-interactive
    execute_process(
      COMMAND "${PATCH_EXE}" -p1 --forward --batch
      INPUT_FILE "${_norm_patch}"
      WORKING_DIRECTORY "${SRC_DIR}"
      RESULT_VARIABLE _patch_rc
      OUTPUT_VARIABLE _patch_out
      ERROR_VARIABLE _patch_err
    )
    if(_patch_rc EQUAL 0)
      # applied (or already applied via --forward)
    else()
      string(REGEX MATCH "Reversed \\(or previously applied\\) patch detected" _reverse_mark "${_patch_err}\n${_patch_out}")
      if(_reverse_mark)
        # patch may still emit *.rej files in this case; remove and continue.
        file(GLOB_RECURSE _retry_rej_files "${SRC_DIR}/*.rej")
        foreach(_rej IN LISTS _retry_rej_files)
          file(REMOVE "${_rej}")
        endforeach()
        _p7zip_status("[p7zip] Patch already applied, skip: ${_pname}")
        continue()
      endif()
      set(_msg "${_patch_err}\n${_patch_out}")
      _p7zip_trim("${_msg}" 4000 _msg)
      if(P7ZIP_PATCH_STRICT)
        message(FATAL_ERROR "Patch failed (${_pname}):\n${_msg}")
      else()
        message(WARNING "Patch skipped (${_pname})")
        _p7zip_debug("${_msg}")
      endif()
    endif()
  else()
    # Should not happen: P7ZIP_HOST_PATCH is required in entry/src/main/cpp/CMakeLists.txt
    if(NOT GIT_EXE)
      message(FATAL_ERROR "git executable not set (P7ZIP_HOST_GIT). Check entry/src/main/cpp/CMakeLists.txt.")
    endif()
    execute_process(
      COMMAND "${GIT_EXE}" apply --check --whitespace=nowarn -C5 "${_norm_patch}"
      WORKING_DIRECTORY "${SRC_DIR}"
      RESULT_VARIABLE _check_rc
      OUTPUT_VARIABLE _check_out
      ERROR_VARIABLE _check_err
    )

    if(_check_rc EQUAL 0)
      execute_process(
        COMMAND "${GIT_EXE}" apply --whitespace=nowarn -C5 "${_norm_patch}"
        WORKING_DIRECTORY "${SRC_DIR}"
        RESULT_VARIABLE _apply_rc
        OUTPUT_VARIABLE _apply_out
        ERROR_VARIABLE _apply_err
      )
      if(NOT _apply_rc EQUAL 0)
        set(_msg "${_apply_err}\n${_apply_out}")
        _p7zip_trim("${_msg}" 4000 _msg)
        message(FATAL_ERROR "Failed to apply patch (${_pname}) via git apply:\n${_msg}")
      endif()
    else()
      execute_process(
        COMMAND "${GIT_EXE}" apply --reverse --check --whitespace=nowarn -C5 "${_norm_patch}"
        WORKING_DIRECTORY "${SRC_DIR}"
        RESULT_VARIABLE _revcheck_rc
        OUTPUT_VARIABLE _rev_out
        ERROR_VARIABLE _rev_err
      )
      if(_revcheck_rc EQUAL 0)
        _p7zip_debug("[p7zip]    (already applied) ${_pname}")
      else()
        set(_msg "${_check_err}\n${_check_out}")
        _p7zip_trim("${_msg}" 4000 _msg)
        if(P7ZIP_PATCH_STRICT)
          message(FATAL_ERROR "Patch does not apply cleanly (${_pname}):\n${_msg}")
        else()
          message(WARNING "Patch skipped (${_pname})")
          _p7zip_debug("${_msg}")
        endif()
      endif()
    endif()
  endif()
endforeach()

# Guard: reject files indicate patch hunks failed and were not applied.
file(GLOB_RECURSE _rej_files "${SRC_DIR}/*.rej")
list(LENGTH _rej_files _rej_count)
if(_rej_count GREATER 0)
  list(GET _rej_files 0 _first_rej)
  message(FATAL_ERROR "[p7zip] Found ${_rej_count} reject file(s) after patching. First: ${_first_rej}")
endif()

_p7zip_status("[p7zip] Patch step complete.")

