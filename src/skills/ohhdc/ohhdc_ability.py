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


def _bracket_field(line: str, marker: str) -> str | None:
    try:
        return line.split(marker)[1].split("]")[0]
    except Exception:
        return None


def _hash_field(line: str, marker: str) -> str | None:
    try:
        return line.split(marker)[1].split()[0]
    except Exception:
        return None


def _new_result() -> dict:
    return {
        "abilities": [],
        "running_apps": [],
        "foreground_apps": [],
    }


def _start_ability_record(result: dict, line: str, state: dict) -> None:
    if state["current_ability"]:
        result["abilities"].append(state["current_ability"])
    ability = {}
    rid = _hash_field(line, "AbilityRecord ID #")
    if rid is not None:
        ability["ability_record_id"] = rid
    state["current_ability"] = ability
    state["in_ability_record"] = True


def _apply_ability_fields(result: dict, line: str, ability: dict) -> None:
    mapping = (
        ("bundle name [", "bundle_name"),
        ("main name [", "main_name"),
        ("ability type [", "ability_type"),
        ("app name [", "app_name"),
        ("start time [", "start_time"),
    )
    for marker, key in mapping:
        if marker in line:
            val = _bracket_field(line, marker)
            if val is not None:
                ability[key] = val
    if "app state #" in line:
        app_state = _hash_field(line, "app state #")
        if app_state is not None:
            ability["app_state"] = app_state
            if app_state == "FOREGROUND":
                result["foreground_apps"].append(ability.copy())
    elif "state #" in line and "AbilityRecord" not in line:
        state_val = _hash_field(line, "state #")
        if state_val is not None:
            ability["state"] = state_val
        if "start time [" in line:
            st = _bracket_field(line, "start time [")
            if st is not None:
                ability["start_time"] = st


def _leave_ability_record(line: str, result: dict, state: dict) -> bool:
    leaves = (
        line.startswith("MissionList")
        or line.startswith("ExtensionRecords")
        or line.startswith("AppRunningRecords")
    )
    if not leaves:
        return False
    if state["current_ability"]:
        result["abilities"].append(state["current_ability"])
    state["current_ability"] = None
    state["in_ability_record"] = False
    return True


def _start_app_running(result: dict, line: str, state: dict) -> None:
    if state["current_app"]:
        result["running_apps"].append(state["current_app"])
    app = {}
    rid = _hash_field(line, "AppRunningRecord ID #")
    if rid is not None:
        app["record_id"] = rid
    state["current_app"] = app
    state["in_app_running_record"] = True


def _apply_app_fields(line: str, app: dict) -> None:
    if "process name [" in line:
        val = _bracket_field(line, "process name [")
        if val is not None:
            app["process_name"] = val
    for marker, key in (("pid #", "pid"), ("uid #", "uid")):
        if marker in line:
            val = _hash_field(line, marker)
            if val is not None:
                app[key] = val
    if "state #" in line and "AppRunningRecord" not in line:
        val = _hash_field(line, "state #")
        if val is not None:
            app["state"] = val


def _leave_app_running(line: str, result: dict, state: dict) -> None:
    leaves = line.startswith("ExtensionRecords") or line.startswith(
        "PendingWantRecords"
    )
    if not leaves:
        return
    app = state["current_app"]
    if app and app.get("process_name"):
        result["running_apps"].append(app)
    state["current_app"] = None
    state["in_app_running_record"] = False


def _handle_ability_line(result: dict, line: str, state: dict) -> None:
    if "AbilityRecord ID #" in line:
        _start_ability_record(result, line, state)
    if state["in_ability_record"] and state["current_ability"]:
        _apply_ability_fields(result, line, state["current_ability"])
        _leave_ability_record(line, result, state)


def _handle_app_line(result: dict, line: str, state: dict) -> None:
    if "AppRunningRecord ID #" in line:
        _start_app_running(result, line, state)
        return
    if state["in_app_running_record"] and state["current_app"]:
        _apply_app_fields(line, state["current_app"])
        _leave_app_running(line, result, state)


def parse_ability_dump(output):
    """
    解析 Ability Manager dump（-a / -r）输出，提取关键信息。

    Args:
        output: Ability Manager dump 命令的原始输出

    Returns:
        dict: 包含解析后的信息
    """
    result = _new_result()
    state = {
        "current_ability": None,
        "in_ability_record": False,
        "in_app_running_record": False,
        "current_app": None,
    }
    for raw in output.split("\n"):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        _handle_ability_line(result, line, state)
        _handle_app_line(result, line, state)
    if state["current_ability"]:
        result["abilities"].append(state["current_ability"])
    if state["current_app"]:
        result["running_apps"].append(state["current_app"])
    return result


def _md_foreground(parsed_data: dict) -> str:
    apps = parsed_data["foreground_apps"]
    if not apps:
        return "### 前台应用\n\n未找到前台应用。\n\n"
    lines = [
        "### 前台应用\n\n",
        f"共找到 **{len(apps)}** 个前台应用：\n\n",
        "| 序号 | Bundle Name | Ability Name | Type | State | AbilityRecord ID | Start Time |\n",
        "|------|-------------|--------------|------|-------|------------------|------------|\n",
    ]
    for index, app in enumerate(apps, 1):
        lines.append(
            f"| {index} | `{app.get('bundle_name', 'N/A')}` | "
            f"`{app.get('main_name', 'N/A')}` | {app.get('ability_type', 'N/A')} | "
            f"{app.get('app_state', 'N/A')} | {app.get('ability_record_id', 'N/A')} | "
            f"{app.get('start_time', 'N/A')} |\n"
        )
    lines.append("\n")
    return "".join(lines)


def _md_running(parsed_data: dict) -> str:
    apps = parsed_data["running_apps"]
    if not apps:
        return "### 运行中的应用进程\n\n未找到运行中的应用进程。\n\n"
    lines = [
        "### 运行中的应用进程\n\n",
        f"共找到 **{len(apps)}** 个运行中的应用进程：\n\n",
        "| 序号 | Process Name | PID | UID | State |\n",
        "|------|--------------|-----|-----|-------|\n",
    ]
    for index, app in enumerate(apps, 1):
        lines.append(
            f"| {index} | `{app.get('process_name', 'N/A')}` | "
            f"{app.get('pid', 'N/A')} | {app.get('uid', 'N/A')} | "
            f"{app.get('state', 'N/A')} |\n"
        )
    lines.append("\n")
    return "".join(lines)


def _md_all_abilities(parsed_data: dict) -> str:
    apps = parsed_data["abilities"]
    if not apps:
        return ""
    lines = [
        "### 所有 Ability（包括后台）\n\n",
        f"共找到 **{len(apps)}** 个 ability：\n\n",
        "| 序号 | Bundle Name | Ability Name | Type | App State | State | AbilityRecord ID |\n",
        "|------|-------------|--------------|------|-----------|-------|------------------|\n",
    ]
    for index, app in enumerate(apps, 1):
        lines.append(
            f"| {index} | `{app.get('bundle_name', 'N/A')}` | "
            f"`{app.get('main_name', 'N/A')}` | {app.get('ability_type', 'N/A')} | "
            f"{app.get('app_state', 'N/A')} | {app.get('state', 'N/A')} | "
            f"{app.get('ability_record_id', 'N/A')} |\n"
        )
    lines.append("\n")
    return "".join(lines)


def format_abilities_as_markdown(parsed_data, show_all=False):
    """
    将解析后的 ability 信息格式化为 Markdown

    Args:
        parsed_data: parse_ability_dump 返回的字典
        show_all: 是否显示所有 ability（包括后台），默认只显示前台

    Returns:
        str: Markdown 格式的字符串
    """
    parts = ["## 设备应用状态\n\n", _md_foreground(parsed_data), _md_running(parsed_data)]
    if show_all:
        parts.append(_md_all_abilities(parsed_data))
    return "".join(parts)
