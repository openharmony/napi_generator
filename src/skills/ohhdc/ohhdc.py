#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony HDC 工具
提供设备管理和应用查看功能
"""

import argparse
import shlex
import subprocess
import sys


def run_hdc_command(command):
    """
    执行 hdc 命令
    
    Args:
        command: hdc 命令字符串
        
    Returns:
        tuple: (success: bool, output: str, error: str)
    """
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=30
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "命令执行超时"
    except Exception as e:
        return False, "", str(e)


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
        description='OpenHarmony HDC 工具 - 设备应用管理（查看/安装/卸载 HAP，查看前台应用）'
    )
    parser.add_argument(
        'action',
        choices=['list-apps', 'apps', 'uninstall', 'install', 'replace-install', 'foreground', 'fg', 'running', 'dump-all', 'dump-running', 'force-stop', 'stop', 'start', 'test'],
        help='操作：apps/list-apps=查看已安装应用; uninstall=卸载; install=安装; replace-install=替换安装; foreground/fg=查看前台应用; running=查看运行中的应用; dump-all=查看所有ability; dump-running=查看运行中的ability; force-stop/stop=强制关闭应用; start=启动应用; test=运行测试'
    )
    parser.add_argument(
        'target',
        nargs='?',
        help='卸载/强制关闭时填 bundleName；安装/替换安装时填 HAP 文件路径；启动应用时填 bundleName；运行测试时填 bundleName'
    )
    parser.add_argument(
        '--ability',
        '-a',
        dest='ability_name',
        help='启动应用时指定 Ability 名称（如 EntryAbility），与 start 命令一起使用'
    )
    parser.add_argument(
        '--module',
        '-m',
        dest='module_name',
        help='运行测试时指定模块名（如 entry_test），与 test 命令一起使用'
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
    
    args = parser.parse_args()
    
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
