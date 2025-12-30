#include "napi_compress_async.h"

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "CompressAsync"

// 全局任务管理器
static std::mutex g_tasksMutex;
static std::map<uint64_t, std::shared_ptr<std::atomic<bool>>> g_cancelFlags;
static uint64_t g_nextTaskId = INIT_TASK_ID;

// 压缩模式
enum class CompressMode {
    SINGLE_FILE,    // 单个文件
    MULTIPLE_FILES, // 多个文件
    DIRECTORY,      // 文件夹
    MIXED_ITEMS     // 混合（文件+文件夹）
};

// 异步压缩上下文
struct AsyncCompressContext {
    napi_async_work asyncWork;
    napi_deferred deferred;
    napi_threadsafe_function tsfn;

    CompressMode mode;
    std::string inputPath;               // 单文件或目录路径
    std::vector<std::string> inputPaths; // 多文件路径列表
    std::string outputPath;
    std::string format; // "7z" or "zip"
    int compressionLevel;

    bool success;
    std::string error;
    ArchiveError archiveError; // 新增：详细错误信息
    uint64_t originalSize;
    uint64_t compressedSize;
    int fileCount;

    // 取消支持
    uint64_t taskId;
    std::shared_ptr<std::atomic<bool>> cancelFlag;
    bool wasCancelled;

    AsyncCompressContext()
        : asyncWork(nullptr), deferred(nullptr), tsfn(nullptr), mode(CompressMode::SINGLE_FILE),
          compressionLevel(DEFAULT_COMPRESSION_LEVEL), success(false), originalSize(SIZE_ZERO),
          compressedSize(SIZE_ZERO), fileCount(INIT_ZERO), taskId(TASKID_ZERO), cancelFlag(nullptr),
          wasCancelled(false) {}
};

// 进度回调数据
struct CompressProgressData {
    uint64_t processed;
    uint64_t total;
    std::string currentFile;

    CompressProgressData(uint64_t p, uint64_t t, const std::string &f) : processed(p), total(t), currentFile(f) {}
};

// 辅助函数：计算多个路径的公共基础目录
static std::string FindCommonBasePath(const std::vector<std::string> &paths)
{
    if (paths.empty()) {
        return "";
    }
    if (paths.size() == ARRAY_SIZE_ONE) {
        // 只有一个路径，返回其父目录
        size_t pos = paths[STRING_POS_FIRST].find_last_of("/\\");
        return (pos != STRING_NOT_FOUND) ? paths[STRING_POS_FIRST].substr(STRING_POS_FIRST, pos) : "";
    }
    // 标准化所有路径（替换 \\ 为 /）
    std::vector<std::string> normalizedPaths;
    for (const auto &path : paths) {
        std::string normalized = path;
        for (char &c : normalized) {
            if (c == '\\')
                c = '/';
        }
        normalizedPaths.push_back(normalized);
    }
    // 找到最短路径长度
    size_t minLength = normalizedPaths[STRING_POS_FIRST].length();
    for (const auto &path : normalizedPaths) {
        minLength = std::min(minLength, path.length());
    }
    // 找到公共前缀
    std::string commonPrefix;
    for (size_t i = STRING_POS_FIRST; i < minLength; i++) {
        char c = normalizedPaths[STRING_POS_FIRST][i];
        bool allMatch = true;
        for (const auto &path : normalizedPaths) {
            if (path[i] != c) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) {
            commonPrefix += c;
        } else {
            break;
        }
    }
    // 回退到最后一个目录分隔符
    size_t lastSlash = commonPrefix.find_last_of('/');
    if (lastSlash != STRING_NOT_FOUND) {
        return commonPrefix.substr(STRING_POS_FIRST, lastSlash);
    }
    return "";
}
// 辅助函数：计算相对路径
static std::string GetRelativePath(const std::string &fullPath, const std::string &basePath)
{
    if (basePath.empty()) {
        // 如果没有基础路径，只返回文件名
        size_t pos = fullPath.find_last_of("/\\");
        return (pos != STRING_NOT_FOUND) ? fullPath.substr(pos + INDEX_OFFSET_NEXT) : fullPath;
    }
    // 标准化路径
    std::string normalizedFull = fullPath;
    std::string normalizedBase = basePath;
    for (char &c : normalizedFull) {
        if (c == '\\')
            c = '/';
    }
    for (char &c : normalizedBase) {
        if (c == '\\')
            c = '/';
    }
    // 确保 basePath 以 / 结尾
    if (!normalizedBase.empty() && normalizedBase.back() != '/') {
        normalizedBase += '/';
    }
    // 检查 fullPath 是否以 basePath 开头
    if (normalizedFull.find(normalizedBase) == STRING_POS_FIRST) {
        return normalizedFull.substr(normalizedBase.length());
    }
    // 如果不匹配，返回文件名
    size_t pos = normalizedFull.find_last_of('/');
    return (pos != STRING_NOT_FOUND) ? normalizedFull.substr(pos + INDEX_OFFSET_NEXT) : normalizedFull;
}
// 处理多文件压缩（合并多个简单辅助函数，精简代码）
static void ProcessMultipleFiles(AsyncCompressContext *context, const CompressOptions &options)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "多文件压缩: %zu 个文件", context->inputPaths.size());
    std::string commonBasePath = FindCommonBasePath(context->inputPaths);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  公共基础路径: %s",
                 commonBasePath.empty() ? "(无)" : commonBasePath.c_str());
    std::vector<CompressFileItem> files;
    for (const auto &path : context->inputPaths) {
        CompressFileItem item;
        item.sourcePath = path;
        item.archivePath = GetRelativePath(path, commonBasePath);
        struct stat st;
        item.isDirectory = (stat(path.c_str(), &st) == INIT_ZERO && S_ISDIR(st.st_mode));
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  [%s] %s -> %s", item.isDirectory ? "DIR " : "FILE",
                     item.sourcePath.c_str(), item.archivePath.c_str());
        files.push_back(item);
    }
    context->success = ArchiveCompressor::CompressFiles(files, context->outputPath, options);
    context->fileCount = files.size();
}
// 处理目录并添加到文件列表（降低嵌套层次的辅助函数）
static void ProcessDirectoryForCompression(const std::string &path, const std::string &commonBasePath,
    std::vector<CompressFileItem> &allFiles, std::string *error)
{
    std::vector<CompressFileItem> dirFiles;
    if (!ArchiveCompressor::ScanDirectory(path, path, dirFiles, error)) {
        return;
    }
    
    std::string dirRelativePath = GetRelativePath(path, commonBasePath);
    if (dirFiles.empty()) {
        // 空目录
        CompressFileItem emptyDir;
        emptyDir.sourcePath = path;
        emptyDir.archivePath = dirRelativePath;
        emptyDir.isDirectory = true;
        allFiles.push_back(emptyDir);
        return;
    }
    
    // 添加目录中的文件
    for (auto &item : dirFiles) {
        if (!dirRelativePath.empty()) {
            item.archivePath = dirRelativePath + "/" + item.archivePath;
        }
        allFiles.push_back(item);
    }
}

// 处理单个路径项（降低嵌套层次的辅助函数）
static void ProcessPathItem(const std::string &path, const std::string &commonBasePath,
    std::vector<CompressFileItem> &allFiles, std::string *error)
{
    struct stat st;
    if (stat(path.c_str(), &st) != INIT_ZERO) {
        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "无法访问路径，跳过: %s", path.c_str());
        return;
    }
    
    if (S_ISDIR(st.st_mode)) {
        // 处理目录：扫描并添加所有文件
        ProcessDirectoryForCompression(path, commonBasePath, allFiles, error);
    } else {
        // 处理文件：直接添加
        CompressFileItem item;
        item.sourcePath = path;
        item.archivePath = GetRelativePath(path, commonBasePath);
        item.isDirectory = false;
        allFiles.push_back(item);
    }
}

// 处理混合项目压缩（合并内联，精简代码）
static void ProcessMixedItems(AsyncCompressContext *context, const CompressOptions &options, std::string *error)
{
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "混合项目压缩: %zu 个项目", context->inputPaths.size());
    std::string commonBasePath = FindCommonBasePath(context->inputPaths);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "  公共基础路径: %s",
                 commonBasePath.empty() ? "(无)" : commonBasePath.c_str());
    
    std::vector<CompressFileItem> allFiles;
    for (const auto &path : context->inputPaths) {
        ProcessPathItem(path, commonBasePath, allFiles, error);
    }
    
    if (allFiles.empty()) {
        context->success = false;
        context->error = "没有找到任何文件可以压缩";
    } else {
        context->success = ArchiveCompressor::CompressFiles(allFiles, context->outputPath, options);
        context->fileCount = allFiles.size();
    }
}
// 计算文件大小统计信息（合并原始和压缩后大小计算）
static void CalculateFileSizeStatistics(AsyncCompressContext *context)
{
    // 计算原始文件大小
    if (context->mode == CompressMode::SINGLE_FILE) {
        std::ifstream inFile(context->inputPath, std::ios::binary | std::ios::ate);
        if (inFile.good()) {
            context->originalSize = inFile.tellg();
        }
    } else if (context->mode == CompressMode::MULTIPLE_FILES) {
        for (const auto &path : context->inputPaths) {
            std::ifstream inFile(path, std::ios::binary | std::ios::ate);
            if (inFile.good()) {
                context->originalSize += inFile.tellg();
            }
        }
    }
    // 计算压缩后文件大小
    std::ifstream outFile(context->outputPath, std::ios::binary | std::ios::ate);
    if (outFile.good()) {
        context->compressedSize = outFile.tellg();
    }
}
// 检查任务是否已取消
static bool CheckTaskCancelled(AsyncCompressContext *context)
{
    if (context->cancelFlag && context->cancelFlag->load()) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "任务在开始前已被取消 (ID: %llu)",
                     (unsigned long long)context->taskId);
        context->success = false;
        context->wasCancelled = true;
        context->error = "压缩已取消";
        return true;
    }
    return false;
}
// 解析压缩格式
static bool ParseCompressFormat(AsyncCompressContext *context, CompressFormat &format)
{
    if (context->format == "7z") {
        format = CompressFormat::SEVENZ;
        return true;
    } else if (context->format == "zip") {
        format = CompressFormat::ZIP;
        return true;
    } else {
        context->success = false;
        context->error = "不支持的压缩格式: " + context->format;
        return false;
    }
}
// 创建进度回调函数
static CompressProgressCallback CreateProgressCallback(AsyncCompressContext *context)
{
    if (context->tsfn == nullptr) {
        return nullptr;
    }
    return [context](uint64_t processed, uint64_t total, const std::string &currentFile) -> bool {
        if (context->cancelFlag && context->cancelFlag->load()) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "检测到取消请求，中断压缩 (任务ID: %llu)",
                         (unsigned long long)context->taskId);
            context->wasCancelled = true;
            return false;
        }
        if (context->tsfn != nullptr) {
            CompressProgressData *data = new CompressProgressData(processed, total, currentFile);
            napi_call_threadsafe_function(context->tsfn, data, napi_tsfn_blocking);

            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "压缩进度: %llu/%llu, 文件: %s",
                         (unsigned long long)processed, (unsigned long long)total, currentFile.c_str());
        }
        return true;
    };
}

// 执行具体压缩操作（内联简单逻辑，精简代码）
static void ExecuteCompressByMode(AsyncCompressContext *context, const CompressOptions &options, std::string *error)
{
    switch (context->mode) {
        case CompressMode::SINGLE_FILE:
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "单文件压缩: %s", context->inputPath.c_str());
            context->success = ArchiveCompressor::CompressFile(context->inputPath, context->outputPath, options);
            context->fileCount = FILE_COUNT_SINGLE;
            break;
        case CompressMode::MULTIPLE_FILES:
            ProcessMultipleFiles(context, options);
            break;
        case CompressMode::DIRECTORY:
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "文件夹压缩: %s", context->inputPath.c_str());
            context->success = ArchiveCompressor::CompressDirectory(context->inputPath, context->outputPath, options);
            break;
        case CompressMode::MIXED_ITEMS:
            ProcessMixedItems(context, options, error);
            break;
    }
}

// 异步执行函数
static void CompressExecute(napi_env env, void *data)
{
    AsyncCompressContext *context = static_cast<AsyncCompressContext *>(data);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "开始异步压缩 -> %s (格式: %s, 模式: %d, 任务ID: %llu)",
                 context->outputPath.c_str(), context->format.c_str(), (int)context->mode,
                 (unsigned long long)context->taskId);
    if (CheckTaskCancelled(context)) {
        return;
    }
    CompressFormat format;
    if (!ParseCompressFormat(context, format)) {
        return;
    }
    CompressProgressCallback progressCallback = CreateProgressCallback(context);
    std::string error;
    CompressOptions options(format, context->compressionLevel, progressCallback, &error, &context->archiveError);
    ExecuteCompressByMode(context, options, &error);
    if (!context->success) {
        context->error = error;
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "压缩失败: %s", error.c_str());
    } else {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "压缩成功");
        CalculateFileSizeStatistics(context);
    }
}
// 清理任务资源
static void CleanupTask(AsyncCompressContext *context)
{
    if (context->taskId > TASKID_ZERO) {
        std::lock_guard<std::mutex> lock(g_tasksMutex);
        g_cancelFlags.erase(context->taskId);
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "任务已清理 (ID: %llu)",
                     (unsigned long long)context->taskId);
    }
    if (context->tsfn != nullptr) {
        napi_release_threadsafe_function(context->tsfn, napi_tsfn_release);
        context->tsfn = nullptr;
    }
}
// 生成结果消息和错误码
static void GenerateResultMessage(AsyncCompressContext *context, std::string &message, int &errorCode)
{
    if (context->wasCancelled) {
        message = "⚠️ 压缩已取消";
        errorCode = static_cast<int>(ArchiveErrorCode::OPERATION_CANCELLED);
    } else if (context->success) {
        message = "✅ 压缩成功 (" + context->format + " 格式)";
        errorCode = ERROR_CODE_SUCCESS;
    } else {
        if (context->archiveError.code != ArchiveErrorCode::SUCCESS) {
            message = context->archiveError.GetFullMessage();
            errorCode = context->archiveError.GetErrorCode();
        } else {
            message = "❌ 压缩失败: " + context->error;
            errorCode = static_cast<int>(ArchiveErrorCode::COMPRESS_FAILED);
        }
    }
}

// 创建基础结果对象
static void CreateBasicResult(napi_env env, napi_value result, AsyncCompressContext *context,
                              const std::string &message, int errorCode)
{
    napi_value successVal;
    napi_value messageVal;
    napi_value formatVal;
    napi_value cancelledVal;
    napi_value errorCodeVal;
    napi_get_boolean(env, context->success, &successVal);
    napi_get_boolean(env, context->wasCancelled, &cancelledVal);
    napi_create_string_utf8(env, message.c_str(), message.length(), &messageVal);
    napi_create_string_utf8(env, context->format.c_str(), context->format.length(), &formatVal);
    napi_create_int32(env, errorCode, &errorCodeVal);
    napi_set_named_property(env, result, "success", successVal);
    napi_set_named_property(env, result, "message", messageVal);
    napi_set_named_property(env, result, "format", formatVal);
    napi_set_named_property(env, result, "cancelled", cancelledVal);
    napi_set_named_property(env, result, "errorCode", errorCodeVal);
}

// 添加成功结果的统计信息
static void AddSuccessStatistics(napi_env env, napi_value result, AsyncCompressContext *context)
{
    napi_value origSizeVal;
    napi_value compSizeVal;
    napi_value ratioVal;
    napi_value fileCountVal;
    napi_create_int64(env, context->originalSize, &origSizeVal);
    napi_create_int64(env, context->compressedSize, &compSizeVal);
    napi_create_int32(env, context->fileCount, &fileCountVal);
    double ratio = context->originalSize > SIZE_ZERO?
        (double)context->compressedSize / context->originalSize * PERCENT_100: RATIO_ZERO;
    napi_create_double(env, ratio, &ratioVal);
    napi_set_named_property(env, result, "originalSize", origSizeVal);
    napi_set_named_property(env, result, "compressedSize", compSizeVal);
    napi_set_named_property(env, result, "compressionRatio", ratioVal);
    napi_set_named_property(env, result, "fileCount", fileCountVal);
}
// 异步完成回调
static void CompressComplete(napi_env env, napi_status status, void *data)
{
    AsyncCompressContext *context = static_cast<AsyncCompressContext *>(data);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "异步压缩完成回调 (任务ID: %llu, 取消: %d)",
                 (unsigned long long)context->taskId, context->wasCancelled);
    CleanupTask(context);
    napi_value result;
    napi_create_object(env, &result);
    std::string message;
    int errorCode = ERROR_CODE_SUCCESS;
    GenerateResultMessage(context, message, errorCode);
    CreateBasicResult(env, result, context, message, errorCode);
    if (context->success) {
        AddSuccessStatistics(env, result, context);
    }
    if (context->success) {
        napi_resolve_deferred(env, context->deferred, result);
    } else {
        napi_reject_deferred(env, context->deferred, result);
    }
    napi_delete_async_work(env, context->asyncWork);
    delete context;
}
// 解析输入路径数组
static bool ParseInputPaths(napi_env env, napi_value array, AsyncCompressContext *context)
{
    bool isArray = false;
    napi_is_array(env, array, &isArray);
    if (!isArray) {
        return false;
    }
    uint32_t arrayLength = INIT_ZERO;
    napi_get_array_length(env, array, &arrayLength);
    if (arrayLength == INIT_ZERO) {
        return false;
    }
    for (uint32_t i = INIT_ZERO; i < arrayLength; i++) {
        napi_value element;
        napi_get_element(env, array, i, &element);
        size_t strLen;
        napi_get_value_string_utf8(env, element, nullptr, INIT_ZERO, &strLen);
        std::vector<char> str_buf(strLen + VECTOR_BUFFER_OFFSET);
        napi_get_value_string_utf8(env, element, str_buf.data(), strLen + VECTOR_BUFFER_OFFSET, &strLen);
        context->inputPaths.push_back(str_buf.data());
    }
    return true;
}
// 创建线程安全函数
static bool CreateThreadSafeFunction(napi_env env, napi_value progressCallback, AsyncCompressContext *context)
{
    if (progressCallback == nullptr) {
        return true;
    }
    napi_value resource_name;
    napi_create_string_utf8(env, "CompressProgress", NAPI_AUTO_LENGTH, &resource_name);
    napi_status status = napi_create_threadsafe_function(
        env, progressCallback, nullptr, resource_name, THREADSAFE_QUEUE_SIZE, INDEX_OFFSET_NEXT, nullptr, nullptr,
        nullptr,
        [](napi_env env, napi_value js_callback, void *context, void *data) {
            CompressProgressData *progressData = static_cast<CompressProgressData *>(data);
            if (env != nullptr && js_callback != nullptr) {
                napi_value progress_obj;
                napi_create_object(env, &progress_obj);
                napi_value processed_val;
                napi_value total_val;
                napi_value percentage_val;
                napi_value currentFile_val;
                napi_create_int64(env, progressData->processed, &processed_val);
                napi_create_int64(env, progressData->total, &total_val);
                int percentage = progressData->total > SIZE_ZERO?
                    (int)((double)progressData->processed / progressData->total * PERCENT_100): INIT_ZERO;
                if (percentage > PERCENT_100) {
                    percentage = PERCENT_100;
                }
                napi_create_int32(env, percentage, &percentage_val);
                napi_create_string_utf8(env, progressData->currentFile.c_str(), NAPI_AUTO_LENGTH, &currentFile_val);
                napi_set_named_property(env, progress_obj, "processed", processed_val);
                napi_set_named_property(env, progress_obj, "total", total_val);
                napi_set_named_property(env, progress_obj, "percentage", percentage_val);
                napi_set_named_property(env, progress_obj, "currentFile", currentFile_val);
                napi_value undefined;
                napi_value callback_result;
                napi_get_undefined(env, &undefined);
                napi_call_function(env, undefined, js_callback, NAPI_CALLBACK_ARGS_ONE, &progress_obj,
                                   &callback_result);
            }
            delete progressData;
        }, &context->tsfn);
    return status == napi_ok;
}
// 注册任务并创建取消标志
static void RegisterTask(AsyncCompressContext *context)
{
    std::lock_guard<std::mutex> lock(g_tasksMutex);
    context->taskId = g_nextTaskId++;
    context->cancelFlag = std::make_shared<std::atomic<bool>>(false);
    g_cancelFlags[context->taskId] = context->cancelFlag;
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "创建压缩任务 (ID: %llu)",
                 (unsigned long long)context->taskId);
}
// 设置异步上下文参数（合并GetStringParam，减少函数调用开销）
static bool SetupContextParams(napi_env env, napi_value *args, AsyncCompressContext *context)
{
    if (!ParseInputPaths(env, args[0], context)) {
        return false;
    }
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "CompressAsync: 接收到 %zu 个输入路径",
                 context->inputPaths.size());
    // 获取输出路径
    size_t outputLen;
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_NEXT], nullptr, INIT_ZERO, &outputLen);
    std::vector<char> output_buf(outputLen + VECTOR_BUFFER_OFFSET);
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_NEXT], output_buf.data(), outputLen + VECTOR_BUFFER_OFFSET,
                               &outputLen);
    context->outputPath = output_buf.data();
    // 获取压缩格式
    size_t formatLen;
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_TWO], nullptr, INIT_ZERO, &formatLen);
    std::vector<char> format_buf(formatLen + VECTOR_BUFFER_OFFSET);
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_TWO], format_buf.data(), formatLen + VECTOR_BUFFER_OFFSET,
                               &formatLen);
    context->format = format_buf.data();
    return true;
}
// 创建异步工作任务
static bool CreateAsyncWorkTask(napi_env env, AsyncCompressContext *context)
{
    napi_value resource_name_work;
    napi_create_string_utf8(env, "CompressAsync", NAPI_AUTO_LENGTH, &resource_name_work);
    napi_status status = napi_create_async_work(env, nullptr, resource_name_work, CompressExecute, CompressComplete,
                                                context, &context->asyncWork);
    if (status != napi_ok) {
        return false;
    }
    return napi_queue_async_work(env, context->asyncWork) == napi_ok;
}
// 创建返回结果对象
static napi_value CreateReturnResult(napi_env env, AsyncCompressContext *context)
{
    napi_value promise;
    napi_create_promise(env, &context->deferred, &promise);
    napi_value result;
    napi_create_object(env, &result);
    napi_value taskIdVal;
    napi_create_int64(env, context->taskId, &taskIdVal);
    napi_set_named_property(env, result, "promise", promise);
    napi_set_named_property(env, result, "taskId", taskIdVal);
    return result;
}

// 统一压缩接口 - 支持混合文件和文件夹
napi_value CompressAsync(napi_env env, napi_callback_info info)
{
    size_t argc = NAPI_ARGC_FOUR;
    napi_value args[NAPI_ARGC_FOUR];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (argc < NAPI_ARGC_THREE) {
        napi_throw_error(env, nullptr, "需要至少3个参数: inputPaths[], outputPath, format");
        return nullptr;
    }
    AsyncCompressContext *context = new AsyncCompressContext();
    context->mode = CompressMode::MIXED_ITEMS;
    if (!SetupContextParams(env, args, context)) {
        delete context;
        napi_throw_error(env, nullptr, "第一个参数必须是非空字符串数组");
        return nullptr;
    }
    // 获取可选的进度回调参数（内联简单逻辑）
    if (argc >= NAPI_ARGC_FOUR) {
        napi_valuetype callbackType;
        napi_typeof(env, args[NAPI_ARGC_FOUR - INDEX_OFFSET_NEXT], &callbackType);
        if (callbackType == napi_function) {
            if (!CreateThreadSafeFunction(env, args[NAPI_ARGC_FOUR - INDEX_OFFSET_NEXT], context)) {
                delete context;
                napi_throw_error(env, nullptr, "无法创建线程安全函数");
                return nullptr;
            }
        }
    }
    RegisterTask(context);
    if (!CreateAsyncWorkTask(env, context)) {
        delete context;
        napi_throw_error(env, nullptr, "无法创建异步工作任务");
        return nullptr;
    }
    return CreateReturnResult(env, context);
}

// 取消压缩任务接口
napi_value CancelCompress(napi_env env, napi_callback_info info)
{
    size_t argc = NAPI_ARGC_ONE;
    napi_value args[NAPI_ARGC_ONE];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (argc < NAPI_ARGC_ONE) {
        napi_throw_error(env, nullptr, "需要1个参数: taskId");
        return nullptr;
    }
    // 获取 taskId
    int64_t taskId = TASKID_ZERO;
    napi_get_value_int64(env, args[STRING_POS_FIRST], &taskId);
    bool cancelled = false;
    {
        std::lock_guard<std::mutex> lock(g_tasksMutex);
        auto it = g_cancelFlags.find(taskId);
        if (it != g_cancelFlags.end()) {
            it->second->store(true);
            cancelled = true;
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "取消请求已发送 (任务ID: %lld)", (long long)taskId);
        } else {
            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, LOG_TAG, "任务不存在或已完成 (ID: %lld)", (long long)taskId);
        }
    }
    napi_value result;
    napi_get_boolean(env, cancelled, &result);
    return result;
}
