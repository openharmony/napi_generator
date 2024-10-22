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

export let napiCommonHTemplate: FileTemp = {
  name: '[fileName]common.h',
  content: `
  #ifndef NAPITUTORIALS_[upper_filename]COMMON_H
#define NAPITUTORIALS_[upper_filename]COMMON_H

#include <js_native_api.h>
#include <js_native_api_types.h>
#include <string>
#include <stdio.h>
#include <vector>
#include "hilog/log.h"
#include "napi/native_api.h"
#include "[fileName].h"

#define GLOBAL_RESMGR (0xFFEE)
const unsigned int LOG_PRINT_DOMAIN = 0xFF00;

constexpr int32_t STR_MAX_SIZES = 200;
constexpr int32_t LONG_STR_MAX_SIZES = 1024;
constexpr uint8_t PARAMS0 = 0;
constexpr uint8_t PARAMS1 = 1;
constexpr uint8_t PARAMS2 = 2;
constexpr uint8_t PARAMS3 = 3;
constexpr uint8_t PARAMS4 = 4;
constexpr uint8_t PARAMS5 = 5;
constexpr uint8_t PARAMS6 = 6;
constexpr uint8_t PARAMS7 = 7;
constexpr uint8_t PARAMS8 = 8;
constexpr uint8_t PARAMS9 = 9;
constexpr uint8_t PARAMS10 = 10;
constexpr uint8_t PARAMS11 = 11;
constexpr uint8_t PARAMS12 = 12;
constexpr uint8_t PARAMS100 = 100;

void getErrMessage(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
    const char *info, const char *tag);

#endif //NAPITUTORIALS_[upper_filename]COMMON_H
`
}