const TOKEN_KEY = 'jwt';

export const setToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = (): boolean => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
};

export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    } else {
        return false;
    }
};
