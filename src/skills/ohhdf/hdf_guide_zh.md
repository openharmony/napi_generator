# OpenHarmony HDF: design, development, test (Light + rk3568)

For **standard system** on **rk3568**: HDF architecture, Light stack, how to build and run **light_demo** (HAL client).

**零基础从零做外设**：请读同目录 **`howtohdf.md`**（阶段 1～12、排错表、编译与调试命令逐项说明）。

## 1. HDF architecture (summary)

1. **HCS**: device instances and driver binding.
2. **Driver**: `HdfDriverEntry` with `Bind` / `Init` / `Release`.
3. **Framework core**: `drivers/hdf_core/framework` (host, manager, loader).
4. **Peripheral repo**: `drivers/peripheral/<device>` (this doc: **light**).
5. **UHDF**: user-mode HAL uses **HDF IoService** to talk to kernel-side or VDI service.

Read also: `drivers/hdf_core/framework/README_zh.md`.

## 2. Light call chain (light_demo path)

```
light_demo
  -> NewLightInterfaceInstance() -> struct LightInterface *
  -> GetLightInfo / TurnOnLight / TurnOffLight
     -> hal/light_controller.c (lib hdi_light)
        -> IoService "hdf_light" + Dispatch(...)
           -> kernel/VDI light driver -> hardware
```

Headers: `drivers/peripheral/light/interfaces/include/light_if.h`, `light_type.h`.

Use **`LightEffect.lightColor.colorValue.rgbColor`** and **`flashEffect`** (e.g. `LIGHT_FLASH_NONE`). Older README snippets with only `lightBrightness` may not match `light_type.h`.

HDI C++ path: `test/unittest/hdi/` uses `ILightInterface::Get()` and `drivers_interface_light`.

## 3. Directory map

**Light**

- `drivers/peripheral/light/bundle.json` - part `drivers_peripheral_light`, inner_kits for headers.
- `drivers/peripheral/light/hal/` - `hdi_light`.
- `drivers/peripheral/light/test/light_demo/` - demo binary.

**HDF core**

- `drivers/hdf_core/framework/core/`, `include/`, `model/`, `sample/`.

**rk3568**

- `device/board/hihope/rk3568`, `device/soc/rockchip/rk3568` (as in your tree).

If product **does not** enable light in HCS/DTS, **GetLightInfo** may return error or **count==0**.

## 4. Development steps (analogy for new peripheral)

1. Define stable API under `interfaces/include` (or IDL for HDI).
2. Implement HAL: open IoService, match service name and command codes with kernel side.
3. Implement kernel/VDI driver and **HCS** for your board.
4. **BUILD.gn** + **bundle.json**: `external_deps` must pass **check_external_deps** (part `components` in generated `parts_deps`; **third_party** like `bounds_checking_function` is not treated as a component dep - avoid unnecessary `external_deps` in small tools, e.g. zero-init `LightEffect effect{}`).

## 5. Testing

| Method | Location / note |
|--------|-----------------|
| HDI unit tests | `test/unittest/hdi/` |
| light_demo | HAL C API, good for manual check on device |
| hilog | tags such as UHDF light code paths |

## 6. light_demo: build and run

Build (from tree root with `build.sh`):

```bash
./build.sh --build-target light_demo --product-name rk3568
```

Binary (typical):

```text
out/rk3568/hdf/drivers_peripheral_light/light_demo
```

Deploy:

```bash
hdc file send out/rk3568/hdf/drivers_peripheral_light/light_demo /data/local/tmp/light_demo
hdc shell chmod 755 /data/local/tmp/light_demo
hdc shell /data/local/tmp/light_demo
```

Program flow: `GetLightInfo` -> print lights -> for each id: `TurnOnLight` (red, steady) -> sleep -> `TurnOffLight`.

## 7. ohhdf skill

- **索引**：`src/skills/ohhdf/SKILL.md`
- **全流程 How-To（配置 / 编译 / 烧录 / 调试 / 客户端）**：`src/skills/ohhdf/howtohdf.md`
- **脚本**：`ohhdf.py` — `guide` | `howto` | `build-demo` | `build-blue-demo` | `build-target` | `paths` | `push-light` | `push-blue` | `device-check` | `hilog-hdf` | `dmesg-hdf` | `hidumper-list`（设备侧加 `-t <hdc序列号>` 或 `OHHDF_HDC_TARGET`）

## 8. Related: bluehdf (blue LED sample)

- 目录：`drivers/peripheral/bluehdf/`；部件：`drivers_peripheral_bluehdf`。
- **UHDF**：`libbluehdf_driver.z.so`；HCS 中 **`bluehdf_host`**、**`bluehdf_interface_service`**；**`hdf_devhost.cfg`** 需整编后才会生成 **`-n bluehdf_host`** 条目。
- **HAL**：`libhdi_blue.z.so`，写 **`/sys/class/leds/<name>/brightness`**（与 **ohhdc** 一致；默认节点名 **`blue`**，可宏 **`BLUEHDF_LED_SYSFS_NAME`** 改为 `green` 等）。
- **系统侧**：已增加 **`bluehdf_host` 的 passwd/group** 与 **SELinux**（`bluehdf_host` 域、`hdf_bluehdf_interface_service`、`chipset_init` 过渡），否则 init 拉不起 host。
- 需 **`./build.sh --product-name rk3568` 全量打包**，`vendor` 里才会有 `libbluehdf_driver.z.so` / `libhdi_blue.z.so`。
- **`blue_demo`**：`info` / `on` / `off` / `timer <sec>`。详见 **howtohdf.md** / **hdf_guide_zh.md**（bluehdf 说明已并入 **ohhdf** 文档）。
