/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const { writeFile } = require("./Tool");
const re = require("./re");

let commonH = `
#ifndef NAPI_COMMON_H
#define NAPI_COMMON_H

#include <string>
#include <stdio.h>
#include <js_native_api.h>
#include <js_native_api_types.h>
#include "hilog/log.h"
#include "napi/native_api.h"

// 加入hilog打印声明
#include "hilog/log.h"
#include <bits/alltypes.h>
#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x3200
#define LOG_TAG "[HILOG_PRINTHILOG_PRINT]"
#define OH_LOG_LOGINFOS(type, ...) ((void)OH_LOG_Print((type), LOG_INFO, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
#define OH_LOG_LOGERRORS(type, ...) ((void)OH_LOG_Print((type), LOG_ERROR, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))

#define GLOBAL_RESMGR (0xFFEE)
constexpr int32_t RGB_565 = 2;
constexpr int32_t RGBA_8888 = 3;

constexpr int32_t STR_MAX_SIZE = 200;
constexpr int32_t LONG_STR_MAX_SIZE = 1024;
constexpr int32_t ERR_OK = 0;
constexpr int8_t NO_ERROR = 0;
constexpr int8_t ERROR = -1;
constexpr uint8_t PARAM0 = 0;
constexpr uint8_t PARAM1 = 1;
constexpr uint8_t PARAM2 = 2;
constexpr uint8_t PARAM3 = 3;
constexpr uint8_t PARAM4 = 4;
constexpr uint8_t PARAM5 = 5;
constexpr uint8_t PARAM6 = 6;
constexpr uint8_t PARAM7 = 7;
constexpr uint8_t PARAM8 = 8;
constexpr uint8_t PARAM9 = 9;
constexpr uint8_t PARAM10 = 10;
constexpr uint8_t PARAM11 = 11;
constexpr uint8_t PARAM12 = 12;
constexpr uint8_t PARAM100 = 100;

constexpr int32_t ARGS_ONE = 1;
constexpr int32_t ARGS_TWO = 2;
constexpr int32_t ONLY_CALLBACK_MAX_PARA = 1;
constexpr int32_t ONLY_CALLBACK_MIN_PARA = 0;

void getErrMsg(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
  const char *info, const char *tag);

#endif //NAPI_COMMON_H
`

let commonCpp = `
#include "common.h"

/*[NAPI_GEN]:错误处理,获取错误详细信息*/
void getErrMsg(napi_status &status, napi_env &env, const napi_extended_error_info *&extended_error_info,
  const char *info, const char *tag)
{
  status = napi_get_last_error_info(env, &extended_error_info);
  if (status == napi_ok && extended_error_info != NULL) {
      const char *errorMessage =
          extended_error_info->error_message != NULL ? extended_error_info->error_message : "Unknown error";
      OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, tag, "errmsg %{public}s!, engine_err_code %{public}d!.",
                   std::to_string(extended_error_info->engine_error_code).c_str(), extended_error_info->error_code);
      std::string myInfo = info;
      std::string res = "Failed to " + myInfo + " em = " + errorMessage +
                        ", eec = " + std::to_string(extended_error_info->engine_error_code) +
                        ", ec = " + std::to_string(extended_error_info->error_code);
      napi_throw_error(env, NULL, res.c_str());
  }
}
`

function generateBase(destDir, license) {
  writeFile(re.pathJoin(destDir, "common.h"), null != license ? (license + "\n" + commonH) : commonH)
  writeFile(re.pathJoin(destDir, "common.cpp"), null != license ? (license + "\n" + commonCpp): commonCpp)
}

module.exports = {
  generateBase
}