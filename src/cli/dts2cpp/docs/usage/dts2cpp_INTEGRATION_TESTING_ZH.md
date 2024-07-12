# NAPI框架生成工具集成测试

## 简介
  本文主要介绍如何将NAPI框架生成代码集成到OpenHarmony系统，进而进行集成测试。

## 准备

  1.硬件：rk3568开发套件。

  2.系统镜像：

  系统镜像的具体生成方法，可以左键单击以下链接了解：

  [生成代码集成到OpenHarmony](https://gitee.com/openharmony/napi_generator/blob/master/src/cli/dts2cpp/docs/usage/dts2cpp_ENSEMBLE_METHOD_ZH.md)

3. hap包

hap包的具体生成方法，可参考OpenHarmony/docs/zh-cn/application-dev文档中使用ArkTS语言开发（Stage模型）。

### 修改点1：扩展SDK接口
1. 查看SDK目录：打开DevEco Studio ，点击 Tools -> SDK Manager -> SDK 

   ![](../figures/DevEco_SDK_path.png)

2. 将@ohos.napitest.d.ts文件拷贝到应用所使用的sdk目录下 的ets\api

   ![](../figures/DevEco_add_interface.png)

### 修改点2：增加新接口调用
其中修改index.ets文件内容如下：

```
import napitest from '@ohos.napitest';

@Entry
@Component
struct Index {
    @State returnVal: number = 0

    build() {
        Row() {
            Column() {
                
                // 调用普通函数
                Button() {
                    Text('调用funcTest方法')
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                }
                .type(ButtonType.Capsule)
                .margin({
                    top: 10
                })
                .backgroundColor('#0D9FFB')
                .width('90%')
                .height('5%')
                .onClick( () => {
                    this.returnVal = napitest.funcTest(2, 3);
                    console.info("napiTestDemo ----funcTest returnVal = " + this.returnVal)
                })
     
                Text('funcTest返回值： returnVal = ' + this.returnVal).margin({ top: 10 })
            }
            .width('100%')
        }
        .height('100%')
    }
}
```

## 使用说明

步骤一：安装镜像环境：将out/rk3568/packages/phone目录下的images镜像文件下载并烧录到开发板上。

	 OpenHarmony@Ubuntu-64:~/OpenHarmony/out/rk3568/packages/phone/images$ ll
	 total 767452
	 drwxrwxrwx  2 root root       4096 Nov 21 05:32 ./
	 drwxrwxrwx 15 root root       4096 Nov 21 05:32 ../
	 -rwxrwxrwx  1 root root   67108864 Nov 21 05:04 boot_linux.img*
	 -rw-r--r--  1 root root   52428800 Nov 21 05:32 chip_prod.img
	 -rwxrwxrwx  1 root root       8569 Nov 21 05:04 config.cfg*
	 -rw-r--r--  1 root root   12582912 Nov 21 05:32 eng_system.img
	 -rwxrwxrwx  1 root root     455104 Nov 21 05:04 MiniLoaderAll.bin*
	 -rwxrwxrwx  1 root root        756 Nov 21 05:04 parameter.txt*
	 -rw-rw-r--  1 root root    2507625 Nov 21 05:32 ramdisk.img
	 -rwxrwxrwx  1 root root    5639680 Nov 21 05:04 resource.img*
	 -rw-r--r--  1 root root   52428800 Nov 21 05:32 sys_prod.img
	 -rw-r--r--  1 root root 1610608640 Nov 21 05:32 system.img
	 -rwxrwxrwx  1 root root    4194304 Nov 21 05:04 uboot.img*
	 -rw-rw-r--  1 root root   15806303 Nov 21 05:32 updater.img
	 -rw-r--r--  1 root root 1468006400 Nov 21 05:32 userdata.img
	 -rw-r--r--  1 root root  268431360 Nov 21 05:32 vendor.img

步骤二：安装hap包。

  Build Haps通过后，通过Run按钮将hap包安装到板子上。

  执行完成后，设备中会出现安装的APP。

## 查看结果

点击”调用funcTest方法“按钮，funcTest返回值显示出 returnVal = 5

## 相关仓

暂无
