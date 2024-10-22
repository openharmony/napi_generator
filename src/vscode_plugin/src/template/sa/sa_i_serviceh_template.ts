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

import { FileTemp } from '../../datatype'

export let iServiceHTemplate : FileTemp = {
  name: "i_[serviceName]_service.h",
  content: `#ifndef I_[marcoName]_SERVICE_H
  #define I_[marcoName]_SERVICE_H
  
  #include "iremote_broker.h"
  #include "iremote_proxy.h"
  
  namespace OHOS {
  namespace [serviceName] {
  class I[serviceName]Service : public OHOS::IRemoteBroker {
  public:
      enum {
          [funcEnum]
      };
  
      DECLARE_INTERFACE_DESCRIPTOR(u"OHOS.[serviceName].I[serviceName]Service");
  public:
      //[functions]
      [iServiceHFunctions]
  };
  // test [marshallFunctions]
  } // namespace [serviceName]
  } // namespace OHOS
  #endif // I_[marcoName]_SERVICE_H
  `
};