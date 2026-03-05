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

#include "clitools.h"
#include "common_dump.h"
#include "clitools_host.h"

using namespace std;

namespace OHOS {
namespace Bluetooth {

void HandleEnable(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBrEnabled()) {
        Logd("br enabled already");
    } else {
        g_bluetoothHost->EnableBt();
        Logd("br enabled");
        WaitAndPrintOperationEndSync("brenable", OPERATION_TIMEOUT_SECONDS);
    }

    if (g_bluetoothHost->IsBleEnabled()) {
        Logd("ble enabled already");
        BluetoothState bstate = g_bluetoothHost->GetBluetoothState();
        Logd("ble enabled already %d", bstate);
    } else {
        g_bluetoothHost->EnableBle();
        Logd("ble enabled");
        WaitAndPrintOperationEndSync("bleenable", OPERATION_TIMEOUT_SECONDS);
    }
}

void HandleDisable(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBrEnabled()) {
        Logd("br disable ");
        g_bluetoothHost->DisableBt();
    } else {
        Logd("br not enabled ");
    }

    if (g_bluetoothHost->IsBleEnabled()) {
        Logd("ble disabled");
        g_bluetoothHost->DisableBle();
    } else {
        Logd("ble not enabled");
    }
}

void HandleEnableBr(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBrEnabled()) {
        Logd("br enabled already");
    } else {
        g_bluetoothHost->EnableBt();
        Logd("br enabled");
        WaitAndPrintOperationEndSync("brenable", OPERATION_TIMEOUT_SECONDS);
    }
}

void HandleDisableBr(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBrEnabled()) {
        Logd("br disabled");
        g_bluetoothHost->DisableBt();
        WaitAndPrintOperationEndSync("brdisable", OPERATION_TIMEOUT_SECONDS);
    } else {
        Logd("br not enabled ");
    }
}

void HandleEnableBle(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBleEnabled()) {
        Logd("ble enabled already");
        BluetoothState bstate = g_bluetoothHost->GetBluetoothState();
        Logd("ble enabled already %d", bstate);
    } else {
        g_bluetoothHost->EnableBle();
        Logd("ble enabled");
        WaitAndPrintOperationEndSync("bleenable", OPERATION_TIMEOUT_SECONDS);
    }
}

void HandleDisableBle(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (g_bluetoothHost->IsBrEnabled()) {
        Logd("br disable ");
        g_bluetoothHost->DisableBt();
    } else {
        Logd("br not enabled ");
    }

    if (g_bluetoothHost->IsBleEnabled()) {
        Logd("ble disabled");
        g_bluetoothHost->DisableBle();
        WaitAndPrintOperationEndSync("bledisable", OPERATION_TIMEOUT_SECONDS);
    } else {
        Logd("ble not enabled");
    }
}

void HandleBrScan(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bluetoothHost->StartBtDiscovery();
    WaitAndPrintOperationEndSync("brscan");
}


void HandleBrStop(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bluetoothHost->CancelBtDiscovery();
}

void HandleBtState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    int state = g_bluetoothHost->GetBtState();
    std::string stateStr = BtStateToString(state);
    Logd("GetBtState: state[%d] - [%s]", state, stateStr.c_str());
}

void HandleBluetoothState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    BluetoothState state = g_bluetoothHost->GetBluetoothState();
    std::string stateStr = BluetoothStateToString(static_cast<int>(state));
    Logd("GetBtState: state[%d] - [%s]", state, stateStr.c_str());
}

void HandleBrGetLocalName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string name = g_bluetoothHost->GetLocalName();
    Logd("GetLocalName:%s", name.c_str());
}

void HandleBrSetLocalName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string name;
    std::string prefix = PARAM_NAME;
    GeStrValue(argc, argv, prefix, name);
    bool ret = g_bluetoothHost->SetLocalName(name);
    Logd("SetLocalName:%d, %s", ret, name.c_str());
}

void HandleBrGetRemoteName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    std::string name = remoteDevice.GetDeviceName();
    Logd("GetRemoteName:%s", name.c_str());
}

void HandleBrSetRemoteName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    std::string name;
    GetMac(argc, argv, mac);
    std::string prefix = PARAM_NAME;
    GeStrValue(argc, argv, prefix, name);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t err = remoteDevice.SetDeviceAlias(name);
    Logd("SetDeviceAlias:%s, [%d]", name.c_str(), err);
}

void HandleBrGetRemoteBatteryInfo(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    DeviceBatteryInfo batteryInfo;
    int32_t err = remoteDevice.GetRemoteDeviceBatteryInfo(batteryInfo);
    Logd("GetRemoteDeviceBatteryInfo[%d]: Levle[%d]-Left[%d]-Right[%d]", err, batteryInfo.batteryLevel_,
        batteryInfo.leftEarBatteryLevel_, batteryInfo.rightEarBatteryLevel_);
}

void HandleBrGetLastConnectTime(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int64_t connectionTime;
    int32_t err = remoteDevice.GetLastConnectionTime(connectionTime);
    Logd("GetLastConnectionTime[%d]: time[%lld]", err, connectionTime);
}

void HandleBrPairedDevices(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::vector<OHOS::Bluetooth::BluetoothRemoteDevice> pairedDevices;
    int transport = BT_TRANSPORT_BREDR;
    std::string prefix = "transport=";
    GetIntValue(argc, argv, prefix, transport);
    int ret = g_bluetoothHost->GetPairedDevices(transport, pairedDevices);
    Logd("GetPairedDevices[%d]: devices[%d]", ret, pairedDevices.size());
    for (const auto& device : pairedDevices) {
        Logd("Device: %s", device.GetDeviceName().c_str());
    }
}

void HandleBrPaireState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int state = PAIR_NONE;
    int32_t err = remoteDevice.GetPairState(state);
    Logd("GetPairState[%d]: state[%d]", err, state);
}

void HandleBrProfileState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    int state = static_cast<int>(BTConnectState::DISCONNECTED);
    int profileId = 0;
    std::string prefix = "profileid=";
    if (ShouldReturnVoid(!GetIntValue(argc, argv, prefix, profileId),
        "Usage: getprofilestate profileid=number")) {
        return;
    }

    int err = g_bluetoothHost->GetBtProfileConnState(profileId, state);
    Logd("GetBtProfileConnState[%d]: state[%d]", err, state);
}

void HandleBrConfirmPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int state = PAIR_NONE;
    int32_t err = remoteDevice.SetDevicePairingConfirmation(state);
    Logd("ConfirmPair[%d]: state[%d]", err, state);
}

void HandleBrSetPinCode(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    std::string prefix = PARAM_PIN;
    std::string pin;
    GetMac(argc, argv, mac);
    GeStrValue(argc, argv, prefix, pin);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t err = remoteDevice.SetDevicePin(pin);
    Logd("SetDevicePin mac[%s] pin[%s] result[%d]", mac.c_str(), pin.c_str(), err);
}

void HandleBrGetBtScanMode(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    int32_t scanMode = 0;
    int32_t err = g_bluetoothHost->GetBtScanMode(scanMode);
    std::string modeStr = ScanModeToString(scanMode);

    Logd("GetBtScanMode[%d]: mode[%d] - %s", err, scanMode, modeStr.c_str());
}

void HandleBrSetBtScanMode(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    int mode = 0;
    int duration = 0;
    if (!GetIntValue(argc, argv, PARAM_MODE, mode)) {
        Logd("usage: setBtScanMode mode=mode duration=duration(seconds)");
        PrintScanModeUsage();
        return;
    }

    if (!GetIntValue(argc, argv, PARAM_DURATION, duration)) {
        duration = DEFAULT_SCAN_DURATION; // Default scan duration in seconds
        Logd("Duration not specified, using default: %d seconds", duration);
    }

    int32_t err = g_bluetoothHost->SetBtScanMode(mode, duration);
    Logd("SetBtScanMode[%d]: mode[%d] duration[%d]", err, mode, duration);
}

void HandleBrGetBondableMode(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    int transport = BT_TRANSPORT_BREDR; // Default transport

    // Try to get transport parameter if provided
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
        Logd("Transport not specified, using default: %d (BT_TRANSPORT_BREDR)", transport);
    }

    int bondableMode = g_bluetoothHost->GetBondableMode(transport);

    std::string modeStr = BondableModeToString(bondableMode);
    std::string transportStr = TransportTypeToString(transport);

    Logd("GetBondableMode: transport[%d] - %s", transport, transportStr.c_str());
    Logd("BondableMode: [%d] - %s", bondableMode, modeStr.c_str());
}

void HandleBrSetBondableMode(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    int transport = BT_TRANSPORT_BREDR; // Default transport
    int mode = BONDABLE_MODE_ON; // Default mode

    // Get transport parameter
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
        Logd("Transport not specified, using default: %d (BT_TRANSPORT_BREDR)", transport);
    }

    // Get mode parameter
    if (!GetIntValue(argc, argv, PARAM_MODE, mode)) {
        Logd("Usage: setbondablemode transport=transport_type mode=bondable_mode");
        PrintTransportTypeUsage();
        return;
    }

    bool result = g_bluetoothHost->SetBondableMode(transport, mode);

    std::string transportStr = TransportTypeToString(transport);
    std::string modeStr = BondableModeToString(mode);

    Logd("SetBondableMode result[%d]: transport[%d]-%s mode[%d]-%s",
         result, transport, transportStr.c_str(), mode, modeStr.c_str());
}

void HandleBrIsDiscovering(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    int transport = BT_TRANSPORT_BREDR; // Default transport

    // Try to get transport parameter if provided
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
        Logd("Transport not specified, using default: %d (BT_TRANSPORT_BREDR)", transport);
    }

    bool isDiscovering = false;
    int ret = g_bluetoothHost->IsBtDiscovering(isDiscovering, transport);
    Logd("IsBtDiscovering[%d] -- isDiscovering [%d]", ret, isDiscovering);

    std::string transportStr = TransportTypeToString(transport);

    Logd("IsDiscovering: transport[%d]-%s isDiscovering[%d]",
         transport, transportStr.c_str(), isDiscovering);
}

void HandleBrGetDiscoveryEndTime(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    long long endTime = g_bluetoothHost->GetBtDiscoveryEndMillis();
    Logd("GetDiscoveryEndTime: endTime[%lld]", endTime);
}

void HandleBrStartDiscovery(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    bool result = g_bluetoothHost->StartBtDiscovery();
    Logd("StartBtDiscovery result[%d]", result);
}

void HandleBrCancelDiscovery(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    bool result = g_bluetoothHost->CancelBtDiscovery();
    Logd("CancelBtDiscovery result[%d]", result);
}

void HandleBrRemoveAllPairs(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    bool result = g_bluetoothHost->RemoveAllPairs();
    int transport = BT_TRANSPORT_BREDR;
    std::string transportStr = TransportTypeToString(transport);

    Logd("RemoveAllPairs: transport[%d]-%s result[%d]",
         transport, transportStr.c_str(), result);
}

void HandleBrRemovePair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = g_bluetoothHost->RemovePair(remoteDevice);
    Logd("RemovePair mac[%s] result[%d]", mac.c_str(), result);
}

void HandleBrStartPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.StartPair();
    Logd("StartPair mac[%s] result[%d]", mac.c_str(), result);
    WaitAndPrintOperationEndSync("startpair");
}

void HandleBrCancelPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.CancelPairing();
    Logd("CancelPair mac[%s] result[%d]", mac.c_str(), result);
    WaitAndPrintOperationEndSync("cancelpair");
}

void HandleBrIsBondedFromLocal(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int transport = BT_TRANSPORT_BREDR;

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, transport);
    bool result = remoteDevice.IsBondedFromLocal();

    std::string transportStr = TransportTypeToString(transport);
    Logd("IsBondedFromLocal mac[%s] transport[%d]-%s result[%d]",
         mac.c_str(), transport, transportStr.c_str(), result);
}

void HandleBrIsAclConnected(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int transport = BT_TRANSPORT_BREDR;

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, transport);
    bool result = remoteDevice.IsAclConnected();

    std::string transportStr = TransportTypeToString(transport);
    Logd("IsAclConnected mac[%s] transport[%d]-%s result[%d]",
         mac.c_str(), transport, transportStr.c_str(), result);
}

void HandleBrIsAclEncrypted(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int transport = BT_TRANSPORT_BREDR;

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, transport);
    bool result = remoteDevice.IsAclEncrypted();

    std::string transportStr = TransportTypeToString(transport);
    Logd("IsAclEncrypted mac[%s] transport[%d]-%s result[%d]",
         mac.c_str(), transport, transportStr.c_str(), result);
}

void HandleBrGetDeviceClass(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int transport = BT_TRANSPORT_BREDR;

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, PARAM_TRANSPORT, transport)) {
        transport = BT_TRANSPORT_BREDR; // Use default if not specified
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, transport);
    BluetoothDeviceClass deviceClass = g_bluetoothHost->GetLocalDeviceClass();

    std::string transportStr = TransportTypeToString(transport);
    Logd("GetDeviceClass mac[%s] transport[%d]-%s deviceClass[%d]",
         mac.c_str(), transport, transportStr.c_str(), deviceClass.GetClassOfDevice());
}

void HandleBrGetDeviceProductId(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    std::string productId;
    int ret = remoteDevice.GetDeviceProductId(productId);
    Logd("GetDeviceProductId[%d] mac[%s] productId[%s]", ret, mac.c_str(), productId.c_str());
}

void HandleBrGetDeviceUuids(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    std::vector<std::string> uuids {};
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int ret = remoteDevice.GetDeviceUuids(uuids);
    Logd("GetDeviceUuids[%d] mac[%s] uuid count[%zu]", ret, mac.c_str(), uuids.size());

    PrintUuidList(uuids);
}

void HandleBrSetDevicePin(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    std::string pin;

    GetMac(argc, argv, mac);
    GeStrValue(argc, argv, PARAM_PIN, pin);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.SetDevicePin(pin);
    Logd("SetDevicePin mac[%s] pin[%s] result[%d]", mac.c_str(), pin.c_str(), result);
}

void HandleBrSetDevicePairingConfirmation(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int accept = 1; // Default accept

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, "accept=", accept)) {
        accept = 1; // Default accept
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.SetDevicePairingConfirmation(accept);
    Logd("SetDevicePairingConfirmation mac[%s] accept[%d] result[%d]",
        mac.c_str(), accept, result);
}

void HandleBrSetDevicePasskey(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int passkey = 0;
    int accept = 1; // Default accept

    GetMac(argc, argv, mac);
    if (ShouldReturnVoid(!GetIntValue(argc, argv, "passkey=", passkey),
        "Usage: setdevicepasskey mac=mac_address passkey=passkey_value accept=0/1")) {
        return;
    }
    if (!GetIntValue(argc, argv, "accept=", accept)) {
        accept = 1; // Default accept
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.SetDevicePasskey(passkey, accept);
    Logd("SetDevicePasskey mac[%s] passkey[%d] accept[%d] result[%d]",
        mac.c_str(), passkey, accept, result);
}

void HandleBrPairRequestReply(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int accept = 1; // Default accept

    GetMac(argc, argv, mac);
    if (!GetIntValue(argc, argv, "accept=", accept)) {
        accept = 1; // Default accept
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.PairRequestReply(accept);
    Logd("PairRequestReply mac[%s] accept[%d] result[%d]", mac.c_str(), accept, result);
}

void HandleBrGetTransportType(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int transport = remoteDevice.GetTransportType();
    std::string transportStr = TransportTypeToString(transport);

    Logd("GetTransportType mac[%s] transport[%d]-%s", mac.c_str(), transport, transportStr.c_str());
}

void HandleBrReadRemoteRssiValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.ReadRemoteRssiValue();
    Logd("ReadRemoteRssiValue mac[%s] result[%d]", mac.c_str(), result);
}

void HandleBrIsValidBluetoothRemoteDevice(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.IsValidBluetoothRemoteDevice();
    Logd("IsValidBluetoothRemoteDevice mac[%s] result[%d]", mac.c_str(), result);
}

void HandleBrGetDeviceProductType(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int cod = 0;
    int majorClass = 0;
    int majorMinorClass = 0;
    int productType = remoteDevice.GetDeviceProductType(cod, majorClass, majorMinorClass);
    Logd("GetDeviceProductType mac[%s] productType[%d]", mac.c_str(), productType);
}

void HandleBrSetDeviceCustomType(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int deviceType = 0;

    GetMac(argc, argv, mac);
    if (ShouldReturnVoid(!GetIntValue(argc, argv, "deviceType=", deviceType),
        "Usage: setdevicecustomtype mac=mac_address deviceType=type_value")) {
        return;
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.SetDeviceCustomType(deviceType);
    Logd("SetDeviceCustomType mac[%s] deviceType[%d] result[%d]",
         mac.c_str(), deviceType, result);
}

void HandleBrGetDeviceVendorId(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    uint16_t vendorId = 0;
    int ret = remoteDevice.GetDeviceVendorId(vendorId);
    Logd("GetDeviceVendorId[%d] mac[%s] vendorId[%d]", ret, mac.c_str(), vendorId);
}

void HandleBrIsSupportVirtualAutoConnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool outSupport = false;
    int result = remoteDevice.IsSupportVirtualAutoConnect(outSupport);
    Logd("IsSupportVirtualAutoConnect mac[%d] result[%d]", outSupport, result);
}

void HandleBrSetVirtualAutoConnectType(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int connType = 0;
    int businessType = 0;

    GetMac(argc, argv, mac);
    if (ShouldReturnVoid(!GetIntValue(argc, argv, "connType=", connType) ||
        !GetIntValue(argc, argv, "businessType=", businessType),
        "Usage: setvirtualautoconnecttype mac=mac_address connType=type businessType=type")) {
        return;
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.SetVirtualAutoConnectType(connType, businessType);
    Logd("SetVirtualAutoConnectType mac[%s] connType[%d] businessType[%d] result[%d]",
         mac.c_str(), connType, businessType, result);
}

void HandleBrControlDeviceAction(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    int type = 0;
    int typeValue = 0;
    int controlObject = 0;

    GetMac(argc, argv, mac);
    if (ShouldReturnVoid(!GetIntValue(argc, argv, "type=", type) ||
        !GetIntValue(argc, argv, "typeValue=", typeValue) ||
        !GetIntValue(argc, argv, "controlObject=", controlObject),
        "Usage: controldeviceaction mac=mac_address type=type typeValue=value controlObject=object")) {
        return;
    }

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.ControlDeviceAction(type, typeValue, controlObject);
    Logd("ControlDeviceAction mac[%s] type[%d] typeValue[%d] controlObject[%d] result[%d]",
         mac.c_str(), type, typeValue, controlObject, result);
}

void HandleBrGetCloudBondState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t cloudBondState = 0;
    int ret = remoteDevice.GetCloudBondState(cloudBondState);
    Logd("GetCloudBondState[%d] mac[%s] bondState[%d]", ret, mac.c_str(), cloudBondState);
}

void HandleBrGetDeviceTransport(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int transport = remoteDevice.GetTransportType();
    std::string transportStr = TransportTypeToString(transport);

    Logd("GetDeviceTransport mac[%s] transport[%d]-%s", mac.c_str(), transport, transportStr.c_str());
}

}  // namespace Bluetooth
}  // namespace OHOS
