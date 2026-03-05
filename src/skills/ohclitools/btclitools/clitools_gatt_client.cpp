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
#include "clitools_gatt_client.h"

using namespace std;

namespace OHOS {
namespace Bluetooth {

void HandleBleScan(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    BluetoothState bstate = g_bluetoothHost->GetBluetoothState();
    Logd("GetBluetoothState:%d", bstate);

    bool bres = g_bluetoothHost->EnableBle();
    Logd("EnableBle:%d", bres);

    BleScanSettings settings;
    settings.SetReportDelay(0);
    settings.SetScanMode(static_cast<int32_t>(BleScanMode::OHOS_BLE_SCAN_MODE_LOW_POWER));
    settings.SetPhy(static_cast<int32_t>(1));

    std::vector<BleScanFilter> scanFilters;
    BleScanFilter emptyFilter;
    scanFilters.push_back(emptyFilter);

    int status = g_bleCentralManager->StartScan(settings, scanFilters);
    Logd("ble StartScan:%d", status);
}

void HandleBleStop(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bleCentralManager->StopScan();
}

void HandleGattConnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    Logd("GetMac mac:%s", mac.c_str());
    BluetoothRemoteDevice remoteDevice(mac, 1);
    g_gattClient = std::make_shared<GattClient>(remoteDevice);
    g_currentGattDeviceAddress = mac; // Store the device address
    g_gattClient->Connect(g_gattCallback, false, BT_TRANSPORT_BLE);
}

void HandleGattDisconnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        int result = g_gattClient->Disconnect();
        Logd("GATT Disconnect result[%d]", result);
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}

void HandleGattGetServices(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        std::vector<GattService> services;
        if (TryGetServices(services)) {
            DumpServiceUuids(services);
        }
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}

/**
 * @brief Get device name from a connected BLE device
 *
 * This function retrieves the device name using two different methods:
 * direct method (from system cache) or GATT method (from Generic Access Service).
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattgetdname [method=direct|gatt]
 *
 * @parameters
 * - method: Method to get device name (optional, default: "direct")
 *   - "direct": Get from BluetoothRemoteDevice (faster, uses system cache)
 *   - "gatt": Read from Generic Access Service Device Name characteristic (more accurate)
 *
 * @methods
 * Direct Method:
 *   - Retrieves name from system's Bluetooth device cache
 *   - Faster operation, no GATT communication needed
 *   - May return cached/outdated information
 *   - Tries multiple approaches: normal, alias=false, alias=true
 *
 * GATT Method:
 *   - Reads Device Name characteristic (0x2A00) from Generic Access Service (0x1800)
 *   - More accurate, gets current value from device
 *   - Requires GATT service discovery and characteristic read
 *   - Asynchronous operation with callback result
 *
 * @examples
 * // Get device name using direct method (default)
 * gattgetdname
 *
 * // Explicitly use direct method
 * gattgetdname method=direct
 *
 * // Use GATT method for more accurate result
 * gattgetdname method=gatt
 *
 * @output_examples
 * Direct Method Output:
 *   Getting device name using direct method...
 *   Device address: AA:BB:CC:DD:EE:FF
 *   Device Name (Direct): iPhone 13 Pro
 *
 * GATT Method Output:
 *   Getting device name using GATT method...
 *   Found Generic Access Service
 *   Found Device Name characteristic, attempting to read...
 *   Device name read request sent successfully
 *   Device Name (GATT): iPhone 13 Pro
 *   Device name value will be received in GATT callback
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT client must be connected using 'gattconn' command
 * - For GATT method: Generic Access Service must be available on remote device
 *
 * @notes
 * - Direct method is synchronous and returns immediately
 * - GATT method is asynchronous, result received in callback
 * - GATT method automatically discovers services if needed
 * - Some devices may not expose Device Name characteristic
 * - Device name may be empty or "INVALID_NAME" if not available
 *
 * @error_handling
 * - No GATT client: Prompts to use 'gattconn' command first
 * - No device address: Prompts to reconnect
 * - Service discovery failure: Reports error and stops
 * - Generic Access Service not found: Reports missing service
 * - Device Name characteristic not found: Reports missing characteristic
 * - Read operation failure: Provides detailed error codes
 *
 * @technical_details
 * - Generic Access Service UUID: 0x1800
 * - Device Name Characteristic UUID: 0x2A00
 * - Uses stored device address from connection
 * - Supports both BLE and BR/EDR transport types
 *
 * @see_also
 * - gattconn: Connect to GATT device
 * - gattreadcv: Read any characteristic value
 * - gattgetserv: List available services
 */
void HandleGattGetDeviceName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattClient == nullptr,
        "GATT client not initialized. Use 'gattconn' command first.")) {
        return;
    }

    if (ShouldReturnVoid(g_currentGattDeviceAddress.empty(),
        "No device address stored. Please reconnect using 'gattconn' command.")) {
        return;
    }

    // Check for method parameter (direct or gatt)
    std::string method;
    if (!GeStrValue(argc, argv, PARAM_METHOD, method)) {
        method = METHOD_DIRECT; // Default method
    }

    if (method == METHOD_DIRECT) {
        // Method 1: Get device name directly from BluetoothRemoteDevice
        GetDeviceNameDirectly();
    } else if (method == METHOD_GATT) {
        // Method 2: Read device name from GATT Generic Access Service
        GetDeviceGattName();
    } else {
        Logd("Unknown method: %s", method.c_str());
        Logd("Available methods: direct (from BluetoothRemoteDevice), gatt (from Generic Access Service)");
        return;
    }
}

/**
 * @brief Read value from a GATT characteristic on a remote BLE device
 *
 * This function reads data from a specified GATT characteristic and displays
 * the result in both hexadecimal and string formats (if printable).
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattreadcv service=service_uuid characteristic=characteristic_uuid
 *
 * @parameters
 * - service: UUID of the GATT service (required)
 * - characteristic: UUID of the GATT characteristic (required)
 *
 * @examples
 * // Read battery level from Battery Service
 * gattreadcv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *
 * // Read manufacturer name from Device Information Service
 * gattreadcv service=0000180A-0000-1000-8000-00805F9B34FB characteristic=00002A29-0000-1000-8000-00805F9B34FB
 *
 * // Read device name from Generic Access Service
 * gattreadcv service=00001800-0000-1000-8000-00805F9B34FB characteristic=00002A00-0000-1000-8000-00805F9B34FB
 *
 * // Read heart rate measurement from Heart Rate Service
 * gattreadcv service=0000180D-0000-1000-8000-00805F9B34FB characteristic=00002A37-0000-1000-8000-00805F9B34FB
 *
 * // Using predefined UUID macros
 * gattreadcv service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL
 * gattreadcv service=GATT_SERVICE_DEVICE_INFORMATION characteristic=GATT_CHAR_MANUFACTURER_NAME_STRING
 * gattreadcv service=GATT_SERVICE_HEART_RATE characteristic=GATT_CHAR_HEART_RATE_MEASUREMENT
 *
 * @common_readable_characteristics
 * Battery Service (0x180F):
 *   - Battery Level (0x2A19): Battery percentage (0-100)
 *
 * Device Information Service (0x180A):
 *   - Manufacturer Name (0x2A29): Manufacturer name string
 *   - Model Number (0x2A24): Model number string
 *   - Serial Number (0x2A25): Serial number string
 *   - Firmware Revision (0x2A26): Firmware version string
 *   - Hardware Revision (0x2A27): Hardware version string
 *   - Software Revision (0x2A28): Software version string
 *
 * Generic Access Service (0x1800):
 *   - Device Name (0x2A00): Device name string
 *   - Appearance (0x2A01): Device appearance code
 *
 * Heart Rate Service (0x180D):
 *   - Heart Rate Measurement (0x2A37): Heart rate data
 *   - Body Sensor Location (0x2A38): Sensor location code
 *
 * Current Time Service (0x1805):
 *   - Current Time (0x2A2B): Current date and time
 *   - Local Time Information (0x2A0F): Time zone information
 *
 * @output_format
 * The function displays read data in multiple formats:
 * - Current cached value (if available)
 * - Hexadecimal format: "55 A0 FF"
 * - String format: "Hello" (if all bytes are printable ASCII)
 * - Data length information
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT client must be connected using 'gattconn' command
 * - Target characteristic must support read operations
 *
 * @notes
 * - Read operation is asynchronous
 * - Result will be received in GATT callback (OnCharacteristicReadResult)
 * - Services are automatically discovered if not already done
 * - Characteristic properties are validated before reading
 * - Shows both cached value and initiates fresh read
 *
 * @error_handling
 * - Service not found: Lists available services
 * - Characteristic not found: Lists available characteristics in service
 * - Read permission denied: Warns but attempts read anyway
 * - Connection issues: Provides detailed error codes
 *
 * @see_also
 * - gattwritecv: Write characteristic values
 * - gattconn: Connect to GATT device
 * - gattgetserv: List available services
 * - gattgetdname: Get device name (specific case)
 */
void HandleGattReadCharactValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    std::string serviceUuid;
    std::string characteristicUuid;

    if (!CheckGattReadCondition(argc, argv, serviceUuid, characteristicUuid)) {
        return;
    }

    Logd("Reading characteristic: service=%s, characteristic=%s", serviceUuid.c_str(), characteristicUuid.c_str());

    // Find the specified service (with automatic service discovery)
    GattService* targetService = GetServiceByUuid(serviceUuid);
    if (AssertAndDumpServiceNotFoundWithDiscovery(targetService, serviceUuid)) {
        return;
    }

    Logd("Found service: %s", serviceUuid.c_str());

    // Find the specified characteristic
    UUID cUuid = UUID::FromString(characteristicUuid);
    GattCharacteristic* targetCharacteristic = targetService->GetCharacteristic(cUuid);
    if (AssertAndDumpCharacteristicNotFound(targetCharacteristic, characteristicUuid, targetService, serviceUuid)) {
        return;
    }

    Logd("Found characteristic: %s", characteristicUuid.c_str());

    // Check if the characteristic supports read operation
    int properties = targetCharacteristic->GetProperties();
    if (!(properties & GattCharacteristic::Propertie::READ)) {
        Logd("Warning: Characteristic does not support READ property (properties: 0x%02X)", properties);
        Logd("Attempting to read anyway...");
    }

    // Display current value if available
    DumpCharacteristicValue(targetCharacteristic);

    // Perform the read operation
    Logd("Sending read request...");
    int result = g_gattClient->ReadCharacteristic(*targetCharacteristic);
    if (result == BT_NO_ERROR) {
        Logd("GATT ReadCharacteristic request sent successfully");
        Logd("Result will be received in GATT callback (OnCharacteristicReadResult)");
    } else {
        Logd("Failed to read characteristic, error code: %d", result);
        PrintBluetoothErrorCode(result, "characteristic read");
    }
}

/**
 * @brief Write value to a GATT characteristic on a remote BLE device
 *
 * This function allows writing data to a specified GATT characteristic. It supports
 * both hexadecimal and string data formats, and different write types for various
 * use cases.
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattwritecv service=service_uuid characteristic=characteristic_uuid value=data [type=hex|string]
 *           [write_type=default|no_response|signed]
 *
 * @parameters
 * - service: UUID of the GATT service (required)
 * - characteristic: UUID of the GATT characteristic (required)
 * - value: Data to write (required)
 * - type: Data format - VALUE_TYPE_HEX or VALUE_TYPE_STRING (optional, default: VALUE_TYPE_HEX)
 * - write_type: Write operation type - WRITE_TYPE_DEFAULT, WRITE_TYPE_NO_RESPONSE, or WRITE_TYPE_SIGNED
 *               (optional, default: WRITE_TYPE_DEFAULT)
 *
 * @data_types
 * - hex: Hexadecimal string format (e.g., "55", "48656C6C6F")
 *   - Must have even number of characters
 *   - Each pair represents one byte in hex format
 * - string: Plain text string format (e.g., "Hello World")
 *   - Converted to UTF-8 bytes automatically
 *
 * @write_types
 * - default: Standard write with response (reliable but slower)
 * - no_response: Write without response (faster but less reliable)
 * - signed: Signed write for enhanced security
 *
 * @examples
 * // Write battery level (85% = 0x55) to Battery Service
 * gattwritecv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *           value=55 type=hex
 *
 * // Write manufacturer name string to Device Information Service
 * gattwritecv service=0000180A-0000-1000-8000-00805F9B34FB characteristic=00002A29-0000-1000-8000-00805F9B34FB
 *           value="OHOS Device" type=string
 *
 * // Write device name to Generic Access Service
 * gattwritecv service=00001800-0000-1000-8000-00805F9B34FB characteristic=00002A00-0000-1000-8000-00805F9B34FB
 *           value="My BLE Device" type=string
 *
 * // Write with no response for faster operation
 * gattwritecv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *           value=64 type=hex write_type=no_response
 *
 * // Write multi-byte hex data
 * gattwritecv service=0000180A-0000-1000-8000-00805F9B34FB characteristic=00002A29-0000-1000-8000-00805F9B34FB
 *           value=48656C6C6F type=hex
 *
 * // Using predefined UUID macros
 * gattwritecv service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL value=75 type=hex
 * gattwritecv service=GATT_SERVICE_DEVICE_INFORMATION characteristic=GATT_CHAR_MANUFACTURER_NAME_STRING
 *           value="OHOS" type=string
 *
 * @common_services_and_characteristics
 * Battery Service (0x180F):
 *   - Battery Level (0x2A19): Write battery percentage (0-100)
 *
 * Device Information Service (0x180A):
 *   - Manufacturer Name (0x2A29): Write manufacturer name string
 *   - Model Number (0x2A24): Write model number string
 *   - Serial Number (0x2A25): Write serial number string
 *
 * Generic Access Service (0x1800):
 *   - Device Name (0x2A00): Write device name string
 *   - Appearance (0x2A01): Write device appearance code
 *
 * Heart Rate Service (0x180D):
 *   - Heart Rate Control Point (0x2A39): Write control commands
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT client must be connected using 'gattconn' command
 * - Target characteristic must support write operations
 *
 * @notes
 * - Write operation is asynchronous
 * - Result will be received in GATT callback (OnCharacteristicWriteResult)
 * - For write_type=no_response, no callback is expected
 * - Services are automatically discovered if not already done
 * - Characteristic properties are validated before writing
 *
 * @error_handling
 * - Invalid hex format: Must have even number of characters
 * - Service/characteristic not found: Lists available options
 * - Write permission denied: Warns but attempts write anyway
 * - Connection issues: Provides detailed error codes
 *
 * @see_also
 * - gattreadcv: Read characteristic values
 * - gattconn: Connect to GATT device
 * - gattgetserv: List available services
 */
void HandleGattWriteCharactValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattClient == nullptr,
        "GATT client not initialized. Use 'gattconn' command first.")) {
        return;
    }

    std::string serviceUuid;
    std::string characteristicUuid;
    std::string value;
    std::string writeType;

    AssertReturnWithFunction(!GeStrValue(argc, argv, PARAM_SERVICE, serviceUuid) ||
        !GeStrValue(argc, argv, PARAM_CHARACTERISTIC, characteristicUuid) ||
        !GeStrValue(argc, argv, PARAM_VALUE, value), [&]() {
        PrintUsageAndExamples(GATT_WRITE_CV_CMD, GATT_WRITE_CV_USAGE, GATT_WRITE_CV_EXAMPLES);
    });

    // Get optional parameters
    std::string valueType;
    if (!GeStrValue(argc, argv, PARAM_TYPE, valueType)) {
        valueType = VALUE_TYPE_HEX; // Default to hex
    }

    if (!GeStrValue(argc, argv, PARAM_WRITE_TYPE, writeType)) {
        writeType = WRITE_TYPE_DEFAULT; // Default write type
    }

    Logd("Writing characteristic: service=%s, characteristic=%s, value=%s, type=%s, write_type=%s",
         serviceUuid.c_str(), characteristicUuid.c_str(), value.c_str(), valueType.c_str(), writeType.c_str());

    // Find the specified service (with automatic service discovery)
    GattService* targetService = GetServiceByUuid(serviceUuid);
    if (AssertAndDumpServiceNotFoundWithDiscovery(targetService, serviceUuid)) {
        return;
    }

    // Find the specified characteristic
    UUID cUuid = UUID::FromString(characteristicUuid);
    GattCharacteristic* targetCharacteristic = targetService->GetCharacteristic(cUuid);
    if (AssertAndDumpCharacteristicNotFound(targetCharacteristic, characteristicUuid, targetService, serviceUuid)) {
        return;
    }

    // Check if the characteristic supports write operation
    CheckSupportWrite(targetCharacteristic);

    // Convert value based on type
    std::vector<uint8_t> data;

    if (!OHOS::Bluetooth::DumpDataByType(value, valueType, data)) {
        return;
    }

    if (ShouldReturnVoid(data.empty(), "Error: No data to write")) {
        return;
    }

    // Set write type
    GattCharacteristic::WriteType gattWriteType = WriteType2GattType(writeType);

    GattSetWriteType(targetCharacteristic, gattWriteType, writeType);

    // Perform the write operation
    GattWriteCharacteristic(targetCharacteristic, std::move(data), gattWriteType);
}

/**
 * @brief Read value from a GATT descriptor on a remote BLE device
 *
 * This function reads data from a specified GATT descriptor and displays
 * the result in both hexadecimal and string formats (if printable).
 * Descriptors provide additional information about characteristics.
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattreaddes service=service_uuid characteristic=characteristic_uuid descriptor=descriptor_uuid
 *
 * @parameters
 * - service: UUID of the GATT service (required)
 * - characteristic: UUID of the GATT characteristic (required)
 * - descriptor: UUID of the GATT descriptor (required)
 *
 * @examples
 * // Read Client Characteristic Configuration Descriptor (CCCD) from Battery Level
 * gattreaddes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *           descriptor=00002902-0000-1000-8000-00805F9B34FB
 *
 * // Read Characteristic User Description from Heart Rate Measurement
 * gattreaddes service=0000180D-0000-1000-8000-00805F9B34FB characteristic=00002A37-0000-1000-8000-00805F9B34FB
 *           descriptor=00002901-0000-1000-8000-00805F9B34FB
 *
 * // Read Characteristic Presentation Format descriptor
 * gattreaddes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *           descriptor=00002904-0000-1000-8000-00805F9B34FB
 *
 * // Using predefined UUID macros
 * gattreaddes service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL
 *           descriptor=GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG
 * gattreaddes service=GATT_SERVICE_HEART_RATE characteristic=GATT_CHAR_HEART_RATE_MEASUREMENT
 *           descriptor=GATT_DESC_CHARACTERISTIC_USER_DESC
 *
 * @common_descriptors
 * Client Characteristic Configuration (0x2902):
 *   - Controls notifications/indications
 *   - Values: 0x0000 (disabled), 0x0001 (notifications), 0x0002 (indications)
 *
 * Characteristic User Description (0x2901):
 *   - Human-readable description of characteristic
 *   - Usually a UTF-8 string
 *
 * Characteristic Presentation Format (0x2904):
 *   - Describes how to interpret characteristic value
 *   - Contains format, exponent, unit, namespace, description
 *
 * Characteristic Aggregate Format (0x2905):
 *   - Groups multiple characteristics
 *   - Contains list of characteristic handles
 *
 * @descriptor_hierarchy
 * Service (e.g., Battery Service 0x180F)
 *   └── Characteristic (e.g., Battery Level 0x2A19)
 *       ├── Descriptor (e.g., CCCD 0x2902)
 *       ├── Descriptor (e.g., User Description 0x2901)
 *       └── Descriptor (e.g., Presentation Format 0x2904)
 *
 * @output_format
 * The function displays descriptor data in multiple formats:
 * - Current cached value (if available)
 * - Hexadecimal format: "01 00" (for CCCD notifications enabled)
 * - String format: "Battery Level" (for User Description)
 * - Data length information
 * - Descriptor interpretation (for known descriptor types)
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT client must be connected using 'gattconn' command
 * - Target descriptor must support read operations
 * - Service and characteristic must exist and be discovered
 *
 * @notes
 * - Read operation is asynchronous
 * - Result will be received in GATT callback (OnDescriptorReadResult)
 * - Services are automatically discovered if not already done
 * - Descriptor properties are validated before reading
 * - Shows both cached value and initiates fresh read
 * - Some descriptors may be write-only or not readable
 *
 * @error_handling
 * - Service not found: Lists available services
 * - Characteristic not found: Lists available characteristics in service
 * - Descriptor not found: Lists available descriptors in characteristic
 * - Read permission denied: Warns but attempts read anyway
 * - Connection issues: Provides detailed error codes
 *
 * @see_also
 * - gattwritedes: Write descriptor values
 * - gattreadcv: Read characteristic values
 * - gattconn: Connect to GATT device
 * - gattgetserv: List available services
 */
void HandleGattReadDescripValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattClient == nullptr,
        "GATT client not initialized. Use 'gattconn' command first.")) {
        return;
    }

    std::string serviceUuid;
    std::string characteristicUuid;
    std::string descriptorUuid;

    AssertReturnWithFunction(!GeStrValue(argc, argv, PARAM_SERVICE, serviceUuid) ||
        !GeStrValue(argc, argv, PARAM_CHARACTERISTIC, characteristicUuid) ||
        !GeStrValue(argc, argv, PARAM_DESCRIPTOR, descriptorUuid), [&]() {
        PrintGattReadDescriptorUsage();
    });

    Logd("Reading descriptor: service=%s, characteristic=%s, descriptor=%s",
         serviceUuid.c_str(), characteristicUuid.c_str(), descriptorUuid.c_str());

    // Find the specified service (with automatic service discovery)
    GattService* targetService = GetServiceByUuid(serviceUuid);
    if (AssertAndDumpServiceNotFoundWithDiscovery(targetService, serviceUuid)) {
        return;
    }

    // Find the specified characteristic
    UUID cUuid = UUID::FromString(characteristicUuid);
    GattCharacteristic* targetCharacteristic = targetService->GetCharacteristic(cUuid);
    if (AssertAndDumpCharacteristicNotFound(targetCharacteristic, characteristicUuid, targetService, serviceUuid)) {
        return;
    }

    // Find the specified descriptor
    UUID dUuid = UUID::FromString(descriptorUuid);
    GattDescriptor* targetDescriptor = targetCharacteristic->GetDescriptor(dUuid);
    if (AssertAndDumpDescriptorNotFound(targetDescriptor, descriptorUuid, targetCharacteristic, characteristicUuid)) {
        return;
    }

    Logd("Found descriptor: %s", descriptorUuid.c_str());

    // Check if the descriptor supports read operation
    CheckReadPermission(targetDescriptor, "Descriptor");

    // Display current value if available
    DumpDescriptorValue(targetDescriptor);

    // Perform the read operation
    Logd("Sending read request...");
    int result = g_gattClient->ReadDescriptor(*targetDescriptor);
    if (result == BT_NO_ERROR) {
        Logd("GATT ReadDescriptor request sent successfully");
        Logd("Result will be received in GATT callback (OnDescriptorReadResult)");
    } else {
        Logd("Failed to read descriptor, error code: %d", result);

        // Provide error code interpretation
        PrintBluetoothErrorCode(result, "GATT read descriptor");
    }
}

/**
 * @brief Write value to a GATT descriptor on a remote BLE device
 *
 * This function writes data to a specified GATT descriptor. It supports
 * both hexadecimal and string data formats. Descriptors are commonly used
 * to configure characteristics (e.g., enable/disable notifications).
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattwritedes service=service_uuid characteristic=characteristic_uuid descriptor=descriptor_uuid
 *            value=data [type=hex|string]
 *
 * @parameters
 * - service: UUID of the GATT service (required)
 * - characteristic: UUID of the GATT characteristic (required)
 * - descriptor: UUID of the GATT descriptor (required)
 * - value: Data to write (required)
 * - type: Data format - VALUE_TYPE_HEX or VALUE_TYPE_STRING (optional, default: VALUE_TYPE_HEX)
 *
 * @examples
 * // Enable notifications on Battery Level characteristic (CCCD = 0x0001)
 * gattwritedes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *            descriptor=00002902-0000-1000-8000-00805F9B34FB value=0100 type=hex
 *
 * // Enable indications on Heart Rate Measurement (CCCD = 0x0002)
 * gattwritedes service=0000180D-0000-1000-8000-00805F9B34FB characteristic=00002A37-0000-1000-8000-00805F9B34FB
 *            descriptor=00002902-0000-1000-8000-00805F9B34FB value=0200 type=hex
 *
 * // Disable notifications/indications (CCCD = 0x0000)
 * gattwritedes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
 *            descriptor=00002902-0000-1000-8000-00805F9B34FB value=0000 type=hex
 *
 * // Write User Description string
 * gattwritedes service=0000180D-0000-1000-8000-00805F9B34FB characteristic=00002A37-0000-1000-8000-00805F9B34FB
 *            descriptor=00002901-0000-1000-8000-00805F9B34FB value="Heart Rate Sensor" type=string
 *
 * // Using predefined UUID macros
 * gattwritedes service=GATT_SERVICE_BATTERY characteristic=GATT_CHAR_BATTERY_LEVEL
 *            descriptor=GATT_DESC_CLIENT_CHARACTERISTIC_CONFIG value=0100 type=hex
 * gattwritedes service=GATT_SERVICE_HEART_RATE characteristic=GATT_CHAR_HEART_RATE_MEASUREMENT
 *            descriptor=GATT_DESC_CHARACTERISTIC_USER_DESC value="HR Monitor" type=string
 *
 * @common_descriptor_operations
 * Client Characteristic Configuration (CCCD - 0x2902):
 *   - Disable: value=0000 (notifications and indications off)
 *   - Enable Notifications: value=0100 (notifications on)
 *   - Enable Indications: value=0200 (indications on)
 *   - Enable Both: value=0300 (both notifications and indications on)
 *
 * Characteristic User Description (0x2901):
 *   - Write human-readable description string
 *   - Example: value="Temperature Sensor" type=string
 *
 * Characteristic Presentation Format (0x2904):
 *   - Write 7-byte format descriptor
 *   - Format: [Format][Exponent][Unit_LSB][Unit_MSB][Namespace][Description_LSB][Description_MSB]
 *   - Example: value=04002DAD0100 type=hex (uint8, no exponent, percentage unit)
 *
 * @cccd_values
 * CCCD (Client Characteristic Configuration) common values:
 * - 0x0000: Notifications and Indications disabled
 * - 0x0001: Notifications enabled
 * - 0x0002: Indications enabled
 * - 0x0003: Both Notifications and Indications enabled
 *
 * @data_formats
 * - hex: Hexadecimal string format (e.g., "0100", "48656C6C6F")
 *   - Must have even number of characters
 *   - Each pair represents one byte in hex format
 *   - Little-endian for multi-byte values (CCCD: 0x0001 = "0100")
 * - string: Plain text string format (e.g., "Hello World")
 *   - Converted to UTF-8 bytes automatically
 *   - Suitable for User Description descriptors
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT client must be connected using 'gattconn' command
 * - Target descriptor must support write operations
 * - Service and characteristic must exist and be discovered
 *
 * @notes
 * - Write operation is asynchronous
 * - Result will be received in GATT callback (OnDescriptorWriteResult)
 * - Services are automatically discovered if not already done
 * - Descriptor permissions are validated before writing
 * - CCCD writes are the most common descriptor write operations
 * - Some descriptors may be read-only
 *
 * @error_handling
 * - Service not found: Lists available services
 * - Characteristic not found: Lists available characteristics in service
 * - Descriptor not found: Lists available descriptors in characteristic
 * - Write permission denied: Warns but attempts write anyway
 * - Invalid data format: Provides format requirements
 * - Connection issues: Provides detailed error codes
 *
 * @see_also
 * - gattreaddes: Read descriptor values
 * - gattwritecv: Write characteristic values
 * - gattconn: Connect to GATT device
 * - gattgetserv: List available services
 */
void HandleGattWriteDescripValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattClient == nullptr,
        "GATT client not initialized. Use 'gattconn' command first.")) {
        return;
    }

    std::string serviceUuid;
    std::string characteristicUuid;
    std::string descriptorUuid;
    std::string value;

    AssertReturnWithFunction(!GeStrValue(argc, argv, PARAM_SERVICE, serviceUuid) ||
        !GeStrValue(argc, argv, PARAM_CHARACTERISTIC, characteristicUuid) ||
        !GeStrValue(argc, argv, PARAM_DESCRIPTOR, descriptorUuid) ||
        !GeStrValue(argc, argv, PARAM_VALUE, value), [&]() {
        PrintGattWriteDescriptorUsage();
    });

    // Get optional parameters
    std::string valueType;
    if (!GeStrValue(argc, argv, PARAM_TYPE, valueType)) {
        valueType = VALUE_TYPE_HEX; // Default to hex
    }

    Logd("Writing descriptor: service=%s, characteristic=%s, descriptor=%s, value=%s, type=%s",
         serviceUuid.c_str(), characteristicUuid.c_str(), descriptorUuid.c_str(), value.c_str(), valueType.c_str());

    // Find the specified service (with automatic service discovery)
    GattService* targetService = GetServiceByUuid(serviceUuid);
    if (AssertAndDumpServiceNotFoundWithDiscovery(targetService, serviceUuid)) {
        return;
    }

    // Find the specified characteristic
    UUID cUuid = UUID::FromString(characteristicUuid);
    GattCharacteristic* targetCharacteristic = targetService->GetCharacteristic(cUuid);
    if (AssertAndDumpCharacteristicNotFound(targetCharacteristic, characteristicUuid, targetService, serviceUuid)) {
        return;
    }

    // Find the specified descriptor
    UUID dUuid = UUID::FromString(descriptorUuid);
    GattDescriptor* targetDescriptor = targetCharacteristic->GetDescriptor(dUuid);
    if (AssertAndDumpDescriptorNotFound(targetDescriptor, descriptorUuid, targetCharacteristic, characteristicUuid)) {
        return;
    }

    Logd("Found descriptor: %s", descriptorUuid.c_str());

    // Check if the descriptor supports write operation
    CheckWritePermission(targetDescriptor, "Descriptor");

    // Convert value based on type
    std::vector<uint8_t> data;

    if (!OHOS::Bluetooth::ConvertDescriptorValueByType(value, valueType, data, dUuid)) {
        return;
    }

    if (data.empty()) {
        Logd("Error: No data to write");
        return;
    }

    // Set the value in the descriptor
    targetDescriptor->SetValue(data.data(), data.size());

    // Perform the write operation
    GattWriteDescriptor(targetDescriptor, dUuid);
}

void HandleGattGetRssi(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        int result = g_gattClient->RequestConnectionPriority(0); // Request RSSI
        Logd("GATT GetRssi request result[%d]", result);
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}

void HandleGattSetMtuSize(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        int mtu = GATT_DEFAULT_MTU_SIZE; // Default MTU size
        if (!GetIntValue(argc, argv, PARAM_MTU, mtu)) {
            mtu = GATT_DEFAULT_MTU_SIZE; // Use default if not specified
            Logd("MTU not specified, using default: %d", mtu);
        }

        int result = g_gattClient->RequestBleMtuSize(mtu);
        Logd("GATT SetMtuSize mtu[%d] result[%d]", mtu, result);
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}


void HandleGattCreateClient(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    if (!mac.empty()) {
        Logd("Creating GATT client for device: %s", mac.c_str());
        BluetoothRemoteDevice remoteDevice(mac, 1);
        g_gattCallback = std::make_shared<BleGattClientCallback>();
        g_gattClient = std::make_shared<GattClient>(remoteDevice);
        g_currentGattDeviceAddress = mac; // Store the device address
        Logd("GATT client created successfully");
    } else {
        Logd("Usage: gattcreateclient mac=device_mac_address");
    }
}

void HandleBleGetConnectedDevices(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    std::vector<BluetoothRemoteDevice> connectedDevices;
    int result = g_bluetoothHost->GetPairedDevices(BT_TRANSPORT_BLE, connectedDevices);

    Logd("BLE GetConnectedDevices result[%d]: found %zu devices", result, connectedDevices.size());
    for (size_t i = 0; i < connectedDevices.size(); i++) {
        const BluetoothRemoteDevice& device = connectedDevices[i];
        Logd("  Device[%zu]: %s - %s", i, device.GetDeviceAddr().c_str(), device.GetDeviceName().c_str());
    }
}


}  // namespace Bluetooth
}  // namespace OHOS
