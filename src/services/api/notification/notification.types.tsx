import { GeneralApiProblem } from '../api.problem';

export interface notification {
    id: number;
    userId: string;
    message: string;
    date: string;
}

export type GetNotificationResult = { kind: 'ok'; notifications: notification[] } | GeneralApiProblem;
