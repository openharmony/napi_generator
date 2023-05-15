# DevEco Studio编译打包说明

## 简介
  本文主要介绍使用IntelliJ插件将ts接口文件名格式如下ohos.A.B.C.d.ts文件转换后如何在DevEco Studio进行编译打包。

## 准备

1. 待转换的@ohos.napitest.d.ts文件如下：

```
import {AsyncCallback} from './basic';

declare namespace napitest {
    function fun1(v1: string): string;
}

export default napitest;
```

2. 生成的napitest.cpp给out赋初值：

```
out = "NapiOut";
```

3. 在DevEco Studio中增加调用napi方法的测试用例。其中修改index.js文件内容如下：


```	
import router from '@ohos.router';
import napitest from 'libnapitest.so';
export default {
    data: {
        title: ""
    },
    onInit(){
        this.title = this.$t('strings.world');
    },
    onclick: function () {
        router.push({
            url: "pages/index/index.js"
        })
    },
    ontest: function () {
        console.log("napitest  begin AAAAAAAAAAAAAAAAAA")
        let testOut = napitest.func1("NapiIn");
        console.info("napitest testOut = " + testOut);
        console.log("napitest  end AAAAAAAAAAAAAAAAAA")
    }
}
```
  修改index.html文件内容如下：

```
    <!--index.hml-->
	<div class="container">
    	<text class="title">
        	Hello World
    	</text>
	<!-- 添加按钮，值为Next，并绑定onclick方法-->
    	<input class="btn" type="button" value="Next" onclick="onclick"></input>
    	<input class="btn" type="button" value="napitest" onclick="ontest"></input>
	</div>
```

## 使用说明

1. 在File->Project Structure->Project->Signing Configs自动签名，点击OK即可。

   ![](../../../figures/DevEco_build_SignConfigs.png)

2. 连接设备，并点击右上角三角符号编译打包。

    ![](../../../figures/DevEco_build.png)

4. 执行成功后，设备中会出现安装的APP并进入APP测试页面，点击测试按钮DevEco Studio控制台中Log->OpenLog中会出现以下结果：

    ```
    01-01 09:05:46.719 3225-3237/com.example.myapplication I A0c0d0/JSApp: app Log: napitest  begin AAAAAAAAAAAAAAAAAA
    01-01 09:05:46.719 3225-3237/com.example.myapplication I A0c0d0/JSApp: app Log: napitest testOut = NapiOut
    01-01 09:05:46.719 3225-3237/com.example.myapplication I A0c0d0/JSApp: app Log: napitest  end AAAAAAAAAAAAAAAAAA
    ```
    
    ![](../../../figures/DevEco_run_result.png)

## 相关仓

暂无
