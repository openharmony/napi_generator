# Bluetooth Command Line Tools<a name="ZH-CN_TOPIC_0000001148577119"></a>

-   [Introduction](#section11660541593)
-   [Directory Structure](#section161941989596)
-   [Constraints](#section119744591305)
-   [Usage](#section1312121216216)
    -   [Standard System](#section1699952017198)
    -   [Mini or Small System](#section223312597203)
    -   [C APIs](#section129654513264)
-   [Parameter Descriptions](#section_parameter_descriptions)

-   [Repositories Involved](#section1371113476307)

## Introduction<a name="section11660541593"></a>

The Bluetooth Command Line Tools provides CLIs for accessing and using Bluetooth services, such as APIs for Generic Attribute Profile (GATT) operations, Bluetooth Low Energy (BLE) advertising, and scan.

## Directory Structure<a name="section161941989596"></a>

```
/foundation/communication/bluetooth/test/clitools
├── BUILD.gn                              # API code
├── clitools.cpp                          # Core file of the interface
├── clitools.h                            # Header file
└── commmon.cpp                           # Common file of
└── README.md                             # README
```

## Constraints<a name="section119744591305"></a>

The Bluetooth Command Line tool must be compiled in C language.

## Usage<a name="section1312121216216"></a>

Only BLE-related APIs and basic Bluetooth Generic Access Profile (GAP) APIs are provided.

### Standard System<a name="section1699952017198"></a>

The output binary is in "out/rk3568/packages/phone/system/bin/btcommand"


### C APIs<a name="section129654513264"></a>

-   Enable or disable Bluetooth.

```
/* Enable both Classic Bluetooth and BLE. */
./btcommand enable
    // Parameters: None
    // Function: Enables both BR/EDR and BLE simultaneously
    // Returns: Success/failure status
    // Note: May take several seconds to complete

/* Disable both Classic Bluetooth and BLE. */
./btcommand disable
    // Parameters: None
    // Function: Disables both BR/EDR and BLE simultaneously
    // Returns: Success/failure status
    // Note: Disconnects all active connections

/* Enable Classic Bluetooth (BR/EDR) only. */
./btcommand enablebr
    // Parameters: None
    // Function: Enables BR/EDR adapter for classic Bluetooth devices
    // Returns: Success/failure status
    // Note: BLE remains in current state

/* Disable Classic Bluetooth (BR/EDR) only. */
./btcommand disablebr
    // Parameters: None
    // Function: Disables BR/EDR adapter, BLE remains unaffected
    // Returns: Success/failure status
    // Note: Disconnects all BR/EDR connections

/* Enable Bluetooth Low Energy (BLE) only. */
./btcommand enableble
    // Parameters: None
    // Function: Enables BLE adapter for low energy devices
    // Returns: Success/failure status
    // Note: BR/EDR remains in current state

/* Disable Bluetooth Low Energy (BLE) only. */
./btcommand disableble
    // Parameters: None
    // Function: Disables BLE adapter, BR/EDR remains unaffected
    // Returns: Success/failure status
    // Note: Disconnects all BLE connections
```

-   Obtain Bluetooth status.

```
/* Get classic Bluetooth adapter state. */
./btcommand getstate
    // Parameters: None
    // Function: Queries current BR/EDR adapter state
    // Returns: Integer state value
    //   0 = STATE_TURNING_ON (adapter starting up)
    //   1 = STATE_TURN_ON (adapter ready and active)
    //   2 = STATE_TURNING_OFF (adapter shutting down)
    //   3 = STATE_TURN_OFF (adapter disabled)

/* Get detailed Bluetooth system state. */
./btcommand getbluetoothstate
    // Parameters: None
    // Function: Queries detailed system-wide Bluetooth state
    // Returns: Integer state value
    //   0 = STATE_OFF (both BR/EDR and BLE off)
    //   1 = STATE_TURNING_ON (BR/EDR turning on)
    //   2 = STATE_ON (BR/EDR on)
    //   3 = STATE_TURNING_OFF (BR/EDR turning off)
    //   4 = STATE_BLE_TURNING_ON (BLE turning on)
    //   5 = STATE_BLE_ON (BLE on)
    //   6 = STATE_BLE_TURNING_OFF (BLE turning off)
```

-   Obtain the local device information.

```
/* Get the local Bluetooth device name. */
./btcommand getlocname
    // Parameters: None
    // Function: Retrieves the local device's advertised name
    // Returns: String containing device name
    // Note: Returns empty string if name not set

/* Set the local Bluetooth device name. */
./btcommand setlocname name=MyDevice
    // Parameters:
    //   name: Device name string (UTF-8, 1-248 bytes)
    //   Range: Any valid UTF-8 string, avoid special characters
    // Function: Sets the local device's advertised name
    // Returns: 0=success, non-zero=error
    // Note: Name visible to other devices during discovery

/* Get current Bluetooth scan mode settings. */
./btcommand getBtScanMode
    // Parameters: None
    // Function: Retrieves current scan mode configuration
    // Returns: Integer scan mode value
    //   0 = SCAN_MODE_NONE (not discoverable, not connectable)
    //   1 = SCAN_MODE_CONNECTABLE (connectable only)
    //   2 = SCAN_MODE_GENERAL_DISCOVERABLE (discoverable)
    //   3 = SCAN_MODE_LIMITED_DISCOVERABLE (limited time)
    //   4 = SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE
    //   5 = SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE

/* Set Bluetooth scan mode and visibility duration. */
./btcommand setBtScanMode mode=2 duration=120
    // Parameters:
    //   mode: Scan mode (0-5, see values above)
    //   duration: Visibility duration in seconds (1-3600)
    // Function: Configures device visibility and connectability
    // Returns: 0=success, non-zero=error
    // Note: Duration applies to discoverable modes only
```

-   Device discovery and scanning.

```
/* Start classic Bluetooth device discovery scan. */
./btcommand brscan
    // Parameters: None
    // Function: Initiates BR/EDR device discovery scan
    // Returns: Success/failure status
    // Note: Scan results delivered via callbacks, duration ~12 seconds

/* Stop classic Bluetooth device discovery scan. */
./btcommand brstop
    // Parameters: None
    // Function: Terminates active BR/EDR discovery scan
    // Returns: Success/failure status
    // Note: Stops scan immediately if in progress

/* Start Bluetooth device discovery process. */
./btcommand startdiscovery
    // Parameters: None
    // Function: Initiates general Bluetooth device discovery
    // Returns: true=started successfully, false=failed
    // Note: Discovers both BR/EDR and BLE devices

/* Cancel ongoing Bluetooth device discovery. */
./btcommand canceldiscovery
    // Parameters: None
    // Function: Cancels active discovery process
    // Returns: true=cancelled successfully, false=failed
    // Note: Stops all discovery activities immediately

/* Check if device discovery is currently active. */
./btcommand isdiscovering transport=0
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   Range: 0 or 1 only
    // Function: Queries discovery state for specified transport
    // Returns: true=discovering active, false=not discovering
    // Note: Check specific transport type discovery status

/* Get estimated end time of current discovery process. */
./btcommand getdiscoveryendtime
    // Parameters: None
    // Function: Retrieves discovery process end timestamp
    // Returns: Long integer timestamp (milliseconds since epoch)
    // Note: Returns 0 if no discovery in progress
```

-   Device pairing management.

```
/* Get paired devices list for specified transport type. */
./btcommand getpairs transport=0
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   Range: 0 or 1 only
    // Function: Retrieves list of all paired devices
    // Returns: Array of device objects with MAC addresses and names
    // Note: Shows historical pairings, devices may not be currently connected

/* Start pairing with a specific device. */
./btcommand startpair mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address (XX:XX:XX:XX:XX:XX format)
    //   Range: Valid Bluetooth MAC address
    // Function: Initiates pairing process with target device
    // Returns: true=pairing started, false=failed to start
    // Note: Device must be discoverable and in range

/* Cancel ongoing pairing process with a device. */
./btcommand cancelpair mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Cancels active pairing process
    // Returns: true=cancelled successfully, false=failed
    // Note: Only works if pairing is in progress

/* Remove pairing bond with a specific device. */
./btcommand removePaire mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Removes device from paired devices list
    // Returns: true=removed successfully, false=failed
    // Note: Device will need to be paired again for future connections

/* Remove all paired devices from bond list. */
./btcommand removeallpairs
    // Parameters: None
    // Function: Clears entire paired devices database
    // Returns: true=all removed, false=failed
    // Note: All devices will need re-pairing

/* Get current pairing state of a device. */
./btcommand getpairstate mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Queries pairing status with specific device
    // Returns: Integer pairing state
    //   1 = PAIR_NONE (not paired)
    //   2 = PAIR_PAIRING (pairing in progress)
    //   3 = PAIR_PAIRED (successfully paired)
    //   4 = PAIR_CANCELING (pairing being cancelled)

/* Confirm incoming pairing request from a device. */
./btcommand confirmPaire mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Source device MAC address
    // Function: Confirms pairing request from remote device
    // Returns: true=confirmed, false=failed
    // Note: Used for numeric comparison pairing

/* Set global PIN code for pairing authentication. */
./btcommand setPinCode pin=1234
    // Parameters:
    //   pin: 4-16 digit numeric PIN code
    //   Range: 0000-9999999999999999
    // Function: Sets default PIN for legacy pairing
    // Returns: 0=success, non-zero=error
    // Note: Used for devices requiring PIN authentication

/* Set device-specific PIN code for pairing. */
./btcommand setdevicepin mac=00:11:22:33:44:55 pin=1234
    // Parameters:
    //   mac: Target device MAC address
    //   pin: 4-16 digit numeric PIN code (0000-9999999999999999)
    // Function: Provides PIN for specific device pairing
    // Returns: 0=success, non-zero=error
    // Note: Overrides global PIN for this device

/* Confirm or reject pairing request with accept/deny. */
./btcommand setdevicepairingconfirmation mac=00:11:22:33:44:55 accept=1
    // Parameters:
    //   mac: Source device MAC address
    //   accept: Accept flag (0=reject, 1=accept)
    // Function: Responds to pairing confirmation request
    // Returns: 0=success, non-zero=error
    // Note: Used for user confirmation pairing method

/* Set numeric passkey for secure pairing. */
./btcommand setdevicepasskey mac=00:11:22:33:44:55 passkey=123456 accept=1
    // Parameters:
    //   mac: Target device MAC address
    //   passkey: 6-digit numeric passkey (000000-999999)
    //   accept: Accept flag (0=reject, 1=accept)
    // Function: Provides passkey for secure simple pairing
    // Returns: 0=success, non-zero=error
    // Note: Used for passkey entry pairing method

/* Reply to incoming pair request with accept/reject. */
./btcommand pairrequestreply mac=00:11:22:33:44:55 accept=1
    // Parameters:
    //   mac: Source device MAC address
    //   accept: Accept flag (0=reject, 1=accept)
    // Function: Responds to general pairing request
    // Returns: 0=success, non-zero=error
    // Note: Generic response to any pairing request
```

-   Remote device information.

```
/* Get remote device's advertised name. */
./btcommand getretname mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves device's advertised/friendly name
    // Returns: String containing device name or empty if unknown
    // Note: May require active connection or recent discovery

/* Set local alias/nickname for remote device. */
./btcommand setretname mac=00:11:22:33:44:55 name=MyHeadset
    // Parameters:
    //   mac: Target device MAC address
    //   name: Custom alias name (UTF-8 string, 1-248 bytes)
    // Function: Sets local nickname for remote device
    // Returns: 0=success, non-zero=error
    // Note: Alias stored locally, not sent to remote device

/* Get remote device battery information. */
./btcommand getrebatinfo mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves battery level and status
    // Returns: Battery percentage (0-100) or -1 if unavailable
    // Note: Device must support Battery Service or HFP battery reporting

/* Get timestamp of last connection with device. */
./btcommand getconntime mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves last successful connection timestamp
    // Returns: Long integer timestamp (milliseconds since epoch)
    // Note: Returns 0 if device never connected

/* Get device class of device (CoD) information. */
./btcommand getdeviceclass transport=0 mac=00:11:22:33:44:55
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   mac: Target device MAC address
    // Function: Retrieves device class information
    // Returns: Integer CoD value (24-bit class identifier)
    // Note: BR/EDR only, BLE devices may return 0

/* Get list of supported service UUIDs from device. */
./btcommand getdeviceuuids mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves list of supported service UUIDs
    // Returns: Array of UUID strings in standard format
    // Note: Requires service discovery or SDP query

/* Get device vendor ID from manufacturer. */
./btcommand getdevicevendorid mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves manufacturer vendor ID
    // Returns: Integer vendor ID (0-65535) or -1 if unknown
    // Note: Based on IEEE registration or device information

/* Get device product ID from manufacturer. */
./btcommand getdeviceproductid mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves manufacturer product ID
    // Returns: Integer product ID (0-65535) or -1 if unknown
    // Note: Manufacturer-specific product identifier

/* Get device product type classification. */
./btcommand getdeviceproducttype mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves device product type category
    // Returns: Integer type value or -1 if unknown
    //   Common values: 1=phone, 2=headset, 3=speaker, 4=watch, etc.
    // Note: Based on device class or manufacturer data

/* Get transport type used by device. */
./btcommand gettransporttype mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Determines primary transport type for device
    // Returns: Integer transport type
    //   0 = TRANSPORT_BREDR (Classic Bluetooth)
    //   1 = TRANSPORT_LE (Bluetooth Low Energy)
    //   2 = TRANSPORT_AUTO (dual mode)

/* Request current RSSI (signal strength) from device. */
./btcommand readremoterssivalue mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Measures current signal strength
    // Returns: Integer RSSI value in dBm (-127 to +20)
    // Note: Device must be connected, negative values indicate weaker signal
```

-   Device connection status.

```
/* Check if device pairing was initiated from local device. */
./btcommand isbondedfromlocal transport=0 mac=00:11:22:33:44:55
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   mac: Target device MAC address
    // Function: Checks if pairing was initiated locally
    // Returns: true=bonded from local, false=not bonded or bonded from remote
    // Note: Distinguishes between locally and remotely initiated pairing

/* Check if ACL (data) connection is established with device. */
./btcommand isaclconnected transport=0 mac=00:11:22:33:44:55
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   mac: Target device MAC address
    // Function: Checks if ACL connection is active
    // Returns: true=connected, false=not connected
    // Note: ACL is the basic data connection layer

/* Check if ACL connection is encrypted (secure). */
./btcommand isaclencrypted transport=0 mac=00:11:22:33:44:55
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   mac: Target device MAC address
    // Function: Checks if connection uses encryption
    // Returns: true=encrypted, false=not encrypted
    // Note: Encryption requires successful pairing/bonding

/* Validate if MAC address represents a valid Bluetooth device. */
./btcommand isvalidbluetoothremotedevice mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Device MAC address to validate
    // Function: Validates MAC address format and device existence
    // Returns: true=valid device, false=invalid or unknown
    // Note: Checks local device database and format validity

/* Get connection state of specific Bluetooth profile. */
./btcommand getprofilestate profileid=1
    // Parameters:
    //   profileid: Profile identifier (integer)
    //     1 = A2DP (Advanced Audio Distribution Profile)
    //     2 = HFP (Hands-Free Profile)
    //     3 = HID (Human Interface Device)
    //     4 = AVRCP (Audio/Video Remote Control Profile)
    //     5 = PBAP (Phone Book Access Profile)
    //     6 = MAP (Message Access Profile)
    // Function: Queries connection state for specific profile
    // Returns: Integer connection state
    //   0 = DISCONNECTED
    //   1 = CONNECTING
    //   2 = CONNECTED
    //   3 = DISCONNECTING
```

-   Bondable mode management.

```
/* Get current bondable mode for specified transport. */
./btcommand getbondablemode transport=0
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    // Function: Queries if device can accept pairing requests
    // Returns: Integer bondable state
    //   0 = BONDABLE_MODE_NON_BONDABLE (reject pairing)
    //   1 = BONDABLE_MODE_BONDABLE (accept pairing)
    // Note: Controls whether device responds to pairing requests

/* Set bondable mode for specified transport. */
./btcommand setbondablemode transport=0 mode=1
    // Parameters:
    //   transport: Transport type (0=BR/EDR, 1=BLE)
    //   mode: Bondable mode (0=disable, 1=enable)
    // Function: Configures device's pairing acceptance policy
    // Returns: true=mode set successfully, false=failed
    // Note: Mode 0 rejects all pairing attempts, mode 1 allows pairing
```

-   BLE operations.

```
/* Start BLE device scanning for nearby devices. */
./btcommand blescan
    // Parameters: None
    // Function: Initiates BLE advertisement scanning
    // Returns: Success/failure status
    // Note: Scans for BLE advertisements, results delivered via callbacks
    // Duration: Continuous until stopped, low power consumption

/* Stop BLE device scanning. */
./btcommand blestop
    // Parameters: None
    // Function: Terminates active BLE scanning
    // Returns: Success/failure status
    // Note: Immediately stops BLE scan to save power

/* Get list of currently connected BLE devices. */
./btcommand blegetconnected
    // Parameters: None
    // Function: Retrieves list of connected BLE devices
    // Returns: Array of device objects with MAC addresses and connection info
    // Note: Shows actually connected devices, not just paired ones
    // Format: Each entry contains MAC, name, and connection state
```

-   GATT client operations.

```
/* Establish GATT connection to BLE device. */
./btcommand gattconn mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target BLE device MAC address (XX:XX:XX:XX:XX:XX format)
    // Function: Establishes GATT connection to BLE device
    // Returns: Connection status (0=success, non-zero=error)
    // Note: Device must be in range and advertising, connection may take 5-30 seconds

/* Disconnect from GATT server. */
./btcommand gattdisc
    // Parameters: None
    // Function: Terminates active GATT connection
    // Returns: Disconnection status (0=success, non-zero=error)
    // Note: Cleanly closes connection and releases resources

/* Discover and list all GATT services on connected device. */
./btcommand gattgetserv
    // Parameters: None
    // Function: Performs service discovery on connected device
    // Returns: List of service UUIDs with handles and properties
    // Note: Must have active GATT connection, discovery may take several seconds

/* Get device name from GATT Generic Access Service. */
./btcommand gattgetdname
    // Parameters: None
    // Function: Reads device name from Generic Access Service
    // Returns: String containing device name or empty if unavailable
    // Note: Reads characteristic 0x2A00 if present

/* Read value from GATT characteristic. */
./btcommand gattreadcv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
    // Parameters:
    //   service: Service UUID (8-4-4-4-12 hexadecimal format)
    //   characteristic: Characteristic UUID within the service
    // Function: Reads current value from specified characteristic
    // Returns: Hexadecimal string representing characteristic value
    // Note: Characteristic must support read property, operation may fail if not readable

/* Write value to GATT characteristic. */
./btcommand gattwritecv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB value=64
    // Parameters:
    //   service: Service UUID (8-4-4-4-12 hexadecimal format)
    //   characteristic: Characteristic UUID within the service
    //   value: Hex data to write (even length, 0-9A-F characters only)
    // Function: Writes data to specified characteristic
    // Returns: Write status (0=success, non-zero=error)
    // Note: Characteristic must support write property, value length must match expected size

/* Read value from GATT descriptor. */
./btcommand gattreaddes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB descriptor=00002902-0000-1000-8000-00805F9B34FB
    // Parameters:
    //   service: Service UUID (8-4-4-4-12 hexadecimal format)
    //   characteristic: Characteristic UUID containing the descriptor
    //   descriptor: Descriptor UUID within the characteristic
    // Function: Reads current value from specified descriptor
    // Returns: Hexadecimal string representing descriptor value
    // Note: Common descriptors include CCCD (0x2902) for notification control

/* Write value to GATT descriptor. */
./btcommand gattwritedes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB descriptor=00002902-0000-1000-8000-00805F9B34FB value=0100
    // Parameters:
    //   service: Service UUID (8-4-4-4-12 hexadecimal format)
    //   characteristic: Characteristic UUID containing the descriptor
    //   descriptor: Descriptor UUID within the characteristic
    //   value: Hex data to write (even length, common values: 0000=disable, 0100=notifications, 0200=indications)
    // Function: Writes configuration data to specified descriptor
    // Returns: Write status (0=success, non-zero=error)
    // Note: CCCD descriptor controls notifications/indications for the characteristic

/* Request RSSI reading from GATT connection. */
./btcommand gattgetrssi
    // Parameters: None
    // Function: Measures signal strength of active GATT connection
    // Returns: Integer RSSI value in dBm (-127 to +20)
    // Note: Must have active GATT connection, negative values indicate weaker signal

/* Set Maximum Transmission Unit size for GATT. */
./btcommand gattsetmtu mtu=247
    // Parameters:
    //   mtu: MTU size in bytes (range: 23-517, device dependent)
    // Function: Negotiates larger packet size for GATT operations
    // Returns: Actual negotiated MTU size or error code
    // Note: Larger MTU improves throughput, default is 23 bytes, max typically 247 or 517

/* Create GATT client instance for specific device. */
./btcommand gattcreateclient mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target BLE device MAC address (XX:XX:XX:XX:XX:XX format)
    // Function: Creates GATT client instance without immediate connection
    // Returns: Client creation status (0=success, non-zero=error)
    // Note: Alternative to gattconn, allows client setup before connection attempt
```

-   GATT server operations.

```
/* Create GATT server instance. */
./btcommand gattcreateserver
    // Parameters: None
    // Function: Creates local GATT server instance for providing services
    // Returns: Server creation status (0=success, non-zero=error)
    // Note: Allows device to act as GATT server and provide services to clients

/* Add services to GATT server. */
./btcommand gattaddservices
    // Parameters: None
    // Function: Adds predefined services to GATT server
    // Returns: Service addition status (0=success, non-zero=error)
    // Note: Implementation may be incomplete, adds default service set

/* Remove services from GATT server. */
./btcommand gattdelservices
    // Parameters: None
    // Function: Removes services from GATT server
    // Returns: Service removal status (0=success, non-zero=error)
    // Note: Implementation may be incomplete, removes all or default services
```

-   Advanced device management.

```
/* Set custom device type classification. */
./btcommand setdevicecustomtype mac=00:11:22:33:44:55 deviceType=1
    // Parameters:
    //   mac: Target device MAC address
    //   deviceType: Custom type identifier (range: 0-255)
    // Function: Assigns custom device type for local classification
    // Returns: 0=success, non-zero=error
    // Note: Local classification only, used for device management and UI display

/* Check if device supports virtual auto-connect feature. */
./btcommand issupportvirtualautoconnect mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Queries if device supports virtual auto-connect capability
    // Returns: true=supported, false=not supported
    // Note: Virtual auto-connect allows automatic reconnection based on conditions

/* Configure virtual auto-connect behavior. */
./btcommand setvirtualautoconnecttype mac=00:11:22:33:44:55 connType=1 businessType=1
    // Parameters:
    //   mac: Target device MAC address
    //   connType: Connection type (range: 0-255)
    //   businessType: Business scenario type (range: 0-255)
    // Function: Configures auto-connect behavior for specific device
    // Returns: 0=success, non-zero=error
    // Note: Defines when and how device should automatically reconnect

/* Send control action to device. */
./btcommand controldeviceaction mac=00:11:22:33:44:55 type=1 typeValue=1 controlObject=1
    // Parameters:
    //   mac: Target device MAC address
    //   type: Action type identifier (range: 0-255)
    //   typeValue: Action value (range: 0-4294967295)
    //   controlObject: Target object identifier (range: 0-255)
    // Function: Sends vendor-specific control command to device
    // Returns: 0=success, non-zero=error
    // Note: Implementation depends on device vendor and supported actions

/* Get cloud-based bonding state. */
./btcommand getcloudbondstate mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Retrieves cloud synchronization status for device pairing
    // Returns: Integer cloud bond state
    //   0 = CLOUD_BOND_STATE_NONE (not synced)
    //   1 = CLOUD_BOND_STATE_SYNCING (sync in progress)
    //   2 = CLOUD_BOND_STATE_SYNCED (successfully synced)
    // Note: Requires cloud service integration

/* Get device transport type information. */
./btcommand getdevicetransport mac=00:11:22:33:44:55
    // Parameters:
    //   mac: Target device MAC address
    // Function: Determines primary transport type used by device
    // Returns: Integer transport type
    //   0 = TRANSPORT_BREDR (Classic Bluetooth only)
    //   1 = TRANSPORT_LE (BLE only)
    //   2 = TRANSPORT_AUTO (dual mode device)
    // Note: Based on device capabilities and connection history
```

-   Interactive mode.

```
/* Enter interactive command-line mode. */
./btcommand interactive
    // Parameters: None
    // Function: Starts interactive command-line interface
    // Returns: Enters interactive shell (no return value)
    // Note: Allows multiple commands in sequence without ./btcommand prefix
    // Usage: Type commands directly, use 'quit' or 'exit' to return to shell
    // Example: After entering interactive mode, type "enable" instead of "./btcommand enable"
```

## Parameter Descriptions<a name="section_parameter_descriptions"></a>

This section provides detailed descriptions of all parameters used in the Bluetooth command line tools.

### Common Parameters

-   **mac**: Bluetooth device MAC address
    - Format: XX:XX:XX:XX:XX:XX (6 pairs of hexadecimal digits separated by colons)
    - Example: `mac=00:11:22:33:44:55`
    - Description: Unique identifier for Bluetooth devices

-   **transport**: Bluetooth transport type
    - Values:
      - `0` - BT_TRANSPORT_BREDR (Classic Bluetooth)
      - `1` - BT_TRANSPORT_BLE (Bluetooth Low Energy)
    - Example: `transport=0`
    - Description: Specifies which Bluetooth technology to use

-   **name**: Device name string
    - Format: Any UTF-8 string
    - Example: `name=MyDevice` or `name=MyHeadset`
    - Description: Human-readable name for the device

### Scan Mode Parameters

-   **mode**: Bluetooth scan mode
    - Values:
      - `0` - SCAN_MODE_NONE (not discoverable, not connectable)
      - `1` - SCAN_MODE_CONNECTABLE (connectable, not discoverable)
      - `2` - SCAN_MODE_GENERAL_DISCOVERABLE (general discoverable)
      - `3` - SCAN_MODE_LIMITED_DISCOVERABLE (limited discoverable)
      - `4` - SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE (connectable and general discoverable)
      - `5` - SCAN_MODE_CONNECTABLE_LIMITED_DISCOVERABLE (connectable and limited discoverable)
    - Example: `mode=2`
    - Description: Controls device visibility and connectivity

-   **duration**: Scan duration in seconds
    - Range: 1-3600 seconds
    - Example: `duration=120`
    - Description: How long the scan mode remains active

### Pairing Parameters

-   **pin**: PIN code for pairing
    - Format: 4-16 digit numeric string
    - Example: `pin=1234` or `pin=123456`
    - Description: Authentication code for device pairing

-   **passkey**: Numeric passkey for pairing
    - Range: 000000-999999 (6-digit number)
    - Example: `passkey=123456`
    - Description: 6-digit authentication key for secure pairing

-   **accept**: Accept/reject confirmation
    - Values:
      - `0` - Reject/Deny
      - `1` - Accept/Confirm
    - Example: `accept=1`
    - Description: User confirmation for pairing requests

### Bondable Mode Parameters

-   **mode** (for bondable mode): Pairing capability
    - Values:
      - `0` - BONDABLE_MODE_OFF (not bondable)
      - `1` - BONDABLE_MODE_ON (bondable)
    - Example: `mode=1`
    - Description: Controls whether device can form bonds

### Profile Parameters

-   **profileid**: Bluetooth profile identifier
    - Values: Depends on system configuration, common profiles include:
      - A2DP (Advanced Audio Distribution Profile)
      - HFP (Hands-Free Profile)
      - HID (Human Interface Device)
      - AVRCP (Audio/Video Remote Control Profile)
      - SPP (Serial Port Profile)
    - Example: `profileid=1`
    - Description: Specific Bluetooth service profile identifier

### Device Type Parameters

-   **deviceType**: Custom device type identifier
    - Range: 0-255
    - Example: `deviceType=1`
    - Description: Application-specific device classification

### Virtual Auto Connect Parameters

-   **connType**: Connection type for virtual auto connect
    - Range: 0-255
    - Example: `connType=1`
    - Description: Type of automatic connection behavior

-   **businessType**: Business scenario type
    - Range: 0-255
    - Example: `businessType=1`
    - Description: Application-specific business scenario

### Device Action Control Parameters

-   **type**: Action type identifier
    - Range: 0-255
    - Example: `type=1`
    - Description: Type of action to perform on device

-   **typeValue**: Action type value
    - Range: 0-4294967295
    - Example: `typeValue=1`
    - Description: Specific value for the action type

-   **controlObject**: Control object identifier
    - Range: 0-255
    - Example: `controlObject=1`
    - Description: Target object for the control action

### GATT Parameters

-   **mtu**: Maximum Transmission Unit size
    - Range: 23-517 bytes
    - Example: `mtu=247`
    - Description: Maximum size of data packets for GATT communication
    - Note: Default MTU is 23 bytes, maximum is typically 247 or 517 depending on device support

-   **service**: GATT service UUID
    - Format: Standard UUID format (8-4-4-4-12 hexadecimal digits)
    - Example: `service=0000180F-0000-1000-8000-00805F9B34FB` (Battery Service)
    - Common services:
      - `0000180F-0000-1000-8000-00805F9B34FB` - Battery Service
      - `0000180A-0000-1000-8000-00805F9B34FB` - Device Information Service
      - `00001800-0000-1000-8000-00805F9B34FB` - Generic Access Service
      - `00001801-0000-1000-8000-00805F9B34FB` - Generic Attribute Service
    - Description: Identifies the GATT service containing the characteristic

-   **characteristic**: GATT characteristic UUID
    - Format: Standard UUID format (8-4-4-4-12 hexadecimal digits)
    - Example: `characteristic=00002A19-0000-1000-8000-00805F9B34FB` (Battery Level)
    - Common characteristics:
      - `00002A19-0000-1000-8000-00805F9B34FB` - Battery Level
      - `00002A29-0000-1000-8000-00805F9B34FB` - Manufacturer Name String
      - `00002A24-0000-1000-8000-00805F9B34FB` - Model Number String
      - `00002A00-0000-1000-8000-00805F9B34FB` - Device Name
    - Description: Identifies the specific characteristic to read/write

-   **descriptor**: GATT descriptor UUID
    - Format: Standard UUID format (8-4-4-4-12 hexadecimal digits)
    - Example: `descriptor=00002902-0000-1000-8000-00805F9B34FB` (Client Characteristic Configuration)
    - Common descriptors:
      - `00002902-0000-1000-8000-00805F9B34FB` - Client Characteristic Configuration
      - `00002901-0000-1000-8000-00805F9B34FB` - Characteristic User Description
      - `00002904-0000-1000-8000-00805F9B34FB` - Characteristic Presentation Format
    - Description: Identifies the descriptor to read/write

-   **value**: Data value for GATT write operations
    - Format: Hexadecimal string (even number of characters)
    - Example: `value=0100` (enable notifications), `value=48656C6C6F` ("Hello" in hex)
    - Description: Data to be written to characteristic or descriptor
    - Note: Each pair of hex digits represents one byte (00-FF)

### Usage Examples with Parameter Explanations

```
/* Set device to general discoverable mode for 2 minutes */
./btcommand setBtScanMode mode=2 duration=120
    // mode=2: SCAN_MODE_GENERAL_DISCOVERABLE (visible to all devices)
    // duration=120: Stay discoverable for 120 seconds
    // Returns: 0=success, non-zero=error

/* Pair with a specific device using PIN */
./btcommand startpair mac=0A:BB:CC:DD:EE:FF
    // mac: Target device MAC address (must be valid format)
    // Returns: true=pairing started, false=failed
./btcommand setdevicepin mac=0A:BB:CC:DD:EE:FF pin=0000
    // mac: Same device MAC address
    // pin: 4-16 digit PIN code (numeric string)
    // Returns: 0=success, non-zero=error

/* Check if a BLE device is connected */
./btcommand isaclconnected transport=1 mac=0A:BB:CC:DD:EE:FF
    // transport=1: BLE transport (0=Classic Bluetooth, 1=BLE)
    // mac: Target device MAC address to check
    // Returns: true=connected, false=not connected

/* Set GATT MTU to maximum size for better performance */
./btcommand gattsetmtu mtu=247
    // mtu=247: Maximum MTU size (23-517 bytes, device dependent)
    // Returns: 0=success, non-zero=error
    // Note: Must have active GATT connection

/* Enable bondable mode for Classic Bluetooth */
./btcommand setbondablemode transport=0 mode=1
    // transport=0: Classic Bluetooth (0=BR/EDR, 1=BLE)
    // mode=1: Enable bonding (0=disable, 1=enable)
    // Returns: true=success, false=failed

/* Get paired devices for both transport types */
./btcommand getpairs transport=0
    // transport=0: Classic Bluetooth devices
    // Returns: List of paired BR/EDR devices with names and addresses
./btcommand getpairs transport=1
    // transport=1: BLE devices
    // Returns: List of paired BLE devices with names and addresses

/* Complete pairing workflow example */
./btcommand enable
    // No parameters, Returns: success/failure status
./btcommand setBtScanMode mode=4 duration=300
    // mode=4: SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE
    // duration=300: Stay discoverable for 5 minutes
./btcommand startpair mac=12:34:56:78:9A:BC
    // mac: Target device MAC address
./btcommand setdevicepairingconfirmation mac=12:34:56:78:9A:BC accept=1
    // mac: Source device MAC address
    // accept=1: Accept pairing (0=reject, 1=accept)

/* GATT operations workflow example */
./btcommand gattconn mac=0A:BB:CC:DD:EE:FF
    // mac: BLE device MAC address
    // Returns: Connection status
./btcommand gattgetserv
    // No parameters, Returns: List of available services with UUIDs
./btcommand gattsetmtu mtu=247
    // mtu=247: Request maximum MTU size
./btcommand gattreadcv service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB
    // service: Battery Service UUID
    // characteristic: Battery Level characteristic UUID
    // Returns: Characteristic value in hex format
./btcommand gattwritedes service=0000180F-0000-1000-8000-00805F9B34FB characteristic=00002A19-0000-1000-8000-00805F9B34FB descriptor=00002902-0000-1000-8000-00805F9B34FB value=0100
    // service: Battery Service UUID
    // characteristic: Battery Level characteristic UUID
    // descriptor: Client Characteristic Configuration UUID
    // value=0100: Enable notifications (0000=disable, 0100=notifications, 0200=indications)
./btcommand gattdisc
    // No parameters, Returns: Disconnection status
```

### Common Parameter Validation Rules

-   **MAC Address Format**: Must be exactly 17 characters in format XX:XX:XX:XX:XX:XX
    - Valid: `00:11:22:33:44:55`, `0A:BB:CC:DD:EE:FF`
    - Invalid: `0:1:2:3:4:5`, `00-11-22-33-44-55`, `001122334455`

-   **Numeric Parameters**: Must be within specified ranges
    - `transport`: Only 0 or 1 are valid
    - `mode` (scan): Only 0-5 are valid
    - `duration`: Typically 1-3600 seconds (1 hour maximum)
    - `mtu`: 23-517 bytes (device dependent)

-   **String Parameters**:
    - `name`: UTF-8 encoded, typically 1-248 bytes
    - `pin`: Numeric string, 4-16 digits

-   **UUID Parameters**: Must follow standard UUID format
    - Format: 8-4-4-4-12 hexadecimal digits with hyphens
    - Valid: `0000180F-0000-1000-8000-00805F9B34FB`
    - Invalid: `180F`, `0000180F00001000800000805F9B34FB`, `0000180f-0000-1000-8000-00805f9b34fb` (case sensitive)

-   **Hexadecimal Value Parameters**:
    - `value`: Even number of hexadecimal characters (0-9, A-F)
    - Valid: `0100`, `48656C6C6F`, `FF`
    - Invalid: `G100`, `123` (odd length), `hello`

### Error Handling

Common error scenarios and solutions:

1. **"bluetooth is off"**: Enable Bluetooth first using `./btcommand enable`
2. **"Invalid MAC address"**: Check MAC address format (XX:XX:XX:XX:XX:XX)
3. **"Device not found"**: Ensure device is discoverable and in range
4. **"Pairing failed"**: Check PIN/passkey and device compatibility
5. **"Transport not supported"**: Verify device supports requested transport type
6. **"GATT client not initialized"**: Connect to GATT server first using `./btcommand gattconn`
7. **"Service not found"**: Verify service UUID exists on the device
8. **"Characteristic not found"**: Ensure characteristic UUID exists in the specified service
9. **"Invalid UUID format"**: Check UUID follows 8-4-4-4-12 format with hyphens
10. **"Invalid hex value"**: Ensure value contains only 0-9, A-F characters and even length

## Repositories Involved<a name="section1371113476307"></a>

communication\_bluetooth
