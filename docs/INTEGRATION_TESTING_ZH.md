# NAPI框架生成工具集成测试

## 简介
  本文主要介绍如何将NAPI框架生成代码集成到OpenHarmony系统，进而进行集成测试。

## 准备

  1.硬件：rk3566开发套件。

  2.系统镜像：

  系统镜像的具体生成方法，可以左键单击以下链接了解：

  [生成代码集成到OpenHarmony](https://gitee.com/openharmony/napi_generator/blob/master/docs/ENSEMBLE_METHOD_ZH.md)

  3.应用hap包：hap包及源码路径如下：

```	
napi_generator/examples/app
```

  hap包的具体生成方法，可参考OpenHarmony/docs/zh-cn/application-dev文档中使用ArkTS语言开发（Stage模型）。
### 修改点1：扩展SDK接口
  将@ohos.napitest.d.ts文件拷贝到sdk目录下的ets\api，SDK目录可在DevEco Studio <File> -> <Settings> -> <Sdks> 中查看。
### 修改点2：增加新接口调用
其中修改index.ets文件内容如下：


```	

	import hilog from '@ohos.hilog';
	import napitest from '@ohos.napitest';
	
	@Entry
	@Component
	struct Index {
	  @State message: string = 'Hello World'
	
	  build() {
	    Row() {
	      Column() {
	        Text(this.message)
	          .fontSize(50)
	          .fontWeight(FontWeight.Bold)
	        // 添加按钮，以响应用户点击
	        Button() {
	          Text('TEST')
	            .fontSize(30)
	            .fontWeight(FontWeight.Bold)
	        }
	        .type(ButtonType.Capsule)
	        .margin({
	          top: 20
	        })
	        .backgroundColor('#0D9FFB')
	        .width('40%')
	        .height('5%')
	        // 跳转按钮响应
	        .onClick(() => {
	          var out = napitest.func1("abcf");
	          hilog.info(0x0000, 'testTag', '%{public}s', out+'AAAAAAAA napi testprint');
	        })
	      }
	      .width('100%')
	    }
	    .height('100%')
	  }
	}
```
  


## 使用说明

步骤一：安装镜像环境。

	 harmony@Ubuntu-64:~/OpenHarmony/out/rk3568-khdvk/packages/phone/images/pack$ ll
	 总用量 3329884
	 drwxrwxr-x 2 harmony harmony       4096 9月  27 14:14  ./
	 drwxrwxr-x 3 harmony harmony       4096 9月  27 15:30  ../
	 -rw-rw-r-- 1 harmony harmony 3409787466 9月  27 14:14 RK3568-KHDVK-RAMDISK-GPT-20220929-1817.img

步骤二：安装hap包。

  Build Haps通过后，通过Run按钮将hap包安装到板子上。

  执行完成后，设备中会出现安装的APP。

步骤三：打印日志并验证结果。

  hap包安装成功后，进入hdc shell，输入命令实时打印日志并输出至windows中。

	.\hdc.exe hilog > log.txt

  然后单击设备中安装的APP，进入APP后单击测试按钮，执行完成后会在hdc安装目录下出现log.txt文件。

## 查看结果
log.txt中包含“AAAAAAAA napi testprint testzzz”日志表示接口调用成功。如下所示：

	01-01 08:10:55.571  2291  2311 D C01400/OHOS::ROSEN: RSSurfaceOhosGl: FlushFrame, SwapBuffers eglsurface is 0x2c21570
	01-01 08:10:55.571  2291  2291 I A00000/testTag: AAAAAAAA napi testprint testzzz

## 相关仓

暂无
