# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(NapiSample)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include)

add_library(entry SHARED
    nodeapi/envlifecycleapis/napiinstancedata.cpp
    init.cpp)

target_link_libraries(entry PUBLIC
    libace_napi.z.so
    libace_nativedevkit.z.so
    librawfile.z.so
    libhilog_nativedevkit.z.so)