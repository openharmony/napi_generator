
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

export let serviceCppTemplate: FileTemp = {
  name: '[serviceName]_service.cpp',
  content: `#include "[lowServiceName]_service.h"
  #include "system_ability_definition.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  // [marcoName]_SERVICE_ID should be defined in system_ability_definition.h
  REGISTER_SYSTEM_ABILITY_BY_ID([serviceName]Service, [marcoName]_SERVICE_ID, true)
  
  [serviceName]Service::[serviceName]Service(int32_t systemAbilityId, bool runOnCreate)
      :SystemAbility(systemAbilityId, runOnCreate)
  {
  
  }
  
  [serviceName]Service::~[serviceName]Service() {
  
  }
  
  void [serviceName]Service::OnStart()
  {
      // Publish(): Register service by method ISystemAbilityManager->AddSystemAbility()
      bool isPublished = Publish(this);
      if (!isPublished) {
          // Log: Failed to publish the service
      }
      return;
  }
  
  void [serviceName]Service::OnStop()
  {
  
  }
  
  [serviceFuncImpl]
  }
  }`
};