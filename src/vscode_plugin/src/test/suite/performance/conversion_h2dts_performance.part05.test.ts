/*
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

import * as assert from 'assert';
import * as vscode from 'vscode';
import { transTskey2Ckey, getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions } from '../../../gen/gendts';
import { GenInfo, ParseObj } from '../../../gen/datatype';

const TYPE_THRESHOLD_MS = 10;
const METHOD_THRESHOLD_MS = 50;
const FILE_THRESHOLD_MS = 1000;

function measureElapsed(task: () => void): number {
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_Conversion_H2DTS_Suite', function() {
  this.timeout(360000);
  vscode.window.showInformationMessage('Start h2dts performance tests.');

  // 类型转换性能：使用已有基线中已验证的 C++->TS 输入输出对，逐条性能化。
  // 测试内容：验证 h2dts 类型 `int` 转换为 `number` 的结果与性能。
  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0048 的输出与性能。
  test('h2dts_gen_multi_scene_0048', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0048', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0048', alias: '', members: [{ type: 'std::valarray<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0048', alias: '', members: [{ type: 'std::valarray<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0048', alias: '', variableList: [{ type: 'std::valarray<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<char32_t>', parameters: [{ type: 'std::valarray<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0048'), 'h2dts_gen_multi_scene_0048 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0048 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0048'), 'h2dts_gen_multi_scene_0048 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0048'), 'h2dts_gen_multi_scene_0048 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0048 = Array<string> ;'), 'h2dts_gen_multi_scene_0048 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0048 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0048 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0049 的输出与性能。
  test('h2dts_gen_multi_scene_0049', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0049', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0049', alias: '', members: [{ type: 'std::valarray<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0049', alias: '', members: [{ type: 'std::valarray<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0049', alias: '', variableList: [{ type: 'std::valarray<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<uint8_t>::iterator', parameters: [{ type: 'std::valarray<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0049'), 'h2dts_gen_multi_scene_0049 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0049 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0049'), 'h2dts_gen_multi_scene_0049 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0049'), 'h2dts_gen_multi_scene_0049 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0049 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0049 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0049 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0049 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0050 的输出与性能。
  test('h2dts_gen_multi_scene_0050', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0050', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0050', alias: '', members: [{ type: 'std::valarray<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0050', alias: '', members: [{ type: 'std::valarray<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0050', alias: '', variableList: [{ type: 'std::valarray<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<int64_t>::iterator', parameters: [{ type: 'std::valarray<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0050'), 'h2dts_gen_multi_scene_0050 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0050 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0050'), 'h2dts_gen_multi_scene_0050 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0050'), 'h2dts_gen_multi_scene_0050 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0050 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0050 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0050 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0050 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0051 的输出与性能。
  test('h2dts_gen_multi_scene_0051', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0051', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0051', alias: '', members: [{ type: 'std::valarray<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0051', alias: '', members: [{ type: 'std::valarray<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0051', alias: '', variableList: [{ type: 'std::valarray<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<char32_t>::iterator', parameters: [{ type: 'std::valarray<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0051'), 'h2dts_gen_multi_scene_0051 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0051 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0051'), 'h2dts_gen_multi_scene_0051 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0051'), 'h2dts_gen_multi_scene_0051 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0051 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0051 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0051 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0051 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0052 的输出与性能。
  test('h2dts_gen_multi_scene_0052', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0052', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0052', alias: '', members: [{ type: 'std::priority_queue<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0052', alias: '', members: [{ type: 'std::priority_queue<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0052', alias: '', variableList: [{ type: 'std::priority_queue<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<uint8_t>', parameters: [{ type: 'std::priority_queue<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0052'), 'h2dts_gen_multi_scene_0052 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0052 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0052'), 'h2dts_gen_multi_scene_0052 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0052'), 'h2dts_gen_multi_scene_0052 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0052 = Array<number> ;'), 'h2dts_gen_multi_scene_0052 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0052 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0052 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0053 的输出与性能。
  test('h2dts_gen_multi_scene_0053', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0053', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0053', alias: '', members: [{ type: 'std::priority_queue<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0053', alias: '', members: [{ type: 'std::priority_queue<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0053', alias: '', variableList: [{ type: 'std::priority_queue<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<int64_t>', parameters: [{ type: 'std::priority_queue<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0053'), 'h2dts_gen_multi_scene_0053 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0053 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0053'), 'h2dts_gen_multi_scene_0053 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0053'), 'h2dts_gen_multi_scene_0053 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0053 = Array<number> ;'), 'h2dts_gen_multi_scene_0053 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0053 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0053 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0054 的输出与性能。
  test('h2dts_gen_multi_scene_0054', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0054', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0054', alias: '', members: [{ type: 'std::priority_queue<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0054', alias: '', members: [{ type: 'std::priority_queue<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0054', alias: '', variableList: [{ type: 'std::priority_queue<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<char32_t>', parameters: [{ type: 'std::priority_queue<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0054'), 'h2dts_gen_multi_scene_0054 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0054 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0054'), 'h2dts_gen_multi_scene_0054 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0054'), 'h2dts_gen_multi_scene_0054 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0054 = Array<string> ;'), 'h2dts_gen_multi_scene_0054 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0054 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0054 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0055 的输出与性能。
  test('h2dts_gen_multi_scene_0055', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0055', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0055', alias: '', members: [{ type: 'std::priority_queue<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0055', alias: '', members: [{ type: 'std::priority_queue<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0055', alias: '', variableList: [{ type: 'std::priority_queue<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<uint8_t>::iterator', parameters: [{ type: 'std::priority_queue<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0055'), 'h2dts_gen_multi_scene_0055 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0055 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0055'), 'h2dts_gen_multi_scene_0055 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0055'), 'h2dts_gen_multi_scene_0055 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0055 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0055 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0055 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0055 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0056 的输出与性能。
  test('h2dts_gen_multi_scene_0056', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0056', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0056', alias: '', members: [{ type: 'std::priority_queue<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0056', alias: '', members: [{ type: 'std::priority_queue<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0056', alias: '', variableList: [{ type: 'std::priority_queue<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<int64_t>::iterator', parameters: [{ type: 'std::priority_queue<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0056'), 'h2dts_gen_multi_scene_0056 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0056 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0056'), 'h2dts_gen_multi_scene_0056 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0056'), 'h2dts_gen_multi_scene_0056 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0056 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0056 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0056 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0056 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0057 的输出与性能。
  test('h2dts_gen_multi_scene_0057', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0057', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0057', alias: '', members: [{ type: 'std::priority_queue<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0057', alias: '', members: [{ type: 'std::priority_queue<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0057', alias: '', variableList: [{ type: 'std::priority_queue<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::priority_queue<char32_t>::iterator', parameters: [{ type: 'std::priority_queue<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0057'), 'h2dts_gen_multi_scene_0057 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0057 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0057'), 'h2dts_gen_multi_scene_0057 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0057'), 'h2dts_gen_multi_scene_0057 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0057 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0057 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0057 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0057 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0058 的输出与性能。
  test('h2dts_gen_multi_scene_0058', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0058', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0058', alias: '', members: [{ type: 'std::map<char16_t, int32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0058', alias: '', members: [{ type: 'std::map<char16_t, int32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0058', alias: '', variableList: [{ type: 'std::map<char16_t, int32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::map<char16_t, int32_t>', parameters: [{ type: 'std::map<char16_t, int32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0058'), 'h2dts_gen_multi_scene_0058 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0058 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0058'), 'h2dts_gen_multi_scene_0058 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0058'), 'h2dts_gen_multi_scene_0058 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0058 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0058 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0058 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0058 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0059 的输出与性能。
  test('h2dts_gen_multi_scene_0059', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0059', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0059', alias: '', members: [{ type: 'std::map<int, char>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0059', alias: '', members: [{ type: 'std::map<int, char>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0059', alias: '', variableList: [{ type: 'std::map<int, char>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::map<int, char>', parameters: [{ type: 'std::map<int, char>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0059'), 'h2dts_gen_multi_scene_0059 class 生成失败');
      assert.ok(cls.includes('v: Map<number, string>;'), 'h2dts_gen_multi_scene_0059 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0059'), 'h2dts_gen_multi_scene_0059 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0059'), 'h2dts_gen_multi_scene_0059 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0059 = Map<number, string> ;'), 'h2dts_gen_multi_scene_0059 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0059 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0059 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0060 的输出与性能。
  test('h2dts_gen_multi_scene_0060', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0060', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0060', alias: '', members: [{ type: 'std::map<char, double>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0060', alias: '', members: [{ type: 'std::map<char, double>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0060', alias: '', variableList: [{ type: 'std::map<char, double>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::map<char, double>::iterator', parameters: [{ type: 'std::map<char, double>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0060'), 'h2dts_gen_multi_scene_0060 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<string, number>>;'), 'h2dts_gen_multi_scene_0060 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0060'), 'h2dts_gen_multi_scene_0060 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0060'), 'h2dts_gen_multi_scene_0060 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0060 = IterableIterator<Map<string, number>> ;'), 'h2dts_gen_multi_scene_0060 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0060 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0060 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0061 的输出与性能。
  test('h2dts_gen_multi_scene_0061', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0061', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0061', alias: '', members: [{ type: 'std::map<int, bool>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0061', alias: '', members: [{ type: 'std::map<int, bool>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0061', alias: '', variableList: [{ type: 'std::map<int, bool>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::map<int, bool>::iterator', parameters: [{ type: 'std::map<int, bool>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0061'), 'h2dts_gen_multi_scene_0061 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<number, boolean>>;'), 'h2dts_gen_multi_scene_0061 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0061'), 'h2dts_gen_multi_scene_0061 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0061'), 'h2dts_gen_multi_scene_0061 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0061 = IterableIterator<Map<number, boolean>> ;'), 'h2dts_gen_multi_scene_0061 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0061 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0061 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0062 的输出与性能。
  test('h2dts_gen_multi_scene_0062', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0062', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0062', alias: '', members: [{ type: 'std::unordered_map<char, size_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0062', alias: '', members: [{ type: 'std::unordered_map<char, size_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0062', alias: '', variableList: [{ type: 'std::unordered_map<char, size_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_map<char, size_t>', parameters: [{ type: 'std::unordered_map<char, size_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0062'), 'h2dts_gen_multi_scene_0062 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0062 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0062'), 'h2dts_gen_multi_scene_0062 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0062'), 'h2dts_gen_multi_scene_0062 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0062 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0062 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0062 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0062 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0063 的输出与性能。
  test('h2dts_gen_multi_scene_0063', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0063', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0063', alias: '', members: [{ type: 'std::unordered_map<char32_t, int8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0063', alias: '', members: [{ type: 'std::unordered_map<char32_t, int8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0063', alias: '', variableList: [{ type: 'std::unordered_map<char32_t, int8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_map<char32_t, int8_t>', parameters: [{ type: 'std::unordered_map<char32_t, int8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0063'), 'h2dts_gen_multi_scene_0063 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0063 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0063'), 'h2dts_gen_multi_scene_0063 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0063'), 'h2dts_gen_multi_scene_0063 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0063 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0063 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0063 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0063 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0064 的输出与性能。
  test('h2dts_gen_multi_scene_0064', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0064', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0064', alias: '', members: [{ type: 'std::unordered_map<int, int>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0064', alias: '', members: [{ type: 'std::unordered_map<int, int>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0064', alias: '', variableList: [{ type: 'std::unordered_map<int, int>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_map<int, int>::iterator', parameters: [{ type: 'std::unordered_map<int, int>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0064'), 'h2dts_gen_multi_scene_0064 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<number, number>>;'), 'h2dts_gen_multi_scene_0064 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0064'), 'h2dts_gen_multi_scene_0064 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0064'), 'h2dts_gen_multi_scene_0064 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0064 = IterableIterator<Map<number, number>> ;'), 'h2dts_gen_multi_scene_0064 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0064 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0064 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0065 的输出与性能。
  test('h2dts_gen_multi_scene_0065', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0065', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0065', alias: '', members: [{ type: 'std::unordered_map<char32_t, size_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0065', alias: '', members: [{ type: 'std::unordered_map<char32_t, size_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0065', alias: '', variableList: [{ type: 'std::unordered_map<char32_t, size_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_map<char32_t, size_t>::iterator', parameters: [{ type: 'std::unordered_map<char32_t, size_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0065'), 'h2dts_gen_multi_scene_0065 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<string, number>>;'), 'h2dts_gen_multi_scene_0065 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0065'), 'h2dts_gen_multi_scene_0065 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0065'), 'h2dts_gen_multi_scene_0065 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0065 = IterableIterator<Map<string, number>> ;'), 'h2dts_gen_multi_scene_0065 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0065 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0065 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0066 的输出与性能。
  test('h2dts_gen_multi_scene_0066', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0066', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0066', alias: '', members: [{ type: 'std::unordered_map<size_t, char>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0066', alias: '', members: [{ type: 'std::unordered_map<size_t, char>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0066', alias: '', variableList: [{ type: 'std::unordered_map<size_t, char>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_map<size_t, char>::iterator', parameters: [{ type: 'std::unordered_map<size_t, char>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0066'), 'h2dts_gen_multi_scene_0066 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<number, string>>;'), 'h2dts_gen_multi_scene_0066 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0066'), 'h2dts_gen_multi_scene_0066 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0066'), 'h2dts_gen_multi_scene_0066 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0066 = IterableIterator<Map<number, string>> ;'), 'h2dts_gen_multi_scene_0066 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0066 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0066 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0067 的输出与性能。
  test('h2dts_gen_multi_scene_0067', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0067', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0067', alias: '', members: [{ type: 'std::multimap<char, float>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0067', alias: '', members: [{ type: 'std::multimap<char, float>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0067', alias: '', variableList: [{ type: 'std::multimap<char, float>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multimap<char, float>', parameters: [{ type: 'std::multimap<char, float>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0067'), 'h2dts_gen_multi_scene_0067 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0067 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0067'), 'h2dts_gen_multi_scene_0067 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0067'), 'h2dts_gen_multi_scene_0067 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0067 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0067 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0067 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0067 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0068 的输出与性能。
  test('h2dts_gen_multi_scene_0068', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0068', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0068', alias: '', members: [{ type: 'std::multimap<char, bool>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0068', alias: '', members: [{ type: 'std::multimap<char, bool>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0068', alias: '', variableList: [{ type: 'std::multimap<char, bool>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multimap<char, bool>', parameters: [{ type: 'std::multimap<char, bool>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0068'), 'h2dts_gen_multi_scene_0068 class 生成失败');
      assert.ok(cls.includes('v: Map<string, boolean>;'), 'h2dts_gen_multi_scene_0068 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0068'), 'h2dts_gen_multi_scene_0068 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0068'), 'h2dts_gen_multi_scene_0068 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0068 = Map<string, boolean> ;'), 'h2dts_gen_multi_scene_0068 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0068 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0068 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0069 的输出与性能。
  test('h2dts_gen_multi_scene_0069', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0069', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0069', alias: '', members: [{ type: 'std::multimap<char, unsigned>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0069', alias: '', members: [{ type: 'std::multimap<char, unsigned>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0069', alias: '', variableList: [{ type: 'std::multimap<char, unsigned>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multimap<char, unsigned>::iterator', parameters: [{ type: 'std::multimap<char, unsigned>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0069'), 'h2dts_gen_multi_scene_0069 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<string, number>>;'), 'h2dts_gen_multi_scene_0069 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0069'), 'h2dts_gen_multi_scene_0069 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0069'), 'h2dts_gen_multi_scene_0069 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0069 = IterableIterator<Map<string, number>> ;'), 'h2dts_gen_multi_scene_0069 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0069 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0069 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0070 的输出与性能。
  test('h2dts_gen_multi_scene_0070', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0070', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0070', alias: '', members: [{ type: 'std::multimap<wchar_t, uint16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0070', alias: '', members: [{ type: 'std::multimap<wchar_t, uint16_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0070', alias: '', variableList: [{ type: 'std::multimap<wchar_t, uint16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multimap<wchar_t, uint16_t>::iterator', parameters: [{ type: 'std::multimap<wchar_t, uint16_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0070'), 'h2dts_gen_multi_scene_0070 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<string, number>>;'), 'h2dts_gen_multi_scene_0070 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0070'), 'h2dts_gen_multi_scene_0070 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0070'), 'h2dts_gen_multi_scene_0070 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0070 = IterableIterator<Map<string, number>> ;'), 'h2dts_gen_multi_scene_0070 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0070 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0070 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0071 的输出与性能。
  test('h2dts_gen_multi_scene_0071', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0071', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0071', alias: '', members: [{ type: 'std::unordered_multimap<char, int>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0071', alias: '', members: [{ type: 'std::unordered_multimap<char, int>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0071', alias: '', variableList: [{ type: 'std::unordered_multimap<char, int>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multimap<char, int>', parameters: [{ type: 'std::unordered_multimap<char, int>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0071'), 'h2dts_gen_multi_scene_0071 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0071 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0071'), 'h2dts_gen_multi_scene_0071 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0071'), 'h2dts_gen_multi_scene_0071 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0071 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0071 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0071 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0071 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0072 的输出与性能。
  test('h2dts_gen_multi_scene_0072', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0072', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0072', alias: '', members: [{ type: 'std::unordered_multimap<char8_t, uint32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0072', alias: '', members: [{ type: 'std::unordered_multimap<char8_t, uint32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0072', alias: '', variableList: [{ type: 'std::unordered_multimap<char8_t, uint32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multimap<char8_t, uint32_t>', parameters: [{ type: 'std::unordered_multimap<char8_t, uint32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0072'), 'h2dts_gen_multi_scene_0072 class 生成失败');
      assert.ok(cls.includes('v: Map<string, number>;'), 'h2dts_gen_multi_scene_0072 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0072'), 'h2dts_gen_multi_scene_0072 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0072'), 'h2dts_gen_multi_scene_0072 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0072 = Map<string, number> ;'), 'h2dts_gen_multi_scene_0072 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0072 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0072 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0073 的输出与性能。
  test('h2dts_gen_multi_scene_0073', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0073', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0073', alias: '', members: [{ type: 'std::unordered_multimap<unsigned, char>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0073', alias: '', members: [{ type: 'std::unordered_multimap<unsigned, char>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0073', alias: '', variableList: [{ type: 'std::unordered_multimap<unsigned, char>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multimap<unsigned, char>', parameters: [{ type: 'std::unordered_multimap<unsigned, char>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0073'), 'h2dts_gen_multi_scene_0073 class 生成失败');
      assert.ok(cls.includes('v: Map<number, string>;'), 'h2dts_gen_multi_scene_0073 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0073'), 'h2dts_gen_multi_scene_0073 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0073'), 'h2dts_gen_multi_scene_0073 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0073 = Map<number, string> ;'), 'h2dts_gen_multi_scene_0073 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0073 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0073 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0074 的输出与性能。
  test('h2dts_gen_multi_scene_0074', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0074', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0074', alias: '', members: [{ type: 'std::unordered_multimap<char16_t, int32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0074', alias: '', members: [{ type: 'std::unordered_multimap<char16_t, int32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0074', alias: '', variableList: [{ type: 'std::unordered_multimap<char16_t, int32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multimap<char16_t, int32_t>::iterator', parameters: [{ type: 'std::unordered_multimap<char16_t, int32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0074'), 'h2dts_gen_multi_scene_0074 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<string, number>>;'), 'h2dts_gen_multi_scene_0074 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0074'), 'h2dts_gen_multi_scene_0074 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0074'), 'h2dts_gen_multi_scene_0074 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0074 = IterableIterator<Map<string, number>> ;'), 'h2dts_gen_multi_scene_0074 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0074 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0074 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0075 的输出与性能。
  test('h2dts_gen_multi_scene_0075', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0075', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0075', alias: '', members: [{ type: 'std::unordered_multimap<int, char>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0075', alias: '', members: [{ type: 'std::unordered_multimap<int, char>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0075', alias: '', variableList: [{ type: 'std::unordered_multimap<int, char>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multimap<int, char>::iterator', parameters: [{ type: 'std::unordered_multimap<int, char>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0075'), 'h2dts_gen_multi_scene_0075 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Map<number, string>>;'), 'h2dts_gen_multi_scene_0075 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0075'), 'h2dts_gen_multi_scene_0075 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0075'), 'h2dts_gen_multi_scene_0075 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0075 = IterableIterator<Map<number, string>> ;'), 'h2dts_gen_multi_scene_0075 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0075 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0075 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_gen_multi_scene_0076', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0076', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0076', alias: '', members: [{ type: 'std::set<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0076', alias: '', members: [{ type: 'std::set<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0076', alias: '', variableList: [{ type: 'std::set<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<long>', parameters: [{ type: 'std::set<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0076'), 'h2dts_gen_multi_scene_0076 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0076 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0076'), 'h2dts_gen_multi_scene_0076 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0076'), 'h2dts_gen_multi_scene_0076 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0076 = Set<number> ;'), 'h2dts_gen_multi_scene_0076 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0076 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0076 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0077 的输出与性能。
  test('h2dts_gen_multi_scene_0077', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0077', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0077', alias: '', members: [{ type: 'std::set<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0077', alias: '', members: [{ type: 'std::set<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0077', alias: '', variableList: [{ type: 'std::set<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<int16_t>', parameters: [{ type: 'std::set<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0077'), 'h2dts_gen_multi_scene_0077 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0077 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0077'), 'h2dts_gen_multi_scene_0077 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0077'), 'h2dts_gen_multi_scene_0077 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0077 = Set<number> ;'), 'h2dts_gen_multi_scene_0077 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0077 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0077 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0078 的输出与性能。
  test('h2dts_gen_multi_scene_0078', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0078', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0078', alias: '', members: [{ type: 'std::set<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0078', alias: '', members: [{ type: 'std::set<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0078', alias: '', variableList: [{ type: 'std::set<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<char8_t>', parameters: [{ type: 'std::set<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0078'), 'h2dts_gen_multi_scene_0078 class 生成失败');
      assert.ok(cls.includes('v: Set<string>;'), 'h2dts_gen_multi_scene_0078 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0078'), 'h2dts_gen_multi_scene_0078 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0078'), 'h2dts_gen_multi_scene_0078 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0078 = Set<string> ;'), 'h2dts_gen_multi_scene_0078 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0078 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0078 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0079 的输出与性能。
  test('h2dts_gen_multi_scene_0079', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0079', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0079', alias: '', members: [{ type: 'std::set<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0079', alias: '', members: [{ type: 'std::set<long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0079', alias: '', variableList: [{ type: 'std::set<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<long>::iterator', parameters: [{ type: 'std::set<long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0079'), 'h2dts_gen_multi_scene_0079 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0079 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0079'), 'h2dts_gen_multi_scene_0079 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0079'), 'h2dts_gen_multi_scene_0079 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0079 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0079 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0079 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0079 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0080 的输出与性能。
  test('h2dts_gen_multi_scene_0080', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0080', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0080', alias: '', members: [{ type: 'std::set<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0080', alias: '', members: [{ type: 'std::set<int16_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0080', alias: '', variableList: [{ type: 'std::set<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<int16_t>::iterator', parameters: [{ type: 'std::set<int16_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0080'), 'h2dts_gen_multi_scene_0080 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0080 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0080'), 'h2dts_gen_multi_scene_0080 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0080'), 'h2dts_gen_multi_scene_0080 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0080 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0080 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0080 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0080 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0081 的输出与性能。
  test('h2dts_gen_multi_scene_0081', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0081', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0081', alias: '', members: [{ type: 'std::set<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0081', alias: '', members: [{ type: 'std::set<char8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0081', alias: '', variableList: [{ type: 'std::set<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::set<char8_t>::iterator', parameters: [{ type: 'std::set<char8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0081'), 'h2dts_gen_multi_scene_0081 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<string>>;'), 'h2dts_gen_multi_scene_0081 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0081'), 'h2dts_gen_multi_scene_0081 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0081'), 'h2dts_gen_multi_scene_0081 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0081 = IterableIterator<Set<string>> ;'), 'h2dts_gen_multi_scene_0081 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0081 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0081 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0082 的输出与性能。
  test('h2dts_gen_multi_scene_0082', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0082', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0082', alias: '', members: [{ type: 'std::unordered_set<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0082', alias: '', members: [{ type: 'std::unordered_set<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0082', alias: '', variableList: [{ type: 'std::unordered_set<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<long>', parameters: [{ type: 'std::unordered_set<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0082'), 'h2dts_gen_multi_scene_0082 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0082 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0082'), 'h2dts_gen_multi_scene_0082 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0082'), 'h2dts_gen_multi_scene_0082 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0082 = Set<number> ;'), 'h2dts_gen_multi_scene_0082 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0082 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0082 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0083 的输出与性能。
  test('h2dts_gen_multi_scene_0083', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0083', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0083', alias: '', members: [{ type: 'std::unordered_set<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0083', alias: '', members: [{ type: 'std::unordered_set<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0083', alias: '', variableList: [{ type: 'std::unordered_set<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<int16_t>', parameters: [{ type: 'std::unordered_set<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0083'), 'h2dts_gen_multi_scene_0083 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0083 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0083'), 'h2dts_gen_multi_scene_0083 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0083'), 'h2dts_gen_multi_scene_0083 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0083 = Set<number> ;'), 'h2dts_gen_multi_scene_0083 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0083 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0083 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0084 的输出与性能。
  test('h2dts_gen_multi_scene_0084', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0084', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0084', alias: '', members: [{ type: 'std::unordered_set<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0084', alias: '', members: [{ type: 'std::unordered_set<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0084', alias: '', variableList: [{ type: 'std::unordered_set<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<char8_t>', parameters: [{ type: 'std::unordered_set<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0084'), 'h2dts_gen_multi_scene_0084 class 生成失败');
      assert.ok(cls.includes('v: Set<string>;'), 'h2dts_gen_multi_scene_0084 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0084'), 'h2dts_gen_multi_scene_0084 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0084'), 'h2dts_gen_multi_scene_0084 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0084 = Set<string> ;'), 'h2dts_gen_multi_scene_0084 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0084 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0084 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_gen_multi_scene_0085', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0085', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0085', alias: '', members: [{ type: 'std::unordered_set<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0085', alias: '', members: [{ type: 'std::unordered_set<long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0085', alias: '', variableList: [{ type: 'std::unordered_set<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<long>::iterator', parameters: [{ type: 'std::unordered_set<long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0085'), 'h2dts_gen_multi_scene_0085 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0085 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0085'), 'h2dts_gen_multi_scene_0085 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0085'), 'h2dts_gen_multi_scene_0085 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0085 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0085 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0085 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0085 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0086 的输出与性能。
  test('h2dts_gen_multi_scene_0086', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0086', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0086', alias: '', members: [{ type: 'std::unordered_set<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0086', alias: '', members: [{ type: 'std::unordered_set<int16_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0086', alias: '', variableList: [{ type: 'std::unordered_set<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<int16_t>::iterator', parameters: [{ type: 'std::unordered_set<int16_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0086'), 'h2dts_gen_multi_scene_0086 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0086 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0086'), 'h2dts_gen_multi_scene_0086 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0086'), 'h2dts_gen_multi_scene_0086 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0086 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0086 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0086 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0086 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0087 的输出与性能。
  test('h2dts_gen_multi_scene_0087', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0087', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0087', alias: '', members: [{ type: 'std::unordered_set<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0087', alias: '', members: [{ type: 'std::unordered_set<char8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0087', alias: '', variableList: [{ type: 'std::unordered_set<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_set<char8_t>::iterator', parameters: [{ type: 'std::unordered_set<char8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0087'), 'h2dts_gen_multi_scene_0087 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<string>>;'), 'h2dts_gen_multi_scene_0087 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0087'), 'h2dts_gen_multi_scene_0087 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0087'), 'h2dts_gen_multi_scene_0087 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0087 = IterableIterator<Set<string>> ;'), 'h2dts_gen_multi_scene_0087 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0087 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0087 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0088 的输出与性能。
  test('h2dts_gen_multi_scene_0088', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0088', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0088', alias: '', members: [{ type: 'std::multiset<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0088', alias: '', members: [{ type: 'std::multiset<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0088', alias: '', variableList: [{ type: 'std::multiset<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<long>', parameters: [{ type: 'std::multiset<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0088'), 'h2dts_gen_multi_scene_0088 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0088 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0088'), 'h2dts_gen_multi_scene_0088 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0088'), 'h2dts_gen_multi_scene_0088 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0088 = Set<number> ;'), 'h2dts_gen_multi_scene_0088 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0088 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0088 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0089 的输出与性能。
  test('h2dts_gen_multi_scene_0089', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0089', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0089', alias: '', members: [{ type: 'std::multiset<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0089', alias: '', members: [{ type: 'std::multiset<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0089', alias: '', variableList: [{ type: 'std::multiset<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<int16_t>', parameters: [{ type: 'std::multiset<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0089'), 'h2dts_gen_multi_scene_0089 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0089 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0089'), 'h2dts_gen_multi_scene_0089 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0089'), 'h2dts_gen_multi_scene_0089 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0089 = Set<number> ;'), 'h2dts_gen_multi_scene_0089 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0089 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0089 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0090 的输出与性能。
  test('h2dts_gen_multi_scene_0090', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0090', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0090', alias: '', members: [{ type: 'std::multiset<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0090', alias: '', members: [{ type: 'std::multiset<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0090', alias: '', variableList: [{ type: 'std::multiset<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<char8_t>', parameters: [{ type: 'std::multiset<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0090'), 'h2dts_gen_multi_scene_0090 class 生成失败');
      assert.ok(cls.includes('v: Set<string>;'), 'h2dts_gen_multi_scene_0090 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0090'), 'h2dts_gen_multi_scene_0090 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0090'), 'h2dts_gen_multi_scene_0090 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0090 = Set<string> ;'), 'h2dts_gen_multi_scene_0090 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0090 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0090 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0091 的输出与性能。
  test('h2dts_gen_multi_scene_0091', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0091', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0091', alias: '', members: [{ type: 'std::multiset<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0091', alias: '', members: [{ type: 'std::multiset<long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0091', alias: '', variableList: [{ type: 'std::multiset<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<long>::iterator', parameters: [{ type: 'std::multiset<long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0091'), 'h2dts_gen_multi_scene_0091 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0091 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0091'), 'h2dts_gen_multi_scene_0091 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0091'), 'h2dts_gen_multi_scene_0091 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0091 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0091 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0091 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0091 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0092 的输出与性能。
  test('h2dts_gen_multi_scene_0092', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0092', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0092', alias: '', members: [{ type: 'std::multiset<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0092', alias: '', members: [{ type: 'std::multiset<int16_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0092', alias: '', variableList: [{ type: 'std::multiset<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<int16_t>::iterator', parameters: [{ type: 'std::multiset<int16_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0092'), 'h2dts_gen_multi_scene_0092 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0092 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0092'), 'h2dts_gen_multi_scene_0092 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0092'), 'h2dts_gen_multi_scene_0092 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0092 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0092 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0092 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0092 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0093 的输出与性能。
  test('h2dts_gen_multi_scene_0093', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0093', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0093', alias: '', members: [{ type: 'std::multiset<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0093', alias: '', members: [{ type: 'std::multiset<char8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0093', alias: '', variableList: [{ type: 'std::multiset<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::multiset<char8_t>::iterator', parameters: [{ type: 'std::multiset<char8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
          funcs: [],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let cls = '';
      let st = '';
      let en = '';
      let un = '';
      const localLoop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          cls = getDtsClasses(rootInfo);
          st = getDtsStructs(rootInfo);
          en = getDtsEnum(rootInfo);
          un = getDtsUnions(rootInfo);
        }
      });
      assert.ok(cls.includes('export class PerfClass0093'), 'h2dts_gen_multi_scene_0093 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<string>>;'), 'h2dts_gen_multi_scene_0093 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0093'), 'h2dts_gen_multi_scene_0093 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0093'), 'h2dts_gen_multi_scene_0093 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0093 = IterableIterator<Set<string>> ;'), 'h2dts_gen_multi_scene_0093 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0093 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0093 执行异常: ${String(err)}`);
    }
  });

});
