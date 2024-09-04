import fetchData from "./utils";

async function fetchById(query: string) {
  const endpoint = "https://api.mercadolibre.com/items/" + query;
  const data = await fetchData(endpoint);
  return data ? data.results : [];
}

export default fetchById;
