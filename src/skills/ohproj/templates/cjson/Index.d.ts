/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 */

/** cJSON handle: 0 = invalid. Call cjsonDelete only on handles from cjsonParse or cjsonCreate* */
export type CjsonHandle = number;

export const add: (a: number, b: number) => number;

export const cjsonVersion: () => string;
export const cjsonParse: (jsonStr: string) => CjsonHandle;
export const cjsonParseWithLength: (jsonStr: string, bufferLength: number) => CjsonHandle;
export const cjsonPrint: (handle: CjsonHandle) => string | null;
export const cjsonPrintUnformatted: (handle: CjsonHandle) => string | null;
export const cjsonPrintBuffered: (handle: CjsonHandle, prebuffer: number, fmt: boolean) => string | null;
export const cjsonDelete: (handle: CjsonHandle) => void;
export const cjsonGetObjectItem: (handle: CjsonHandle, key: string) => CjsonHandle;
export const cjsonGetObjectItemCaseSensitive: (handle: CjsonHandle, key: string) => CjsonHandle;
export const cjsonHasObjectItem: (handle: CjsonHandle, key: string) => boolean;
export const cjsonGetErrorPtr: () => string | null;
export const cjsonGetArrayItem: (handle: CjsonHandle, index: number) => CjsonHandle;
export const cjsonGetArraySize: (handle: CjsonHandle) => number;
export const cjsonGetStringValue: (handle: CjsonHandle) => string | null;
export const cjsonGetNumberValue: (handle: CjsonHandle) => number;
export const cjsonIsObject: (handle: CjsonHandle) => boolean;
export const cjsonIsArray: (handle: CjsonHandle) => boolean;
export const cjsonIsString: (handle: CjsonHandle) => boolean;
export const cjsonIsNumber: (handle: CjsonHandle) => boolean;
export const cjsonIsNull: (handle: CjsonHandle) => boolean;
export const cjsonIsInvalid: (handle: CjsonHandle) => boolean;
export const cjsonIsFalse: (handle: CjsonHandle) => boolean;
export const cjsonIsTrue: (handle: CjsonHandle) => boolean;
export const cjsonIsBool: (handle: CjsonHandle) => boolean;
export const cjsonIsRaw: (handle: CjsonHandle) => boolean;
export const cjsonCreateObject: () => CjsonHandle;
export const cjsonCreateArray: () => CjsonHandle;
export const cjsonCreateString: (s: string) => CjsonHandle;
export const cjsonCreateNumber: (n: number) => CjsonHandle;
export const cjsonCreateBool: (b: boolean) => CjsonHandle;
export const cjsonCreateNull: () => CjsonHandle;
export const cjsonCreateTrue: () => CjsonHandle;
export const cjsonCreateFalse: () => CjsonHandle;
export const cjsonCreateRaw: (raw: string) => CjsonHandle;
export const cjsonAddItemToObject: (obj: CjsonHandle, key: string, item: CjsonHandle) => boolean;
export const cjsonAddItemToObjectCS: (obj: CjsonHandle, key: string, item: CjsonHandle) => boolean;
export const cjsonAddItemToArray: (arr: CjsonHandle, item: CjsonHandle) => boolean;
export const cjsonAddItemReferenceToArray: (arr: CjsonHandle, item: CjsonHandle) => boolean;
export const cjsonAddItemReferenceToObject: (obj: CjsonHandle, key: string, item: CjsonHandle) => boolean;
export const cjsonDetachItemViaPointer: (parent: CjsonHandle, item: CjsonHandle) => CjsonHandle;
export const cjsonDetachItemFromArray: (arr: CjsonHandle, which: number) => CjsonHandle;
export const cjsonDeleteItemFromArray: (arr: CjsonHandle, which: number) => void;
export const cjsonDetachItemFromObject: (obj: CjsonHandle, key: string) => CjsonHandle;
export const cjsonDetachItemFromObjectCaseSensitive: (obj: CjsonHandle, key: string) => CjsonHandle;
export const cjsonDeleteItemFromObject: (obj: CjsonHandle, key: string) => void;
export const cjsonDeleteItemFromObjectCaseSensitive: (obj: CjsonHandle, key: string) => void;
export const cjsonInsertItemInArray: (arr: CjsonHandle, which: number, item: CjsonHandle) => boolean;
export const cjsonReplaceItemViaPointer: (parent: CjsonHandle, item: CjsonHandle, replacement: CjsonHandle) => boolean;
export const cjsonReplaceItemInArray: (arr: CjsonHandle, which: number, item: CjsonHandle) => boolean;
export const cjsonReplaceItemInObject: (obj: CjsonHandle, key: string, item: CjsonHandle) => boolean;
export const cjsonReplaceItemInObjectCaseSensitive: (obj: CjsonHandle, key: string, item: CjsonHandle) => boolean;
export const cjsonDuplicate: (handle: CjsonHandle, recurse: boolean) => CjsonHandle;
export const cjsonCompare: (a: CjsonHandle, b: CjsonHandle, caseSensitive: boolean) => boolean;
export const cjsonMinify: (json: string) => string;
export const cjsonAddNullToObject: (obj: CjsonHandle, name: string) => CjsonHandle;
export const cjsonAddTrueToObject: (obj: CjsonHandle, name: string) => CjsonHandle;
export const cjsonAddFalseToObject: (obj: CjsonHandle, name: string) => CjsonHandle;
export const cjsonAddBoolToObject: (obj: CjsonHandle, name: string, value: boolean) => CjsonHandle;
export const cjsonAddNumberToObject: (obj: CjsonHandle, name: string, number: number) => CjsonHandle;
export const cjsonAddStringToObject: (obj: CjsonHandle, name: string, value: string) => CjsonHandle;
export const cjsonAddRawToObject: (obj: CjsonHandle, name: string, raw: string) => CjsonHandle;
export const cjsonAddObjectToObject: (obj: CjsonHandle, name: string) => CjsonHandle;
export const cjsonAddArrayToObject: (obj: CjsonHandle, name: string) => CjsonHandle;
export const cjsonSetValuestring: (handle: CjsonHandle, valuestring: string) => string | null;
export const cjsonMalloc: (size: number) => number;
export const cjsonFree: (ptr: number) => void;
