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
 * @file clitools.cpp
 * @brief Main entry and command table. Grouping: bus_center (softbus_bus_center.h), session (session.h).
 */

#include "clitools.h"
#include "clitools_constants.h"

#include <cstdlib>

/* Command table: bus_center -> clitools_bus_center; session -> clitools_session */
static const DsCliCmd G_DS_CLI_CMDS[] = {
    // Bus center - query / sync
    {"getlocalnodeinfo", HandleGetLocalNodeInfo,
     "Get local node info. No args. ex: dscommand getlocalnodeinfo"},
    {"getallnodeinfo", HandleGetAllNodeInfo,
     "Get all node device info. No args. ex: dscommand getallnodeinfo"},
    {"leavelnn", HandleLeaveLNN,
     "Leave LNN. networkId= string. ex: dscommand leavelnn networkId=xxx"},
    {"getnodekeyinfo", HandleGetNodeKeyInfo,
     "Get node key. networkId= string, key= int (0-14). ex: dscommand getnodekeyinfo networkId=xxx key=0"},
    {"stoptimesync", HandleStopTimeSync,
     "Stop time sync. targetNetworkId= string. ex: dscommand stoptimesync targetNetworkId=xxx"},
    {"destroygroupowner", HandleDestroyGroupOwner,
     "Destroy group owner. No args. ex: dscommand destroygroupowner"},

    // Bus center - async / callback
    {"joinlnn", HandleJoinLNN,
     "Join LNN (async). type= int, addr= string. ex: dscommand joinlnn type=1 addr=xxx"},
    {"regnodecb", HandleRegNodeCb,
     "Register node state callback. events= uint32. ex: dscommand regnodecb events=0xF"},
    {"unregnodecb", HandleUnregNodeCb,
     "Unregister node state callback. No args. ex: dscommand unregnodecb"},
    {"setnodedatachangeflag", HandleSetNodeDataChangeFlag,
     "Set node data change flag. networkId= string, flag= uint16. ex: dscommand setnodedatachangeflag networkId=xxx flag=0"},
    {"starttimesync", HandleStartTimeSync,
     "Start time sync (async). targetNetworkId= string, accuracy= int, period= int. ex: dscommand starttimesync targetNetworkId=xxx"},
    {"publishlnn", HandlePublishLNN,
     "Publish LNN (async). ex: dscommand publishlnn"},
    {"stoppublishlnn", HandleStopPublishLNN,
     "Stop publish LNN. publishId= int. ex: dscommand stoppublishlnn publishId=0"},
    {"refreshlnn", HandleRefreshLNN,
     "Refresh LNN (async). ex: dscommand refreshlnn"},
    {"stoprefreshlnn", HandleStopRefreshLNN,
     "Stop refresh LNN. refreshId= int. ex: dscommand stoprefreshlnn refreshId=0"},
    {"activemetanode", HandleActiveMetaNode,
     "Active meta node (complex params). ex: dscommand activemetanode"},
    {"deactivemetanode", HandleDeactiveMetaNode,
     "Deactive meta node. metaNodeId= string. ex: dscommand deactivemetanode metaNodeId=xxx"},
    {"getallmetanodeinfo", HandleGetAllMetaNodeInfo,
     "Get all meta node info. No args. ex: dscommand getallmetanodeinfo"},
    {"shiftlnngear", HandleShiftLNNGear,
     "Shift LNN gear. callerId= string, [targetNetworkId=], [cycle=],[duration=]. ex: dscommand shiftlnngear callerId=dsclitools"},
    {"synctrustedrelationship", HandleSyncTrustedRelationShip,
     "Sync trusted relationship. msg= string (JSON). ex: dscommand synctrustedrelationship msg={}"},
    {"setdisplayname", HandleSetDisplayName,
     "Set display name. nameData= string (cJSON). ex: dscommand setdisplayname nameData={\"name\":\"x\"}"},
    {"creategroupowner", HandleCreateGroupOwner,
     "Create group owner (async). frequency= int, freqType= int. ex: dscommand creategroupowner frequency=5180 freqType=0"},

    // Session
    {"createsessionserver", HandleCreateSessionServer,
     "Create session server. sessionName= string. ex: dscommand createsessionserver sessionName=com.test.session"},
    {"removesessionserver", HandleRemoveSessionServer,
     "Remove session server. sessionName= string. ex: dscommand removesessionserver sessionName=com.test.session"},
    {"opensession", HandleOpenSession,
     "Open session (async). mySession= string, peerSession= string, peerNetworkId= string. ex: dscommand opensession mySession=s1 peerSession=s2 peerNetworkId=xxx"},
    {"closesession", HandleCloseSession,
     "Close session. sessionId= int. ex: dscommand closesession sessionId=1"},
    {"sendbytes", HandleSendBytes,
     "Send bytes. sessionId= int, data= string. ex: dscommand sendbytes sessionId=1 data=hello"},
    {"sendmessage", HandleSendMessage,
     "Send message. sessionId= int, data= string. ex: dscommand sendmessage sessionId=1 data=hi"},
    {"getmysessionname", HandleGetMySessionName,
     "Get my session name. sessionId= int. ex: dscommand getmysessionname sessionId=1"},
    {"getpeersessionname", HandleGetPeerSessionName,
     "Get peer session name. sessionId= int. ex: dscommand getpeersessionname sessionId=1"},
    {"getpeerdeviceid", HandleGetPeerDeviceId,
     "Get peer device id. sessionId= int. ex: dscommand getpeerdeviceid sessionId=1"},
    {"getsessionside", HandleGetSessionSide,
     "Get session side. sessionId= int. ex: dscommand getsessionside sessionId=1"},
    {"getsessionoption", HandleGetSessionOption,
     "Get session option. sessionId= int, option= int (0|1|2). ex: dscommand getsessionoption sessionId=1 option=0"},
};

static const int G_DS_CLI_CMDS_COUNT =
    static_cast<int>(sizeof(G_DS_CLI_CMDS) / sizeof(G_DS_CLI_CMDS[0]));

void Help(void)
{
    Logd("%s", "support command as follows:");
    for (int i = 0; i < G_DS_CLI_CMDS_COUNT; i++) {
        Logd("%s", G_DS_CLI_CMDS[i].usage);
    }
}

void HandleUserCommand(int argc, const char* argv[])
{
    if (argc < 1) {
        Help();
        return;
    }
    for (int i = 0; i < G_DS_CLI_CMDS_COUNT; i++) {
        if (strcmp(G_DS_CLI_CMDS[i].cmd, argv[CMD_IDX]) == 0) {
            if (G_DS_CLI_CMDS[i].handler != nullptr) {
                G_DS_CLI_CMDS[i].handler(argc, argv);
            } else {
                Logd("no handler for command:%s", G_DS_CLI_CMDS[i].cmd);
            }
            return;
        }
    }
    Help();
}

int main(int argc, char* argv[])
{
    if (argc < MIN_ARGC_WITH_CMD) {
        Help();
        return 0;
    }
    HandleUserCommand(argc - 1, const_cast<const char**>(argv + 1));
    return 0;
}
