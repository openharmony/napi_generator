# NAPI框架代码生成工具

-   [当前支持特性](#section11660541593)
-   [版本规划](#section161941989596)
-   [相关链接](#section11759141594811)

## 当前支持特性

1.支持参数解析、生成，支持的参数类型：number、string、array、boolean、void；

2.支持函数解析、生成，包括同步直接返回函数、同步callback函数、异步callback函数、异步promise函数；

3.支持Interface解析、生成，包括变量、函数；

4.支持返回值解析、生成，返回值的类型有int、string、array、bool、void；

5.支持namespace解析、生成，包括interface、变量、函数等；

## 版本规划
-   **一阶段**  
	支持函数、基础数据类型解析、代码框架生成，330入主干

-   **二阶段**

	支持openHarmony的所有语法、接口的数据解析、代码框架生成，630入主干

-   **三阶段**

	支持接口对应的应用范例自动化生成，930入主干

## 相关链接
[napi官网](http://nodejs.cn/api/n-api.html)

[vscode插件开发参考](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/)

