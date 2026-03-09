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
 * @file clitools_bus_center.cpp
 * @brief Bus center CLI handlers (softbus_bus_center.h). Calls softbus C APIs.
 */

#include "clitools_bus_center.h"
#include "clitools_constants.h"
#include "common.h"

#include <cstdlib>
#include <cstring>
#include <cstdio>

#include "securec.h"
#include "softbus_bus_center.h"
#include "softbus_common.h"

/**
 * Return pointer to value for key=value in argv, or nullptr.
 * @param argc Argument count.
 * @param argv Argument vector (argv[0] is command name).
 * @param key Key name (e.g. "networkId").
 * @return Pointer to value after '=', or nullptr if not found.
 */
static const char* GetArg(int argc, const char* argv[], const char* key)
{
    size_t keyLen = strlen(key);
    for (int i = ARG_IDX_FIRST; i < argc; i++) {
        if (strncmp(argv[i], key, keyLen) == 0 && argv[i][keyLen] == '=') {
            return argv[i] + keyLen + 1;
        }
    }
    return nullptr;
}

/**
 * Dump NodeBasicInfo fields to stdout (field-level).
 * @param info Pointer to NodeBasicInfo; no-op if nullptr.
 */
static void DumpNodeBasicInfo(const NodeBasicInfo* info)
{
    if (info == nullptr) {
        return;
    }
    Logd("networkId: %s, deviceName: %s, deviceTypeId: %u, osType: %d, osVersion: %s",
         info->networkId, info->deviceName, info->deviceTypeId,
         info->osType, info->osVersion);
}

/**
 * Get local node device info and dump fields.
 * @param argc Argument count.
 * @param argv Argument vector (unused).
 */
void HandleGetLocalNodeInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    NodeBasicInfo info = {};
    int32_t ret = GetLocalNodeDeviceInfo(DEFAULT_PKG_NAME, &info);
    if (ret == 0) {
        DumpNodeBasicInfo(&info);
    } else {
        Logd("GetLocalNodeDeviceInfo failed, ret: %d", ret);
    }
}

void HandleGetAllNodeInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    NodeBasicInfo* info = nullptr;
    int32_t infoNum = 0;
    int32_t ret = GetAllNodeDeviceInfo(DEFAULT_PKG_NAME, &info, &infoNum);
    if (ret == 0 && info != nullptr) {
        Logd("node count: %d", infoNum);
        for (int32_t i = 0; i < infoNum; i++) {
            DumpNodeBasicInfo(&info[i]);
        }
        FreeNodeInfo(info);
    } else {
        Logd("GetAllNodeDeviceInfo failed, ret: %d", ret);
    }
}

/**
 * Leave LNN; requires networkId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleLeaveLNN(int argc, const char* argv[])
{
    const char* networkId = GetArg(argc, argv, "networkId");
    if (networkId == nullptr || networkId[0] == '\0') {
        Logd("usage: leavelnn networkId=xxx");
        return;
    }
    int32_t ret = LeaveLNN(DEFAULT_PKG_NAME, networkId, nullptr);
    Logd("LeaveLNN ret: %d (async, callback may follow)", ret);
}

/**
 * Get node key; requires networkId= and key= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleGetNodeKeyInfo(int argc, const char* argv[])
{
    const char* networkId = GetArg(argc, argv, "networkId");
    const char* keyStr = GetArg(argc, argv, "key");
    if (networkId == nullptr || keyStr == nullptr) {
        Logd("usage: getnodekeyinfo networkId=xxx key=0");
        return;
    }
    int keyNum = atoi(keyStr);
    if (keyNum < 0 || keyNum > static_cast<int>(NODE_KEY_STATIC_NETWORK_CAP)) {
        Logd("key must be 0-%d", static_cast<int>(NODE_KEY_STATIC_NETWORK_CAP));
        return;
    }
    uint8_t buf[NODE_KEY_INFO_BUF_LEN] = {};
    int32_t ret = GetNodeKeyInfo(DEFAULT_PKG_NAME, networkId,
        static_cast<NodeDeviceInfoKey>(keyNum), buf, sizeof(buf));
    if (ret == 0) {
        Logd("value: %s", reinterpret_cast<char*>(buf));
    } else {
        Logd("GetNodeKeyInfo failed, ret: %d", ret);
    }
}

/**
 * Stop time sync; requires targetNetworkId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleStopTimeSync(int argc, const char* argv[])
{
    const char* targetNetworkId = GetArg(argc, argv, "targetNetworkId");
    if (targetNetworkId == nullptr || targetNetworkId[0] == '\0') {
        Logd("usage: stoptimesync targetNetworkId=xxx");
        return;
    }
    int32_t ret = StopTimeSync(DEFAULT_PKG_NAME, targetNetworkId);
    Logd("StopTimeSync ret: %d", ret);
}

/**
 * Destroy group owner.
 * @param argc Argument count.
 * @param argv Args (unused).
 * @return void
 */
void HandleDestroyGroupOwner(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    DestroyGroupOwner(DEFAULT_PKG_NAME);
    Logd("DestroyGroupOwner done");
}

/**
 * Join LNN (async); requires type= and addr= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleJoinLNN(int argc, const char* argv[])
{
    const char* typeStr = GetArg(argc, argv, "type");
    const char* addrStr = GetArg(argc, argv, "addr");
    if (typeStr == nullptr || addrStr == nullptr) {
        Logd("usage: joinlnn type=0 addr=ip:port or type=1 addr=brMac etc.");
        return;
    }
    ConnectionAddr addr = {};
    int t = atoi(typeStr);
    if (t == CONNECTION_ADDR_WLAN) {
        addr.type = CONNECTION_ADDR_WLAN;
        (void)strncpy_s(addr.info.ip.ip, IP_STR_MAX_LEN, addrStr, IP_STR_MAX_LEN - 1);
    } else if (t == CONNECTION_ADDR_BR) {
        addr.type = CONNECTION_ADDR_BR;
        (void)strncpy_s(addr.info.br.brMac, BT_MAC_LEN, addrStr, BT_MAC_LEN - 1);
    } else {
        addr.type = static_cast<ConnectionAddrType>(t);
        (void)strncpy_s(addr.info.ip.ip, IP_STR_MAX_LEN, addrStr, IP_STR_MAX_LEN - 1);
    }
    int32_t ret = JoinLNN(DEFAULT_PKG_NAME, &addr, nullptr, false);
    Logd("JoinLNN ret: %d (async)", ret);
}

/**
 * Callback when node comes online.
 * @param info Node basic info (may be null).
 */
static void OnNodeOnlineCb(NodeBasicInfo* info)
{
    if (info) {
        Logd("[cb] onNodeOnline: %s", info->networkId);
    }
}

/**
 * Callback when node goes offline.
 * @param info Node basic info (may be null).
 */
static void OnNodeOfflineCb(NodeBasicInfo* info)
{
    if (info) {
        Logd("[cb] onNodeOffline: %s", info->networkId);
    }
}

static INodeStateCb g_nodeStateCb;
static bool g_nodeCbRegistered = false;

/**
 * Register node state callback; optional events= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleRegNodeCb(int argc, const char* argv[])
{
    const char* eventsStr = GetArg(argc, argv, "events");
    uint32_t events = DEFAULT_NODE_CB_EVENTS;
    if (eventsStr != nullptr) {
        events = static_cast<uint32_t>(strtoul(eventsStr, nullptr, 0));
    }
    (void)memset_s(&g_nodeStateCb, sizeof(g_nodeStateCb), 0, sizeof(g_nodeStateCb));
    g_nodeStateCb.events = events;
    g_nodeStateCb.onNodeOnline = OnNodeOnlineCb;
    g_nodeStateCb.onNodeOffline = OnNodeOfflineCb;
    int32_t ret = RegNodeDeviceStateCb(DEFAULT_PKG_NAME, &g_nodeStateCb);
    g_nodeCbRegistered = (ret == 0);
    Logd("RegNodeDeviceStateCb ret: %d", ret);
}

/**
 * Unregister node state callback.
 * @param argc Argument count.
 * @param argv Args (unused).
 * @return void
 */
void HandleUnregNodeCb(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    if (!g_nodeCbRegistered) {
        Logd("no callback registered");
        return;
    }
    int32_t ret = UnregNodeDeviceStateCb(&g_nodeStateCb);
    g_nodeCbRegistered = false;
    Logd("UnregNodeDeviceStateCb ret: %d", ret);
}

void HandleSetNodeDataChangeFlag(int argc, const char* argv[])
{
    const char* networkId = GetArg(argc, argv, "networkId");
    const char* flagStr = GetArg(argc, argv, "flag");
    if (networkId == nullptr || flagStr == nullptr) {
        Logd("usage: setnodedatachangeflag networkId=xxx flag=0");
        return;
    }
    uint16_t flag = static_cast<uint16_t>(strtoul(flagStr, nullptr, 0));
    int32_t ret = SetNodeDataChangeFlag(DEFAULT_PKG_NAME, networkId, flag);
    Logd("SetNodeDataChangeFlag ret: %d", ret);
}

/**
 * Start time sync (async); requires targetNetworkId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleStartTimeSync(int argc, const char* argv[])
{
    const char* targetNetworkId = GetArg(argc, argv, "targetNetworkId");
    if (targetNetworkId == nullptr || targetNetworkId[0] == '\0') {
        Logd("usage: starttimesync targetNetworkId=xxx [accuracy=0] [period=0]");
        return;
    }
    const char* accStr = GetArg(argc, argv, "accuracy");
    const char* periodStr = GetArg(argc, argv, "period");
    TimeSyncAccuracy accuracy = NORMAL_ACCURACY;
    TimeSyncPeriod period = NORMAL_PERIOD;
    if (accStr != nullptr) {
        accuracy = static_cast<TimeSyncAccuracy>(atoi(accStr));
    }
    if (periodStr != nullptr) {
        period = static_cast<TimeSyncPeriod>(atoi(periodStr));
    }
    static ITimeSyncCb syncCb;
    (void)memset_s(&syncCb, sizeof(syncCb), 0, sizeof(syncCb));
    syncCb.onTimeSyncResult = [](const TimeSyncResultInfo* inf, int32_t retCode) {
        (void)inf;
        Logd("[cb] onTimeSyncResult retCode: %d", retCode);
    };
    int32_t ret = StartTimeSync(DEFAULT_PKG_NAME, targetNetworkId, accuracy, period, &syncCb);
    Logd("StartTimeSync ret: %d (async)", ret);
}

/**
 * Publish LNN (async).
 * @param argc Argument count.
 * @param argv Args (unused).
 * @return void
 */
void HandlePublishLNN(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    PublishInfo info = {};
    info.publishId = 0;
    info.mode = DISCOVER_MODE_PASSIVE;
    info.medium = COAP;
    info.freq = MID;
    info.capability = "ddmp";
    info.capabilityData = nullptr;
    info.dataLen = 0;
    static IPublishCb pubCb;
    (void)memset_s(&pubCb, sizeof(pubCb), 0, sizeof(pubCb));
    pubCb.OnPublishResult = [](int publishId, PublishResult reason) {
        Logd("[cb] OnPublishResult publishId: %d reason: %d", publishId, reason);
    };
    int32_t ret = PublishLNN(DEFAULT_PKG_NAME, &info, &pubCb);
    Logd("PublishLNN ret: %d (async)", ret);
}

/**
 * Stop publish LNN; requires publishId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleStopPublishLNN(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "publishId");
    if (idStr == nullptr) {
        Logd("usage: stoppublishlnn publishId=0");
        return;
    }
    int32_t publishId = atoi(idStr);
    int32_t ret = StopPublishLNN(DEFAULT_PKG_NAME, publishId);
    Logd("StopPublishLNN ret: %d", ret);
}

void HandleRefreshLNN(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    SubscribeInfo info = {};
    info.subscribeId = 0;
    info.mode = DISCOVER_MODE_PASSIVE;
    info.medium = COAP;
    info.freq = MID;
    info.isSameAccount = true;
    info.isWakeRemote = false;
    info.capability = "ddmp";
    info.capabilityData = nullptr;
    info.dataLen = 0;
    static IRefreshCallback refCb;
    (void)memset_s(&refCb, sizeof(refCb), 0, sizeof(refCb));
    refCb.OnDiscoverResult = [](int32_t refreshId, RefreshResult reason) {
        Logd("[cb] OnDiscoverResult refreshId: %d reason: %d", refreshId, reason);
    };
    refCb.OnDeviceFound = [](const DeviceInfo* device) {
        if (device != nullptr) {
            Logd("[cb] OnDeviceFound: %s", device->devId);
        }
    };
    int32_t ret = RefreshLNN(DEFAULT_PKG_NAME, &info, &refCb);
    Logd("RefreshLNN ret: %d (async)", ret);
}

/**
 * Stop refresh LNN; requires refreshId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleStopRefreshLNN(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "refreshId");
    if (idStr == nullptr) {
        Logd("usage: stoprefreshlnn refreshId=0");
        return;
    }
    int32_t refreshId = atoi(idStr);
    int32_t ret = StopRefreshLNN(DEFAULT_PKG_NAME, refreshId);
    Logd("StopRefreshLNN ret: %d", ret);
}

/**
 * Active meta node (minimal params).
 * @param argc Argument count.
 * @param argv Args (unused).
 * @return void
 */
void HandleActiveMetaNode(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    MetaNodeConfigInfo info = {};
    char metaNodeId[NETWORK_ID_BUF_LEN] = {};
    int32_t ret = ActiveMetaNode(DEFAULT_PKG_NAME, &info, metaNodeId);
    Logd("ActiveMetaNode ret: %d metaNodeId: %s", ret, metaNodeId);
}

void HandleDeactiveMetaNode(int argc, const char* argv[])
{
    const char* metaNodeId = GetArg(argc, argv, "metaNodeId");
    if (metaNodeId == nullptr || metaNodeId[0] == '\0') {
        Logd("usage: deactivemetanode metaNodeId=xxx");
        return;
    }
    int32_t ret = DeactiveMetaNode(DEFAULT_PKG_NAME, metaNodeId);
    Logd("DeactiveMetaNode ret: %d", ret);
}

/**
 * Get all meta node info and dump fields.
 * @param argc Argument count.
 * @param argv Args (unused).
 * @return void
 */
void HandleGetAllMetaNodeInfo(int argc, const char* argv[])
{
    (void)argc;
    (void)argv;
    MetaNodeInfo infos[MAX_META_NODE_NUM];
    int32_t infoNum = MAX_META_NODE_NUM;
    int32_t ret = GetAllMetaNodeInfo(DEFAULT_PKG_NAME, infos, &infoNum);
    if (ret == 0) {
        Logd("meta node count: %d", infoNum);
        for (int32_t i = 0; i < infoNum; i++) {
            Logd("[%d] metaNodeId: %s deviceName: %s isOnline: %d", i,
                infos[i].metaNodeId, infos[i].configInfo.deviceName, infos[i].isOnline);
        }
    } else {
        Logd("GetAllMetaNodeInfo failed, ret: %d", ret);
    }
}

/**
 * Shift LNN gear; optional callerId=, targetNetworkId=, cycle=, duration= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleShiftLNNGear(int argc, const char* argv[])
{
    const char* callerId = GetArg(argc, argv, "callerId");
    if (callerId == nullptr) {
        callerId = DEFAULT_PKG_NAME;
    }
    const char* targetNetworkId = GetArg(argc, argv, "targetNetworkId");
    GearMode mode = {};
    mode.cycle = MID_FREQ_CYCLE;
    mode.duration = DEFAULT_DURATION;
    mode.wakeupFlag = false;
    mode.action = FLUSH_DEVICE_LIST;
    const char* cycleStr = GetArg(argc, argv, "cycle");
    const char* durationStr = GetArg(argc, argv, "duration");
    if (cycleStr != nullptr) {
        mode.cycle = static_cast<ModeCycle>(atoi(cycleStr));
    }
    if (durationStr != nullptr) {
        mode.duration = static_cast<ModeDuration>(atoi(durationStr));
    }
    int32_t ret = ShiftLNNGear(DEFAULT_PKG_NAME, callerId, targetNetworkId, &mode);
    Logd("ShiftLNNGear ret: %d", ret);
}

void HandleSyncTrustedRelationShip(int argc, const char* argv[])
{
    const char* msg = GetArg(argc, argv, "msg");
    if (msg == nullptr) {
        msg = DEFAULT_EMPTY_JSON;
    }
    int32_t ret = SyncTrustedRelationShip(DEFAULT_PKG_NAME, msg, static_cast<uint32_t>(strlen(msg)));
    Logd("SyncTrustedRelationShip ret: %d", ret);
}

/**
 * Set display name; requires nameData= (cJSON) in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleSetDisplayName(int argc, const char* argv[])
{
    const char* nameData = GetArg(argc, argv, "nameData");
    if (nameData == nullptr) {
        Logd("usage: setdisplayname nameData={\"name\":\"xxx\"}");
        return;
    }
    uint32_t len = static_cast<uint32_t>(strlen(nameData));
    int32_t ret = SetDisplayName(DEFAULT_PKG_NAME, nameData, len);
    Logd("SetDisplayName ret: %d", ret);
}

/**
 * Callback when group owner is destroyed.
 * @param retCode Result code.
 */
static void GroupOwnerDestroyCb(int32_t retCode)
{
    Logd("[cb] GroupOwnerDestroy retCode: %d", retCode);
}

/**
 * Create group owner (async); optional frequency= and freqType= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleCreateGroupOwner(int argc, const char* argv[])
{
    struct GroupOwnerConfig config = {};
    config.frequency = DEFAULT_GO_FREQUENCY;
    config.freqType = SOFTBUS_FREQUENCY_DEFAULT;
    const char* freqStr = GetArg(argc, argv, "frequency");
    const char* typeStr = GetArg(argc, argv, "freqType");
    if (freqStr != nullptr) {
        config.frequency = atoi(freqStr);
    }
    if (typeStr != nullptr) {
        config.freqType = atoi(typeStr);
    }
    struct GroupOwnerResult result = {};
    int32_t ret = CreateGroupOwner(DEFAULT_PKG_NAME, &config, &result, GroupOwnerDestroyCb);
    Logd("CreateGroupOwner ret: %d ssid: %s", ret, result.ssid);
}
