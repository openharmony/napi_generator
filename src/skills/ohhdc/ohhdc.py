#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony HDC 工具
提供设备管理和应用查看功能。

截图相关：
- screenshot/snapshot：设备 snapshot_display 整屏截图。
- screenshot-app/snap-app：先 aa start（预设别名见 SCREENSHOT_APP_ALIASES），再整屏截图。

Wi‑Fi（wificlitools）：
- wifi-kaihong：hdc shell 执行 wificommand wifienable + wificonnect（默认 SSID KaiHong、密码 KaiHong@888）。
"""

import argparse
import json
import os
import re
from datetime import datetime
from pathlib import Path
import shlex
import subprocess
import sys
import threading
import time

# 技能脚本所在目录：截图、layout 等产物默认写入其下子目录
OH_HDC_SKILL_DIR = Path(__file__).resolve().parent
OH_HDC_SCREENSHOT_DIR = OH_HDC_SKILL_DIR / "screenshot"
OH_HDC_LAYOUT_DIR = OH_HDC_SKILL_DIR / "layout"


def resolve_ohhdc_artifact_path(
    subdir: Path,
    user_path: str | None,
    default_filename: str,
) -> str:
    """
    解析本机保存路径：未指定或仅为文件名时，写入 ohhdc 技能目录下 subdir。
    绝对路径或含目录的相对路径按用户指定落盘（并创建父目录）。
    """
    subdir.mkdir(parents=True, exist_ok=True)
    if not user_path:
        return str((subdir / default_filename).resolve())
    p = Path(user_path)
    if p.is_absolute():
        rp = p.expanduser().resolve()
        rp.parent.mkdir(parents=True, exist_ok=True)
        return str(rp)
    if p.parent == Path("."):
        return str((subdir / p.name).resolve())
    rp = p.expanduser().resolve()
    rp.parent.mkdir(parents=True, exist_ok=True)
    return str(rp)


def run_hdc_command(command, timeout_sec=120):
    """
    执行 hdc 命令
    
    Args:
        command: hdc 命令字符串
        timeout_sec: 超时秒数，默认 120（安装 HAP 等操作可能较慢）
        
    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout_sec
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "命令执行超时"
    except Exception as e:
        return False, "", str(e)


# wificlitools 产物：见 foundation/communication/wifi/wifi/test/wificlitools/BUILD.gn（ohos_executable wificommand）
# 默认未 install 进 system 分区；可 push 到可写目录后用绝对路径调用（与 ohclitools 约定一致）。
WIFICOMMAND_BIN_DEFAULT = "wificommand"
DEFAULT_WIFI_KAIHONG_SSID = "xxx"
DEFAULT_WIFI_KAIHONG_PASSWORD = "xxxxxx"
DEFAULT_WIFICOMMAND_REMOTE_PATH = "/data/local/tmp/wificommand"
DEFAULT_WIFI_PRODUCT = "rk3568"


def infer_ohos_src_root(explicit: str | None) -> Path | None:
    """从 --ohos-src、环境变量 OHOS_SRC 或本脚本向上查找含 build.sh 的源码根。"""
    if explicit:
        p = Path(explicit).expanduser().resolve()
        return p if p.is_dir() else None
    env = os.environ.get("OHOS_SRC", "").strip()
    if env:
        p = Path(env).expanduser().resolve()
        return p if p.is_dir() else None
    c = Path(__file__).resolve().parent
    for _ in range(10):
        if (c / "build.sh").is_file():
            return c
        if c.parent == c:
            break
        c = c.parent
    return None


def find_wificommand_host_binary(ohos_src: Path, product: str) -> Path | None:
    """在 out/<product> 下查找 wificommand 可执行文件（strip 或 unstripped）。"""
    out = ohos_src / "out" / product
    candidates = [
        out / "communication" / "wifi" / "wificommand",
        out / "exe.unstripped" / "communication" / "wifi" / "wificommand",
    ]
    for p in candidates:
        if p.is_file() and os.access(p, os.X_OK):
            return p
        if p.is_file():
            return p
    return None


def hdc_file_send(local_path: str, remote_path: str, timeout_sec: int = 120):
    """hdc file send local remote（经 bash -c + source bashrc 以找到 hdc）。"""
    inner = (
        "source ~/.bashrc 2>/dev/null; "
        f"hdc file send {shlex.quote(local_path)} {shlex.quote(remote_path)}"
    )
    cmd = "bash -c " + shlex.quote(inner)
    return run_hdc_command(cmd, timeout_sec=timeout_sec)


def run_wifi_push_wificommand(
    *,
    local_bin: str | None,
    ohos_src: Path | None,
    product: str,
    remote_path: str,
) -> tuple[bool, str]:
    """
    将本机 wificommand 推到设备 remote_path 并 chmod +x。

    Returns:
        (success, message)
    """
    host_path: Path | None = None
    if local_bin:
        host_path = Path(local_bin).expanduser().resolve()
        if not host_path.is_file():
            return False, f"本机文件不存在: {host_path}"
    elif ohos_src is not None:
        host_path = find_wificommand_host_binary(ohos_src, product)
        if host_path is None:
            return (
                False,
                f"未在 {ohos_src / 'out' / product} 下找到 wificommand；"
                f"请先编译: ./build.sh --product-name {product} --build-target wificommand",
            )
    else:
        return False, "请指定本机 wificommand 路径（target 参数）或 --ohos-src 以自动查找 out 目录"

    ok, out, err = hdc_file_send(str(host_path), remote_path, timeout_sec=180)
    detail = (out or "") + (err or "")
    if not ok:
        return False, f"hdc file send 失败: {detail.strip() or err}"

    ok2, out2, err2 = run_hdc_shell_remote(f"chmod 755 {shlex.quote(remote_path)}", timeout_sec=30)
    if not ok2:
        return False, f"chmod 失败: {(out2 or '') + (err2 or '')}"

    return True, f"已推送 {host_path} -> {remote_path}"


def run_hdc_shell_remote(remote_cmd: str, timeout_sec: int = 120):
    """
    执行 hdc shell，remote_cmd 为设备侧完整命令行（经 shlex.quote，避免主机 shell 注入）。

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    full = "hdc shell " + shlex.quote(remote_cmd)
    return run_hdc_command(full, timeout_sec=timeout_sec)


def wifi_wificommand_enable_and_connect(
    ssid: str,
    password: str,
    *,
    wificommand_bin: str = WIFICOMMAND_BIN_DEFAULT,
    fetch_status: bool = True,
    timeout_enable_sec: int = 60,
    timeout_connect_sec: int = 120,
    timeout_status_sec: int = 30,
):
    """
    使用 wificommand（wificlitools）打开 Wi‑Fi 并按 SSID/密码连接；可选再查状态。

    Args:
        wificommand_bin: 设备侧可执行文件名或绝对路径（如 /data/local/tmp/wificommand）。

    Returns:
        tuple: (all_ok: bool, log: list of (step_name, success, stdout, stderr))
    """
    log = []
    bin_name = wificommand_bin

    def _step(name: str, remote: str, tmo: int) -> bool:
        ok, out, err = run_hdc_shell_remote(remote, timeout_sec=tmo)
        log.append((name, ok, out or "", err or ""))
        return ok

    ok_enable = _step("wifienable", f"{bin_name} wifienable", timeout_enable_sec)
    if not ok_enable:
        return False, log

    connect_remote = f"{bin_name} wificonnect ssid={ssid} password={password}"
    ok_connect = _step("wificonnect", connect_remote, timeout_connect_sec)
    if not ok_connect:
        return False, log

    if fetch_status:
        _step("wifigetstatus", f"{bin_name} wifigetstatus", timeout_status_sec)

    return True, log


def list_installed_apps():
    """
    查看设备上已安装的应用
    
    Returns:
        tuple: (success: bool, apps: list, error: str)
    """
    # 使用 bash 执行，确保加载 .bashrc 中的环境变量
    command = 'bash -c "source ~/.bashrc && hdc shell \\"bm dump -a\\""'
    success, output, error = run_hdc_command(command)
    
    if not success:
        return False, [], error or "无法连接到设备或命令执行失败"
    
    # 解析输出，提取 bundleName
    # hdc shell "bm dump -a" 输出格式：
    # ID: 100:
    # 	com.example.app1
    # 	com.example.app2
    apps = []
    seen = set()  # 用于去重
    
    for line in output.split('\n'):
        # 跳过 ID 行和空行
        if line.startswith('ID:') or not line.strip():
            continue
        # 去除制表符和空格
        app_name = line.lstrip('\t ').strip()
        # 验证是否是有效的 bundleName（包含点或以 ohos. 开头）
        if app_name and ('.' in app_name or app_name.startswith('ohos.')):
            if app_name not in seen:
                apps.append(app_name)
                seen.add(app_name)
    
    return True, apps, None


def uninstall_hap(bundle_name):
    """
    卸载设备上的 HAP 应用

    Args:
        bundle_name: 应用包名，如 com.example.p7zipTest

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    command = f'bash -c "source ~/.bashrc && hdc shell \\"bm uninstall -n {bundle_name}\\""'
    return run_hdc_command(command)


def install_hap(hap_path):
    """
    安装 HAP 到设备

    Args:
        hap_path: HAP 文件路径，如 /path/to/app-signed.hap

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    path_quoted = shlex.quote(hap_path)
    command = f'bash -c "source ~/.bashrc && hdc install {path_quoted}"'
    return run_hdc_command(command)


# sysfs LED 节点名（与板级设备树命名一致；物理灯颜色可能与节点名不一致，见 SKILL）
LED_SYSFS_NAMES = frozenset({"red", "green", "blue"})


def set_device_led(sysfs_name: str, brightness: int) -> tuple:
    """
    通过 hdc shell 写入 /sys/class/leds/<name>/brightness（0 关 / 1 开）。

    Args:
        sysfs_name: red / green / blue（sysfs 目录名）
        brightness: 0 或 1

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    if sysfs_name not in LED_SYSFS_NAMES:
        return False, "", f"不支持的 LED 节点: {sysfs_name}"
    if brightness not in (0, 1):
        return False, "", "brightness 仅支持 0 或 1"
    inner = f"echo {brightness} > /sys/class/leds/{sysfs_name}/brightness"
    inner_q = shlex.quote(inner)
    command = f'bash -c "source ~/.bashrc && hdc shell {inner_q}"'
    return run_hdc_command(command, timeout_sec=30)


# snapshot_display 合法输出目录（见 window_manager/snapshot snapshot_utils.cpp）
DEFAULT_SCREENSHOT_DEVICE_PATH = "/data/local/tmp/ohhdc_screenshot.jpeg"

# screenshot-app：短别名 -> (bundleName, defaultAbility)。先 aa start 再整屏 snapshot_display。
# 非别名须显式传 --ability（与设备上 module.json5 中主 Ability 一致）。
SCREENSHOT_APP_ALIASES: dict[str, tuple[str, str]] = {
    "etsclock": ("ohos.samples.etsclock", "MainAbility"),
}


def resolve_screenshot_app_bundle_ability(
    alias_or_bundle: str,
    ability_override: str | None,
) -> tuple[tuple[str, str] | None, str | None]:
    """
    解析 screenshot-app 的包名与 Ability。

    Returns:
        ((bundle, ability), None) 成功；(None, error_message) 失败。
    """
    raw = alias_or_bundle.strip()
    if not raw:
        return None, "应用别名或包名不能为空"
    key = raw.lower()
    if key in SCREENSHOT_APP_ALIASES:
        b, default_a = SCREENSHOT_APP_ALIASES[key]
        return (b, ability_override or default_a), None
    if not ability_override:
        return None, (
            "非预设别名时必须指定主 Ability，例如: "
            "ohhdc.py screenshot-app ohos.samples.xxx --ability EntryAbility"
        )
    return (raw, ability_override), None


def take_screenshot_to_local(
    local_path: str,
    device_path: str | None = None,
    display_id: int | None = None,
) -> tuple:
    """
    设备上执行 snapshot_display 写入固定路径，再用 hdc file recv 拉到本地。

    Args:
        local_path: 本机保存路径（绝对或相对）
        device_path: 设备端文件路径，默认 /data/local/tmp/ohhdc_screenshot.jpeg
        display_id: 若指定则传 -i displayId，否则使用设备默认屏

    Returns:
        tuple: (success: bool, log_output: str, error: str, resolved_local: str)
    """
    dev = device_path or DEFAULT_SCREENSHOT_DEVICE_PATH
    if display_id is not None:
        inner = f"snapshot_display -i {int(display_id)} -f {shlex.quote(dev)}"
    else:
        inner = f"snapshot_display -f {shlex.quote(dev)}"
    inner_q = shlex.quote(inner)
    snap_cmd = f'bash -c "source ~/.bashrc && hdc shell {inner_q}"'
    ok, out, err = run_hdc_command(snap_cmd, timeout_sec=120)
    snap_log = ((out or "") + "\n" + (err or "")).strip()
    if not ok:
        hint = ""
        low = snap_log.lower()
        if "developer" in low and "mode" in low:
            hint = (
                "\n提示: snapshot_display 要求开启开发者模式"
                "（如 persist 参数 const.security.developermode.state）。"
            )
        return False, snap_log, (err or out or "snapshot_display 执行失败") + hint, local_path

    local_abs = str(Path(local_path).expanduser().resolve())
    Path(local_abs).parent.mkdir(parents=True, exist_ok=True)
    dq = shlex.quote(dev)
    lq = shlex.quote(local_abs)
    recv_cmd = f'bash -c "source ~/.bashrc && hdc file recv {dq} {lq}"'
    ok2, out2, err2 = run_hdc_command(recv_cmd, timeout_sec=120)
    recv_log = ((out2 or "") + "\n" + (err2 or "")).strip()
    full_log = snap_log + ("\n\n--- hdc file recv ---\n" + recv_log if recv_log else "")
    if not ok2:
        return False, full_log, err2 or out2 or "hdc file recv 失败", local_abs
    return True, full_log, "", local_abs


# uitest dumpLayout 设备端输出路径（需在可写目录，一般用 /data/local/tmp）
DEFAULT_UISTEST_LAYOUT_DEVICE_PATH = "/data/local/tmp/ohhdc_uitest_layout.json"


def dump_uitest_layout_to_local(
    local_path: str,
    device_path: str | None = None,
    display_id: int | None = None,
    bundle: str | None = None,
    window_id: str | None = None,
    merge_windows: bool | None = None,
    include_font_attrs: bool = False,
    independent_nodes: bool = False,
    extend_attr: str | None = None,
) -> tuple:
    """
    hdc shell uitest dumpLayout -p <设备路径>，再 hdc file recv 拉到本地。
    若内容为合法 JSON，会格式化为缩进后写回，便于阅读。

    Returns:
        tuple: (success, log_output, error, resolved_local)
    """
    dev = device_path or DEFAULT_UISTEST_LAYOUT_DEVICE_PATH
    inner = "uitest dumpLayout -p " + shlex.quote(dev)
    if independent_nodes:
        inner += " -i"
    if include_font_attrs:
        inner += " -a"
    if bundle:
        inner += " -b " + shlex.quote(bundle)
    if window_id is not None and str(window_id).strip() != "":
        inner += " -w " + shlex.quote(str(window_id))
    if merge_windows is not None:
        inner += " -m " + ("true" if merge_windows else "false")
    if display_id is not None:
        inner += " -d " + str(int(display_id))
    if extend_attr:
        inner += " -e " + shlex.quote(extend_attr)

    inner_q = shlex.quote(inner)
    shell_cmd = f'bash -c "source ~/.bashrc && hdc shell {inner_q}"'
    ok, out, err = run_hdc_command(shell_cmd, timeout_sec=120)
    run_log = ((out or "") + "\n" + (err or "")).strip()
    if not ok:
        return False, run_log, err or out or "uitest dumpLayout 执行失败", local_path

    local_abs = str(Path(local_path).expanduser().resolve())
    Path(local_abs).parent.mkdir(parents=True, exist_ok=True)
    dq = shlex.quote(dev)
    lq = shlex.quote(local_abs)
    recv_cmd = f'bash -c "source ~/.bashrc && hdc file recv {dq} {lq}"'
    ok2, out2, err2 = run_hdc_command(recv_cmd, timeout_sec=120)
    recv_log = ((out2 or "") + "\n" + (err2 or "")).strip()
    full_log = run_log + ("\n\n--- hdc file recv ---\n" + recv_log if recv_log else "")
    if not ok2:
        return False, full_log, err2 or out2 or "hdc file recv 失败", local_abs

    try:
        raw = Path(local_abs).read_text(encoding="utf-8", errors="replace")
        obj = json.loads(raw)
        Path(local_abs).write_text(
            json.dumps(obj, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        full_log += "\n\n(已格式化为缩进 JSON)"
    except (json.JSONDecodeError, OSError, TypeError):
        full_log += "\n\n(内容非 JSON 或格式化跳过，已按原始文件保存)"

    return True, full_log, "", local_abs


def replace_install_hap(hap_path):
    """
    替换安装 HAP（覆盖已存在的同包名应用）

    Args:
        hap_path: HAP 文件路径，如 /path/to/app-signed.hap

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    path_quoted = shlex.quote(hap_path)
    command = f'bash -c "source ~/.bashrc && hdc -r install {path_quoted}"'
    return run_hdc_command(command)


def install_project_haps(project_dir):
    """
    按项目安装两个 HAP：先安装主 HAP，等 1 秒后再安装测试 HAP（均使用 hdc install，不用 -r）。
    路径约定：
      - 主 HAP: {project_dir}/entry/build/default/outputs/default/entry-default-signed.hap
      - 测试 HAP: {project_dir}/entry/build/default/outputs/ohosTest/entry-ohosTest-signed.hap

    Args:
        project_dir: 项目根目录，如 napi_generator 仓库根下的 examples/NativeProj46R 或其绝对路径

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    project_dir = os.path.abspath(project_dir)
    main_hap = os.path.join(
        project_dir, 'entry', 'build', 'default', 'outputs', 'default', 'entry-default-signed.hap'
    )
    test_hap = os.path.join(
        project_dir, 'entry', 'build', 'default', 'outputs', 'ohosTest', 'entry-ohosTest-signed.hap'
    )
    if not os.path.isfile(main_hap):
        return False, "", f"主 HAP 不存在: {main_hap}"
    if not os.path.isfile(test_hap):
        return False, "", f"测试 HAP 不存在: {test_hap}"
    out_parts = []
    success1, out1, err1 = install_hap(main_hap)
    out_parts.append(f"主 HAP: {out1.strip() or (err1 or '')}")
    if not success1:
        return False, "\n".join(out_parts), err1 or out1
    time.sleep(1)  # 装完主 HAP 等 1 秒再装测试 HAP
    success2, out2, err2 = install_hap(test_hap)
    out_parts.append(f"测试 HAP: {out2.strip() or (err2 or '')}")
    if not success2:
        return False, "\n".join(out_parts), err2 or out2
    return True, "\n".join(out_parts), ""


def _parse_bundle_name(project_dir):
    """从项目 AppScope/app.json5 解析 bundleName，失败返回 None。"""
    for path in [
        os.path.join(project_dir, 'AppScope', 'app.json5'),
        os.path.join(project_dir, 'app.json5'),
    ]:
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
            content = re.sub(r'//.*', '', content)
            content = re.sub(r',\s*}', '}', content)
            content = re.sub(r',\s*]', ']', content)
            data = json.loads(content)
            name = data.get('app', {}).get('bundleName')
            if name:
                return name
        except Exception:
            continue
    return None


def _discover_test_suites(project_dir):
    """
    从项目 entry/src/ohosTest/ets/test/List.test.ets 解析测试套件列表，
    再在各 .test.ets 文件中取 describe('SuiteName', ...) 的 SuiteName，
    返回逗号分隔的套件名，供 aa test -s class 使用；失败返回 None。
    """
    list_path = os.path.join(
        project_dir, 'entry', 'src', 'ohosTest', 'ets', 'test', 'List.test.ets'
    )
    if not os.path.isfile(list_path):
        return None
    try:
        with open(list_path, 'r', encoding='utf-8') as f:
            list_content = f.read()
    except Exception:
        return None
    # import foo from './Bar.test'; -> map foo -> Bar.test.ets
    import_map = {}
    for m in re.finditer(r"import\s+(\w+)\s+from\s+['\"]\./([^'\"]+)['\"]\s*;", list_content):
        name, path = m.group(1), m.group(2)
        if not path.endswith('.ets'):
            path = (path + '.ets') if path.endswith('.test') else (path + '.test.ets')
        import_map[name] = path
    # 在 export default function testsuite() { ... } 内找 xxx();
    start = list_content.find("export default function")
    if start == -1:
        return None
    brace = list_content.find("{", start)
    if brace == -1:
        return None
    depth = 1
    i = brace + 1
    while i < len(list_content) and depth > 0:
        if list_content[i] == "{":
            depth += 1
        elif list_content[i] == "}":
            depth -= 1
        i += 1
    body = list_content[brace + 1:i - 1] if depth == 0 else ""
    call_order = re.findall(r"(\w+)\s*\(\s*\)", body)
    test_dir = os.path.join(project_dir, 'entry', 'src', 'ohosTest', 'ets', 'test')
    suite_names = []
    for func_name in call_order:
        file_name = import_map.get(func_name)
        if not file_name:
            continue
        file_path = os.path.join(test_dir, file_name)
        if not os.path.isfile(file_path):
            continue
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                file_content = f.read()
        except Exception:
            continue
        # 取第一个 describe('SuiteName', ...)
        desc = re.search(r"describe\s*\(\s*['\"]([^'\"]+)['\"]\s*,\s*", file_content)
        if desc:
            suite_names.append(desc.group(1))
    if not suite_names:
        return None
    return ",".join(suite_names)


def deploy_and_run_test(
    project_dir,
    bundle_name=None,
    module_name='entry_test',
    test_class=None,
    timeout=15000,
):
    """
    部署运行 HAP 测试用例：先卸载同包名应用，再 hdc install -r 安装主 HAP 与测试 HAP，最后执行 aa test。
    等价于依次执行：卸载 -> hdc install -r 主HAP -> hdc install -r 测试HAP -> hdc shell aa test ...
    测试套件由 entry/src/ohosTest/ets/test/List.test.ets 及各 .test.ets 中的 describe 名动态解析；
    若 test_class 为 None 且解析失败，则回退为 ActsAbilityTest,IndexUitestTest。

    Args:
        project_dir: 项目根目录
        bundle_name: 包名，None 时从项目 AppScope/app.json5 解析
        module_name: 测试模块名，默认 entry_test
        test_class: -s class 参数，多个套件用逗号分隔；None 时从 List.test.ets 自动发现
        timeout: 测试超时（毫秒），默认 15000

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    project_dir = os.path.abspath(project_dir)
    if test_class is None or (isinstance(test_class, str) and not test_class.strip()):
        test_class = _discover_test_suites(project_dir) or 'ActsAbilityTest,IndexUitestTest'
    else:
        test_class = test_class.strip()
    main_hap = os.path.join(
        project_dir, 'entry', 'build', 'default', 'outputs', 'default', 'entry-default-signed.hap'
    )
    test_hap = os.path.join(
        project_dir, 'entry', 'build', 'default', 'outputs', 'ohosTest', 'entry-ohosTest-signed.hap'
    )
    if not os.path.isfile(main_hap):
        return False, "", f"主 HAP 不存在: {main_hap}"
    if not os.path.isfile(test_hap):
        return False, "", f"测试 HAP 不存在: {test_hap}"
    bn = bundle_name or _parse_bundle_name(project_dir)
    if not bn:
        return False, "", "无法解析 bundleName，请指定 bundle_name 或确保项目 AppScope/app.json5 存在且含 app.bundleName"

    out_parts = []
    # 1. 卸载
    ok1, out1, err1 = uninstall_hap(bn)
    out_parts.append(f"卸载: {out1.strip() or err1 or 'ok'}")
    # 2. 替换安装主 HAP
    ok2, out2, err2 = replace_install_hap(main_hap)
    out_parts.append(f"主 HAP: {out2.strip() or err2 or ''}")
    if not ok2:
        return False, "\n".join(out_parts), err2 or out2
    # 3. 替换安装测试 HAP
    ok3, out3, err3 = replace_install_hap(test_hap)
    out_parts.append(f"测试 HAP: {out3.strip() or err3 or ''}")
    if not ok3:
        return False, "\n".join(out_parts), err3 or out3
    # 4. 运行测试（suite_name 传 test_class，即 -s class 的值）
    ok4, out4, err4 = run_test(bn, module_name, test_class, case_name=None, timeout=timeout)
    out_parts.append(f"测试: {out4.strip() or err4 or ''}")
    if not ok4:
        return False, "\n".join(out_parts), err4 or out4
    return True, "\n".join(out_parts), ""


def force_stop_app(bundle_name):
    """
    强制关闭应用程序

    Args:
        bundle_name: 应用包名，如 com.ohos.settings

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    command = f'bash -c "source ~/.bashrc && timeout 15 hdc shell \\"aa force-stop {bundle_name}\\""'
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=20  # 给足够的时间让命令执行
        )
        # force-stop 命令通常没有输出，返回码为0表示成功
        # 即使超时（timeout命令返回124），如果命令已发送，应用可能已被关闭
        if result.returncode == 0:
            return True, result.stdout, result.stderr
        elif result.returncode == 124:  # timeout 命令超时
            # 命令可能已执行，但超时了，通常表示成功
            return True, "命令执行完成（可能超时但应用已关闭）", ""
        else:
            return False, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        # 即使超时，如果命令已发送，可能已经执行成功
        return True, "命令执行完成（可能超时但应用已关闭）", ""
    except Exception as e:
        return False, "", str(e)


def start_app(bundle_name, ability_name):
    """
    启动应用程序

    Args:
        bundle_name: 应用包名，如 com.ohos.settings
        ability_name: Ability 名称，如 EntryAbility

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    command = f'bash -c "source ~/.bashrc && timeout 15 hdc shell \\"aa start -a {ability_name} -b {bundle_name}\\""'
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=20  # 给足够的时间让命令执行
        )
        # start 命令通常没有输出，返回码为0表示成功
        # 即使超时（timeout命令返回124），如果命令已发送，应用可能已启动
        if result.returncode == 0:
            return True, result.stdout, result.stderr
        elif result.returncode == 124:  # timeout 命令超时
            # 命令可能已执行，但超时了，通常表示成功
            return True, "命令执行完成（可能超时但应用已启动）", ""
        else:
            return False, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        # 即使超时，如果命令已发送，可能已经执行成功
        return True, "命令执行完成（可能超时但应用已启动）", ""
    except Exception as e:
        return False, "", str(e)


def run_hilog(level=None, private_off=False, flowctrl_off=False, grep_filter=None, timeout_sec=15):
    """
    查看设备 hilog 日志

    Args:
        level: 日志级别，如 'D' 表示 debug，None 表示默认级别
        private_off: 是否关闭对 private 信息的屏蔽（-p off）
        flowctrl_off: 是否先关闭 hilog 流量控制（param set hilog.flowctrl.proc.on false）
        grep_filter: 过滤条件，可为关键字或 pid，在主机侧用 grep 过滤；None 表示不过滤
        timeout_sec: 采集秒数，超时后结束（hilog 持续输出，用超时截断）

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    if flowctrl_off:
        cmd_disable = 'bash -c "source ~/.bashrc && hdc shell \\"param set hilog.flowctrl.proc.on false\\""'
        run_hdc_command(cmd_disable)

    hilog_args = ["hilog"]
    if level:
        hilog_args.append(f"-b {level}")
    if private_off:
        hilog_args.append("-p off")
    shell_cmd = " ".join(hilog_args)

    base_cmd = f'bash -c "source ~/.bashrc && timeout {timeout_sec} hdc shell \\"{shell_cmd}\\""'
    if grep_filter:
        filter_quoted = shlex.quote(grep_filter)
        base_cmd = f'bash -c "source ~/.bashrc && timeout {timeout_sec} hdc shell \\"{shell_cmd}\\" 2>&1 | grep --line-buffered {filter_quoted}"'
    try:
        result = subprocess.run(
            base_cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout_sec + 5
        )
        out = result.stdout or ""
        err = result.stderr or ""
        if result.returncode == 124:
            out = out or "(hilog 已按超时结束)"
        # 0=成功, 124=timeout 结束, 141=SIGPIPE（管道被 timeout 截断时 grep 可能收到）
        ok = result.returncode in (0, 124, 141)
        return ok, out, err
    except subprocess.TimeoutExpired:
        return False, "", f"hilog 采集超时（超过 {timeout_sec} 秒）"
    except Exception as e:
        return False, "", str(e)


# 设备错误日志目录：/data/log/faultlog，子目录 faultlogger / freeze / hilog / temp
FAULTLOG_BASE = "/data/log/faultlog"
FAULTLOG_SUBDIRS = ("faultlogger", "freeze", "hilog", "temp")


def run_faultlog_list(subdir=None):
    """
    列出设备 /data/log/faultlog 目录或其子目录内容（faultlogger、freeze、hilog、temp）。

    Args:
        subdir: 子目录名，None 表示列出根目录；可选 'faultlogger','freeze','hilog','temp'

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    if subdir:
        if subdir not in FAULTLOG_SUBDIRS:
            return False, "", f"无效子目录，可选: {', '.join(FAULTLOG_SUBDIRS)}"
        path = f"{FAULTLOG_BASE}/{subdir}"
    else:
        path = FAULTLOG_BASE
    path_quoted = shlex.quote(path)
    command = f'bash -c "source ~/.bashrc && hdc shell \\"ls -la {path_quoted}\\""'
    return run_hdc_command(command)


def run_faultlog_read(rel_path, tail_lines=None):
    """
    读取设备 /data/log/faultlog 下某文件内容（用于分析错误日志）。

    Args:
        rel_path: 相对于 FAULTLOG_BASE 的路径，如 'hilog/xxx.log' 或 'faultlogger/yyy'
        tail_lines: 仅输出最后 N 行；None 表示全部

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    rel_path = rel_path.lstrip("/")
    if ".." in rel_path or not rel_path:
        return False, "", "rel_path 不能为空或包含 .."
    full_path = f"{FAULTLOG_BASE}/{rel_path}"
    path_quoted = shlex.quote(full_path)
    if tail_lines is not None and tail_lines > 0:
        cmd_inner = f"tail -n {int(tail_lines)} {path_quoted}"
    else:
        cmd_inner = f"cat {path_quoted}"
    command = f'bash -c "source ~/.bashrc && hdc shell \\"{cmd_inner}\\""'
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=30
        )
        return result.returncode == 0, result.stdout or "", result.stderr or ""
    except subprocess.TimeoutExpired:
        return False, "", "读取超时"
    except Exception as e:
        return False, "", str(e)


def capture_hilog_after_aa_test(bundle_name: str) -> str:
    """
    在 aa test 命令结束后拉取一小段设备 hilog。Hypium / TestRunner 多数只写 hilog，
    故「命令之后的问题」需依赖本段才能在本机看到。

    环境变量：
    - OHOS_AA_TEST_SKIP_HILOG: 若为 1/true，本函数立即返回空串（由调用方跳过拼接）。
    - OHOS_AA_TEST_HILOG_SEC: 采集秒数，默认 20，范围约 5～120。
    - OHOS_AA_TEST_HILOG_GREP: 主机侧 grep -E 正则；未设时使用 bundle + Hypium 等关键字。
    """
    if os.environ.get("OHOS_AA_TEST_SKIP_HILOG", "").strip().lower() in (
        "1",
        "true",
        "yes",
        "on",
    ):
        return ""
    sec = (os.environ.get("OHOS_AA_TEST_HILOG_SEC") or "").strip()
    timeout_sec = int(sec) if sec.isdigit() else 20
    timeout_sec = max(5, min(120, timeout_sec))
    pattern = _aa_test_hilog_grep_pattern(bundle_name)
    ok, out, err = run_hilog(
        level="D",
        private_off=True,
        flowctrl_off=True,
        grep_filter=pattern,
        timeout_sec=timeout_sec,
    )
    text = ((out or "") + (err or "")).strip()
    if len(text) < 80 and pattern:
        ok2, out2, err2 = run_hilog(
            level=None,
            private_off=False,
            flowctrl_off=True,
            grep_filter=None,
            timeout_sec=min(12, timeout_sec),
        )
        wide = ((out2 or "") + (err2 or "")).strip()
        if wide:
            text = (
                "（grep 命中较少，以下为短时长、无过滤 hilog 前缀片段，完整请设备上 hilog）\n"
                + wide[:50000]
            )
    return text


def _aa_test_hilog_grep_pattern(bundle_name: str) -> str:
    pattern = (os.environ.get("OHOS_AA_TEST_HILOG_GREP") or "").strip()
    if pattern:
        return pattern
    safe_bn = re.escape(bundle_name)
    return (
        f"Hypium|{safe_bn}|OpenHarmonyTestRunner|testTag|"
        "ARKUI|Ace|JSAPP|Assertion|expect|FAIL|Error|AA|Ability"
    )


def _hilog_during_aa_worker(
    bundle_name: str,
    stop_event: threading.Event,
    chunks: list,
    lock: threading.Lock,
) -> None:
    """
    与 aa test 并行：周期性短采 hilog，便于看执行过程中哪里出错。
    """
    poll = (os.environ.get("OHOS_AA_TEST_HILOG_POLL_SEC") or "").strip()
    poll_sec = float(poll) if poll else 3.0
    poll_sec = max(1.0, min(30.0, poll_sec))
    sl = (os.environ.get("OHOS_AA_TEST_HILOG_SLICE_SEC") or "").strip()
    slice_sec = int(sl) if sl.isdigit() else 5
    slice_sec = max(2, min(15, slice_sec))
    pattern = _aa_test_hilog_grep_pattern(bundle_name)
    max_total = 800_000
    while not stop_event.is_set():
        ok, out, err = run_hilog(
            level="D",
            private_off=True,
            flowctrl_off=True,
            grep_filter=pattern,
            timeout_sec=slice_sec,
        )
        block = ((out or "") + (err or "")).strip()
        if block:
            stamp = time.strftime("%H:%M:%S")
            with lock:
                total = sum(len(c) for c in chunks)
                if total < max_total:
                    chunks.append(f"\n--- [执行中 hilog @{stamp}] ---\n{block}\n")
        if stop_event.wait(timeout=poll_sec):
            break


def _append_hilog_after_aa(bundle_name: str, base: str) -> str:
    """将 capture_hilog_after_aa_test 结果拼到 aa test 输出后。"""
    if os.environ.get("OHOS_AA_TEST_SKIP_HILOG", "").strip().lower() in (
        "1",
        "true",
        "yes",
        "on",
    ):
        return base
    snip = capture_hilog_after_aa_test(bundle_name)
    if not snip.strip():
        return (
            base
            + "\n\n--- 设备 hilog 摘录：未采到内容（无设备、grep 无匹配或 hilog 为空）；"
            "可设置 OHOS_AA_TEST_HILOG_GREP 放宽条件，或手动: hdc shell hilog ---\n"
        )
    return (
        base
        + "\n\n--- 设备 hilog 摘录（aa test 结束后自动抓取，见 capture_hilog_after_aa_test）---\n"
        + snip
    )


def run_aa_test_unittest(
    bundle_name: str,
    module_name: str = "entry",
    runner_path: str = "OpenHarmonyTestRunner",
    timeout_ms: int = 15000,
):
    """
    静态 XTS / Hypium 一体包：主模块内 TestRunner，通过 -s unittest 指定。

    官方文档（unittest-guidelines / aa-tool）要求 **-s unittest** 的取值为 **Runner 类名**，
    例如 ``OpenHarmonyTestRunner``，示例多为::
        aa test -b <bundle> -m entry -s timeout 10000 -s unittest OpenHarmonyTestRunner
    **注意 -s timeout 写在 -s unittest 之前**（与文档示例一致）；使用 ``/ets/testrunner/...``
    路径形式在部分版本上可能无法匹配 testRunner。

    若设备返回 10106002 等，可能与 **release 签名包不支持 aa test** 有关，需 debug 包或设备策略允许。

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    # 环境变量可覆盖 Runner 串（类名或设备侧路径）、框架侧 -s timeout（毫秒）
    runner = (os.environ.get("OHOS_AA_TEST_UNITTEST_RUNNER") or "").strip() or runner_path
    env_to = (os.environ.get("OHOS_AA_TEST_TIMEOUT_MS") or "").strip()
    if env_to.isdigit():
        timeout_ms = int(env_to)
    parts = [
        "aa",
        "test",
        "-b",
        bundle_name,
        "-m",
        module_name,
        "-s",
        "timeout",
        str(int(timeout_ms)),
        "-s",
        "unittest",
        runner,
    ]
    inner = " ".join(shlex.quote(p) for p in parts)
    # Hypium 常把详细进度打在 hilog，aa test 进程 stdout 可能很少或缓冲久；可选 tee 落盘便于排障
    log_file = (os.environ.get("OHOS_AA_TEST_LOG_FILE") or "").strip()
    if log_file:
        lp = shlex.quote(os.path.abspath(os.path.expanduser(log_file)))
        shell_inner = f"hdc shell {shlex.quote(inner)} 2>&1 | tee {lp}"
    else:
        shell_inner = f"hdc shell {shlex.quote(inner)}"
    command = f'bash -c "source ~/.bashrc && {shell_inner}"'
    # -s timeout 为设备侧框架毫秒；整包 Hypium 墙钟常远大于该值，子进程等待须单独给足余量
    env_wall = (os.environ.get("OHOS_AA_TEST_WALL_SEC") or "").strip()
    if env_wall.isdigit():
        wait_sec = max(60, int(env_wall))
    else:
        wait_sec = max(1800, int(timeout_ms) // 1000 + 1200)

    skip_all_hilog = os.environ.get("OHOS_AA_TEST_SKIP_HILOG", "").strip().lower() in (
        "1",
        "true",
        "yes",
        "on",
    )
    during_ok = os.environ.get("OHOS_AA_TEST_SKIP_HILOG_DURING", "").strip().lower() not in (
        "1",
        "true",
        "yes",
        "on",
    )
    if skip_all_hilog:
        during_ok = False

    chunks: list = []
    chunk_lock = threading.Lock()
    stop_event = threading.Event()
    worker = None  # threading.Thread
    if during_ok:
        worker = threading.Thread(
            target=_hilog_during_aa_worker,
            args=(bundle_name, stop_event, chunks, chunk_lock),
            daemon=True,
            name="hilog-during-aa-test",
        )
        worker.start()

    def _merge_during_into(base: str) -> str:
        with chunk_lock:
            during_txt = "".join(chunks)
        if not during_txt.strip():
            return base
        return (
            "--- 设备 hilog（aa test 执行过程中轮询；OHOS_AA_TEST_SKIP_HILOG_DURING=1 可关闭）---\n"
            + during_txt
            + "\n--- aa test 进程标准输出 ---\n"
            + base
        )

    try:
        # 合并 stderr 到 stdout（不能与 capture_output 同时使用）
        result = subprocess.run(
            command,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            timeout=wait_sec,
        )
        out = result.stdout or ""
        out = _merge_during_into(out)
        out = _append_hilog_after_aa(bundle_name, out)
        return result.returncode == 0, out, ""
    except subprocess.TimeoutExpired as e:
        partial = (e.stdout or "") + (e.stderr or "")
        partial = _merge_during_into(partial)
        partial = _append_hilog_after_aa(bundle_name, partial)
        hint = (
            "\n\n（说明）若执行中 hilog 仍少：可放宽 OHOS_AA_TEST_HILOG_GREP，或手动 hdc shell hilog。\n"
            "超时秒数用 OHOS_AA_TEST_WALL_SEC；落盘用 OHOS_AA_TEST_LOG_FILE。\n"
        )
        if not partial.strip():
            partial = (
                f"(子进程已超时 {wait_sec}s；capture 未收到 stdout/stderr 片段)\n"
                + hint
            )
        else:
            partial = (
                f"--- aa test 超时前进程输出（可能不完整）---\n{partial}\n"
                f"--- 超时 {wait_sec}s ---"
                + hint
            )
        return False, partial, f"aa test 子进程超时（>{wait_sec}s）"
    except Exception as e:
        return False, "", str(e)
    finally:
        stop_event.set()
        if worker is not None:
            worker.join(timeout=45)


def deploy_static_xts_test(
    project_dir: str,
    module_name: str = "entry",
    runner_path: str = "OpenHarmonyTestRunner",
    timeout_ms: int = 15000,
):
    """
    静态 XTS：仅替换安装主包 entry-default-signed.hap，再执行 run_aa_test_unittest。
    不要求 ohosTest 独立 HAP（与 deploy_and_run_test 不同）。

    Returns:
        tuple: (success: bool, log: str, error: str)
    """
    project_dir = os.path.abspath(project_dir)
    main_hap = os.path.join(
        project_dir,
        "entry",
        "build",
        "default",
        "outputs",
        "default",
        "entry-default-signed.hap",
    )
    if not os.path.isfile(main_hap):
        return False, "", f"主 signed HAP 不存在: {main_hap}"
    bn = _parse_bundle_name(project_dir)
    if not bn:
        return (
            False,
            "",
            "无法解析 bundleName，请确保 AppScope/app.json5 含 app.bundleName",
        )
    lines = []
    ok_u, out_u, err_u = uninstall_hap(bn)
    lines.append(f"卸载: {(out_u or err_u or '').strip() or 'ok'}")
    ok_i, out_i, err_i = replace_install_hap(main_hap)
    lines.append(f"安装主 HAP: {(out_i or err_i or '').strip()}")
    if not ok_i:
        return False, "\n".join(lines), err_i or out_i or "replace-install 失败"
    ok_t, out_t, err_t = run_aa_test_unittest(
        bn, module_name, runner_path, timeout_ms
    )
    lines.append("--- aa test (unittest) ---")
    lines.append((out_t or err_t or "").strip())
    if not ok_t:
        return False, "\n".join(lines), err_t or "aa test 失败"
    return True, "\n".join(lines), ""


def run_test(bundle_name, module_name, suite_name, case_name=None, timeout=15000):
    """
    运行测试用例

    Args:
        bundle_name: 应用包名，如 ohos.test.nativeproj46r
        module_name: 模块名，如 entry_test
        suite_name: 测试套件名，如 ActsAbilityTest
        case_name: 测试用例名，如 assertContain（可选，如果提供则运行指定用例，否则运行全量测试）
        timeout: 超时时间（毫秒），默认 15000

    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    # 构建测试命令
    if case_name:
        # 运行指定测试用例
        test_class = f"{suite_name}#{case_name}"
    else:
        # 运行全量测试
        test_class = suite_name
    
    command = f'bash -c "source ~/.bashrc && hdc shell \\"aa test -b {bundle_name} -m {module_name} -s unittest OpenHarmonyTestRunner -s class {test_class} -s timeout {timeout}\\""'
    
    try:
        # 测试可能需要较长时间，设置更长的超时
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout / 1000 + 30  # 转换为秒，并额外增加30秒缓冲
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", f"测试执行超时（超过 {timeout/1000} 秒）"
    except Exception as e:
        return False, "", str(e)


def dump_all_abilities():
    """
    查看设备上所有的 ability（包括前台和后台）
    
    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    command = 'bash -c "source ~/.bashrc && hdc shell \\"aa dump -a\\""'
    return run_hdc_command(command)


def dump_running_abilities():
    """
    查看设备上正在运行的 ability（应用进程）
    
    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    command = 'bash -c "source ~/.bashrc && hdc shell \\"aa dump -r\\""'
    return run_hdc_command(command)


def parse_ability_dump(output):
    """
    解析 aa dump -a 或 aa dump -r 的输出，提取关键信息
    
    Args:
        output: aa dump 命令的原始输出
        
    Returns:
        dict: 包含解析后的信息
    """
    result = {
        'abilities': [],
        'running_apps': [],
        'foreground_apps': []
    }
    
    current_ability = None
    in_ability_record = False
    in_app_running_record = False
    current_app = None
    in_mission = False
    
    for line in output.split('\n'):
        original_line = line
        line = line.strip()
        
        # 跳过空行和注释
        if not line or line.startswith('#'):
            continue
        
        # 检测是否进入新的 Mission 或 AbilityRecord
        if 'AbilityRecord ID #' in line:
            if current_ability:
                result['abilities'].append(current_ability)
            current_ability = {}
            in_ability_record = True
            try:
                current_ability['ability_record_id'] = line.split('AbilityRecord ID #')[1].split()[0]
            except:
                pass
        
        # 解析 AbilityRecord 的字段（可能在缩进的行中）
        if in_ability_record and current_ability:
            if 'bundle name [' in line:
                try:
                    current_ability['bundle_name'] = line.split('bundle name [')[1].split(']')[0]
                except:
                    pass
            elif 'main name [' in line:
                try:
                    current_ability['main_name'] = line.split('main name [')[1].split(']')[0]
                except:
                    pass
            elif 'ability type [' in line:
                try:
                    current_ability['ability_type'] = line.split('ability type [')[1].split(']')[0]
                except:
                    pass
            elif 'app state #' in line:
                try:
                    app_state = line.split('app state #')[1].split()[0]
                    current_ability['app_state'] = app_state
                    if app_state == 'FOREGROUND':
                        result['foreground_apps'].append(current_ability.copy())
                except:
                    pass
            elif 'state #' in line and 'app state' not in line and 'AbilityRecord' not in line:
                try:
                    state = line.split('state #')[1].split()[0]
                    current_ability['state'] = state
                    # start time 可能在同一行
                    if 'start time [' in line:
                        try:
                            current_ability['start_time'] = line.split('start time [')[1].split(']')[0]
                        except:
                            pass
                except:
                    pass
            elif 'start time [' in line:
                try:
                    current_ability['start_time'] = line.split('start time [')[1].split(']')[0]
                except:
                    pass
            elif 'app name [' in line:
                try:
                    current_ability['app_name'] = line.split('app name [')[1].split(']')[0]
                except:
                    pass
            
            # 检测是否离开 AbilityRecord（遇到新的 Mission 或其他主要部分）
            if line.startswith('MissionList') or line.startswith('ExtensionRecords') or line.startswith('AppRunningRecords'):
                if current_ability:
                    result['abilities'].append(current_ability)
                current_ability = None
                in_ability_record = False
        
        # 解析 AppRunningRecords
        if 'AppRunningRecord ID #' in line:
            if current_app:
                result['running_apps'].append(current_app)
            current_app = {}
            in_app_running_record = True
            try:
                current_app['record_id'] = line.split('AppRunningRecord ID #')[1].split()[0]
            except:
                pass
        
        if in_app_running_record and current_app:
            if 'process name [' in line:
                try:
                    current_app['process_name'] = line.split('process name [')[1].split(']')[0]
                except:
                    pass
            if 'pid #' in line:
                try:
                    current_app['pid'] = line.split('pid #')[1].split()[0]
                except:
                    pass
            if 'uid #' in line:
                try:
                    current_app['uid'] = line.split('uid #')[1].split()[0]
                except:
                    pass
            if 'state #' in line and 'AppRunningRecord' not in line:
                try:
                    current_app['state'] = line.split('state #')[1].split()[0]
                except:
                    pass
            
            # 检测是否离开 AppRunningRecord（遇到新的主要部分）
            if line.startswith('ExtensionRecords') or line.startswith('PendingWantRecords') or (line.startswith('AppRunningRecord ID #') and current_app.get('record_id')):
                if current_app and current_app.get('process_name'):
                    result['running_apps'].append(current_app)
                current_app = {}
                in_app_running_record = False
                if 'AppRunningRecord ID #' in line:
                    in_app_running_record = True
                    try:
                        current_app = {'record_id': line.split('AppRunningRecord ID #')[1].split()[0]}
                    except:
                        current_app = {}
    
    # 添加最后一个
    if current_ability:
        result['abilities'].append(current_ability)
    if current_app:
        result['running_apps'].append(current_app)
    
    return result


def format_abilities_as_markdown(parsed_data, show_all=False):
    """
    将解析后的 ability 信息格式化为 Markdown
    
    Args:
        parsed_data: parse_ability_dump 返回的字典
        show_all: 是否显示所有 ability（包括后台），默认只显示前台
        
    Returns:
        str: Markdown 格式的字符串
    """
    markdown = "## 设备应用状态\n\n"
    
    # 前台应用
    if parsed_data['foreground_apps']:
        markdown += "### 前台应用\n\n"
        markdown += f"共找到 **{len(parsed_data['foreground_apps'])}** 个前台应用：\n\n"
        markdown += "| 序号 | Bundle Name | Ability Name | Type | State | AbilityRecord ID | Start Time |\n"
        markdown += "|------|-------------|--------------|------|-------|------------------|------------|\n"
        
        for index, app in enumerate(parsed_data['foreground_apps'], 1):
            bundle_name = app.get('bundle_name', 'N/A')
            main_name = app.get('main_name', 'N/A')
            ability_type = app.get('ability_type', 'N/A')
            app_state = app.get('app_state', 'N/A')
            ability_id = app.get('ability_record_id', 'N/A')
            start_time = app.get('start_time', 'N/A')
            markdown += f"| {index} | `{bundle_name}` | `{main_name}` | {ability_type} | {app_state} | {ability_id} | {start_time} |\n"
        markdown += "\n"
    else:
        markdown += "### 前台应用\n\n未找到前台应用。\n\n"
    
    # 运行中的应用进程
    if parsed_data['running_apps']:
        markdown += "### 运行中的应用进程\n\n"
        markdown += f"共找到 **{len(parsed_data['running_apps'])}** 个运行中的应用进程：\n\n"
        markdown += "| 序号 | Process Name | PID | UID | State |\n"
        markdown += "|------|--------------|-----|-----|-------|\n"
        
        for index, app in enumerate(parsed_data['running_apps'], 1):
            process_name = app.get('process_name', 'N/A')
            pid = app.get('pid', 'N/A')
            uid = app.get('uid', 'N/A')
            state = app.get('state', 'N/A')
            markdown += f"| {index} | `{process_name}` | {pid} | {uid} | {state} |\n"
        markdown += "\n"
    else:
        markdown += "### 运行中的应用进程\n\n未找到运行中的应用进程。\n\n"
    
    # 所有 ability（如果 show_all=True）
    if show_all and parsed_data['abilities']:
        markdown += "### 所有 Ability（包括后台）\n\n"
        markdown += f"共找到 **{len(parsed_data['abilities'])}** 个 ability：\n\n"
        markdown += "| 序号 | Bundle Name | Ability Name | Type | App State | State | AbilityRecord ID |\n"
        markdown += "|------|-------------|--------------|------|-----------|-------|------------------|\n"
        
        for index, app in enumerate(parsed_data['abilities'], 1):
            bundle_name = app.get('bundle_name', 'N/A')
            main_name = app.get('main_name', 'N/A')
            ability_type = app.get('ability_type', 'N/A')
            app_state = app.get('app_state', 'N/A')
            state = app.get('state', 'N/A')
            ability_id = app.get('ability_record_id', 'N/A')
            markdown += f"| {index} | `{bundle_name}` | `{main_name}` | {ability_type} | {app_state} | {state} | {ability_id} |\n"
        markdown += "\n"
    
    return markdown


def format_apps_as_markdown(apps):
    """
    将应用列表格式化为 Markdown 格式
    
    Args:
        apps: 应用 bundleName 列表
        
    Returns:
        str: Markdown 格式的字符串
    """
    if not apps:
        return "## 已安装应用\n\n未找到已安装的应用。\n"
    
    markdown = "## 已安装应用\n\n"
    markdown += f"共找到 **{len(apps)}** 个已安装应用：\n\n"
    markdown += "| 序号 | Bundle Name |\n"
    markdown += "|------|-------------|\n"
    
    for index, app in enumerate(apps, 1):
        markdown += f"| {index} | `{app}` |\n"
    
    markdown += "\n### 应用列表（纯文本）\n\n"
    for app in apps:
        markdown += f"- `{app}`\n"
    
    return markdown


def main():
    """主函数"""
    parser = argparse.ArgumentParser(
        description='OpenHarmony HDC 工具 - 设备应用管理（查看/安装/卸载 HAP，查看前台应用，LED 控制等）'
    )
    parser.add_argument(
        'action',
        choices=[
            'list-apps', 'apps', 'uninstall', 'install', 'replace-install', 'install-project',
            'deploy-test', 'static-deploy-test', 'foreground', 'fg', 'running', 'dump-all', 'dump-running',
            'force-stop', 'stop', 'start', 'test', 'hilog', 'logs', 'faultlog', 'error-log',
            'led', 'screenshot', 'snapshot', 'screenshot-app', 'snap-app',
            'layout', 'dump-layout', 'wifi-kaihong', 'wifi-push-wificommand', 'wifi-check-wificommand',
        ],
        help='操作：wifi-kaihong=开 Wi‑Fi 连 KaiHong；wifi-push-wificommand=推送 wificommand；wifi-check-wificommand=检查设备/本机产物',
    )
    parser.add_argument(
        'target',
        nargs='?',
        help='卸载/安装等见各子命令；led 填节点名；screenshot/snapshot/layout 填本机保存路径；screenshot-app 填应用别名或包名',
    )
    parser.add_argument(
        'screenshot_app_local_path',
        nargs='?',
        default=None,
        metavar='LOCAL_JPEG',
        help='screenshot-app：本机保存路径（可选）。led：第三参写 on/off（因 argparse 顺序，`led green off` 中 off 占此位）',
    )
    parser.add_argument(
        'led_onoff',
        nargs='?',
        choices=['on', 'off'],
        help='仅与 led 联用：on=写入 brightness 1，off=写入 brightness 0。示例: ohhdc.py led red on'
    )
    parser.add_argument(
        '--ability',
        '-a',
        dest='ability_name',
        help='启动应用时指定 Ability（如 EntryAbility）；与 start、screenshot-app（非预设别名时必填）联用'
    )
    parser.add_argument(
        '--module',
        '-m',
        dest='module_name',
        help='运行测试时指定模块名（如 entry_test 或静态 XTS 的 entry），与 test / static-deploy-test 一起使用'
    )
    parser.add_argument(
        '--unittest-runner',
        dest='unittest_runner',
        default='OpenHarmonyTestRunner',
        help='static-deploy-test：-s unittest 后的 Runner（与文档一致多为类名 OpenHarmonyTestRunner；路径形式可设 OHOS_AA_TEST_UNITTEST_RUNNER）',
    )
    parser.add_argument(
        '--suite',
        '-s',
        dest='suite_name',
        help='运行测试时指定测试套件名（如 ActsAbilityTest），与 test 命令一起使用'
    )
    parser.add_argument(
        '--case',
        '-c',
        dest='case_name',
        help='运行测试时指定测试用例名（如 assertContain），与 test 命令一起使用。如果不提供，则运行全量测试'
    )
    parser.add_argument(
        '--timeout',
        '-t',
        dest='timeout',
        type=int,
        default=15000,
        help='运行测试时的超时时间（毫秒），默认 15000'
    )
    parser.add_argument(
        '--format',
        choices=['markdown', 'md', 'plain', 'list'],
        default='markdown',
        help='仅对 apps 生效：输出格式 markdown/md 或 plain/list'
    )
    parser.add_argument(
        '--level',
        '-b',
        dest='hilog_level',
        metavar='LEVEL',
        help='hilog/logs 时日志级别，如 D 表示 debug'
    )
    parser.add_argument(
        '--private-off',
        '-p',
        dest='hilog_private_off',
        action='store_true',
        help='hilog/logs 时关闭对 private 信息的屏蔽（-p off）'
    )
    parser.add_argument(
        '--flowctrl-off',
        '-f',
        dest='hilog_flowctrl_off',
        action='store_true',
        help='hilog/logs 时先关闭 hilog 流量控制'
    )
    parser.add_argument(
        '--grep',
        '-g',
        dest='hilog_grep',
        metavar='PATTERN',
        help='hilog/logs 时过滤条件（关键字或 pid），在主机侧用 grep 过滤'
    )
    parser.add_argument(
        '--hilog-timeout',
        dest='hilog_timeout',
        type=int,
        default=15,
        metavar='SEC',
        help='hilog/logs 时采集秒数，默认 15'
    )
    parser.add_argument(
        '--cat',
        dest='faultlog_cat',
        metavar='FILE',
        help='faultlog/error-log 时读取该文件内容（相对 data/log/faultlog 的路径，如 hilog/xxx.log）'
    )
    parser.add_argument(
        '--tail',
        dest='faultlog_tail',
        type=int,
        metavar='N',
        help='faultlog/error-log 与 --cat 同时使用时，仅输出文件最后 N 行'
    )
    parser.add_argument(
        '--device-file',
        dest='remote_device_file',
        metavar='REMOTE_PATH',
        default=None,
        help='screenshot：设备端截图路径（默认 /data/local/tmp/ohhdc_screenshot.jpeg）；layout：uitest -p 设备端路径（默认 /data/local/tmp/ohhdc_uitest_layout.json）',
    )
    parser.add_argument(
        '--display-id',
        type=int,
        dest='hdc_display_id',
        default=None,
        metavar='N',
        help='screenshot/screenshot-app：snapshot_display -i；layout：uitest dumpLayout -d',
    )
    parser.add_argument(
        '--app-delay',
        type=float,
        default=2.0,
        dest='app_start_delay',
        metavar='SEC',
        help='screenshot-app：aa start 成功后等待秒数再截图，默认 2.0',
    )
    parser.add_argument(
        '--bundle',
        dest='uitest_bundle',
        default=None,
        metavar='NAME',
        help='layout/dump-layout：uitest dumpLayout -b 目标窗口包名',
    )
    parser.add_argument(
        '--window-id',
        dest='uitest_window_id',
        default=None,
        metavar='ID',
        help='layout/dump-layout：uitest dumpLayout -w',
    )
    parser.add_argument(
        '--layout-independent',
        action='store_true',
        help='layout：uitest dumpLayout -i（不合并窗口等）',
    )
    parser.add_argument(
        '--layout-font',
        action='store_true',
        help='layout：uitest dumpLayout -a 包含字体属性',
    )
    parser.add_argument(
        '--layout-merge',
        choices=['true', 'false'],
        default=None,
        help='layout：uitest dumpLayout -m',
    )
    parser.add_argument(
        '--layout-extend',
        dest='uitest_extend_attr',
        default=None,
        metavar='NAME',
        help='layout：uitest dumpLayout -e 扩展属性',
    )
    parser.add_argument(
        '--wifi-ssid',
        default=DEFAULT_WIFI_KAIHONG_SSID,
        help=f'wifi-kaihong：SSID，默认 {DEFAULT_WIFI_KAIHONG_SSID}',
    )
    parser.add_argument(
        '--wifi-password',
        default=DEFAULT_WIFI_KAIHONG_PASSWORD,
        help='wifi-kaihong：密码，默认 KaiHong@888',
    )
    parser.add_argument(
        '--no-wifi-status',
        action='store_true',
        dest='wifi_no_status',
        help='wifi-kaihong：连接成功后不执行 wifigetstatus',
    )
    parser.add_argument(
        '--ohos-src',
        default=None,
        help='wifi-push / wifi-check / --push-wificommand：OpenHarmony 源码根（含 build.sh），或设环境变量 OHOS_SRC',
    )
    parser.add_argument(
        '--wifi-product',
        default=DEFAULT_WIFI_PRODUCT,
        help=f'在 out/<product> 下查找 wificommand，默认 {DEFAULT_WIFI_PRODUCT}',
    )
    parser.add_argument(
        '--wificommand-remote',
        default=DEFAULT_WIFICOMMAND_REMOTE_PATH,
        help=f'推送到设备上的路径，默认 {DEFAULT_WIFICOMMAND_REMOTE_PATH}',
    )
    parser.add_argument(
        '--push-wificommand',
        action='store_true',
        dest='push_wificommand',
        help='wifi-kaihong：执行前先推送本机编译的 wificommand 到 --wificommand-remote（需 --ohos-src 或 OHOS_SRC）',
    )
    parser.add_argument(
        '--wifi-device-bin',
        default=None,
        metavar='PATH_OR_NAME',
        help='设备侧 wificommand：命令名或绝对路径；默认 wificommand（依赖 PATH）。与 --push-wificommand 连用时以推送路径为准',
    )
    args = parser.parse_args()

    if args.action == 'wifi-check-wificommand':
        print("=== 设备侧（wificommand 是否存在）===\n")
        checks = [
            ("PATH", "command -v wificommand 2>/dev/null || echo NOT_IN_PATH"),
            ("/system/bin", "ls -la /system/bin/wificommand 2>&1"),
            ("常用临时路径", f"ls -la {DEFAULT_WIFICOMMAND_REMOTE_PATH} 2>&1"),
        ]
        for title, rcmd in checks:
            ok, o, e = run_hdc_shell_remote(rcmd, timeout_sec=20)
            text = (o or e or "").strip() or "(无输出)"
            print(f"[{title}]\n{text}\n")
        src = infer_ohos_src_root(args.ohos_src)
        print("=== 本机编译产物（out 目录）===\n")
        if src:
            found = find_wificommand_host_binary(src, args.wifi_product)
            print(f"OHOS_SRC={src}")
            print(f"product={args.wifi_product}")
            print(f"查找结果: {found or '未找到可执行文件'}")
            if not found:
                print(
                    f"\n可执行: cd {src} && ./build.sh --product-name {args.wifi_product} "
                    f"--build-target wificommand"
                )
        else:
            print("未推断源码根：请传 --ohos-src 或设置 OHOS_SRC")
        print(
            "\n说明：wificlitools 的 GN **未** 设置 install_enable，默认 **不会** 进 system 镜像；"
            "需单独编 wificommand 后使用 **wifi-push-wificommand** 或 **wifi-kaihong --push-wificommand**。"
        )
        return

    if args.action == 'wifi-push-wificommand':
        src = infer_ohos_src_root(args.ohos_src)
        ok_push, msg = run_wifi_push_wificommand(
            local_bin=args.target,
            ohos_src=src,
            product=args.wifi_product,
            remote_path=args.wificommand_remote,
        )
        print(msg)
        if ok_push:
            r = args.wificommand_remote
            print(f"\n✓ 设备上可执行: {r}")
            print(f"  示例: hdc shell \"{r} wifienable\"")
        else:
            print("\n❌ 推送失败。", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'wifi-kaihong':
        ssid = args.wifi_ssid
        password = args.wifi_password
        pwd_hint = "(空，开放热点)" if not password else "********"

        device_bin = args.wifi_device_bin or WIFICOMMAND_BIN_DEFAULT
        if args.push_wificommand:
            src = infer_ohos_src_root(args.ohos_src)
            if src is None:
                print(
                    "❌ --push-wificommand 需要源码根：请传 --ohos-src 或设置环境变量 OHOS_SRC",
                    file=sys.stderr,
                )
                sys.exit(1)
            ok_push, msg = run_wifi_push_wificommand(
                local_bin=None,
                ohos_src=src,
                product=args.wifi_product,
                remote_path=args.wificommand_remote,
            )
            print(msg)
            if not ok_push:
                sys.exit(1)
            device_bin = args.wificommand_remote

        print(
            f"→ 使用设备侧 `{device_bin}`：wifienable，然后 "
            f"wificonnect ssid={ssid!r} password={pwd_hint}"
        )
        ok, steps_log = wifi_wificommand_enable_and_connect(
            ssid,
            password,
            wificommand_bin=device_bin,
            fetch_status=not args.wifi_no_status,
        )
        for step_name, step_ok, out, err in steps_log:
            mark = "✓" if step_ok else "❌"
            print(f"{mark} {step_name}")
            if out.strip():
                print(out.rstrip())
            if err.strip():
                print(err.rstrip(), file=sys.stderr)
        if ok:
            print(
                "\n✓ wifi-kaihong：已执行 wifienable 与 wificonnect；"
                "若未连上请检查设备是否包含 wificommand、热点是否可达、密码与加密方式（开放网可省略密码参数见 wificlitools 说明）。"
            )
        else:
            print(
                "\n❌ wifi-kaihong：wifienable 或 wificonnect 失败；"
                "请确认镜像已安装 wificommand（wificlitools），且 hdc 已连接设备。",
                file=sys.stderr,
            )
            sys.exit(1)
        return

    if args.action == 'led':
        if not args.target or args.target not in LED_SYSFS_NAMES:
            print(
                "❌ 错误: led 请指定 sysfs 节点名 red / green / blue，以及 on 或 off。\n"
                "  示例: ohhdc.py led red on    # 等价 hdc shell \"echo 1 > /sys/class/leds/red/brightness\"\n"
                "        ohhdc.py led red off\n"
                "        ohhdc.py led green on\n"
                "        ohhdc.py led blue off",
                file=sys.stderr,
            )
            sys.exit(1)
        # 第三位置参数是 screenshot 占位，故 `led green off` 中 off 落在 screenshot_app_local_path
        led_state = args.led_onoff
        if led_state not in ('on', 'off') and args.screenshot_app_local_path in ('on', 'off'):
            led_state = args.screenshot_app_local_path
        if led_state not in ('on', 'off'):
            print(
                "❌ 错误: led 请再指定 on 或 off，例如: ohhdc.py led green off",
                file=sys.stderr,
            )
            sys.exit(1)
        val = 1 if led_state == 'on' else 0
        success, out, err = set_device_led(args.target, val)
        if success:
            state_zh = "开" if val == 1 else "关"
            print(
                f"✓ LED `{args.target}` 已{state_zh}（brightness={val}）\n"
                f"  等价: hdc shell \"echo {val} > /sys/class/leds/{args.target}/brightness\""
            )
            if out and out.strip():
                print(out)
        else:
            print(f"❌ LED 设置失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action in ('screenshot', 'snapshot'):
        default_snap = f"ohhdc_screenshot_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpeg"
        local_out = resolve_ohhdc_artifact_path(
            OH_HDC_SCREENSHOT_DIR,
            args.target,
            default_snap,
        )
        ok, log, err, resolved = take_screenshot_to_local(
            local_out,
            device_path=args.remote_device_file,
            display_id=args.hdc_display_id,
        )
        if log:
            print(log)
        if ok:
            print(f"\n✓ 截图已保存到: {resolved}")
        else:
            print(f"\n❌ 截图失败: {err}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action in ('screenshot-app', 'snap-app'):
        if not args.target:
            print(
                "❌ 错误: 请提供应用别名或包名，例如: "
                "ohhdc.py screenshot-app etsclock\n"
                "  完整包名需带 Ability: "
                "ohhdc.py screenshot-app ohos.samples.xxx --ability EntryAbility",
                file=sys.stderr,
            )
            sys.exit(1)
        resolved_pair, err_msg = resolve_screenshot_app_bundle_ability(
            args.target, args.ability_name
        )
        if resolved_pair is None:
            print(f"❌ 错误: {err_msg}", file=sys.stderr)
            sys.exit(1)
        bundle_name, ability_name = resolved_pair
        print(f"→ 启动应用: {bundle_name} / {ability_name}")
        ok_start, out_start, err_start = start_app(bundle_name, ability_name)
        if out_start and out_start.strip():
            print(out_start.strip())
        if not ok_start:
            print(f"❌ 启动应用失败: {err_start or out_start}", file=sys.stderr)
            sys.exit(1)
        delay_sec = float(args.app_start_delay)
        if delay_sec > 0:
            print(f"→ 等待 {delay_sec}s 后截图 …")
            time.sleep(delay_sec)
        safe_tag = re.sub(r"[^\w\-.]", "_", args.target.strip())[:80]
        default_snap = f"screenshot_app_{safe_tag}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.jpeg"
        local_out = resolve_ohhdc_artifact_path(
            OH_HDC_SCREENSHOT_DIR,
            args.screenshot_app_local_path,
            default_snap,
        )
        ok, log, err, resolved = take_screenshot_to_local(
            local_out,
            device_path=args.remote_device_file,
            display_id=args.hdc_display_id,
        )
        if log:
            print(log)
        if ok:
            print(f"\n✓ [{bundle_name}] 截图已保存到: {resolved}")
            print(
                "  说明: 与 snapshot_display 一致为整屏位图；多窗同屏时其它窗口可能入镜。"
                "仅裁某一窗口请配合 layout bounds 在本机裁剪。"
            )
        else:
            print(f"\n❌ 截图失败: {err}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action in ('layout', 'dump-layout'):
        default_json = f"uitest_layout_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        local_out = resolve_ohhdc_artifact_path(
            OH_HDC_LAYOUT_DIR,
            args.target,
            default_json,
        )
        merge_bool = None
        if args.layout_merge is not None:
            merge_bool = args.layout_merge == "true"
        ok, log, err, resolved = dump_uitest_layout_to_local(
            local_out,
            device_path=args.remote_device_file,
            display_id=args.hdc_display_id,
            bundle=args.uitest_bundle,
            window_id=args.uitest_window_id,
            merge_windows=merge_bool,
            include_font_attrs=args.layout_font,
            independent_nodes=args.layout_independent,
            extend_attr=args.uitest_extend_attr,
        )
        if log:
            print(log)
        if ok:
            print(f"\n✓ 当前页面 layout 已保存到: {resolved}")
        else:
            print(f"\n❌ layout 导出失败: {err}", file=sys.stderr)
            sys.exit(1)
        return
    
    if args.action in ['list-apps', 'apps']:
        success, apps, error = list_installed_apps()
        if not success:
            print(f"❌ 错误: {error}", file=sys.stderr)
            sys.exit(1)
        if args.format in ['markdown', 'md']:
            print(format_apps_as_markdown(apps))
        else:
            if apps:
                print(f"已安装应用（共 {len(apps)} 个）：\n")
                for app in apps:
                    print(f"  - {app}")
            else:
                print("未找到已安装的应用。")
        return

    if args.action == 'uninstall':
        if not args.target:
            print("❌ 错误: 卸载请提供 bundleName，如: ohhdc.py uninstall com.example.p7zipTest", file=sys.stderr)
            sys.exit(1)
        success, out, err = uninstall_hap(args.target)
        if success:
            print(f"✓ 已卸载: {args.target}\n{out}".strip() or f"✓ 已卸载: {args.target}")
        else:
            print(f"❌ 卸载失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'install':
        if not args.target:
            print("❌ 错误: 安装请提供 HAP 文件路径，如: ohhdc.py install /path/to/app-signed.hap", file=sys.stderr)
            sys.exit(1)
        success, out, err = install_hap(args.target)
        if success:
            print(f"✓ 安装成功: {args.target}\n{out}".strip() or f"✓ 安装成功: {args.target}")
        else:
            print(f"❌ 安装失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'replace-install':
        if not args.target:
            print("❌ 错误: 替换安装请提供 HAP 文件路径，如: ohhdc.py replace-install /path/to/app-signed.hap", file=sys.stderr)
            sys.exit(1)
        success, out, err = replace_install_hap(args.target)
        if success:
            print(f"✓ 替换安装成功: {args.target}\n{out}".strip() or f"✓ 替换安装成功: {args.target}")
        else:
            print(f"❌ 替换安装失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'install-project':
        if not args.target:
            print("❌ 错误: install-project 请提供项目根目录，如: ohhdc.py install-project /path/to/NativeProj46R", file=sys.stderr)
            sys.exit(1)
        success, out, err = install_project_haps(args.target)
        if success:
            print(f"✓ 项目安装成功: {args.target}\n{out}".strip() or f"✓ 项目安装成功: {args.target}")
        else:
            print(f"❌ 项目安装失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'static-deploy-test':
        if not args.target:
            print(
                "❌ 错误: static-deploy-test 请提供项目根目录，如: "
                "ohhdc.py static-deploy-test /path/to/static_xts_project",
                file=sys.stderr,
            )
            sys.exit(1)
        success, out, err = deploy_static_xts_test(
            args.target,
            module_name=(args.module_name or "entry").strip(),
            runner_path=(args.unittest_runner or "OpenHarmonyTestRunner").strip(),
            timeout_ms=int(args.timeout),
        )
        if success:
            print(
                f"✓ static-deploy-test 完成: {args.target}\n{out}".strip()
                or f"✓ static-deploy-test 完成: {args.target}"
            )
        else:
            print(f"❌ static-deploy-test 失败: {err or out}", file=sys.stderr)
            if out:
                print(out, file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'deploy-test':
        if not args.target:
            print("❌ 错误: deploy-test 请提供项目根目录，如: ohhdc.py deploy-test /path/to/NativeProj46R", file=sys.stderr)
            sys.exit(1)
        test_class = args.suite_name.strip() if args.suite_name else None
        success, out, err = deploy_and_run_test(
            args.target,
            bundle_name=None,
            module_name=args.module_name or 'entry_test',
            test_class=test_class,
            timeout=args.timeout,
        )
        if success:
            print(f"✓ 部署运行测试完成: {args.target}\n{out}".strip() or f"✓ 部署运行测试完成: {args.target}")
        else:
            print(f"❌ 部署运行测试失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action in ['foreground', 'fg', 'dump-all']:
        # 查看所有 ability（包括前台和后台）
        success, output, error = dump_all_abilities()
        if not success:
            print(f"❌ 错误: {error or output}", file=sys.stderr)
            sys.exit(1)
        
        parsed = parse_ability_dump(output)
        show_all = (args.action == 'dump-all')
        print(format_abilities_as_markdown(parsed, show_all=show_all))
        return

    if args.action in ['running', 'dump-running']:
        # 查看运行中的 ability
        success, output, error = dump_running_abilities()
        if not success:
            print(f"❌ 错误: {error or output}", file=sys.stderr)
            sys.exit(1)
        
        # dump-running 输出格式可能不同，先尝试解析
        parsed = parse_ability_dump(output)
        print(format_abilities_as_markdown(parsed, show_all=False))
        return

    if args.action in ['force-stop', 'stop']:
        if not args.target:
            print("❌ 错误: 强制关闭请提供 bundleName，如: ohhdc.py force-stop com.ohos.settings", file=sys.stderr)
            sys.exit(1)
        success, out, err = force_stop_app(args.target)
        if success:
            print(f"✓ 已强制关闭: {args.target}\n{out}".strip() or f"✓ 已强制关闭: {args.target}")
        else:
            print(f"❌ 强制关闭失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'start':
        if not args.target:
            print("❌ 错误: 启动应用请提供 bundleName，如: ohhdc.py start com.ohos.settings --ability EntryAbility", file=sys.stderr)
            sys.exit(1)
        if not args.ability_name:
            print("❌ 错误: 启动应用请提供 Ability 名称，使用 --ability 或 -a 参数，如: ohhdc.py start com.ohos.settings --ability EntryAbility", file=sys.stderr)
            sys.exit(1)
        success, out, err = start_app(args.target, args.ability_name)
        if success:
            print(f"✓ 已启动应用: {args.target} (Ability: {args.ability_name})\n{out}".strip() or f"✓ 已启动应用: {args.target} (Ability: {args.ability_name})")
        else:
            print(f"❌ 启动应用失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action in ['faultlog', 'error-log']:
        if args.faultlog_cat:
            success, out, err = run_faultlog_read(args.faultlog_cat, tail_lines=args.faultlog_tail)
            if success:
                print(out)
            else:
                print(f"❌ 读取失败: {err or out}", file=sys.stderr)
                sys.exit(1)
        else:
            success, out, err = run_faultlog_list(subdir=args.target)
            if success:
                title = f"{FAULTLOG_BASE}" + (f"/{args.target}" if args.target else "")
                print(f"=== {title} ===\n")
                print(out)
            else:
                print(f"❌ 列出失败: {err or out}", file=sys.stderr)
                sys.exit(1)
        return

    if args.action in ['hilog', 'logs']:
        grep_filter = args.hilog_grep or args.target
        success, out, err = run_hilog(
            level=args.hilog_level,
            private_off=args.hilog_private_off,
            flowctrl_off=args.hilog_flowctrl_off,
            grep_filter=grep_filter,
            timeout_sec=args.hilog_timeout
        )
        if success:
            if out:
                print(out)
            if err:
                print(err, file=sys.stderr)
            if not out and not err and grep_filter:
                print(f"(未匹配到包含 {grep_filter!r} 的日志)")
        else:
            print(f"❌ hilog 失败: {err or out}", file=sys.stderr)
            sys.exit(1)
        return

    if args.action == 'test':
        if not args.target:
            print("❌ 错误: 运行测试请提供 bundleName，如: ohhdc.py test ohos.test.nativeproj46r --module entry_test --suite ActsAbilityTest", file=sys.stderr)
            sys.exit(1)
        if not args.module_name:
            print("❌ 错误: 运行测试请提供模块名，使用 --module 或 -m 参数，如: ohhdc.py test ohos.test.nativeproj46r --module entry_test --suite ActsAbilityTest", file=sys.stderr)
            sys.exit(1)
        if not args.suite_name:
            print("❌ 错误: 运行测试请提供测试套件名，使用 --suite 或 -s 参数，如: ohhdc.py test ohos.test.nativeproj46r --module entry_test --suite ActsAbilityTest", file=sys.stderr)
            sys.exit(1)
        
        test_type = "指定测试用例" if args.case_name else "全量测试"
        print(f"开始运行测试: {args.target} ({test_type})...")
        print(f"  模块: {args.module_name}")
        print(f"  测试套件: {args.suite_name}")
        if args.case_name:
            print(f"  测试用例: {args.case_name}")
        print(f"  超时时间: {args.timeout} 毫秒\n")
        
        success, out, err = run_test(args.target, args.module_name, args.suite_name, args.case_name, args.timeout)
        if success:
            print(f"✓ 测试执行完成: {args.target}\n")
            if out:
                print(out)
            if err:
                print(err, file=sys.stderr)
        else:
            print(f"❌ 测试执行失败: {args.target}", file=sys.stderr)
            if err:
                print(f"错误信息: {err}", file=sys.stderr)
            if out:
                print(f"输出信息: {out}", file=sys.stderr)
            sys.exit(1)
        return

    parser.print_help()
    sys.exit(1)


if __name__ == '__main__':
    main()
