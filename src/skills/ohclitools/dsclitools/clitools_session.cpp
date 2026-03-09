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
 * @file clitools_session.cpp
 * @brief Session CLI handlers (session.h). Calls softbus session C APIs.
 */

#include "clitools_session.h"
#include "clitools_constants.h"
#include "common.h"

#include <cstdlib>
#include <cstring>
#include <cstdio>

#include "securec.h"
#include "session.h"

/**
 * Return pointer to value for key=value in argv, or nullptr.
 * @param argc Argument count.
 * @param argv Argument vector (argv[0] is command name).
 * @param key Key name (e.g. "sessionId").
 * @return Pointer to value after '=', or nullptr if not found.
 */
static const char* GetArg(int argc, const char* argv[], const char* key)
{
    size_t keyLen = strlen(key);
    for (int i = ARG_IDX_FIRST; i < argc; i++) {
        if (strncmp(argv[i], key, keyLen) == 0 && argv[i][keyLen] == '=') {
            return argv[i] + keyLen + 1;
        }
    }
    return nullptr;
}

static ISessionListener g_sessionListener;

/**
 * Callback when session is opened.
 * @param sessionId Session ID.
 * @param result Result code.
 * @return 0 on success.
 */
static int OnSessionOpened(int sessionId, int result)
{
    Logd("[session] OnSessionOpened sessionId: %d result: %d", sessionId, result);
    return 0;
}

/**
 * Callback when session is closed.
 * @param sessionId Session ID.
 */
static void OnSessionClosed(int sessionId)
{
    Logd("[session] OnSessionClosed sessionId: %d", sessionId);
}

static void OnBytesReceived(int sessionId, const void* data, unsigned int dataLen)
{
    (void)sessionId;
    (void)data;
    Logd("[session] OnBytesReceived sessionId: %d len: %u", sessionId, dataLen);
}

static void OnMessageReceived(int sessionId, const void* data, unsigned int dataLen)
{
    (void)sessionId;
    (void)data;
    Logd("[session] OnMessageReceived sessionId: %d len: %u", sessionId, dataLen);
}

/**
 * Create session server; requires sessionName= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleCreateSessionServer(int argc, const char* argv[])
{
    const char* sessionName = GetArg(argc, argv, "sessionName");
    if (sessionName == nullptr || sessionName[0] == '\0') {
        Logd("usage: createsessionserver sessionName=com.test.session");
        return;
    }
    (void)memset_s(&g_sessionListener, sizeof(g_sessionListener), 0, sizeof(g_sessionListener));
    g_sessionListener.OnSessionOpened = OnSessionOpened;
    g_sessionListener.OnSessionClosed = OnSessionClosed;
    g_sessionListener.OnBytesReceived = OnBytesReceived;
    g_sessionListener.OnMessageReceived = OnMessageReceived;
    int ret = CreateSessionServer(DEFAULT_PKG_NAME, sessionName, &g_sessionListener);
    Logd("CreateSessionServer ret: %d", ret);
}

/**
 * Remove session server; requires sessionName= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleRemoveSessionServer(int argc, const char* argv[])
{
    const char* sessionName = GetArg(argc, argv, "sessionName");
    if (sessionName == nullptr || sessionName[0] == '\0') {
        Logd("usage: removesessionserver sessionName=com.test.session");
        return;
    }
    int ret = RemoveSessionServer(DEFAULT_PKG_NAME, sessionName);
    Logd("RemoveSessionServer ret: %d", ret);
}

void HandleOpenSession(int argc, const char* argv[])
{
    const char* mySession = GetArg(argc, argv, "mySession");
    const char* peerSession = GetArg(argc, argv, "peerSession");
    const char* peerNetworkId = GetArg(argc, argv, "peerNetworkId");
    if (mySession == nullptr || peerSession == nullptr || peerNetworkId == nullptr) {
        Logd("usage: opensession mySession=s1 peerSession=s2 peerNetworkId=xxx");
        return;
    }
    SessionAttribute attr = {};
    attr.dataType = TYPE_BYTES;
    attr.linkTypeNum = 0;
    int sessionId = OpenSession(mySession, peerSession, peerNetworkId, nullptr, &attr);
    Logd("OpenSession ret/sessionId: %d (async, OnSessionOpened will be called)", sessionId);
}

/**
 * Close session; requires sessionId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleCloseSession(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    if (idStr == nullptr) {
        Logd("usage: closesession sessionId=1");
        return;
    }
    int sessionId = atoi(idStr);
    CloseSession(sessionId);
    Logd("CloseSession done");
}

void HandleSendBytes(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    const char* data = GetArg(argc, argv, "data");
    if (idStr == nullptr || data == nullptr) {
        Logd("usage: sendbytes sessionId=1 data=hello");
        return;
    }
    int sessionId = atoi(idStr);
    int ret = SendBytes(sessionId, data, static_cast<unsigned int>(strlen(data)));
    Logd("SendBytes ret: %d", ret);
}

/**
 * Send message; requires sessionId= and data= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleSendMessage(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    const char* data = GetArg(argc, argv, "data");
    if (idStr == nullptr || data == nullptr) {
        Logd("usage: sendmessage sessionId=1 data=hi");
        return;
    }
    int sessionId = atoi(idStr);
    int ret = SendMessage(sessionId, data, static_cast<unsigned int>(strlen(data)));
    Logd("SendMessage ret: %d", ret);
}

void HandleGetMySessionName(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    if (idStr == nullptr) {
        Logd("usage: getmysessionname sessionId=1");
        return;
    }
    int sessionId = atoi(idStr);
    char name[SESSION_NAME_BUF_LEN] = {};
    int ret = GetMySessionName(sessionId, name, sizeof(name));
    if (ret == 0) {
        Logd("mySessionName: %s", name);
    } else {
        Logd("GetMySessionName ret: %d", ret);
    }
}

/**
 * Get peer session name and dump; requires sessionId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleGetPeerSessionName(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    if (idStr == nullptr) {
        Logd("usage: getpeersessionname sessionId=1");
        return;
    }
    int sessionId = atoi(idStr);
    char name[SESSION_NAME_BUF_LEN] = {};
    int ret = GetPeerSessionName(sessionId, name, sizeof(name));
    if (ret == 0) {
        Logd("peerSessionName: %s", name);
    } else {
        Logd("GetPeerSessionName ret: %d", ret);
    }
}

void HandleGetPeerDeviceId(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    if (idStr == nullptr) {
        Logd("usage: getpeerdeviceid sessionId=1");
        return;
    }
    int sessionId = atoi(idStr);
    char networkId[PEER_NETWORKID_BUF_LEN] = {};
    int ret = GetPeerDeviceId(sessionId, networkId, sizeof(networkId));
    if (ret == 0) {
        Logd("peerDeviceId: %s", networkId);
    } else {
        Logd("GetPeerDeviceId ret: %d", ret);
    }
}

/**
 * Get session side and dump; requires sessionId= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleGetSessionSide(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    if (idStr == nullptr) {
        Logd("usage: getsessionside sessionId=1");
        return;
    }
    int sessionId = atoi(idStr);
    int side = GetSessionSide(sessionId);
    if (side >= 0) {
        Logd("sessionSide: %d (0=server 1=client)", side);
    } else {
        Logd("GetSessionSide ret: %d", side);
    }
}

/**
 * Get session option and dump; requires sessionId= and option= in argv.
 * @param argc Argument count.
 * @param argv Args.
 * @return void
 */
void HandleGetSessionOption(int argc, const char* argv[])
{
    const char* idStr = GetArg(argc, argv, "sessionId");
    const char* optionStr = GetArg(argc, argv, "option");
    if (idStr == nullptr || optionStr == nullptr) {
        Logd("usage: getsessionoption sessionId=1 option=0");
        return;
    }
    int sessionId = atoi(idStr);
    int opt = atoi(optionStr);
    if (opt < 0 || opt >= SESSION_OPTION_BUTT) {
        Logd("option must be 0 (MAX_SENDBYTES_SIZE), 1 (MAX_SENDMESSAGE_SIZE), 2 (LINK_TYPE)");
        return;
    }
    uint32_t value = 0;
    int ret = GetSessionOption(sessionId, static_cast<SessionOption>(opt), &value, sizeof(value));
    if (ret == 0) {
        Logd("option value: %u", value);
    } else {
        Logd("GetSessionOption ret: %d", ret);
    }
}
