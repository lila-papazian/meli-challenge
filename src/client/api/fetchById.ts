import { ItemResponse } from "../../types/apiResponses/ItemResponse";
import { fetchData } from "../utils";

const fetchById = async (id: string): Promise<ItemResponse> => {
  const endpoint = "https://api.mercadolibre.com/items/:" + id;
  const data = await fetchData(endpoint);
  return data ? data.results : [];
};

export default fetchById;
