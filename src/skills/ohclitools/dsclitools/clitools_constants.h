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
 * @file clitools_constants.h
 * @brief Named constants for dsclitools. No magic numbers in .cpp.
 */

#ifndef DSCLITOOLS_CLITOOLS_CONSTANTS_H
#define DSCLITOOLS_CLITOOLS_CONSTANTS_H

#include <cstdint>

/** Minimum argc: program name + at least one command. */
inline constexpr int MIN_ARGC_WITH_CMD = 2;
/** Index of command name in argv. */
inline constexpr int CMD_IDX = 0;
/** First optional argument index. */
inline constexpr int ARG_IDX_FIRST = 1;

/** Default pkgName for softbus API calls (CLI caller). */
inline constexpr const char* DEFAULT_PKG_NAME = "dsclitools";

/** Callback wait timeout for normal operations (ms). */
inline constexpr int DEFAULT_CALLBACK_TIMEOUT_MS = 2000;
/** Callback wait timeout for long operations (ms). */
inline constexpr int LONG_CALLBACK_TIMEOUT_MS = 30000;

/** Buffer size for GetNodeKeyInfo value. */
inline constexpr int NODE_KEY_INFO_BUF_LEN = 256;
/** Buffer size for session name / generic name. */
inline constexpr int SESSION_NAME_BUF_LEN = 256;
/** Buffer size for peer networkId. */
inline constexpr int PEER_NETWORKID_BUF_LEN = 128;
/** Default events mask for RegNodeCb (EVENT_NODE_STATE_MASK). */
inline constexpr uint32_t DEFAULT_NODE_CB_EVENTS = 0xF;
/** Default CreateGroupOwner frequency (5G channel). */
inline constexpr int DEFAULT_GO_FREQUENCY = 5180;
/** Default empty JSON string for SyncTrustedRelationShip. */
inline constexpr const char* DEFAULT_EMPTY_JSON = "{}";

#endif  // DSCLITOOLS_CLITOOLS_CONSTANTS_H
