import fetchData from "./utils";

async function fetchByQuery(query: string) {
  const endpoint = "https://api.mercadolibre.com/sites/MLA/search";
  const data = await fetchData(endpoint, { q: query, limit: "5" });
  return data ? data.results : [];
}

export default fetchByQuery;
