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

export let proxyHTemplate: FileTemp = {
  name: '[serviceName]_service_proxy.h',
  content: `#ifndef [marcoName]_PROXY_H
  #define [marcoName]_PROXY_H
  #include "message_parcel.h"
  #include "parcel.h"
  #include "iremote_broker.h"
  #include "iremote_proxy.h"
  #include "i_[lowServiceName]_service.h"
  
  namespace OHOS {
  namespace [serviceName] {
  class [serviceName]Proxy : public IRemoteProxy<I[serviceName]Service> {
  public:
      explicit [serviceName]Proxy(const sptr<IRemoteObject> &impl);
      ~[serviceName]Proxy() = default;
      //[functions]
      [proxyHFunctions]
  private:
      static inline BrokerDelegator<[serviceName]Proxy> delegator_;
  };
  
  class [serviceName]DeathRecipient : public IRemoteObject::DeathRecipient {
  public:
      virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
      [serviceName]DeathRecipient();
      virtual ~[serviceName]DeathRecipient();
  };
  } // namespace [serviceName]
  } // namespace OHOS
  #endif // [marcoName]_PROXY_H
  `
};