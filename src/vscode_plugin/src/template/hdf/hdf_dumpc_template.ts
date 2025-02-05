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

export let peripheralDumpC: FileTemp = {
  name: 'hello_dump.c',
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

#include "[driverName]_dump.h"
#include <securec.h>
#include <stdio.h>
#include "devhost_dump_reg.h"
#include "hdf_base.h"
#include <hdf_log.h>
// #include "[driverName]_log.h"

#define HDF_LOG_TAG    uhdf_[driverName]_service

// -c dump the helloworld info
static const char *g_dumpHelp =
    " usage:\\n"
    " -h, --help: dump help\\n"
    " -c, --hello: dump the helloworld info\\n";

static uint32_t ShowHelloworldInfo(struct HdfSBuf *reply)
{
    int32_t ret;
    const char *helloWorldMessage = "Hello, World!";

    ret = HdfSbufWriteString(reply, helloWorldMessage);
    if (ret != HDF_SUCCESS) {
        HDF_LOGE("%{public}s: write hello world info failed", __func__);
        return HDF_FAILURE;
    }
    
    HDF_LOGI("%{public}s: [driverName]dump: print hello world !", __func__);

    return HDF_SUCCESS;

}

static int32_t Dump[marcoName]Channel(struct HdfSBuf *reply)
{
    int32_t ret;
    HDF_LOGI("%{public}s: get [driverName] dump channel begin", __func__);
    ret = ShowHelloworldInfo(reply);
    if (ret != HDF_SUCCESS) {
        HDF_LOGE("%{public}s: show hello world info failed", __func__);
        return HDF_FAILURE;
    }

    return HDF_SUCCESS;
}

static int32_t [marcoName]DriverDump(struct HdfSBuf *data, struct HdfSBuf *reply)
{
    uint32_t i;
    uint32_t argv = 0;
    HDF_LOGI("%{public}s: get [driverName] dump begin xx", __func__);
    if (data == NULL || reply == NULL) {
        return HDF_FAILURE;
    }

    if (!HdfSbufReadUint32(data, &argv)) {
        HDF_LOGE("%{public}s: read argv failed", __func__);
        return HDF_FAILURE;
    }

    if (argv == 0) {
        if (!HdfSbufWriteString(reply, g_dumpHelp)) {
            HDF_LOGE("%{public}s: write -h failed", __func__);
            return HDF_FAILURE;
        }
    }

    for (i = 0; i < argv; i++) {
        const char *value = HdfSbufReadString(data);
        if (value == NULL) {
            HDF_LOGE("%{public}s value is invalid", __func__);
            return HDF_FAILURE;
        }

        if (strcmp(value, "-h") == HDF_SUCCESS) {
            if (!HdfSbufWriteString(reply, g_dumpHelp)) {
                HDF_LOGE("%{public}s: write -h failed", __func__);
                return HDF_FAILURE;
            }
            continue;
        } else if (strcmp(value, "-c") == HDF_SUCCESS) {
            Dump[marcoName]Channel(reply);
            continue;
        }
    }

    return HDF_SUCCESS;
}

int32_t Get[marcoName]Dump(struct HdfSBuf *data, struct HdfSBuf *reply)
{
    HDF_LOGI("%{public}s: get [driverName] dump begin", __func__);
    int32_t ret = [marcoName]DriverDump(data, reply);
    if (ret != HDF_SUCCESS) {
        HDF_LOGE("%{public}s: get [driverName] dump failed", __func__);
        return HDF_FAILURE;
    }

    return HDF_SUCCESS;
}
  `
}