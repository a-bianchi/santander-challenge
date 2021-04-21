import * as Types from './user.types';
import { User } from './user.types';

export class UserApi {
    private users = [
        {
            id: '1',
            username: 'Admin',
            password: 'Admin',
            role: 'Admin',
            age: 21,
            token: 'asdasd-djskh234jh2lkj4h2l3j4',
        },
        {
            id: '2',
            username: 'User',
            password: 'User',
            role: 'User',
            age: 21,
            token: '456ftytr-asd234234zsfd9s8f9s87d',
        },
        {
            id: '3',
            username: 'User2',
            password: 'User2',
            role: 'User',
            age: 17,
            token: '123asdasd-eroiptupi46456u',
        },
    ];

    /**
     * Login.
     */
    async login(username: string, password: string): Promise<Types.GetUserResult> {
        // make the api call

        const user = this.users.filter((user) => user.username === username && user.password === password);

        const response = user[0]
            ? {
                  ok: true,
                  problem: null,
                  originalError: null,
                  data: user[0],
                  status: 200,
              }
            : {
                  ok: false,
                  problem: 'CLIENT_ERROR',
                  originalError: {
                      name: 'error',
                      code: '401',
                      config: { url: 'null' },
                      isAxiosError: true,
                      toJSON: {},
                  },
                  data: {
                      id: '',
                      username: '',
                      password: '',
                      role: 'User',
                      age: '',
                  },
                  status: 401,
              };

        // the typical ways to die when calling an api
        if (!response.ok) {
            return {
                kind: 'unauthorized',
            };
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const convert = (raw: any): User => {
            return {
                id: raw?.id,
                username: raw?.username,
                password: '',
                role: raw?.role,
                age: raw?.age,
                token: raw?.token,
            };
        };

        // transform the data into the format we are expecting
        try {
            return { kind: 'ok', user: convert(response.data) };
        } catch {
            return { kind: 'bad-data' };
        }
    }
}
