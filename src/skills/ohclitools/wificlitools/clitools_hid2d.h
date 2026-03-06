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
 * @file clitools_hid2d.h
 * @brief HID2D commands: wifi_hid2d.h (wifi_sdk inner_api, same SA as P2P).
 * All handlers:
 * @param argc Argument count.
 * @param argv Arguments (argv[0]=cmd).
 * @return void
 */

#ifndef WIFICLITOOLS_CLITOOLS_HID2D_H
#define WIFICLITOOLS_CLITOOLS_HID2D_H

#ifdef __cplusplus
extern "C" {
#endif

void HandleHid2dRequestGcIp(int argc, const char* argv[]);
void HandleHid2dSharedlinkIncrease(int argc, const char* argv[]);
void HandleHid2dSharedlinkDecrease(int argc, const char* argv[]);
void HandleHid2dCreateGroup(int argc, const char* argv[]);
void HandleHid2dRemoveGcGroup(int argc, const char* argv[]);
void HandleHid2dConnect(int argc, const char* argv[]);
void HandleHid2dConfigIpAddr(int argc, const char* argv[]);
void HandleHid2dReleaseIpAddr(int argc, const char* argv[]);
void HandleHid2dGetRecommendChannel(int argc, const char* argv[]);
void HandleHid2dGetChannel5G(int argc, const char* argv[]);
void HandleHid2dGetSelfCfg(int argc, const char* argv[]);
void HandleHid2dSetPeerCfg(int argc, const char* argv[]);
void HandleHid2dSetUpperScene(int argc, const char* argv[]);
void HandleHid2dIsWideBandwidthSupported(int argc, const char* argv[]);
void HandleHid2dSetGroupType(int argc, const char* argv[]);

#ifdef __cplusplus
}
#endif

#endif  // WIFICLITOOLS_CLITOOLS_HID2D_H
