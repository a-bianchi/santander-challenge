/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const keyRoot = 'root';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const save = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load = (key: string): any | null => {
    const almostThere = localStorage.getItem(key);
    return almostThere ? JSON.parse(almostThere) : null;
};

export const remove = (key: string): void => {
    localStorage.removeItem(key);
};

export const isLogin = (): boolean => {
    const user = load(keyRoot);
    if (user) {
        return user.username && user.role ? true : false;
    }
    return false;
};

export const isAdmin = (): boolean => {
    const user = load(keyRoot);
    if (user) {
        return user.role === 'Admin';
    }
    return false;
};
