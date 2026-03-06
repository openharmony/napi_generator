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

#ifndef CLITOOLS_A2DP_H
#define CLITOOLS_A2DP_H

/**
 * @file clitools_a2dp.h
 * @brief Command-line handlers for A2DP source profile (btframework bluetooth_a2dp_src.h).
 */

void HandleA2dpConnect(int argc, const char *argv[]);
void HandleA2dpDisconnect(int argc, const char *argv[]);
void HandleA2dpGetDevices(int argc, const char *argv[]);
void HandleA2dpGetDeviceState(int argc, const char *argv[]);
void HandleA2dpSetActiveSink(int argc, const char *argv[]);
void HandleA2dpGetActiveSink(int argc, const char *argv[]);
void HandleA2dpStartPlaying(int argc, const char *argv[]);
void HandleA2dpSuspendPlaying(int argc, const char *argv[]);
void HandleA2dpStopPlaying(int argc, const char *argv[]);
void HandleA2dpGetPlayingState(int argc, const char *argv[]);

#endif // CLITOOLS_A2DP_H
