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

#ifndef CLITOOLS_H
#define CLITOOLS_H

#include <cstdarg>
#include <cstring>
#include <iostream>
#include <securec.h>
#include <sstream>
#include <string>
#include <vector>
#include <chrono>
#include <thread>
#include <utility>

#include "bluetooth_host.h"
#include "bluetooth_ble_advertiser.h"
#include "bluetooth_ble_central_manager.h"
#include "bluetooth_gatt_client.h"
#include "bluetooth_gatt_server.h"
#include "bluetooth_gatt_service.h"
#include "bluetooth_gatt_characteristic.h"
#include "bluetooth_gatt_descriptor.h"
#include "bluetooth_errorcode.h"
#include "ohos_bt_gatt.h"
#include "mischandle.h"
#include "clitools_constants.h"

// Utility functions
template<typename T, size_t N>
constexpr size_t ArraySize(const T(&)[N])
{
    return N;
}
// Function declarations (needed early for macros and inline functions)
void Log(const char *fmt, ...);

#define Logd(fmt, ...) Log(fmt"\n", ##__VA_ARGS__)
// Improved macros that make control flow more explicit
#define ASSERT_AND_LOG(condition, message, ...) \
    do { \
        if (condition) { \
            Logd(message, ##__VA_ARGS__); \
        } \
    } while (0)

// Template-based alternatives for better type safety and explicit control flow
template<typename ReturnType = void>
inline bool AssertWithReturn(bool condition, const char* message, ReturnType* result = nullptr)
{
    if (condition) {
        Logd("%s", message);
        return true; // Indicates should return
    }
    return false; // Continue execution
}

// Function-based alternatives to replace problematic macros with return statements
inline bool ShouldReturnVoid(bool condition, const char* message)
{
    if (condition) {
        Logd("%s", message);
        return true; // Indicates caller should return
    }
    return false; // Continue execution
}

inline bool ShouldReturnFalse(bool condition, const char* message)
{
    if (condition) {
        Logd("%s", message);
        return true; // Indicates caller should return false
    }
    return false; // Continue execution
}

// Overloaded versions for formatted strings (using C-style variadic functions)
inline bool ShouldReturnVoid(bool condition, const char* format, const char* arg)
{
    if (condition) {
        char buffer[LOG_MESSAGE_BUFFER_SIZE];
        int result = sprintf_s(buffer, sizeof(buffer), "%s\n", format);
        if (result > 0) {
            Log(buffer, arg);
        }
        return true; // Indicates caller should return
    }
    return false; // Continue execution
}

// Usage examples:
// Instead of: ASSERT_RET(condition, "Error message");
// Use: if (ShouldReturnVoid(condition, "Error message")) { return; }
//
// Instead of: ASSERT_RET_FALSE(condition, "Error message");
// Use: if (ShouldReturnFalse(condition, "Error message")) { return false; }

#define EXEC_IF(condition, format, ...) \
    do { \
        if (condition) { \
            Logd(format, ##__VA_ARGS__); \
        } \
    } while (0)

// Template function to replace ASSERT_RET_FUNC macro
template<typename Func>
inline void AssertReturnWithFunction(bool condition, Func&& func)
{
    if (condition) {
        func();
        return;
    }
}

// Constants
const int MAX_ARGS = 16;
const int BAND_2GHZ = 1;
const int BAND_5GHZ = 2;
const int CMD_IDX = 1;
const int ARG_IDX = 2;
const int MIN_WPA_LENGTH = 8;

constexpr long SCAN_REPORT_DELAY_MILLIS = 3 * 1000;
constexpr size_t NOTIFY_DATA_MAX_SIZE = 1024 * 1024;

// GATT MTU Constants
const int GATT_DEFAULT_MTU_SIZE = 23;
const int GATT_MIN_MTU_SIZE = 23;
const int GATT_MAX_MTU_SIZE = 517;
const int GATT_PREFERRED_MTU_SIZE = 247;

// Thread Wait Constants
const int DEFAULT_WAIT_SECONDS = 30;
const int OPERATION_TIMEOUT_SECONDS = 5;
const int SERVICE_DISCOVERY_WAIT_SECONDS = 2;

// Bluetooth State Constants
const int BT_STATE_OFF = 0;
const int BT_STATE_TURNING_ON = 1;
const int BT_STATE_ON = 2;
const int BT_STATE_TURNING_OFF = 3;
const int BT_STATE_BLE_TURNING_ON = 4;
const int BT_STATE_BLE_ON = 5;
const int BT_STATE_BLE_TURNING_OFF = 6;

// Classic Bluetooth State Constants
const int BT_BR_STATE_TURNING_ON = 0;
const int BT_BR_STATE_TURN_ON = 1;
const int BT_BR_STATE_TURNING_OFF = 2;
const int BT_BR_STATE_TURN_OFF = 3;

// Scan Mode Constants
const int SCAN_MODE_NONE = 0;
const int SCAN_MODE_CONNECTABLE = 1;
const int SCAN_MODE_GENERAL_DISCOVERABLE = 2;
const int SCAN_MODE_LIMITED_DISCOVERABLE = 3;
const int SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE = 4;
const int SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE = 5;
const int SCAN_MODE_MAX_VALUE = 5;

// Transport Type Constants
const int BT_TRANSPORT_BREDR = 0;
const int BT_TRANSPORT_BLE = 1;
const int BT_TRANSPORT_AUTO = 2;

// Bondable Mode Constants
const int BONDABLE_MODE_OFF = 0;
const int BONDABLE_MODE_ON = 1;

// Additional constants not in clitools_constants.h
#define DEFAULT_SPO2_LEVEL                      0x62    // 98%
#define DEFAULT_TEMPERATURE_VALUE               0x65    // Temperature value
#define DEFAULT_TEMPERATURE_EXPONENT            0x0E    // Temperature exponent

// Default time values (2024-12-15 14:30:00)
#define DEFAULT_YEAR_LSB                        0xE8    // 2024 LSB
#define DEFAULT_YEAR_MSB                        0x07    // 2024 MSB
#define DEFAULT_MONTH                           0x0C    // December
#define DEFAULT_DAY                             0x0F    // 15th
#define DEFAULT_HOUR                            0x0E    // 14 (2 PM)
#define DEFAULT_MINUTE                          0x1E    // 30

// Time zone and environmental constants
#define DEFAULT_TIMEZONE_OFFSET                 0x20    // +8 hours
#define DEFAULT_DST_OFFSET                      0x01    // Standard Time
#define DEFAULT_ENV_TEMP_LSB                    0xFF    // 25.5°C LSB
#define DEFAULT_ENV_TEMP_MSB                    0x00    // 25.5°C MSB

// Structure definitions
struct StaCliCmd {
    const char *cmd;
    void (*handler)(int argc, const char* argv[]);
    const char *usage;
};

// Function declarations

// Template function for UUID objects with ToString() method
template<typename UuidType>
void PrintUuidObjectList(const std::vector<UuidType>& uuids, const std::string& prefix = "  UUID")
{
    for (size_t i = 0; i < uuids.size(); i++) {
        Logd("%s[%zu]: %s", prefix.c_str(), i, uuids[i].ToString().c_str());
    }
}

void HelpCommand(const char *command);

// Common print utility functions
bool AssertAndDumpServiceNotFound(const OHOS::Bluetooth::GattService* service, const std::string& serviceUuid,
    const std::vector<OHOS::Bluetooth::GattService>& services);
bool AssertAndDumpDescriptorNotFound(const OHOS::Bluetooth::GattDescriptor* descriptor,
    const std::string& descriptorUuid, OHOS::Bluetooth::GattCharacteristic* characteristic,
    const std::string& characteristicUuid);

// Usage printing utility functions
void PrintGattDelServicesUsage();
void PrintGattReadDescriptorUsage();
void PrintGattWriteDescriptorUsage();
void DumpCreateServiceUsage();
void DumpGattService(const std::string& uuidStr);

// Status dump utility functions
void DumpBrStatus();
void PrintGattWriteError(int errorCode);
void DumpCCCD(const uint8_t* data, size_t length);
void DumpCCCDInterpretation(const uint8_t* data, size_t length);
void DumpPresentation(const uint8_t* data, size_t length);
void DumpCharacteristicValue(const OHOS::Bluetooth::GattCharacteristic* characteristic);
void DumpDescriptorValue(const OHOS::Bluetooth::GattDescriptor* descriptor);

namespace OHOS {
namespace Bluetooth {

// Global variables
extern std::string g_mac;

// Service management functions
int AddHealthRelatedService();
int AddAllService();
void RemoveAllService();
void RemoveSpecificService(const std::string& serviceUuid);
void ListAvailableServices();
bool TryGetRemovePrimaryService(const UUID& targetUuid, const std::string& serviceUuid, int& result);
bool TryGetRemoveSecondaryService(const UUID& targetUuid, const std::string& serviceUuid, int& result);
void ReportOverallResult(bool foundPrimary, bool foundSecondary, int primaryResult, int secondaryResult,
    const std::string& serviceUuid);

// Device management functions
void GetDeviceNameDirectly();
void GetDeviceGattName();

// Service/Characteristic lookup functions
GattService* GetServiceByUuid(const std::string& serviceUuid);
bool TryGetServices(std::vector<GattService>& services);

// GATT condition checking functions
bool CheckGattReadCondition(int argc, const char* argv[], std::string& serviceUuid, std::string& characteristicUuid);

// GATT operation helper functions
void GattSetWriteType(GattCharacteristic* characteristic, GattCharacteristic::WriteType writeType,
    const std::string& writeTypeStr);
void GattWriteCharacteristic(GattCharacteristic* characteristic, std::vector<uint8_t> data,
    GattCharacteristic::WriteType writeType);
void GattWriteDescriptor(GattDescriptor* descriptor, const UUID& descriptorUuid);
GattCharacteristic::WriteType WriteType2GattType(const std::string& writeType);
bool ParseHexData(const std::string& hexValue, std::vector<uint8_t>& data);

// Functions needed by HandleUserCommand
void Help(void);
int RegisterCallbacks();
int DeregisterCallbacks();
void HandleUserCommand(int argc, const char *argv[]);

// Thread wait functions
void WaitAndPrintOperationEnd(const std::string& operation);
void WaitAndPrintOperationEndAsync(const std::string& operation, int interval = DEFAULT_WAIT_SECONDS);
void WaitAndPrintOperationEndSync(const std::string& operation, int interval = DEFAULT_WAIT_SECONDS);

// Bluetooth state utility functions
std::string BluetoothStateToString(int state);
std::string BtStateToString(int state);
std::string ScanModeToString(int mode);
void PrintScanModeUsage();
std::string TransportTypeToString(int transport);
std::string BondableModeToString(int mode);
void PrintTransportTypeUsage();
void PrintUuidList(const std::vector<std::string>& uuids, const std::string& prefix = "  UUID");

} // namespace Bluetooth
} // namespace OHOS

// Command handler functions
void HandleEnable(int argc, const char* argv[]);
void HandleDisable(int argc, const char* argv[]);
void HandleBrScan(int argc, const char* argv[]);
void HandleBrStop(int argc, const char* argv[]);
void HandleBrGetLocalName(int argc, const char* argv[]);
void HandleBrSetLocalName(int argc, const char* argv[]);
void HandleBrGetRemoteName(int argc, const char* argv[]);
void HandleBrSetRemoteName(int argc, const char* argv[]);
void HandleBrGetRemoteBatteryInfo(int argc, const char* argv[]);
void HandleBrGetLastConnectTime(int argc, const char* argv[]);
void HandleBrPairedDevices(int argc, const char* argv[]);
void HandleBrPaireState(int argc, const char* argv[]);
void HandleBrProfileState(int argc, const char* argv[]);
void HandleBrConfirmPaire(int argc, const char* argv[]);
void HandleBrSetPinCode(int argc, const char* argv[]);
void HandleBleScan(int argc, const char* argv[]);
void HandleBleStop(int argc, const char* argv[]);
void HandleGattConnect(int argc, const char* argv[]);
void HandleGattDisconnect(int argc, const char* argv[]);
void HandleGattGetServices(int argc, const char* argv[]);
void HandleGattGetDeviceName(int argc, const char* argv[]);
void HandleGattReadCharactValue(int argc, const char* argv[]);
void HandleGattWriteCharactValue(int argc, const char* argv[]);
void HandleGattReadDescripValue(int argc, const char* argv[]);
void HandleGattWriteDescripValue(int argc, const char* argv[]);
void HandleGattGetRssi(int argc, const char* argv[]);
void HandleGattSetMtuSize(int argc, const char* argv[]);
void HandleGattCreateServer(int argc, const char* argv[]);
void HandleGattAddServices(int argc, const char* argv[]);
void HandleGattDelServices(int argc, const char* argv[]);
void HandleGattCreateClient(int argc, const char* argv[]);
void HandleGattServerStatus(int argc, const char* argv[]);
void HandleGattCloseServer(int argc, const char* argv[]);

// GATT Service creation helper functions
int AddBatteryService();
int AddDeviceInformationService();
int AddHeartRateService();
int AddCustomService();
int AddHealthThermometerService();
int AddBloodPressureService();
int AddCurrentTimeService();
int AddEnvironmentalSensingService();
int AddPulseOximeterService();
void HandleBleGetConnectedDevices(int argc, const char* argv[]);
void HandleDisconnect(int argc, const char* argv[]);
void HandleGetStatus(int argc, const char* argv[]);
void HandleGetConfigList(int argc, const char* argv[]);
void HandleGetScanResults(int argc, const char* argv[]);
void HandleUpdateConfig(int argc, const char* argv[]);
void HandleAddConfig(int argc, const char* argv[]);
void HandleRemoveConfigs(int argc, const char* argv[]);
void HandleRemoveConfig(int argc, const char* argv[]);
void HandleConnectNetwork(int argc, const char* argv[]);
void HandleConnectDevice(int argc, const char* argv[]);
void HandleGetWifiState(int argc, const char* argv[]);
void HandleGetWifiDetailState(int argc, const char* argv[]);
void HandleGetCountry(int argc, const char* argv[]);
void HandleSetCountry(int argc, const char* argv[]);
void HandleGetSignalLevel(int argc, const char* argv[]);
void HandleGetSupportedFeatures(int argc, const char* argv[]);
void HandleEnableConfig(int argc, const char* argv[]);
void HandleDisableConfig(int argc, const char* argv[]);
void HandleReconnect(int argc, const char* argv[]);
void HandleReassociate(int argc, const char* argv[]);
void HandleGetDeviceMac(int argc, const char* argv[]);
void HandleBrGetBtScanMode(int argc, const char* argv[]);
void HandleBrSetBtScanMode(int argc, const char* argv[]);
void HandleBrGetBondableMode(int argc, const char* argv[]);
void HandleBrSetBondableMode(int argc, const char* argv[]);
void HandleBrIsDiscovering(int argc, const char* argv[]);
void HandleBrGetDiscoveryEndTime(int argc, const char* argv[]);
void HandleBrStartDiscovery(int argc, const char* argv[]);
void HandleBrCancelDiscovery(int argc, const char* argv[]);
void HandleBrRemoveAllPairs(int argc, const char* argv[]);
void HandleBrRemovePair(int argc, const char* argv[]);
void HandleBrStartPair(int argc, const char* argv[]);
void HandleBrCancelPair(int argc, const char* argv[]);
void HandleBrIsBondedFromLocal(int argc, const char* argv[]);
void HandleBrIsAclConnected(int argc, const char* argv[]);
void HandleBrIsAclEncrypted(int argc, const char* argv[]);
void HandleBrGetDeviceClass(int argc, const char* argv[]);
void HandleBrGetDeviceProductId(int argc, const char* argv[]);
void HandleBrGetDeviceUuids(int argc, const char* argv[]);
void HandleBrSetDevicePin(int argc, const char* argv[]);
void HandleBrSetDevicePairingConfirmation(int argc, const char* argv[]);
void HandleBrSetDevicePasskey(int argc, const char* argv[]);
void HandleBrPairRequestReply(int argc, const char* argv[]);
void HandleBrGetTransportType(int argc, const char* argv[]);
void HandleBrReadRemoteRssiValue(int argc, const char* argv[]);
void HandleBrIsValidBluetoothRemoteDevice(int argc, const char* argv[]);
void HandleBrGetDeviceProductType(int argc, const char* argv[]);
void HandleBrSetDeviceCustomType(int argc, const char* argv[]);
void HandleBrGetDeviceVendorId(int argc, const char* argv[]);
void HandleBrIsSupportVirtualAutoConnect(int argc, const char* argv[]);
void HandleBrSetVirtualAutoConnectType(int argc, const char* argv[]);
void HandleBrControlDeviceAction(int argc, const char* argv[]);
void HandleBrGetCloudBondState(int argc, const char* argv[]);
void HandleBrGetDeviceTransport(int argc, const char* argv[]);

// Service removal result reporting function
void ReportOverallResult(bool foundPrimary, bool foundSecondary, int primaryResult, int secondaryResult,
    const std::string& serviceUuid);


// External command table
extern const struct StaCliCmd g_staCliCmds[];
extern const int g_staCliCmdsCount;

#endif // CLITOOLS_H
