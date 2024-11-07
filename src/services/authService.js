import httpRequest from "~/utils/httpRequest";

const signup = async (data) => {
  return await httpRequest.post('/auth/sigup', data);
};

const signin = async (data) => {
  return await httpRequest.post('/auth/signin', data);
};

const logout = async () => {
  return await httpRequest.post('/logout');
};

export const authService = { signup, signin, logout };
