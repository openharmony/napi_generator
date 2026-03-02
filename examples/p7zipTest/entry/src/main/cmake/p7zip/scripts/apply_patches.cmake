# Applies OHOS patch set (unified diffs) to a p7zip source tree.
#
# Inputs:
#   - SRC_DIR (required): extracted p7zip source dir (working tree)
#   - P7ZIP_APPLY_OHOS_PATCHES: ON/OFF
#   - P7ZIP_PATCH_DIR (required if enabled): directory containing 000*.patch

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

if(NOT DEFINED P7ZIP_PATCH_DIR OR P7ZIP_PATCH_DIR STREQUAL "")
  message(FATAL_ERROR "P7ZIP_PATCH_DIR is required when patching is enabled")
endif()

if(NOT EXISTS "${P7ZIP_PATCH_DIR}")
  message(FATAL_ERROR "Patch dir does not exist: ${P7ZIP_PATCH_DIR}")
endif()

# Prefer GNU patch (Linux-consistent). Strongly prefer Git-for-Windows' patch.exe.
find_program(GIT_EXE git)

# If git is not on PATH in DevEco environment, try common install locations.
if(NOT GIT_EXE)
  set(_git_guess
    "C:/Program Files/Git/cmd/git.exe"
    "C:/Program Files (x86)/Git/cmd/git.exe"
    "C:/software/Git/cmd/git.exe"
  )
  foreach(_g IN LISTS _git_guess)
    if(EXISTS "${_g}")
      set(GIT_EXE "${_g}")
      break()
    endif()
  endforeach()
endif()

# Prefer patch.exe shipped with Git-for-Windows.
set(_patch_candidates "")
if(GIT_EXE)
  get_filename_component(_git_cmd_dir "${GIT_EXE}" DIRECTORY)
  get_filename_component(_git_root "${_git_cmd_dir}" DIRECTORY)
  list(APPEND _patch_candidates "${_git_root}/usr/bin/patch.exe")
endif()
list(APPEND _patch_candidates
  "C:/Program Files/Git/usr/bin/patch.exe"
  "C:/Program Files (x86)/Git/usr/bin/patch.exe"
  "C:/software/Git/usr/bin/patch.exe"
)

set(PATCH_EXE "")
foreach(_p IN LISTS _patch_candidates)
  if(EXISTS "${_p}")
    set(PATCH_EXE "${_p}")
    break()
  endif()
endforeach()

# Fallback: any patch on PATH (e.g. MSYS2), but avoid broken w64devkit wrapper if busybox.exe is missing.
if(PATCH_EXE STREQUAL "")
  find_program(PATCH_EXE NAMES patch gpatch)
  if(PATCH_EXE)
    get_filename_component(_pdir "${PATCH_EXE}" DIRECTORY)
    string(TOLOWER "${PATCH_EXE}" _plow)
    if(_plow MATCHES "w64devkit[/\\\\]bin[/\\\\]patch\\.exe" AND NOT EXISTS "${_pdir}/busybox.exe")
      message(WARNING "[p7zip] Found w64devkit patch.exe but busybox.exe is missing; patch.exe cannot run. Install Git-for-Windows or fix w64devkit installation.")
      set(PATCH_EXE "")
    endif()
  endif()
endif()

file(GLOB _patches LIST_DIRECTORIES false "${P7ZIP_PATCH_DIR}/000*.patch")
list(SORT _patches)

if(_patches STREQUAL "")
  message(FATAL_ERROR "No patches found under: ${P7ZIP_PATCH_DIR} (expected 000*.patch)")
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
    # Fallback: git apply (less reliable on Windows for CRLF/encoding edge-cases)
    if(NOT GIT_EXE)
      message(FATAL_ERROR "Neither GNU patch nor git was found. Install Git-for-Windows (recommended) or ensure patch.exe is on PATH.")
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

_p7zip_status("[p7zip] Patch step complete.")

