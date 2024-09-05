import { SearchResponseItem } from "../../types/apiResponses/SearchResponse";
import { Item } from "../../types/endpointResponses/Item";
import { SearchByQueryResults } from "../../types/endpointResponses/SearchByQueryResults";
import { authorField } from "../utils";

const mapApiToSearchByQuery = (
  response: SearchResponseItem[]
): SearchByQueryResults => {
  return {
    author: authorField,
    categories: [],
    items: response.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      freeShipping: item.shipping.free_shipping,
    } as Item)),
  };
};

export default mapApiToSearchByQuery;
