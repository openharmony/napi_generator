# 第三方库头文件目录

本目录存放项目使用的第三方库头文件。

## 目录结构

```
include/
└── p7zip/          # p7zip 库头文件
    ├── C/          # C 语言接口头文件
    ├── Common/     # 通用头文件
    ├── IArchive.h  # 归档接口
    ├── ICoder.h    # 编码器接口
    ├── IDecl.h     # 声明接口
    ├── IPassword.h # 密码接口
    ├── IProgress.h # 进度接口
    ├── IStream.h   # 流接口
    ├── MyVersion.h # 版本信息
    └── PropID.h    # 属性ID
```

## 使用说明

在 CMakeLists.txt 中通过以下方式引用：

```cmake
target_include_directories(entry PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip
    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip/C
    ${CMAKE_CURRENT_SOURCE_DIR}/../../../libs/include/p7zip/Common
)
```

## 注意事项

- 本目录仅包含头文件，不包含源代码实现
- 对应的动态库文件位于 `libs/[架构]/lib7z.so`
- 该目录中的头文件由 CMake 预构建脚本自动同步生成，无需手动拷贝
- 头文件清单由 `entry/src/main/cmake/p7zip/scripts/header_manifest.cmake` 维护
- `IArchive.h` 会从上游 `CPP/7zip/Archive/IArchive.h` 映射到当前目录根层，便于现有代码兼容

