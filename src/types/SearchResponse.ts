export interface SearchResponseItem {
  id: string;
  title: string;
  condition: string;
  currency_id: string;
  price: number;
  shipping: Shipping;
}

interface Shipping {
  free_shipping: boolean;
}
