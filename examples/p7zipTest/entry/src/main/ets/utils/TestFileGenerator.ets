import fs from '@ohos.file.fs';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

/**
 * 创建结果接口
 */
export interface CreateResult {
  success: boolean;
  files: string[];
  directories: string[];
  message: string;
}

/**
 * 单个路径对
 */
export interface PathPair {
  input: string;
  output: string;
}

/**
 * 多文件路径
 */
export interface MultipleFilePaths {
  inputs: string[];
  output: string;
}

/**
 * 路径建议接口
 */
export interface PathSuggestions {
  singleFile: PathPair;
  multipleFiles: MultipleFilePaths;
  directory: PathPair;
  largeFile: PathPair;
  decompress: PathPair;
}

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
  
  /**
   * 批量创建基础测试文件（包含文件和文件夹）
   * @param baseDir 基础目录
   * @returns 创建的文件和目录列表
   */
  static async createBasicTestFiles(baseDir: string): Promise<string[]> {
    const items: string[] = [];
    
    hilog.info(DOMAIN, 'TestFileGenerator', '开始创建基础测试文件和文件夹...');
    
    // 1. 创建小文本文件 (1KB)
    const testTxt = `${baseDir}/test.txt`;
    if (await TestFileGenerator.createTestTextFile(testTxt, '这是一个测试文件，用于测试压缩功能。\n'.repeat(20))) {
      items.push(testTxt);
    }
    
    // 2. 创建多个小文件用于多文件测试
    const file1 = `${baseDir}/file1.txt`;
    if (await TestFileGenerator.createTestTextFile(file1, '文件1的内容\n'.repeat(10))) {
      items.push(file1);
    }
    
    const file2 = `${baseDir}/file2.txt`;
    if (await TestFileGenerator.createTestTextFile(file2, '文件2的内容\n'.repeat(10))) {
      items.push(file2);
    }
    
    const file3 = `${baseDir}/file3.txt`;
    if (await TestFileGenerator.createTestTextFile(file3, '文件3的内容\n'.repeat(10))) {
      items.push(file3);
    }
    
    // 3. 创建 dir1 文件夹（包含3个文件）
    const dir1 = `${baseDir}/dir1`;
    await TestFileGenerator.createDirectory(dir1);
    await TestFileGenerator.createTestTextFile(`${dir1}/file_a.txt`, 'Dir1中的文件A内容\n'.repeat(8));
    await TestFileGenerator.createTestTextFile(`${dir1}/file_b.txt`, 'Dir1中的文件B内容\n'.repeat(8));
    await TestFileGenerator.createTestTextFile(`${dir1}/file_c.txt`, 'Dir1中的文件C内容\n'.repeat(8));
    items.push(dir1);
    hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建dir1文件夹，包含3个文件`);
    
    // 4. 创建 dir2 文件夹（包含2个文件和1个嵌套文件夹）
    const dir2 = `${baseDir}/dir2`;
    await TestFileGenerator.createDirectory(dir2);
    await TestFileGenerator.createTestTextFile(`${dir2}/readme.txt`, 'Dir2的README文件\n'.repeat(12));
    await TestFileGenerator.createTestTextFile(`${dir2}/notes.txt`, 'Dir2的笔记文件\n'.repeat(12));
    
    // 4.1 创建嵌套文件夹
    const dir2Sub = `${dir2}/subdir`;
    await TestFileGenerator.createDirectory(dir2Sub);
    await TestFileGenerator.createTestTextFile(`${dir2Sub}/nested1.txt`, '嵌套文件1内容\n'.repeat(6));
    await TestFileGenerator.createTestTextFile(`${dir2Sub}/nested2.txt`, '嵌套文件2内容\n'.repeat(6));
    items.push(dir2);
    hilog.info(DOMAIN, 'TestFileGenerator', `✓ 创建dir2文件夹，包含2个文件和1个嵌套子文件夹`);
    
    hilog.info(DOMAIN, 'TestFileGenerator', `基础测试文件创建完成，共 ${items.length} 个项目（包含文件和文件夹）`);
    return items;
  }
  
  /**
   * 创建测试文件夹结构
   * @param baseDir 基础目录
   * @returns 创建的目录路径
   */
  static async createTestDirectory(baseDir: string): Promise<string> {
    hilog.info(DOMAIN, 'TestFileGenerator', '开始创建测试文件夹...');
    
    const testDir = `${baseDir}/mydir`;
    
    // 创建主目录
    await TestFileGenerator.createDirectory(testDir);
    
    // 创建子目录
    const subDir = `${testDir}/subdir`;
    await TestFileGenerator.createDirectory(subDir);
    
    // 在主目录创建文件
    await TestFileGenerator.createTestTextFile(`${testDir}/doc1.txt`, '文档1的内容\n'.repeat(15));
    await TestFileGenerator.createTestTextFile(`${testDir}/doc2.txt`, '文档2的内容\n'.repeat(15));
    
    // 在子目录创建文件
    await TestFileGenerator.createTestTextFile(`${subDir}/doc3.txt`, '文档3的内容\n'.repeat(15));
    await TestFileGenerator.createTestTextFile(`${subDir}/doc4.txt`, '文档4的内容\n'.repeat(15));
    
    hilog.info(DOMAIN, 'TestFileGenerator', `测试文件夹创建完成: ${testDir}`);
    return testDir;
  }
  
  /**
   * 创建大文件用于测试分块处理
   * @param baseDir 基础目录
   * @param sizeMB 文件大小（MB）
   * @returns 文件路径
   */
  static async createLargeFile(baseDir: string, sizeMB: number = 10): Promise<string> {
    hilog.info(DOMAIN, 'TestFileGenerator', `开始创建大文件 (${sizeMB}MB)...`);
    
    const largefile = `${baseDir}/largefile_${sizeMB}mb.bin`;
    await TestFileGenerator.createTestBinaryFile(largefile, sizeMB * 1024);
    
    hilog.info(DOMAIN, 'TestFileGenerator', `大文件创建完成: ${largefile}`);
    return largefile;
  }
  
  /**
   * 一键创建完整测试环境
   * @param baseDir 基础目录
   * @returns 创建结果统计
   */
  static async createCompleteTestEnv(baseDir: string): Promise<CreateResult> {
    const result: CreateResult = {
      success: true,
      files: [],
      directories: [],
      message: ''
    };
    
    try {
      hilog.info(DOMAIN, 'TestFileGenerator', '========================================');
      hilog.info(DOMAIN, 'TestFileGenerator', '开始创建完整测试环境...');
      hilog.info(DOMAIN, 'TestFileGenerator', `基础目录: ${baseDir}`);
      hilog.info(DOMAIN, 'TestFileGenerator', '========================================');
      
      // 1. 创建基础测试文件
      const basicFiles = await TestFileGenerator.createBasicTestFiles(baseDir);
      result.files.push(...basicFiles);
      
      // 2. 创建测试文件夹
      const testDir = await TestFileGenerator.createTestDirectory(baseDir);
      result.directories.push(testDir);
      
      // 3. 创建中等大小文件 (1MB)
      const mediumFile = await TestFileGenerator.createLargeFile(baseDir, 1);
      result.files.push(mediumFile);
      
      hilog.info(DOMAIN, 'TestFileGenerator', '========================================');
      hilog.info(DOMAIN, 'TestFileGenerator', '✓ 测试环境创建完成！');
      hilog.info(DOMAIN, 'TestFileGenerator', `  - 文件数: ${result.files.length}`);
      hilog.info(DOMAIN, 'TestFileGenerator', `  - 目录数: ${result.directories.length}`);
      hilog.info(DOMAIN, 'TestFileGenerator', '========================================');
      
      result.message = `成功创建 ${result.files.length} 个文件和 ${result.directories.length} 个目录`;
      
    } catch (error) {
      result.success = false;
      result.message = `创建失败: ${error}`;
      hilog.error(DOMAIN, 'TestFileGenerator', result.message);
    }
    
    return result;
  }
  
  /**
   * 递归删除目录
   * @param dirPath 目录路径
   */
  private static async deleteDirRecursive(dirPath: string): Promise<void> {
    try {
      const stat = fs.statSync(dirPath);
      if (stat.isDirectory()) {
        const files = fs.listFileSync(dirPath);
        for (const file of files) {
          const filePath = `${dirPath}/${file}`;
          const fileStat = fs.statSync(filePath);
          if (fileStat.isDirectory()) {
            await TestFileGenerator.deleteDirRecursive(filePath);
          } else {
            fs.unlinkSync(filePath);
          }
        }
        fs.rmdirSync(dirPath);
      }
    } catch (e) {
      console.log('deleteDirRecursive err: ' + JSON.stringify(e))
    }
  }
  
  /**
   * 清理所有测试文件
   * @param baseDir 基础目录
   * @returns 是否成功
   */
  static async cleanupTestFiles(baseDir: string): Promise<boolean> {
    try {
      hilog.info(DOMAIN, 'TestFileGenerator', '开始清理测试文件...');
      
      // 删除测试文件
      const testFiles = [
        'test.txt',
        'file1.txt',
        'file2.txt',
        'file3.txt',
        'largefile_1mb.bin',
        'largefile_10mb.bin'
      ];
      
      for (const file of testFiles) {
        try {
          fs.unlinkSync(`${baseDir}/${file}`);
          hilog.info(DOMAIN, 'TestFileGenerator', `✓ 删除: ${file}`);
        } catch (e) {
          // 文件可能不存在
        }
      }
      
      // 删除测试目录
      const testDirs = [
        `${baseDir}/mydir`,
        `${baseDir}/dir1`,
        `${baseDir}/dir2`
      ];
      
      for (const dir of testDirs) {
        try {
          await TestFileGenerator.deleteDirRecursive(dir);
          hilog.info(DOMAIN, 'TestFileGenerator', `✓ 删除目录: ${dir}`);
        } catch (e) {
          // 目录可能不存在
        }
      }
      
      hilog.info(DOMAIN, 'TestFileGenerator', '清理完成');
      return true;
    } catch (error) {
      hilog.error(DOMAIN, 'TestFileGenerator', `清理失败: ${error}`);
      return false;
    }
  }
  
  /**
   * 获取测试文件路径建议
   * @param baseDir 基础目录
   * @returns 路径建议对象
   */
  static getPathSuggestions(baseDir: string): PathSuggestions {
    // 单文件压缩
    const singleFile: PathPair = {
      input: `${baseDir}/test.txt`,
      output: `${baseDir}/test.7z`
    };
    
    // 多文件压缩（包含文件和文件夹）
    const multipleFiles: MultipleFilePaths = {
      inputs: [
        `${baseDir}/file1.txt`,
        `${baseDir}/file2.txt`,
        `${baseDir}/file3.txt`,
        `${baseDir}/dir1`,
        `${baseDir}/dir2`
      ],
      output: `${baseDir}/archive.zip`
    };
    
    // 文件夹压缩
    const directory: PathPair = {
      input: `${baseDir}/mydir`,
      output: `${baseDir}/backup.7z`
    };
    
    // 大文件压缩
    const largeFile: PathPair = {
      input: `${baseDir}/largefile_1mb.bin`,
      output: `${baseDir}/largefile.7z`
    };
    
    // 解压
    const decompress: PathPair = {
      input: `${baseDir}/test.7z`,
      output: `${baseDir}/extracted`
    };
    
    const suggestions: PathSuggestions = {
      singleFile: singleFile,
      multipleFiles: multipleFiles,
      directory: directory,
      largeFile: largeFile,
      decompress: decompress
    };
    
    return suggestions;
  }
}

