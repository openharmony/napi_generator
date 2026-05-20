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
  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0094 的输出与性能。
  test('h2dts_gen_multi_scene_0094', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0094', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0094', alias: '', members: [{ type: 'std::unordered_multiset<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0094', alias: '', members: [{ type: 'std::unordered_multiset<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0094', alias: '', variableList: [{ type: 'std::unordered_multiset<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<long>', parameters: [{ type: 'std::unordered_multiset<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0094'), 'h2dts_gen_multi_scene_0094 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0094 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0094'), 'h2dts_gen_multi_scene_0094 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0094'), 'h2dts_gen_multi_scene_0094 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0094 = Set<number> ;'), 'h2dts_gen_multi_scene_0094 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0094 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0094 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0095 的输出与性能。
  test('h2dts_gen_multi_scene_0095', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0095', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0095', alias: '', members: [{ type: 'std::unordered_multiset<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0095', alias: '', members: [{ type: 'std::unordered_multiset<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0095', alias: '', variableList: [{ type: 'std::unordered_multiset<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<int16_t>', parameters: [{ type: 'std::unordered_multiset<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0095'), 'h2dts_gen_multi_scene_0095 class 生成失败');
      assert.ok(cls.includes('v: Set<number>;'), 'h2dts_gen_multi_scene_0095 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0095'), 'h2dts_gen_multi_scene_0095 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0095'), 'h2dts_gen_multi_scene_0095 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0095 = Set<number> ;'), 'h2dts_gen_multi_scene_0095 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0095 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0095 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0096 的输出与性能。
  test('h2dts_gen_multi_scene_0096', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0096', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0096', alias: '', members: [{ type: 'std::unordered_multiset<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0096', alias: '', members: [{ type: 'std::unordered_multiset<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0096', alias: '', variableList: [{ type: 'std::unordered_multiset<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<char8_t>', parameters: [{ type: 'std::unordered_multiset<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0096'), 'h2dts_gen_multi_scene_0096 class 生成失败');
      assert.ok(cls.includes('v: Set<string>;'), 'h2dts_gen_multi_scene_0096 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0096'), 'h2dts_gen_multi_scene_0096 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0096'), 'h2dts_gen_multi_scene_0096 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0096 = Set<string> ;'), 'h2dts_gen_multi_scene_0096 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0096 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0096 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0097 的输出与性能。
  test('h2dts_gen_multi_scene_0097', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0097', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0097', alias: '', members: [{ type: 'std::unordered_multiset<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0097', alias: '', members: [{ type: 'std::unordered_multiset<long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0097', alias: '', variableList: [{ type: 'std::unordered_multiset<long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<long>::iterator', parameters: [{ type: 'std::unordered_multiset<long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0097'), 'h2dts_gen_multi_scene_0097 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0097 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0097'), 'h2dts_gen_multi_scene_0097 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0097'), 'h2dts_gen_multi_scene_0097 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0097 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0097 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0097 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0097 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0098 的输出与性能。
  test('h2dts_gen_multi_scene_0098', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0098', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0098', alias: '', members: [{ type: 'std::unordered_multiset<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0098', alias: '', members: [{ type: 'std::unordered_multiset<int16_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0098', alias: '', variableList: [{ type: 'std::unordered_multiset<int16_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<int16_t>::iterator', parameters: [{ type: 'std::unordered_multiset<int16_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0098'), 'h2dts_gen_multi_scene_0098 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<number>>;'), 'h2dts_gen_multi_scene_0098 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0098'), 'h2dts_gen_multi_scene_0098 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0098'), 'h2dts_gen_multi_scene_0098 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0098 = IterableIterator<Set<number>> ;'), 'h2dts_gen_multi_scene_0098 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0098 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0098 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0099 的输出与性能。
  test('h2dts_gen_multi_scene_0099', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0099', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0099', alias: '', members: [{ type: 'std::unordered_multiset<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0099', alias: '', members: [{ type: 'std::unordered_multiset<char8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0099', alias: '', variableList: [{ type: 'std::unordered_multiset<char8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unordered_multiset<char8_t>::iterator', parameters: [{ type: 'std::unordered_multiset<char8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0099'), 'h2dts_gen_multi_scene_0099 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Set<string>>;'), 'h2dts_gen_multi_scene_0099 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0099'), 'h2dts_gen_multi_scene_0099 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0099'), 'h2dts_gen_multi_scene_0099 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0099 = IterableIterator<Set<string>> ;'), 'h2dts_gen_multi_scene_0099 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0099 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0099 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0100 的输出与性能。
  test('h2dts_gen_multi_scene_0100', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0100', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0100', alias: '', members: [{ type: 'std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0100', alias: '', members: [{ type: 'std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0100', alias: '', variableList: [{ type: 'std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>', parameters: [{ type: 'std::pair<double, wchar_t, uint32_t, float, long, short, char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0100'), 'h2dts_gen_multi_scene_0100 class 生成失败');
      assert.ok(cls.includes('v: [number, string, number, number, number, number, string];'), 'h2dts_gen_multi_scene_0100 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0100'), 'h2dts_gen_multi_scene_0100 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0100'), 'h2dts_gen_multi_scene_0100 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0100 = [number, string, number, number, number, number, string] ;'), 'h2dts_gen_multi_scene_0100 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0100 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0100 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0101 的输出与性能。
  test('h2dts_gen_multi_scene_0101', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0101', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0101', alias: '', members: [{ type: 'std::complex<uint16_t, uint64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0101', alias: '', members: [{ type: 'std::complex<uint16_t, uint64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0101', alias: '', variableList: [{ type: 'std::complex<uint16_t, uint64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::complex<uint16_t, uint64_t>', parameters: [{ type: 'std::complex<uint16_t, uint64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0101'), 'h2dts_gen_multi_scene_0101 class 生成失败');
      assert.ok(cls.includes('v: {real: number, imag: number};'), 'h2dts_gen_multi_scene_0101 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0101'), 'h2dts_gen_multi_scene_0101 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0101'), 'h2dts_gen_multi_scene_0101 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0101 = {real: number, imag: number} ;'), 'h2dts_gen_multi_scene_0101 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0101 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0101 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0102 的输出与性能。
  test('h2dts_gen_multi_scene_0102', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0102', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0102', alias: '', members: [{ type: 'std::chrono::steady_clock::time_point', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0102', alias: '', members: [{ type: 'std::chrono::steady_clock::time_point', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0102', alias: '', variableList: [{ type: 'std::chrono::steady_clock::time_point', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::chrono::steady_clock::time_point', parameters: [{ type: 'std::chrono::steady_clock::time_point', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0102'), 'h2dts_gen_multi_scene_0102 class 生成失败');
      assert.ok(cls.includes('v: Date;'), 'h2dts_gen_multi_scene_0102 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0102'), 'h2dts_gen_multi_scene_0102 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0102'), 'h2dts_gen_multi_scene_0102 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0102 = Date ;'), 'h2dts_gen_multi_scene_0102 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0102 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0102 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0103 的输出与性能。
  test('h2dts_gen_multi_scene_0103', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0103', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0103', alias: '', members: [{ type: 'std::function<void()>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0103', alias: '', members: [{ type: 'std::function<void()>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0103', alias: '', variableList: [{ type: 'std::function<void()>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::function<void()>', parameters: [{ type: 'std::function<void()>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0103'), 'h2dts_gen_multi_scene_0103 class 生成失败');
      assert.ok(cls.includes('v: ()=>void;'), 'h2dts_gen_multi_scene_0103 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0103'), 'h2dts_gen_multi_scene_0103 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0103'), 'h2dts_gen_multi_scene_0103 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0103 = ()=>void ;'), 'h2dts_gen_multi_scene_0103 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0103 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0103 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0104 的输出与性能。
  test('h2dts_gen_multi_scene_0104', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0104', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0104', alias: '', members: [{ type: 'std::function<uint64_t(wchar_t, uint32_t)>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0104', alias: '', members: [{ type: 'std::function<uint64_t(wchar_t, uint32_t)>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0104', alias: '', variableList: [{ type: 'std::function<uint64_t(wchar_t, uint32_t)>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::function<uint64_t(wchar_t, uint32_t)>', parameters: [{ type: 'std::function<uint64_t(wchar_t, uint32_t)>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0104'), 'h2dts_gen_multi_scene_0104 class 生成失败');
      assert.ok(cls.includes('v: (param0: string, param1: number)=>number;'), 'h2dts_gen_multi_scene_0104 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0104'), 'h2dts_gen_multi_scene_0104 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0104'), 'h2dts_gen_multi_scene_0104 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0104 = (param0: string, param1: number)=>number ;'), 'h2dts_gen_multi_scene_0104 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0104 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0104 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0105 的输出与性能。
  test('h2dts_gen_multi_scene_0105', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0105', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0105', alias: '', members: [{ type: 'std::unique_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0105', alias: '', members: [{ type: 'std::unique_ptr<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0105', alias: '', variableList: [{ type: 'std::unique_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unique_ptr<long>', parameters: [{ type: 'std::unique_ptr<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0105'), 'h2dts_gen_multi_scene_0105 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0105 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0105'), 'h2dts_gen_multi_scene_0105 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0105'), 'h2dts_gen_multi_scene_0105 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0105 = number ;'), 'h2dts_gen_multi_scene_0105 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0105 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0105 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0106 的输出与性能。
  test('h2dts_gen_multi_scene_0106', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0106', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0106', alias: '', members: [{ type: 'std::unique_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0106', alias: '', members: [{ type: 'std::unique_ptr<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0106', alias: '', variableList: [{ type: 'std::unique_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unique_ptr<int16_t>', parameters: [{ type: 'std::unique_ptr<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0106'), 'h2dts_gen_multi_scene_0106 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0106 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0106'), 'h2dts_gen_multi_scene_0106 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0106'), 'h2dts_gen_multi_scene_0106 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0106 = number ;'), 'h2dts_gen_multi_scene_0106 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0106 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0106 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0107 的输出与性能。
  test('h2dts_gen_multi_scene_0107', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0107', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0107', alias: '', members: [{ type: 'std::unique_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0107', alias: '', members: [{ type: 'std::unique_ptr<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0107', alias: '', variableList: [{ type: 'std::unique_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::unique_ptr<char8_t>', parameters: [{ type: 'std::unique_ptr<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0107'), 'h2dts_gen_multi_scene_0107 class 生成失败');
      assert.ok(cls.includes('v: string;'), 'h2dts_gen_multi_scene_0107 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0107'), 'h2dts_gen_multi_scene_0107 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0107'), 'h2dts_gen_multi_scene_0107 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0107 = string ;'), 'h2dts_gen_multi_scene_0107 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0107 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0107 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0108 的输出与性能。
  test('h2dts_gen_multi_scene_0108', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0108', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0108', alias: '', members: [{ type: 'std::shared_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0108', alias: '', members: [{ type: 'std::shared_ptr<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0108', alias: '', variableList: [{ type: 'std::shared_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::shared_ptr<long>', parameters: [{ type: 'std::shared_ptr<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0108'), 'h2dts_gen_multi_scene_0108 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0108 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0108'), 'h2dts_gen_multi_scene_0108 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0108'), 'h2dts_gen_multi_scene_0108 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0108 = number ;'), 'h2dts_gen_multi_scene_0108 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0108 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0108 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0109 的输出与性能。
  test('h2dts_gen_multi_scene_0109', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0109', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0109', alias: '', members: [{ type: 'std::shared_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0109', alias: '', members: [{ type: 'std::shared_ptr<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0109', alias: '', variableList: [{ type: 'std::shared_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::shared_ptr<int16_t>', parameters: [{ type: 'std::shared_ptr<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0109'), 'h2dts_gen_multi_scene_0109 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0109 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0109'), 'h2dts_gen_multi_scene_0109 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0109'), 'h2dts_gen_multi_scene_0109 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0109 = number ;'), 'h2dts_gen_multi_scene_0109 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0109 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0109 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0110 的输出与性能。
  test('h2dts_gen_multi_scene_0110', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0110', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0110', alias: '', members: [{ type: 'std::shared_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0110', alias: '', members: [{ type: 'std::shared_ptr<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0110', alias: '', variableList: [{ type: 'std::shared_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::shared_ptr<char8_t>', parameters: [{ type: 'std::shared_ptr<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0110'), 'h2dts_gen_multi_scene_0110 class 生成失败');
      assert.ok(cls.includes('v: string;'), 'h2dts_gen_multi_scene_0110 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0110'), 'h2dts_gen_multi_scene_0110 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0110'), 'h2dts_gen_multi_scene_0110 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0110 = string ;'), 'h2dts_gen_multi_scene_0110 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0110 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0110 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0111 的输出与性能。
  test('h2dts_gen_multi_scene_0111', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0111', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0111', alias: '', members: [{ type: 'std::weak_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0111', alias: '', members: [{ type: 'std::weak_ptr<long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0111', alias: '', variableList: [{ type: 'std::weak_ptr<long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::weak_ptr<long>', parameters: [{ type: 'std::weak_ptr<long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0111'), 'h2dts_gen_multi_scene_0111 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0111 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0111'), 'h2dts_gen_multi_scene_0111 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0111'), 'h2dts_gen_multi_scene_0111 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0111 = number ;'), 'h2dts_gen_multi_scene_0111 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0111 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0111 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0112 的输出与性能。
  test('h2dts_gen_multi_scene_0112', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0112', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0112', alias: '', members: [{ type: 'std::weak_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0112', alias: '', members: [{ type: 'std::weak_ptr<int16_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0112', alias: '', variableList: [{ type: 'std::weak_ptr<int16_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::weak_ptr<int16_t>', parameters: [{ type: 'std::weak_ptr<int16_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0112'), 'h2dts_gen_multi_scene_0112 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0112 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0112'), 'h2dts_gen_multi_scene_0112 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0112'), 'h2dts_gen_multi_scene_0112 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0112 = number ;'), 'h2dts_gen_multi_scene_0112 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0112 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0112 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0113 的输出与性能。
  test('h2dts_gen_multi_scene_0113', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0113', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0113', alias: '', members: [{ type: 'std::weak_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0113', alias: '', members: [{ type: 'std::weak_ptr<char8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0113', alias: '', variableList: [{ type: 'std::weak_ptr<char8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::weak_ptr<char8_t>', parameters: [{ type: 'std::weak_ptr<char8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0113'), 'h2dts_gen_multi_scene_0113 class 生成失败');
      assert.ok(cls.includes('v: string;'), 'h2dts_gen_multi_scene_0113 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0113'), 'h2dts_gen_multi_scene_0113 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0113'), 'h2dts_gen_multi_scene_0113 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0113 = string ;'), 'h2dts_gen_multi_scene_0113 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0113 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0113 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0114 的输出与性能。
  test('h2dts_gen_multi_scene_0114', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0114', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0114', alias: '', members: [{ type: 'unsigned short', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0114', alias: '', members: [{ type: 'unsigned short', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0114', alias: '', variableList: [{ type: 'unsigned short', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'unsigned short', parameters: [{ type: 'unsigned short', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0114'), 'h2dts_gen_multi_scene_0114 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0114 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0114'), 'h2dts_gen_multi_scene_0114 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0114'), 'h2dts_gen_multi_scene_0114 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0114 = number ;'), 'h2dts_gen_multi_scene_0114 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0114 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0114 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0115 的输出与性能。
  test('h2dts_gen_multi_scene_0115', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0115', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0115', alias: '', members: [{ type: 'int *', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0115', alias: '', members: [{ type: 'int *', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0115', alias: '', variableList: [{ type: 'int *', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'int *', parameters: [{ type: 'int *', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0115'), 'h2dts_gen_multi_scene_0115 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0115 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0115'), 'h2dts_gen_multi_scene_0115 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0115'), 'h2dts_gen_multi_scene_0115 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0115 = number ;'), 'h2dts_gen_multi_scene_0115 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0115 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0115 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0116 的输出与性能。
  test('h2dts_gen_multi_scene_0116', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0116', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0116', alias: '', members: [{ type: 'std::vector<unsigned long long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0116', alias: '', members: [{ type: 'std::vector<unsigned long long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0116', alias: '', variableList: [{ type: 'std::vector<unsigned long long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<unsigned long long>::iterator', parameters: [{ type: 'std::vector<unsigned long long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0116'), 'h2dts_gen_multi_scene_0116 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0116 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0116'), 'h2dts_gen_multi_scene_0116 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0116'), 'h2dts_gen_multi_scene_0116 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0116 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0116 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0116 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0116 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0117 的输出与性能。
  test('h2dts_gen_multi_scene_0117', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0117', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0117', alias: '', members: [{ type: 'std::array<unsigned long long, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0117', alias: '', members: [{ type: 'std::array<unsigned long long, 10>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0117', alias: '', variableList: [{ type: 'std::array<unsigned long long, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<unsigned long long, 10>', parameters: [{ type: 'std::array<unsigned long long, 10>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0117'), 'h2dts_gen_multi_scene_0117 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0117 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0117'), 'h2dts_gen_multi_scene_0117 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0117'), 'h2dts_gen_multi_scene_0117 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0117 = Array<number> ;'), 'h2dts_gen_multi_scene_0117 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0117 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0117 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0118 的输出与性能。
  test('h2dts_gen_multi_scene_0118', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0118', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0118', alias: '', members: [{ type: 'std::array<unsigned long long, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0118', alias: '', members: [{ type: 'std::array<unsigned long long, 10>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0118', alias: '', variableList: [{ type: 'std::array<unsigned long long, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<unsigned long long, 10>::iterator', parameters: [{ type: 'std::array<unsigned long long, 10>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0118'), 'h2dts_gen_multi_scene_0118 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0118 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0118'), 'h2dts_gen_multi_scene_0118 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0118'), 'h2dts_gen_multi_scene_0118 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0118 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0118 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0118 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0118 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0119 的输出与性能。
  test('h2dts_gen_multi_scene_0119', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0119', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0119', alias: '', members: [{ type: 'std::deque<unsigned long long>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0119', alias: '', members: [{ type: 'std::deque<unsigned long long>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0119', alias: '', variableList: [{ type: 'std::deque<unsigned long long>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<unsigned long long>', parameters: [{ type: 'std::deque<unsigned long long>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0119'), 'h2dts_gen_multi_scene_0119 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0119 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0119'), 'h2dts_gen_multi_scene_0119 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0119'), 'h2dts_gen_multi_scene_0119 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0119 = Array<number> ;'), 'h2dts_gen_multi_scene_0119 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0119 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0119 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_gen_multi_scene_0120', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0120', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0120', alias: '', members: [{ type: 'std::deque<unsigned long long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0120', alias: '', members: [{ type: 'std::deque<unsigned long long>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0120', alias: '', variableList: [{ type: 'std::deque<unsigned long long>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<unsigned long long>::iterator', parameters: [{ type: 'std::deque<unsigned long long>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0120'), 'h2dts_gen_multi_scene_0120 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0120 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0120'), 'h2dts_gen_multi_scene_0120 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0120'), 'h2dts_gen_multi_scene_0120 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0120 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0120 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0120 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0120 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_any_object_ext_0001', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('any');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `object` 的转换与性能。
  test('h2dts_any_object_ext_0002', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('object');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `CustomObject` 的转换与性能。
  test('h2dts_any_object_ext_0003', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('CustomObject');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `UserAnyType` 的转换与性能。
  test('h2dts_any_object_ext_0004', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('UserAnyType');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `Ns::UnknownObject` 的转换与性能。
  test('h2dts_any_object_ext_0005', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('Ns::UnknownObject');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::vector<any>` 的转换与性能。
  test('h2dts_any_object_ext_0006', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<any>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::vector<object>` 的转换与性能。
  test('h2dts_any_object_ext_0007', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<object>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::array<any, 3>` 的转换与性能。
  test('h2dts_any_object_ext_0008', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<any, 3>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::array<object, 4>` 的转换与性能。
  test('h2dts_any_object_ext_0009', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<object, 4>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::deque<any>` 的转换与性能。
  test('h2dts_any_object_ext_0010', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<any>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::deque<object>` 的转换与性能。
  test('h2dts_any_object_ext_0011', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::deque<object>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::list<any>` 的转换与性能。
  test('h2dts_any_object_ext_0012', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<any>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::list<object>` 的转换与性能。
  test('h2dts_any_object_ext_0013', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::list<object>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::function<any(any)>` 的转换与性能。
  test('h2dts_any_object_ext_0014', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::function<any(any)>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 对 `std::function<object(object)>` 的转换与性能。
  test('h2dts_any_object_ext_0015', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::function<object(object)>');
        }
      });
      assert.ok(converted.length > 0);
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_any_object_ext_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_ext_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 生成函数声明场景 `h2dtsAnyObjGen0001` 中 any/object 的输出与性能。
  test('h2dts_any_object_gen_ext_0001', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [], unions: [], structs: [], classes: [],
          funcs: [{ type: 'function', name: 'h2dtsAnyObjGen0001', returns: 'object', parameters: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }] }],
          types: []
        } as ParseObj,
        rawFilePath: 'perf.h',
        fileName: 'perf'
      };
      let out = '';
      const loop = 2;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          out = getDtsFunction(rootInfo);
        }
      });
      assert.ok(out.includes('export function h2dtsAnyObjGen0001(v: any): any;'), 'h2dts_any_object_gen_ext_0001 生成签名异常');
      const avg = elapsed / loop;
      assert.ok(avg < METHOD_THRESHOLD_MS, `h2dts_any_object_gen_ext_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${METHOD_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_any_object_gen_ext_0001 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_expand_unique_p09_0001', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('unsigned');
        }
      });
      assert.strictEqual(converted, 'number');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0001 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0001 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::string::iterator` 转换为 `IterableIterator<string>` 的结果与性能。
  test('h2dts_expand_unique_p09_0002', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::string::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<string>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0002 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<int>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0003', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<int>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0003 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<size_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0004', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<size_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0004 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<double>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0005', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<double>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0005 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<float>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0006', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<float>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0006 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<long>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0007', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<long>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0007 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<short>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0008', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<short>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0008 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<uint8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0009', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<uint8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0009 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<uint16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0010', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<uint16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0010 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<uint32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0011', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<uint32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0011 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<uint64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0012', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<uint64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0012 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<int8_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0013', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<int8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0013 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<int16_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0014', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<int16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0014 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<int32_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0015', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<int32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0015 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<int64_t>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0016', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<int64_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0016 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<unsigned>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0017', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<unsigned>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0017 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<bool>::iterator` 转换为 `IterableIterator<Array<boolean>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0018', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<bool>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<boolean>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0018 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<char>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0019', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<char>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0019 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<wchar_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0020', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<wchar_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0020 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<char8_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0021', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<char8_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0021 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<char16_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0022', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<char16_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0022 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::vector<char32_t>::iterator` 转换为 `IterableIterator<Array<string>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0023', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::vector<char32_t>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<string>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0023 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<int, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0024', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<int, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0024 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<size_t, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0025', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<size_t, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0025 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<double, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0026', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<double, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0026 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 扩展输入 `std::array<float, 10>::iterator` 转换为 `IterableIterator<Array<number>>` 的结果与性能。
  test('h2dts_expand_unique_p09_0027', () => {
    try {
      let converted = '';
      const loop = 4;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < loop; i++) {
          converted = transTskey2Ckey('std::array<float, 10>::iterator');
        }
      });
      assert.strictEqual(converted, 'IterableIterator<Array<number>>');
      const avg = elapsed / loop;
      assert.ok(avg < TYPE_THRESHOLD_MS, `h2dts_expand_unique_p09_0027 平均耗时 ${avg.toFixed(3)}ms，阈值 ${TYPE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms）`);
    } catch (err) {
      assert.fail(`h2dts_expand_unique_p09_0027 执行异常: ${String(err)}`);
    }
  });

});
