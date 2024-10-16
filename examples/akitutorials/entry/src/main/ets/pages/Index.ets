import { hilog } from '@kit.PerformanceAnalysisKit';
import testNapi from 'libentry.so';

import { NAPI_SAMPLE_CATEGORIES } from '../data/CollectionCategory'
import { FirstLevelCategory } from '../model/CategoricalDataType'
import { TabContentNavigation } from '../common/TabContentNavigation'

@Entry
@Component
struct Index {
  @State tabsIndex: number = 0

  build() {
    Tabs({ barPosition: BarPosition.End }) {
      ForEach(NAPI_SAMPLE_CATEGORIES, (item: FirstLevelCategory, index: number) => {
        TabContent() {
          TabContentNavigation({ categories: item.childNodes })
        }
        .tabBar(this.TabBarBuilder(index, item.selectedImage, item.unselectedImage, item.tabBarName))
      })
    }
    .barHeight(56)
    .barWidth('100%')
    .vertical(false)
    .backgroundColor($r('app.color.background_shallow_grey'))
    .onChange((index: number) => {
      this.tabsIndex = index
    })
  }

  @Builder TabBarBuilder(index: number, selectedImage: Resource, unselectedImage: Resource, tabBarName: Resource) {
    Column() {
      Image(this.tabsIndex === index ? selectedImage : unselectedImage)
        .width(24)
        .height(24)
        .margin({ bottom: 4 })

      Text(tabBarName)
        .fontSize(10)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontColor(this.tabsIndex === index ? $r('app.color.tab_bar_select') : $r('app.color.tab_bar_unselect'))
    }
    .width('100%')
    .padding({ top: 6, bottom: 6 })
    .alignItems(HorizontalAlign.Center)
    .id(`tabBar${index}`)
  }
}
