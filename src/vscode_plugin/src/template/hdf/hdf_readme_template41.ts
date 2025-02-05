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

export let hdfReadmeTemplate: FileTemp = {
  name: 'readme.md',
  content: `## 依赖

  插件版本: 0.0.1
  
  VSCode版本: VS Code 1.62.0及以上
  
  ## 使用方法
  
  生成物具体如何使用请参考以下链接：
  
  [usage](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2hdf/docs/usage.md#编译)
  
  `
}