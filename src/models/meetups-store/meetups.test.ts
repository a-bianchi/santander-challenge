import { MeetupsModel, Meetups } from './meetups.store';

test('can be created', () => {
    const instance: Meetups = MeetupsModel.create({});

    expect(instance).toBeTruthy();
});
