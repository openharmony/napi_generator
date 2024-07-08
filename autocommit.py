#!/usr/bin/python3
import os
import sys
import json
import time
import datetime
import subprocess
import shutil
import random

resultLog = []
summaryReport = []
countReport = []
memdict = {}
deltaReport = {}

def auCommit(modifile, cmsg):
    cmdlist = ["git", "add", modifile]
    top_info = subprocess.Popen(cmdlist, stdout=subprocess.PIPE)
    out, err = top_info.communicate()
    outstr = str(out)
    print("outstr:", outstr)
    rint = random.randint(1, 100)
    print("rint:", rint)
    time.sleep(rint)
    commitMsg = "\"modifile " + modifile + " " + cmsg + "\""
    cmdlist = ["git", "commit", "-sm", commitMsg]
    top_info = subprocess.Popen(cmdlist, stdout=subprocess.PIPE)
    out, err = top_info.communicate()
    outstr = str(out)
    print("outstr:", outstr)

def main(cmsg):
    cmdlist = ["git", "status"]
    top_info = subprocess.Popen(cmdlist, stdout=subprocess.PIPE)
    out, err = top_info.communicate()
    outstr = str(out)
    print("outstr:", outstr)
    outlist = outstr.split("\\n")
    modifiedFiles = []
    deletedFiles = []
    addFiles = []
    isUntracked = False
    for item in outlist:
        if "modified" in item:
            itemlist = item.split(":")
            filename = itemlist[1]
            filename = filename.strip()
            modifiedFiles.append(filename)
        if "deleted" in item:
            itemlist = item.split(":")
            filename = itemlist[1]
            filename = filename.strip()
            deletedFiles.append(filename)
        if isUntracked and ("\\t" in item) and "autocommit.py" not in item:
            filename = item.strip()
            filename = filename.replace("\\t", "")
            addFiles.append(filename)
        if "Untracked" in item:
            isUntracked = True


    print("modifiedFiles------:", modifiedFiles)
    print("addFiles------:", addFiles)
    print("deleted------:", deletedFiles)

    # 增加 modify文件
    for modifile in modifiedFiles:
        auCommit(modifile, cmsg)
    for modifile in addFiles:
        auCommit(modifile, cmsg)
    for modifile in deletedFiles:
        auCommit(modifile, cmsg)

if __name__ == '__main__':
    cmsg = sys.argv[1]
    main(cmsg)