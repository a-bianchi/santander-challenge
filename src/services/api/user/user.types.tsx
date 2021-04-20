import { GeneralApiProblem } from '../api.problem';

export interface User {
    id: string;
    username: string;
    password: string;
    role: 'Admin' | 'User';
    age: number;
}

export type GetUserResult = { kind: 'ok'; user: User | {} } | GeneralApiProblem;
