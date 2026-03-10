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
 * @file common.h
 * @brief Common logging for dsclitools.
 */

#ifndef DSCLITOOLS_COMMON_H
#define DSCLITOOLS_COMMON_H

#include <cstdarg>
#include <cstdio>

/**
 * Print formatted message to stdout (no newline).
 * @param fmt Format string (printf-style).
 * @param ... Variable arguments.
 * @return void
 */
void Log(const char* fmt, ...);

/**
 * Print formatted message to stdout with newline (debug/result).
 * @param fmt Format string (printf-style).
 * @param ... Variable arguments.
 * @return void
 */
void Logd(const char* fmt, ...);

#endif  // DSCLITOOLS_COMMON_H
