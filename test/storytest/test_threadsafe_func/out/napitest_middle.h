/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
*
* http://www.apache.org/licenses/LICENSE-2.0 
*
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
*/
#ifndef IMPL_NAPITEST_MIDDLE_H
#define IMPL_NAPITEST_MIDDLE_H

#include <cstring>
#include <string>
#include <memory>
#include <vector>
#include <node_api.h>
#include <any>
#include <optional>
#include "tool_utility.h"
#include "napitest.h"


namespace napitest {
namespace napitest_interface {
struct createThreadSafeFuncTest1_value_struct {
    std::string eventName;
};

napi_value createThreadSafeFuncTest1_middle(napi_env env, napi_callback_info info);

}
}
#endif // IMPL_NAPITEST_MIDDLE_H
