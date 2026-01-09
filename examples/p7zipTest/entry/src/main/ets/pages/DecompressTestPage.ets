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
  
  // 文件创建相关状态
  @State createProgress: number = 0;
  @State isCreatingFiles: boolean = false;
  @State createStatusText: string = '未创建';
  
  // 压缩相关状态 (用于创建测试压缩包)
  @State compressProgress: number = 0;
  @State isCompressing: boolean = false;
  @State compressStatusText: string = '未压缩';
  
  // 解压相关状态
  @State decompressProgress: number = 0;
  @State statusText: string = '请选择操作';
  @State logText: string = '';
  @State isDecompressing: boolean = false;
  @State extractedFiles: string[] = [];
  
  // 路径显示
  @State inputPathDisplay: string = '未选择';
  @State outputPathDisplay: string = '未生成';
  
  // 已创建的文件路径
  private createdFiles: Map<string, string[]> = new Map();
  private createdArchives: Map<string, string> = new Map();

  aboutToAppear() {
    this.filesDir = this.context.filesDir;
    this.addLog(`✓ 应用目录: ${this.filesDir}`);
    this.addLog(`💡 操作流程: ①创建文件 → ②创建压缩包 → ③解压测试`);
  }

  private addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logText = `[${time}] ${message}\n${this.logText}`;
    hilog.info(DOMAIN, 'DecompressTest', message);
  }
  
  // 步骤1: 创建测试文件
  private async createTestFiles(mode: 'single' | 'multi') {
    if (this.isCreatingFiles) return;
    
    this.isCreatingFiles = true;
    this.createProgress = 0;
    this.createStatusText = '创建中...';
    
    const modeText = mode === 'single' ? '单文件' : '多文件';
    this.addLog('========================================');
    this.addLog(`📝 创建 ${modeText} 测试文件`);
    this.addLog('========================================');
    
    try {
      let inputPaths: string[] = [];
      let totalSteps = 0;
      let currentStep = 0;
      
      if (mode === 'single') {
        totalSteps = 1;
        const singleFile = `${this.filesDir}/test_5mb.txt`;
        this.addLog(`   创建: test_5mb.txt (5MB)`);
        this.createProgress = 20;
        
        await TestFileGenerator.createTestTextFileWithSize(singleFile, 5 * 1024);
        this.createProgress = 100;
        
        inputPaths = [singleFile];
        this.inputPathDisplay = singleFile;
        this.addLog(`   ✓ 单文件创建完成`);
      } else {
        totalSteps = 8;
        this.addLog(`   创建: 多个文件，总大小 10MB+`);
        
        const file1 = `${this.filesDir}/large_file1.txt`;
        this.createProgress = 5;
        this.addLog(`   创建file1 (3MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file1, 3 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const file2 = `${this.filesDir}/large_file2.txt`;
        this.addLog(`   创建file2 (4MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file2, 4 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const file3 = `${this.filesDir}/large_file3.txt`;
        this.addLog(`   创建file3 (3MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file3, 3 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const dir1 = `${this.filesDir}/dir1`;
        await TestFileGenerator.createDirectory(dir1);
        this.addLog(`   创建目录dir1...`);
        currentStep++;
        
        await TestFileGenerator.createTestTextFileWithSize(`${dir1}/file_a.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        await TestFileGenerator.createTestTextFileWithSize(`${dir1}/file_b.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const dir2 = `${this.filesDir}/dir2`;
        await TestFileGenerator.createDirectory(dir2);
        this.addLog(`   创建目录dir2...`);
        await TestFileGenerator.createTestTextFileWithSize(`${dir2}/data.txt`, 2 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const subdir = `${dir2}/subdir`;
        await TestFileGenerator.createDirectory(subdir);
        await TestFileGenerator.createTestTextFileWithSize(`${subdir}/nested.txt`, 1024);
        currentStep++;
        this.createProgress = 100;
        
        inputPaths = [file1, file2, file3, dir1, dir2];
        this.inputPathDisplay = `large_file1.txt, large_file2.txt, large_file3.txt + 2个目录`;
        this.addLog(`   ✓ 多文件创建完成`);
      }
      
      // 保存创建的文件路径
      this.createdFiles.set(mode, inputPaths);
      this.createStatusText = `✅ ${modeText}已创建`;
      
      this.addLog(`✅ ${modeText} 文件创建成功！`);
      this.addLog('========================================');
      
      promptAction.showToast({ 
        message: `${modeText}创建完成！`, 
        duration: 2000 
      });
      
    } catch (error) {
      this.addLog(`❌ 创建失败: ${JSON.stringify(error)}`);
      this.createStatusText = '创建失败';
    } finally {
      this.isCreatingFiles = false;
      this.createProgress = 0;
    }
  }
  
  // 步骤2: 创建压缩包
  private async createArchive(format: '7z' | 'zip', mode: 'single' | 'multi') {
    if (this.isCompressing) return;
    
    // 检查是否已创建文件
    const inputPaths = this.createdFiles.get(mode);
    if (!inputPaths || inputPaths.length === 0) {
      promptAction.showToast({ 
        message: '请先创建测试文件！', 
        duration: 2000 
      });
      this.addLog(`⚠️  请先点击"创建文件"按钮`);
      return;
    }
    
    this.isCompressing = true;
    this.compressProgress = 0;
    
    const modeText = mode === 'single' ? '单文件' : '多文件';
    const outputFileName = `${mode}_output.${format}`;
    const outputPath = `${this.filesDir}/${outputFileName}`;
    this.outputPathDisplay = outputPath;
    
    this.addLog('========================================');
    this.addLog(`📦 创建 ${modeText}.${format} 压缩包`);
    this.addLog('========================================');
    this.compressStatusText = `压缩中...`;
    
    try {
      this.compressController = compressItems(
        inputPaths,
        outputPath,
        { format: format, compressionLevel: 5 },
        (prog: CompressProgress) => {
          this.compressProgress = prog.percentage;
          this.compressStatusText = `压缩中 ${prog.percentage}%`;
          if (prog.percentage % 20 === 0 && prog.percentage > 0) {
            this.addLog(`   进度: ${prog.percentage}%`);
          }
        }
      );
      
      const result = await this.compressController.promise;
      this.compressController = null;
      
      if (result.success) {
        // 保存压缩包路径
        const archiveKey = `${mode}_${format}`;
        this.createdArchives.set(archiveKey, outputPath);
        
        this.addLog(`✅ ${modeText}.${format} 压缩包创建成功！`);
        this.addLog(`   文件数: ${result.fileCount}`);
        this.addLog(`   压缩率: ${result.compressionRatio?.toFixed(1)}%`);
        this.addLog('========================================');
        this.compressStatusText = `✅ ${modeText}.${format}已创建`;
        
        promptAction.showToast({ 
          message: `压缩包创建完成！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`❌ 压缩失败: ${result.message}`);
        this.compressStatusText = '压缩失败';
      }
      
    } catch (error) {
      this.addLog(`❌ 异常: ${JSON.stringify(error)}`);
      this.compressStatusText = '压缩失败';
    } finally {
      this.isCompressing = false;
      this.compressProgress = 0;
    }
  }
  
  // 步骤3: 解压测试
  private async decompressArchive(format: '7z' | 'zip', mode: 'single' | 'multi') {
    if (this.isDecompressing) return;
    
    // 检查是否已创建压缩包
    const archiveKey = `${mode}_${format}`;
    const inputPath = this.createdArchives.get(archiveKey);
    if (!inputPath) {
      promptAction.showToast({ 
        message: '请先创建压缩包！', 
        duration: 2000 
      });
      this.addLog(`⚠️  请先点击"创建压缩包"按钮`);
      return;
    }
    
    this.isDecompressing = true;
    this.decompressProgress = 0;
    this.extractedFiles = [];
    
    const modeText = mode === 'single' ? '单文件' : '多文件';
    const outputPath = `${this.filesDir}/output`;
    this.inputPathDisplay = inputPath;
    this.outputPathDisplay = outputPath;
    
    this.addLog('========================================');
    this.addLog(`🚀 解压 ${modeText}.${format}`);
    this.addLog('========================================');
    this.statusText = `解压中...`;
    
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
        this.decompressProgress = prog.percentage;
        this.statusText = `解压中 ${prog.percentage}%`;
        if (prog.percentage % 20 === 0 && prog.percentage > 0) {
          this.addLog(`   进度: ${prog.percentage}%`);
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
        this.statusText = `✅ 解压成功`;
        
        promptAction.showToast({ 
          message: `解压成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`❌ 解压失败: ${result.message}`);
        this.statusText = '解压失败';
      }
      
    } catch (error) {
      this.addLog(`❌ 异常: ${JSON.stringify(error)}`);
      this.statusText = '解压失败';
    } finally {
      this.isDecompressing = false;
      this.decompressProgress = 0;
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
        
        Text('步骤：①创建文件 → ②创建压缩包 → ③解压')
          .fontSize(14)
          .fontColor('#666666')
          .margin({ bottom: 20 })

        // ==================== 路径信息显示 ====================
        Column() {
          Text('路径信息')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          // 输入路径
          Column() {
            Row() {
              Text('输入:')
                .fontSize(13)
                .fontWeight(FontWeight.Bold)
                .fontColor('#666666')
                .width(50)
              
              Text(this.inputPathDisplay)
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
            
            // 输出路径
            Row() {
              Text('输出:')
                .fontSize(13)
                .fontWeight(FontWeight.Bold)
                .fontColor('#666666')
                .width(50)
              
              Text(this.outputPathDisplay)
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
        .margin({ bottom: 20 })

        // ==================== 步骤1: 创建测试文件 ====================
        Column() {
          Text('步骤1: 创建测试文件')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Text('创建测试文件用于后续压缩')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('创建单文件(5MB)')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#4CAF50')
              .enabled(!this.isCreatingFiles)
              .onClick(() => {
                this.createTestFiles('single');
              })
            
            Button('创建多文件(10MB)')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#2196F3')
              .enabled(!this.isCreatingFiles)
              .onClick(() => {
                this.createTestFiles('multi');
              })
          }
          .width('100%')
          .margin({ bottom: 10 })
          
          // 文件创建进度
          if (this.isCreatingFiles) {
            Column() {
              Progress({ value: this.createProgress, total: 100, type: ProgressType.Linear })
                .width('100%')
                .color('#4CAF50')
                .margin({ bottom: 5 })
              
              Text(`${this.createProgress}% - 正在创建...`)
                .fontSize(12)
                .fontColor('#4CAF50')
            }
            .width('100%')
            .padding(10)
            .backgroundColor('#E8F5E9')
            .border({ width: 1, color: '#4CAF50', radius: 5 })
            .margin({ bottom: 10 })
          }
          
          Text(`状态: ${this.createStatusText}`)
            .fontSize(13)
            .padding(8)
            .width('100%')
            .backgroundColor('#F5F5F5')
            .border({ width: 1, color: '#DDDDDD', radius: 5 })
        }
        .width('100%')
        .padding(15)
        .backgroundColor('#F0F8FF')
        .border({ width: 2, color: '#2196F3', radius: 10 })
        .margin({ bottom: 20 })

        // ==================== 步骤2: 创建压缩包 ====================
        Column() {
          Text('步骤2: 创建压缩包')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Text('将已创建的文件压缩成压缩包')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // Zip 格式
          Text('📦 Zip 格式')
            .fontSize(15)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 8 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('单文件.zip')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .backgroundColor('#00BCD4')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.createArchive('zip', 'single');
              })
            
            Button('多文件.zip')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#0097A7')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.createArchive('zip', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 12 })
          
          // 7z 格式
          Text('📦 7z 格式')
            .fontSize(15)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 8 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('单文件.7z')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .backgroundColor('#9C27B0')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.createArchive('7z', 'single');
              })
            
            Button('多文件.7z')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#673AB7')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.createArchive('7z', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 10 })
          
          // 压缩进度
          if (this.isCompressing) {
            Column() {
              Progress({ value: this.compressProgress, total: 100, type: ProgressType.Linear })
                .width('100%')
                .color('#FF9800')
                .margin({ bottom: 5 })
              
              Text(`${this.compressProgress}% - ${this.compressStatusText}`)
                .fontSize(12)
                .fontColor('#FF9800')
            }
            .width('100%')
            .padding(10)
            .backgroundColor('#FFF3E0')
            .border({ width: 1, color: '#FF9800', radius: 5 })
            .margin({ bottom: 10 })
          }
          
          Text(`状态: ${this.compressStatusText}`)
            .fontSize(13)
            .padding(8)
            .width('100%')
            .backgroundColor('#F5F5F5')
            .border({ width: 1, color: '#DDDDDD', radius: 5 })
        }
        .width('100%')
        .padding(15)
        .backgroundColor('#FFF9E6')
        .border({ width: 2, color: '#FF9800', radius: 10 })
        .margin({ bottom: 20 })

        // ==================== 步骤3: 开始解压 ====================
        Column() {
          Text('步骤3: 开始解压')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Text('解压已创建的压缩包')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // Zip 格式
          Text('📦 Zip 格式')
            .fontSize(15)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 8 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('解压单文件.zip')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .backgroundColor('#4CAF50')
              .enabled(!this.isDecompressing)
              .onClick(() => {
                this.decompressArchive('zip', 'single');
              })
            
            Button('解压多文件.zip')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#388E3C')
              .enabled(!this.isDecompressing)
              .onClick(() => {
                this.decompressArchive('zip', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 12 })
          
          // 7z 格式
          Text('📦 7z 格式')
            .fontSize(15)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 8 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('解压单文件.7z')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .backgroundColor('#FF9800')
              .enabled(!this.isDecompressing)
              .onClick(() => {
                this.decompressArchive('7z', 'single');
              })
            
            Button('解压多文件.7z')
              .layoutWeight(1)
              .height(45)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#F57C00')
              .enabled(!this.isDecompressing)
              .onClick(() => {
                this.decompressArchive('7z', 'multi');
              })
          }
          .width('100%')
          .margin({ bottom: 10 })
          
          // 解压进度
          if (this.isDecompressing) {
            Column() {
              Progress({ value: this.decompressProgress, total: 100, type: ProgressType.Linear })
                .width('100%')
                .color('#4CAF50')
                .margin({ bottom: 5 })
              
              Text(`${this.decompressProgress}% - ${this.statusText}`)
                .fontSize(12)
                .fontColor('#4CAF50')
            }
            .width('100%')
            .padding(10)
            .backgroundColor('#E8F5E9')
            .border({ width: 1, color: '#4CAF50', radius: 5 })
            .margin({ bottom: 10 })
          }
        }
        .width('100%')
        .padding(15)
        .backgroundColor('#E8F5E9')
        .border({ width: 2, color: '#4CAF50', radius: 10 })
        .margin({ bottom: 20 })

        // ==================== 解压文件列表 ====================
        if (this.extractedFiles.length > 0) {
          Column() {
            Text(`解压文件 (${this.extractedFiles.length})`)
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 10 })
              .alignSelf(ItemAlign.Start)

            Scroll() {
              Column() {
                ForEach(this.extractedFiles, (file: string, index: number) => {
                  Text(`${index + 1}. ${file}`)
                    .fontSize(11)
                    .fontFamily('monospace')
                    .width('100%')
                    .padding({ top: 2, bottom: 2 })
                })
              }
              .width('100%')
              .alignItems(HorizontalAlign.Start)
              .padding(8)
            }
            .width('100%')
            .height(100)
            .backgroundColor('#FFFFFF')
            .border({ width: 1, color: '#4CAF50', radius: 5 })
          }
          .width('100%')
          .padding(12)
          .backgroundColor('#E8F5E9')
          .border({ width: 1, color: '#4CAF50', radius: 8 })
          .margin({ bottom: 20 })
        }

        // ==================== 详细日志 ====================
        Text('操作日志')
          .fontSize(16)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 8 })
          .alignSelf(ItemAlign.Start)

        Scroll() {
          Text(this.logText || '等待操作...')
            .width('100%')
            .fontSize(11)
            .fontFamily('monospace')
            .textAlign(TextAlign.Start)
            .padding(8)
        }
        .width('100%')
        .height(200)
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
