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
 * @file clitools_socket.cpp
 * @brief Socket/SPP CLI implementation (bluetooth_socket.h).
 * Single line length <= 110 chars; camelCase; no magic numbers; no double blank lines.
 */

#include "clitools_socket.h"
#include "clitools.h"
#include "common_dump.h"
#include "bluetooth_host.h"
#include "bluetooth_socket.h"
#include "bluetooth_def.h"
#include "uuid.h"
#include <string>
#include <vector>
#include <memory>
#include <cstdint>

namespace {
constexpr int kDefaultAcceptTimeoutMs = 30000;
constexpr size_t kMaxReadBufLen = 4096;
const char *kDefaultSppServerName = "BtCliSppServer";
std::shared_ptr<OHOS::Bluetooth::ServerSocket> g_sppServer = nullptr;
std::shared_ptr<OHOS::Bluetooth::ClientSocket> g_sppClient = nullptr;
} // namespace

using OHOS::Bluetooth::BluetoothHost;
using OHOS::Bluetooth::BluetoothRemoteDevice;
using OHOS::Bluetooth::ClientSocket;
using OHOS::Bluetooth::GeStrValue;
using OHOS::Bluetooth::GetIntValue;
using OHOS::Bluetooth::ServerSocket;
using OHOS::Bluetooth::SocketFactory;
using OHOS::Bluetooth::UUID;

void handleSppListen(int argc, const char *argv[])
{
    std::string name = kDefaultSppServerName;
    GeStrValue(argc, argv, PARAM_NAME, name);
    if (g_sppServer != nullptr) {
        Logd("spplisten: closing previous server");
        g_sppServer->Close();
        g_sppServer = nullptr;
    }
    UUID uuid = UUID::FromString(OHOS::Bluetooth::BLUETOOTH_UUID_SPP);
    g_sppServer = SocketFactory::DataListenRfcommByServiceRecord(name, uuid);
    if (g_sppServer == nullptr) {
        Logd("spplisten: DataListenRfcommByServiceRecord failed");
        return;
    }
    int ret = g_sppServer->Listen();
    Logd("spplisten: Listen ret=%d name=%s", ret, name.c_str());
}

void handleSppAccept(int argc, const char *argv[])
{
    int timeoutMs = kDefaultAcceptTimeoutMs;
    GetIntValue(argc, argv, "timeout=", timeoutMs);
    if (g_sppServer == nullptr) {
        Logd("sppaccept: no server, call spplisten first");
        return;
    }
    if (g_sppClient != nullptr) {
        g_sppClient->Close();
        g_sppClient = nullptr;
    }
    g_sppClient = g_sppServer->Accept(timeoutMs);
    if (g_sppClient == nullptr) {
        Logd("sppaccept: Accept failed or timeout");
        return;
    }
    Logd("sppaccept: connected");
}

void handleSppConnect(int argc, const char *argv[])
{
    std::string mac;
    if (!GeStrValue(argc, argv, PARAM_MAC, mac)) {
        Logd("usage: sppconnect mac=xx:xx:xx:xx:xx:xx");
        return;
    }
    if (g_sppClient != nullptr) {
        g_sppClient->Close();
        g_sppClient = nullptr;
    }
    BluetoothHost &host = BluetoothHost::GetDefaultHost();
    BluetoothRemoteDevice device = host.GetRemoteDevice(mac, 0);  // 0 = BR/EDR
    UUID uuid = UUID::FromString(OHOS::Bluetooth::BLUETOOTH_UUID_SPP);
    g_sppClient = SocketFactory::BuildRfcommDataSocketByServiceRecord(device, uuid);
    if (g_sppClient == nullptr) {
        Logd("sppconnect: BuildRfcommDataSocketByServiceRecord failed");
        return;
    }
    const int psmRfcomm = 0;
    int ret = g_sppClient->Connect(psmRfcomm);
    Logd("sppconnect: ret=%d", ret);
}

void handleSppDisconnect(int argc, const char *argv[])
{
    if (g_sppClient == nullptr) {
        Logd("sppdisconnect: no client");
        return;
    }
    g_sppClient->Close();
    g_sppClient = nullptr;
    Logd("sppdisconnect: done");
}

void handleSppRead(int argc, const char *argv[])
{
    if (g_sppClient == nullptr || !g_sppClient->IsConnected()) {
        Logd("sppread: no connected client");
        return;
    }
    int len = static_cast<int>(kMaxReadBufLen);
    GetIntValue(argc, argv, "len=", len);
    if (len <= 0 || static_cast<size_t>(len) > kMaxReadBufLen) {
        len = static_cast<int>(kMaxReadBufLen);
    }
    std::vector<uint8_t> buf(static_cast<size_t>(len), 0);
    std::shared_ptr<OHOS::Bluetooth::InputStream> in = g_sppClient->GetInputStream();
    if (in == nullptr) {
        Logd("sppread: GetInputStream failed");
        return;
    }
    ssize_t n = in->Read(buf.data(), static_cast<size_t>(len));
    if (n > 0) {
        const size_t showLen = (static_cast<size_t>(n) > 64) ? 64 : static_cast<size_t>(n);
        std::string hexStr;
        for (size_t i = 0; i < showLen; i++) {
            char b[4];
            (void)sprintf_s(b, sizeof(b), "%02x ", buf[i]);
            hexStr += b;
        }
        if (static_cast<size_t>(n) > 64) {
            hexStr += "...";
        }
        Logd("sppread: %zd bytes: %s", n, hexStr.c_str());
    } else {
        Logd("sppread: ret=%zd", n);
    }
}

void handleSppWrite(int argc, const char *argv[])
{
    if (g_sppClient == nullptr || !g_sppClient->IsConnected()) {
        Logd("sppwrite: no connected client");
        return;
    }
    std::string data;
    if (!GeStrValue(argc, argv, PARAM_VALUE, data)) {
        Logd("usage: sppwrite data=string");
        return;
    }
    std::shared_ptr<OHOS::Bluetooth::OutputStream> out = g_sppClient->GetOutputStream();
    if (out == nullptr) {
        Logd("sppwrite: GetOutputStream failed");
        return;
    }
    int ret = out->Write(reinterpret_cast<const uint8_t *>(data.c_str()), data.size());
    Logd("sppwrite: wrote %zu bytes ret=%d", data.size(), ret);
}

void handleSppServerClose(int argc, const char *argv[])
{
    if (g_sppClient != nullptr) {
        g_sppClient->Close();
        g_sppClient = nullptr;
    }
    if (g_sppServer != nullptr) {
        g_sppServer->Close();
        g_sppServer = nullptr;
    }
    Logd("sppserverclose: done");
}
