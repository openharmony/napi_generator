/**
 * 压缩进度回调
 */
export type CompressProgressCallback = (progress: {
  processed: number;
  total: number;
  percentage: number;
  currentFile: string;
}) => void;

/**
 * 统一压缩接口 - 支持混合文件和文件夹（推荐使用）
 * 自动处理输入路径中的文件和目录，无需区分类型
 * @param inputPaths 输入路径数组（可以包含文件和文件夹）
 * @param outputFile 输出压缩包路径
 * @param format 压缩格式："7z" 或 "zip"
 * @param progressCallback 可选的进度回调函数
 * @returns Promise，压缩完成后 resolve
 * 
 * @example
 * ```typescript
 * // 压缩多个文件和文件夹
 * const result = await compress(
 *   ['/path/to/file.txt', '/path/to/dir', '/path/to/file2.txt'],
 *   '/output/archive.zip',
 *   'zip',
 *   (progress) => console.log(`${progress.percentage}%`)
 * );
 * ```
 */
/**
 * 压缩任务控制器
 */
export interface CompressController {
  /** 压缩结果的 Promise */
  promise: Promise<{
    success: boolean;
    message: string;
    format: string;
    cancelled?: boolean;
    originalSize?: number;
    compressedSize?: number;
    compressionRatio?: number;
    fileCount?: number;
  }>;
  /** 任务 ID，用于取消操作 */
  taskId: number;
}

export const compress: (
  inputPaths: string[],
  outputFile: string,
  format: "7z" | "zip",
  progressCallback?: CompressProgressCallback | null
) => CompressController;

/**
 * 取消正在进行的压缩任务
 * @param taskId 任务 ID（从 compress 返回的 taskId）
 * @returns true 表示成功发送取消请求，false 表示任务不存在或已完成
 * 
 * @example
 * ```typescript
 * const ctrl = testNapi.compress(['/bigdir'], '/output.zip', 'zip');
 * 
 * // 几秒后取消
 * setTimeout(() => {
 *   const cancelled = testNapi.cancelCompress(ctrl.taskId);
 *   console.log(cancelled ? '取消成功' : '任务已完成');
 * }, 3000);
 * ```
 */
export const cancelCompress: (taskId: number) => boolean;

/**
 * 解压进度回调
 */
export type DecompressProgressCallback = (progress: {
  processed: number;
  total: number;
  percentage: number;
  currentFile: string;
  filesCompleted: number;
  totalFiles: number;
}) => void;

/**
 * 解压控制器
 */
export interface DecompressController {
  taskId: number;
  promise: Promise<{
    success: boolean;
    message: string;
    format?: string;
    files?: string[];
    errorCode?: number;
    cancelled?: boolean;
  }>;
}

/**
 * 解压文件 - 自动识别格式，支持多种压缩格式（异步，支持取消）
 * @param inputFile 输入压缩文件路径（支持 LZMA, GZIP, BZIP2, XZ, 7z, Zip, Tar 等）
 * @param outputFile 输出文件路径
 * @param progressCallback 可选的进度回调函数
 * @returns 控制器（包含 taskId 和 promise）
 */
export const decompressFile: (
  inputFile: string,
  outputFile: string,
  progressCallback?: DecompressProgressCallback
) => DecompressController;

/**
 * 取消解压任务
 * @param taskId 任务ID
 * @returns true表示取消成功
 */
export const cancelDecompress: (taskId: number) => boolean;
