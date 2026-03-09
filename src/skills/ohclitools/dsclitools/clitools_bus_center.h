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
 * @file clitools_bus_center.h
 * @brief Bus center CLI handlers (softbus_bus_center.h).
 * All handlers:
 * @param argc Argument count.
 * @param argv Argument vector.
 * @return void
 */

#ifndef DSCLITOOLS_CLITOOLS_BUS_CENTER_H
#define DSCLITOOLS_CLITOOLS_BUS_CENTER_H

void HandleGetLocalNodeInfo(int argc, const char* argv[]);
void HandleGetAllNodeInfo(int argc, const char* argv[]);
void HandleLeaveLNN(int argc, const char* argv[]);
void HandleGetNodeKeyInfo(int argc, const char* argv[]);
void HandleStopTimeSync(int argc, const char* argv[]);
void HandleDestroyGroupOwner(int argc, const char* argv[]);
void HandleJoinLNN(int argc, const char* argv[]);
void HandleRegNodeCb(int argc, const char* argv[]);
void HandleUnregNodeCb(int argc, const char* argv[]);
void HandleSetNodeDataChangeFlag(int argc, const char* argv[]);
void HandleStartTimeSync(int argc, const char* argv[]);
void HandlePublishLNN(int argc, const char* argv[]);
void HandleStopPublishLNN(int argc, const char* argv[]);
void HandleRefreshLNN(int argc, const char* argv[]);
void HandleStopRefreshLNN(int argc, const char* argv[]);
void HandleActiveMetaNode(int argc, const char* argv[]);
void HandleDeactiveMetaNode(int argc, const char* argv[]);
void HandleGetAllMetaNodeInfo(int argc, const char* argv[]);
void HandleShiftLNNGear(int argc, const char* argv[]);
void HandleSyncTrustedRelationShip(int argc, const char* argv[]);
void HandleSetDisplayName(int argc, const char* argv[]);
void HandleCreateGroupOwner(int argc, const char* argv[]);

#endif  // DSCLITOOLS_CLITOOLS_BUS_CENTER_H
