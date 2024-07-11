import { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import { ApiConfig, ApiHooks, ApiProviderContext } from './types/api';

export const ApiContext = createContext<Partial<ApiProviderContext>>({});

interface ApiProvidersProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

export const ApiProvider: FC<ApiProvidersProps> = ({
  children,
  config,
  hooks,
}) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks,
    };
  }, [config.fetch]);

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext) as ApiProviderContext;
};
