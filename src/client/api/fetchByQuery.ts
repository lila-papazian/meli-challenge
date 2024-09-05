import { SearchResponseItem } from "../../types/apiResponses/SearchResponse";
import { fetchData } from "../utils";

const fetchByQuery = async (query: string): Promise<SearchResponseItem[]> => {
  const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
  const data = await fetchData(endpoint);
  return data ? data.results : [];
};

export default fetchByQuery;
