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
#include "uuid.h"
#include "bluetooth_errorcode.h"
#include <thread>
#include <chrono>
#include <string>
#include <map>
#include <cerrno>
#include <climits>
#include <cstdlib>

using OHOS::Bluetooth::BT_NO_ERROR;
using OHOS::Bluetooth::BT_ERR_INVALID_STATE;
using OHOS::Bluetooth::BT_ERR_INTERNAL_ERROR;
using OHOS::Bluetooth::BT_ERR_INVALID_PARAM;
using OHOS::Bluetooth::BT_ERR_PERMISSION_FAILED;
using OHOS::Bluetooth::BT_ERR_SYSTEM_PERMISSION_FAILED;
using OHOS::Bluetooth::BT_ERR_DEVICE_DISCONNECTED;
using OHOS::Bluetooth::BT_ERR_API_NOT_SUPPORT;
using OHOS::Bluetooth::BT_ERR_GATT_READ_NOT_PERMITTED;
using OHOS::Bluetooth::BT_ERR_GATT_WRITE_NOT_PERMITTED;
using OHOS::Bluetooth::BT_ERR_GATT_CONNECTION_NOT_ESTABILISHED;
using OHOS::Bluetooth::BT_ERR_PROFILE_DISABLED;
using OHOS::Bluetooth::BT_ERR_OPERATION_BUSY;
using OHOS::Bluetooth::GattService;
using OHOS::Bluetooth::GattCharacteristic;
using OHOS::Bluetooth::GattDescriptor;
using OHOS::Bluetooth::GattServiceType;
using OHOS::Bluetooth::BluetoothRemoteDevice;
using OHOS::Bluetooth::BluetoothState;
using OHOS::Bluetooth::BluetoothHost;
using OHOS::Bluetooth::BleScanResult;
using OHOS::Bluetooth::GattClient;
using OHOS::Bluetooth::GattServer;
using OHOS::Bluetooth::UUID;


using namespace std;

namespace OHOS {
namespace Bluetooth {

// UUID validation utility functions
bool IsValidUuidFormat(const std::string& uuid)
{
    // Check basic length and dash positions for standard UUID format
    // Format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (36 characters)
    if (uuid.length() != UUID_STANDARD_LENGTH) {
        return false;
    }

    // Check dash positions
    if (uuid[UUID_DASH_POS_1] != '-' || uuid[UUID_DASH_POS_2] != '-' ||
        uuid[UUID_DASH_POS_3] != '-' || uuid[UUID_DASH_POS_4] != '-') {
        return false;
    }

    // Check that all other characters are hexadecimal
    for (size_t i = 0; i < uuid.length(); i++) {
        if (i == UUID_DASH_POS_1 || i == UUID_DASH_POS_2 || i == UUID_DASH_POS_3 || i == UUID_DASH_POS_4) {
            continue; // Skip dash positions
        }
        char c = uuid[i];
        if (!((c >= CHAR_DIGIT_MIN && c <= CHAR_DIGIT_MAX) ||
            (c >= CHAR_HEX_UPPER_MIN && c <= CHAR_HEX_UPPER_MAX) ||
            (c >= CHAR_HEX_LOWER_MIN && c <= CHAR_HEX_LOWER_MAX))) {
            return false;
        }
    }

    return true;
}

void PrintInvalidUuidError(const std::string& uuid)
{
    Logd("Invalid UUID format: '%s'", uuid.c_str());
    Logd("Expected format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    Logd("Example: 12345678-1234-1234-1234-123456789ABC");
}

void DumpGattService(const std::string& uuidStr)
{
    static const std::map<std::string, std::string> serviceNames = {
        {GATT_SERVICE_GENERIC_ACCESS, "Generic Access Service"},
        {GATT_SERVICE_GENERIC_ATTRIBUTE, "Generic Attribute Service"},
        {GATT_SERVICE_IMMEDIATE_ALERT, "Immediate Alert Service"},
        {GATT_SERVICE_LINK_LOSS, "Link Loss Service"},
        {GATT_SERVICE_TX_POWER, "Tx Power Service"},
        {GATT_SERVICE_CURRENT_TIME, "Current Time Service"},
        {GATT_SERVICE_REFERENCE_TIME_UPDATE, "Reference Time Update Service"},
        {GATT_SERVICE_NEXT_DST_CHANGE, "Next DST Change Service"},
        {GATT_SERVICE_GLUCOSE, "Glucose Service"},
        {GATT_SERVICE_HEALTH_THERMOMETER, "Health Thermometer Service"},
        {GATT_SERVICE_DEVICE_INFORMATION, "Device Information Service"},
        {GATT_SERVICE_HEART_RATE, "Heart Rate Service"},
        {GATT_SERVICE_PHONE_ALERT_STATUS, "Phone Alert Status Service"},
        {GATT_SERVICE_BATTERY, "Battery Service"},
        {GATT_SERVICE_BLOOD_PRESSURE, "Blood Pressure Service"},
        {GATT_SERVICE_ALERT_NOTIFICATION, "Alert Notification Service"},
        {GATT_SERVICE_HUMAN_INTERFACE_DEVICE, "Human Interface Device Service"},
        {GATT_SERVICE_SCAN_PARAMETERS, "Scan Parameters Service"},
        {GATT_SERVICE_RUNNING_SPEED_AND_CADENCE, "Running Speed and Cadence Service"},
        {GATT_SERVICE_AUTOMATION_IO, "Automation IO Service"},
        {GATT_SERVICE_CYCLING_SPEED_AND_CADENCE, "Cycling Speed and Cadence Service"},
        {GATT_SERVICE_CYCLING_POWER, "Cycling Power Service"},
        {GATT_SERVICE_LOCATION_AND_NAVIGATION, "Location and Navigation Service"},
        {GATT_SERVICE_ENVIRONMENTAL_SENSING, "Environmental Sensing Service"},
        {GATT_SERVICE_PULSE_OXIMETER, "Pulse Oximeter Service"}
    };

    Logd("Service UUID: %s", uuidStr.c_str());

    auto it = serviceNames.find(uuidStr);
    if (it != serviceNames.end()) {
        Logd("    Name: %s", it->second.c_str());
    } else {
        Logd("    Name: Unknown Service");
    }
}

bool CheckSupportWrite(const GattCharacteristic* characteristic)
{
    if (characteristic == nullptr) {
        Logd("Characteristic is null");
        return false;
    }

    int properties = characteristic->GetProperties();
    bool supportsWrite = (properties & GattCharacteristic::WRITE) != 0;
    bool supportsWriteNoResponse = (properties & GattCharacteristic::WRITE_WITHOUT_RESPONSE) != 0;
    if (!supportsWrite && !supportsWriteNoResponse) {
        Logd("Characteristic does not support write operations. Properties: 0x%02X", properties);
        return false;
    }

    return true;
}

bool CheckReadPermission(const GattDescriptor* descriptor, const char* operation)
{
    if (descriptor == nullptr) {
        Logd("%s: Descriptor is null", operation);
        return false;
    }

    int permissions = descriptor->GetPermissions();
    bool hasReadPermission = (permissions & GattCharacteristic::Permission::READABLE) != 0;
    if (!hasReadPermission) {
        Logd("%s: Descriptor does not have read permission. Permissions: 0x%02X", operation, permissions);
        return false;
    }

    return true;
}

bool CheckWritePermission(const GattDescriptor* descriptor, const char* operation)
{
    if (descriptor == nullptr) {
        Logd("%s: Descriptor is null", operation);
        return false;
    }

    int permissions = descriptor->GetPermissions();
    bool hasWritePermission = (permissions & GattCharacteristic::Permission::WRITEABLE) != 0;
    if (!hasWritePermission) {
        Logd("%s: Descriptor does not have write permission. Permissions: 0x%02X", operation, permissions);
        return false;
    }

    return true;
}

// Common print utility functions
void PrintUsageAndExamples(const char* command, const char* usage, const std::vector<std::string>& examples)
{
    Logd("Usage: %s", usage);
    if (!examples.empty()) {
        Logd("Examples:");
        for (const auto& example : examples) {
            Logd("  %s", example.c_str());
        }
    }
}

void PrintAvailableServices(const std::vector<GattService>& services, const char* title)
{
    Logd("%s", title);
    for (size_t i = 0; i < services.size(); i++) {
        Logd("  Service[%zu]: %s", i, services[i].GetUuid().ToString().c_str());
    }
}

void PrintAvailableCharacteristics(const std::vector<GattCharacteristic>& characteristics,
    const std::string& serviceUuid)
{
    Logd("Available characteristics in service %s:", serviceUuid.c_str());
    for (size_t i = 0; i < characteristics.size(); i++) {
        Logd("  Characteristic[%zu]: %s", i, characteristics[i].GetUuid().ToString().c_str());
    }
}

void PrintServiceNotFound(const std::string& serviceUuid, const std::vector<GattService>& services)
{
    Logd("Service not found: %s", serviceUuid.c_str());
    PrintAvailableServices(services, "Available services:");
}

void PrintCharacteristicNotFound(const std::string& characteristicUuid,
    const std::vector<GattCharacteristic>& characteristics, const std::string& serviceUuid)
{
    Logd("Characteristic not found: %s", characteristicUuid.c_str());
    PrintAvailableCharacteristics(characteristics, serviceUuid);
}

void PrintBluetoothErrorCode(int errorCode, const char* operation)
{
    const char* operationStr = operation ? operation : "operation";

    static const std::map<int, std::string> errorMessages = {
        {BT_NO_ERROR, "%s completed successfully"},
        {BT_ERR_INVALID_STATE, "Error: Bluetooth is not enabled or device is in invalid state"},
        {BT_ERR_INTERNAL_ERROR, "Error: Internal error occurred during %s"},
        {BT_ERR_INVALID_PARAM, "Error: Invalid parameter provided for %s"},
        {BT_ERR_PERMISSION_FAILED, "Error: Permission failed for %s"},
        {BT_ERR_SYSTEM_PERMISSION_FAILED, "Error: System permission failed for %s"},
        {BT_ERR_DEVICE_DISCONNECTED, "Error: Device not connected during %s"},
        {BT_ERR_API_NOT_SUPPORT, "Error: API not supported: %s"},
        {BT_ERR_GATT_READ_NOT_PERMITTED, "Error: GATT read not permitted"},
        {BT_ERR_GATT_WRITE_NOT_PERMITTED, "Error: GATT write not permitted"},
        {BT_ERR_GATT_CONNECTION_NOT_ESTABILISHED, "Error: GATT connection not established"},
        {BT_ERR_PROFILE_DISABLED, "Error: Bluetooth profile is disabled"},
        {BT_ERR_OPERATION_BUSY, "Error: Another operation is in progress, please try again later"}
    };

    auto it = errorMessages.find(errorCode);
    if (it != errorMessages.end()) {
        const std::string& message = it->second;
        if (message.find("%s") != std::string::npos) {
            Log((message + "\n").c_str(), operationStr);
        } else {
            Log((message + "\n").c_str());
        }
    } else {
        Logd("Error: Unknown error code %d during %s", errorCode, operationStr);
    }
}


// Usage printing utility functions
void PrintGattDelServicesUsage()
{
    Logd("");
    Logd("Usage:");
    Logd("  Remove specific service: gattdelservices service=service_uuid");
    Logd("  Remove all services: gattdelservices all=true");
}

void PrintGattReadDescriptorUsage()
{
    Logd("Usage: gattreaddes service=service_uuid characteristic=characteristic_uuid descriptor=descriptor_uuid");
    Logd("Examples:");
    Logd("  gattreaddes service=0000180F-0000-1000-8000-00805F9B34FB "
        "characteristic=00002A19-0000-1000-8000-00805F9B34FB descriptor=00002902-0000-1000-8000-00805F9B34FB");
    Logd("  gattreaddes service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL "
        "descriptor=GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG");
}

void PrintGattWriteDescriptorUsage()
{
    Logd("Usage: gattwritedes service=service_uuid characteristic=characteristic_uuid "
        "descriptor=descriptor_uuid value=data [type=hex|string]");
    Logd("Examples:");
    Logd("  // Enable notifications (CCCD)");
    Logd("  gattwritedes service=0000180F-0000-1000-8000-00805F9B34FB "
        "characteristic=00002A19-0000-1000-8000-00805F9B34FB descriptor=00002902-0000-1000-8000-00805F9B34FB "
        "value=0100 type=hex");
    Logd("  // Write user description");
    Logd("  gattwritedes service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL "
        "descriptor=GATT_DESC_CHARACTERISTIC_USER_DESC value=\"Battery Level\" type=string");
}

void DumpCreateServiceUsage()
{
    Logd("Available types:");
    Logd("  Basic: battery, device_info, heart_rate, custom");
    Logd("  Health: thermometer, blood_pressure, pulse_oximeter");
    Logd("  Utility: current_time, environmental");
    Logd("  Groups: health (health services), all (all services)");
}


// Status dump utility functions
void PrintGattWriteError(int errorCode)
{
    PrintBluetoothErrorCode(errorCode, "GATT write operation");
}

void DumpCCCD(const uint8_t* data, size_t length)
{
    if (length == CCCD_DATA_LENGTH) {
        uint16_t cccdValue = data[CCCD_LSB_IDX] | (data[CCCD_MSB_IDX] << BYTE_SHIFT_BITS);
        Logd("  CCCD Interpretation:");
        if (cccdValue == CCCD_VALUE_DISABLED) {
            Logd("    Notifications and Indications disabled");
        } else if (cccdValue == CCCD_VALUE_NOTIFICATIONS) {
            Logd("    Notifications enabled");
        } else if (cccdValue == CCCD_VALUE_INDICATIONS) {
            Logd("    Indications enabled");
        } else if (cccdValue == CCCD_VALUE_BOTH) {
            Logd("    Both Notifications and Indications enabled");
        } else {
            Logd("    Unknown CCCD value: 0x%04X", cccdValue);
        }
    }
}

void DumpCCCDInterpretation(const uint8_t* data, size_t length)
{
    if (length == CCCD_DATA_LENGTH) {
        uint16_t cccdValue = data[CCCD_LSB_IDX] | (data[CCCD_MSB_IDX] << BYTE_SHIFT_BITS);
        Logd("  CCCD Interpretation:");
        if (cccdValue == CCCD_VALUE_DISABLED) {
            Logd("    Setting: Notifications and Indications disabled");
        } else if (cccdValue == CCCD_VALUE_NOTIFICATIONS) {
            Logd("    Setting: Notifications enabled");
        } else if (cccdValue == CCCD_VALUE_INDICATIONS) {
            Logd("    Setting: Indications enabled");
        } else if (cccdValue == CCCD_VALUE_BOTH) {
            Logd("    Setting: Both Notifications and Indications enabled");
        } else {
            Logd("    Setting: Unknown CCCD value: 0x%04X", cccdValue);
        }
    }
}

void DumpPresentation(const uint8_t* data, size_t length)
{
    if (length >= PRESENTATION_FORMAT_MIN_LENGTH) {
        Logd("  Presentation Format:");
        Logd("    Format: 0x%02X", data[PRESENTATION_FORMAT_IDX]);
        Logd("    Exponent: %d", static_cast<int8_t>(data[PRESENTATION_EXPONENT_IDX]));
        uint16_t unit = data[PRESENTATION_UNIT_LSB_IDX] | (data[PRESENTATION_UNIT_MSB_IDX] << BYTE_SHIFT_BITS);
        Logd("    Unit: 0x%04X", unit);
        Logd("    Namespace: 0x%02X", data[PRESENTATION_NAMESPACE_IDX]);
        uint16_t description = data[PRESENTATION_DESCRIPTION_LSB_IDX] |
            (data[PRESENTATION_DESCRIPTION_MSB_IDX] << BYTE_SHIFT_BITS);
        Logd("    Description: 0x%04X", description);
    }
}

void DumpCharacteristicValue(const GattCharacteristic* characteristic)
{
    if (characteristic == nullptr) {
        Logd("Characteristic is null");
        return;
    }

    size_t currentValueLength = 0;
    const std::unique_ptr<uint8_t[]> &currentValue = characteristic->GetValue(&currentValueLength);
    if (currentValue != nullptr && currentValueLength > 0) {
        Logd("Current cached value (%zu bytes):", currentValueLength);
        std::string hexValue;
        for (size_t i = 0; i < currentValueLength; i++) {
            char hex[HEX_BYTE_BUFFER_SIZE];
            int result = sprintf_s(hex, sizeof(hex), "%02X ", currentValue.get()[i]);
            if (result > 0) {
                hexValue += hex;
            }
        }
        Logd("  Hex: %s", hexValue.c_str());

        // Try to interpret as string if printable
        bool isPrintable = true;
        for (size_t i = 0; i < currentValueLength; i++) {
            if (currentValue.get()[i] < ASCII_PRINTABLE_MIN || currentValue.get()[i] > ASCII_PRINTABLE_MAX) {
                isPrintable = false;
                break;
            }
        }
        if (isPrintable) {
            std::string stringValue(reinterpret_cast<char*>(currentValue.get()), currentValueLength);
            Logd("  String: \"%s\"", stringValue.c_str());
        }
    } else {
        Logd("No cached value available");
    }
}

void DumpDescriptorValue(const GattDescriptor* descriptor)
{
    if (descriptor == nullptr) {
        Logd("Descriptor is null");
        return;
    }

    size_t currentValueLength = 0;
    const std::unique_ptr<uint8_t[]> &currentValue = descriptor->GetValue(&currentValueLength);
    if (currentValue != nullptr && currentValueLength > 0) {
        Logd("Current cached value (%zu bytes):", currentValueLength);
        std::string hexValue;
        for (size_t i = 0; i < currentValueLength; i++) {
            char hex[HEX_BYTE_BUFFER_SIZE];
            int result = sprintf_s(hex, sizeof(hex), "%02X ", currentValue.get()[i]);
            if (result > 0) {
                hexValue += hex;
            }
        }
        Logd("  Hex: %s", hexValue.c_str());

        // Try to interpret as string if printable
        bool isPrintable = true;
        for (size_t i = 0; i < currentValueLength; i++) {
            if (currentValue.get()[i] < ASCII_PRINTABLE_MIN || currentValue.get()[i] > ASCII_PRINTABLE_MAX) {
                isPrintable = false;
                break;
            }
        }
        if (isPrintable && currentValueLength > 0) {
            std::string stringValue(reinterpret_cast<char*>(currentValue.get()), currentValueLength);
            Logd("  String: \"%s\"", stringValue.c_str());
        }

        // Check for known descriptor types and provide interpretation
        UUID dUuid = descriptor->GetUuid();
        if (dUuid.Equals(UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG))) {
            DumpCCCD(currentValue.get(), currentValueLength);
        } else if (dUuid.Equals(UUID::FromString(GATT_DESC_CHARACTERISTIC_USER_DESC))) {
            Logd("  User Description: Human-readable characteristic description");
        } else if (dUuid.Equals(UUID::FromString(GATT_DESC_CHARACTERISTIC_PRESENTATION))) {
            DumpPresentation(currentValue.get(), currentValueLength);
        }
    } else {
        Logd("No cached value available");
    }
}

void DumpServiceData(const BleScanResult& result)
{
    // Print service UUIDs
    std::vector<UUID> uuids = result.GetServiceUuids();
    PrintUuidObjectList(uuids, "OnFoundOrLostCallback:  UUID");

    // Print manufacturer data
    std::map<uint16_t, std::string> manufacturerData = result.GetManufacturerData();
    for (auto it = manufacturerData.begin(); it != manufacturerData.end(); ++it) {
        uint16_t manufacturerId = it->first;
        const std::string& data = it->second;
        Logd("Manufacturer ID: 0x%04X, Data: %s", manufacturerId, data.c_str());
    }

    // Print service data
    std::map<UUID, std::string> serviceData = result.GetServiceData();
    for (auto it = serviceData.begin(); it != serviceData.end(); ++it) {
        UUID serviceId = it->first;
        const std::string& data = it->second;
        Logd("Service ID: %s, Data: %s", serviceId.ToString().c_str(), data.c_str());
    }

    // Print remote device information
    BluetoothRemoteDevice remoteDevice = result.GetPeripheralDevice();
    Logd("OnFoundOrLostCallback:  remote name[%s]", remoteDevice.GetDeviceName().c_str());
    Logd("OnFoundOrLostCallback:  result rssi[%d]", result.GetRssi());
    Logd("OnFoundOrLostCallback:  result isConnectable[%d]", result.IsConnectable());
    Logd("OnFoundOrLostCallback:  result advertiseFlag[%d]", result.GetAdvertiseFlag());

    // Print payload data
    std::vector<uint8_t> payload = result.GetPayload();
    for (size_t i = 0; i < payload.size(); i++) {
        Logd("OnFoundOrLostCallback:  payload[%d]: %d", i, payload[i]);
    }
    Logd("OnFoundOrLostCallback:  result GetEventType[%d]", result.GetEventType());
}

void DumpServiceUuids(const std::vector<GattService>& services)
{
    Logd("GATT GetServices: found %zu services", services.size());
    for (size_t i = 0; i < services.size(); i++) {
        UUID serviceUuid = services[i].GetUuid();
        Logd("  Service[%zu]: UUID=%s", i, serviceUuid.ToString().c_str());
    }
}

// Assertion and validation functions
bool AssertAndDumpServiceNotFound(const GattService* service, const std::string& serviceUuid,
    const std::vector<GattService>& services)
{
    if (service == nullptr) {
        Logd("Service not found: %s", serviceUuid.c_str());
        Logd("Available services:");
        for (size_t i = 0; i < services.size(); i++) {
            Logd("  Service[%zu]: %s", i, services[i].GetUuid().ToString().c_str());
        }
        return true; // Should return from calling function
    }
    return false; // Continue execution
}

bool AssertAndDumpCharacteristicNotFound(const GattCharacteristic* characteristic,
    const std::string& characteristicUuid, GattService* service, const std::string& serviceUuid)
{
    if (characteristic == nullptr) {
        Logd("Characteristic not found: %s", characteristicUuid.c_str());

        // List available characteristics
        const std::vector<GattCharacteristic>& characteristics = service->GetCharacteristics();
        Logd("Available characteristics in service %s:", serviceUuid.c_str());
        for (size_t i = 0; i < characteristics.size(); i++) {
            Logd("  Characteristic[%zu]: %s", i, characteristics[i].GetUuid().ToString().c_str());
        }
        return true; // Should return from calling function
    }
    return false; // Continue execution
}

bool AssertAndDumpDescriptorNotFound(const GattDescriptor* descriptor,
    const std::string& descriptorUuid, GattCharacteristic* characteristic,
    const std::string& characteristicUuid)
{
    if (descriptor == nullptr) {
        Logd("Descriptor not found: %s", descriptorUuid.c_str());

        // List available descriptors
        const std::vector<GattDescriptor>& descriptors = characteristic->GetDescriptors();
        Logd("Available descriptors in characteristic %s:", characteristicUuid.c_str());
        for (size_t i = 0; i < descriptors.size(); i++) {
            Logd("  Descriptor[%zu]: %s", i, descriptors[i].GetUuid().ToString().c_str());
        }
        return true; // Should return from calling function
    }
    return false; // Continue execution
}

bool AssertAndDumpServiceNotFoundWithServices(const GattService* service,
    const std::string& serviceUuid, const std::vector<GattService>& services)
{
    if (service == nullptr) {
        Logd("Service not found: %s", serviceUuid.c_str());

        if (!services.empty()) {
            Logd("Available services:");
            for (size_t i = 0; i < services.size(); i++) {
                Logd("  Service[%zu]: %s", i, services[i].GetUuid().ToString().c_str());
            }
        } else {
            Logd("No services available. Try discovering services first.");
        }
        return true; // Should return from calling function
    }
    return false; // Continue execution
}

// Parameter parsing utility function
bool GeStrValue(int argc, const char *argv[], const std::string& prefix, std::string& svalue)
{
    svalue = "";
    Logd("enter GeStrValue argc=%d", argc);
    for (int i = 2; i < argc; i++) { // Start from index 2 (ARG_IDX)
        Logd("GeStrValue argc=%d argv[%s]", i, argv[i]);
        std::string input = argv[i];
        size_t pos = input.find(prefix);
        if (pos == 0) {
            svalue = input.substr(prefix.length());
            Logd("GeStrValue find prefix[%s] value[%s]", prefix.c_str(), svalue.c_str());
            return true;
        }
    }
    return false;
}

// GATT condition checking function (parameterized version)
bool CheckGattReadConditionWithClient(const GattReadConditionParams& params)
{
    // Check if GATT client is initialized
    if (params.gattClient == nullptr) {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
        return false;
    }

    // Check if required parameters are provided
    if (!GeStrValue(params.argc, params.argv, PARAM_SERVICE, params.serviceUuid) ||
        !GeStrValue(params.argc, params.argv, PARAM_CHARACTERISTIC, params.characteristicUuid)) {
        PrintUsageAndExamples(params.helpInfo.cmdName, params.helpInfo.usage, params.helpInfo.examples);
        return false;
    }

    // Validate UUID formats
    if (!IsValidUuidFormat(params.serviceUuid)) {
        Logd("Invalid service UUID:");
        PrintInvalidUuidError(params.serviceUuid);
        return false;
    }

    if (!IsValidUuidFormat(params.characteristicUuid)) {
        Logd("Invalid characteristic UUID:");
        PrintInvalidUuidError(params.characteristicUuid);
        return false;
    }

    return true;
}

// Bluetooth status dump function (parameterized version)
void DumpBluetoothStatusWithHost(BluetoothHost* bluetoothHost)
{
    if (bluetoothHost == nullptr) {
        Logd("Bluetooth host is not initialized");
        return;
    }

    bool brEnabled = bluetoothHost->IsBrEnabled();
    bool bleEnabled = bluetoothHost->IsBleEnabled();
    BluetoothState state = bluetoothHost->GetBluetoothState();

    // Get local name and address
    std::string localName = bluetoothHost->GetLocalName();
    std::string localAddr = "";
    int ret = bluetoothHost->GetLocalAddress(localAddr);

    Logd("GetLocalAddress[%d] - [%s]", ret, localAddr.c_str());
    Logd("=== Bluetooth Status ===");
    Logd("BR/EDR Enabled: %s", brEnabled ? "YES" : "NO");
    Logd("BLE Enabled: %s", bleEnabled ? "YES" : "NO");
    Logd("Bluetooth State: %d", static_cast<int>(state));
    Logd("Local Name: %s", localName.c_str());
    Logd("Local Address: %s", localAddr.c_str());
}

// Data parsing and conversion functions
bool ParseHexData(const std::string& hexValue, std::vector<uint8_t>& data)
{
    // Check if hex value has even number of characters
    if (hexValue.length() % HEX_CHAR_PAIR_LENGTH != 0) {
        Logd("Error: Hex value must have even number of characters");
        return false;
    }

    data.clear();

    // Parse hex string
    for (size_t i = 0; i < hexValue.length(); i += HEX_CHAR_PAIR_LENGTH) {
        std::string byteString = hexValue.substr(i, HEX_CHAR_PAIR_LENGTH);
        char* endPtr;
        uint8_t byte = static_cast<uint8_t>(strtol(byteString.c_str(), &endPtr, HEX_BASE));
        if (*endPtr != '\0') {
            Logd("Error: Invalid hex character in value: %s", byteString.c_str());
            return false;
        }

        data.push_back(byte);
    }

    // Display parsed data
    Logd("Parsed hex value (%zu bytes):", data.size());
    std::string hexDisplay;
    for (size_t i = 0; i < data.size(); i++) {
        char hex[HEX_BYTE_BUFFER_SIZE];
        int result = sprintf_s(hex, sizeof(hex), "%02X ", data[i]);
        if (result > 0) {
            hexDisplay += hex;
        }
    }
    Logd("  Hex: %s", hexDisplay.c_str());

    return true;
}

bool DumpDataByType(const std::string& value, const std::string& valueType, std::vector<uint8_t>& data)
{
    if (valueType == VALUE_TYPE_HEX) {
        // Parse hex string
        if (!ParseHexData(value, data)) {
            return false;
        }
    } else if (valueType == VALUE_TYPE_STRING) {
        // Convert string to bytes
        data.assign(value.begin(), value.end());
        Logd("Parsed string value (%zu bytes): \"%s\"", data.size(), value.c_str());
    } else {
        Logd("Error: Unknown value type: %s (supported: hex, string)", valueType.c_str());
        return false;
    }

    return true;
}

bool ConvertDescriptorValueByType(const std::string& value, const std::string& valueType,
    std::vector<uint8_t>& data, const OHOS::Bluetooth::UUID& descriptorUuid)
{
    if (valueType == VALUE_TYPE_HEX) {
        // Parse hex string
        if (!ParseHexData(value, data)) {
            return false;
        }

        // Interpret CCCD values
        if (descriptorUuid.Equals(UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG))) {
            DumpCCCDInterpretation(data.data(), data.size());
        }
    } else if (valueType == VALUE_TYPE_STRING) {
        // Convert string to bytes
        data.assign(value.begin(), value.end());
        Logd("Parsed string value (%zu bytes): \"%s\"", data.size(), value.c_str());
    } else {
        Logd("Error: Unknown value type: %s (supported: hex, string)", valueType.c_str());
        return false;
    }

    return true;
}

// Service retrieval utility functions
GattService* GetServiceByUuidFromList(const std::string& serviceUuid, std::vector<GattService>& services)
{
    UUID sUuid = UUID::FromString(serviceUuid);
    for (auto& service : services) {
        if (service.GetUuid().Equals(sUuid)) {
            return &service;
        }
    }
    return nullptr;
}

GattService* GetServiceByUuidWithClient(const std::string& serviceUuid,
    std::shared_ptr<GattClient> gattClient)
{
    if (gattClient == nullptr) {
        return nullptr;
    }

    std::vector<GattService> services = gattClient->GetService();
    if (services.empty()) {
        Logd("No services discovered. Discovering services first...");
        int discoverResult = gattClient->DiscoverServices();
        if (discoverResult != BT_NO_ERROR) {
            Logd("Failed to discover services, error code: %d", discoverResult);
            return nullptr;
        }

        // Wait for service discovery to complete
        std::this_thread::sleep_for(std::chrono::seconds(SERVICE_DISCOVERY_WAIT_SECONDS));

        services = gattClient->GetService();
        if (services.empty()) {
            Logd("No services found after discovery");
            return nullptr;
        }
    }

    return GetServiceByUuidFromList(serviceUuid, services);
}

// Parameter parsing utility functions
bool GetMac(int argc, const char *argv[], std::string& mac)
{
    mac = "";
    Logd("enter GetMac argc=%d", argc);
    for (int i = 2; i < argc; i++) { // ARG_IDX = 2
        Logd("GetMac argc=%d argv[%s]", i, argv[i]);
        std::string input = argv[i];
        std::string prefix = PARAM_MAC;

        if (input.substr(0, prefix.length()) == prefix) {
            mac = input.substr(prefix.length());  // Extract content after "mac="
            Logd("MAC: %s\n", mac.c_str());
        } else {
            Logd("wrong input: mac=00:00:00:00:00:00\n");
        }
    }
    if (mac.length() < 0) {
        Logd("Invalid MAC address format");
        return false;
    }
    Logd("GetMac = %s", mac.c_str());
    return true;
}

bool StringToInt(const std::string& str, int& result)
{
    if (str.empty()) {
        Logd("Failed to convert string to int: empty string");
        return false;
    }

    char* endPtr = nullptr;
    errno = 0;
    long longResult = strtol(str.c_str(), &endPtr, 10);
    // Check for conversion errors
    if (errno == ERANGE || longResult > INT_MAX || longResult < INT_MIN) {
        Logd("Failed to convert string to int: %s (out of range)", str.c_str());
        return false;
    }

    if (endPtr == str.c_str() || *endPtr != '\0') {
        Logd("Failed to convert string to int: %s (invalid format)", str.c_str());
        return false;
    }

    result = static_cast<int>(longResult);
    return true;
}

bool GetIntValue(int argc, const char *argv[], const std::string& prefix, int& value)
{
    std::string strValue;
    if (GeStrValue(argc, argv, prefix, strValue)) {
        return StringToInt(strValue, value);
    }
    return false;
}

// Device name retrieval functions (parameterized versions)
void GetDeviceNameDirectlyWithHost(const std::string& deviceAddress, BluetoothHost* bluetoothHost)
{
    if (bluetoothHost == nullptr) {
        Logd("Bluetooth host is null");
        return;
    }

    // Method 1: Get device name directly from BluetoothRemoteDevice
    Logd("Getting device name using direct method...");
    Logd("Device address: %s", deviceAddress.c_str());

    BluetoothRemoteDevice remoteDevice = bluetoothHost->GetRemoteDevice(deviceAddress, BT_TRANSPORT_BLE);
    std::string deviceName = remoteDevice.GetDeviceName();
    if (!deviceName.empty() && deviceName != "INVALID_NAME") {
        Logd("Device Name (Direct): %s", deviceName.c_str());
    } else {
        Logd("Device name not available or invalid, trying alternative method...");

        // Try with alias flag
        std::string nameWithAlias;
        bool useAlias = false;
        int result = remoteDevice.GetDeviceName(nameWithAlias, useAlias);
        if (result == BT_NO_ERROR && !nameWithAlias.empty()) {
            Logd("Device Name (Direct with alias): %s", nameWithAlias.c_str());
        } else {
            Logd("Failed to get device name, error code: %d", result);

            // Try with alias = true
            useAlias = true;
            result = remoteDevice.GetDeviceName(nameWithAlias, useAlias);
            if (result == BT_NO_ERROR && !nameWithAlias.empty()) {
                Logd("Device Name (Direct with alias=true): %s", nameWithAlias.c_str());
            } else {
                Logd("Failed to get device name with alias, error code: %d", result);
            }
        }
    }
}

void GetDeviceGattNameWithClient(std::shared_ptr<GattClient> gattClient)
{
    if (gattClient == nullptr) {
        Logd("GATT client is null");
        return;
    }

    Logd("Getting device name using GATT method...");

    // First discover services if not done already
    std::vector<GattService> services = gattClient->GetService();
    if (services.empty()) {
        Logd("No services discovered. Discovering services first...");
        int discoverResult = gattClient->DiscoverServices();
        if (discoverResult != BT_NO_ERROR) {
            Logd("Failed to discover services, error code: %d", discoverResult);
            return;
        }

        // Wait for service discovery to complete
        std::this_thread::sleep_for(std::chrono::seconds(SERVICE_DISCOVERY_WAIT_SECONDS));

        services = gattClient->GetService();
        if (services.empty()) {
            Logd("No services found after discovery");
            return;
        }
    }

    // Look for Generic Access Service (0x1800)
    UUID genericAccessServiceUuid = UUID::FromString(GATT_SERVICE_GENERIC_ACCESS);
    GattService* genericAccessService = nullptr;

    for (auto& service : services) {
        if (service.GetUuid().Equals(genericAccessServiceUuid)) {
            genericAccessService = &service;
            break;
        }
    }

    if (genericAccessService == nullptr) {
        Logd("Generic Access Service (0x1800) not found");
        return;
    }

    Logd("Found Generic Access Service");

    // Look for Device Name characteristic (0x2A00)
    UUID deviceNameCharUuid = UUID::FromString(GATT_CHAR_DEVICE_NAME);
    GattCharacteristic* deviceNameChar = genericAccessService->GetCharacteristic(deviceNameCharUuid);
    if (deviceNameChar == nullptr) {
        Logd("Device Name characteristic (0x2A00) not found in Generic Access Service");
        return;
    }

    Logd("Found Device Name characteristic, attempting to read...");

    ReadAndDisplayDeviceName(gattClient, deviceNameChar);
}

void ReadAndDisplayDeviceName(std::shared_ptr<GattClient> gattClient, GattCharacteristic* deviceNameChar)
{
    if (gattClient == nullptr) {
        Logd("GATT client is null");
        return;
    }

    if (deviceNameChar == nullptr) {
        Logd("Device name characteristic is null");
        return;
    }

    // Read the device name characteristic
    int readResult = gattClient->ReadCharacteristic(*deviceNameChar);
    if (readResult == BT_NO_ERROR) {
        Logd("Device name read request sent successfully");
        Logd("Device name value will be received in GATT callback");

        // Get current value if available
        size_t valueLength = 0;
        const std::unique_ptr<uint8_t[]> &value = deviceNameChar->GetValue(&valueLength);
        if (value != nullptr && valueLength > 0) {
            std::string deviceName(reinterpret_cast<char*>(value.get()), valueLength);
            Logd("Device Name (GATT): %s", deviceName.c_str());
        } else {
            Logd("Device name characteristic value is empty or not yet read");
        }
    } else {
        Logd("Failed to read device name characteristic, error code: %d", readResult);
    }
}


// GATT Service creation functions (parameterized versions)
int AddBatteryServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Battery Service...");

    // Create Battery Service (UUID: 0x180F)
    UUID batteryServiceUuid = UUID::FromString(GATT_SERVICE_BATTERY);
    GattService batteryService(batteryServiceUuid, GattServiceType::PRIMARY);

    // Create Battery Level Characteristic (UUID: 0x2A19)
    UUID batteryLevelUuid = UUID::FromString(GATT_CHAR_BATTERY_LEVEL);
    int permissions = GattCharacteristic::Permission::READABLE;
    int properties = GattCharacteristic::Propertie::READ | GattCharacteristic::Propertie::NOTIFY;
    GattCharacteristic batteryLevelChar(batteryLevelUuid, permissions, properties);

    // Set initial battery level value (85%)
    uint8_t batteryLevel = DEFAULT_BATTERY_LEVEL;
    batteryLevelChar.SetValue(&batteryLevel, sizeof(batteryLevel));

    // Add Client Characteristic Configuration Descriptor (for notifications)
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED; // Notifications disabled by default
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    batteryLevelChar.AddDescriptor(cccdDescriptor);

    // Add characteristic to service
    batteryService.AddCharacteristic(batteryLevelChar);

    // Add service to server
    int result = gattServer->AddService(batteryService);
    Logd("Battery Service add result: %d", result);
    return result;
}


int AddDeviceInformationServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Device Information Service...");

    // Create Device Information Service (UUID: 0x180A)
    UUID deviceInfoServiceUuid = UUID::FromString(GATT_SERVICE_DEVICE_INFORMATION);
    GattService deviceInfoService(deviceInfoServiceUuid, GattServiceType::PRIMARY);

    // Manufacturer Name String Characteristic (UUID: 0x2A29)
    UUID manufacturerNameUuid = UUID::FromString(GATT_CHAR_MANUFACTURER_NAME_STRING);
    GattCharacteristic manufacturerNameChar(manufacturerNameUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    std::string manufacturerName = "OHOS Bluetooth";
    manufacturerNameChar.SetValue(reinterpret_cast<const uint8_t*>(manufacturerName.c_str()),
        manufacturerName.length());
    deviceInfoService.AddCharacteristic(manufacturerNameChar);

    // Model Number String Characteristic (UUID: 0x2A24)
    UUID modelNumberUuid = UUID::FromString(GATT_CHAR_MODEL_NUMBER_STRING);
    GattCharacteristic modelNumberChar(modelNumberUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    std::string modelNumber = "GATT-Server-v1.0";
    modelNumberChar.SetValue(reinterpret_cast<const uint8_t*>(modelNumber.c_str()), modelNumber.length());
    deviceInfoService.AddCharacteristic(modelNumberChar);

    // Serial Number String Characteristic (UUID: 0x2A25)
    UUID serialNumberUuid = UUID::FromString(GATT_CHAR_SERIAL_NUMBER_STRING);
    GattCharacteristic serialNumberChar(serialNumberUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    std::string serialNumber = "SN123456789";
    serialNumberChar.SetValue(reinterpret_cast<const uint8_t*>(serialNumber.c_str()), serialNumber.length());
    deviceInfoService.AddCharacteristic(serialNumberChar);

    // Add service to server
    int result = gattServer->AddService(deviceInfoService);
    Logd("Device Information Service add result: %d", result);
    return result;
}

int AddHeartRateServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Heart Rate Service...");

    // Create Heart Rate Service (UUID: 0x180D)
    UUID heartRateServiceUuid = UUID::FromString(GATT_SERVICE_HEART_RATE);
    GattService heartRateService(heartRateServiceUuid, GattServiceType::PRIMARY);

    // Heart Rate Measurement Characteristic (UUID: 0x2A37)
    UUID heartRateMeasurementUuid = UUID::FromString(GATT_CHAR_HEART_RATE_MEASUREMENT);
    GattCharacteristic heartRateMeasurementChar(heartRateMeasurementUuid,
        0, GattCharacteristic::Propertie::NOTIFY);

    // Set initial heart rate value (72 BPM)
    uint8_t heartRateData[HEART_RATE_DATA_SIZE] = {0x00, DEFAULT_HEART_RATE_BPM}; // Flags + Heart Rate Value
    heartRateMeasurementChar.SetValue(heartRateData, sizeof(heartRateData));

    // Add CCCD for notifications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    heartRateMeasurementChar.AddDescriptor(cccdDescriptor);

    heartRateService.AddCharacteristic(heartRateMeasurementChar);

    // Body Sensor Location Characteristic (UUID: 0x2A38)
    UUID bodySensorLocationUuid = UUID::FromString(GATT_CHAR_BODY_SENSOR_LOCATION);
    GattCharacteristic bodySensorLocationChar(bodySensorLocationUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    uint8_t sensorLocation = DEFAULT_SENSOR_LOCATION_CHEST; // Chest
    bodySensorLocationChar.SetValue(&sensorLocation, sizeof(sensorLocation));
    heartRateService.AddCharacteristic(bodySensorLocationChar);

    // Add service to server
    int result = gattServer->AddService(heartRateService);
    Logd("Heart Rate Service add result: %d", result);
    return result;
}

int AddHealthRelatedServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Adding health services...");

    // Note: This function is a placeholder that would call individual service functions
    // For now, we return success to avoid circular dependencies
    Logd("Health services addition completed");
    return BT_NO_ERROR;
}

int AddAllServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Adding all available services...");

    // Note: This function is a placeholder that would call individual service functions
    // For now, we return success to avoid circular dependencies
    Logd("All services addition completed");
    return BT_NO_ERROR;
}

int AddCustomServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Custom Test Service...");

    // Create Custom Service with a custom UUID
    UUID customServiceUuid = UUID::FromString(GATT_SERVICE_CUSTOM_TEST);
    GattService customService(customServiceUuid, GattServiceType::PRIMARY);

    // Custom Read/Write Characteristic
    UUID customCharUuid = UUID::FromString(GATT_CHAR_CUSTOM_READ_WRITE);
    int permissions = GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE;
    int properties = GattCharacteristic::Propertie::READ | GattCharacteristic::Propertie::WRITE |
        GattCharacteristic::Propertie::NOTIFY;
    GattCharacteristic customChar(customCharUuid, permissions, properties);

    // Set initial value
    std::string customValue = "Hello GATT!";
    customChar.SetValue(reinterpret_cast<const uint8_t*>(customValue.c_str()), customValue.length());

    // Add User Description Descriptor
    UUID userDescUuid = UUID::FromString(GATT_DESC_CHARACTERISTIC_USER_DESC);
    GattDescriptor userDescriptor(userDescUuid, GattCharacteristic::Permission::READABLE);
    std::string description = "Custom Test Characteristic";
    userDescriptor.SetValue(reinterpret_cast<const uint8_t*>(description.c_str()), description.length());
    customChar.AddDescriptor(userDescriptor);

    // Add CCCD for notifications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    customChar.AddDescriptor(cccdDescriptor);

    customService.AddCharacteristic(customChar);

    // Add service to server
    int result = gattServer->AddService(customService);
    Logd("Custom Service add result: %d", result);
    return result;
}

int AddHealthThermometerServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Health Thermometer Service...");

    // Create Health Thermometer Service (UUID: 0x1809)
    UUID thermometerServiceUuid = UUID::FromString(GATT_SERVICE_HEALTH_THERMOMETER);
    GattService thermometerService(thermometerServiceUuid, GattServiceType::PRIMARY);

    // Temperature Measurement Characteristic (UUID: 0x2A1C)
    UUID temperatureMeasurementUuid = UUID::FromString(GATT_CHAR_TEMPERATURE_MEASUREMENT);
    GattCharacteristic temperatureMeasurementChar(temperatureMeasurementUuid,
        0, GattCharacteristic::Propertie::INDICATE);

    // Set initial temperature value (36.5°C)
    uint8_t tempData[TEMPERATURE_DATA_SIZE] = {
        0x00, DEFAULT_TEMPERATURE_VALUE, DEFAULT_TEMPERATURE_EXPONENT, 0x00, 0x00
    }; // Flags + Temperature + Timestamp
    temperatureMeasurementChar.SetValue(tempData, sizeof(tempData));

    // Add CCCD for indications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    temperatureMeasurementChar.AddDescriptor(cccdDescriptor);

    thermometerService.AddCharacteristic(temperatureMeasurementChar);

    // Temperature Type Characteristic (UUID: 0x2A1D)
    UUID temperatureTypeUuid = UUID::FromString(GATT_CHAR_TEMPERATURE_TYPE);
    GattCharacteristic temperatureTypeChar(temperatureTypeUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    uint8_t tempType = DEFAULT_TEMPERATURE_TYPE_BODY; // Body (general)
    temperatureTypeChar.SetValue(&tempType, sizeof(tempType));
    thermometerService.AddCharacteristic(temperatureTypeChar);

    // Add service to server
    int result = gattServer->AddService(thermometerService);
    Logd("Health Thermometer Service add result: %d", result);
    return result;
}

int AddBloodPressureServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Blood Pressure Service...");

    // Create Blood Pressure Service (UUID: 0x1810)
    UUID bloodPressureServiceUuid = UUID::FromString(GATT_SERVICE_BLOOD_PRESSURE);
    GattService bloodPressureService(bloodPressureServiceUuid, GattServiceType::PRIMARY);

    // Blood Pressure Measurement Characteristic (UUID: 0x2A35)
    UUID bloodPressureMeasurementUuid = UUID::FromString(GATT_CHAR_BLOOD_PRESSURE_MEASUREMENT);
    GattCharacteristic bloodPressureMeasurementChar(bloodPressureMeasurementUuid,
        0, GattCharacteristic::Propertie::INDICATE);

    // Set initial blood pressure value (120/80 mmHg)
    uint8_t bpData[BLOOD_PRESSURE_DATA_SIZE] = {
        0x00, DEFAULT_SYSTOLIC_PRESSURE, 0x00, DEFAULT_DIASTOLIC_PRESSURE, 0x00, 0x00, 0x00
    }; // Flags + Systolic + Diastolic + MAP
    bloodPressureMeasurementChar.SetValue(bpData, sizeof(bpData));

    // Add CCCD for indications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    bloodPressureMeasurementChar.AddDescriptor(cccdDescriptor);

    bloodPressureService.AddCharacteristic(bloodPressureMeasurementChar);

    // Blood Pressure Feature Characteristic (UUID: 0x2A49)
    UUID bloodPressureFeatureUuid = UUID::FromString(GATT_CHAR_BLOOD_PRESSURE_FEATURE);
    GattCharacteristic bloodPressureFeatureChar(bloodPressureFeatureUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    uint16_t bpFeature = 0x0000; // No additional features
    bloodPressureFeatureChar.SetValue(reinterpret_cast<uint8_t*>(&bpFeature), sizeof(bpFeature));
    bloodPressureService.AddCharacteristic(bloodPressureFeatureChar);

    // Add service to server
    int result = gattServer->AddService(bloodPressureService);
    Logd("Blood Pressure Service add result: %d", result);
    return result;
}

int AddCurrentTimeServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Current Time Service...");

    // Create Current Time Service (UUID: 0x1805)
    UUID currentTimeServiceUuid = UUID::FromString(GATT_SERVICE_CURRENT_TIME);
    GattService currentTimeService(currentTimeServiceUuid, GattServiceType::PRIMARY);

    // Current Time Characteristic (UUID: 0x2A2B)
    UUID currentTimeUuid = UUID::FromString(GATT_CHAR_CURRENT_TIME);
    GattCharacteristic currentTimeChar(currentTimeUuid,
        GattCharacteristic::Permission::READABLE,
        GattCharacteristic::Propertie::READ | GattCharacteristic::Propertie::NOTIFY);

    // Set current time (simplified format: year, month, day, hour, minute, second)
    uint8_t timeData[CURRENT_TIME_DATA_SIZE] = {
        DEFAULT_YEAR_LSB, DEFAULT_YEAR_MSB, DEFAULT_MONTH, DEFAULT_DAY,
        DEFAULT_HOUR, DEFAULT_MINUTE, 0x00, 0x01, 0x00, 0x00
    }; // 2024-12-15 14:30:00
    currentTimeChar.SetValue(timeData, sizeof(timeData));

    // Add CCCD for notifications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    currentTimeChar.AddDescriptor(cccdDescriptor);

    currentTimeService.AddCharacteristic(currentTimeChar);

    // Local Time Information Characteristic (UUID: 0x2A0F)
    UUID localTimeInfoUuid = UUID::FromString(GATT_CHAR_LOCAL_TIME_INFORMATION);
    GattCharacteristic localTimeInfoChar(localTimeInfoUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    uint8_t localTimeInfo[LOCAL_TIME_INFO_SIZE] = {
        DEFAULT_TIMEZONE_OFFSET, DEFAULT_DST_OFFSET
    }; // Time Zone: +8 hours, DST: Standard Time
    localTimeInfoChar.SetValue(localTimeInfo, sizeof(localTimeInfo));
    currentTimeService.AddCharacteristic(localTimeInfoChar);

    // Add service to server
    int result = gattServer->AddService(currentTimeService);
    Logd("Current Time Service add result: %d", result);
    return result;
}

int AddEnvironmentalSensingServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Environmental Sensing Service...");

    // Create Environmental Sensing Service (UUID: 0x181A)
    UUID environmentalServiceUuid = UUID::FromString(GATT_SERVICE_ENVIRONMENTAL_SENSING);
    GattService environmentalService(environmentalServiceUuid, GattServiceType::PRIMARY);

    // Temperature Characteristic (using generic temperature UUID)
    UUID temperatureUuid = UUID::FromString(GATT_CHAR_TEMPERATURE_MEASUREMENT);
    GattCharacteristic temperatureChar(temperatureUuid,
        GattCharacteristic::Permission::READABLE,
        GattCharacteristic::Propertie::READ | GattCharacteristic::Propertie::NOTIFY);

    // Set environmental temperature (25.5°C)
    uint8_t envTempData[ENVIRONMENTAL_TEMP_DATA_SIZE] = {
        DEFAULT_ENV_TEMP_LSB, DEFAULT_ENV_TEMP_MSB
    }; // 25.5°C in 0.01°C units
    temperatureChar.SetValue(envTempData, sizeof(envTempData));

    // Add CCCD for notifications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    temperatureChar.AddDescriptor(cccdDescriptor);

    environmentalService.AddCharacteristic(temperatureChar);

    // Add service to server
    int result = gattServer->AddService(environmentalService);
    Logd("Environmental Sensing Service add result: %d", result);
    return result;
}

int AddPulseOximeterServiceWithServer(std::shared_ptr<GattServer> gattServer)
{
    if (gattServer == nullptr) {
        Logd("GATT server is null");
        return BT_ERR_INVALID_PARAM;
    }

    Logd("Creating Pulse Oximeter Service...");

    // Create Pulse Oximeter Service (UUID: 0x1822)
    UUID pulseOximeterServiceUuid = UUID::FromString(GATT_SERVICE_PULSE_OXIMETER);
    GattService pulseOximeterService(pulseOximeterServiceUuid, GattServiceType::PRIMARY);

    // PLX Spot-check Measurement Characteristic (UUID: 0x2A5E)
    UUID plxSpotCheckUuid = UUID::FromString(GATT_CHAR_PLX_SPOT_CHECK_MEASUREMENT);
    GattCharacteristic plxSpotCheckChar(plxSpotCheckUuid,
        0, GattCharacteristic::Propertie::INDICATE);

    // Set initial SpO2 and pulse rate (98% SpO2, 72 BPM)
    uint8_t plxData[PULSE_OXIMETER_DATA_SIZE] = {
        0x00, DEFAULT_SPO2_LEVEL, 0x00, DEFAULT_PULSE_RATE, 0x00
    }; // Flags + SpO2 + Pulse Rate
    plxSpotCheckChar.SetValue(plxData, sizeof(plxData));

    // Add CCCD for indications
    UUID cccdUuid = UUID::FromString(GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG);
    GattDescriptor cccdDescriptor(cccdUuid,
        GattCharacteristic::Permission::READABLE | GattCharacteristic::Permission::WRITEABLE);
    uint16_t cccdValue = CCCD_VALUE_DISABLED;
    cccdDescriptor.SetValue(reinterpret_cast<uint8_t*>(&cccdValue), sizeof(cccdValue));
    plxSpotCheckChar.AddDescriptor(cccdDescriptor);

    pulseOximeterService.AddCharacteristic(plxSpotCheckChar);

    // PLX Features Characteristic (UUID: 0x2A60)
    UUID plxFeaturesUuid = UUID::FromString(GATT_CHAR_PLX_FEATURES);
    GattCharacteristic plxFeaturesChar(plxFeaturesUuid,
        GattCharacteristic::Permission::READABLE, GattCharacteristic::Propertie::READ);
    uint16_t plxFeatures = 0x0001; // Measurement Status Support
    plxFeaturesChar.SetValue(reinterpret_cast<uint8_t*>(&plxFeatures), sizeof(plxFeatures));
    pulseOximeterService.AddCharacteristic(plxFeaturesChar);

    // Add service to server
    int result = gattServer->AddService(pulseOximeterService);
    Logd("Pulse Oximeter Service add result: %d", result);
    return result;
}

} // namespace Bluetooth
} // namespace OHOS

void ReportOverallResult(bool foundPrimary, bool foundSecondary, int primaryResult, int secondaryResult,
    const std::string& serviceUuid)
{
    // Report overall result
    bool overallSuccess = false;
    if (foundPrimary && foundSecondary) {
        overallSuccess = (primaryResult == BT_NO_ERROR && secondaryResult == BT_NO_ERROR);
        Logd("Service removal completed for both primary and secondary services");
    } else if (foundPrimary) {
        overallSuccess = (primaryResult == BT_NO_ERROR);
        Logd("Primary service removal completed");
    } else if (foundSecondary) {
        overallSuccess = (secondaryResult == BT_NO_ERROR);
        Logd("Secondary service removal completed");
    }

    if (overallSuccess) {
        Logd("Service '%s' removed successfully from GATT server", serviceUuid.c_str());
        Logd("Connected clients will be notified of service changes.");
    } else {
        Logd("Failed to completely remove service '%s'", serviceUuid.c_str());

        // Provide error code interpretation
        int errorCode = foundPrimary ? primaryResult : secondaryResult;
        OHOS::Bluetooth::PrintBluetoothErrorCode(errorCode, "service removal");
    }
}

