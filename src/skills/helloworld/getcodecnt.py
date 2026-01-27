#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
获取 OpenHarmony 社区数据
1. 雇主数据：访问 employer/list API 获取前10个雇主的数据
2. 贡献者排名：访问 author/rank API 获取前10名贡献者的数据
3. 提交详情：访问 review/metric/detail API 获取提交详情数据
"""

import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime, timedelta
import csv
import os

def calculate_time_range(time_period):
    """
    根据时间周期计算开始和结束时间
    
    Args:
        time_period: 时间周期字符串，支持：
            - "1month" 或 "1m" 或 "近1个月" - 近1个月
            - "2month" 或 "2m" 或 "近2个月" - 近2个月
            - "3month" 或 "3m" 或 "近3个月" - 近3个月
            - "6month" 或 "6m" 或 "近6个月" - 近6个月
            - "1year" 或 "1y" 或 "近1年" - 近1年
            - "2year" 或 "2y" 或 "近2年" - 近2年
            - "3year" 或 "3y" 或 "近3年" - 近3年
            - "all" 或 "全部" - 全部时间（从2020-08-26开始）
    
    Returns:
        tuple: (start_time, end_time) 格式为 "YYYY-MM-DD HH:MM:SS"
    """
    now = datetime.now()
    end_time = now.strftime("%Y-%m-%d %H:%M:%S")
    
    period_lower = time_period.lower().strip()
    
    if period_lower in ['1week', '1w', '7days', '7d', '近1周', '1周', '一周', '最近一周']:
        start_time = (now - timedelta(days=7)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['2week', '2w', '14days', '14d', '近2周', '2周', '两周']:
        start_time = (now - timedelta(days=14)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['1month', '1m', '近1个月', '1个月', '一个月']:
        start_time = (now - timedelta(days=30)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['2month', '2m', '近2个月', '2个月', '两个月']:
        start_time = (now - timedelta(days=60)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['3month', '3m', '近3个月', '3个月', '三个月']:
        start_time = (now - timedelta(days=90)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['6month', '6m', '近6个月', '6个月', '六个月']:
        start_time = (now - timedelta(days=180)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['1year', '1y', '近1年', '1年', '一年']:
        start_time = (now - timedelta(days=365)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['2year', '2y', '近2年', '2年', '两年']:
        start_time = (now - timedelta(days=730)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['3year', '3y', '近3年', '3年', '三年']:
        start_time = (now - timedelta(days=1095)).strftime("%Y-%m-%d %H:%M:%S")
    elif period_lower in ['all', '全部', 'alltime', '全部时间']:
        start_time = "2020-08-26 00:00:00"  # OpenHarmony项目开始时间
    else:
        # 默认使用全部时间
        start_time = "2020-08-26 00:00:00"
    
    return start_time, end_time

def get_time_period_description(time_period):
    """
    获取时间周期的描述
    """
    period_lower = time_period.lower().strip()
    
    period_map = {
        '1week': '近1周', '1w': '近1周', '7days': '近1周', '7d': '近1周', '近1周': '近1周', '1周': '近1周', '一周': '近1周', '最近一周': '近1周',
        '2week': '近2周', '2w': '近2周', '14days': '近2周', '14d': '近2周', '近2周': '近2周', '2周': '近2周', '两周': '近2周',
        '1month': '近1个月', '1m': '近1个月', '近1个月': '近1个月',
        '2month': '近2个月', '2m': '近2个月', '近2个月': '近2个月',
        '3month': '近3个月', '3m': '近3个月', '近3个月': '近3个月',
        '6month': '近6个月', '6m': '近6个月', '近6个月': '近6个月',
        '1year': '近1年', '1y': '近1年', '近1年': '近1年',
        '2year': '近2年', '2y': '近2年', '近2年': '近2年',
        '3year': '近3年', '3y': '近3年', '近3年': '近3年',
        'all': '全部时间', '全部': '全部时间', 'alltime': '全部时间'
    }
    
    return period_map.get(period_lower, '全部时间')

def get_employer_data(time_period="all"):
    """
    访问API并获取前10个雇主的数据
    
    Args:
        time_period: 时间周期，如 "1month", "2month", "3year", "all" 等
    """
    api_url = "https://www.openharmony.cn/api/statistics/codeline/employer/list"
    
    # 设置请求头，模拟浏览器访问
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://www.openharmony.cn',
        'Referer': 'https://www.openharmony.cn/',
        'Connection': 'keep-alive',
    }
    
    # 计算时间范围
    start_time, end_time = calculate_time_range(time_period)
    period_desc = get_time_period_description(time_period)
    
    payload = {
        "project": ["openharmony"],
        "branch": "master",
        "repos": [],
        "repo": "",
        "isThird": [],
        "sig": "",
        "tag": "",
        "startTime": start_time,
        "endTime": end_time,
        "exportType": 2,
        "isExport": 0,
        "employer": "",
        "pageCurrent": 1,
        "pageSize": 20  # 获取20条，然后取前10条
    }
    
    try:
        print(f"正在访问API: {api_url}")
        print(f"时间范围: {period_desc} ({start_time} 至 {end_time})")
        print(f"请求参数: pageSize={payload['pageSize']}, pageCurrent={payload['pageCurrent']}")
        
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        # 解析JSON响应
        data = response.json()
        
        # 检查响应结构
        if isinstance(data, dict):
            # 检查API响应码
            code = data.get('code', '')
            message = data.get('message', '')
            
            if code == '20000' or code == 20000 or message == '请求成功':
                # 数据在 data.resultList 中
                data_obj = data.get('data', {})
                
                if isinstance(data_obj, dict):
                    # 尝试 resultList
                    employers_list = data_obj.get('resultList', [])
                    
                    # 如果没有resultList，尝试其他可能的键
                    if not employers_list:
                        for key in ['list', 'records', 'items', 'result', 'employers', 'content', 'data']:
                            if key in data_obj and isinstance(data_obj[key], list):
                                employers_list = data_obj[key]
                                break
                    
                    if employers_list:
                        total = data_obj.get('total', len(employers_list))
                        print(f"✓ 成功获取数据: 共 {total} 条，当前页 {len(employers_list)} 条")
                        return parse_api_json_data(employers_list)
                    else:
                        print(f"⚠ 数据对象中没有找到列表数据")
                        print(f"   data对象键: {list(data_obj.keys())}")
                elif isinstance(data_obj, list):
                    print(f"✓ 成功获取 {len(data_obj)} 条数据")
                    return parse_api_json_data(data_obj)
                else:
                    print(f"⚠ data字段类型: {type(data_obj)}")
            else:
                print(f"⚠ API返回错误: code={code}, message={message}")
            
            # 如果上面的逻辑都没找到，尝试其他可能的结构
            possible_keys = ['data', 'list', 'records', 'items', 'result', 'employers', 'content', 'resultList']
            for key in possible_keys:
                if key in data and isinstance(data[key], list):
                    print(f"✓ 在顶层找到数据列表: {key}, 共 {len(data[key])} 条")
                    return parse_api_json_data(data[key])
            
            print(f"⚠ 响应数据结构: {list(data.keys()) if isinstance(data, dict) else 'list'}")
            print(f"   响应内容预览: {str(data)[:300]}...")
            
        # 如果直接是列表
        elif isinstance(data, list):
            print(f"✓ 成功获取 {len(data)} 条数据")
            return parse_api_json_data(data)
        else:
            print(f"⚠ 响应不是预期的JSON格式")
            
    except requests.exceptions.RequestException as e:
        print(f"❌ 请求错误: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"   状态码: {e.response.status_code}")
            try:
                print(f"   响应内容: {e.response.text[:200]}")
            except:
                pass
    except json.JSONDecodeError as e:
        print(f"❌ JSON解析错误: {e}")
    except Exception as e:
        print(f"❌ 处理错误: {e}")
        import traceback
        traceback.print_exc()
    
    return None

def parse_html_data(html_content):
    """
    解析HTML内容，提取雇主数据
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    employers = []
    
    # 尝试多种可能的选择器来找到数据
    # 方法1: 查找表格
    tables = soup.find_all('table')
    for table in tables:
        rows = table.find_all('tr')[1:11]  # 跳过表头，取前10行
        for row in rows:
            cells = row.find_all(['td', 'th'])
            if len(cells) >= 6:
                employer = {
                    'name': cells[0].get_text(strip=True),
                    'pr': cells[1].get_text(strip=True),
                    'added_code': cells[2].get_text(strip=True),
                    'deleted_code': cells[3].get_text(strip=True),
                    'modified_code': cells[4].get_text(strip=True),
                    'modification_ratio': cells[5].get_text(strip=True)
                }
                employers.append(employer)
    
    # 方法2: 如果表格没找到，尝试查找div或列表
    if not employers:
        # 查找包含数据的div
        data_divs = soup.find_all('div', class_=re.compile(r'employer|company|rank|item', re.I))
        for div in data_divs[:10]:
            text = div.get_text(strip=True)
            if text:
                # 尝试解析文本数据
                parts = re.split(r'\s+', text)
                if len(parts) >= 6:
                    employer = {
                        'name': parts[0],
                        'pr': parts[1] if len(parts) > 1 else '',
                        'added_code': parts[2] if len(parts) > 2 else '',
                        'deleted_code': parts[3] if len(parts) > 3 else '',
                        'modified_code': parts[4] if len(parts) > 4 else '',
                        'modification_ratio': parts[5] if len(parts) > 5 else ''
                    }
                    employers.append(employer)
    
    # 方法3: 尝试从script标签中提取JSON数据
    if not employers:
        scripts = soup.find_all('script')
        for script in scripts:
            if script.string:
                # 查找JSON数据
                json_match = re.search(r'(\[.*?\]|\{.*?\})', script.string, re.DOTALL)
                if json_match:
                    try:
                        data = json.loads(json_match.group(1))
                        if isinstance(data, list) and len(data) > 0:
                            return parse_json_data(data)
                    except:
                        pass
    
    return employers[:10]  # 返回前10个

def parse_api_json_data(data_list):
    """
    解析API返回的JSON数据
    """
    employers = []
    
    for item in data_list:
        if isinstance(item, dict):
            # 尝试多种可能的字段名
            name = (item.get('employerName') or 
                   item.get('employer') or 
                   item.get('name') or 
                   item.get('company') or 
                   item.get('organization') or 
                   item.get('orgName') or
                   '')
            
            pr = (item.get('pr') or 
                 item.get('prCount') or 
                 item.get('pullRequests') or 
                 item.get('prNum') or 
                 item.get('prs') or 
                 item.get('prCounts') or
                 '0')
            
            # API返回的字段可能是 additions, deletions
            added_code = (item.get('addedLines') or 
                         item.get('addedCode') or 
                         item.get('add') or 
                         item.get('addLines') or 
                         item.get('insertions') or 
                         item.get('additions') or
                         '0')
            
            deleted_code = (item.get('deletedLines') or 
                           item.get('deletedCode') or 
                           item.get('delete') or 
                           item.get('delLines') or 
                           item.get('deletions') or
                           '0')
            
            # 修改代码 = 新增 + 删除
            modified_code = (item.get('modifiedLines') or 
                            item.get('modifiedCode') or 
                            item.get('modify') or 
                            item.get('modLines') or 
                            item.get('changes') or
                            '0')
            
            # 如果没有修改代码，尝试计算
            if not modified_code or modified_code == '0':
                try:
                    added = int(str(added_code).replace(',', '')) if added_code else 0
                    deleted = int(str(deleted_code).replace(',', '')) if deleted_code else 0
                    modified_code = str(added + deleted)
                except:
                    modified_code = '0'
            
            modification_ratio = (item.get('modificationRatio') or 
                                item.get('ratio') or 
                                item.get('percent') or 
                                item.get('percentage') or 
                                item.get('proportion') or
                                item.get('modifyRatio') or
                                '')
            
            # 如果没有比例，尝试计算
            if not modification_ratio or modification_ratio == '':
                try:
                    added = int(str(added_code).replace(',', '')) if added_code else 0
                    deleted = int(str(deleted_code).replace(',', '')) if deleted_code else 0
                    modified = int(str(modified_code).replace(',', '')) if modified_code else 0
                    total = added + deleted
                    if total > 0:
                        # 修改量占比 = (删除代码 / 总代码) * 100
                        ratio = (deleted / total) * 100
                        modification_ratio = f"{ratio:.2f}%"
                    else:
                        modification_ratio = '0%'
                except Exception as e:
                    modification_ratio = 'N/A'
            
            # 格式化数字，添加千位分隔符
            try:
                if added_code and str(added_code).isdigit():
                    added_code = f"{int(added_code):,}"
            except:
                pass
            
            try:
                if deleted_code and str(deleted_code).isdigit():
                    deleted_code = f"{int(deleted_code):,}"
            except:
                pass
            
            try:
                if modified_code and str(modified_code).isdigit():
                    modified_code = f"{int(modified_code):,}"
            except:
                pass
            
            employer = {
                'name': str(name) if name else '未知',
                'pr': str(pr),
                'added_code': str(added_code),
                'deleted_code': str(deleted_code),
                'modified_code': str(modified_code),
                'modification_ratio': str(modification_ratio)
            }
            employers.append(employer)
    
    return employers[:10]  # 返回前10个

def parse_json_data(data):
    """
    解析JSON数据（兼容旧版本）
    """
    employers = []
    
    # 如果数据是列表
    if isinstance(data, list):
        return parse_api_json_data(data)
    
    # 如果数据是字典，查找包含列表的键
    elif isinstance(data, dict):
        # 查找可能包含雇主数据的键
        for key in ['data', 'list', 'employers', 'companies', 'results', 'items', 'records', 'content']:
            if key in data and isinstance(data[key], list):
                return parse_api_json_data(data[key])
    
    return employers[:10]

def print_employer_data(employers):
    """
    打印雇主数据
    """
    if not employers:
        print("未找到雇主数据")
        return
    
    print("\n" + "="*100)
    print(f"{'排名':<6} {'雇主名称':<30} {'PR数':<12} {'新增代码':<12} {'删除代码':<12} {'修改代码':<12} {'修改量占比':<12}")
    print("="*100)
    
    for i, employer in enumerate(employers[:10], 1):
        name = employer.get('name', 'N/A')
        pr = employer.get('pr', 'N/A')
        added = employer.get('added_code', 'N/A')
        deleted = employer.get('deleted_code', 'N/A')
        modified = employer.get('modified_code', 'N/A')
        ratio = employer.get('modification_ratio', 'N/A')
        
        print(f"{i:<6} {name:<30} {pr:<12} {added:<12} {deleted:<12} {modified:<12} {ratio:<12}")
    
    print("="*100)
    print(f"\n共显示 {len(employers[:10])} 个雇主的数据\n")

def get_author_rank_data(time_period="all"):
    """
    访问API并获取前10名贡献者的数据
    
    Args:
        time_period: 时间周期，如 "1month", "2month", "3year", "all" 等
    """
    api_url = "https://www.openharmony.cn/api/statistics/codeline/author/rank"
    
    # 设置请求头，模拟浏览器访问
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://www.openharmony.cn',
        'Referer': 'https://www.openharmony.cn/',
        'Connection': 'keep-alive',
    }
    
    # 计算时间范围
    start_time, end_time = calculate_time_range(time_period)
    period_desc = get_time_period_description(time_period)
    
    payload = {
        "project": ["openharmony"],
        "branch": "master",
        "repos": [],
        "repo": "",
        "isThird": [],
        "sig": "",
        "tag": "",
        "ohFlag": 1,
        "startTime": start_time,
        "endTime": end_time,
        "isExport": 0,
        "employer": ""
    }
    
    try:
        print(f"正在访问API: {api_url}")
        print(f"时间范围: {period_desc} ({start_time} 至 {end_time})")
        print(f"请求参数: ohFlag={payload['ohFlag']}")
        
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        # 解析JSON响应
        data = response.json()
        
        # 检查响应结构
        if isinstance(data, dict):
            # 检查API响应码
            code = data.get('code', '')
            message = data.get('message', '')
            
            if code == '20000' or code == 20000 or message == '请求成功':
                # 数据在 data.resultList 或 data 中
                data_obj = data.get('data', {})
                
                if isinstance(data_obj, dict):
                    # 尝试 resultList
                    authors_list = data_obj.get('resultList', [])
                    
                    # 如果没有resultList，尝试其他可能的键
                    if not authors_list:
                        for key in ['list', 'records', 'items', 'result', 'authors', 'content', 'data', 'rankList']:
                            if key in data_obj and isinstance(data_obj[key], list):
                                authors_list = data_obj[key]
                                break
                    
                    if authors_list:
                        total = data_obj.get('total', len(authors_list))
                        print(f"✓ 成功获取数据: 共 {total} 条，当前页 {len(authors_list)} 条")
                        return parse_author_json_data(authors_list)
                    else:
                        print(f"⚠ 数据对象中没有找到列表数据")
                        print(f"   data对象键: {list(data_obj.keys())}")
                elif isinstance(data_obj, list):
                    print(f"✓ 成功获取 {len(data_obj)} 条数据")
                    return parse_author_json_data(data_obj)
                else:
                    print(f"⚠ data字段类型: {type(data_obj)}")
            else:
                print(f"⚠ API返回错误: code={code}, message={message}")
            
            # 如果上面的逻辑都没找到，尝试其他可能的结构
            possible_keys = ['data', 'list', 'records', 'items', 'result', 'authors', 'content', 'resultList', 'rankList']
            for key in possible_keys:
                if key in data and isinstance(data[key], list):
                    print(f"✓ 在顶层找到数据列表: {key}, 共 {len(data[key])} 条")
                    return parse_author_json_data(data[key])
            
            print(f"⚠ 响应数据结构: {list(data.keys()) if isinstance(data, dict) else 'list'}")
            print(f"   响应内容预览: {str(data)[:300]}...")
            
        # 如果直接是列表
        elif isinstance(data, list):
            print(f"✓ 成功获取 {len(data)} 条数据")
            return parse_author_json_data(data)
            
    except requests.exceptions.RequestException as e:
        print(f"❌ 请求错误: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"   状态码: {e.response.status_code}")
            try:
                print(f"   响应内容: {e.response.text[:200]}")
            except:
                pass
    except json.JSONDecodeError as e:
        print(f"❌ JSON解析错误: {e}")
    except Exception as e:
        print(f"❌ 处理错误: {e}")
        import traceback
        traceback.print_exc()
    
    return None

def match_masked_email(masked_email, target_email):
    """
    匹配被屏蔽的邮箱地址
    
    规则：匹配开头2个字母、@前一个字母、@及后面的所有
    例如：wa***i@kaihong.com 应该匹配 wangshi@kaihong.com
    
    Args:
        masked_email: 被屏蔽的邮箱，如 "wa***i@kaihong.com"
        target_email: 目标邮箱，如 "wangshi@kaihong.com"
    
    Returns:
        bool: 是否匹配
    """
    if not masked_email or not target_email:
        return False
    
    # 提取 @ 符号前后的部分
    if '@' not in masked_email or '@' not in target_email:
        return False
    
    masked_local, masked_domain = masked_email.split('@', 1)
    target_local, target_domain = target_email.split('@', 1)
    
    # 域名必须完全匹配
    if masked_domain != target_domain:
        return False
    
    # 检查本地部分
    # 规则：开头2个字母 + @前1个字母
    if len(masked_local) < 3 or len(target_local) < 3:
        return False
    
    # 提取开头2个字母
    masked_prefix = masked_local[:2]
    target_prefix = target_local[:2]
    
    if masked_prefix != target_prefix:
        return False
    
    # 提取@前最后一个字母
    masked_last = masked_local[-1]
    target_last = target_local[-1]
    
    if masked_last != target_last:
        return False
    
    return True

def parse_author_json_data(data_list):
    """
    解析API返回的贡献者JSON数据
    """
    authors = []
    
    for item in data_list:
        if isinstance(item, dict):
            # 根据实际API返回的字段：authorEmail, employer, additions, deletions, changeNum
            # 获取贡献者名称（使用完整邮箱地址）
            author_email = item.get('authorEmail', '')
            if author_email:
                # 使用完整的邮箱地址作为名称
                name = author_email
            else:
                # 尝试其他可能的字段
                name = (item.get('authorName') or 
                       item.get('author') or 
                       item.get('name') or 
                       item.get('userName') or 
                       item.get('username') or 
                       item.get('contributor') or
                       item.get('gitName') or
                       item.get('account') or
                       item.get('login') or
                       '未知')
            
            # PR数（API可能没有这个字段，设为0）
            # 注意：changeNum是修改代码数，不是PR数
            pr = (item.get('pr') or 
                 item.get('prCount') or 
                 item.get('pullRequests') or 
                 item.get('prNum') or 
                 item.get('prs') or 
                 item.get('prCounts') or
                 item.get('commitCount') or  # 可能是提交数
                 '0')
            
            # API返回的字段是 additions, deletions
            added_code = (item.get('additions') or 
                         item.get('addedLines') or 
                         item.get('addedCode') or 
                         item.get('add') or 
                         item.get('addLines') or 
                         item.get('insertions') or
                         '0')
            
            deleted_code = (item.get('deletions') or
                           item.get('deletedLines') or 
                           item.get('deletedCode') or 
                           item.get('delete') or 
                           item.get('delLines') or
                           '0')
            
            # 修改代码 = 新增 + 删除
            modified_code = (item.get('modifiedLines') or 
                            item.get('modifiedCode') or 
                            item.get('modify') or 
                            item.get('modLines') or 
                            item.get('changes') or
                            '0')
            
            # 如果没有修改代码，尝试计算
            if not modified_code or modified_code == '0':
                try:
                    added = int(str(added_code).replace(',', '')) if added_code else 0
                    deleted = int(str(deleted_code).replace(',', '')) if deleted_code else 0
                    modified_code = str(added + deleted)
                except:
                    modified_code = '0'
            
            modification_ratio = (item.get('modificationRatio') or 
                                item.get('ratio') or 
                                item.get('percent') or 
                                item.get('percentage') or 
                                item.get('proportion') or
                                item.get('modifyRatio') or
                                '')
            
            # 如果没有比例，尝试计算
            if not modification_ratio or modification_ratio == '':
                try:
                    added = int(str(added_code).replace(',', '')) if added_code else 0
                    deleted = int(str(deleted_code).replace(',', '')) if deleted_code else 0
                    modified = int(str(modified_code).replace(',', '')) if modified_code else 0
                    total = added + deleted
                    if total > 0:
                        # 修改量占比 = (删除代码 / 总代码) * 100
                        ratio = (deleted / total) * 100
                        modification_ratio = f"{ratio:.2f}%"
                    else:
                        modification_ratio = '0%'
                except Exception as e:
                    modification_ratio = 'N/A'
            
            # 格式化数字，添加千位分隔符
            try:
                if added_code and str(added_code).replace(',', '').isdigit():
                    added_code = f"{int(str(added_code).replace(',', '')):,}"
            except:
                pass
            
            try:
                if deleted_code and str(deleted_code).replace(',', '').isdigit():
                    deleted_code = f"{int(str(deleted_code).replace(',', '')):,}"
            except:
                pass
            
            try:
                if modified_code and str(modified_code).replace(',', '').isdigit():
                    modified_code = f"{int(str(modified_code).replace(',', '')):,}"
            except:
                pass
            
            author = {
                'name': str(name) if name else '未知',
                'pr': str(pr),
                'added_code': str(added_code),
                'deleted_code': str(deleted_code),
                'modified_code': str(modified_code),
                'modification_ratio': str(modification_ratio)
            }
            authors.append(author)
    
    return authors[:10]  # 返回前10个

def print_author_data(authors):
    """
    打印贡献者数据
    """
    if not authors:
        print("未找到贡献者数据")
        return
    
    print("\n" + "="*120)
    print(f"{'排名':<6} {'贡献者邮箱':<50} {'PR数':<12} {'新增代码':<12} {'删除代码':<12} {'修改代码':<12} {'修改量占比':<12}")
    print("="*120)
    
    for i, author in enumerate(authors[:10], 1):
        name = author.get('name', 'N/A')
        pr = author.get('pr', 'N/A')
        added = author.get('added_code', 'N/A')
        deleted = author.get('deleted_code', 'N/A')
        modified = author.get('modified_code', 'N/A')
        ratio = author.get('modification_ratio', 'N/A')
        
        # 如果名称太长，截断显示
        display_name = name[:48] if len(name) > 48 else name
        
        print(f"{i:<6} {display_name:<50} {pr:<12} {added:<12} {deleted:<12} {modified:<12} {ratio:<12}")
    
    print("="*120)
    print(f"\n共显示 {len(authors[:10])} 名贡献者的数据\n")

def save_to_csv(data, query_type, time_period):
    """
    将查询结果保存到CSV文件
    
    Args:
        data: 查询到的数据列表（雇主或贡献者）
        query_type: 查询类型 'employer' 或 'author'
        time_period: 时间范围，如 '1month', '2month', 'all' 等
    """
    if not data or len(data) == 0:
        return None
    
    # 生成文件名：查询名称+查询时间范围
    period_desc = get_time_period_description(time_period)
    # 将中文转换为英文，用于文件名
    period_map = {
        '近1个月': '1month',
        '近2个月': '2month',
        '近3个月': '3month',
        '近6个月': '6month',
        '近1年': '1year',
        '近2年': '2year',
        '近3年': '3year',
        '全部时间': 'all'
    }
    period_file = period_map.get(period_desc, time_period.lower().replace('个月', 'month').replace('年', 'year').replace('近', '').replace(' ', ''))
    
    # 生成文件名
    filename = f"{query_type}_{period_file}.csv"
    
    try:
        with open(filename, 'w', newline='', encoding='utf-8-sig') as csvfile:
            # 根据查询类型设置CSV列
            if query_type == 'employer':
                fieldnames = ['排名', '雇主名称', 'PR数', '新增代码', '删除代码', '修改代码', '修改量占比']
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                for i, item in enumerate(data, 1):
                    writer.writerow({
                        '排名': i,
                        '雇主名称': item.get('name', 'N/A'),
                        'PR数': item.get('pr', 'N/A'),
                        '新增代码': item.get('added_code', 'N/A'),
                        '删除代码': item.get('deleted_code', 'N/A'),
                        '修改代码': item.get('modified_code', 'N/A'),
                        '修改量占比': item.get('modification_ratio', 'N/A')
                    })
            else:  # author
                fieldnames = ['排名', '贡献者邮箱', 'PR数', '新增代码', '删除代码', '修改代码', '修改量占比']
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                for i, item in enumerate(data, 1):
                    writer.writerow({
                        '排名': i,
                        '贡献者邮箱': item.get('name', 'N/A'),
                        'PR数': item.get('pr', 'N/A'),
                        '新增代码': item.get('added_code', 'N/A'),
                        '删除代码': item.get('deleted_code', 'N/A'),
                        '修改代码': item.get('modified_code', 'N/A'),
                        '修改量占比': item.get('modification_ratio', 'N/A')
                    })
        
        print(f"✓ 数据已保存到CSV文件: {filename}")
        return filename
    except Exception as e:
        print(f"⚠ 保存CSV文件失败: {e}")
        return None

def get_detail_data(employer="", branch="master", time_period="all", page_current=1, page_size=10, author_email=""):
    """
    访问API并获取提交详情数据
    
    Args:
        employer: 雇主名称，如 "深开鸿"（可选，如果提供author_email可以留空）
        branch: 分支/版本，默认 "master"
        time_period: 时间周期，如 "1month", "2month", "all" 等
        page_current: 当前页码，默认1
        page_size: 每页数量，默认10
        author_email: 作者邮箱，如 "goujingjing@kaihong.com"（可选）
    """
    api_url = "https://www.openharmony.cn/api/statistics/review/metric/detail"
    
    # 设置请求头，模拟浏览器访问
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://www.openharmony.cn',
        'Referer': 'https://www.openharmony.cn/',
        'Connection': 'keep-alive',
    }
    
    # 计算时间范围
    start_time, end_time = calculate_time_range(time_period)
    period_desc = get_time_period_description(time_period)
    
    payload = {
        "ohFlag": 1,
        "uuid": "",
        "repo": "",
        "tag": "",
        "project": "openharmony",
        "branch": branch,
        "employer": employer,
        "authorEmail": author_email,
        "rollbackCount": "",
        "additions": "",
        "deletions": "",
        "changeNumSort": "",
        "rollbackSort": "",
        "startTime": start_time,
        "endTime": end_time,
        "isExport": 0,
        "pageCurrent": page_current,
        "pageSize": page_size
    }
    
    try:
        print(f"正在访问API: {api_url}")
        if author_email:
            print(f"查询参数: 作者邮箱={author_email}, 分支={branch}, 时间范围={period_desc}")
        else:
            print(f"查询参数: 雇主={employer}, 分支={branch}, 时间范围={period_desc}")
        print(f"  开始时间: {start_time}, 结束时间: {end_time}")
        print(f"  页码: {page_current}, 每页: {page_size}")
        
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        # 解析JSON响应
        data = response.json()
        
        # 检查响应结构
        if isinstance(data, dict):
            code = data.get('code', '')
            message = data.get('message', '')
            
            if code == '20000' or code == 20000 or message == '请求成功':
                data_obj = data.get('data', {})
                
                if isinstance(data_obj, dict):
                    # 尝试获取详情列表
                    detail_list = data_obj.get('resultList', [])
                    
                    if not detail_list:
                        for key in ['list', 'records', 'items', 'result', 'details', 'content', 'data']:
                            if key in data_obj and isinstance(data_obj[key], list):
                                detail_list = data_obj[key]
                                break
                    
                    if detail_list:
                        total = data_obj.get('total', len(detail_list))
                        print(f"✓ 成功获取数据: 共 {total} 条，当前页 {len(detail_list)} 条")
                        return {
                            'details': detail_list,
                            'total': total,
                            'page_current': page_current,
                            'page_size': page_size,
                            'employer': employer,
                            'author_email': author_email,
                            'branch': branch,
                            'time_period': period_desc,
                            'start_time': start_time,
                            'end_time': end_time
                        }
                    else:
                        print(f"⚠ 数据对象中没有找到列表数据")
                        print(f"   data对象键: {list(data_obj.keys())}")
                elif isinstance(data_obj, list):
                    print(f"✓ 成功获取 {len(data_obj)} 条数据")
                    return {
                        'details': data_obj,
                        'total': len(data_obj),
                        'page_current': page_current,
                        'page_size': page_size,
                        'employer': employer,
                        'author_email': author_email,
                        'branch': branch,
                        'time_period': period_desc,
                        'start_time': start_time,
                        'end_time': end_time
                    }
            else:
                print(f"⚠ API返回错误: code={code}, message={message}")
            
            # 尝试其他可能的结构
            possible_keys = ['data', 'list', 'records', 'items', 'result', 'details', 'content', 'resultList']
            for key in possible_keys:
                if key in data and isinstance(data[key], list):
                    print(f"✓ 在顶层找到数据列表: {key}, 共 {len(data[key])} 条")
                    return {
                        'details': data[key],
                        'total': len(data[key]),
                        'page_current': page_current,
                        'page_size': page_size,
                        'employer': employer,
                        'author_email': author_email,
                        'branch': branch,
                        'time_period': period_desc,
                        'start_time': start_time,
                        'end_time': end_time
                    }
            
            print(f"⚠ 响应数据结构: {list(data.keys()) if isinstance(data, dict) else 'list'}")
            print(f"   响应内容预览: {str(data)[:300]}...")
            
        elif isinstance(data, list):
            print(f"✓ 成功获取 {len(data)} 条数据")
            return {
                'details': data,
                'total': len(data),
                'page_current': page_current,
                'page_size': page_size,
                'employer': employer,
                'author_email': author_email,
                'branch': branch,
                'time_period': period_desc,
                'start_time': start_time,
                'end_time': end_time
            }
            
    except requests.exceptions.RequestException as e:
        print(f"❌ 请求错误: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"   状态码: {e.response.status_code}")
            try:
                print(f"   响应内容: {e.response.text[:200]}")
            except:
                pass
    except json.JSONDecodeError as e:
        print(f"❌ JSON解析错误: {e}")
    except Exception as e:
        print(f"❌ 处理错误: {e}")
        import traceback
        traceback.print_exc()
    
    return None

def parse_detail_data(detail_list):
    """
    解析详情数据
    """
    details = []
    
    for item in detail_list:
        if isinstance(item, dict):
            repo = item.get('repo', '')
            commit_id = item.get('commitId', item.get('sha', item.get('hash', '')))
            
            # 优先使用API返回的commitUrl，如果没有则构建
            commit_url = item.get('commitUrl', '')
            if not commit_url and repo and commit_id:
                # 如果API返回的是gitcode.com，使用gitcode.com，否则使用gitee.com
                repo_clean = repo.strip()
                # 根据实际情况，OpenHarmony可能使用gitcode.com或gitee.com
                commit_url = f"https://gitcode.com/openharmony/{repo_clean}/commit/{commit_id}"
            
            # 获取作者邮箱并替换星号为x
            author_email = item.get('authorEmail', item.get('authorEmail', ''))
            if author_email:
                # 将邮箱中的星号(*)替换为x
                author_email = author_email.replace('*', 'x')
            
            # 提取所有可用字段
            detail = {
                'id': str(item.get('id', '')),
                'uuid': item.get('uuid', ''),
                'project': item.get('project', ''),
                'repo': repo,
                'branch': item.get('branch', ''),
                'employer': item.get('employer', ''),
                'author_email': author_email,
                'author_name': item.get('authorName', ''),
                'committer': item.get('committer', ''),
                'additions': str(item.get('additions', item.get('addedLines', item.get('add', '0')))),
                'deletions': str(item.get('deletions', item.get('deletedLines', item.get('delete', '0')))),
                'change_num': str(item.get('changeNum', item.get('changes', item.get('modified', '0')))),
                'rollback_count': str(item.get('rollbackCount', item.get('rollbacks', '0'))),
                'commit_time': item.get('committerDate', item.get('commitTime', item.get('time', item.get('date', '')))),
                'author_date': item.get('authorDate', ''),
                'merge_time': item.get('mergeTime', ''),
                'commit_id': commit_id,
                'commit_message': item.get('detailMessage', item.get('commitMessage', item.get('message', ''))),
                'commit_url': commit_url,
                'pr_url': item.get('prUrl', ''),
                'repo_id': str(item.get('repoId', '')),
                'sig': item.get('sig', ''),
                'status': item.get('status', ''),
            }
            details.append(detail)
    
    return details

def print_detail_data(result_data):
    """
    打印详情数据
    """
    if not result_data or not result_data.get('details'):
        print("未找到详情数据")
        return
    
    details = parse_detail_data(result_data['details'])
    total = result_data.get('total', len(details))
    employer = result_data.get('employer', 'N/A')
    branch = result_data.get('branch', 'N/A')
    time_period = result_data.get('time_period', 'N/A')
    
    print("\n" + "="*140)
    print(f"提交详情 - 雇主: {employer}, 分支: {branch}, 时间范围: {time_period}")
    print(f"总计: {total} 条记录")
    print("="*140)
    print(f"{'序号':<6} {'仓库':<30} {'作者邮箱':<40} {'新增':<12} {'删除':<12} {'变更':<12} {'回退':<8} {'提交时间':<20}")
    print("="*140)
    
    for i, detail in enumerate(details, 1):
        repo = detail.get('repo', 'N/A')[:28]
        author = detail.get('author_email', 'N/A')[:38]
        additions = detail.get('additions', '0')
        deletions = detail.get('deletions', '0')
        change_num = detail.get('change_num', '0')
        rollback = detail.get('rollback_count', '0')
        commit_time = detail.get('commit_time', 'N/A')[:18]
        
        print(f"{i:<6} {repo:<30} {author:<40} {additions:<12} {deletions:<12} {change_num:<12} {rollback:<8} {commit_time:<20}")
    
    print("="*140)
    print(f"\n共显示 {len(details)} 条详情数据\n")

def save_detail_to_csv(result_data):
    """
    将详情数据保存到CSV文件
    """
    if not result_data or not result_data.get('details'):
        return None
    
    details = parse_detail_data(result_data['details'])
    if not details:
        return None
    
    employer = result_data.get('employer', 'unknown')
    branch = result_data.get('branch', 'master')
    time_period = result_data.get('time_period', 'all')
    
    # 生成文件名
    period_map = {
        '近1个月': '1month',
        '近2个月': '2month',
        '近3个月': '3month',
        '近6个月': '6month',
        '近1年': '1year',
        '近2年': '2year',
        '近3年': '3year',
        '全部时间': 'all'
    }
    period_file = period_map.get(time_period, time_period.lower().replace('个月', 'month').replace('年', 'year').replace('近', '').replace(' ', ''))
    
    # 清理雇主名称用于文件名
    employer_file = employer.replace(' ', '_').replace('/', '_')
    filename = f"detail_{employer_file}_{branch}_{period_file}.csv"
    
    try:
        with open(filename, 'w', newline='', encoding='utf-8-sig') as csvfile:
            fieldnames = ['序号', 'ID', 'UUID', '项目', '仓库', '分支', '雇主', '作者姓名', '作者邮箱', '提交者', '新增代码', '删除代码', '变更数', '回退数', '提交时间', '作者时间', '合并时间', '提交ID', '提交信息', '提交URL', 'PR链接', '仓库ID', 'SIG', '状态']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for i, detail in enumerate(details, 1):
                writer.writerow({
                    '序号': i,
                    'ID': detail.get('id', 'N/A'),
                    'UUID': detail.get('uuid', 'N/A'),
                    '项目': detail.get('project', 'N/A'),
                    '仓库': detail.get('repo', 'N/A'),
                    '分支': detail.get('branch', 'N/A'),
                    '雇主': detail.get('employer', 'N/A'),
                    '作者姓名': detail.get('author_name', 'N/A'),
                    '作者邮箱': detail.get('author_email', 'N/A'),
                    '提交者': detail.get('committer', 'N/A'),
                    '新增代码': detail.get('additions', '0'),
                    '删除代码': detail.get('deletions', '0'),
                    '变更数': detail.get('change_num', '0'),
                    '回退数': detail.get('rollback_count', '0'),
                    '提交时间': detail.get('commit_time', 'N/A'),
                    '作者时间': detail.get('author_date', 'N/A'),
                    '合并时间': detail.get('merge_time', 'N/A'),
                    '提交ID': detail.get('commit_id', 'N/A'),
                    '提交信息': detail.get('commit_message', 'N/A'),
                    '提交URL': detail.get('commit_url', 'N/A'),
                    'PR链接': detail.get('pr_url', 'N/A'),
                    '仓库ID': detail.get('repo_id', 'N/A'),
                    'SIG': detail.get('sig', 'N/A'),
                    '状态': detail.get('status', 'N/A')
                })
        
        print(f"✓ 详情数据已保存到CSV文件: {filename}")
        return filename
    except Exception as e:
        print(f"⚠ 保存CSV文件失败: {e}")
        return None

def get_all_employers_detail(time_period="all", branch="master", max_employers=10, page_size=50):
    """
    获取所有主要雇主的提交详情
    
    Args:
        time_period: 时间周期
        branch: 分支
        max_employers: 最多查询的雇主数量
        page_size: 每个雇主查询的记录数
    """
    # 先获取雇主列表
    print("╔══════════════════════════════════════════════════════════════╗")
    print("║  OpenHarmony 所有雇主提交详情汇总工具                        ║")
    print("╚══════════════════════════════════════════════════════════════╝")
    print()
    
    employers_data = get_employer_data(time_period)
    if not employers_data:
        print("❌ 无法获取雇主列表")
        return None
    
    # 提取雇主名称
    employer_names = []
    for emp in employers_data[:max_employers]:
        name = emp.get('name', '')
        if name and name not in ['系统', '开发板', '芯片']:
            employer_names.append(name)
    
    print(f"将查询以下 {len(employer_names)} 个雇主的提交详情:")
    for i, name in enumerate(employer_names, 1):
        print(f"  {i}. {name}")
    print()
    
    all_details = []
    total_records = 0
    
    for i, employer in enumerate(employer_names, 1):
        print(f"[{i}/{len(employer_names)}] 正在查询: {employer}...", end=' ', flush=True)
        # 临时禁用详细输出
        import sys
        from io import StringIO
        old_stdout = sys.stdout
        sys.stdout = StringIO()
        
        try:
            result_data = get_detail_data(employer, branch, time_period, page_current=1, page_size=page_size)
        finally:
            sys.stdout = old_stdout
        
        if result_data and result_data.get('details'):
            details = parse_detail_data(result_data['details'])
            all_details.extend(details)
            total = result_data.get('total', len(details))
            total_records += total
            print(f"✓ 获取 {len(details)} 条（总计 {total} 条）")
        else:
            print(f"⚠ 未获取到数据")
    
    if all_details:
        print(f"\n✓ 汇总完成: 共 {len(employer_names)} 个雇主，{total_records} 条总记录，当前显示 {len(all_details)} 条")
        return {
            'details': all_details,
            'total': total_records,
            'employers': employer_names,
            'branch': branch,
            'time_period': get_time_period_description(time_period),
            'start_time': calculate_time_range(time_period)[0],
            'end_time': calculate_time_range(time_period)[1]
        }
    else:
        print("❌ 未获取到任何提交详情")
        return None

def print_all_details_summary(result_data):
    """
    打印所有雇主的提交详情汇总
    """
    if not result_data or not result_data.get('details'):
        print("未找到详情数据")
        return
    
    details = result_data['details']
    employers = result_data.get('employers', [])
    branch = result_data.get('branch', 'N/A')
    time_period = result_data.get('time_period', 'N/A')
    total = result_data.get('total', len(details))
    
    print("\n" + "="*150)
    print(f"所有雇主提交详情汇总 - 分支: {branch}, 时间范围: {time_period}")
    print(f"雇主列表: {', '.join(employers)}")
    print(f"总计: {total} 条记录，当前显示: {len(details)} 条")
    print("="*150)
    print(f"{'序号':<6} {'雇主':<12} {'仓库':<35} {'作者邮箱':<40} {'新增':<10} {'删除':<10} {'变更':<10} {'提交URL':<60}")
    print("="*150)
    
    for i, detail in enumerate(details, 1):
        employer = detail.get('employer', 'N/A')[:10]
        repo = detail.get('repo', 'N/A')[:33]
        author = detail.get('author_email', 'N/A')[:38]
        additions = detail.get('additions', '0')
        deletions = detail.get('deletions', '0')
        change_num = detail.get('change_num', '0')
        commit_url = detail.get('commit_url', 'N/A')[:58]
        
        print(f"{i:<6} {employer:<12} {repo:<35} {author:<40} {additions:<10} {deletions:<10} {change_num:<10} {commit_url:<60}")
    
    print("="*150)
    print(f"\n共显示 {len(details)} 条详情数据\n")

def save_all_details_to_csv(result_data):
    """
    将所有雇主的提交详情保存到CSV文件
    """
    if not result_data or not result_data.get('details'):
        return None
    
    details = result_data['details']
    if not details:
        return None
    
    branch = result_data.get('branch', 'master')
    time_period = result_data.get('time_period', 'all')
    
    # 生成文件名
    period_map = {
        '近1个月': '1month',
        '近2个月': '2month',
        '近3个月': '3month',
        '近6个月': '6month',
        '近1年': '1year',
        '近2年': '2year',
        '近3年': '3year',
        '全部时间': 'all'
    }
    period_file = period_map.get(time_period, time_period.lower().replace('个月', 'month').replace('年', 'year').replace('近', '').replace(' ', ''))
    
    filename = f"detail_all_employers_{branch}_{period_file}.csv"
    
    try:
        with open(filename, 'w', newline='', encoding='utf-8-sig') as csvfile:
            fieldnames = ['序号', 'ID', 'UUID', '项目', '仓库', '分支', '雇主', '作者姓名', '作者邮箱', '提交者', '新增代码', '删除代码', '变更数', '回退数', '提交时间', '作者时间', '合并时间', '提交ID', '提交信息', '提交URL', 'PR链接', '仓库ID', 'SIG', '状态']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for i, detail in enumerate(details, 1):
                writer.writerow({
                    '序号': i,
                    'ID': detail.get('id', 'N/A'),
                    'UUID': detail.get('uuid', 'N/A'),
                    '项目': detail.get('project', 'N/A'),
                    '仓库': detail.get('repo', 'N/A'),
                    '分支': detail.get('branch', 'N/A'),
                    '雇主': detail.get('employer', 'N/A'),
                    '作者姓名': detail.get('author_name', 'N/A'),
                    '作者邮箱': detail.get('author_email', 'N/A'),
                    '提交者': detail.get('committer', 'N/A'),
                    '新增代码': detail.get('additions', '0'),
                    '删除代码': detail.get('deletions', '0'),
                    '变更数': detail.get('change_num', '0'),
                    '回退数': detail.get('rollback_count', '0'),
                    '提交时间': detail.get('commit_time', 'N/A'),
                    '作者时间': detail.get('author_date', 'N/A'),
                    '合并时间': detail.get('merge_time', 'N/A'),
                    '提交ID': detail.get('commit_id', 'N/A'),
                    '提交信息': detail.get('commit_message', 'N/A'),
                    '提交URL': detail.get('commit_url', 'N/A'),
                    'PR链接': detail.get('pr_url', 'N/A'),
                    '仓库ID': detail.get('repo_id', 'N/A'),
                    'SIG': detail.get('sig', 'N/A'),
                    '状态': detail.get('status', 'N/A')
                })
        
        print(f"✓ 所有雇主详情数据已保存到CSV文件: {filename}")
        return filename
    except Exception as e:
        print(f"⚠ 保存CSV文件失败: {e}")
        return None

def get_email_statistics(author_email, branch="master", time_period="all", max_pages=None, page_size=50):
    """
    根据作者邮箱获取提交详情并生成统计报告
    
    Args:
        author_email: 作者邮箱，如 "goujingjing@kaihong.com"
        branch: 分支/版本，默认 "master"
        time_period: 时间周期
        max_pages: 最大页数，None表示获取全部数据
        page_size: 每页数量
    
    Returns:
        统计结果字典
    """
    print(f"\n正在获取 {author_email} 在 {branch} 分支上的提交详情统计...")
    print(f"时间范围: {get_time_period_description(time_period)}")
    if max_pages:
        print(f"将获取前 {max_pages} 页数据（每页 {page_size} 条）")
    else:
        print(f"将获取全部数据（每页 {page_size} 条）")
    
    all_details = []
    page = 1
    total_from_api = None
    
    while True:
        if max_pages and page > max_pages:
            break
        
        print(f"  获取第 {page} 页...", end=' ', flush=True)
        
        # 临时禁用详细输出
        import sys
        from io import StringIO
        old_stdout = sys.stdout
        sys.stdout = StringIO()
        
        try:
            result = get_detail_data(employer="", branch=branch, time_period=time_period, 
                                   page_current=page, page_size=page_size, author_email=author_email)
        finally:
            sys.stdout = old_stdout
        
        if result and result.get('details'):
            details = parse_detail_data(result['details'])
            all_details.extend(details)
            if total_from_api is None:
                total_from_api = result.get('total', 0)
            print(f"✓ 获取 {len(details)} 条（累计 {len(all_details)} 条）")
            
            # 如果当前页数据少于page_size，说明已经是最后一页
            if len(details) < page_size:
                print(f"  已获取全部数据（共 {len(all_details)} 条）")
                break
        else:
            print("✗ 无数据")
            break
        
        page += 1
    
    if not all_details:
        print("❌ 未获取到任何数据")
        return None
    
    # 统计信息 - 按仓库分组
    repos = {}
    total_add = 0
    total_del = 0
    total_change = 0
    
    for detail in all_details:
        try:
            add = int(detail.get('additions', '0').replace(',', ''))
            delete = int(detail.get('deletions', '0').replace(',', ''))
            change = int(detail.get('change_num', '0').replace(',', ''))
            
            total_add += add
            total_del += delete
            total_change += change
            
            # 按仓库统计
            repo = detail.get('repo', 'unknown')
            if repo not in repos:
                repos[repo] = {'count': 0, 'add': 0, 'del': 0, 'change': 0}
            repos[repo]['count'] += 1
            repos[repo]['add'] += add
            repos[repo]['del'] += delete
            repos[repo]['change'] += change
        except Exception as e:
            pass
    
    # 打印统计报告
    print(f"\n{'='*80}")
    print(f"{author_email} 在 {branch} 分支上的代码贡献统计")
    print(f"{'='*80}")
    print(f"时间范围: {get_time_period_description(time_period)}")
    print(f"已获取提交数: {len(all_details)} 条")
    if total_from_api:
        print(f"API总记录数: {total_from_api:,} 条")
        if len(all_details) < total_from_api:
            print(f"  注意: 仅显示了前 {len(all_details)} 条，还有 {total_from_api - len(all_details):,} 条未显示")
    print(f"\n代码统计:")
    print(f"  总新增代码: {total_add:,} 行")
    print(f"  总删除代码: {total_del:,} 行")
    print(f"  总变更代码: {total_change:,} 行")
    print(f"  净增代码: {total_add - total_del:,} 行")
    print(f"  提交仓库数: {len(repos)} 个")
    
    # 按仓库统计（按变更数排序）
    if repos:
        print(f"\n各仓库代码贡献统计（按变更数排序）:")
        sorted_repos = sorted(repos.items(), key=lambda x: x[1]['change'], reverse=True)
        print(f"{'排名':<6} {'仓库名称':<45} {'提交数':<8} {'新增':<12} {'删除':<12} {'变更':<12}")
        print("-" * 100)
        for rank, (repo, data) in enumerate(sorted_repos, 1):
            print(f"{rank:<6} {repo[:44]:<45} {data['count']:<8} {data['add']:>11,} {data['del']:>11,} {data['change']:>11,}")
    
    print(f"\n{'='*80}\n")
    
    return {
        'author_email': author_email,
        'branch': branch,
        'time_period': get_time_period_description(time_period),
        'total_records': total_from_api,
        'fetched_records': len(all_details),
        'total_add': total_add,
        'total_del': total_del,
        'total_change': total_change,
        'net_add': total_add - total_del,
        'repo_count': len(repos),
        'repos': repos,
        'details': all_details
    }

def get_detail_statistics(employer, branch="master", time_period="all", max_pages=None, page_size=50):
    """
    获取提交详情数据并生成统计报告
    
    Args:
        employer: 雇主名称
        branch: 分支/版本
        time_period: 时间周期
        max_pages: 最大页数，None表示获取全部数据
        page_size: 每页数量
    
    Returns:
        统计结果字典
    """
    print(f"\n正在获取 {employer} 在 {branch} 分支上的提交详情统计...")
    print(f"时间范围: {get_time_period_description(time_period)}")
    if max_pages:
        print(f"将获取前 {max_pages} 页数据（每页 {page_size} 条）")
    else:
        print(f"将获取全部数据（每页 {page_size} 条）")
    
    all_details = []
    page = 1
    total_from_api = None
    
    while True:
        if max_pages and page > max_pages:
            break
        
        print(f"  获取第 {page} 页...", end=' ', flush=True)
        
        # 临时禁用详细输出
        import sys
        from io import StringIO
        old_stdout = sys.stdout
        sys.stdout = StringIO()
        
        try:
            result = get_detail_data(employer, branch, time_period, page_current=page, page_size=page_size)
        finally:
            sys.stdout = old_stdout
        
        if result and result.get('details'):
            details = parse_detail_data(result['details'])
            all_details.extend(details)
            if total_from_api is None:
                total_from_api = result.get('total', 0)
            print(f"✓ 获取 {len(details)} 条（累计 {len(all_details)} 条）")
            
            # 如果当前页数据少于page_size，说明已经是最后一页
            if len(details) < page_size:
                print(f"  已获取全部数据（共 {len(all_details)} 条）")
                break
        else:
            print("✗ 无数据")
            break
        
        page += 1
    
    if not all_details:
        print("❌ 未获取到任何数据")
        return None
    
    # 统计信息
    repos = {}
    total_add = 0
    total_del = 0
    total_change = 0
    authors = {}  # 按作者邮箱统计
    authors_by_name = {}  # 按作者姓名统计（用于合并同一人的提交）
    
    for detail in all_details:
        try:
            add = int(detail.get('additions', '0').replace(',', ''))
            delete = int(detail.get('deletions', '0').replace(',', ''))
            change = int(detail.get('change_num', '0').replace(',', ''))
            
            total_add += add
            total_del += delete
            total_change += change
            
            # 按仓库统计
            repo = detail.get('repo', 'unknown')
            if repo not in repos:
                repos[repo] = {'count': 0, 'add': 0, 'del': 0, 'change': 0}
            repos[repo]['count'] += 1
            repos[repo]['add'] += add
            repos[repo]['del'] += delete
            repos[repo]['change'] += change
            
            # 按作者邮箱统计（原有逻辑）
            author = detail.get('author_email', 'unknown')
            if author not in authors:
                authors[author] = {'count': 0, 'add': 0, 'del': 0, 'change': 0}
            authors[author]['count'] += 1
            authors[author]['add'] += add
            authors[author]['del'] += delete
            authors[author]['change'] += change
            
            # 按作者姓名统计（合并同一人的提交）
            author_name = detail.get('author_name', '')
            if not author_name:
                # 如果没有作者姓名，尝试从邮箱提取
                author_email = detail.get('author_email', '')
                if '@' in author_email:
                    author_name = author_email.split('@')[0]
                else:
                    author_name = author_email or 'unknown'
            
            if author_name not in authors_by_name:
                authors_by_name[author_name] = {
                    'count': 0,  # 提交次数
                    'add': 0,    # 新增代码
                    'del': 0,    # 删除代码
                    'change': 0, # 变更代码
                    'repos': set(),  # 提交的仓库集合
                    'emails': set()  # 关联的邮箱集合
                }
            
            authors_by_name[author_name]['count'] += 1
            authors_by_name[author_name]['add'] += add
            authors_by_name[author_name]['del'] += delete
            authors_by_name[author_name]['change'] += change
            authors_by_name[author_name]['repos'].add(repo)
            if author:
                authors_by_name[author_name]['emails'].add(author)
        except Exception as e:
            pass
    
    # 打印统计报告
    print(f"\n{'='*80}")
    print(f"{employer} 在 {branch} 分支上的代码贡献统计")
    print(f"{'='*80}")
    print(f"时间范围: {get_time_period_description(time_period)}")
    print(f"已获取提交数: {len(all_details)} 条")
    if total_from_api:
        print(f"API总记录数: {total_from_api:,} 条")
        if len(all_details) < total_from_api:
            print(f"  注意: 仅显示了前 {len(all_details)} 条，还有 {total_from_api - len(all_details):,} 条未显示")
    print(f"\n代码统计:")
    print(f"  总新增代码: {total_add:,} 行")
    print(f"  总删除代码: {total_del:,} 行")
    print(f"  总变更代码: {total_change:,} 行")
    print(f"  净增代码: {total_add - total_del:,} 行")
    
    # 主要仓库贡献
    if repos:
        print(f"\n主要仓库贡献（按变更数排序，前15名）:")
        sorted_repos = sorted(repos.items(), key=lambda x: x[1]['change'], reverse=True)
        print(f"{'仓库':<45} {'提交数':<8} {'新增':<12} {'删除':<12} {'变更':<12}")
        print("-" * 90)
        for repo, data in sorted_repos[:15]:
            print(f"{repo[:44]:<45} {data['count']:<8} {data['add']:>11,} {data['del']:>11,} {data['change']:>11,}")
    
    # 主要贡献者（按邮箱）
    if authors:
        print(f"\n主要贡献者（按邮箱，按变更数排序，前10名）:")
        sorted_authors = sorted(authors.items(), key=lambda x: x[1]['change'], reverse=True)
        print(f"{'作者邮箱':<50} {'提交数':<8} {'新增':<12} {'删除':<12} {'变更':<12}")
        print("-" * 90)
        for author, data in sorted_authors[:10]:
            author_display = author[:48] if len(author) > 48 else author
            print(f"{author_display:<50} {data['count']:<8} {data['add']:>11,} {data['del']:>11,} {data['change']:>11,}")
    
    # 按作者姓名合并统计（合并同一人的所有提交）
    if authors_by_name:
        print(f"\n{'='*80}")
        print(f"按作者姓名合并统计（合并同一人的所有提交记录）")
        print(f"{'='*80}")
        
        # 计算每个人的总代码量（增删改总和）
        authors_with_total = []
        for name, data in authors_by_name.items():
            # 总代码量 = 新增 + 删除 + 变更（或者直接用变更数，因为变更数通常就是新增+删除）
            # 为了更准确，我们使用：新增 + 删除（因为变更数可能已经包含了新增和删除）
            total_code = data['add'] + data['del'] + data['change']
            # 或者更合理的计算：变更数就是新增+删除，所以总代码量应该是变更数
            # 但为了显示更详细，我们显示变更数作为主要指标
            authors_with_total.append({
                'name': name,
                'repo_count': len(data['repos']),
                'commit_count': data['count'],
                'add': data['add'],
                'del': data['del'],
                'change': data['change'],
                'total_code': data['change'],  # 使用变更数作为总代码量
                'repos': sorted(list(data['repos'])),
                'emails': sorted(list(data['emails']))
            })
        
        # 按总代码量（变更数）排序
        authors_with_total.sort(key=lambda x: x['total_code'], reverse=True)
        
        print(f"{'排名':<6} {'作者姓名':<20} {'仓库数':<8} {'提交数':<8} {'新增':<12} {'删除':<12} {'变更':<12} {'总代码量':<12}")
        print("-" * 100)
        for rank, author_data in enumerate(authors_with_total, 1):
            name = author_data['name'][:18] if len(author_data['name']) > 18 else author_data['name']
            print(f"{rank:<6} {name:<20} {author_data['repo_count']:<8} {author_data['commit_count']:<8} "
                  f"{author_data['add']:>11,} {author_data['del']:>11,} {author_data['change']:>11,} "
                  f"{author_data['total_code']:>11,}")
        
        # 显示每个人的仓库详情（前10名）
        print(f"\n前10名贡献者的仓库详情:")
        print("-" * 100)
        for rank, author_data in enumerate(authors_with_total[:10], 1):
            name = author_data['name']
            repo_count = author_data['repo_count']
            repos = author_data['repos']
            emails = author_data['emails']
            
            print(f"\n{rank}. {name}")
            print(f"   提交仓库数: {repo_count} 个")
            print(f"   提交次数: {author_data['commit_count']} 次")
            print(f"   代码统计: 新增 {author_data['add']:,} 行, 删除 {author_data['del']:,} 行, 变更 {author_data['change']:,} 行")
            print(f"   总代码量: {author_data['total_code']:,} 行")
            if emails:
                email_str = ', '.join(emails[:3])  # 最多显示3个邮箱
                if len(emails) > 3:
                    email_str += f" ... (共{len(emails)}个邮箱)"
                print(f"   关联邮箱: {email_str}")
            if repos:
                print(f"   提交仓库: {', '.join(repos[:5])}")  # 最多显示5个仓库
                if len(repos) > 5:
                    print(f"              ... (共{len(repos)}个仓库)")
    
    print(f"\n{'='*80}\n")
    
    return {
        'employer': employer,
        'branch': branch,
        'time_period': get_time_period_description(time_period),
        'total_records': total_from_api,
        'fetched_records': len(all_details),
        'total_add': total_add,
        'total_del': total_del,
        'total_change': total_change,
        'net_add': total_add - total_del,
        'repos': repos,
        'authors': authors,
        'authors_by_name': authors_by_name,  # 按姓名合并的统计
        'details': all_details
    }

def save_stats_to_markdown(stats_result, csv_filename):
    """
    将统计结果保存为Markdown文档
    
    Args:
        stats_result: 统计结果字典（来自get_detail_statistics）
        csv_filename: CSV文件名（用于在Markdown中引用）
    
    Returns:
        Markdown文件名，如果失败返回None
    """
    if not stats_result or not stats_result.get('details'):
        return None
    
    details = stats_result['details']
    if not details:
        return None
    
    # 从CSV文件名生成Markdown文件名
    md_filename = csv_filename.replace('.csv', '.md')
    
    # 统计信息
    total_records = len(details)
    total_add = stats_result.get('total_add', 0)
    total_del = stats_result.get('total_del', 0)
    total_change = stats_result.get('total_change', 0)
    net_add = stats_result.get('net_add', 0)
    
    # 按仓库统计
    repos = stats_result.get('repos', {})
    
    # 按作者姓名统计
    authors_by_name = stats_result.get('authors_by_name', {})
    if not isinstance(authors_by_name, dict):
        authors_by_name = {}
    
    # 获取时间范围
    start_date = details[-1].get('commit_time', 'N/A')[:10] if details else 'N/A'
    end_date = details[0].get('commit_time', 'N/A')[:10] if details else 'N/A'
    
    employer = stats_result.get('employer', 'N/A')
    branch = stats_result.get('branch', 'N/A')
    time_period = stats_result.get('time_period', 'N/A')
    
    # 生成Markdown文档
    md_content = f'''# {employer}代码贡献统计报告

**时间范围**: {time_period}  
**分支**: {branch}  
**统计日期**: {start_date} 至 {end_date}

---

## 📊 统计摘要

### 总体数据

- **提交记录数**: {total_records:,} 条
- **总新增代码**: {total_add:,} 行
- **总删除代码**: {total_del:,} 行
- **总变更代码**: {total_change:,} 行
- **净增代码**: {net_add:,} 行

---

## 📦 主要仓库贡献

| 排名 | 仓库名称 | 提交次数 | 新增代码 | 删除代码 | 变更代码 |
|------|---------|---------|---------|---------|---------|
'''
    
    # 按变更数排序仓库
    if repos and isinstance(repos, dict):
        sorted_repos = sorted(repos.items(), key=lambda x: x[1].get('change', 0), reverse=True)
        for rank, (repo, data) in enumerate(sorted_repos, 1):
            md_content += f'| {rank} | `{repo}` | {data.get("count", 0)} | {data.get("add", 0):,} | {data.get("del", 0):,} | {data.get("change", 0):,} |\n'
    
    md_content += '\n---\n\n## 👥 按作者姓名合并统计\n\n'
    md_content += '| 排名 | 作者姓名 | 仓库数 | 提交次数 | 新增代码 | 删除代码 | 变更代码 | 总代码量 |\n'
    md_content += '|------|---------|-------|---------|---------|---------|---------|----------|\n'
    
    # 按变更数排序作者
    authors_with_total = []
    if authors_by_name and isinstance(authors_by_name, dict):
        for name, data in authors_by_name.items():
            if isinstance(data, dict):
                repos_set = data.get('repos', set())
                if not isinstance(repos_set, set):
                    repos_set = set(repos_set) if repos_set else set()
                authors_with_total.append({
                    'name': name,
                    'repo_count': len(repos_set),
                    'commit_count': data.get('count', 0),
                    'add': data.get('add', 0),
                    'del': data.get('del', 0),
                    'change': data.get('change', 0),
                    'repos': sorted(list(repos_set))
                })
    
    authors_with_total.sort(key=lambda x: x['change'], reverse=True)
    
    for rank, author_data in enumerate(authors_with_total, 1):
        md_content += f'| {rank} | `{author_data["name"]}` | {author_data["repo_count"]} | {author_data["commit_count"]} | {author_data["add"]:,} | {author_data["del"]:,} | {author_data["change"]:,} | {author_data["change"]:,} |\n'
    
    md_content += '\n---\n\n## 📝 详细说明\n\n'
    md_content += '### 前10名贡献者详情\n\n'
    
    for rank, author_data in enumerate(authors_with_total[:10], 1):
        repos_list = ', '.join(author_data['repos'])
        md_content += f'''#### {rank}. {author_data["name"]}

- **提交仓库数**: {author_data["repo_count"]} 个
- **提交次数**: {author_data["commit_count"]} 次
- **代码统计**: 新增 {author_data["add"]:,} 行, 删除 {author_data["del"]:,} 行, 变更 {author_data["change"]:,} 行
- **总代码量**: {author_data["change"]:,} 行
- **提交仓库**: {repos_list}

'''
    
    md_content += '\n---\n\n## 📄 数据来源\n\n'
    md_content += f'- 详细数据已保存到: `{csv_filename}`\n'
    md_content += f'- CSV文件包含 {total_records} 条完整提交记录\n'
    md_content += '- 每条记录包含：ID、UUID、项目、仓库、分支、雇主、作者姓名、作者邮箱、提交者、代码变更、提交时间、提交URL等完整信息\n'
    md_content += '\n---\n\n*本报告由 OpenHarmony 代码贡献统计工具自动生成*\n'
    
    try:
        with open(md_filename, 'w', encoding='utf-8') as f:
            f.write(md_content)
        print(f"✓ 统计报告已保存到Markdown文件: {md_filename}")
        return md_filename
    except Exception as e:
        print(f"⚠ 保存Markdown文件失败: {e}")
        return None

def get_company_name_list():
    """
    获取公司名称列表和ID映射
    
    Returns:
        公司列表，格式：[{"companyFullName": "公司名", "manufactureId": "ID"}, ...]
    """
    api_url = "https://compatibility.openharmony.cn/certificate/external/getCompanyNameList"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://compatibility.openharmony.cn',
        'Referer': 'https://compatibility.openharmony.cn/',
    }
    
    try:
        response = requests.post(api_url, headers=headers, json={}, timeout=30)
        response.raise_for_status()
        
        data = response.json()
        
        if isinstance(data, dict):
            if data.get('success') and data.get('code') == 200:
                body = data.get('body', [])
                if isinstance(body, list):
                    print(f"✓ 成功获取 {len(body)} 个公司信息")
                    return body
            else:
                print(f"⚠ API返回错误: code={data.get('code')}, msg={data.get('msg')}")
        elif isinstance(data, list):
            print(f"✓ 成功获取 {len(data)} 个公司信息")
            return data
            
    except Exception as e:
        print(f"❌ 获取公司列表失败: {e}")
    
    return []

def get_compatibility_devices(page=1, limit=16, certification_type=None, system_version=None, system_type=None, company_name="", search_condition=""):
    """
    查询兼容性设备列表
    
    Args:
        page: 页码，默认1
        limit: 每页数量，默认16
        certification_type: 认证类型列表，[0,1,2] 表示全部类型（0=商用设备, 1=模组/开发板, 2=其他）
        system_version: 系统版本列表，如[6]表示OpenHarmony 6.0
        system_type: 系统类型列表，如["轻量系统","小型系统","标准系统"]
        company_name: 公司名称（使用manufactureId，如"103"）
        search_condition: 搜索条件
    
    Returns:
        设备列表和总数
