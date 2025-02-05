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

export let driverInterfaceServiceCpp: FileTemp = {
  name: '[driverName]_interface_service.cpp',
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
 
#include "v1_0/[driverName]_interface_service.h"
#include <hdf_base.h>
// #include "[driverName]_log.h"
#include <hdf_log.h>
#include "devhost_dump_reg.h"
#include "[driverName]_dump.h"

#define HDF_LOG_TAG    [driverName]_interface_service

namespace OHOS {
namespace HDI {
namespace [marcoName] {
namespace V1_0 {
extern "C" I[marcoName]Interface *[marcoName]InterfaceImplGetInstance(void)
{
    // ע��hidumper
    DevHostRegisterDumpHost(Get[marcoName]Dump);
    // [hdf-gen] Todo
    HDF_LOGI("%{public}s: I[marcoName]Interface init", __func__);
    return new (std::nothrow) [marcoName]InterfaceService();
}

[serviceFuncListImpl]

} // V1_0
} // [marcoName]
} // HDI
} // OHOS

  `
}