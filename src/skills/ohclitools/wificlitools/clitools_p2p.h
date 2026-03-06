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
 * @file clitools_p2p.h
 * @brief P2P commands: wifi_p2p.h (wifi_sdk inner_api).
 * All handlers:
 * @param argc Argument count.
 * @param argv Arguments (argv[0]=cmd).
 * @return void
 */

#ifndef WIFICLITOOLS_CLITOOLS_P2P_H
#define WIFICLITOOLS_CLITOOLS_P2P_H

#ifdef __cplusplus
extern "C" {
#endif

void HandleP2pEnable(int argc, const char* argv[]);
void HandleP2pDisable(int argc, const char* argv[]);
void HandleP2pDiscover(int argc, const char* argv[]);
void HandleP2pStopDiscover(int argc, const char* argv[]);
void HandleDiscoverServices(int argc, const char* argv[]);
void HandleStopDiscoverServices(int argc, const char* argv[]);
void HandleCreateGroup(int argc, const char* argv[]);
void HandleRemoveGroup(int argc, const char* argv[]);
void HandleP2pConnect(int argc, const char* argv[]);
void HandleP2pCancelConnect(int argc, const char* argv[]);
void HandleQueryP2pLinkedInfo(int argc, const char* argv[]);
void HandleGetCurrentGroup(int argc, const char* argv[]);
void HandleGetP2pEnableStatus(int argc, const char* argv[]);
void HandleGetP2pDiscoverStatus(int argc, const char* argv[]);
void HandleGetP2pConnectedStatus(int argc, const char* argv[]);
void HandleQueryP2pLocalDevice(int argc, const char* argv[]);
void HandleQueryP2pDevices(int argc, const char* argv[]);
void HandleQueryP2pGroups(int argc, const char* argv[]);
void HandleQueryP2pServices(int argc, const char* argv[]);
void HandleSetP2pDeviceName(int argc, const char* argv[]);

#ifdef __cplusplus
}
#endif

#endif  // WIFICLITOOLS_CLITOOLS_P2P_H
