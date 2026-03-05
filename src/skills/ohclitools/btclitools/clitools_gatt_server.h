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

#ifndef CLITOOLS_GATT_SERVER_H
#define CLITOOLS_GATT_SERVER_H

#include <string>

/**
 * @file clitools_gatt_server.h
 * @brief Command-line handlers and helpers for GATT server (btframework bluetooth_gatt_server.h). See DESIGN.md.
 */

namespace OHOS {
namespace Bluetooth {

int AddHealthRelatedService();
int AddAllService();
void RemoveAllService();
void RemoveSpecificService(const std::string& serviceUuid);
void ListAvailableServices();

void HandleGattCreateServer(int argc, const char* argv[]);
void HandleGattAddServices(int argc, const char* argv[]);
void HandleGattDelServices(int argc, const char* argv[]);
void HandleGattServerStatus(int argc, const char* argv[]);
void HandleGattCloseServer(int argc, const char* argv[]);

}  // namespace Bluetooth
}  // namespace OHOS

#endif  // CLITOOLS_GATT_SERVER_H
