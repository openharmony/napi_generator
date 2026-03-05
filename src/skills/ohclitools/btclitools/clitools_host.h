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

#ifndef CLITOOLS_HOST_H
#define CLITOOLS_HOST_H

/**
 * @file clitools_host.h
 * @brief Command-line handlers for Host/GAP (btframework bluetooth_host.h, bluetooth_remote_device.h,
 *        bluetooth_device_class.h). See DESIGN.md.
 */

namespace OHOS {
namespace Bluetooth {

void HandleEnable(int argc, const char* argv[]);
void HandleDisable(int argc, const char* argv[]);
void HandleEnableBr(int argc, const char* argv[]);
void HandleDisableBr(int argc, const char* argv[]);
void HandleEnableBle(int argc, const char* argv[]);
void HandleDisableBle(int argc, const char* argv[]);
void HandleBrScan(int argc, const char* argv[]);
void HandleBrStop(int argc, const char* argv[]);
void HandleBtState(int argc, const char* argv[]);
void HandleBluetoothState(int argc, const char* argv[]);
void HandleBrGetLocalName(int argc, const char* argv[]);
void HandleBrSetLocalName(int argc, const char* argv[]);
void HandleBrGetRemoteName(int argc, const char* argv[]);
void HandleBrSetRemoteName(int argc, const char* argv[]);
void HandleBrGetRemoteBatteryInfo(int argc, const char* argv[]);
void HandleBrGetLastConnectTime(int argc, const char* argv[]);
void HandleBrPairedDevices(int argc, const char* argv[]);
void HandleBrPaireState(int argc, const char* argv[]);
void HandleBrProfileState(int argc, const char* argv[]);
void HandleBrConfirmPair(int argc, const char* argv[]);
void HandleBrSetPinCode(int argc, const char* argv[]);
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

}  // namespace Bluetooth
}  // namespace OHOS

#endif  // CLITOOLS_HOST_H
