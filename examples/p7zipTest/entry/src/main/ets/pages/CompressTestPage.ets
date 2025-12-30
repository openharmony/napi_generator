import { compressItems, CompressProgress, CompressResult, CompressTaskController } from '../utils/Compress';
import { hilog } from '@kit.PerformanceAnalysisKit';
import router from '@ohos.router';
import common from '@ohos.app.ability.common';
import { TestFileGenerator } from '../utils/TestFileGenerator';
import promptAction from '@ohos.promptAction';

const DOMAIN = 0x0000;

@Entry
@Component
struct CompressTestPage {
  private context = getContext(this) as common.UIAbilityContext;
  private filesDir: string = '';
  private compressController: CompressTaskController | null = null;
  
  @State progress: number = 0;
  @State statusText: string = '请选择操作';
  @State logText: string = '';
  @State isRunning: boolean = false;
  @State compressionRatio: number = 0;
  @State originalSize: number = 0;
  @State compressedSize: number = 0;
  @State fileCount: number = 0;
  @State currentInputPath: string = '未选择';
  @State currentOutputPath: string = '未选择';

  aboutToAppear() {
    this.filesDir = this.context.filesDir;
    this.addLog(`✓ 应用目录: ${this.filesDir}`);
    this.addLog(`💡 支持: 单文件/多文件/文件夹/空文件夹压缩测试`);
  }

  private addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logText = `[${time}] ${message}\n${this.logText}`;
    hilog.info(DOMAIN, 'CompressTest', message);
  }
  
  // 创建测试文件并压缩
  private async createAndCompress(format: '7z' | 'zip', mode: 'single' | 'multi' | 'folder') {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.progress = 0;
    this.compressionRatio = 0;
    this.originalSize = 0;
    this.compressedSize = 0;
    this.fileCount = 0;
    this.logText = '';
    
    const modeText = mode === 'single' ? '单文件' : mode === 'multi' ? '多文件' : '文件夹';
    const outputFileName = `${mode}_compressed.${format}`;
    const outputPath = `${this.filesDir}/${outputFileName}`;
    
    // 更新显示路径
    this.currentOutputPath = outputPath;
    
    this.addLog('========================================');
    this.addLog(`🗜️ 开始 ${modeText}.${format} 压缩测试`);
    this.addLog('========================================');
    this.statusText = `创建并压缩 ${modeText}.${format} 中...`;
    
    try {
      // 第一步：创建测试文件（至少5MB）
      this.addLog('📝 步骤1: 创建测试文件（5MB+）...');
      
      let inputPaths: string[] = [];
      
      if (mode === 'single') {
        // 单文件模式：创建一个 5MB 的文件
        const singleFile = `${this.filesDir}/compress_test_5mb.bin`;
        this.addLog(`   创建: compress_test_5mb.bin (5MB)`);
        await TestFileGenerator.createTestBinaryFile(singleFile, 5 * 1024); // 5MB
        inputPaths = [singleFile];
        this.currentInputPath = singleFile;
        this.addLog(`   ✓ 单文件创建完成: 5MB`);
      } else if (mode === 'multi') {
        // 多文件模式：创建多个文件，总大小超过5MB
        this.addLog(`   创建: 多个文件，总大小 15MB+`);
        
        // 创建3个大文件
        const file1 = `${this.filesDir}/compress_file1.bin`;
        await TestFileGenerator.createTestBinaryFile(file1, 3 * 1024); // 3MB
        
        const file2 = `${this.filesDir}/compress_file2.bin`;
        await TestFileGenerator.createTestBinaryFile(file2, 4 * 1024); // 4MB
        
        const file3 = `${this.filesDir}/compress_file3.bin`;
        await TestFileGenerator.createTestBinaryFile(file3, 3 * 1024); // 3MB
        
        // 创建文件夹结构
        const compressDir1 = `${this.filesDir}/compress_dir1`;
        await TestFileGenerator.createDirectory(compressDir1);
        await TestFileGenerator.createTestBinaryFile(`${compressDir1}/data_a.bin`, 1024); // 1MB
        await TestFileGenerator.createTestBinaryFile(`${compressDir1}/data_b.bin`, 1024); // 1MB
        
        const compressDir2 = `${this.filesDir}/compress_dir2`;
        await TestFileGenerator.createDirectory(compressDir2);
        await TestFileGenerator.createTestBinaryFile(`${compressDir2}/info.bin`, 2 * 1024); // 2MB
        
        const subdir = `${compressDir2}/subdir`;
        await TestFileGenerator.createDirectory(subdir);
        await TestFileGenerator.createTestBinaryFile(`${subdir}/nested_data.bin`, 1024); // 1MB
        
        inputPaths = [file1, file2, file3, compressDir1, compressDir2];
        this.currentInputPath = `compress_file1.bin, compress_file2.bin, ... (共5项)`;
        this.addLog(`   ✓ 多文件创建完成: 3个文件(10MB) + 2个文件夹(5MB)`);
      } else {
        // 文件夹模式：创建一个包含多个文件的文件夹
        this.addLog(`   创建: 测试文件夹，包含 10MB+ 文件`);
        
        const testFolder = `${this.filesDir}/test_folder`;
        await TestFileGenerator.createDirectory(testFolder);
        
        // 在文件夹中创建多个文件
        await TestFileGenerator.createTestBinaryFile(`${testFolder}/doc1.bin`, 2 * 1024); // 2MB
        await TestFileGenerator.createTestBinaryFile(`${testFolder}/doc2.bin`, 3 * 1024); // 3MB
        await TestFileGenerator.createTestBinaryFile(`${testFolder}/doc3.bin`, 2 * 1024); // 2MB
        
        // 创建子文件夹
        const subfolder1 = `${testFolder}/subfolder1`;
        await TestFileGenerator.createDirectory(subfolder1);
        await TestFileGenerator.createTestBinaryFile(`${subfolder1}/file_a.bin`, 1024); // 1MB
        await TestFileGenerator.createTestBinaryFile(`${subfolder1}/file_b.bin`, 1024); // 1MB
        
        const subfolder2 = `${testFolder}/subfolder2`;
        await TestFileGenerator.createDirectory(subfolder2);
        await TestFileGenerator.createTestBinaryFile(`${subfolder2}/data.bin`, 1024); // 1MB
        
        // 深层嵌套
        const deepFolder = `${subfolder2}/deep`;
        await TestFileGenerator.createDirectory(deepFolder);
        await TestFileGenerator.createTestBinaryFile(`${deepFolder}/nested.bin`, 1024); // 1MB
        
        inputPaths = [testFolder];
        this.currentInputPath = testFolder;
        this.addLog(`   ✓ 文件夹创建完成: test_folder (10MB+, 含子文件夹)`);
      }
      
      this.addLog(`✅ 测试文件创建成功`);
      
      // 第二步：执行压缩
      this.addLog(`📦 步骤2: 压缩为 ${format} 格式...`);
      this.addLog(`   输出: ${outputFileName}`);
      
      // 调用压缩接口
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
      
      const result = await this.compressController.promise;
      this.compressController = null;
      
      if (result.success) {
        this.originalSize = result.originalSize || 0;
        this.compressedSize = result.compressedSize || 0;
        this.compressionRatio = result.compressionRatio || 0;
        this.fileCount = result.fileCount || 0;
        
        this.addLog('========================================');
        this.addLog(`✅ ${modeText}.${format} 压缩成功！`);
        this.addLog(`   格式: ${result.format}`);
        this.addLog(`   文件数: ${this.fileCount}`);
        this.addLog(`   原始大小: ${this.formatBytes(this.originalSize)}`);
        this.addLog(`   压缩大小: ${this.formatBytes(this.compressedSize)}`);
        this.addLog(`   压缩率: ${this.compressionRatio.toFixed(1)}%`);
        this.addLog(`   位置: ${outputFileName}`);
        this.addLog('========================================');
        this.statusText = `✅ ${modeText}.${format} 压缩成功`;
        
        promptAction.showToast({ 
          message: `${modeText}.${format} 压缩成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`❌ 压缩失败: ${result.message}`);
        this.statusText = '压缩失败';
      }
      
    } catch (error) {
      this.addLog(`❌ 异常: ${JSON.stringify(error)}`);
      this.statusText = '压缩失败';
    } finally {
      this.isRunning = false;
      this.progress = 0;
    }
  }
  
  // 空文件夹测试
  private async testEmptyFolder(format: '7z' | 'zip') {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.progress = 0;
    this.compressionRatio = 0;
    this.originalSize = 0;
    this.compressedSize = 0;
    this.fileCount = 0;
    this.logText = '';
    
    const outputFileName = `empty_folder.${format}`;
    const outputPath = `${this.filesDir}/${outputFileName}`;
    
    // 更新显示路径
    const emptyFolder = `${this.filesDir}/empty_test_folder`;
    this.currentInputPath = emptyFolder;
    this.currentOutputPath = outputPath;
    
    this.addLog('========================================');
    this.addLog(`📂 开始空文件夹.${format} 压缩测试`);
    this.addLog('========================================');
    this.statusText = `测试空文件夹.${format} 中...`;
    
    try {
      // 创建空文件夹
      this.addLog('📝 步骤1: 创建空文件夹...');
      await TestFileGenerator.createDirectory(emptyFolder);
      this.addLog(`   ✓ 空文件夹创建完成: ${emptyFolder}`);
      
      // 压缩空文件夹
      this.addLog(`📦 步骤2: 压缩空文件夹为 ${format} 格式...`);
      this.addLog(`   输出: ${outputFileName}`);
      
      this.compressController = compressItems(
        [emptyFolder],
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
      
      const result = await this.compressController.promise;
      this.compressController = null;
      
      if (result.success) {
        this.originalSize = result.originalSize || 0;
        this.compressedSize = result.compressedSize || 0;
        this.compressionRatio = result.compressionRatio || 0;
        this.fileCount = result.fileCount || 0;
        
        this.addLog('========================================');
        this.addLog(`✅ 空文件夹.${format} 压缩成功！`);
        this.addLog(`   格式: ${result.format}`);
        this.addLog(`   文件数: ${this.fileCount}`);
        this.addLog(`   压缩大小: ${this.formatBytes(this.compressedSize)}`);
        this.addLog(`   位置: ${outputFileName}`);
        this.addLog('========================================');
        this.statusText = `✅ 空文件夹.${format} 压缩成功`;
        
        promptAction.showToast({ 
          message: `空文件夹.${format} 压缩成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`❌ 压缩失败: ${result.message}`);
        this.statusText = '压缩失败';
      }
      
    } catch (error) {
      this.addLog(`❌ 异常: ${JSON.stringify(error)}`);
      this.statusText = '压缩失败';
    } finally {
      this.isRunning = false;
      this.progress = 0;
    }
  }
  
  // 取消压缩
  private cancelCompress() {
    if (!this.compressController) {
      this.addLog('⚠️  没有正在进行的压缩任务');
      return;
    }
    
    this.addLog(`🛑 正在取消压缩任务...`);
    const success = this.compressController.cancel();
    
    if (success) {
      this.addLog('✅ 取消请求已发送');
      this.statusText = '正在取消...';
    } else {
      this.addLog('⚠️  取消失败（任务可能已完成）');
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
        Text('压缩测试')
          .fontSize(28)
          .fontWeight(FontWeight.Bold)
          .margin({ bottom: 5 })
        
        Text('支持 zip / 7z 压缩')
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
              Text('输出文件:')
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

        // ==================== 压缩测试 ====================
        Column() {
          Text('压缩测试')
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
            Button('单文件')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#00BCD4')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('zip', 'single');
              })
            
            Button('多文件')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#0097A7')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('zip', 'multi');
              })
            
            Button('文件夹')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#00838F')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('zip', 'folder');
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
            Button('单文件')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#9C27B0')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('7z', 'single');
              })
            
            Button('多文件')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#673AB7')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('7z', 'multi');
              })
            
            Button('文件夹')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#4A148C')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.createAndCompress('7z', 'folder');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 空文件夹测试
          Text('📂 空文件夹测试')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('空文件夹.zip')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#FF9800')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.testEmptyFolder('zip');
              })
            
            Button('空文件夹.7z')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#F57C00')
              .enabled(!this.isRunning)
              .onClick(() => {
                this.testEmptyFolder('7z');
              })
          }
          .width('100%')
        }
        .width('100%')
        .padding(20)
        .backgroundColor('#E8F5E9')
        .border({ width: 2, color: '#4CAF50', radius: 10 })
        .margin({ bottom: 25 })

        // ==================== 进度和控制 ====================
        if (this.isRunning) {
          Column() {
            Row() {
              Text('压缩进度')
                .fontSize(16)
                .fontWeight(FontWeight.Bold)
                .layoutWeight(1)
              
              Button('🛑 取消')
                .height(35)
                .fontSize(14)
                .backgroundColor('#F44336')
                .fontColor('#FFFFFF')
                .onClick(() => {
                  this.cancelCompress();
                })
            }
            .width('100%')
            .margin({ bottom: 10 })
            
            Progress({ value: this.progress, total: 100, type: ProgressType.Linear })
              .width('100%')
              .color('#FF9800')
              .margin({ bottom: 10 })
            
            Row() {
              Text(`${this.progress}%`)
                .fontSize(18)
                .fontWeight(FontWeight.Bold)
                .fontColor('#FF9800')
              
              Text('🔄 压缩中...')
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

        // ==================== 压缩统计 ====================
        if (this.compressionRatio > 0) {
          Column() {
            Text('压缩统计')
              .fontSize(18)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 15 })
              .alignSelf(ItemAlign.Start)
            
            Row() {
              Column() {
                Text('文件数量')
                  .fontSize(12)
                  .fontColor('#666666')
                Text(`${this.fileCount}`)
                  .fontSize(18)
                  .fontWeight(FontWeight.Bold)
                  .margin({ top: 5 })
              }
              .layoutWeight(1)
              
              Column() {
                Text('原始大小')
                  .fontSize(12)
                  .fontColor('#666666')
                Text(this.formatBytes(this.originalSize))
                  .fontSize(14)
                  .fontWeight(FontWeight.Bold)
                  .margin({ top: 5 })
              }
              .layoutWeight(1)
              
              Text('→')
                .fontSize(20)
                .fontColor('#999999')
                .margin({ left: 5, right: 5 })
              
              Column() {
                Text('压缩后')
                  .fontSize(12)
                  .fontColor('#666666')
                Text(this.formatBytes(this.compressedSize))
                  .fontSize(14)
                  .fontWeight(FontWeight.Bold)
                  .fontColor('#4CAF50')
                  .margin({ top: 5 })
              }
              .layoutWeight(1)
              
              Column() {
                Text('压缩率')
                  .fontSize(12)
                  .fontColor('#666666')
                Text(`${this.compressionRatio.toFixed(1)}%`)
                  .fontSize(18)
                  .fontWeight(FontWeight.Bold)
                  .fontColor('#FF9800')
                  .margin({ top: 5 })
              }
              .layoutWeight(1)
            }
            .width('100%')
          }
          .width('100%')
          .padding(15)
          .backgroundColor('#E8F5E9')
          .border({ width: 1, color: '#4CAF50', radius: 8 })
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
