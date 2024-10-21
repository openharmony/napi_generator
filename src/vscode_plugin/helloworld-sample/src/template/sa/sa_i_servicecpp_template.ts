import { FileTemp } from "../../datatype";

export let iServiceCppTemplate: FileTemp = {
  name: 'i_[serviceName]_service.cpp',
  content: `#include "i_[lowServiceName]_service.h"
  `
};