# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(NapiSample)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
set(CJSON_LIB_PATH ${NATIVERENDER_ROOT_PATH}/../../../libs/${OHOS_ARCH})
add_definitions(-DOHOS_PLATFORM)

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include
                    ${NATIVERENDER_ROOT_PATH}/thirdparty/cJSON/${OHOS_ARCH}/include
                    ${NATIVERENDER_ROOT_PATH}/ncpp/ffmpegcase)

add_library(entry SHARED
    nodeapi/envlifecycleapis/napiinstancedata.cpp
    nodeapi/datatypes/napistatus.cpp
    nodeapi/datatypes/napienv.cpp
    nodeapi/datatypes/napivalue.cpp
    nodeapi/datatypes/napithreadsafefunc.cpp
    nodeapi/datatypes/napithreadsafefuncrel.cpp
    nodeapi/datatypes/napithreadsafefuncall.cpp
    nodeapi/datatypes/napiextendederrorinfo.cpp
    ncpp/cjsoncase/cjsoncase.cpp
    ncpp/cjsoncase/cjsonparsecase.cpp
    javascriptapi/jsproperty/napigetpropertynames.cpp
    javascriptapi/jsproperty/napigetproperty.cpp
    javascriptapi/jsproperty/napisetproperty.cpp
    javascriptapi/jsproperty/napihasproperty.cpp
    javascriptapi/jsproperty/napideleteproperty.cpp
    javascriptapi/jsproperty/napigetnamedproperty.cpp
    javascriptapi/jsproperty/napisetnamedproperty.cpp
    javascriptapi/jsproperty/napihasnamedproperty.cpp
    javascriptapi/jsproperty/napisetelement.cpp
    javascriptapi/jsproperty/napigetelement.cpp
    javascriptapi/jsproperty/napihaselement.cpp
    javascriptapi/jsproperty/napideleteelement.cpp
    javascriptapi/jsproperty/jsPropertyInit.cpp
    javascriptapi/common.cpp
    javascriptapi/jsabstractops/napicoercetobool.cpp
    javascriptapi/jsabstractops/napicoercetonumber.cpp
    javascriptapi/jsabstractops/napicoercetoobject.cpp
    javascriptapi/jsabstractops/napicoercetostring.cpp
    javascriptapi/jsabstractops/napitypeof.cpp
    javascriptapi/jsabstractops/init.cpp
    ncpp/ffmpegcase/render/egl_core.cpp
    ncpp/ffmpegcase/render/plugin_render.cpp
    ncpp/ffmpegcase/manager/plugin_manager.cpp
    init.cpp
)

find_library(
    # Sets the name of the path variable.
    EGL-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    EGL
)

find_library(
    # Sets the name of the path variable.
    GLES-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    GLESv3
)

find_library(
    # Sets the name of the path variable.
    hilog-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    hilog_ndk.z
)

find_library(
    # Sets the name of the path variable.
    libace-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    ace_ndk.z
)

find_library(
    # Sets the name of the path variable.
    libnapi-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    ace_napi.z
)

find_library(
    # Sets the name of the path variable.
    libuv-lib
    # Specifies the name of the NDK library that
    # you want CMake to locate.
    uv
)

target_link_libraries(entry PUBLIC
    libace_napi.z.so
    libace_ndk.z.so
    librawfile.z.so
    libhilog_ndk.z.so
    ${CJSON_LIB_PATH}/libcjson.so
    ${EGL-lib}
    ${GLES-lib}
    ${hilog-lib}
    ${libace-lib}
    ${libnapi-lib}
    ${libuv-lib})

