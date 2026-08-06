#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""ohhdc Ability dump 解析与 Markdown 格式化。"""

from __future__ import annotations


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
