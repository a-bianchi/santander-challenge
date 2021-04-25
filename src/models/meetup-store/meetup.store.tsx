import { Instance, types } from 'mobx-state-tree';

export const MeetupModel = types
    .model('Meetup')
    .props({
        id: types.maybe(types.string),
        userId: types.maybe(types.string),
        userIdAttend: types.maybe(types.string),
        title: types.maybe(types.string),
        date: types.maybe(types.string),
        temperature: types.maybe(types.number),
        beers: types.maybe(types.number),
        people: types.maybe(types.number),
        status: types.maybe(types.string),
    })
    .actions(() => ({})); // eslint-disable-line @typescript-eslint/no-unused-vars

type MeetupModelType = Instance<typeof MeetupModel>;
export type Meetup = MeetupModelType;
