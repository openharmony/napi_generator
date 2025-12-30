#include "napi_decompress_async.h"

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x0000
#define LOG_TAG "DeCompressAsync"

// 全局解压任务管理
static std::mutex g_decompressTasksMutex;
static std::map<uint64_t, std::shared_ptr<std::atomic<bool>>> g_decompressCancelFlags;
static uint64_t g_nextDecompressTaskId = INIT_TASK_ID;

// 异步解压的上下文
struct AsyncDecompressData {
    napi_async_work asyncWork = nullptr;
    napi_deferred deferred = nullptr;
    napi_threadsafe_function tsfn = nullptr;

    std::string inputPath;
    std::string outputPath;
    std::string formatName;
    uint64_t totalSize = SIZE_ZERO;

    // 结果
    bool success = false;
    std::string error;
    ArchiveError archiveError;
    std::vector<std::string> extractedFiles;

    // 取消支持
    uint64_t taskId = TASKID_ZERO;
    std::shared_ptr<std::atomic<bool>> cancelFlag;
    bool wasCancelled = false;

    ~AsyncDecompressData()
    {
        if (tsfn != nullptr) {
            napi_release_threadsafe_function(tsfn, napi_tsfn_release);
        }
    }
};

// 进度数据
struct ProgressData {
    uint64_t processed;
    uint64_t total;
    std::string currentFile;
    std::string formatName;
    int filesCompleted;
    int totalFiles;
    ProgressData(uint64_t p, uint64_t t, const std::string &f, const std::string &fmt)
        : processed(p), total(t), currentFile(f), formatName(fmt), filesCompleted(INIT_ZERO),
          totalFiles(FILE_COUNT_SINGLE) {
        size_t bracketPos = f.find('[');
        size_t slashPos = f.find('/');
        size_t closeBracketPos = f.find(']');
        if (bracketPos != STRING_NOT_FOUND && slashPos != STRING_NOT_FOUND && closeBracketPos != STRING_NOT_FOUND &&
            bracketPos < slashPos && slashPos < closeBracketPos) {
            filesCompleted =
                std::stoi(f.substr(bracketPos + INDEX_OFFSET_NEXT, slashPos - bracketPos - INDEX_OFFSET_NEXT));
            totalFiles =
                std::stoi(f.substr(slashPos + INDEX_OFFSET_NEXT, closeBracketPos - slashPos - INDEX_OFFSET_NEXT));
        }
    }
};
// ===== 异步执行相关辅助函数 =====
// 检查任务是否被取消
static bool CheckTaskCancellation(AsyncDecompressData *asyncData)
{
    if (asyncData->cancelFlag && asyncData->cancelFlag->load()) {
        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "任务已取消 (ID: %llu)",
                     (unsigned long long)asyncData->taskId);
        asyncData->success = false;
        asyncData->wasCancelled = true;
        asyncData->error = "解压已取消";
        return true;
    }
    return false;
}
// 验证输入文件可读性
static bool ValidateInputFile(AsyncDecompressData *asyncData)
{
    std::ifstream testFile(asyncData->inputPath, std::ios::binary);
    if (!testFile.good()) {
        int err = errno;
        asyncData->success = false;
        asyncData->error = "文件无法读取: " + std::string(strerror(err)) + " (errno=" + std::to_string(err) + ")";
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, LOG_TAG, "%s", asyncData->error.c_str());
        testFile.close();
        return false;
    }
    testFile.close();
    return true;
}
// 创建进度回调函数
static DecompressProgressCallback CreateProgressCallback(AsyncDecompressData *asyncData)
{
    if (asyncData->tsfn == nullptr) {
        return nullptr;
    }
    return [asyncData](uint64_t processed, uint64_t total, const std::string &currentFile) -> bool {
        if (asyncData->cancelFlag && asyncData->cancelFlag->load()) {
            asyncData->wasCancelled = true;
            return false;
        }
        int percentage = INIT_ZERO;
        if (total > SIZE_ZERO) {
            percentage = (int)((processed * PERCENT_100) / total);
        }
        if (percentage % PERCENT_10 == INIT_ZERO || percentage == INIT_ZERO || percentage == PERCENT_100) {
            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "进度: %d%%", percentage);
        }
        napi_call_threadsafe_function(asyncData->tsfn,
                                      new ProgressData(processed, total, currentFile, asyncData->formatName),
                                      napi_tsfn_nonblocking);
        return true;
    };
}
// 异步执行函数（在工作线程执行）
static void ExecuteDecompress(napi_env env, void *data)
{
    AsyncDecompressData *asyncData = static_cast<AsyncDecompressData *>(data);
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "开始解压: %s", asyncData->inputPath.c_str());
    if (CheckTaskCancellation(asyncData)) {
        return;
    }
    if (!ValidateInputFile(asyncData)) {
        return;
    }
    DecompressProgressCallback progressCallback = CreateProgressCallback(asyncData);
    DecompressErrorOutput errorOutput(&asyncData->error, &asyncData->archiveError);
    asyncData->success = UnifiedDecompressor::Decompress(asyncData->inputPath.c_str(), asyncData->outputPath.c_str(),
                                                         progressCallback, &errorOutput);

    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, LOG_TAG, "解压完成: success=%d", asyncData->success);
    if (asyncData->tsfn != nullptr) {
        napi_release_threadsafe_function(asyncData->tsfn, napi_tsfn_release);
        asyncData->tsfn = nullptr;
    }
}
// ===== 完成回调相关辅助函数 =====
// 生成结果消息
static void GenerateResultMessage(AsyncDecompressData *asyncData, std::string &message, int &errorCode)
{
    if (asyncData->success) {
        message = "✅ 解压成功 (" + asyncData->formatName + " 格式)";
        errorCode = ERROR_CODE_SUCCESS;
    } else if (asyncData->archiveError.code != ArchiveErrorCode::SUCCESS) {
        message = asyncData->archiveError.GetFullMessage();
        errorCode = asyncData->archiveError.GetErrorCode();
    } else {
        message = "❌ 解压失败: " + asyncData->error;
        errorCode = static_cast<int>(ArchiveErrorCode::DECOMPRESS_FAILED);
    }
}
// 创建基本结果对象
static void CreateResultObject(napi_env env, AsyncDecompressData *asyncData, napi_value result)
{
    std::string message;
    int errorCode = ERROR_CODE_SUCCESS;
    GenerateResultMessage(asyncData, message, errorCode);
    napi_value successVal;
    napi_value messageVal;
    napi_value formatVal;
    napi_value errorCodeVal;
    napi_get_boolean(env, asyncData->success, &successVal);
    napi_create_string_utf8(env, message.c_str(), NAPI_AUTO_LENGTH, &messageVal);
    napi_create_string_utf8(env, asyncData->formatName.c_str(), NAPI_AUTO_LENGTH, &formatVal);
    napi_create_int32(env, errorCode, &errorCodeVal);
    napi_set_named_property(env, result, "success", successVal);
    napi_set_named_property(env, result, "message", messageVal);
    napi_set_named_property(env, result, "format", formatVal);
    napi_set_named_property(env, result, "errorCode", errorCodeVal);
}
// 添加取消状态和文件列表
static void AddExtraResultInfo(napi_env env, AsyncDecompressData *asyncData, napi_value result)
{
    if (asyncData->wasCancelled) {
        napi_value cancelledVal;
        napi_get_boolean(env, true, &cancelledVal);
        napi_set_named_property(env, result, "cancelled", cancelledVal);
    }
    napi_value filesArray;
    napi_create_array_with_length(env, asyncData->extractedFiles.size(), &filesArray);
    for (size_t i = STRING_POS_FIRST; i < asyncData->extractedFiles.size(); ++i) {
        napi_value fileStr;
        napi_create_string_utf8(env, asyncData->extractedFiles[i].c_str(), NAPI_AUTO_LENGTH, &fileStr);
        napi_set_element(env, filesArray, i, fileStr);
    }
    napi_set_named_property(env, result, "files", filesArray);
}
// 清理异步任务
static void CleanupAsyncTask(napi_env env, AsyncDecompressData *asyncData)
{
    {
        std::lock_guard<std::mutex> lock(g_decompressTasksMutex);
        g_decompressCancelFlags.erase(asyncData->taskId);
    }
    if (asyncData->asyncWork != nullptr) {
        napi_delete_async_work(env, asyncData->asyncWork);
    }
    delete asyncData;
}
// 完成回调（在 JS 线程执行）
static void CompleteDecompress(napi_env env, napi_status status, void *data)
{
    AsyncDecompressData *asyncData = static_cast<AsyncDecompressData *>(data);
    napi_value result;
    napi_create_object(env, &result);
    CreateResultObject(env, asyncData, result);
    AddExtraResultInfo(env, asyncData, result);
    if (asyncData->success) {
        napi_resolve_deferred(env, asyncData->deferred, result);
    } else {
        napi_reject_deferred(env, asyncData->deferred, result);
    }
    CleanupAsyncTask(env, asyncData);
}
// ===== DecompressFileAsync相关辅助函数 =====
// 创建进度对象
static void CreateProgressObject(napi_env env, ProgressData *progData, napi_value progress_obj)
{
    uint64_t actualProcessed = progData->processed;
    uint64_t actualTotal = progData->total == SIZE_ZERO ? PERCENT_100 : progData->total;
    if (actualProcessed > actualTotal) {
        actualProcessed = actualTotal;
    }
    int percentage = INIT_ZERO;
    if (actualTotal > SIZE_ZERO) {
        if (actualProcessed >= actualTotal) {
            percentage = PERCENT_100;
        } else {
            percentage = (int)((double)actualProcessed / (double)actualTotal * PERCENT_100);
            if (percentage == INIT_ZERO && actualProcessed > SIZE_ZERO) {
                percentage = INDEX_OFFSET_NEXT;
            }
            if (percentage > PERCENT_100) {
                percentage = PERCENT_100;
            }
        }
    }
    napi_value processed_val;
    napi_value total_val;
    napi_value percentage_val;
    napi_value currentFile_val;
    napi_create_int64(env, actualProcessed, &processed_val);
    napi_create_int64(env, actualTotal, &total_val);
    napi_create_int32(env, percentage, &percentage_val);
    std::string fileInfo =
        progData->currentFile.empty() ? ("解压 " + progData->formatName + " 中...") : progData->currentFile;
    napi_create_string_utf8(env, fileInfo.c_str(), NAPI_AUTO_LENGTH, &currentFile_val);
    napi_set_named_property(env, progress_obj, "processed", processed_val);
    napi_set_named_property(env, progress_obj, "total", total_val);
    napi_set_named_property(env, progress_obj, "percentage", percentage_val);
    napi_set_named_property(env, progress_obj, "currentFile", currentFile_val);
    napi_value filesCompleted_val;
    napi_value totalFiles_val;
    napi_create_int32(env, progData->filesCompleted, &filesCompleted_val);
    napi_create_int32(env, progData->totalFiles, &totalFiles_val);
    napi_set_named_property(env, progress_obj, "filesCompleted", filesCompleted_val);
    napi_set_named_property(env, progress_obj, "totalFiles", totalFiles_val);
}
// 进度回调处理
static void HandleProgressCallback(napi_env env, napi_value js_callback, void *context, void *data)
{
    ProgressData *progData = static_cast<ProgressData *>(data);
    if (env == nullptr || js_callback == nullptr) {
        delete progData;
        return;
    }
    napi_value progress_obj;
    napi_create_object(env, &progress_obj);
    CreateProgressObject(env, progData, progress_obj);
    napi_value undefined;
    napi_get_undefined(env, &undefined);
    napi_call_function(env, undefined, js_callback, NAPI_CALLBACK_ARGS_ONE, &progress_obj, nullptr);
    delete progData;
}
// 初始化异步任务
static void InitializeAsyncTask(AsyncDecompressData *asyncData)
{
    std::lock_guard<std::mutex> lock(g_decompressTasksMutex);
    asyncData->taskId = g_nextDecompressTaskId++;
    asyncData->cancelFlag = std::make_shared<std::atomic<bool>>(false);
    g_decompressCancelFlags[asyncData->taskId] = asyncData->cancelFlag;
}
// ===== 导出的NAPI函数 =====
// 异步解压函数
napi_value DecompressFileAsync(napi_env env, napi_callback_info info)
{
    size_t argc = NAPI_ARGC_THREE;
    napi_value args[NAPI_ARGC_THREE];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (argc < NAPI_ARGC_TWO) {
        napi_throw_error(env, nullptr, "需要输入文件路径和输出文件路径");
        return nullptr;
    }
    AsyncDecompressData *asyncData = new AsyncDecompressData();
    InitializeAsyncTask(asyncData);
    // 获取字符串参数（内联）
    size_t len;
    napi_get_value_string_utf8(env, args[STRING_POS_FIRST], nullptr, INIT_ZERO, &len);
    std::vector<char> buffer1(len + VECTOR_BUFFER_OFFSET);
    napi_get_value_string_utf8(env, args[STRING_POS_FIRST], buffer1.data(), len + VECTOR_BUFFER_OFFSET, &len);
    asyncData->inputPath = buffer1.data();
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_NEXT], nullptr, INIT_ZERO, &len);
    std::vector<char> buffer2(len + VECTOR_BUFFER_OFFSET);
    napi_get_value_string_utf8(env, args[INDEX_OFFSET_NEXT], buffer2.data(), len + VECTOR_BUFFER_OFFSET, &len);
    asyncData->outputPath = buffer2.data();
    // 检测格式（内联）
    ArchiveFormat detectedFormat = FormatDetector::Detect(asyncData->inputPath.c_str());
    asyncData->formatName = FormatDetector::GetFormatName(detectedFormat);
    if (argc >= NAPI_ARGC_THREE) {
        napi_valuetype callbackType;
        napi_typeof(env, args[INDEX_OFFSET_TWO], &callbackType);
        if (callbackType == napi_function) {
            napi_value resource_name;
            napi_create_string_utf8(env, "DecompressProgress", NAPI_AUTO_LENGTH, &resource_name);
            napi_create_threadsafe_function(env, args[INDEX_OFFSET_TWO], nullptr, resource_name, INIT_ZERO,
                INDEX_OFFSET_NEXT, nullptr, nullptr, nullptr, HandleProgressCallback, &asyncData->tsfn);
        }
    }
    napi_value promise;
    napi_create_promise(env, &asyncData->deferred, &promise);
    napi_value resource_name;
    napi_create_string_utf8(env, "DecompressWork", NAPI_AUTO_LENGTH, &resource_name);
    napi_create_async_work(env, nullptr, resource_name, ExecuteDecompress, CompleteDecompress, asyncData,
                           &asyncData->asyncWork);
    napi_queue_async_work(env, asyncData->asyncWork);
    // 创建控制器（内联）
    napi_value controller;
    napi_create_object(env, &controller);
    napi_value taskIdVal;
    napi_create_int64(env, asyncData->taskId, &taskIdVal);
    napi_set_named_property(env, controller, "taskId", taskIdVal);
    napi_set_named_property(env, controller, "promise", promise);
    return controller;
}
// 取消解压任务
napi_value CancelDecompress(napi_env env, napi_callback_info info)
{
    size_t argc = NAPI_ARGC_ONE;
    napi_value args[NAPI_ARGC_ONE];
    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (argc < NAPI_ARGC_ONE) {
        napi_throw_error(env, nullptr, "需要1个参数: taskId");
        return nullptr;
    }
    int64_t taskId = TASKID_ZERO;
    napi_get_value_int64(env, args[STRING_POS_FIRST], &taskId);
    bool cancelled = false;
    {
        std::lock_guard<std::mutex> lock(g_decompressTasksMutex);
        auto it = g_decompressCancelFlags.find(taskId);
        if (it != g_decompressCancelFlags.end()) {
            it->second->store(true);
            cancelled = true;
        }
    }
    napi_value result;
    napi_get_boolean(env, cancelled, &result);
    return result;
}
