import httpRequest from "~/utils/httpRequest";

const getAllNameOfGenre = async () => {
  return await httpRequest.get('/genre');
};

const getAllMovieByGenreId = async (genreId, params = {}) => {
  const sortBy = params.sortBy || 'name';
  const sortOrder = params.sortOrder || 'asc';

  return await httpRequest.get(
    `/genre/${genreId}/getAllMovieByGenreId?sortBy=${sortBy}&sortOrder=${sortOrder}`
  );
};


export const genreService = { getAllNameOfGenre, getAllMovieByGenreId };
