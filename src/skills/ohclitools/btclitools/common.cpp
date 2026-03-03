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
#include <thread>
#include <chrono>
#include <string>

void Log(const char *fmt, ...)
{
    // Set locale to support UTF-8 in Linux environment
    static bool localeInitialized = false;
    if (!localeInitialized) {
        setlocale(LC_ALL, "");  // Use system default locale, usually supports UTF-8
        localeInitialized = true;
    }

    va_list list;
    va_start(list, fmt);
    static_cast<void>(vfprintf(stdout, fmt, list));
    va_end(list);
    fflush(stdout);
}

using namespace std;

namespace OHOS {
namespace Bluetooth {

/**
 * Thread wait method, wait 30 seconds then print operation end message based on parameter
 * @param operation Operation name, used to print "operation finished"
 */
void WaitAndPrintOperationEnd(const std::string& operation)
{
    Logd("start wait: %s: 30s", operation.c_str());

    // Wait 30 seconds
    std::this_thread::sleep_for(std::chrono::seconds(DEFAULT_WAIT_SECONDS));

    // Print operation end message
    Logd("%s operation end", operation.c_str());
}

/**
 * Async thread wait method, wait 30 seconds in background thread then print operation end message
 * @param operation Operation name, used to print "operation finished"
 */
void WaitAndPrintOperationEndAsync(const std::string& operation, int interval)
{
    Logd("start wait: %s: %d", operation.c_str(), interval);

    // Execute wait in background thread
    std::thread waitThread([operation, interval]() {
        std::this_thread::sleep_for(std::chrono::seconds(interval));
        Logd("%s operation end", operation.c_str());
    });

    // Detach thread, let it run in background
    waitThread.detach();
}

/**
 * Sync thread wait method, wait for thread to end before returning
 * @param operation Operation name, used to print "operation finished"
 */
void WaitAndPrintOperationEndSync(const std::string& operation, int interval)
{
    Logd("start wait: %s: %d", operation.c_str(), interval);

    // Execute wait in new thread
    std::thread waitThread([operation, interval]() {
        std::this_thread::sleep_for(std::chrono::seconds(interval));
        Logd("%s operation end", operation.c_str());
    });

    // Wait for thread to end before continuing execution
    waitThread.join();
    Logd("thread is over");
}

/**
 * Convert Bluetooth state integer to descriptive string
 * @param state Bluetooth state integer value
 * @return String description of the Bluetooth state
 */
std::string BluetoothStateToString(int state)
{
    switch (state) {
        case BT_STATE_OFF:
            return "STATE_OFF (local bt off)";
        case BT_STATE_TURNING_ON:
            return "STATE_TURNING_ON (local br turning on)";
        case BT_STATE_ON:
            return "STATE_ON (local br on)";
        case BT_STATE_TURNING_OFF:
            return "STATE_TURNING_OFF (local br turning off)";
        case BT_STATE_BLE_TURNING_ON:
            return "STATE_BLE_TURNING_ON (local ble turning on)";
        case BT_STATE_BLE_ON:
            return "STATE_BLE_ON (local ble on)";
        case BT_STATE_BLE_TURNING_OFF:
            return "STATE_BLE_TURNING_OFF (local ble turning off)";
        default:
            return "UNKNOWN_BLUETOOTH_STATE (unknown bt state)";
    }
}

/**
 * Convert classic Bluetooth state integer to descriptive string
 * @param state Classic Bluetooth state integer value
 * @return String description of the classic Bluetooth state
 */
std::string BtStateToString(int state)
{
    switch (state) {
        case BT_BR_STATE_TURNING_ON:
            return "STATE_TURNING_ON (0)";
        case BT_BR_STATE_TURN_ON:
            return "STATE_TURN_ON (1)";
        case BT_BR_STATE_TURNING_OFF:
            return "STATE_TURNING_OFF (2)";
        case BT_BR_STATE_TURN_OFF:
            return "STATE_TURN_OFF (3)";
        default:
            return "UNKNOWN_BT_STATE (unknown bt state)";
    }
}

/**
 * Convert Bluetooth scan mode integer to descriptive string
 * @param mode Bluetooth scan mode integer value
 * @return String description of the Bluetooth scan mode
 */
std::string ScanModeToString(int mode)
{
    switch (mode) {
        case SCAN_MODE_NONE:
            return "SCAN_MODE_NONE (not discoverable, not connectable)";
        case SCAN_MODE_CONNECTABLE:
            return "SCAN_MODE_CONNECTABLE (connectable, not discoverable)";
        case SCAN_MODE_GENERAL_DISCOVERABLE:
            return "SCAN_MODE_GENERAL_DISCOVERABLE (general discoverable)";
        case SCAN_MODE_LIMITED_DISCOVERABLE:
            return "SCAN_MODE_LIMITED_DISCOVERABLE (limited discoverable)";
        case SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE:
            return "SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE (connectable and general discoverable)";
        case SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE:
            return "SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE (connectable and limited discoverable)";
        default:
            return "UNKNOWN_SCAN_MODE (unknown scan mode)";
    }
}

/**
 * Print Bluetooth scan mode usage information
 */
void PrintScanModeUsage()
{
    Logd("Scan modes:");
    for (int i = SCAN_MODE_NONE; i <= SCAN_MODE_MAX_VALUE; i++) {
        Logd("  %d - %s", i, ScanModeToString(i).c_str());
    }
}

/**
 * Convert Bluetooth transport type integer to descriptive string
 * @param transport Bluetooth transport type integer value
 * @return String description of the Bluetooth transport type
 */
std::string TransportTypeToString(int transport)
{
    switch (transport) {
        case BT_TRANSPORT_BREDR:
            return "BT_TRANSPORT_BREDR (Classic Bluetooth)";
        case BT_TRANSPORT_BLE:
            return "BT_TRANSPORT_BLE (Bluetooth Low Energy)";
        case BT_TRANSPORT_AUTO:
            return "BT_TRANSPORT_AUTO (Auto/Dual Mode)";
        default:
            return "UNKNOWN_TRANSPORT";
    }
}

/**
 * Convert Bluetooth bondable mode integer to descriptive string
 * @param mode Bluetooth bondable mode integer value
 * @return String description of the Bluetooth bondable mode
 */
std::string BondableModeToString(int mode)
{
    switch (mode) {
        case BONDABLE_MODE_OFF:
            return "BONDABLE_MODE_OFF (not bondable)";
        case BONDABLE_MODE_ON:
            return "BONDABLE_MODE_ON (bondable)";
        default:
            return "UNKNOWN_BONDABLE_MODE";
    }
}

/**
 * Print Bluetooth transport type usage information
 */
void PrintTransportTypeUsage()
{
    Logd("Transport types:");
    for (int i = BT_TRANSPORT_BREDR; i <= BT_TRANSPORT_BLE; i++) {
        Logd("  %d - %s", i, TransportTypeToString(i).c_str());
    }
    Logd("Bondable modes:");
    for (int i = BONDABLE_MODE_OFF; i <= BONDABLE_MODE_ON; i++) {
        Logd("  %d - %s", i, BondableModeToString(i).c_str());
    }
}

/**
 * Print UUID list with formatted output
 * @param uuids Vector of UUID strings to print
 * @param prefix Prefix string for each UUID line (default: "  UUID")
 */
void PrintUuidList(const std::vector<std::string>& uuids, const std::string& prefix)
{
    for (size_t i = 0; i < uuids.size(); i++) {
        Logd("%s[%zu]: %s", prefix.c_str(), i, uuids[i].c_str());
    }
}


} // namespace Bluetooth
} // namespace OHOS