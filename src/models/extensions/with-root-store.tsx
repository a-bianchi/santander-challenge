import { getRoot, IStateTreeNode } from 'mobx-state-tree';
import { RootStoreModel } from '../root-store/root-store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withRootStore = (self: IStateTreeNode) => ({
    views: {
        /**
         * The root store.
         */
        get rootStore() {
            return getRoot<typeof RootStoreModel>(self);
        },
    },
});
