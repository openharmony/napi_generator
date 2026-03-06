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
 * @file clitools_hotspot.cpp
 * @brief Hotspot CLI handlers (wifi_hotspot.h). Calls wifi_sdk APIs.
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstdlib>
#include <cstring>
#include <string>
#include <vector>

#include "define.h"
#include "wifi_hotspot.h"

using OHOS::Wifi::WifiHotspot;
using OHOS::Wifi::ErrCode;
using OHOS::Wifi::WIFI_OPT_SUCCESS;
using OHOS::Wifi::ServiceType;
using OHOS::Wifi::HotspotConfig;
using OHOS::Wifi::StationInfo;
using OHOS::Wifi::BandType;
using OHOS::Wifi::PowerModel;
using OHOS::Wifi::HotspotMode;

static std::shared_ptr<WifiHotspot> g_wifiHotspot =
    WifiHotspot::GetInstance(WIFI_HOTSPOT_ABILITY_ID, HOTSPOT_INSTANCE_ID);

/** Dump HotspotConfig to stdout. */
static void DumpHotspotConfig(const HotspotConfig& config)
{
    Logd("ssid: %s, band: %d, channel: %d",
         config.GetSsid().c_str(), static_cast<int>(config.GetBand()), config.GetChannel());
}

/** Dump StationInfo to stdout. */
static void DumpStationInfo(const StationInfo& info)
{
    Logd("bssid: %s, ipAddr: %s, deviceName: %s",
         info.bssid.c_str(), info.ipAddr.c_str(), info.deviceName.c_str());
}

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
 * Enable hotspot. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHotspotEnable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->EnableHotspot(ServiceType::DEFAULT);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hotspotenable success");
    } else {
        Logd("hotspotenable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Disable hotspot. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHotspotDisable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->DisableHotspot(ServiceType::DEFAULT);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hotspotdisable success");
    } else {
        Logd("hotspotdisable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get hotspot status and state. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleHotspotGetStatus(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    bool isActive = false;
    ErrCode ret = g_wifiHotspot->IsHotspotActive(isActive);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("IsHotspotActive failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("hotspot is %s", isActive ? "active" : "inactive");
    int state = 0;
    ret = g_wifiHotspot->GetHotspotState(state);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("hotspot state: %d", state);
    }
}

/**
 * Get hotspot config; dump via DumpHotspotConfig. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetHotspotConfig(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    HotspotConfig config;
    ErrCode ret = g_wifiHotspot->GetHotspotConfig(config);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("gethotspotconfig failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpHotspotConfig(config);
}

/**
 * Set hotspot config. Args: ssid=xxx [password=xxx].
 * @param argc Argument count.
 * @param argv ssid=, password=.
 * @return void
 */
void HandleSetHotspotConfig(int argc, const char* argv[])
{
    std::string ssid;
    if (!ParseStrArg(argc, argv, "ssid=", ssid)) {
        Logd("usage: sethotspotconfig ssid=xxx [password=xxx]");
        return;
    }
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    HotspotConfig config;
    config.SetSsid(ssid);
    std::string pwd;
    if (ParseStrArg(argc, argv, "password=", pwd)) {
        config.SetPreSharedKey(pwd);
    }
    ErrCode ret = g_wifiHotspot->SetHotspotConfig(config);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("sethotspotconfig success");
    } else {
        Logd("sethotspotconfig failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get station list; dump each via DumpStationInfo. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetStationList(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    std::vector<StationInfo> result;
    ErrCode ret = g_wifiHotspot->GetStationList(result);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getstationlist failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("station count: %zu", result.size());
    for (size_t i = 0; i < result.size(); i++) {
        DumpStationInfo(result[i]);
    }
}

/**
 * Disassociate STA. Args: mac=xx:xx:xx:xx:xx:xx.
 * @param argc Argument count.
 * @param argv mac=.
 * @return void
 */
void HandleDisassociateSta(int argc, const char* argv[])
{
    std::string mac;
    if (!ParseStrArg(argc, argv, "mac=", mac)) {
        Logd("usage: disassociatesta mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    StationInfo info;
    info.bssid = mac;
    ErrCode ret = g_wifiHotspot->DisassociateSta(info);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("disassociatesta success");
    } else {
        Logd("disassociatesta failed, err: %d", static_cast<int>(ret));
    }
}

void HandleGetBlockLists(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    std::vector<StationInfo> result;
    ErrCode ret = g_wifiHotspot->GetBlockLists(result);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getblocklists failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("blocklist count: %zu", result.size());
    for (size_t i = 0; i < result.size(); i++) {
        DumpStationInfo(result[i]);
    }
}

/**
 * Add MAC to block list. Args: mac=xx:xx:xx:xx:xx:xx.
 * @param argc Argument count.
 * @param argv mac=.
 * @return void
 */
void HandleAddBlockList(int argc, const char* argv[])
{
    std::string mac;
    if (!ParseStrArg(argc, argv, "mac=", mac)) {
        Logd("usage: addblocklist mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    StationInfo info;
    info.bssid = mac;
    ErrCode ret = g_wifiHotspot->AddBlockList(info);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("addblocklist success");
    } else {
        Logd("addblocklist failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Remove MAC from block list. Args: mac=xx:xx:xx:xx:xx:xx.
 * @param argc Argument count.
 * @param argv mac=.
 * @return void
 */
void HandleDelBlockList(int argc, const char* argv[])
{
    std::string mac;
    if (!ParseStrArg(argc, argv, "mac=", mac)) {
        Logd("usage: delblocklist mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    StationInfo info;
    info.bssid = mac;
    ErrCode ret = g_wifiHotspot->DelBlockList(info);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("delblocklist success");
    } else {
        Logd("delblocklist failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get valid bands. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetValidBands(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    std::vector<BandType> bands;
    ErrCode ret = g_wifiHotspot->GetValidBands(bands);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getvalidbands failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("valid bands count: %zu", bands.size());
    for (size_t i = 0; i < bands.size(); i++) {
        Logd("[%zu] band: %d", i, static_cast<int>(bands[i]));
    }
}

/**
 * Get valid channels. Optional: band=1|2 (1:2.4G 2:5G).
 * @param argc Argument count.
 * @param argv band=.
 * @return void
 */
void HandleGetValidChannels(int argc, const char* argv[])
{
    int band = DEFAULT_BAND_VALID_CHANNELS;
    ParseIntArg(argc, argv, "band=", band);
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    std::vector<int32_t> channels;
    ErrCode ret = g_wifiHotspot->GetValidChannels(static_cast<BandType>(band), channels);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getvalidchannels failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("valid channels count: %zu", channels.size());
    for (size_t i = 0; i < channels.size(); i++) {
        Logd("[%zu] %d", i, channels[i]);
    }
}

/**
 * Get power model. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetPowerModel(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    PowerModel model = PowerModel::GENERAL;
    ErrCode ret = g_wifiHotspot->GetPowerModel(model);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getpowermodel failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("power model: %d", static_cast<int>(model));
}

/**
 * Set power model. Args: model=0|1|2 (e.g. SLEEP/GENERAL/THROUGH_WALL).
 * @param argc Argument count.
 * @param argv model=.
 * @return void
 */
void HandleSetPowerModel(int argc, const char* argv[])
{
    int model = DEFAULT_POWER_MODEL;
    ParseIntArg(argc, argv, "model=", model);
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->SetPowerModel(static_cast<PowerModel>(model));
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("setpowermodel success");
    } else {
        Logd("setpowermodel failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get AP interface name. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetApIfaceName(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    std::string ifaceName;
    ErrCode ret = g_wifiHotspot->GetApIfaceName(ifaceName);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getapifacename failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("ap iface name: %s", ifaceName.c_str());
}

/**
 * Set hotspot idle timeout. Args: time=seconds.
 * @param argc Argument count.
 * @param argv time=.
 * @return void
 */
void HandleSetHotspotIdleTimeout(int argc, const char* argv[])
{
    int timeSec = 0;
    if (!ParseIntArg(argc, argv, "time=", timeSec)) {
        Logd("usage: sethotspotidletimeout time=seconds");
        return;
    }
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->SetHotspotIdleTimeout(timeSec);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("sethotspotidletimeout success");
    } else {
        Logd("sethotspotidletimeout failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Check if dual-band hotspot supported. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleIsHotspotDualBandSupported(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    bool supported = false;
    ErrCode ret = g_wifiHotspot->IsHotspotDualBandSupported(supported);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("ishotspotdualbandsupported failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("hotspot dual band supported: %s", supported ? "yes" : "no");
}

/**
 * Check if open soft AP allowed. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleIsOpenSoftApAllowed(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    bool allowed = false;
    ErrCode ret = g_wifiHotspot->IsOpenSoftApAllowed(allowed);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("isopensoftapallowed failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("open softap allowed: %s", allowed ? "yes" : "no");
}

/**
 * Enable local-only hotspot. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleEnableLocalOnlyHotspot(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->EnableLocalOnlyHotspot(ServiceType::DEFAULT);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("enablelocalonlyhotspot success");
    } else {
        Logd("enablelocalonlyhotspot failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Disable local-only hotspot. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleDisableLocalOnlyHotspot(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    ErrCode ret = g_wifiHotspot->DisableLocalOnlyHotspot(ServiceType::DEFAULT);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("disablelocalonlyhotspot success");
    } else {
        Logd("disablelocalonlyhotspot failed, err: %d", static_cast<int>(ret));
    }
}

void HandleGetHotspotMode(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    HotspotMode mode = HotspotMode::NONE;
    ErrCode ret = g_wifiHotspot->GetHotspotMode(mode);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("gethotspotmode failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("hotspot mode: %d", static_cast<int>(mode));
}

/**
 * Get local-only hotspot config; dump via DumpHotspotConfig. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetLocalOnlyHotspotConfig(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiHotspot == nullptr) {
        Logd("WifiHotspot instance is null");
        return;
    }
    HotspotConfig config;
    ErrCode ret = g_wifiHotspot->GetLocalOnlyHotspotConfig(config);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getlocalonlyhotspotconfig failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpHotspotConfig(config);
}
