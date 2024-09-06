import { SearchResponseItem } from "../../types/apiResponses/SearchResponse";
import { fetchData } from "../utils";

const fetchByQuery = async (
  query: string,
  limit?: number
): Promise<SearchResponseItem[]> => {
  const resultsLimit = limit ? limit : 4;
  const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${resultsLimit}`;
  const data = await fetchData(endpoint);
  return data ? data.results : [];
};

export default fetchByQuery;
