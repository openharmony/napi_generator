import { FileTemp } from "../../datatype";

export let proxyCppTemplate: FileTemp = {
  name: '[serviceName]_service_proxy.cpp',
  content: `#include "[lowServiceName]_service_proxy.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  [serviceName]Proxy::[serviceName]Proxy(const sptr<IRemoteObject> &impl) : IRemoteProxy<I[serviceName]Service>(impl){}
  
  [remoteFuncImpl]
  /**
   * @brief Notify that a remote object died.
   * It's called when the linked remote object died.
   * 
   * @param remote The died IRemoteObject handler of the remote object 
   */
  void [serviceName]DeathRecipient::OnRemoteDied(const wptr<IRemoteObject> &remote)
  {
  
  }
  
  [serviceName]DeathRecipient::[serviceName]DeathRecipient()
  {
  }
  
  [serviceName]DeathRecipient::~[serviceName]DeathRecipient()
  {
  }
  
  } // namespace [serviceName]
  } // namespace OHOS
  `
};