import { DescriptionResponse } from "../../types/apiResponses/DescriptionResponse";
import { ItemResponse } from "../../types/apiResponses/ItemResponse";
import { SearchByItemResults } from "../../types/endpointResponses/SearchByItemResults";
import { authorField } from "../utils";

const mapApiToSearchById = (
  item: ItemResponse,
  description: DescriptionResponse
): SearchByItemResults => {
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
      freeShipping: item.shipping.free_shipping,
      soldQuantity: item.initial_quantity,
      description: description.plain_text,
    },
  };
};

export default mapApiToSearchById;
