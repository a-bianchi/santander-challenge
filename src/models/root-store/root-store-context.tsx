import { createContext, useContext } from 'react';
import { RootStore } from './root-store';

const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStores = () => useContext(RootStoreContext);
