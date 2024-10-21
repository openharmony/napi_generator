import { FileTemp } from "../../datatype";

export let serviceCppTemplate: FileTemp = {
  name: '[serviceName]_service.cpp',
  content: `#include "[lowServiceName]_service.h"
  #include "system_ability_definition.h"
  using namespace std;
  
  namespace OHOS {
  namespace [serviceName] {
  // [marcoName]_SERVICE_ID should be defined in system_ability_definition.h
  REGISTER_SYSTEM_ABILITY_BY_ID([serviceName]Service, [marcoName]_SERVICE_ID, true)
  
  [serviceName]Service::[serviceName]Service(int32_t systemAbilityId, bool runOnCreate)
      :SystemAbility(systemAbilityId, runOnCreate)
  {
  
  }
  
  [serviceName]Service::~[serviceName]Service() {
  
  }
  
  void [serviceName]Service::OnStart()
  {
      // Publish(): Register service by method ISystemAbilityManager->AddSystemAbility()
      bool isPublished = Publish(this);
      if (!isPublished) {
          // Log: Failed to publish the service
      }
      return;
  }
  
  void [serviceName]Service::OnStop()
  {
  
  }
  
  [serviceFuncImpl]
  }
  }`
};