/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

/**
 * @file clitools_sta.h
 * @brief STA commands: wifi_device.h, wifi_scan.h (wifi_sdk inner_api).
 *
 * All handlers below: @param argc argument count (argv[0] is command name).
 * @param argv Argument vector.
 * @return void
 */

#ifndef WIFICLITOOLS_CLITOOLS_STA_H
#define WIFICLITOOLS_CLITOOLS_STA_H

#ifdef __cplusplus
extern "C" {
#endif

void HandleWifiEnable(int argc, const char* argv[]);
void HandleWifiDisable(int argc, const char* argv[]);
void HandleWifiGetStatus(int argc, const char* argv[]);
void HandleWifiScan(int argc, const char* argv[]);
void HandleWifiScanStop(int argc, const char* argv[]);
void HandleWifiGetScanList(int argc, const char* argv[]);
void HandleAdvanceScan(int argc, const char* argv[]);
void HandleSetScanOnlyAvailable(int argc, const char* argv[]);
void HandleGetScanOnlyAvailable(int argc, const char* argv[]);
void HandleStartPnoScan(int argc, const char* argv[]);
void HandleWifiConnect(int argc, const char* argv[]);
void HandleWifiDisconnect(int argc, const char* argv[]);
void HandleWifiGetSignal(int argc, const char* argv[]);
void HandleWifiGetConnInfo(int argc, const char* argv[]);
/* wifi_device.h: config & state */
void HandleGetDeviceConfigs(int argc, const char* argv[]);
void HandleAddDeviceConfig(int argc, const char* argv[]);
void HandleRemoveDevice(int argc, const char* argv[]);
void HandleRemoveAllDevice(int argc, const char* argv[]);
void HandleGetDeviceConfig(int argc, const char* argv[]);
void HandleGetCountryCode(int argc, const char* argv[]);
void HandleSetCountryCode(int argc, const char* argv[]);
void HandleReconnect(int argc, const char* argv[]);
void HandleGetDeviceMac(int argc, const char* argv[]);
void HandleGetDisconnectReason(int argc, const char* argv[]);
void HandleGetIpInfo(int argc, const char* argv[]);
void HandleGetWifiState(int argc, const char* argv[]);

#ifdef __cplusplus
}
#endif

#endif  // WIFICLITOOLS_CLITOOLS_STA_H
