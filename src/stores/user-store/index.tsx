import { observable, action, computed, reaction } from 'mobx';
import { createContext } from 'react';
import { UserApi } from '../../services/api/api';

export interface User {
    id?: string;
    username: string;
    password: string;
    role: 'Admin' | 'User' | '';
    age: number;
    login: boolean;
}

class UserStore {
    constructor() {
        reaction(
            () => this.user,
            (_) => console.log(this.user ? this.user.username : undefined),
        );
    }

    @observable user: User;

    @action login = async (username: string, password: string) => {
        const user = new UserApi();
        const responseApi = await user.login(username, password);
        if (responseApi?.kind === 'ok') this.user = { login: true, ...responseApi.user };
    };

    @action logout = () => {
        this.user = {
            id: '',
            username: '',
            password: '',
            role: '',
            age: 0,
            login: false,
        };
    };

    @computed get info() {
        return {
            user: this.user,
        };
    }
}

export default createContext(new UserStore());
