#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ohproj - OpenHarmony 原生应用项目：创建、编译、签名、编译测试、执行测试

能力（详见 .claude/skills/ohproj/SKILL.md）：
  create      - 从 NativeProj46R 模板创建新项目（拷贝+重命名+bundleName，可选 --code-dir 接入代码）
  build       - 编译主 HAP（委托 ohhap/hapbuild.py）
  sign        - 对未签名主 HAP 与测试 HAP 签名（release/debug）
  build-test  - 编译单元测试 HAP（ohosTest 模块）
  test        - 部署并执行单元测试（卸载→安装主/测试 HAP→aa test），输出 Hypium 测试报告
  clean-sign  - 清除项目下 autosign 目录

用法:
  python3 ohproj.py create <项目名> [--code-dir <路径>]
  python3 ohproj.py build <项目目录>
  python3 ohproj.py sign <项目目录> [release|debug]
  python3 ohproj.py build-test <项目目录>
  python3 ohproj.py test <项目目录> [--timeout 毫秒]
  python3 ohproj.py clean-sign <项目目录>

测试报告（test 命令）：
  输出包含 OHOS_REPORT_STATUS（class=套件名, test=用例名）、OHOS_REPORT_STATUS_CODE（0=通过,-2=失败）、
  OHOS_REPORT_RESULT（Tests run/Failure/Pass 等）。详见 SKILL.md 第八节与 DESIGN.md。

代码规范与已知问题：
  NAPI 导出、Index.d.ts 同步、mock-config 关闭、AddItemToObjectCS/assertContain 等见 DESIGN.md。
  项目目录建议使用绝对路径。执行 test 前需先 build、build-test、sign，且设备已连接（hdc 可用）。
"""

import os
import sys
import shutil
import re
import subprocess
from pathlib import Path


def _script_dir():
    return os.path.dirname(os.path.abspath(__file__))


def _ohproj_root():
    return _script_dir()


def _template_dir():
    # NativeProj46R 在 ohhap 下，与 ohproj 同级
    return os.path.join(os.path.dirname(_script_dir()), 'ohhap', 'NativeProj46R')


def _hapbuild_py():
    return os.path.join(os.path.dirname(_script_dir()), 'ohhap', 'hapbuild.py')


def _normalize_bundle_name(name):
    """用户命名 -> bundle 名：小写、非字母数字替换为无或下划线"""
    s = re.sub(r'[^a-zA-Z0-9]+', '', name.lower())
    return s if s else name.lower().replace(' ', '').replace('-', '')


def cmd_create(project_name, code_dir=None):
    """创建项目：拷贝模板并重命名、修改 bundleName，可选拷贝 code_dir 到 cpp。"""
    if not project_name or not re.match(r'^[a-zA-Z0-9_-]+$', project_name):
        print('❌ 项目名仅允许字母、数字、下划线、连字符')
        return 1
    template = _template_dir()
    if not os.path.isdir(template):
        print(f'❌ 模板目录不存在: {template}')
        return 1
    root = _ohproj_root()
    dest_name = project_name + 'NativeProj46R'
    dest = os.path.join(root, dest_name)
    if os.path.exists(dest):
        print(f'❌ 目标已存在: {dest}')
        return 1
    print(f'创建项目: {project_name}')
    print(f'  模板: {template} -> {dest}')
    shutil.copytree(template, dest, symlinks=False,
                    ignore=shutil.ignore_patterns('oh_modules', 'entry/build', 'entry/.cxx', '.hvigor', '*.hap'))
    bundle_lower = _normalize_bundle_name(project_name)
    bundle_value = f'ohos.{bundle_lower}.nativeproj46r'
    print(f'  bundleName: {bundle_value}')
    # AppScope/app.json5
    app_json = os.path.join(dest, 'AppScope', 'app.json5')
    if os.path.isfile(app_json):
        with open(app_json, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'"bundleName"\s*:\s*"[^"]*"', f'"bundleName": "{bundle_value}"', content, count=1)
        with open(app_json, 'w', encoding='utf-8') as f:
            f.write(content)
    # autosign/UnsgnedReleasedProfileTemplate.json
    profile = os.path.join(dest, 'autosign', 'UnsgnedReleasedProfileTemplate.json')
    if os.path.isfile(profile):
        with open(profile, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'"bundle-name"\s*:\s*"[^"]*"', f'"bundle-name": "{bundle_value}"', content, count=1)
        with open(profile, 'w', encoding='utf-8') as f:
            f.write(content)
    print('  已修改 AppScope/app.json5、autosign/UnsgnedReleasedProfileTemplate.json')
    if code_dir:
        code_src = os.path.abspath(code_dir)
        if not os.path.isdir(code_src):
            print(f'⚠ 未找到代码目录: {code_src}')
        else:
            cpp_dir = os.path.join(dest, 'entry', 'src', 'main', 'cpp')
            code_dest = os.path.join(cpp_dir, os.path.basename(code_src.rstrip('/')))
            if os.path.exists(code_dest):
                print(f'⚠ cpp 下已存在同名目录: {code_dest}')
            else:
                shutil.copytree(code_src, code_dest)
                print(f'  已拷贝代码目录 -> {code_dest}')
                print('  请手动在 entry/src/main/cpp/CMakeLists.txt 中加入该目录的源文件和 include_directories')
    print(f'✓ 项目已创建: {dest}')
    print('  后续: 接入代码、NAPI、Index.d.ts、测试用例 见 SKILL 步骤 4.2–4.4')
    print('  若编写调用 NAPI 的单元测试（*dts.test.ets），须按 SKILL 步骤 4.5 将 entry/src/mock/mock-config.json5 清空为 {}，否则测试会报 undefined is not callable')
    return 0


def cmd_build(project_dir):
    """委托 hapbuild.py build，项目目录转为绝对路径。"""
    project_dir = os.path.abspath(project_dir)
    if not os.path.isdir(project_dir):
        print(f'❌ 项目目录不存在: {project_dir}')
        return 1
    hapbuild = _hapbuild_py()
    if not os.path.isfile(hapbuild):
        print(f'❌ 未找到 hapbuild.py: {hapbuild}')
        return 1
    cmd = [sys.executable, hapbuild, 'build', project_dir]
    ret = subprocess.run(cmd)
    return 0 if ret.returncode == 0 else 1


def cmd_sign(project_dir, profile_type='release'):
    """委托 hapbuild.py sign。"""
    project_dir = os.path.abspath(project_dir)
    if not os.path.isdir(project_dir):
        print(f'❌ 项目目录不存在: {project_dir}')
        return 1
    hapbuild = _hapbuild_py()
    if not os.path.isfile(hapbuild):
        print(f'❌ 未找到 hapbuild.py: {hapbuild}')
        return 1
    cmd = [sys.executable, hapbuild, 'sign', project_dir, profile_type]
    ret = subprocess.run(cmd)
    return 0 if ret.returncode == 0 else 1


def _ohhdc_py():
    return os.path.join(os.path.dirname(_script_dir()), 'ohhdc', 'ohhdc.py')


def cmd_build_test(project_dir):
    """编译单元测试 HAP（ohosTest 模块），委托 hapbuild.py build-test。"""
    project_dir = os.path.abspath(project_dir)
    if not os.path.isdir(project_dir):
        print(f'❌ 项目目录不存在: {project_dir}')
        return 1
    hapbuild = _hapbuild_py()
    if not os.path.isfile(hapbuild):
        print(f'❌ 未找到 hapbuild.py: {hapbuild}')
        return 1
    cmd = [sys.executable, hapbuild, 'build-test', project_dir]
    ret = subprocess.run(cmd)
    return 0 if ret.returncode == 0 else 1


def cmd_test(project_dir, timeout=None):
    """部署并执行单元测试（卸载→安装主 HAP→安装测试 HAP→aa test），委托 ohhdc deploy-test。"""
    project_dir = os.path.abspath(project_dir)
    if not os.path.isdir(project_dir):
        print(f'❌ 项目目录不存在: {project_dir}')
        return 1
    ohhdc = _ohhdc_py()
    if not os.path.isfile(ohhdc):
        print(f'❌ 未找到 ohhdc.py: {ohhdc}')
        return 1
    cmd = [sys.executable, ohhdc, 'deploy-test', project_dir]
    if timeout is not None:
        cmd.extend(['--timeout', str(timeout)])
    ret = subprocess.run(cmd)
    return 0 if ret.returncode == 0 else 1


def cmd_clean_sign(project_dir):
    """委托 hapbuild.py clean-sign。"""
    project_dir = os.path.abspath(project_dir)
    if not os.path.isdir(project_dir):
        print(f'❌ 项目目录不存在: {project_dir}')
        return 1
    hapbuild = _hapbuild_py()
    if not os.path.isfile(hapbuild):
        print(f'❌ 未找到 hapbuild.py: {hapbuild}')
        return 1
    cmd = [sys.executable, hapbuild, 'clean-sign', project_dir]
    ret = subprocess.run(cmd)
    return 0 if ret.returncode == 0 else 1


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print('命令: create | build | sign | build-test | test | clean-sign')
        return 1
    if sys.argv[1] in ('-h', '--help'):
        print(__doc__)
        print('命令: create | build | sign | build-test | test | clean-sign')
        print('说明: SKILL.md=能力与提示词、测试报告格式；DESIGN.md=设计文档与代码规范')
        return 0
    cmd = sys.argv[1].lower()
    if cmd == 'create':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py create <项目名> [--code-dir <路径>]')
            return 1
        name = sys.argv[2]
        code_dir = None
        for i in range(3, len(sys.argv)):
            if sys.argv[i] == '--code-dir' and i + 1 < len(sys.argv):
                code_dir = sys.argv[i + 1]
                break
        return cmd_create(name, code_dir)
    if cmd == 'build':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py build <项目目录>')
            return 1
        return cmd_build(sys.argv[2])
    if cmd == 'sign':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py sign <项目目录> [release|debug]')
            return 1
        profile = sys.argv[3] if len(sys.argv) > 3 else 'release'
        if profile not in ('release', 'debug'):
            profile = 'release'
        return cmd_sign(sys.argv[2], profile)
    if cmd == 'build-test':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py build-test <项目目录>')
            return 1
        return cmd_build_test(sys.argv[2])
    if cmd == 'test':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py test <项目目录> [--timeout 毫秒]')
            return 1
        timeout = None
        for i in range(3, len(sys.argv)):
            if sys.argv[i] == '--timeout' and i + 1 < len(sys.argv):
                try:
                    timeout = int(sys.argv[i + 1])
                except ValueError:
                    pass
                break
        return cmd_test(sys.argv[2], timeout=timeout)
    if cmd == 'clean-sign':
        if len(sys.argv) < 3:
            print('用法: python3 ohproj.py clean-sign <项目目录>')
            return 1
        return cmd_clean_sign(sys.argv[2])
    print(f'❌ 未知命令: {cmd}')
    print('命令: create | build | sign | build-test | test | clean-sign')
    return 1


if __name__ == '__main__':
    sys.exit(main())
