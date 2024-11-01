# TS框架生成工具IntelliJ插件说明

## 简介

ts(type-script)接口生成工具，它可以根据定义在c++头文件中的接口，生成type-script语言的ts接口文件。目前工具支持可执行文件、IntelliJ插件两种入口，本文主要介绍IntelliJ插件使用说明。

## 目录 

	├── napi_generator/src/intellij_plugin/h2dts                   # TS框架代码生成工具
	│   ├── ...                                                    # 其它文件
	│   ├── ts_IntelliJ_plugin                                     # IntelliJ插件代码
	│   │   ├── docs                                               # IntelliJ插件说明
	│   │   ├── resources                                          # IntelliJ插件所需资源文件
	│   │   ├── src    				                               # IntelliJ插件源码
	│   │   └── README_zh                                          # IntelliJ插件说明

## 约束 

系统：建议Windows 10

依赖版本：JDK 11

开发工具：DevEco stdio、IDEA Community 2021.3.3

## 使用方法 

### 使用对象

系统开发者、应用Native开发者

### 使用场景

1) 系统框架层新增子系统，需对应用层提供接口。
2) 系统框架层子系统能力增强后，需对应用层提供新接口。
3) 应用层引入C++三方库，需增加OpenHarmony应用层接口。

### 工具使用

插件下载路径如下，点击download下载。

[下载链接](https://plugins.jetbrains.com/plugin/21420-ts-generator/edit/versions)

具体的工具使用步骤，可以左键单击以下链接了解：

[工具使用说明](https://gitee.com/openharmony/napi_generator/tree/master/src/intellij_plugin/h2dts/ts_IntelliJ_plugin/docs/usage/INSTRUCTION_ZH.md)

### 工具输出

根据使用者指定的.h文件，工具会输出对应的ts接口文件。为了方便使用者快速上手工具，可供测试的test.h文件样例如下：

```
#include < string >
	#include < vector >
	using namespace std;

	class TestA {
    	public:
    	char16_t string1;
    	void add(string v, long double v1[]);
	};
	double count(double v, double v1[]);

	namespace Space {
    	class TestBB {
        	public:
        	short string4;
        	bool ifExist(bool v, bool v1[]);
	};
    	uint32_t max(uint32_t v, uint32_t v1[]);
	}
```

在window环境下的，根据输入文件test.h,生成的输出文件，如下所示：![](../figures/h-2-ts-succ.png)

其中生成的"test.d.ts"文件，定义了应用开发接口，如下所示：


```c++
declare class TestA {
	string1: string;
	add(v: string, v1: Array<number>): void;
}
declare namespace Space {
	function max(v: number, v1: Array<number>): number;
	class TestBB {
    	string4: number;
    	ifExist(v: boolean, v1: Array<boolean>): boolean;
	}
}
declare function count(v: number, v1: Array<number>): number;

export default Space;
```

## 开发说明

### 对象

工具的开发者

### 开发场景

若当前工具的功能已经不能满足开发者的全部需求，则开发者可以基于已有的源码对工具进行二次开发，来增强工具的能力，编译打包生成自定义的可执行文件和插件。
       
### 开发步骤

开发者可以根据如下的步骤来完成对工具IntelliJ插件的开发：

 [工具开发说明](https://gitee.com/openharmony/napi_generator/tree/master/src/intellij_plugin/h2dts/ts_IntelliJ_plugin/docs/guide/DEVELOP_ZH.md)
    
## 版本说明 

当前版本已支持的特性和待开发的特性，如下所示：

 [已支持特性](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dts/docs/release-notes/ts_Gen-1.0.md)

 [待支持特性](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/h2dts/docs/requirement/ROADMAP_ZH.md)

## FAQ

对于常见问题解决方法指导如下：

  [FAQ](https://gitee.com/openharmony/napi_generator/tree/master/src/cli/h2dts/docs/guide/FAQ.md)

## 相关仓

暂无