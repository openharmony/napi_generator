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

import { FuncTransferMap } from "../gen/datatype";

export let transferMap: FuncTransferMap[] = [
  {
    fromType: 'bool',
    tranferContent: ['WriteBoolUnaligned', 'ReadBoolUnaligned']  // 分离出array , vector, map等
  },
  {
    fromType: 'int8_t',
    tranferContent: ['WriteInt8', 'ReadInt8']
  },
  {
    fromType: 'uint8_t',
    tranferContent: ['WriteUint8', 'ReadUint8']
  },
  {
    fromType: 'int16_t',
    tranferContent: ['WriteInt16', 'ReadInt16']
  },
  {
    fromType: 'uint16_t',
    tranferContent: ['WriteUint16', 'ReadUint16']
  },
  {
    fromType: 'int32_t',
    tranferContent: ['WriteInt32', 'ReadInt32']
  },
  {
    fromType: 'uint32_t',
    tranferContent: ['WriteUint32', 'ReadUint32']
  },
  {
    fromType: 'int64_t',
    tranferContent: ['WriteInt64', 'ReadInt64']
  },
  {
    fromType: 'uint64_t',
    tranferContent: ['WriteUint64', 'ReadUint64']
  },
  {
    fromType: 'float',
    tranferContent: ['WriteFloat', 'ReadFloat']
  },
  {
    fromType: 'double',
    tranferContent: ['WriteDouble', 'ReadDouble']
  },
  {
    fromType: 'char *',
    tranferContent: ['WriteCString', 'ReadCString']
  },
  {
    fromType: 'string',
    tranferContent: ['WriteString', 'ReadString']
  },
  {
    fromType: 'vector<bool>',
    tranferContent: ['WriteBoolVector', 'ReadBoolVector']
  },
  {
    fromType: 'vector<int8_t>',
    tranferContent: ['WriteInt8Vector', 'ReadInt8Vector']
  },
  {
    fromType: 'vector<uint8_t>',
    tranferContent: ['WriteUInt8Vector', 'ReadUInt8Vector']
  },
  {
    fromType: 'vector<int16_t>',
    tranferContent: ['WriteInt16Vector', 'ReadInt16Vector']
  },
  {
    fromType: 'vector<uint16_t>',
    tranferContent: ['WriteUInt16Vector', 'ReadUInt16Vector']
  },
  {
    fromType: 'vector<int32_t>',
    tranferContent: ['WriteInt32Vector', 'ReadUInt32Vector']
  },
  {
    fromType: 'vector<uint32_t>',
    tranferContent: ['WriteUInt32Vector', 'ReadUInt32Vector']
  },
  {
    fromType: 'vector<int64_t>',
    tranferContent: [ 'WriteInt64Vector', 'ReadInt64Vector']
  },
  {
    fromType: 'vector<uint64_t>',
    tranferContent: ['WriteUInt64Vector', 'ReadUInt64Vector']
  },
  {
    fromType: 'vector<float>',
    tranferContent: ['WriteFloatVector', 'ReadFloatVector']
  },
  {
    fromType: 'vector<double>',
    tranferContent: ['WriteDoubleVector', 'ReadDoubleVector']
  },
  {
    fromType: 'vector<string>',
    tranferContent: ['WriteStringVector', 'ReadStringVector']
  },
]


export let idlTransferType: FuncTransferMap[] = [
  {
    fromType: 'bool',
    tranferContent: ['boolean']
  },
  {
    fromType: 'string',
    tranferContent: ['String']
  },
]

// 将ts type转换为 c type
export let tsTransferType: FuncTransferMap[] = [
  {
    fromType: 'boolean',
    tranferContent: ['bool']
  },
  {
    fromType: 'string',
    tranferContent: ['std::string']
  },
  {
    fromType: 'number',
    tranferContent: ['int32_t', 'uint32_t', 'int', 'int64_t', 'uint64_t']
  }
]
