import { DescriptionResponse } from "../../types/apiResponses/DescriptionResponse";
import { ItemResponse } from "../../types/apiResponses/ItemResponse";
import { SearchByItemResults } from "../../types/endpointResponses/SearchByItemResults";
import { authorField } from "../utils";

const mapApiToSearchById = (
  item: ItemResponse,
  description: DescriptionResponse
): SearchByItemResults => {
  // implementation here
  return {
    author: authorField,
    categories: [],
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.initial_quantity,
      description: description.plain_text,
    },
  };
};

export default mapApiToSearchById;
