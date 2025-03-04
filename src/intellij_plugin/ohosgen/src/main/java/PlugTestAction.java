/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.Messages;

/**
 * <h3>类名：该类用于xxx</h3>
 * description ${description}
 *
 * @author ${USER}
 * date 2025-02-28
 * @since 2025-02-28
 * @version 1.0
 */
public class PlugTestAction extends AnAction {
    /**
     * 执行插件事件
     *
     * @param e 插件事件
     */
    @Override
    public void actionPerformed(AnActionEvent e) {
        // NEEDO: insert action logic here
        System.out.println(" Plug Test Action!");
        Project project = e.getProject();
        if (project == null) {
            Messages.showMessageDialog(
                    "No active project found",
                    "Error",
                    Messages.getErrorIcon()
            );
            return;
        }

        String result = "Proto Message:  protoMessage.toString()";

        Messages.showMessageDialog(
                project,
                result,
                "Protobuf Demo",
                Messages.getInformationIcon()
        );
    }
}
