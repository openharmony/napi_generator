import { FileTemp } from "../../datatype";

export let proxyHTemplate: FileTemp = {
  name: '[serviceName]_service_proxy.h',
  content: `#ifndef [marcoName]_PROXY_H
  #define [marcoName]_PROXY_H
  #include "message_parcel.h"
  #include "parcel.h"
  #include "iremote_broker.h"
  #include "iremote_proxy.h"
  #include "i_[lowServiceName]_service.h"
  
  namespace OHOS {
  namespace [serviceName] {
  class [serviceName]Proxy : public IRemoteProxy<I[serviceName]Service> {
  public:
      explicit [serviceName]Proxy(const sptr<IRemoteObject> &impl);
      ~[serviceName]Proxy() = default;
      //[functions]
      [proxyHFunctions]
  private:
      static inline BrokerDelegator<[serviceName]Proxy> delegator_;
  };
  
  class [serviceName]DeathRecipient : public IRemoteObject::DeathRecipient {
  public:
      virtual void OnRemoteDied(const wptr<IRemoteObject> &remote) override;
      [serviceName]DeathRecipient();
      virtual ~[serviceName]DeathRecipient();
  };
  } // namespace [serviceName]
  } // namespace OHOS
  #endif // [marcoName]_PROXY_H
  `
};