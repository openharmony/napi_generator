import { FileTemp } from '../../datatype'

export let iServiceHTemplate : FileTemp = {
  name: "i_[serviceName]_service.h",
  content: `#ifndef I_[marcoName]_SERVICE_H
  #define I_[marcoName]_SERVICE_H
  
  #include "iremote_broker.h"
  #include "iremote_proxy.h"
  
  namespace OHOS {
  namespace [serviceName] {
  class I[serviceName]Service : public OHOS::IRemoteBroker {
  public:
      enum {
          [funcEnum]
      };
  
      DECLARE_INTERFACE_DESCRIPTOR(u"OHOS.[serviceName].I[serviceName]Service");
  public:
      //[functions]
      [iServiceHFunctions]
  };
  // test [marshallFunctions]
  } // namespace [serviceName]
  } // namespace OHOS
  #endif // I_[marcoName]_SERVICE_H
  `
};