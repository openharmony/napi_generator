# Ts接口生成工具

## 简介
本文主要介绍ts(type-script)接口生成工具，它可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件。若某个服务实现方式为c++，且供应用层访问的接口已在.h文件中定义，此时，NAPI接口开发者使用此工具可一键生成对应的ts文件，进而将生成的ts文件作为NAPI框架生成代码工具的输入，生成NAPI框架代码。串行使用ts接口生成工具、NAPI框架代码生成工具，形成工具链，达到降低NAPI接口开发难度，提高开发效率。目前工具支持可执行文件、VS Code插件、IntelliJ插件三种入口。

更多工具的架构和实现原理详情，可以左键单击以下链接了解：

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/docs/ts/INSTRUCTION_TS_ZH.md)

	├── napi_generator                # NAPI框架代码生成工具
	│   ├── ...                       # 其他文档
	│   ├── src                       # 工具源码
	│   │   ├── gen                   # NAPI框架工具源码
	│   │   ├── tsGen                 # Ts框架工具源码
	│   │   |   ├── header_parser.py  # 解析C++头文件并生成表示类的数据结构
	│   │   |   |── tsMain.js         # Ts框架工具源码入口
	│   │   ├── ...                   # 其他文件

## 约束
系统：建议Ubuntu 20.04或者Windows 10

依赖版本：VS Code 1.62.0

## 使用方法

### 使用对象

系统开发者、应用Native开发者

### 使用场景

1) 系统框架层新增子系统，需对应用层提供接口。
2) 系统框架层子系统能力增强后，需对应用层提供新接口。
3) 应用层引入C++三方库，需增加OpenHarmony应用层接口。

### 工具使用

工具有三种类型，分别是可执行文件、VS Code插件、IntelliJ插件。其中的可执行文件可根据工具使用者的开发环境选择，支持Windows，Linux和Mac。可执行文件、IntelliJ插件、VS Code插件下载路径如下，选择napi_generator_outputs.zip中generator.jar下载：

[下载链接](http://ftp.kaihongdigi.com:5000/fsdownload/mKjfCmPjk/generator_outputs_NAPI_0930)

具体的工具使用步骤，可以左键单击以下链接了解：

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/docs/ts/INSTRUCTION_TS_ZH.md)

### 工具输出

根据使用者指定的.h文件，工具会输出对应的ts接口文件。为了方便使用者快速上手工具，可供测试的test.h文件样例如下：

```

	#include < string >
	#include < vector >
	using namespace std;

	class TestA {
    	public:
    	char16_t string1;
    	void fun16(string v, long double v1[]);
	};
	double fun151(double v, double v1[]);

	namespace Space {
    	class TestBB {
        	public:
        	short string4;
        	bool fun74(bool v, bool v1[]);
	};
    	uint32_t fun103(uint32_t v, uint32_t v1[]);
	}
```

在window环境下的，根据输入文件test.h,生成的输出文件，如下所示：

![](./figures/h-2-ts-succ.png)


其中生成的"test.d.ts"文件，定义了应用开发接口，如下所示：

```

	declare class TestA {
    	string1: string;
    	fun16(v: string, v1: Array<number>): void;
	}
	declare namespace Space {
    	function fun103(v: number, v1: Array<number>): number;
    	class TestBB {
        	string4: number;
        	fun74(v: boolean, v1: Array<boolean>): boolean;
    	}
	}
	declare function fun151(v: number, v1: Array<number>): number;

	export default Space;
```


## 工具开发说明

### 对象

工具的开发者

### 开发场景

若当前工具的功能已经不能满足开发者的全部需求，则开发者可以基于已有的源码对工具进行二次开发，来增强工具的能力，编译打包生成自定义的可执行文件和插件。

### 开发步骤

开发者可以根据如下的步骤来完成对工具的开发：

 [工具开发说明](https://gitee.com/openharmony/napi_generator/tree/master/docs/ts/DEVELOP_TS_ZH.md)

## 版本说明

 当前版本已支持的特性和待开发的特性，如下所示：

 [已支持特性](暂无)

 [待支持特性](暂无)  

## FAQ

  [FAQ](https://gitee.com/openharmony/napi_generator/tree/master/docs/ts/FAQ.md)

## 参与贡献

暂无

## 相关仓

暂无
