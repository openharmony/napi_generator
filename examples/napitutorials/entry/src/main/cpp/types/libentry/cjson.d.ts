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
  next: cJSON;
  prev: cJSON;
  child: cJSON;
  type: number;
  valuestring: string;
  valueint: number;
  valuedouble: number;
  string: string;
}
// 对应cJSON.h中: CJSON_PUBLIC(cJSON *) cJSON_Parse(const char *value); 方法的dts接口
export const KH418_cJSON_Parse:(value: string) => cJSON;