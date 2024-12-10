#### AKI 版 NativeC++ 应用示例

##### AKI简介

AKI (Alpha Kernel Interacting) 是一款边界性编程体验友好的ArkTs FFI开发框架，针对OpenHarmony Native开发提供JS与C/C++跨语言访问场景解决方案。支持极简语法糖使用方式，简洁代码逻辑完成JS与C/C++的无障碍跨语言互调。

简单讲，AKI就是对NAPI进行了一层封装，提供对典型应用场景的包装，减轻了用户开发NAPI层的开发负担，具体优点如下：

* 解耦FFI代码与业务代码，友好的边界性编程体验；

* 提供数据类型转换、函数绑定、对象绑定、线程安全等特性；

* 支持JS & C/C++互调
* 支持与Node-API即NAPI的嵌套使用



##### AKI代码样例

* Native C/C++ 业务代码：

```c++
#include <string>
#include <aki/jsbind.h>

std::string SayHello(std::string msg) { return msg + " too."; }

// Step 1 注册 AKI 插件
JSBIND_ADDON(hello) // 注册 AKI 插件名: 即为编译*.so名称，规则与NAPI一致

// Step 2 注册 FFI 特性
JSBIND_GLOBAL() { JSBIND_FUNCTION(SayHello); }
```

* ArkTS 业务代码：

```typescript
import aki from 'libentry.so';
let msg = aki.SayHello("hell to cpp");
```

参考：https://gitee.com/openharmony-sig/aki



##### 工程调试

* 使用DevEco Studio Next Release，Build Version: 5.0.3.900, built on October 8, 2024

* 使用5.0.0 Release 镜像，在rk3568上运行测试

* 使用[资源](https://gitee.com/openharmony/napi_generator/releases/download/%E6%B5%8B%E8%AF%95%E7%94%A8%E8%B5%84%E6%BA%90/akitutorial_package.zip)内的文件分别拷贝到对应路径（解压后thirdparty内容拷贝到akitutorials\entry\src\main\cpp\thirdparty下，libs里的内容拷贝到akitutorials\entry\libs下）

* 编译运行

  

##### AKI 接口说明

* **binding.h**：提供提供函数的类的注册方法，对应JSBIND_FUNCTION，JSBIND_CLASS

  * c++代码：

    ```c++
    #include <string>
    #include <aki/jsbind.h>
    
    std::string SayHello(std::string msg)
    {
        return msg + " too.";
    }
    
    JSBIND_GLOBAL()
    {
        JSBIND_FUNCTION(SayHello);
    }
    
    JSBIND_ADDON(hello);
    ```

    

  * js代码：

    ```js
    import aki from 'libhello.so' // 插件名
    
    let message = aki.SayHello("hello world");
    ```

    

* **jsbind.h**：提供将JS方法绑定至C/C++层使用的能力。使用JSBind类，提供bindFunction，unbindFunction方法，支持JS线程安全函数注册和使用。如：JSBind.bindFunction，aki::JSBind::GetJSFunction，如：

  * c++ 代码：

  ```c++
  #include <string>
  #include <aki/jsbind.h>
  
  void DoSomething() {
      // 索引 JS 函数句柄
      auto jsFunc = aki::JSBind::GetJSFunction("sayHelloFromJS");
  
      // Invoke 指定 JS 方法的返回值类型
      auto result = jsFunc->Invoke<std::string>("hello from C++"); // 可在非JS线程执行
      // result == "hello from JS"
  }
  ```

  * js 代码：

  ```js
  import libAddon from 'libhello.so' // 插件名
  
  function sayHelloFromJS (value) {
    console.log('what do you say: ' + value);
    return "hello from JS"
  }
  
  libAddon.JSBind.bindFunction("sayHelloFromJS", sayHelloFromJS);
  ```

  

* **version.h**: 提供aki版本号，如：

  * c++ 代码：

  ```c++
  std::string version(aki::Version::GetVersion());
  ```

  

* **value.h**：提供对value类型的转换，即提供通用类型转换（类似napi_value），Value支持string，number，array等类型，也可通过globalThis拿到对应js句柄，在c++测执行对应方法，如：

  * c++ 代码：

  ```c++
  aki::Value FromGlobalJSONStringify(aki::Value obj) {
      // 获取js引入的JSON库
      aki::Value json = aki::Value::FromGlobal("JSON");
      // 执行JSON.stringify方法将obj输出为json_string
      return json["stringify"](obj);
  }
  ```

  * js 代码：

  ```js
  let stringify: string = aki.FromGlobalJSONStringify({
                'name': 'aki',
                'age': 1});
  ```

  以上是展示在C++侧获取默认命名空间的方法，还可以自定义，如：

  * c++ 代码：

  ```c++
  std::string SayHello(std::string msg) {
      std::string version(aki::Version::GetVersion());
      aki::Value buf = aki::Value::FromGlobal("buffer");
      aki::Value bufObj = buf["alloc"](10, "a");
      aki::Value isBuffer = buf["isBuffer"](bufObj);
      bool isBuf = isBuffer.As<bool>();
      std::string res = isBuf ? "true" : "false";
      return msg + " too." + version + res;
  }
  ```

  * js 代码：注意，必须是ts文件，如果ets文件，编译报错不支持globalThis

  ```js
  import buffer from '@ohos.buffer';
  
  export class Test {
    static setBuffer(){
      globalThis.buffer = buffer;
    }
  }
  ```



* 异步开发：

  * cpp 代码：

    ```c++
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
    ```

  * js 代码：

    ```js
    libPromise.JSBind.initTaskRunner("main");
    libPromise.ReturnPromiseResolveLater().then((value) => {
    	console.log('[AKI] ReturnPromiseResolveLater then: ' + value);
    })
    ```

    

  * 

* 混合开发：即用aki也用napi

  * cpp 代码：

    ```c++
    #include "napi/native_api.h"
    #include <aki/jsbind.h>
    
    static napi_value addByNAPI(napi_env env, napi_callback_info info) {
        ......
        return sum;
    }
    
    EXTERN_C_START
    static napi_value Init(napi_env env, napi_value exports) {
        napi_property_descriptor desc[] = {
            {"addByNAPI", nullptr, addByNAPI, nullptr, nullptr, nullptr, napi_default, nullptr}};
        napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    
        exports = aki::JSBind::BindSymbols(env, exports); // aki::BindSymbols 函数传入 js 对象绑定符号
        return exports;
    }
    EXTERN_C_END
    
    // napi 方式的native绑定
    static napi_module demoModule = {
        .nm_version = 1,
        .nm_flags = 0,
        .nm_filename = nullptr,
        .nm_register_func = Init,
        .nm_modname = "entry",
        .nm_priv = ((void *)0),
        .reserved = {0},
    };
    
    extern "C" __attribute__((constructor)) void RegisterHelloModule(void) { napi_module_register(&demoModule); }
    
    // aki 方式的native绑定
    std::string SayHello(std::string msg) {
        return msg + " too.";
    }
    
    // Step 1 注册 AKI 插件
    JSBIND_ADDON(hello) // 注册 AKI 插件名: 即为编译*.so名称，规则与NAPI一致
    
    // Step 2 注册 FFI 特性
    JSBIND_GLOBAL() {
        JSBIND_FUNCTION(SayHello);
    }
    ```

    

  * js 代码：

    ```js
    import aki from 'libentry.so';
    
    let msg: string = aki.SayHello("hell to cpp");
    hilog.info(0x0000, 'testTag', 'Test SayHello = %{public}s', msg);
    let res: number = aki.addByNAPI(2, 3);
    hilog.info(0x0000, 'testTag', 'Test NAPI 2 + 3 = %{public}d', res);
    ```

    

  

##### 实现原理：

aki 还是利用node-api技术提供 js 和 cpp 间跨语言的交互接口，主要用于开发针对ArkTS的c/c++插件，帮助开发者在ArkTS（ts）中调用本地代码，c/c++库，同时保证跨版本兼容性；

##### N-API 主要特点

1. **跨版本兼容性**：N-API 提供了一个稳定的 ABI（应用程序二进制接口），这意味着扩展可以在不同版本的 Node.js 上运行，而无需重新编译或修改代码。
2. **简化开发**：N-API 抽象了一些底层的细节，使得开发者可以专注于应用逻辑，而不必担心 Node.js 内部的实现。
3. **性能优化**：通过使用本地代码，N-API 可以提高性能，特别是在需要进行大量计算或处理复杂数据结构的情况下。
4. **安全性**：N-API 提供了一些安全机制，帮助开发者预防常见的内存管理问题，如缓冲区溢出等。

##### 使用场景

- **性能敏感的应用**：例如，大量数据处理、图像处理、加密和解密等。
- **需要访问底层系统功能**：如文件系统、网络协议等。
- **重用已有的 C/C++ 库**：如果有成熟的 C/C++ 库，可以通过 N-API 将其封装成 Node.js 模块进行使用。



1. 依赖库：[CMake参考](https://gitee.com/wshikh/aki/blob/master/src/CMakeLists.txt)

```cmake
target_link_libraries(${TARGET_NAME} PUBLIC libace_napi.z.so libhilog_ndk.z.so uv)
```

2. 编译配置：[CMake参考](https://gitee.com/wshikh/aki/blob/master/src/CMakeLists.txt)

```cmake
//CMakeLists.txt
option(AKI_BUILDING_SHARED "compile for shared library" ON)
option(AKI_ENABLE_NAPI "using node-api" ON)
option(AKI_ENABLE_INSTALL_OHOS "" OFF)
option(AKI_ENABLE_DECLARATION "" OFF)
option(AKI_ENABLE_TRACING "DO NOT USE THIS option !!!" OFF)
option(AKI_ENABLE_CXX_STANDARD_11 "" OFF)
```

3. napi 注册

* N-API 注册方法：声明模块，利用 napi 接口进行注册

```cpp
// 初始化导出模块的属性描述符
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

// 注册模块（也可以称之为 c/c++插件）
extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
{
    napi_module_register(&demoModule);
}
```

* aki 注册方法：

```cpp
// Step 1 注册 AKI 插件
JSBIND_ADDON(hello) // 注册 AKI 插件名: 即为编译*.so名称，规则与NAPI一致

// Step 2 注册 FFI 特性
JSBIND_GLOBAL() {
    JSBIND_FUNCTION(SayHello);
    JSBIND_FUNCTION(FromGlobalJSONStringify);
}
```

* JSBIND_ADDON：

```c
#define JSBIND_ADDON_LAZY(addonName)                                                                               \
EXTERN_C_START                                                                                                \
static napi_module _module = {                                                                                \
    .nm_version =1,                                                                                           \
    .nm_flags = 0,                                                                                            \
    .nm_filename = nullptr,                                                                                   \
    .nm_register_func = aki::JSBind::BindSymbols,                                                             \
    .nm_modname = #addonName,                                                                                 \
    .nm_priv = ((void*)0),                                                                                    \
    .reserved = { 0 },                                                                                        \
};                                                                                                            \
extern "C" __attribute__((constructor)) void Register##addonName(void) {                                      \
    napi_module_register(&_module);                                                                             \
    AKI_LOG(INFO) << "register AKI addon: " << #addonName;                                                   \
}    \
EXTERN_C_END

#define JSBIND_ADDON(addonName)                                          \
JSBIND_ADDON_LAZY(addonName)
```



* JSBIND_GLOBAL：

```c
// 宏定义，JSBIND_GLOBAL 转 namespace
#define JSBIND_GLOBAL() namespace

// 宏定义，JSBIND_FUNCTION 转 aki::FunctionDefiner，变量名就是definer+__LINE__，后面执行的是FunctionDefiner构造函数
#define JSBIND_FUNCTION(__name, ...) aki::FunctionDefiner JSBIND_UNIQUE(definer, __LINE__)(aki::AliasName(#__name, ##__VA_ARGS__), &__name)

// 宏定义，JSBIND_FUNCTION 转 aki::PFunctionDefiner，变量名就是definer+__LINE__，后面执行的是PFunctionDefiner构造函数
#define JSBIND_PFUNCTION(__name, ...) aki::PFunctionDefiner JSBIND_UNIQUE(definer, __LINE__)(aki::AliasName(#__name, ##__VA_ARGS__), &__name)
```



* FunctionDefiner & Init：

```c++
namespace aki {
class FunctionDefiner {
public:
	......
	// 注册方法
    Binding::RegisterFunction(name, Binder::AddInvoker(func), &Bind#er::GetInstance());
};
}
```



* BindSymbols

```c++
// 对应的就是导出模块里的注册方法： .nm_register_func = aki::JSBind::BindSymbols, 
napi_value aki::JSBind::BindSymbols(napi_env env, napi_value exports)
{
    return Init(env, exports);
}

EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports) {
    ......
    for (auto& function : aki::Binding::GetFunctionList()) {
        auto akibinder = function.GetBinder();
        auto wrapper = reinterpret_cast<NapiWrapperFunctionInfo>(akibinder->GetWrapper());
        
        napi_status status;
        aki::BindInfo* info = new aki::BindInfo();
        info->functionNumber = function.GetInvokerId();
        // 定义function描述符
        napi_property_descriptor desc = DECLARE_NAPI_FUNCTION(function.GetName(), wrapper, info);
        // 在导出对象里增加方法属性
        status = napi_define_properties(env, exports, 1, &desc);
        AKI_DCHECK(status == napi_ok) << "napi_define_properties failed when binding global function: " << function.GetName();
        AKI_DLOG(DEBUG) << "binding global function: " << function.GetName();
    }
    
    // 下面还有对 Enumeration 和 Class 的注册
    for (auto& enumeration : aki::Binding::GetEnumerationList()) {
	    ......        
    }
    
    for (auto& xlass : aki::Binding::GetClassList()) {
	    ......        
    }

}
```



* 默认注册类 JSBind：提供native直接调用js函数的方法和执行js的线程任务，其特点有：

  * 线程安全：可在非JS线程直接调用。最终会由框架调度JS线程执行业务；
  * 阻塞式调用：在非JS线程时存在跨线程任务调度。 C++ 会等待 JavaScript 函数执行结束后返回；

  ```c++
  namespace aki {
  class AKI_EXPORT JSBind {
  public:
  #if JSBIND_USING_NAPI
      static napi_value BindSymbols(napi_env env, napi_value exports);
      static napi_value BindSymbols(napi_env env, napi_value exports, std::string moduleName);
      static napi_value BindSymbols(const char* module);
      static void SetScopedEnv(napi_env env);
      static napi_env GetScopedEnv();
  #endif // JSBIND_USING_NAPI
  
      static int bindFunction(const std::string& name, JSFunction func);
      static int unbindFunction(const std::string& name);
      static void InitTaskRunner(const std::string& name);
  
  #if JSBIND_SUPPORT_DECLARATION
      static void Reflect(aki::Callback<void (intptr_t, int32_t)> outputBuildInType,
                          aki::Callback<void (std::string, std::vector<intptr_t>)> outputFunction);
      static void QueryType(intptr_t typeId,
                            aki::Callback<void (int32_t, std::vector<intptr_t>)> outputType);
  #endif
      static const JSFunction* GetJSFunction(const std::string& name);
  private:
  };
  
  // | static |
  int JSBind::bindFunction(const std::string& name, JSFunction func)
  {
      return Binding::RegisterJSFunction(name, std::make_unique<JSFunction>(std::move(func)));
  }
  
  int JSBind::unbindFunction(const std::string& name)
  {
      return Binding::UnRegisterJSFunction(name);
  }
  
  void aki::JSBind::InitTaskRunner(const std::string& name) {
      aki::TaskRunner::Create(name);
  }
  }
  using namespace aki;
  JSBIND_CLASS(JSBind) {
      JSBIND_METHOD(bindFunction);
      JSBIND_METHOD(unbindFunction);
      JSBIND_METHOD(InitTaskRunner, "initTaskRunner");
  
  #if JSBIND_SUPPORT_DECLARATION
      JSBIND_METHOD(Reflect, "reflect");
      JSBIND_METHOD(QueryType, "queryType");
  #endif
  }
  ```






### 总结

1. 最新5.0.0 Release 的IDE也能进行开发NativeC++项目，不过要修改工程，参考这个修改：https://forums.openharmony.cn/forum.php?mod=viewthread&tid=3550&page=1#pid8694 ；
2. AKI 是一个native应用开发的快速框架，提供了绑定函数，类，枚举给js层使用，以及从native侧获取js全局对象，js方法，js异步任务的方法；给应用开发者提供跨语言的互相访问能力；
3. AKI 可以和原来的 napi 开发方式并存，混合使用；





