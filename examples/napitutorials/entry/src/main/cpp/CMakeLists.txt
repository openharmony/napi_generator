# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)
project(NapiSample)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
set(CJSON_LIB_PATH ${NATIVERENDER_ROOT_PATH}/../../../libs/${OHOS_ARCH})

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include
                    ${NATIVERENDER_ROOT_PATH}/thirdparty/cJSON/${OHOS_ARCH}/include)

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
    javascriptapi/jsproperty/napigetpropertynames.cpp
    javascriptapi/jsproperty/napigetproperty.cpp
    javascriptapi/jsproperty/napisetproperty.cpp
    javascriptapi/jsproperty/napihasproperty.cpp
    javascriptapi/jsproperty/napideleteproperty.cpp
    javascriptapi/jsproperty/jsPropertyInit.cpp
    javascriptapi/common.cpp
    javascriptapi/jsabstractops/napicoercetobool.cpp
    javascriptapi/jsabstractops/napicoercetonumber.cpp
    javascriptapi/jsabstractops/napicoercetoobject.cpp
    javascriptapi/jsabstractops/napicoercetostring.cpp
    javascriptapi/jsabstractops/napitypeof.cpp
    javascriptapi/jsabstractops/init.cpp
    init.cpp)

target_link_libraries(entry PUBLIC
    libace_napi.z.so
    libace_ndk.z.so
    librawfile.z.so
    libhilog_ndk.z.so
    ${CJSON_LIB_PATH}/libcjson.so)