import * as Types from './meetup.types';

export class MeetupApi {
    private meetups = [
        {
            id: '1',
            userId: '1',
            usersIdAttend: '2',
            title: 'Meetup Segundo Piso',
            date: '2021-04-25',
            temperature: 23,
            beers: 23,
            people: 23,
            status: 'canceled',
        },
        {
            id: '2',
            userId: '1',
            usersIdAttend: '2',
            title: 'Meetup Frontend',
            date: '2021-04-25',
            temperature: 23,
            beers: 23,
            people: 23,
            status: 'confirmed',
        },
    ];

    /**
     * Update notifications.
     */
    async update(meetup: Types.Meetup): Promise<Types.GetMeetupResult> {
        // make the api call
        console.log('Patch - api/v1/meetup');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', meetup: meetup };
        } catch {
            return { kind: 'bad-data' };
        }
    }

    /**
     * Get notifications.
     */
    async getUserMeetup(userId: string): Promise<Types.GetMeetupsResult> {
        // make the api call
        const meetups = this.meetups.filter((metup) => metup.userId === userId);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', meetups: meetups };
        } catch {
            return { kind: 'bad-data' };
        }
    }

    async getUserAttendMeetup(userId: string): Promise<Types.GetMeetupsResult> {
        // make the api call
        const meetups = this.meetups.filter((metup) => metup.usersIdAttend === userId);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', meetups: meetups };
        } catch {
            return { kind: 'bad-data' };
        }
    }
}
