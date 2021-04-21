import { GeneralApiProblem } from '../api.problem';
import { User } from '../user/user.types';

export interface Meetup {
    id: string;
    userId: string;
    name: string;
    date: Date;
    temperature: number;
    beersQuantity: number;
    UsersAttend: User[];
    status: boolean;
}

export type GetUserResult = { kind: 'ok'; meetups: Meetup[] | {} } | GeneralApiProblem;
