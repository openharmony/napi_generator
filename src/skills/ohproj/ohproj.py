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
  python3 ohproj.py create <项目名> [--code-dir <路径>] [--setup-cjson]
    --setup-cjson: 与 --code-dir 同时使用时，自动完成 cJSON 接入（CMake、NAPI、Index.d.ts、应用页、Cjsondts 测试、mock 关闭、oh_modules 拷贝），标准化可编译可测项目。
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


def _templates_cjson_dir():
    """templates/cjson 目录（与 ohproj.py 同级的 templates/cjson）"""
    return os.path.join(_ohproj_root(), 'templates', 'cjson')


def _setup_cjson(dest, cjson_dir_basename, project_name):
    """
    在已创建的项目中完成 cJSON 标准化接入：CMake、NAPI、Index.d.ts、应用页、测试、mock、oh_modules。
    dest: 项目根目录；cjson_dir_basename: 已拷贝到 entry/.../cpp 下的目录名（如 cJSON-master）；project_name: 项目名（用于 Index.ets 占位）。
    """
    cpp_dir = os.path.join(dest, 'entry', 'src', 'main', 'cpp')
    cjson_path = os.path.join(cpp_dir, cjson_dir_basename)
    if not os.path.isdir(cjson_path):
        print(f'⚠ --setup-cjson: 未找到 {cjson_path}，跳过 cJSON 配置')
        return False
    if not (os.path.isfile(os.path.join(cjson_path, 'cJSON.c')) or os.path.isfile(os.path.join(cjson_path, 'cJSON.h'))):
        print(f'⚠ --setup-cjson: {cjson_path} 下未发现 cJSON.c/cJSON.h，跳过 cJSON 配置')
        return False
    tpl = _templates_cjson_dir()
    if not os.path.isdir(tpl):
        print(f'⚠ --setup-cjson: 模板目录不存在 {tpl}，跳过 cJSON 配置')
        return False
    # 1. 修改 CMakeLists.txt
    cmake = os.path.join(cpp_dir, 'CMakeLists.txt')
    if os.path.isfile(cmake):
        with open(cmake, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'CJSON_DIR' not in content:
            content = content.replace(
                'set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED',
                'set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\nset(CJSON_DIR ${NATIVERENDER_ROOT_PATH}/' + cjson_dir_basename + ')\n\nif(DEFINED'
            )
        if '${CJSON_DIR}' not in content:
            content = content.replace(
                '${NATIVERENDER_ROOT_PATH}/include)',
                '${NATIVERENDER_ROOT_PATH}/include\n                    ${CJSON_DIR})'
            )
        if 'cJSON.c' not in content:
            content = content.replace(
                'add_library(entry SHARED napi_init.cpp)',
                'add_library(entry SHARED napi_init.cpp ${CJSON_DIR}/cJSON.c)'
            )
        with open(cmake, 'w', encoding='utf-8') as f:
            f.write(content)
        print('  已配置 CMakeLists.txt（CJSON_DIR、include、cJSON.c）')
    # 2. 拷贝 napi_init.cpp、Index.d.ts、Cjsondts.test.ets
    for name in ('napi_init.cpp', 'Index.d.ts', 'Cjsondts.test.ets'):
        src = os.path.join(tpl, name)
        if not os.path.isfile(src):
            continue
        if name == 'napi_init.cpp':
            shutil.copy2(src, os.path.join(cpp_dir, name))
            print(f'  已写入 entry/src/main/cpp/napi_init.cpp')
        elif name == 'Index.d.ts':
            types_dir = os.path.join(cpp_dir, 'types', 'libentry')
            oh_mod_dir = os.path.join(dest, 'entry', 'oh_modules', 'libentry.so')
            for d in (types_dir, oh_mod_dir):
                if not os.path.isdir(d):
                    os.makedirs(d, exist_ok=True)
                shutil.copy2(src, os.path.join(d, 'Index.d.ts'))
            print('  已写入 types/libentry/Index.d.ts 与 entry/oh_modules/libentry.so/Index.d.ts')
        elif name == 'Cjsondts.test.ets':
            test_dir = os.path.join(dest, 'entry', 'src', 'ohosTest', 'ets', 'test')
            if os.path.isdir(test_dir):
                shutil.copy2(src, os.path.join(test_dir, name))
                print(f'  已写入 entry/src/ohosTest/ets/test/Cjsondts.test.ets')
    # 3. Index.ets（替换 {{PROJECT_NAME}}）
    index_ets = os.path.join(tpl, 'Index.ets')
    if os.path.isfile(index_ets):
        with open(index_ets, 'r', encoding='utf-8') as f:
            ets_content = f.read().replace('{{PROJECT_NAME}}', project_name)
        out_ets = os.path.join(dest, 'entry', 'src', 'main', 'ets', 'pages', 'Index.ets')
        if os.path.isdir(os.path.dirname(out_ets)):
            with open(out_ets, 'w', encoding='utf-8') as f:
                f.write(ets_content)
            print('  已写入 entry/src/main/ets/pages/Index.ets（cJSON 演示）')
    # 4. List.test.ets
    list_tpl = os.path.join(tpl, 'List.test.ets')
    if os.path.isfile(list_tpl):
        test_dir = os.path.join(dest, 'entry', 'src', 'ohosTest', 'ets', 'test')
        if os.path.isdir(test_dir):
            shutil.copy2(list_tpl, os.path.join(test_dir, 'List.test.ets'))
            print('  已写入 entry/src/ohosTest/ets/test/List.test.ets（abilityTest + cjsondtsTest）')
    # 5. mock-config.json5 清空
    mock_cfg = os.path.join(dest, 'entry', 'src', 'mock', 'mock-config.json5')
    if os.path.isfile(mock_cfg):
        with open(mock_cfg, 'w', encoding='utf-8') as f:
            f.write('{\n}\n')
        print('  已清空 entry/src/mock/mock-config.json5（测试使用真实 NAPI）')
    # 6. 拷贝 oh_modules/@ohos（hypium、hamock）
    template_dir = _template_dir()
    src_ohos = os.path.join(template_dir, 'oh_modules', '@ohos')
    dest_ohos = os.path.join(dest, 'oh_modules', '@ohos')
    if os.path.isdir(src_ohos):
        if not os.path.isdir(os.path.join(dest, 'oh_modules')):
            os.makedirs(os.path.join(dest, 'oh_modules'), exist_ok=True)
        if not os.path.isdir(dest_ohos):
            shutil.copytree(src_ohos, dest_ohos)
            print('  已拷贝 oh_modules/@ohos（@ohos/hypium 等，供 build-test）')
        else:
            print('  oh_modules/@ohos 已存在，未覆盖')
    else:
        print('  ⚠ 模板中无 oh_modules/@ohos，build-test 时若报 @ohos/hypium 解析失败请手动拷贝')
    return True


def cmd_create(project_name, code_dir=None, setup_cjson=False):
    """创建项目：拷贝模板并重命名、修改 bundleName，可选拷贝 code_dir 到 cpp；可选 --setup-cjson 一键完成 cJSON 接入。"""
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
    code_dir_basename = None
    if code_dir:
        code_src = os.path.abspath(code_dir)
        if not os.path.isdir(code_src):
            print(f'⚠ 未找到代码目录: {code_src}')
        else:
            cpp_dir = os.path.join(dest, 'entry', 'src', 'main', 'cpp')
            code_dir_basename = os.path.basename(code_src.rstrip(os.sep))
            code_dest = os.path.join(cpp_dir, code_dir_basename)
            if os.path.exists(code_dest):
                print(f'⚠ cpp 下已存在同名目录: {code_dest}')
                code_dir_basename = None
            else:
                shutil.copytree(code_src, code_dest)
                print(f'  已拷贝代码目录 -> {code_dest}')
                if not setup_cjson:
                    print('  请手动在 entry/src/main/cpp/CMakeLists.txt 中加入该目录的源文件和 include_directories')
    if setup_cjson and code_dir_basename:
        print('  执行 --setup-cjson：配置 CMake、NAPI、测试、mock、oh_modules...')
        _setup_cjson(dest, code_dir_basename, project_name)
    elif setup_cjson and not code_dir_basename:
        print('  ⚠ --setup-cjson 需与 --code-dir 同时使用且代码目录拷贝成功，已跳过 cJSON 配置')
    print(f'✓ 项目已创建: {dest}')
    print('  后续: 接入代码、NAPI、Index.d.ts、测试用例 见 SKILL 步骤 4.2–4.4')
    print('  若编写调用 NAPI 的单元测试（*dts.test.ets），须按 SKILL 步骤 4.5 将 entry/src/mock/mock-config.json5 清空为 {}，否则测试会报 undefined is not callable')
    print('  编译/测试常见问题（如 @ohos/hypium 解析失败、uv_cwd、用例不足）见同目录 KNOWN_ISSUES_AND_AVOIDANCE.md')
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
            print('用法: python3 ohproj.py create <项目名> [--code-dir <路径>] [--setup-cjson]')
            return 1
        name = sys.argv[2]
        code_dir = None
        setup_cjson = False
        i = 3
        while i < len(sys.argv):
            if sys.argv[i] == '--code-dir' and i + 1 < len(sys.argv):
                code_dir = sys.argv[i + 1]
                i += 2
                continue
            if sys.argv[i] == '--setup-cjson':
                setup_cjson = True
                i += 1
                continue
            i += 1
        return cmd_create(name, code_dir, setup_cjson)
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
