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

export let stubHTemplate: FileTemp = {
  name: '[serviceName]_service_stub.h',
  content:  `#ifndef [marcoName]_STUB_H
  #define [marcoName]_STUB_H
  #include "iremote_stub.h"
  #include "message_parcel.h"
  #include "parcel.h"
  #include "i_[lowServiceName]_service.h"
  
  namespace OHOS {
  namespace [serviceName] {
  class [serviceName]Stub : public IRemoteStub<I[serviceName]Service> {
  public:
      [serviceName]Stub();
      virtual ~[serviceName]Stub();
      int OnRemoteRequest(uint32_t code, MessageParcel& data, MessageParcel& reply,
          MessageOption &option) override;
  private:
      using [serviceName]InnerFunc = ErrCode ([serviceName]Stub::*)(MessageParcel &data, MessageParcel &reply);
      [innerFuncDef]
      std::unordered_map<uint32_t, [serviceName]InnerFunc> innerFuncs_;
  };
  } // namespace [serviceName]
  } // namespace OHOS
  #endif // [marcoName]_STUB_H`
};