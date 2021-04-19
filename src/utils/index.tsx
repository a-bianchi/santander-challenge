const TOKEN_KEY = 'jwt';

export const login = (): void => {
  localStorage.setItem(TOKEN_KEY, 'TestLogin');
};

export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = (): boolean => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
