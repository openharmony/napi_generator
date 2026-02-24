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

#ifndef COMMON_DUMP_H
#define COMMON_DUMP_H

#include <memory>
#include <string>
#include <vector>
#include "bluetooth_host.h"
#include "bluetooth_ble_central_manager.h"
#include "bluetooth_gatt_client.h"
#include "bluetooth_gatt_server.h"
#include "bluetooth_gatt_service.h"
#include "bluetooth_gatt_characteristic.h"
#include "bluetooth_gatt_descriptor.h"

// Global function declarations
void ReportOverallResult(bool foundPrimary, bool foundSecondary, int primaryResult,
    int secondaryResult, const std::string& serviceUuid);

namespace OHOS {
namespace Bluetooth {

// Status dump utility functions
void DumpServiceData(const BleScanResult& result);
void DumpGattService(const std::string& uuidStr);
void DumpBluetoothStatusWithHost(BluetoothHost* bluetoothHost);
void DumpServiceUuids(const std::vector<GattService>& services);

// Error handling functions
void PrintBluetoothErrorCode(int errorCode, const char* operation);
bool IsValidUuidFormat(const std::string& uuid);
void PrintInvalidUuidError(const std::string& uuid);
void PrintServiceNotFound(const std::string& serviceUuid, const std::vector<GattService>& services);
void PrintCharacteristicNotFound(const std::string& characteristicUuid,
    const std::vector<GattCharacteristic>& characteristics, const std::string& serviceUuid);

// Usage printing utility functions
void PrintUsageAndExamples(const char* command, const char* usage, const std::vector<std::string>& examples);

// Assertion and validation functions
bool AssertAndDumpCharacteristicNotFound(const GattCharacteristic* characteristic,
    const std::string& characteristicUuid, GattService* service, const std::string& serviceUuid);
bool AssertAndDumpDescriptorNotFound(const GattDescriptor* descriptor,
    const std::string& descriptorUuid, GattCharacteristic* characteristic, const std::string& characteristicUuid);
bool AssertAndDumpServiceNotFoundWithDiscovery(const GattService* service,
    const std::string& serviceUuid);

// Command help information structure
struct CommandHelpInfo {
    const char* cmdName;
    const char* usage;
    const std::vector<std::string>& examples;
};

// GATT read condition parameters structure
struct GattReadConditionParams {
    std::shared_ptr<GattClient> gattClient;
    int argc;
    const char** argv;
    std::string& serviceUuid;
    std::string& characteristicUuid;
    const CommandHelpInfo& helpInfo;
};

// GATT condition checking functions
bool CheckGattReadConditionWithClient(const GattReadConditionParams& params);
bool CheckReadPermission(const GattDescriptor* descriptor, const char* operation);
bool CheckWritePermission(const GattDescriptor* descriptor, const char* operation);
bool CheckSupportWrite(const GattCharacteristic* characteristic);

// Service utility functions
bool TryGetServices(std::vector<GattService>& services);

// Service retrieval utility functions
GattService* GetServiceByUuidWithClient(const std::string& serviceUuid,
    std::shared_ptr<GattClient> gattClient);

// Parameter parsing utility functions
bool GetMac(int argc, const char *argv[], std::string& mac);
bool GeStrValue(int argc, const char *argv[], const std::string& prefix, std::string& value);
bool GetIntValue(int argc, const char *argv[], const std::string& prefix, int& value);

// Data parsing and conversion functions
bool DumpDataByType(const std::string& value, const std::string& valueType, std::vector<uint8_t>& data);
bool ConvertDescriptorValueByType(const std::string& value, const std::string& valueType,
    std::vector<uint8_t>& data, const UUID& descriptorUuid);

// Device name retrieval functions
void GetDeviceNameDirectlyWithHost(const std::string& deviceAddress, BluetoothHost* bluetoothHost);
void GetDeviceGattNameWithClient(std::shared_ptr<GattClient> gattClient);
void ReadAndDisplayDeviceName(std::shared_ptr<GattClient> gattClient, GattCharacteristic* deviceNameChar);

// String conversion utility functions
bool StringToInt(const std::string& str, int& value);
bool GetIntValue(int argc, const char *argv[], const std::string& prefix, int& value);

// Service creation functions
int AddHealthRelatedServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddAllServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddCustomServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddBatteryServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddHeartRateServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddDeviceInformationServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddHealthThermometerServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddBloodPressureServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddPulseOximeterServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddCurrentTimeServiceWithServer(std::shared_ptr<GattServer> gattServer);
int AddEnvironmentalSensingServiceWithServer(std::shared_ptr<GattServer> gattServer);

// Usage printing functions
void PrintGattDelServicesUsage();
void PrintGattReadDescriptorUsage();
void PrintGattWriteDescriptorUsage();
void DumpCreateServiceUsage();

// Value dumping functions
void DumpCharacteristicValue(const GattCharacteristic* characteristic);
void DumpDescriptorValue(const GattDescriptor* descriptor);

// Error handling functions
void PrintGattWriteError(int errorCode);

} // namespace Bluetooth
} // namespace OHOS

#endif // COMMON_DUMP_H
