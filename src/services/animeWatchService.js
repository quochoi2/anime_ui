import httpRequest from "~/utils/httpRequest";

const getAnimeById = async (animeId, seasonId) => {
  return await httpRequest.get('/episode/' + animeId + '/' + seasonId);
};

const getAllEpisodeBySeason = async (animeId, seasonId) => {
  return await httpRequest.get('/episode/' + animeId + '/' + seasonId);
};

export const animeDetailService = { getAnimeById, getAllEpisodeBySeason };
