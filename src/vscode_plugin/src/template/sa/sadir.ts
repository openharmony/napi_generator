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

import { iServiceHTemplate } from './sa_i_serviceh_template';
import { proxyHTemplate } from './sa_proxyh_template';
import { stubHTemplate } from './sa_stubh_template';
import { serviceHTemplate } from './sa_h_template';
import { proxyCppTemplate } from './sa_proxycpp_template';
import { stubCppTemplate } from './sa_stubcpp_template';
import { serviceCppTemplate } from './sa_cpp_template';
import { clientCppTemplate } from './sa_clientcpp_template';
import { buildGnTemplate } from './sa_buildgn_template';
import { buildGnTemplate41 } from './sa_buildgn_template41';
import { bundleJsonTemplate } from './sa_bundlejson_template';
import { bundleJsonTemplate41 } from './sa_bundlejson_template41';
import { profileGnTemplate } from './sa_profilegn_template';
import { profileGnTemplate41 } from './sa_profilegn_template41';
import { profileXmlTemplate } from './sa_profilexml_template';
import { profileJsonTemplate } from './sa_profilejson_template';
import { serviceCfgTemplate } from './sa_cfg_template';
import { serviceCfgTemplate41 } from './sa_cfg_template41';
import { serviceCfgGnTemplate } from './sa_cfggn_template';
import { iServiceCppTemplate } from './sa_i_servicecpp_template';
import { saReadmeTemplate } from './sa_readme_template';
import { saReadmeTemplate41 } from './sa_readme_template41';
import { DirTemp } from '../../datatype';

export let etc4_1_dir: DirTemp = {
  name: 'etc',
  files: [serviceCfgTemplate41, serviceCfgGnTemplate],
  dirs: []
}

export let etc3_2_dir: DirTemp = {
  name: 'etc',
  files: [serviceCfgTemplate, serviceCfgGnTemplate],
  dirs: []
}

export let include_dir: DirTemp  = {
  name: 'include',
  files: [proxyHTemplate, stubHTemplate, serviceHTemplate],
  dirs: []
}

export let interface_dir: DirTemp = {
  name: 'interface',
  files: [iServiceHTemplate],
  dirs: []
}

export let sa_profile4_1_dir: DirTemp = {
  name: 'sa_profile',
  files: [profileGnTemplate41, profileJsonTemplate],
  dirs: []
}

export let sa_profile3_2_dir: DirTemp = {
  name: 'sa_profile',
  files: [ profileGnTemplate, profileXmlTemplate],
  dirs: []
}

export let src_dir: DirTemp = {
  name: 'src',
  files: [ proxyCppTemplate, stubCppTemplate, serviceCppTemplate, clientCppTemplate,iServiceCppTemplate],
  dirs: []
}

export let service4_1_dir: DirTemp = {
  name: "[serviceName]service",
  files: [buildGnTemplate41, bundleJsonTemplate41, saReadmeTemplate41],
  dirs: [etc4_1_dir, include_dir, src_dir, interface_dir, sa_profile4_1_dir]
}

export let service3_2_dir: DirTemp = {
  name: "[serviceName]service",
  files: [buildGnTemplate, bundleJsonTemplate, saReadmeTemplate],
  dirs: [etc3_2_dir, include_dir, src_dir, interface_dir, sa_profile3_2_dir],
}