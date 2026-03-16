'use static'

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
import common from '@ohos.app.ability.common';
import { Router } from '@ohos.arkui.UIContext';
import { AppStorage, State } from '@ohos.arkui.stateManagement';
import {
  Entry,
  Column,
  Row,
  Component,
  Builder,
  Button,
  Text,
  ClickEvent,
  CustomPopupOptions,
  SaveButton,
  SaveDescription,
  $r,
  SaveIconStyle,
  SaveButtonCallback,
  SaveButtonOnClickResult,
  ColumnOptions,
  ButtonType,
  Scroll,
  FlexAlign
} from '@ohos.arkui.component';

@Entry
@Component
struct SaveButtonIndex {
  @State resultValue: SaveButtonOnClickResult = SaveButtonOnClickResult.TEMPORARY_AUTHORIZATION_FAILED;

  aboutToAppear() {
    try {
      let routerInstance = this.getUIContext().getRouter();
      AppStorage.setOrCreate<Router>('router', routerInstance);
    } catch (error) {
      console.log('error ' + error);
    }
  }

  handleSaveButtonClick: SaveButtonCallback =
    (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError): void => {
      if (result === SaveButtonOnClickResult.SUCCESS) {
        const context = this.getUIContext().getHostContext() as common.Context;
        let helper = photoAccessHelper.getPhotoAccessHelper(context);
        // onClick触发后一分钟内通过createAsset接口创建图片文件，一分钟后createAsset权限收回。
        if(helper){
          helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'png').then((uri: string) => {
            // 使用uri打开文件，可以持续写入内容，写入过程不受时间限制。
            return fileIo.open(uri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
          }).then((file: fileIo.File) => {
            // 写入文件
            return fileIo.write(file.fd, "context").then(() => {
              // 关闭文件
              return fileIo.close(file.fd);
            });
          }).catch((err: Error) => {
            console.error("File operation error: " + err.message);
          });
        }
      } else if(result === SaveButtonOnClickResult.CANCELED_BY_USER){
        this.resultValue = result;
      } else {
        console.error("errCode: " + error?.code);
        console.error("errMessage: " + error?.message);
      }
    };

  build() {
    Column() {
      // 默认参数下，图标、文字、背景都存在。
      Row(){
        // 图标、文字、背景都存在，如果设置宽度小于当前属性组合下允许的最小宽度时，宽度仍为设置值，此时按钮文本信息会自动换行，以保证安全控件显示的完整性。
        SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD, buttonType: ButtonType.Capsule })
          .id('saveButton')
          .onClick((this.handleSaveButtonClick))
          .fontSize(16)
          .setIcon($r('app.media.icon'))
          .setText('setText')
          .iconBorderRadius(6)
          .stateEffect(false)
          .userCancelEvent(false)
          .constraintSize({
            minWidth: 0,
            maxWidth: 90,
            minHeight: 0,
            maxHeight: 50
          })
      }.height(50)
      // 显示 SaveButtonOnClickResult 枚举值
      Text('' + this.resultValue)
        .id('saveButtonResultText')
        .fontSize(16)
        .margin({top: 20})
    }.width('100%')
  }
}