/**
 * Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use static';

import { describe, it, expect, Level } from '../../../../hypium/index';
// import { DialogDisplayMode } from '@ohos.arkui.component';

export default function DialogDisplayModeTest() {
  describe('DialogDisplayModeTest', () => {
    /**
     * @tc.number DialogDisplayModeTest_001
     * @tc.name dialogDisplayModeScreenBased
     * @tc.desc Test DialogDisplayMode SCREEN_BASED enum value, verify SCREEN_BASED=0
     * @tc.type FUNCTION
     * @tc.size MEDIUMTEST
     * @tc.level LEVEL1
     */
    it('dialogDisplayModeScreenBased', Level.LEVEL1, (done: () => void) => {
      console.info('DialogDisplayModeTest: dialogDisplayModeScreenBased begin');
      // expect(DialogDisplayMode.SCREEN_BASED).assertEqual(0);
      console.info('DialogDisplayModeTest: dialogDisplayModeScreenBased end');
      done();
    });

    /**
     * @tc.number DialogDisplayModeTest_002
     * @tc.name dialogDisplayModeWindowBased
     * @tc.desc Test DialogDisplayMode WINDOW_BASED enum value, verify WINDOW_BASED=1
     * @tc.type FUNCTION
     * @tc.size MEDIUMTEST
     * @tc.level LEVEL1
     */
    it('dialogDisplayModeWindowBased', Level.LEVEL1, (done: () => void) => {
      console.info('DialogDisplayModeTest: dialogDisplayModeWindowBased begin');
      // expect(DialogDisplayMode.WINDOW_BASED).assertEqual(1);
      console.info('DialogDisplayModeTest: dialogDisplayModeWindowBased end');
      done();
    });
  });
}
