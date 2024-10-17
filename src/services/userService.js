import httpRequest from "~/utils/httpRequest";

const getProfileByUserId = async (userId) => {
  return await httpRequest.get('/profile/' + userId)
};

const create = async (userId) => {
  return await httpRequest.post('/profile', { user_id: userId, gender: 'male' });
};

export const userService = { getProfileByUserId, create };
