/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';
import { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';
import { UIAbility, Want } from '@kit.AbilityKit';
import { TEST_FILTER, UI_DELAY_MS } from './constant';

const delegator = abilityDelegatorRegistry.getAbilityDelegator();
const bundleName = abilityDelegatorRegistry.getArguments().bundleName;

function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default function indexUiTest() {
  describe('IndexUiTest', () => {
    beforeAll(async () => {
      const want: Want = { bundleName, abilityName: 'EntryAbility' };
      await delegator.startAbility(want);
      await sleep(UI_DELAY_MS);
    });
    beforeEach(async () => { await sleep(200); });
    afterEach(() => { });
    afterAll(() => { });

    it('test_page_load_top_ability', TEST_FILTER, async (done: Function) => {
      const ability: UIAbility = await delegator.getCurrentTopAbility();
      expect(ability.context.abilityInfo.name).assertEqual('EntryAbility');
      done();
    })


    it('test_layout_Row_exists', TEST_FILTER, async (done: Function) => {
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      await driver.assertComponentExist(ON.type('Row'));
      done();
    })


    it('test_layout_Column_exists', TEST_FILTER, async (done: Function) => {
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      await driver.assertComponentExist(ON.type('Column'));
      done();
    })



    it('test_component_Text_exists_0_initial', TEST_FILTER, async (done: Function) => {
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      await driver.assertComponentExist(ON.text('Hello World'));
      done();
    })


    it('test_click_Text_then_shows_message', TEST_FILTER, async (done: Function) => {
      const driver = Driver.create();
      await driver.delayMs(UI_DELAY_MS);
      const comp = await driver.findComponent(ON.text('Hello World'));
      await comp.click();
      await driver.delayMs(UI_DELAY_MS);
      await driver.assertComponentExist(ON.text('Welcome'));
      done();
    })

  });
}