/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <string>
#include "aki/jsbind.h"
#include <aki/version.h>
#include "napi/native_api.h"

// Function
std::string SayHello(std::string msg)
{
    return msg + " too.";
}

std::string AsyncSayHello(std::string msg)
{
    // Do something;
    return msg + " too.";
}

// Class
class TestObject {
public:
    TestObject()
    {
        value_ = -1;
        result = -1;
    };
    
    explicit TestObject(double test)
    {
        value_ = test;
    }
    
    ~TestObject() = default;
    
    static double MultiplyObject(TestObject obj1, TestObject obj2)
    {
        return obj1.value_ * obj2.value_;
    }
    
    double Multiply(double mult)
    {
        value_ *= mult;
        return value_;
    }
    
    double GetValue() const
    {
        return value_;
    }

    void SetValue(double value)
    {
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

TypeFlags Passing(TypeFlags flag)
{
    return flag;
}

// PostTask

static aki::Promise ReturnPromiseResolveLater()
{
    aki::Promise promise;
    
    std::thread t([promise] () {
        aki::TaskRunner::PostTask("main", [promise] () {
            promise.Resolve(1);
        });
    });
    t.detach();
    return promise;
}

// arraybuffer
aki::ArrayBuffer AsyncTaskReturnArrayBufferWithCommit(aki::ArrayBuffer input)
{
    uint8_t temp[4] = {10, 20, 30, 40};
    aki::ArrayBuffer arrayBufferOne(temp, TypeFlags.NUM);
    aki::ArrayBuffer arrayBufferTwo(input.GetData(), input.GetLength());
    arrayBufferOne.Commit();
    return arrayBufferOne;
}

// aki-value
std::string GetFromGlobal(aki::Value obj)
{
    aki::Value jsonObj = aki::Value::FromGlobal("JSON");
    aki::Value strObj = jsonObj["stringify"](obj);
    return strObj.As<std::string>();
}

std::string ConvertToString(aki::Value obj)
{
    if (obj.IsNull()) {
        return "null value";
    } else if (obj.IsArray()) {
        obj.CallMethod("push", "from C++");
        aki::Value val1 = obj[0];
        aki::Value strObj = aki::Value::FromGlobal("JSON")["stringify"](obj);
        return strObj.As<std::string>();
    } else if (obj.IsBool()) {
        return obj.As<std::string>();
    } else if (obj.IsNumber()) {
        return obj.As<std::string>();
    } else if (obj.IsString()) {
        aki::Value val = aki::Value::NewObject();
        val.Set("name", obj.As<std::string>());
        aki::Value strObj = aki::Value::FromGlobal("JSON")["stringify"](val);
        return strObj.As<std::string>();
    } else {
        napi_value nvalue = obj.GetHandle();
        napi_value nage, nname;
        napi_get_named_property(aki::JSBind::GetScopedEnv(), nvalue, "age", &nage);
        napi_get_named_property(aki::JSBind::GetScopedEnv(), nvalue, "name", &nname);
        
        int age;
        std::string name;
        napi_get_value_int32(aki::JSBind::GetScopedEnv(), nage, &age);
        
        size_t stringSize = 0;
        napi_get_value_string_utf8(aki::JSBind::GetScopedEnv(), nname, nullptr, 0, &stringSize); // 获取字符串长度
        name.resize(stringSize + 1);
        
        // 根据长度传换成字符串
        napi_get_value_string_utf8(aki::JSBind::GetScopedEnv(), nname, &name[0], stringSize + 1, &stringSize);
        AKI_LOG(INFO) << name << " : " << age;
    }
}


// Step 1 注册 AKI 插件
JSBIND_ADDON(hello) // 注册 AKI 插件名: 即为编译*.so名称，规则与NAPI一致

// Step 2 注册 FFI 特性
JSBIND_GLOBAL() {
    JSBIND_FUNCTION(SayHello);
    JSBIND_PFUNCTION(AsyncSayHello);
    JSBIND_FUNCTION(Passing);
    JSBIND_FUNCTION(ReturnPromiseResolveLater);
    JSBIND_PFUNCTION(AsyncTaskReturnArrayBufferWithCommit);
    JSBIND_FUNCTION(ConvertToString);
}