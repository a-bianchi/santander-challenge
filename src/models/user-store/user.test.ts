import { UserModel, User } from './user.store';

test('can be created', () => {
    const instance: User = UserModel.create({});

    expect(instance).toBeTruthy();
});

test('must be logout user', () => {
    const instance: User = UserModel.create({ username: 'test' });
    instance.logout();
    expect(instance.username).toEqual('');
});
