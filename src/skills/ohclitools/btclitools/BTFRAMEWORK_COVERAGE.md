# btframework inner_kits 接口与 btclitools 覆盖分析

依据 `foundation/communication/bluetooth/bundle.json` 中 **btframework** inner_kit 声明的头文件，对比 btclitools 的调用情况，评估命令行工具是否已覆盖 btframework 暴露的蓝牙能力。

---

## 一、btframework inner_kit 声明的头文件（bundle.json）

header_base: `//foundation/communication/bluetooth/interfaces/inner_api/include`

| 头文件 | 说明 |
|--------|------|
| bluetooth_a2dp_src.h | A2DP 源端 |
| bluetooth_ble_central_manager.h | BLE 中心角色/扫描与连接 |
| bluetooth_def.h | 公共定义、枚举、常量 |
| bluetooth_device_class.h | 设备类 (CoD) |
| bluetooth_gatt_characteristic.h | GATT 特征 |
| bluetooth_gatt_client.h | GATT 客户端 |
| bluetooth_gatt_descriptor.h | GATT 描述符 |
| bluetooth_gatt_manager.h | GATT 管理 |
| bluetooth_gatt_server.h | GATT 服务端 |
| bluetooth_gatt_service.h | GATT 服务 |
| bluetooth_host.h | 主机接口（开关、配对、扫描模式等） |
| bluetooth_proxy_manager.h | 代理管理 |
| bluetooth_remote_device.h | 远端设备 |
| bluetooth_socket_inputstream.h | Socket 输入流 |
| bluetooth_socket_outputstream.h | Socket 输出流 |
| bluetooth_socket.h | 经典蓝牙 Socket |
| bluetooth_profile_manager.h | 协议栈 Profile 管理 |
| bluetooth_no_destructor.h | 工具类 |
| c_header/ohos_bt_def.h | C 层公共定义 |
| c_header/ohos_bt_gap.h | C 层 GAP（开关、扫描模式、配对等） |
| c_header/ohos_bt_gatt.h | C 层 GATT（广播、扫描、MTU 等） |
| c_header/ohos_bt_gatt_client.h | C 层 GATT 客户端 |
| c_header/ohos_bt_gatt_server.h | C 层 GATT 服务端 |
| c_header/ohos_bt_spp.h | C 层 SPP 串口协议 |
| uuid.h | UUID |

---

## 二、btclitools 已使用的接口

btclitools 主要使用 **C++ API**（inner_api 下的 bluetooth_*.h），并少量引用 **C 头文件**（如 ohos_bt_gatt.h）做类型/回调。

### 2.1 已引用的头文件

| 头文件 | 用途 |
|--------|------|
| bluetooth_host.h | BluetoothHost：开关 BR/EDR、BLE，状态、本机名/地址、扫描模式、可发现/可连接、配对列表、配对/取消配对、观察者注册等 |
| bluetooth_ble_central_manager.h | BleCentralManager：BLE 扫描、扫描结果、连接管理 |
| bluetooth_gatt_client.h | GattClient：连接从端、发现服务、读/写特征与描述符、MTU、通知 |
| bluetooth_gatt_server.h | GattServer：建连、添加/删除服务与特征/描述符、响应读/写请求、Indication |
| bluetooth_gatt_service.h | GattService 类型 |
| bluetooth_gatt_characteristic.h | GattCharacteristic 类型 |
| bluetooth_gatt_descriptor.h | GattDescriptor 类型 |
| bluetooth_remote_device.h | BluetoothRemoteDevice 类型 |
| bluetooth_device_class.h | BluetoothDeviceClass 类型 |
| bluetooth_ble_advertiser.h | BLE 广播（若存在则用于广播相关） |
| bluetooth_errorcode.h | 错误码（实际在 ipc 或 common 下，btframework 通过 def 等暴露） |
| ohos_bt_gatt.h | 部分类型/回调（与 C++ GATT 配合） |
| uuid.h | UUID 类型 |

### 2.2 已实现的命令行能力（与 btframework 接口对应）

- **Host / GAP（bluetooth_host）**  
  enable / disable / enablebr / disablebr / enableble / disableble，getstate / getbluetoothstate，getlocname / setlocname，getretname / setretname，getrebatinfo，getconntime，getpairs / getpairstate / getprofilestate，confirmPaire / setPinCode，getBtScanMode / setBtScanMode，getbondablemode / setbondablemode，isdiscovering / getdiscoveryendtime，startdiscovery / canceldiscovery，removeallpairs / removePaire，startpair / cancelpair，isbondedfromlocal，isaclconnected，isaclencrypted，getdeviceclass，getdeviceproductid / getdeviceuuids，setdevicepin / setdevicepairingconfirmation / setdevicepasskey，pairrequestreply，gettransporttype，readremoterssivalue，isvalidbluetoothremotedevice，getdeviceproducttype / setdevicecustomtype，getdevicevendorid，issupportvirtualautoconnect / setvirtualautoconnecttype，controldeviceaction，getcloudbondstate，getdevicetransport。

- **BLE 中心（bluetooth_ble_central_manager）**  
  blescan，blestop，blegetconnected；通过 GattClient 的 bleconn / gattconn、gattdisc、gattgetserv、gattgetdname、gattreadcv、gattwritecv、gattreaddes、gattwritedes、gattgetrssi、gattsetmtu，gattcreateclient。

- **GATT 服务端（bluetooth_gatt_server）**  
  gattcreateserver，gattaddservices（battery / device_info / heart_rate / thermometer / blood_pressure / current_time / environmental / pulse_oximeter / custom / health / all），gattdelservices，gattserverstatus，gattcloseserver。

- **其他**  
  wait / waitasync / interactive（与框架接口无直接一一对应，属工具能力）。

上述能力已覆盖 **bluetooth_host**、**bluetooth_ble_central_manager**、**bluetooth_gatt_client**、**bluetooth_gatt_server** 以及 **bluetooth_remote_device** / **bluetooth_device_class** / GATT 相关类型在 CLI 侧的完整使用链路。

---

## 三、btframework 已声明但 btclitools 未覆盖的接口

以下头文件/模块在 bundle.json 的 btframework inner_kit 中声明，但 btclitools **当前未引用、未实现对应命令**，因此未覆盖。

| 头文件 / 模块 | 暴露能力简述 | 覆盖情况 |
|---------------|--------------|----------|
| **bluetooth_a2dp_src.h** | A2DP 源端（音频流、编码、连接管理） | ❌ 未覆盖 |
| **bluetooth_socket.h** | 经典蓝牙 Socket（L2CAP/RFCOMM/SPP 等） | ❌ 未覆盖 |
| **bluetooth_socket_inputstream.h** | Socket 输入流 | ❌ 未覆盖 |
| **bluetooth_socket_outputstream.h** | Socket 输出流 | ❌ 未覆盖 |
| **bluetooth_profile_manager.h** | Profile 管理（查询/控制各 Profile 状态） | ❌ 未覆盖 |
| **bluetooth_proxy_manager.h** | 代理管理 | ❌ 未覆盖 |
| **bluetooth_gatt_manager.h** | GATT 管理（若与 GattClient/GattServer 并列的额外能力） | ❌ 未覆盖（当前仅用 GattClient/GattServer） |
| **c_header/ohos_bt_gap.h** | C 层 GAP（EnableBle/DisableBle/GetBtState/SetLocalName/SetBtScanMode/PairRequestReply 等） | ⚪ 未直接使用（btclitools 用 C++ BluetoothHost 实现同等能力，功能已覆盖） |
| **c_header/ohos_bt_gatt_client.h** | C 层 GATT 客户端（BleGattc*） | ⚪ 未直接使用（用 C++ GattClient 覆盖） |
| **c_header/ohos_bt_gatt_server.h** | C 层 GATT 服务端（BleGatts*） | ⚪ 未直接使用（用 C++ GattServer 覆盖） |
| **c_header/ohos_bt_spp.h** | C 层 SPP（SppServerCreate/SppConnect/SppRead/SppWrite 等） | ❌ 未覆盖（无 SPP/串口 相关命令） |

说明：  
- ❌ = 能力未覆盖，btclitools 无法通过命令行使用该部分蓝牙功能。  
- ⚪ = C 接口未直接调用，但通过 C++ 接口已实现对应能力，视为已覆盖。

---

## 四、结论与建议

### 4.1 结论

- **已覆盖**：btframework 中的 **Host/GAP**、**BLE 中心**、**GATT 客户端**、**GATT 服务端** 及 **远端设备/设备类/GATT 数据类型** 在 btclitools 中均有对应命令实现，可视为“通过 btframework 暴露的接口使用蓝牙”的 **核心能力已覆盖**。
- **未覆盖**：  
  - **A2DP 源端**（bluetooth_a2dp_src.h）  
  - **经典蓝牙 Socket/SPP**（bluetooth_socket*.h + c_header/ohos_bt_spp.h）  
  - **Profile 管理**（bluetooth_profile_manager.h）  
  - **代理管理**（bluetooth_proxy_manager.h）  
  - **GATT 管理**（bluetooth_gatt_manager.h，若存在独立于 GattClient/GattServer 的接口）

因此，**btclitools 尚未完全覆盖 btframework 所声明的所有接口**；当前已覆盖的是“主机 + BLE + GATT 客户端/服务端”这一条线，缺少 A2DP、Socket/SPP、Profile 管理、代理等模块的 CLI 能力。

### 4.2 建议（若目标为“覆盖 btframework 全部能力”）

1. **A2DP**：增加基于 `bluetooth_a2dp_src.h` 的命令（如：连接/断开 A2DP Sink、查询/设置编码、播放控制等）。  
2. **Socket/SPP**：增加基于 `bluetooth_socket.h` 或 `c_header/ohos_bt_spp.h` 的命令（如：SPP 服务端监听、客户端连接、收发数据等）。  
3. **Profile 管理**：增加基于 `bluetooth_profile_manager.h` 的命令（如：查询各 Profile 状态、开关等）。  
4. **bluetooth_proxy_manager / bluetooth_gatt_manager**：若产品需要，再按头文件接口补充对应命令。

按上述顺序补齐后，btclitools 即可在“命令行工具”形态下，基本覆盖 btframework inner_kit 所声明的全部接口能力。
