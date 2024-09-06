import fetchByQuery from "../api/fetchByQuery";
import mapApiToSearchByQuery from "../mappers/mapApiToSearchByQuery";

const searchByQuery = async (query: string, limit?: number) => {
  const apiResponse = await fetchByQuery(query, limit);
  return mapApiToSearchByQuery(apiResponse);
};

export default searchByQuery;
