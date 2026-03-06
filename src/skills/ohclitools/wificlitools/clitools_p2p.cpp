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
 * @file clitools_p2p.cpp
 * @brief P2P CLI handlers (wifi_p2p.h). Calls wifi_sdk APIs.
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstring>
#include <string>
#include <vector>

#include "define.h"
#include "wifi_p2p.h"

using OHOS::Wifi::WifiP2p;
using OHOS::Wifi::ErrCode;
using OHOS::Wifi::WIFI_OPT_SUCCESS;
using OHOS::Wifi::WifiP2pConfig;
using OHOS::Wifi::WifiP2pDevice;
using OHOS::Wifi::WifiP2pGroupInfo;
using OHOS::Wifi::WifiP2pLinkedInfo;
using OHOS::Wifi::WifiP2pServiceInfo;

static std::shared_ptr<WifiP2p> g_wifiP2p =
    WifiP2p::GetInstance(WIFI_P2P_ABILITY_ID);

/** Dump WifiP2pLinkedInfo to stdout. */
static void DumpP2pLinkedInfo(const WifiP2pLinkedInfo& info)
{
    Logd("connectState: %d, isGroupOwner: %d",
         static_cast<int>(info.GetConnectState()), info.IsGroupOwner() ? 1 : 0);
}

/** Dump WifiP2pGroupInfo (owner address) to stdout. */
static void DumpP2pGroupInfo(const WifiP2pGroupInfo& group)
{
    Logd("group owner: %s", group.GetOwner().GetDeviceAddress().c_str());
}

/** Dump WifiP2pDevice to stdout. */
static void DumpP2pDevice(const WifiP2pDevice& device)
{
    Logd("deviceName: %s, deviceAddress: %s",
         device.GetDeviceName().c_str(), device.GetDeviceAddress().c_str());
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
 * Enable P2P. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleP2pEnable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->EnableP2p();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2penable success");
    } else {
        Logd("p2penable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Disable P2P. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleP2pDisable(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->DisableP2p();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2pdisable success");
    } else {
        Logd("p2pdisable failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Start P2P discover. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleP2pDiscover(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->DiscoverDevices();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2pdiscover success");
    } else {
        Logd("p2pdiscover failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Stop P2P discover. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleP2pStopDiscover(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->StopDiscoverDevices();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2pstopdiscover success");
    } else {
        Logd("p2pstopdiscover failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Discover P2P services. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleDiscoverServices(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->DiscoverServices();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("discoverservices success");
    } else {
        Logd("discoverservices failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Stop discover services. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleStopDiscoverServices(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->StopDiscoverServices();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("stopdiscoverservices success");
    } else {
        Logd("stopdiscoverservices failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Create P2P group. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleCreateGroup(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    WifiP2pConfig config;
    ErrCode ret = g_wifiP2p->CreateGroup(config);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("creategroup success");
    } else {
        Logd("creategroup failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Remove P2P group. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleRemoveGroup(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->RemoveGroup();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("removegroup success");
    } else {
        Logd("removegroup failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * P2P connect. Args: device=xx:xx:xx:xx:xx:xx.
 * @param argc Argument count.
 * @param argv device=.
 * @return void
 */
void HandleP2pConnect(int argc, const char* argv[])
{
    std::string addr;
    if (!ParseStrArg(argc, argv, "device=", addr)) {
        Logd("usage: p2pconnect device=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    WifiP2pConfig config;
    config.SetDeviceAddress(addr);
    ErrCode ret = g_wifiP2p->P2pConnect(config);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2pconnect success");
    } else {
        Logd("p2pconnect failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Cancel P2P connect. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleP2pCancelConnect(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->P2pCancelConnect();
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("p2pcancelconnect success");
    } else {
        Logd("p2pcancelconnect failed, err: %d", static_cast<int>(ret));
    }
}

/**
 * Query P2P linked info; dump via DumpP2pLinkedInfo. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleQueryP2pLinkedInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    WifiP2pLinkedInfo info;
    ErrCode ret = g_wifiP2p->QueryP2pLinkedInfo(info);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("queryp2plinkedinfo failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpP2pLinkedInfo(info);
}

/**
 * Get current P2P group; dump via DumpP2pGroupInfo. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetCurrentGroup(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    WifiP2pGroupInfo group;
    ErrCode ret = g_wifiP2p->GetCurrentGroup(group);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getcurrentgroup failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpP2pGroupInfo(group);
}

/**
 * Get P2P enable status. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetP2pEnableStatus(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    int status = 0;
    ErrCode ret = g_wifiP2p->GetP2pEnableStatus(status);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getp2penablestatus failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p enable status: %d", status);
}

/**
 * Get P2P discover status. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetP2pDiscoverStatus(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    int status = 0;
    ErrCode ret = g_wifiP2p->GetP2pDiscoverStatus(status);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getp2pdiscoverstatus failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p discover status: %d", status);
}

/**
 * Get P2P connected status. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleGetP2pConnectedStatus(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    int status = 0;
    ErrCode ret = g_wifiP2p->GetP2pConnectedStatus(status);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("getp2pconnectedstatus failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p connected status: %d", status);
}

/**
 * Query P2P local device; dump via DumpP2pDevice. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleQueryP2pLocalDevice(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    WifiP2pDevice device;
    ErrCode ret = g_wifiP2p->QueryP2pLocalDevice(device);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("queryp2plocaldevice failed, err: %d", static_cast<int>(ret));
        return;
    }
    DumpP2pDevice(device);
}

/**
 * Query P2P devices; dump each via DumpP2pDevice. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleQueryP2pDevices(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    std::vector<WifiP2pDevice> devices;
    ErrCode ret = g_wifiP2p->QueryP2pDevices(devices);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("queryp2pdevices failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p devices count: %zu", devices.size());
    for (size_t i = 0; i < devices.size(); i++) {
        DumpP2pDevice(devices[i]);
    }
}

/**
 * Query P2P groups. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleQueryP2pGroups(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    std::vector<WifiP2pGroupInfo> groups;
    ErrCode ret = g_wifiP2p->QueryP2pGroups(groups);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("queryp2pgroups failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p groups count: %zu", groups.size());
}

/**
 * Query P2P services. No args.
 * @param argc Argument count.
 * @param argv Arguments (unused).
 * @return void
 */
void HandleQueryP2pServices(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    std::vector<WifiP2pServiceInfo> services;
    ErrCode ret = g_wifiP2p->QueryP2pServices(services);
    if (ret != WIFI_OPT_SUCCESS) {
        Logd("queryp2pservices failed, err: %d", static_cast<int>(ret));
        return;
    }
    Logd("p2p services count: %zu", services.size());
}

/**
 * Set P2P device name. Args: name=xxx.
 * @param argc Argument count.
 * @param argv name=.
 * @return void
 */
void HandleSetP2pDeviceName(int argc, const char* argv[])
{
    std::string name;
    if (!ParseStrArg(argc, argv, "name=", name)) {
        Logd("usage: setp2pdevicename name=xxx");
        return;
    }
    if (g_wifiP2p == nullptr) {
        Logd("WifiP2p instance is null");
        return;
    }
    ErrCode ret = g_wifiP2p->SetP2pDeviceName(name);
    if (ret == WIFI_OPT_SUCCESS) {
        Logd("setp2pdevicename success");
    } else {
        Logd("setp2pdevicename failed, err: %d", static_cast<int>(ret));
    }
}
