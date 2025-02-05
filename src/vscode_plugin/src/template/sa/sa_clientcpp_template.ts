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

import { FileTemp } from "../../gen/datatype";

export let clientCppTemplate: FileTemp = {
  name: '[serviceName]_client.cpp',
  content: `#include "[lowServiceName]_service_proxy.h"
  #include "ipc_skeleton.h"
  #include "system_ability_definition.h"
  #include "iservice_registry.h"
  
  using namespace std;
  using namespace OHOS;
  using namespace OHOS::[serviceName];
  
  sptr<I[serviceName]Service> getRemoteProxy()
  {
      auto saMgr = SystemAbilityManagerClient::GetInstance().GetSystemAbilityManager();
      if (saMgr == nullptr) {
          return nullptr;
      }
  
      // [marcoName]_SERVICE_ID should be defined in system_ability_definition.h
      sptr<IRemoteObject> object = saMgr->GetSystemAbility([marcoName]_SERVICE_ID);
      sptr<I[serviceName]Service> proxy = nullptr;
      if (object != nullptr) {
          sptr<IRemoteObject::DeathRecipient> death(new [serviceName]DeathRecipient());
          object->AddDeathRecipient(death.GetRefPtr());
          proxy = iface_cast<I[serviceName]Service>(object);
      }
  
      if (proxy == nullptr) {
          return nullptr;
      }
  
      return proxy;
  }
  
  int main(int argc, char *argv[])
  {
      auto proxy = getRemoteProxy();
      // TODO: Invoke remote method by proxy
      [clientFuncInvoke]
      IPCSkeleton::JoinWorkThread();
      return 0;
  }`
};