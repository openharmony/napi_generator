#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony HAP 构建工具
功能：
1. 检查编译环境（SDK、工具链、Node版本、Hvigor版本）
2. 验证版本一致性
3. 执行 HAP 编译
4. HAP 签名功能
5. 清除签名功能
"""

import os
import sys
import json
import re
import subprocess
import shutil
from pathlib import Path

def check_env_var(var_name, description):
    """
    检查环境变量是否存在
    
    Args:
        var_name: 环境变量名
        description: 描述信息
    
    Returns:
        环境变量的值，如果不存在返回None
    """
    value = os.environ.get(var_name)
    if not value:
        print(f"❌ 错误: 未设置环境变量 {var_name} ({description})")
        return None
    if not os.path.exists(value):
        print(f"❌ 错误: {var_name} 指向的路径不存在: {value}")
        return None
    print(f"✓ {description}: {value}")
    return value

def check_node_version():
    """
    检查 Node.js 版本
    
    Returns:
        (success, version) 元组
    """
    try:
        result = subprocess.run(['node', '--version'], capture_output=True, text=True, timeout=10)
        if result.returncode == 0:
            version = result.stdout.strip()
            expected = 'v18.20.1'
            if version == expected:
                print(f"✓ Node.js 版本: {version} (符合要求)")
                return True, version
            else:
                print(f"⚠ 警告: Node.js 版本 {version} 与预期 {expected} 不一致")
                return True, version
        else:
            print(f"❌ 错误: 无法获取 Node.js 版本")
            return False, None
    except FileNotFoundError:
        print(f"❌ 错误: 未找到 node 命令，请确保 Node.js 已安装并在 PATH 中")
        return False, None
    except Exception as e:
        print(f"❌ 错误: 检查 Node.js 版本时出错: {e}")
        return False, None

def check_hvigor_version(project_dir=None):
    """
    检查 Hvigor 版本
    
    Args:
        project_dir: 项目目录，如果提供则在该目录中查找 hvigorw
    
    Returns:
        (success, version) 元组
    """
    # 尝试查找 hvigorw
    hvigorw_path = None
    if project_dir:
        hvigorw_path = os.path.join(project_dir, 'hvigorw')
        if not os.path.exists(hvigorw_path):
            hvigorw_path = None
    
    if not hvigorw_path:
        # 尝试在 PATH 中查找
        hvigorw_path = 'hvigorw'
    
    try:
        result = subprocess.run([hvigorw_path, '--version'], 
                              capture_output=True, text=True, timeout=10,
                              cwd=project_dir if project_dir else None)
        if result.returncode == 0:
            version = result.stdout.strip()
            expected = '6.21.2'
            if version == expected:
                print(f"✓ Hvigor 版本: {version} (符合要求)")
                return True, version
            else:
                print(f"⚠ 警告: Hvigor 版本 {version} 与预期 {expected} 不一致")
                return True, version
        else:
            print(f"⚠ 警告: 无法获取 Hvigor 版本（可能需要在项目目录中运行）")
            return False, None
    except FileNotFoundError:
        print(f"⚠ 警告: 未找到 hvigorw 命令（将在构建时检查）")
        return False, None
    except Exception as e:
        print(f"⚠ 警告: 检查 Hvigor 版本时出错: {e}（将在构建时检查）")
        return False, None

def parse_clt_version(version_file):
    """
    解析 Command Line Tools 版本文件
    
    Args:
        version_file: version.txt 文件路径
    
    Returns:
        版本信息字典，包含 sdk_name, os_type, version
    """
    try:
        with open(version_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 解析文件头：@vim (1-4) 格式
        # 例如：# ======================
        #      # Command Line Tools(linux-x64)
        #      # Version: 6.0.1.260
        #      # ======================
        
        version_info = {}
        
        # 提取 SDK 名称和系统类型
        # 格式: # Command Line Tools(linux-x64)
        lines = content.split('\n')
        for line in lines:
            # 查找包含 Command Line Tools 和系统类型的行
            if 'Command Line Tools' in line and '(' in line and ')' in line:
                match = re.search(r'Command\s+Line\s+Tools\s*\(([^)]+)\)', line, re.IGNORECASE)
                if match:
                    version_info['sdk_name'] = 'Command Line Tools'
                    version_info['os_type'] = match.group(1).strip()
                    break
        
        # 提取版本号
        version_match = re.search(r'Version:\s*([\d.]+)', content)
        if version_match:
            version_info['version'] = version_match.group(1)
        
        # 提取 hvigor 和 ohpm 版本
        hvigor_match = re.search(r'hvigor[:\s]+([\d.]+)', content, re.IGNORECASE)
        if hvigor_match:
            version_info['hvigor_version'] = hvigor_match.group(1)
        
        ohpm_match = re.search(r'ohpm[:\s]+([\d.]+)', content, re.IGNORECASE)
        if ohpm_match:
            version_info['ohpm_version'] = ohpm_match.group(1)
        
        return version_info
    except Exception as e:
        print(f"⚠ 警告: 解析 Command Line Tools 版本文件失败: {e}")
        return {}

def parse_sdk_version(daily_build_log):
    """
    解析 SDK 版本信息
    
    Args:
        daily_build_log: daily_build.log 文件路径
    
    Returns:
        SDK 版本字符串，如 "OpenHarmony_6.0.0.47"
    """
    try:
        with open(daily_build_log, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找 versionName
        version_match = re.search(r"'versionName':\s*'([^']+)'", content)
        if version_match:
            return version_match.group(1)
        
        # 尝试其他格式
        version_match = re.search(r'"versionName":\s*"([^"]+)"', content)
        if version_match:
            return version_match.group(1)
        
        return None
    except Exception as e:
        print(f"⚠ 警告: 解析 SDK 版本文件失败: {e}")
        return None

def parse_project_sdk_version(build_profile):
    """
    解析项目配置的 SDK 版本
    
    Args:
        build_profile: build-profile.json5 文件路径
    
    Returns:
        (target_sdk, compatible_sdk, api_level) 元组
    """
    try:
        with open(build_profile, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 解析 JSON5（简化版，只处理基本 JSON）
        # 移除注释和尾随逗号
        content = re.sub(r'//.*', '', content)
        content = re.sub(r',\s*}', '}', content)
        content = re.sub(r',\s*]', ']', content)
        
        data = json.loads(content)
        
        products = data.get('app', {}).get('products', [])
        if products:
            product = products[0]
            target_sdk = product.get('targetSdkVersion', '')
            compatible_sdk = product.get('compatibleSdkVersion', '')
            
            # 提取 API 级别，例如 "6.0.0(20)" -> 20
            api_match = re.search(r'\((\d+)\)', target_sdk)
            api_level = api_match.group(1) if api_match else None
            
            return target_sdk, compatible_sdk, api_level
        
        return None, None, None
    except Exception as e:
        print(f"⚠ 警告: 解析项目配置文件失败: {e}")
        return None, None, None

def check_sdk_api_level(sdk_path, required_api):
    """
    检查 SDK 中是否存在指定的 API 级别
    
    Args:
        sdk_path: SDK 路径
        required_api: 需要的 API 级别（如 "20"）
    
    Returns:
        是否存在
    """
    if not sdk_path or not required_api:
        return False
    
    # 尝试多种可能的路径
    possible_paths = [
        os.path.join(sdk_path, 'linux', 'ets', 'api'),  # OpenHarmony SDK 6.0 结构
        os.path.join(sdk_path, 'sdk', 'openharmony'),    # 其他可能的路径
        os.path.join(sdk_path, 'openharmony'),
        os.path.join(sdk_path, 'api'),
    ]
    
    openharmony_path = None
    for path in possible_paths:
        if os.path.exists(path):
            openharmony_path = path
            break
    
    if not openharmony_path:
        print(f"  SDK路径不存在，尝试过的路径: {', '.join(possible_paths)}")
        return False
    
    api_path = os.path.join(openharmony_path, required_api)
    exists = os.path.exists(api_path)
    if not exists:
        # 列出可用的 API 级别
        try:
            available_apis = [d for d in os.listdir(openharmony_path) 
                             if os.path.isdir(os.path.join(openharmony_path, d)) and d.isdigit()]
            if available_apis:
                print(f"  可用的 API 级别: {', '.join(sorted(available_apis, key=int))}")
        except:
            pass
    return exists

def fix_local_properties(project_dir, default_sdk_path):
    """
    修复 local.properties 文件中的 SDK 配置
    
    Args:
        project_dir: 项目目录
        default_sdk_path: 默认 SDK 路径
    
    Returns:
        (success, sdk_path) 元组
    """
    local_properties = os.path.join(project_dir, 'local.properties')
    
    # 如果文件不存在，创建它
    if not os.path.exists(local_properties):
        try:
            with open(local_properties, 'w', encoding='utf-8') as f:
                f.write("# This file is automatically generated by DevEco Studio.\n")
                f.write("# Do not modify this file -- YOUR CHANGES WILL BE ERASED!\n")
                f.write("#\n")
                f.write("# This file should *NOT* be checked into Version Control Systems,\n")
                f.write("# as it contains information specific to your local configuration.\n")
                f.write("#\n")
                f.write("# For customization when using a Version Control System, please read the header note.\n")
                f.write(f"sdk.dir={default_sdk_path}\n")
            print(f"✓ 已创建 local.properties 文件，配置 SDK 路径: {default_sdk_path}")
            return True, default_sdk_path
        except Exception as e:
            print(f"❌ 错误: 创建 local.properties 文件失败: {e}")
            return False, None
    
    # 读取现有文件内容
    try:
        lines = []
        sdk_path = None
        sdk_line_found = False
        
        with open(local_properties, 'r', encoding='utf-8') as f:
            for line in f:
                stripped = line.strip()
                # 查找 sdk.dir 配置
                if stripped.startswith('sdk.dir='):
                    sdk_path = stripped.split('=', 1)[1].strip()
                    sdk_line_found = True
                    # 检查是否需要修复
                    needs_fix = False
                    if not os.path.exists(sdk_path):
                        needs_fix = True
                    elif ':' in sdk_path or '\\' in sdk_path:
                        needs_fix = True
                    
                    if needs_fix:
                        # 修复这一行
                        lines.append(f"sdk.dir={default_sdk_path}\n")
                        print(f"✓ 已修复 local.properties 中的 SDK 路径")
                        print(f"  原路径: {sdk_path}")
                        print(f"  新路径: {default_sdk_path}")
                        sdk_path = default_sdk_path
                    else:
                        lines.append(line)
                else:
                    lines.append(line)
        
        # 如果没有找到 sdk.dir 配置，添加它
        if not sdk_line_found:
            lines.append(f"sdk.dir={default_sdk_path}\n")
            print(f"✓ 已在 local.properties 中添加 SDK 路径配置: {default_sdk_path}")
            sdk_path = default_sdk_path
            # 写回文件
            with open(local_properties, 'w', encoding='utf-8') as f:
                f.writelines(lines)
        # 如果进行了修复，写回文件
        elif sdk_path == default_sdk_path:
            # 已经修复了，写回文件
            with open(local_properties, 'w', encoding='utf-8') as f:
                f.writelines(lines)
        
        if sdk_path and os.path.exists(sdk_path):
            print(f"✓ local.properties 中的 SDK 路径: {sdk_path}")
            return True, sdk_path
        else:
            return False, sdk_path
            
    except Exception as e:
        print(f"⚠ 警告: 处理 local.properties 文件失败: {e}")
        return False, None

def check_local_properties(project_dir):
    """
    检查项目的 local.properties 文件中的 SDK 配置
    
    Args:
        project_dir: 项目目录
    
    Returns:
        (success, sdk_path) 元组
    """
    local_properties = os.path.join(project_dir, 'local.properties')
    
    if not os.path.exists(local_properties):
        print(f"⚠ 警告: 未找到 local.properties 文件: {local_properties}")
        return False, None
    
    try:
        sdk_path = None
        with open(local_properties, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                # 跳过注释和空行
                if not line or line.startswith('#'):
                    continue
                # 查找 sdk.dir 配置
                if line.startswith('sdk.dir='):
                    sdk_path = line.split('=', 1)[1].strip()
                    break
        
        if sdk_path:
            # 检查路径是否存在
            if os.path.exists(sdk_path):
                print(f"✓ local.properties 中的 SDK 路径: {sdk_path}")
                return True, sdk_path
            else:
                print(f"⚠ 警告: local.properties 中的 SDK 路径不存在: {sdk_path}")
                # 检查是否是 Windows 路径
                if ':' in sdk_path or '\\' in sdk_path:
                    print(f"  检测到 Windows 路径格式，将自动修复为 Linux 路径")
                return False, sdk_path
        else:
            print(f"⚠ 警告: local.properties 中未找到 sdk.dir 配置，将自动添加")
            return False, None
    except Exception as e:
        print(f"⚠ 警告: 读取 local.properties 文件失败: {e}")
        return False, None

def fix_signing_config(build_profile):
    """
    修复 build-profile.json5 中的签名配置（移除包含 Windows 路径的签名配置）
    
    Args:
        build_profile: build-profile.json5 文件路径
    
    Returns:
        (fixed, has_config, is_valid) 元组
    """
    if not os.path.exists(build_profile):
        return False, False, False
    
    try:
        with open(build_profile, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 解析 JSON5（简化版，只处理基本 JSON）
        # 移除注释和尾随逗号
        content_clean = re.sub(r'//.*', '', content)
        content_clean = re.sub(r',\s*}', '}', content_clean)
        content_clean = re.sub(r',\s*]', ']', content_clean)
        
        data = json.loads(content_clean)
        
        signing_configs = data.get('app', {}).get('signingConfigs', [])
        
        if not signing_configs or len(signing_configs) == 0:
            return False, False, True
        
        # 检查签名配置
        needs_fix = False
        for config in signing_configs:
            if isinstance(config, dict):
                material = config.get('material', {})
                store_file = material.get('storeFile', '')
                
                if store_file:
                    # 检查是否是 Windows 路径
                    if ':' in store_file or '\\' in store_file:
                        needs_fix = True
                        break
                    # 检查文件是否存在
                    if not os.path.exists(store_file):
                        needs_fix = True
                        break
        
        # 如果需要修复，移除签名配置
        if needs_fix:
            # 使用正则表达式替换 signingConfigs 部分
            # 匹配从 "signingConfigs" 到下一个顶级键之间的内容
            pattern = r'"signingConfigs"\s*:\s*\[[^\]]*\],?\s*'
            fixed_content = re.sub(pattern, '"signingConfigs": [],\n    ', original_content, flags=re.DOTALL)
            
            # 如果正则替换失败，使用 JSON 重新生成
            if fixed_content == original_content:
                data['app']['signingConfigs'] = []
                # 使用 json.dumps 生成，然后手动调整格式
                fixed_content = json.dumps(data, indent=2, ensure_ascii=False)
                # 添加尾随逗号以符合 JSON5 格式
                fixed_content = re.sub(r'(\])(\s*)([,\n])', r'\1,\2\3', fixed_content)
                fixed_content = re.sub(r'(\})(\s*)([,\n])', r'\1,\2\3', fixed_content)
            
            try:
                with open(build_profile, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                print(f"✓ 已修复 build-profile.json5 中的签名配置（移除了包含 Windows 路径的签名配置）")
                return True, False, True
            except Exception as e:
                print(f"⚠ 警告: 修复签名配置失败: {e}")
                import traceback
                traceback.print_exc()
                return False, True, False
        
        # 检查配置是否有效
        is_valid = True
        for config in signing_configs:
            if isinstance(config, dict):
                material = config.get('material', {})
                store_file = material.get('storeFile', '')
                if store_file and not os.path.exists(store_file):
                    is_valid = False
                    break
        
        if is_valid:
            print(f"✓ 签名配置: 已配置，签名文件存在")
        else:
            print(f"⚠ 警告: 签名配置文件不存在")
        
        return False, True, is_valid
        
    except Exception as e:
        print(f"⚠ 警告: 检查签名配置失败: {e}")
        return False, False, False

def check_signing_config(build_profile):
    """
    检查 build-profile.json5 中的签名配置
    
    Args:
        build_profile: build-profile.json5 文件路径
    
    Returns:
        (has_config, is_valid) 元组
    """
    if not os.path.exists(build_profile):
        return False, False
    
    try:
        with open(build_profile, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 解析 JSON5（简化版，只处理基本 JSON）
        # 移除注释和尾随逗号
        content_clean = re.sub(r'//.*', '', content)
        content_clean = re.sub(r',\s*}', '}', content_clean)
        content_clean = re.sub(r',\s*]', ']', content_clean)
        
        data = json.loads(content_clean)
        
        signing_configs = data.get('app', {}).get('signingConfigs', [])
        
        if not signing_configs or len(signing_configs) == 0:
            print(f"✓ 签名配置: 未配置（将生成未签名的 HAP 文件）")
            return False, True
        
        # 检查签名配置
        for config in signing_configs:
            if isinstance(config, dict):
                material = config.get('material', {})
                store_file = material.get('storeFile', '')
                
                if store_file:
                    # 检查是否是 Windows 路径
                    if ':' in store_file or '\\' in store_file:
                        print(f"⚠ 警告: 签名配置包含 Windows 路径: {store_file}")
                        print(f"  在 Linux 系统上可能无法使用，将自动移除签名配置")
                        return True, False
                    
                    # 检查文件是否存在
                    if os.path.exists(store_file):
                        print(f"✓ 签名配置: 已配置，签名文件存在")
                        return True, True
                    else:
                        print(f"⚠ 警告: 签名配置文件不存在: {store_file}，将自动移除签名配置")
                        return True, False
        
        print(f"✓ 签名配置: 已配置")
        return True, True
        
    except Exception as e:
        print(f"⚠ 警告: 检查签名配置失败: {e}")
        return False, False

def check_environment(project_dir=None):
    """
    检查编译环境
    
    Args:
        project_dir: 项目目录（可选，用于检查 hvigorw）
    
    Returns:
        (success, env_info) 元组
    """
    print("=" * 80)
    print("检查编译环境...")
    print("=" * 80)
    
    env_info = {}
    all_ok = True
    
    # 检查环境变量（先检查，以便获取默认 SDK 路径）
    hos_clt_path = check_env_var('HOS_CLT_PATH', 'HarmonyOS Command Line Tools 路径')
    if not hos_clt_path:
        all_ok = False
    else:
        env_info['hos_clt_path'] = hos_clt_path
    
    # 检查并修复项目的 local.properties 文件
    if project_dir and hos_clt_path:
        # 获取默认 SDK 路径
        default_sdk_path = os.path.join(hos_clt_path, 'sdk', 'openharmony')
        
        # 先检查配置
        local_ok, sdk_path = check_local_properties(project_dir)
        
        # 如果需要修复，自动修复
        if not local_ok:
            print(f"  正在自动修复 local.properties 配置...")
            fixed_ok, fixed_sdk_path = fix_local_properties(project_dir, default_sdk_path)
            if fixed_ok:
                local_ok = True
                sdk_path = fixed_sdk_path
        
        if local_ok and sdk_path:
            env_info['local_sdk_path'] = sdk_path
    
    # 检查并修复 build-profile.json5 中的签名配置
    if project_dir:
        build_profile = os.path.join(project_dir, 'build-profile.json5')
        # 先检查
        has_signing, is_valid = check_signing_config(build_profile)
        
        # 如果需要修复，自动修复
        if has_signing and not is_valid:
            print(f"  正在自动修复 build-profile.json5 中的签名配置...")
            fixed, new_has_signing, new_is_valid = fix_signing_config(build_profile)
            if fixed:
                has_signing = new_has_signing
                is_valid = new_is_valid
        
        env_info['has_signing_config'] = has_signing
        env_info['signing_config_valid'] = is_valid
    
    print()
    
    # 继续检查其他环境信息
    if hos_clt_path:
        
        # 检查 version.txt
        version_file = os.path.join(hos_clt_path, 'version.txt')
        if os.path.exists(version_file):
            clt_version = parse_clt_version(version_file)
            env_info['clt_version'] = clt_version
            if clt_version:
                print(f"  SDK名称: {clt_version.get('sdk_name', 'N/A')}")
                print(f"  运行系统: {clt_version.get('os_type', 'N/A')}")
                print(f"  版本: {clt_version.get('version', 'N/A')}")
                if 'hvigor_version' in clt_version:
                    print(f"  Hvigor版本: {clt_version['hvigor_version']}")
                if 'ohpm_version' in clt_version:
                    print(f"  OHPM版本: {clt_version['ohpm_version']}")
        else:
            print(f"⚠ 警告: 未找到 version.txt 文件: {version_file}")
    
    ohos_sdk_path = check_env_var('OHOS_SDK_PATH', 'OpenHarmony SDK 路径')
    if not ohos_sdk_path:
        all_ok = False
    else:
        env_info['ohos_sdk_path'] = ohos_sdk_path
        
        # 检查 daily_build.log
        daily_build_log = os.path.join(ohos_sdk_path, 'daily_build.log')
        if os.path.exists(daily_build_log):
            sdk_version = parse_sdk_version(daily_build_log)
            env_info['sdk_version'] = sdk_version
            if sdk_version:
                print(f"  SDK版本: {sdk_version}")
        else:
            print(f"⚠ 警告: 未找到 daily_build.log 文件: {daily_build_log}")
    
    # 检查 Node.js 版本
    node_ok, node_version = check_node_version()
    if node_ok:
        env_info['node_version'] = node_version
    else:
        all_ok = False
    
    # 检查 Hvigor 版本（需要在项目目录中）
    if project_dir:
        hvigor_ok, hvigor_version = check_hvigor_version(project_dir)
        if hvigor_ok:
            env_info['hvigor_version'] = hvigor_version
    
    print()
    return all_ok, env_info

def verify_version_consistency(project_dir, env_info):
    """
    验证版本一致性
    
    Args:
        project_dir: 项目目录
        env_info: 环境信息字典
    
    Returns:
        是否一致
    """
    print("=" * 80)
    print("验证版本一致性...")
    print("=" * 80)
    
    build_profile = os.path.join(project_dir, 'build-profile.json5')
    if not os.path.exists(build_profile):
        print(f"❌ 错误: 未找到 build-profile.json5: {build_profile}")
        return False
    
    target_sdk, compatible_sdk, api_level = parse_project_sdk_version(build_profile)
    if not target_sdk:
        print(f"❌ 错误: 无法解析项目 SDK 版本配置")
        return False
    
    print(f"项目配置:")
    print(f"  targetSdkVersion: {target_sdk}")
    print(f"  compatibleSdkVersion: {compatible_sdk}")
    print(f"  API级别: {api_level}")
    
    # 检查 SDK 版本
    sdk_version = env_info.get('sdk_version', '')
    if sdk_version:
        # 从 versionName 提取主版本号，如 "OpenHarmony_6.0.0.47" -> "6.0"
        sdk_major_match = re.search(r'OpenHarmony_(\d+\.\d+)', sdk_version)
        if sdk_major_match:
            sdk_major = sdk_major_match.group(1)
            # 从项目配置提取主版本号，如 "6.0.0(20)" -> "6.0"
            project_major_match = re.search(r'(\d+\.\d+)', target_sdk)
            if project_major_match:
                project_major = project_major_match.group(1)
                if sdk_major == project_major:
                    print(f"✓ SDK 主版本一致: {sdk_major}")
                else:
                    print(f"⚠ 警告: SDK 主版本不一致 - SDK: {sdk_major}, 项目: {project_major}")
    
    # 检查 API 级别（OpenHarmony SDK 6.0 的 API 结构可能不同，只做警告）
    ohos_sdk_path = env_info.get('ohos_sdk_path')
    if api_level and ohos_sdk_path:
        if check_sdk_api_level(ohos_sdk_path, api_level):
            print(f"✓ SDK 中存在 API {api_level}")
        else:
            print(f"⚠ 警告: 无法确认 SDK 中是否存在 API {api_level}（OpenHarmony SDK 6.0 的目录结构可能不同）")
            print(f"  如果构建失败，请检查 SDK 配置是否正确")
            # 不返回 False，允许继续构建
    
    print()
    return True

def find_hap_files(project_dir):
    """
    查找生成的 HAP 文件
    
    Args:
        project_dir: 项目目录
    
    Returns:
        HAP 文件路径列表
    """
    hap_files = []
    
    # 常见的 HAP 文件输出路径（按优先级排序）
    common_paths = [
        os.path.join(project_dir, 'entry', 'build', 'default', 'outputs', 'default'),
        os.path.join(project_dir, 'entry', 'build', 'default', 'outputs'),
        os.path.join(project_dir, 'entry', 'build', 'default'),
        os.path.join(project_dir, 'build', 'default', 'outputs', 'default'),
        os.path.join(project_dir, 'build', 'default', 'outputs'),
        os.path.join(project_dir, 'build', 'default'),
    ]
    
    # 首先尝试在常见路径中查找
    for path in common_paths:
        if os.path.exists(path):
            for root, dirs, files in os.walk(path):
                for file in files:
                    if file.endswith('.hap'):
                        full_path = os.path.join(root, file)
                        if full_path not in hap_files:
                            hap_files.append(full_path)
    
    # 如果没找到，在整个项目目录中搜索（但跳过一些目录）
    if not hap_files:
        skip_dirs = {'.hvigor', 'node_modules', '.idea', 'oh_modules', '.git'}
        for root, dirs, files in os.walk(project_dir):
            # 跳过不需要搜索的目录
            root_parts = root.split(os.sep)
            if any(skip_dir in root_parts for skip_dir in skip_dirs):
                continue
            
            for file in files:
                if file.endswith('.hap'):
                    full_path = os.path.join(root, file)
                    if full_path not in hap_files:
                        hap_files.append(full_path)
    
    # 按修改时间排序，最新的在前
    try:
        hap_files.sort(key=lambda x: os.path.getmtime(x), reverse=True)
    except:
        pass
    
    return hap_files

def check_hap_files(project_dir):
    """
    检查并显示生成的 HAP 文件信息
    
    Args:
        project_dir: 项目目录
    
    Returns:
        是否找到 HAP 文件
    """
    print("=" * 80)
    print("检查生成的 HAP 文件...")
    print("=" * 80)
    
    hap_files = find_hap_files(project_dir)
    
    if not hap_files:
        print("⚠ 警告: 未找到生成的 HAP 文件")
        print("  可能的原因:")
        print("  1. 构建失败")
        print("  2. HAP 文件输出到非标准路径")
        print("  3. 构建模式或产品配置不同")
        return False
    
    print(f"\n找到 {len(hap_files)} 个 HAP 文件:\n")
    
    for i, hap_file in enumerate(hap_files, 1):
        # 获取相对路径
        try:
            rel_path = os.path.relpath(hap_file, project_dir)
        except:
            rel_path = hap_file
        
        # 获取文件大小
        try:
            size = os.path.getsize(hap_file)
            # 格式化文件大小
            if size < 1024:
                size_str = f"{size} B"
            elif size < 1024 * 1024:
                size_str = f"{size / 1024:.1f} KB"
            else:
                size_str = f"{size / (1024 * 1024):.1f} MB"
        except:
            size_str = "N/A"
        
        # 获取文件修改时间
        try:
            import datetime
            mtime = os.path.getmtime(hap_file)
            mtime_str = datetime.datetime.fromtimestamp(mtime).strftime("%Y-%m-%d %H:%M:%S")
        except:
            mtime_str = "N/A"
        
        print(f"{i}. {rel_path}")
        print(f"   大小: {size_str}")
        print(f"   修改时间: {mtime_str}")
        print()
    
    # 显示主要 HAP 文件（通常是第一个或最大的）
    if hap_files:
        main_hap = hap_files[0]
        try:
            rel_path = os.path.relpath(main_hap, project_dir)
        except:
            rel_path = main_hap
        print(f"主要 HAP 文件: {rel_path}")
        print()
    
    return True

def build_hap(project_dir, product='default', build_mode='debug'):
    """
    构建 HAP
    
    Args:
        project_dir: 项目目录
        product: 产品名称，默认 'default'
        build_mode: 构建模式，默认 'debug'
    
    Returns:
        是否成功
    """
    print("=" * 80)
    print("开始构建 HAP...")
    print("=" * 80)
    
    original_dir = os.getcwd()
    
    try:
        # 切换到项目目录
        os.chdir(project_dir)
        print(f"工作目录: {os.getcwd()}")
        
        # 使用 node 执行 HOS_CLT_PATH 下的 hvigorw.js（替代项目内的 hvigorw）
        hos_clt_path = os.environ.get('HOS_CLT_PATH')
        if not hos_clt_path or not os.path.isdir(hos_clt_path):
            print(f"❌ 错误: 未设置或无效的 HOS_CLT_PATH 环境变量")
            print(f"  请设置 HOS_CLT_PATH 指向 HarmonyOS Command Line Tools 目录")
            return False
        hvigorw_js = os.path.join(hos_clt_path, 'hvigor', 'bin', 'hvigorw.js')
        if not os.path.isfile(hvigorw_js):
            print(f"❌ 错误: 未找到 hvigorw.js: {hvigorw_js}")
            return False
        node_cmd = '/usr/bin/node'
        if not os.path.isfile(node_cmd):
            node_cmd = shutil.which('node') or 'node'
        
        # 执行 clean
        print(f"\n执行清理...")
        clean_cmd = [node_cmd, hvigorw_js, 'clean', '--no-daemon']
        print(f"命令: {' '.join(clean_cmd)}")
        result = subprocess.run(clean_cmd, capture_output=False, text=True, timeout=600)
        if result.returncode != 0:
            print(f"⚠ 警告: clean 命令执行失败（退出码: {result.returncode}）")
            # 继续执行构建
        
        # 执行构建：node hvigorw.js --mode module -p product=default assembleHap --analyze=normal --parallel --incremental --daemon
        print(f"\n执行构建...")
        build_cmd = [
            node_cmd, hvigorw_js,
            '--mode', 'module',
            '-p', f'product={product}',
            'assembleHap',
            '--analyze=normal',
            '--parallel',
            '--incremental',
            '--daemon'
        ]
        print(f"命令: {' '.join(build_cmd)}")
        
        result = subprocess.run(build_cmd, timeout=1800)
        
        if result.returncode == 0:
            print(f"\n✓ HAP 构建成功！")
            # 检查生成的 HAP 文件（使用当前工作目录，因为已经在项目目录中）
            check_hap_files(os.getcwd())
            return True
        else:
            print(f"\n❌ HAP 构建失败（退出码: {result.returncode}）")
            return False
            
    except subprocess.TimeoutExpired:
        print(f"\n❌ 构建超时")
        return False
    except Exception as e:
        print(f"\n❌ 构建过程出错: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        os.chdir(original_dir)


def build_test_hap(project_dir, module_name='entry@ohosTest', product='default'):
    """
    编译单元测试用例（ohosTest 模块）
    
    执行命令: node $HOS_CLT_PATH/hvigor/bin/hvigorw.js --mode module -p module=entry@ohosTest -p isOhosTest=true
              -p product=default -p buildMode=test assembleHap
              --analyze=normal --parallel --incremental --daemon
    
    Args:
        project_dir: 项目目录
        module_name: 测试模块名，默认 'entry@ohosTest'
        product: 产品名称，默认 'default'
    
    Returns:
        是否成功
    """
    print("=" * 80)
    print("开始编译单元测试用例...")
    print("=" * 80)
    
    original_dir = os.getcwd()
    
    try:
        os.chdir(project_dir)
        print(f"工作目录: {os.getcwd()}")
        
        # 使用 node 执行 HOS_CLT_PATH 下的 hvigorw.js（替代项目内的 hvigorw）
        hos_clt_path = os.environ.get('HOS_CLT_PATH')
        if not hos_clt_path or not os.path.isdir(hos_clt_path):
            print(f"❌ 错误: 未设置或无效的 HOS_CLT_PATH 环境变量")
            print(f"  请设置 HOS_CLT_PATH 指向 HarmonyOS Command Line Tools 目录")
            return False
        hvigorw_js = os.path.join(hos_clt_path, 'hvigor', 'bin', 'hvigorw.js')
        if not os.path.isfile(hvigorw_js):
            print(f"❌ 错误: 未找到 hvigorw.js: {hvigorw_js}")
            return False
        node_cmd = '/usr/bin/node'
        if not os.path.isfile(node_cmd):
            node_cmd = shutil.which('node') or 'node'
        
        # 编译单元测试：node hvigorw.js --mode module -p module=entry@ohosTest -p isOhosTest=true -p product=default -p buildMode=test assembleHap --analyze=normal --parallel --incremental --daemon
        print(f"\n执行单元测试 HAP 构建...")
        test_build_cmd = [
            node_cmd, hvigorw_js,
            '--mode', 'module',
            '-p', f'module={module_name}',
            '-p', 'isOhosTest=true',
            '-p', f'product={product}',
            '-p', 'buildMode=test',
            'assembleHap',
            '--analyze=normal',
            '--parallel',
            '--incremental',
            '--daemon'
        ]
        print(f"命令: {' '.join(test_build_cmd)}")
        
        result = subprocess.run(test_build_cmd, timeout=1800)
        
        if result.returncode == 0:
            print(f"\n✓ 单元测试 HAP 构建成功！")
            return True
        else:
            print(f"\n❌ 单元测试 HAP 构建失败（退出码: {result.returncode}）")
            return False
            
    except subprocess.TimeoutExpired:
        print(f"\n❌ 构建超时")
        return False
    except Exception as e:
        print(f"\n❌ 构建过程出错: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        os.chdir(original_dir)


def parse_bundle_name(project_dir):
    """
    从 app.json5 文件中解析 bundleName
    
    Args:
        project_dir: 项目目录
    
    Returns:
        bundleName 字符串，如果解析失败返回 None
    """
    app_json5_paths = [
        os.path.join(project_dir, 'AppScope', 'app.json5'),
        os.path.join(project_dir, 'app.json5'),
    ]
    
    for app_json5_path in app_json5_paths:
        if os.path.exists(app_json5_path):
            try:
                with open(app_json5_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 移除注释
                content = re.sub(r'//.*', '', content)
                content = re.sub(r',\s*}', '}', content)
                content = re.sub(r',\s*]', ']', content)
                
                data = json.loads(content)
                bundle_name = data.get('app', {}).get('bundleName')
                if bundle_name:
                    return bundle_name
            except Exception as e:
                print(f"⚠ 警告: 解析 app.json5 失败: {e}")
                continue
    
    return None

def find_unsigned_hap(project_dir):
    """
    查找未签名的 HAP 文件（单个，兼容旧逻辑）
    
    Args:
        project_dir: 项目目录
    
    Returns:
        未签名的 HAP 文件路径，如果未找到返回 None
    """
    all_unsigned = find_all_unsigned_hap(project_dir)
    if all_unsigned:
        return all_unsigned[0]
    hap_files = find_hap_files(project_dir)
    if hap_files:
        return hap_files[0]
    return None


def find_all_unsigned_hap(project_dir):
    """
    查找所有未签名的 HAP 文件（文件名含 unsigned）
    
    Args:
        project_dir: 项目目录
    
    Returns:
        未签名的 HAP 文件路径列表
    """
    hap_files = find_hap_files(project_dir)
    return [f for f in hap_files if 'unsigned' in os.path.basename(f).lower()]

def sign_hap(project_dir, profile_type='release'):
    """
    对 HAP 文件进行签名
    
    Args:
        project_dir: 项目目录
        profile_type: profile 类型，'debug' 或 'release'，默认 'release'
    
    Returns:
        是否成功
    """
    print("=" * 80)
    print("开始 HAP 签名流程...")
    print("=" * 80)
    
    # 检查环境变量
    ohos_sdk_path = os.environ.get('OHOS_SDK_PATH')
    if not ohos_sdk_path:
        print("❌ 错误: 未设置环境变量 OHOS_SDK_PATH")
        return False
    
    # 检查证书文件目录
    cert_source_dir = os.path.expanduser('~/ohos/60release/src/developtools/hapsigner/autosign/result')
    if not os.path.exists(cert_source_dir):
        print(f"❌ 错误: 证书文件目录不存在: {cert_source_dir}")
        print("  请确保已正确设置证书文件路径")
        return False
    
    # 检查 SDK 工具
    hap_sign_tool = os.path.join(ohos_sdk_path, 'linux', 'toolchains', 'lib', 'hap-sign-tool.jar')
    if not os.path.exists(hap_sign_tool):
        print(f"❌ 错误: 未找到 hap-sign-tool.jar: {hap_sign_tool}")
        return False
    
    # 解析 bundleName
    bundle_name = parse_bundle_name(project_dir)
    if not bundle_name:
        print("❌ 错误: 无法从 app.json5 中解析 bundleName")
        return False
    
    print(f"✓ 项目 bundleName: {bundle_name}")
    
    # 查找所有未签名的 HAP 文件（主 HAP 与单元测试 HAP 等）
    unsigned_haps = find_all_unsigned_hap(project_dir)
    if not unsigned_haps:
        print("❌ 错误: 未找到未签名的 HAP 文件")
        print("  请先编译项目生成 HAP 文件")
        return False
    
    for u in unsigned_haps:
        print(f"✓ 未签名的 HAP 文件: {u}")
    
    # 步骤 1: 创建 autosign 目录
    autosign_dir = os.path.join(project_dir, 'autosign')
    print(f"\n步骤 1: 创建 autosign 目录...")
    try:
        if os.path.exists(autosign_dir):
            print(f"  autosign 目录已存在，将清空...")
            shutil.rmtree(autosign_dir)
        os.makedirs(autosign_dir, exist_ok=True)
        print(f"✓ 已创建 autosign 目录: {autosign_dir}")
    except Exception as e:
        print(f"❌ 错误: 创建 autosign 目录失败: {e}")
        return False
    
    # 步骤 2: 拷贝证书文件和相关文件
    print(f"\n步骤 2: 拷贝证书文件和相关文件...")
    try:
        # 拷贝证书文件
        cert_files = ['OpenHarmony.p12', 'OpenHarmonyProfileRelease.pem', 'rootCA.cer', 'subCA.cer']
        for cert_file in cert_files:
            src = os.path.join(cert_source_dir, cert_file)
            if os.path.exists(src):
                dst = os.path.join(autosign_dir, cert_file)
                shutil.copy2(src, dst)
                print(f"  ✓ 已拷贝: {cert_file}")
            else:
                print(f"  ⚠ 警告: 证书文件不存在: {src}")
        
        # 拷贝工具文件
        toolchain_lib_dir = os.path.join(ohos_sdk_path, 'linux', 'toolchains', 'lib')
        tool_files = ['hap-sign-tool.jar', 'app_check_tool.jar', 'app_packing_tool.jar', 
                      'app_unpacking_tool.jar', 'binary-sign-tool']
        for tool_file in tool_files:
            src = os.path.join(toolchain_lib_dir, tool_file)
            if os.path.exists(src):
                dst = os.path.join(autosign_dir, tool_file)
                shutil.copy2(src, dst)
                print(f"  ✓ 已拷贝: {tool_file}")
        
        # 拷贝模板文件
        template_source_dir = os.path.expanduser('~/ohos/60release/src/developtools/hapsigner/autosign')
        template_files = ['UnsgnedDebugProfileTemplate.json', 'UnsgnedReleasedProfileTemplate.json']
        for template_file in template_files:
            src = os.path.join(template_source_dir, template_file)
            if os.path.exists(src):
                dst = os.path.join(autosign_dir, template_file)
                shutil.copy2(src, dst)
                print(f"  ✓ 已拷贝: {template_file}")
            else:
                # 如果源文件不存在，尝试从项目中的 autosign 目录查找（如果之前已经创建过）
                alt_src = os.path.join(project_dir, 'autosign', template_file)
                if os.path.exists(alt_src):
                    dst = os.path.join(autosign_dir, template_file)
                    shutil.copy2(alt_src, dst)
                    print(f"  ✓ 已从项目目录拷贝: {template_file}")
        
        print(f"✓ 文件拷贝完成")
    except Exception as e:
        print(f"❌ 错误: 拷贝文件失败: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    # 步骤 3: 修改模板 JSON 文件中的 bundle-name
    print(f"\n步骤 3: 修改模板 JSON 文件中的 bundle-name...")
    try:
        template_files = {
            'debug': 'UnsgnedDebugProfileTemplate.json',
            'release': 'UnsgnedReleasedProfileTemplate.json'
        }
        
        template_file = template_files.get(profile_type, 'UnsgnedReleasedProfileTemplate.json')
        template_path = os.path.join(autosign_dir, template_file)
        
        if not os.path.exists(template_path):
            print(f"  ⚠ 警告: 模板文件不存在: {template_path}")
            print(f"  将尝试使用另一个模板文件")
            # 尝试使用另一个模板
            alt_template = 'UnsgnedDebugProfileTemplate.json' if profile_type == 'release' else 'UnsgnedReleasedProfileTemplate.json'
            alt_template_path = os.path.join(autosign_dir, alt_template)
            if os.path.exists(alt_template_path):
                template_path = alt_template_path
                template_file = alt_template
            else:
                print(f"❌ 错误: 找不到任何模板文件")
                return False
        
        with open(template_path, 'r', encoding='utf-8') as f:
            template_data = json.load(f)
        
        # 修改 bundle-name
        if 'bundle-info' in template_data:
            template_data['bundle-info']['bundle-name'] = bundle_name
        else:
            print(f"  ⚠ 警告: 模板文件中没有 bundle-info 字段")
        
        with open(template_path, 'w', encoding='utf-8') as f:
            json.dump(template_data, f, indent=4, ensure_ascii=False)
        
        print(f"✓ 已修改 {template_file} 中的 bundle-name 为: {bundle_name}")
    except Exception as e:
        print(f"❌ 错误: 修改模板文件失败: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    # 计算每个未签名 HAP 的绝对路径及对应的 signed 输出路径（同目录，文件名 unsigned -> signed）
    unsigned_haps_abs = []
    for u in unsigned_haps:
        u_abs = os.path.abspath(u)
        if not os.path.exists(u_abs):
            print(f"❌ 错误: 未签名的 HAP 文件不存在: {u_abs}")
            return False
        out_dir = os.path.dirname(u_abs)
        out_basename = os.path.basename(u).replace('unsigned', 'signed')
        signed_out_abs = os.path.join(out_dir, out_basename)
        unsigned_haps_abs.append((u_abs, signed_out_abs))
    
    # 切换到 autosign 目录
    original_dir = os.getcwd()
    try:
        os.chdir(autosign_dir)
        
        # 步骤 4: 生成应用签名证书密钥对
        print(f"\n步骤 4: 生成应用签名证书密钥对...")
        cmd = [
            'java', '-jar', 'hap-sign-tool.jar', 'generate-keypair',
            '-keyAlias', 'oh-app1-key-v1',
            '-keyAlg', 'ECC',
            '-keySize', 'NIST-P-256',
            '-keystoreFile', './OpenHarmony.p12',
            '-keyPwd', '123456',
            '-keystorePwd', '123456'
        ]
        print(f"  命令: {' '.join(cmd)}")
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(f"❌ 错误: 生成密钥对失败")
            print(f"  输出: {result.stdout}")
            print(f"  错误: {result.stderr}")
            return False
        print(f"✓ 密钥对生成成功")
        
        # 步骤 5: 生成应用签名证书
        print(f"\n步骤 5: 生成应用签名证书...")
        cmd = [
            'java', '-jar', 'hap-sign-tool.jar', 'generate-app-cert',
            '-keyAlias', 'oh-app1-key-v1',
            '-signAlg', 'SHA256withECDSA',
            '-issuer', 'C=CN,O=OpenHarmony,OU=OpenHarmony Team,CN= OpenHarmony Application CA',
            '-issuerKeyAlias', 'openharmony application ca',
            '-subject', 'C=CN,O=OpenHarmony,OU=OpenHarmony Team,CN=OpenHarmony Application Release',
            '-keystoreFile', './OpenHarmony.p12',
            '-subCaCertFile', 'subCA.cer',
            '-rootCaCertFile', 'rootCA.cer',
            '-outForm', 'certChain',
            '-outFile', 'app1.cer',
            '-keyPwd', '123456',
            '-keystorePwd', '123456',
            '-issuerKeyPwd', '123456',
            '-validity', '365'
        ]
        print(f"  命令: {' '.join(cmd)}")
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(f"❌ 错误: 生成应用签名证书失败")
            print(f"  输出: {result.stdout}")
            print(f"  错误: {result.stderr}")
            return False
        print(f"✓ 应用签名证书生成成功")
        
        # 步骤 6: 对 profile 文件进行签名
        print(f"\n步骤 6: 对 profile 文件进行签名...")
        profile_template = 'UnsgnedReleasedProfileTemplate.json' if profile_type == 'release' else 'UnsgnedDebugProfileTemplate.json'
        cmd = [
            'java', '-jar', 'hap-sign-tool.jar', 'sign-profile',
            '-keyAlias', 'openharmony application profile release',
            '-signAlg', 'SHA256withECDSA',
            '-mode', 'localSign',
            '-profileCertFile', './OpenHarmonyProfileRelease.pem',
            '-inFile', profile_template,
            '-keystoreFile', './OpenHarmony.p12',
            '-outFile', 'app1-profile.p7b',
            '-keyPwd', '123456',
            '-keystorePwd', '123456'
        ]
        print(f"  命令: {' '.join(cmd)}")
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(f"❌ 错误: 对 profile 文件签名失败")
            print(f"  输出: {result.stdout}")
            print(f"  错误: {result.stderr}")
            return False
        print(f"✓ profile 文件签名成功")
        
        # 步骤 7: 对每个应用包进行签名（输出到原 HAP 同目录，文件名 unsigned -> signed）
        print(f"\n步骤 7: 对应用包进行签名...")
        signed_paths = []
        for idx, (in_abs, out_abs) in enumerate(unsigned_haps_abs, 1):
            print(f"  正在签名 ({idx}/{len(unsigned_haps_abs)}): {os.path.basename(in_abs)} -> {os.path.basename(out_abs)}")
            cmd = [
                'java', '-jar', 'hap-sign-tool.jar', 'sign-app',
                '-keyAlias', 'oh-app1-key-v1',
                '-signAlg', 'SHA256withECDSA',
                '-mode', 'localSign',
                '-appCertFile', 'app1.cer',
                '-profileFile', 'app1-profile.p7b',
                '-inFile', in_abs,
                '-keystoreFile', './OpenHarmony.p12',
                '-outFile', out_abs,
                '-keyPwd', '123456',
                '-keystorePwd', '123456'
            ]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
            if result.returncode != 0:
                print(f"❌ 错误: 对应用包签名失败: {in_abs}")
                print(f"  输出: {result.stdout}")
                print(f"  错误: {result.stderr}")
                return False
            signed_paths.append(out_abs)
            print(f"  ✓ 已生成: {out_abs}")
        
        # 步骤 8: 验证应用包签名
        print(f"\n步骤 8: 验证应用包签名...")
        for out_abs in signed_paths:
            cmd = [
                'java', '-jar', 'hap-sign-tool.jar', 'verify-app',
                '-inFile', out_abs,
                '-outCertChain', './app1.cer',
                '-outProfile', 'app1-profile.p7b'
            ]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
            if result.returncode != 0:
                print(f"  ⚠ 验证失败: {os.path.basename(out_abs)}")
            else:
                print(f"  ✓ 验证成功: {os.path.basename(out_abs)}")
        
        print(f"\n✓ HAP 签名流程完成！")
        for p in signed_paths:
            print(f"  签名的 HAP 文件: {p}")
        
    except subprocess.TimeoutExpired:
        print(f"❌ 错误: 签名过程超时")
        return False
    except Exception as e:
        print(f"❌ 错误: 签名过程出错: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        os.chdir(original_dir)
    
    return True

def clean_sign(project_dir):
    """
    清除签名（删除 autosign 目录）
    
    Args:
        project_dir: 项目目录
    
    Returns:
        是否成功
    """
    print("=" * 80)
    print("清除签名...")
    print("=" * 80)
    
    autosign_dir = os.path.join(project_dir, 'autosign')
    
    if not os.path.exists(autosign_dir):
        print(f"✓ autosign 目录不存在，无需清除")
        return True
    
    try:
        shutil.rmtree(autosign_dir)
        print(f"✓ 已删除 autosign 目录: {autosign_dir}")
        return True
    except Exception as e:
        print(f"❌ 错误: 删除 autosign 目录失败: {e}")
        return False

def main():
    """
    主函数
    """
    if len(sys.argv) < 2:
        print("用法: python3 hapbuild.py <command> [options]")
        print()
        print("命令:")
        print("  build <project_dir> [product] [build_mode]  - 构建 HAP")
        print("  build-test <project_dir> [module_name] [product] - 编译单元测试用例（ohosTest 模块）")
        print("  sign <project_dir> [profile_type]           - 对 HAP 进行签名")
        print("  clean-sign <project_dir>                   - 清除签名（删除 autosign 目录）")
        print()
        print("参数:")
        print("  project_dir  - 项目目录路径（必需）")
        print("  product      - 产品名称，默认 'default'（仅用于 build/build-test 命令）")
        print("  build_mode   - 构建模式，默认 'debug'（可选: debug, release，仅用于 build 命令）")
        print("  module_name  - 测试模块名，默认 'entry@ohosTest'（仅用于 build-test 命令）")
        print("  profile_type - profile 类型，默认 'release'（可选: debug, release，仅用于 sign 命令）")
        print()
        print("示例:")
        print("  python3 hapbuild.py build /path/to/project")
        print("  python3 hapbuild.py build /path/to/project default debug")
        print("  python3 hapbuild.py build-test /path/to/project")
        print("  python3 hapbuild.py build-test /path/to/project entry@ohosTest default")
        print("  python3 hapbuild.py sign /path/to/project")
        print("  python3 hapbuild.py sign /path/to/project release")
        print("  python3 hapbuild.py clean-sign /path/to/project")
        print()
        print("注意: 为了向后兼容，如果第一个参数不是命令，将作为 build 命令处理")
        return 1
    
    command = sys.argv[1]
    
    # 向后兼容：如果第一个参数看起来像路径，则作为 build 命令处理
    if os.path.isdir(command) or (len(sys.argv) >= 2 and command not in ['build', 'build-test', 'sign', 'clean-sign']):
        # 旧的使用方式：python3 hapbuild.py <project_dir> [product] [build_mode]
        project_dir = sys.argv[1]
        product = sys.argv[2] if len(sys.argv) > 2 else 'default'
        build_mode = sys.argv[3] if len(sys.argv) > 3 else 'debug'
        command = 'build'
    else:
        # 新的使用方式：python3 hapbuild.py <command> <project_dir> [options]
        if len(sys.argv) < 3:
            print("❌ 错误: 缺少项目目录参数")
            return 1
        project_dir = sys.argv[2]
    
    # 检查项目目录
    if not os.path.isdir(project_dir):
        print(f"❌ 错误: 项目目录不存在: {project_dir}")
        return 1
    
    if command == 'build':
        product = sys.argv[3] if len(sys.argv) > 3 else 'default'
        build_mode = sys.argv[4] if len(sys.argv) > 4 else 'debug'
        
        # 检查环境
        env_ok, env_info = check_environment(project_dir)
        if not env_ok:
            print("\n❌ 环境检查失败，请先配置好编译环境")
            return 1
        
        # 验证版本一致性
        version_ok = verify_version_consistency(project_dir, env_info)
        if not version_ok:
            print("\n⚠ 警告: 版本验证失败，但将继续构建")
        
        # 构建 HAP
        build_ok = build_hap(project_dir, product, build_mode)
        
        if build_ok:
            return 0
        else:
            return 1
    
    elif command == 'build-test':
        module_name = sys.argv[3] if len(sys.argv) > 3 else 'entry@ohosTest'
        product = sys.argv[4] if len(sys.argv) > 4 else 'default'
        
        env_ok, env_info = check_environment(project_dir)
        if not env_ok:
            print("\n❌ 环境检查失败，请先配置好编译环境")
            return 1
        
        version_ok = verify_version_consistency(project_dir, env_info)
        if not version_ok:
            print("\n⚠ 警告: 版本验证失败，但将继续构建")
        
        build_ok = build_test_hap(project_dir, module_name=module_name, product=product)
        
        if build_ok:
            return 0
        else:
            return 1
    
    elif command == 'sign':
        profile_type = sys.argv[3] if len(sys.argv) > 3 else 'release'
        if profile_type not in ['debug', 'release']:
            print(f"❌ 错误: 无效的 profile_type: {profile_type}，必须是 'debug' 或 'release'")
            return 1
        
        sign_ok = sign_hap(project_dir, profile_type)
        
        if sign_ok:
            return 0
        else:
            return 1
    
    elif command == 'clean-sign':
        clean_ok = clean_sign(project_dir)
        
        if clean_ok:
            return 0
        else:
            return 1
    
    else:
        print(f"❌ 错误: 未知命令: {command}")
        print("  可用命令: build, build-test, sign, clean-sign")
        return 1
    
    project_dir = sys.argv[1]
    product = sys.argv[2] if len(sys.argv) > 2 else 'default'
    build_mode = sys.argv[3] if len(sys.argv) > 3 else 'debug'
    
    # 检查项目目录
    if not os.path.isdir(project_dir):
        print(f"❌ 错误: 项目目录不存在: {project_dir}")
        return 1
    
    # 检查环境
    env_ok, env_info = check_environment(project_dir)
    if not env_ok:
        print("\n❌ 环境检查失败，请先配置好编译环境")
        return 1
    
    # 验证版本一致性
    version_ok = verify_version_consistency(project_dir, env_info)
    if not version_ok:
        print("\n⚠ 警告: 版本验证失败，但将继续构建")
    
    # 构建 HAP
    build_ok = build_hap(project_dir, product, build_mode)
    
    if build_ok:
        return 0
    else:
        return 1

if __name__ == "__main__":
    sys.exit(main())
