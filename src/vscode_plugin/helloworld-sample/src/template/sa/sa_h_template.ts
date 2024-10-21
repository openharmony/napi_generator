import { FileTemp } from "../../datatype";

export let serviceHTemplate: FileTemp = {
  name: '[serviceName]_service.h',
  content: `#ifndef [marcoName]_SERVICE_H
  #define [marcoName]_SERVICE_H
  #include "ipc_skeleton.h"
  #include "system_ability.h"
  #include "[lowServiceName]_service_stub.h"
  
  namespace OHOS {
  namespace [serviceName] {
  // Business implementation
  class [serviceName]Service : public SystemAbility, public [serviceName]Stub {
  public:
      DECLARE_SYSTEM_ABILITY([serviceName]Service);
      DISALLOW_COPY_AND_MOVE([serviceName]Service);
      explicit [serviceName]Service(int32_t systemAbilityId, bool runOnCreate = true);
      ~[serviceName]Service() override;
  
      // Business implementation
      // [functions]
      [serviceHFunctions]
  
      // implement SystemAbility methods
      void OnStart() override;
      void OnStop() override;
  };
  }
  }
  #endif // [marcoName]_SERVICE_H`
};