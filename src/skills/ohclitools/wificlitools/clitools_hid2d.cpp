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
 * @file clitools_hid2d.cpp
 * @brief HID2D CLI handlers (wifi_hid2d.h). Uses same SA as P2P (WIFI_P2P_ABILITY_ID).
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstdlib>
#include <cstring>
#include <string>
#include <vector>

#include "define.h"
#include "wifi_hid2d.h"

using OHOS::Wifi::Hid2d;
using OHOS::Wifi::ErrCode;
using OHOS::Wifi::WIFI_OPT_SUCCESS;
using OHOS::Wifi::FreqType;
using OHOS::Wifi::Hid2dConnectConfig;
using OHOS::Wifi::IpAddrInfo;
using OHOS::Wifi::RecommendChannelRequest;
using OHOS::Wifi::RecommendChannelResponse;
using OHOS::Wifi::SelfCfgType;
using OHOS::Wifi::PeerCfgType;
using OHOS::Wifi::Hid2dUpperScene;
using OHOS::Wifi::GroupLiveType;
using OHOS::Wifi::DhcpMode;

static std::shared_ptr<Hid2d> g_hid2d = Hid2d::GetInstance(WIFI_P2P_ABILITY_ID);

/**
 * Parse string from first argv[i] starting with prefix.
 * @param argc Argument count.
 * @param argv Arguments.
 * @param prefix Prefix.
 * @param out Parsed string.
 * @return true if found.
 */
static bool ParseStrArg(int argc, const char* argv[], const char* prefix, std::string& out)
{
    for (int i = ARG_IDX_FIRST; i < argc; i++) {
        if (strncmp(argv[i], prefix, strlen(prefix)) == 0) {
            out = argv[i] + strlen(prefix);
            return true;
        }
    }
    return false;
}

/**
 * Parse int from first argv[i] starting with prefix.
 * @param argc Argument count.
 * @param argv Arguments.
 * @param prefix Prefix.
 * @param out Parsed value.
 * @return true if found.
 */
static bool ParseIntArg(int argc, const char* argv[], const char* prefix, int& out)
{
    for (int i = ARG_IDX_FIRST; i < argc; i++) {
        if (strncmp(argv[i], prefix, strlen(prefix)) == 0) {
            out = atoi(argv[i] + strlen(prefix));
            return true;
        }
    }
    return false;
}

/**
 * Request GC IP. Args: gcmac=xx:xx:xx:xx:xx:xx.
 * @param argc Argument count.
 * @param argv gcmac=.
 * @return void
 */
void HandleHid2dRequestGcIp(int argc, const char* argv[])
{
    std::string gcMac;
    if (!ParseStrArg(argc, argv, "gcmac=", gcMac)) {
        Logd("usage: hid2drequestgcip gcmac=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    std::string ipAddr;
    ErrCode ret = g_hid2d->Hid2dRequestGcIp(gcMac, ipAddr);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2drequestgcip success, ip: %s", ipAddr.c_str());
    } else {
        Logd("hid2drequestgcip failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Increase shared link. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHid2dSharedlinkIncrease(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dSharedlinkIncrease();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dsharedlinkincrease success");
    } else {
        Logd("hid2dsharedlinkincrease failed, err: %d", static_cast<int>(ret));
    }
}

void HandleHid2dSharedlinkDecrease(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dSharedlinkDecrease();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dsharedlinkdecrease success");
    } else {
        Logd("hid2dsharedlinkdecrease failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Create HID2D group. Optional: freq=5180, type=0.
 * @param argc Argument count.
 * @param argv freq=, type=.
 * @return void
 */
void HandleHid2dCreateGroup(int argc, const char* argv[])
{
    int frequency = DEFAULT_HID2D_FREQ;
    int type = DEFAULT_HID2D_FREQ_TYPE;
    ParseIntArg(argc, argv, "freq=", frequency);
    ParseIntArg(argc, argv, "type=", type);
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dCreateGroup(frequency, static_cast<FreqType>(type));
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dcreategroup success");
    } else {
        Logd("hid2dcreategroup failed, err: %d", static_cast<int>(ret));
    }
}

void HandleHid2dRemoveGcGroup(int argc, const char* argv[])
{
    std::string ifName;
    if (!ParseStrArg(argc, argv, "ifname=", ifName)) {
        Logd("usage: hid2dremovegcgroup ifname=xxx");
        return;
    }
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dRemoveGcGroup(ifName);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dremovegcgroup success");
    } else {
        Logd("hid2dremovegcgroup failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * HID2D connect. Optional: ssid=, bssid=.
 * @param argc Argument count.
 * @param argv ssid=, bssid=.
 * @return void
 */
void HandleHid2dConnect(int argc, const char* argv[])
{
    std::string ssid;
    std::string bssid;
    ParseStrArg(argc, argv, "ssid=", ssid);
    ParseStrArg(argc, argv, "bssid=", bssid);
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    Hid2dConnectConfig config;
    config.SetSsid(ssid);
    config.SetBssid(bssid);
    config.SetDhcpMode(DhcpMode::CONNECT_GO_NODHCP);
    ErrCode ret = g_hid2d->Hid2dConnect(config);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dconnect success");
    } else {
        Logd("hid2dconnect failed, err: %d", static_cast<int>(ret));
    }
}

void HandleHid2dConfigIpAddr(int argc, const char* argv[])
{
    std::string ifName;
    std::string ip;
    if (!ParseStrArg(argc, argv, "ifname=", ifName) || !ParseStrArg(argc, argv, "ip=", ip)) {
        Logd("usage: hid2dconfigipaddr ifname=xxx ip=xxx");
        return;
    }
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    IpAddrInfo ipInfo;
    ipInfo.ip = ip;
    ErrCode ret = g_hid2d->Hid2dConfigIPAddr(ifName, ipInfo);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dconfigipaddr success");
    } else {
        Logd("hid2dconfigipaddr failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Release IP. Args: ifname=xxx.
 * @param argc Argument count.
 * @param argv ifname=.
 * @return void
 */
void HandleHid2dReleaseIpAddr(int argc, const char* argv[])
{
    std::string ifName;
    if (!ParseStrArg(argc, argv, "ifname=", ifName)) {
        Logd("usage: hid2dreleaseipaddr ifname=xxx");
        return;
    }
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dReleaseIPAddr(ifName);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dreleaseipaddr success");
    } else {
        Logd("hid2dreleaseipaddr failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get recommend channel (dump status/index/centerFreq/bandwidth). No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHid2dGetRecommendChannel(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    RecommendChannelRequest request;
    RecommendChannelResponse response;
    ErrCode ret = g_hid2d->Hid2dGetRecommendChannel(request, response);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("hid2dgetrecommendchannel failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("recommend status: %d, index: %d, centerFreq: %d, centerFreq1: %d, bandwidth: %d",
         static_cast<int>(response.status), response.index, response.centerFreq,
         response.centerFreq1, response.bandwidth);
}

/**
 * Get 5G channel list. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHid2dGetChannel5G(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    std::vector<int> list;
    ErrCode ret = g_hid2d->Hid2dGetChannelListFor5G(list);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("hid2dgetchannel5g failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("5G channel count: %zu", list.size());
    for (size_t i = 0; i < list.size() && i < static_cast<size_t>(MAX_DUMP_CHANNEL_COUNT); i++) {
        Logd("[%zu] %d", i, list[i]);
    }
}

/**
 * Get self config. Optional: type=1.
 * @param argc Argument count.
 * @param argv type=.
 * @return void
 */
void HandleHid2dGetSelfCfg(int argc, const char* argv[])
{
    int cfgType = DEFAULT_CFG_TYPE;
    ParseIntArg(argc, argv, "type=", cfgType);
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    char cfgData[CFG_DATA_MAX_BYTES];
    int validLen = 0;
    ErrCode ret = g_hid2d->Hid2dGetSelfWifiCfgInfo(static_cast<SelfCfgType>(cfgType), cfgData, &validLen);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("hid2dgetselfcfg failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("hid2dgetselfcfg success, validLen: %d", validLen);
}

/**
 * Set peer config. Optional: type=1.
 * @param argc Argument count.
 * @param argv type=.
 * @return void
 */
void HandleHid2dSetPeerCfg(int argc, const char* argv[])
{
    int cfgType = DEFAULT_CFG_TYPE;
    ParseIntArg(argc, argv, "type=", cfgType);
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    char cfgData[CFG_DATA_MAX_BYTES] = {0};
    int validLen = 0;
    ErrCode ret = g_hid2d->Hid2dSetPeerWifiCfgInfo(static_cast<PeerCfgType>(cfgType), cfgData, validLen);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dsetpeercfg success");
    } else {
        Logd("hid2dsetpeercfg failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Set upper scene. Args: ifname=xxx [scene=0].
 * @param argc Argument count.
 * @param argv ifname=, scene=.
 * @return void
 */
void HandleHid2dSetUpperScene(int argc, const char* argv[])
{
    std::string ifName;
    if (!ParseStrArg(argc, argv, "ifname=", ifName)) {
        Logd("usage: hid2dsetupperscene ifname=xxx [scene=0]");
        return;
    }
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    Hid2dUpperScene scene;
    scene.scene = 0;
    scene.fps = -1;
    scene.bw = 0;
    int sceneVal = 0;
    ParseIntArg(argc, argv, "scene=", sceneVal);
    scene.scene = static_cast<unsigned int>(sceneVal);
    ErrCode ret = g_hid2d->Hid2dSetUpperScene(ifName, scene);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dsetupperscene success");
    } else {
        Logd("hid2dsetupperscene failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Check wide bandwidth supported. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHid2dIsWideBandwidthSupported(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    bool supported = false;
    ErrCode ret = g_hid2d->Hid2dIsWideBandwidthSupported(supported);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("hid2diswidebandwidthsupported failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("wide bandwidth supported: %s", supported ? "yes" : "no");
}

/**
 * Set group type. Optional: type=0|1 (GROUPSTOPALIVE/GROUPKEEPALIVE).
 * @param argc Argument count.
 * @param argv type=.
 * @return void
 */
void HandleHid2dSetGroupType(int argc, const char* argv[])
{
    int type = DEFAULT_GROUP_TYPE;
    ParseIntArg(argc, argv, "type=", type);
    if (g_hid2d == nullptr) {
        Logd("Hid2d instance is null");
        return;
    }
    ErrCode ret = g_hid2d->Hid2dSetGroupType(static_cast<GroupLiveType>(type));
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hid2dsetgrouptype success");
    } else {
        Logd("hid2dsetgrouptype failed, err: %d", static_cast<int>(ret));
    }
}
