import testNapi from 'libentry.so';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

/**
 * 压缩进度信息
 */
export interface CompressProgress {
  /** 已处理的字节数 */
  processed: number;
  /** 总字节数 */
  total: number;
  /** 进度百分比 (0-100) */
  percentage: number;
  /** 当前处理的文件名 */
  currentFile: string;
}

/**
 * 压缩选项
 */
export interface CompressOptions {
  /** 压缩格式 */
  format: "7z" | "zip";
  /** 压缩级别 (0-9) */
  compressionLevel?: number;
}

/**
 * 压缩完成结果
 */
export interface CompressResult {
  success: boolean;
  message: string;
  errorCode?: number;         // 新增：详细错误码
  format: string;
  cancelled?: boolean;
  originalSize?: number;
  compressedSize?: number;
  compressionRatio?: number;
  fileCount?: number;
}

/**
 * 压缩控制器 - 用于控制压缩任务（包括取消）
 */
export class CompressTaskController {
  private taskId: number;
  public promise: Promise<CompressResult>;
  private _cancelled: boolean = false;
  
  constructor(taskId: number, promise: Promise<CompressResult>) {
    this.taskId = taskId;
    this.promise = promise;
  }
  
  /**
   * 取消压缩任务
   * @returns true 表示成功发送取消请求
   */
  cancel(): boolean {
    if (this._cancelled) {
      hilog.warn(DOMAIN, 'Compress', `任务已经被取消 (ID: ${this.taskId})`);
      return false;
    }
    
    try {
      const result = testNapi.cancelCompress(this.taskId);
      if (result) {
        this._cancelled = true;
        hilog.info(DOMAIN, 'Compress', `取消请求已发送 (任务ID: ${this.taskId})`);
      } else {
        hilog.warn(DOMAIN, 'Compress', `任务不存在或已完成 (ID: ${this.taskId})`);
      }
      return result;
    } catch (error) {
      hilog.error(DOMAIN, 'Compress', `取消失败: ${(error as Error).message}`);
      return false;
    }
  }
  
  /**
   * 检查任务是否已被取消
   */
  get isCancelled(): boolean {
    return this._cancelled;
  }
  
  /**
   * 获取任务ID
   */
  get id(): number {
    return this.taskId;
  }
}

/**
 * 【推荐使用】统一压缩接口 - 支持混合文件和文件夹
 * 
 * 这是最简单、最强大的压缩接口，可以自动处理：
 * - 单个文件
 * - 多个文件
 * - 文件夹（自动递归）
 * - 文件和文件夹混合
 * - 支持取消操作 ⭐
 * 
 * @param inputPaths 输入路径（可以是单个字符串或字符串数组，自动识别）
 * @param outputPath 输出压缩包路径
 * @param options 压缩选项
 * @param onProgress 进度回调（可选）
 * @returns 压缩任务控制器（包含 promise 和 cancel 方法）
 * 
 * @example
 * ```typescript
 * // 示例1：压缩单个文件
 * const ctrl = compressItems('/file.txt', '/output.zip', { format: 'zip' });
 * const result = await ctrl.promise;
 * 
 * // 示例2：压缩多个文件
 * const ctrl = compressItems(['/f1.txt', '/f2.txt'], '/output.zip', { format: 'zip' });
 * const result = await ctrl.promise;
 * 
 * // 示例3：压缩文件夹
 * const ctrl = compressItems('/mydir', '/output.zip', { format: 'zip' });
 * const result = await ctrl.promise;
 * 
 * // 示例4：混合压缩（推荐）
 * const ctrl = compressItems(
 *   ['/file1.txt', '/dir1', '/file2.txt', '/dir2'],
 *   '/output/archive.zip',
 *   { format: 'zip', compressionLevel: 5 },
 *   (progress) => {
 *     console.log(`${progress.percentage}% - ${progress.currentFile}`);
 *   }
 * );
 * const result = await ctrl.promise;
 * 
 * // 示例5：支持取消 ⭐
 * const ctrl = compressItems(['/bigdir'], '/output.zip', { format: 'zip' });
 * // 3秒后取消
 * setTimeout(() => ctrl.cancel(), 3000);
 * const result = await ctrl.promise;  // 返回 { success: false, cancelled: true }
 * ```
 */
export function compressItems(
  inputPaths: string | string[],
  outputPath: string,
  options: CompressOptions,
  onProgress?: (progress: CompressProgress) => void
): CompressTaskController {
  const startTime = Date.now();

  // 标准化输入路径为数组
  const paths = typeof inputPaths === 'string' ? [inputPaths] : inputPaths;

  if (paths.length === 0) {
    throw new Error('输入路径不能为空');
  }

  hilog.info(DOMAIN, 'Compress', `开始压缩: ${paths.length} 个项目 -> ${outputPath}`);
  hilog.info(DOMAIN, 'Compress', `格式: ${options.format}, 级别: ${options.compressionLevel || 5}`);

  // 调用原生压缩接口，获取控制器
  const nativeCtrl = testNapi.compress(
    paths,
    outputPath,
    options.format,
    onProgress ? (progress: CompressProgress) => {
      hilog.debug(DOMAIN, 'Compress', `进度: ${progress.percentage}% - ${progress.currentFile}`);
      onProgress(progress);
    } : undefined
  );

  // 包装 Promise 添加日志和统计
  const wrappedPromise = nativeCtrl.promise.then(result => {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    if (result.cancelled) {
      hilog.warn(DOMAIN, 'Compress', `压缩已取消，耗时: ${duration}秒`);
    } else if (result.success) {
      hilog.info(DOMAIN, 'Compress', `压缩完成，耗时: ${duration}秒`);
      
      if (result.originalSize && result.compressedSize) {
        const ratio = ((result.compressedSize / result.originalSize) * 100).toFixed(1);
        const savedPercent = (100 - parseFloat(ratio)).toFixed(1);
        hilog.info(DOMAIN, 'Compress', 
          `原始大小: ${formatBytes(result.originalSize)}, ` +
          `压缩后: ${formatBytes(result.compressedSize)}, ` +
          `压缩率: ${ratio}%, 节省: ${savedPercent}%`
        );
      }
    } else {
      hilog.error(DOMAIN, 'Compress', `压缩失败 (耗时: ${duration}秒): ${result.message}`);
    }
    return result;
  }).catch((error: Error) => {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    hilog.error(DOMAIN, 'Compress', `压缩异常 (耗时: ${duration}秒): ${JSON.stringify(error)}`);
    throw error;
  });

  // 返回控制器
  return new CompressTaskController(nativeCtrl.taskId, wrappedPromise);
}

/**
 * 格式化字节数
 */
function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}
