import httpRequest from "~/utils/httpRequest";

const getAnimeById = async (animeId, seasonId) => {
  return await httpRequest.get('/movie/' + animeId + '/' + seasonId);
};


export const animeDetailService = { getAnimeById };
