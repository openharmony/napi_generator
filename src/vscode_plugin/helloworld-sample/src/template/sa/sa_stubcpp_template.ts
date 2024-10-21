import { FileTemp } from "../../datatype";

export let stubCppTemplate: FileTemp = {
  name: '[serviceName]_service_stub.cpp',
  content: `#include "[lowServiceName]_service_stub.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  
  [serviceName]Stub::[serviceName]Stub()
  {
      [innerFuncMap]
  }
  
  [serviceName]Stub::~[serviceName]Stub()
  {
      innerFuncs_.clear();
  }
  
  int [serviceName]Stub::OnRemoteRequest(uint32_t code, MessageParcel& data, MessageParcel& reply,
      MessageOption &option)
  {
      std::u16string descriptor = [serviceName]Stub::GetDescriptor();
      std::u16string remoteDescriptor = data.ReadInterfaceToken();
      if (descriptor != remoteDescriptor) {
          return OBJECT_NULL;
      }
      auto itFunc = innerFuncs_.find(code);
      if (itFunc != innerFuncs_.end()) {
          auto memberFunc = itFunc->second;
          if (memberFunc != nullptr) {
              return (this->*memberFunc)(data, reply);
          }
      }
      return IPCObjectStub::OnRemoteRequest(code, data, reply, option);
  }
  
  [innerFuncImpl]
  
  } // namespace [serviceName]
  } // namespace OHOS
  `
};