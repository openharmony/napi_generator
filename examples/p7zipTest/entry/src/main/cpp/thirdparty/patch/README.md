## OpenHarmony patches（统一补丁文件）

`ohos-all.patch` 是 OpenHarmony 构建 `lib7z.so` 使用的唯一补丁。

- 基线版本见 `UPSTREAM_COMMIT.txt`
- 构建脚本只应用 `ohos-all.patch`

宿主工具（`make` / `git` / `patch` / 可选 `sh`）必须在 `entry/src/main/cpp/CMakeLists.txt` 中填写**完整路径**（`P7ZIP_HOST_*` 变量）。
