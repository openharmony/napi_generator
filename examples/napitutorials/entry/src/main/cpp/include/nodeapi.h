//
// Created on 2024/3/15.
//
// Node APIs are not fully supported. To solve the compilation error of the interface cannot be found,
// please include "napi/native_api.h".

#ifndef napitutorials_nodeapi_H
#define napitutorials_nodeapi_H

#include "common.h"

napi_value setInstancedata(napi_env env, napi_value exports);

#endif //napitutorials_nodeapi_H
