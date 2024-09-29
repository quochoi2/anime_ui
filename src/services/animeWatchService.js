import httpRequest from "~/utils/httpRequest";

const getAnimeById = async (episodeId) => {
  return await httpRequest.get('/episode/' + episodeId);
};

const getAllEpisodeBySeason = async (seasonId) => {
  return await httpRequest.get('/episode/' + seasonId + '/getAllBySeason');
};

export const animeWatchService = { getAnimeById, getAllEpisodeBySeason };
