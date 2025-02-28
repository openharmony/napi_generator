/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

public class PlugTestAction extends AnAction {

    @Override
    public void actionPerformed(AnActionEvent e) {
        // TODO: insert action logic here
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

//        Message protoMessage = buildProtobufMessage();
        String result = "Proto Message:  protoMessage.toString()";

        Messages.showMessageDialog(
                project,
                result,
                "Protobuf Demo",
                Messages.getInformationIcon()
        );
    }

//    private Message buildProtobufMessage() {
//        // 假设已通过protoc生成UserInfo类
//        return UserInfo.newBuilder()
//                .setName("John")
//                .setId(123)
//                .build();
//    }
}
