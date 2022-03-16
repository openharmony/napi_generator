# NAPI框架生成工具集成测试

## 简介
  本文主要介绍如何将NAPI框架生成代码集成NAPI到OpenHarmony系统，进而进行集成测试。

## 准备

  1.硬件：rk3566开发套件。

  2.系统镜像：

  系统镜像的具体生成方法，可以左键单击以下链接了解：

  [生成代码集成到OpenHarmony的方法](https://gitee.com/openharmony-sig/napi_generator/blob/master/docs/ENSEMBLE_METHOD_ZH.md)

  3.应用hap包：hap包及源码路径如下：

```
napi_generator/examples/app
```


## 使用说明
步骤一：安装镜像环境。

    |-- system.img
    |-- userdata.img
    |-- vendor.img

步骤二：安装hap包。

  hdc中输入命令安装hap包：

	.\hdc.exe install -r E:\dingding\napihap\entry-release-standard-ark-signed.hap

  执行完成后，设备中会出现安装的APP。

步骤三：打印日志并验证结果。

  hap包安装成功后，进入hdc shell，输入命令实时打印日志并输出至windows中。

	.\hdc.exe hilog > log.txt

  然后单击设备中安装的APP，进入APP后单击测试按钮，执行完成后会在hdc安装目录下出现log.txt文件。

## 查看结果
log.txt中包含“===isScreenOn===”日志表示接口调用成功。如下所示：

    03-01 19:48:19.594   916   940 I 00000/power_interface: ===isScreenOn===
    03-01 19:48:19.594   916   925 I 00000/ProducerEglSurface: <342>AddEglData: bufferImpl is reused return.
    03-01 19:48:19.594   916   925 I 00000/ProducerEglSurface: (Window)<217>WaitForReleaseFence: releaseFence 39.
    03-01 19:48:19.594   916   923 I 03b00/JSApp: app Log: power_is_screen_on_promise_test screenOn is 0

## 相关仓

暂无
