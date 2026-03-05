/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

#ifndef CLITOOLS_GATT_CLIENT_H
#define CLITOOLS_GATT_CLIENT_H

/**
 * @file clitools_gatt_client.h
 * @brief Command-line handlers for BLE central and GATT client (btframework bluetooth_ble_central_manager.h,
 *        bluetooth_gatt_client.h). See DESIGN.md.
 */

namespace OHOS {
namespace Bluetooth {

void HandleBleScan(int argc, const char* argv[]);
void HandleBleStop(int argc, const char* argv[]);
void HandleGattConnect(int argc, const char* argv[]);
void HandleGattDisconnect(int argc, const char* argv[]);
void HandleGattGetServices(int argc, const char* argv[]);
void HandleGattGetDeviceName(int argc, const char* argv[]);
void HandleGattReadCharactValue(int argc, const char* argv[]);
void HandleGattWriteCharactValue(int argc, const char* argv[]);
void HandleGattReadDescripValue(int argc, const char* argv[]);
void HandleGattWriteDescripValue(int argc, const char* argv[]);
void HandleGattGetRssi(int argc, const char* argv[]);
void HandleGattSetMtuSize(int argc, const char* argv[]);
void HandleGattCreateClient(int argc, const char* argv[]);
void HandleBleGetConnectedDevices(int argc, const char* argv[]);

}  // namespace Bluetooth
}  // namespace OHOS

#endif  // CLITOOLS_GATT_CLIENT_H
