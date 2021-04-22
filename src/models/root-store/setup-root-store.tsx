import { RootStoreModel, RootStore } from './root-store';

/**
 * Setup the root state.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function setupRootStore() {
    let rootStore: RootStore;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;

    try {
        rootStore = RootStoreModel.create(data);
    } catch (e) {
        rootStore = RootStoreModel.create({});

        // but please inform us what happened
        console.log(e.message, null);
    }

    return rootStore;
}
