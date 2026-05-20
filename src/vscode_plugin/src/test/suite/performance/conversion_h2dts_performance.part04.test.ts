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
  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0002 的输出与性能。
  test('h2dts_gen_multi_scene_0002', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0002', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0002', alias: '', members: [{ type: 'unsigned', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0002', alias: '', members: [{ type: 'unsigned', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0002', alias: '', variableList: [{ type: 'unsigned', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'unsigned', parameters: [{ type: 'unsigned', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0002'), 'h2dts_gen_multi_scene_0002 class 生成失败');
      assert.ok(cls.includes('v: number;'), 'h2dts_gen_multi_scene_0002 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0002'), 'h2dts_gen_multi_scene_0002 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0002'), 'h2dts_gen_multi_scene_0002 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0002 = number ;'), 'h2dts_gen_multi_scene_0002 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0002 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0002 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0003 的输出与性能。
  test('h2dts_gen_multi_scene_0003', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0003', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0003', alias: '', members: [{ type: 'std::string::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0003', alias: '', members: [{ type: 'std::string::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0003', alias: '', variableList: [{ type: 'std::string::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::string::iterator', parameters: [{ type: 'std::string::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0003'), 'h2dts_gen_multi_scene_0003 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<string>;'), 'h2dts_gen_multi_scene_0003 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0003'), 'h2dts_gen_multi_scene_0003 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0003'), 'h2dts_gen_multi_scene_0003 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0003 = IterableIterator<string> ;'), 'h2dts_gen_multi_scene_0003 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0003 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0003 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0004 的输出与性能。
  test('h2dts_gen_multi_scene_0004', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0004', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0004', alias: '', members: [{ type: 'std::vector<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0004', alias: '', members: [{ type: 'std::vector<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0004', alias: '', variableList: [{ type: 'std::vector<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<uint8_t>', parameters: [{ type: 'std::vector<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0004'), 'h2dts_gen_multi_scene_0004 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0004 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0004'), 'h2dts_gen_multi_scene_0004 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0004'), 'h2dts_gen_multi_scene_0004 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0004 = Array<number> ;'), 'h2dts_gen_multi_scene_0004 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0004 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0004 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0005 的输出与性能。
  test('h2dts_gen_multi_scene_0005', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0005', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0005', alias: '', members: [{ type: 'std::vector<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0005', alias: '', members: [{ type: 'std::vector<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0005', alias: '', variableList: [{ type: 'std::vector<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<int64_t>', parameters: [{ type: 'std::vector<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0005'), 'h2dts_gen_multi_scene_0005 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0005 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0005'), 'h2dts_gen_multi_scene_0005 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0005'), 'h2dts_gen_multi_scene_0005 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0005 = Array<number> ;'), 'h2dts_gen_multi_scene_0005 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0005 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0005 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0006 的输出与性能。
  test('h2dts_gen_multi_scene_0006', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0006', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0006', alias: '', members: [{ type: 'std::vector<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0006', alias: '', members: [{ type: 'std::vector<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0006', alias: '', variableList: [{ type: 'std::vector<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<char32_t>', parameters: [{ type: 'std::vector<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0006'), 'h2dts_gen_multi_scene_0006 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0006 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0006'), 'h2dts_gen_multi_scene_0006 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0006'), 'h2dts_gen_multi_scene_0006 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0006 = Array<string> ;'), 'h2dts_gen_multi_scene_0006 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0006 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0006 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0007 的输出与性能。
  test('h2dts_gen_multi_scene_0007', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0007', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0007', alias: '', members: [{ type: 'std::vector<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0007', alias: '', members: [{ type: 'std::vector<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0007', alias: '', variableList: [{ type: 'std::vector<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<uint8_t>::iterator', parameters: [{ type: 'std::vector<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0007'), 'h2dts_gen_multi_scene_0007 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0007 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0007'), 'h2dts_gen_multi_scene_0007 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0007'), 'h2dts_gen_multi_scene_0007 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0007 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0007 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0007 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0007 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0008 的输出与性能。
  test('h2dts_gen_multi_scene_0008', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0008', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0008', alias: '', members: [{ type: 'std::vector<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0008', alias: '', members: [{ type: 'std::vector<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0008', alias: '', variableList: [{ type: 'std::vector<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<int64_t>::iterator', parameters: [{ type: 'std::vector<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0008'), 'h2dts_gen_multi_scene_0008 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0008 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0008'), 'h2dts_gen_multi_scene_0008 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0008'), 'h2dts_gen_multi_scene_0008 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0008 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0008 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0008 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0008 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0009 的输出与性能。
  test('h2dts_gen_multi_scene_0009', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0009', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0009', alias: '', members: [{ type: 'std::vector<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0009', alias: '', members: [{ type: 'std::vector<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0009', alias: '', variableList: [{ type: 'std::vector<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::vector<char32_t>::iterator', parameters: [{ type: 'std::vector<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0009'), 'h2dts_gen_multi_scene_0009 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0009 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0009'), 'h2dts_gen_multi_scene_0009 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0009'), 'h2dts_gen_multi_scene_0009 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0009 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0009 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0009 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0009 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0010 的输出与性能。
  test('h2dts_gen_multi_scene_0010', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0010', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0010', alias: '', members: [{ type: 'std::array<uint8_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0010', alias: '', members: [{ type: 'std::array<uint8_t, 10>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0010', alias: '', variableList: [{ type: 'std::array<uint8_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<uint8_t, 10>', parameters: [{ type: 'std::array<uint8_t, 10>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0010'), 'h2dts_gen_multi_scene_0010 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0010 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0010'), 'h2dts_gen_multi_scene_0010 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0010'), 'h2dts_gen_multi_scene_0010 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0010 = Array<number> ;'), 'h2dts_gen_multi_scene_0010 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0010 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0010 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0011 的输出与性能。
  test('h2dts_gen_multi_scene_0011', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0011', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0011', alias: '', members: [{ type: 'std::array<int64_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0011', alias: '', members: [{ type: 'std::array<int64_t, 10>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0011', alias: '', variableList: [{ type: 'std::array<int64_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<int64_t, 10>', parameters: [{ type: 'std::array<int64_t, 10>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0011'), 'h2dts_gen_multi_scene_0011 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0011 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0011'), 'h2dts_gen_multi_scene_0011 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0011'), 'h2dts_gen_multi_scene_0011 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0011 = Array<number> ;'), 'h2dts_gen_multi_scene_0011 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0011 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0011 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0012 的输出与性能。
  test('h2dts_gen_multi_scene_0012', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0012', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0012', alias: '', members: [{ type: 'std::array<char32_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0012', alias: '', members: [{ type: 'std::array<char32_t, 10>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0012', alias: '', variableList: [{ type: 'std::array<char32_t, 10>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<char32_t, 10>', parameters: [{ type: 'std::array<char32_t, 10>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0012'), 'h2dts_gen_multi_scene_0012 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0012 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0012'), 'h2dts_gen_multi_scene_0012 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0012'), 'h2dts_gen_multi_scene_0012 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0012 = Array<string> ;'), 'h2dts_gen_multi_scene_0012 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0012 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0012 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0013 的输出与性能。
  test('h2dts_gen_multi_scene_0013', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0013', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0013', alias: '', members: [{ type: 'std::array<uint8_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0013', alias: '', members: [{ type: 'std::array<uint8_t, 10>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0013', alias: '', variableList: [{ type: 'std::array<uint8_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<uint8_t, 10>::iterator', parameters: [{ type: 'std::array<uint8_t, 10>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0013'), 'h2dts_gen_multi_scene_0013 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0013 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0013'), 'h2dts_gen_multi_scene_0013 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0013'), 'h2dts_gen_multi_scene_0013 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0013 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0013 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0013 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0013 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0014 的输出与性能。
  test('h2dts_gen_multi_scene_0014', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0014', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0014', alias: '', members: [{ type: 'std::array<int64_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0014', alias: '', members: [{ type: 'std::array<int64_t, 10>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0014', alias: '', variableList: [{ type: 'std::array<int64_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<int64_t, 10>::iterator', parameters: [{ type: 'std::array<int64_t, 10>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0014'), 'h2dts_gen_multi_scene_0014 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0014 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0014'), 'h2dts_gen_multi_scene_0014 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0014'), 'h2dts_gen_multi_scene_0014 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0014 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0014 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0014 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0014 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0015 的输出与性能。
  test('h2dts_gen_multi_scene_0015', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0015', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0015', alias: '', members: [{ type: 'std::array<char32_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0015', alias: '', members: [{ type: 'std::array<char32_t, 10>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0015', alias: '', variableList: [{ type: 'std::array<char32_t, 10>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::array<char32_t, 10>::iterator', parameters: [{ type: 'std::array<char32_t, 10>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0015'), 'h2dts_gen_multi_scene_0015 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0015 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0015'), 'h2dts_gen_multi_scene_0015 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0015'), 'h2dts_gen_multi_scene_0015 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0015 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0015 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0015 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0015 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0016 的输出与性能。
  test('h2dts_gen_multi_scene_0016', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0016', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0016', alias: '', members: [{ type: 'std::deque<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0016', alias: '', members: [{ type: 'std::deque<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0016', alias: '', variableList: [{ type: 'std::deque<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<uint8_t>', parameters: [{ type: 'std::deque<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0016'), 'h2dts_gen_multi_scene_0016 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0016 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0016'), 'h2dts_gen_multi_scene_0016 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0016'), 'h2dts_gen_multi_scene_0016 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0016 = Array<number> ;'), 'h2dts_gen_multi_scene_0016 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0016 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0016 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0017 的输出与性能。
  test('h2dts_gen_multi_scene_0017', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0017', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0017', alias: '', members: [{ type: 'std::deque<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0017', alias: '', members: [{ type: 'std::deque<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0017', alias: '', variableList: [{ type: 'std::deque<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<int64_t>', parameters: [{ type: 'std::deque<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0017'), 'h2dts_gen_multi_scene_0017 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0017 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0017'), 'h2dts_gen_multi_scene_0017 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0017'), 'h2dts_gen_multi_scene_0017 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0017 = Array<number> ;'), 'h2dts_gen_multi_scene_0017 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0017 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0017 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0018 的输出与性能。
  test('h2dts_gen_multi_scene_0018', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0018', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0018', alias: '', members: [{ type: 'std::deque<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0018', alias: '', members: [{ type: 'std::deque<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0018', alias: '', variableList: [{ type: 'std::deque<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<char32_t>', parameters: [{ type: 'std::deque<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0018'), 'h2dts_gen_multi_scene_0018 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0018 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0018'), 'h2dts_gen_multi_scene_0018 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0018'), 'h2dts_gen_multi_scene_0018 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0018 = Array<string> ;'), 'h2dts_gen_multi_scene_0018 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0018 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0018 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0019 的输出与性能。
  test('h2dts_gen_multi_scene_0019', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0019', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0019', alias: '', members: [{ type: 'std::deque<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0019', alias: '', members: [{ type: 'std::deque<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0019', alias: '', variableList: [{ type: 'std::deque<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<uint8_t>::iterator', parameters: [{ type: 'std::deque<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0019'), 'h2dts_gen_multi_scene_0019 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0019 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0019'), 'h2dts_gen_multi_scene_0019 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0019'), 'h2dts_gen_multi_scene_0019 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0019 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0019 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0019 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0019 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0020 的输出与性能。
  test('h2dts_gen_multi_scene_0020', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0020', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0020', alias: '', members: [{ type: 'std::deque<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0020', alias: '', members: [{ type: 'std::deque<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0020', alias: '', variableList: [{ type: 'std::deque<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<int64_t>::iterator', parameters: [{ type: 'std::deque<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0020'), 'h2dts_gen_multi_scene_0020 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0020 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0020'), 'h2dts_gen_multi_scene_0020 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0020'), 'h2dts_gen_multi_scene_0020 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0020 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0020 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0020 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0020 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0021 的输出与性能。
  test('h2dts_gen_multi_scene_0021', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0021', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0021', alias: '', members: [{ type: 'std::deque<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0021', alias: '', members: [{ type: 'std::deque<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0021', alias: '', variableList: [{ type: 'std::deque<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::deque<char32_t>::iterator', parameters: [{ type: 'std::deque<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0021'), 'h2dts_gen_multi_scene_0021 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0021 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0021'), 'h2dts_gen_multi_scene_0021 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0021'), 'h2dts_gen_multi_scene_0021 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0021 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0021 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0021 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0021 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0022 的输出与性能。
  test('h2dts_gen_multi_scene_0022', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0022', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0022', alias: '', members: [{ type: 'std::list<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0022', alias: '', members: [{ type: 'std::list<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0022', alias: '', variableList: [{ type: 'std::list<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<uint8_t>', parameters: [{ type: 'std::list<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0022'), 'h2dts_gen_multi_scene_0022 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0022 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0022'), 'h2dts_gen_multi_scene_0022 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0022'), 'h2dts_gen_multi_scene_0022 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0022 = Array<number> ;'), 'h2dts_gen_multi_scene_0022 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0022 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0022 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0023 的输出与性能。
  test('h2dts_gen_multi_scene_0023', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0023', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0023', alias: '', members: [{ type: 'std::list<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0023', alias: '', members: [{ type: 'std::list<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0023', alias: '', variableList: [{ type: 'std::list<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<int64_t>', parameters: [{ type: 'std::list<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0023'), 'h2dts_gen_multi_scene_0023 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0023 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0023'), 'h2dts_gen_multi_scene_0023 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0023'), 'h2dts_gen_multi_scene_0023 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0023 = Array<number> ;'), 'h2dts_gen_multi_scene_0023 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0023 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0023 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0024 的输出与性能。
  test('h2dts_gen_multi_scene_0024', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0024', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0024', alias: '', members: [{ type: 'std::list<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0024', alias: '', members: [{ type: 'std::list<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0024', alias: '', variableList: [{ type: 'std::list<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<char32_t>', parameters: [{ type: 'std::list<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0024'), 'h2dts_gen_multi_scene_0024 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0024 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0024'), 'h2dts_gen_multi_scene_0024 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0024'), 'h2dts_gen_multi_scene_0024 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0024 = Array<string> ;'), 'h2dts_gen_multi_scene_0024 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0024 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0024 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0025 的输出与性能。
  test('h2dts_gen_multi_scene_0025', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0025', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0025', alias: '', members: [{ type: 'std::list<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0025', alias: '', members: [{ type: 'std::list<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0025', alias: '', variableList: [{ type: 'std::list<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<uint8_t>::iterator', parameters: [{ type: 'std::list<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0025'), 'h2dts_gen_multi_scene_0025 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0025 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0025'), 'h2dts_gen_multi_scene_0025 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0025'), 'h2dts_gen_multi_scene_0025 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0025 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0025 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0025 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0025 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0026 的输出与性能。
  test('h2dts_gen_multi_scene_0026', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0026', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0026', alias: '', members: [{ type: 'std::list<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0026', alias: '', members: [{ type: 'std::list<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0026', alias: '', variableList: [{ type: 'std::list<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<int64_t>::iterator', parameters: [{ type: 'std::list<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0026'), 'h2dts_gen_multi_scene_0026 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0026 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0026'), 'h2dts_gen_multi_scene_0026 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0026'), 'h2dts_gen_multi_scene_0026 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0026 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0026 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0026 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0026 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0027 的输出与性能。
  test('h2dts_gen_multi_scene_0027', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0027', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0027', alias: '', members: [{ type: 'std::list<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0027', alias: '', members: [{ type: 'std::list<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0027', alias: '', variableList: [{ type: 'std::list<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::list<char32_t>::iterator', parameters: [{ type: 'std::list<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0027'), 'h2dts_gen_multi_scene_0027 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0027 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0027'), 'h2dts_gen_multi_scene_0027 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0027'), 'h2dts_gen_multi_scene_0027 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0027 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0027 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0027 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0027 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0028 的输出与性能。
  test('h2dts_gen_multi_scene_0028', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0028', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0028', alias: '', members: [{ type: 'std::forward_list<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0028', alias: '', members: [{ type: 'std::forward_list<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0028', alias: '', variableList: [{ type: 'std::forward_list<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<uint8_t>', parameters: [{ type: 'std::forward_list<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0028'), 'h2dts_gen_multi_scene_0028 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0028 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0028'), 'h2dts_gen_multi_scene_0028 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0028'), 'h2dts_gen_multi_scene_0028 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0028 = Array<number> ;'), 'h2dts_gen_multi_scene_0028 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0028 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0028 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0029 的输出与性能。
  test('h2dts_gen_multi_scene_0029', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0029', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0029', alias: '', members: [{ type: 'std::forward_list<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0029', alias: '', members: [{ type: 'std::forward_list<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0029', alias: '', variableList: [{ type: 'std::forward_list<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<int64_t>', parameters: [{ type: 'std::forward_list<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0029'), 'h2dts_gen_multi_scene_0029 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0029 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0029'), 'h2dts_gen_multi_scene_0029 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0029'), 'h2dts_gen_multi_scene_0029 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0029 = Array<number> ;'), 'h2dts_gen_multi_scene_0029 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0029 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0029 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0030 的输出与性能。
  test('h2dts_gen_multi_scene_0030', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0030', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0030', alias: '', members: [{ type: 'std::forward_list<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0030', alias: '', members: [{ type: 'std::forward_list<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0030', alias: '', variableList: [{ type: 'std::forward_list<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<char32_t>', parameters: [{ type: 'std::forward_list<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0030'), 'h2dts_gen_multi_scene_0030 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0030 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0030'), 'h2dts_gen_multi_scene_0030 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0030'), 'h2dts_gen_multi_scene_0030 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0030 = Array<string> ;'), 'h2dts_gen_multi_scene_0030 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0030 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0030 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0031 的输出与性能。
  test('h2dts_gen_multi_scene_0031', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0031', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0031', alias: '', members: [{ type: 'std::forward_list<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0031', alias: '', members: [{ type: 'std::forward_list<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0031', alias: '', variableList: [{ type: 'std::forward_list<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<uint8_t>::iterator', parameters: [{ type: 'std::forward_list<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0031'), 'h2dts_gen_multi_scene_0031 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0031 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0031'), 'h2dts_gen_multi_scene_0031 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0031'), 'h2dts_gen_multi_scene_0031 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0031 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0031 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0031 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0031 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_gen_multi_scene_0032', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0032', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0032', alias: '', members: [{ type: 'std::forward_list<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0032', alias: '', members: [{ type: 'std::forward_list<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0032', alias: '', variableList: [{ type: 'std::forward_list<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<int64_t>::iterator', parameters: [{ type: 'std::forward_list<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0032'), 'h2dts_gen_multi_scene_0032 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0032 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0032'), 'h2dts_gen_multi_scene_0032 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0032'), 'h2dts_gen_multi_scene_0032 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0032 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0032 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0032 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0032 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0033 的输出与性能。
  test('h2dts_gen_multi_scene_0033', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0033', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0033', alias: '', members: [{ type: 'std::forward_list<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0033', alias: '', members: [{ type: 'std::forward_list<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0033', alias: '', variableList: [{ type: 'std::forward_list<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::forward_list<char32_t>::iterator', parameters: [{ type: 'std::forward_list<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0033'), 'h2dts_gen_multi_scene_0033 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0033 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0033'), 'h2dts_gen_multi_scene_0033 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0033'), 'h2dts_gen_multi_scene_0033 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0033 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0033 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0033 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0033 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0034 的输出与性能。
  test('h2dts_gen_multi_scene_0034', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0034', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0034', alias: '', members: [{ type: 'std::stack<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0034', alias: '', members: [{ type: 'std::stack<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0034', alias: '', variableList: [{ type: 'std::stack<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<uint8_t>', parameters: [{ type: 'std::stack<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0034'), 'h2dts_gen_multi_scene_0034 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0034 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0034'), 'h2dts_gen_multi_scene_0034 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0034'), 'h2dts_gen_multi_scene_0034 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0034 = Array<number> ;'), 'h2dts_gen_multi_scene_0034 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0034 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0034 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0035 的输出与性能。
  test('h2dts_gen_multi_scene_0035', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0035', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0035', alias: '', members: [{ type: 'std::stack<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0035', alias: '', members: [{ type: 'std::stack<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0035', alias: '', variableList: [{ type: 'std::stack<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<int64_t>', parameters: [{ type: 'std::stack<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0035'), 'h2dts_gen_multi_scene_0035 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0035 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0035'), 'h2dts_gen_multi_scene_0035 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0035'), 'h2dts_gen_multi_scene_0035 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0035 = Array<number> ;'), 'h2dts_gen_multi_scene_0035 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0035 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0035 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0036 的输出与性能。
  test('h2dts_gen_multi_scene_0036', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0036', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0036', alias: '', members: [{ type: 'std::stack<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0036', alias: '', members: [{ type: 'std::stack<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0036', alias: '', variableList: [{ type: 'std::stack<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<char32_t>', parameters: [{ type: 'std::stack<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0036'), 'h2dts_gen_multi_scene_0036 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0036 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0036'), 'h2dts_gen_multi_scene_0036 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0036'), 'h2dts_gen_multi_scene_0036 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0036 = Array<string> ;'), 'h2dts_gen_multi_scene_0036 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0036 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0036 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0037 的输出与性能。
  test('h2dts_gen_multi_scene_0037', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0037', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0037', alias: '', members: [{ type: 'std::stack<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0037', alias: '', members: [{ type: 'std::stack<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0037', alias: '', variableList: [{ type: 'std::stack<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<uint8_t>::iterator', parameters: [{ type: 'std::stack<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0037'), 'h2dts_gen_multi_scene_0037 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0037 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0037'), 'h2dts_gen_multi_scene_0037 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0037'), 'h2dts_gen_multi_scene_0037 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0037 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0037 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0037 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0037 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0038 的输出与性能。
  test('h2dts_gen_multi_scene_0038', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0038', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0038', alias: '', members: [{ type: 'std::stack<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0038', alias: '', members: [{ type: 'std::stack<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0038', alias: '', variableList: [{ type: 'std::stack<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<int64_t>::iterator', parameters: [{ type: 'std::stack<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0038'), 'h2dts_gen_multi_scene_0038 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0038 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0038'), 'h2dts_gen_multi_scene_0038 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0038'), 'h2dts_gen_multi_scene_0038 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0038 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0038 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0038 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0038 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0039 的输出与性能。
  test('h2dts_gen_multi_scene_0039', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0039', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0039', alias: '', members: [{ type: 'std::stack<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0039', alias: '', members: [{ type: 'std::stack<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0039', alias: '', variableList: [{ type: 'std::stack<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::stack<char32_t>::iterator', parameters: [{ type: 'std::stack<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0039'), 'h2dts_gen_multi_scene_0039 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0039 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0039'), 'h2dts_gen_multi_scene_0039 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0039'), 'h2dts_gen_multi_scene_0039 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0039 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0039 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0039 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0039 执行异常: ${String(err)}`);
    }
  });

  test('h2dts_gen_multi_scene_0040', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0040', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0040', alias: '', members: [{ type: 'std::queue<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0040', alias: '', members: [{ type: 'std::queue<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0040', alias: '', variableList: [{ type: 'std::queue<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<uint8_t>', parameters: [{ type: 'std::queue<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0040'), 'h2dts_gen_multi_scene_0040 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0040 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0040'), 'h2dts_gen_multi_scene_0040 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0040'), 'h2dts_gen_multi_scene_0040 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0040 = Array<number> ;'), 'h2dts_gen_multi_scene_0040 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0040 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0040 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0041 的输出与性能。
  test('h2dts_gen_multi_scene_0041', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0041', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0041', alias: '', members: [{ type: 'std::queue<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0041', alias: '', members: [{ type: 'std::queue<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0041', alias: '', variableList: [{ type: 'std::queue<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<int64_t>', parameters: [{ type: 'std::queue<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0041'), 'h2dts_gen_multi_scene_0041 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0041 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0041'), 'h2dts_gen_multi_scene_0041 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0041'), 'h2dts_gen_multi_scene_0041 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0041 = Array<number> ;'), 'h2dts_gen_multi_scene_0041 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0041 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0041 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0042 的输出与性能。
  test('h2dts_gen_multi_scene_0042', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0042', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0042', alias: '', members: [{ type: 'std::queue<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0042', alias: '', members: [{ type: 'std::queue<char32_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0042', alias: '', variableList: [{ type: 'std::queue<char32_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<char32_t>', parameters: [{ type: 'std::queue<char32_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0042'), 'h2dts_gen_multi_scene_0042 class 生成失败');
      assert.ok(cls.includes('v: Array<string>;'), 'h2dts_gen_multi_scene_0042 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0042'), 'h2dts_gen_multi_scene_0042 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0042'), 'h2dts_gen_multi_scene_0042 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0042 = Array<string> ;'), 'h2dts_gen_multi_scene_0042 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0042 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0042 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0043 的输出与性能。
  test('h2dts_gen_multi_scene_0043', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0043', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0043', alias: '', members: [{ type: 'std::queue<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0043', alias: '', members: [{ type: 'std::queue<uint8_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0043', alias: '', variableList: [{ type: 'std::queue<uint8_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<uint8_t>::iterator', parameters: [{ type: 'std::queue<uint8_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0043'), 'h2dts_gen_multi_scene_0043 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0043 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0043'), 'h2dts_gen_multi_scene_0043 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0043'), 'h2dts_gen_multi_scene_0043 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0043 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0043 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0043 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0043 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0044 的输出与性能。
  test('h2dts_gen_multi_scene_0044', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0044', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0044', alias: '', members: [{ type: 'std::queue<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0044', alias: '', members: [{ type: 'std::queue<int64_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0044', alias: '', variableList: [{ type: 'std::queue<int64_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<int64_t>::iterator', parameters: [{ type: 'std::queue<int64_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0044'), 'h2dts_gen_multi_scene_0044 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<number>>;'), 'h2dts_gen_multi_scene_0044 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0044'), 'h2dts_gen_multi_scene_0044 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0044'), 'h2dts_gen_multi_scene_0044 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0044 = IterableIterator<Array<number>> ;'), 'h2dts_gen_multi_scene_0044 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0044 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0044 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0045 的输出与性能。
  test('h2dts_gen_multi_scene_0045', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0045', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0045', alias: '', members: [{ type: 'std::queue<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0045', alias: '', members: [{ type: 'std::queue<char32_t>::iterator', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0045', alias: '', variableList: [{ type: 'std::queue<char32_t>::iterator', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::queue<char32_t>::iterator', parameters: [{ type: 'std::queue<char32_t>::iterator', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0045'), 'h2dts_gen_multi_scene_0045 class 生成失败');
      assert.ok(cls.includes('v: IterableIterator<Array<string>>;'), 'h2dts_gen_multi_scene_0045 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0045'), 'h2dts_gen_multi_scene_0045 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0045'), 'h2dts_gen_multi_scene_0045 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0045 = IterableIterator<Array<string>> ;'), 'h2dts_gen_multi_scene_0045 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0045 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0045 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0046 的输出与性能。
  test('h2dts_gen_multi_scene_0046', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0046', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0046', alias: '', members: [{ type: 'std::valarray<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0046', alias: '', members: [{ type: 'std::valarray<uint8_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0046', alias: '', variableList: [{ type: 'std::valarray<uint8_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<uint8_t>', parameters: [{ type: 'std::valarray<uint8_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0046'), 'h2dts_gen_multi_scene_0046 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0046 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0046'), 'h2dts_gen_multi_scene_0046 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0046'), 'h2dts_gen_multi_scene_0046 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0046 = Array<number> ;'), 'h2dts_gen_multi_scene_0046 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0046 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0046 执行异常: ${String(err)}`);
    }
  });

  // 测试内容：验证 h2dts 多产物生成场景（class/struct/enum/union）#0047 的输出与性能。
  test('h2dts_gen_multi_scene_0047', () => {
    try {
      const rootInfo: GenInfo = {
        parseObj: {
          enums: [{ name: 'PerfEnum0047', alias: '', members: ['A', 'B'], values: [] }],
          unions: [{ name: 'PerfUnion0047', alias: '', members: [{ type: 'std::valarray<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functions: [] }],
          structs: [{ name: 'PerfStruct0047', alias: '', members: [{ type: 'std::valarray<int64_t>', name: 'f', arraySize: 0, arraySizeList: [] }], functions: [] }],
          classes: [{ name: 'PerfClass0047', alias: '', variableList: [{ type: 'std::valarray<int64_t>', name: 'v', arraySize: 0, arraySizeList: [] }], functionList: [{ type: 'function', name: 'run', returns: 'std::valarray<int64_t>', parameters: [{ type: 'std::valarray<int64_t>', name: 'p', arraySize: 0, arraySizeList: [] }] }] }],
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
      assert.ok(cls.includes('export class PerfClass0047'), 'h2dts_gen_multi_scene_0047 class 生成失败');
      assert.ok(cls.includes('v: Array<number>;'), 'h2dts_gen_multi_scene_0047 class 字段类型转换失败');
      assert.ok(st.includes('export type PerfStruct0047'), 'h2dts_gen_multi_scene_0047 struct 生成失败');
      assert.ok(en.includes('export enum PerfEnum0047'), 'h2dts_gen_multi_scene_0047 enum 生成失败');
      assert.ok(un.includes('export type PerfUnion0047 = Array<number> ;'), 'h2dts_gen_multi_scene_0047 union 生成失败');
      const avgElapsed = elapsed / localLoop;
      assert.ok(avgElapsed < FILE_THRESHOLD_MS, `h2dts_gen_multi_scene_0047 平均耗时 ${avgElapsed.toFixed(3)}ms，阈值 ${FILE_THRESHOLD_MS}ms（总耗时 ${elapsed}ms, 次数 ${localLoop}）`);
    } catch (err) {
      assert.fail(`h2dts_gen_multi_scene_0047 执行异常: ${String(err)}`);
    }
  });

});
