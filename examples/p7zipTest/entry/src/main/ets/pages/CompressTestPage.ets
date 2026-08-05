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
  
  // 文件创建相关状态
  @State createProgress: number = 0;
  @State isCreatingFiles: boolean = false;
  @State createStatusText: string = '未创建';
  
  // 压缩相关状态
  @State compressProgress: number = 0;
  @State statusText: string = '请选择操作';
  @State logText: string = '';
  @State isCompressing: boolean = false;
  @State compressionRatio: number = 0;
  @State originalSize: number = 0;
  @State compressedSize: number = 0;
  @State fileCount: number = 0;
  
  // 路径显示
  @State inputPathDisplay: string = '未选择';
  @State outputPathDisplay: string = '未生成';
  
  // 已创建的文件路径（用于后续压缩）
  private createdFiles: Map<string, string[]> = new Map();

  aboutToAppear() {
    this.filesDir = this.context.filesDir;
    this.addLog(`✓ 应用目录: ${this.filesDir}`);
    this.addLog(`操作流程: 先创建测试文件 → 再选择压缩操作`);
  }

  private addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logText = `[${time}] ${message}\n${this.logText}`;
    hilog.info(DOMAIN, 'CompressTest', message);
  }
  
  // 步骤1: 创建测试文件
  private async createTestFiles(mode: 'single' | 'multi' | 'folder') {
    if (this.isCreatingFiles) return;
    
    this.isCreatingFiles = true;
    this.createProgress = 0;
    this.createStatusText = '创建中...';
    
    const modeText = mode === 'single' ? '单文件' : mode === 'multi' ? '多文件' : '文件夹';
    this.addLog('========================================');
    this.addLog(`创建 ${modeText} 测试文件`);
    this.addLog('========================================');
    
    try {
      let inputPaths: string[] = [];
      let totalSteps = 0;
      let currentStep = 0;
      
      if (mode === 'single') {
        totalSteps = 1;
        const singleFile = `${this.filesDir}/compress_test_5mb.txt`;
        this.addLog(`   创建: compress_test_5mb.txt (5MB)`);
        this.createProgress = 20;
        
        await TestFileGenerator.createTestTextFileWithSize(singleFile, 5 * 1024);
        this.createProgress = 100;
        
        inputPaths = [singleFile];
        this.inputPathDisplay = singleFile;
        this.addLog(`   ✓ 单文件创建完成`);
      } else if (mode === 'multi') {
        totalSteps = 8;
        this.addLog(`   创建: 多个文件，总大小 15MB+`);
        
        const file1 = `${this.filesDir}/compress_file1.txt`;
        this.createProgress = 5;
        this.addLog(`   创建file1 (3MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file1, 3 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const file2 = `${this.filesDir}/compress_file2.txt`;
        this.addLog(`   创建file2 (4MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file2, 4 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const file3 = `${this.filesDir}/compress_file3.txt`;
        this.addLog(`   创建file3 (3MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(file3, 3 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const compressDir1 = `${this.filesDir}/compress_dir1`;
        await TestFileGenerator.createDirectory(compressDir1);
        this.addLog(`   创建目录compress_dir1...`);
        currentStep++;
        
        await TestFileGenerator.createTestTextFileWithSize(`${compressDir1}/data_a.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        await TestFileGenerator.createTestTextFileWithSize(`${compressDir1}/data_b.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const compressDir2 = `${this.filesDir}/compress_dir2`;
        await TestFileGenerator.createDirectory(compressDir2);
        this.addLog(`   创建目录compress_dir2...`);
        await TestFileGenerator.createTestTextFileWithSize(`${compressDir2}/info.txt`, 2 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const subdir = `${compressDir2}/subdir`;
        await TestFileGenerator.createDirectory(subdir);
        await TestFileGenerator.createTestTextFileWithSize(`${subdir}/nested_data.txt`, 1024);
        currentStep++;
        this.createProgress = 100;
        
        inputPaths = [file1, file2, file3, compressDir1, compressDir2];
        this.inputPathDisplay = `compress_file1.txt, compress_file2.txt, compress_file3.txt + 2个目录`;
        this.addLog(`   ✓ 多文件创建完成: 10MB + 5MB`);
      } else {
        totalSteps = 7;
        this.addLog(`   创建: 测试文件夹 10MB+`);
        
        const testFolder = `${this.filesDir}/test_folder`;
        await TestFileGenerator.createDirectory(testFolder);
        this.createProgress = 10;
        
        this.addLog(`   创建doc1 (2MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(`${testFolder}/doc1.txt`, 2 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        this.addLog(`   创建doc2 (3MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(`${testFolder}/doc2.txt`, 3 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        this.addLog(`   创建doc3 (2MB)...`);
        await TestFileGenerator.createTestTextFileWithSize(`${testFolder}/doc3.txt`, 2 * 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const subfolder1 = `${testFolder}/subfolder1`;
        await TestFileGenerator.createDirectory(subfolder1);
        await TestFileGenerator.createTestTextFileWithSize(`${subfolder1}/file_a.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        await TestFileGenerator.createTestTextFileWithSize(`${subfolder1}/file_b.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const subfolder2 = `${testFolder}/subfolder2`;
        await TestFileGenerator.createDirectory(subfolder2);
        await TestFileGenerator.createTestTextFileWithSize(`${subfolder2}/data.txt`, 1024);
        currentStep++;
        this.createProgress = Math.floor((currentStep / totalSteps) * 100);
        
        const deepFolder = `${subfolder2}/deep`;
        await TestFileGenerator.createDirectory(deepFolder);
        await TestFileGenerator.createTestTextFileWithSize(`${deepFolder}/nested.txt`, 1024);
        currentStep++;
        this.createProgress = 100;
        
        inputPaths = [testFolder];
        this.inputPathDisplay = testFolder;
        this.addLog(`   ✓ 文件夹创建完成`);
      }
      
      // 保存创建的文件路径
      this.createdFiles.set(mode, inputPaths);
      this.createStatusText = `${modeText}已创建`;
      
      this.addLog(`${modeText} 文件创建成功！`);
      this.addLog('========================================');
      
      promptAction.showToast({ 
        message: `${modeText}创建完成！`, 
        duration: 2000 
      });
      
    } catch (error) {
      this.addLog(`创建失败: ${JSON.stringify(error)}`);
      this.createStatusText = '创建失败';
    } finally {
      this.isCreatingFiles = false;
      this.createProgress = 0;
    }
  }
  
  // 步骤2: 压缩文件
  private async compressFiles(format: '7z' | 'zip', mode: 'single' | 'multi' | 'folder') {
    if (this.isCompressing) return;
    
    // 检查是否已创建文件
    const inputPaths = this.createdFiles.get(mode);
    if (!inputPaths || inputPaths.length === 0) {
      promptAction.showToast({ 
        message: '请先创建测试文件！', 
        duration: 2000 
      });
      this.addLog(`请先点击"创建文件"按钮`);
      return;
    }
    
    this.isCompressing = true;
    this.compressProgress = 0;
    this.compressionRatio = 0;
    this.originalSize = 0;
    this.compressedSize = 0;
    this.fileCount = 0;
    
    const modeText = mode === 'single' ? '单文件' : mode === 'multi' ? '多文件' : '文件夹';
    const outputFileName = `${mode}_compressed.${format}`;
    const outputPath = `${this.filesDir}/${outputFileName}`;
    this.outputPathDisplay = outputPath;
    
    this.addLog('========================================');
    this.addLog(`压缩 ${modeText}.${format}`);
    this.addLog('========================================');
    this.statusText = `压缩中...`;
    
    try {
      this.compressController = compressItems(
        inputPaths,
        outputPath,
        { format: format, compressionLevel: 5 },
        (prog: CompressProgress) => {
          this.compressProgress = prog.percentage;
          this.statusText = `压缩中 ${prog.percentage}%`;
          if (prog.percentage % 20 === 0 && prog.percentage > 0) {
            this.addLog(`   进度: ${prog.percentage}%`);
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
        this.addLog(`压缩成功！`);
        this.addLog(`   格式: ${result.format}`);
        this.addLog(`   文件数: ${this.fileCount}`);
        this.addLog(`   原始: ${this.formatBytes(this.originalSize)}`);
        this.addLog(`   压缩后: ${this.formatBytes(this.compressedSize)}`);
        this.addLog(`   压缩率: ${this.compressionRatio.toFixed(1)}%`);
        this.addLog('========================================');
        this.statusText = `压缩成功`;
        
        promptAction.showToast({ 
          message: `压缩成功！`, 
          duration: 2000 
        });
      } else {
        this.addLog(`压缩失败: ${result.message}`);
        this.statusText = '压缩失败';
      }
      
    } catch (error) {
      this.addLog(`异常: ${JSON.stringify(error)}`);
      this.statusText = '压缩失败';
    } finally {
      this.isCompressing = false;
      this.compressProgress = 0;
    }
  }
  
  // 取消压缩
  private cancelCompress() {
    if (!this.compressController) {
      this.addLog('没有正在进行的压缩任务');
      return;
    }
    
    this.addLog(`正在取消压缩...`);
    const success = this.compressController.cancel();
    
    if (success) {
      this.addLog('取消成功');
      this.statusText = '已取消';
    } else {
      this.addLog('取消失败');
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
        
        Text('步骤：①创建文件 → ②压缩文件')
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
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Text('创建不同类型的测试文件（需要几秒时间）')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // 创建按钮组
          Row() {
            Button('创建单文件(5MB)')
              .layoutWeight(1)
              .height(50)
              .fontSize(14)
              .backgroundColor('#4CAF50')
              .enabled(!this.isCreatingFiles)
              .onClick(() => {
                this.createTestFiles('single');
              })
            
            Button('创建多文件(15MB)')
              .layoutWeight(1)
              .height(50)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#2196F3')
              .enabled(!this.isCreatingFiles)
              .onClick(() => {
                this.createTestFiles('multi');
              })
            
            Button('创建文件夹(10MB)')
              .layoutWeight(1)
              .height(50)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#FF9800')
              .enabled(!this.isCreatingFiles)
              .onClick(() => {
                this.createTestFiles('folder');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 文件创建进度条
          if (this.isCreatingFiles) {
            Column() {
              Text('文件创建进度')
                .fontSize(14)
                .fontWeight(FontWeight.Bold)
                .margin({ bottom: 8 })
                .alignSelf(ItemAlign.Start)
              
              Progress({ value: this.createProgress, total: 100, type: ProgressType.Linear })
                .width('100%')
                .color('#4CAF50')
                .margin({ bottom: 8 })
              
              Text(`${this.createProgress}% - 正在创建文件...`)
                .fontSize(13)
                .fontColor('#4CAF50')
            }
            .width('100%')
            .padding(12)
            .backgroundColor('#E8F5E9')
            .border({ width: 1, color: '#4CAF50', radius: 5 })
            .margin({ bottom: 15 })
          }
          
          // 创建状态
          Text(`状态: ${this.createStatusText}`)
            .fontSize(14)
            .padding(10)
            .width('100%')
            .backgroundColor('#F5F5F5')
            .border({ width: 1, color: '#DDDDDD', radius: 5 })
        }
        .width('100%')
        .padding(20)
        .backgroundColor('#F0F8FF')
        .border({ width: 2, color: '#2196F3', radius: 10 })
        .margin({ bottom: 25 })

        // ==================== 步骤2: 压缩测试 ====================
        Column() {
          Text('步骤2: 压缩文件')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Text('选择格式压缩已创建的文件')
            .fontSize(13)
            .fontColor('#666666')
            .margin({ bottom: 15 })
            .alignSelf(ItemAlign.Start)
          
          // Zip 格式
          Text('Zip 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('压缩单文件.zip')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#00BCD4')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('zip', 'single');
              })
            
            Button('压缩多文件.zip')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#0097A7')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('zip', 'multi');
              })
            
            Button('压缩文件夹.zip')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#00838F')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('zip', 'folder');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 7z 格式
          Text('7z 格式')
            .fontSize(16)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
            .alignSelf(ItemAlign.Start)
          
          Row() {
            Button('压缩单文件.7z')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .backgroundColor('#9C27B0')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('7z', 'single');
              })
            
            Button('压缩多文件.7z')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#673AB7')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('7z', 'multi');
              })
            
            Button('压缩文件夹.7z')
              .layoutWeight(1)
              .height(48)
              .fontSize(14)
              .margin({ left: 8 })
              .backgroundColor('#4A148C')
              .enabled(!this.isCompressing)
              .onClick(() => {
                this.compressFiles('7z', 'folder');
              })
          }
          .width('100%')
          .margin({ bottom: 15 })
          
          // 压缩进度条
          if (this.isCompressing) {
            Column() {
              Row() {
                Text('压缩进度')
                  .fontSize(16)
                  .fontWeight(FontWeight.Bold)
                  .layoutWeight(1)
                
                Button('取消')
                  .height(35)
                  .fontSize(14)
                  .backgroundColor('#F44336')
                  .onClick(() => {
                    this.cancelCompress();
                  })
              }
              .width('100%')
              .margin({ bottom: 10 })
              
              Progress({ value: this.compressProgress, total: 100, type: ProgressType.Linear })
                .width('100%')
                .color('#FF9800')
                .margin({ bottom: 10 })
              
              Text(`${this.compressProgress}% - ${this.statusText}`)
                .fontSize(14)
                .fontColor('#FF9800')
            }
            .width('100%')
            .padding(15)
            .backgroundColor('#FFF3E0')
            .border({ width: 1, color: '#FF9800', radius: 8 })
            .margin({ bottom: 15 })
          }
        }
        .width('100%')
        .padding(20)
        .backgroundColor('#E8F5E9')
        .border({ width: 2, color: '#4CAF50', radius: 10 })
        .margin({ bottom: 25 })

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
                Text('文件数')
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

        // ==================== 日志 ====================
        Text('操作日志')
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
