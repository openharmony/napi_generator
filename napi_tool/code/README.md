# napi_tool_code

#### 介绍
此目录为NAPI框架代码生成工具对应的源码，开发者可基于此代码进行二次开发。

#### 目录
```
/napi_tool/code
├── tool_code            # 工具源码
│   ├── gen              
│   |   |── analyze		 # 解析器
│   │   |── extend		 # 扩展模块，包括gn文件生成、linux环境适配代码等
│   │	|── generate	 # 生成器
│   │   └── tools		 # 公共模块代码，包括消息体校验、文件读写、正则表达式转换等
│   └── test           # 插件测试用例    
└──ts_test 			   # 工具需要的ts文件样例  
```

#### 说明

gnapi是使用yo code生成的插件代码框架，其中gnapi/gen目录下是我们开发的自动化生成napi程序的源代码

yo生成插件框架:
安装yo : npm install -g yo generator-code
使用yo : yo code

使用nodejs测试生成代码:
node vscode_plugin/gnapi/gen/test.js
node vscode_plugin/gnapi/gen/cmd_gen.js nodejs_test/gen/@ohos.napitest.d.ts

插件打包成visx:
安装vsce : npm i -g vsce
打包 : vsce package

插件打包成windows,mac,linux三种版本的命令行可执行文件
安装pkg : npm i -g pkg
打包三个版本 : pkg vscode_plugin/gnapi/gen/cmd_gen.js
