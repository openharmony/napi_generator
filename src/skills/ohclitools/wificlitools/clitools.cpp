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
 * @file clitools.cpp
 * @brief Main entry and command table. Grouping follows DESIGN.md (STA / Hotspot / P2P).
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstdlib>

// Command table: STA (wifi_device.h, wifi_scan.h) -> clitools_sta
//               Hotspot (wifi_hotspot.h) -> clitools_hotspot
//               P2P (wifi_p2p.h) -> clitools_p2p
//               Hid2d (wifi_hid2d.h) -> clitools_hid2d
/* Usage: part1 = interface function and params; part2 = " ex: wificommand ..." */
static const StaCliCmd g_staCliCmds[] = {
    // STA (wifi_device.h, wifi_scan.h)
    {"wifienable", HandleWifiEnable, "Enable Wi-Fi. No args. ex: wificommand wifienable"},
    {"wifidisable", HandleWifiDisable, "Disable Wi-Fi. No args. ex: wificommand wifidisable"},
    {"wifigetstatus", HandleWifiGetStatus,
     "Get Wi-Fi status and link info. No args. ex: wificommand wifigetstatus"},
    {"wifiscan", HandleWifiScan, "Start scan. No args. ex: wificommand wifiscan"},
    {"wifiscanstop", HandleWifiScanStop, "Stop scan (if supported). No args. ex: wificommand wifiscanstop"},
    {"wifigetscanlist", HandleWifiGetScanList,
     "Get scan result list. No args. ex: wificommand wifigetscanlist"},
    {"advancescan", HandleAdvanceScan, "Advance scan with params. No args. ex: wificommand advancescan"},
    {"setscanonlyavailable", HandleSetScanOnlyAvailable,
     "Set scan-only-available. [true|false] string. ex: wificommand setscanonlyavailable true"},
    {"getscanonlyavailable", HandleGetScanOnlyAvailable,
     "Get scan-only-available. No args. ex: wificommand getscanonlyavailable"},
    {"startpnoscan", HandleStartPnoScan,
     "Start/stop PNO scan. [start|stop] string, [periodMs] int, [suspendReason] int. "
     "ex: wificommand startpnoscan start"},
    {"wificonnect", HandleWifiConnect,
     "Connect AP. ssid= string, [password= string]. ex: wificommand wificonnect ssid=MyAP password=xxx"},
    {"wifidisconnect", HandleWifiDisconnect, "Disconnect. No args. ex: wificommand wifidisconnect"},
    {"wifigetsignal", HandleWifiGetSignal, "Get RSSI. No args. ex: wificommand wifigetsignal"},
    {"wifigetconninfo", HandleWifiGetConnInfo,
     "Get connection info. No args. ex: wificommand wifigetconninfo"},
    {"getdeviceconfigs", HandleGetDeviceConfigs,
     "Get all saved configs. No args. ex: wificommand getdeviceconfigs"},
    {"adddeviceconfig", HandleAddDeviceConfig,
     "Add config. ssid= string, [password= string]. ex: wificommand adddeviceconfig ssid=MyAP password=xxx"},
    {"removedevice", HandleRemoveDevice,
     "Remove config. networkId= int. ex: wificommand removedevice networkId=0"},
    {"removealldevice", HandleRemoveAllDevice,
     "Remove all configs. No args. ex: wificommand removealldevice"},
    {"getdeviceconfig", HandleGetDeviceConfig,
     "Get one config. networkId= int. ex: wificommand getdeviceconfig networkId=0"},
    {"getcountrycode", HandleGetCountryCode,
     "Get country code. No args. ex: wificommand getcountrycode"},
    {"setcountrycode", HandleSetCountryCode,
     "Set country code. code= string (e.g. 86). ex: wificommand setcountrycode code=86"},
    {"reconnect", HandleReconnect, "Reconnect. No args. ex: wificommand reconnect"},
    {"getdevicemac", HandleGetDeviceMac, "Get device MAC. No args. ex: wificommand getdevicemac"},
    {"getdisconnectreason", HandleGetDisconnectReason,
     "Get disconnect reason. No args. ex: wificommand getdisconnectreason"},
    {"getipinfo", HandleGetIpInfo, "Get IP info. No args. ex: wificommand getipinfo"},
    {"getwifistate", HandleGetWifiState, "Get Wi-Fi state. No args. ex: wificommand getwifistate"},

    // Hotspot (wifi_hotspot.h)
    {"hotspotenable", HandleHotspotEnable,
     "Enable hotspot. No args. ex: wificommand hotspotenable"},
    {"hotspotdisable", HandleHotspotDisable,
     "Disable hotspot. No args. ex: wificommand hotspotdisable"},
    {"hotspotgetstatus", HandleHotspotGetStatus,
     "Get hotspot status. No args. ex: wificommand hotspotgetstatus"},
    {"gethotspotconfig", HandleGetHotspotConfig,
     "Get hotspot config. No args. ex: wificommand gethotspotconfig"},
    {"sethotspotconfig", HandleSetHotspotConfig,
     "Set hotspot config. ssid= string, [password= string]. ex: wificommand sethotspotconfig ssid=MyAP"},
    {"getstationlist", HandleGetStationList,
     "Get station list. No args. ex: wificommand getstationlist"},
    {"disassociatesta", HandleDisassociateSta,
     "Disassociate STA. mac= string (MAC). ex: wificommand disassociatesta mac=aa:bb:cc:dd:ee:ff"},
    {"getblocklists", HandleGetBlockLists,
     "Get block list. No args. ex: wificommand getblocklists"},
    {"addblocklist", HandleAddBlockList,
     "Add to block list. mac= string (MAC). ex: wificommand addblocklist mac=aa:bb:cc:dd:ee:ff"},
    {"delblocklist", HandleDelBlockList,
     "Remove from block list. mac= string (MAC). ex: wificommand delblocklist mac=aa:bb:cc:dd:ee:ff"},
    {"getvalidbands", HandleGetValidBands,
     "Get valid bands. No args. ex: wificommand getvalidbands"},
    {"getvalidchannels", HandleGetValidChannels,
     "Get valid channels. [band= int 1|2]. ex: wificommand getvalidchannels band=1"},
    {"getpowermodel", HandleGetPowerModel,
     "Get power model. No args. ex: wificommand getpowermodel"},
    {"setpowermodel", HandleSetPowerModel,
     "Set power model. model= int (0|1|2). ex: wificommand setpowermodel model=1"},
    {"getapifacename", HandleGetApIfaceName,
     "Get AP interface name. No args. ex: wificommand getapifacename"},
    {"sethotspotidletimeout", HandleSetHotspotIdleTimeout,
     "Set idle timeout. time= int, seconds. ex: wificommand sethotspotidletimeout time=300"},
    {"ishotspotdualbandsupported", HandleIsHotspotDualBandSupported,
     "Check dual-band support. No args. ex: wificommand ishotspotdualbandsupported"},
    {"isopensoftapallowed", HandleIsOpenSoftApAllowed,
     "Check open soft AP allowed. No args. ex: wificommand isopensoftapallowed"},
    {"enablelocalonlyhotspot", HandleEnableLocalOnlyHotspot,
     "Enable local-only hotspot. No args. ex: wificommand enablelocalonlyhotspot"},
    {"disablelocalonlyhotspot", HandleDisableLocalOnlyHotspot,
     "Disable local-only hotspot. No args. ex: wificommand disablelocalonlyhotspot"},
    {"gethotspotmode", HandleGetHotspotMode,
     "Get hotspot mode. No args. ex: wificommand gethotspotmode"},
    {"getlocalonlyhotspotconfig", HandleGetLocalOnlyHotspotConfig,
     "Get local-only hotspot config. No args. ex: wificommand getlocalonlyhotspotconfig"},

    // P2P (wifi_p2p.h)
    {"p2penable", HandleP2pEnable, "Enable P2P. No args. ex: wificommand p2penable"},
    {"p2pdisable", HandleP2pDisable, "Disable P2P. No args. ex: wificommand p2pdisable"},
    {"p2pdiscover", HandleP2pDiscover, "Start P2P discover. No args. ex: wificommand p2pdiscover"},
    {"p2pstopdiscover", HandleP2pStopDiscover,
     "Stop P2P discover. No args. ex: wificommand p2pstopdiscover"},
    {"discoverservices", HandleDiscoverServices,
     "Discover P2P services. No args. ex: wificommand discoverservices"},
    {"stopdiscoverservices", HandleStopDiscoverServices,
     "Stop discover services. No args. ex: wificommand stopdiscoverservices"},
    {"creategroup", HandleCreateGroup, "Create P2P group. No args. ex: wificommand creategroup"},
    {"removegroup", HandleRemoveGroup, "Remove P2P group. No args. ex: wificommand removegroup"},
    {"p2pconnect", HandleP2pConnect,
     "P2P connect. device= string (MAC). ex: wificommand p2pconnect device=aa:bb:cc:dd:ee:ff"},
    {"p2pcancelconnect", HandleP2pCancelConnect,
     "Cancel P2P connect. No args. ex: wificommand p2pcancelconnect"},
    {"queryp2plinkedinfo", HandleQueryP2pLinkedInfo,
     "Query P2P link info. No args. ex: wificommand queryp2plinkedinfo"},
    {"getcurrentgroup", HandleGetCurrentGroup,
     "Get current P2P group. No args. ex: wificommand getcurrentgroup"},
    {"getp2penablestatus", HandleGetP2pEnableStatus,
     "Get P2P enable status. No args. ex: wificommand getp2penablestatus"},
    {"getp2pdiscoverstatus", HandleGetP2pDiscoverStatus,
     "Get P2P discover status. No args. ex: wificommand getp2pdiscoverstatus"},
    {"getp2pconnectedstatus", HandleGetP2pConnectedStatus,
     "Get P2P connected status. No args. ex: wificommand getp2pconnectedstatus"},
    {"queryp2plocaldevice", HandleQueryP2pLocalDevice,
     "Query local P2P device. No args. ex: wificommand queryp2plocaldevice"},
    {"queryp2pdevices", HandleQueryP2pDevices,
     "Query P2P devices. No args. ex: wificommand queryp2pdevices"},
    {"queryp2pgroups", HandleQueryP2pGroups,
     "Query P2P groups. No args. ex: wificommand queryp2pgroups"},
    {"queryp2pservices", HandleQueryP2pServices,
     "Query P2P services. No args. ex: wificommand queryp2pservices"},
    {"setp2pdevicename", HandleSetP2pDeviceName,
     "Set P2P device name. name= string. ex: wificommand setp2pdevicename name=MyDevice"},

    // Hid2d (wifi_hid2d.h, same SA as P2P)
    {"hid2drequestgcip", HandleHid2dRequestGcIp,
     "Request GC IP. gcmac= string (MAC). ex: wificommand hid2drequestgcip gcmac=aa:bb:cc:dd:ee:ff"},
    {"hid2dsharedlinkincrease", HandleHid2dSharedlinkIncrease,
     "Increase shared link. No args. ex: wificommand hid2dsharedlinkincrease"},
    {"hid2dsharedlinkdecrease", HandleHid2dSharedlinkDecrease,
     "Decrease shared link. No args. ex: wificommand hid2dsharedlinkdecrease"},
    {"hid2dcreategroup", HandleHid2dCreateGroup,
     "Create HID2D group. [freq= int] [type= int]. ex: wificommand hid2dcreategroup freq=5180"},
    {"hid2dremovegcgroup", HandleHid2dRemoveGcGroup,
     "Remove GC group. ifname= string. ex: wificommand hid2dremovegcgroup ifname=wlan0"},
    {"hid2dconnect", HandleHid2dConnect,
     "HID2D connect. [ssid= string] [bssid= string]. ex: wificommand hid2dconnect ssid=xxx"},
    {"hid2dconfigipaddr", HandleHid2dConfigIpAddr,
     "Config IP. ifname= string, ip= string. ex: wificommand hid2dconfigipaddr ifname=wlan0 ip=192.168.1.1"},
    {"hid2dreleaseipaddr", HandleHid2dReleaseIpAddr,
     "Release IP. ifname= string. ex: wificommand hid2dreleaseipaddr ifname=wlan0"},
    {"hid2dgetrecommendchannel", HandleHid2dGetRecommendChannel,
     "Get recommend channel. No args. ex: wificommand hid2dgetrecommendchannel"},
    {"hid2dgetchannel5g", HandleHid2dGetChannel5G,
     "Get 5G channel list. No args. ex: wificommand hid2dgetchannel5g"},
    {"hid2dgetselfcfg", HandleHid2dGetSelfCfg,
     "Get self config. [type= int]. ex: wificommand hid2dgetselfcfg type=1"},
    {"hid2dsetpeercfg", HandleHid2dSetPeerCfg,
     "Set peer config. [type= int]. ex: wificommand hid2dsetpeercfg type=1"},
    {"hid2dsetupperscene", HandleHid2dSetUpperScene,
     "Set upper scene. ifname= string, [scene= int]. ex: wificommand hid2dsetupperscene ifname=wlan0 scene=0"},
    {"hid2diswidebandwidthsupported", HandleHid2dIsWideBandwidthSupported,
     "Check wide bandwidth support. No args. ex: wificommand hid2diswidebandwidthsupported"},
    {"hid2dsetgrouptype", HandleHid2dSetGroupType,
     "Set group type. [type= int 0|1]. ex: wificommand hid2dsetgrouptype type=0"},
};

static const int G_STA_CLI_CMDS_COUNT =
    static_cast<int>(sizeof(g_staCliCmds) / sizeof(g_staCliCmds[0]));

/**
 * Print help (all usage lines) to stdout.
 * @return void
 */
void Help(void)
{
    Logd("%s", "support command as follows:");
    for (int i = 0; i < G_STA_CLI_CMDS_COUNT; i++) {
        Logd("%s", g_staCliCmds[i].usage);
    }
}

void HandleUserCommand(int argc, const char* argv[])
{
    if (argc < 1) {
        Help();
        return;
    }
    for (int i = 0; i < G_STA_CLI_CMDS_COUNT; i++) {
        if (strcmp(g_staCliCmds[i].cmd, argv[CMD_IDX]) == 0) {
            if (g_staCliCmds[i].handler != nullptr) {
                g_staCliCmds[i].handler(argc, argv);
            } else {
                Logd("no handler for command:%s", g_staCliCmds[i].cmd);
            }
            return;
        }
    }
    Help();
}

int main(int argc, char* argv[])
{
    if (argc < MIN_ARGC_WITH_CMD) {
        Help();
        return 0;
    }
    HandleUserCommand(argc - 1, const_cast<const char**>(argv + 1));
    return 0;
}
