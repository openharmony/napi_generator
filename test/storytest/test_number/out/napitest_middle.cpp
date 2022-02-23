#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include "x_napi_tool.h"
#include "napitest.h"

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

namespace napitest {
class TestClass1_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    TestClass1 *p = new TestClass1();

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    TestClass1 *p2 = (TestClass1 *)p;
    delete p2;
}

    static napi_value getvalue_num1(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        result = NUMBER_C_2_JS(pxt, p->num1);
        delete pxt;
        return result;
    }
    static napi_value setvalue_num1(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_1,p->num1);
        return nullptr;
    }

};
struct fun1_value_struct {
    NUMBER_TYPE_2 in0;
    
    NUMBER_TYPE_3 out;
};

napi_value fun1_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    

    struct fun1_value_struct *vio=new fun1_value_struct();
    
    NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_2,vio->in0);

    fun1(vio->in0, vio->out);

    napi_value result = nullptr;
    result = NUMBER_C_2_JS(pxt, vio->out);

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
struct fun2_value_struct {
    std::vector<NUMBER_TYPE_4> in0;
    
    NUMBER_TYPE_5 out;
};

napi_value fun2_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    

    struct fun2_value_struct *vio=new fun2_value_struct();
    
        uint32_t len1=pxt->GetArrayLength(pxt->GetArgv(0));
    for(uint32_t i1=0;i1<len1;i1++) {
        NUMBER_TYPE_4 tt1;
        NUMBER_JS_2_C(pxt->GetArrayElement(pxt->GetArgv(0),i1),NUMBER_TYPE_4,tt1);
        vio->in0.push_back(tt1);
    }

    fun2(vio->in0, vio->out);

    napi_value result = nullptr;
    result = NUMBER_C_2_JS(pxt, vio->out);

    {
        napi_value args[1] = {result};
        pxt->SyncCallBack(pxt->GetArgv(1), 1, args);
    }
    result = pxt->UndefinedValue();

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
struct fun3_value_struct {
    TestClass1 in0;
    
    NUMBER_TYPE_6 out;
};

void fun3_execute(XNapiTool *pxt, void *data)
{
    fun3_value_struct *vio = (fun3_value_struct *)data;
    

    fun3(vio->in0, vio->out);
}

void fun3_complete(XNapiTool *pxt, void *data)
{
    fun3_value_struct *vio = (fun3_value_struct *)data;
    
    napi_value result = nullptr;
    result = NUMBER_C_2_JS(pxt, vio->out);
    
    {
        napi_value args[1] = {result};
        pxt->FinishAsync(1, args);
    }

    delete vio;
}

napi_value fun3_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    

    struct fun3_value_struct *vio=new fun3_value_struct();
    
    napi_value tnv2 = pxt->GetValueProperty(pxt->GetArgv(0), "num1");
    if(tnv2!=nullptr){NUMBER_JS_2_C(tnv2,NUMBER_TYPE_1,vio->in0.num1);}

    
    napi_value result = pxt->StartAsync(fun3_execute, vio, fun3_complete, pxt->GetArgc() == 2 ? pxt->GetArgv(1) : nullptr);

    if (pxt->IsFailed())
        result = pxt->GetError();
    return result;
}
struct fun4_value_struct {
    std::string in0;
    
    NUMBER_TYPE_7 out;
};

napi_value fun4_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    

    struct fun4_value_struct *vio=new fun4_value_struct();
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    fun4(vio->in0, vio->out);

    napi_value result = nullptr;
    result = NUMBER_C_2_JS(pxt, vio->out);

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
struct fun5_value_struct {
    NUMBER_TYPE_8 in0;
    
    std::string out;
};

napi_value fun5_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    

    struct fun5_value_struct *vio=new fun5_value_struct();
    
    NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_8,vio->in0);

    fun5(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}}

napi_value init(napi_env env, napi_value exports)
{
    std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, exports);

    {
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["num1"]["getvalue"]=napitest::TestClass1_middle::getvalue_num1;
    valueList["num1"]["setvalue"]=napitest::TestClass1_middle::setvalue_num1;
    std::map<const char *, napi_callback> funcList;
    pxt->DefineClass("TestClass1", napitest::TestClass1_middle::constructor, valueList ,funcList);
}
    pxt->DefineFunction("fun1", napitest::fun1_middle);
    pxt->DefineFunction("fun2", napitest::fun2_middle);
    pxt->DefineFunction("fun3", napitest::fun3_middle);
    pxt->DefineFunction("fun4", napitest::fun4_middle);
    pxt->DefineFunction("fun5", napitest::fun5_middle);


    return exports;
}

static napi_module g_napitest_Module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = init,
    .nm_modname = "",
    .nm_priv = ((void *)0),
    .reserved = {(void *)0},
};

extern "C" __attribute__((constructor)) void Register_napitest_Module(void)
{
    napi_module_register(&g_napitest_Module);
}
