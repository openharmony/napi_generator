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
 * @file clitools_sta.cpp
 * @brief STA CLI handlers (wifi_device.h, wifi_scan.h). Calls wifi_sdk APIs.
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstdlib>
#include <cstring>
#include <sstream>
#include <string>
#include <vector>

#include "define.h"
#include "wifi_device.h"
#include "wifi_scan.h"

using OHOS::Wifi::WifiDevice;
using OHOS::Wifi::WifiScan;
using OHOS::Wifi::ErrCode;
using OHOS::Wifi::WIFI_OPT_SUCCESS;
using OHOS::Wifi::WifiLinkedInfo;
using OHOS::Wifi::WifiScanInfo;
using OHOS::Wifi::WifiDeviceConfig;
using OHOS::Wifi::KEY_MGMT_NONE;
using OHOS::Wifi::KEY_MGMT_WPA_PSK;
using OHOS::Wifi::DisconnectedReason;
using OHOS::Wifi::IpInfo;

static std::shared_ptr<WifiDevice> g_wifiDevice =
    WifiDevice::GetInstance(WIFI_DEVICE_ABILITY_ID);
static std::shared_ptr<WifiScan> g_wifiScan =
    WifiScan::GetInstance(WIFI_SCAN_ABILITY_ID);

/** Dump WifiLinkedInfo to stdout (all fields). */
static void DumpLinkedInfo(const WifiLinkedInfo& info)
{
    Logd("ssid: %s, bssid: %s, rssi: %d, connState: %d, ipAddress: %u",
         info.ssid.c_str(), info.bssid.c_str(), info.rssi,
         static_cast<int>(info.connState), info.ipAddress);
}

/** Dump vector of WifiScanInfo to stdout. */
static void DumpScanList(const std::vector<WifiScanInfo>& list)
{
    Logd("scan list size: %zu", list.size());
    for (size_t i = 0; i < list.size(); i++) {
        Logd("[%zu] ssid: %s, bssid: %s, rssi: %d, frequency: %d",
             i, list[i].ssid.c_str(), list[i].bssid.c_str(),
             list[i].rssi, list[i].frequency);
    }
}

/** Dump WifiDeviceConfig to stdout. */
static void DumpWifiDeviceConfig(const WifiDeviceConfig& config)
{
    Logd("networkId: %d, ssid: %s, keyMgmt: %s",
         config.networkId, config.ssid.c_str(), config.keyMgmt.c_str());
}

/** Dump IpInfo to stdout (all fields). */
static void DumpIpInfo(const IpInfo& info)
{
    Logd("ipAddress: %u, gateway: %u, netmask: %u, primaryDns: %u, secondDns: %u",
         info.ipAddress, info.gateway, info.netmask, info.primaryDns, info.secondDns);
}

/** Dump DisconnectedReason enum value to stdout. */
static void DumpDisconnectedReason(DisconnectedReason reason)
{
    Logd("disconnect reason: %d", static_cast<int>(reason));
}

/**
 * Parse ssid= and password= from argv.
 * @param argc Argument count.
 * @param argv Arguments (argv[0] is command name).
 * @param ssid Out: parsed ssid.
 * @param password Out: parsed password.
 * @return true if ssid is non-empty.
 */
static bool ParseConnectArgs(int argc, const char* argv[],
    std::string& ssid, std::string& password)
{
    ssid.clear();
    password.clear();
    for (int i = ARG_IDX_FIRST; i < argc; i++) {
        if (strncmp(argv[i], "ssid=", PREFIX_LEN_SSID) == 0) {
            ssid = argv[i] + PREFIX_LEN_SSID;
        } else if (strncmp(argv[i], "password=", PREFIX_LEN_PASSWORD) == 0) {
            password = argv[i] + PREFIX_LEN_PASSWORD;
        }
    }
    return !ssid.empty();
}

/**
 * Turn on Wi-Fi. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiEnable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->EnableWifi();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("wifienable success");
    } else {
        Logd("wifienable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Disable Wi-Fi. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiDisable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->DisableWifi();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("wifidisable success");
    } else {
        Logd("wifidisable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get Wi-Fi status and linked info; dump via DumpLinkedInfo if connected.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiGetStatus(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    bool active = false;
    ErrCode ret = g_wifiDevice->IsWifiActive(active);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("IsWifiActive failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("wifi is %s", active ? "enabled" : "disabled");
    if (!active) {
        return;
    }
    bool connected = false;
    ret = g_wifiDevice->IsConnected(connected);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("IsConnected failed");
        return;
    }
    Logd("wifi is %s", connected ? "connected" : "disconnected");
    if (!connected) {
        return;
    }
    WifiLinkedInfo info;
    ret = g_wifiDevice->GetLinkedInfo(info);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("GetLinkedInfo failed");
        return;
    }
    DumpLinkedInfo(info);
}

/**
 * Start Wi-Fi scan. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiScan(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    ErrCode ret = g_wifiScan->Scan(true);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("wifiscan success");
    } else {
        Logd("wifiscan failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Scan stop (current API may not support). No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiScanStop(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    Logd("wifiscanstop: scan stop not supported by current API");
}

/**
 * Get scan result list; dump via DumpScanList.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiGetScanList(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    std::vector<WifiScanInfo> result;
    ErrCode ret = g_wifiScan->GetScanInfoList(result, true);
    if (ret == WIFI_OPT_SUCCESS) {
        DumpScanList(result);
    } else {
        Logd("wifigetscanlist failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Advance scan with params. No args (uses default WifiScanParams).
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleAdvanceScan(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    OHOS::Wifi::WifiScanParams params;
    ErrCode ret = g_wifiScan->AdvanceScan(params);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("advancescan success");
    } else {
        Logd("advancescan failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Set scan-only-available. Optional argv[1]: true|false|0.
 * @param argc Argument count.
 * @param argv [true|false|0].
 * @return void
 */
void HandleSetScanOnlyAvailable(int argc, const char* argv[])
{
    bool val = true;
    if (argc >= MIN_ARGC_WITH_CMD) {
        const char* firstArg = argv[ARG_IDX_FIRST];
        val = (strcmp(firstArg, "false") != 0 && strcmp(firstArg, "0") != 0);
    }
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    ErrCode ret = g_wifiScan->SetScanOnlyAvailable(val);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("setscanonlyavailable success");
    } else {
        Logd("setscanonlyavailable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get scan-only-available flag. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetScanOnlyAvailable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    bool val = false;
    ErrCode ret = g_wifiScan->GetScanOnlyAvailable(val);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getscanonlyavailable failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("scan only available: %s", val ? "true" : "false");
}

/**
 * Start/stop PNO scan. Optional: [start|stop] [periodMs] [suspendReason].
 * @param argc Argument count.
 * @param argv Optional args.
 * @return void
 */
void HandleStartPnoScan(int argc, const char* argv[])
{
    bool isStart = true;
    int periodMs = DEFAULT_PNO_PERIOD_MS;
    int suspendReason = DEFAULT_SUSPEND_REASON;
    if (argc >= MIN_ARGC_WITH_CMD) {
        isStart = (strcmp(argv[ARG_IDX_FIRST], "stop") != 0
            && strcmp(argv[ARG_IDX_FIRST], "0") != 0);
    }
    if (argc >= 3) {
        periodMs = atoi(argv[2]);
    }
    if (argc >= 4) {
        suspendReason = atoi(argv[3]);
    }
    if (g_wifiScan == nullptr) {
        Logd("WifiScan instance is null");
        return;
    }
    ErrCode ret = g_wifiScan->StartWifiPnoScan(isStart, periodMs, suspendReason);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("startpnoscan success");
    } else {
        Logd("startpnoscan failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Connect to AP. Args: ssid=xxx [password=xxx].
 * @param argc Argument count.
 * @param argv ssid=, password=.
 * @return void
 */
void HandleWifiConnect(int argc, const char* argv[])
{
    std::string ssid, password;
    if (!ParseConnectArgs(argc, argv, ssid, password)) {
        Logd("usage: wificonnect ssid=xxx [password=xxx]");
        return;
    }
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    WifiDeviceConfig config;
    config.ssid = ssid;
    config.preSharedKey = password;
    config.keyMgmt = password.empty() ? KEY_MGMT_NONE : KEY_MGMT_WPA_PSK;
    if (!password.empty()
        && password.length() < static_cast<size_t>(MIN_WPA_PASSWORD_LEN)) {
        Logd("password length should be >= %d", MIN_WPA_PASSWORD_LEN);
        return;
    }
    ErrCode ret = g_wifiDevice->ConnectToDevice(config);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("wificonnect success");
    } else {
        Logd("wificonnect failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Disconnect current Wi-Fi. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiDisconnect(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->Disconnect();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("wifidisconnect success");
    } else {
        Logd("wifidisconnect failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get current RSSI. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiGetSignal(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    WifiLinkedInfo info;
    ErrCode ret = g_wifiDevice->GetLinkedInfo(info);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("GetLinkedInfo failed");
        return;
    }
    Logd("rssi: %d", info.rssi);
}

/**
 * Get connection info; dump via DumpLinkedInfo.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleWifiGetConnInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    WifiLinkedInfo info;
    ErrCode ret = g_wifiDevice->GetLinkedInfo(info);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("GetLinkedInfo failed");
        return;
    }
    DumpLinkedInfo(info);
}

/**
 * Parse int value from first argv[i] that starts with prefix (e.g. networkId=1).
 * @param argc Argument count.
 * @param argv Arguments.
 * @param prefix Prefix string (e.g. "networkId=").
 * @param out Out: parsed value.
 * @return true if found and parsed.
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
 * Parse string value from first argv[i] that starts with prefix.
 * @param argc Argument count.
 * @param argv Arguments.
 * @param prefix Prefix string.
 * @param out Out: parsed string.
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
 * Get all device configs; dump each via DumpWifiDeviceConfig.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetDeviceConfigs(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    std::vector<WifiDeviceConfig> result;
    ErrCode ret = g_wifiDevice->GetDeviceConfigs(result, false);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getdeviceconfigs failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("device configs count: %zu", result.size());
    for (size_t i = 0; i < result.size(); i++) {
        DumpWifiDeviceConfig(result[i]);
    }
}

/**
 * Add device config. Args: ssid=xxx [password=xxx].
 * @param argc Argument count.
 * @param argv ssid=, password=.
 * @return void
 */
void HandleAddDeviceConfig(int argc, const char* argv[])
{
    std::string ssid, password;
    if (!ParseConnectArgs(argc, argv, ssid, password)) {
        Logd("usage: adddeviceconfig ssid=xxx [password=xxx]");
        return;
    }
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    WifiDeviceConfig config;
    config.ssid = ssid;
    config.preSharedKey = password;
    config.keyMgmt = password.empty() ? KEY_MGMT_NONE : KEY_MGMT_WPA_PSK;
    int networkId = INVALID_NETWORK_ID;
    ErrCode ret = g_wifiDevice->AddDeviceConfig(config, networkId, false);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("adddeviceconfig success, networkId: %d", networkId);
    } else {
        Logd("adddeviceconfig failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Remove device config. Args: networkId=xxx.
 * @param argc Argument count.
 * @param argv networkId=.
 * @return void
 */
void HandleRemoveDevice(int argc, const char* argv[])
{
    int networkId = INVALID_NETWORK_ID;
    if (!ParseIntArg(argc, argv, "networkId=", networkId)) {
        Logd("usage: removedevice networkId=<int>");
        return;
    }
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->RemoveDevice(networkId);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("removedevice success");
    } else {
        Logd("removedevice failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Remove all device configs. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleRemoveAllDevice(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->RemoveAllDevice();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("removealldevice success");
    } else {
        Logd("removealldevice failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get one device config. Args: networkId=xxx.
 * @param argc Argument count.
 * @param argv networkId=.
 * @return void
 */
void HandleGetDeviceConfig(int argc, const char* argv[])
{
    int networkId = INVALID_NETWORK_ID;
    if (!ParseIntArg(argc, argv, "networkId=", networkId)) {
        Logd("usage: getdeviceconfig networkId=<int>");
        return;
    }
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    WifiDeviceConfig config;
    ErrCode ret = g_wifiDevice->GetDeviceConfig(networkId, config);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getdeviceconfig failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpWifiDeviceConfig(config);
}

/**
 * Get country code. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetCountryCode(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    std::string code;
    ErrCode ret = g_wifiDevice->GetCountryCode(code);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getcountrycode failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("country code: %s", code.c_str());
}

/**
 * Set country code. Args: code=XX.
 * @param argc Argument count.
 * @param argv code=.
 * @return void
 */
void HandleSetCountryCode(int argc, const char* argv[])
{
    std::string code;
    if (!ParseStrArg(argc, argv, "code=", code)) {
        Logd("usage: setcountrycode code=<string e.g. 86>");
        return;
    }
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->SetCountryCode(code);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("setcountrycode success");
    } else {
        Logd("setcountrycode failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Reconnect to previous AP. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleReconnect(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    ErrCode ret = g_wifiDevice->ReConnect();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("reconnect success");
    } else {
        Logd("reconnect failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Get device MAC address. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetDeviceMac(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    std::string mac;
    ErrCode ret = g_wifiDevice->GetDeviceMacAddress(mac);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getdevicemac failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("device mac: %s", mac.c_str());
}

/**
 * Get disconnect reason; dump via DumpDisconnectedReason.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetDisconnectReason(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    DisconnectedReason reason = DisconnectedReason::DISC_REASON_DEFAULT;
    ErrCode ret = g_wifiDevice->GetDisconnectedReason(reason);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getdisconnectreason failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpDisconnectedReason(reason);
}

/**
 * Get IP info; dump via DumpIpInfo.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetIpInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    IpInfo info;
    ErrCode ret = g_wifiDevice->GetIpInfo(info);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getipinfo failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpIpInfo(info);
}

/**
 * Get Wi-Fi state (int). No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetWifiState(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiDevice == nullptr) {
        Logd("WifiDevice instance is null");
        return;
    }
    int state = 0;
    ErrCode ret = g_wifiDevice->GetWifiState(state);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getwifistate failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("wifi state: %d", state);
}
