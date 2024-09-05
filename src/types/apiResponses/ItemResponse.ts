import { Shipping } from "./Shipping";

export interface ItemResponse {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  initial_quantity: number;
  condition: string;
  pictures: Picture[];
  shipping: Shipping;
}

interface Picture {
  url: "http://http2.mlstatic.com/D_840786-MLA46516504421_062021-O.jpg";
}
