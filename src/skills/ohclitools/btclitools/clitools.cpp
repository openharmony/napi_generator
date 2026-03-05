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
#include "common_callback.h"
#include "common_dump.h"
#include "clitools_host.h"
#include "clitools_gatt_client.h"
#include "clitools_gatt_server.h"
#include "clitools_a2dp.h"
#include "clitools_socket.h"
#include "clitools_profile.h"

using namespace std;

namespace OHOS {
namespace Bluetooth {

BluetoothHost* g_bluetoothHost = nullptr;
std::shared_ptr<BleCentralManager> g_bleCentralManager = nullptr;
std::shared_ptr<OHOS::Bluetooth::GattClient> g_gattClient = nullptr;
std::shared_ptr<GattServer> g_gattServer = nullptr;
std::string g_currentGattDeviceAddress = "";
std::string g_mac = "00:00:00:00:00:00";

// Command usage strings and examples
static const char* const GATT_READ_CV_CMD = "gattreadcv";
static const char* const GATT_READ_CV_USAGE = "gattreadcv service=service_uuid characteristic=characteristic_uuid";
static const std::vector<std::string> GATT_READ_CV_EXAMPLES = {
    "gattreadcv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB"
};

const char* const GATT_WRITE_CV_CMD = "gattwritecv";
const char* const GATT_WRITE_CV_USAGE =
    "gattwritecv service=service_uuid characteristic=characteristic_uuid value=hex_or_string [type=hex|string] "
    "[write_type=default|no_response|signed]";
const std::vector<std::string> GATT_WRITE_CV_EXAMPLES = {
    "gattwritecv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB "
    "value=55 type=hex",
    "gattwritecv service=0000180A-0000-1000-8000-00805F9B34FB characteristic=00002A29-0000-1000-8000-00805F9B34FB "
    "value=\"Hello World\" type=string"
};


int RegisterCallbacks()
{
    Logd("enter RegisterCallbacks");
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }
    g_hostObserver = std::make_shared<BluetoothHostObserverWapper>();
    g_remoteDeviceObserver = std::make_shared<BluetoothRemoteDeviceObserverWapper>();
    g_bluetoothHost->RegisterObserver(g_hostObserver);
    g_bluetoothHost->RegisterRemoteDeviceObserver(g_remoteDeviceObserver);

    if (g_bleCentralManager == nullptr) {
        g_bleCallback = std::make_shared<BleCentralManagerCallbackWapper>();
        g_bleCentralManager = std::make_shared<BleCentralManager>(g_bleCallback);
    }
    return 0;
}

int DeregisterCallbacks()
{
    Logd("enter DeregisterCallbacks");
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    g_bluetoothHost->DeregisterObserver(g_hostObserver);
    g_bluetoothHost->DeregisterRemoteDeviceObserver(g_remoteDeviceObserver);
    return 0;
}

bool AssertAndDumpServiceNotFoundWithDiscovery(const OHOS::Bluetooth::GattService* service,
    const std::string& serviceUuid)
{
    if (service == nullptr) {
        Logd("Service not found: %s", serviceUuid.c_str());

        // Get services to show available ones
        std::vector<GattService> services;
        if (TryGetServices(services)) {
            Logd("Available services:");
            for (size_t i = 0; i < services.size(); i++) {
                Logd("  Service[%zu]: %s", i, services[i].GetUuid().ToString().c_str());
            }
        }
        return true; // Should return from calling function
    }
    return false; // Continue execution
}

void DumpBrStatus()
{
    DumpBluetoothStatusWithHost(g_bluetoothHost);
}


void GetDeviceNameDirectly()
{
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }
    GetDeviceNameDirectlyWithHost(g_currentGattDeviceAddress, g_bluetoothHost);
}

void GetDeviceGattName()
{
    GetDeviceGattNameWithClient(g_gattClient);
}

GattService* GetServiceByUuid(const std::string& serviceUuid)
{
    return GetServiceByUuidWithClient(serviceUuid, g_gattClient);
}

bool TryGetServices(std::vector<GattService>& services)
{
    services = g_gattClient->GetService();
    if (services.empty()) {
        Logd("No services discovered. Discovering services first...");
        int discoverResult = g_gattClient->DiscoverServices();
        if (discoverResult != BT_NO_ERROR) {
            Logd("Failed to discover services, error code: %d", discoverResult);
            return false;
        }

        // Wait for service discovery to complete
        Logd("Waiting for service discovery to complete...");
        std::this_thread::sleep_for(std::chrono::seconds(SERVICE_DISCOVERY_WAIT_SECONDS));

        services = g_gattClient->GetService();
        if (services.empty()) {
            Logd("No services found after discovery");
            return false;
        }
    }
    return true;
}

bool CheckGattReadCondition(int argc, const char* argv[], std::string& serviceUuid, std::string& characteristicUuid)
{
    CommandHelpInfo helpInfo = {GATT_READ_CV_CMD, GATT_READ_CV_USAGE, GATT_READ_CV_EXAMPLES};
    GattReadConditionParams params = {g_gattClient, argc, argv, serviceUuid, characteristicUuid, helpInfo};
    return CheckGattReadConditionWithClient(params);
}

// CheckReadPermission, CheckWritePermission, CheckSupportWrite moved to common_dump.cpp

void GattSetWriteType(OHOS::Bluetooth::GattCharacteristic* characteristic,
    OHOS::Bluetooth::GattCharacteristic::WriteType writeType, const std::string& writeTypeStr)
{
    if (characteristic == nullptr) {
        Logd("Error: Characteristic is null, cannot set write type");
        return;
    }

    int setWriteTypeResult = characteristic->SetWriteType(writeType);
    if (setWriteTypeResult != BT_NO_ERROR) {
        Logd("Warning: Failed to set write type, error code: %d", setWriteTypeResult);
    } else {
        Logd("Write type set to: %s", writeTypeStr.c_str());
    }
}

void GattWriteCharacteristic(OHOS::Bluetooth::GattCharacteristic* characteristic, std::vector<uint8_t> data,
    OHOS::Bluetooth::GattCharacteristic::WriteType writeType)
{
    if (characteristic == nullptr) {
        Logd("Error: Characteristic is null, cannot write");
        return;
    }

    // Perform the write operation
    Logd("Sending write request...");
    int result = g_gattClient->WriteCharacteristic(*characteristic, std::move(data));
    if (result == BT_NO_ERROR) {
        Logd("GATT WriteCharacteristic request sent successfully");
        if (writeType == GattCharacteristic::WriteType::NO_RESPONSE) {
            Logd("Write without response - no callback expected");
        } else {
            Logd("Result will be received in GATT callback (OnCharacteristicWriteResult)");
        }
    } else {
        Logd("Failed to write characteristic, error code: %d", result);

        // Provide error code interpretation
        PrintGattWriteError(result);
    }
}

void GattWriteDescriptor(OHOS::Bluetooth::GattDescriptor* descriptor, const OHOS::Bluetooth::UUID& descriptorUuid)
{
    if (ShouldReturnVoid(descriptor == nullptr, "Error: Descriptor is null, cannot write")) {
        return;
    }

    Logd("Sending write request...");
    int result = g_gattClient->WriteDescriptor(*descriptor);
    if (result == BT_NO_ERROR) {
        Logd("GATT WriteDescriptor request sent successfully");
        Logd("Result will be received in GATT callback (OnDescriptorWriteResult)");

        // Provide additional context for CCCD writes
        if (descriptorUuid.Equals(UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG))) {
            Logd("Note: CCCD write affects notification/indication behavior for this characteristic");
        }
    } else {
        Logd("Failed to write descriptor, error code: %d", result);

        // Provide error code interpretation
        PrintGattWriteError(result);
    }
}

OHOS::Bluetooth::GattCharacteristic::WriteType WriteType2GattType(const std::string& writeType)
{
    if (writeType == WRITE_TYPE_DEFAULT) {
        return GattCharacteristic::WriteType::DEFAULT;
    } else if (writeType == WRITE_TYPE_NO_RESPONSE) {
        return GattCharacteristic::WriteType::NO_RESPONSE;
    } else if (writeType == WRITE_TYPE_SIGNED) {
        return GattCharacteristic::WriteType::SIGNED;
    } else {
        Logd("Warning: Unknown write type: %s (supported: %s, %s, %s)", writeType.c_str(),
             WRITE_TYPE_DEFAULT, WRITE_TYPE_NO_RESPONSE, WRITE_TYPE_SIGNED);
        Logd("Using default write type");
        return GattCharacteristic::WriteType::DEFAULT;
    }
}

static void HandleDisconnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    if (!mac.empty()) {
        BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
        Logd("Disconnect request for device: %s", mac.c_str());
    } else {
        Logd("Usage: disconnect mac=device_mac_address");
    }
}

static void HandleGetStatus(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    DumpBrStatus();

    // Get discovery status
    bool isDiscovering = false;
    int ret = g_bluetoothHost->IsBtDiscovering(isDiscovering, BT_TRANSPORT_BREDR);
    Logd("Is Discovering[%d]: %s", ret, isDiscovering ? "YES" : "NO");

    long long endTime = isDiscovering ? g_bluetoothHost->GetBtDiscoveryEndMillis() : 0;
    EXEC_IF(isDiscovering, "Discovery End Time: %lld", endTime);
}

// Command table: each group maps to btframework inner_kits (bundle.json header_files). See DESIGN.md.
// - br interaction  -> bluetooth_host.h, bluetooth_remote_device.h, bluetooth_device_class.h
// - ble interaction -> bluetooth_ble_central_manager.h, bluetooth_gatt_client.h, bluetooth_gatt_server.h, ...
// - a2dp            -> clitools_a2dp (bluetooth_a2dp_src.h)
// - socket/spp      -> clitools_socket (bluetooth_socket.h)
// - profile         -> clitools_profile (bluetooth_profile_manager.h)
// - rich            -> mischandle (wait/interactive, no single bundle header)
const struct StaCliCmd g_staCliCmds[] = {
    // br interaction (bluetooth_host, bluetooth_remote_device, bluetooth_device_class)
    {"enable", HandleEnable, "enable"},
    {"disable", HandleDisable, "disable"},
    {"enablebr", HandleEnableBr, "enablebr"},
    {"disablebr", HandleDisableBr, "disablebr"},
    {"enableble", HandleEnableBle, "enableble"},
    {"disableble", HandleDisableBle, "disableble"},
    {"brscan", HandleBrScan, "brscan"},
    {"brstop", HandleBrStop, "brstop"},
    {"getstate", HandleBtState, "getstate"},
    {"getbluetoothstate", HandleBluetoothState, "getbluetoothstate"},
    {"getlocname", HandleBrGetLocalName, "getlocname"},
    {"setlocname", HandleBrSetLocalName, "setlocname name=%s"},
    {"getretname", HandleBrGetRemoteName, "getretname mac=%s"},
    {"setretname", HandleBrSetRemoteName, "setretname mac=%s name=%s"},
    {"getrebatinfo", HandleBrGetRemoteBatteryInfo, "getrebatinfo mac=%s"},
    {"getconntime", HandleBrGetLastConnectTime, "getconntime mac=%s"},
    {"getpairs", HandleBrPairedDevices, "getpairs transport=%d"},
    {"getpairstate", HandleBrPaireState, "getpairstate mac=%s"},
    {"getprofilestate", HandleBrProfileState, "getprofilestate profileid=%d"},
    {"confirmPaire", HandleBrConfirmPair, "confirmPaire mac=%s"},
    {"setPinCode", HandleBrSetPinCode, "setPinCode pin=%s"},
    {"getBtScanMode", HandleBrGetBtScanMode, "getBtScanMode"},
    {"setBtScanMode", HandleBrSetBtScanMode, "setBtScanMode mode=%d duration=%d"},
    {"getbondablemode", HandleBrGetBondableMode, "getbondablemode transport=%d"},
    {"setbondablemode", HandleBrSetBondableMode, "setbondablemode transport=%d mode=%d"},
    {"isdiscovering", HandleBrIsDiscovering, "isdiscovering transport=%d"},
    {"getdiscoveryendtime", HandleBrGetDiscoveryEndTime, "getdiscoveryendtime"},
    {"startdiscovery", HandleBrStartDiscovery, "startdiscovery"},
    {"canceldiscovery", HandleBrCancelDiscovery, "canceldiscovery"},
    {"removeallpairs", HandleBrRemoveAllPairs, "removeallpairs"},
    {"removePaire", HandleBrRemovePair, "removePaire mac=%s"},
    {"startpair", HandleBrStartPair, "startpair mac=%s"},
    {"cancelpair", HandleBrCancelPair, "cancelpair mac=%s"},
    {"isbondedfromlocal", HandleBrIsBondedFromLocal, "isbondedfromlocal transport=%d mac=%s"},
    {"isaclconnected", HandleBrIsAclConnected, "isaclconnected transport=%d mac=%s"},
    {"isaclencrypted", HandleBrIsAclEncrypted, "isaclencrypted transport=%d mac=%s"},
    {"getdeviceclass", HandleBrGetDeviceClass, "getdeviceclass transport=%d mac=%s"},
    {"getdeviceproductid", HandleBrGetDeviceProductId, "getdeviceproductid mac=%s"},
    {"getdeviceuuids", HandleBrGetDeviceUuids, "getdeviceuuids mac=%s"},
    {"setdevicepin", HandleBrSetDevicePin, "setdevicepin mac=%s pin=%s"},
    {"setdevicepairingconfirmation", HandleBrSetDevicePairingConfirmation,
        "setdevicepairingconfirmation mac=%s accept=%d"},
    {"setdevicepasskey", HandleBrSetDevicePasskey, "setdevicepasskey mac=%s passkey=%d accept=%d"},
    {"pairrequestreply", HandleBrPairRequestReply, "pairrequestreply mac=%s accept=%d"},
    {"gettransporttype", HandleBrGetTransportType, "gettransporttype mac=%s"},
    {"readremoterssivalue", HandleBrReadRemoteRssiValue, "readremoterssivalue mac=%s"},
    {"isvalidbluetoothremotedevice", HandleBrIsValidBluetoothRemoteDevice, "isvalidbluetoothremotedevice mac=%s"},
    {"getdeviceproducttype", HandleBrGetDeviceProductType, "getdeviceproducttype mac=%s"},
    {"setdevicecustomtype", HandleBrSetDeviceCustomType, "setdevicecustomtype mac=%s deviceType=%d"},
    {"getdevicevendorid", HandleBrGetDeviceVendorId, "getdevicevendorid mac=%s"},
    {"getdeviceproductid", HandleBrGetDeviceProductId, "getdeviceproductid mac=%s"},
    {"issupportvirtualautoconnect", HandleBrIsSupportVirtualAutoConnect, "issupportvirtualautoconnect mac=%s"},
    {"setvirtualautoconnecttype", HandleBrSetVirtualAutoConnectType,
        "setvirtualautoconnecttype mac=%s connType=%d businessType=%d"},
    {"controldeviceaction", HandleBrControlDeviceAction,
        "controldeviceaction mac=%s type=%d typeValue=%d controlObject=%d"},
    // If needed use: {"getlastconnectiontime", HandleBrGetLastConnectionTime, "getlastconnectiontime mac=%s"},
    {"getcloudbondstate", HandleBrGetCloudBondState, "getcloudbondstate mac=%s"},
    {"getdevicetransport", HandleBrGetDeviceTransport, "getdevicetransport mac=%s"},

    // ble interaction (bluetooth_ble_central_manager, bluetooth_gatt_client, bluetooth_gatt_server, ...)
    {"blescan", HandleBleScan, "blescan"},
    {"blestop", HandleBleStop, "blestop"},
    {"gattconn", HandleGattConnect, "bleconn mac=%s"},
    {"gattdisc", HandleGattDisconnect, "bledisc"},
    {"gattgetserv", HandleGattGetServices, "gattgetserv"},
    {"gattgetdname", HandleGattGetDeviceName, "gattgetdname [method=direct|gatt]"},
    {"gattreadcv", HandleGattReadCharactValue, "gattreadcv service=service_uuid characteristic=characteristic_uuid"},
    {"gattwritecv", HandleGattWriteCharactValue,
        "gattwritecv service=service_uuid characteristic=characteristic_uuid value=data [type=hex|string] "
        "[write_type=default|no_response|signed]"},
    {"gattreaddes", HandleGattReadDescripValue,
        "gattreaddes service=service_uuid characteristic=characteristic_uuid descriptor=descriptor_uuid"},
    {"gattwritedes", HandleGattWriteDescripValue,
        "gattwritedes service=service_uuid characteristic=characteristic_uuid descriptor=descriptor_uuid "
        "value=data [type=hex|string]"},
    {"gattgetrssi", HandleGattGetRssi, "gattgetrssi"},
    {"gattsetmtu", HandleGattSetMtuSize, "gattsetmtu mtu=%d"},
    {"gattcreateserver", HandleGattCreateServer, "gattcreateserver [force=true]"},
    {"gattaddservices", HandleGattAddServices,
        "gattaddservices [type=battery|device_info|heart_rate|thermometer|blood_pressure|current_time|"
        "environmental|pulse_oximeter|custom|health|all]"},
    {"gattdelservices", HandleGattDelServices, "gattdelservices [service=service_uuid] [all=true]"},
    {"gattserverstatus", HandleGattServerStatus, "gattserverstatus"},
    {"gattcloseserver", HandleGattCloseServer, "gattcloseserver"},
    {"gattcreateclient", HandleGattCreateClient, "gattcreateclient"},
    {"blegetconnected", HandleBleGetConnectedDevices, "blegetconnected"},

    // a2dp (clitools_a2dp -> bluetooth_a2dp_src.h)
    {"a2dpconnect", HandleA2dpConnect, "a2dpconnect mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpdisconnect", HandleA2dpDisconnect, "a2dpdisconnect mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpgetdevices", HandleA2dpGetDevices, "a2dpgetdevices"},
    {"a2dpgetdevicestate", HandleA2dpGetDeviceState, "a2dpgetdevicestate mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpsetactive", HandleA2dpSetActiveSink, "a2dpsetactive mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpgetactive", HandleA2dpGetActiveSink, "a2dpgetactive"},
    {"a2dpstartplaying", HandleA2dpStartPlaying, "a2dpstartplaying mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpsuspendplaying", HandleA2dpSuspendPlaying, "a2dpsuspendplaying mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpstopplaying", HandleA2dpStopPlaying, "a2dpstopplaying mac=xx:xx:xx:xx:xx:xx"},
    {"a2dpgetplayingstate", HandleA2dpGetPlayingState, "a2dpgetplayingstate mac=xx:xx:xx:xx:xx:xx"},

    // socket/spp (clitools_socket -> bluetooth_socket.h)
    {"spplisten", HandleSppListen, "spplisten [name=server_name]"},
    {"sppaccept", HandleSppAccept, "sppaccept [timeout=ms]"},
    {"sppconnect", HandleSppConnect, "sppconnect mac=xx:xx:xx:xx:xx:xx"},
    {"sppdisconnect", HandleSppDisconnect, "sppdisconnect"},
    {"sppread", HandleSppRead, "sppread [len=bytes]"},
    {"sppwrite", HandleSppWrite, "sppwrite value=data"},
    {"sppserverclose", HandleSppServerClose, "sppserverclose"},

    // profile (clitools_profile -> bluetooth_profile_manager.h, stub)
    {"profileserviceon", HandleProfileServiceOn, "profileserviceon"},

    // rich interaction (mischandle, no bundle header)
    {"wait", HandleWaitOperation, "wait operation=operation_name"},
    {"waitasync", HandleWaitOperationAsync, "waitasync operation=operation_name"},
    {"interactive", HandleInteractive, "interactive"}
};

const int g_staCliCmdsCount = sizeof(g_staCliCmds) / sizeof(g_staCliCmds[0]);

static void HelpCommand(const char *command)
{
    int count = g_staCliCmdsCount;
    for (int i = 0; i < count; i++) {
        if (strcmp(command, g_staCliCmds[i].cmd) == 0) {
            Logd("%s", g_staCliCmds[i].usage);
            return;
        }
    }
    Logd("can not find command %s", command);
}

void Help(void)
{
    Logd("%s", "support command as follows:");
    int count = g_staCliCmdsCount;
    for (int i = 0; i < count; i++) {
        Logd("%s", g_staCliCmds[i].usage);
    }
}

void HandleUserCommand(int argc, const char *argv[])
{
    AssertReturnWithFunction(argc < ARG_IDX, [&]() {
        Help();
    });

    int count = g_staCliCmdsCount;
    for (int i = 0; i < count; i++) {
        if (strcmp(g_staCliCmds[i].cmd, argv[CMD_IDX]) == 0) {
            if (g_staCliCmds[i].handler != nullptr) {
                RegisterCallbacks();
                g_staCliCmds[i].handler(argc, argv);
                DeregisterCallbacks();
            } else {
                Logd("no handler for command:%s", g_staCliCmds[i].cmd);
            }
            return;
        }
    }
    Help();
}

}
}

int main(int argc, char *argv[])
{
    OHOS::Bluetooth::HandleUserCommand(argc, const_cast<const char **>(argv));
    return 0;
}

