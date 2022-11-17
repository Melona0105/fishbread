import { createContext, ReactNode, useContext } from "react";
import StoreAPIs from "src/data/apis/storeAPIs";
import StoreRepositoryImpl from "src/data/repositoryImpl/storeRepositoyImpl";
import StoreService from "src/domain/services/storeService";

const storeService = new StoreService(new StoreRepositoryImpl(new StoreAPIs()));

const ServiceContext = createContext({ storeService });

function ServiceProvider({ children }: { children: ReactNode }) {
  return (
    <ServiceContext.Provider value={{ storeService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServiceContext() {
  return useContext(ServiceContext);
}

export default ServiceProvider;
