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

