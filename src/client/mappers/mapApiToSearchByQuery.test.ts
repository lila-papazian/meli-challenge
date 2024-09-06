import { expect, test } from "vitest";
import { SearchResponseItem } from "../../types/apiResponses/SearchResponse";
import { SearchByQueryResults } from "../../types/endpointResponses/SearchByQueryResults";
import mapApiToSearchByQuery from "./mapApiToSearchByQuery";

test("mapApiToSearchByQuery with missing data", () => {
  const items: SearchResponseItem[] = [
    {
      id: "789",
      title: "Incomplete Item",
      price: 200,
      currency_id: "",
      condition: "",
      thumbnail: "",
      shipping: { free_shipping: false },
    },
  ];

  const response = mapApiToSearchByQuery(items);
  const expectedResponse: SearchByQueryResults = {
    author: { name: "Lila", lastName: "Papazian" },
    categories: [],
    items: [
      {
        id: "789",
        title: "Incomplete Item",
        price: { currency: "", amount: 200, decimals: 0 },
        picture: "",
        condition: "",
        freeShipping: false,
      },
    ],
  };

  expect(expectedResponse).toEqual(response);
});

test("mapApiToSearchByQuery with valid data", () => {
  const items: SearchResponseItem[] = [
    {
      id: "888",
      title: "Complete Item",
      price: 150,
      currency_id: "EUR",
      condition: "used",
      thumbnail:
        "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
      shipping: { free_shipping: true },
    },
  ];

  const response = mapApiToSearchByQuery(items);
  const expectedResponse: SearchByQueryResults = {
    author: { name: "Lila", lastName: "Papazian" },
    categories: [],
    items: [
      {
        id: "888",
        title: "Complete Item",
        price: { currency: "EUR", amount: 150, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
        condition: "used",
        freeShipping: true,
      },
    ],
  };

  expect(expectedResponse).toEqual(response);
});

test("mapApiToSearchByQuery with multiple items with different condition values", () => {
  const items: SearchResponseItem[] = [
    {
      id: "777",
      title: "Item 1",
      price: 80,
      currency_id: "EUR",
      condition: "new",
      thumbnail:
        "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
      shipping: { free_shipping: true },
    },
    {
      id: "888",
      title: "Item 2",
      price: 120,
      currency_id: "USD",
      condition: "used",
      thumbnail:
        "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
      shipping: { free_shipping: false },
    },
  ];

  const response = mapApiToSearchByQuery(items);
  const expectedResponse: SearchByQueryResults = {
    author: { name: "Lila", lastName: "Papazian" },
    categories: [],
    items: [
      {
        id: "777",
        title: "Item 1",
        price: { currency: "EUR", amount: 80, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
        condition: "new",
        freeShipping: true,
      },
      {
        id: "888",
        title: "Item 2",
        price: { currency: "USD", amount: 120, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg",
        condition: "used",
        freeShipping: false,
      },
    ],
  };

  expect(expectedResponse).toEqual(response);
});
