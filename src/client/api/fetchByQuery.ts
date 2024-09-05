import { SearchResponseItem } from "../../types/apiResponses/SearchResponse";
import { fetchData } from "../utils";

const fetchByQuery = async (query: string): Promise<SearchResponseItem[]> => {
  const endpoint = "https://api.mercadolibre.com/sites/MLA/search";
  const data = await fetchData(endpoint, { q: query, limit: "4" });
  return data ? data.results : [];
};

export default fetchByQuery;
