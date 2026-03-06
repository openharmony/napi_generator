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

#ifndef CLITOOLS_SOCKET_H
#define CLITOOLS_SOCKET_H

/**
 * @file clitools_socket.h
 * @brief Command-line handlers for Bluetooth Socket/SPP (btframework bluetooth_socket.h).
 */

void handleSppListen(int argc, const char *argv[]);
void handleSppAccept(int argc, const char *argv[]);
void handleSppConnect(int argc, const char *argv[]);
void handleSppDisconnect(int argc, const char *argv[]);
void handleSppRead(int argc, const char *argv[]);
void handleSppWrite(int argc, const char *argv[]);
void handleSppServerClose(int argc, const char *argv[]);

#endif // CLITOOLS_SOCKET_H
