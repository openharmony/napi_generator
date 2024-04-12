/*
* Copyright (c) 2023 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

export interface InstanceData {
  testint32: number;
}

export interface Callback<T> {
  (data: T): void;
}

export const add: (a: number, b: number) => number;
export const testNapiStatus: (a: number, b: number) => number;
export const testExterrinfo: (a: number, b: string) => number;
export const testNapiEnv: () => string;
export const testNapiValue: () => string;
export const testNapiThreadsafefunc: (callback: Callback<string>) => number;
export const testNapiThreadsafefuncrel: (callback: Callback<string>) => number;
export const testNapiThreadsafefuncall: (callback: Callback<string>) => number;
export const instance;

export const cjson_version: () => string;
export const testNapiGetPropertyNames: (a: object) => string;
export const testNapiSetProperty: (a: object, b: any, c: any) => string;
export const testNapiGetProperty: (a: object, b: any) => string;
export const testNapiHasProperty: (a: object, b: any) => boolean;
export const testNapiDeleteProperty: (a: object, b: any) => string;
export const testNapiGetNamedProperty: (a: object, b: string) => string;
export const testNapiSetNamedProperty: (a: object, b: string, c: any) => string;
export const testNapiHasNamedProperty: (a: object, b: string) => string;

/* work_with_javascript_values_and_abstract_operations */
export const testNapiCoerceToBool: (a: any) => boolean;
export const testNapiCoerceToNumber: (a: any) => number;
export const testNapiCoerceToObject: (a: any) => object;
export const testNapiCoerceToString: (a: any) => string;
export const testNapiTypeof: (a: any) => string;

/* work_with_javascript_values */
export const testNapiCreateInt32: (number) => number;
export const testNapiCreateUInt32: (number) => number;
export const testNapiCreateInt64: (number) => number;
