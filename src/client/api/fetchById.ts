import { ItemResponse } from "../../types/apiResponses/ItemResponse";
import { fetchData } from "../utils";

const fetchById = async (id: string): Promise<ItemResponse> => {
  const endpoint = "https://api.mercadolibre.com/items/" + id;
  return await fetchData(endpoint);
};

export default fetchById;
