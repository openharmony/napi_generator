import { FileTemp } from "../../datatype";

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