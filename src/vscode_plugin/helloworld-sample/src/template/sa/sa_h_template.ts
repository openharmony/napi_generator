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

export let serviceHTemplate: FileTemp = {
  name: '[serviceName]_service.h',
  content: `#ifndef [marcoName]_SERVICE_H
  #define [marcoName]_SERVICE_H
  #include "ipc_skeleton.h"
  #include "system_ability.h"
  #include "[lowServiceName]_service_stub.h"
  
  namespace OHOS {
  namespace [serviceName] {
  // Business implementation
  class [serviceName]Service : public SystemAbility, public [serviceName]Stub {
  public:
      DECLARE_SYSTEM_ABILITY([serviceName]Service);
      DISALLOW_COPY_AND_MOVE([serviceName]Service);
      explicit [serviceName]Service(int32_t systemAbilityId, bool runOnCreate = true);
      ~[serviceName]Service() override;
  
      // Business implementation
      // [functions]
      [serviceHFunctions]
  
      // implement SystemAbility methods
      void OnStart() override;
      void OnStop() override;
  };
  }
  }
  #endif // [marcoName]_SERVICE_H`
};