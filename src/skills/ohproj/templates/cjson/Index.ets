/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 */

import { hilog } from '@kit.PerformanceAnalysisKit';
import testNapi from 'libentry.so';

const DOMAIN = 0x0000;

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize($r('app.float.page_text_font_size'))
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            hilog.info(DOMAIN, 'testTag', 'add(2,3)=%{public}d', testNapi.add(2, 3));
            const ver: string = testNapi.cjsonVersion();
            hilog.info(DOMAIN, 'testTag', 'cJSON version: %{public}s', ver);
            const h: number = testNapi.cjsonParse('{"name":"{{PROJECT_NAME}}","count":1}');
            if (h !== 0) {
              const printed: string | null = testNapi.cjsonPrint(h);
              hilog.info(DOMAIN, 'testTag', 'parsed: %{public}s', printed ?? '');
              const nameH: number = testNapi.cjsonGetObjectItem(h, 'name');
              const nameStr: string | null = nameH !== 0 ? testNapi.cjsonGetStringValue(nameH) : null;
              const countH: number = testNapi.cjsonGetObjectItem(h, 'count');
              const countNum: number = countH !== 0 ? testNapi.cjsonGetNumberValue(countH) : 0;
              hilog.info(DOMAIN, 'testTag', 'name=%{public}s count=%{public}d', nameStr ?? '', countNum);
              testNapi.cjsonDelete(h);
            }
            const obj: number = testNapi.cjsonCreateObject();
            const s: number = testNapi.cjsonCreateString('fromArkTS');
            testNapi.cjsonAddItemToObject(obj, 'key', s);
            const out: string | null = testNapi.cjsonPrint(obj);
            hilog.info(DOMAIN, 'testTag', 'created: %{public}s', out ?? '');
            testNapi.cjsonDelete(obj);
            this.message = 'Welcome (cJSON ok)';
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
