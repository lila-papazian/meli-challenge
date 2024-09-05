import { expect, test } from "vitest";
import { ItemResponse } from "../../types/apiResponses/ItemResponse";
import { DescriptionResponse } from "../../types/apiResponses/DescriptionResponse";
import { CategoriesResponse } from "../../types/apiResponses/CategoriesResponse";
import mapApiToSearchById from "./mapApiToSearchById";
import { authorField } from "../utils";

test("mapApiToSearchById with valid inputs", () => {
  const item: ItemResponse = {
    id: "123",
    title: "Test Item",
    price: 100,
    currency_id: "ARS",
    initial_quantity: 10,
    condition: "new",
    pictures: [
      { url: "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg" },
    ],
    shipping: { free_shipping: true },
    category_id: "123",
  };
  const description: DescriptionResponse = {
    text: "This is a test item",
    plain_text: "This is a test item",
  };
  const categoriesResponse: CategoriesResponse = {
    id: "test 1",
    name: "Test Category",
    path_from_root: [{ id: "Category 1", name: "Test Category" }],
  };

  const response = mapApiToSearchById(item, description, categoriesResponse);

  const expectedResponse = {
    author: { name: "Lila", lastName: "Papazian" },
    categories: ["Test Category"],
    item: {
      id: "123",
      title: "Test Item",
      price: { currency: "ARS", amount: 100, decimals: 0 },
      picture: "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
      condition: "new",
      freeShipping: true,
      soldQuantity: 10,
      description: "This is a test item",
    },
  };

  expect(response).toEqual(expectedResponse);
  expect(response.author).toEqual(authorField);
});
