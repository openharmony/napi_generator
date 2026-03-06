/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

/**
 * @file clitools.h
 * @brief Main header for wificlitools CLI. Module-to-bundle mapping: see DESIGN.md in this directory.
 */

#ifndef WIFICLITOOLS_CLITOOLS_H
#define WIFICLITOOLS_CLITOOLS_H

#include <cstring>

#include "common.h"
#include "clitools_sta.h"
#include "clitools_hotspot.h"
#include "clitools_p2p.h"
#include "clitools_hid2d.h"

struct StaCliCmd {
    const char* cmd;
    void (*handler)(int argc, const char* argv[]);
    const char* usage;
};

/**
 * Print supported commands (usage lines) to stdout.
 * @return void
 */
void Help(void);

/**
 * Dispatch argv to the matching command handler.
 * @param argc Number of arguments (argv[0] is command name).
 * @param argv Command and key=value args.
 * @return void
 */
void HandleUserCommand(int argc, const char* argv[]);

#endif  // WIFICLITOOLS_CLITOOLS_H
