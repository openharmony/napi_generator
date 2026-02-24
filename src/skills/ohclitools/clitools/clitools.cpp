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

using namespace std;

namespace OHOS {
namespace Bluetooth {

static BluetoothHost *g_bluetoothHost = nullptr;
static std::shared_ptr<BleCentralManager> g_bleCentralManager = nullptr;
std::shared_ptr<OHOS::Bluetooth::GattClient> g_gattClient = nullptr;
static std::shared_ptr<GattServer> g_gattServer = nullptr;
static std::string g_currentGattDeviceAddress = "";
std::string g_mac = "00:00:00:00:00:00";

// Command usage strings and examples
static const char* const GATT_DEL_SERVICES_CMD = "gattdelservices";
static const char* const GATT_DEL_SERVICES_USAGE = "gattdelservices [service=service_uuid] [all=true]";
static const std::vector<std::string> GATT_DEL_SERVICES_EXAMPLES = {
    "gattdelservices service=0000180F-0000-1000-8000-00805F9B34FB",
    "gattdelservices all=true",
    "gattdelservices  (list available services)"
};

static const char* const GATT_READ_CV_CMD = "gattreadcv";
static const char* const GATT_READ_CV_USAGE = "gattreadcv service=service_uuid characteristic=characteristic_uuid";
static const std::vector<std::string> GATT_READ_CV_EXAMPLES = {
    "gattreadcv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB"
};

static const char* const GATT_WRITE_CV_CMD = "gattwritecv";
static const char* const GATT_WRITE_CV_USAGE =
    "gattwritecv service=service_uuid characteristic=characteristic_uuid value=hex_or_string [type=hex|string] "
    "[write_type=default|no_response|signed]";
static const std::vector<std::string> GATT_WRITE_CV_EXAMPLES = {
    "gattwritecv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB "
    "value=55 type=hex",
    "gattwritecv service=0000180A-0000-1000-8000-00805F9B34FB characteristic=00002A29-0000-1000-8000-00805F9B34FB "
    "value=\"Hello World\" type=string"
};

// Helper function to close GATT Server
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
static int AddBatteryService()
{
    return AddBatteryServiceWithServer(g_gattServer);
}

static int AddDeviceInformationService()
{
    return AddDeviceInformationServiceWithServer(g_gattServer);
}

static int AddHeartRateService()
{
    return AddHeartRateServiceWithServer(g_gattServer);
}

static int AddCustomService()
{
    return AddCustomServiceWithServer(g_gattServer);
}

static int AddHealthThermometerService()
{
    return AddHealthThermometerServiceWithServer(g_gattServer);
}

static int AddBloodPressureService()
{
    return AddBloodPressureServiceWithServer(g_gattServer);
}

// Helper function to add Current Time Service (0x1805)
static int AddCurrentTimeService()
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
static int AddEnvironmentalSensingService()
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
static int AddPulseOximeterService()
{
    return AddPulseOximeterServiceWithServer(g_gattServer);
}

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

static void HandleEnable(int argc, const char* argv[])
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

static void HandleDisable(int argc, const char* argv[])
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

static void HandleEnableBr(int argc, const char* argv[])
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

static void HandleDisableBr(int argc, const char* argv[])
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

static void HandleEnableBle(int argc, const char* argv[])
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

static void HandleDisableBle(int argc, const char* argv[])
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

static void HandleBrScan(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bluetoothHost->StartBtDiscovery();
    WaitAndPrintOperationEndSync("brscan");
}


static void HandleBrStop(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bluetoothHost->CancelBtDiscovery();
}

static void HandleBtState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    int state = g_bluetoothHost->GetBtState();
    std::string stateStr = BtStateToString(state);
    Logd("GetBtState: state[%d] - [%s]", state, stateStr.c_str());
}

static void HandleBluetoothState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    BluetoothState state = g_bluetoothHost->GetBluetoothState();
    std::string stateStr = BluetoothStateToString(static_cast<int>(state));
    Logd("GetBtState: state[%d] - [%s]", state, stateStr.c_str());
}

static void HandleBrGetLocalName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string name = g_bluetoothHost->GetLocalName();
    Logd("GetLocalName:%s", name.c_str());
}

static void HandleBrSetLocalName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string name;
    std::string prefix = PARAM_NAME;
    GeStrValue(argc, argv, prefix, name);
    bool ret = g_bluetoothHost->SetLocalName(name);
    Logd("SetLocalName:%d, %s", ret, name.c_str());
}

static void HandleBrGetRemoteName(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    std::string name = remoteDevice.GetDeviceName();
    Logd("GetRemoteName:%s", name.c_str());
}

static void HandleBrSetRemoteName(int argc, const char* argv[])
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

static void HandleBrGetRemoteBatteryInfo(int argc, const char* argv[])
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

static void HandleBrGetLastConnectTime(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int64_t connectionTime;
    int32_t err = remoteDevice.GetLastConnectionTime(connectionTime);
    Logd("GetLastConnectionTime[%d]: time[%lld]", err, connectionTime);
}

static void HandleBrPairedDevices(int argc, const char* argv[])
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

static void HandleBrPaireState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int state = PAIR_NONE;
    int32_t err = remoteDevice.GetPairState(state);
    Logd("GetPairState[%d]: state[%d]", err, state);
}

static void HandleBrProfileState(int argc, const char* argv[])
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

static void HandleBrConfirmPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);
    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int state = PAIR_NONE;
    int32_t err = remoteDevice.SetDevicePairingConfirmation(state);
    Logd("ConfirmPair[%d]: state[%d]", err, state);
}

static void HandleBrSetPinCode(int argc, const char* argv[])
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

static void HandleBrGetBtScanMode(int argc, const char* argv[])
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

static void HandleBrSetBtScanMode(int argc, const char* argv[])
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

static void HandleBrGetBondableMode(int argc, const char* argv[])
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

static void HandleBrSetBondableMode(int argc, const char* argv[])
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

static void HandleBrIsDiscovering(int argc, const char* argv[])
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

static void HandleBrGetDiscoveryEndTime(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    long long endTime = g_bluetoothHost->GetBtDiscoveryEndMillis();
    Logd("GetDiscoveryEndTime: endTime[%lld]", endTime);
}

static void HandleBrStartDiscovery(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    bool result = g_bluetoothHost->StartBtDiscovery();
    Logd("StartBtDiscovery result[%d]", result);
}

static void HandleBrCancelDiscovery(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_bluetoothHost == nullptr) {
        g_bluetoothHost = &BluetoothHost::GetDefaultHost();
    }

    bool result = g_bluetoothHost->CancelBtDiscovery();
    Logd("CancelBtDiscovery result[%d]", result);
}

static void HandleBrRemoveAllPairs(int argc, const char* argv[])
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

static void HandleBrRemovePair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = g_bluetoothHost->RemovePair(remoteDevice);
    Logd("RemovePair mac[%s] result[%d]", mac.c_str(), result);
}

static void HandleBrStartPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.StartPair();
    Logd("StartPair mac[%s] result[%d]", mac.c_str(), result);
    WaitAndPrintOperationEndSync("startpair");
}

static void HandleBrCancelPair(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.CancelPairing();
    Logd("CancelPair mac[%s] result[%d]", mac.c_str(), result);
    WaitAndPrintOperationEndSync("cancelpair");
}

static void HandleBrIsBondedFromLocal(int argc, const char* argv[])
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

static void HandleBrIsAclConnected(int argc, const char* argv[])
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

static void HandleBrIsAclEncrypted(int argc, const char* argv[])
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

static void HandleBrGetDeviceClass(int argc, const char* argv[])
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

static void HandleBrGetDeviceProductId(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    std::string productId;
    int ret = remoteDevice.GetDeviceProductId(productId);
    Logd("GetDeviceProductId[%d] mac[%s] productId[%s]", ret, mac.c_str(), productId.c_str());
}

static void HandleBrGetDeviceUuids(int argc, const char* argv[])
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

static void HandleBrSetDevicePin(int argc, const char* argv[])
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

static void HandleBrSetDevicePairingConfirmation(int argc, const char* argv[])
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

static void HandleBrSetDevicePasskey(int argc, const char* argv[])
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

static void HandleBrPairRequestReply(int argc, const char* argv[])
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

static void HandleBrGetTransportType(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int transport = remoteDevice.GetTransportType();
    std::string transportStr = TransportTypeToString(transport);

    Logd("GetTransportType mac[%s] transport[%d]-%s", mac.c_str(), transport, transportStr.c_str());
}

static void HandleBrReadRemoteRssiValue(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t result = remoteDevice.ReadRemoteRssiValue();
    Logd("ReadRemoteRssiValue mac[%s] result[%d]", mac.c_str(), result);
}

static void HandleBrIsValidBluetoothRemoteDevice(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool result = remoteDevice.IsValidBluetoothRemoteDevice();
    Logd("IsValidBluetoothRemoteDevice mac[%s] result[%d]", mac.c_str(), result);
}

static void HandleBrGetDeviceProductType(int argc, const char* argv[])
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

static void HandleBrSetDeviceCustomType(int argc, const char* argv[])
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

static void HandleBrGetDeviceVendorId(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    uint16_t vendorId = 0;
    int ret = remoteDevice.GetDeviceVendorId(vendorId);
    Logd("GetDeviceVendorId[%d] mac[%s] vendorId[%d]", ret, mac.c_str(), vendorId);
}

static void HandleBrIsSupportVirtualAutoConnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    bool outSupport = false;
    int result = remoteDevice.IsSupportVirtualAutoConnect(outSupport);
    Logd("IsSupportVirtualAutoConnect mac[%d] result[%d]", outSupport, result);
}

static void HandleBrSetVirtualAutoConnectType(int argc, const char* argv[])
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

static void HandleBrControlDeviceAction(int argc, const char* argv[])
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

static void HandleBrGetCloudBondState(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int32_t cloudBondState = 0;
    int ret = remoteDevice.GetCloudBondState(cloudBondState);
    Logd("GetCloudBondState[%d] mac[%s] bondState[%d]", ret, mac.c_str(), cloudBondState);
}

static void HandleBrGetDeviceTransport(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
    int transport = remoteDevice.GetTransportType();
    std::string transportStr = TransportTypeToString(transport);

    Logd("GetDeviceTransport mac[%s] transport[%d]-%s", mac.c_str(), transport, transportStr.c_str());
}

static void HandleBleScan(int argc, const char* argv[])
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

static void HandleBleStop(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    g_bleCentralManager->StopScan();
}

static void HandleGattConnect(int argc, const char* argv[])
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

static void HandleGattDisconnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        int result = g_gattClient->Disconnect();
        Logd("GATT Disconnect result[%d]", result);
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}

static void HandleGattGetServices(int argc, const char* argv[])
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
static void HandleGattGetDeviceName(int argc, const char* argv[])
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
static void HandleGattReadCharactValue(int argc, const char* argv[])
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
static void HandleGattWriteCharactValue(int argc, const char* argv[])
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
static void HandleGattReadDescripValue(int argc, const char* argv[])
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
static void HandleGattWriteDescripValue(int argc, const char* argv[])
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

static void HandleGattGetRssi(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (g_gattClient != nullptr) {
        int result = g_gattClient->RequestConnectionPriority(0); // Request RSSI
        Logd("GATT GetRssi request result[%d]", result);
    } else {
        Logd("GATT client not initialized. Use 'gattconn' command first.");
    }
}

static void HandleGattSetMtuSize(int argc, const char* argv[])
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

static void HandleGattCreateServer(int argc, const char* argv[])
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

static void HandleGattAddServices(int argc, const char* argv[])
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
static void HandleGattDelServices(int argc, const char* argv[])
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

static void HandleGattCreateClient(int argc, const char* argv[])
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

static void HandleGattServerStatus(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);

    if (ShouldReturnVoid(g_gattServer == nullptr,
        "GATT Server Status: Not created. Use 'gattcreateserver' to create a GATT server")) {
        return;
    }

    Logd("GATT Server Status: Active");

    // Get and display services
    std::list<GattService> &services = g_gattServer->GetServices();
    Logd("Number of services: %zu", services.size());

    if (!services.empty()) {
        int serviceIndex = 0;
        for (auto& service : services) {
            Logd("  Service[%d]: UUID=%s, Primary=%s",
                serviceIndex++,
                service.GetUuid().ToString().c_str(),
                service.IsPrimary() ? "true" : "false");

            // Display characteristics for each service
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

static void HandleGattCloseServer(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    if (ShouldReturnVoid(g_gattServer == nullptr, "No GATT Server to close")) {
        return;
    }
    CloseGattServer();
}

static void HandleBleGetConnectedDevices(int argc, const char* argv[])
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

static void HandleDisconnect(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string mac;
    GetMac(argc, argv, mac);

    if (!mac.empty()) {
        BluetoothRemoteDevice remoteDevice = g_bluetoothHost->GetRemoteDevice(mac, BT_TRANSPORT_BREDR);
        // For classic Bluetooth, we would disconnect profiles
        Logd("Disconnect request for device: %s", mac.c_str());
        // Note: Actual disconnection would require profile-specific disconnect calls
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

const struct StaCliCmd g_staCliCmds[] = {
    // br interaction
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

    // ble interaction
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

    // rich interaction
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

