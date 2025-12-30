import { Unzip, DecompressProgress, DecompressResult } from '../utils/Unzip';
import { compressItems, CompressProgress, CompressResult, CompressTaskController } from '../utils/Compress';
import { hilog } from '@kit.PerformanceAnalysisKit';
import router from '@ohos.router';
import common from '@ohos.app.ability.common';
import { TestFileGenerator } from '../utils/TestFileGenerator';
import promptAction from '@ohos.promptAction';
import fs from '@ohos.file.fs';

const DOMAIN = 0x0000;

@Entry
@Component
struct DecompressTestPage {
  private context = getContext(this) as common.UIAbilityContext;
  private filesDir: string = '';
  private compressController: CompressTaskController | null = null;
  
  @State progress: number = 0;
  @State statusText: string = '请选择操作';
  @State logText: string = '';
  @State isRunning: boolean = false;
  @State extractedFiles: string[] = [];
  @State currentInputPath: string = '未选择';
  @State currentOutputPath: string = '未选择';

  aboutToAppear() {
    this.filesDir = this.context.filesDir;
    this.addLog(`✓ 应用目录: ${this.filesDir}`);
  }

  private addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logText = `[${time}] ${message}\n${this.logText}`;
    hilog.info(DOMAIN, 'DecompressTest', message);
  }
  
  // 创建测试压缩包（包含创建文件和压缩）
  private async createAndCompress(format: '7z' | 'zip', mode: 'single' | 'multi') {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.progress = 0;
    this.extractedFiles = [];
    this.logText = '';
    
    const modeText = mode === 'single' ? '单文件' : '多文件';
    const outputFileName = `${mode}_output.${format}`;
    const outputPath = `${this.filesDir}/${outputFileName}`;
    
    // 更新显示路径
    this.currentOutputPath = outputPath;
    
    this.addLog('========================================');
    this.addLog(`🔧 开始创建 ${modeText}.${format} 测试压缩包`);
    this.addLog('========================================');
    this.statusText = `创建 ${modeText}.${format} 中...`;
    
    try {
      // 第一步：创建测试文件（至少5MB）
      this.addLog('📝 步骤1: 创建测试文件（5MB+）...');
      
      let inputPaths: string[] = [];
      
      if (mode === 'single') {
        // 单文件模式：创建一个 5MB 的文件
        const singleFile = `${this.filesDir}/test_5mb.txt`;
        this.addLog(`   创建: test_5mb.txt (5MB)`);
        await TestFileGenerator.createTestBinaryFile(singleFile, 5 * 1024); // 5MB = 5120KB
        inputPaths = [singleFile];
        this.currentInputPath = singleFile;
        this.addLog(`   ✓ 单文件创建完成: 5MB`);
      } else {
        // 多文件模式：创建多个文件，总大小超过5MB
        this.addLog(`   创建: 多个文件，总大小 10MB+`);
        
        // 创建3个大文件
        const file1 = `${this.filesDir}/large_file1.txt`;
        await TestFileGenerator.createTestBinaryFile(file1, 3 * 1024); // 3MB
        
        const file2 = `${this.filesDir}/large_file2.txt`;
        await TestFileGenerator.createTestBinaryFile(file2, 4 * 1024); // 4MB
        
        const file3 = `${this.filesDir}/large_file3.txt`;
        await TestFileGenerator.createTestBinaryFile(file3, 3 * 1024); // 3MB
        
        // 创建文件夹结构
        const dir1 = `${this.filesDir}/dir1`;
        await TestFileGenerator.createDirectory(dir1);
        await TestFileGenerator.createTestBinaryFile(`${dir1}/file_a.bin`, 1024); // 1MB
        await TestFileGenerator.createTestBinaryFile(`${dir1}/file_b.bin`, 1024); // 1MB
        
        const dir2 = `${this.filesDir}/dir2`;
        await TestFileGenerator.createDirectory(dir2);
        await TestFileGenerator.createTestBinaryFile(`${dir2}/data.bin`, 2 * 1024); // 2MB
        
        const subdir = `${dir2}/subdir`;
        await TestFileGenerator.createDirectory(subdir);
        await TestFileGenerator.createTestBinaryFile(`${subdir}/nested.bin`, 1024); // 1MB
        
        inputPaths = [file1, file2, file3, dir1, dir2];
        this.currentInputPath = `large_file1.txt, large_file2.txt, ... (共5项)`;
        this.addLog(`   ✓ 多文件创建完成: 3个文件(10MB) + 2个文件夹(5MB)`);
      }
      
      this.addLog(`✅ 测试文件创建成功`);
      
      // 第二步：准备压缩
      this.addLog(`📦 步骤2: 压缩为 ${format} 格式...`);
      this.addLog(`   输出: ${outputFileName}`);
      
      // 第三步：执行压缩
      this.compressController = compressItems(
        inputPaths,
        outputPath,
        { format: format, compressionLevel: 5 },
        (prog: CompressProgress) => {
          this.progress = prog.percentage;
          this.statusText = `压缩中 ${prog.percentage}%`;
          if (prog.percentage % 20 === 0 && prog.percentage > 0) {
            this.addLog(`   压缩进度: ${prog.percentage}%`);
          }
        }
      );
      
      const compressResult = await this.compressController.promise;
      this.compressController = null;
      
      if (compressResult.success) {
        this.addLog('========================================');
        this.addLog(`✅ ${modeText}.${format} 压缩包创建成功！`);
        this.addLog(`   文件数: ${compressResult.fileCount}`);
        this.addLog(`   压缩率: ${compressResult.compressionRatio?.toFixed(1)}%`);
        this.addLog(`   位置: ${outputFileName}`);
        this.addLog('========================================');
        this.statusText = `✅ ${modeText}.${format} 创建成功`;
        
        promptAction.showToast({ 
          message: `${modeText}.${format} 创建成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`❌ 压缩失败: ${compressResult.message}`);
        this.statusText = '压缩失败';
      }
      
    } catch (error) {
      this.addLog(`❌ 异常: ${JSON.stringify(error)}`);
      this.statusText = '创建失败';
    } finally {
      this.isRunning = false;
      this.progress = 0;
    }
  }
  
  // 解压测试
  private async decompressTest(format: '7z' | 'zip', mode: 'single' | 'multi') {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.progress = 0;
    this.extractedFiles = [];
    this.logText = '';
    
    const modeText = mode === 'single' ? '单文件' : '多文件';
    const inputFile = `${mode}_output.${format}`;
    const inputPath = `${this.filesDir}/${inputFile}`;
    const outputPath = `${this.filesDir}/output`;
    
    // 更新显示路径
    this.currentInputPath = inputPath;
    this.currentOutputPath = outputPath;
    
    this.addLog('========================================');
    this.addLog(`🚀 开始解压 ${modeText}.${format}`);
    this.addLog('========================================');
    this.addLog(`📦 输入: ${inputFile}`);
    this.addLog(`📁 输出: output/`);
    this.statusText = `解压 ${modeText}.${format} 中...`;
    
    try {
      // 检查文件是否存在
      const stat = fs.statSync(inputPath);
      this.addLog(`✓ 文件大小: ${this.formatBytes(stat.size)}`);
      
      // 创建解压实例
      const unzip = new Unzip(inputPath, { overwrite: true });
      
      // 进度监听
      unzip.on('start', () => {
        this.addLog('▶️  解压已启动');
      });
      
      unzip.on('progress', (prog: DecompressProgress) => {
        this.progress = prog.percentage;
        this.statusText = `解压中 ${prog.percentage}%`;
        if (prog.percentage % 20 === 0 && prog.percentage > 0) {
          this.addLog(`   解压进度: ${prog.percentage}%`);
        }
      });
      
      unzip.on('error', (error: Error) => {
        this.addLog(`❌ 错误: ${JSON.stringify(error)}`);
      });
      
      // 执行解压
      const result = await unzip.decompress(outputPath);
      
      if (result.success) {
        this.extractedFiles = result.files || [];
        
        this.addLog('========================================');
        this.addLog(`✅ ${modeText}.${format} 解压成功！`);
        this.addLog(`   格式: ${result.format || '未知'}`);
        this.addLog(`   文件数: ${this.extractedFiles.length}`);
        
        if (this.extractedFiles.length > 0 && this.extractedFiles.length <= 10) {
          this.addLog(`   文件列表:`);
          this.extractedFiles.forEach((file, index) => {
            this.addLog(`      ${index + 1}. ${file}`);
          });
        } else if (this.extractedFiles.length > 10) {
          this.addLog(`   (共 ${this.extractedFiles.length} 个文件)`);
        }
        
        this.addLog('========================================');
        this.statusText = `✅ ${modeText}.${format} 解压成功`;
        
        promptAction.showToast({ 
          message: `${modeText}.${format} 解压成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog('========================================');
        this.addLog(`❌ 解压失败: ${result.message}`);
        this.statusText = '解压失败';
      }
      
    } catch (error) {
      this.addLog('========================================');
      this.addLog(`❌ 文件不存在，请先创建压缩包`);
      this.addLog(`   路径: ${inputPath}`);
      this.statusText = '文件不存在';
    } finally {
      this.isRunning = false;
      this.progress = 0;
    }
  }
  
  private formatBytes(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }

  build() {
    Scroll() {
      Column() {
        // 返回按钮
        Button('← 返回主菜单')
          .fontSize(14)
          .backgroundColor('#E0E0E0')
          .fontColor('#333333')
          .height(40)
          .margin({ bottom: 20 })
          .onClick(() => {
            router.pushUrl({ url: 'pages/MainMenu' }).catch((err: Error) => {
              this.addLog(`导航失败: ${err.message}`);
            });
          })
        
        // 标题
        Text('解压测试')
          .fontSize(28)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 5 })
        
        Text('支持 7z / Zip / rar / tar / gz等格式，当前测试用例仅覆盖7z/zip, 若想进行其他格式解压测试，可将待解压的文件推送至开发板指定位置解压')
          .fontSize(14)
          .fontColor('#666666')
          .margin({ bottom: 20 })

        // ==================== 路径信息显示 ====================
        Column() {
          Text('当前路径信息')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Column() {
            Row() {
              Text('输入文件:')
                .fontSize(13)
                .fontWeight(FontWeight.Bold)
                .fontColor('#666666')
                .width(80)
              
              Text(this.currentInputPath)
                .fontSize(12)
                .fontFamily('monospace')
                .fontColor('#333333')
                .layoutWeight(1)
                .maxLines(2)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
            }
            .width('100%')
            .margin({ bottom: 8 })
            .alignItems(VerticalAlign.Top)
            
            Row() {
              Text('输出目录:')
                .fontSize(13)
                .fontWeight(FontWeight.Bold)
                .fontColor('#666666')
                .width(80)
              
              Text(this.currentOutputPath)
                .fontSize(12)
                .fontFamily('monospace')
                .fontColor('#333333')
                .layoutWeight(1)
                .maxLines(2)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
            }
            .width('100%')
            .alignItems(VerticalAlign.Top)
          }
          .width('100%')
          .padding(12)
          .backgroundColor('#FFFFFF')
          .border({ width: 1, color: '#DDDDDD', radius: 5 })
        }
        .width('100%')
        .padding(15)
        .backgroundColor('#F9F9F9')
        .border({ width: 1, color: '#CCCCCC', radius: 8 })
        .margin({ bottom: 25 })

        // ==================== 第一部分：创建测试文件 ====================
        Column() {
          Text('1️⃣ 创建测试文件')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          Text('创建测试文件并压缩为对应格式')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // Zip 格式
          Text('📦 Zip 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('单文件.zip')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .backgroundColor('#00BCD4')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('zip', 'single');
              })
            
            Button('多文件.zip')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .margin({ left: 10 })
              .backgroundColor('#0097A7')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('zip', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 7z 格式
          Text('📦 7z 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('单文件.7z')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .backgroundColor('#9C27B0')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('7z', 'single');
              })
            
            Button('多文件.7z')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .margin({ left: 10 })
              .backgroundColor('#673AB7')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('7z', 'multi');
              })
          }
          .width('100%')
        }
        .width('100%')
        .padding(20)
        .backgroundColor('#E3F2FD')
        .border({ width: 2, color: '#2196F3', radius: 10 })
        .margin({ bottom: 25 })

        // ==================== 第二部分：开始解压 ====================
        Column() {
          Text('2️⃣ 开始解压')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          Text('解压已创建的压缩包')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // Zip 格式
          Text('📦 Zip 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('解压单文件.zip')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .backgroundColor('#4CAF50')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.decompressTest('zip', 'single');
              })
            
            Button('解压多文件.zip')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .margin({ left: 10 })
              .backgroundColor('#388E3C')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.decompressTest('zip', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 7z 格式
          Text('📦 7z 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('解压单文件.7z')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .backgroundColor('#FF9800')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.decompressTest('7z', 'single');
              })
            
            Button('解压多文件.7z')
              .layoutWeight(1)
              .height(50)
              .fontSize(15)
              .margin({ left: 10 })
              .backgroundColor('#F57C00')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.decompressTest('7z', 'multi');
              })
          }
          .width('100%')
        }
        .width('100%')
        .padding(20)
        .backgroundColor('#E8F5E9')
        .border({ width: 2, color: '#4CAF50', radius: 10 })
        .margin({ bottom: 25 })

        // ==================== 进度显示 ====================
        if (this.isRunning) {
          Column() {
            Progress({ value: this.progress, total: 100, type: ProgressType.Linear })
              .width('100%')
              .color('#FF9800')
              .margin({ bottom: 10 })
            
            Row() {
              Text(`${this.progress}%`)
                .fontSize(18)
                .fontWeight(FontWeight.Bold)
                .fontColor('#FF9800')
              
              Text('🔄 处理中...')
                .fontSize(14)
                .fontColor('#FF9800')
                .margin({ left: 'auto' })
            }
            .width('100%')
          }
          .width('100%')
          .padding(15)
          .backgroundColor('#FFF3E0')
          .border({ width: 1, color: '#FF9800', radius: 8 })
          .margin({ bottom: 20 })
        }

        // ==================== 状态信息 ====================
        Text('状态')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 10 })
          .alignSelf(ItemAlign.Start)

        Text(this.statusText)
          .width('100%')
          .fontSize(14)
          .padding(12)
          .backgroundColor('#F5F5F5')
          .border({ width: 1, color: '#DDDDDD', radius: 8 })
          .margin({ bottom: 20 })

        // ==================== 解压文件列表 ====================
        if (this.extractedFiles.length > 0) {
          Text(`解压文件 (${this.extractedFiles.length})`)
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)

          Scroll() {
            Column() {
              ForEach(this.extractedFiles, (file: string, index: number) => {
                Text(`${index + 1}. ${file}`)
                  .fontSize(12)
                  .fontFamily('monospace')
                  .width('100%')
                  .padding({ top: 3, bottom: 3 })
              })
            }
            .width('100%')
            .alignItems(HorizontalAlign.Start)
            .padding(10)
          }
          .width('100%')
          .height(120)
          .backgroundColor('#E8F5E9')
          .border({ width: 1, color: '#4CAF50', radius: 8 })
          .margin({ bottom: 20 })
        }

        // ==================== 详细日志 ====================
        Text('日志')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 10 })
          .alignSelf(ItemAlign.Start)

        Scroll() {
          Text(this.logText || '等待操作...')
            .width('100%')
            .fontSize(12)
            .fontFamily('monospace')
            .textAlign(TextAlign.Start)
            .padding(10)
        }
        .width('100%')
        .height(250)
        .backgroundColor('#F5F5F5')
        .border({ width: 1, color: '#DDDDDD', radius: 8 })
      }
      .width('100%')
      .padding(20)
    }
    .width('100%')
    .height('100%')
  }
}
