import httpRequest from "~/utils/httpRequest";

const getAllNameOfGenre = async () => {
  return await httpRequest.get('/genre');
};



export const genreService = { getAllNameOfGenre };
