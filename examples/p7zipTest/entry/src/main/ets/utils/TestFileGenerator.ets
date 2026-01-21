import fs from '@ohos.file.fs';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

/**
 * 测试文件生成器
 * 用于在应用内创建测试文件，无需手动准备
 */
export class TestFileGenerator {
  /**
   * 创建测试文本文件
   * @param filePath 文件路径
   * @param content 文件内容
   * @returns 是否成功
   */
  static async createTestTextFile(filePath: string, content: string): Promise<boolean> {
    try {
      const file = fs.openSync(filePath, fs.OpenMode.CREATE | fs.OpenMode.WRITE_ONLY);
      fs.writeSync(file.fd, content);
      fs.closeSync(file);
      hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建文件: ${filePath}`);
      return true;
    } catch (error) {
      hilog.error(DOMAIN, 'TestFileGenerator', `✗ 创建失败: ${error}`);
      return false;
    }
  }
  
  /**
   * 创建测试二进制文件
   * @param filePath 文件路径
   * @param sizeKB 文件大小（KB）
   * @returns 是否成功
   */
  static async createTestBinaryFile(filePath: string, sizeKB: number): Promise<boolean> {
    try {
      const file = fs.openSync(filePath, fs.OpenMode.CREATE | fs.OpenMode.WRITE_ONLY);
      
      // 每次写入 1KB
      const buffer = new ArrayBuffer(1024);
      const view = new Uint8Array(buffer);
      
      // 填充随机数据
      for (let i = 0; i < 1024; i++) {
        view[i] = Math.floor(Math.random() * 256);
      }
      
      // 写入指定大小
      for (let i = 0; i < sizeKB; i++) {
        fs.writeSync(file.fd, buffer);
      }
      
      fs.closeSync(file);
      hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建二进制文件: ${filePath} (${sizeKB}KB)`);
      return true;
    } catch (error) {
      hilog.error(DOMAIN, 'TestFileGenerator', `✗ 创建失败: ${error}`);
      return false;
    }
  }
  
  /**
   * 创建指定大小的文本文件（带可读内容）
   * @param filePath 文件路径
   * @param sizeKB 文件大小（KB）
   * @returns 是否成功
   */
  static async createTestTextFileWithSize(filePath: string, sizeKB: number): Promise<boolean> {
    try {
      hilog.info(DOMAIN, 'TestFileGenerator', `开始创建文本文件: ${filePath} (${sizeKB}KB)...`);
      
      // 生成可读的文本内容 - 构建重复的基础内容模式
      const baseLine = 'TEST LINE 这是测试文本 Content 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ';
      
      // 构建一个约256KB的大块（显著减少写入次数，避免主线程阻塞）
      const linesPerBlock = 2048; // 每块约2048行
      let baseBlock = '';
      for (let i = 0; i < linesPerBlock; i++) {
        baseBlock += `[Line ${i}] ${baseLine}\n`;
      }
      
      hilog.info(DOMAIN, 'TestFileGenerator', `基础块大小: ${Math.floor(baseBlock.length / 1024)}KB`);
      
      const file = fs.openSync(filePath, fs.OpenMode.CREATE | fs.OpenMode.WRITE_ONLY);
      
      // 计算需要写入多少个基础块
      const targetSize = sizeKB * 1024; // 转换为字节
      const blockSize = baseBlock.length;
      const fullBlocks = Math.floor(targetSize / blockSize);
      const remainingBytes = targetSize % blockSize;
      
      hilog.info(DOMAIN, 'TestFileGenerator', `需要写入 ${fullBlocks} 个完整块 + ${remainingBytes} 字节`);
      
      // 批量写入完整块（每次写入约256KB，并在每次写入后让出执行权避免阻塞UI）
      for (let i = 0; i < fullBlocks; i++) {
        fs.writeSync(file.fd, baseBlock);
        
        // 每写入10个块（约2.5MB）记录一次进度
        if ((i + 1) % 10 === 0) {
          hilog.info(DOMAIN, 'TestFileGenerator', `已写入 ${Math.floor((i + 1) * blockSize / 1024)}KB`);
        }
        
        // 每写入5个块（约1.25MB）后让出执行权给UI线程，避免ANR
        if ((i + 1) % 5 === 0) {
          await new Promise<void>((resolve) => setTimeout(resolve, 1));
        }
      }
      
      // 写入剩余部分
      if (remainingBytes > 0) {
        const remaining = baseBlock.substring(0, remainingBytes);
        fs.writeSync(file.fd, remaining);
      }
      
      fs.closeSync(file);
      const totalLines = Math.floor((fullBlocks * linesPerBlock) + (remainingBytes / (blockSize / linesPerBlock)));
      hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建文本文件完成: ${filePath} (${sizeKB}KB, 约${totalLines}行)`);
      return true;
    } catch (error) {
      hilog.error(DOMAIN, 'TestFileGenerator', `✗ 创建失败: ${JSON.stringify(error)}`);
      return false;
    }
  }

  /**
   * 创建目录
   * @param dirPath 目录路径
   * @returns 是否成功
   */
  static async createDirectory(dirPath: string): Promise<boolean> {
    try {
      fs.mkdirSync(dirPath);
      hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建目录: ${dirPath}`);
      return true;
    } catch (error) {
      // 目录可能已存在，不算错误
      if (error.code === 13900015) {
        hilog.info(DOMAIN, 'TestFileGenerator', `目录已存在: ${dirPath}`);
        return true;
      }
      hilog.error(DOMAIN, 'TestFileGenerator', `✗ 创建目录失败: ${error}`);
      return false;
    }
  }
}

