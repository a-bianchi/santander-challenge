import { MeetupModel, Meetup } from './meetup.store';

test('can be created', () => {
    const instance: Meetup = MeetupModel.create({});

    expect(instance).toBeTruthy();
});
