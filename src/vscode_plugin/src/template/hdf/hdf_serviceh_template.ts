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

export let driverInterfaceServiceH: FileTemp = {
  name: '[driverName]_interface_service.h',
  content: ` 
  /*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
#ifndef OHOS_HDI_[driverUpperName]_V1_0_[driverUpperName]INTERFACESERVICE_H
#define OHOS_HDI_[driverUpperName]_V1_0_[driverUpperName]INTERFACESERVICE_H

#include "v1_0/i[driverName]_interface.h"

namespace OHOS {
namespace HDI {
namespace [marcoName] {
namespace V1_0 {
class [marcoName]InterfaceService : public OHOS::HDI::[marcoName]::V1_0::I[marcoName]Interface {
public:
    [marcoName]InterfaceService() = default;
    virtual ~[marcoName]InterfaceService() = default;

    [serviceFuncDeclare]

};
} // V1_0
} // [marcoName]
} // HDI
} // OHOS

#endif // OHOS_HDI_[driverUpperName]_V1_0_[driverUpperName]INTERFACESERVICE_H
  `
}