import { DirTemp } from "../../datatype";
import { napiCommonCppTemplate } from "./dtscpp_commoncpp_template";
import { napiCommonHTemplate } from "./dtscpp_commonh_template";
import { indexdtsTemplate } from "./dtscpp_dts_template";
import { napiCppTemplate } from "./dtscpp_napicpp_template";
import { napiHTemplate } from "./dtscpp_napih_template";
import { napiInitTemplate } from "./dtscpp_napiinit_template";
import { dtscppReadmeTemplate } from "./dtscpp_readme_template";
import { testFirstGenTemplate } from "./dtscpp_testfirstgen_template";

// out/tsout
export let dtscpp_tsout: DirTemp = {
  name: 'tsout',
  files: [indexdtsTemplate],
  dirs: []
}

// out/testout
export let dtscpp_testout: DirTemp = {
  name: 'testout',
  files: [testFirstGenTemplate],
  dirs: []
}

// out/cppout
export let dtscpp_cppout: DirTemp = {
  name: 'cppout',
  files: [napiCommonHTemplate, napiCommonCppTemplate, napiHTemplate, napiInitTemplate, napiCppTemplate],
  dirs: []
}

export let dtscppout: DirTemp = {
  name: '',
  files: [dtscppReadmeTemplate],
  dirs: [dtscpp_cppout, dtscpp_testout, dtscpp_tsout]
}