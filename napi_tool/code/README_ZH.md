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


