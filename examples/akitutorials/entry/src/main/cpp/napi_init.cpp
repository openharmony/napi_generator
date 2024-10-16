// #include "napi/native_api.h"
//
// static napi_value Add(napi_env env, napi_callback_info info)
// {
//     size_t argc = 2;
//     napi_value args[2] = {nullptr};
//
//     napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);
//
//     napi_valuetype valuetype0;
//     napi_typeof(env, args[0], &valuetype0);
//
//     napi_valuetype valuetype1;
//     napi_typeof(env, args[1], &valuetype1);
//
//     double value0;
//     napi_get_value_double(env, args[0], &value0);
//
//     double value1;
//     napi_get_value_double(env, args[1], &value1);
//
//     napi_value sum;
//     napi_create_double(env, value0 + value1, &sum);
//
//     return sum;
//
// }
//
// EXTERN_C_START
// static napi_value Init(napi_env env, napi_value exports)
// {
//     napi_property_descriptor desc[] = {
//         { "add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr }
//     };
//     napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
//     return exports;
// }
// EXTERN_C_END
//
// static napi_module demoModule = {
//     .nm_version = 1,
//     .nm_flags = 0,
//     .nm_filename = nullptr,
//     .nm_register_func = Init,
//     .nm_modname = "entry",
//     .nm_priv = ((void*)0),
//     .reserved = { 0 },
// };
//
// extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
// {
//     napi_module_register(&demoModule);
// }

#include <string>
#include "aki/jsbind.h"
#include <aki/version.h>
#include "napi/native_api.h"

// Function
std::string SayHello(std::string msg) {
    return msg + " too.";
}

std::string AsyncSayHello(std::string msg) {
    // Do something;
    return msg + " too.";
}

// Class
class TestObject {
public:
    TestObject() {
        value_ = -1;
        result = -1;
    };
    
    explicit TestObject(double test) {
        value_ = test;
    }
    
    ~TestObject() = default;
    
    static double MultiplyObject(TestObject obj1, TestObject obj2) {
        return obj1.value_ * obj2.value_;
    }
    
    double Multiply(double mult) {
        value_ *= mult;
        return value_;
    }
    
    double GetValue() const {
        return value_;
    }

    void SetValue(double value) {
        value_ = value;
    }
    double result;
private:
    double value_;
}; // TestObject

JSBIND_CLASS(TestObject)
{
    JSBIND_CONSTRUCTOR<>();
    JSBIND_CONSTRUCTOR<double>();
    JSBIND_METHOD(MultiplyObject);
    JSBIND_METHOD(Multiply);
    JSBIND_FIELD("value", GetValue, SetValue);
    JSBIND_PROPERTY(result);
}

// Enum
enum TypeFlags {
    NONE,
    NUM,
    STRING,
    BUTT = -1
};

JSBIND_ENUM(TypeFlags) {
    JSBIND_ENUM_VALUE(NONE);
    JSBIND_ENUM_VALUE(NUM);
    JSBIND_ENUM_VALUE(STRING);
}

TypeFlags Passing(TypeFlags flag) {
    return flag;
}

// Step 1 注册 AKI 插件
JSBIND_ADDON(hello) // 注册 AKI 插件名: 即为编译*.so名称，规则与NAPI一致

// Step 2 注册 FFI 特性
JSBIND_GLOBAL() {
    JSBIND_FUNCTION(SayHello);
    JSBIND_PFUNCTION(AsyncSayHello);
    JSBIND_FUNCTION(Passing);
}