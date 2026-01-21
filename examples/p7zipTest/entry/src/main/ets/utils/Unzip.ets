import testNapi from 'libentry.so';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

/**
 * 解压进度信息
 */
export interface DecompressProgress {
  /** 已处理的字节数 */
  processed: number;
  /** 总字节数 */
  total: number;
  /** 进度百分比 (0-100) */
  percentage: number;
  /** 当前处理的文件名 */
  currentFile: string;
  /** 已完成的文件数 */
  filesCompleted: number;
  /** 总文件数 */
  totalFiles: number;
}

/**
 * 解压选项
 */
export interface UnzipOptions {
  /** 是否覆盖已存在的文件 */
  overwrite?: boolean;
  /** 密码（如果压缩包加密） */
  password?: string;
}

/**
 * 解压完成结果
 */
export interface DecompressResult {
  success: boolean;
  message: string;
  errorCode?: number;    // 新增：详细错误码
  format?: string;       // 检测到的压缩格式
  files?: string[];
  cancelled?: boolean;   // 新增：是否被取消
}

function ensureNativeLoaded(): void {
  if (testNapi === undefined || testNapi === null) {
    hilog.error(DOMAIN, 'Unzip', `[Native加载失败] testNapi为空，说明 libentry.so 没有成功加载/初始化`);
    hilog.error(DOMAIN, 'Unzip', `[Native加载失败] 请在 HiLog/FaultLog 里搜索关键词: dlopen / relocating failed / libentry.so / lib7z.so`);
    throw new Error('Native模块(libentry.so)加载失败，请查看日志中的 dlopen/relocating failed');
  }
}

/**
 * Unzip 解压类
 * 
 * @example
 * ```typescript
 * const unzip = new Unzip('/path/to/file.7z', {
 *   overwrite: true
 * });
 * 
 * unzip.on('progress', (progress) => {
 *   console.log(`进度: ${progress.percentage}%`);
 * });
 * 
 * const result = await unzip.decompress('/output/dir');
 * ```
 */
export class Unzip {
  private inputPath: string;
  private options: UnzipOptions;
  private progressCallback: ((progress: DecompressProgress) => void) | null = null;
  private startCallback: (() => void) | null = null;
  private completeCallback: ((result: DecompressResult) => void) | null = null;
  private errorCallback: ((error: Error) => void) | null = null;

  /**
   * 构造函数
   * @param inputPath 压缩文件路径
   * @param options 解压选项
   */
  constructor(inputPath: string, options?: UnzipOptions) {
    this.inputPath = inputPath;
    this.options = options || {};
    
    hilog.info(DOMAIN, 'Unzip', 'Created Unzip instance for: %{public}s', inputPath);
  }

  /**
   * 注册事件监听器
   * @param event 事件名称
   * @param callback 回调函数
   */
  on(event: 'progress', callback: (progress: DecompressProgress) => void): Unzip;
  on(event: 'start', callback: () => void): Unzip;
  on(event: 'complete', callback: (result: DecompressResult) => void): Unzip;
  on(event: 'error', callback: (error: Error) => void): Unzip;
  on(event: string, callback: ((progress: DecompressProgress) => void) | (() => void) | ((result: DecompressResult) => void) | ((error: Error) => void)): Unzip {
    switch (event) {
      case 'progress':
        this.progressCallback = callback as (progress: DecompressProgress) => void;
        break;
      case 'start':
        this.startCallback = callback as () => void;
        break;
      case 'complete':
        this.completeCallback = callback as (result: DecompressResult) => void;
        break;
      case 'error':
        this.errorCallback = callback as (error: Error) => void;
        break;
      default:
        hilog.warn(DOMAIN, 'Unzip', 'Unknown event: %{public}s', event);
    }
    return this;
  }

  /**
   * 执行解压
   * @param outputPath 输出目录
   * @returns Promise，解压完成后 resolve
   */
  async decompress(outputPath: string): Promise<DecompressResult> {
    try {
      ensureNativeLoaded();
      // 触发 start 事件
      if (this.startCallback) {
        this.startCallback();
      }

      hilog.info(DOMAIN, 'Unzip', 'Starting decompress: %{public}s -> %{public}s', 
        this.inputPath, outputPath);

      // 调用原生解压函数（返回控制器）
      const ctrl = testNapi.decompressFile(
        this.inputPath,
        outputPath,
        (progress: DecompressProgress) => {
          // 进度回调
          if (this.progressCallback) {
            this.progressCallback(progress);
          }
          hilog.info(DOMAIN, 'Unzip', 'Progress: %{public}d%%', progress.percentage);
        }
      );

      // 等待 Promise
      const result = await ctrl.promise;
      // 触发 complete 事件
      if (this.completeCallback) {
        this.completeCallback(result);
      }
      if (result.success) {
        hilog.info(DOMAIN, 'Unzip', 'Decompress completed successfully');
        return result;
      } else {
        const error = new Error(result.message);
        if (this.errorCallback) {
          this.errorCallback(error);
        }
        throw error;
      }
    } catch (error) {
      hilog.error(DOMAIN, 'Unzip', 'Decompress failed: %{public}s', JSON.stringify(error));
      if (this.errorCallback) {
        this.errorCallback(error);
      }
      throw error as Error;
    }
  }

}

