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

#ifndef MISCHANDLE_H
#define MISCHANDLE_H

#include <string>

#ifdef __cplusplus

/**
 * @brief Handle wait operation command
 * @param argc Number of arguments
 * @param argv Array of argument strings
 */
void HandleWaitOperation(int argc, const char* argv[]);

/**
 * @brief Handle wait operation async command
 * @param argc Number of arguments
 * @param argv Array of argument strings
 */
void HandleWaitOperationAsync(int argc, const char* argv[]);

/**
 * @brief Handle interactive mode command
 * @param argc Number of arguments
 * @param argv Array of argument strings
 */
void HandleInteractive(int argc, const char* argv[]);

/**
 * @brief Parse user input command string
 * @param command Command string to parse
 */
void ParseUserInput(std::string command);

#endif // __cplusplus

#endif // MISCHANDLE_H
