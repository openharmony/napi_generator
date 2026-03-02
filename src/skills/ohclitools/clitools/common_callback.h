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

#ifndef COMMON_CALLBACK_H
#define COMMON_CALLBACK_H

#include <memory>
#include <string>
#include <vector>
#include "bluetooth_host.h"
#include "bluetooth_remote_device.h"
#include "bluetooth_device_class.h"
#include "bluetooth_ble_central_manager.h"
#include "bluetooth_gatt_client.h"
#include "bluetooth_gatt_server.h"
#include "bluetooth_gatt_service.h"
#include "bluetooth_gatt_characteristic.h"
#include "bluetooth_gatt_descriptor.h"
#include "bluetooth_errorcode.h"
#include "uuid.h"
#include "ohos_bt_gatt.h"

// Bluetooth Host Observer Wrapper
class BluetoothHostObserverWapper : public OHOS::Bluetooth::BluetoothHostObserver {
public:
    void OnStateChanged(const int transport, const int status) override;
    void OnDiscoveryStateChanged(int status) override;
    void OnDiscoveryResult(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int rssi,
        const std::string deviceName, int deviceClass) override;
    void OnPairRequested(const OHOS::Bluetooth::BluetoothRemoteDevice &device) override;
    void OnPairConfirmed(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int reqType, int number) override;
    void OnScanModeChanged(int mode) override;
    void OnDeviceNameChanged(const std::string &deviceName) override;
    void OnDeviceAddrChanged(const std::string &address) override;
};

// Bluetooth Remote Device Observer Wrapper
class BluetoothRemoteDeviceObserverWapper : public OHOS::Bluetooth::BluetoothRemoteDeviceObserver {
public:
    void OnAclStateChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        int state, unsigned int reason) override;
    void OnPairStatusChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int status, int cause) override;
    void OnRemoteUuidChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        const std::vector<OHOS::Bluetooth::ParcelUuid> &uuids) override;
    void OnRemoteNameChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        const std::string &deviceName) override;
    void OnRemoteAliasChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        const std::string &alias) override;
    void OnRemoteCodChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        const OHOS::Bluetooth::BluetoothDeviceClass &cod) override;
    void OnRemoteBatteryLevelChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        int batteryLevel) override;
    void OnReadRemoteRssiEvent(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        int rssi, int status) override;
};

// BLE Central Manager Callback Wrapper
class BleCentralManagerCallbackWapper : public OHOS::Bluetooth::BleCentralManagerCallback {
public:
    void OnScanCallback(const OHOS::Bluetooth::BleScanResult &result) override;
    void OnFoundOrLostCallback(const OHOS::Bluetooth::BleScanResult &result,
        uint8_t callbackType) override;
    void OnBleBatchScanResultsEvent(
        const std::vector<OHOS::Bluetooth::BleScanResult> &results) override;
    void OnStartOrStopScanEvent(int32_t resultCode, bool isStartScan) override;
    void OnNotifyMsgReportFromLpDevice(const OHOS::Bluetooth::UUID &btUuid,
        int msgType, const std::vector<uint8_t> &value) override;
};

// BLE GATT Client Callback
class BleGattClientCallback : public OHOS::Bluetooth::GattClientCallback {
public:
    void OnConnectionStateChanged(int connectionState, int ret) override;
    void OnCharacteristicWriteResult(
        const OHOS::Bluetooth::GattCharacteristic &characteristic, int ret) override;
    void OnServicesDiscovered(int status) override;
    void OnSetNotifyCharacteristic(const OHOS::Bluetooth::GattCharacteristic &characteristic, int status) override;
    void OnCharacteristicChanged(const OHOS::Bluetooth::GattCharacteristic &characteristic) override;
    const std::string &GetMac() const;
    void SetMac(const std::string &mac);
    void OnMtuUpdate(int mtu, int ret) override;
};

// BLE GATT Server Callback
class BleGattServerCallback : public OHOS::Bluetooth::GattServerCallback {
public:
    void OnConnectionStateUpdate(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int state) override;
    void OnServiceAdded(OHOS::Bluetooth::GattService service, int ret) override;
    void OnCharacteristicReadRequest(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        OHOS::Bluetooth::GattCharacteristic &characteristic, int requestId) override;
    void OnCharacteristicWriteRequest(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        OHOS::Bluetooth::GattCharacteristic &characteristic, int requestId) override;
    void OnDescriptorReadRequest(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        OHOS::Bluetooth::GattDescriptor &descriptor, int requestId) override;
    void OnDescriptorWriteRequest(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        OHOS::Bluetooth::GattDescriptor &descriptor, int requestId) override;
    void OnMtuUpdate(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int mtu) override;
    void OnNotificationCharacteristicChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device, int result) override;
    void OnConnectionParameterChanged(const OHOS::Bluetooth::BluetoothRemoteDevice &device,
        int interval, int latency, int timeout, int status) override;
};

// Global callback instances
extern std::shared_ptr<BluetoothHostObserverWapper> g_hostObserver;
extern std::shared_ptr<BluetoothRemoteDeviceObserverWapper> g_remoteDeviceObserver;
extern std::shared_ptr<BleCentralManagerCallbackWapper> g_bleCallback;
extern std::shared_ptr<BleGattClientCallback> g_gattCallback;
extern std::shared_ptr<BleGattServerCallback> g_gattServerCallback;

#endif // COMMON_CALLBACK_H
