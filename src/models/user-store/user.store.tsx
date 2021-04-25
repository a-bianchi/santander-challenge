import { Instance, types, flow } from 'mobx-state-tree';
import { GetUserResult } from '../../services/api/user/user.types';
import { UserApi } from '../../services/api/api';

export const UserModel = types
    .model('User')
    .props({
        id: types.maybe(types.string),
        username: types.maybe(types.string),
        password: types.maybe(types.string),
        role: types.maybe(types.string),
        age: types.maybe(types.number),
        token: types.maybe(types.string),
    })
    .actions((self) => ({
        login: flow(function* (username: string, password: string) {
            try {
                const user = new UserApi();
                const result: GetUserResult = yield user.login(username, password);
                if (result && result.kind === 'ok') {
                    self.id = result.user.id;
                    self.username = result.user.username;
                    self.password = result.user.password;
                    self.role = result.user.role;
                    self.token = result.user.token;
                    self.age = result.user.age;
                    return result.user;
                }
            } catch (error) {
                console.log('Error: ', error);
            }
        }),
        logout: () => {
            self.id = '';
            self.username = '';
            self.password = '';
            self.role = '';
            self.token = '';
            self.age = 0;
        },
    })); // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>;
export type User = UserType;
