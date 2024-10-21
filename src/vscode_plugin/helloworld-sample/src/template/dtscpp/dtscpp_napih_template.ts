import { FileTemp } from "../../datatype";

export let napiHTemplate: FileTemp = {
  name: '[fileName]napi.h',
  content: `
  #ifndef NAPITUTORIALS_[upper_filename]NAPI_H
  #define NAPITUTORIALS_[upper_filename]NAPI_H
  
  #include "[fileName]common.h"
  
  [func_declare_replace]
  
  #endif //NAPITUTORIALS_[upper_filename]NAPI_H
  `
}