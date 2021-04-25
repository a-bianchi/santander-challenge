import { Instance, types, flow } from 'mobx-state-tree';
import { MeetupModel } from '../meetup-store/meetup.store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const mock = [
//     {
//         id: '1',
//         userId: '1',
//         usersIdAttend: '2',
//         title: 'Meetup Segundo Piso',
//         date: '2021-04-25',
//         temperature: 23,
//         beers: 23,
//         people: 23,
//         status: 'canceled',
//     },
//     {
//         id: '2',
//         userId: '1',
//         usersIdAttend: '2',
//         title: 'Meetup Frontend',
//         date: '2021-04-25',
//         temperature: 23,
//         beers: 23,
//         people: 23,
//         status: 'confirmed',
//     },
// ];

export const MeetupsModel = types
    .model('Meetups')
    .props({
        meetups: types.optional(types.array(MeetupModel), []),
    })
    .actions((self) => ({
        getMeetups: flow(function* () {
            try {
                console.log(self);
                //if (mock) self.meetups = mock;
            } catch (error) {
                console.log('Error: ', error);
            }
        }),
    })); // eslint-disable-line @typescript-eslint/no-unused-vars

type MeetupsModelType = Instance<typeof MeetupsModel>;
export type Meetups = MeetupsModelType;
