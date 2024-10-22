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

export let proxyCppTemplate: FileTemp = {
  name: '[serviceName]_service_proxy.cpp',
  content: `#include "[lowServiceName]_service_proxy.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  [serviceName]Proxy::[serviceName]Proxy(const sptr<IRemoteObject> &impl) : IRemoteProxy<I[serviceName]Service>(impl){}
  
  [remoteFuncImpl]
  /**
   * @brief Notify that a remote object died.
   * It's called when the linked remote object died.
   * 
   * @param remote The died IRemoteObject handler of the remote object 
   */
  void [serviceName]DeathRecipient::OnRemoteDied(const wptr<IRemoteObject> &remote)
  {
  
  }
  
  [serviceName]DeathRecipient::[serviceName]DeathRecipient()
  {
  }
  
  [serviceName]DeathRecipient::~[serviceName]DeathRecipient()
  {
  }
  
  } // namespace [serviceName]
  } // namespace OHOS
  `
};