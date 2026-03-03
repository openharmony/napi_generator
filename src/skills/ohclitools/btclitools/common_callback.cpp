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

#include "common_callback.h"
#include "clitools.h"
#include "common_dump.h"

using namespace std;
using namespace OHOS::Bluetooth;

// Global callback instances
std::shared_ptr<BluetoothHostObserverWapper> g_hostObserver = nullptr;
std::shared_ptr<BluetoothRemoteDeviceObserverWapper> g_remoteDeviceObserver = nullptr;
std::shared_ptr<BleCentralManagerCallbackWapper> g_bleCallback = nullptr;
std::shared_ptr<BleGattClientCallback> g_gattCallback = nullptr;
std::shared_ptr<BleGattServerCallback> g_gattServerCallback = nullptr;

// BluetoothHostObserverWapper implementation
void BluetoothHostObserverWapper::OnStateChanged(const int transport, const int status)
{
    Logd("BluetoothHostObserverWapper:OnStateChanged: transport[%d], status[%d]", transport, status);
}

void BluetoothHostObserverWapper::OnDiscoveryStateChanged(int status)
{
    Logd("BluetoothHostObserverWapper:OnDiscoveryStateChanged status[%d]", status);
}

void BluetoothHostObserverWapper::OnDiscoveryResult(
    const BluetoothRemoteDevice &device, int rssi, const std::string deviceName, int deviceClass)
{
    Logd("BluetoothHostObserverWapper:OnDiscoveryResult: deviceName[%s][%d][%s]",
        deviceName.c_str(), rssi, device.GetDeviceAddr().c_str());
}

void BluetoothHostObserverWapper::OnPairRequested(const BluetoothRemoteDevice &device)
{
    Logd("BluetoothHostObserverWapper:OnPairRequested[%s]", device.GetDeviceAddr().c_str());
}

void BluetoothHostObserverWapper::OnPairConfirmed(const BluetoothRemoteDevice &device, int reqType, int number)
{
    Logd("BluetoothHostObserverWapper:OnPairConfirmed[%s]-reqType[%d]-number[%d]",
        device.GetDeviceAddr().c_str(), reqType, number);
    if (reqType == PinType::PIN_TYPE_DISPLAY_PIN_CODE) {
        BluetoothRemoteDevice mutableDevice = device;
        mutableDevice.SetDevicePairingConfirmation(true);

        Logd("BluetoothHostObserverWapper:OnPairConfirmed true");
    }
}

void BluetoothHostObserverWapper::OnScanModeChanged(int mode)
{
    Logd("BluetoothHostObserverWapper:OnScanModeChanged[%d]", mode);
}

void BluetoothHostObserverWapper::OnDeviceNameChanged(const std::string &deviceName)
{
    Logd("BluetoothHostObserverWapper:OnDeviceNameChanged deviceName[%s]", deviceName.c_str());
}

void BluetoothHostObserverWapper::OnDeviceAddrChanged(const std::string &address)
{
    Logd("BluetoothHostObserverWapper:OnDeviceAddrChanged address[%s]", address.c_str());
}

// BluetoothRemoteDeviceObserverWapper implementation
void BluetoothRemoteDeviceObserverWapper::OnAclStateChanged(const BluetoothRemoteDevice &device, int state,
    unsigned int reason)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnAclStateChanged[%s], state[%d]",
        device.GetDeviceAddr().c_str(), state);
}

void BluetoothRemoteDeviceObserverWapper::OnPairStatusChanged(const BluetoothRemoteDevice &device, int status,
    int cause)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnPairStatusChanged[%s], status[%d]",
        device.GetDeviceAddr().c_str(), status);
}

void BluetoothRemoteDeviceObserverWapper::OnRemoteUuidChanged(
    const BluetoothRemoteDevice &device, const std::vector<ParcelUuid> &uuids)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnRemoteUuidChanged[%s]", device.GetDeviceAddr().c_str());
    PrintUuidObjectList(uuids, "OnRemoteUuidChanged:  UUID");
}

void BluetoothRemoteDeviceObserverWapper::OnRemoteNameChanged(
    const BluetoothRemoteDevice &device, const std::string &deviceName)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnRemoteNameChanged[%s] - name[%s]",
        device.GetDeviceAddr().c_str(), deviceName.c_str());
}

void BluetoothRemoteDeviceObserverWapper::OnRemoteAliasChanged(
    const BluetoothRemoteDevice &device, const std::string &alias)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnRemoteAliasChanged[%s] - alias[%s]",
        device.GetDeviceAddr().c_str(), alias.c_str());
}

void BluetoothRemoteDeviceObserverWapper::OnRemoteCodChanged(
    const BluetoothRemoteDevice &device, const BluetoothDeviceClass &cod)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnRemoteCodChanged[%s] - major[%d]-minor[%d]",
        device.GetDeviceAddr().c_str(), cod.GetMajorClass(), cod.GetMajorClass());
}

void BluetoothRemoteDeviceObserverWapper::OnRemoteBatteryLevelChanged(
    const BluetoothRemoteDevice &device, int batteryLevel)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnRemoteBatteryLevelChanged[%s] - level[%d]",
        device.GetDeviceAddr().c_str(), batteryLevel);
}

void BluetoothRemoteDeviceObserverWapper::OnReadRemoteRssiEvent(
    const BluetoothRemoteDevice &device, int rssi, int status)
{
    Logd("BluetoothRemoteDeviceObserverWapper:OnReadRemoteRssiEvent[%s] - rssi[%d] - status[%d]",
        device.GetDeviceAddr().c_str(), rssi, status);
}

// BleCentralManagerCallbackWapper implementation
void BleCentralManagerCallbackWapper::OnScanCallback(const BleScanResult &result)
{
    OHOS::Bluetooth::BleScanResult deviceCopy = result;
    std::string name = deviceCopy.GetName();
    BluetoothRemoteDevice remote = deviceCopy.GetPeripheralDevice();
    std::string mac = remote.GetDeviceAddr();
    Logd("BleCentralManagerCallbackWapper:OnScanCallback: name:%s, mac:%s",
        name.c_str(), mac.c_str());
}

void BleCentralManagerCallbackWapper::OnFoundOrLostCallback(const BleScanResult &result, uint8_t callbackType)
{
    Logd("BleCentralManagerCallbackWapper:OnFoundOrLostCallback ----- ");
    DumpServiceData(result);
    Logd("BleCentralManagerCallbackWapper:OnFoundOrLostCallback --- end --- ");
}

void BleCentralManagerCallbackWapper::OnBleBatchScanResultsEvent(const std::vector<BleScanResult> &results)
{
    Logd("BleCentralManagerCallbackWapper:OnBleBatchScanResultsEvent[%d]", results.size());
    for (size_t i = 0; i < results.size(); i++) {
        Logd("OnBleBatchScanResultsEvent:  result[%d]: -rssi[%d]",
            i, results[i].GetRssi());
    }
}

void BleCentralManagerCallbackWapper::OnStartOrStopScanEvent(int32_t resultCode, bool isStartScan)
{
    Logd("BleCentralManagerCallbackWapper:OnStartOrStopScanEvent: resultCode: %d, isStartScan:%d",
        resultCode, isStartScan);
}

void BleCentralManagerCallbackWapper::OnNotifyMsgReportFromLpDevice(
    const UUID &btUuid, int msgType, const std::vector<uint8_t> &value)
{
    Logd("BleCentralManagerCallbackWapper:OnNotifyMsgReportFromLpDevice uuid[%s]-type[%d]",
        btUuid.ToString().c_str(), msgType);
}

// BleGattClientCallback implementation
void BleGattClientCallback::OnConnectionStateChanged(int connectionState, int ret)
{
    Logd("BleGattClientCallback:OnConnectionStateChanged state[%d]-[%d]", connectionState, ret);
}

void BleGattClientCallback::OnCharacteristicWriteResult(
    const OHOS::Bluetooth::GattCharacteristic &characteristic, int ret)
{
    Logd("BleGattClientCallback:OnCharacteristicWriteResult uuid[%s] - ret[%d]",
        characteristic.GetUuid().ToString().c_str(), ret);
}

void BleGattClientCallback::OnServicesDiscovered(int status)
{
    Logd("BleGattClientCallback:OnServicesDiscovered status[%d]", status);
}

void BleGattClientCallback::OnSetNotifyCharacteristic(
    const OHOS::Bluetooth::GattCharacteristic &characteristic, int status)
{
    Logd("BleGattClientCallback:OnSetNotifyCharacteristic uuid[%s] - status[%d]",
        characteristic.GetUuid().ToString().c_str(), status);
}

void BleGattClientCallback::OnCharacteristicChanged(const OHOS::Bluetooth::GattCharacteristic &characteristic)
{
    Logd("BleGattClientCallback:OnCharacteristicChanged uuid[%s]",
        characteristic.GetUuid().ToString().c_str());
}

const std::string &BleGattClientCallback::GetMac() const
{
    Logd("BleGattClientCallback:GetMac");
    return g_mac;
}

void BleGattClientCallback::SetMac(const std::string &mac)
{
    Logd("BleGattClientCallback:SetMac[%s]", mac.c_str());
}

void BleGattClientCallback::OnMtuUpdate(int mtu, int ret)
{
    Logd("BleGattClientCallback:OnMtuUpdate mtu[%d]-ret[%d]", mtu, ret);
}

// BleGattServerCallback implementation
void BleGattServerCallback::OnConnectionStateUpdate(const BluetoothRemoteDevice &device, int state)
{
    Logd("BleGattServerCallback:OnConnectionStateUpdate device[%s] state[%d]",
        device.GetDeviceAddr().c_str(), state);
}

void BleGattServerCallback::OnServiceAdded(GattService service, int ret)
{
    Logd("BleGattServerCallback:OnServiceAdded service UUID[%s] ret[%d]",
        service.GetUuid().ToString().c_str(), ret);
}

void BleGattServerCallback::OnCharacteristicReadRequest(const BluetoothRemoteDevice &device,
    GattCharacteristic &characteristic, int requestId)
{
    Logd("BleGattServerCallback:OnCharacteristicReadRequest device[%s] characteristic[%s] requestId[%d]",
        device.GetDeviceAddr().c_str(), characteristic.GetUuid().ToString().c_str(), requestId);
}

void BleGattServerCallback::OnCharacteristicWriteRequest(const BluetoothRemoteDevice &device,
    GattCharacteristic &characteristic, int requestId)
{
    Logd("BleGattServerCallback:OnCharacteristicWriteRequest device[%s] characteristic[%s] requestId[%d]",
        device.GetDeviceAddr().c_str(), characteristic.GetUuid().ToString().c_str(), requestId);
}

void BleGattServerCallback::OnDescriptorReadRequest(const BluetoothRemoteDevice &device,
    GattDescriptor &descriptor, int requestId)
{
    Logd("BleGattServerCallback:OnDescriptorReadRequest device[%s] descriptor[%s] requestId[%d]",
        device.GetDeviceAddr().c_str(), descriptor.GetUuid().ToString().c_str(), requestId);
}

void BleGattServerCallback::OnDescriptorWriteRequest(const BluetoothRemoteDevice &device,
    GattDescriptor &descriptor, int requestId)
{
    Logd("BleGattServerCallback:OnDescriptorWriteRequest device[%s] descriptor[%s] requestId[%d]",
        device.GetDeviceAddr().c_str(), descriptor.GetUuid().ToString().c_str(), requestId);
}

void BleGattServerCallback::OnMtuUpdate(const BluetoothRemoteDevice &device, int mtu)
{
    Logd("BleGattServerCallback:OnMtuUpdate device[%s] mtu[%d]",
        device.GetDeviceAddr().c_str(), mtu);
}

void BleGattServerCallback::OnNotificationCharacteristicChanged(const BluetoothRemoteDevice &device, int result)
{
    Logd("BleGattServerCallback:OnNotificationCharacteristicChanged device[%s] result[%d]",
        device.GetDeviceAddr().c_str(), result);
}

void BleGattServerCallback::OnConnectionParameterChanged(const BluetoothRemoteDevice &device,
    int interval, int latency, int timeout, int status)
{
    Logd("BleGattServerCallback:OnConnectionParameterChanged device[%s] interval[%d] latency[%d] "
        "timeout[%d] status[%d]", device.GetDeviceAddr().c_str(), interval, latency, timeout, status);
}

