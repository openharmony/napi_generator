/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import { FileTemp } from "../../datatype";

export let stubCppTemplate: FileTemp = {
  name: '[serviceName]_service_stub.cpp',
  content: `#include "[lowServiceName]_service_stub.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  
  [serviceName]Stub::[serviceName]Stub()
  {
      [innerFuncMap]
  }
  
  [serviceName]Stub::~[serviceName]Stub()
  {
      innerFuncs_.clear();
  }
  
  int [serviceName]Stub::OnRemoteRequest(uint32_t code, MessageParcel& data, MessageParcel& reply,
      MessageOption &option)
  {
      std::u16string descriptor = [serviceName]Stub::GetDescriptor();
      std::u16string remoteDescriptor = data.ReadInterfaceToken();
      if (descriptor != remoteDescriptor) {
          return OBJECT_NULL;
      }
      auto itFunc = innerFuncs_.find(code);
      if (itFunc != innerFuncs_.end()) {
          auto memberFunc = itFunc->second;
          if (memberFunc != nullptr) {
              return (this->*memberFunc)(data, reply);
          }
      }
      return IPCObjectStub::OnRemoteRequest(code, data, reply, option);
  }
  
  [innerFuncImpl]
  
  } // namespace [serviceName]
  } // namespace OHOS
  `
};