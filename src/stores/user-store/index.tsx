// import { observable, action, computed, reaction } from 'mobx';
// import { createContext } from 'react';
// import uuidv4 from 'uuid';

// export interface User {
//     id?: string;
//     username: string;
//     password: string;
//     role: 'Admin' | 'User' | '';
//     age: number;
//     login: false;
// }

// class UserStore {
//     constructor() {
//         reaction(
//             () => this.user,
//             (_) => console.log(this.user ? this.user.username : undefined),
//         );
//     }

//     @observable user: User;

//     @action login = (username: string, password: string) => {
//         this.user = {};
//     };

//     @action logout = () => {
//         this.user = {
//             id: '',
//             username: '',
//             password: '',
//             role: '',
//             age: 0,
//             login: false,
//         };
//     };

//     @computed get info() {
//         return {
//             user: this.user,
//         };
//     }
// }

// export default createContext(new UserStore());

export const hola = () => 'hola';
