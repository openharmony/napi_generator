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

/**
 * @file clitools_a2dp.cpp
 * @brief A2DP source CLI implementation (bluetooth_a2dp_src.h).
 * Single line length <= 110 chars; camelCase; no magic numbers; no double blank lines.
 */

#include "clitools_a2dp.h"
#include "clitools.h"
#include "common_dump.h"
#include "bluetooth_host.h"
#include "bluetooth_a2dp_src.h"
#include "bluetooth_def.h"
#include <string>
#include <vector>

namespace {
constexpr int K_STATE_CONNECTING = 0;
constexpr int K_STATE_CONNECTED = 1;
constexpr int K_STATE_DISCONNECTING = 2;
constexpr int K_STATE_DISCONNECTED = 3;
constexpr int K_STATE_INVALID = -1;
const char *a2dpStateStr(int state)
{
    switch (state) {
        case K_STATE_CONNECTING: return "connecting";
        case K_STATE_CONNECTED: return "connected";
        case K_STATE_DISCONNECTING: return "disconnecting";
        case K_STATE_DISCONNECTED: return "disconnected";
        default: return "invalid";
    }
}
} // namespace

using OHOS::Bluetooth::A2dpSource;
using OHOS::Bluetooth::BluetoothHost;
using OHOS::Bluetooth::BluetoothRemoteDevice;
using OHOS::Bluetooth::GeStrValue;
using OHOS::Bluetooth::GetIntValue;

void HandleA2dpConnect(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpconnect mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int32_t ret = profile->Connect(device);
    Logd("a2dpconnect: ret=%d", ret);
}

void HandleA2dpDisconnect(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpdisconnect mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int32_t ret = profile->Disconnect(device);
    Logd("a2dpdisconnect: ret=%d", ret);
}

void HandleA2dpGetDevices(int argc, const char *argv[])
{
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    std::vector<int> states = { K_STATE_CONNECTED, K_STATE_CONNECTING, K_STATE_DISCONNECTING };
    std::vector<BluetoothRemoteDevice> devices;
    int ret = profile->GetDevicesByStates(states, devices);
    if (ret != static_cast<int>(devices.size())) {
        Logd("a2dpgetdevices: GetDevicesByStates returned %d", ret);
    }
    for (size_t i = 0; i < devices.size(); i++) {
        Logd("  [%zu] %s", i, devices[i].GetDeviceAddr().c_str());
    }
    Logd("a2dpgetdevices: count=%zu", devices.size());
}

void HandleA2dpGetDeviceState(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpgetdevicestate mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int state = K_STATE_INVALID;
    int ret = profile->GetDeviceState(device, state);
    Logd("a2dpgetdevicestate: state=%d (%s) ret=%d", state, a2dpStateStr(state), ret);
}

void HandleA2dpSetActiveSink(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpsetactive mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int ret = profile->SetActiveSinkDevice(device);
    Logd("a2dpsetactive: ret=%d", ret);
}

void HandleA2dpGetActiveSink(int argc, const char *argv[])
{
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    const BluetoothRemoteDevice &active = profile->GetActiveSinkDevice();
    Logd("a2dpgetactive: %s", active.GetDeviceAddr().c_str());
}

void HandleA2dpStartPlaying(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpstartplaying mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int ret = profile->StartPlaying(device);
    Logd("a2dpstartplaying: ret=%d", ret);
}

void HandleA2dpSuspendPlaying(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpsuspendplaying mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int ret = profile->SuspendPlaying(device);
    Logd("a2dpsuspendplaying: ret=%d", ret);
}

void HandleA2dpStopPlaying(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpstopplaying mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int ret = profile->StopPlaying(device);
    Logd("a2dpstopplaying: ret=%d", ret);
}

void HandleA2dpGetPlayingState(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: a2dpgetplayingstate mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    A2dpSource *profile = A2dpSource::GetProfile();
    if (profile == nullptr) {
        Logd("a2dp: GetProfile failed");
        return;
    }
    int state = profile->GetPlayingState(device);
    Logd("a2dpgetplayingstate: playing=%d (0=not_playing 1=playing)", state);
}
