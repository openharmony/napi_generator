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

import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite_v3/index');
    const useBulk = process.argv.includes('--bulk') || process.env.SUITE_V3_USE_BULK === '1';
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      platform: process.platform === 'win32' ? 'win32-x64-archive' : undefined,
      extensionTestsEnv: {
        SUITE_V3_USE_BULK: useBulk ? '1' : '',
      },
    });
  } catch (err) {
    console.error('Failed to run suite_v3 tests', err);
    process.exit(1);
  }
}

main();
