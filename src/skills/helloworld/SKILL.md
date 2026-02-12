---
name: helloworld
description: "hello world skill is used to show openharmony main employer codeline, top author codeline, and commit detail data."
author: "Created by user"
created: "2026-01-20"
version: "1.0.0"
---

# Hello World Skill

```
╔══════════════════════════════════════════════════════════════╗
║  DEBUG: Hello World Skill v1.0.0                            ║
║  DEBUG: Author: Created by user                             ║
║  DEBUG: Created: 2026-01-20                                 ║
║  DEBUG: Status: ✓ Loaded and ready                          ║
║  DEBUG: Location: .claude/skills/helloworld/SKILL.md        ║
╚══════════════════════════════════════════════════════════════╝
```

> **Author**: Created by user  
> **Created**: 2026-01-20  
> **Version**: 1.0.0  
> **Proof of Ownership**: This skill was created and customized for OpenHarmony employer data analysis

This skill provides capabilities for:
1. Generating Hello World Python files
2. **Viewing OpenHarmony employer contribution data** (codeline statistics)
3. **Viewing OpenHarmony contributor ranking data** (top 10 contributors)
4. **Viewing OpenHarmony commit detail data** (submission details by employer and branch)
5. **Querying commits by author email** (submit details and statistics by email address)
6. **Querying compatibility devices** (certified devices by company, version, and system type)

## Features

### 1. Generate Hello World Python File

This skill can generate a Python file that prints "Hello, World!" to the console.

### 2. View OpenHarmony Employer Contribution Data ⭐

**This skill can fetch and display OpenHarmony employer code contribution statistics!**

The skill accesses the OpenHarmony API to get real-time employer contribution data including:
- Employer name (雇主名称)
- PR count (PR数)
- Added code lines (新增代码)
- Deleted code lines (删除代码)
- Modified code lines (修改代码)
- Modification ratio (修改量占比)

**API Endpoint:**
- URL: `https://www.openharmony.cn/api/statistics/codeline/employer/list`
- Method: POST
- Returns: Top employers with their contribution statistics

### 3. View OpenHarmony Contributor Ranking Data ⭐

**This skill can fetch and display OpenHarmony top contributor ranking!**

The skill accesses the OpenHarmony API to get real-time contributor ranking data including:
- Contributor name (贡献者名称，从email提取)
- PR count (PR数)
- Added code lines (新增代码)
- Deleted code lines (删除代码)
- Modified code lines (修改代码)
- Modification ratio (修改量占比)

**API Endpoint:**
- URL: `https://www.openharmony.cn/api/statistics/codeline/author/rank`
- Method: POST
- Payload: `{"project":["openharmony"],"branch":"master","ohFlag":1,"startTime":"2020-08-26 00:00:00","endTime":"...","isExport":0,"employer":""}`
- Returns: Top contributors with their contribution statistics

### 4. View OpenHarmony Commit Detail Data ⭐

**This skill can fetch and display OpenHarmony commit submission details!**

The skill accesses the OpenHarmony API to get detailed commit information including:
- Repository name (仓库名称)
- Branch/Version (分支/版本)
- Employer name (雇主名称)
- Author email (作者邮箱)
- Added code lines (新增代码)
- Deleted code lines (删除代码)
- Change count (变更数)
- Rollback count (回退数)
- Commit time (提交时间)
- Commit ID (提交ID)
- Commit message (提交信息)
- **Commit URL (提交URL)** - Direct link to view the commit

**API Endpoint:**
- URL: `https://www.openharmony.cn/api/statistics/review/metric/detail`
- Method: POST
- Payload: `{"ohFlag":1,"project":"openharmony","branch":"master","employer":"深开鸿","startTime":"...","endTime":"...","pageCurrent":1,"pageSize":10}`
- Returns: Detailed commit records with URLs

### 5. Query by Author Email ⭐

**This skill can query commit details and statistics by author email!**

The skill allows you to query all commits by a specific author email address, including:
- All commit details for the author
- Statistics by repository (how many repositories, code changes per repository)
- Total code changes (additions, deletions, changes)
- Repository ranking by code contribution

**API Endpoint:**
- URL: `https://www.openharmony.cn/api/statistics/review/metric/detail`
- Method: POST
- Payload: `{"ohFlag":1,"project":"openharmony","branch":"master","authorEmail":"goujingjing@kaihong.com","startTime":"...","endTime":"...","pageCurrent":1,"pageSize":50}`
- Returns: All commit records for the specified author email

### 6. Query Compatibility Devices ⭐

**This skill can query OpenHarmony compatibility certified devices!**

The skill accesses the OpenHarmony compatibility API to get certified device information including:
- Certification type (认证类型: 商用设备, 模组/开发板)
- Company name (公司名称)
- Device name (设备名称)
- Chip model (芯片型号)
- System type (系统类型: 轻量系统, 小型系统, 标准系统)
- System version (系统版本: OpenHarmony 6.0 Release)
- Software version (软件版本)
- Approval time (批准时间)
- Device model (设备型号)
- Description (描述)
- Picture URLs (图片URL)
- PCID file URL (PCID文件URL)

**API Endpoints:**
- Company List: `https://compatibility.openharmony.cn/certificate/external/getCompanyNameList`
- Device List: `https://compatibility.openharmony.cn/certificate/external/certificationapply/list`
- Method: POST
- Payload: `{"page":1,"limit":50,"certificationType":[0,1,2],"systemVersion":[6],"systemType":["轻量系统","小型系统","标准系统"],"companyName":"103","searchCondition":""}`
- Returns: Certified device records with statistics by company, version, and system type

## Usage

### View OpenHarmony Employer Data

**Method 1: Using the Script Directly**
```bash
# 查看雇主数据（默认，全部时间）
python3 .claude/skills/helloworld/getcodecnt.py
python3 .claude/skills/helloworld/getcodecnt.py employer

# 查看贡献者排名数据
python3 .claude/skills/helloworld/getcodecnt.py author

# 指定时间范围查询
python3 .claude/skills/helloworld/getcodecnt.py employer 1month    # 近1个月
python3 .claude/skills/helloworld/getcodecnt.py author 2month      # 近2个月
python3 .claude/skills/helloworld/getcodecnt.py 3year              # 近3年

# 查看提交详情（需要指定雇主和分支）
python3 .claude/skills/helloworld/getcodecnt.py detail 1month 深开鸿 master
python3 .claude/skills/helloworld/getcodecnt.py detail 3month 华为 master

# 根据作者邮箱查询提交详情和统计
python3 .claude/skills/helloworld/getcodecnt.py email 1month goujingjing@kaihong.com
python3 .claude/skills/helloworld/getcodecnt.py email 1month goujingjing@kaihong.com master

# 查询兼容性设备（支持按公司、版本、系统类型查询）
python3 .claude/skills/helloworld/getcodecnt.py compatibility
python3 .claude/skills/helloworld/getcodecnt.py compatibility 103  # 查询深开鸿的设备（使用公司ID）
python3 .claude/skills/helloworld/getcodecnt.py compatibility 103 6 轻量系统  # 查询指定版本和系统类型

# 所有主要雇主提交详情汇总、提交统计报告、按年份查询
python3 .claude/skills/helloworld/getcodecnt.py alldetail 1month [master]
python3 .claude/skills/helloworld/getcodecnt.py stats all 深开鸿 6.0release [max_pages]
python3 .claude/skills/helloworld/getcodecnt.py yearquery goujingjing@kaihong.com 2025

# 生成 Hello World Python 文件（generate.py）
python3 .claude/skills/helloworld/generate.py [输出文件名]
python3 src/skills/helloworld/generate.py hello_world.py
```

**支持的时间范围：**
- `1month`, `1m`, `近1个月` - 近1个月
- `2month`, `2m`, `近2个月` - 近2个月
- `3month`, `3m`, `近3个月` - 近3个月
- `6month`, `6m`, `近6个月` - 近6个月
- `1year`, `1y`, `近1年` - 近1年
- `2year`, `2y`, `近2年` - 近2年
- `3year`, `3y`, `近3年` - 近3年
- `all`, `全部` - 全部时间（默认，从2020-08-26开始）

**Method 2: In Conversation**
Simply ask:
- "查看 OpenHarmony 雇主贡献代码信息"
- "查看近1个月的 openharmony 雇主贡献代码信息"
- "查看近3年的贡献者排名"
- "查看深开鸿在master分支近1个月的提交详情"
- "查看goujingjing@kaihong.com近一月的提交详情"
- "查询深开鸿的兼容性设备"
- "查询OpenHarmony 6.0的轻量系统兼容设备"
- "Show OpenHarmony employer contribution data for last month"
- "Get OpenHarmony contributor ranking for 2 months"
- "Get commit details for 深开鸿 on master branch for last month"
- "Query commits by email goujingjing@kaihong.com for last month"
- "Query compatibility devices for company 103"
- "查看所有主要雇主近 1 个月的提交详情汇总（alldetail）"
- "查看深开鸿 6.0release 分支的提交统计报告（stats）"
- "按年份查询某邮箱的提交（yearquery）"
- "生成 Hello World Python 文件" / "使用 helloworld 技能生成 hello_world.py"

The assistant will automatically use this skill to fetch and display the data with the specified time range.

## Example Output

**Employer Data:**
```
排名     雇主名称                           PR数          新增代码         删除代码         修改代码         修改量占比       
====================================================================================================
1      华为                             328593       72,306,400   26,288,686   98,595,086   87.42%      
2      深开鸿                            1830         5,137,649    1,611,991    6,749,640    5.98%       
...
```

**Contributor Ranking:**
```
排名     贡献者名称                          PR数          新增代码         删除代码         修改代码         修改量占比       
====================================================================================================
1      ar*******o                     0            1,350,180    13,525       1,363,705    0.99%       
2      gu****o                        0            892,199      466,304      1,358,503    34.32%      
...
```

**Commit Detail Data:**
```
提交详情 - 雇主: 深开鸿, 分支: master, 时间范围: 近1个月
总计: 87 条记录
序号     仓库                             作者邮箱                                     新增           删除           变更           回退       提交时间                
1      communication_bluetooth_serv   wa***i@kaihong.com                       368          368          736          0                            
...
```

**Email Query Statistics:**
```
goujingjing@kaihong.com 在 master 分支上的代码贡献统计
时间范围: 近1个月
已获取提交数: 38 条

代码统计:
  总新增代码: 14,838 行
  总删除代码: 5,998 行
  总变更代码: 20,836 行
  净增代码: 8,840 行
  提交仓库数: 1 个

各仓库代码贡献统计（按变更数排序）:
排名     仓库名称                                          提交数      新增           删除           变更          
1      napi_generator                                38            14,838       5,998      20,836
```

**Compatibility Device Statistics:**
```
兼容性设备统计报告
总设备数: 9 个

按系统类型统计:
系统类型                 设备数量      
轻量系统                 9         

按系统版本统计:
系统版本                           设备数量      
OpenHarmony 6.0 Release        9         

按认证类型统计:
认证类型                 设备数量      
模组/开发板               7         
商用设备                 2         

按公司统计（前20名）:
排名     公司名称                                     设备总数       轻量系统       小型系统       标准系统      
1      深圳开鸿数字产业发展有限公司                           9          9          0          0         
```

**Time Range Examples:**
- 近1个月的数据会显示最近30天的贡献
- 近3年的数据会显示从3年前到现在的累计贡献
- 不同时间范围的数据可以对比分析贡献趋势
- 提交详情包含每条提交记录的URL，可直接点击查看
- 兼容性设备查询支持按公司ID、系统版本、系统类型进行筛选和统计

## Skill Metadata

**Author**: Created by user  
**Creation Date**: 2026-01-20  
**Version**: 1.0.0  
**Location**: `.claude/skills/helloworld/SKILL.md`  
**Scripts**: 
- `generate.py` - Generates hello world Python files
- `getcodecnt.py` - Fetches OpenHarmony data (employer, contributor, and commit details)

**Original Source**: Custom skill created for OpenHarmony community data analysis