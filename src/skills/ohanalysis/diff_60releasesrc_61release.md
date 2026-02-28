# OpenHarmony 工程分析对比报告

**基准路径（旧）**: `/root/ohos/60release/src`
**对比路径（新）**: `/root/ohos/61release/src`

生成时间: 2026-02-28T15:40:59

## 统计对比

| 项目 | 基准（旧） | 对比（新） | 增 | 减 |
|------|------------|------------|-----|-----|
| 子系统数量 | 53 | 54 | 1 | - |
| 组件数量 | 305 | 341 | 36 | - |
| InnerKits 数量 | 1208 | 1488 | 280 | - |
| syscap 数量 | 299 | 301 | 2 | - |
| deps 数量 | 5061 | 5478 | 417 | - |
| test 数量 | 888 | 912 | 24 | - |
| ndkapi 数量 | 1791 | 2253 | 462 | - |

---

## 新增子系统列表（1）

| 子系统 | 组件数量 | deps数量 | innerkits数量 | test数量 | 相对路径 |
|--------|----------|----------|---------------|----------|----------|
| game | 1 | 14 | 2 | 2 | domains/game/game_controller_framework |

## 删除子系统列表（0）

（无）

## 新增组件列表（37）

| 组件名 | 子系统名 | 相对路径 |
|--------|----------|----------|
| cangjie_ark_interop | arkcompiler | arkcompiler/cangjie_ark_interop |
| accesscontrol_cangjie_wrapper | accesscontrol | base/accesscontrol/accesscontrol_cangjie_wrapper |
| global_cangjie_wrapper | global | base/global/global_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | hiviewdfx | base/hiviewdfx/hiviewdfx_cangjie_wrapper |
| location | location | base/location/location |
| location_cangjie_wrapper | location | base/location/location_cangjie_wrapper |
| notification_cangjie_wrapper | notification | base/notification/notification_cangjie_wrapper |
| powermgr_cangjie_wrapper | powermgr | base/powermgr/powermgr_cangjie_wrapper |
| request_cangjie_wrapper | request | base/request/request_cangjie_wrapper |
| security_cangjie_wrapper | security | base/security/security_cangjie_wrapper |
| sensors_cangjie_wrapper | sensors | base/sensors/sensors_cangjie_wrapper |
| startup_cangjie_wrapper | startup | base/startup/startup_cangjie_wrapper |
| telephony_cangjie_wrapper | telephony | base/telephony/telephony_cangjie_wrapper |
| time_cangjie_wrapper | time | base/time/time_cangjie_wrapper |
| companion_device_auth | useriam | base/useriam/companion_device_auth |
| arkweb_cangjie_wrapper | web | base/web/arkweb_cangjie_wrapper |
| game_controller_framework | game | domains/game/game_controller_framework |
| drivers_interface_midi | hdf | drivers/interface/midi |
| drivers_tools | hdf | drivers/interface/tools |
| drivers_adapter | hdf | drivers/peripheral/adapter |
| drivers_peripheral_midi | hdf | drivers/peripheral/midi |
| ability_cangjie_wrapper | ability | foundation/ability/ability_cangjie_wrapper |
| arkui_cangjie_wrapper | arkui | foundation/arkui/arkui_cangjie_wrapper |
| bundlemanager_cangjie_wrapper | bundlemanager | foundation/bundlemanager/bundlemanager_cangjie_wrapper |
| communication_cangjie_wrapper | communication | foundation/communication/communication_cangjie_wrapper |
| connectivity_cangjie_wrapper | communication | foundation/communication/connectivity_cangjie_wrapper |
| netmanager_cangjie_wrapper | communication | foundation/communication/netmanager_cangjie_wrapper |
| t2stack | communication | foundation/communication/t2stack |
| distributeddatamgr_cangjie_wrapper | distributeddatamgr | foundation/distributeddatamgr/distributeddatamgr_cangjie_wrapper |
| filemanagement_cangjie_wrapper | filemanagement | foundation/filemanagement/filemanagement_cangjie_wrapper |
| graphic_cangjie_wrapper | graphic | foundation/graphic/graphic_cangjie_wrapper |
| midi_framework | multimedia | foundation/multimedia/midi_framework |
| multimedia_cangjie_wrapper | multimedia | foundation/multimedia/multimedia_cangjie_wrapper |
| selectionfwk | systemabilitymgr | foundation/systemabilitymgr/selectionfwk |
| window_cangjie_wrapper | window | foundation/window/window_cangjie_wrapper |
| sdk_cangjie | sdk | interface/sdk_cangjie |
| testfwk_cangjie_wrapper | testfwk | test/testfwk/testfwk_cangjie_wrapper |

## 删除组件列表（1）

| 组件名 | 子系统名 | 相对路径 |
|--------|----------|----------|
| location | location | base/location |

## 变更组件列表（同一路径下内容有变化）（149）

**arkcompiler/ets_frontend**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //arkcompiler/ets_frontend/ets2panda/driver/dependency_analyzer:ohos_ets_dependency_analyzer |

**arkcompiler/ets_runtime**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | json |

**arkcompiler/runtime_core**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ets_utils |
| deps 新增 | ffrt |
| deps 新增 | hitrace |
| deps 新增 | qos_manager |
| inner_kits 新增 | //arkcompiler/runtime_core/abc2program:arkabc2program_public_headers |
| inner_kits 新增 | //arkcompiler/runtime_core/libpandabase:arkplatform_public_headers |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/abc2program:arkts_abc2program_public_headers |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/libarkbase:libarktsbase |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/libarkbase:libarktsbase_package |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/libarkbase:libpandabase_headers |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/libarkfile:libarktsfile_package |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/libarkfile:libpandafile_headers |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/platforms/target_defaults:arktarget_options |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/plugins/ets/tools/declgen_ts2sts:declgen_ts2sts_compile_declgen |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/plugins/ets:ohos_ets_etsstdlib_abc |
| inner_kits 新增 | //arkcompiler/runtime_core/static_core/runtime:arkruntime_pcre2 |
| inner_kits 删除 | //arkcompiler/runtime_core/static_core/libpandabase:libarktsbase |
| inner_kits 删除 | //arkcompiler/runtime_core/static_core/libpandabase:libarktsbase_package |
| inner_kits 删除 | //arkcompiler/runtime_core/static_core/libpandabase:libpandabase_headers |
| inner_kits 删除 | //arkcompiler/runtime_core/static_core/libpandafile:libarktsfile_package |
| inner_kits 删除 | //arkcompiler/runtime_core/static_core/libpandafile:libpandafile_headers |

**arkcompiler/toolchain**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | icu |

**base/account/os_account**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ace_engine |
| deps 新增 | eventhandler |
| deps 新增 | icu |
| deps 新增 | runtime_core |
| deps 新增 | tee_client |
| inner_kits 新增 | //base/account/os_account/frameworks/authorization:authorization_innerkits |

**base/customization/config_policy**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| inner_kits 删除 | //base/customization/config_policy/frameworks/config_policy:configpolicy_util_for_init_static |

**base/customization/enterprise_device_management**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | hitrace |
| deps 新增 | i18n |
| deps 新增 | imf |
| deps 新增 | resource_schedule_service |
| deps 新增 | runtime_core |

**base/global/font_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |
| deps 新增 | os_account |
| deps 新增 | runtime_core |
| test 新增 | //base/global/font_manager/test/unittest:unittest |
| test 删除 | //base/global/font_manager/frameworks/fontmgr/test:font_config_test |
| test 删除 | //base/global/font_manager/frameworks/fontmgr/test:font_manager_module_test |

**base/global/i18n**

| 变更类型 | 条目 |
|----------|------|
| test 新增 | //base/global/i18n/ndk/test:ndk_test |

**base/global/resource_management**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | common_event_service |
| deps 新增 | ets_frontend |
| deps 新增 | ets_runtime |

**base/global/resource_management_lite**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/global/resource_management_lite/frameworks/resmgr_lite:global_resmgr_simulator |

**base/hiviewdfx/hichecker**

| 变更类型 | 条目 |
|----------|------|
| test 新增 | //base/hiviewdfx/hichecker/test:hichecker_fuzztest |

**base/hiviewdfx/hicollie**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ability_runtime |
| deps 新增 | libuv |
| inner_kits 新增 | //base/hiviewdfx/hicollie/interfaces/app:libapp_hicollie |
| test 新增 | //base/hiviewdfx/hicollie/frameworks/app/test/unittest:unittest |

**base/hiviewdfx/hidumper**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | cJSON |
| deps 新增 | ffrt |
| deps 新增 | hicollie |
| deps 新增 | memory_utils |
| inner_kits 新增 | //base/hiviewdfx/hidumper/plugins:hidumper_plugin |

**base/hiviewdfx/hilog**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/hiviewdfx/hilog/interfaces/native/innerkits:libhilog_snapshot |

**base/hiviewdfx/hitrace**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | faultloggerd |

**base/hiviewdfx/hiview**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/hiviewdfx/hiview/plugins/faultlogger/service/bdfr_base/sanitizer_collector/gwp_asan:libasan_logger |
| inner_kits 删除 | //base/hiviewdfx/hiview/plugins/faultlogger/service/sanitizer_collector/gwp_asan:libasan_logger |

**base/inputmethod/imf**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ace_engine |
| deps 新增 | hiview |
| deps 新增 | runtime_core |
| inner_kits 新增 | //base/inputmethod/imf/frameworks/cj:cj_inputmethod_ffi |
| inner_kits 新增 | //base/inputmethod/imf/frameworks/kits/extension_cj:cj_inputmethod_extension_ffi |
| inner_kits 新增 | //base/inputmethod/imf/interfaces/inner_api/imf_hook:imf_hook |
| inner_kits 新增 | //base/inputmethod/imf/interfaces/inner_api/inputmethod_ability:inputmethod_ability |
| inner_kits 新增 | //base/inputmethod/imf/interfaces/inner_api/inputmethod_controller:inputmethod_client |
| inner_kits 新增 | //base/inputmethod/imf/interfaces/kits/js:extra_config_ani |
| inner_kits 新增 | //base/inputmethod/imf/interfaces/kits/js:extra_config_napi |

**base/msdp/device_status**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.MultimodalAwareness.DistanceMeasurement |
| deps 新增 | runtime_core |
| deps 新增 | time_service |
| inner_kits 新增 | //base/msdp/device_status/frameworks/ets/drag:drag_taihe |
| inner_kits 新增 | //base/msdp/device_status/services/drag_auth:drag_auth |

**base/notification/distributed_notification_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | background_task_mgr |
| deps 新增 | bluetooth |
| deps 新增 | graphic_2d |
| deps 新增 | input |
| deps 新增 | resource_schedule_service |
| deps 新增 | window_manager |
| test 新增 | //base/notification/distributed_notification_service/frameworks/extension/test/unittest:unittest |
| test 新增 | //base/notification/distributed_notification_service/services/domain:unittest |
| test 新增 | //base/notification/distributed_notification_service/services/infrastructure:unittest |

**base/powermgr/battery_manager**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.PowerManager.BatteryManager.Extension |

**base/powermgr/display_manager**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/powermgr/display_manager/state_manager/frameworks/ets/taihe/brightness:copy_display_manager |
| inner_kits 新增 | //base/powermgr/display_manager/state_manager/interfaces/inner_api:displaymgr |
| test 新增 | //base/powermgr/display_manager/state_manager/test:systemtest |
| test 删除 | //base/powermgr/display_manager/state_manager/test:displaymgr_native_test |

**base/powermgr/power_manager**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.PowerManager.PowerManager.Extension |
| deps 新增 | resource_schedule_service |

**base/powermgr/powermgr_lite**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.PowerManager.PowerManager.Lite |
| inner_kits 新增 | //base/powermgr/powermgr_lite/interfaces/kits/battery/js/builtin:libnativeapi_battery_simulator |

**base/powermgr/thermal_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | cJSON |
| inner_kits 新增 | //base/powermgr/thermal_manager/frameworks/cj:cj_thermal_ffi |
| inner_kits 新增 | //base/powermgr/thermal_manager/frameworks/ets/taihe/thermal:copy_thermal_manager |
| inner_kits 新增 | //base/powermgr/thermal_manager/interfaces/inner_api:thermalmgr_listener |
| inner_kits 新增 | //base/powermgr/thermal_manager/interfaces/inner_api:thermalsrv_client |
| inner_kits 新增 | //base/powermgr/thermal_manager/utils/hookmgr:thermal_hookmgr |

**base/print/print_fwk**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | data_share |
| deps 新增 | enterprise_device_management |
| test 新增 | //base/print/print_fwk/test/unittest/fwk_print_smb_printer_test:fwk_print_smb_printer_test |

**base/request/request**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | cJSON |
| deps 删除 | rust |
| deps 删除 | rust_bindgen |
| deps 删除 | selinux_adapter |
| deps 删除 | ylong_http |
| inner_kits 新增 | //base/request/request/frameworks/js/napi/preload_napi:preload_napi |
| test 新增 | //base/request/request/test/unittest/cpp_test/netstack:unittest |
| test 新增 | //base/request/request/test/unittest/cpp_test/preloadNapi:unittest |

**base/security/access_token**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | security_guard |
| inner_kits 新增 | //base/security/access_token/interfaces/innerkits/accesstoken:libaccesstoken_compat_sdk |

**base/security/asset**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | data_share |
| deps 新增 | memmgr |
| deps 新增 | netmanager_base |
| inner_kits 新增 | //base/security/asset/interfaces/inner_kits/plugin_interface:asset_plugin_interface_rust |

**base/security/certificate_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**base/security/certificate_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**base/security/crypto_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ace_engine_lite |
| deps 新增 | hilog_lite |
| deps 新增 | huks |
| deps 新增 | mbedtls |
| inner_kits 新增 | //base/security/crypto_framework/frameworks/js/ani:copy_taihe |

**base/security/dataclassification**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.Security.DataTransitManager |
| deps 新增 | cJSON |
| deps 新增 | selinux_adapter |

**base/security/device_security_level**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.Security.DeviceSecurityLevel |

**base/security/dlp_permission_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | eventhandler |
| deps 新增 | graphic_2d |
| deps 新增 | image_framework |
| deps 新增 | memmgr |
| deps 新增 | resource_management |
| deps 新增 | window_manager |
| inner_kits 新增 | //base/security/dlp_permission_service/interfaces/inner_api/dlp_set_config:libdlp_setconfig_sdk |

**base/security/huks**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Security.Huks.CryptoExtension = false |
| deps 新增 | ability_runtime |
| deps 新增 | device_manager |
| deps 新增 | hilog_lite |
| inner_kits 新增 | //base/security/huks/interfaces/inner_api/huks_standard/main:libhukschipsetsdk |
| inner_kits 新增 | //base/security/huks/interfaces/inner_api/huks_standard/main:libhukssdk |
| inner_kits 新增 | //base/security/huks/interfaces/kits/cj:cj_huks_ffi |

**base/security/security_component_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ffrt |

**base/security/selinux_adapter**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | cJSON |
| deps 新增 | hisysevent |

**base/sensors/miscdevice**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | bundle_framework |
| inner_kits 新增 | //base/sensors/miscdevice/frameworks/ets/taihe:copy_taihe |

**base/sensors/sensor**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | common_event_service |
| deps 新增 | data_share |
| deps 新增 | os_account |
| deps 删除 | build_framework |
| inner_kits 新增 | //base/sensors/sensor/frameworks/ets/taihe:copy_taihe |

**base/startup/appspawn**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | ipc_single |
| deps 删除 | netmanager |

**base/startup/hvb**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |
| inner_kits 新增 | //base/startup/hvb/libhvb:libhvb_static_real |

**base/startup/init**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | toybox |
| inner_kits 新增 | //base/startup/init/interfaces/innerkits:begetutil_headers |
| inner_kits 新增 | //base/startup/init/interfaces/innerkits:libsystemparam |
| inner_kits 新增 | //base/startup/init/services/log:init_log |

**base/tee/tee_client**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Tee.TeeClient = false |

**base/telephony/cellular_data**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 新增 | rust_cxx |

**base/telephony/core_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 新增 | rust_cxx |

**base/telephony/state_registry**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | cellular_data |
| deps 新增 | netmanager_base |
| deps 新增 | runtime_core |
| deps 新增 | rust_cxx |

**base/telephony/telephony_data**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/telephony/telephony_data:tel_telephony_data_headers |

**base/theme/screenlock_mgr**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | data_share |
| deps 新增 | hisysevent |
| deps 新增 | nfc |
| deps 新增 | runtime_core |
| deps 新增 | sensor |
| inner_kits 新增 | //base/theme/screenlock_mgr/interfaces/inner_api:screenlock_client |

**base/theme/wallpaper_mgr**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| inner_kits 新增 | //base/theme/wallpaper_mgr/frameworks/native:wallpapermanager |

**base/time/time_service**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/time/time_service/framework/cj:cj_system_date_time_ffi |
| inner_kits 新增 | //base/time/time_service/framework/js/taihe/system_datetime:copy_systemdatetime |
| inner_kits 新增 | //base/time/time_service/framework/js/taihe/system_timer:copy_systemtimer |
| inner_kits 新增 | //base/time/time_service/interfaces/inner_api:time_client |

**base/update/updater**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/update/updater/services/diffpatch/patch_shared:libupdater_patch_static |
| inner_kits 新增 | //base/update/updater/services/package:libverify_shared |
| inner_kits 新增 | //base/update/updater/services:libupdater_sys_installer |

**base/update/updateservice**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 新增 | storage_service |
| inner_kits 新增 | //base/update/updateservice/foundations:update_foundations |
| inner_kits 新增 | //base/update/updateservice/interfaces/inner_api/engine:updateservicekits |
| inner_kits 新增 | //base/update/updateservice/interfaces/inner_api/modulemgr:update_module_mgr |

**base/usb/usb_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | security_guard |
| deps 删除 | resource_management |
| test 新增 | //base/usb/usb_manager/test/device:usb_device_test |

**base/useriam/face_auth**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | selinux_adapter |

**base/useriam/fingerprint_auth**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.UserIAM.UserAuth.FingerprintAuth |

**base/useriam/pin_auth**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.UserIAM.UserAuth.PinAuth |
| deps 删除 | device_manager |

**base/useriam/user_auth_framework**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //base/useriam/user_auth_framework/frameworks/ets/ani/user_auth:userauth_ani |

**base/web/webview**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | drivers_interface_display |
| deps 新增 | os_account |
| inner_kits 新增 | //base/web/webview/sa/app_fwk_update:app_fwk_update_service |
| inner_kits 新增 | //base/web/webview/sa/web_native_messaging:web_native_messaging |
| inner_kits 删除 | //base/web/webview/sa:app_fwk_update_service |
| test 新增 | //base/web/webview/test/fuzztest/arkwebutils_fuzzer:fuzztest |
| test 新增 | //base/web/webview/test/fuzztest/verifypackageinstall_fuzzer:fuzztest |
| test 新增 | //base/web/webview/test/unittest/ark_hisysevent_adapter_test:unittest |
| test 新增 | //base/web/webview/test/unittest/native_common_test:unittest |
| test 新增 | //base/web/webview/test/unittest/nweb_hisysevent_test:unittest |
| test 新增 | //base/web/webview/test/unittest/sa_web_native_messaging_common_test:unittest |
| test 新增 | //base/web/webview/test/unittest/web_native_messaging_client_test:unittest |

**build**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | rust_bindgen |
| inner_kits 新增 | //build/rust:libstd.dylib.so |
| inner_kits 新增 | //build/rust:libtest.dylib.so |

**commonlibrary/ets_utils**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**commonlibrary/utils_lite**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |
| deps 新增 | musl |
| inner_kits 新增 | //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_common_simulator |
| inner_kits 新增 | //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_deviceinfo_simulator |
| inner_kits 新增 | //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_file_simulator |
| inner_kits 新增 | //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_kvstore_simulator |
| inner_kits 新增 | //commonlibrary/utils_lite:utils_lite |

**developtools/hapsigner/hapsigntool_cpp**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | cJSON |
| deps 删除 | json |
| deps 删除 | jsoncpp |

**developtools/hdc**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | hisysevent |
| deps 删除 | access_control_level_manager |

**developtools/profiler**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //developtools/profiler/device/plugins/api:libhidebug |
| inner_kits 新增 | //developtools/profiler/device/plugins/api:libhidebug_init |
| inner_kits 删除 | //developtools/profiler/hidebug/interfaces/native/innerkits:libhidebug |
| inner_kits 删除 | //developtools/profiler/hidebug/interfaces/native/innerkits:libhidebug_init |
| inner_kits 删除 | //developtools/profiler/host/smartperf/client/client_command:smartperf_daemon |
| test 新增 | //developtools/profiler/hidebug/test/fuzztest:fuzztest |
| test 删除 | //developtools/profiler/host/smartperf/client/client_command/test:unittest |

**drivers/hdf_core**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | ffrt |
| inner_kits 新增 | //drivers/hdf_core/adapter/uhdf2/hdi:libhdi_base |
| inner_kits 删除 | //drivers/hdf_core/framework/tools/hc-gen:hc_gen |

**drivers/interface/audio**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/audio/v6_0:audio_idl_headers |
| inner_kits 新增 | //drivers/interface/audio/v6_0:libaudio_proxy_6.0 |
| inner_kits 新增 | //drivers/interface/audio/v6_0:libaudio_stub_6.0 |
| inner_kits 删除 | //drivers/interface/audio/v5_0:audio_idl_headers |
| inner_kits 删除 | //drivers/interface/audio/v5_0:libaudio_proxy_5.0 |
| inner_kits 删除 | //drivers/interface/audio/v5_0:libaudio_stub_5.0 |

**drivers/interface/camera**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/camera/metadata/v1_0:camera_vendor_tag_idl_headers_1.0 |
| inner_kits 新增 | //drivers/interface/camera/metadata/v1_0:libcamera_vendor_tag_proxy_1.0 |
| inner_kits 新增 | //drivers/interface/camera/v1_5:camera_idl_headers |
| inner_kits 新增 | //drivers/interface/camera/v1_5:libcamera_proxy_1.5 |
| inner_kits 新增 | //drivers/interface/camera/v1_5:libcamera_stub_1.5 |
| test 删除 | //drivers/peripheral/camera/test/hdi/metadata_test:camera_metadata_operator_ut |
| test 删除 | //drivers/peripheral/camera/test/hdi/sequenceable_test:camera_hdi_sequenceable_ut |

**drivers/interface/display**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/display/buffer/v1_4:display_buffer_idl_headers_1.4 |
| inner_kits 新增 | //drivers/interface/display/buffer/v1_4:libdisplay_buffer_hdi_impl_v1_4 |
| inner_kits 新增 | //drivers/interface/display/buffer/v1_4:libdisplay_buffer_proxy_1.4 |
| inner_kits 新增 | //drivers/interface/display/buffer/v1_4:libdisplay_buffer_stub_1.4 |
| inner_kits 新增 | //drivers/interface/display/composer/v1_4:display_composer_idl_headers_1.4 |
| inner_kits 新增 | //drivers/interface/display/composer/v1_4:libdisplay_composer_hdi_impl_1.4 |
| inner_kits 新增 | //drivers/interface/display/composer/v1_4:libdisplay_composer_proxy_1.4 |
| inner_kits 新增 | //drivers/interface/display/composer/v1_4:libdisplay_composer_stub_1.4 |
| inner_kits 新增 | //drivers/interface/display/graphic/common/v2_3:display_commontype_idl_headers_2.3 |
| inner_kits 新增 | //drivers/interface/display/graphic/common/v2_3:libdisplay_commontype_proxy_2.3 |

**drivers/interface/drm**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/drm/v1_0:drm_idl_headers_1.0 |
| inner_kits 新增 | //drivers/interface/drm/v1_1:drm_idl_headers_1.1 |
| inner_kits 新增 | //drivers/interface/drm/v1_1:libdrm_proxy_1.1 |
| inner_kits 新增 | //drivers/interface/drm/v1_1:libdrm_stub_1.1 |
| inner_kits 删除 | //drivers/interface/drm/v1_0:drm_idl_headers |

**drivers/interface/sensor**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/sensor/convert/v1_0:libsensor_convert_proxy_1.0 |
| inner_kits 新增 | //drivers/interface/sensor/convert/v1_0:sensor_convert_idl_headers_1.0 |
| inner_kits 新增 | //drivers/interface/sensor/v3_1:libsensor_proxy_3.1 |
| inner_kits 新增 | //drivers/interface/sensor/v3_1:libsensor_stub_3.1 |

**drivers/interface/usb**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 删除 | //drivers/interface/usb/serial/v1_0:libserial_stub_1.0 |

**drivers/interface/user_auth**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //drivers/interface/user_auth/v4_0:user_auth_idl_headers_4.0 |
| inner_kits 新增 | //drivers/interface/user_auth/v4_1:libuser_auth_proxy_4.1 |
| inner_kits 新增 | //drivers/interface/user_auth/v4_1:libuser_auth_stub_4.1 |
| inner_kits 新增 | //drivers/interface/user_auth/v4_1:user_auth_idl_headers_4.1 |
| inner_kits 删除 | //drivers/interface/user_auth/v4_0:user_auth_idl_headers |

**drivers/peripheral/audio**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ipc |

**drivers/peripheral/camera**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | googletest |

**drivers/peripheral/display**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |

**drivers/peripheral/huks**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |

**drivers/peripheral/location/geofence**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | init |

**drivers/peripheral/nfc**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | init |

**drivers/peripheral/power**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | init |

**drivers/peripheral/usb**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |

**drivers/peripheral/wlan**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |
| deps 新增 | faultloggerd |
| deps 新增 | hilog_lite |

**foundation/ability/dmsfwk**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | background_task_mgr |
| deps 新增 | runtime_core |
| deps 新增 | video_processing_engine |
| deps 删除 | drivers_peripheral_display |
| inner_kits 新增 | //foundation/ability/dmsfwk/interfaces/taihe/etsContinueManager:continueManager_ani |
| test 新增 | //foundation/ability/dmsfwk/services/dtbschedmgr/test/dExtensionDemo:dExtensionDemo |

**foundation/ability/form_fwk**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | graphic_2d |
| deps 新增 | qos_manager |
| deps 删除 | theme_mgr |

**foundation/ai/intelligent_voice_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/ai/neural_network_runtime**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //foundation/ai/neural_network_runtime/frameworks/native/neural_network_core:libneural_network_core |
| inner_kits 新增 | //foundation/ai/neural_network_runtime/frameworks/native/neural_network_runtime:libneural_network_runtime |
| inner_kits 新增 | //foundation/ai/neural_network_runtime:nnrt_target |

**foundation/arkui/ace_engine**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | opencv |
| deps 删除 | egl |
| inner_kits 新增 | //foundation/arkui/ace_engine/frameworks/bridge/arkts_frontend/koala_projects/inner_api:copy_arkui_ets |
| inner_kits 新增 | //foundation/arkui/ace_engine/interfaces/inner_api/drawable:drawable_inner_ani |
| test 新增 | //foundation/arkui/ace_engine/test/benchmark:benchmark |

**foundation/arkui/advanced_ui_component**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ace_engine |
| deps 新增 | c_utils |
| deps 新增 | ipc |
| deps 新增 | window_manager |

**foundation/arkui/napi**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | resource_schedule_service |
| deps 新增 | samgr |

**foundation/arkui/ui_appearance**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/arkui/ui_lite**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | harfbuzz |
| deps 新增 | window_manager_lite |

**foundation/barrierfree/accessibility**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | json |
| inner_kits 新增 | //foundation/barrierfree/accessibility/common/interface:accessibility_interface |
| inner_kits 新增 | //foundation/barrierfree/accessibility/interfaces/innerkits/aafwk:accessibleability |
| inner_kits 新增 | //foundation/barrierfree/accessibility/interfaces/innerkits/acfwk:accessibilityconfig |
| inner_kits 新增 | //foundation/barrierfree/accessibility/interfaces/innerkits/asacfwk:accessibilityclient |
| inner_kits 新增 | //foundation/barrierfree/accessibility/interfaces/innerkits/common:accessibility_common |
| inner_kits 新增 | //foundation/barrierfree/accessibility/interfaces/kits/cj:cj_accessibility_ffi |

**foundation/bundlemanager/app_domain_verify**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | common_event_service |
| deps 新增 | selinux_adapter |

**foundation/bundlemanager/bundle_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | openssl |
| deps 新增 | thermal_manager |

**foundation/bundlemanager/distributed_bundle_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/communication/bluetooth**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Communication.FusionConnectivity.Core |
| inner_kits 新增 | //foundation/communication/bluetooth/frameworks/js/napi/src/common:common |

**foundation/communication/dhcp**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bundle_framework |

**foundation/communication/dsoftbus**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | device_standby |
| deps 新增 | resource_schedule_service |
| deps 新增 | runtime_core |
| deps 删除 | device_certificate_manager |
| deps 删除 | drivers_interface_wlan |
| deps 删除 | wifi_enhance |
| inner_kits 新增 | //foundation/communication/dsoftbus/br_proxy/taihe:proxychannelmanager_taihe_idl |

**foundation/communication/ipc**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //foundation/communication/ipc/ipc/native/src/taihe:rpc_taihe |
| inner_kits 新增 | //foundation/communication/ipc/ipc/native/src/taihe:rpc_taihe_idl |
| test 新增 | //foundation/communication/ipc/test:ipc_test |
| test 删除 | //foundation/communication/ipc/dbinder/test/fuzztest:fuzztest |
| test 删除 | //foundation/communication/ipc/dbinder/test/unittest:unittest |
| test 删除 | //foundation/communication/ipc/ipc/native/test/fuzztest:fuzztest |
| test 删除 | //foundation/communication/ipc/ipc/native/test:unittest |
| test 删除 | //foundation/communication/ipc/ipc/test:moduletest |
| test 删除 | //foundation/communication/ipc/test/fuzztest:fuzztest |
| test 删除 | //foundation/communication/ipc/test/unittest:unittest |

**foundation/communication/netmanager_base**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ace_engine |
| deps 新增 | icu |
| deps 新增 | rust_bindgen |
| deps 新增 | rust_cxx |
| deps 新增 | state_registry |
| deps 新增 | ylong_runtime |
| inner_kits 新增 | //foundation/communication/netmanager_base/common/ani_rs:ani_rs |

**foundation/communication/netmanager_ext**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 新增 | rust_cxx |

**foundation/communication/netstack**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ability_base |
| deps 新增 | runtime_core |
| deps 新增 | rust_cxx |
| inner_kits 新增 | //foundation/communication/netstack/interfaces/innerkits/http_interceptor:http_interceptor |
| inner_kits 新增 | //foundation/communication/netstack/interfaces/innerkits/rust/netstack_rs:netstack_rs |
| inner_kits 新增 | //foundation/communication/netstack/interfaces/innerkits/websocket_native:websocket_native |
| inner_kits 删除 | //foundation/communication/netstack/interfaces/innerkits/websocket_client:websocket_client |

**foundation/communication/nfc**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |
| deps 删除 | drivers_interface_nfc |

**foundation/communication/wifi/wifi**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | movement |

**foundation/deviceprofile/device_info_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | memmgr |

**foundation/distributeddatamgr/data_object**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | eventhandler |
| deps 新增 | relational_store |
| deps 新增 | runtime_core |
| test 新增 | //foundation/distributeddatamgr/data_object/frameworks/innerkitsimpl/test/fuzztest:fuzztest |
| test 删除 | //foundation/distributeddatamgr/data_object/frameworks/innerkitsimpl/test/fuzztest/objectstore_fuzzer:fuzztest |

**foundation/distributeddatamgr/data_share**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | eventhandler |
| deps 新增 | rust_bindgen |
| deps 新增 | rust_cxx |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/common/ani_rs:ani_rs |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/frameworks/cj/ffi/data_share_predicates:cj_data_share_predicates_ffi |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/frameworks/js/napi/dataShare:datashare_jscommon |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/interfaces/inner_api/common:datashare_common |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/interfaces/inner_api/common:datashare_common_lite |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_consumer |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_permission |
| inner_kits 新增 | //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_provider |

**foundation/distributeddatamgr/datamgr_service**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | image_framework |

**foundation/distributeddatamgr/kv_store**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | eventhandler |
| deps 新增 | runtime_core |
| deps 删除 | ffrt |
| inner_kits 新增 | //foundation/distributeddatamgr/kv_store/frameworks/ets/taihe/kv_store:distributedkvstore_ani_pack |

**foundation/distributeddatamgr/pasteboard**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //foundation/distributeddatamgr/pasteboard/interfaces/taihe:copy_pasteboard |

**foundation/distributeddatamgr/preferences**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bundle_framework |
| deps 新增 | ffrt |
| inner_kits 新增 | //foundation/distributeddatamgr/preferences/frameworks/ets/taihe/preferences:copy_taihe |

**foundation/distributeddatamgr/relational_store**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //foundation/distributeddatamgr/relational_store/frameworks/ets/taihe/cloud_data:common_type_taihe_idl |
| inner_kits 新增 | //foundation/distributeddatamgr/relational_store/interfaces/inner_api/cloud_data:cloud_data_native |
| inner_kits 新增 | //foundation/distributeddatamgr/relational_store/interfaces/inner_api/rdb:native_rdb_type_utils |
| test 新增 | //foundation/distributeddatamgr/relational_store/test/ets/cloud_data_no_permission:stage_unittest |
| test 新增 | //foundation/distributeddatamgr/relational_store/test/ets/cloud_data_system:stage_unittest |

**foundation/distributeddatamgr/udmf**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | libxml2 |
| inner_kits 新增 | //foundation/distributeddatamgr/udmf/interfaces/innerkits:xml_wrapper |
| inner_kits 新增 | //foundation/distributeddatamgr/udmf/interfaces/taihe:udmf_taihe_native |
| inner_kits 删除 | //foundation/distributeddatamgr/udmf/interfaces/ani:unifieddatachannel_ani |

**foundation/distributedhardware/device_manager**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/distributedhardware/distributed_hardware_fwk**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | memmgr |
| deps 新增 | runtime_core |
| test 新增 | //foundation/distributedhardware/distributed_hardware_fwk/utils/test:utils_test |
| test 删除 | //foundation/distributedhardware/distributed_hardware_fwk/utils/test/fuzztest:fuzztest |
| test 删除 | //foundation/distributedhardware/distributed_hardware_fwk/utils/test/unittest:utils_test |

**foundation/distributedhardware/mechbody_controller**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | hisysevent |
| deps 新增 | runtime_core |

**foundation/filemanagement/app_file_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | os_account |
| deps 新增 | power_manager |

**foundation/filemanagement/dfs_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bundle_framework |
| deps 新增 | thermal_manager |
| deps 新增 | user_file_service |
| deps 删除 | resource_schedule_service |
| inner_kits 新增 | //foundation/filemanagement/dfs_service/interfaces/inner_api/native/clouddiskservice_kit_inner:clouddiskservice_kit_inner |
| inner_kits 新增 | //foundation/filemanagement/dfs_service/interfaces/kits/ndk/clouddiskmanager/src:ohclouddiskmanager |

**foundation/filemanagement/file_api**

| 变更类型 | 条目 |
|----------|------|
| test 新增 | //foundation/filemanagement/file_api/interfaces/test/fuzztest:file_api_fuzztest |

**foundation/filemanagement/storage_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | config_policy |
| deps 新增 | json |
| deps 新增 | runtime_core |

**foundation/filemanagement/user_file_service**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.FileManagement.CloudDiskManager |
| deps 新增 | bounds_checking_function |
| deps 新增 | dfs_service |
| deps 新增 | relational_store |
| deps 新增 | runtime_core |
| deps 新增 | sandbox_manager |
| inner_kits 新增 | //foundation/filemanagement/user_file_service/interfaces/inner_api/cloud_disk_kit_inner:cloud_disk_manager_kit |
| inner_kits 新增 | //foundation/filemanagement/user_file_service/interfaces/kits/taihe/clouddiskmanager:copy_taihe |

**foundation/graphic/graphic_2d**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | hiview |
| deps 新增 | i18n |
| deps 删除 | graphic_2d_ext |
| inner_kits 新增 | //foundation/graphic/graphic_2d/frameworks/text/interface/mlb/napi:text_napi_impl |
| inner_kits 新增 | //foundation/graphic/graphic_2d/rosen/modules/effect/effect_common:effect_common |
| inner_kits 删除 | //foundation/graphic/graphic_2d/interfaces/kits/cj/drawing:cj_drawing_ffi |
| inner_kits 删除 | //foundation/graphic/graphic_2d/interfaces/kits/cj/drawing:cj_drawing_impl |
| inner_kits 删除 | //foundation/graphic/graphic_2d/interfaces/kits/cj/ui_effect:cj_ui_effect_ffi |
| inner_kits 删除 | //foundation/graphic/graphic_2d/interfaces/kits/napi/graphic/text:text_napi_impl |
| inner_kits 删除 | //foundation/graphic/graphic_2d/rosen/modules/composer/vsync:libvsync |
| test 新增 | //foundation/graphic/graphic_2d/rosen/modules/render_service:test |

**foundation/graphic/graphic_3d**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | meshoptimizer |
| deps 新增 | resource_schedule_service |
| deps 新增 | runtime_core |
| deps 删除 | ace_engine |
| inner_kits 新增 | //foundation/graphic/graphic_3d/kits/js:libKitHelper |
| inner_kits 新增 | //foundation/graphic/graphic_3d/lume/LumeEngine:libComponentHelper |
| inner_kits 新增 | //foundation/graphic/graphic_3d/lume/LumeMeta:AGPMetaApi |
| inner_kits 新增 | //foundation/graphic/graphic_3d/lume/LumeScene:AGPSceneApi |
| test 新增 | //foundation/graphic/graphic_3d/lume/LumeBase/test/unittest:unittest |

**foundation/multimedia/audio_framework**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Multimedia.Audio.SuiteEngine = false |
| deps 新增 | background_task_mgr |
| deps 新增 | call_manager |
| deps 新增 | ringtone_library |
| deps 新增 | runtime_core |
| deps 删除 | av_session |
| deps 删除 | glib |
| deps 删除 | libsnd |
| deps 删除 | openssl |
| inner_kits 新增 | //foundation/multimedia/audio_framework/frameworks/taihe:copy_taihe |
| inner_kits 新增 | //foundation/multimedia/audio_framework/services/audio_engine:audio_engine_plugins |
| inner_kits 新增 | //foundation/multimedia/audio_framework/services/audio_service:audio_common |
| inner_kits 新增 | //foundation/multimedia/audio_framework/services/audio_service:audio_engine_manager |
| inner_kits 新增 | //foundation/multimedia/audio_framework/services/audio_service:audio_policy_manager |
| inner_kits 新增 | //foundation/multimedia/audio_framework/services/audio_suite:audio_suite |

**foundation/multimedia/av_codec**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | dav1d |
| deps 新增 | hiappevent |
| deps 新增 | json |
| deps 新增 | libvpx |
| deps 新增 | resource_schedule_service |
| inner_kits 新增 | //foundation/multimedia/av_codec/services/media_engine/plugins/source/http_source/download/network_client:http_curl_client |
| test 新增 | //foundation/multimedia/av_codec/test:video_codec_unit_test |

**foundation/multimedia/av_session**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Multimedia.AVSession.AVMusicTemplate = false |
| deps 新增 | data_share |
| deps 新增 | json |
| deps 新增 | runtime_core |
| inner_kits 新增 | //foundation/multimedia/av_session/frameworks/common:avsession_common |
| inner_kits 新增 | //foundation/multimedia/av_session/frameworks/native/session:avsession_cast_client |
| inner_kits 新增 | //foundation/multimedia/av_session/utils:avsession_utils |
| test 删除 | //foundation/multimedia/av_session/frameworks/native/session/test/unittest/napi/avsession_manager_jsunittest:jsunittest |

**foundation/multimedia/camera_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | config_policy |
| deps 新增 | eventhandler |
| deps 新增 | image_effect |
| deps 新增 | libexif |
| deps 新增 | libxml2 |
| deps 新增 | openssl |
| deps 新增 | runtime_core |
| deps 删除 | cJSON |
| deps 删除 | drivers_peripheral_display |
| deps 删除 | player_framework |
| deps 删除 | selinux_adapter |
| inner_kits 新增 | //foundation/multimedia/camera_framework/frameworks/native/camera/base:camera_framework_static |
| inner_kits 新增 | //foundation/multimedia/camera_framework/frameworks/taihe:copy_camera_taihe |
| test 新增 | //foundation/multimedia/camera_framework/common/test/unittest:camera_common_utils_test |
| test 新增 | //foundation/multimedia/camera_framework/frameworks/native/camera/test/unittest/camera_ndk_unittest:camera_ndk_test |
| test 删除 | //foundation/multimedia/camera_framework/interfaces/inner_api/native/test:camera_capture |
| test 删除 | //foundation/multimedia/camera_framework/interfaces/inner_api/native/test:camera_capture_video |
| test 删除 | //foundation/multimedia/camera_framework/interfaces/inner_api/native/test:camera_video |

**foundation/multimedia/drm_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | netmanager_base |
| deps 新增 | runtime_core |
| inner_kits 新增 | //foundation/multimedia/drm_framework/frameworks/taihe:copy_drm_taihe |
| inner_kits 新增 | //foundation/multimedia/drm_framework/frameworks/taihe:drm_taihe |

**foundation/multimedia/image_effect**

| 变更类型 | 条目 |
|----------|------|
| deps 删除 | media_foundation |

**foundation/multimedia/image_framework**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | libtiff |
| deps 新增 | memmgr |
| deps 删除 | memmgr_override |
| inner_kits 新增 | //foundation/multimedia/image_framework/frameworks/innerkitsimpl/accessor:image_accessor |

**foundation/multimedia/media_library**

| 变更类型 | 条目 |
|----------|------|
| syscap 删除 | SystemCapability.Multimedia.MediaLibrary.Core |
| syscap 删除 | SystemCapability.Multimedia.MediaLibrary.DistributedCore |
| deps 新增 | hiappevent |
| deps 新增 | hicollie |
| deps 新增 | resource_schedule_service |
| deps 删除 | user_file_service |
| inner_kits 新增 | //foundation/multimedia/media_library/frameworks/ani:medialibrary_ani_utils |
| inner_kits 新增 | //foundation/multimedia/media_library/frameworks/innerkitsimpl/analysis_data_kits:analysis_data_kits |
| inner_kits 新增 | //foundation/multimedia/media_library/frameworks/innerkitsimpl/media_library_camera_helper:media_library_camera_helper |
| inner_kits 新增 | //foundation/multimedia/media_library/frameworks/innerkitsimpl/media_permission_helper:media_permission_helper |

**foundation/multimedia/player_framework**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Multimedia.Media.LowPowerAVSink |
| syscap 删除 | SystemCapability.Multimedia.Media.LowPowerAVSink = false |
| deps 新增 | drivers_interface_lpplayer |
| deps 新增 | histreamer_ext |
| deps 新增 | json |
| deps 新增 | netmanager_base |
| deps 新增 | runtime_core |
| deps 删除 | efficiency_manager |
| deps 删除 | memmgr_override |

**foundation/multimedia/ringtone_library**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | media_library |

**foundation/multimedia/video_processing_engine**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 新增 | window_manager |

**foundation/multimodalinput/input**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | openssl |
| deps 删除 | graphic_2d_ext |
| deps 删除 | jsoncpp |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/gesture_event:gesture_event_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/infrared_emitter:infrared_emitter_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/input_consumer:input_consumer_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/input_device:input_device_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/input_event:input_event_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/input_event_client:input_event_client_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/input_monitor:input_monitor_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/intention_code:intention_code_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/key_code:key_code_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/key_event:key_event_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/mouse_event:mouse_event_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/pointer:pointer_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/short_key:short_key_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/frameworks/ets/touch_event:touch_event_taihe |
| inner_kits 新增 | //foundation/multimodalinput/input/service:libmmi-server-common |
| inner_kits 新增 | //foundation/multimodalinput/input/util:libmmi-util |

**foundation/resourceschedule/background_task_mgr**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | hicollie |
| deps 新增 | resource_schedule_service |
| deps 新增 | runtime_core |

**foundation/resourceschedule/device_standby**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/resourceschedule/device_usage_statistics**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 删除 | hitrace |
| inner_kits 新增 | //foundation/resourceschedule/device_usage_statistics/interfaces/kits/bundlestats/taihe/usage_statistics:usageStatistics_taihe |

**foundation/resourceschedule/qos_manager**

| 变更类型 | 条目 |
|----------|------|
| inner_kits 新增 | //foundation/resourceschedule/qos_manager/qos:pi_mutex |
| test 新增 | //foundation/resourceschedule/qos_manager/test/fuzztest:fuzztest |
| test 删除 | //foundation/resourceschedule/qos_manager/test/fuzztest:concurrent_fuzztest |

**foundation/resourceschedule/resource_schedule_service**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |
| deps 删除 | movement |
| inner_kits 新增 | //foundation/resourceschedule/resource_schedule_service/ressched/interfaces/kits/ets/taihe/systemload:systemload_taihe |
| inner_kits 新增 | //foundation/resourceschedule/resource_schedule_service/ressched/services:resschedsvc_static |
| inner_kits 新增 | //foundation/resourceschedule/resource_schedule_service/ressched_executor/services:resschedexesvc_static |

**foundation/resourceschedule/soc_perf**

| 变更类型 | 条目 |
|----------|------|
| test 新增 | //foundation/resourceschedule/soc_perf/test/fuzztest:fuzztest |

**foundation/resourceschedule/work_scheduler**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | runtime_core |

**foundation/systemabilitymgr/samgr**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | mksh |
| deps 新增 | qos_manager |
| deps 新增 | toybox |
| deps 删除 | bluetooth |

**foundation/systemabilitymgr/samgr_lite**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | mksh |
| deps 新增 | toybox |

**foundation/window/window_manager**

| 变更类型 | 条目 |
|----------|------|
| syscap 新增 | SystemCapability.Window.SessionManager = false |
| syscap 删除 | SystemCapability.Window.SessionManager |
| deps 新增 | os_account |
| deps 新增 | time_service |
| inner_kits 新增 | //foundation/window/window_manager/interfaces/kits/ani/window_animation:ani_window_animation_utils |

**interface/sdk-js**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ets_frontend |
| inner_kits 新增 | //interface/sdk-js:bundle_arkts |
| inner_kits 新增 | //interface/sdk-js:bundle_arkts_etc |
| inner_kits 新增 | //interface/sdk-js:bundle_kits |
| inner_kits 新增 | //interface/sdk-js:bundle_kits_etc |
| inner_kits 新增 | //interface/sdk-js:ets_component |
| inner_kits 新增 | //interface/sdk-js:ets_component_etc |
| inner_kits 新增 | //interface/sdk-js:ets_internal_api |
| inner_kits 新增 | //interface/sdk-js:ets_internal_api_etc |
| inner_kits 新增 | //interface/sdk-js:ohos_declaration_ets |
| inner_kits 新增 | //interface/sdk-js:ohos_declaration_ets_api |
| inner_kits 新增 | //interface/sdk-js:ohos_ets_api |
| inner_kits 新增 | //interface/sdk-js:ohos_ets_arkts |
| inner_kits 新增 | //interface/sdk-js:ohos_ets_kits |

**test/testfwk/arkxtest**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | data_share |
| inner_kits 新增 | //test/testfwk/arkxtest/testserver/src:test_server_client |
| inner_kits 新增 | //test/testfwk/arkxtest/uitest:cj_ui_test_ffi |

**test/xts/device_attest**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | bounds_checking_function |

**test/xts/tools**

| 变更类型 | 条目 |
|----------|------|
| deps 新增 | ipc |

## 新增 syscap 列表（13）

- SystemCapability.ArkCompiler.CangjieInterop
- SystemCapability.Communication.FusionConnectivity.Core
- SystemCapability.FileManagement.CloudDiskManager
- SystemCapability.Game.GameController
- SystemCapability.Multimedia.AVSession.AVMusicTemplate = false
- SystemCapability.Multimedia.Audio.SuiteEngine = false
- SystemCapability.Multimedia.Media.LowPowerAVSink
- SystemCapability.MultimodalAwareness.DistanceMeasurement
- SystemCapability.Security.Huks.CryptoExtension = false
- SystemCapability.SelectionInput.Selection
- SystemCapability.Tee.TeeClient = false
- SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
- SystemCapability.Window.SessionManager = false

## 删除 syscap 列表（11）

- SystemCapability.Multimedia.Media.LowPowerAVSink = false
- SystemCapability.Multimedia.MediaLibrary.Core
- SystemCapability.Multimedia.MediaLibrary.DistributedCore
- SystemCapability.PowerManager.BatteryManager.Extension
- SystemCapability.PowerManager.PowerManager.Extension
- SystemCapability.PowerManager.PowerManager.Lite
- SystemCapability.Security.DataTransitManager
- SystemCapability.Security.DeviceSecurityLevel
- SystemCapability.UserIAM.UserAuth.FingerprintAuth
- SystemCapability.UserIAM.UserAuth.PinAuth
- SystemCapability.Window.SessionManager

## 新增 inner_kits 列表（307）

- //arkcompiler/cangjie_ark_interop/kit/CangjieKit:kit.CangjieKit
- //arkcompiler/cangjie_ark_interop/ohos/business_exception:ohos.business_exception
- //arkcompiler/cangjie_ark_interop/ohos/callback_invoke:ohos.callback_invoke
- //arkcompiler/cangjie_ark_interop/ohos/encoding:ohos.encoding.json
- //arkcompiler/cangjie_ark_interop/ohos/encoding:ohos.json.static
- //arkcompiler/cangjie_ark_interop/ohos/ffi:ohos.ffi
- //arkcompiler/cangjie_ark_interop/ohos/labels:ohos.labels
- //arkcompiler/cangjie_ark_interop/ohos:ohos.ark_interop
- //arkcompiler/cangjie_ark_interop/ohos:ohos.ark_interop_helper
- //arkcompiler/cangjie_ark_interop/ohos:ohos.ark_interop_macro
- //arkcompiler/cangjie_ark_interop/ohos:ohos.ark_interop_macro_cjo
- //arkcompiler/cangjie_ark_interop:copy_cangjie_ark_interop_libs
- //arkcompiler/cangjie_ark_interop:copy_cangjie_ark_interop_libs_kit
- //arkcompiler/ets_frontend/ets2panda/driver/dependency_analyzer:ohos_ets_dependency_analyzer
- //arkcompiler/runtime_core/abc2program:arkabc2program_public_headers
- //arkcompiler/runtime_core/libpandabase:arkplatform_public_headers
- //arkcompiler/runtime_core/static_core/abc2program:arkts_abc2program_public_headers
- //arkcompiler/runtime_core/static_core/libarkbase:libarktsbase
- //arkcompiler/runtime_core/static_core/libarkbase:libarktsbase_package
- //arkcompiler/runtime_core/static_core/libarkbase:libpandabase_headers
- //arkcompiler/runtime_core/static_core/libarkfile:libarktsfile_package
- //arkcompiler/runtime_core/static_core/libarkfile:libpandafile_headers
- //arkcompiler/runtime_core/static_core/platforms/target_defaults:arktarget_options
- //arkcompiler/runtime_core/static_core/plugins/ets/tools/declgen_ts2sts:declgen_ts2sts_compile_declgen
- //arkcompiler/runtime_core/static_core/plugins/ets:ohos_ets_etsstdlib_abc
- //arkcompiler/runtime_core/static_core/runtime:arkruntime_pcre2
- //base/accesscontrol/accesscontrol_cangjie_wrapper/ohos/ability_access_ctrl:ohos.ability_access_ctrl
- //base/accesscontrol/accesscontrol_cangjie_wrapper:copy_sdk_accesscontrol_cangjie_libs
- //base/account/os_account/frameworks/authorization:authorization_innerkits
- //base/global/global_cangjie_wrapper/ohos/i18n:ohos.i18n
- //base/global/global_cangjie_wrapper/ohos/raw_file_descriptor:ohos.raw_file_descriptor
- //base/global/global_cangjie_wrapper/ohos/resource:ohos.resource
- //base/global/global_cangjie_wrapper/ohos/resource_manager:ohos.resource_manager
- //base/global/global_cangjie_wrapper:copy_sdk_global_cangjie_libs
- //base/global/global_cangjie_wrapper:copy_sdk_global_cangjie_libs_kit
- //base/global/resource_management_lite/frameworks/resmgr_lite:global_resmgr_simulator
- //base/hiviewdfx/hicollie/interfaces/app:libapp_hicollie
- //base/hiviewdfx/hidumper/plugins:hidumper_plugin
- //base/hiviewdfx/hilog/interfaces/native/innerkits:libhilog_snapshot
- //base/hiviewdfx/hiview/plugins/faultlogger/service/bdfr_base/sanitizer_collector/gwp_asan:libasan_logger
- //base/hiviewdfx/hiviewdfx_cangjie_wrapper/ohos/hi_trace_meter:ohos.hi_trace_meter
- //base/hiviewdfx/hiviewdfx_cangjie_wrapper/ohos/hilog:ohos.hilog
- //base/hiviewdfx/hiviewdfx_cangjie_wrapper:copy_sdk_hiviewdfx_cangjie_libs
- //base/hiviewdfx/hiviewdfx_cangjie_wrapper:copy_sdk_hiviewdfx_cangjie_libs_kit
- //base/inputmethod/imf/frameworks/cj:cj_inputmethod_ffi
- //base/inputmethod/imf/frameworks/kits/extension_cj:cj_inputmethod_extension_ffi
- //base/inputmethod/imf/interfaces/inner_api/imf_hook:imf_hook
- //base/inputmethod/imf/interfaces/inner_api/inputmethod_ability:inputmethod_ability
- //base/inputmethod/imf/interfaces/inner_api/inputmethod_controller:inputmethod_client
- //base/inputmethod/imf/interfaces/kits/js:extra_config_ani
- //base/inputmethod/imf/interfaces/kits/js:extra_config_napi
- //base/location/location/frameworks/cj:cj_geolocationmanager_ffi
- //base/location/location/frameworks/ets/taihe/locator_sdk:copy_cryptoFramework
- //base/location/location/frameworks/location_common/common:lbsservice_common
- //base/location/location/frameworks/native/geofence_sdk:geofence_sdk
- //base/location/location/frameworks/native/locator_agent:locator_agent
- //base/location/location/frameworks/native/locator_sdk:locator_sdk
- //base/location/location_cangjie_wrapper:copy_sdk_location_cangjie_libs
- //base/location/location_cangjie_wrapper:copy_sdk_location_cangjie_libs_kit
- //base/msdp/device_status/frameworks/ets/drag:drag_taihe
- //base/msdp/device_status/services/drag_auth:drag_auth
- //base/notification/notification_cangjie_wrapper/ohos/common_event_manager:ohos.common_event_manager
- //base/notification/notification_cangjie_wrapper:copy_sdk_notification_cangjie_libs
- //base/powermgr/display_manager/state_manager/frameworks/ets/taihe/brightness:copy_display_manager
- //base/powermgr/display_manager/state_manager/interfaces/inner_api:displaymgr
- //base/powermgr/powermgr_cangjie_wrapper/ohos/battery_info:ohos.battery_info
- //base/powermgr/powermgr_cangjie_wrapper:copy_sdk_powermgr_cangjie_libs
- //base/powermgr/powermgr_lite/interfaces/kits/battery/js/builtin:libnativeapi_battery_simulator
- //base/powermgr/thermal_manager/frameworks/cj:cj_thermal_ffi
- //base/powermgr/thermal_manager/frameworks/ets/taihe/thermal:copy_thermal_manager
- //base/powermgr/thermal_manager/interfaces/inner_api:thermalmgr_listener
- //base/powermgr/thermal_manager/interfaces/inner_api:thermalsrv_client
- //base/powermgr/thermal_manager/utils/hookmgr:thermal_hookmgr
- //base/request/request/frameworks/js/napi/preload_napi:preload_napi
- //base/request/request_cangjie_wrapper/ohos/request:ohos.request
- //base/request/request_cangjie_wrapper:copy_sdk_request_cangjie_libs
- //base/security/access_token/interfaces/innerkits/accesstoken:libaccesstoken_compat_sdk
- //base/security/asset/interfaces/inner_kits/plugin_interface:asset_plugin_interface_rust
- //base/security/crypto_framework/frameworks/js/ani:copy_taihe
- //base/security/dlp_permission_service/interfaces/inner_api/dlp_set_config:libdlp_setconfig_sdk
- //base/security/huks/interfaces/inner_api/huks_standard/main:libhukschipsetsdk
- //base/security/huks/interfaces/inner_api/huks_standard/main:libhukssdk
- //base/security/huks/interfaces/kits/cj:cj_huks_ffi
- //base/security/security_cangjie_wrapper:copy_sdk_security_cangjie_libs
- //base/security/security_cangjie_wrapper:copy_sdk_security_cangjie_libs_kit
- //base/sensors/miscdevice/frameworks/ets/taihe:copy_taihe
- //base/sensors/sensor/frameworks/ets/taihe:copy_taihe
- //base/sensors/sensors_cangjie_wrapper:copy_sdk_sensors_cangjie_libs
- //base/sensors/sensors_cangjie_wrapper:copy_sdk_sensors_cangjie_libs_kit
- //base/startup/hvb/libhvb:libhvb_static_real
- //base/startup/init/interfaces/innerkits:begetutil_headers
- //base/startup/init/interfaces/innerkits:libsystemparam
- //base/startup/init/services/log:init_log
- //base/startup/startup_cangjie_wrapper/ohos/device_info:ohos.device_info
- //base/startup/startup_cangjie_wrapper:copy_sdk_startup_cangjie_libs
- //base/telephony/telephony_cangjie_wrapper:copy_sdk_telephony_cangjie_libs
- //base/telephony/telephony_cangjie_wrapper:copy_sdk_telephony_cangjie_libs_kit
- //base/telephony/telephony_data:tel_telephony_data_headers
- //base/theme/screenlock_mgr/interfaces/inner_api:screenlock_client
- //base/theme/wallpaper_mgr/frameworks/native:wallpapermanager
- //base/time/time_cangjie_wrapper/ohos/system_date_time:ohos.system_date_time
- //base/time/time_cangjie_wrapper:copy_sdk_time_cangjie_libs
- //base/time/time_service/framework/cj:cj_system_date_time_ffi
- //base/time/time_service/framework/js/taihe/system_datetime:copy_systemdatetime
- //base/time/time_service/framework/js/taihe/system_timer:copy_systemtimer
- //base/time/time_service/interfaces/inner_api:time_client
- //base/update/updater/services/diffpatch/patch_shared:libupdater_patch_static
- //base/update/updater/services/package:libverify_shared
- //base/update/updater/services:libupdater_sys_installer
- //base/update/updateservice/foundations:update_foundations
- //base/update/updateservice/interfaces/inner_api/engine:updateservicekits
- //base/update/updateservice/interfaces/inner_api/modulemgr:update_module_mgr
- //base/useriam/user_auth_framework/frameworks/ets/ani/user_auth:userauth_ani
- //base/web/arkweb_cangjie_wrapper/ohos/web/webview:ohos.web.webview
- //base/web/arkweb_cangjie_wrapper:copy_sdk_arkweb_cangjie_libs
- //base/web/arkweb_cangjie_wrapper:copy_sdk_arkweb_cangjie_libs_kit
- //base/web/webview/sa/app_fwk_update:app_fwk_update_service
- //base/web/webview/sa/web_native_messaging:web_native_messaging
- //build/rust:libstd.dylib.so
- //build/rust:libtest.dylib.so
- //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_common_simulator
- //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_deviceinfo_simulator
- //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_file_simulator
- //commonlibrary/utils_lite/js/builtin/simulator:ace_kit_kvstore_simulator
- //commonlibrary/utils_lite:utils_lite
- //developtools/profiler/device/plugins/api:libhidebug
- //developtools/profiler/device/plugins/api:libhidebug_init
- //domains/game/game_controller_framework/frameworks/native:gamecontroller_client
- //domains/game/game_controller_framework/frameworks/native:gamecontroller_fwk_client
- //drivers/hdf_core/adapter/uhdf2/hdi:libhdi_base
- //drivers/interface/audio/v6_0:audio_idl_headers
- //drivers/interface/audio/v6_0:libaudio_proxy_6.0
- //drivers/interface/audio/v6_0:libaudio_stub_6.0
- //drivers/interface/camera/metadata/v1_0:camera_vendor_tag_idl_headers_1.0
- //drivers/interface/camera/metadata/v1_0:libcamera_vendor_tag_proxy_1.0
- //drivers/interface/camera/v1_5:camera_idl_headers
- //drivers/interface/camera/v1_5:libcamera_proxy_1.5
- //drivers/interface/camera/v1_5:libcamera_stub_1.5
- //drivers/interface/display/buffer/v1_4:display_buffer_idl_headers_1.4
- //drivers/interface/display/buffer/v1_4:libdisplay_buffer_hdi_impl_v1_4
- //drivers/interface/display/buffer/v1_4:libdisplay_buffer_proxy_1.4
- //drivers/interface/display/buffer/v1_4:libdisplay_buffer_stub_1.4
- //drivers/interface/display/composer/v1_4:display_composer_idl_headers_1.4
- //drivers/interface/display/composer/v1_4:libdisplay_composer_hdi_impl_1.4
- //drivers/interface/display/composer/v1_4:libdisplay_composer_proxy_1.4
- //drivers/interface/display/composer/v1_4:libdisplay_composer_stub_1.4
- //drivers/interface/display/graphic/common/v2_3:display_commontype_idl_headers_2.3
- //drivers/interface/display/graphic/common/v2_3:libdisplay_commontype_proxy_2.3
- //drivers/interface/drm/v1_0:drm_idl_headers_1.0
- //drivers/interface/drm/v1_1:drm_idl_headers_1.1
- //drivers/interface/drm/v1_1:libdrm_proxy_1.1
- //drivers/interface/drm/v1_1:libdrm_stub_1.1
- //drivers/interface/midi/v1_0:libmidi_proxy_1.0
- //drivers/interface/midi/v1_0:midi_idl_headers_1.0
- //drivers/interface/sensor/convert/v1_0:libsensor_convert_proxy_1.0
- //drivers/interface/sensor/convert/v1_0:sensor_convert_idl_headers_1.0
- //drivers/interface/sensor/v3_1:libsensor_proxy_3.1
- //drivers/interface/sensor/v3_1:libsensor_stub_3.1
- //drivers/interface/tools/hc-gen:hc_gen
- //drivers/interface/user_auth/v4_0:user_auth_idl_headers_4.0
- //drivers/interface/user_auth/v4_1:libuser_auth_proxy_4.1
- //drivers/interface/user_auth/v4_1:libuser_auth_stub_4.1
- //drivers/interface/user_auth/v4_1:user_auth_idl_headers_4.1
- //foundation/ability/ability_cangjie_wrapper/ohos/app/ability/ability_delegator_registry:ohos.app.ability.ability_delegator_registry
- //foundation/ability/ability_cangjie_wrapper/ohos/app/ability/context_constant:ohos.app.ability.context_constant
- //foundation/ability/ability_cangjie_wrapper/ohos/app/ability/ui_ability:ohos.app.ability.ui_ability
- //foundation/ability/ability_cangjie_wrapper/ohos/app/ability/want:ohos.app.ability.want
- //foundation/ability/ability_cangjie_wrapper/ohos/app/ability:ohos.app.ability
- //foundation/ability/ability_cangjie_wrapper/ohos/application/test_runner:ohos.application.test_runner
- //foundation/ability/ability_cangjie_wrapper:copy_sdk_ability_cangjie_libs
- //foundation/ability/ability_cangjie_wrapper:copy_sdk_ability_cangjie_libs_kit
- //foundation/ability/dmsfwk/interfaces/taihe/etsContinueManager:continueManager_ani
- //foundation/ai/neural_network_runtime/frameworks/native/neural_network_core:libneural_network_core
- //foundation/ai/neural_network_runtime/frameworks/native/neural_network_runtime:libneural_network_runtime
- //foundation/ai/neural_network_runtime:nnrt_target
- //foundation/arkui/ace_engine/frameworks/bridge/arkts_frontend/koala_projects/inner_api:copy_arkui_ets
- //foundation/arkui/ace_engine/interfaces/inner_api/drawable:drawable_inner_ani
- //foundation/arkui/arkui_cangjie_wrapper/ohos/arkui/component/util:ohos.arkui.component.util
- //foundation/arkui/arkui_cangjie_wrapper/ohos/arkui/state_macro_manage:ohos.arkui.state_macro_manage
- //foundation/arkui/arkui_cangjie_wrapper/ohos/arkui/state_macro_manage:ohos.arkui.state_macro_manage_cjo
- //foundation/arkui/arkui_cangjie_wrapper/ohos/base:ohos.base
- //foundation/arkui/arkui_cangjie_wrapper:copy_sdk_arkui_cangjie_libs
- //foundation/arkui/arkui_cangjie_wrapper:copy_sdk_arkui_cangjie_libs_kit
- //foundation/barrierfree/accessibility/common/interface:accessibility_interface
- //foundation/barrierfree/accessibility/interfaces/innerkits/aafwk:accessibleability
- //foundation/barrierfree/accessibility/interfaces/innerkits/acfwk:accessibilityconfig
- //foundation/barrierfree/accessibility/interfaces/innerkits/asacfwk:accessibilityclient
- //foundation/barrierfree/accessibility/interfaces/innerkits/common:accessibility_common
- //foundation/barrierfree/accessibility/interfaces/kits/cj:cj_accessibility_ffi
- //foundation/bundlemanager/bundlemanager_cangjie_wrapper/ohos/bundle/bundle_manager:ohos.bundle.bundle_manager
- //foundation/bundlemanager/bundlemanager_cangjie_wrapper/ohos/element_name:ohos.element_name
- //foundation/bundlemanager/bundlemanager_cangjie_wrapper:copy_sdk_bundlemanager_cangjie_libs
- //foundation/communication/bluetooth/frameworks/js/napi/src/common:common
- //foundation/communication/communication_cangjie_wrapper/ohos/rpc:ohos.rpc
- //foundation/communication/communication_cangjie_wrapper:copy_sdk_communication_cangjie_libs
- //foundation/communication/communication_cangjie_wrapper:copy_sdk_communication_cangjie_libs_kit
- //foundation/communication/connectivity_cangjie_wrapper:copy_sdk_connectivity_cangjie_libs
- //foundation/communication/connectivity_cangjie_wrapper:copy_sdk_connectivity_cangjie_libs_kit
- //foundation/communication/dsoftbus/br_proxy/taihe:proxychannelmanager_taihe_idl
- //foundation/communication/ipc/ipc/native/src/taihe:rpc_taihe
- //foundation/communication/ipc/ipc/native/src/taihe:rpc_taihe_idl
- //foundation/communication/netmanager_base/common/ani_rs:ani_rs
- //foundation/communication/netmanager_cangjie_wrapper:copy_sdk_netmanager_cangjie_libs
- //foundation/communication/netmanager_cangjie_wrapper:copy_sdk_netmanager_cangjie_libs_kit
- //foundation/communication/netstack/interfaces/innerkits/http_interceptor:http_interceptor
- //foundation/communication/netstack/interfaces/innerkits/rust/netstack_rs:netstack_rs
- //foundation/communication/netstack/interfaces/innerkits/websocket_native:websocket_native
- //foundation/distributeddatamgr/data_share/common/ani_rs:ani_rs
- //foundation/distributeddatamgr/data_share/frameworks/cj/ffi/data_share_predicates:cj_data_share_predicates_ffi
- //foundation/distributeddatamgr/data_share/frameworks/js/napi/dataShare:datashare_jscommon
- //foundation/distributeddatamgr/data_share/interfaces/inner_api/common:datashare_common
- //foundation/distributeddatamgr/data_share/interfaces/inner_api/common:datashare_common_lite
- //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_consumer
- //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_permission
- //foundation/distributeddatamgr/data_share/interfaces/inner_api:datashare_provider
- //foundation/distributeddatamgr/distributeddatamgr_cangjie_wrapper/ohos/data/data_share_predicates:ohos.data.data_share_predicates
- //foundation/distributeddatamgr/distributeddatamgr_cangjie_wrapper:copy_sdk_distributeddatamgr_cangjie_libs
- //foundation/distributeddatamgr/distributeddatamgr_cangjie_wrapper:copy_sdk_distributeddatamgr_cangjie_libs_kit
- //foundation/distributeddatamgr/kv_store/frameworks/ets/taihe/kv_store:distributedkvstore_ani_pack
- //foundation/distributeddatamgr/pasteboard/interfaces/taihe:copy_pasteboard
- //foundation/distributeddatamgr/preferences/frameworks/ets/taihe/preferences:copy_taihe
- //foundation/distributeddatamgr/relational_store/frameworks/ets/taihe/cloud_data:common_type_taihe_idl
- //foundation/distributeddatamgr/relational_store/interfaces/inner_api/cloud_data:cloud_data_native
- //foundation/distributeddatamgr/relational_store/interfaces/inner_api/rdb:native_rdb_type_utils
- //foundation/distributeddatamgr/udmf/interfaces/innerkits:xml_wrapper
- //foundation/distributeddatamgr/udmf/interfaces/taihe:udmf_taihe_native
- //foundation/filemanagement/dfs_service/interfaces/inner_api/native/clouddiskservice_kit_inner:clouddiskservice_kit_inner
- //foundation/filemanagement/dfs_service/interfaces/kits/ndk/clouddiskmanager/src:ohclouddiskmanager
- //foundation/filemanagement/filemanagement_cangjie_wrapper:copy_sdk_filemanagement_cangjie_libs
- //foundation/filemanagement/filemanagement_cangjie_wrapper:copy_sdk_filemanagement_cangjie_libs_kit
- //foundation/filemanagement/user_file_service/interfaces/inner_api/cloud_disk_kit_inner:cloud_disk_manager_kit
- //foundation/filemanagement/user_file_service/interfaces/kits/taihe/clouddiskmanager:copy_taihe
- //foundation/graphic/graphic_2d/frameworks/text/interface/mlb/napi:text_napi_impl
- //foundation/graphic/graphic_2d/rosen/modules/effect/effect_common:effect_common
- //foundation/graphic/graphic_3d/kits/js:libKitHelper
- //foundation/graphic/graphic_3d/lume/LumeEngine:libComponentHelper
- //foundation/graphic/graphic_3d/lume/LumeMeta:AGPMetaApi
- //foundation/graphic/graphic_3d/lume/LumeScene:AGPSceneApi
- //foundation/graphic/graphic_cangjie_wrapper/ohos/graphics/color_space_manager:ohos.graphics.color_space_manager
- //foundation/graphic/graphic_cangjie_wrapper:copy_sdk_graphic_cangjie_libs
- //foundation/graphic/graphic_cangjie_wrapper:copy_sdk_graphic_cangjie_libs_kit
- //foundation/multimedia/audio_framework/frameworks/taihe:copy_taihe
- //foundation/multimedia/audio_framework/services/audio_engine:audio_engine_plugins
- //foundation/multimedia/audio_framework/services/audio_service:audio_common
- //foundation/multimedia/audio_framework/services/audio_service:audio_engine_manager
- //foundation/multimedia/audio_framework/services/audio_service:audio_policy_manager
- //foundation/multimedia/audio_framework/services/audio_suite:audio_suite
- //foundation/multimedia/av_codec/services/media_engine/plugins/source/http_source/download/network_client:http_curl_client
- //foundation/multimedia/av_session/frameworks/common:avsession_common
- //foundation/multimedia/av_session/frameworks/native/session:avsession_cast_client
- //foundation/multimedia/av_session/utils:avsession_utils
- //foundation/multimedia/camera_framework/frameworks/native/camera/base:camera_framework_static
- //foundation/multimedia/camera_framework/frameworks/taihe:copy_camera_taihe
- //foundation/multimedia/drm_framework/frameworks/taihe:copy_drm_taihe
- //foundation/multimedia/drm_framework/frameworks/taihe:drm_taihe
- //foundation/multimedia/image_framework/frameworks/innerkitsimpl/accessor:image_accessor
- //foundation/multimedia/media_library/frameworks/ani:medialibrary_ani_utils
- //foundation/multimedia/media_library/frameworks/innerkitsimpl/analysis_data_kits:analysis_data_kits
- //foundation/multimedia/media_library/frameworks/innerkitsimpl/media_library_camera_helper:media_library_camera_helper
- //foundation/multimedia/media_library/frameworks/innerkitsimpl/media_permission_helper:media_permission_helper
- //foundation/multimedia/multimedia_cangjie_wrapper/ohos/multimedia/image:ohos.multimedia.image
- //foundation/multimedia/multimedia_cangjie_wrapper:copy_sdk_multimedia_cangjie_libs
- //foundation/multimedia/multimedia_cangjie_wrapper:copy_sdk_multimedia_cangjie_libs_kit
- //foundation/multimodalinput/input/frameworks/ets/gesture_event:gesture_event_taihe
- //foundation/multimodalinput/input/frameworks/ets/infrared_emitter:infrared_emitter_taihe
- //foundation/multimodalinput/input/frameworks/ets/input_consumer:input_consumer_taihe
- //foundation/multimodalinput/input/frameworks/ets/input_device:input_device_taihe
- //foundation/multimodalinput/input/frameworks/ets/input_event:input_event_taihe
- //foundation/multimodalinput/input/frameworks/ets/input_event_client:input_event_client_taihe
- //foundation/multimodalinput/input/frameworks/ets/input_monitor:input_monitor_taihe
- //foundation/multimodalinput/input/frameworks/ets/intention_code:intention_code_taihe
- //foundation/multimodalinput/input/frameworks/ets/key_code:key_code_taihe
- //foundation/multimodalinput/input/frameworks/ets/key_event:key_event_taihe
- //foundation/multimodalinput/input/frameworks/ets/mouse_event:mouse_event_taihe
- //foundation/multimodalinput/input/frameworks/ets/pointer:pointer_taihe
- //foundation/multimodalinput/input/frameworks/ets/short_key:short_key_taihe
- //foundation/multimodalinput/input/frameworks/ets/touch_event:touch_event_taihe
- //foundation/multimodalinput/input/service:libmmi-server-common
- //foundation/multimodalinput/input/util:libmmi-util
- //foundation/resourceschedule/device_usage_statistics/interfaces/kits/bundlestats/taihe/usage_statistics:usageStatistics_taihe
- //foundation/resourceschedule/qos_manager/qos:pi_mutex
- //foundation/resourceschedule/resource_schedule_service/ressched/interfaces/kits/ets/taihe/systemload:systemload_taihe
- //foundation/resourceschedule/resource_schedule_service/ressched/services:resschedsvc_static
- //foundation/resourceschedule/resource_schedule_service/ressched_executor/services:resschedexesvc_static
- //foundation/systemabilitymgr/selectionfwk/interfaces/inner_kits/selection_client:selection_client
- //foundation/window/window_cangjie_wrapper/ohos/display:ohos.display
- //foundation/window/window_cangjie_wrapper/ohos/window:ohos.window
- //foundation/window/window_cangjie_wrapper:copy_sdk_window_cangjie_libs
- //foundation/window/window_manager/interfaces/kits/ani/window_animation:ani_window_animation_utils
- //interface/sdk-js:bundle_arkts
- //interface/sdk-js:bundle_arkts_etc
- //interface/sdk-js:bundle_kits
- //interface/sdk-js:bundle_kits_etc
- //interface/sdk-js:ets_component
- //interface/sdk-js:ets_component_etc
- //interface/sdk-js:ets_internal_api
- //interface/sdk-js:ets_internal_api_etc
- //interface/sdk-js:ohos_declaration_ets
- //interface/sdk-js:ohos_declaration_ets_api
- //interface/sdk-js:ohos_ets_api
- //interface/sdk-js:ohos_ets_arkts
- //interface/sdk-js:ohos_ets_kits
- //test/testfwk/arkxtest/testserver/src:test_server_client
- //test/testfwk/arkxtest/uitest:cj_ui_test_ffi
- //test/testfwk/testfwk_cangjie_wrapper/ohos/ui_test:ohos.ui_test
- //test/testfwk/testfwk_cangjie_wrapper:copy_sdk_testfwk_cangjie_libs
- //test/testfwk/testfwk_cangjie_wrapper:copy_sdk_testfwk_cangjie_libs_kit

## 删除 inner_kits 列表（31）

- //arkcompiler/runtime_core/static_core/libpandabase:libarktsbase
- //arkcompiler/runtime_core/static_core/libpandabase:libarktsbase_package
- //arkcompiler/runtime_core/static_core/libpandabase:libpandabase_headers
- //arkcompiler/runtime_core/static_core/libpandafile:libarktsfile_package
- //arkcompiler/runtime_core/static_core/libpandafile:libpandafile_headers
- //base/customization/config_policy/frameworks/config_policy:configpolicy_util_for_init_static
- //base/hiviewdfx/hiview/plugins/faultlogger/service/sanitizer_collector/gwp_asan:libasan_logger
- //base/location/frameworks/cj:cj_geolocationmanager_ffi
- //base/location/frameworks/ets/taihe/locator_sdk:copy_cryptoFramework
- //base/location/frameworks/location_common/common:lbsservice_common
- //base/location/frameworks/native/geofence_sdk:geofence_sdk
- //base/location/frameworks/native/locator_agent:locator_agent
- //base/location/frameworks/native/locator_sdk:locator_sdk
- //base/web/webview/sa:app_fwk_update_service
- //developtools/profiler/hidebug/interfaces/native/innerkits:libhidebug
- //developtools/profiler/hidebug/interfaces/native/innerkits:libhidebug_init
- //developtools/profiler/host/smartperf/client/client_command:smartperf_daemon
- //drivers/hdf_core/framework/tools/hc-gen:hc_gen
- //drivers/interface/audio/v5_0:audio_idl_headers
- //drivers/interface/audio/v5_0:libaudio_proxy_5.0
- //drivers/interface/audio/v5_0:libaudio_stub_5.0
- //drivers/interface/drm/v1_0:drm_idl_headers
- //drivers/interface/usb/serial/v1_0:libserial_stub_1.0
- //drivers/interface/user_auth/v4_0:user_auth_idl_headers
- //foundation/communication/netstack/interfaces/innerkits/websocket_client:websocket_client
- //foundation/distributeddatamgr/udmf/interfaces/ani:unifieddatachannel_ani
- //foundation/graphic/graphic_2d/interfaces/kits/cj/drawing:cj_drawing_ffi
- //foundation/graphic/graphic_2d/interfaces/kits/cj/drawing:cj_drawing_impl
- //foundation/graphic/graphic_2d/interfaces/kits/cj/ui_effect:cj_ui_effect_ffi
- //foundation/graphic/graphic_2d/interfaces/kits/napi/graphic/text:text_napi_impl
- //foundation/graphic/graphic_2d/rosen/modules/composer/vsync:libvsync

## 新增 deps 列表（89）

| deps名称 | 子系统 | 组件 |
|----------|--------|------|
| ability_cangjie_wrapper | accesscontrol | accesscontrol_cangjie_wrapper |
| ability_cangjie_wrapper | distributeddatamgr | distributeddatamgr_cangjie_wrapper |
| ability_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| ability_cangjie_wrapper | request | request_cangjie_wrapper |
| ability_cangjie_wrapper | telephony | telephony_cangjie_wrapper |
| ability_cangjie_wrapper | testfwk | testfwk_cangjie_wrapper |
| ability_cangjie_wrapper | window | window_cangjie_wrapper |
| accesscontrol_cangjie_wrapper | ability | ability_cangjie_wrapper |
| arkui_cangjie_wrapper | ability | ability_cangjie_wrapper |
| arkui_cangjie_wrapper | global | global_cangjie_wrapper |
| arkui_cangjie_wrapper | request | request_cangjie_wrapper |
| arkui_cangjie_wrapper | sdk | sdk_cangjie |
| arkui_cangjie_wrapper | web | arkweb_cangjie_wrapper |
| arkui_cangjie_wrapper | window | window_cangjie_wrapper |
| arkweb_cangjie_wrapper | arkui | arkui_cangjie_wrapper |
| bundlemanager_cangjie_wrapper | ability | ability_cangjie_wrapper |
| bundlemanager_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| cangjie_ark_interop | ability | ability_cangjie_wrapper |
| cangjie_ark_interop | accesscontrol | accesscontrol_cangjie_wrapper |
| cangjie_ark_interop | arkui | arkui_cangjie_wrapper |
| cangjie_ark_interop | bundlemanager | bundlemanager_cangjie_wrapper |
| cangjie_ark_interop | communication | communication_cangjie_wrapper |
| cangjie_ark_interop | communication | connectivity_cangjie_wrapper |
| cangjie_ark_interop | communication | netmanager_cangjie_wrapper |
| cangjie_ark_interop | distributeddatamgr | distributeddatamgr_cangjie_wrapper |
| cangjie_ark_interop | filemanagement | filemanagement_cangjie_wrapper |
| cangjie_ark_interop | global | global_cangjie_wrapper |
| cangjie_ark_interop | graphic | graphic_cangjie_wrapper |
| cangjie_ark_interop | hiviewdfx | hiviewdfx_cangjie_wrapper |
| cangjie_ark_interop | location | location_cangjie_wrapper |
| cangjie_ark_interop | multimedia | multimedia_cangjie_wrapper |
| cangjie_ark_interop | notification | notification_cangjie_wrapper |
| cangjie_ark_interop | powermgr | powermgr_cangjie_wrapper |
| cangjie_ark_interop | request | request_cangjie_wrapper |
| cangjie_ark_interop | sdk | sdk_cangjie |
| cangjie_ark_interop | security | security_cangjie_wrapper |
| cangjie_ark_interop | sensors | sensors_cangjie_wrapper |
| cangjie_ark_interop | startup | startup_cangjie_wrapper |
| cangjie_ark_interop | telephony | telephony_cangjie_wrapper |
| cangjie_ark_interop | testfwk | testfwk_cangjie_wrapper |
| cangjie_ark_interop | time | time_cangjie_wrapper |
| cangjie_ark_interop | web | arkweb_cangjie_wrapper |
| cangjie_ark_interop | window | window_cangjie_wrapper |
| communication_cangjie_wrapper | ability | ability_cangjie_wrapper |
| dav1d | multimedia | av_codec |
| distributeddatamgr_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| drivers_interface_midi | hdf | drivers_peripheral_midi |
| drivers_interface_midi | multimedia | midi_framework |
| flatbuffers | sdk | sdk_cangjie |
| global_cangjie_wrapper | ability | ability_cangjie_wrapper |
| global_cangjie_wrapper | arkui | arkui_cangjie_wrapper |
| global_cangjie_wrapper | bundlemanager | bundlemanager_cangjie_wrapper |
| global_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| graphic_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| harfbuzz | arkui | ui_lite |
| histreamer_ext | multimedia | player_framework |
| hiviewdfx_cangjie_wrapper | ability | ability_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | accesscontrol | accesscontrol_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | arkui | arkui_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | bundlemanager | bundlemanager_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | communication | communication_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | communication | connectivity_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | communication | netmanager_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | distributeddatamgr | distributeddatamgr_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | filemanagement | filemanagement_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | global | global_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | graphic | graphic_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | location | location_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | multimedia | multimedia_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | notification | notification_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | request | request_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | security | security_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | sensors | sensors_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | telephony | telephony_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | testfwk | testfwk_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | time | time_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | web | arkweb_cangjie_wrapper |
| hiviewdfx_cangjie_wrapper | window | window_cangjie_wrapper |
| libtiff | multimedia | image_framework |
| libvpx | multimedia | av_codec |
| meshoptimizer | graphic | graphic_3d |
| multimedia_cangjie_wrapper | ability | ability_cangjie_wrapper |
| multimedia_cangjie_wrapper | arkui | arkui_cangjie_wrapper |
| multimedia_cangjie_wrapper | web | arkweb_cangjie_wrapper |
| multimedia_cangjie_wrapper | window | window_cangjie_wrapper |
| nfc | theme | screenlock_mgr |
| opencv | arkui | ace_engine |
| testfwk_cangjie_wrapper | ability | ability_cangjie_wrapper |
| window_cangjie_wrapper | ability | ability_cangjie_wrapper |

## 删除 deps 列表（18）

| deps名称 | 子系统 | 组件 |
|----------|--------|------|
| access_control_level_manager | developtools | hdc |
| build_framework | sensors | sensor |
| device_certificate_manager | communication | dsoftbus |
| efficiency_manager | multimedia | player_framework |
| glib | multimedia | audio_framework |
| graphic_2d_ext | graphic | graphic_2d |
| graphic_2d_ext | multimodalinput | input |
| ipc_single | startup | appspawn |
