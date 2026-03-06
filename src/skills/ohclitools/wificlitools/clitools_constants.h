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
 * @brief Named constants for wificlitools. No magic numbers in .cpp.
 */

#ifndef WIFICLITOOLS_CLITOOLS_CONSTANTS_H
#define WIFICLITOOLS_CLITOOLS_CONSTANTS_H

/** Minimum argc for main: program name + at least one command. */
static const int MIN_ARGC_WITH_CMD = 2;

/** Index of command name in argv (argv[0] after main strips program name). */
static const int CMD_IDX = 0;
/** First optional argument index (argv[1] = first key=value). */
static const int ARG_IDX_FIRST = 1;

/** Minimum length for WPA pre-shared key. */
static const int MIN_WPA_PASSWORD_LEN = 8;

/** Argument prefix length: "ssid=" */
static const int PREFIX_LEN_SSID = 5;
/** Argument prefix length: "password=" */
static const int PREFIX_LEN_PASSWORD = 9;

/** Default PNO scan period in milliseconds when not specified. */
static const int DEFAULT_PNO_PERIOD_MS = 60000;
/** Default suspend reason for PNO scan when not specified. */
static const int DEFAULT_SUSPEND_REASON = 0;

/** Invalid or unset network id. */
static const int INVALID_NETWORK_ID = -1;

/** Hotspot service instance id (first instance). */
static const int HOTSPOT_INSTANCE_ID = 0;

/** Default band for getvalidchannels when not specified: 1 = 2.4G. */
static const int DEFAULT_BAND_VALID_CHANNELS = 1;

/** Default power model when not specified: 1 = GENERAL. */
static const int DEFAULT_POWER_MODEL = 1;

/** Default config type for Hid2d getselfcfg/setpeercfg. */
static const int DEFAULT_CFG_TYPE = 1;

/** Default frequency for Hid2d create group (5G Hz). */
static const int DEFAULT_HID2D_FREQ = 5180;
/** Default frequency type for Hid2d: 0 = FREQUENCY_DEFAULT. */
static const int DEFAULT_HID2D_FREQ_TYPE = 0;
/** Default group type: 0 = GROUPSTOPALIVE, 1 = GROUPKEEPALIVE. */
static const int DEFAULT_GROUP_TYPE = 0;

/** Max number of 5G channels to dump in one list (avoid flood). */
static const int MAX_DUMP_CHANNEL_COUNT = 20;

/** Callback wait timeout for normal operations (ms). */
static const int DEFAULT_CALLBACK_TIMEOUT_MS = 2000;
/** Callback wait timeout for scan or other long operations (ms). */
static const int SCAN_CALLBACK_TIMEOUT_MS = 30000;

#endif  // WIFICLITOOLS_CLITOOLS_CONSTANTS_H
