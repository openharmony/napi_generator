import { FileTemp } from "../../datatype";

export let napiCppTemplate: FileTemp = {
  name: '[fileName]napi.cpp',
  content: `#include "[fileName]napi.h"

  [func_content_replace]
  `
}