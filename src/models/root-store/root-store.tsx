import { UserModel } from '../user-store/user.store';
import { MeetupsModel } from '../meetups-store/meetups.store';
import { MeetupModel } from '../meetup-store/meetup.store';

import { Instance, SnapshotOut, types } from 'mobx-state-tree';

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  userStore: types.optional(UserModel, {}),
  meetupStore: types.optional(MeetupModel, {}),
  meetupsStore: types.optional(MeetupsModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>;

/**
 * The data of a RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
