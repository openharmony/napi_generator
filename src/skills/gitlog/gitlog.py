#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Git Log Skill - Python Implementation
Author: Created by user
Created: 2026-01-26
Version: 1.0.0

Usage:
    python3 gitlog.py <command> [arguments]
    or
    python3 .claude/skills/gitlog/gitlog.py <command> [arguments]

Commands:
    status          - Show git status
    log             - Show git log (default: --oneline -10)
    log-oneline     - Show git log in one-line format
    log-stat        - Show git log with statistics
    log-patch       - Show git log with full patch
    log-file <file> - Show git log for specific file
    log-range <from>..<to>  - Show commits between two references
    log-first-parent <range>  - Show commits with --first-parent option
    report [tag]    - Generate git status and log reports
    commit [message] [--no-sign] - Auto commit and push changes with Signed-off-by (max 2000 lines per commit)
    sign-commits [range] - Sign existing commits (e.g., HEAD~5..HEAD or commit1..commit2)
    push [remote] [branch] - Push commits to remote repository
    config-token [username] [token] - Configure Git credential with token
    check-copyright [--fix] [--dry-run] - Check and fix copyright headers in source files (.ets, .h, .cpp, .c, .d.ts)
    help            - Show this help message
"""

import sys
import subprocess
import os
import re
from pathlib import Path

# Script metadata
SCRIPT_DIR = Path(__file__).parent.absolute()
SKILL_NAME = "gitlog"
VERSION = "1.0.0"
AUTHOR = "Created by user"


def print_debug_info(command):
    """Print debug information"""
    print("╔══════════════════════════════════════════════════════════════╗")
    print(f"║  DEBUG: Git Log Skill v{VERSION}                                ║")
    print(f"║  DEBUG: Author: {AUTHOR}                             ║")
    print(f"║  DEBUG: Command: {command}                                              ║")
    print("╚══════════════════════════════════════════════════════════════╝")
    print()


def run_git_command(args, capture_output=False):
    """
    Run a git command and return the result
    
    Args:
        args: List of git command arguments
        capture_output: If True, capture and return output; if False, print directly
    
    Returns:
        If capture_output is True, returns (returncode, stdout, stderr)
        Otherwise, returns returncode
    """
    git_cmd = ['git'] + args
    
    try:
        if capture_output:
            result = subprocess.run(
                git_cmd,
                capture_output=True,
                text=True,
                check=False
            )
            return result.returncode, result.stdout, result.stderr
        else:
            result = subprocess.run(git_cmd, check=False)
            return result.returncode
    except FileNotFoundError:
        print("❌ 错误: 未找到 git 命令，请确保 Git 已安装并在 PATH 中")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 错误: 执行 git 命令时出错: {e}")
        sys.exit(1)


def show_help():
    """Show help message"""
    help_text = f"""Git Log Skill v{VERSION}
Author: {AUTHOR}

Usage: {sys.argv[0]} <command> [arguments]

Commands:
  status                    Show git status
  log [n]                   Show last n commits (default: 10) in one-line format
  log-oneline [n]           Show last n commits in one-line format
  log-stat [n]              Show last n commits with file statistics
  log-patch [n]             Show last n commits with full patch/diff
  log-file <file>           Show git log for specific file
  log-range <from>..<to>    Show commits between two references
  log-first-parent <range>  Show commits with --first-parent (e.g., tag^..HEAD)
  report [tag]              Generate git-status.txt and git-log.txt files
  commit [message] [--no-sign]  Auto commit and push changes with Signed-off-by (max 2000 lines per commit)
  push [remote] [branch]    Push commits to remote repository
  check-copyright [--fix] [--dry-run]  Check and fix copyright headers in source files (.ets, .h, .cpp, .c, .d.ts)
  help                      Show this help message

Examples:
  {sys.argv[0]} status
  {sys.argv[0]} log 5
  {sys.argv[0]} log-oneline 20
  {sys.argv[0]} log-file CMakeLists.txt
  {sys.argv[0]} log-range v1.4.3..v1.4.4
  {sys.argv[0]} log-first-parent v1.4.4.0^..HEAD
  {sys.argv[0]} report v1.4.4.0
  {sys.argv[0]} commit
  {sys.argv[0]} commit "Fix bug in CMakeLists.txt"
  {sys.argv[0]} check-copyright
  {sys.argv[0]} check-copyright --fix
  {sys.argv[0]} check-copyright --dry-run
  {sys.argv[0]} commit "Commit message"
  {sys.argv[0]} commit --no-sign "Commit without signature"
  {sys.argv[0]} sign-commits HEAD~5..HEAD
  {sys.argv[0]} sign-commits 3d5a298..HEAD
  {sys.argv[0]} config-token username your_token_here
  (Note: commit command will automatically push after committing)
  (Note: By default, commits will include Signed-off-by line. Use --no-sign to disable it)
  {sys.argv[0]} push
  {sys.argv[0]} push origin master
  {sys.argv[0]} config-token username your_token_here
"""
    print(help_text)


def cmd_status():
    """Show git status"""
    print("=== Git Status ===")
    returncode = run_git_command(['status'])
    return returncode


def cmd_log(count=10):
    """Show git log in one-line format"""
    print(f"=== Git Log (last {count} commits, one-line format) ===")
    returncode = run_git_command(['log', '--oneline', f'-{count}'])
    return returncode


def cmd_log_oneline(count=10):
    """Show git log in one-line format"""
    print(f"=== Git Log (last {count} commits, one-line format) ===")
    returncode = run_git_command(['log', '--oneline', f'-{count}'])
    return returncode


def cmd_log_stat(count=10):
    """Show git log with statistics"""
    print(f"=== Git Log with Statistics (last {count} commits) ===")
    returncode = run_git_command(['log', '--stat', f'-{count}'])
    return returncode


def cmd_log_patch(count=5):
    """Show git log with full patch"""
    print(f"=== Git Log with Patch (last {count} commits) ===")
    returncode = run_git_command(['log', '-p', f'-{count}'])
    return returncode


def cmd_log_file(file_path):
    """Show git log for specific file"""
    if not file_path:
        print("❌ 错误: 请指定文件路径")
        print(f"用法: {sys.argv[0]} log-file <file_path>")
        return 1
    
    print(f"=== Git Log for file: {file_path} ===")
    returncode = run_git_command(['log', '--', file_path])
    return returncode


def cmd_log_range(range_str):
    """Show commits between two references"""
    if not range_str:
        print("❌ 错误: 请指定范围 (例如: tag1..tag2)")
        print(f"用法: {sys.argv[0]} log-range <from>..<to>")
        return 1
    
    print(f"=== Git Log for range: {range_str} ===")
    returncode = run_git_command(['log', '--oneline', range_str])
    return returncode


def cmd_log_first_parent(range_str):
    """Show commits with --first-parent option"""
    if not range_str:
        print("❌ 错误: 请指定范围 (例如: tag^..HEAD)")
        print(f"用法: {sys.argv[0]} log-first-parent <range>")
        print(f"示例: {sys.argv[0]} log-first-parent v1.4.4.0^..HEAD")
        return 1
    
    print(f"=== Git Log with --first-parent for range: {range_str} ===")
    returncode = run_git_command(['log', '--first-parent', '--oneline', range_str])
    return returncode


def cmd_report(tag='HEAD'):
    """Generate git status and log reports"""
    print("=== Generating Git Reports ===")
    
    # Generate git-status.txt
    print("Git status -> git-status.txt")
    returncode, stdout, stderr = run_git_command(['status'], capture_output=True)
    if returncode == 0:
        try:
            with open('git-status.txt', 'w', encoding='utf-8') as f:
                f.write(stdout)
            print("✓ git-status.txt generated")
        except Exception as e:
            print(f"❌ 错误: 写入 git-status.txt 失败: {e}")
            return 1
    else:
        print(f"❌ 错误: git status 命令失败: {stderr}")
        return returncode
    
    # Generate git-log.txt
    print(f"Git log (from {tag}) -> git-log.txt")
    if tag == 'HEAD':
        returncode, stdout, stderr = run_git_command(
            ['log', '--first-parent'],
            capture_output=True
        )
    else:
        returncode, stdout, stderr = run_git_command(
            ['log', '--first-parent', f'{tag}^..HEAD'],
            capture_output=True
        )
    
    if returncode == 0:
        try:
            with open('git-log.txt', 'w', encoding='utf-8') as f:
                f.write(stdout)
            print("✓ git-log.txt generated")
            print("Reports generated: git-status.txt, git-log.txt")
            return 0
        except Exception as e:
            print(f"❌ 错误: 写入 git-log.txt 失败: {e}")
            return 1
    else:
        print(f"❌ 错误: git log 命令失败: {stderr}")
        return returncode


def get_changed_files():
    """
    Get list of changed files (modified, deleted, and untracked)
    Recursively expands directories to get all individual files
    
    Returns:
        List of tuples: (file_path, status) where status is 'modified', 'deleted', or 'untracked'
    """
    changed_files = []
    
    # Get git status output
    returncode, stdout, stderr = run_git_command(['status', '--porcelain'], capture_output=True)
    if returncode != 0:
        print(f"❌ 错误: 无法获取 git status: {stderr}")
        return changed_files
    
    # Parse porcelain output
    # Format: XY filename
    # X: staged status, Y: unstaged status
    # M = modified, D = deleted, A = added, ?? = untracked
    for line in stdout.strip().split('\n'):
        if not line.strip():
            continue
        
        # Parse status and filename
        status_code = line[:2]
        file_path = line[3:].strip()
        
        if not file_path:
            continue
        
        # Determine file status
        if status_code == '??':
            # Untracked file or directory
            if os.path.isdir(file_path):
                # Recursively get all files in directory
                for root, dirs, files in os.walk(file_path):
                    # Skip .git directories
                    dirs[:] = [d for d in dirs if d != '.git']
                    for file in files:
                        full_path = os.path.join(root, file)
                        changed_files.append((full_path, 'untracked'))
            else:
                changed_files.append((file_path, 'untracked'))
        elif 'D' in status_code:
            # Deleted file
            changed_files.append((file_path, 'deleted'))
        elif 'M' in status_code or 'A' in status_code:
            # Modified or added file
            changed_files.append((file_path, 'modified'))
    
    return changed_files


def get_file_diff_lines(file_path, status):
    """
    Get the number of changed lines (additions + deletions) for a file
    
    Args:
        file_path: Path to the file
        status: File status ('modified', 'deleted', 'untracked')
    
    Returns:
        Tuple: (additions, deletions, total_changes)
    """
    additions = 0
    deletions = 0
    
    if status == 'deleted':
        # For deleted files, get the diff from HEAD
        returncode, stdout, stderr = run_git_command(
            ['diff', '--numstat', 'HEAD', '--', file_path],
            capture_output=True
        )
        if returncode == 0 and stdout.strip():
            # Format: additions deletions filename
            parts = stdout.strip().split('\t')
            if len(parts) >= 2:
                try:
                    additions = int(parts[0]) if parts[0] != '-' else 0
                    deletions = int(parts[1]) if parts[1] != '-' else 0
                except ValueError:
                    pass
    
    elif status == 'untracked':
        # For untracked files, count all lines as additions
        if os.path.exists(file_path) and os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    line_count = sum(1 for _ in f)
                additions = line_count
            except Exception:
                additions = 0
    
    elif status == 'staged':
        # For staged files, only check staged changes
        returncode, stdout, stderr = run_git_command(
            ['diff', '--cached', '--numstat', '--', file_path],
            capture_output=True
        )
        if returncode == 0 and stdout.strip():
            for line in stdout.strip().split('\n'):
                parts = line.split('\t')
                if len(parts) >= 2:
                    try:
                        additions += int(parts[0]) if parts[0] != '-' else 0
                        deletions += int(parts[1]) if parts[1] != '-' else 0
                    except ValueError:
                        pass
    
    else:
        # For modified files, get diff stats
        # Check staged changes first
        returncode, stdout, stderr = run_git_command(
            ['diff', '--cached', '--numstat', '--', file_path],
            capture_output=True
        )
        if returncode == 0 and stdout.strip():
            for line in stdout.strip().split('\n'):
                parts = line.split('\t')
                if len(parts) >= 2:
                    try:
                        additions += int(parts[0]) if parts[0] != '-' else 0
                        deletions += int(parts[1]) if parts[1] != '-' else 0
                    except ValueError:
                        pass
        
        # Check unstaged changes
        returncode, stdout, stderr = run_git_command(
            ['diff', '--numstat', '--', file_path],
            capture_output=True
        )
        if returncode == 0 and stdout.strip():
            for line in stdout.strip().split('\n'):
                parts = line.split('\t')
                if len(parts) >= 2:
                    try:
                        additions += int(parts[0]) if parts[0] != '-' else 0
                        deletions += int(parts[1]) if parts[1] != '-' else 0
                    except ValueError:
                        pass
    
    total_changes = additions + deletions
    return additions, deletions, total_changes


def get_staged_files():
    """
    Get list of files in staging area
    
    Returns:
        List of tuples: (file_path, status) where status is 'staged'
    """
    returncode, stdout, stderr = run_git_command(
        ['diff', '--cached', '--name-status'],
        capture_output=True
    )
    
    if returncode != 0 or not stdout.strip():
        return []
    
    staged_files = []
    for line in stdout.strip().split('\n'):
        if not line.strip():
            continue
        
        # Parse status and filename
        parts = line.split('\t', 1)
        if len(parts) < 2:
            continue
        
        status_code = parts[0]
        file_path = parts[1]
        
        # Handle renamed files (R100 old_path -> new_path)
        if status_code.startswith('R'):
            # For renamed files, use the new path
            if ' -> ' in file_path:
                file_path = file_path.split(' -> ')[1]
        
        if os.path.exists(file_path) or status_code == 'D':
            staged_files.append((file_path, 'staged'))
    
    return staged_files


def get_staged_total_lines():
    """
    Get total lines changed in staging area (additions + deletions)
    
    Returns:
        Total number of lines changed in staging area
    """
    returncode, stdout, stderr = run_git_command(
        ['diff', '--cached', '--numstat'],
        capture_output=True
    )
    
    if returncode != 0 or not stdout.strip():
        return 0
    
    total_lines = 0
    for line in stdout.strip().split('\n'):
        parts = line.split('\t')
        if len(parts) >= 2:
            try:
                additions = int(parts[0]) if parts[0] != '-' else 0
                deletions = int(parts[1]) if parts[1] != '-' else 0
                total_lines += additions + deletions
            except ValueError:
                pass
    
    return total_lines


def commit_large_file_incremental(file_path, message, commit_count, max_lines_per_part=1898, max_lines_per_commit=2000, sign=False):
    """
    Commit a large file incrementally by writing parts to the same file
    
    Args:
        file_path: Path to the file to commit
        message: Commit message
        commit_count: Current commit count (will be incremented)
        max_lines_per_part: Maximum lines per file part commit (default: 1898)
        max_lines_per_commit: Maximum total lines per commit including staged files (default: 2000)
        sign: Whether to sign commits with GPG
    
    Returns:
        (new_commit_count, success)
    """
    # Build commit command with optional signing
    def make_commit_cmd(msg):
        cmd = ['commit', '-m', msg]
        if sign:
            cmd.append('-s')
        return cmd
    if not os.path.exists(file_path) or not os.path.isfile(file_path):
        return commit_count, False
    
    try:
        # Read entire file content
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            all_lines = f.readlines()
        
        total_lines = len(all_lines)
        if total_lines <= max_lines_per_part:
            return commit_count, False
        
        print(f"  文件总行数: {total_lines} 行")
        print(f"  将分 {((total_lines - 1) // max_lines_per_part) + 1} 次提交")
        print(f"  限制: 单次文件提交最多 {max_lines_per_part} 行，单次总提交最多 {max_lines_per_commit} 行")
        print()
        
        # Calculate number of parts
        num_parts = ((total_lines - 1) // max_lines_per_part) + 1
        
        # Commit each part incrementally
        for part_idx in range(num_parts):
            start_line = part_idx * max_lines_per_part
            end_line = min((part_idx + 1) * max_lines_per_part, total_lines)
            part_lines = all_lines[:end_line]  # Write from beginning to current end (cumulative)
            # For incremental commits, git sees the file going from empty to end_line lines
            # So the lines added in this commit is end_line (for first part) or (end_line - previous_end_line) for subsequent parts
            # But since we write cumulative content, git will see end_line lines added each time
            # However, for constraint checking, we use the actual part size: end_line - start_line
            new_lines_in_this_commit = end_line - start_line  # Actual lines in this part (max max_lines_per_part)
            
            # Check if there are staged files that need to be committed first
            current_staged_lines = get_staged_total_lines()
            
            # For incremental commits, git will see end_line lines added (from empty to end_line)
            # We need to ensure:
            # 1. Single file part size (end_line - start_line) <= max_lines_per_part (already ensured by calculation)
            # 2. Total staged lines (current_staged_lines + end_line) <= max_lines_per_commit
            # Note: end_line itself should be <= max_lines_per_part (ensured by calculation)
            # But git sees end_line lines added, so we check: current_staged_lines + end_line <= max_lines_per_commit
            estimated_total_after_add = current_staged_lines + end_line
            
            # If adding this file part would exceed total commit limit, commit staged files first
            if current_staged_lines > 0 and estimated_total_after_add > max_lines_per_commit:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    staged_msg = f"Auto commit: {current_staged_lines} lines changed (before large file part)"
                else:
                    staged_msg = f"{message} - staged files ({current_staged_lines} lines)"
                
                print(f"=== 提交 Commit {commit_count} (暂存区文件) ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {staged_msg}")
                
                returncode = run_git_command(make_commit_cmd(staged_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
                # After committing staged files, staged area is now empty
                current_staged_lines = 0
            
            # Write partial content to original file
            with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                f.writelines(part_lines)
            
            # Add file to staging area
            returncode = run_git_command(['add', file_path])
            if returncode != 0:
                print(f"⚠ 警告: 无法暂存文件 {file_path}，跳过")
                # Restore full file content
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(all_lines)
                return commit_count, False
            
            # Get current staged lines after adding this file part
            current_staged_lines_after = get_staged_total_lines()
            
            # Verify constraints:
            # 1. Single file part should not exceed max_lines_per_part (already ensured by calculation: end_line - start_line <= max_lines_per_part)
            # 2. Total staged lines should not exceed max_lines_per_commit
            # Note: For incremental commits, git sees end_line lines added (from empty to end_line)
            # So current_staged_lines_after should be <= max_lines_per_commit
            if current_staged_lines_after > max_lines_per_commit:
                print(f"⚠ 警告: 暂存区总行数 {current_staged_lines_after} 超过限制 {max_lines_per_commit}，这不应该发生")
                # This should not happen if logic is correct, but if it does, we should handle it
                # For now, just warn and continue
            
            # Commit this part
            commit_count += 1
            if message is None:
                part_msg = f"Auto commit: {file_path} (Part {part_idx + 1}/{num_parts}, lines 1-{end_line}), {end_line} lines"
            else:
                part_msg = f"{message} - {file_path} (Part {part_idx + 1}/{num_parts})"
            
            print(f"=== 提交 Commit {commit_count} ===")
            print(f"文件: {file_path} (部分 {part_idx + 1}/{num_parts}, 累计行数 1-{end_line})")
            print(f"当前文件行数: {end_line} 行")
            print(f"本次新增行数: {new_lines_in_this_commit} 行")
            print(f"暂存区总行数: {current_staged_lines_after} 行")
            print(f"提交信息: {part_msg}")
            
            returncode = run_git_command(make_commit_cmd(part_msg))
            if returncode != 0:
                print(f"❌ Commit {commit_count} 提交失败")
                # Restore full file content
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(all_lines)
                return commit_count, False
            
            print(f"✓ Commit {commit_count} 提交成功")
            print()
        
        # Restore full file content after all commits
        with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
            f.writelines(all_lines)
        
        print(f"✓ 文件 {file_path} 已完整恢复")
        
        return commit_count, True
        
    except Exception as e:
        print(f"⚠ 警告: 增量提交文件 {file_path} 失败: {e}")
        import traceback
        traceback.print_exc()
        return commit_count, False


def delete_large_file_incremental(file_path, message, commit_count, max_lines_per_part=1898, max_lines_per_commit=2000, sign=False):
    """
    Delete a large file incrementally by removing parts from the file
    
    Args:
        file_path: Path to the file to delete
        message: Commit message
        commit_count: Current commit count (will be incremented)
        max_lines_per_part: Maximum lines to delete per commit (default: 1898)
        max_lines_per_commit: Maximum total lines per commit including staged files (default: 2000)
        sign: Whether to sign commits with GPG
    
    Returns:
        (new_commit_count, success)
    """
    # Build commit command with optional signing
    def make_commit_cmd(msg):
        cmd = ['commit', '-m', msg]
        if sign:
            cmd.append('-s')
        return cmd
    
    if not os.path.exists(file_path) or not os.path.isfile(file_path):
        return commit_count, False
    
    try:
        # Read entire file content
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            all_lines = f.readlines()
        
        total_lines = len(all_lines)
        if total_lines <= max_lines_per_part:
            # File is small enough, can delete directly
            return commit_count, False
        
        print(f"  文件总行数: {total_lines} 行")
        print(f"  将分步删除，每次删除最多 {max_lines_per_part} 行")
        print(f"  限制: 单次删除最多 {max_lines_per_part} 行，单次总提交最多 {max_lines_per_commit} 行")
        print()
        
        remaining_lines = all_lines[:]  # Copy all lines
        part_idx = 0
        
        # Delete file incrementally
        while len(remaining_lines) > max_lines_per_part:
            part_idx += 1
            lines_to_delete = max_lines_per_part
            lines_to_keep = remaining_lines[lines_to_delete:]  # Keep lines after the deleted part
            
            # Check if there are staged files that need to be committed first
            current_staged_lines = get_staged_total_lines()
            
            # For deletion, git will see lines_to_delete lines removed
            # So we check: current_staged_lines + lines_to_delete <= max_lines_per_commit
            estimated_total_after_delete = current_staged_lines + lines_to_delete
            
            # If adding this deletion would exceed total commit limit, commit staged files first
            if current_staged_lines > 0 and estimated_total_after_delete > max_lines_per_commit:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    staged_msg = f"Auto commit: {current_staged_lines} lines changed (before large file deletion)"
                else:
                    staged_msg = f"{message} - staged files ({current_staged_lines} lines)"
                
                print(f"=== 提交 Commit {commit_count} (暂存区文件) ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {staged_msg}")
                
                returncode = run_git_command(make_commit_cmd(staged_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
                # After committing staged files, staged area is now empty
                current_staged_lines = 0
            
            # Write remaining lines to file (delete the first max_lines_per_part lines)
            with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                f.writelines(lines_to_keep)
            
            # Add file to staging area (this will stage the deletion of lines_to_delete lines)
            returncode = run_git_command(['add', file_path])
            if returncode != 0:
                print(f"⚠ 警告: 无法暂存文件 {file_path}，跳过")
                # Restore full file content
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(all_lines)
                return commit_count, False
            
            # Get current staged lines after adding this deletion
            current_staged_lines_after = get_staged_total_lines()
            
            # Verify constraints:
            # 1. Single file deletion should not exceed max_lines_per_part (already ensured by calculation)
            # 2. Total staged lines should not exceed max_lines_per_commit
            if current_staged_lines_after > max_lines_per_commit:
                print(f"⚠ 警告: 暂存区总行数 {current_staged_lines_after} 超过限制 {max_lines_per_commit}，这不应该发生")
            
            # Commit this deletion part
            commit_count += 1
            remaining_line_count = len(lines_to_keep)
            if message is None:
                part_msg = f"Auto commit: {file_path} (删除部分 {part_idx}, 删除 {lines_to_delete} 行, 剩余 {remaining_line_count} 行)"
            else:
                part_msg = f"{message} - {file_path} (删除部分 {part_idx}/{((total_lines - 1) // max_lines_per_part) + 1})"
            
            print(f"=== 提交 Commit {commit_count} ===")
            print(f"文件: {file_path} (删除部分 {part_idx})")
            print(f"本次删除行数: {lines_to_delete} 行")
            print(f"剩余行数: {remaining_line_count} 行")
            print(f"暂存区总行数: {current_staged_lines_after} 行")
            print(f"提交信息: {part_msg}")
            
            returncode = run_git_command(make_commit_cmd(part_msg))
            if returncode != 0:
                print(f"❌ Commit {commit_count} 提交失败")
                # Restore full file content
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(all_lines)
                return commit_count, False
            
            print(f"✓ Commit {commit_count} 提交成功")
            print()
            
            # Update remaining lines for next iteration
            remaining_lines = lines_to_keep
        
        # Now remaining_lines has <= max_lines_per_part lines
        # We need to delete the remaining lines and then delete the file
        if len(remaining_lines) > 0:
            # First, write remaining lines to file (this deletes the previous part)
            # Then delete the file
            # Check if there are staged files that need to be committed first
            current_staged_lines = get_staged_total_lines()
            remaining_line_count = len(remaining_lines)
            
            # If adding this final deletion would exceed total commit limit, commit staged files first
            if current_staged_lines > 0 and current_staged_lines + remaining_line_count > max_lines_per_commit:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    staged_msg = f"Auto commit: {current_staged_lines} lines changed (before final file deletion)"
                else:
                    staged_msg = f"{message} - staged files ({current_staged_lines} lines)"
                
                print(f"=== 提交 Commit {commit_count} (暂存区文件) ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {staged_msg}")
                
                returncode = run_git_command(make_commit_cmd(staged_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            # If there were previous deletions (part_idx > 0), we need to commit the deletion of the last part
            # before deleting the file. Otherwise, we can delete the file directly.
            if part_idx > 0:
                # Write remaining lines to file (this stages the deletion of the previous part)
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(remaining_lines)
                
                # Add file to staging area (this will stage the deletion of lines from previous commit)
                returncode = run_git_command(['add', file_path])
                if returncode != 0:
                    print(f"⚠ 警告: 无法暂存文件 {file_path}，跳过")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                # Get current staged lines after adding this deletion
                current_staged_lines_after = get_staged_total_lines()
                
                # Commit the deletion of previous part
                commit_count += 1
                if message is None:
                    part_msg = f"Auto commit: {file_path} (删除部分 {part_idx + 1}, 剩余 {remaining_line_count} 行)"
                else:
                    part_msg = f"{message} - {file_path} (删除部分 {part_idx + 1})"
                
                print(f"=== 提交 Commit {commit_count} ===")
                print(f"文件: {file_path} (删除部分 {part_idx + 1})")
                print(f"剩余行数: {remaining_line_count} 行")
                print(f"暂存区总行数: {current_staged_lines_after} 行")
                print(f"提交信息: {part_msg}")
                
                returncode = run_git_command(make_commit_cmd(part_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            # Now delete the file (final deletion)
            # Check staged area again before final deletion
            current_staged_lines = get_staged_total_lines()
            
            if current_staged_lines > 0 and current_staged_lines + remaining_line_count > max_lines_per_commit:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    staged_msg = f"Auto commit: {current_staged_lines} lines changed (before final file deletion)"
                else:
                    staged_msg = f"{message} - staged files ({current_staged_lines} lines)"
                
                print(f"=== 提交 Commit {commit_count} (暂存区文件) ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {staged_msg}")
                
                returncode = run_git_command(make_commit_cmd(staged_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    # Restore full file content
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.writelines(all_lines)
                    return commit_count, False
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            # Delete the file (final deletion)
            returncode = run_git_command(['rm', file_path])
            if returncode != 0:
                print(f"⚠ 警告: 无法删除文件 {file_path}，跳过")
                # Restore full file content
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.writelines(all_lines)
                return commit_count, False
            
            # Get current staged lines after deleting the file
            current_staged_lines_after = get_staged_total_lines()
            
            # Commit final deletion
            commit_count += 1
            if message is None:
                final_msg = f"Auto commit: {file_path} (最终删除, 删除 {remaining_line_count} 行)"
            else:
                final_msg = f"{message} - {file_path} (最终删除)"
            
            print(f"=== 提交 Commit {commit_count} (最终删除) ===")
            print(f"文件: {file_path}")
            print(f"删除行数: {remaining_line_count} 行")
            print(f"暂存区总行数: {current_staged_lines_after} 行")
            print(f"提交信息: {final_msg}")
            
            returncode = run_git_command(make_commit_cmd(final_msg))
            if returncode != 0:
                print(f"❌ Commit {commit_count} 提交失败")
                # File is already deleted, can't restore
                return commit_count, False
            
            print(f"✓ Commit {commit_count} 提交成功")
            print()
        
        print(f"✓ 文件 {file_path} 已完全删除")
        
        return commit_count, True
        
    except Exception as e:
        print(f"⚠ 警告: 增量删除文件 {file_path} 失败: {e}")
        import traceback
        traceback.print_exc()
        return commit_count, False


def cmd_commit(message=None, sign=False):
    """
    Auto commit and push changes with 2000 lines limit per commit
    Processes files one by one, adding and committing when limit is reached
    For large files (>2000 lines), commits incrementally by writing parts to the same file
    After all commits are done, automatically pushes to remote repository
    
    Args:
        message: Optional commit message. If None, will generate automatically
        sign: Whether to add Signed-off-by line to commits (default: False)
    
    Returns:
        Exit code (0 if both commit and push succeed, non-zero if either fails)
    """
    MAX_LINES_PER_COMMIT = 2000
    MAX_LINES_PER_PART = 1898  # For splitting large files
    
    # Sign is True by default, will add --signoff (-s) to commit
    if sign:
        print("ℹ 将为提交添加 Signed-off-by 行")
        print()
    
    # Build commit command with optional signing
    def make_commit_cmd(msg):
        cmd = ['commit', '-m', msg]
        if sign:
            cmd.append('-s')
        return cmd
    
    print("=== Auto Commit Changes ===")
    print(f"限制: 每个 commit 最多 {MAX_LINES_PER_COMMIT} 行修改（新增+删除）")
    print(f"大文件分割: 单个文件超过 {MAX_LINES_PER_COMMIT} 行时，将分割为每部分最多 {MAX_LINES_PER_PART} 行")
    print(f"约束条件: 单次提交总行数 ≤ {MAX_LINES_PER_COMMIT}，单个文件单次提交行数 ≤ {MAX_LINES_PER_PART}")
    print()
    
    commit_count = 0
    total_files_committed = 0
    
    # Check if there are already staged files
    staged_files = get_staged_files()
    current_staged_lines = get_staged_total_lines()
    
    if staged_files and current_staged_lines > 0:
        print(f"⚠ 发现暂存区已有 {len(staged_files)} 个文件，共 {current_staged_lines} 行")
        print("  将先处理暂存区的文件，确保不超过行数限制")
        print()
        
        # If staged area exceeds limit, we need to unstage and process files individually
        if current_staged_lines > MAX_LINES_PER_COMMIT:
            print(f"⚠ 暂存区总行数 {current_staged_lines} 超过限制 {MAX_LINES_PER_COMMIT}")
            print("  将取消暂存，然后逐个文件处理")
            print()
            
            # Unstage all files
            for file_path, _ in staged_files:
                returncode = run_git_command(['restore', '--staged', file_path])
                if returncode != 0:
                    print(f"⚠ 警告: 无法取消暂存文件 {file_path}")
            
            # Now get all changed files including the unstaged ones
            changed_files = get_changed_files()
        else:
            # Staged files are within limit, commit them first
            print(f"暂存区文件在限制范围内，将先提交这些文件")
            print()
            
            # Commit staged files first
            commit_count += 1
            if message is None:
                commit_msg = f"Auto commit: {current_staged_lines} lines changed"
            else:
                commit_msg = message
            
            print(f"=== 提交 Commit {commit_count} (暂存区文件) ===")
            print(f"暂存区行数: {current_staged_lines} 行")
            print(f"提交信息: {commit_msg}")
            
            returncode = run_git_command(make_commit_cmd(commit_msg))
            if returncode != 0:
                print(f"❌ Commit {commit_count} 提交失败")
                return returncode
            
            print(f"✓ Commit {commit_count} 提交成功")
            print()
            
            # Update total files committed
            total_files_committed += len(staged_files)
            
            # Now get remaining changed files
            changed_files = get_changed_files()
    else:
        # Get changed files (recursively expanded)
        changed_files = get_changed_files()
    
    if not changed_files:
        print("✓ 没有需要提交的文件")
        return 0
    
    print(f"发现 {len(changed_files)} 个已修改的文件")
    print()
    
    # Process files one by one
    for file_path, status in changed_files:
        # Skip if file is a directory or doesn't exist
        if os.path.isdir(file_path):
            continue
        
        # Get file diff lines before adding
        additions, deletions, file_total = get_file_diff_lines(file_path, status)
        
        # Handle deleted files
        if status == 'deleted':
            print(f"删除文件: {file_path}")
            print(f"  删除行数: {file_total} 行")
            
            # Handle large files (>1898 lines) by incremental deletion
            if file_total > MAX_LINES_PER_PART:
                print(f"  文件超过 {MAX_LINES_PER_PART} 行，将采用增量删除方式")
                print(f"  限制: 单次删除最多 {MAX_LINES_PER_PART} 行，单次总提交最多 {MAX_LINES_PER_COMMIT} 行")
                
                # Check if file still exists (it might have been deleted already)
                # For deleted files, we need to restore it first to do incremental deletion
                # Get file content from git
                returncode, file_content, stderr = run_git_command(
                    ['show', f'HEAD:{file_path}'],
                    capture_output=True
                )
                
                if returncode == 0 and file_content:
                    # File exists in HEAD, restore it temporarily for incremental deletion
                    # Create directory if needed
                    file_dir = os.path.dirname(file_path)
                    if file_dir:  # Only create directory if path has a directory component
                        os.makedirs(file_dir, exist_ok=True)
                    with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                        f.write(file_content)
                    
                    # Delete file incrementally
                    commit_count, success = delete_large_file_incremental(
                        file_path, message, commit_count, MAX_LINES_PER_PART, MAX_LINES_PER_COMMIT, sign
                    )
                    if success:
                        total_files_committed += 1
                        continue
                    else:
                        print(f"⚠ 警告: 增量删除失败，将按原文件删除")
                        # File might still exist, remove it
                        if os.path.exists(file_path):
                            os.remove(file_path)
                        # Fall through to normal deletion
                else:
                    print(f"⚠ 警告: 无法从 git 获取文件内容，将按原文件删除")
                    # Fall through to normal deletion
            
            # Normal file deletion (small files or fallback for large files)
            # Get current staged lines
            current_staged_lines = get_staged_total_lines()
            
            # Check if adding this deletion would exceed the limit
            if current_staged_lines > 0 and current_staged_lines + file_total > MAX_LINES_PER_COMMIT:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    commit_msg = f"Auto commit: {current_staged_lines} lines changed"
                else:
                    commit_msg = message
                
                print(f"=== 提交 Commit {commit_count} ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {commit_msg}")
                
                returncode = run_git_command(make_commit_cmd(commit_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    return returncode
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            # Add deletion
            returncode = run_git_command(['rm', file_path])
            if returncode != 0:
                print(f"⚠ 警告: 无法暂存删除文件 {file_path}，跳过")
                continue
            
            total_files_committed += 1
            
            # Check if we should commit now
            current_staged_lines = get_staged_total_lines()
            if current_staged_lines >= MAX_LINES_PER_COMMIT:
                commit_count += 1
                if message is None:
                    commit_msg = f"Auto commit: {current_staged_lines} lines changed"
                else:
                    commit_msg = message
                
                print(f"=== 提交 Commit {commit_count} ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {commit_msg}")
                
                returncode = run_git_command(make_commit_cmd(commit_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    return returncode
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            continue
        
        # Handle large files (>2000 lines) by incremental commits
        if file_total > MAX_LINES_PER_COMMIT:
            print(f"处理大文件: {file_path} ({file_total} 行，超过限制)")
            print(f"  将采用增量提交方式，每次在原文件中写入最多 {MAX_LINES_PER_PART} 行并提交")
            print(f"  限制: 单次文件提交最多 {MAX_LINES_PER_PART} 行，单次总提交最多 {MAX_LINES_PER_COMMIT} 行")
            
            # Only handle untracked files (new files) with incremental commits
            # For modified files, we can't easily do incremental commits
            if status == 'untracked':
                # Commit file incrementally
                commit_count, success = commit_large_file_incremental(file_path, message, commit_count, MAX_LINES_PER_PART, MAX_LINES_PER_COMMIT, sign)
                if success:
                    total_files_committed += 1
                    continue
                else:
                    print(f"⚠ 警告: 增量提交失败，将按原文件处理")
                    # Fall through to normal processing
            else:
                # For modified files, we can't do incremental commits easily
                # Just warn and proceed with normal processing
                print(f"⚠ 警告: 文件 {file_path} 超过 {MAX_LINES_PER_COMMIT} 行限制，但它是已修改的文件，无法增量提交")
                print(f"  将按原文件提交（可能超过限制）")
                # Fall through to normal processing
        
        # Normal file processing (small files or fallback for large files)
        # Get current staged lines
        current_staged_lines = get_staged_total_lines()
        
        # Check if file is already staged
        is_already_staged = (status == 'staged')
        
        if not is_already_staged:
            # Check if adding this file would exceed the limit
            if current_staged_lines > 0 and current_staged_lines + file_total > MAX_LINES_PER_COMMIT:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    commit_msg = f"Auto commit: {current_staged_lines} lines changed"
                else:
                    commit_msg = message
                
                print(f"=== 提交 Commit {commit_count} ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {commit_msg}")
                
                returncode = run_git_command(make_commit_cmd(commit_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    return returncode
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
            
            # Add current file
            print(f"添加文件: {file_path} ({status})")
            print(f"  修改行数: +{additions} -{deletions} = {file_total} 行")
            
            returncode = run_git_command(['add', file_path])
            if returncode != 0:
                print(f"⚠ 警告: 无法暂存文件 {file_path}，跳过")
                continue
        else:
            # File is already staged
            print(f"处理已暂存文件: {file_path}")
            print(f"  修改行数: +{additions} -{deletions} = {file_total} 行")
            
            # Check if current staged area (including this file) exceeds limit
            if current_staged_lines > MAX_LINES_PER_COMMIT:
                # Commit current staged files first
                commit_count += 1
                if message is None:
                    commit_msg = f"Auto commit: {current_staged_lines} lines changed"
                else:
                    commit_msg = message
                
                print(f"=== 提交 Commit {commit_count} ===")
                print(f"暂存区行数: {current_staged_lines} 行")
                print(f"提交信息: {commit_msg}")
                
                returncode = run_git_command(make_commit_cmd(commit_msg))
                if returncode != 0:
                    print(f"❌ Commit {commit_count} 提交失败")
                    return returncode
                
                print(f"✓ Commit {commit_count} 提交成功")
                print()
        
        total_files_committed += 1
        
        # Check if we should commit now (after adding this file)
        current_staged_lines = get_staged_total_lines()
        
        if current_staged_lines >= MAX_LINES_PER_COMMIT:
            # Commit now
            commit_count += 1
            if message is None:
                commit_msg = f"Auto commit: {current_staged_lines} lines changed"
            else:
                commit_msg = message
            
            print(f"=== 提交 Commit {commit_count} ===")
            print(f"暂存区行数: {current_staged_lines} 行")
            print(f"提交信息: {commit_msg}")
            
            returncode = run_git_command(make_commit_cmd(commit_msg))
            if returncode != 0:
                print(f"❌ Commit {commit_count} 提交失败")
                return returncode
            
            print(f"✓ Commit {commit_count} 提交成功")
            print()
    
    # Commit any remaining staged files
    final_staged_lines = get_staged_total_lines()
    if final_staged_lines > 0:
        commit_count += 1
        if message is None:
            commit_msg = f"Auto commit: {final_staged_lines} lines changed"
        else:
            commit_msg = message
        
        print(f"=== 提交 Commit {commit_count} ===")
        print(f"暂存区行数: {final_staged_lines} 行")
        print(f"提交信息: {commit_msg}")
        
        returncode = run_git_command(make_commit_cmd(commit_msg))
        if returncode != 0:
            print(f"❌ Commit {commit_count} 提交失败")
            return returncode
        
        print(f"✓ Commit {commit_count} 提交成功")
        print()
    
    if commit_count == 0:
        print("⚠ 警告: 没有文件需要提交")
        return 0
    
    print(f"✓ 所有 {commit_count} 个 commit 已成功提交")
    print(f"✓ 共提交 {total_files_committed} 个文件")
    print()
    
    # Auto push after commit
    print("=== 自动推送到远程仓库 ===")
    push_result = cmd_push(None, None)
    if push_result == 0:
        print("✓ 代码已成功提交并推送到远程仓库")
    else:
        print("⚠ 警告: 提交成功，但推送失败，请手动执行 push")
    
    return push_result


# Copyright header template
COPYRIGHT_HEADER = """/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"""

# File extensions to check
COPYRIGHT_FILE_EXTENSIONS = {'.ets', '.h', '.cpp', '.c', '.d.ts'}


def has_copyright_header(file_path):
    """
    Check if a file has the copyright header
    
    Args:
        file_path: Path to the file to check
    
    Returns:
        True if file has copyright header, False otherwise
    """
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            # Read first 20 lines to check for copyright
            lines = []
            for i, line in enumerate(f):
                if i >= 20:
                    break
                lines.append(line)
            
            content = ''.join(lines)
            
            # Check for copyright keywords
            copyright_keywords = [
                'Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.',
                'Licensed under the Apache License, Version 2.0',
                'http://www.apache.org/licenses/LICENSE-2.0'
            ]
            
            # All keywords must be present
            for keyword in copyright_keywords:
                if keyword not in content:
                    return False
            
            return True
    except Exception as e:
        print(f"⚠ 警告: 无法读取文件 {file_path}: {e}")
        return False


def add_copyright_header(file_path):
    """
    Add copyright header to the beginning of a file
    
    Args:
        file_path: Path to the file to modify
    
    Returns:
        True if successful, False otherwise
    """
    try:
        # Read existing content
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            existing_content = f.read()
        
        # Check if file already starts with copyright
        if existing_content.strip().startswith('/*'):
            # Check if it already has copyright
            if 'Copyright (c) 2024 Shenzhen Kaihong' in existing_content:
                return True  # Already has copyright
        
        # Add copyright header
        new_content = COPYRIGHT_HEADER + '\n' + existing_content
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"⚠ 警告: 无法修改文件 {file_path}: {e}")
        return False


def find_source_files(root_dir='.'):
    """
    Find all source files that need copyright header check
    
    Args:
        root_dir: Root directory to search from (default: current directory)
    
    Returns:
        List of file paths
    """
    source_files = []
    root_path = Path(root_dir).resolve()
    
    # Patterns to exclude
    exclude_patterns = [
        '.git',
        'node_modules',
        'build',
        '.build',
        'ohbuild',
        'linuxbuild',
        'ohosbuild',
        '.hvigor',
        '.idea',
        'external',
        'third_party'
    ]
    
    for ext in COPYRIGHT_FILE_EXTENSIONS:
        for file_path in root_path.rglob(f'*{ext}'):
            # Check if file is in excluded directory
            should_exclude = False
            for pattern in exclude_patterns:
                if pattern in file_path.parts:
                    should_exclude = True
                    break
            
            if not should_exclude and file_path.is_file():
                source_files.append(file_path)
    
    return sorted(source_files)


def cmd_check_copyright(dry_run=False, fix=False):
    """
    Check and optionally fix copyright headers in source files
    
    Args:
        dry_run: If True, only report files without copyright (default: False)
        fix: If True, automatically add copyright headers (default: False)
    
    Returns:
        Exit code (0 if all files have copyright, non-zero if some files are missing copyright)
    """
    print("=== Copyright Header Check ===")
    print()
    
    if fix:
        print("模式: 自动修复（将自动添加缺失的版权声明）")
    elif dry_run:
        print("模式: 仅检查（不修改文件）")
    else:
        print("模式: 检查（使用 --fix 自动修复，使用 --dry-run 仅检查）")
    print()
    
    # Find all source files
    print("正在扫描源文件...")
    source_files = find_source_files()
    print(f"找到 {len(source_files)} 个源文件")
    print()
    
    files_without_copyright = []
    files_with_copyright = []
    
    # Check each file
    for file_path in source_files:
        relative_path = file_path.relative_to(Path.cwd())
        if has_copyright_header(file_path):
            files_with_copyright.append(file_path)
        else:
            files_without_copyright.append(file_path)
            if not fix:
                print(f"❌ {relative_path} - 缺少版权声明")
    
    print()
    print(f"✓ 有版权声明: {len(files_with_copyright)} 个文件")
    print(f"❌ 缺少版权声明: {len(files_without_copyright)} 个文件")
    print()
    
    # Fix files if requested
    if fix and files_without_copyright:
        print("=== 开始修复文件 ===")
        print()
        fixed_count = 0
        failed_count = 0
        
        for file_path in files_without_copyright:
            relative_path = file_path.relative_to(Path.cwd())
            print(f"修复: {relative_path}")
            if add_copyright_header(file_path):
                fixed_count += 1
                print(f"  ✓ 已添加版权声明")
            else:
                failed_count += 1
                print(f"  ❌ 修复失败")
            print()
        
        print(f"=== 修复完成 ===")
        print(f"✓ 成功修复: {fixed_count} 个文件")
        if failed_count > 0:
            print(f"❌ 修复失败: {failed_count} 个文件")
        print()
    
    # Return exit code
    if files_without_copyright:
        if fix:
            return 0 if failed_count == 0 else 1
        else:
            print("提示: 使用 --fix 参数可以自动添加版权声明")
            print()
            return 1
    else:
        print("✓ 所有文件都包含版权声明")
        print()
        return 0


def cmd_push(remote=None, branch=None):
    """
    Push commits to remote repository
    
    Args:
        remote: Remote repository name (default: origin)
        branch: Branch name (default: current branch)
    
    Returns:
        Exit code
    """
    print("=== Git Push ===")
    
    # Get current branch if not specified
    if not branch:
        returncode, stdout, stderr = run_git_command(['rev-parse', '--abbrev-ref', 'HEAD'], capture_output=True)
        if returncode == 0:
            branch = stdout.strip()
        else:
            print(f"❌ 错误: 无法获取当前分支: {stderr}")
            return 1
    
    # Default remote is origin
    if not remote:
        remote = 'origin'
    
    print(f"推送分支: {branch} 到远程: {remote}")
    print()
    
    # Check if there are commits to push
    returncode, stdout, stderr = run_git_command(
        ['rev-list', '--count', f'{remote}/{branch}..HEAD'],
        capture_output=True
    )
    
    if returncode == 0:
        try:
            commits_ahead = int(stdout.strip())
            if commits_ahead == 0:
                print(f"✓ 当前分支 {branch} 与远程 {remote}/{branch} 同步，无需推送")
                return 0
            else:
                print(f"发现 {commits_ahead} 个本地提交需要推送")
        except ValueError:
            # If remote branch doesn't exist, we'll try to push anyway
            print(f"远程分支 {remote}/{branch} 可能不存在，将尝试推送")
    else:
        # Remote branch might not exist, try to push anyway
        print(f"无法检查远程分支状态，将尝试推送")
    
    print()
    
    # Execute git push
    push_cmd = ['push']
    if remote:
        push_cmd.append(remote)
    if branch:
        push_cmd.append(branch)
    
    print(f"执行命令: git {' '.join(push_cmd)}")
    returncode = run_git_command(push_cmd)
    
    if returncode == 0:
        print(f"✓ 推送成功")
        return 0
    else:
        print(f"❌ 推送失败")
        print()
        print("提示: 如果遇到认证错误，请使用个人访问令牌（PAT）代替密码：")
        print("  1. 在 Git 平台（如 GitCode/GitHub）生成个人访问令牌")
        print("  2. 使用以下命令配置 Git 凭据：")
        print("     git config --global credential.helper store")
        print("  3. 下次推送时，用户名使用你的账号，密码使用个人访问令牌")
        print("  或者使用 SSH 方式：")
        print("     git remote set-url origin git@gitcode.com:username/repo.git")
        return returncode


def cmd_sign_commits(range_str=None):
    """
    Sign existing commits using git rebase
    
    Args:
        range_str: Commit range (e.g., HEAD~5..HEAD or commit1..commit2)
                   If None, will sign all commits since the last signed commit
    
    Returns:
        Exit code
    """
    print("=== 为历史提交添加签名 ===")
    print()
    
    # Set GPG_TTY environment variable
    import os
    if 'GPG_TTY' not in os.environ:
        try:
            tty = os.popen('tty').read().strip()
            if tty:
                os.environ['GPG_TTY'] = tty
        except:
            pass
    
    # Check if GPG is configured
    returncode, stdout, stderr = run_git_command(['config', '--global', 'user.signingkey'], capture_output=True)
    if returncode != 0 or not stdout.strip():
        print("⚠ 警告: 未配置 GPG 签名密钥")
        print()
        print("请先配置 GPG 密钥：")
        print("  1. 生成密钥: gpg --full-generate-key")
        print("     (选择 RSA and RSA, 4096 位, 设置过期时间, 输入姓名和邮箱)")
        print("  2. 获取密钥ID: gpg --list-secret-keys --keyid-format LONG")
        print("     (复制 sec 行中的密钥ID，例如: /rsa4096/1234567890ABCDEF)")
        print("  3. 配置Git: git config --global user.signingkey YOUR_KEY_ID")
        print("  4. 设置环境变量: export GPG_TTY=$(tty)")
        print("  5. 启动 GPG agent: gpg-agent --daemon")
        print()
        print("或者运行以下命令快速配置：")
        print("  python3 .claude/skills/gitlog/gitlog.py setup-gpg")
        return 1
    
    signing_key = stdout.strip()
    print(f"使用签名密钥: {signing_key}")
    print()
    
    # Determine commit range
    if not range_str:
        # Find the last signed commit
        returncode, stdout, stderr = run_git_command(
            ['log', '--pretty=format:%H', '--grep=^gpgsig', '-1'],
            capture_output=True
        )
        
        if returncode == 0 and stdout.strip():
            last_signed = stdout.strip()
            range_str = f"{last_signed}..HEAD"
            print(f"找到最后一个已签名的提交: {last_signed[:8]}...")
            print(f"将为 {range_str} 范围内的提交添加签名")
        else:
            # No signed commits found, sign all commits
            returncode, stdout, stderr = run_git_command(['rev-list', '--count', 'HEAD'], capture_output=True)
            if returncode == 0:
                count = int(stdout.strip())
                if count > 0:
                    range_str = f"HEAD~{count}..HEAD"
                    print(f"未找到已签名的提交，将为所有 {count} 个提交添加签名")
                else:
                    print("⚠ 警告: 没有提交需要签名")
                    return 0
            else:
                print("⚠ 警告: 无法确定提交范围")
                return 1
    else:
        print(f"将为 {range_str} 范围内的提交添加签名")
    
    print()
    
    # Count commits to sign
    returncode, stdout, stderr = run_git_command(
        ['rev-list', '--count', range_str],
        capture_output=True
    )
    
    if returncode != 0:
        print(f"❌ 错误: 无效的提交范围 '{range_str}': {stderr}")
        return 1
    
    commit_count = int(stdout.strip())
    if commit_count == 0:
        print("✓ 指定范围内没有需要签名的提交")
        return 0
    
    print(f"将签名 {commit_count} 个提交")
    print()
    print("⚠ 注意: 这将重写提交历史，如果已推送到远程，需要强制推送")
    print("⚠ 警告: 强制推送可能会影响其他协作者")
    print()
    print("使用方法：")
    print(f"  1. git rebase -i {range_str.split('..')[0] if '..' in range_str else 'HEAD~' + str(commit_count)}")
    print("  2. 在编辑器中，将需要签名的提交前的 'pick' 改为 'edit'")
    print("  3. 保存退出后，对每个提交运行：")
    print("     git commit --amend --no-edit -s")
    print("     git rebase --continue")
    print()
    print("或者使用以下命令自动签名（需要手动确认）：")
    base_commit = range_str.split('..')[0] if '..' in range_str else f'HEAD~{commit_count}'
    print(f"  export GPG_TTY=$(tty)")
    print(f"  git rebase --exec 'git commit --amend --no-edit -s' {base_commit}")
    print()
    print("⚠ 重要提示：")
    print("  1. 确保设置了 GPG_TTY 环境变量: export GPG_TTY=$(tty)")
    print("  2. 确保 GPG agent 正在运行: gpg-agent --daemon")
    print("  3. 如果密钥有密码，需要在交互式终端中运行（非后台）")
    
    return 0


def cmd_config_token(username=None, token=None):
    """
    Configure Git credential with username and token
    
    Args:
        username: GitCode username
        token: Personal access token
    
    Returns:
        Exit code
    """
    import getpass
    
    print("=== 配置 Git 凭据 ===")
    print()
    
    # Get username
    if not username:
        username = input("请输入 GitCode 用户名: ").strip()
        if not username:
            print("❌ 错误: 用户名不能为空")
            return 1
    
    # Get token
    if not token:
        token = getpass.getpass("请输入个人访问令牌: ").strip()
        if not token:
            print("❌ 错误: 令牌不能为空")
            return 1
    
    # Get current remote URL
    returncode, stdout, stderr = run_git_command(['remote', 'get-url', 'origin'], capture_output=True)
    if returncode != 0:
        print(f"❌ 错误: 无法获取远程仓库地址: {stderr}")
        return 1
    
    remote_url = stdout.strip()
    print(f"当前远程地址: {remote_url}")
    
    # Parse URL and update with token
    if remote_url.startswith('https://'):
        # Extract the path part
        if '@' in remote_url:
            # Already has credentials, replace them
            parts = remote_url.split('@', 1)
            new_url = f"https://{username}:{token}@{parts[1]}"
        else:
            # No credentials, add them
            new_url = remote_url.replace('https://', f'https://{username}:{token}@')
        
        # Update remote URL
        returncode = run_git_command(['remote', 'set-url', 'origin', new_url])
        if returncode == 0:
            print(f"✓ 已配置凭据")
            print(f"✓ 远程地址已更新（凭据已嵌入）")
            print()
            print("⚠ 注意: 凭据已保存在 Git 配置中，请确保仓库安全")
            return 0
        else:
            print(f"❌ 错误: 无法更新远程地址")
            return returncode
    else:
        print("⚠ 警告: 当前使用 SSH 方式，无需配置令牌")
        return 0


def main():
    """Main function"""
    # Handle no command
    if len(sys.argv) < 2:
        command = ""
    else:
        command = sys.argv[1]
    
    # Print debug info
    print_debug_info(command)
    
    # Handle no command
    if len(sys.argv) < 2:
        print("No command specified. Showing help:")
        print()
        show_help()
        return 0
    
    # Parse command and arguments
    if command == 'status':
        return cmd_status()
    
    elif command in ['log', 'log-oneline']:
        count = 10
        if len(sys.argv) > 2:
            try:
                count = int(sys.argv[2])
            except ValueError:
                print(f"⚠ 警告: 无效的提交数量 '{sys.argv[2]}'，使用默认值 10")
        return cmd_log(count)
    
    elif command == 'log-stat':
        count = 10
        if len(sys.argv) > 2:
            try:
                count = int(sys.argv[2])
            except ValueError:
                print(f"⚠ 警告: 无效的提交数量 '{sys.argv[2]}'，使用默认值 10")
        return cmd_log_stat(count)
    
    elif command == 'log-patch':
        count = 5
        if len(sys.argv) > 2:
            try:
                count = int(sys.argv[2])
            except ValueError:
                print(f"⚠ 警告: 无效的提交数量 '{sys.argv[2]}'，使用默认值 5")
        return cmd_log_patch(count)
    
    elif command == 'log-file':
        file_path = sys.argv[2] if len(sys.argv) > 2 else None
        return cmd_log_file(file_path)
    
    elif command == 'log-range':
        range_str = sys.argv[2] if len(sys.argv) > 2 else None
        return cmd_log_range(range_str)
    
    elif command == 'log-first-parent':
        range_str = sys.argv[2] if len(sys.argv) > 2 else None
        return cmd_log_first_parent(range_str)
    
    elif command == 'report':
        tag = sys.argv[2] if len(sys.argv) > 2 else 'HEAD'
        return cmd_report(tag)
    
    elif command == 'commit':
        message = None
        sign = True  # 默认启用签名
        args = sys.argv[2:] if len(sys.argv) > 2 else []
        
        # Parse arguments
        if '--sign' in args:
            sign = True
            args.remove('--sign')
        elif '--no-sign' in args:
            sign = False
            args.remove('--no-sign')
        
        if args:
            # Join remaining arguments as commit message
            message = ' '.join(args)
        
        return cmd_commit(message, sign)
    
    elif command == 'push':
        remote = None
        branch = None
        if len(sys.argv) > 2:
            remote = sys.argv[2]
        if len(sys.argv) > 3:
            branch = sys.argv[3]
        return cmd_push(remote, branch)
    
    elif command == 'sign-commits':
        range_str = None
        if len(sys.argv) > 2:
            range_str = sys.argv[2]
        return cmd_sign_commits(range_str)
    
    elif command == 'config-token':
        username = None
        token = None
        if len(sys.argv) > 2:
            username = sys.argv[2]
        if len(sys.argv) > 3:
            token = sys.argv[3]
        return cmd_config_token(username, token)
    
    elif command == 'check-copyright':
        dry_run = '--dry-run' in sys.argv
        fix = '--fix' in sys.argv
        return cmd_check_copyright(dry_run=dry_run, fix=fix)
    
    elif command in ['help', '--help', '-h']:
        show_help()
        return 0
    
    else:
        print(f"❌ 未知命令: {command}")
        print()
        show_help()
        return 1


if __name__ == '__main__':
    sys.exit(main())
