import { observable, action } from 'mobx';
import { UserApi } from '../../services/api/api';

class UserStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        username: '',
        password: '',
        role: '',
        age: 0,
        token: '',
    };

    @action setUsername(username: string): void {
        this.values.username = username;
    }

    @action setPassword(password: string): void {
        this.values.password = password;
    }

    @action setRole(role: string): void {
        this.values.role = role;
    }

    @action setAge(age: number): void {
        this.values.age = age;
    }

    @action setToken(token: string): void {
        this.values.token = token;
    }

    @action reset() {
        this.values.username = '';
        this.values.password = '';
        this.values.role = '';
        this.values.age = 0;
        this.values.token = '';
    }

    @action login() {
        this.inProgress = true;
        this.errors = undefined;
        const userApi = new UserApi();
        return userApi.login(this.values.username, this.values.password).then((response) => {
            this.values.password = '';
            this.values.role = response?.kind || '';
            this.values.token = '';
            this.values.age = 0;
        });
    }

    @action register() {
        this.inProgress = true;
        this.errors = undefined;
        return '';
    }

    @action logout() {
        // commonStore.setToken(undefined);
        // userStore.forgetUser();
        return Promise.resolve();
    }
}

export default new UserStore();
