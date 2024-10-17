/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SayHello: (a: string) => string;
export const AsyncSayHello: (a: string) => Promise<string>;
export const Passing: (flag: TypeFlags) => TypeFlags;

export enum TypeFlags {
  NONE,
  NUM,
  STRING
}

export class TestObject {
  constructor(count:number);
  static MultiplyObject:(obj1: TestObject, obj2: TestObject) => number;
  Multiply:(mult: number) => number;
  value: number;
  value_: number;
}