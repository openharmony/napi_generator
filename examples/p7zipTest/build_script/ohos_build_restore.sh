#!/bin/bash
# 恢复原始makefile

MAKEFILE="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/7zip_gcc.mak"
ARC_MAKEFILE="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/Bundles/Format7zF/Arc_gcc.mak"
BACKUP="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/7zip_gcc.mak.backup"
ARC_BACKUP="/home/kaihong/buildP7zip/p7zip-master/CPP/7zip/Bundles/Format7zF/Arc_gcc.mak.backup"

if [ -f "${BACKUP}" ]; then
    cp "${BACKUP}" "${MAKEFILE}"
    echo "已恢复原始7zip_gcc.mak"
else
    echo "未找到7zip_gcc.mak备份文件"
fi

if [ -f "${ARC_BACKUP}" ]; then
    cp "${ARC_BACKUP}" "${ARC_MAKEFILE}"
    echo "已恢复原始Arc_gcc.mak"
else
    echo "未找到Arc_gcc.mak备份文件"
fi
