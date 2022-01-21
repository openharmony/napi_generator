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

class Human_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    Human *p = new Human();
    // printf("static constructor %x\n", p);

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    // printf("test2 released\n");
    Human *p2 = (Human *)p;
    delete p2;
}

    static napi_value getvalue_name(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        Human *p = (Human *)pxt->UnWarpInstance();
        napi_value result;
        result = pxt->SwapC2JsUtf8(p->name.c_str());
        delete pxt;
        return result;
    }
    static napi_value setvalue_name(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        Human *p = (Human *)pxt->UnWarpInstance();
        pxt->SwapJs2CUtf8(pxt->GetArgv(0), p->name);
        return nullptr;
    }

    static napi_value getvalue_age(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        Human *p = (Human *)pxt->UnWarpInstance();
        napi_value result;
        result = NUMBER_C_2_JS(pxt, p->age);
        delete pxt;
        return result;
    }
    static napi_value setvalue_age(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        Human *p = (Human *)pxt->UnWarpInstance();
        NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_1,p->age);
        return nullptr;
    }

};
class TestClass1_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    TestClass1 *p = new TestClass1();
    // printf("static constructor %x\n", p);

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    // printf("test2 released\n");
    TestClass1 *p2 = (TestClass1 *)p;
    delete p2;
}

    static napi_value getvalue_ahuman(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        {
napi_value tnv1 = nullptr;
tnv1 = pxt->SwapC2JsUtf8(p->ahuman.name.c_str());
pxt->SetValueProperty(result,"name",tnv1);
}{
napi_value tnv1 = nullptr;
tnv1 = NUMBER_C_2_JS(pxt, p->ahuman.age);
pxt->SetValueProperty(result,"age",tnv1);
}
        delete pxt;
        return result;
    }
    static napi_value setvalue_ahuman(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value tnv1 = pxt->GetValueProperty(pxt->GetArgv(0), "name");
    if(tnv1!=nullptr){pxt->SwapJs2CUtf8(tnv1,p->ahuman.name);}napi_value tnv2 = pxt->GetValueProperty(pxt->GetArgv(0), "age");
    if(tnv2!=nullptr){NUMBER_JS_2_C(tnv2,NUMBER_TYPE_1,p->ahuman.age);}
        return nullptr;
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
        NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_2,p->num1);
        return nullptr;
    }

    static napi_value getvalue_str1(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        result = pxt->SwapC2JsUtf8(p->str1.c_str());
        delete pxt;
        return result;
    }
    static napi_value setvalue_str1(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        pxt->SwapJs2CUtf8(pxt->GetArgv(0), p->str1);
        return nullptr;
    }

    static napi_value getvalue_nums(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        uint32_t len1=p->nums.size();
    for(uint32_t i=0;i<len1;i++) {
        napi_value tnv1 = nullptr;
        tnv1 = NUMBER_C_2_JS(pxt,p->nums[i]);
        pxt->SetArrayElement(result, i, tnv1);
    }
        delete pxt;
        return result;
    }
    static napi_value setvalue_nums(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
                uint32_t len3=pxt->GetArrayLength(pxt->GetArgv(0));
        for(uint32_t i3=0;i3<len3;i3++) {
            NUMBER_TYPE_3 tt3;
            NUMBER_JS_2_C(pxt->GetArrayElement(pxt->GetArgv(0),i3),NUMBER_TYPE_3,tt3);
            p->nums.push_back(tt3);
        }
        return nullptr;
    }

    static napi_value getvalue_strs(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        uint32_t len1=p->strs.size();
    for(uint32_t i=0;i<len1;i++) {
        napi_value tnv1 = nullptr;
        tnv1 = pxt->SwapC2JsUtf8(p->strs[i].c_str());
        pxt->SetArrayElement(result, i, tnv1);
    }
        delete pxt;
        return result;
    }
    static napi_value setvalue_strs(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
                uint32_t len4=pxt->GetArrayLength(pxt->GetArgv(0));
        for(uint32_t i4=0;i4<len4;i4++) {
            std::string tt4;
            pxt->SwapJs2CUtf8(pxt->GetArrayElement(pxt->GetArgv(0),i4), tt4);
            p->strs.push_back(tt4);
        }
        return nullptr;
    }

    static napi_value getvalue_mans(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
        napi_value result;
        uint32_t len1=p->mans.size();
    for(uint32_t i=0;i<len1;i++) {
        napi_value tnv1 = nullptr;
        {
napi_value tnv2 = nullptr;
tnv2 = pxt->SwapC2JsUtf8(p->mans[i].name.c_str());
pxt->SetValueProperty(tnv1,"name",tnv2);
}{
napi_value tnv2 = nullptr;
tnv2 = NUMBER_C_2_JS(pxt, p->mans[i].age);
pxt->SetValueProperty(tnv1,"age",tnv2);
}
        pxt->SetArrayElement(result, i, tnv1);
    }
        delete pxt;
        return result;
    }
    static napi_value setvalue_mans(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass1 *p = (TestClass1 *)pxt->UnWarpInstance();
                uint32_t len5=pxt->GetArrayLength(pxt->GetArgv(0));
        for(uint32_t i5=0;i5<len5;i5++) {
            Human tt5;
            napi_value tnv6 = pxt->GetValueProperty(pxt->GetArrayElement(pxt->GetArgv(0),i5), "name");
    if(tnv6!=nullptr){pxt->SwapJs2CUtf8(tnv6,tt5.name);}napi_value tnv7 = pxt->GetValueProperty(pxt->GetArrayElement(pxt->GetArgv(0),i5), "age");
    if(tnv7!=nullptr){NUMBER_JS_2_C(tnv7,NUMBER_TYPE_1,tt5.age);}
            p->mans.push_back(tt5);
        }
        return nullptr;
    }

struct if_direct_value_struct {
    std::string in0;
    
    std::string out;
};

static napi_value if_direct_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    TestClass1 *pInstance = (TestClass1 *)pxt->UnWarpInstance();

    struct if_direct_value_struct *vio=new if_direct_value_struct();
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    pInstance->if_direct(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
struct if_callback_value_struct {
    std::string in0;
    
    std::string out;
};

static napi_value if_callback_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    TestClass1 *pInstance = (TestClass1 *)pxt->UnWarpInstance();

    struct if_callback_value_struct *vio=new if_callback_value_struct();
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    pInstance->if_callback(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

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
struct if_async_value_struct {
    std::string in0;
    
    std::string out;
};

static void if_async_execute(XNapiTool *pxt, void *data)
{
    if_async_value_struct *vio = (if_async_value_struct *)data;
    TestClass1 *pInstance = (TestClass1 *)pxt->GetAsyncInstance();

    pInstance->if_async(vio->in0, vio->out);
}

static void if_async_complete(XNapiTool *pxt, void *data)
{
    if_async_value_struct *vio = (if_async_value_struct *)data;
    
    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());
    
    {
        napi_value args[1] = {result};
        pxt->FinishAsync(1, args);
    }

    delete vio;
}

static napi_value if_async_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    pxt->SetAsyncInstance(pxt->UnWarpInstance());

    struct if_async_value_struct *vio=new if_async_value_struct();
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    
    napi_value result = pxt->StartAsync(if_async_execute, vio, if_async_complete, pxt->GetArgc() == 2 ? pxt->GetArgv(1) : nullptr);

    if (pxt->IsFailed())
        result = pxt->GetError();
    return result;
}
};
struct fun2_value_struct {
    std::string in0;
    std::vector<NUMBER_TYPE_4> in1;
    Human in2;
    
    std::vector<Human> out;
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
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);        uint32_t len8=pxt->GetArrayLength(pxt->GetArgv(1));
        for(uint32_t i8=0;i8<len8;i8++) {
            NUMBER_TYPE_4 tt8;
            NUMBER_JS_2_C(pxt->GetArrayElement(pxt->GetArgv(1),i8),NUMBER_TYPE_4,tt8);
            vio->in1.push_back(tt8);
        }napi_value tnv9 = pxt->GetValueProperty(pxt->GetArgv(2), "name");
    if(tnv9!=nullptr){pxt->SwapJs2CUtf8(tnv9,vio->in2.name);}napi_value tnv10 = pxt->GetValueProperty(pxt->GetArgv(2), "age");
    if(tnv10!=nullptr){NUMBER_JS_2_C(tnv10,NUMBER_TYPE_1,vio->in2.age);}

    fun2(vio->in0, vio->in1, vio->in2, vio->out);

    napi_value result = nullptr;
    uint32_t len1=vio->out.size();
    for(uint32_t i=0;i<len1;i++) {
        napi_value tnv1 = nullptr;
        {
napi_value tnv2 = nullptr;
tnv2 = pxt->SwapC2JsUtf8(vio->out[i].name.c_str());
pxt->SetValueProperty(tnv1,"name",tnv2);
}{
napi_value tnv2 = nullptr;
tnv2 = NUMBER_C_2_JS(pxt, vio->out[i].age);
pxt->SetValueProperty(tnv1,"age",tnv2);
}
        pxt->SetArrayElement(result, i, tnv1);
    }

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
struct fun3_value_struct {
    std::string in0;
    
    std::string out;
};

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
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    fun3(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

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
struct fun4_value_struct {
    std::string in0;
    
    std::string out;
};

void fun4_execute(XNapiTool *pxt, void *data)
{
    fun4_value_struct *vio = (fun4_value_struct *)data;
    

    fun4(vio->in0, vio->out);
}

void fun4_complete(XNapiTool *pxt, void *data)
{
    fun4_value_struct *vio = (fun4_value_struct *)data;
    
    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());
    
    {
        napi_value args[1] = {result};
        pxt->FinishAsync(1, args);
    }

    delete vio;
}

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

    
    napi_value result = pxt->StartAsync(fun4_execute, vio, fun4_complete, pxt->GetArgc() == 2 ? pxt->GetArgv(1) : nullptr);

    if (pxt->IsFailed())
        result = pxt->GetError();
    return result;
}
namespace Space3 {

class TestClass2_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    TestClass2 *p = new TestClass2();
    // printf("static constructor %x\n", p);

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    // printf("test2 released\n");
    TestClass2 *p2 = (TestClass2 *)p;
    delete p2;
}

    static napi_value getvalue_haha(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass2 *p = (TestClass2 *)pxt->UnWarpInstance();
        napi_value result;
        result = NUMBER_C_2_JS(pxt, p->haha);
        delete pxt;
        return result;
    }
    static napi_value setvalue_haha(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass2 *p = (TestClass2 *)pxt->UnWarpInstance();
        NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_5,p->haha);
        return nullptr;
    }

};
struct fun3_value_struct {
    std::string in0;
    
    std::string out;
};

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
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    fun3(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
namespace Space4 {

class TestClass3_middle {
public:
static napi_value constructor(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = new XNapiTool(env, info);

    TestClass3 *p = new TestClass3();
    // printf("static constructor %x\n", p);

    napi_value thisvar = pxt->WrapInstance(p, release);

    return thisvar;
}
static void release(void *p)
{
    // printf("test2 released\n");
    TestClass3 *p2 = (TestClass3 *)p;
    delete p2;
}

    static napi_value getvalue_hoho(napi_env env, napi_callback_info info)
    {
        XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
        TestClass3 *p = (TestClass3 *)pxt->UnWarpInstance();
        napi_value result;
        result = NUMBER_C_2_JS(pxt, p->hoho);
        delete pxt;
        return result;
    }
    static napi_value setvalue_hoho(napi_env env, napi_callback_info info)
    {
        std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, info);
        TestClass3 *p = (TestClass3 *)pxt->UnWarpInstance();
        NUMBER_JS_2_C(pxt->GetArgv(0),NUMBER_TYPE_6,p->hoho);
        return nullptr;
    }

struct add_value_struct {
    std::vector<NUMBER_TYPE_7> in0;
    
    NUMBER_TYPE_8 out;
};

static napi_value add_middle(napi_env env, napi_callback_info info)
{
    XNapiTool *pxt = std::make_unique<XNapiTool>(env, info).release();
    if (pxt->IsFailed())
    {
        napi_value err = pxt->GetError();
        delete pxt;
        return err;
    }
    TestClass3 *pInstance = (TestClass3 *)pxt->UnWarpInstance();

    struct add_value_struct *vio=new add_value_struct();
    
            uint32_t len11=pxt->GetArrayLength(pxt->GetArgv(0));
        for(uint32_t i11=0;i11<len11;i11++) {
            NUMBER_TYPE_7 tt11;
            NUMBER_JS_2_C(pxt->GetArrayElement(pxt->GetArgv(0),i11),NUMBER_TYPE_7,tt11);
            vio->in0.push_back(tt11);
        }

    pInstance->add(vio->in0, vio->out);

    napi_value result = nullptr;
    result = NUMBER_C_2_JS(pxt, vio->out);

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
};
struct fun3_value_struct {
    std::string in0;
    
    std::string out;
};

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
    
    pxt->SwapJs2CUtf8(pxt->GetArgv(0), vio->in0);

    fun3(vio->in0, vio->out);

    napi_value result = nullptr;
    result = pxt->SwapC2JsUtf8(vio->out.c_str());

    delete vio;
    if (pxt->IsFailed())
        result = pxt->GetError();
    delete pxt;// release
    return result;
}
}

}

}


napi_value init(napi_env env, napi_value exports)
{
    std::shared_ptr<XNapiTool> pxt = std::make_shared<XNapiTool>(env, exports);

    {
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["name"]["getvalue"]=napitest::Human_middle::getvalue_name;
    valueList["name"]["setvalue"]=napitest::Human_middle::setvalue_name;
    valueList["age"]["getvalue"]=napitest::Human_middle::getvalue_age;
    valueList["age"]["setvalue"]=napitest::Human_middle::setvalue_age;
    std::map<const char *, napi_callback> funcList;
    pxt->DefineClass("Human", napitest::Human_middle::constructor, valueList ,funcList);
}
{
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["ahuman"]["getvalue"]=napitest::TestClass1_middle::getvalue_ahuman;
    valueList["ahuman"]["setvalue"]=napitest::TestClass1_middle::setvalue_ahuman;
    valueList["num1"]["getvalue"]=napitest::TestClass1_middle::getvalue_num1;
    valueList["num1"]["setvalue"]=napitest::TestClass1_middle::setvalue_num1;
    valueList["str1"]["getvalue"]=napitest::TestClass1_middle::getvalue_str1;
    valueList["str1"]["setvalue"]=napitest::TestClass1_middle::setvalue_str1;
    valueList["nums"]["getvalue"]=napitest::TestClass1_middle::getvalue_nums;
    valueList["nums"]["setvalue"]=napitest::TestClass1_middle::setvalue_nums;
    valueList["strs"]["getvalue"]=napitest::TestClass1_middle::getvalue_strs;
    valueList["strs"]["setvalue"]=napitest::TestClass1_middle::setvalue_strs;
    valueList["mans"]["getvalue"]=napitest::TestClass1_middle::getvalue_mans;
    valueList["mans"]["setvalue"]=napitest::TestClass1_middle::setvalue_mans;
    std::map<const char *, napi_callback> funcList;
    funcList["if_direct"] = napitest::TestClass1_middle::if_direct_middle;
    funcList["if_callback"] = napitest::TestClass1_middle::if_callback_middle;
    funcList["if_async"] = napitest::TestClass1_middle::if_async_middle;
    pxt->DefineClass("TestClass1", napitest::TestClass1_middle::constructor, valueList ,funcList);
}
    pxt->DefineFunction("fun2", napitest::fun2_middle);
    pxt->DefineFunction("fun3", napitest::fun3_middle);
    pxt->DefineFunction("fun4", napitest::fun4_middle);
{
napi_value Space3=pxt->CreateSubObject(exports,"Space3");
{
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["haha"]["getvalue"]=napitest::Space3::TestClass2_middle::getvalue_haha;
    valueList["haha"]["setvalue"]=napitest::Space3::TestClass2_middle::setvalue_haha;
    std::map<const char *, napi_callback> funcList;
    pxt->DefineClass("TestClass2", napitest::Space3::TestClass2_middle::constructor, valueList ,funcList, Space3);
}
    pxt->DefineFunction("fun3", napitest::Space3::fun3_middle, Space3);
{
napi_value Space4=pxt->CreateSubObject(Space3,"Space4");
{
    std::map<const char *,std::map<const char *,napi_callback>> valueList;
    valueList["hoho"]["getvalue"]=napitest::Space3::Space4::TestClass3_middle::getvalue_hoho;
    valueList["hoho"]["setvalue"]=napitest::Space3::Space4::TestClass3_middle::setvalue_hoho;
    std::map<const char *, napi_callback> funcList;
    funcList["add"] = napitest::Space3::Space4::TestClass3_middle::add_middle;
    pxt->DefineClass("TestClass3", napitest::Space3::Space4::TestClass3_middle::constructor, valueList ,funcList, Space4);
}
    pxt->DefineFunction("fun3", napitest::Space3::Space4::fun3_middle, Space4);
}}

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
