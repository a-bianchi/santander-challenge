/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { onSnapshot } from 'mobx-state-tree';
import { RootStoreModel, RootStore } from './root-store';
import * as storage from '../../utils/storage';

const ROOT_STATE_STORAGE_KEY = 'root';

export async function setupRootStore() {
    let rootStore: RootStore;
    let data: any;
    try {
        data = storage.load(ROOT_STATE_STORAGE_KEY) || {};
        rootStore = RootStoreModel.create(data);
    } catch (e) {
        rootStore = RootStoreModel.create({});
    }

    // track changes & save to storage
    onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot));

    return rootStore;
}
