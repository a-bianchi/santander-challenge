import { GeneralApiProblem } from '../api.problem';

export interface Meetup {
    id?: string;
    userId: string;
    usersIdAttend?: string;
    title: string;
    date: string;
    temperature: number;
    beers: number;
    status: string;
}

export type GetMeetupsResult = { kind: 'ok'; meetups: Meetup[] } | GeneralApiProblem;
export type GetMeetupResult = { kind: 'ok'; meetup: Meetup } | GeneralApiProblem;
