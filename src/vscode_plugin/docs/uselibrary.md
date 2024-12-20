### 交叉编译结果应用到 HAP

1. 使用 DevEco 创建 native C++ 工程项目；
2. 拷贝编译结果到 libs，cJSON 里的 armeabi-v7a（32 位），arm64-v8a（64 位），将里面的 so 库拷贝到工程路径下（\entry\libs）

    ```bash
    cjsontes\entry\libs> tree 
       ├─arm64-v8a
       │  ├─libcjson.so
       │  ├─libcjson.so.1
       │  └─libcjson.so.1.7.15
       └─armeabi-v7a
          ├─libcjson.so
          ├─libcjson.so.1
          └─libcjson.so.1.7.15
    ```
    
    

3. 拷贝对应的头文件到 cpp/thirdparty 目录下

   ```bash
   cjsontes\entry\src\main\cpp\thirdparty> tree 
   ├─arm64-v8a
   │  ├─include
   │    ├─cjson
   └─armeabi-v7a
   │  ├─include
   │    ├─cjson
   ```



4. 修改改 CMakeLists.txt

   ```cmake
   # the minimum version of CMake.
   
   cmake_minimum_required(VERSION 3.4.1)
   project(cjsontes)
   
   set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
   set(CJSON_LIB_PATH ${NATIVERENDER_ROOT_PATH}/../../../libs/${OHOS_ARCH})
   
   include_directories(${NATIVERENDER_ROOT_PATH}
                       ${NATIVERENDER_ROOT_PATH}/include
                       ${NATIVERENDER_ROOT_PATH}/thirdparty/cJSON/${OHOS_ARCH}/include)
   
   add_library(entry SHARED hello.cpp)
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libace_nd&k.z.so
       librawfile.z.so
       libhilog_nd&k.z.so
       ${CJSON_LIB_PATH}/libcjson.so)
   ```

   

5. 改 build-profile.json5 文件

   ```
   {
     "apiType": "stageMode",
     "buildOption": {
       "externalNativeOptions": {
         "path": "./src/main/cpp/CMakeLists.txt",
         "arguments": "",
         "cppFlags": "",
         # 增加适配的平台
         "abiFilters": [
           "arm64-v8a"
         ]
       }
     },
     "targets": [
       {
         "name": "default",
         "runtimeOS": "Harm&onyOS"
       },
       {
         "name": "ohosTest",
       }
     ]
   }
   ```

   

6. 修改 hello.cpp：在默认的cpp文件里增加cjson的应用

   ```c++
   #include "napi/native_api.h"
   #include "hilog/log.h"
   #include "cjson/cJSON.h"
   
   #define GLOBAL_RESMGR (0xFFEE)
   
   static const char *TAG = "[cjsontest]";
   
   static napi_value Add(napi_env env, napi_callback_info info)
   {
       size_t requireArgc = 2;
       size_t argc = 2;
       napi_value args[2] = {nullptr};
   
       napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);
       
       napi_valuetype valuetype0;
       napi_typeof(env, args[0], &valuetype0);
       
       napi_valuetype valuetype1;
       napi_typeof(env, args[1], &valuetype1);
       
       double value0;
       napi_get_value_double(env, args[0], &value0);
       
       double value1;
       napi_get_value_double(env, args[1], &value1);
       
       // 增加cjson测试代码
       cJSON *parsed = NULL;
       char *content = "[\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]";
       OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, TAG, "content %{public}s.", content);
       
       parsed = cJSON_Parse(content);
       
       char *jsonmsg = cJSON_Print(parsed);
       OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, TAG, "jsonprint %{public}s.", jsonmsg);
       
       napi_value sum;
       napi_create_double(env, value0 + value1, &sum);
       
       return sum;
   
   }
   
   EXTERN_C_START
   static napi_value Init(napi_env env, napi_value exports)
   {
       napi_property_descriptor desc[] = {
           { "add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr }
       };
       napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
       return exports;
   }
   EXTERN_C_END
   
   static napi_module demoModule = {
       .nm_version = 1,
       .nm_flags = 0,
       .nm_filename = nullptr,
       .nm_register_func = Init,
       .nm_modname = "entry",
       .nm_priv = ((void*)0),
       .reserved = { 0 },
   };
   
   extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
   {
       napi_module_register(&demoModule);
   }
   ```

   

7. 测试输出

   ```shell
   com.example.cjsontest  E  content ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].
   com.example.cjsontest  E  jsonprint ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].
   ```

   

