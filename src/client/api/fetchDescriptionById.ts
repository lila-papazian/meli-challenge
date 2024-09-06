import { DescriptionResponse } from "../../types/apiResponses/DescriptionResponse";
import { fetchData } from "../utils";

const fetchDescriptionById = async (
  id: string
): Promise<DescriptionResponse> => {
  const endpoint = "https://api.mercadolibre.com/items/" + id + "/description";
  const data = fetchData(endpoint);
  return data;
};

export default fetchDescriptionById;
