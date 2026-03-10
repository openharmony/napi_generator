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
 * @file clitools_session.h
 * @brief Session/transport CLI handlers (session.h).
 * All handlers:
 * @param argc Argument count.
 * @param argv Argument vector.
 * @return void
 */

#ifndef DSCLITOOLS_CLITOOLS_SESSION_H
#define DSCLITOOLS_CLITOOLS_SESSION_H

void HandleCreateSessionServer(int argc, const char* argv[]);
void HandleRemoveSessionServer(int argc, const char* argv[]);
void HandleOpenSession(int argc, const char* argv[]);
void HandleCloseSession(int argc, const char* argv[]);
void HandleSendBytes(int argc, const char* argv[]);
void HandleSendMessage(int argc, const char* argv[]);
void HandleGetMySessionName(int argc, const char* argv[]);
void HandleGetPeerSessionName(int argc, const char* argv[]);
void HandleGetPeerDeviceId(int argc, const char* argv[]);
void HandleGetSessionSide(int argc, const char* argv[]);
void HandleGetSessionOption(int argc, const char* argv[]);

#endif  // DSCLITOOLS_CLITOOLS_SESSION_H
