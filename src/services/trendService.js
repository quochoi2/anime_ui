import httpRequest from "~/utils/httpRequest";

const getAllMovieAndTrend = async () => {
  return await httpRequest.get('/trend/getAll');
};

const getAllMovieByTrendId = async (trendId) => {
  return await httpRequest.put('/trend/' + trendId + '/getListMovieByTrendId');
};

export const trendService = { getAllMovieAndTrend, getAllMovieByTrendId };
