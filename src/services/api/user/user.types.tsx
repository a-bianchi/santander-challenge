import { GeneralApiProblem } from '../api.problem';

export interface User {
    id: string;
    username: string;
    password: string;
    role: 'Admin' | 'User';
    age: number;
    token: string;
}

export interface Invite {
    status: string;
    message: string;
}

export type GetUserResult = { kind: 'ok'; user: User } | GeneralApiProblem;
export type InviteUserResult = { kind: 'ok'; invite: Invite } | GeneralApiProblem;
