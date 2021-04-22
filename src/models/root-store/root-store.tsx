import { UserModel } from '../user-store';

import { Instance, types } from 'mobx-state-tree';

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>;
