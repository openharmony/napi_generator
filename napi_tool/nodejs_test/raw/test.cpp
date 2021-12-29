
#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include "x_napi_tool.h"

#define NUMBER_JS_2_C(napi_v, type, dest)      \
    if (typeid(type) == typeid(int32_t))       \
        dest = pxt->SwapJs2CInt32(napi_v);     \
    else if (typeid(type) == typeid(uint32_t)) \
        dest = pxt->SwapJs2CUint32(napi_v);    \
    else if (typeid(type) == typeid(int64_t))  \
        dest = pxt->SwapJs2CInt64(napi_v);     \
    else if (typeid(type) == typeid(double_t)) \
        dest = pxt->SwapJs2CDouble(napi_v);

napi_value number_c_to_js(XNapiTool *pxt, const std::type_info &n, void *num)
{
    if (n == typeid(int32_t))
        return pxt->SwapC2JsInt32(*(int32_t *)num);
    else if (n == typeid(uint32_t))
        return pxt->SwapC2JsUint32(*(uint32_t *)num);
    else if (n == typeid(int64_t))
        return pxt->SwapC2JsInt64(*(int64_t *)num);
    else if (n == typeid(double_t))
        return pxt->SwapC2JsDouble(*(double_t *)num);
    return nullptr;
}
#define NUMBER_C_2_JS(pxt, n) \
    number_c_to_js(pxt, typeid(n), &n)

struct setTime_value_struct
{
    uint32_t in0;

    uint32_t out;
};

napi_value setTime(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }

    struct setTime_value_struct *vio = new setTime_value_struct();

    NUMBER_JS_2_C(pxt->GetArgv(0), uint32_t, vio->in0);

    vio->out = vio->in0 * 3;

    napi_value result = NUMBER_C_2_JS(pxt, vio->out);

    if (pxt->IsFailed())
        result = pxt->GetError();

    return result;
}
class test2
{
public:
    char *p;
    std::string abc;
    test2()
    {
        printf("test2 constructor\n");
        p = (char *)malloc(1024 * 1024 * 100);
        memset(p, 1, 1024 * 1024 * 100);
    }
    ~test2() { free(p); }
    void fun1()
    {
        printf("test2 fun1 %x\n", p);
        p[100] = 123;
    }
};
class test2_middle
{
public:
    static napi_value constructor(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = new XNapiTool(env, info);

        test2 *p = new test2();
        printf("static constructor %x\n", p);

        napi_value thisvar = pxt->WrapInstance(p, release);

        return thisvar;
    }
    static void release(void *p)
    {
        printf("test2 released\n");
        test2 *p2 = (test2 *)p;
        delete p;
    }
    static napi_value getvalue_abc(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        test2 *p = (test2 *)pxt->UnWarpInstance();
        printf("get value abc\n");
        return pxt->SwapC2JsUtf8(p->abc.c_str());
    }
    static napi_value setvalue_abc(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        test2 *p = (test2 *)pxt->UnWarpInstance();

        pxt->SwapJs2CUtf8(pxt->GetArgv(0),p->abc);
        printf("set value abc : %s\n",p->abc.c_str());
        return nullptr;
    }
    static napi_value fun1(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        test2 *p = (test2 *)pxt->UnWarpInstance();

        printf("static test2 fun1 %x\n", p);

        //解析入参
        p->fun1();//调用
        //封装出参

        return XNapiTool::UndefinedValue(env);
    }
};

napi_value init(napi_env env, napi_value exports)
{
    std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, exports);

    pxt->DefineFunction("setTime", setTime);

    std::map<const char *, napi_callback> funcList;
    funcList["fun1"] = test2_middle::fun1;
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["abc"]["getvalue"]=test2_middle::getvalue_abc;
    valueList["abc"]["setvalue"]=test2_middle::setvalue_abc;
    pxt->DefineClass("test2", test2_middle::constructor, valueList ,funcList);

    return exports;
}

static napi_module g_Module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = init,
    .nm_modname = "",
    .nm_priv = ((void *)0),
    .reserved = {(void *)0},
};

extern "C" __attribute__((constructor)) void RegisterModule(void)
{
    napi_module_register(&g_Module);
}