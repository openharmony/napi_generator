import router from '@ohos.router';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

@Entry
@Component
struct MainMenu {
  @State appVersion: string = 'v1.0.0';

  private navigateTo(url: string, title: string) {
    router.pushUrl({
      url: url
    }).then(() => {
      hilog.info(DOMAIN, 'MainMenu', `导航到: ${title}`);
    }).catch((err: Error) => {
      hilog.error(DOMAIN, 'MainMenu', `导航失败: ${err.message}`);
    });
  }

  build() {
    Column() {
      // 顶部标题区域
      Column() {
        Text('压缩解压工具')
          .fontSize(36)
          .fontWeight(FontWeight.Bold)
          .fontColor('#FFFFFF')
          .margin({ top: 40 })

        Text(this.appVersion)
          .fontSize(14)
          .fontColor('#FFFFFF')
          .opacity(0.7)
          .margin({ top: 5 })
      }
      .width('100%')
      .height(150)
      .backgroundColor('#2196F3')
      .justifyContent(FlexAlign.Center)

      // 功能菜单区域
      Scroll() {
        Column() {
          Text('选择功能')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 30, bottom: 20 })
            .alignSelf(ItemAlign.Start)

          // 解压功能卡片
          Column() {
            Row() {
              Column() {
                Text('解压缩')
                  .fontSize(24)
                  .fontWeight(FontWeight.Bold)
                  .alignSelf(ItemAlign.Start)

                Text('支持 LZMA / 7z / Zip / Tar / RAR 等多种格式')
                  .fontSize(14)
                  .fontColor('#666666')
                  .margin({ top: 5 })
                  .alignSelf(ItemAlign.Start)
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)
            }
            .width('100%')
            .padding(20)
          }
          .width('100%')
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({ radius: 8, color: '#1F000000', offsetX: 0, offsetY: 2 })
          .onClick(() => {
            this.navigateTo('pages/DecompressTestPage', '解压功能');
          })
          .margin({ bottom: 20 })

          // 压缩功能卡片
          Column() {
            Row() {
              Column() {
                Text('压缩')
                  .fontSize(24)
                  .fontWeight(FontWeight.Bold)
                  .alignSelf(ItemAlign.Start)

                Text('单文件 / 多文件 / 文件夹压缩，支持 7z 和 Zip')
                  .fontSize(14)
                  .fontColor('#666666')
                  .margin({ top: 5 })
                  .alignSelf(ItemAlign.Start)
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)
            }
            .width('100%')
            .padding(20)
          }
          .width('100%')
          .backgroundColor('#FFFFFF')
          .borderRadius(12)
          .shadow({ radius: 8, color: '#1F000000', offsetX: 0, offsetY: 2 })
          .onClick(() => {
            this.navigateTo('pages/CompressTestPage', '压缩功能');
          })
          .margin({ bottom: 20 })

          // 功能特性列表
          Column() {
            Text('功能特性')
              .fontSize(18)
              .fontWeight(FontWeight.Bold)
              .margin({ top: 30, bottom: 15 })
              .alignSelf(ItemAlign.Start)

            Column() {
              this.FeatureItem('√', '多格式支持', '支持主流压缩格式')
              Divider().margin({ left: 40 })
              this.FeatureItem('√', '大文件处理', '自动分块，内存安全')
              Divider().margin({ left: 40 })
              this.FeatureItem('√', '实时进度', '显示压缩/解压进度')
              Divider().margin({ left: 40 })
              this.FeatureItem('√', '批量操作', '支持多文件和文件夹')
              Divider().margin({ left: 40 })
              this.FeatureItem('NEW', '完善错误处理', '磁盘空间检查、详细错误码')
            }
            .width('100%')
            .backgroundColor('#FFFFFF')
            .borderRadius(12)
            .padding(15)
            .shadow({ radius: 8, color: '#1F000000', offsetX: 0, offsetY: 2 })
          }
          .width('100%')

          // 底部信息
          Column() {
            Text('基于 p7zip 和 LZMA SDK')
              .fontSize(12)
              .fontColor('#999999')
              .margin({ top: 30 })

            Text('HarmonyOS Native 开发')
              .fontSize(12)
              .fontColor('#999999')
              .margin({ top: 5 })
          }
          .margin({ top: 20, bottom: 20 })
        }
        .width('100%')
        .layoutWeight(1)
        .padding({ left: 20, right: 20 })
        .backgroundColor('#F5F5F5')
      }
      .width('100%')
      .height(600)
    }
    .width('100%')
    .height('100%')
  }

  @Builder
  FeatureItem(icon: string, title: string, description: string) {
    Row() {
      Text(icon)
        .fontSize(24)
        .margin({ right: 15 })
      
      Column() {
        Text(title)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .alignSelf(ItemAlign.Start)
        
        Text(description)
          .fontSize(13)
          .fontColor('#666666')
          .margin({ top: 2 })
          .alignSelf(ItemAlign.Start)
      }
      .alignItems(HorizontalAlign.Start)
      .layoutWeight(1)
    }
    .width('100%')
    .padding({ top: 12, bottom: 12 })
  }
}

