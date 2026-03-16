'use static'

import { formBindingData } from '@kit.FormKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import {
  Entry,
  Column,
  Component,
  Builder,
  Button,
  Text,
  Image,
  FlexAlign,
  Placement,
  ResponseType,
  ContextMenuOptions,
  Row,
  Menu,
  MenuItem,
  $r,
  ModalMode,
  BlurStyle,
  Color
} from '@ohos.arkui.component';
import {
  AddFormMenuItem,
  AddFormOptions,
  FormMenuItemStyle
} from '@ohos.arkui.advanced.FormMenu';
import { State } from '@ohos.arkui.stateManagement'

const tag = 'AddFormMenuItem';

@Entry
@Component
struct Index {
  @State message: string = 'Long press show menu';
  private compId: string = 'AddFormMenuItemImage';

  @Builder
  MyMenu() {
    Menu() {
      AddFormMenuItem(
        {
          bundleName: 'com.arkui.ace.dialog.button.static', // 包名
          abilityName: 'EntryAbility', // 模块ability名称
          parameters: {
            'ohos.extra.param.key.form_dimension': 2, // 卡片尺寸，1代表1*2卡片，2代表2*2卡片，3代表2*4卡片，4代表4*4卡片，7代表6*4卡片
            'ohos.extra.param.key.form_name': 'widget', // 卡片名称
            'ohos.extra.param.key.module_name': 'entry' // 卡片所属的模块名称
          },
        },
        this.compId,
        {
          formBindingData: formBindingData.createFormBindingData({}),
          // formBindingData: formBindingData.createFormBindingData({ data: 'share' }),
          callback: (error, formId) => {
            hilog.info(0x3900, tag, `callback info：error = ${JSON.stringify(error)}, formId = ${formId}`);
            if (error?.code === 0) {
              hilog.info(0x3900, tag, "添加至桌面成功")
            } else {
              hilog.info(0x3900, tag, "添加至桌面失败，请尝试其它添加方式")
            }
          },
          style: {
            options: {
              startIcon: $r("app.media.icon"),
              content: "添加到桌面",
              endIcon: $r("app.media.icon")
            }
          }
        }
      )
    }
  }

  build() {
      Column() {
        Image($r("app.media.startIcon"))   // 自定义图片
          .id(this.compId)
          .width(200)
          .height(200)
          .bindContextMenu(this.MyMenu, ResponseType.LongPress, {
            placement: Placement.TopLeft
          } as ContextMenuOptions)

        Text('AddFormMenuItem')
          .fontSize(30)
      }
      .width('100%')

  }
}