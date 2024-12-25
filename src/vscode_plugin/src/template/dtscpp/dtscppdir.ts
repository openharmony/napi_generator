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

import { DirTemp } from "../../datatype";
import { napiCommonCppTemplate } from "./dtscpp_commoncpp_template";
import { napiCommonHTemplate } from "./dtscpp_commonh_template";
import { indexdtsTemplate } from "./dtscpp_dts_template";
import { napiCppTemplate } from "./dtscpp_napicpp_template";
import { napiHTemplate } from "./dtscpp_napih_template";
import { napiInitTemplate } from "./dtscpp_napiinit_template";
import { dtscppReadmeTemplate } from "./dtscpp_readme_template";
import { testFirstGenTemplate } from "./dtscpp_testfirstgen_template";

export let dtscpp_testdir: DirTemp = {
  name: 'test',
  files: [testFirstGenTemplate],
  dirs: []
}

export let dtscpp_etsdir: DirTemp = {
  name: 'ets',
  files: [],
  dirs: [dtscpp_testdir]
}

export let dtscpp_typesdir: DirTemp = {
  name: 'types',
  files: [indexdtsTemplate],
  dirs: []
}

export let dtscpp_cppdir: DirTemp = {
  name: 'cpp',
  files: [napiCommonHTemplate, napiCommonCppTemplate, napiHTemplate, napiInitTemplate, napiCppTemplate],
  dirs: [dtscpp_typesdir]
}

export let dtscppout: DirTemp = {
  name: 'testh2dtscpp',
  files: [dtscppReadmeTemplate],
  dirs: [dtscpp_cppdir, dtscpp_etsdir]
}

export let dts2cpp_cppdir: DirTemp = {
  name: 'cpp',
  files: [napiCommonHTemplate, napiCommonCppTemplate, napiHTemplate, napiInitTemplate, napiCppTemplate],
  dirs: []
}

export let cppout: DirTemp = {
  name: 'testdts2cpp',
  files: [],
  dirs: [dts2cpp_cppdir, dtscpp_etsdir]
}