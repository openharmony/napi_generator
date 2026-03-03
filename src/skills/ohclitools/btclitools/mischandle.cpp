/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "mischandle.h"
#include "clitools.h"
#include "common_dump.h"
#include <iostream>
#include <string>

using OHOS::Bluetooth::WaitAndPrintOperationEnd;
using OHOS::Bluetooth::WaitAndPrintOperationEndAsync;
using OHOS::Bluetooth::GeStrValue;
#include <sstream>
#include <vector>

using namespace std;

void HandleWaitOperation(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string operation;
    std::string prefix = PARAM_OPERATION;
    if (GeStrValue(argc, argv, prefix, operation)) {
        WaitAndPrintOperationEnd(operation);
    } else {
        Logd("usage: wait operation=%s", argv[CMD_IDX]);
    }
}

void HandleWaitOperationAsync(int argc, const char* argv[])
{
    Logd("enter command handler:%s", argv[CMD_IDX]);
    std::string operation;
    std::string prefix = PARAM_OPERATION;
    if (GeStrValue(argc, argv, prefix, operation)) {
        WaitAndPrintOperationEndAsync(operation, DEFAULT_WAIT_SECONDS);
    } else {
        Logd("Usage: waitasync operation=operation_name");
    }
}

void HandleInteractive(int argc, const char* argv[])
{
    string inputLine;
    Logd("enter interactive mode! input quit to exit this mode");
    Logd("please input command:");
    // use RegisterCallbacks(); if needed

    while (getline(cin, inputLine)) {
        if (inputLine == "quit") {
            // use DeregisterCallbacks(); if needed
            break;
        }
        ParseUserInput(inputLine);
        Logd("please input command:");
    }
}

void ParseUserInput(std::string command)
{
    int argc = 0;
    const char* argv[MAX_ARGS] = { nullptr };
    vector<string> cmdArgs;

    std::istringstream istr(command);
    for (std::string s; istr >> s;) {
        cmdArgs.push_back(s);
    }

    argc = cmdArgs.size() + CMD_IDX;
    if (argc > MAX_ARGS) {
        argc = MAX_ARGS;
    }
    for (int i = CMD_IDX; i < argc; i++) {
        argv[i] = cmdArgs[i - CMD_IDX].c_str();
    }
    OHOS::Bluetooth::HandleUserCommand(argc, argv);
    cmdArgs.clear();
}
