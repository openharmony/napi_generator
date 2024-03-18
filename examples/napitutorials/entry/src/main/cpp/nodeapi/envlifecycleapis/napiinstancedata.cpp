//
// Created on 2024/3/15.
//
// Node APIs are not fully supported. To solve the compilation error of the interface cannot be found,
// please include "napi/native_api.h".

#include "common.h"

static const char *TAG = "[nodeapi_instancedata]";

napi_value setInstancedata(napi_env env, napi_value exports) {
    // pages/nodeapi/envlifecycleapis/napisetinstancedata
    napi_value instance;
    napi_create_object(env, &instance);
    napi_value testint32 = nullptr;
    napi_create_int32(env, 315, &testint32);
    napi_set_named_property(env, instance, "testint32", testint32);

    // 设置要关联的自定义数据
    // warning: 'napi_set_instance_data' is deprecated [-Wdeprecated-declarations]
    // ld.lld: error: undefined symbol: napi_set_instance_data
    //    int *myData = new int(42);
    //    napi_set_instance_data(env, myData,
    //        [](napi_env env, void *data, void *hint) {
    //            // 释放自定义数据内存
    //            delete static_cast<int *>(data);
    //        },
    //        nullptr);

    // 导出 N-API 实例对象
    napi_set_named_property(env, exports, "instance", instance);
    return instance;
}
