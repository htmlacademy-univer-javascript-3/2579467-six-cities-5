const AUTH_TOKEN_NAME = 'six-cities-token';


export const getToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
};

export const saveToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};
