# Common logging helpers for p7zip bootstrap scripts.
#
# This file is included by both project-mode CMake (configure) and script-mode CMake (-P).
# Keep it free of cache-only constructs (like option()) so it works in both contexts.

if(NOT DEFINED P7ZIP_QUIET)
  set(P7ZIP_QUIET "OFF")
endif()

if(NOT DEFINED P7ZIP_VERBOSE)
  set(P7ZIP_VERBOSE "OFF")
endif()

function(_p7zip_status msg)
  if(NOT P7ZIP_QUIET)
    message(STATUS "${msg}")
  endif()
endfunction()

function(_p7zip_debug msg)
  if(P7ZIP_VERBOSE AND NOT P7ZIP_QUIET)
    message(STATUS "${msg}")
  endif()
endfunction()

function(_p7zip_trim _in _max_len _out_var)
  set(_s "${_in}")
  string(LENGTH "${_s}" _len)
  if(_len GREATER ${_max_len})
    string(SUBSTRING "${_s}" 0 ${_max_len} _s)
    string(APPEND _s "\n...[truncated]...")
  endif()
  set(${_out_var} "${_s}" PARENT_SCOPE)
endfunction()

# _var: variable *name*; _what: short description for errors
function(_p7zip_require_host_tool _var _what)
  if(NOT DEFINED ${_var} OR "${${_var}}" STREQUAL "")
    message(FATAL_ERROR "[p7zip] ${_what}: ${_var} is empty. Edit entry/src/main/cpp/CMakeLists.txt and fill absolute path.")
  endif()
  get_filename_component(_abs "${${_var}}" ABSOLUTE)
  if(NOT EXISTS "${_abs}")
    message(FATAL_ERROR "[p7zip] ${_what}: file not found (${_abs}). Check ${${_var}} in entry/src/main/cpp/CMakeLists.txt.")
  endif()
  set(${_var} "${_abs}" PARENT_SCOPE)
endfunction()

