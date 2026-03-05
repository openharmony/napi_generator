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
#include "clitools_gatt_server.h"

using namespace std;

namespace OHOS {
namespace Bluetooth {

static const char* const GATT_DEL_SERVICES_CMD = "gattdelservices";
static const char* const GATT_DEL_SERVICES_USAGE = "gattdelservices [service=service_uuid] [all=true]";
static const std::vector<std::string> GATT_DEL_SERVICES_EXAMPLES = {
    "gattdelservices service=0000180F-0000-1000-8000-00805F9B34FB",
    "gattdelservices all=true",
    "gattdelservices  (list available services)"
};

static void CloseGattServer()
{
    if (g_gattServer != nullptr) {
        Logd("Closing existing GATT Server...");
        g_gattServer->Close();
        g_gattServer = nullptr;
        g_gattServerCallback = nullptr;
        Logd("GATT Server closed successfully");
    }
}

// Helper function to add Battery Service (0x180F)
int AddBatteryService()
{
    return AddBatteryServiceWithServer(g_gattServer);
}

int AddDeviceInformationService()
{
    return AddDeviceInformationServiceWithServer(g_gattServer);
}

int AddHeartRateService()
{
    return AddHeartRateServiceWithServer(g_gattServer);
}

int AddCustomService()
{
    return AddCustomServiceWithServer(g_gattServer);
}

int AddHealthThermometerService()
{
    return AddHealthThermometerServiceWithServer(g_gattServer);
}

int AddBloodPressureService()
{
    return AddBloodPressureServiceWithServer(g_gattServer);
}

// Helper function to add Current Time Service (0x1805)
int AddCurrentTimeService()
{
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
        DEFAULT_HOUR, DEFAULT_MINUTE, TIME_DATA_SECONDS_OFFSET, TIME_DATA_DAY_OF_WEEK,
        TIME_DATA_FRACTIONS_256, TIME_DATA_FRACTIONS_256
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
    int result = g_gattServer->AddService(currentTimeService);
    Logd("Current Time Service add result: %d", result);
    return result;
}

// Helper function to add Environmental Sensing Service (0x181A)
int AddEnvironmentalSensingService()
{
    Logd("Creating Environmental Sensing Service...");

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
    int result = g_gattServer->AddService(environmentalService);
    Logd("Environmental Sensing Service add result: %d", result);
    return result;
}

// Helper function to add Pulse Oximeter Service (0x1822)
int AddPulseOximeterService()
{
    return AddPulseOximeterServiceWithServer(g_gattServer);
}

int AddHealthRelatedService()
{
    return AddHealthRelatedServiceWithServer(g_gattServer);
}

int AddAllService()
{
    return AddAllServiceWithServer(g_gattServer);
}

void RemoveAllService()
{
    Logd("Removing all services from GATT server...");

    std::list<GattService> &services = g_gattServer->GetServices();
    if (ShouldReturnVoid(services.empty(), "No services to remove.")) {
        return;
    }

    int successCount = 0;
    int failureCount = 0;

    Logd("Found %zu service(s) to remove:", services.size());

    // Remove each service
    size_t i = 0;
    for (auto& service : services) {
        std::string uuidStr = service.GetUuid().ToString();
        bool isPrimary = service.IsPrimary();

        Logd("Removing service[%zu]: %s (%s)", i, uuidStr.c_str(), isPrimary ? "Primary" : "Secondary");
        i++;

        int result = g_gattServer->RemoveGattService(service);
        if (result == BT_NO_ERROR) {
            successCount++;
            Logd("  �?Service removed successfully");
        } else {
            failureCount++;
            Logd("  �?Failed to remove service, error code: %d", result);
        }
    }

    Logd("Service removal completed:");
    Logd("  Successfully removed: %d service(s)", successCount);
    Logd("  Failed to remove: %d service(s)", failureCount);

    if (successCount > 0) {
        Logd("GATT server services updated. Connected clients will be notified of changes.");
    }
}

void RemoveSpecificService(const std::string& serviceUuid)
{
    if (ShouldReturnVoid(serviceUuid.empty(), "Error: Service UUID cannot be empty")) {
        return;
    }

    Logd("Removing service: %s", serviceUuid.c_str());

    // Parse UUID
    UUID targetUuid = UUID::FromString(serviceUuid);

    // Basic validation: check if the UUID string has the correct format
    AssertReturnWithFunction(!IsValidUuidFormat(serviceUuid), [&]() {
        PrintInvalidUuidError(serviceUuid);
    });

    // Find and remove both primary and secondary services with this UUID
    bool foundPrimary = false;
    bool foundSecondary = false;
    int primaryResult = BT_ERR_INTERNAL_ERROR;
    int secondaryResult = BT_ERR_INTERNAL_ERROR;

    // Try to get and remove primary service
    foundPrimary = TryGetRemovePrimaryService(targetUuid, serviceUuid, primaryResult);
    // Try to get and remove secondary service
    foundSecondary = TryGetRemoveSecondaryService(targetUuid, serviceUuid, secondaryResult);
    // Check results
    if (!foundPrimary && !foundSecondary) {
        Logd("Service not found: %s", serviceUuid.c_str());

        // List available services
        std::list<GattService> &services = g_gattServer->GetServices();
        if (!services.empty()) {
            Logd("Available services:");
            size_t i = 0;
            for (auto& service : services) {
                Logd("  Service[%zu]: %s (%s)", i, service.GetUuid().ToString().c_str(),
                     service.IsPrimary() ? "Primary" : "Secondary");
                i++;
            }
        } else {
            Logd("No services found on the server.");
        }
        return;
    }

    ::ReportOverallResult(foundPrimary, foundSecondary, primaryResult, secondaryResult, serviceUuid);
}

void ListAvailableServices()
{
    Logd("Available services for removal:");

    // Get all services from the server
    std::list<GattService> &services = g_gattServer->GetServices();
    if (services.empty()) {
        Logd("No services found on the server.");
        Logd("Use 'gattaddservices' to add services first.");
        return;
    }

    Logd("Found %zu service(s):", services.size());
    size_t i = 0;
    for (auto& service : services) {
        std::string uuidStr = service.GetUuid().ToString();
        bool isPrimary = service.IsPrimary();

        Logd("  Service[%zu]: %s (%s)", i, uuidStr.c_str(), isPrimary ? "Primary" : "Secondary");
        i++;

        // Show service name if it's a known standard service
        DumpGattService(uuidStr);

        // Show characteristics count
        const std::vector<GattCharacteristic>& characteristics = service.GetCharacteristics();
        Logd("    Characteristics: %zu", characteristics.size());
    }

    PrintGattDelServicesUsage();
}

bool TryGetRemovePrimaryService(const OHOS::Bluetooth::UUID& targetUuid, const std::string& serviceUuid, int& result)
{
    // Try to get and remove primary service
    auto primaryService = g_gattServer->GetService(targetUuid, true);
    if (primaryService.has_value()) {
        Logd("Found primary service: %s", serviceUuid.c_str());

        // Show service details before removal
        GattService& service = primaryService.value().get();
        const std::vector<GattCharacteristic>& characteristics = service.GetCharacteristics();
        Logd("  Service has %zu characteristic(s)", characteristics.size());

        result = g_gattServer->RemoveGattService(service);
        if (result == BT_NO_ERROR) {
            Logd(" Primary service removed successfully");
        } else {
            Logd(" Failed to remove primary service, error code: %d", result);
        }
        return true;
    }
    return false;
}

bool TryGetRemoveSecondaryService(const OHOS::Bluetooth::UUID& targetUuid, const std::string& serviceUuid, int& result)
{
    // Try to get and remove secondary service
    auto secondaryService = g_gattServer->GetService(targetUuid, false);
    if (secondaryService.has_value()) {
        Logd("Found secondary service: %s", serviceUuid.c_str());

        // Show service details before removal
        GattService& service = secondaryService.value().get();
        const std::vector<GattCharacteristic>& characteristics = service.GetCharacteristics();
        Logd("  Service has %zu characteristic(s)", characteristics.size());

        result = g_gattServer->RemoveGattService(service);
        if (result == BT_NO_ERROR) {
            Logd("  Secondary service removed successfully");
        } else {
            Logd("  Failed to remove secondary service, error code: %d", result);
        }
        return true;
    }
    return false;
}

void HandleGattCreateServer(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    // Check if BLE is enabled
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    if (ShouldReturnVoid(!g_bluetoothHost->IsBleEnabled(),
        "BLE is not enabled. Please enable BLE first using 'bleenable' command.")) {
        return;
    }

    // Check for force parameter
    std::string forceParam;
    bool forceCreate = false;
    if (GeStrValue(argc, argv, PARAM_FORCE, forceParam)) {
        forceCreate = (forceParam == "true" || forceParam == "1");
    }

    // Check if server already exists
    if (g_gattServer != nullptr) {
        if (forceCreate) {
            Logd("Force recreating GATT Server...");
            CloseGattServer();
        } else {
            Logd("GATT Server already exists. Use 'force=true' to recreate or close it first.");
            Logd("Current server status: Ready for service operations");
            return;
        }
    }

    // Create server callback
    g_gattServerCallback = std::make_shared<BleGattServerCallback>();
    if (ShouldReturnVoid(g_gattServerCallback == nullptr, "Failed to create GATT Server callback")) {
        return;
    }

    // Create GATT Server instance
    std::shared_ptr<GattServerCallback> callback =
        std::static_pointer_cast<GattServerCallback>(g_gattServerCallback);
    g_gattServer = GattServer::CreateInstance(callback);
    if (g_gattServer != nullptr) {
        Logd("GATT Server created successfully");
        Logd("Server is ready to add services and accept connections");
        Logd("Use 'gattaddservices' to add services to the server");
    } else {
        Logd("Failed to create GATT Server instance");
        g_gattServerCallback = nullptr;
    }
}

void HandleGattAddServices(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    // Check if GATT Server exists
    if (ShouldReturnVoid(g_gattServer == nullptr,
        "GATT Server not created. Use 'gattcreateserver' first.")) {
        return;
    }

    // Check for service type parameter
    std::string serviceType;
    if (!GeStrValue(argc, argv, PARAM_TYPE, serviceType)) {
        serviceType = "battery"; // Default service type
    }

    Logd("Adding GATT service type: %s", serviceType.c_str());

    int result = BT_ERR_INTERNAL_ERROR;
    if (serviceType == SERVICE_TYPE_BATTERY) {
        result = AddBatteryService();
    } else if (serviceType == SERVICE_TYPE_DEVICE_INFO) {
        result = AddDeviceInformationService();
    } else if (serviceType == SERVICE_TYPE_HEART_RATE) {
        result = AddHeartRateService();
    } else if (serviceType == SERVICE_TYPE_CUSTOM) {
        result = AddCustomService();
    } else if (serviceType == SERVICE_TYPE_THERMOMETER) {
        result = AddHealthThermometerService();
    } else if (serviceType == SERVICE_TYPE_BLOOD_PRESSURE) {
        result = AddBloodPressureService();
    } else if (serviceType == SERVICE_TYPE_CURRENT_TIME) {
        result = AddCurrentTimeService();
    } else if (serviceType == SERVICE_TYPE_ENVIRONMENTAL) {
        result = AddEnvironmentalSensingService();
    } else if (serviceType == SERVICE_TYPE_PULSE_OXIMETER) {
        result = AddPulseOximeterService();
    } else if (serviceType == SERVICE_TYPE_HEALTH) {
        // Add health-related services
        result = AddHealthRelatedService();
    } else if (serviceType == SERVICE_TYPE_ALL) {
        // Add all available services
        result = AddAllService();
    } else {
        Logd("Unknown service type: %s", serviceType.c_str());
        DumpCreateServiceUsage();
    }

    if (result == BT_NO_ERROR) {
        Logd("GATT Service '%s' added successfully", serviceType.c_str());
    } else {
        Logd("Failed to add GATT Service '%s', error code: %d", serviceType.c_str(), result);
    }
}

/**
 * @brief Remove GATT services from the GATT server
 *
 * This function removes one or more GATT services from the active GATT server.
 * It supports removing specific services by UUID or clearing all services.
 *
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 *
 * @usage
 * gattdelservices [service=service_uuid] [all=true]
 *
 * @parameters
 * - service: UUID of the specific service to remove (optional)
 * - all: Remove all services if set to "true" (optional)
 * - If no parameters provided, lists available services for removal
 *
 * @examples
 * // Remove specific service by UUID
 * gattdelservices service=0000180F-0000-1000-8000-00805F9B34FB
 *
 * // Remove service using predefined macro
 * gattdelservices service=GATT_SERVICE_BATTERY
 *
 * // Remove all services
 * gattdelservices all=true
 *
 * // List available services for removal
 * gattdelservices
 *
 * @common_services
 * Standard GATT services that can be removed:
 * - Battery Service: GATT_SERVICE_BATTERY (0000180F-0000-1000-8000-00805F9B34FB)
 * - Device Information: GATT_SERVICE_DEVICE_INFORMATION (0000180A-0000-1000-8000-00805F9B34FB)
 * - Heart Rate: GATT_SERVICE_HEART_RATE (0000180D-0000-1000-8000-00805F9B34FB)
 * - Health Thermometer: GATT_SERVICE_HEALTH_THERMOMETER (00001809-0000-1000-8000-00805F9B34FB)
 * - Blood Pressure: GATT_SERVICE_BLOOD_PRESSURE (00001810-0000-1000-8000-00805F9B34FB)
 * - Current Time: GATT_SERVICE_CURRENT_TIME (00001805-0000-1000-8000-00805F9B34FB)
 * - Environmental Sensing: GATT_SERVICE_ENVIRONMENTAL_SENSING (0000181A-0000-1000-8000-00805F9B34FB)
 * - Pulse Oximeter: GATT_SERVICE_PULSE_OXIMETER (00001822-0000-1000-8000-00805F9B34FB)
 * - Custom Test Service: GATT_SERVICE_CUSTOM_TEST (12345678-1234-1234-1234-123456789ABC)
 *
 * @prerequisites
 * - Bluetooth must be enabled
 * - GATT server must be created using 'gattcreateserver' command
 * - Services must be added using 'gattaddservices' command
 *
 * @notes
 * - Removing a service also removes all its characteristics and descriptors
 * - Both primary and secondary services with the same UUID will be removed
 * - Service removal is immediate and cannot be undone
 * - Connected clients will be notified of service changes
 * - Removing all services does not close the GATT server
 *
 * @error_handling
 * - Server not initialized: Provides guidance to create server first
 * - Service not found: Lists available services
 * - Removal failure: Provides detailed error codes
 * - Invalid UUID format: Provides format requirements
 *
 * @see_also
 * - gattcreateserver: Create GATT server
 * - gattaddservices: Add services to server
 * - gattserverstatus: Check server status and services
 * - gattcloseserver: Close GATT server
 */
void HandleGattDelServices(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattServer == nullptr,
        "GATT server not initialized. Use 'gattcreateserver' command first.")) {
        return;
    }

    std::string serviceUuid;
    std::string removeAll;

    bool hasServiceParam = GeStrValue(argc, argv, PARAM_SERVICE, serviceUuid);
    bool hasAllParam = GeStrValue(argc, argv, PARAM_ALL, removeAll);
    // If no parameters provided, list available services
    if (!hasServiceParam && !hasAllParam) {
        ListAvailableServices();
        return;
    }

    // Remove all services
    if (hasAllParam && (removeAll == "true" || removeAll == "1")) {
        RemoveAllService();
        return;
    }

    // Remove specific service
    if (hasServiceParam) {
        RemoveSpecificService(serviceUuid);
        return;
    }

    // Invalid parameters
    Logd("Error: Invalid parameters");
    PrintUsageAndExamples(GATT_DEL_SERVICES_CMD, GATT_DEL_SERVICES_USAGE, GATT_DEL_SERVICES_EXAMPLES);
}

void HandleGattServerStatus(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattServer == nullptr,
        "GATT Server Status: Not created. Use 'gattcreateserver' to create a GATT server")) {
        return;
    }

    Logd("GATT Server Status: Active");

    std::list<GattService> &services = g_gattServer->GetServices();
    Logd("Number of services: %zu", services.size());

    if (!services.empty()) {
        int serviceIndex = 0;
        for (auto& service : services) {
            Logd("  Service[%d]: UUID=%s, Primary=%s",
                serviceIndex++,
                service.GetUuid().ToString().c_str(),
                service.IsPrimary() ? "true" : "false");

            const std::vector<GattCharacteristic>& characteristics = service.GetCharacteristics();
            for (size_t i = 0; i < characteristics.size(); i++) {
                Logd("    Characteristic[%zu]: UUID=%s",
                    i, characteristics[i].GetUuid().ToString().c_str());
            }
        }
    } else {
        Logd("No services added yet. Use 'gattaddservices' to add services");
    }
}

void HandleGattCloseServer(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (ShouldReturnVoid(g_gattServer == nullptr, "No GATT Server to close")) {
        return;
    }
    CloseGattServer();
}

}  // namespace Bluetooth
}  // namespace OHOS
