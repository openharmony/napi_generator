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

// 对应cJSON.h中: typedef struct cJSON {}
export interface cJSON {
  next: cJSON | null;
  prev: cJSON | null;
  child: cJSON | null;
  type: number;
  valuestring: string;
  valueint: number;
  valuedouble: number;
  string: string;
}
// 对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_Parse(const char *value); 方法的dts接口
export const KH418_cJSON_Parse:(value: string) => cJSON;
// 对应cJSON.h中: CJSON_PUBLIC(int) cJSON_GetArraySize(const cJSON *array); 方法的dts接口
export const KH373_cJSON_GetArraySize:(array: cJSON) => number;
// 对应cJSON.h中: CJSON_PUBLIC(char *) cJSON_Print(const cJSON *item); 方法的dts接口
export const KH735_cJSON_Print:(item: cJSON) => string;
// 对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateObject(void); 方法的dts接口
export const KH361_cJSON_CreateObject:() => cJSON;
// 对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_CreateString(const char *string); 方法的dts接口
export const KH515_cJSON_CreateString:(string: string) => cJSON;