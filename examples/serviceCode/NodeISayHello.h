/*
* Copyright (c) 2023 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
#ifndef IMPL_SAYHELLO_H
#define IMPL_SAYHELLO_H

#include <string>
#include <memory>

namespace napitest {
class NodeISayHello;
class NodeISayHello {
public:
    void sayHello(std::string& from, std::string& to, uint32_t& sayType);
    void sayHi(std::string& from, std::string& to, uint32_t& sayType);
    void sayHelloWithResponse(std::string& from, std::string& to, uint32_t& sayType);
};
std::string funcTest(bool& v);
}
#endif // IMPL_SAYHELLO_H
