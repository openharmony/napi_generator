package utils;

import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.NlsContexts;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;

/**
 * <h3>plugtest</h3>
 *
 * @author ${USER}
 * date 2025-02-28
 * since 2025-02-28
 * @version 1.0
 */
public class MockBgTask extends Task.Backgroundable {
    private VirtualFile parseFile;

    public MockBgTask(@Nullable Project project, @NlsContexts.ProgressTitle @NotNull String title, boolean flag) {
        super(project, title, flag);
    }

    public void setFile(VirtualFile file) {
        parseFile = file;
    }

    @Override
    public void run(@NotNull ProgressIndicator indicator) {
        doAnalysis(indicator);
    }

    private void doAnalysis(@NotNull ProgressIndicator indicator) {
        indicator.setFraction(0.0);
        // 新增文件读取逻辑
        try {
            String content = new String(parseFile.contentsToByteArray(), parseFile.getCharset());
            System.out.println(content);

            String[] lines = content.split("\n");
            for (int i = 0; i < lines.length; i++) {
                // 模拟处理每一行
                indicator.setFraction((i + 1) / (double) lines.length);
                indicator.setText("Dts2cpp steps : " + (i + 1) + "/" + lines.length);

                // 这里添加实际业务逻辑
                processLine(lines[i]);

                Thread.sleep(50); // 调整延时更符合实际场景
            }
        } catch (InterruptedException | IOException ex) {
            System.out.println("Error: " + ex.getMessage() + "Failure");
        }
    }

    // 示例行处理方法
    private void processLine(String line) {
        // 实际业务逻辑（如语法分析/代码检查等）
    }
}
