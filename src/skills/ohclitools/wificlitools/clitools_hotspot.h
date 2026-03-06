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
 * @file clitools_hotspot.h
 * @brief Hotspot (AP) commands: wifi_hotspot.h (wifi_sdk inner_api).
 * All handlers:
 * @param argc Argument count.
 * @param argv Arguments (argv[0]=cmd).
 * @return void
 */

#ifndef WIFICLITOOLS_CLITOOLS_HOTSPOT_H
#define WIFICLITOOLS_CLITOOLS_HOTSPOT_H

#ifdef __cplusplus
extern "C" {
#endif

void HandleHotspotEnable(int argc, const char* argv[]);
void HandleHotspotDisable(int argc, const char* argv[]);
void HandleHotspotGetStatus(int argc, const char* argv[]);
void HandleGetHotspotConfig(int argc, const char* argv[]);
void HandleSetHotspotConfig(int argc, const char* argv[]);
void HandleGetStationList(int argc, const char* argv[]);
void HandleDisassociateSta(int argc, const char* argv[]);
void HandleGetBlockLists(int argc, const char* argv[]);
void HandleAddBlockList(int argc, const char* argv[]);
void HandleDelBlockList(int argc, const char* argv[]);
void HandleGetValidBands(int argc, const char* argv[]);
void HandleGetValidChannels(int argc, const char* argv[]);
void HandleGetPowerModel(int argc, const char* argv[]);
void HandleSetPowerModel(int argc, const char* argv[]);
void HandleGetApIfaceName(int argc, const char* argv[]);
void HandleSetHotspotIdleTimeout(int argc, const char* argv[]);
void HandleIsHotspotDualBandSupported(int argc, const char* argv[]);
void HandleIsOpenSoftApAllowed(int argc, const char* argv[]);
void HandleEnableLocalOnlyHotspot(int argc, const char* argv[]);
void HandleDisableLocalOnlyHotspot(int argc, const char* argv[]);
void HandleGetHotspotMode(int argc, const char* argv[]);
void HandleGetLocalOnlyHotspotConfig(int argc, const char* argv[]);

#ifdef __cplusplus
}
#endif

#endif  // WIFICLITOOLS_CLITOOLS_HOTSPOT_H
